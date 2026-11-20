/* Micro-lesson carousel (story told in small steps). Each slide: on-brand graphic panel + tag chip, bold title, short serif lines.
   Needs ICONS / iconSVG from the reel stage's icons.js. */
const M = { ink: '#0B1F3A', ink2: '#2B3A50', muted: '#667085', gold: '#F2A900', gold2: '#FFC233', goldwash: '#FFF3D1', blue: '#EAF0F8', blue2: '#C9D8EE', panel: '#F3F5F8', white: '#FFFFFF', red: '#D92D20' };
const PW = 968, PH = 560;
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const md = s => esc(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\*([^*]+)\*/g, '<span class="hl">$1</span>').replace(/(^|[\s(“"'])_([^_]+)_/g, '$1<i>$2</i>');
const h = (cls, css, html) => { const d = document.createElement('div'); if (cls) d.className = cls; if (css) Object.assign(d.style, css); if (html != null) d.innerHTML = html; return d; };

/* ------------------------------------------------------------ svg helpers (all coordinates in the 968x560 panel) */
const ic = (name, x, y, size, color, sw) => `<g transform="translate(${x - size / 2} ${y - size / 2}) scale(${size / 100})" style="color:${color}" fill="none" stroke="${color}" stroke-width="${sw || 6}" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.star}</g>`;
const T = (x, y, t, o) => { o = o || {}; return `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" dominant-baseline="middle" font-family="${o.f || 'Sans'}" font-weight="${o.w || 700}" font-size="${o.s || 28}" fill="${o.c || M.ink}" ${o.ls ? `letter-spacing="${o.ls}"` : ''}>${String(t).split('\n').map((l, i, a) => `<tspan x="${x}" dy="${i ? (o.s || 28) * 1.18 : -(a.length - 1) * (o.s || 28) * .59}">${esc(l)}</tspan>`).join('')}</text>`; };
const RR = (x, y, w, hh, r, fill, o) => `<rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="${r}" fill="${fill}" ${o || ''}/>`;
const shadow = `<defs><filter id="sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="14" stdDeviation="14" flood-color="#0B1F3A" flood-opacity=".14"/></filter>
  <marker id="ah" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${M.ink}"/></marker>
  <marker id="ahg" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${M.gold}"/></marker></defs>`;
const svg = inner => `<svg width="${PW}" height="${PH}" viewBox="0 0 ${PW} ${PH}" xmlns="http://www.w3.org/2000/svg">${shadow}${inner}</svg>`;
const arrowL = (x1, y1, x2, y2, gold, dash) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${gold ? M.gold : M.ink}" stroke-width="5" stroke-linecap="round" ${dash ? 'stroke-dasharray="2 12"' : ''} marker-end="url(#${gold ? 'ahg' : 'ah'})" fill="none"/>`;
const card = (x, y, w, hh, fill) => RR(x, y, w, hh, 28, fill || M.white, 'filter="url(#sh)"');
const disc = (x, y, r, fill) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
const pill = (cx, cy, t, fill, color, s) => { const w = Math.max(90, String(t).length * (s || 26) * .58 + 44); return RR(cx - w / 2, cy - 30, w, 60, 30, fill) + T(cx, cy + 1, t, { s: s || 26, c: color || M.ink }); };

/* ------------------------------------------------------------ graphics */
const G = {};

G.day = d => {      // a working day chopped into chips, one tiny gold slot of real work
  const segs = d.segments || ['email', 'meeting', 'chat', 'email', 'tabs', 'meeting'], gi = d.gold_at != null ? d.gold_at : Math.floor(segs.length / 2);
  const x0 = 50, w = PW - 100, y = 200, hh = 150, gap = 10, gw = 50, n = segs.length;
  const cw = (w - gw - gap * n) / n; let x = x0, out = '', gx = x0;
  out += T(x0, 150, d.start || '9:00', { a: 'start', s: 26, c: M.muted }) + T(x0 + w, 150, d.end || '17:00', { a: 'end', s: 26, c: M.muted });
  segs.forEach((s, i) => {
    out += card(x, y, cw, hh, i % 2 ? M.white : M.blue) + T(x + cw / 2, y + hh / 2, s, { s: Math.min(32, (cw - 16) / (s.length * .6)) });
    x += cw + gap;
    if (i === gi) { out += RR(x, y - 16, gw, hh + 32, 14, M.gold2, 'filter="url(#sh)"'); gx = x + gw / 2; x += gw + gap; }
  });
  const gl = d.gold || 'the real work', pw = Math.max(90, gl.length * 26 * .58 + 44), px = Math.min(Math.max(gx, pw / 2 + 24), PW - pw / 2 - 24);
  out += `<path d="M${px} 458 Q ${px} ${y + hh + 60} ${gx} ${y + hh + 30}" stroke="${M.gold}" stroke-width="5" fill="none" stroke-linecap="round" marker-end="url(#ahg)"/>` + pill(px, 488, gl, M.ink, M.white, 26);
  if (d.caption) out += T(x0, 92, d.caption, { a: 'start', s: 26, c: M.muted, ls: 3 });
  return svg(out);
};

G.compare = d => {  // two cards: the problem side and the better side (gold)
  const L = d.left || {}, R = d.right || {}; let out = '';
  [[L, 60, false], [R, 504, true]].forEach(([c, x, gold]) => {
    out += card(x, 60, 404, 440, gold ? M.goldwash : M.white);
    out += disc(x + 202, 140, 52, gold ? M.gold2 : M.blue) + ic(c.icon || (gold ? 'brain' : 'mail'), x + 202, 140, 62, M.ink, 7);
    out += T(x + 202, 232, (c.t || '').toUpperCase(), { s: 32, w: 800, ls: 1 });
    (c.items || []).slice(0, 4).forEach((it, k) => { out += T(x + 60, 300 + k * 50, (gold ? '✓  ' : '•  ') + it, { a: 'start', s: 27, w: 600, c: M.ink2 }); });
  });
  return svg(out);
};

G.residue = d => {  // task A -> task B, and a meter showing part of you left behind
  const share = Math.min(.8, Math.max(.15, (d.share || 40) / 100)); let out = '';
  out += card(70, 70, 330, 170, M.white) + ic(d.a_icon || 'mail', 140, 155, 64, M.ink) + T(195, 155, d.a || 'Task A', { a: 'start', s: 32, w: 800 });
  out += card(568, 70, 330, 170, M.goldwash) + ic(d.b_icon || 'pencil', 638, 155, 64, M.ink) + T(693, 155, d.b || 'Task B', { a: 'start', s: 32, w: 800 });
  out += arrowL(415, 155, 550, 155) + T(483, 120, 'switch', { s: 22, c: M.muted });
  const bx = 70, bw = 828, by = 330;
  out += RR(bx, by, bw, 70, 35, M.blue2) + RR(bx + bw * share, by, bw * (1 - share), 70, 35, M.gold2) + RR(bx + bw * share, by, 40, 70, 0, M.gold2);
  out += T(bx + 30, by + 36, d.left_label || 'still on task A', { a: 'start', s: 26 }) + T(bx + bw - 30, by + 36, d.right_label || 'on task B', { a: 'end', s: 26 });
  out += T(PW / 2, 470, d.caption || 'your attention, right after switching', { s: 26, c: M.muted, w: 600 });
  return svg(out);
};

G.dips = d => {     // focus level with a dip after every "quick check"
  const L = 80, R = 900, top = 120, B = 440, checks = d.checks || [0.22, 0.48, 0.74]; let path = `M${L} ${top + 30}`, out = '';
  const pts = []; for (let i = 0; i <= 100; i++) { const t = i / 100; let v = 1; checks.forEach(c => { const dt = t - c; if (dt >= 0) v -= .62 * Math.exp(-dt * 16); }); pts.push([L + (R - L) * t, top + 30 + (1 - Math.max(.18, v)) * (B - top - 60)]); }
  path = 'M' + pts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L');
  out += `<line x1="${L}" x2="${R}" y1="${B}" y2="${B}" stroke="${M.ink}" stroke-width="4"/><line x1="${L}" x2="${L}" y1="${top - 20}" y2="${B}" stroke="${M.ink}" stroke-width="4"/>`;
  out += `<line x1="${L}" x2="${R}" y1="${top + 30}" y2="${top + 30}" stroke="${M.gold}" stroke-width="3" stroke-dasharray="6 10"/>` + T(R, top + 2, d.full || 'full focus', { a: 'end', s: 22, c: '#8A5A00' });
  out += `<path d="${path} L${R} ${B} L${L} ${B}Z" fill="${M.blue}"/><path d="${path}" fill="none" stroke="${M.ink}" stroke-width="7" stroke-linejoin="round"/>`;
  checks.forEach(c => { const x = L + (R - L) * c; out += disc(x, top - 30, 32, M.white) + ic(d.icon || 'mail', x, top - 30, 40, M.ink, 7) + `<line x1="${x}" x2="${x}" y1="${top + 4}" y2="${B}" stroke="${M.ink}" stroke-width="2" stroke-dasharray="3 8" opacity=".4"/>`; });
  out += T(L, B + 40, d.x0 || '9:00', { a: 'start', s: 22, c: M.muted }) + T(R, B + 40, d.x1 || '12:00', { a: 'end', s: 22, c: M.muted });
  return svg(out);
};

G.stat = d => {     // one big number with a split bar
  const share = Math.min(.95, Math.max(.05, (d.share || 40) / 100)); let out = '';
  out += card(60, 60, 848, 250, M.white) + T(PW / 2, 160, d.value || '40%', { s: 130, w: 800, c: M.ink, f: 'News' }) + T(PW / 2, 262, d.label || '', { s: 28, w: 700, c: M.muted });
  const bx = 60, bw = 848, by = 360;
  out += RR(bx, by, bw, 80, 40, M.blue2) + RR(bx, by, bw * share, 80, 40, M.gold2) + RR(bx + bw * share - 40, by, 40, 80, 0, M.gold2);
  out += T(bx + 30, by + 41, d.left || 'habits', { a: 'start', s: 28, w: 800 }) + T(bx + bw - 30, by + 41, d.right || 'decisions', { a: 'end', s: 28, w: 800 });
  if (d.caption) out += T(PW / 2, 500, d.caption, { s: 22, c: M.muted, w: 600 });
  return svg(out);
};

G.cards = d => {    // 2-3 icon cards in a row (groups, ideas, abilities)
  const it = (d.items || []).slice(0, 3), n = it.length || 1, gap = 34, w = (PW - 120 - gap * (n - 1)) / n; let out = '';
  it.forEach((c, i) => {
    const x = 60 + i * (w + gap), gold = c.hl;
    out += card(x, 80, w, 400, gold ? M.goldwash : M.white) + disc(x + w / 2, 190, 70, gold ? M.gold2 : M.blue) + ic(c.icon || 'star', x + w / 2, 190, 80, M.ink, 6);
    out += T(x + w / 2, 320, c.t || '', { s: 30, w: 800 });
    if (c.sub) out += T(x + w / 2, 400, c.sub, { s: 24, w: 600, c: M.muted });
  });
  return svg(out);
};

G.converge = d => { // inputs -> one gold result
  const it = (d.inputs || []).slice(0, 3); let out = '';
  it.forEach((t, i) => { const y = 150 + i * (it.length > 2 ? 130 : 240) - (it.length > 2 ? 30 : 0); out += card(60, y - 60, 380, 120, M.white) + disc(120, y, 34, M.blue) + T(120, y + 2, String(i + 1), { s: 30, w: 800 }) + T(175, y, t, { a: 'start', s: Math.min(28, 250 / (String(t).length * .56)), w: 700 }); out += arrowL(452, y, 590, 280); });
  out += disc(740, 280, 150, M.gold2) + ic(d.icon || 'target', 740, 240, 90, M.ink, 6) + T(740, 345, d.result || 'result', { s: 30, w: 800 });
  return svg(out);
};

G.gap = d => {      // value climbs, supply falls, the shaded gap is the opportunity
  const L = 90, R = 880, B = 440, top = 70, up = [], dn = [];
  for (let i = 0; i <= 40; i++) { const t = i / 40, x = L + (R - L) * t; up.push([x, B - 110 - Math.pow(t, 2.1) * 250]); dn.push([x, B - 110 + Math.pow(t, 1.4) * 60]); }
  const P = a => a.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L');
  let out = `<line x1="${L}" x2="${R + 20}" y1="${B}" y2="${B}" stroke="${M.ink}" stroke-width="4"/><line x1="${L}" x2="${L}" y1="${top}" y2="${B}" stroke="${M.ink}" stroke-width="4"/>`;
  out += `<path d="M${P(up.slice(16))} L${P(dn.slice(16).reverse())}Z" fill="${M.goldwash}"/>`;
  out += `<path d="M${P(up)}" fill="none" stroke="${M.gold}" stroke-width="9" stroke-linecap="round"/><path d="M${P(dn)}" fill="none" stroke="${M.ink}" stroke-width="9" stroke-linecap="round"/>`;
  out += T(R, up[40][1] - 34, d.up || 'value of focus', { a: 'end', s: 26, c: '#8A5A00', w: 800 }) + T(R, dn[40][1] + 38, d.down || 'people who can do it', { a: 'end', s: 26, w: 800 });
  out += pill(560, 250, d.gap || 'your opportunity', M.ink, M.white, 26) + T(R + 10, B + 34, 'time', { a: 'end', s: 22, c: M.muted });
  return svg(out);
};

G.formula = d => {  // result = a x b
  const p = d.parts || ['Result', 'A', 'B'], icons = d.icons || ['star', 'clock', 'fire']; let out = '';
  out += card(234, 50, 500, 150, M.gold2) + ic(icons[0], 314, 125, 70, M.ink) + T(370, 125, p[0], { a: 'start', s: 34, w: 800 });
  out += T(484, 245, '=', { s: 64, w: 800 });
  out += card(60, 300, 370, 150, M.white) + ic(icons[1], 130, 375, 64, M.ink) + T(180, 375, p[1], { a: 'start', s: 30, w: 800 });
  out += T(484, 375, '×', { s: 64, w: 800 });
  out += card(538, 300, 370, 150, M.white) + ic(icons[2], 608, 375, 64, M.ink) + T(658, 375, p[2], { a: 'start', s: 30, w: 800 });
  if (d.note) out += T(PW / 2, 508, d.note, { s: 24, c: M.muted, w: 600 });
  return svg(out);
};

G.flow = d => {     // steps with icons, last one is the payoff (gold)
  const st = (d.steps || []).slice(0, 4), n = st.length || 1, gap = 60, w = (PW - 100 - gap * (n - 1)) / n; let out = '';
  st.forEach((s, i) => {
    const x = 50 + i * (w + gap), last = i === n - 1;
    out += card(x, 110, w, 330, last ? M.goldwash : M.white) + disc(x + w / 2, 200, 58, last ? M.gold2 : M.blue) + ic(s.icon || 'star', x + w / 2, 200, 66, M.ink, 6);
    out += T(x + w / 2, 315, s.t || '', { s: Math.min(30, (w - 30) / (Math.max(...String(s.t || '').split('\n').map(l => l.length)) * .58)), w: 800 });
    if (s.sub) out += T(x + w / 2, 395, s.sub, { s: 22, w: 600, c: M.muted });
    if (i < n - 1) out += arrowL(x + w + 10, 275, x + w + gap - 12, 275);
  });
  return svg(out);
};

G.calendar = d => { // a day with one protected gold block
  const hrs = d.hours || ['8:00', '9:00', '10:00', '11:00', '12:00'], blk = d.block == null ? 1 : d.block, other = d.other || {}; let out = card(60, 40, 560, 480, M.white);
  const rh = 420 / hrs.length;
  hrs.forEach((t, i) => {
    const y = 70 + i * rh;
    out += T(100, y + 18, t, { a: 'start', s: 24, c: M.muted, w: 600 }) + `<line x1="190" x2="590" y1="${y}" y2="${y}" stroke="${M.blue2}" stroke-width="2"/>`;
    if (i === blk) out += RR(200, y + 8, 380, rh - 16, 16, M.gold2) + ic('lock', 240, y + rh / 2, 40, M.ink, 8) + T(275, y + rh / 2, d.label || 'DEEP WORK', { a: 'start', s: 30, w: 800 });
    else if (other[i]) out += RR(200, y + 10, 380, rh - 20, 14, M.blue) + T(230, y + rh / 2, other[i], { a: 'start', s: 24, w: 600, c: M.ink2 });
  });
  (d.rules || []).slice(0, 3).forEach((r, i) => { out += card(660, 70 + i * 150, 260, 120, i ? M.white : M.ink) + T(790, 130 + i * 150, r, { s: 24, w: 800, c: i ? M.ink : M.white }); });
  return svg(out);
};

G.tracker = d => {  // a week of focus hours climbing towards a target
  const v = d.values || [0.5, 1, 1, 1.5, 2], labels = d.labels || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], mx = Math.max(d.target || 0, ...v) || 1, L = 120, B = 450, H = 320, w = 100, gap = (PW - 2 * L - v.length * w) / (v.length - 1); let out = '';
  out += `<line x1="${L - 40}" x2="${PW - L + 40}" y1="${B}" y2="${B}" stroke="${M.ink}" stroke-width="4"/>`;
  if (d.target) { const ty = B - d.target / mx * H; out += `<line x1="${L - 40}" x2="${PW - L + 40}" y1="${ty}" y2="${ty}" stroke="${M.gold}" stroke-width="4" stroke-dasharray="10 10"/>` + T(L - 40, ty - 26, d.target_label || 'goal', { a: 'start', s: 24, c: '#8A5A00', w: 800 }); }
  v.forEach((x, i) => { const bh = x / mx * H, bx = L + i * (w + gap), last = i === v.length - 1; out += RR(bx, B - bh, w, bh, 16, last ? M.gold2 : M.blue2) + T(bx + w / 2, B - bh - 26, (d.fmt || '{v}h').replace('{v}', x), { s: 26, w: 800 }) + T(bx + w / 2, B + 34, labels[i] || '', { s: 24, c: M.muted, w: 600 }); });
  if (d.caption) out += T(PW / 2, 70, d.caption, { s: 24, c: M.muted, w: 600 });
  return svg(out);
};

G.chain = d => {    // recap: idea -> idea -> idea, last gold
  const st = (d.steps || []).slice(0, 6), perRow = st.length > 3 ? Math.ceil(st.length / 2) : st.length, w = 250, gapX = (PW - 80 - perRow * w) / Math.max(1, perRow - 1); let out = '';
  st.forEach((s, i) => {
    const r = Math.floor(i / perRow), c = i % perRow, x = 40 + c * (w + gapX), y = (st.length > 3 ? 120 : 220) + r * 200, last = i === st.length - 1;
    out += card(x, y, w, 120, last ? M.gold2 : (i % 2 ? M.white : M.blue)) + T(x + w / 2, y + 60, s, { s: 26, w: 800 });
    if (c < perRow - 1 && i < st.length - 1) out += arrowL(x + w + 6, y + 60, x + w + gapX - 8, y + 60);
    else if (i < st.length - 1) out += `<path d="M${x + w / 2} ${y + 132} C ${x + w / 2} ${y + 175}, ${40 + w / 2} ${y + 150}, ${40 + w / 2} ${y + 190}" stroke="${M.ink}" stroke-width="5" fill="none" marker-end="url(#ah)"/>`;
  });
  return svg(out);
};

/* ---------- graphics that make the reader THINK (self-tests, paradoxes, metaphors, personal maths, worksheets) ---------- */
const box = (x, y, sz, on) => RR(x, y, sz, sz, 9, on ? M.gold2 : M.white, `stroke="${M.ink}" stroke-width="3.5"`) + (on ? `<path d="M${x + sz * .22} ${y + sz * .52} l${sz * .2} ${sz * .2} l${sz * .38} ${sz * .42 - sz}" transform="translate(0 ${sz * .02})" fill="none" stroke="${M.ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>` : '');

G.checklist = d => {  // a self-test: the reader ticks their own boxes
  const it = (d.items || []).slice(0, 8), on = new Set(d.checked || []), half = Math.ceil(it.length / 2); let out = '';
  if (d.title) out += T(60, 62, d.title, { a: 'start', s: 30, w: 800 });
  it.forEach((t, i) => { const c = i < half ? 0 : 1, r = i % half, x = 50 + c * 336, y = 112 + r * 92; out += box(x, y, 46, on.has(i)) + T(x + 62, y + 24, t, { a: 'start', s: Math.min(25, 250 / (t.length * .52)), w: 600, c: M.ink2 }); });
  out += card(730, 110, 190, 320, M.ink) + T(825, 200, d.count_label || 'your score', { s: 22, w: 700, c: '#C9D8EE' }) + T(825, 290, `__/${it.length}`, { s: 78, w: 800, c: M.gold2, f: 'News' }) + T(825, 372, d.count_note || 'be honest', { s: 22, w: 700, c: '#C9D8EE' });
  if (d.note) out += T(60, 515, d.note, { a: 'start', s: 23, w: 600, c: M.muted });
  return svg(out);
};

G.floorplan = d => {   // a paradox: can't draw the map, can walk the path
  let out = card(50, 50, 400, 460, M.white);
  out += T(250, 92, d.left || 'what he could draw', { s: 24, w: 800, c: M.muted });
  for (let k = 0; k < 5; k++) { const x = 110 + (k * 53) % 230, y = 170 + (k * 71) % 230; out += T(x, y, '?', { s: 58, w: 800, c: M.blue2, f: 'News' }); }
  out += `<path d="M110 300 q40 -60 80 -10 t90 20" fill="none" stroke="${M.blue2}" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 14"/>`;
  out += T(250, 470, d.left_note || 'a blank page', { s: 24, w: 700, c: M.ink2 });
  out += card(518, 50, 400, 460, M.white) + T(718, 92, d.right || 'where his feet went', { s: 24, w: 800, c: M.muted });
  const rx = 548, ry = 120, rw = 340, rh = 300;
  out += `<rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" fill="none" stroke="${M.ink}" stroke-width="5" rx="6"/><line x1="${rx + 190}" y1="${ry}" x2="${rx + 190}" y2="${ry + 120}" stroke="${M.ink}" stroke-width="5"/><line x1="${rx}" y1="${ry + 170}" x2="${rx + 130}" y2="${ry + 170}" stroke="${M.ink}" stroke-width="5"/><line x1="${rx + 200}" y1="${ry + 170}" x2="${rx + rw}" y2="${ry + 170}" stroke="${M.ink}" stroke-width="5"/>`;
  out += T(rx + 95, ry + 60, d.room_a || 'living room', { s: 20, w: 700, c: M.muted }) + T(rx + 265, ry + 60, d.room_b || 'bedroom', { s: 20, w: 700, c: M.muted }) + T(rx + 24, ry + 280, d.room_c || 'kitchen', { a: 'start', s: 22, w: 800, c: '#8A5A00' });
  out += `<path d="M${rx + 70} ${ry + 110} C ${rx + 90} ${ry + 200}, ${rx + 150} ${ry + 150}, ${rx + 170} ${ry + 220} S ${rx + 240} ${ry + 280}, ${rx + 290} ${ry + 262}" fill="none" stroke="${M.gold}" stroke-width="7" stroke-linecap="round" stroke-dasharray="1 16" marker-end="url(#ahg)"/>`;
  out += disc(rx + 70, ry + 110, 14, M.ink) + ic(d.goal_icon || 'heart', rx + 308, ry + 220, 44, M.ink, 7);
  out += T(718, 470, d.right_note || 'straight to the snacks', { s: 24, w: 700, c: M.ink2 });
  return svg(out);
};

G.pairs = d => {      // the experiment, so the reader feels it
  const pr = (d.pairs || [['key', 'clock'], ['coin', 'star'], ['bulb', 'heart']]).slice(0, 3), pick = d.picks || [0, 1, 0]; let out = '';
  pr.forEach((p, i) => {
    const x = 50 + i * 300;
    out += card(x, 60, 268, 300, M.white) + T(x + 134, 100, `PAIR ${i + 1}`, { s: 20, w: 800, c: M.muted, ls: 2 });
    p.forEach((icn, k) => { const cx = x + 72 + k * 124, chosen = pick[i] === k; out += disc(cx, 210, 50, chosen ? M.goldwash : M.blue) + ic(icn, cx, 210, 54, M.ink, 7) + (chosen ? `<circle cx="${cx}" cy="210" r="60" fill="none" stroke="${M.gold}" stroke-width="5"/>` + T(cx, 310, '✓ picked', { s: 20, w: 800, c: '#8A5A00' }) : T(cx, 310, '', {})); });
  });
  out += card(50, 400, 868, 110, M.ink) + T(484, 438, d.line1 || '“Have you seen these before?”  “No.”', { s: 27, w: 700, c: M.white }) + T(484, 478, d.line2 || 'He still picked the right one, more often every week.', { s: 24, w: 700, c: M.gold2 });
  return svg(out);
};

G.tracks = d => {     // a metaphor: two separate tracks, one broken, one running
  const rail = (y, broken) => { let o = ''; for (let x = 70; x < 900; x += 34) if (!(broken && x > 400 && x < 560)) o += RR(x, y - 22, 12, 44, 3, '#C9B79A'); o += broken ? `<line x1="60" x2="400" y1="${y - 12}" y2="${y - 12}" stroke="${M.ink}" stroke-width="5"/><line x1="60" x2="400" y1="${y + 12}" y2="${y + 12}" stroke="${M.ink}" stroke-width="5"/><line x1="560" x2="908" y1="${y - 12}" y2="${y - 12}" stroke="${M.ink}" stroke-width="5"/><line x1="560" x2="908" y1="${y + 12}" y2="${y + 12}" stroke="${M.ink}" stroke-width="5"/>` : `<line x1="60" x2="908" y1="${y - 12}" y2="${y - 12}" stroke="${M.ink}" stroke-width="5"/><line x1="60" x2="908" y1="${y + 12}" y2="${y + 12}" stroke="${M.ink}" stroke-width="5"/>`; return o; };
  let out = T(60, 70, d.top || 'MEMORY', { a: 'start', s: 26, w: 800, ls: 2 }) + rail(150, true) + T(480, 150, '✗', { s: 70, w: 800, c: M.red });
  out += T(60, 300, d.bottom || 'HABIT  ·  basal ganglia', { a: 'start', s: 26, w: 800, ls: 2, c: '#8A5A00' }) + rail(380, false);
  out += RR(600, 340, 210, 80, 22, M.gold2, 'filter="url(#sh)"') + T(705, 380, d.train || 'still running', { s: 26, w: 800 }) + arrowL(820, 380, 880, 380, true);
  out += T(60, 205, d.top_note || 'new facts: lost in moments', { a: 'start', s: 22, w: 600, c: M.muted }) + T(60, 450, d.bottom_note || 'routines: kept working', { a: 'start', s: 22, w: 600, c: M.muted });
  return svg(out);
};

G.hours = d => {      // personal maths: what a % means in your own day
  const n = d.total || 16, k = d.filled || 6.4, CX = 250, CY = 280, R = 190; let out = '';
  for (let i = 0; i < n; i++) { const a0 = -Math.PI / 2 + i * 2 * Math.PI / n + .03, a1 = a0 + 2 * Math.PI / n - .06, f = Math.min(1, Math.max(0, k - i));
    const seg = (b, col) => `<path d="M${CX + Math.cos(a0) * R} ${CY + Math.sin(a0) * R} A${R} ${R} 0 0 1 ${CX + Math.cos(b) * R} ${CY + Math.sin(b) * R}" stroke="${col}" stroke-width="64" fill="none"/>`;
    out += seg(a1, M.blue2); if (f > 0) out += seg(a0 + (a1 - a0) * f, M.gold2); }
  out += T(CX, CY - 18, d.center || '≈ 6 h', { s: 72, w: 800, f: 'News' }) + T(CX, CY + 44, d.center_label || 'on autopilot', { s: 24, w: 700, c: M.muted });
  out += card(520, 90, 400, 380, M.white) + T(720, 160, d.r1 || '16 waking hours', { s: 30, w: 800 }) + T(720, 220, '× 40%', { s: 40, w: 800, c: '#8A5A00', f: 'News' }) + `<line x1="580" x2="860" y1="262" y2="262" stroke="${M.ink}" stroke-width="3"/>` + T(720, 310, d.r3 || '≈ 6½ hours a day', { s: 32, w: 800 }) + T(720, 380, d.r4 || 'that you don’t really choose', { s: 24, w: 700, c: M.muted }) + T(720, 430, d.note || 'rough maths, not a measurement', { s: 20, w: 600, c: M.muted });
  return svg(out);
};

G.questions = d => {  // a quick test: questions you can't answer without stopping to think
  const q = (d.items || []).slice(0, 4), n = q.length || 1, w = (848 - 30 * (n > 2 ? 1 : n - 1)) / (n > 2 ? 2 : n); let out = '';
  q.forEach((t, i) => { const c = n > 2 ? i % 2 : i, r = n > 2 ? Math.floor(i / 2) : 0, x = 60 + c * (w + 30), y = (n > 2 ? 50 : 120) + r * 235, hh = 205;
    const wrapped = t.length > 20 ? t.replace(new RegExp('^(.{' + Math.floor(t.length / 2 - 6) + ',' + Math.ceil(t.length / 2 + 6) + '}?) '), '$1\n') : t;
    out += card(x, y, w, hh, i === 0 ? M.goldwash : M.white) + T(x + 50, y + 62, '?', { s: 70, w: 800, f: 'News', c: i === 0 ? '#8A5A00' : M.blue2 }) + T(x + 100, y + 78, wrapped, { a: 'start', s: Math.min(28, (w - 130) / (Math.max(...wrapped.split('\n').map(l => l.length)) * .55)), w: 800 }) + `<line x1="${x + 100}" x2="${x + w - 40}" y1="${y + 160}" y2="${y + 160}" stroke="${M.blue2}" stroke-width="4" stroke-dasharray="10 10"/>`; });
  if (d.note) out += T(PW / 2, 530, d.note, { s: 22, w: 600, c: M.muted });
  return svg(out);
};

G.iceberg = d => {    // a metaphor: what you notice vs what runs underneath
  const wl = 170; let out = RR(0, wl, PW, PH - wl, 0, '#DCE7F5') + `<path d="M0 ${wl} Q 120 ${wl - 10} 240 ${wl} T 480 ${wl} T 720 ${wl} T 968 ${wl}" fill="none" stroke="${M.blue2}" stroke-width="4"/>`;
  out += `<path d="M420 ${wl} L470 70 L520 110 L560 ${wl} Z" fill="${M.white}" stroke="${M.ink}" stroke-width="4" stroke-linejoin="round"/>`;
  out += `<path d="M420 ${wl} L250 300 L300 470 L640 520 L760 360 L560 ${wl} Z" fill="${M.white}" opacity=".85" stroke="${M.ink}" stroke-width="4" stroke-linejoin="round"/>`;
  out += T(620, 70, d.top || 'choices you notice', { a: 'start', s: 26, w: 800 }) + arrowL(612, 74, 535, 100);
  (d.items || ['phone checks', 'the same route', 'snacking', 'tone of voice']).slice(0, 4).forEach((t, i) => { out += pill(400 + (i % 2) * 215, 270 + Math.floor(i / 2) * 95, t, i === 0 ? M.gold2 : M.blue, M.ink, 22); });
  out += T(40, 470, (d.bottom || 'habits running quietly underneath').replace(/^(\S+ \S+) /, '$1\n'), { a: 'start', s: 24, w: 800, c: M.ink2 }) + arrowL(250, 470, 330, 470);
  return svg(out);
};

G.tally = d => {      // a worksheet the reader can screenshot and use
  const rows = (d.rows || ['Picked up phone', 'Opened an app', 'Snacked', 'Checked email']).slice(0, 4); let out = card(60, 40, 848, 480, M.white);
  out += T(100, 95, d.title || 'ONE-HOUR WATCH', { a: 'start', s: 28, w: 800, ls: 2 }) + T(868, 95, d.time || '__:__ to __:__', { a: 'end', s: 26, w: 700, c: M.muted });
  out += `<line x1="100" x2="868" y1="130" y2="130" stroke="${M.ink}" stroke-width="3"/>`;
  rows.forEach((r, i) => { const y = 180 + i * 72; out += T(100, y, r, { a: 'start', s: 27, w: 700, c: M.ink2 }) + `<line x1="470" x2="868" y1="${y + 18}" y2="${y + 18}" stroke="${M.blue2}" stroke-width="3" stroke-dasharray="8 10"/>`; if (i === 0) out += T(480, y - 2, d.example || '|||| ||', { a: 'start', s: 32, w: 800, c: '#8A5A00' }); });
  out += RR(100, 450, 768, 52, 14, M.goldwash) + T(124, 477, d.total || 'Done before I decided: ____', { a: 'start', s: 26, w: 800 });
  return svg(out);
};

G.prompt = d => {     // one question to sit with
  let out = card(60, 60, 848, 440, M.ink) + T(130, 150, '“', { s: 160, w: 800, f: 'News', c: M.gold2 });
  const words = String(d.q || '').split(' '), lines = []; let cur = '';
  words.forEach(w => { if ((cur + ' ' + w).trim().length > 30) { lines.push(cur.trim()); cur = w; } else cur += ' ' + w; }); if (cur.trim()) lines.push(cur.trim());
  lines.slice(0, 4).forEach((l, i) => { out += T(150, 220 + i * 62, l, { a: 'start', s: 46, w: 800, f: 'News', c: M.white }); });
  if (d.note) out += T(150, 460, d.note, { a: 'start', s: 24, w: 700, c: M.gold2 });
  return svg(out);
};

G.book = (d, D) => `<div style="position:absolute;inset:0;background:radial-gradient(circle at 50% 55%,${M.goldwash},${M.panel} 60%)"></div>
  <div class="card" style="left:254px;top:70px;width:460px;height:368px;transform:rotate(-3deg)"><img src="${D.cover || ''}"></div>
  ${d.chip ? `<div style="position:absolute;left:0;right:0;top:470px;text-align:center"><span style="display:inline-block;background:${M.ink};color:#fff;font-family:Sans;font-weight:800;font-size:26px;padding:12px 26px;border-radius:999px">${esc(d.chip)}</span></div>` : ''}`;

/* ------------------------------------------------------------ text */
function bodyHTML(blocks) {
  return (blocks || []).map(b => {
    if (typeof b === 'string') return `<p>${md(b)}</p>`;
    if (b.list) { const tag = b.style === 'num' ? 'ol' : 'ul'; return `<${tag} class="${b.style || ''}">${b.list.map(x => `<li>${md(x)}</li>`).join('')}</${tag}>`; }
    if (b.instead || b.try) return `<div class="it">${b.instead ? `<span class="k no">✗ Instead of</span><span>${md(b.instead)}</span>` : ''}${b.try ? `<span class="k yes">✓ Try</span><span><b>${md(b.try)}</b></span>` : ''}</div>`;
    if (b.big) return `<p class="big">${md(b.big)}</p>`;
    return '';
  }).join('');
}
function fitFont(e, prop, max, min, ok) { let f = max; e.style[prop] = f + 'px'; while (f > min && !ok()) { f -= 1; e.style[prop] = f + 'px'; } return f; }

/* ------------------------------------------------------------ slides */
const SL = {};
SL.cover = (el, s, D) => {      // hook headline, one credit line, then a big book inside the ring
  const t = h('cv-title', { fontSize: '104px', lineHeight: '1.0', left: '70px', width: '940px', top: '74px' }, md(s.title || D.book));
  el.append(t); fitFont(t, 'fontSize', 104, 66, () => t.offsetHeight <= 320);
  const y1 = 74 + t.offsetHeight + 24;
  const credit = s.sub ? md(s.sub) : `A ${esc(s.minutes || 2)}-minute lesson from <b style="font-style:normal;color:${M.ink}">${esc(D.book)}</b>${D.author ? ` by ${esc(D.author)}` : ''}`;
  const sub = h('cv-sub', { top: y1 + 'px', fontSize: '33px', left: '60px', width: '960px' }, credit); el.append(sub);
  const R = 360, cy = Math.max(880, y1 + sub.offsetHeight + 60 + R);
  el.append(h('', { position: 'absolute', left: 540 - 470 + 'px', top: cy - 470 + 'px', width: '940px', height: '940px', borderRadius: '50%', background: `radial-gradient(circle, ${M.goldwash} 0%, rgba(255,243,209,0) 64%)` }));
  el.append(h('', { position: 'absolute', left: 540 - R + 'px', top: cy - R + 'px', width: 2 * R + 'px', height: 2 * R + 'px', borderRadius: '50%', border: `3px dashed ${M.blue2}` }));
  const bw = 380, bh = 570, bx = 540 - bw / 2, by = cy - bh / 2;
  const book = h('', { position: 'absolute', left: bx + 'px', top: by + 'px', width: bw + 'px', height: bh + 'px', transform: 'rotate(-4deg)' });
  book.append(h('', { position: 'absolute', left: '16px', top: '12px', width: bw + 'px', height: bh - 8 + 'px', borderRadius: '10px', background: 'repeating-linear-gradient(90deg,#fff 0 3px,#E6E9EF 3px 4px)', boxShadow: '0 60px 80px -34px rgba(11,31,58,.55)' }));
  const im = document.createElement('img'); im.src = D.book_art || D.cover || ''; Object.assign(im.style, { position: 'absolute', left: 0, top: 0, width: bw + 'px', height: bh + 'px', objectFit: D.book_art ? 'fill' : 'cover', borderRadius: '10px', boxShadow: '0 30px 50px -24px rgba(11,31,58,.45)' });
  book.append(im); el.append(book);
  el.append(h('', { position: 'absolute', right: '44px', top: cy + 200 + 'px', display: 'flex', alignItems: 'center', gap: '14px', background: M.ink, color: '#fff', fontFamily: 'Sans', fontWeight: 800, fontSize: '27px', padding: '15px 16px 15px 24px', borderRadius: '999px', boxShadow: `0 18px 34px -16px rgba(11,31,58,.6)` },
    `${esc(s.swipe || 'Swipe to fix it')}<span style="display:inline-flex;width:40px;height:40px;border-radius:50%;background:${M.gold2};color:${M.ink};align-items:center;justify-content:center;font-size:24px">→</span>`));
};

SL.lesson = (el, s, D) => {     // text on top, graphic panel underneath, whole stack centred
  const t = h('ttl', { top: '0px' }, md(s.title || '')); el.append(t);
  fitFont(t, 'fontSize', 64, 44, () => t.offsetHeight <= 150);
  const b = h('bd', { top: '0px' }, bodyHTML(s.body)); el.append(b);
  const g = s.graphic && G[s.graphic.kind], p = g ? h('panel') : null;
  if (p) { p.innerHTML = g(s.graphic, D); el.append(p); }
  const ph = p ? PH : 0, gapTB = 30, gapBP = 48, M0 = 70;
  const room = 1350 - 2 * M0 - t.offsetHeight - gapTB - (p ? ph + gapBP : 0);
  fitFont(b, 'fontSize', 42, 27, () => b.offsetHeight <= room);
  const total = t.offsetHeight + gapTB + b.offsetHeight + (p ? gapBP + ph : 0), y0 = Math.max(M0, (1350 - total) / 2);
  t.style.top = y0 + 'px';
  b.style.top = y0 + t.offsetHeight + gapTB + 'px';
  if (p) p.style.top = y0 + t.offsetHeight + gapTB + b.offsetHeight + gapBP + 'px';
};

window.buildDeck = async () => {
  const D = window.CAROUSEL, deck = document.getElementById('deck');
  await document.fonts.ready;
  for (const f of ['800 40px News', 'italic 400 40px News', '400 40px News', '700 40px News', '800 40px Sans', '700 40px Sans', '700 40px Hand']) await document.fonts.load(f);
  D.slides.forEach((s, i) => { const el = h('slide'); el.id = 's' + (i + 1); deck.append(el); (SL[s.type] || SL.lesson)(el, s, D); });
  await Promise.all([...document.images].map(im => im.complete ? 0 : new Promise(r => { im.onload = im.onerror = r; })));
  return D.slides.length;
};
