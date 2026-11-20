/* The scene library. Each scene builds its elements once, then update(lt) poses them for the local clock lt (seconds since the beat began).
   Motion language: overshoot springs, staggered pops, count-ups, line draws, camera push + impact shake. */
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const hex2 = c => { const m = /^#?([0-9a-f]{6})$/i.exec(c || ''); if (!m) return [255, 255, 255]; const n = parseInt(m[1], 16); return [n >> 16, (n >> 8) & 255, n & 255]; };
const mix = (a, b, k) => { const A = hex2(a), B = hex2(b); return `rgb(${A.map((v, i) => Math.round(lerp(v, B[i], k))).join(',')})`; };
const NS = 'http://www.w3.org/2000/svg';
const svgEl = (w, h, inner, css) => { const s = document.createElementNS(NS, 'svg'); s.setAttribute('viewBox', `0 0 ${w} ${h}`); s.setAttribute('width', w); s.setAttribute('height', h); s.innerHTML = inner; Object.assign(s.style, { position: 'absolute', left: 0, top: 0, overflow: 'visible' }, css || {}); return s; };
function camera(cam, lt, ctx, shakes, push = 0.045) { const [sx, sy] = shakeAt(lt, shakes || []); const s = 1 + push * clamp(lt / ctx.dur); cam.style.transform = `translate3d(${sx.toFixed(1)}px,${sy.toFixed(1)}px,0) scale(${s.toFixed(4)})`; }
const spread = (n, a, b) => Array.from({ length: n }, (_, i) => (n === 1 ? a : a + (b - a) * i / (n - 1)));
const fmtNum = (v, d) => { const s = Math.abs(v).toFixed(d); const [i, f] = s.split('.'); return (v < 0 ? '-' : '') + i.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (f ? '.' + f : ''); };
function times(ctx, keys, from, to) {   // when each item appears: the moment its keyword is spoken, else evenly spaced
  const even = spread(keys.length, from, Math.max(from + 0.3, to));
  let prev = -1;
  return keys.map((k, i) => { let t = k ? ctx.wt(k) : null; t = t != null ? Math.max(0.05, t - 0.06) : even[i]; t = Math.max(t, prev + 0.2); prev = t; return t; });
}

/* ---------------------------------------------------------------- slam: huge words hit the screen */
SCENES.slam = (cam, p, ctx) => {
  const th = ctx.th;
  let lines = Array.isArray(p.lines) && p.lines.length ? p.lines : [p.text || ''];
  lines = lines.map(l => String(l).toUpperCase()).slice(0, 4);
  const acc = (p.accent || []).map(x => String(x).toUpperCase().replace(/[^A-Z0-9%×]/g, ''));
  const decor = el('', { position: 'absolute', inset: 0 });
  if (p.glyph) decor.append(el('disp', { position: 'absolute', left: 0, width: '1080px', top: '140px', textAlign: 'center', fontSize: '1250px', lineHeight: 1, color: th.fg, opacity: 0.065 }, esc(p.glyph)));
  let rays = '';
  for (let j = 0; j < 30; j++) { const a = j * Math.PI * 2 / 30 + rnd(j) * 0.05, r0 = 380 + rnd(j + 9) * 120, r1 = 1500; rays += `<line x1="${540 + Math.cos(a) * r0}" y1="${720 + Math.sin(a) * r0}" x2="${540 + Math.cos(a) * r1}" y2="${720 + Math.sin(a) * r1}" stroke="${th.fg}" stroke-opacity="${0.05 + rnd(j + 3) * 0.05}" stroke-width="${3 + rnd(j + 5) * 9}"/>`; }
  const raySvg = svgEl(1080, 1920, rays); raySvg.style.transformOrigin = '540px 720px';
  const ringSvg = svgEl(1080, 1920, Array.from({ length: 10 }, (_, i) => `<circle id="r${i}" cx="540" cy="720" r="10" fill="none" stroke="${th.accent}" stroke-width="10" opacity="0"/>`).join(''));
  const box = el('', { position: 'absolute', left: 0, top: '230px', width: '1080px', height: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' });
  const lineEls = [], wordEls = []; let idx = 0, prev = -1; const land = [];
  lines.forEach(l => {
    const ln = el('disp', { display: 'flex', gap: '.22em', whiteSpace: 'nowrap', justifyContent: 'center', color: th.fg, fontSize: '200px', width: 'max-content' }); lineEls.push(ln);
    l.split(/\s+/).filter(Boolean).forEach(wd => {
      const clean = wd.replace(/[^A-Z0-9%×]/g, ''), isAcc = acc.includes(clean);
      const sp = el('word', { position: 'relative', color: isAcc ? th.accent : th.fg }); sp.textContent = wd;
      let bar = null; if (isAcc) { bar = el('', { position: 'absolute', left: '-3%', right: '-3%', bottom: '4%', height: '.17em', background: th.accent, opacity: 0, transformOrigin: '0 50%', zIndex: -1, borderRadius: '.04em' }); sp.append(bar); }
      let tk = ctx.wt(clean.toLowerCase()); const seq = 0.12 + idx * 0.30; tk = tk != null ? Math.min(Math.max(0.04, tk - 0.05), seq) : 0.12 + idx * 0.16; tk = Math.max(tk, prev + 0.08); prev = tk;
      wordEls.push({ sp, bar, tk, r0: (idx % 2 ? 7 : -7) }); land.push(tk + 0.1); ctx.events.push({ at: tk + 0.09, kind: 'thud' }); ln.append(sp); idx++;
    });
    box.append(ln);
  });
  cam.append(decor, raySvg, ringSvg, box);
  let s = 220;
  for (let i = 0; i < 30; i++) { lineEls.forEach(l => l.style.fontSize = s + 'px'); if (lineEls.every(l => l.offsetWidth <= 940) && box.firstChild && lineEls.length * s * 1.0 < 900) break; s = Math.floor(s * 0.93); }
  let sub = null, subT = prev + 0.45;
  if (p.sub) { sub = el('body', { fontSize: '54px', color: th.fg, opacity: 0, marginTop: '40px', maxWidth: '860px', textAlign: 'center' }, esc(p.sub)); box.append(sub); }
  return { update(lt) {
    raySvg.style.transform = `rotate(${lt * 2.2}deg)`; raySvg.style.opacity = 0.9;
    wordEls.forEach(w => {
      const d = lt - w.tk, a = E.back(clamp(d / 0.28)), vis = clamp(d / 0.07);
      tf(w.sp, { s: lerp(2.6, 1, a), r: lerp(w.r0, 0, E.out3(clamp(d / 0.3))), o: vis, blur: lerp(16, 0, clamp(d / 0.18)) });
      if (w.bar) { w.bar.style.opacity = 0.34; w.bar.style.transform = `scaleX(${E.out4(clamp((d - 0.2) / 0.35))})`; }
    });
    for (let i = 0; i < 10; i++) { const c = ringSvg.querySelector('#r' + i); if (!c) continue; const t0 = land[i]; if (t0 == null) { c.setAttribute('opacity', 0); continue; } const d = (lt - t0) / 0.75; if (d < 0 || d > 1) { c.setAttribute('opacity', 0); continue; } c.setAttribute('r', lerp(70, 620, E.out3(d))); c.setAttribute('opacity', 0.5 * (1 - d)); }
    if (sub) tf(sub, { y: lerp(34, 0, E.out3(clamp((lt - subT) / 0.4))), o: clamp((lt - subT) / 0.3) });
    camera(cam, lt, ctx, land, 0.05);
  } };
};

/* ---------------------------------------------------------------- stat: a number that counts up inside a drawing ring */
SCENES.stat = (cam, p, ctx) => {
  const th = ctx.th, C = 2 * Math.PI * 330, v = +p.value || 0, dec = p.decimals | 0, ring = clamp(p.ring == null ? 0.78 : +p.ring);
  const svg = svgEl(760, 760, `<circle cx="380" cy="380" r="330" fill="none" stroke="${th.soft}" stroke-width="38"/><circle id="arc" cx="380" cy="380" r="330" fill="none" stroke="${th.accent}" stroke-width="38" stroke-linecap="round" transform="rotate(-90 380 380)" stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
    <circle id="tip" cx="380" cy="50" r="19" fill="${th.fg}"/>`, { left: '160px', top: '250px' });
  const spark = svgEl(1080, 1920, Array.from({ length: 14 }, (_, i) => `<circle id="s${i}" r="${4 + rnd(i) * 7}" fill="${th.accent}" opacity="0"/>`).join(''));
  const num = el('disp', { position: 'absolute', left: '160px', top: '250px', width: '760px', height: '760px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: th.fg, fontSize: '280px', whiteSpace: 'nowrap', textAlign: 'center' });
  const label = el('disp', { position: 'absolute', left: '90px', top: '1040px', width: '900px', textAlign: 'center', fontSize: '76px', color: th.fg, opacity: 0 }, esc(p.label || ''));
  const sub = el('body', { position: 'absolute', left: '110px', top: '1150px', width: '860px', textAlign: 'center', fontSize: '44px', color: th.muted, opacity: 0 }, esc(p.sub || ''));
  num.textContent = (p.prefix || '') + fmtNum(v, dec) + (p.suffix || ''); const ns = fit(num, 640, 400, 300, 90); num.textContent = '';
  cam.append(svg, spark, num, label, sub);
  for (let i = 0; i < 16; i++) ctx.events.push({ at: 0.18 + i * 0.075, kind: 'tick' });
  ctx.events.push({ at: 1.65, kind: 'pop' });
  const arc = svg.querySelector('#arc'), tip = svg.querySelector('#tip');
  return { update(lt) {
    const k = E.outExp(clamp((lt - 0.15) / 1.5)), cur = v * k;
    num.textContent = (p.prefix || '') + fmtNum(cur, dec) + (p.suffix || '');
    const pp = clamp((lt - 0.1) / 0.3, 0, 1), pop = E.back(clamp((lt - 0.05) / 0.4));
    tf(num, { s: lerp(0.6, 1, pop) * (1 + 0.04 * Math.sin(clamp((lt - 1.6) / 0.4) * Math.PI)), o: pp });
    const prog = ring * E.out4(clamp((lt - 0.15) / 1.5)); arc.setAttribute('stroke-dashoffset', C * (1 - prog));
    const ang = -Math.PI / 2 + prog * Math.PI * 2; tip.setAttribute('cx', 380 + Math.cos(ang) * 330); tip.setAttribute('cy', 380 + Math.sin(ang) * 330); tip.setAttribute('opacity', lt < 0.15 ? 0 : 1);
    tf(label, { y: lerp(40, 0, E.out3(clamp((lt - 0.9) / 0.4))), o: clamp((lt - 0.9) / 0.3) }); tf(sub, { y: lerp(30, 0, E.out3(clamp((lt - 1.15) / 0.4))), o: clamp((lt - 1.15) / 0.3) });
    for (let i = 0; i < 14; i++) { const c = spark.querySelector('#s' + i), d = (lt - 1.5 - i * 0.03) / 0.9; if (d < 0 || d > 1) { c.setAttribute('opacity', 0); continue; } const a = i * 0.9 + 0.3, r = 360 + 260 * E.out3(d); c.setAttribute('cx', 540 + Math.cos(a) * r); c.setAttribute('cy', 630 + Math.sin(a) * r * 0.9); c.setAttribute('opacity', 1 - d); }
    camera(cam, lt, ctx, [0.18, 1.65], 0.035);
  } };
};

/* ---------------------------------------------------------------- list: cards fly in, the newest lights up */
SCENES.list = (cam, p, ctx) => {
  const th = ctx.th, items = (p.items || []).slice(0, 4), n = Math.max(1, items.length), cardH = n <= 3 ? 210 : 176, gap = 34, total = n * cardH + (n - 1) * gap, titleH = p.title ? 90 : 0;
  const top0 = 720 - (total + titleH) / 2 + titleH;
  const ts = times(ctx, items.map(x => x.on), 0.2, ctx.dur * 0.72);
  const els = [];
  if (p.title) { var title = el('mono', { position: 'absolute', left: '90px', width: '900px', top: top0 - 100 + 'px', fontSize: '38px', color: th.muted, textAlign: 'center' }, esc(p.title)); cam.append(title); }
  items.forEach((it, i) => {
    const hl = el('', { position: 'absolute', inset: 0, borderRadius: '46px', background: th.accent, opacity: 0 });
    const card = el('', { position: 'absolute', left: '90px', width: '900px', height: cardH + 'px', top: top0 + i * (cardH + gap) + 'px', borderRadius: '46px', background: th.soft, border: `3px solid ${th.line}`, display: 'flex', alignItems: 'center', gap: '34px', padding: '0 44px', overflow: 'hidden' });
    const badge = el('', { width: '124px', height: '124px', borderRadius: '50%', background: th.alt, color: th.onAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', position: 'relative' });
    badge.innerHTML = it.icon && ICONS[it.icon] ? iconSVG(it.icon, 74, 6) : `<span class="disp" style="font-size:72px">${i + 1}</span>`;
    const txt = el('disp', { position: 'relative', flex: 1, fontSize: '70px', color: th.fg }, esc(it.t || '')); card.append(hl, badge, txt); cam.append(card);
    card.append(); els.push({ card, hl, txt, badge, t: ts[i], dir: i % 2 ? 1 : -1 }); ctx.events.push({ at: ts[i] + 0.06, kind: 'pop' });
  });
  cam.append(); els.forEach(o => { o.card.append(); });
  // fit text once all are attached
  els.forEach(o => { o.txt.style.maxWidth = '620px'; fit(o.txt, 620, cardH - 40, 70, 34); });
  return { update(lt) {
    els.forEach((o, i) => {
      const d = lt - o.t, a = E.back(clamp(d / 0.4)), vis = clamp(d / 0.08), next = els[i + 1] ? els[i + 1].t : 1e9;
      const act = clamp((lt - o.t) / 0.22) * (i === els.length - 1 ? 1 : 1 - clamp((lt - next) / 0.3));
      tf(o.card, { x: lerp(o.dir * 1250, 0, a), r: lerp(o.dir * 5, 0, E.out3(clamp(d / 0.4))), s: 1 + 0.025 * act, o: vis, blur: lerp(14, 0, clamp(d / 0.2)) });
      o.hl.style.opacity = act; o.txt.style.color = mix(th.fg, th.onAccent, act);
      o.badge.style.transform = `scale(${lerp(0.4, 1, E.back(clamp((d - 0.1) / 0.35)))}) rotate(${lerp(-40, 0, E.out3(clamp((d - 0.1) / 0.4)))}deg)`;
    });
    if (title) tf(title, { o: clamp(lt / 0.3), y: lerp(-20, 0, E.out3(clamp(lt / 0.3))) });
    camera(cam, lt, ctx, els.map(o => o.t + 0.2), 0.03);
  } };
};

/* ---------------------------------------------------------------- versus: two ideas collide */
SCENES.versus = (cam, p, ctx) => {
  const th = ctx.th, L = p.left || {}, Rr = p.right || {}, win = p.win || 'right';
  const mk = (o, top, bg, fg, ic) => {
    const panel = el('', { position: 'absolute', left: '90px', top: top + 'px', width: '900px', height: '410px', borderRadius: '56px', background: bg, color: fg, display: 'flex', alignItems: 'center', gap: '40px', padding: '0 54px', boxShadow: '0 30px 60px -28px rgba(0,0,0,.55)' });
    const ico = el('', { width: '150px', flex: 'none', opacity: .95 }, iconSVG(o.icon || ic, 150, 5));
    const col = el('', { flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' });
    const t = el('disp', { fontSize: '88px' }, esc(o.t || '')), s = el('body', { fontSize: '42px', opacity: .85 }, esc(o.sub || ''));
    col.append(t, s); panel.append(ico, col); cam.append(panel); return { panel, t, s };
  };
  const a = mk(L, 270, th.alt, th.onAlt, 'cross'), b = mk(Rr, 800, th.accent, th.onAccent, 'check');
  const vs = el('disp', { position: 'absolute', left: '440px', top: '660px', width: '200px', height: '200px', borderRadius: '50%', background: th === THEMES.dark ? '#fff' : th.fg, color: th === THEMES.dark ? '#0B1524' : th.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '84px', zIndex: 5, boxShadow: '0 0 0 14px rgba(0,0,0,.18)' }, esc(p.vs || 'VS'));
  cam.append(vs);
  [a, b].forEach(o => { fit(o.t, 560, 190, 88, 40); });
  ctx.events.push({ at: 0.05, kind: 'whoosh' }, { at: 0.45, kind: 'whoosh' }, { at: 0.7, kind: 'thud' });
  return { update(lt) {
    const da = lt - 0.05, db = lt - 0.42, emph = clamp((lt - 1.3) / 0.35);
    const aw = win === 'left' ? 1 : win === 'none' ? 0 : -1, bw = win === 'right' ? 1 : win === 'none' ? 0 : -1;
    tf(a.panel, { x: lerp(-1300, 0, E.back(clamp(da / 0.45))), r: lerp(-6, 0, E.out3(clamp(da / 0.45))), s: 1 + 0.045 * emph * aw, o: (1 - 0.45 * emph * (aw < 0 ? 1 : 0)), blur: lerp(14, 0, clamp(da / 0.2)) });
    tf(b.panel, { x: lerp(1300, 0, E.back(clamp(db / 0.45))), r: lerp(6, 0, E.out3(clamp(db / 0.45))), s: 1 + 0.045 * emph * bw, o: (1 - 0.45 * emph * (bw < 0 ? 1 : 0)), blur: lerp(14, 0, clamp(db / 0.2)) });
    const dv = lt - 0.62; tf(vs, { s: lerp(0, 1, E.back(clamp(dv / 0.4))), r: lerp(300, 0, E.out3(clamp(dv / 0.5))), o: clamp(dv / 0.05) });
    camera(cam, lt, ctx, [0.7], 0.03);
  } };
};

/* ---------------------------------------------------------------- timeline: a line draws down through numbered steps */
SCENES.timeline = (cam, p, ctx) => {
  const th = ctx.th, items = (p.items || []).slice(0, 5), n = Math.max(1, items.length);
  const y0 = 380, y1 = 1130, ys = n === 1 ? [y0] : spread(n, y0, y1), X = 170;
  const ts = times(ctx, items.map(x => x.on), 0.25, ctx.dur * 0.72);
  if (p.title) cam.append(el('mono', { position: 'absolute', left: '100px', top: '250px', fontSize: '38px', color: th.muted, width: '880px' }, esc(p.title)));
  const track = el('', { position: 'absolute', left: X - 5 + 'px', top: y0 + 'px', width: '10px', height: (y1 - y0) + 'px', background: th.line, borderRadius: '5px' });
  const prog = el('', { position: 'absolute', left: X - 5 + 'px', top: y0 + 'px', width: '10px', height: '0px', background: th.accent, borderRadius: '5px' });
  cam.append(track, prog);
  const nodes = items.map((it, i) => {
    const dot = el('disp', { position: 'absolute', left: X - 50 + 'px', top: ys[i] - 50 + 'px', width: '100px', height: '100px', borderRadius: '50%', background: th.accent, color: th.onAccent, fontSize: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 0 0 ${th.accent}` }, String(i + 1));
    const t = el('disp', { fontSize: '72px', color: th.fg }, esc(it.t || '')), s = el('body', { fontSize: '40px', color: th.muted, marginTop: '8px' }, esc(it.sub || ''));
    const txt = el('', { position: 'absolute', left: '280px', width: '700px', top: ys[i] - 56 + 'px' }); txt.append(t, s); cam.append(dot, txt); fit(t, 690, 150, 72, 36);
    ctx.events.push({ at: ts[i], kind: 'pop' }); return { dot, txt, t: ts[i], y: ys[i] };
  });
  return { update(lt) {
    let h = 0; nodes.forEach((o, i) => { const d = lt - o.t; h = Math.max(h, (o.y - y0) * E.out3(clamp((lt - (o.t - 0.3)) / 0.4)) ); });
    prog.style.height = h + 'px';
    nodes.forEach((o, i) => {
      const d = lt - o.t, nxt = nodes[i + 1] ? nodes[i + 1].t : 1e9, cur = d >= 0 && lt < nxt;
      tf(o.dot, { s: lerp(0, 1, E.back(clamp(d / 0.35))) * (cur ? 1 + 0.06 * Math.sin(lt * 9) : 1), o: clamp(d / 0.05) });
      o.dot.style.boxShadow = cur ? `0 0 0 ${(14 + 10 * Math.sin(lt * 9)).toFixed(0)}px ${th === THEMES.dark ? 'rgba(255,194,51,.22)' : 'rgba(0,0,0,.12)'}` : 'none';
      tf(o.txt, { x: lerp(120, 0, E.out3(clamp((d - 0.05) / 0.35))), o: clamp((d - 0.05) / 0.25) * (cur ? 1 : 0.72) });
    });
    camera(cam, lt, ctx, [], 0.03);
  } };
};

/* ---------------------------------------------------------------- chart: compounding curves or growing bars */
SCENES.chart = (cam, p, ctx) => {
  const th = ctx.th, L = 110, Rg = 970, T = 360, B = 1040, Wd = Rg - L, Ht = B - T;
  if (p.title) cam.append(el('mono', { position: 'absolute', left: '100px', top: '250px', fontSize: '38px', color: th.muted, width: '880px' }, esc(p.title)));
  if (p.kind === 'bars') {
    const bars = (p.bars || []).slice(0, 5), n = Math.max(1, bars.length), mx = Math.max(1, ...bars.map(b => +b.value || 0)), bw = Math.min(190, Wd / n * 0.66);
    const base = el('', { position: 'absolute', left: L + 'px', top: B + 'px', width: Wd + 'px', height: '8px', background: th.line, borderRadius: '4px' }); cam.append(base);
    const els = bars.map((b, i) => {
      const cx = L + Wd * (i + 0.5) / n, h = Math.max(40, (+b.value || 0) / mx * (Ht - 80));
      const bar = el('', { position: 'absolute', left: cx - bw / 2 + 'px', width: bw + 'px', top: B - h + 'px', height: h + 'px', borderRadius: '26px 26px 8px 8px', background: b.hl ? th.accent : th.alt, transformOrigin: '50% 100%', opacity: b.hl ? 1 : 0.75 });
      const val = el('disp', { position: 'absolute', left: cx - 120 + 'px', width: '240px', textAlign: 'center', top: B - h - 92 + 'px', fontSize: '70px', color: th.fg }, '');
      const lab = el('body', { position: 'absolute', left: cx - 140 + 'px', width: '280px', textAlign: 'center', top: B + 30 + 'px', fontSize: '38px', color: th.fg }, esc(b.label || ''));
      cam.append(bar, val, lab); ctx.events.push({ at: 0.3 + i * 0.22, kind: 'pop' }); return { bar, val, lab, t: 0.3 + i * 0.22, v: +b.value || 0, sfx: b.suffix || p.suffix || '', h };
    });
    return { update(lt) {
      els.forEach(o => { const d = lt - o.t, g = E.back(clamp(d / 0.55)); o.bar.style.transform = `scaleY(${Math.max(0.0001, g)})`; o.bar.style.opacity = d < 0 ? 0 : (o.bar.style.opacity); o.val.textContent = fmtNum(o.v * E.out3(clamp(d / 0.7)), o.v % 1 ? 1 : 0) + o.sfx; tf(o.val, { y: lerp(30, 0, E.out3(clamp(d / 0.4))), o: clamp(d / 0.2) }); tf(o.lab, { o: clamp((d + 0.1) / 0.3) }); });
      camera(cam, lt, ctx, [], 0.025);
    } };
  }
  if (p.kind === 'line' && (p.points || []).length >= 2) {
    const pts = p.points.slice(0, 8).map(v => +v || 0), n = pts.length, lo = Math.min(0, ...pts), hi = Math.max(...pts) || 1;
    const P = i => [L + Wd * i / (n - 1), B - (pts[i] - lo) / (hi - lo) * (Ht - 60)];
    let d = ''; for (let i = 0; i < n; i++) { const [x, y] = P(i); if (!i) d = `M${x} ${y}`; else { const [px, py] = P(i - 1), mx = (px + x) / 2; d += ` C${mx} ${py} ${mx} ${y} ${x} ${y}`; } }
    const area = d + ` L${L + Wd} ${B} L${L} ${B}Z`;
    const grid = Array.from({ length: 4 }, (_, i) => `<line x1="${L}" x2="${Rg}" y1="${T + (i + 1) * Ht / 5}" y2="${T + (i + 1) * Ht / 5}" stroke="${th.line}" stroke-width="2" stroke-dasharray="4 12"/>`).join('');
    const svg = svgEl(1080, 1920, `<defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${th.accent}" stop-opacity=".45"/><stop offset="1" stop-color="${th.accent}" stop-opacity="0"/></linearGradient><clipPath id="lc"><rect id="lcr" x="${L - 20}" y="0" width="0" height="1920"/></clipPath></defs>
      <line x1="${L}" x2="${Rg}" y1="${B}" y2="${B}" stroke="${th.line}" stroke-width="6"/>${grid}
      <path d="${area}" fill="url(#lg)" clip-path="url(#lc)"/><path id="ln" d="${d}" pathLength="1" fill="none" stroke="${th.accent}" stroke-width="14" stroke-linecap="round" stroke-dasharray="1" stroke-dashoffset="1"/>
      ${pts.map((v, i) => { const [x, y] = P(i); return `<circle id="p${i}" cx="${x}" cy="${y}" r="16" fill="${th.bg || '#0B1524'}" stroke="${th.accent}" stroke-width="8" opacity="0"/>`; }).join('')}`);
    const labs = (p.labels || []).slice(0, n).map((t, i) => { const [x] = P(i); return el('mono', { position: 'absolute', left: x - 90 + 'px', width: '180px', textAlign: 'center', top: B + 22 + 'px', fontSize: '28px', color: th.muted, opacity: 0 }, esc(t)); });
    const [ex, ey] = P(n - 1);
    const endL = el('disp', { position: 'absolute', right: '110px', top: Math.max(170, ey - 150) + 'px', fontSize: '96px', color: th.accent, opacity: 0, textAlign: 'right' }, esc(p.end_label || ''));
    const cap = el('body', { position: 'absolute', left: '100px', top: '1150px', width: '880px', textAlign: 'center', fontSize: '44px', color: th.muted, opacity: 0 }, esc(p.caption || ''));
    cam.append(svg, ...labs, endL, cap);
    ctx.events.push({ at: 0.25, kind: 'riser' }, { at: 1.75, kind: 'thud' });
    const ln = svg.querySelector('#ln'), cr = svg.querySelector('#lcr');
    return { update(lt) {
      const k = E.inOut3(clamp((lt - 0.25) / 1.5)); ln.setAttribute('stroke-dashoffset', 1 - k); cr.setAttribute('width', (Wd + 40) * k);
      pts.forEach((v, i) => { const at = 0.25 + 1.5 * i / (n - 1); svg.querySelector('#p' + i).setAttribute('opacity', lt >= at ? 1 : 0); });
      labs.forEach((e, i) => tf(e, { o: clamp((lt - 0.25 - 1.5 * i / (n - 1)) / 0.2) }));
      tf(endL, { s: lerp(0.3, 1, E.back(clamp((lt - 1.75) / 0.45))), o: clamp((lt - 1.75) / 0.12) });
      tf(cap, { y: lerp(30, 0, E.out3(clamp((lt - 2.1) / 0.4))), o: clamp((lt - 2.1) / 0.3) });
      camera(cam, lt, ctx, [1.75], 0.035);
    } };
  }
  // compound: one curve explodes, the other fades away
  const b0 = 0.14, N = 70, upY = x => b0 + (1 - b0) * (Math.exp(4.2 * x) - 1) / (Math.exp(4.2) - 1), dnY = x => b0 * (0.06 + 0.94 * Math.exp(-3.4 * x));
  const pt = (f, i) => { const x = i / N; return [L + x * Wd, B - f(x) * Ht]; };
  const dPath = f => Array.from({ length: N + 1 }, (_, i) => { const [x, y] = pt(f, i); return (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); }).join('');
  const grid = Array.from({ length: 4 }, (_, i) => `<line x1="${L}" x2="${Rg}" y1="${T + (i + 1) * Ht / 5}" y2="${T + (i + 1) * Ht / 5}" stroke="${th.line}" stroke-width="2" stroke-dasharray="4 12"/>`).join('');
  const base = `<line x1="${L}" x2="${Rg}" y1="${B - b0 * Ht}" y2="${B - b0 * Ht}" stroke="${th.fg}" stroke-opacity=".35" stroke-width="3" stroke-dasharray="14 14"/>`;
  const svg = svgEl(1080, 1920, `<line x1="${L}" x2="${Rg}" y1="${B}" y2="${B}" stroke="${th.line}" stroke-width="6"/>${grid}${base}
    <path id="up" d="${dPath(upY)}" pathLength="1" fill="none" stroke="${th.accent}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1" stroke-dashoffset="1"/>
    <path id="dn" d="${dPath(dnY)}" pathLength="1" fill="none" stroke="${th.alt}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1" stroke-dashoffset="1"/>
    <circle id="hu" r="20" fill="${th.accent}"/><circle id="hd" r="20" fill="${th.alt}"/>`);
  const mk = (txt, css) => el('disp', Object.assign({ position: 'absolute', opacity: 0 }, css), esc(txt));
  const upEnd = mk(p.up_end || '', { right: '110px', top: T - 160 + 'px', fontSize: '112px', color: th.accent, textAlign: 'right' });
  const dnEnd = mk(p.down_end || '', { right: '120px', top: B + 22 + 'px', fontSize: '84px', color: th.alt, textAlign: 'right' });
  const upLab = el('mono', { position: 'absolute', left: '120px', top: T + 20 + 'px', fontSize: '34px', color: th.accent, opacity: 0, width: '520px', lineHeight: 1.3 }, esc(p.up_label || ''));
  const dnLab = el('mono', { position: 'absolute', left: '120px', top: B + 40 + 'px', fontSize: '34px', color: th.alt, opacity: 0, width: '520px', lineHeight: 1.3 }, esc(p.down_label || ''));
  const cap = el('body', { position: 'absolute', left: '100px', top: '1180px', width: '880px', textAlign: 'center', fontSize: '44px', color: th.muted, opacity: 0 }, esc(p.caption || ''));
  cam.append(svg, upEnd, dnEnd, upLab, dnLab, cap);
  ctx.events.push({ at: 0.25, kind: 'riser' }, { at: 1.85, kind: 'thud' });
  const pu = svg.querySelector('#up'), pd = svg.querySelector('#dn'), hu = svg.querySelector('#hu'), hd = svg.querySelector('#hd');
  return { update(lt) {
    const k = E.inOut3(clamp((lt - 0.25) / 1.6));
    pu.setAttribute('stroke-dashoffset', 1 - k); pd.setAttribute('stroke-dashoffset', 1 - k);
    const i = Math.round(k * N), [x1, y1] = pt(upY, i), [x2, y2] = pt(dnY, i);
    hu.setAttribute('cx', x1); hu.setAttribute('cy', y1); hd.setAttribute('cx', x2); hd.setAttribute('cy', y2); hu.setAttribute('opacity', lt < 0.25 ? 0 : 1); hd.setAttribute('opacity', lt < 0.25 ? 0 : 1);
    hu.setAttribute('r', 20 + 6 * Math.sin(lt * 10)); hd.setAttribute('r', 20 + 6 * Math.sin(lt * 10 + 1));
    tf(upLab, { o: clamp((lt - 0.3) / 0.3) }); tf(dnLab, { o: clamp((lt - 0.45) / 0.3) });
    const e1 = E.back(clamp((lt - 1.8) / 0.45)), e2 = E.back(clamp((lt - 2.0) / 0.45));
    tf(upEnd, { s: lerp(0.3, 1, e1), o: clamp((lt - 1.8) / 0.12) }); tf(dnEnd, { s: lerp(0.3, 1, e2), o: clamp((lt - 2.0) / 0.12) });
    tf(cap, { y: lerp(30, 0, E.out3(clamp((lt - 2.3) / 0.4))), o: clamp((lt - 2.3) / 0.3) });
    camera(cam, lt, ctx, [1.85], 0.035);
  } };
};

/* ---------------------------------------------------------------- quote: words rise out of masks */
SCENES.quote = (cam, p, ctx) => {
  const th = ctx.th, acc = (p.accent || []).map(x => String(x).toLowerCase().replace(/[^a-z0-9%]/g, ''));
  const q = svgEl(240, 200, `<path d="M20 190V100C20 50 50 20 100 10v38C76 56 66 70 66 100h44v90zM130 190V100c0-50 30-80 80-90v38c-24 8-34 22-34 52h44v90z" fill="${th.accent}"/>`, { left: '100px', top: '250px' });
  const box = el('disp', { position: 'absolute', left: '110px', top: '520px', width: '860px', fontSize: '88px', color: th.fg, lineHeight: 1.04, letterSpacing: '-.02em' });
  let prev = -1; const ws = [];
  String(p.text || '').split(/\s+/).filter(Boolean).forEach((wd, i) => {
    const m = el('mask'), s = el('word', { color: acc.includes(wd.toLowerCase().replace(/[^a-z0-9%]/g, '')) ? th.accent : th.fg }); s.textContent = wd; m.append(s); box.append(m, document.createTextNode(' '));
    let tk = ctx.wt(wd); tk = tk != null ? Math.max(0.3, tk - 0.05) : 0.4 + i * 0.09; tk = Math.max(tk, prev + 0.06); prev = tk; ws.push({ s, tk });
  });
  cam.append(q, box); fit(box, 860, 560, 90, 40);
  const by = el('mono', { position: 'absolute', left: '110px', top: '1150px', fontSize: '36px', color: th.accent, opacity: 0, display: 'flex', alignItems: 'center', gap: '24px' }, `<span style="display:inline-block;width:90px;height:6px;background:${th.accent}"></span>${esc(p.by || '')}`);
  cam.append(by); ctx.events.push({ at: 0.15, kind: 'pop' });
  return { update(lt) {
    tf(q, { s: lerp(0.2, 1, E.back(clamp(lt / 0.45))), r: lerp(-30, 0, E.out3(clamp(lt / 0.45))), o: clamp(lt / 0.1) }); q.style.transformOrigin = '30% 70%';
    ws.forEach(w => { const d = lt - w.tk; w.s.style.transform = `translateY(${lerp(120, 0, E.out4(clamp(d / 0.4)))}%)`; });
    const tb = prev + 0.35; tf(by, { x: lerp(-30, 0, E.out3(clamp((lt - tb) / 0.4))), o: clamp((lt - tb) / 0.3) });
    camera(cam, lt, ctx, [], 0.04);
  } };
};

/* ---------------------------------------------------------------- icon: one big symbol, keywords orbiting it */
SCENES.icon = (cam, p, ctx) => {
  const th = ctx.th, CX = 540, CY = 570, chips = (p.chips || []).slice(0, 4);
  const rings = svgEl(1080, 1920, [0, 1, 2].map(i => `<circle id="g${i}" cx="${CX}" cy="${CY}" r="200" fill="none" stroke="${th.accent}" stroke-width="8" opacity="0"/>`).join(''));
  const disc = el('', { position: 'absolute', left: CX - 210 + 'px', top: CY - 210 + 'px', width: '420px', height: '420px', borderRadius: '50%', background: th.accent, color: th.onAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 40px 80px -30px rgba(0,0,0,.5)' }, iconSVG(p.icon, 250, 5));
  const wrap = el('', { position: 'absolute', left: '90px', width: '900px', top: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center' });
  const title = el('disp', { width: '900px', textAlign: 'center', fontSize: '104px', color: th.fg }, esc((p.title || '').toUpperCase()));
  const sub = el('body', { width: '840px', marginTop: '28px', textAlign: 'center', fontSize: '46px', color: th.muted, opacity: 0 }, esc(p.sub || ''));
  wrap.append(title, sub);
  const chipEls = chips.map((c, i) => { const e = el('body', { position: 'absolute', left: 0, top: 0, padding: '16px 34px', borderRadius: '60px', background: th.soft, border: `3px solid ${th.line}`, color: th.fg, fontSize: '44px', whiteSpace: 'nowrap' }, esc(c)); cam.append(e); ctx.events.push({ at: 0.55 + i * 0.18, kind: 'pop' }); return e; });
  cam.append(rings, disc, wrap); fit(title, 900, 220, 104, 48);
  ctx.events.push({ at: 0.05, kind: 'thud' });
  return { update(lt) {
    const a = E.spring(clamp(lt / 0.7)); tf(disc, { s: Math.max(0.01, a), r: lerp(-20, 0, E.out3(clamp(lt / 0.6))), y: Math.sin(lt * 2.2) * 8 });
    [0, 1, 2].forEach(i => { const c = rings.querySelector('#g' + i), d = ((lt * 0.8 + i / 3) % 1); c.setAttribute('r', 210 + d * 360); c.setAttribute('opacity', (lt > 0.15 ? 0.35 * (1 - d) : 0)); });
    chipEls.forEach((e, i) => { const d = lt - (0.55 + i * 0.18), ang = i * (Math.PI * 2 / Math.max(1, chips.length)) - Math.PI / 2 + lt * 0.55; const rx = 410, ry = 275; const x = CX + Math.cos(ang) * rx, y = CY + Math.sin(ang) * ry; tf(e, { x: x - e.offsetWidth / 2, y: y - e.offsetHeight / 2, s: lerp(0, 1, E.back(clamp(d / 0.35))), o: clamp(d / 0.1) }); });
    tf(title, { s: lerp(1.6, 1, E.back(clamp((lt - 0.35) / 0.4))), o: clamp((lt - 0.35) / 0.12), blur: lerp(12, 0, clamp((lt - 0.35) / 0.2)) });
    tf(sub, { y: lerp(30, 0, E.out3(clamp((lt - 0.8) / 0.4))), o: clamp((lt - 0.8) / 0.3) });
    camera(cam, lt, ctx, [0.05], 0.035);
  } };
};

/* ---------------------------------------------------------------- cycle: a loop of steps with a dot running round it */
SCENES.cycle = (cam, p, ctx) => {
  const th = ctx.th, nodes = (p.nodes || []).slice(0, 5), n = Math.max(2, nodes.length), CX = 540, CY = 690, Rr = 325, PW = 290, PH = 118;
  const ang = i => -Math.PI / 2 + i * Math.PI * 2 / n, pos = (i, r = Rr) => [CX + Math.cos(ang(i)) * r, CY + Math.sin(ang(i)) * r];
  if (p.title) cam.append(el('mono', { position: 'absolute', left: '100px', top: '250px', fontSize: '38px', color: th.muted, width: '880px', textAlign: 'center' }, esc(p.title)));
  const ts = times(ctx, nodes.map(x => String(x).split(/\s+/)[0]), 0.25, ctx.dur * 0.6);
  let arcs = ''; const gap = 0.24;
  for (let i = 0; i < n; i++) { const a0 = ang(i) + gap, a1 = ang(i + 1) - gap + (i === n - 1 ? 0 : 0), [x0, y0] = [CX + Math.cos(a0) * Rr, CY + Math.sin(a0) * Rr], [x1, y1] = [CX + Math.cos(a1) * Rr, CY + Math.sin(a1) * Rr];
    arcs += `<path id="a${i}" d="M${x0.toFixed(1)} ${y0.toFixed(1)} A${Rr} ${Rr} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" pathLength="1" fill="none" stroke="${th.fg}" stroke-opacity=".55" stroke-width="9" stroke-linecap="round" stroke-dasharray="1" stroke-dashoffset="1"/>`;
    const ta = a1 + Math.PI / 2; arcs += `<path id="h${i}" d="M0 -22L34 0L0 22Z" fill="${th.fg}" fill-opacity=".8" transform="translate(${x1.toFixed(1)} ${y1.toFixed(1)}) rotate(${(ta * 180 / Math.PI - 90 + 90).toFixed(1)})" opacity="0"/>`; }
  const arcSvg = svgEl(1080, 1920, arcs + `<circle id="dot" r="22" fill="${th.accent}" opacity="0"/>`);
  cam.append(arcSvg);
  const els = nodes.map((t, i) => { const [x, y] = pos(i); const e = el('disp', { position: 'absolute', left: x - PW / 2 + 'px', top: y - PH / 2 + 'px', width: PW + 'px', height: PH + 'px', borderRadius: PH / 2 + 'px', background: th.soft, border: `3px solid ${th.line}`, color: th.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px', textAlign: 'center', padding: '0 20px', whiteSpace: 'nowrap', zIndex: 3 }, esc(String(t))); const hl = el('', { position: 'absolute', inset: 0, borderRadius: PH + 'px', background: th.accent, opacity: 0, zIndex: -1 }); e.style.overflow = 'hidden'; e.append(hl); const s = el('', { position: 'relative' }, esc(String(t))); e.textContent = ''; e.append(hl, s); cam.append(e); fit(s, PW - 44, 80, 52, 26); ctx.events.push({ at: ts[i], kind: 'pop' }); return { e, hl, s, t: ts[i] }; });
  const ctr = el('disp', { position: 'absolute', left: '300px', width: '480px', top: CY - 100 + 'px', textAlign: 'center', fontSize: '84px', color: th.fg, opacity: 0, lineHeight: 1 }, esc((p.center || '').toUpperCase())); cam.append(ctr); fit(ctr, 460, 220, 84, 40);
  const dot = arcSvg.querySelector('#dot'), tAll = ts[ts.length - 1] + 0.7;
  return { update(lt) {
    els.forEach((o, i) => { const d = lt - o.t; tf(o.e, { s: lerp(0, 1, E.back(clamp(d / 0.38))), o: clamp(d / 0.06) }); });
    for (let i = 0; i < n; i++) { const t0 = i + 1 < n ? els[i + 1].t - 0.2 : tAll - 0.5, k = E.out3(clamp((lt - t0) / 0.45)); arcSvg.querySelector('#a' + i).setAttribute('stroke-dashoffset', 1 - k); arcSvg.querySelector('#h' + i).setAttribute('opacity', k > 0.98 ? 0.85 : 0); }
    tf(ctr, { s: lerp(0.6, 1, E.back(clamp((lt - 0.1) / 0.4))), o: clamp((lt - 0.1) / 0.2) });
    if (lt > tAll) { const sp = (lt - tAll) / 2.4, a = ang(0) + sp * Math.PI * 2; dot.setAttribute('cx', CX + Math.cos(a) * Rr); dot.setAttribute('cy', CY + Math.sin(a) * Rr); dot.setAttribute('opacity', 1);
      const idx = Math.round(((a - ang(0)) / (Math.PI * 2)) * n) % n; els.forEach((o, i) => { o.hl.style.opacity = i === idx ? 1 : 0; o.e.style.color = i === idx ? th.onAccent : th.fg; }); }
    camera(cam, lt, ctx, [], 0.03);
  } };
};

/* ---------------------------------------------------------------- cta: the end card */
SCENES.cta = (cam, p, ctx) => {
  const th = ctx.th;
  const card = el('', { position: 'absolute', left: '240px', top: '250px', width: '600px', height: '480px', borderRadius: '44px', overflow: 'hidden', boxShadow: '0 50px 90px -30px rgba(0,0,0,.65)', background: '#fff' });
  const img = document.createElement('img'); img.src = ctx.R.cover || ''; img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block'; card.append(img);
  const l1 = el('disp', { position: 'absolute', left: '80px', width: '920px', top: '790px', textAlign: 'center', fontSize: '98px', color: th.fg }, esc(p.line1 || 'Want the full lesson?'));
  const l2 = el('body', { position: 'absolute', left: '110px', width: '860px', top: '1010px', textAlign: 'center', fontSize: '48px', color: th.muted }, esc(p.line2 || 'Watch it as an animated book summary.'));
  const pill = el('disp', { position: 'absolute', left: '220px', width: '640px', top: '1120px', height: '112px', borderRadius: '56px', background: th.accent, color: th.onAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px', letterSpacing: '0' }, esc(p.handle || 'visualgrowth.app'));
  const conf = svgEl(1080, 1920, Array.from({ length: 26 }, (_, i) => `<rect id="c${i}" width="${10 + rnd(i) * 14}" height="${10 + rnd(i + 2) * 14}" rx="3" fill="${i % 3 === 0 ? th.accent : i % 3 === 1 ? th.alt : th.fg}" opacity="0"/>`).join(''));
  cam.append(conf, card, l1, l2, pill); fit(l1, 920, 200, 98, 50);
  ctx.events.push({ at: 0.1, kind: 'whoosh' }, { at: 0.55, kind: 'shimmer' });
  return { update(lt) {
    const a = E.spring(clamp((lt - 0.05) / 0.8));
    tf(card, { y: lerp(1100, 0, a) + Math.sin(lt * 2.1) * 9, s: lerp(0.7, 1, a), r: lerp(14, -4, a) + Math.sin(lt * 1.3) * 1.2 });
    tf(l1, { y: lerp(60, 0, E.out3(clamp((lt - 0.5) / 0.45))), o: clamp((lt - 0.5) / 0.25) });
    tf(l2, { y: lerp(40, 0, E.out3(clamp((lt - 0.7) / 0.45))), o: clamp((lt - 0.7) / 0.25) });
    tf(pill, { s: lerp(0.4, 1, E.back(clamp((lt - 0.9) / 0.4))) * (1 + 0.035 * Math.sin(lt * 6)), o: clamp((lt - 0.9) / 0.1) });
    for (let i = 0; i < 26; i++) { const c = conf.querySelector('#c' + i), d = (lt - 0.55) / 1.8; if (d < 0) { c.setAttribute('opacity', 0); continue; } const x = 540 + (rnd(i + 11) - 0.5) * 1000 * E.out3(clamp(d)), y = 520 + (rnd(i + 21) - 0.5) * 300 + 900 * d * d * (0.5 + rnd(i + 31)) - 520 * (1 - d); c.setAttribute('transform', `translate(${x.toFixed(0)} ${y.toFixed(0)}) rotate(${(lt * 240 * (rnd(i) - 0.5)).toFixed(0)})`); c.setAttribute('opacity', clamp(1 - Math.max(0, d - 0.6) / 0.4) * 0.9); }
    camera(cam, lt, ctx, [], 0.02);
  } };
};

/* ---------------------------------------------------------------- shared: small "illustrative" note under graphs */
function noteEl(p, th, top) { return p.note ? el('mono', { position: 'absolute', left: 0, width: '1080px', top: (top || 1215) + 'px', textAlign: 'center', fontSize: '26px', color: th.muted, opacity: 0 }, esc(p.note)) : null; }
function hookWords(box, text, acc, th, ctx, size) {   // words that pop in as they are spoken
  const out = []; let prev = -1, idx = 0;
  String(text || '').split(/\s+/).filter(Boolean).forEach(wd => {
    const clean = wd.toUpperCase().replace(/[^A-Z0-9%×]/g, ''), isAcc = acc.includes(clean);
    const sp = el('word', { color: isAcc ? th.accent : th.fg, marginRight: '.24em' }); sp.textContent = wd.toUpperCase();
    let tk = ctx.wt(clean.toLowerCase()); const seq = 0.3 + idx * 0.22; tk = tk != null ? Math.min(Math.max(0.05, tk - 0.05), seq) : seq; tk = Math.max(tk, prev + 0.07); prev = tk;
    out.push({ sp, tk }); box.append(sp); idx++;
  });
  return out;
}

/* ---------------------------------------------------------------- intro: the book arrives, then the hook lands under it */
SCENES.intro = (cam, p, ctx) => {
  const th = ctx.th, R = ctx.R;
  const glow = el('', { position: 'absolute', left: '40px', top: '30px', width: '1000px', height: '1000px', borderRadius: '50%', background: `radial-gradient(circle, ${th.accent}66 0%, ${th.accent}00 62%)`, opacity: 0 });
  let rays = ''; for (let j = 0; j < 24; j++) { const a = j * Math.PI * 2 / 24; rays += `<path d="M540 530 L${540 + Math.cos(a - 0.05) * 1500} ${530 + Math.sin(a - 0.05) * 1500} L${540 + Math.cos(a + 0.05) * 1500} ${530 + Math.sin(a + 0.05) * 1500}Z" fill="${th.fg}" opacity="${0.025 + rnd(j) * 0.03}"/>`; }
  const raySvg = svgEl(1080, 1920, rays); raySvg.style.transformOrigin = '540px 530px';
  const holder = el('', { position: 'absolute', left: '130px', top: '200px', width: '820px', height: '656px', perspective: '1600px' });
  const card = el('', { position: 'absolute', inset: 0, borderRadius: '40px', overflow: 'hidden', background: '#fff', boxShadow: '0 70px 110px -30px rgba(0,0,0,.7)', transformOrigin: '50% 60%' });
  const img = document.createElement('img'); img.src = R.cover || ''; img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block';
  const sheen = el('', { position: 'absolute', top: '-30%', height: '160%', width: '34%', left: 0, background: 'linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))', transform: 'rotate(12deg)' });
  card.append(img, sheen); holder.append(card);
  const col = el('', { position: 'absolute', left: '60px', width: '960px', top: '895px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' });
  const kick = el('mono', { fontSize: '32px', color: th.accent, opacity: 0, display: 'flex', alignItems: 'center', gap: '18px' }, `<span style="width:60px;height:4px;background:${th.accent}"></span>A LESSON FROM<span style="width:60px;height:4px;background:${th.accent}"></span>`);
  const title = el('disp', { fontSize: '92px', color: th.fg, marginTop: '16px', width: '960px' }, esc(R.book || ''));
  const by = el('body', { fontSize: '38px', color: th.muted, marginTop: '6px' }, esc(R.author ? 'by ' + R.author : ''));
  const hook = el('disp', { marginTop: '56px', fontSize: '104px', lineHeight: 1.02, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '960px' });
  col.append(kick, title, by, hook); cam.append(glow, raySvg, holder, col);
  fit(title, 960, 190, 92, 50);
  const acc = (p.accent || []).map(x => String(x).toUpperCase().replace(/[^A-Z0-9%×]/g, ''));
  const ws = hookWords(hook, p.hook || '', acc, th, ctx);
  fit(hook, 960, 330, 104, 56);
  ctx.events.push({ at: 0.0, kind: 'riser' }, { at: 0.4, kind: 'thud' }, ...ws.map(w => ({ at: w.tk + 0.06, kind: 'pop' })));
  return { update(lt) {
    const a = E.spring(clamp(lt / 0.6));
    card.style.transform = `translateY(${lerp(900, 0, a)}px) rotateX(${lerp(55, 6, a) - 6 + Math.sin(lt * 1.6) * 2}deg) rotateY(${lerp(-38, 0, a) + Math.sin(lt * 1.1) * 4}deg) rotateZ(${lerp(-10, -2, a)}deg) scale(${lerp(0.6, 1, a)})`;
    sheen.style.left = lerp(-40, 120, E.inOut3(clamp((lt - 0.4) / 0.6))) + '%';
    glow.style.opacity = 0.9 * clamp((lt - 0.3) / 0.5); glow.style.transform = `scale(${0.9 + 0.05 * Math.sin(lt * 2)})`;
    raySvg.style.transform = `rotate(${lt * 4}deg)`; raySvg.style.opacity = clamp((lt - 0.2) / 0.5);
    tf(kick, { y: lerp(20, 0, E.out3(clamp((lt - 0.2) / 0.3))), o: clamp((lt - 0.2) / 0.15) });
    tf(title, { s: lerp(0.7, 1, E.back(clamp((lt - 0.28) / 0.35))), o: clamp((lt - 0.28) / 0.12) });
    tf(by, { o: clamp((lt - 0.45) / 0.25) });
    ws.forEach(w => { const d = lt - w.tk; tf(w.sp, { s: lerp(2.2, 1, E.back(clamp(d / 0.26))), o: clamp(d / 0.06), blur: lerp(12, 0, clamp(d / 0.16)) }); });
    camera(cam, lt, ctx, [0.4], 0.06);
  } };
};

/* ---------------------------------------------------------------- dots: a grid of people, some light up ("1 in 10") */
SCENES.dots = (cam, p, ctx) => {
  const th = ctx.th, total = [10, 20, 50, 100].includes(+p.total) ? +p.total : 100, hl = Math.max(0, Math.min(total, Math.round(+p.hl || 0)));
  const cols = total <= 20 ? 5 : 10, rows = Math.ceil(total / cols), cell = Math.min(860 / cols, 640 / rows), gx = 540 - cols * cell / 2, gy = 420 + (640 - rows * cell) / 2;
  const person = (x, y, s) => `<circle cx="${x}" cy="${y - s * 0.2}" r="${s * 0.17}"/><path d="M${x - s * 0.28} ${y + s * 0.36}a${s * 0.28} ${s * 0.3} 0 0 1 ${s * 0.56} 0z"/>`;
  let g = '';
  for (let i = 0; i < total; i++) { const c = i % cols, r = Math.floor(i / cols), x = gx + (c + 0.5) * cell, y = gy + (r + 0.5) * cell; g += `<g id="d${i}" fill="${th.soft}" stroke="${th.line}" stroke-width="2" style="transform-origin:${x}px ${y}px">${person(x, y, cell * 0.9)}</g>`; }
  const svg = svgEl(1080, 1920, g);
  const big = el('disp', { position: 'absolute', left: 0, width: '1080px', top: '215px', textAlign: 'center', fontSize: '150px', color: th.accent, opacity: 0 }, esc(p.big || `${hl} IN ${total}`));
  const label = el('disp', { position: 'absolute', left: '90px', width: '900px', top: '1085px', textAlign: 'center', fontSize: '64px', color: th.fg, opacity: 0 }, esc(p.label || ''));
  const sub = el('body', { position: 'absolute', left: '110px', width: '860px', top: '1165px', textAlign: 'center', fontSize: '40px', color: th.muted, opacity: 0 }, esc(p.sub || ''));
  const note = noteEl(p, th, 1225);
  cam.append(svg, big, label, sub); if (note) cam.append(note); fit(big, 960, 170, 150, 70); fit(label, 900, 80, 64, 36);
  const ds = Array.from({ length: total }, (_, i) => svg.querySelector('#d' + i));
  const order = Array.from({ length: total }, (_, i) => i).sort((a, b) => rnd(a + 5) - rnd(b + 5)), hlSet = new Set(order.slice(0, hl));
  const hlT = Array.from(hlSet), t1 = 0.9;
  ctx.events.push({ at: 0.1, kind: 'riser' }); hlT.slice(0, 12).forEach((d, k) => ctx.events.push({ at: t1 + k * Math.min(0.08, 0.9 / Math.max(1, hl)), kind: 'pop' }));
  return { update(lt) {
    ds.forEach((d, i) => { const c = i % cols, r = Math.floor(i / cols), at = 0.08 + (c + r) * 0.025, k = E.back(clamp((lt - at) / 0.3)); d.style.transform = `scale(${Math.max(0.001, k)})`; });
    hlT.forEach((i, k) => { const at = t1 + k * Math.min(0.08, 0.9 / Math.max(1, hl)), on = lt >= at; const d = ds[i]; d.setAttribute('fill', on ? th.accent : th.soft); d.setAttribute('stroke', on ? th.accent : th.line); if (on) { const q = E.back(clamp((lt - at) / 0.3)); d.style.transform = `scale(${lerp(1.6, 1, q)})`; } });
    tf(big, { s: lerp(0.5, 1, E.back(clamp((lt - t1) / 0.4))), o: clamp((lt - t1) / 0.12) });
    tf(label, { y: lerp(30, 0, E.out3(clamp((lt - 1.4) / 0.4))), o: clamp((lt - 1.4) / 0.3) });
    tf(sub, { y: lerp(30, 0, E.out3(clamp((lt - 1.6) / 0.4))), o: clamp((lt - 1.6) / 0.3) });
    if (note) tf(note, { o: 0.8 * clamp((lt - 1.8) / 0.3) });
    camera(cam, lt, ctx, [t1], 0.03);
  } };
};

/* ---------------------------------------------------------------- meter: horizontal bars fill up and count */
SCENES.meter = (cam, p, ctx) => {
  const th = ctx.th, rows = (p.rows || []).slice(0, 4), n = Math.max(1, rows.length), mx = +p.max || Math.max(1, ...rows.map(r => +r.value || 0));
  if (p.title) cam.append(el('mono', { position: 'absolute', left: '110px', top: '260px', fontSize: '36px', color: th.muted, width: '860px' }, esc(p.title)));
  const top0 = 380, gap = Math.min(220, 760 / n);
  const els = rows.map((r, i) => {
    const y = top0 + i * gap, hl = !!r.hl;
    const lab = el('body', { position: 'absolute', left: '110px', top: y + 'px', fontSize: '46px', color: th.fg, opacity: 0, width: '640px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }, esc(r.label || ''));
    const val = el('disp', { position: 'absolute', right: '110px', top: y - 14 + 'px', fontSize: '72px', color: hl ? th.accent : th.fg, opacity: 0 }, '');
    const track = el('', { position: 'absolute', left: '110px', top: y + 74 + 'px', width: '860px', height: '64px', borderRadius: '32px', background: th.soft, border: `2px solid ${th.line}`, overflow: 'hidden' });
    const fill = el('', { position: 'absolute', left: 0, top: 0, bottom: 0, width: '100%', borderRadius: '32px', background: hl ? th.accent : th.alt, transformOrigin: '0 50%' });
    track.append(fill); cam.append(lab, val, track);
    const at = 0.25 + i * 0.32; ctx.events.push({ at, kind: 'whoosh' }, { at: at + 0.75, kind: 'pop' });
    return { lab, val, fill, at, v: +r.value || 0, k: clamp((+r.value || 0) / mx) };
  });
  const note = noteEl(p, th, 1215); if (note) cam.append(note);
  return { update(lt) {
    els.forEach(o => { const d = lt - o.at, k = E.out4(clamp(d / 0.9)); o.fill.style.transform = `scaleX(${Math.max(0.0001, o.k * k)})`; tf(o.lab, { x: lerp(-30, 0, E.out3(clamp(d / 0.35))), o: clamp(d / 0.2) }); o.val.textContent = fmtNum(o.v * k, o.v % 1 ? 1 : 0) + (p.suffix || ''); tf(o.val, { o: clamp(d / 0.15) }); });
    if (note) tf(note, { o: 0.8 * clamp((lt - 1.4) / 0.3) });
    camera(cam, lt, ctx, [], 0.03);
  } };
};

/* ---------------------------------------------------------------- donut: a ring split into 2-4 shares */
SCENES.donut = (cam, p, ctx) => {
  const th = ctx.th, segs = (p.segments || []).slice(0, 4), tot = Math.max(1e-6, segs.reduce((a, s) => a + (+s.value || 0), 0)), Rr = 280, C = 2 * Math.PI * Rr, CX = 540, CY = 640;
  const cols = [th.accent, th.alt, th.fg, th.muted];
  let acc = 0, arcs = `<circle cx="${CX}" cy="${CY}" r="${Rr}" fill="none" stroke="${th.soft}" stroke-width="120"/>`;
  const parts = segs.map((s, i) => { const f = (+s.value || 0) / tot, o = { f, a0: acc, c: cols[i] }; acc += f; arcs += `<circle id="a${i}" cx="${CX}" cy="${CY}" r="${Rr}" fill="none" stroke="${o.c}" stroke-width="120" stroke-dasharray="0 ${C}" transform="rotate(${-90 + o.a0 * 360} ${CX} ${CY})"/>`; return o; });
  const svg = svgEl(1080, 1920, arcs);
  const center = el('disp', { position: 'absolute', left: CX - 210 + 'px', top: CY - 110 + 'px', width: '420px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '120px', color: th.fg, opacity: 0 }, esc(p.center || ''));
  if (p.title) cam.append(el('mono', { position: 'absolute', left: 0, width: '1080px', textAlign: 'center', top: '250px', fontSize: '36px', color: th.muted }, esc(p.title)));
  const leg = el('', { position: 'absolute', left: '140px', width: '800px', top: '1010px', display: 'flex', flexDirection: 'column', gap: '14px' });
  const legEls = segs.map((s, i) => { const r = el('body', { display: 'flex', alignItems: 'center', gap: '22px', fontSize: '44px', color: th.fg, opacity: 0 }, `<span style="width:34px;height:34px;border-radius:10px;background:${cols[i]};flex:none"></span><span style="flex:1">${esc(s.label || '')}</span><span class="disp" style="color:${i === 0 ? th.accent : th.fg}">${fmtNum(+s.value || 0, (+s.value || 0) % 1 ? 1 : 0)}${esc(p.suffix || '')}</span>`); leg.append(r); return r; });
  const note = noteEl(p, th, 1240);
  cam.append(svg, center, leg); if (note) cam.append(note); fit(center, 400, 200, 120, 50);
  parts.forEach((o, i) => ctx.events.push({ at: 0.25 + i * 0.45, kind: 'whoosh' }));
  ctx.events.push({ at: 0.2, kind: 'pop' });
  return { update(lt) {
    parts.forEach((o, i) => { const k = E.inOut3(clamp((lt - 0.25 - i * 0.45) / 0.6)), L = Math.max(0, o.f * C * k - 4); svg.querySelector('#a' + i).setAttribute('stroke-dasharray', `${L} ${C}`); });
    svg.style.transformOrigin = `${CX}px ${CY}px`; svg.style.transform = `rotate(${lerp(-25, 0, E.out3(clamp(lt / 1.2)))}deg) scale(${lerp(0.85, 1, E.back(clamp(lt / 0.6)))})`;
    tf(center, { s: lerp(0.4, 1, E.back(clamp((lt - 0.2) / 0.45))), o: clamp((lt - 0.2) / 0.15) });
    legEls.forEach((r, i) => { const d = lt - 0.5 - i * 0.45; tf(r, { x: lerp(-40, 0, E.out3(clamp(d / 0.35))), o: clamp(d / 0.2) }); });
    if (note) tf(note, { o: 0.8 * clamp((lt - 1.4) / 0.3) });
    camera(cam, lt, ctx, [0.25], 0.03);
  } };
};
