/* Carousel stage: builds every slide of window.CAROUSEL into #deck. Static: what you see is the final frame. */
const C = { navy: '#0B1F3A', navy2: '#17305A', gold: '#F2A900', gold2: '#FFD25E', wash: '#FFF4D6', blue: '#EAF0F8', muted: '#5C6B7E', line: 'rgba(11,31,58,.14)', soft: 'rgba(11,31,58,.06)' };
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const mark = s => esc(s).replace(/\*([^*]+)\*/g, '<span class="hl">$1</span>');   // *word* -> gold highlighter
const h = (cls, css, html) => { const d = document.createElement('div'); if (cls) d.className = cls; if (css) Object.assign(d.style, css); if (html != null) d.innerHTML = html; return d; };
const svg = (w, hh, inner, css) => { const d = h('abs', Object.assign({ left: 0, top: 0, width: w + 'px', height: hh + 'px' }, css || {})); d.innerHTML = `<svg width="${w}" height="${hh}" viewBox="0 0 ${w} ${hh}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`; return d; };
const num = (v, suf) => (Math.round(v * 10) / 10).toLocaleString('en-GB') + (suf || '');
function textW(e) { const r = document.createRange(); r.selectNodeContents(e); return r.getBoundingClientRect().width; }
function fit(e, maxH, max, min) {      // shrink font until the block fits its height
  let f = max; e.style.fontSize = f + 'px';
  while (f > min && e.scrollHeight > maxH + 2) { f -= 2; e.style.fontSize = f + 'px'; }
  return f;
}

/* ------------------------------------------------------------ chrome shared by every slide */
function frame(s, i, n, D) {
  const el = h('slide'); el.id = 's' + (i + 1);
  const wash = [C.blue, C.wash, '#F4F6F9'][i % 3];
  const bg = h('bg'); bg.append(h('dots'));
  bg.append(h('b1', { width: '900px', height: '900px', left: '-260px', top: '-260px', background: `radial-gradient(circle, ${wash}, rgba(255,255,255,0) 65%)` }));
  bg.append(h('b2', { width: '760px', height: '760px', right: '-260px', bottom: '-200px', background: `radial-gradient(circle, ${i % 2 ? C.blue : C.wash}, rgba(255,255,255,0) 65%)` }));
  el.append(bg);
  el.append(h('top mono', null, `<span><b>${esc(D.book)}</b> · lesson ${D.lesson}</span><span>${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}</span>`));
  const last = i === n - 1;
  el.append(h('foot mono', null, `<span>visualgrowth.app</span>${last ? '<span class="sw">save · share</span>' : '<span class="sw">swipe <i>→</i></span>'}`));
  el.append(h('prog', null, `<s style="width:${((i + 1) / n * 100).toFixed(1)}%"></s>`));
  return el;
}
function headline(el, s, top, size, maxH) {
  const hd = h('head disp', { top: (top || 150) + 'px' }, mark(s.head || ''));
  el.append(hd); fit(hd, maxH || 260, size || 80, 50);
  let y = (top || 150) + hd.offsetHeight + 26;
  if (s.body) { const b = h('body', { top: y + 'px' }, mark(s.body)); el.append(b); fit(b, 150, 36, 28); y += b.offsetHeight; }
  return y;
}
const centre = (y0, hgt) => Math.round(y0 + Math.max(40, (1215 - y0 - hgt) / 2));
function note(el, s, y) { if (s.note) el.append(h('note mono', { top: (y || 1175) + 'px' }, esc(s.note))); }

/* ------------------------------------------------------------ slide types */
const SLIDES = {};

