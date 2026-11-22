/* Reel runtime. window.REEL = { dur, beats:[{say,scene,p,theme,tr,start,end,words:[{w,s,e}]}], words:[{w,s,e}], book, lesson, cover, sfx }
   Frames are a pure function of time: seek(t) positions everything, so a renderer can step through the clock. */
const W = 1080, H = 1920, LEAD = 0.12, TW = 0.42;
const clamp = (x, a = 0, b = 1) => (x < a ? a : x > b ? b : x);
const lerp = (a, b, k) => a + (b - a) * k;
const E = {
  lin: x => x,
  out2: x => 1 - (1 - x) * (1 - x),
  out3: x => 1 - Math.pow(1 - x, 3),
  out4: x => 1 - Math.pow(1 - x, 4),
  outExp: x => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x)),
  in3: x => x * x * x,
  inOut3: x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
  back: x => { const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); },
  spring: x => (x >= 1 ? 1 : 1 - Math.exp(-6.5 * x) * Math.cos(14 * x)),
};
const ramp = (t, t0, d, e = E.out3) => e(clamp((t - t0) / d));
const rnd = n => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };

const THEMES = {
  dark:  { bg: '#0B1524', bg2: '#17305A', fg: '#EAF0F7', accent: '#FFC233', onAccent: '#12233A', soft: 'rgba(255,255,255,.075)', line: 'rgba(255,255,255,.16)', muted: '#9FB0C6', alt: '#9AA5FF', onAlt: '#0B1524' },
  amber: { bg: '#FFC233', bg2: '#FFD97A', fg: '#12233A', accent: '#12233A', onAccent: '#FFC233', soft: 'rgba(18,35,58,.10)', line: 'rgba(18,35,58,.22)', muted: '#6B4E00', alt: '#5562C4', onAlt: '#FFFFFF' },
  light: { bg: '#F3F6F9', bg2: '#CFE0EE', fg: '#12233A', accent: '#C97F00', onAccent: '#FFFFFF', soft: 'rgba(18,35,58,.07)', line: 'rgba(18,35,58,.18)', muted: '#5C6B7E', alt: '#5562C4', onAlt: '#FFFFFF' },
};

