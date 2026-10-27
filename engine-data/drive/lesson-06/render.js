rise($('t_fig'),p(u,TM.hook,TM.hook+.5));
TK.forEach((g,i)=>rise(g,p(u,TM.hook+.6+i*.6,TM.hook+1+i*.6)));
TF.forEach(e=>e.setAttribute('class',u>=TM.hook+4.6?'gain':'ink'));
rise($('t_ring'),p(u,TM.hook+4.6,TM.hook+5.2));
$('t_rc').setAttribute('transform','rotate('+(t*12).toFixed(1)+' 1330 380)');

rise($('stw'),p(u,TM.three_legs,TM.three_legs+.5));
const ct=p(u,TM.compass,TM.compass+1);
$('stool').setAttribute('transform','rotate('+(9*(1-ct)).toFixed(2)+' 270 640)');
rise($('leg3'),p(u,TM.compass,TM.compass+.5));rise($('cmp'),p(u,TM.compass,TM.compass+.5));
$('ndl').setAttribute('transform','rotate('+(30*Math.sin(t*2.4)*(1-ct)).toFixed(1)+' 480 250)');
rise($('carz'),p(u,TM.fast_car,TM.fast_car+.5));
const ca=t*1.4;$('car').setAttribute('transform','translate('+(1180+170*Math.cos(ca)).toFixed(1)+' '+(490+170*Math.sin(ca)).toFixed(1)+') rotate('+(ca*180/Math.PI+90).toFixed(1)+')');

rise($('clkg'),p(u,TM.clock,TM.clock+.5));
const cs=p(u,TM.clock,TM.clock+5);
$('hm').setAttribute('transform','rotate('+(-720*cs).toFixed(1)+' 340 480)');$('hh').setAttribute('transform','rotate('+(-60*cs).toFixed(1)+' 340 480)');
rise($('cards'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qm'),p(u,TM.question_mark+.6,TM.question_mark+1.1));
BL.forEach((b,i)=>rise(b,p(u,TM.question_mark+3.8+i*.25,TM.question_mark+4.1+i*.25)));
rise($('stl'),p(u,TM.question_mark+5.6,TM.question_mark+6.1));

rise($('grads'),p(u,TM.grads,TM.grads+.6));
const GA=[TM.money_path,TM.heart_path];
[['pm','gm','wm',330],['ph','gh','wh',670]].forEach((q,i)=>{const k=p(u,GA[i],GA[i]+1.2),e=$(q[0]);e.setAttribute('stroke-dashoffset',(1-k).toFixed(3));e.setAttribute('opacity',k>0?1:0);rise($(q[1]),p(u,GA[i]+.8,GA[i]+1.3));
  const f=(t*.3+i*.5)%1,g=1-f,w=$(q[2]);w.setAttribute('cx',(g*g*440+2*g*f*700+f*f*960).toFixed(1));w.setAttribute('cy',(g*g*500+(2*g*f+f*f)*q[3]).toFixed(1));w.setAttribute('opacity',u>=GA[i]+1.2?1:0)});

rise($('rl'),p(u,TM.happy_face,TM.happy_face+.6));rise($('rr'),p(u,TM.trophy,TM.trophy+.6));
rise($('rc'),p(u,TM.storm_cloud,TM.storm_cloud+.6));rise($('rx'),p(u,TM.storm_cloud+1.5,TM.storm_cloud+2.1));
$('cld').setAttribute('transform','translate('+(10*Math.sin(t*1.2)).toFixed(1)+' 0)');

rise($('scl'),p(u,TM.scale,TM.scale+.6));
// profit starts stacked on top of purpose (in front), slides left, then drops beside it: never overlapping
const sp1=p(u,TM.scale+2.9,TM.scale+3.5), sp2=p(u,TM.scale+3.5,TM.scale+3.9);
$('bpr').setAttribute('transform','translate('+(210*(1-sp1)).toFixed(1)+' '+(-90*(1-sp2)).toFixed(1)+')');
$('sl').textContent=sp2>.5?'PROFIT BESIDE PURPOSE':'PROFIT IN FRONT';
rise($('fuel'),p(u,TM.fuel_can,TM.fuel_can+.6));
DR.forEach((d,i)=>{const f=(t*.7+i/3)%1;d.setAttribute('cx',(1010+230*f).toFixed(1));d.setAttribute('cy',(470-90*Math.sin(Math.PI*f)).toFixed(1));d.setAttribute('opacity',u>=TM.fuel_can+.6?1:0)});
$('flm').setAttribute('transform','translate(1300 575) scale(1 '+(u>=TM.fuel_can+1?1+.3*Math.sin(t*9):.4).toFixed(2)+') translate(-1300 -575)');

rise($('org'),p(u,TM.speech_bubble,TM.speech_bubble+.6));rise($('outw'),p(u,TM.speech_bubble+.6,TM.speech_bubble+1.2));
$('wet').textContent=u>=TM.pronouns?'WE':'…';$('theyt').textContent=u>=TM.pronouns+1.5?'THEY':'…';
$('out').setAttribute('transform','translate('+(400*p(u,TM.outsider,TM.outsider+1.4)).toFixed(1)+' 0)');
rise($('outl'),p(u,TM.outsider+1,TM.outsider+1.6));

rise($('cash'),p(u,TM.cash,TM.cash+.6));
$('cashi').setAttribute('transform','rotate('+(3*Math.sin(t*2)).toFixed(2)+' 290 475)');
rise($('gift'),p(u,TM.gift_box,TM.gift_box+.6));
rise($('note'),p(u,TM.sticky_note,TM.sticky_note+.6));
$('nl').setAttribute('stroke-dashoffset',(1-p(u,TM.sticky_note+.8,TM.sticky_note+1.8)).toFixed(3));

rise($('qa'),p(u,TM.sentence,TM.sentence+.5));rise($('qb'),p(u,TM.sentence+.4,TM.sentence+.9));rise($('qc'),p(u,TM.sentence+.8,TM.sentence+1.3));
rise($('q2'),p(u,TM.sentence+5.8,TM.sentence+6.4));
rise($('pen'),p(u,TM.sentence+1.4,TM.sentence+1.9));
const lp=p(u,TM.sentence+1.6,TM.sentence+4);
$('sl8').setAttribute('stroke-dashoffset',(1-lp).toFixed(3));
$('pn').setAttribute('transform','translate('+(1150+280*lp).toFixed(1)+' '+(760+3*Math.sin(t*14)*(lp>0&&lp<1?1:0)).toFixed(1)+')');
rise($('dt8'),p(u,TM.sentence+4,TM.sentence+4.4));