SLIDES.cover = (el, s, D) => {
  const card = h('card', { left: '170px', top: '150px', width: '740px', height: '592px', transform: 'rotate(-3deg)' });
  const img = document.createElement('img'); img.src = D.cover || ''; card.append(img);
  let rays = ''; for (let j = 0; j < 22; j++) { const a = j * Math.PI * 2 / 22; rays += `<path d="M540 450 L${540 + Math.cos(a - .05) * 1300} ${450 + Math.sin(a - .05) * 1300} L${540 + Math.cos(a + .05) * 1300} ${450 + Math.sin(a + .05) * 1300}Z" fill="${C.navy}" opacity="${0.018 + (j % 3) * 0.01}"/>`; }
  el.append(svg(1080, 1350, `<defs><radialGradient id="g"><stop offset="0" stop-color="${C.gold2}" stop-opacity=".55"/><stop offset="1" stop-color="${C.gold2}" stop-opacity="0"/></radialGradient></defs>${rays}<circle cx="540" cy="450" r="520" fill="url(#g)"/>`));
  el.append(card);
  const kick = h('abs mono', { left: 0, width: '1080px', top: '800px', textAlign: 'center', fontSize: '26px', color: C.gold, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }, `<span style="width:50px;height:3px;background:${C.gold}"></span>A lesson from ${esc(D.book)}${D.author ? ' · ' + esc(D.author) : ''}<span style="width:50px;height:3px;background:${C.gold}"></span>`);
  const hd = h('abs disp', { left: '70px', width: '940px', top: '856px', textAlign: 'center', fontSize: '96px' }, mark(s.head || ''));
  el.append(kick, hd); fit(hd, 300, 96, 56);
};

SLIDES.chart = (el, s) => {
  const y0 = headline(el, s), T = Math.max(y0 + 90, 520), B = 1080, L = 110, R = 970, W = R - L, Ht = B - T;
  let g = '';
  for (let k = 1; k <= 3; k++) g += `<line x1="${L}" x2="${R}" y1="${T + Ht * k / 4}" y2="${T + Ht * k / 4}" stroke="${C.line}" stroke-width="2" stroke-dasharray="4 12"/>`;
  g += `<line x1="${L}" x2="${R}" y1="${B}" y2="${B}" stroke="${C.line}" stroke-width="5"/>`;
  if (s.kind === 'line' && (s.points || []).length >= 2) {
    const pts = s.points, n = pts.length, lo = Math.min(0, ...pts), hi = Math.max(...pts) || 1;
    const P = i => [L + W * i / (n - 1), B - (pts[i] - lo) / (hi - lo) * (Ht - 70)];
    let d = ''; for (let i = 0; i < n; i++) { const [x, y] = P(i); if (!i) d = `M${x} ${y}`; else { const [px, py] = P(i - 1), mx = (px + x) / 2; d += ` C${mx} ${py} ${mx} ${y} ${x} ${y}`; } }
    g += `<defs><linearGradient id="ar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.gold}" stop-opacity=".35"/><stop offset="1" stop-color="${C.gold}" stop-opacity="0"/></linearGradient></defs>`;
    g += `<path d="${d} L${R} ${B} L${L} ${B}Z" fill="url(#ar)"/><path d="${d}" fill="none" stroke="${C.gold}" stroke-width="12" stroke-linecap="round"/>`;
    pts.forEach((v, i) => { const [x, y] = P(i); g += `<circle cx="${x}" cy="${y}" r="14" fill="#fff" stroke="${C.gold}" stroke-width="7"/>`; });
    (s.labels || []).forEach((t, i) => { if (t) { const [x, y] = P(i); g += `<text x="${x}" y="${B + 44}" text-anchor="middle" font-family="DM Mono" font-size="24" letter-spacing="3" fill="${C.muted}">${esc(t)}</text><line x1="${x}" x2="${x}" y1="${y + 22}" y2="${B}" stroke="${C.navy}" stroke-width="3" stroke-dasharray="3 9" opacity=".5"/>`; } });
    el.append(svg(1080, 1350, g));
    if (s.end_label) { const [ex, ey] = P(n - 1); el.append(h('abs disp', { right: '100px', top: Math.max(T - 110, ey - 130) + 'px', fontSize: '84px', color: C.gold }, esc(s.end_label))); }
  } else {      // compound: one curve climbs, the other sinks
    const N = 60; let up = '', dn = '';
    for (let i = 0; i <= N; i++) { const x = L + W * i / N, t = i / N; up += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + (B - 120 - (Math.pow(t, 2.6)) * (Ht - 200)).toFixed(1) + ' '; dn += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + (B - 120 + (1 - Math.pow(1 - t, 2)) * 90).toFixed(1) + ' '; }
    g += `<line x1="${L}" x2="${R}" y1="${B - 120}" y2="${B - 120}" stroke="${C.navy}" stroke-width="3" stroke-dasharray="6 10" opacity=".35"/>`;
    g += `<path d="${up}" fill="none" stroke="${C.gold}" stroke-width="14" stroke-linecap="round"/><path d="${dn}" fill="none" stroke="${C.navy}" stroke-width="14" stroke-linecap="round"/>`;
    g += `<circle cx="${R}" cy="${B - 120 - (Ht - 200)}" r="16" fill="${C.gold}"/><circle cx="${R}" cy="${B - 30}" r="16" fill="${C.navy}"/>`;
    el.append(svg(1080, 1350, g));
    el.append(h('abs mono', { left: L + 'px', top: T + 'px', fontSize: '26px', color: C.gold }, esc(s.up_label || '')));
    el.append(h('abs mono', { left: L + 'px', top: B + 24 + 'px', fontSize: '26px', color: C.navy }, esc(s.down_label || '')));
    el.append(h('abs disp', { right: '150px', top: T - 20 + 'px', fontSize: '88px', color: C.gold }, esc(s.up_end || '')));
    el.append(h('abs disp', { right: '110px', top: B + 10 + 'px', fontSize: '64px', color: C.navy }, esc(s.down_end || '')));
  }
  note(el, s, 1222);
};

