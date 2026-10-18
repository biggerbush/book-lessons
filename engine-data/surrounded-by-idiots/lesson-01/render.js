rise($('tcrowd'),p(u,TM.frustrated,TM.frustrated+.6)); rise($('tbub'),p(u,TM.frustrated+1.2,TM.frustrated+1.7));
$('tbubi').setAttribute('transform','translate('+(3*Math.sin(t*16)).toFixed(1)+' 0)');
const lk=TM.businessman-4.2; rise($('tlens'),p(u,lk,lk+.5)); $('tlensi').setAttribute('transform','translate(0 '+(4*Math.sin(t*1.2)).toFixed(1)+')');

rise($('boss1w'),p(u,TM.businessman,TM.businessman+.5)); rise($('bub1'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
rise($('desk1'),p(u,TM.team_desks,TM.team_desks+.5)); rise($('blame1'),p(u,TM.team_desks+.6,TM.team_desks+1.1));
DK.forEach(g=>g.setAttribute('fill',u>=TM.team_desks+.6?'var(--loss)':'var(--ink)'));

rise($('q2'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('ring2'),p(u,TM.question_mark+.6,TM.question_mark+1.1)); rise($('man2'),p(u,TM.question_mark+.6,TM.question_mark+1.1));
const gp=u>=TM.gap_line; $('arr2').setAttribute('opacity',(p(u,TM.arrows_center,TM.arrows_center+.6)*(gp?.3:1)).toFixed(2));
MAN.setAttribute('fill',u>=TM.arrows_center+1&&!gp?'var(--loss)':'var(--ink)');
RG.forEach((g,i)=>g.setAttribute('fill',gp?GC[i%4]:'var(--ink)'));
rise($('nst2'),p(u,TM.arrows_center+7,TM.arrows_center+7.5)); rise($('dif2'),p(u,TM.gap_line,TM.gap_line+.5));

rise($('mail3'),p(u,TM.two_heads,TM.two_heads+.5)); rise($('p3'),p(u,TM.two_heads+.4,TM.two_heads+.9));
F3[0].setAttribute('fill',u>=TM.fast_reader?'var(--gain)':'var(--ink)'); F3[1].setAttribute('fill',u>=TM.hurt_reader?'var(--loss)':'var(--ink)');
rise($('b3a'),p(u,TM.fast_reader+.3,TM.fast_reader+.8)); rise($('b3b'),p(u,TM.hurt_reader+.3,TM.hurt_reader+.8));
rise($('nw3a'),p(u,TM.hurt_reader+5.8,TM.hurt_reader+6.3)); rise($('nw3b'),p(u,TM.hurt_reader+7.6,TM.hurt_reader+8.1));

rise($('mega4'),p(u,TM.megaphone,TM.megaphone+.5));
const wk=p(u,TM.megaphone+.5,TM.megaphone+1);
W4.forEach((w,i)=>{const f=(t*.2+i/4)%1; w.setAttribute('transform','translate('+(450+700*f).toFixed(1)+' 0)'); w.setAttribute('opacity',(Math.sin(Math.PI*f)*wk).toFixed(2)); w.setAttribute('stroke',u>=TM.ear?'var(--gain)':'var(--muted)')});
rise($('ear4'),p(u,TM.ear,TM.ear+.5)); rise($('tgt4'),p(u,TM.target,TM.target+.5)); rise($('txt4'),p(u,TM.target+.5,TM.target+1));

DOT.forEach((d,i)=>{const k=p(u,TM.pattern_grid+(i%9)*.05,TM.pattern_grid+1.5),j=6*(1-k);
  d.el.setAttribute('cx',(d.sx+(d.tx-d.sx)*k+j*Math.sin(t*1.3+i)).toFixed(1)); d.el.setAttribute('cy',(d.sy+(d.ty-d.sy)*k+j*Math.cos(t*1.1+i*2)).toFixed(1));
  d.el.setAttribute('opacity',p(u,TM.crowd+i*.02,TM.crowd+i*.02+.4).toFixed(2)); d.el.setAttribute('fill',u>=TM.four_colors+d.c*.6?COL[d.c]:'var(--muted)')});
LB.forEach((l,c)=>rise(l,p(u,TM.four_colors+c*.6,TM.four_colors+c*.6+.4))); rise($('disc5'),p(u,TM.four_colors,TM.four_colors+.5));
rise($('note5'),p(u,TM.four_colors+2.4,TM.four_colors+2.9));
rise($('blend5'),p(u,TM.blend_circle,TM.blend_circle+.5)); $('blend5i').setAttribute('transform','translate(1200 500) rotate('+((t*6)%360).toFixed(1)+')');
SL5.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.blend_circle+i*.3,TM.blend_circle+i*.3+.4).toFixed(2))); rise($('bl5t'),p(u,TM.blend_circle+1.2,TM.blend_circle+1.7));

rise($('sub6'),p(u,TM.magnifier,TM.magnifier+.5)); rise($('mag6'),p(u,TM.magnifier+.3,TM.magnifier+.8));
$('mag6i').setAttribute('transform','translate('+(12*Math.sin(t*.8)).toFixed(1)+' '+(8*Math.cos(t*1.1)).toFixed(1)+')');
rise($('box6'),p(u,TM.label_cross,TM.label_cross+.5)); rise($('x6'),p(u,TM.label_cross+1,TM.label_cross+1.4));
const ln=TM.label_cross+3.7; rise($('cap6b'),p(u,ln,ln+.5)); rise($('lens6'),p(u,ln+.3,ln+.8)); IN6.setAttribute('fill',u>=ln?'var(--gain)':'var(--ink)');

rise($('l7'),p(u,TM.blame_finger,TM.blame_finger+.5)); rise($('r7'),p(u,TM.curious_face,TM.curious_face+.5));
rise($('br7'),p(u,TM.bridge,TM.bridge+.5)); $('brp').setAttribute('stroke-dashoffset',(700*(1-p(u,TM.bridge+.4,TM.bridge+1.8))).toFixed(1));

rise($('one8'),p(u,TM.one_person,TM.one_person+.5)); rise($('g8'),p(u,TM.one_person+.3,TM.one_person+.8));
const qq=TM.one_person+4.1; rise($('qa'),p(u,qq,qq+.5)); rise($('qb'),p(u,qq+.4,qq+.9)); rise($('qc'),p(u,qq+.8,qq+1.3)); rise($('m8'),p(u,qq+1.4,qq+1.9));