const w0=12*Math.sin(t*1.5);
$('wv0').setAttribute('d',`M1000 540V${380+w0}C1040 ${310+w0} 1120 ${300+w0} 1165 350C1125 ${340+w0} 1095 370 1105 410C1112 460 1135 505 1160 540Z`);
$('car').setAttribute('transform',`translate(${(1370+15*Math.sin(t*2)).toFixed(1)} 540)`);
rise($('carw'),p(u,TM.racing_car,TM.racing_car+.5)); rise($('brk'),p(u,TM.racing_car+1,TM.racing_car+1.5));
$('chev').setAttribute('opacity',p(u,TM.racing_car+6.2,TM.racing_car+6.8));

rise($('lab1'),p(u,TM.engine,TM.engine+.5)); rise($('arr1'),p(u,TM.engine+1,TM.engine+1.5));
const th=30*t-8*Math.max(0,u-TM.gear_lock);
GR.forEach((g,i)=>{const a=i===1?-th*150/110+8:th; g[0].setAttribute('transform',`translate(${g[1]} ${g[2]}) rotate(${a.toFixed(1)})`);
  rise($(['gA','gB','gC'][i]),p(u,TM.engine+.4+i*.3,TM.engine+.9+i*.3)); rise(g[3],p(u,TM.gear_rivalry+i*.8,TM.gear_rivalry+i*.8+.5))});
rise($('blk1'),p(u,TM.gear_lock,TM.gear_lock+.5)); rise($('txt1'),p(u,TM.gear_lock+.6,TM.gear_lock+1.1));

rise($('bd'),p(u,TM.go_board-.5,TM.go_board));
ST.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.go_board+.4+i*.35,TM.go_board+.6+i*.35)));
rise($('scr'),p(u,TM.china_screen,TM.china_screen+.5)); rise($('aud2'),p(u,TM.china_screen+.6,TM.china_screen+1.1));
rise($('ar2'),p(u,TM.plan_2030,TM.plan_2030+.4)); rise($('plan'),p(u,TM.plan_2030,TM.plan_2030+.5));
$('yr').textContent=Math.round(2016+14*p(u,TM.plan_2030+.4,TM.plan_2030+2));

// race: THEY always ahead; WE pauses when the stopwatch appears, THEY keeps sprinting
rise($('run3'),p(u,TM.two_runners,TM.two_runners+.5));
const r0=p(u,TM.two_runners,TM.two_runners+5), rs=p(u,TM.stopwatch,TM.stopwatch+3);
const xA=200+400*r0, xB=360+560*r0+300*rs;
const phA=8*Math.min(u,TM.stopwatch), phB=t*8+6*Math.max(0,u-TM.stopwatch);
$('ruA').setAttribute('transform',`translate(${xA.toFixed(1)} 470)`); $('ruB').setAttribute('transform',`translate(${xB.toFixed(1)} 650)`);
$('lgA').setAttribute('d',rd(phA)); $('lgB').setAttribute('d',rd(phB));
rise($('bub3'),p(u,TM.two_runners+5,TM.two_runners+5.5));
rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5)); $('swh').setAttribute('transform',`rotate(${(t*90+720*rs).toFixed(1)} 1240 744)`);
rise($('txt3'),p(u,TM.stopwatch+.6,TM.stopwatch+1.1));

CN.forEach(([e,k])=>e.setAttribute('opacity',p(u,TM.coin_stack+k*.15,TM.coin_stack+k*.15+.3)));
rise($('cl4'),p(u,TM.coin_stack+.5,TM.coin_stack+1));
rise($('inv'),p(u,TM.investor,TM.investor+.5)); rise($('ch4a'),p(u,TM.investor+.8,TM.investor+1.3)); rise($('ch4b'),p(u,TM.investor+1.6,TM.investor+2.1));
rise($('lad4'),p(u,TM.ladder,TM.ladder+.5));
$('riv4').setAttribute('transform',`translate(1275 ${(620-290*p(u,TM.ladder+.6,TM.ladder+2.8)).toFixed(1)})`);

rise($('sci'),p(u,TM.scientist,TM.scientist+.5)); rise($('stw'),p(u,TM.scientist+.6,TM.scientist+1.1));
$('star5').setAttribute('transform',`translate(280 290) scale(${(1+.12*Math.sin(t*3)).toFixed(3)}) translate(-280 -290)`);
rise($('jn'),p(u,TM.journal,TM.journal+.5));
CP.forEach((c,i)=>{const k=p(u,TM.journal+.8+i*.3,TM.journal+1.6+i*.3); c[0].setAttribute('x',(693+(c[1]-710)*k).toFixed(1)); c[0].setAttribute('y',(408+(c[2]-430)*k).toFixed(1)); c[0].setAttribute('opacity',(k>0&&k<1)?1:0)});
rise($('prb'),p(u,TM.problem_list,TM.problem_list+.5)); rise($('kg5'),p(u,TM.problem_list+3,TM.problem_list+3.5));

rise($('cld'),p(u,TM.audience,TM.audience+.5)); rise($('aud6'),p(u,TM.audience+.4,TM.audience+.9));
const dx=-10+20*p(u,TM.shrug,TM.shrug+1); EY.forEach((e,i)=>e.setAttribute('cx',200+i*100+dx));
rise($('sun6'),p(u,TM.shrug,TM.shrug+.5));
rise($('bh'),p(u,TM.blindfold,TM.blindfold+.5)); const fb=p(u,TM.blindfold+.6,TM.blindfold+1.4);
rise($('bfw'),fb); $('bf').setAttribute('transform',`translate(0 ${(-80*(1-fb)).toFixed(1)})`);
rise($('opt6'),p(u,TM.blindfold+5.4,TM.blindfold+6));

rise($('mir'),p(u,TM.mirror,TM.mirror+.5)); rise($('ntc'),p(u,TM.mirror+2.5,TM.mirror+3));
rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
$('l7a').setAttribute('stroke-dashoffset',(400*(1-p(u,TM.notebook+.5,TM.notebook+2))).toFixed(1));
$('l7b').setAttribute('stroke-dashoffset',(400*(1-p(u,TM.notebook+2.5,TM.notebook+4))).toFixed(1));
rise($('eye7'),p(u,TM.notebook+6.2,TM.notebook+6.6));
$('eyi').setAttribute('transform',`translate(1270 470) scale(1 ${(.05+.95*p(u,TM.notebook+6.2,TM.notebook+7)).toFixed(3)}) translate(-1270 -470)`);
rise($('clr7'),p(u,TM.notebook+6.6,TM.notebook+7.2));

['qa','qb','qc','qd'].forEach((id,i)=>rise($(id),p(u,TM.question+i*.4,TM.question+i*.4+.5)));
rise($('lab8'),p(u,TM.question+1.8,TM.question+2.4)); G8.setAttribute('transform',`translate(1380 740) rotate(${(t*30).toFixed(1)})`);