SLIDES.dots = (el, s) => {
  const y0 = headline(el, s), total = [10, 20, 50, 100].includes(+s.total) ? +s.total : 10, hl = Math.min(total, +s.hl || 0);
  const cols = total <= 20 ? 5 : 10, rows = Math.ceil(total / cols), bigH = s.big ? 120 : 0, cell = Math.min(860 / cols, (1190 - y0 - bigH - 60) / rows, 190), top = centre(y0 + bigH, rows * cell) + 10, gx = 540 - cols * cell / 2;
  let g = '';
  for (let i = 0; i < total; i++) {
    const c = i % cols, r = Math.floor(i / cols), x = gx + (c + .5) * cell, y = top + (r + .5) * cell, sz = cell * .86, on = i < hl;
    g += `<g fill="${on ? C.gold : 'rgba(11,31,58,.14)'}"><circle cx="${x}" cy="${y - sz * .2}" r="${sz * .17}"/><path d="M${x - sz * .28} ${y + sz * .36}a${sz * .28} ${sz * .3} 0 0 1 ${sz * .56} 0z"/></g>`;
  }
  el.append(svg(1080, 1350, g));
  if (s.big) el.append(h('abs disp', { left: 0, width: '1080px', textAlign: 'center', top: top - 130 + 'px', fontSize: '96px', color: C.gold }, esc(s.big)));
  note(el, s, 1222);
};

SLIDES.donut = (el, s) => {
  headline(el, s);
  const segs = s.segments || [], tot = segs.reduce((a, g) => a + (+g.value || 0), 0) || 1, cols = [C.gold, C.navy, C.navy2, C.muted];
  const CX = 330, CY = 830, Rr = 190, Cc = 2 * Math.PI * Rr;
  let acc = 0, g = `<circle cx="${CX}" cy="${CY}" r="${Rr}" fill="none" stroke="${C.soft}" stroke-width="96"/>`;
  segs.forEach((sg, i) => { const f = (+sg.value || 0) / tot; g += `<circle cx="${CX}" cy="${CY}" r="${Rr}" fill="none" stroke="${cols[i]}" stroke-width="96" stroke-dasharray="${Math.max(0, f * Cc - 6)} ${Cc}" transform="rotate(${-90 + acc * 360} ${CX} ${CY})"/>`; acc += f; });
  el.append(svg(1080, 1350, g));
  if (s.center) el.append(h('abs disp', { left: CX - 130 + 'px', top: CY - 40 + 'px', width: '260px', textAlign: 'center', fontSize: '64px' }, esc(s.center)));
  const leg = h('abs', { left: '600px', top: CY - 120 + 'px', width: '400px', display: 'flex', flexDirection: 'column', gap: '34px' });
  segs.forEach((sg, i) => leg.append(h('', { display: 'flex', flexDirection: 'column', gap: '6px' }, `<span class="disp" style="font-size:76px;color:${i ? C.navy : C.gold}">${num(+sg.value || 0, s.suffix)}</span><span style="display:flex;gap:14px;align-items:center;font-size:32px"><i style="width:26px;height:26px;border-radius:8px;background:${cols[i]}"></i>${esc(sg.label)}</span>`)));
  el.append(leg);
  note(el, s, 1222);
};

