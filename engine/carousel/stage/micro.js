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
  out += arrowL(gx, 470, gx, y + hh + 30, true) + pill(gx, 488, d.gold || 'the real work', M.ink, M.white, 26);
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
SL.cover = (el, s, D) => {
  const t = h('cv-title', null, esc(s.title || D.book)); el.append(t); fitFont(t, 'fontSize', 170, 90, () => t.offsetHeight <= 330);
  const y1 = 70 + t.offsetHeight + 14;
  el.append(h('cv-sub', { top: y1 + 'px' }, esc(s.sub ? `(${s.sub})` : '')));
  el.append(h('', { position: 'absolute', left: '190px', top: '430px', width: '700px', height: '700px', borderRadius: '50%', background: `radial-gradient(circle, ${M.goldwash} 0%, rgba(255,243,209,0) 68%)` }));
  // orbit ring + small brand chips around the book
  el.append(h('', { position: 'absolute', left: '170px', top: '470px', width: '740px', height: '740px', borderRadius: '50%', border: `3px dashed ${M.blue2}` }));
  const c = h('card', { left: '250px', top: '560px', width: '580px', height: '464px', transform: 'rotate(-3deg)' }, `<img src="${D.cover || ''}">`); el.append(c);
  (s.chips || []).slice(0, 3).forEach((ch, i) => {
    const pos = [[150, 520], [770, 1010], [120, 1060]][i];
    el.append(h('', { position: 'absolute', left: pos[0] + 'px', top: pos[1] + 'px', background: i === 1 ? M.gold2 : '#fff', color: M.ink, fontFamily: 'Sans', fontWeight: 800, fontSize: '26px', padding: '14px 24px', borderRadius: '999px', boxShadow: '0 16px 30px -14px rgba(11,31,58,.35)', display: 'flex', alignItems: 'center', gap: '10px' }, `<span style="display:inline-flex;width:34px;height:34px;color:${M.ink}">${iconSVG(ch.icon || 'star', 34, 8)}</span>${esc(ch.t)}`));
  });
  el.append(h('', { position: 'absolute', left: '70px', top: '780px', fontFamily: 'News', fontSize: '34px', lineHeight: '1.15', color: M.ink }, `${esc(D.author || '')}<br><i style="font-size:26px;color:${M.muted}">${esc(s.role || 'Author')}</i>`));
  el.append(h('', { position: 'absolute', left: '90px', top: '870px' }, `<svg width="200" height="120"><path d="M20 0 C 20 60, 80 90, 170 80" fill="none" stroke="${M.ink}" stroke-width="3" stroke-dasharray="4 9" marker-end="url(#a1)"/><defs><marker id="a1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="${M.ink}"/></marker></defs></svg>`));
  el.append(h('swipe', { top: '760px' }, `Swipe <i>→</i>`));
  el.append(h('brand', null, 'VisualGrowth · book lessons'));
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
