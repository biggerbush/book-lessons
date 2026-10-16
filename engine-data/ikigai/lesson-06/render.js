rise($('gard'),p(u,TM.old_gardener,TM.old_gardener+.6));
$('hoe').setAttribute('transform',`rotate(${(7*Math.sin(t*2.4)).toFixed(2)} 1345 425)`);
SPR.forEach((s,i)=>s.setAttribute('opacity',p(t,1+i*.4,1.6+i*.4)));

rise($('gymP'),p(u,TM.gym_empty,TM.gym_empty+.5));rise($('nod'),p(u,TM.no_dumbbell,TM.no_dumbbell+.5));
rise($('dayP'),p(u,TM.busy_day,TM.busy_day+.5));rise($('never'),p(u,TM.busy_day+1,TM.busy_day+1.6));
const wx=860+520*((t/6)%1);WK.setAttribute('transform',`translate(${wx.toFixed(1)} ${(-4*Math.abs(Math.sin(t*6))).toFixed(1)})`);
DT.forEach((d,i)=>d.setAttribute('fill',wx>=859+i*104?'var(--gain)':'var(--line)'));

[0,1,2].forEach(i=>rise($('a'+i),p(u,TM.garden_hoe+i*1.5,TM.garden_hoe+i*1.5+.5)));
const sn=p(u,TM.clock_dawn,TM.clock_dawn+5);
$('sun2').setAttribute('cx',(220+1160*sn).toFixed(1));$('sun2').setAttribute('cy',(620-1000*sn*(1-sn)).toFixed(1));
$('sun2').setAttribute('opacity',p(u,TM.clock_dawn-.4,TM.clock_dawn));$('actbar').setAttribute('width',(1160*sn).toFixed(1));
rise($('nf'),p(u,TM.clock_dawn+6.2,TM.clock_dawn+6.7));rise($('jl'),p(u,TM.clock_dawn+8.7,TM.clock_dawn+9.2));

rise($('o0'),p(u,TM.office_chair,TM.office_chair+.5));rise($('o1'),p(u,TM.couch_screen,TM.couch_screen+.5));rise($('o2'),p(u,TM.couch_screen+1.6,TM.couch_screen+2.1));
$('tv').setAttribute('opacity',(.5+.3*Math.sin(t*7)+.2*Math.sin(t*13)).toFixed(2));
rise($('age'),p(u,TM.slow_body,TM.slow_body+.5));
$('bb').setAttribute('width',(700-380*p(u,TM.slow_body+.4,TM.slow_body+3)).toFixed(1));
$('mb').setAttribute('width',(700-380*p(u,TM.slow_body+.9,TM.slow_body+3.5)).toFixed(1));

rise($('rad'),p(u,TM.radio,TM.radio+.5));
WV.forEach((w,i)=>w.setAttribute('opacity',u>=TM.radio?((Math.sin(t*4-i*1.2)+1)/2).toFixed(2):0));
rise($('crew'),p(u,TM.group_stretch,TM.group_stretch+.5));
const ad=-30+110*(Math.sin(t*2.2)*.5+.5);ARM.forEach(([l,r,x])=>{arm(l,x-34,395,56,ad,-1);arm(r,x+34,395,56,ad,1)});
$('jts').setAttribute('opacity',p(u,TM.stopwatch,TM.stopwatch+.5)*p(u,TM.group_stretch,TM.group_stretch+.5));
rise($('gen'),p(u,TM.group_stretch+5.4,TM.group_stretch+5.9));
rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5));
$('swh').setAttribute('transform',`rotate(${(70*p(u,TM.stopwatch+.3,TM.stopwatch+4)).toFixed(1)} 220 720)`);

rise($('p0'),p(u,TM.yoga_mat,TM.yoga_mat+.5));rise($('p1'),p(u,TM.tai_chi,TM.tai_chi+.5));rise($('p2'),p(u,TM.qigong,TM.qigong+.5));
rise($('pace'),p(u,TM.qigong+3,TM.qigong+3.5));
$('ysun').setAttribute('cy',(320-10*Math.sin(t*1.2)).toFixed(1));
$('trail').style.strokeDashoffset=(-t*20).toFixed(1);
$('brc').setAttribute('r',(100+10*Math.sin(t*1.2)).toFixed(1));

rise($('bw'),p(u,TM.breath_wave,TM.breath_wave+.5));
let wd='';for(let x=120;x<=700;x+=10)wd+=`${x},${(320+30*Math.sin(x/40-t*1.5)*(.6+.4*Math.sin(t*.8))).toFixed(1)} `;$('wave6').setAttribute('points',wd);
rise($('bal'),p(u,TM.balance_scale,TM.balance_scale+.5));
const bq=p(u,TM.balance_scale+.3,TM.balance_scale+2.5);$('beam').setAttribute('transform',`rotate(${(14*(1-bq)*Math.cos(bq*12)).toFixed(2)} 410 480)`);
rise($('mind'),p(u,TM.breath_wave+1,TM.breath_wave+1.5));
const ck=p(u,TM.calm_mind,TM.calm_mind+1.5);
$('scr').setAttribute('opacity',(1-ck).toFixed(2));$('scr').setAttribute('transform',`translate(${(3*Math.sin(t*23)*(1-ck)).toFixed(1)} ${(3*Math.cos(t*19)*(1-ck)).toFixed(1)})`);
$('calm').setAttribute('opacity',ck);$('calm').setAttribute('r',(50+8*Math.sin(t*1.5)).toFixed(1));
rise($('hm'),p(u,TM.calm_mind+5.3,TM.calm_mind+5.8));

rise($('stairs'),p(u,TM.stairs,TM.stairs+.5));
const sc=5*p(u,TM.stairs+.3,TM.stairs+3.2);CL.setAttribute('transform',`translate(${(175+70*sc).toFixed(1)} ${(640-55*sc).toFixed(1)})`);
CHP.forEach((g,i)=>rise(g,p(u,TM.stairs+3.3+i*.8,TM.stairs+3.8+i*.8)));
rise($('alarm'),p(u,TM.stretch_alarm,TM.stretch_alarm+.5));
$('alb').setAttribute('transform',`rotate(${((u>=TM.stretch_alarm&&u<TM.stretch_alarm+1.5?6:0)*Math.sin(t*30)).toFixed(1)} 680 610)`);
rise($('chart'),p(u,TM.snowball,TM.snowball+.5));
BR.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.snowball+i*.12,TM.snowball+i*.12+.3)));
rise($('adds'),p(u,TM.snowball+2.6,TM.snowball+3.2));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('qf'),p(u,TM.question_mark+1.2,TM.question_mark+1.7));rise($('ql'),p(u,TM.question_mark+5,TM.question_mark+5.5));
const qd=70+20*Math.sin(t*1.6);arm(QA[0],1324,700,64,qd,-1);arm(QA[1],1396,700,64,qd,1);