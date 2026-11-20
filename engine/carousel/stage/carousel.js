/* Editorial carousel stage. Builds every slide of window.CAROUSEL into #deck (static frames). Diagrams are hand-drawn with rough.js. */
const K = { ink: '#0E1A2B', ink2: '#2B3A50', muted: '#6A7486', gold: '#FFC233', hl: '#FFD45C', blue: '#CFE0F5', paper: '#F7F6F2' };
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// **bold**  *highlighter*  _italic_
const md = s => esc(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\*([^*]+)\*/g, '<span class="hl">$1</span>').replace(/(^|[\s(“"'])_([^_]+)_/g, '$1<i>$2</i>');
const h = (cls, css, html) => { const d = document.createElement('div'); if (cls) d.className = cls; if (css) Object.assign(d.style, css); if (html != null) d.innerHTML = html; return d; };
const NS = 'http://www.w3.org/2000/svg';
let SEED = 7;
const R = () => ({ roughness: 1.3, bowing: 1.2, stroke: K.ink, strokeWidth: 3.2, seed: SEED++ });
const opt = o => Object.assign(R(), o || {});

function stage(w, hh) { const s = document.createElementNS(NS, 'svg'); s.setAttribute('width', w); s.setAttribute('height', hh); s.setAttribute('viewBox', `0 0 ${w} ${hh}`); s.style.overflow = 'visible'; return { s, rc: rough.svg(s) }; }
function txt(s, x, y, t, o) {
  o = o || {}; const e = document.createElementNS(NS, 'text');
  e.setAttribute('x', x); e.setAttribute('y', y); e.setAttribute('text-anchor', o.anchor || 'middle'); e.setAttribute('dominant-baseline', 'middle');
  e.setAttribute('font-family', o.font || 'Marker'); e.setAttribute('font-size', (o.size || 34) * 1.12); e.setAttribute('fill', o.fill || K.ink);
  if (o.weight) e.setAttribute('font-weight', o.weight);
  const lines = String(t).split('\n');
  if (lines.length === 1) e.textContent = t;
  else lines.forEach((ln, i) => { const ts = document.createElementNS(NS, 'tspan'); ts.setAttribute('x', x); ts.setAttribute('dy', i ? (o.size || 34) * 1.15 : -(lines.length - 1) * (o.size || 34) * 0.575); ts.textContent = ln; e.append(ts); });
  s.append(e); return e;
}
function arrow(s, rc, x1, y1, x2, y2, o) {      // sketchy arrow with a little head
  o = o || {}; const bend = o.bend || 0, mx = (x1 + x2) / 2 - (y2 - y1) * bend, my = (y1 + y2) / 2 + (x2 - x1) * bend;
  s.append(rc.path(`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`, opt({ strokeWidth: o.w || 3 })));
  const a = Math.atan2(y2 - my, x2 - mx), L = 22;
  s.append(rc.linearPath([[x2 - L * Math.cos(a - .45), y2 - L * Math.sin(a - .45)], [x2, y2], [x2 - L * Math.cos(a + .45), y2 - L * Math.sin(a + .45)]], opt({ strokeWidth: o.w || 3 })));
}
function box(s, rc, x, y, w, hh, label, o) {
  o = o || {};
  s.append(rc.rectangle(x, y, w, hh, opt({ fill: o.fill || K.blue, fillStyle: o.fillStyle || 'solid', strokeWidth: 3 })));
  if (label) txt(s, x + w / 2, y + hh / 2, label, { size: o.size || 34 });
}

/* ------------------------------------------------------------ diagrams (each returns an <svg>) */
const DIAGRAMS = {};

DIAGRAMS.fragments = d => {      // a day chopped into pieces, with one tiny slot of real work
  const W = 780, H = 400, { s, rc } = stage(W, H), segs = (d.segments || ['email', 'chat', 'meeting', 'email', 'tabs', 'meeting']).slice(0, 7);
  const x0 = 10, y0 = 140, w = W - 20, hh = 130; let x = x0;
  const ws = segs.map((_, i) => 0.6 + ((i * 37) % 7) / 6), tot = ws.reduce((a, b) => a + b, 0) + 0.35;
  txt(s, x0, 112, d.start || '9:00', { anchor: 'start', size: 28, fill: K.muted }); txt(s, x0 + w, 112, d.end || '17:00', { anchor: 'end', size: 28, fill: K.muted });
  segs.forEach((lab, i) => {
    const sw = w * ws[i] / tot;
    s.append(rc.rectangle(x, y0, sw, hh, opt({ fill: i % 2 ? '#E7EDF5' : K.blue, fillStyle: 'solid', strokeWidth: 2.4 })));
    txt(s, x + sw / 2, y0 + hh / 2, sw < 95 ? lab.split('').join('') : lab, { size: sw < 80 ? 22 : sw < 110 ? 26 : 30 });
    if (i === Math.floor(segs.length / 2)) {
      const gw = w * 0.35 / tot; s.append(rc.rectangle(x + sw, y0, gw, hh, opt({ fill: K.gold, fillStyle: 'solid', strokeWidth: 2.4 })));
      arrow(s, rc, x + sw + gw / 2 + 120, y0 + hh + 110, x + sw + gw / 2 + 6, y0 + hh + 14, { bend: -0.25 });
      txt(s, x + sw + gw / 2 + 130, y0 + hh + 112, d.gold || 'the actual work', { anchor: 'start', font: 'Hand', size: 40, weight: 700 });
      x += gw;
    }
    x += sw;
  });
  if (d.caption) txt(s, 20, 40, d.caption, { anchor: 'start', font: 'Hand', size: 42, weight: 700 });
  return s;
};

DIAGRAMS.curves = d => {         // one line climbs, one line falls, the gap is the point
  const W = 760, H = 440, { s, rc } = stage(W, H), L = 70, B = 380, Rt = 700, T = 40;
  s.append(rc.line(L, T, L, B, opt())); s.append(rc.line(L, B, Rt + 20, B, opt()));
  txt(s, Rt, B + 36, d.x || 'time', { anchor: 'end', size: 28, fill: K.muted });
  const up = [], dn = [];
  for (let i = 0; i <= 12; i++) { const t = i / 12, x = L + 20 + (Rt - L - 20) * t; up.push([x, B - 120 - Math.pow(t, 2.2) * 210]); dn.push([x, B - 120 + (1 - Math.pow(1 - t, 2)) * 80 - 40 * t]); }
  s.append(rc.curve(up, opt({ stroke: '#C98F00', strokeWidth: 6 }))); s.append(rc.curve(dn, opt({ strokeWidth: 6 })));
  txt(s, Rt - 10, up[12][1] - 34, d.up || 'value of focus', { anchor: 'end', size: 32, fill: '#9A6B00' });
  txt(s, Rt - 10, dn[12][1] + 40, d.down || 'people who can do it', { anchor: 'end', size: 32 });
  const gx = L + 20 + (Rt - L - 20) * 0.72, gy1 = B - 120 - Math.pow(.72, 2.2) * 210, gy2 = B - 120 + (1 - Math.pow(.28, 2)) * 80 - 40 * .72;
  const poly = up.slice(7).concat(dn.slice(7).reverse());
  s.insertBefore(rc.polygon(poly, opt({ stroke: 'none', fill: K.gold, fillStyle: 'hachure', hachureGap: 12, fillWeight: 2.5, hachureAngle: -40 })), s.firstChild);
  txt(s, L + 40, T + 20, d.gap || 'the gap = your edge', { anchor: 'start', font: 'Hand', size: 42, weight: 700 });
  arrow(s, rc, L + 200, T + 64, gx + 30, (gy1 + gy2) / 2 + 10, { bend: 0.3 });
  return s;
};

DIAGRAMS.converge = d => {       // two boxes feed one result
  const W = 760, H = 420, { s, rc } = stage(W, H), a = d.inputs || ['input one', 'input two'];
  a.slice(0, 3).forEach((t, i) => { const y = 40 + i * (a.length > 2 ? 120 : 190); box(s, rc, 10, y, 330, 120, t, { size: 32 }); arrow(s, rc, 350, y + 60, 470, 215, { bend: i ? 0.12 : -0.12 }); });
  s.append(rc.ellipse(600, 215, 270, 200, opt({ fill: K.gold, fillStyle: 'solid' })));
  txt(s, 600, 215, d.result || 'result', { size: 36 });
  return s;
};

DIAGRAMS.pie = d => {            // attention split between this task and the last one
  const W = 760, H = 420, { s, rc } = stage(W, H), CX = 220, CY = 210, r = 180, f = Math.min(.9, Math.max(.1, (d.share || 40) / 100));
  s.append(rc.circle(CX, CY, r * 2, opt({ fill: K.blue, fillStyle: 'solid' })));
  s.append(rc.arc(CX, CY, r * 2, r * 2, -Math.PI / 2, -Math.PI / 2 + f * Math.PI * 2, true, opt({ fill: K.gold, fillStyle: 'hachure', hachureGap: 10, fillWeight: 3 })));
  txt(s, CX - 60, CY + 50, d.main || 'this task', { size: 30 });
  arrow(s, rc, 455, 120, CX + 100, CY - 70, { bend: 0.2 });
  txt(s, 465, 70, d.label || 'still on the\nlast task', { anchor: 'start', font: 'Hand', size: 42, weight: 700 });
  return s;
};

DIAGRAMS.formula = d => {        // Result = A x B
  const W = 780, H = 400, { s, rc } = stage(W, H), p = d.parts || ['Result', 'A', 'B'];
  box(s, rc, 170, 10, 440, 120, p[0], { fill: K.gold, size: 38 });
  txt(s, 390, 175, d.ops ? d.ops[0] : '=', { size: 64, font: 'Sans', weight: 800 });
  box(s, rc, 20, 230, 310, 120, p[1], { size: 34 });
  txt(s, 390, 290, d.ops ? (d.ops[1] || '×') : '×', { size: 64, font: 'Sans', weight: 800 });
  box(s, rc, 450, 230, 310, 120, p[2], { size: 34 });
  if (d.note) txt(s, 390, 390, d.note, { font: 'Hand', size: 38, weight: 700 });
  return s;
};

DIAGRAMS.flow = d => {           // A -> B -> C (last one gold)
  const st = (d.steps || []).slice(0, 4), n = st.length || 1, W = 800, bw = (W - (n - 1) * 70) / n, H = 300, { s, rc } = stage(W, H);
  st.forEach((t, i) => {
    const x = i * (bw + 70), last = i === n - 1;
    box(s, rc, x, 60, bw, 180, '', { fill: last ? K.gold : K.blue });
    txt(s, x + bw / 2, 150, t.t || t, { size: 32 }); if (t.sub) txt(s, x + bw / 2, 278, t.sub, { font: 'Hand', size: 32, weight: 700, fill: K.ink2 });
    if (i < n - 1) arrow(s, rc, x + bw + 8, 150, x + bw + 62, 150);
  });
  return s;
};

DIAGRAMS.split = d => {          // two columns (e.g. shallow vs deep)
  const W = 760, H = 420, { s, rc } = stage(W, H), cols = d.columns || [];
  cols.slice(0, 2).forEach((c, i) => {
    const x = i * 390, gold = i === 1;
    s.append(rc.rectangle(x, 10, 370, 400, opt({ fill: gold ? '#FFE9A8' : '#fff', fillStyle: 'solid' })));
    txt(s, x + 185, 60, c.t, { font: 'Sans', weight: 800, size: 34 });
    s.append(rc.line(x + 40, 98, x + 330, 98, opt({ strokeWidth: 2 })));
    (c.items || []).slice(0, 5).forEach((it, k) => { txt(s, x + 40, 150 + k * 58, (gold ? '✓ ' : '• ') + it, { anchor: 'start', size: 32 }); });
  });
  return s;
};

DIAGRAMS.calendar = d => {       // a day with one protected block
  const W = 700, H = 470, { s, rc } = stage(W, H), hrs = d.hours || ['8:00', '9:00', '10:00', '11:00', '12:00'], blk = d.block || 1, other = d.other || {};
  s.append(rc.rectangle(10, 10, W - 20, H - 20, opt({ fill: '#fff', fillStyle: 'solid' })));
  const rowH = (H - 60) / hrs.length;
  hrs.forEach((t, i) => {
    const y = 40 + i * rowH;
    txt(s, 40, y + 12, t, { anchor: 'start', size: 28, fill: K.muted });
    s.append(rc.line(130, y, W - 30, y, opt({ strokeWidth: 1.6, stroke: '#9AA6B8' })));
    if (i === blk) { s.append(rc.rectangle(140, y + 8, W - 180, rowH - 16, opt({ fill: K.gold, fillStyle: 'solid' }))); txt(s, 140 + (W - 180) / 2, y + rowH / 2, d.label || 'DEEP WORK', { font: 'Sans', weight: 800, size: 34 }); }
    else if (other[i]) txt(s, 170, y + rowH / 2, other[i], { anchor: 'start', size: 30, fill: K.ink2 });
  });
  if (d.note) { arrow(s, rc, W + 40, 90, W - 60, 40 + blk * rowH + 20, { bend: -0.25 }); txt(s, W + 30, 60, d.note, { anchor: 'start', font: 'Hand', size: 40, weight: 700 }); }
  return s;
};

/* ------------------------------------------------------------ slides */
function slide(i) { const el = h('slide'); el.id = 's' + (i + 1); return el; }
function centreCol(el, col, top, bottom) { el.append(col); const hh = col.offsetHeight; col.style.top = Math.max(top || 90, ((bottom || 1270) + (top || 90)) / 2 - hh / 2) + 'px'; }
function fitText(e, maxH, max, min) { let f = max; e.style.fontSize = f + 'px'; while (f > min && e.offsetHeight > maxH) { f -= 2; e.style.fontSize = f + 'px'; } }
function figure(d, framed) { if (!d || !DIAGRAMS[d.kind]) return null; const f = h('fig' + (framed === false ? '' : ' box')); f.append(DIAGRAMS[d.kind](d)); return f; }
function handle(el, D) { el.append(h('handle', null, esc(D.handle || 'visualgrowth.app'))); }

const SLIDES = {};

SLIDES.cover = (el, s, D) => {
  const hd = h('abs serif', { left: '110px', top: '150px', width: '860px', fontWeight: 800, fontSize: '118px', lineHeight: '1.02', letterSpacing: '-.02em' }, md(s.head));
  hd.querySelectorAll('i').forEach(e => { e.style.fontWeight = 800; e.style.fontStyle = 'italic'; });
  el.append(hd); fitText(hd, 640, 118, 72);
  const yb = 150 + hd.offsetHeight + 40;
  el.append(h('abs serif', { left: '114px', top: yb + 'px', fontSize: '34px', color: K.muted }, `<i>Written by</i> ${esc(D.writer || 'VisualGrowth')}`));
  const card = h('card', { left: '560px', top: '820px', width: '420px', height: '336px', transform: 'rotate(4deg)' });
  const img = document.createElement('img'); img.src = D.cover || ''; card.append(img); el.append(card);
  const { s: sv, rc } = stage(480, 300); sv.style.cssText = 'position:absolute;left:110px;top:860px;overflow:visible';
  txt(sv, 0, 40, s.note || `from ${D.book}`, { anchor: 'start', font: 'Hand', size: 46, weight: 700 });
  arrow(sv, rc, 230, 110, 430, 190, { bend: -0.25 });
  el.append(sv);
};

SLIDES.story = (el, s, D) => {
  const col = h('col');
  const hd = h('serif', { fontWeight: 800, fontSize: '84px', lineHeight: '1.05', letterSpacing: '-.015em' }, md(s.head)); col.append(hd);
  (s.body || []).forEach(p => col.append(h('p', null, md(p))));
  const f = figure(s.diagram, false); if (f) col.append(f);
  centreCol(el, col); handle(el, D);
};

SLIDES.define = (el, s, D) => {
  const col = h('col');
  col.append(h('serif', { fontWeight: 800, fontSize: '76px', lineHeight: '1.06', letterSpacing: '-.015em' }, md(s.head)));
  (s.terms || []).forEach((t, i) => {
    const last = i === (s.terms.length - 1);
    if (t.tag) col.append(h('hand', { fontSize: '44px', marginTop: i ? '40px' : '56px', marginBottom: '6px', alignSelf: 'flex-end', transform: `rotate(${i ? -1.5 : 1.5}deg)`, color: last ? '#9A6B00' : K.ink2 }, esc(t.tag) + (last ? ' ↓' : ' ↓')));
    const e = h('', { marginTop: t.tag ? '0' : (i ? '40px' : '64px'), padding: '34px 40px', border: `3px ${last ? 'solid' : 'dashed'} ${K.ink}`, background: last ? '#FFF1C4' : 'rgba(255,255,255,.5)', borderRadius: '6px' },
      `<div class="serif" style="font-size:58px;font-weight:800">${esc(t.word)} <span style="font-weight:400;font-style:italic;font-size:36px;color:${K.muted}">(${esc(t.pos || 'noun')})</span></div>
       <div class="serif" style="font-size:38px;line-height:1.35;margin-top:12px">${md(t.def)}</div>`);
    col.append(e);
  });
  if (s.note) col.append(h('hand', { fontSize: '46px', marginTop: '34px', alignSelf: 'flex-end', transform: 'rotate(-2deg)' }, esc(s.note)));
  centreCol(el, col); handle(el, D);
};

SLIDES.item = (el, s, D) => {
  const col = h('col');
  col.append(h('title', null, `<span class="hlb">${esc(s.n ? s.n + '. ' : '')}${esc(s.title)}</span>`));
  if (s.what) col.append(h('p', null, `<b>${esc(s.what_label || 'What it is')}:</b> ${md(s.what)}`));
  if (s.try) col.append(h('p', { marginTop: '26px' }, `<b>${esc(s.try_label || 'Try this')}:</b> ${md(s.try)}`));
  const f = figure(s.diagram); if (f) col.append(f);
  centreCol(el, col); handle(el, D);
  // keep the figure inside the slide: shrink it if the column is too tall
  if (f && col.offsetHeight > 1180) { const k = Math.max(.6, (1180 - (col.offsetHeight - f.offsetHeight)) / f.offsetHeight); f.style.transform = `scale(${k})`; f.style.transformOrigin = '50% 0'; f.style.marginBottom = -(1 - k) * f.offsetHeight + 'px'; centreCol(el, col); }
};

SLIDES.action = (el, s, D) => {
  const col = h('col');
  col.append(h('title', null, `<span class="hlb">${esc(s.head)}</span>`));
  const f = figure(s.diagram, false); if (f) { f.style.marginTop = '50px'; f.style.alignSelf = 'flex-start'; col.append(f); }
  (s.steps || []).forEach((t, i) => col.append(h('p', { marginTop: i ? '14px' : '40px' }, `<b>${i + 1}.</b> ${md(t)}`)));
  if (s.challenge) col.append(h('p', { marginTop: '36px', fontStyle: 'italic', color: K.ink2 }, md(s.challenge)));
  centreCol(el, col); handle(el, D);
};

SLIDES.cta = (el, s, D) => {
  const col = h('col', { alignItems: 'center', textAlign: 'center' });
  col.append(h('serif', { fontWeight: 800, fontSize: '96px', lineHeight: '1.04', letterSpacing: '-.015em' }, md(s.head)));
  if (s.body) col.append(h('p', { textAlign: 'center' }, md(s.body)));
  const wrap = h('', { position: 'relative', width: '420px', height: '336px', marginTop: '60px' });
  const card = h('card', { left: 0, top: 0, width: '420px', height: '336px', transform: 'rotate(-3deg)' });
  const img = document.createElement('img'); img.src = D.cover || ''; card.append(img); wrap.append(card); col.append(wrap);
  col.append(h('hand', { fontSize: '46px', marginTop: '44px' }, esc(s.link_note || 'the full animated lesson:')));
  col.append(h('sans', { fontWeight: 800, fontSize: '40px', marginTop: '8px', background: K.hl, padding: '6px 22px', borderRadius: '10px' }, esc(s.link || 'visualgrowth.app')));
  centreCol(el, col);
};

/* ------------------------------------------------------------ build */
window.buildDeck = async () => {
  const D = window.CAROUSEL, deck = document.getElementById('deck');
  await document.fonts.ready;
  for (const f of ['800 40px News', 'italic 800 40px News', '400 40px News', 'italic 400 40px News', '700 40px News', '800 40px Sans', '700 40px Hand', '400 40px Marker']) await document.fonts.load(f);
  D.slides.forEach((s, i) => { SEED = 11 + i * 50; const el = slide(i); deck.append(el); (SLIDES[s.type] || SLIDES.story)(el, s, D, i); });
  await Promise.all([...document.images].map(im => im.complete ? 0 : new Promise(r => { im.onload = im.onerror = r; })));
  return D.slides.length;
};