SLIDES.meter = (el, s) => {
  const y0 = headline(el, s), rows = s.rows || [], mx = +s.max || Math.max(1, ...rows.map(r => +r.value || 0)), gap = Math.min(270, 640 / Math.max(1, rows.length)), top = centre(y0, rows.length * gap - (gap - 170));
  rows.forEach((r, i) => {
    const y = top + i * gap, k = Math.max(0.02, (+r.value || 0) / mx), on = !!r.hl;
    el.append(h('abs', { left: '80px', top: y + 'px', fontSize: '40px', width: '650px' }, esc(r.label)));
    el.append(h('abs disp', { right: '80px', top: y - 18 + 'px', fontSize: '72px', color: on ? C.gold : C.navy }, num(+r.value || 0, s.suffix)));
    el.append(h('abs', { left: '80px', top: y + 74 + 'px', width: '920px', height: '96px', borderRadius: '48px', background: C.soft, border: `2px solid ${C.line}`, overflow: 'hidden' }, `<div style="height:100%;width:${(k * 100).toFixed(1)}%;border-radius:48px;background:${on ? C.gold : C.navy}"></div>`));
  });
  note(el, s, 1222);
};

SLIDES.formula = (el, s) => {
  const y0 = headline(el, s), parts = s.parts || [], ops = s.ops || [], top = Math.max(y0 + 80, 470);
  const col = h('abs', { left: '120px', width: '840px', top: top + 'px', display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '0' });
  parts.forEach((p, i) => {
    if (i) col.append(h('disp', { textAlign: 'center', fontSize: '84px', color: C.gold, lineHeight: '1.1' }, esc(ops[i - 1] || '×')));
    const on = i === 0;
    col.append(h('row', { background: on ? C.navy : '#fff', color: on ? '#fff' : C.navy, borderColor: on ? C.navy : C.line }, `<div class="ic" style="background:${on ? C.gold : C.wash};color:${C.navy}">${iconSVG(p.icon || 'star', 58, 7)}</div><div class="disp" style="font-size:58px">${esc(p.t)}</div>`));
  });
  el.append(col); col.style.top = centre(y0, col.offsetHeight) + 'px';
};

SLIDES.versus = (el, s) => {
  const y0 = headline(el, s), top = centre(y0, 660), L = s.left || {}, Rr = s.right || {}, win = s.win || 'left';
  const mk = (o, y, bg, fg, ic, faded) => el.append(h('row', { position: 'absolute', left: '80px', width: '920px', top: y + 'px', height: '300px', background: bg, color: fg, borderColor: bg, opacity: faded ? .92 : 1 },
    `<div style="flex:none;color:${fg === '#fff' ? C.gold : C.navy}">${iconSVG(o.icon || ic, 130, 5)}</div><div style="display:flex;flex-direction:column;gap:12px"><div class="disp" style="font-size:76px">${esc(o.t)}</div><div style="font-size:36px;opacity:.85">${esc(o.sub)}</div></div>`));
  mk(L, top, win === 'left' ? C.navy : C.wash, win === 'left' ? '#fff' : C.navy, 'check');
  mk(Rr, top + 360, win === 'left' ? C.wash : C.navy, win === 'left' ? C.navy : '#fff', 'cross');
  el.append(h('abs disp', { left: '470px', top: top + 255 + 'px', width: '140px', height: '140px', borderRadius: '50%', background: C.gold, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '56px', boxShadow: '0 0 0 12px #fff' }, 'VS'));
};