function el(cls, css, html) {
  const d = document.createElement('div');
  if (cls) d.className = cls;
  if (css) Object.assign(d.style, css);
  if (html != null) d.innerHTML = html;
  return d;
}
function tf(e, o) {
  const { x = 0, y = 0, s = 1, sx = null, sy = null, r = 0, o: op = 1, blur = 0 } = o;
  e.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) rotate(${r.toFixed(2)}deg) scale(${(sx ?? s).toFixed(4)},${(sy ?? s).toFixed(4)})`;
  e.style.opacity = op < 0.001 ? 0 : op.toFixed(3);
  e.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : '';
}
function textW(box) { const r = document.createRange(); r.selectNodeContents(box); return r.getBoundingClientRect().width; }
function fit(box, maxW, maxH, start, min = 26) {      // shrink the font until the text is no wider than maxW and no taller than maxH
  let s = start; box.style.fontSize = s + 'px';
  for (let i = 0; i < 40 && s > min && (textW(box) > maxW || box.scrollHeight > maxH); i++) { s = Math.floor(s * 0.93); box.style.fontSize = s + 'px'; }
  return s;
}
const shakeAt = (lt, times, amp = 16) => { let sx = 0, sy = 0; for (const t0 of times) { const d = lt - t0; if (d > 0 && d < 0.6) { const k = Math.exp(-9 * d); sx += amp * k * Math.sin(70 * d); sy += amp * 0.7 * k * Math.cos(63 * d); } } return [sx, sy]; };

/* ---- scene backdrop: soft drifting blobs + dot grid, tinted by theme ---- */
function backdrop(th, seed) {
  const d = el('bgfx');
  d.style.background = `radial-gradient(ellipse 80% 55% at 50% 38%, ${th.bg2}, ${th.bg} 70%)`;
  const dots = el('', { position: 'absolute', inset: 0, opacity: 0.55, backgroundImage: `radial-gradient(${th.line} 2px, transparent 2.5px)`, backgroundSize: '64px 64px' });
  const b1 = el('', { position: 'absolute', width: '900px', height: '900px', borderRadius: '50%', left: '-200px', top: '-120px', background: `radial-gradient(circle, ${WHITE ? 'rgba(23,48,90,.07)' : th === THEMES.dark ? 'rgba(85,98,196,.35)' : 'rgba(255,255,255,.55)'}, transparent 65%)` });
  const b2 = el('', { position: 'absolute', width: '800px', height: '800px', borderRadius: '50%', right: '-260px', bottom: '120px', background: `radial-gradient(circle, ${WHITE ? 'rgba(242,169,0,.12)' : th === THEMES.dark ? 'rgba(255,194,51,.14)' : 'rgba(255,255,255,.4)'}, transparent 65%)` });
  d.append(dots, b2, b1);
  d.upd = lt => { dots.style.transform = `translate(${-(lt * 14) % 64}px,${-(lt * 22) % 64}px)`; b1.style.transform = `translate(${Math.sin(lt * .7 + seed) * 60}px,${Math.cos(lt * .5 + seed) * 50}px)`; b2.style.transform = `translate(${Math.cos(lt * .6 + seed) * 70}px,${Math.sin(lt * .8 + seed) * 40}px)`; };
  return d;
}

/* ---- looks: "white" puts every scene on white with navy + gold (the themes keep their rhythm through soft washes) ---- */
const WHITE = ((window.REEL || {}).look || 'white') === 'white';
if (WHITE) {
  const base = { bg: '#FFFFFF', fg: '#0B1F3A', accent: '#F2A900', onAccent: '#0B1F3A', soft: 'rgba(11,31,58,.055)', line: 'rgba(11,31,58,.14)', muted: '#5C6B7E', alt: '#17305A', onAlt: '#FFFFFF' };
  Object.assign(THEMES.dark, base, { bg2: '#EAF0F8' });
  Object.assign(THEMES.amber, base, { bg2: '#FFF1CC' });
  Object.assign(THEMES.light, base, { bg2: '#F4F6F9' });
}

/* ---- the scene registry; scenes.js fills it ---- */
const SCENES = {};

/* ---- build ---- */
const R = window.REEL;
const root = document.getElementById('scenes');
const beats = R.beats.map((b, i) => {
  const th = THEMES[b.theme] || THEMES.dark;
  const w = el('scene'); const cam = el('cam');
  if (!R.captions) { cam.style.top = '170px'; cam.style.bottom = '-170px'; cam.style.overflow = 'visible'; }   // no caption band: centre the picture in the frame
  const bg = backdrop(th, i * 1.7);
  w.append(bg, cam); root.append(w);
  let badge = null;
  if (b.num) {                               // list reels: big number + a 10-step progress bar, drawn over the scene
    badge = el('', { position: 'absolute', left: '0', top: '0', width: '1080px', height: '330px', pointerEvents: 'none' });
    const bar = Array.from({ length: 10 }, (_, k) => `<div style="flex:1;height:12px;border-radius:6px;background:${k < b.num ? '#F2A900' : (WHITE ? 'rgba(11,31,58,.12)' : 'rgba(255,255,255,.18)')};${k === b.num - 1 ? 'box-shadow:0 0 0 3px rgba(242,169,0,.25)' : ''}"></div>`).join('');
    badge.innerHTML = `<div style="position:absolute;left:90px;right:90px;top:120px;display:flex;gap:12px">${bar}</div>
      <div class="bn" style="position:absolute;left:90px;top:170px;display:flex;align-items:baseline;gap:14px"><span class="disp" style="font-size:150px;line-height:1;color:${WHITE ? '#0B1F3A' : '#fff'}">${b.num}</span><span class="mono" style="font-size:34px;color:#F2A900">/ 10</span></div>`;
    w.append(badge);
  }
  b.t0 = i === 0 ? 0 : b.start - LEAD;
  const nextStart = i + 1 < R.beats.length ? R.beats[i + 1].start - LEAD : R.dur;
  b.dur = Math.max(0.6, nextStart - b.t0);
  return { b, w, cam, bg, th, badge, inst: null, events: [] };
});
function wordTime(b, text) {              // time (relative to the beat's clock) a given spoken word starts
  if (!text) return null;
  const k = String(text).toLowerCase().replace(/[^a-z0-9%]/g, '');
  const hit = b.words.find(x => x.w.toLowerCase().replace(/[^a-z0-9%]/g, '') === k) || b.words.find(x => x.w.toLowerCase().replace(/[^a-z0-9%]/g, '').startsWith(k) && k.length > 2);
  return hit ? hit.s - b.t0 : null;
}
function buildAll() {
  beats.forEach((o, i) => {
    o.w.style.display = 'block';
    const ctx = { th: o.th, dur: o.b.dur, words: o.b.words.map(x => ({ ...x, s: x.s - o.b.t0, e: x.e - o.b.t0 })), wt: t => wordTime(o.b, t), i, last: i === beats.length - 1, R, events: o.events };
    const fn = SCENES[o.b.scene] || SCENES.slam;
    o.inst = fn(o.cam, o.b.p || {}, ctx);
    o.w.style.display = 'none';
  });
}

/* ---- captions ---- */
const capsEl = document.getElementById('caps');
const groups = [];
(function mkGroups() {
  let cur = [];
  const flush = () => { if (cur.length) { groups.push(cur); cur = []; } };
  const quiet = new Set();   // the intro shows the hook as a headline, so no captions underneath it
  (R.beats || []).forEach(b => { if (b.scene === 'intro') (b.words || []).forEach(w => quiet.add(w.s)); });
  R.words.forEach((w, i) => {
    if (quiet.has(w.s)) { flush(); return; }
    cur.push(w);
    const chars = cur.map(x => x.w).join(' ').length;
    const end = /[.!?]$/.test(w.w) || /[,;:—-]$/.test(w.w) || cur.length >= 3 || chars >= 17;
    const nxt = R.words[i + 1];
    if (end || (nxt && nxt.s - w.e > 0.45)) flush();
  });
  flush();
})();
let capIdx = -2, capNodes = [];
function updCaps(t) {
  if (!R.captions) return;                 // captions are off by default: the graphics carry the words
  let gi = -1;
  for (let i = 0; i < groups.length; i++) { const g = groups[i]; const nextS = i + 1 < groups.length ? groups[i + 1][0].s : 1e9; if (t >= g[0].s - 0.02 && t < Math.min(g[g.length - 1].e + 0.35, nextS)) { gi = i; break; } }
  if (gi !== capIdx) {
    capIdx = gi; capsEl.innerHTML = ''; capNodes = [];
    if (gi >= 0) {
      const g = el('g'); const txt = groups[gi].map(x => x.w).join(' ');
      groups[gi].forEach(x => { const s = document.createElement('span'); s.className = 'cw'; s.textContent = x.w.replace(/[—]/g, '-'); g.append(s); capNodes.push(s); });
      g.style.fontSize = (txt.length > 20 ? 78 : txt.length > 13 ? 92 : 108) + 'px';
      capsEl.append(g);
      let s = parseFloat(g.style.fontSize); for (let k = 0; k < 20 && g.scrollWidth > 940 && s > 44; k++) { s = Math.floor(s * .93); g.style.fontSize = s + 'px'; }
    }
  }
  if (gi >= 0) {
    const g = groups[gi], gp = ramp(t, g[0].s - 0.02, 0.16, E.back);
    capsEl.firstChild.style.transform = `translateY(${(1 - gp) * 26}px) scale(${.82 + .18 * gp})`; capsEl.firstChild.style.opacity = clamp(gp * 1.4);
    g.forEach((x, k) => {
      const n = capNodes[k], on = t >= x.s, pop = ramp(t, x.s, 0.2, E.back);
      const active = on && t < (g[k + 1] ? g[k + 1].s : x.e + 0.3);
      if (WHITE) { n.style.color = '#0B1F3A'; n.style.background = active ? '#F2A900' : 'transparent'; n.style.opacity = on ? 1 : 0.35; } else { n.style.color = active ? '#FFC233' : '#fff'; n.style.opacity = on ? 1 : 0.5; }
      n.style.transform = `scale(${active ? 1 + 0.07 * pop : 1})`;
    });
  }
}

/* ---- transitions ---- */
const flashEl = document.getElementById('flash'), leakEl = document.getElementById('leak');
function clearStyle(w) { w.style.transform = ''; w.style.opacity = 1; w.style.filter = ''; w.style.clipPath = ''; w.style.zIndex = 0; }
function applyTransition(type, k, A, B, frame) {
  const e = E.inOut3(k), bl = Math.sin(Math.PI * k) * 26;
  B.style.zIndex = 2; A.style.zIndex = 1;
  const slide = (dx, dy, blur) => {
    A.style.transform = `translate3d(${(-dx * e).toFixed(1)}px,${(-dy * e).toFixed(1)}px,0)`; B.style.transform = `translate3d(${(dx * (1 - e)).toFixed(1)}px,${(dy * (1 - e)).toFixed(1)}px,0)`;
    if (blur) { A.style.filter = B.style.filter = `blur(${bl.toFixed(1)}px)`; }
  };
  switch (type) {
    case 'whip_left': slide(W * 1.04, 0, true); break;
    case 'whip_right': slide(-W * 1.04, 0, true); break;
    case 'whip_up': slide(0, H * 1.04, true); break;
    case 'push_up': slide(0, H * 0.7, false); break;
    case 'zoom_through':
      A.style.transform = `scale(${1 + e * 1.9})`; A.style.opacity = 1 - E.in3(k); A.style.filter = `blur(${(e * 22).toFixed(1)}px)`;
      B.style.transform = `scale(${0.55 + 0.45 * e})`; B.style.opacity = E.out2(k); B.style.filter = `blur(${((1 - e) * 16).toFixed(1)}px)`; break;
    case 'circle': { const r = e * 1560; B.style.clipPath = `circle(${r.toFixed(0)}px at 50% 46%)`; A.style.transform = `scale(${1 - e * 0.06})`; break; }
    case 'wipe_diag': { const x = -760 + e * (W + 760); B.style.clipPath = `polygon(0 0,${(x + 760).toFixed(0)}px 0,${x.toFixed(0)}px ${H}px,0 ${H}px)`; break; }
    case 'glitch': {
      const bands = 9, bh = H / bands; let d = '';
      for (let j = 0; j < bands; j++) { if (rnd(j * 3.1 + frame * 0.37) < k * 1.15) d += `M0 ${(j * bh).toFixed(0)}H${W}V${((j + 1) * bh).toFixed(0)}H0Z`; }
      B.style.clipPath = d ? `path('${d}')` : 'inset(100% 0 0 0)';
      const j1 = (rnd(frame * 1.7) - 0.5) * 70 * Math.sin(Math.PI * k);
      B.style.transform = `translate3d(${j1.toFixed(1)}px,0,0)`; A.style.transform = `translate3d(${(-j1 * .6).toFixed(1)}px,0,0)`;
      B.style.filter = `saturate(${1 + 1.4 * Math.sin(Math.PI * k)}) hue-rotate(${(rnd(frame) * 50 - 25).toFixed(0)}deg)`; break; }
    case 'flip': {
      root.style.perspective = '2600px';
      if (k < 0.5) { A.style.transform = `rotateY(${(E.in3(k * 2) * 90).toFixed(1)}deg)`; B.style.display = 'none'; }
      else { A.style.display = 'none'; B.style.transform = `rotateY(${(-(1 - E.out3((k - .5) * 2)) * 90).toFixed(1)}deg)`; }
      break; }
    case 'scale_back':
      A.style.transform = `scale(${1 - e * 0.2})`; A.style.opacity = 1 - e * 0.55; B.style.transform = `translate3d(0,${((1 - e) * H * 0.95).toFixed(0)}px,0)`; break;
    case 'cut': default:
      if (k < 0.5) B.style.display = 'none'; else A.style.display = 'none';
      flashEl.style.opacity = (k < 0.5 ? k * 2 : 2 - 2 * k) * 0.85; return;
  }
  leakEl.style.opacity = Math.sin(Math.PI * k) * 0.5;
}

/* ---- the clock ---- */
const grain = document.getElementById('grain');
(function mkGrain() {
  const c = document.createElement('canvas'); c.width = c.height = 220; const g = c.getContext('2d'); const im = g.createImageData(220, 220);
  for (let i = 0; i < im.data.length; i += 4) { const v = rnd(i * 0.013) * 255; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 255; }
  g.putImageData(im, 0, 0); grain.style.backgroundImage = `url(${c.toDataURL()})`;
})();
let lastShown = [];
window.seek = function (t, frame = 0) {
  t = clamp(t, 0, R.dur - 0.001);
  let i = 0; for (let k = 0; k < beats.length; k++) if (t >= beats[k].b.t0) i = k;
  const cur = beats[i], prev = i > 0 ? beats[i - 1] : null;
  const k = prev ? clamp((t - cur.b.t0) / TW) : 1;
  const trans = prev && k < 1;
  const show = trans ? [prev, cur] : [cur];
  lastShown.forEach(o => { if (!show.includes(o)) o.w.style.display = 'none'; });
  show.forEach(o => { o.w.style.display = 'block'; clearStyle(o.w); const lt = t - o.b.t0; o.bg.upd(lt); o.inst.update(lt, o); });
  lastShown = show;
  flashEl.style.opacity = 0; leakEl.style.opacity = 0; root.style.perspective = '2600px';
  if (trans) applyTransition(cur.b.tr || 'whip_left', k, prev.w, cur.w, frame);
  updCaps(t);
  grain.style.transform = `translate(${(rnd(frame * 1.3) * 60 - 30).toFixed(0)}px,${(rnd(frame * 2.1) * 60 - 30).toFixed(0)}px)`;
};
window.sfxEvents = () => {
  const out = [];
  beats.forEach((o, i) => { if (i > 0) out.push({ t: Math.max(0, o.b.t0 - 0.02), kind: 'whoosh', tr: o.b.tr }); (o.events || []).forEach(e => out.push({ t: o.b.t0 + e.at, kind: e.kind, v: e.v })); });
  return out.sort((a, b) => a.t - b.t);
};
window.startReel = async () => {
  if (WHITE) document.body.classList.add('look-white');
  await Promise.all(['800 100px "Bricolage Grotesque"', '500 40px "Bricolage Grotesque"', '600 40px "Instrument Sans"', '500 30px "DM Mono"'].map(f => document.fonts.load(f)));
  await document.fonts.ready;
  buildAll();
  const tg = document.getElementById('tag'); tg.textContent = `${R.book} · ${R.lesson === 'top10' ? '10 things' : 'lesson ' + R.lesson} · visualgrowth.app`;
  if (tg.scrollWidth > 960 || tg.textContent.length > 48) tg.textContent = `${R.book.length > 26 ? R.book.slice(0, 25).trim() + '…' : R.book} · visualgrowth.app`;
  window.seek(0, 0);
  return true;
};
