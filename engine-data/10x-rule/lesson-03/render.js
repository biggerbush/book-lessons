TB.forEach(([r,h],i)=>{const k=p(u,TM.ladder+i*.5,TM.ladder+i*.5+.7);r.setAttribute('y',(640-h*k).toFixed(1));r.setAttribute('height',(h*k).toFixed(1))});
rise($('tchk'),p(u,TM.ladder+5.8,TM.ladder+6.3));

rise($('p1o'),p(u,TM.still_person,TM.still_person+.5));
rise($('couch'),p(u,TM.couch,TM.couch+.5));
$('p1').setAttribute('transform','translate(0 '+(60*p(u,TM.couch+.4,TM.couch+1.2)).toFixed(1)+')');
$('zz').setAttribute('opacity',(p(u,TM.couch+1,TM.couch+1.5)*(.55+.45*Math.sin(t*2))).toFixed(2));
EX.forEach((g,i)=>rise(g,p(u,TM.couch+6.2+i*.6,TM.couch+6.7+i*.6)));
rise($('zero'),p(u,TM.couch+8,TM.couch+8.5)); rise($('s1t'),p(u,TM.couch+8.6,TM.couch+9.2));

rise($('walkO'),p(u,TM.backward_step-.3,TM.backward_step+.2));
const bk=p(u,TM.backward_step+.3,TM.backward_step+2);
$('walker').setAttribute('transform','translate('+(820-400*bk).toFixed(1)+' '+(bk>0&&bk<1?-6*Math.abs(Math.sin(t*9)):0).toFixed(1)+')');
$('arr').setAttribute('opacity',bk.toFixed(2));
rise($('shield'),p(u,TM.shield,TM.shield+.5)); rise($('cloud'),p(u,TM.shield+.3,TM.shield+.8));
rise($('away'),p(u,TM.shield+5.4,TM.shield+6));

CR.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.08,TM.crowd+i*.08+.4)));
rise($('ceil'),p(u,TM.crowd+1.5,TM.crowd+2));
rise($('cl'),p(u,TM.checklist,TM.checklist+.5));
rise($('tk0'),p(u,TM.checklist+1,TM.checklist+1.4)); rise($('tk1'),p(u,TM.checklist+2,TM.checklist+2.4));
$('tb3').setAttribute('stroke-width',u>=TM.checklist+6.1?(5+3*Math.abs(Math.sin(t*4))).toFixed(1):5);
rise($('s3t'),p(u,TM.checklist+6.1,TM.checklist+6.7));

rise($('rko'),p(u,TM.rocket,TM.rocket+.5));
const ry=660-260*p(u,TM.rocket+.5,TM.rocket+3);
$('rkt').setAttribute('transform','translate(360 '+ry.toFixed(1)+')');
$('flame').setAttribute('d','M-22 60L0 '+(100+14*Math.sin(t*20)).toFixed(1)+'L22 60Z');
$('trail').setAttribute('d','M360 '+(ry+110).toFixed(1)+'V820'); $('trail').setAttribute('opacity',p(u,TM.rocket+.5,TM.rocket+1).toFixed(2));
ST.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.stack_tasks+i*.45,TM.stack_tasks+i*.45+.3).toFixed(2)));
rise($('ol'),p(u,TM.stack_tasks+5.4,TM.stack_tasks+5.9));
rise($('bub0'),p(u,TM.stack_tasks+5.7,TM.stack_tasks+6.2)); rise($('bub1'),p(u,TM.stack_tasks+6.5,TM.stack_tasks+7));

rise($('pL'),p(u,TM.salesperson,TM.salesperson+.5));
TL[0].forEach((m,i)=>m.setAttribute('opacity',p(u,TM.phone+i*.4,TM.phone+i*.4+.2).toFixed(2)));
rise($('shift'),p(u,TM.phone+3,TM.phone+3.5));
rise($('pR'),p(u,TM.call_tally-.4,TM.call_tally+.1));
TL[1].forEach((m,i)=>m.setAttribute('opacity',p(u,TM.call_tally+i*.17,TM.call_tally+i*.17+.15).toFixed(2)));
DL.forEach(a=>a.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.call_tally+6.6+i*.2,TM.call_tally+6.9+i*.2).toFixed(2))));
rise($('s5t'),p(u,TM.call_tally+6.8,TM.call_tally+7.4));

rise($('box'),p(u,TM.problem_pile,TM.problem_pile+.5));
PL.forEach((g,i)=>rise(g,p(u,TM.problem_pile+3+i*.22,TM.problem_pile+3.3+i*.22)));
rise($('plab'),p(u,TM.problem_pile+5,TM.problem_pile+5.5));
rise($('flag'),p(u,TM.green_flag,TM.green_flag+.5)); rise($('s6t'),p(u,TM.green_flag+.6,TM.green_flag+1.2));

rise($('dialg'),p(u,TM.dial,TM.dial+.5));
const ang=-157.5+135*p(u,TM.dial+.5,TM.dial+2.5)-45*(p(u,TM.fork,TM.fork+1)-p(u,TM.fork+3.5,TM.fork+4.5))+1.5*Math.sin(t*3);
$('needle').setAttribute('transform','rotate('+ang.toFixed(2)+' 500 620)');
DY.forEach((g,i)=>rise(g,p(u,TM.dial+3.8+i*.4,TM.dial+4.1+i*.4)));
rise($('s7t'),p(u,TM.fork+.3,TM.fork+.9));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
rise($('mir'),p(u,TM.mirror+.3,TM.mirror+.8));
$('mpB').setAttribute('opacity',p(u,TM.mirror+5.8,TM.mirror+6.6).toFixed(2));
rise($('q3'),p(u,TM.mirror+5.8,TM.mirror+6.4));