SLIDES.steps = (el, s) => {
  const y0 = headline(el, s), items = s.items || [], gap = Math.min(250, 660 / Math.max(1, items.length)), top = centre(y0, (items.length - 1) * gap + 110);
  el.append(h('abs', { left: '139px', top: top + 40 + 'px', width: '6px', height: (items.length - 1) * gap + 'px', background: `linear-gradient(${C.gold}, ${C.gold2})`, borderRadius: '3px' }));
  items.forEach((it, i) => {
    const y = top + i * gap, last = i === items.length - 1;
    el.append(h('abs disp', { left: '92px', top: y + 'px', width: '100px', height: '100px', borderRadius: '50%', background: last ? C.navy : C.gold, color: last ? C.gold : C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px', boxShadow: '0 0 0 10px #fff' }, String(i + 1)));
    el.append(h('abs', { left: '240px', top: y + 2 + 'px', width: '760px' }, `<div class="disp" style="font-size:60px">${esc(it.t)}</div><div style="font-size:34px;color:${C.muted};margin-top:8px">${esc(it.sub)}</div>`));
  });
};

SLIDES.big = (el, s) => {
  if (s.glyph) el.append(h('abs disp', { right: '-40px', top: '260px', fontSize: '900px', color: C.gold2, opacity: .45, lineHeight: '1' }, esc(s.glyph)));
  const hd = h('abs disp', { left: '80px', width: '920px', top: '0', fontSize: '120px' }, mark(s.head || ''));
  el.append(hd); fit(hd, 640, 120, 64);
  hd.style.top = (640 - hd.offsetHeight / 2) + 'px';
  if (s.body) el.append(h('body', { top: 640 + hd.offsetHeight / 2 + 40 + 'px' }, mark(s.body)));
};

SLIDES.tips = (el, s) => {
  const y0 = headline(el, s), items = s.items || [], top = Math.max(y0 + 70, 440);
  const col = h('abs', { left: '80px', width: '920px', top: top + 'px', display: 'flex', flexDirection: 'column', gap: '30px' });
  items.forEach((it, i) => col.append(h('row', null, `<div class="ic" style="background:${i ? C.wash : C.gold};color:${C.navy}">${iconSVG(it.icon || 'check', 58, 7)}</div><div><div class="disp" style="font-size:52px">${esc(it.t)}</div>${it.sub ? `<div style="font-size:32px;color:${C.muted};margin-top:6px">${esc(it.sub)}</div>` : ''}</div>`)));
  el.append(col); col.style.top = centre(y0, col.offsetHeight) + 'px';
};

SLIDES.cta = (el, s, D) => {
  const card = h('card', { left: '290px', top: '170px', width: '500px', height: '400px', transform: 'rotate(3deg)' });
  const img = document.createElement('img'); img.src = D.cover || ''; card.append(img); el.append(card);
  const hd = h('abs disp', { left: '80px', width: '920px', top: '650px', textAlign: 'center', fontSize: '90px' }, mark(s.head || 'Want the *full lesson*?'));
  el.append(hd); fit(hd, 200, 90, 56);
  el.append(h('abs', { left: '120px', width: '840px', top: 650 + hd.offsetHeight + 30 + 'px', textAlign: 'center', fontSize: '38px', color: C.muted, lineHeight: '1.3' }, mark(s.body || '')));
  const acts = h('abs', { left: 0, width: '1080px', top: '1030px', display: 'flex', justifyContent: 'center', gap: '22px' });
  (s.actions || ['Save', 'Share', 'Follow']).forEach((a, i) => acts.append(h('chip disp', { fontSize: '34px', background: i === 0 ? C.gold : '#fff', borderColor: i === 0 ? C.gold : C.line }, esc(a))));
  el.append(acts);
};

/* ------------------------------------------------------------ build */
window.buildDeck = async () => {
  const D = window.CAROUSEL, deck = document.getElementById('deck'), n = D.slides.length;
  await document.fonts.ready;
  for (const f of ['800 40px "Bricolage Grotesque"', '500 40px "Bricolage Grotesque"', '600 40px "Instrument Sans"', '500 40px "DM Mono"']) await document.fonts.load(f);
  D.slides.forEach((s, i) => {
    const el = frame(s, i, n, D); deck.append(el);
    (SLIDES[s.type] || SLIDES.big)(el, s, D, i);
  });
  await Promise.all([...document.images].map(im => im.complete ? 0 : new Promise(r => { im.onload = im.onerror = r; })));
  return n;
};
