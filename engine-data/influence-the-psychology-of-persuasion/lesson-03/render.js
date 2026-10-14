const R=(id,a,d)=>rise($(id),p(u,a,a+(d||.5)));
R('tbill',TM.lawn_sign);const y0=TM.lawn_sign+5.8;R('tsmall',y0);DRAW($('tarc'),p(u,y0+.6,y0+1.6));
$('tsb').setAttribute('transform','translate(0 '+(-5*Math.abs(Math.sin(t*3))).toFixed(1)+')');

R('trk',TM.racetrack);const ha=t*1.4;$('horse').setAttribute('cx',(420+240*Math.cos(ha)).toFixed(1));$('horse').setAttribute('cy',(480+125*Math.sin(ha)).toFixed(1));
R('tkt',TM.ticket);R('bars',TM.ticket+.3);const bh=150+210*p(u,TM.ticket+1,TM.ticket+2.5);$('ba').setAttribute('y',(700-bh).toFixed(1));$('ba').setAttribute('height',bh.toFixed(1));
R('n1',SC[2][0]/K-4.8);R('n2',SC[2][0]/K-2.2);

R('wm',TM.handshake);R('ap',TM.autopilot);$('run').setAttribute('cx',(860+580*((t*.5)%1)).toFixed(1));
const st=p(u,TM.autopilot+2.5,TM.autopilot+3.2);$('thk').setAttribute('opacity',(1-.55*st).toFixed(2));
$('thks').setAttribute('opacity',st.toFixed(2));$('thks').setAttribute('transform','translate(1366 275) scale('+(.6+.4*st).toFixed(3)+') translate(-1366 -275)');
R('stop',TM.autopilot+2.5);

R('nb',TM.researcher);$('res').setAttribute('transform','translate('+(-60*(1-p(u,TM.researcher,TM.researcher+1))).toFixed(1)+' 0)');
R('bill',TM.billboard);R('pa',TM.pie_17);const k17=p(u,TM.pie_17+.2,TM.pie_17+1.4);$('sl17').setAttribute('d',PIE(300,650,110,.17*k17));$('v17').textContent=Math.round(17*k17)+'%';
R('ss',TM.small_sign);

R('pb',TM.pie_76);const k76=p(u,TM.pie_76+.3,TM.pie_76+1.8);$('sl76').setAttribute('d',PIE(520,460,150,.76*k76));$('v76').textContent=Math.round(76*k76)+'%';
R('mir',TM.mirror);$('ref1').setAttribute('opacity',p(u,TM.citizen,TM.citizen+.8));R('cit',TM.citizen+.3);R('yes',TM.citizen+4.6);R('like',TM.citizen+4.6);

CHIPS.forEach((c,i)=>rise(c,p(u,TM.pen_paper+i*.8,TM.pen_paper+i*.8+.4)));R('paper',TM.pen_paper);
const w=5*p(u,TM.pen_paper+.8,TM.pen_paper+5);WL.forEach((l,i)=>DRAW(l,cl(w-i)));
const li=Math.min(4,Math.floor(w)),sg=p(u,TM.signed_page,TM.signed_page+1.5);DRAW($('sig'),sg);
const px=u>=TM.signed_page?200+250*sg:200+LW[li]*cl(w-li),py=u>=TM.signed_page?690:370+li*50;
$('pen').setAttribute('transform','translate('+px.toFixed(1)+' '+py+')');
R('stamp',TM.signed_page+1.6);R('proof',TM.signed_page+2);R('ord',TM.order_form);DRAW($('fl'),p(u,TM.order_form+1,TM.order_form+3));

R('car',TM.car_lot);R('tag',TM.price_tag);R('dec',TM.price_tag+3);
const er=p(u,TM.error,TM.error+.6);$('tags').setAttribute('opacity',er);$('tagp').style.stroke=u>=TM.error?'var(--loss)':'var(--ink)';R('err',TM.error+.6);
const fall=p(u,TM.error+1,TM.error+2.2),sp=p(u,TM.error+3.8,TM.error+4.6);
$('pc').setAttribute('transform','translate('+(70*fall).toFixed(1)+' '+(120*fall).toFixed(1)+') rotate('+(22*fall).toFixed(1)+' 1200 700)');$('pc').setAttribute('opacity',(1-fall).toFixed(2));
$('lb0').setAttribute('opacity',fall.toFixed(2));
$('slab').setAttribute('transform','translate(0 '+(24*fall*(1-sp)).toFixed(1)+')');
rise($('p0'),sp);rise($('p1'),sp);R('lb1',TM.error+4.4);

R('w1',TM.stomach);rise($('knotw'),p(u,TM.stomach+2.2,TM.stomach+2.7));const ks=1+.12*Math.abs(Math.sin(t*4));
$('knot').setAttribute('transform','translate(340 540) scale('+ks.toFixed(3)+') translate(-340 -540)');R('w1l',TM.stomach+2.2);
R('w2',TM.heart);$('hrt').setAttribute('transform','translate(1160 370) scale('+(1+.06*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');
R('q2a',TM.heart+4.2);R('q2b',TM.heart+4.6);R('q2c',TM.heart+5);

R('qa',TM.checklist);R('qb',TM.checklist+.4);R('qc',TM.checklist+.8);R('cl',TM.checklist+.4);R('qm',TM.checklist+1.5);R('ask',TM.checklist+5.4);