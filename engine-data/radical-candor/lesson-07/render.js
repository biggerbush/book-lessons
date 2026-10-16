rise($('tt'),p(u,TM.team_table,TM.team_table+.6)); rise($('gear'),p(u,TM.team_table+5,TM.team_table+5.6));
$('gearR').setAttribute('transform','rotate('+((t*40)%360).toFixed(1)+' 1270 520)');

rise($('wheel'),p(u,TM.wheel,TM.wheel+.6));
WN.forEach((w,i)=>{const a=TM.seven_steps+i*.6; w[0].setAttribute('opacity',p(u,a,a+.4)); rise(w[1],p(u,a,a+.4))});
$('wh').setAttribute('transform','rotate('+(360*p(u,TM.seven_steps+5,TM.trust_hub-.2)).toFixed(1)+' 800 530)');
rise($('hub'),p(u,TM.trust_hub,TM.trust_hub+.6));

rise($('ear'),p(u,TM.ear,TM.ear+.5)); rise($('row'),p(u,TM.ear+.4,TM.ear+1));
IDS.forEach((c,i)=>{const k=(t*.5+i*.2)%1,x0=560+i*210; c.setAttribute('cx',(x0+(300-x0)*k).toFixed(1)); c.setAttribute('cy',(250+70*k-60*Math.sin(Math.PI*k)).toFixed(1)); c.setAttribute('opacity',u>=TM.ear+1?Math.sin(Math.PI*k).toFixed(2):0)});
rise($('jobs'),p(u,TM.steve_jobs,TM.steve_jobs+.5));
$('ja').setAttribute('transform','translate('+(8*Math.sin(t*4)).toFixed(1)+' 0)'); $('jb').setAttribute('transform','translate('+(-8*Math.sin(t*4)).toFixed(1)+' 0)');
rise($('cook'),p(u,TM.tim_cook,TM.tim_cook+.5)); QS.forEach((q,i)=>rise(q,p(u,TM.tim_cook+.6+i*.8,TM.tim_cook+1+i*.8)));
rise($('safe'),p(u,TM.tim_cook+5,TM.tim_cook+5.6));

rise($('pot'),p(u,TM.seedling,TM.seedling+.4)); const sg=p(u,TM.seedling+.3,TM.seedling+1.6);
$('stem').setAttribute('y2',(640-120*sg).toFixed(1)); $('leaves').setAttribute('opacity',p(u,TM.seedling+1.3,TM.seedling+1.9));
rise($('ws'),p(u,TM.workspace,TM.workspace+.6)); $('hand').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 420 380)');
rise($('clar'),p(u,TM.workspace+6.2,TM.workspace+6.8));

rise($('ring'),p(u,TM.debate_ring,TM.debate_ring+.6));
$('da').setAttribute('transform','translate('+(6*Math.sin(t*5)).toFixed(1)+' 0)'); $('db').setAttribute('transform','translate('+(-6*Math.sin(t*5)).toFixed(1)+' 0)');
rise($('scl'),p(u,TM.scale,TM.scale+.5)); const dk=p(u,TM.scale+.3,TM.scale+1.2);
$('beam').setAttribute('transform','rotate('+((1-dk)*8*Math.sin(t*2.5)-6*dk).toFixed(2)+' 1120 280)');
rise($('dec'),p(u,TM.decider,TM.decider+.5)); const tk=p(u,TM.decider+1,TM.decider+3),q1=1-tk;
$('tok').setAttribute('cx',(q1*q1*1380+2*q1*tk*1140+tk*tk*900).toFixed(1)); $('tok').setAttribute('cy',(q1*q1*500+2*q1*tk*420+tk*tk*540).toFixed(1));
MEM.forEach(e=>e.setAttribute('class',tk>=1?'gain':'ink'));

rise($('mega'),p(u,TM.megaphone,TM.megaphone+.5)); $('mw').setAttribute('opacity',(.4+.6*Math.abs(Math.sin(t*3))).toFixed(2));
rise($('cr'),p(u,TM.megaphone+.6,TM.megaphone+1.2));
[0,1,2].forEach(i=>rise($('ap'+i),p(u,TM.head_heart+i*1.4,TM.head_heart+i*1.4+.5)));
CR.forEach((c,i)=>{const on=u>=TM.nodding_crowd+i*.15; c.forEach(e=>{e.setAttribute('class',on?'gain':'ink'); e.setAttribute('opacity',on?1:.35)});
  c[0].setAttribute('cy',(630+(on?6*Math.max(0,Math.sin(t*4+i)):0)).toFixed(1))});
rise($('commit'),p(u,TM.nodding_crowd+.4,TM.nodding_crowd+1));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
const mk2=p(u,TM.shield+.6,TM.shield+2); MT.forEach(m=>{m[0].setAttribute('opacity',(1-mk2).toFixed(2)); m[1].setAttribute('opacity',mk2.toFixed(2))});
rise($('shd'),p(u,TM.shield,TM.shield+.5));
rise($('close'),p(u,TM.shield+6.6,TM.shield+7.2)); DT.forEach((d,i)=>d.setAttribute('cx',(160+((t*90+i*256)%1280)).toFixed(1)));
$('spot').setAttribute('r',(42+4*Math.sin(t*4)).toFixed(1));

rise($('cards'),p(u,TM.magnifier,TM.magnifier+.4)); $('mag').setAttribute('opacity',p(u,TM.magnifier,TM.magnifier+.4));
const mx=220+950*p(u,TM.magnifier+.3,TM.magnifier+3.5); $('mag').setAttribute('transform','translate('+mx.toFixed(1)+' 325)');
MKS.forEach((m,i)=>m.setAttribute('opacity',cl((mx-(220+i*190)+40)/40).toFixed(2)));
rise($('rw'),p(u,TM.magnifier+3.8,TM.magnifier+4.3));
rise($('lp'),p(u,TM.loop_arrow,TM.loop_arrow+.4)); $('arc').setAttribute('stroke-dashoffset',(100*(1-p(u,TM.loop_arrow,TM.loop_arrow+1.5))).toFixed(1));
$('ah').setAttribute('opacity',p(u,TM.loop_arrow+1.4,TM.loop_arrow+1.7));
rise($('blame'),p(u,TM.loop_arrow+4.5,TM.loop_arrow+5)); $('lstrike').setAttribute('opacity',p(u,TM.loop_arrow+5.2,TM.loop_arrow+5.6));

rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.4,TM.question+.9)); rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('qm'),p(u,TM.question+3,TM.question+3.5)); rise($('qw'),p(u,TM.question+3,TM.question+3.6));
QD[2].setAttribute('r',(16+5*Math.abs(Math.sin(t*3))).toFixed(1));