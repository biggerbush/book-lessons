const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
R('scale',TM.bathroom_scale); R('feet',TM.bathroom_scale+1);
const st=p(u,TM.bathroom_scale+1.2,TM.bathroom_scale+2.2);
$('ndl').setAttribute('transform',`rotate(${(-60+st*80+(st>0?6*Math.sin(t*2.3):0)).toFixed(1)} 1310 300)`);
R('starers',TM.bathroom_scale+4.6);

R('lagP',TM.lag_label); R('mir',TM.rear_mirror); R('leadP',TM.lead_label);
acts.forEach((g,i)=>rise(g,p(u,TM.lead_label+.5+i*.4,TM.lead_label+.9+i*.4)));

R('lagC',TM.person_goal); R('lagT',TM.person_goal+3); R('leadA',TM.food_plate); R('leadB',TM.running_shoes);
$('flow').setAttribute('opacity',p(u,TM.running_shoes+3,TM.running_shoes+3.6));
['fa','fb'].forEach(k=>$(k).setAttribute('stroke-dashoffset',(-(t*40)%44).toFixed(1)));
const w=Math.round(10*p(u,TM.running_shoes+3.4,TM.running_shoes+5.4)); $('wt').textContent=(w?'−':'')+w+' LB';

R('t1',TM.check_one); dr($('ck1'),p(u,TM.check_one+3,TM.check_one+3.6)); R('gr1',TM.check_one+3);
R('t2',TM.check_two); dr($('ck2'),p(u,TM.check_two+.6,TM.check_two+1.2)); R('kn',TM.check_two+.6);
$('knb').setAttribute('transform',`rotate(${(120*p(u,TM.check_two+1,TM.check_two+3)).toFixed(1)} 1260 495)`);
R('no',TM.check_two+5); R('yes',TM.check_two+5.8);

R('boss',TM.boss_desk); R('scr',TM.boss_desk+.6); R('clk',TM.late_clock);
const lc=Math.max(0,u-TM.late_clock)*120; $('mh').setAttribute('transform',`rotate(${lc.toFixed(1)} 1300 390)`); $('hh').setAttribute('transform',`rotate(${(90+lc/12).toFixed(1)} 1300 390)`);
R('late',TM.late_clock+1.5); R('worry',TM.late_clock+7);

R('clip',TM.clipboard); R('rep',TM.clipboard+3.6); dr($('repx'),p(u,TM.clipboard+4,TM.clipboard+4.6));
const tk=p(u,TM.tally_marks,TM.tally_marks+3.5)*TL.length; TL.forEach((m,i)=>m[0].setAttribute('opacity',cl(tk-i)));
const ci=Math.min(TL.length-1,Math.floor(tk)); $('penM').setAttribute('transform',`translate(${TL[ci][1]+6} ${TL[ci][2]+18})`);
rise($('pen'),p(u,TM.tally_marks-.2,TM.tally_marks+.3)*(1-p(u,TM.tally_marks+3.6,TM.tally_marks+4))); R('eff',TM.tally_marks+4.9);

R('hud',TM.team_huddle); R('hb1',TM.team_huddle+3.4); dr($('hs'),p(u,TM.team_huddle+4,TM.team_huddle+4.5)); R('hb2',TM.team_huddle+4.4);
R('gears',TM.gear_turn); R('gl',TM.gear_turn+.5);
const ga=Math.max(0,u-TM.gear_turn-.4)*20; GB.setAttribute('transform',`rotate(${ga.toFixed(1)} 1220 520)`);
GA.setAttribute('transform',`rotate(${(-ga*160/64).toFixed(1)} 1004 620)`); GC.setAttribute('transform',`rotate(${(-ga*160/54+15).toFixed(1)} 1013 424)`);

R('flag',TM.goal_flag); R('you',TM.goal_flag+.4);
const lk=p(u,TM.question_mark+4.9,TM.question_mark+5.4);
rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5)*(1-lk)); R('qlab',TM.question_mark+.4); rise($('lbox'),lk);

R('sw',TM.stopwatch); $('swh').setAttribute('transform',`rotate(${((t*60)%360).toFixed(1)} 1340 720)`);
R('qa',TM.stopwatch+.2); R('qb',TM.stopwatch+3.7); R('qc',TM.stopwatch+4.1); R('qm8',TM.stopwatch+4.8);