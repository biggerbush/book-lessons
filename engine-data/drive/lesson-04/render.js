rise($('wheelG'),p(u,TM.steering_wheel,TM.steering_wheel+.6));
$('whl').setAttribute('transform','rotate('+(25*Math.sin(t*.9)).toFixed(1)+' 1290 430)');
rise($('who'),p(u,TM.steering_wheel+2.6,TM.steering_wheel+3.1));

rise($('k1'),p(u,TM.curious_kid,TM.curious_kid+.5));
rise($('k2'),p(u,TM.lone_desk,TM.lone_desk+.5));
$('x2').setAttribute('opacity',p(u,TM.lone_desk+1.2,TM.lone_desk+1.6));
rise($('k3'),p(u,TM.choice_paths,TM.choice_paths+.5));
rise($('k4'),p(u,TM.choice_paths+5,TM.choice_paths+5.5));
$('pup').setAttribute('cx',(160+8*Math.sin(t*1.5)).toFixed(1));

rise($('bld'),p(u,TM.atlassian,TM.atlassian+.5));
rise($('clk'),p(u,TM.clock_24,TM.clock_24+.5));
const ca=360*p(u,TM.clock_24+.5,TM.clock_24+4);
$('wedge').setAttribute('d',wdg(760,500,170,ca));
$('hand').setAttribute('transform','rotate('+ca.toFixed(1)+' 760 500)');
rise($('pkg'),p(u,TM.package,TM.package+.5));
$('box').setAttribute('transform','translate('+(160*(1-p(u,TM.package,TM.package+1))).toFixed(1)+' 0)');

rise($('bulbs'),p(u,TM.lightbulbs,TM.lightbulbs+.4));
BU.forEach((b,i)=>b.setAttribute('fill',u>=TM.lightbulbs+.4+i*.5?'var(--gain)':'var(--line)'));
rise($('blbl'),p(u,TM.lightbulbs+1,TM.lightbulbs+1.5));
rise($('demo'),p(u,TM.team_demo,TM.team_demo+.5));
rise($('pie'),p(u,TM.pie_twenty,TM.pie_twenty+.5));
const pk=p(u,TM.pie_twenty+.5,TM.pie_twenty+2);
$('pw').setAttribute('d',wdg(1190,460,180,72*pk));
$('pct').textContent=Math.round(20*pk)+'%';

rise($('meterG'),p(u,SC[4][0]/K+.5,SC[4][0]/K+1));
[TM.task_card,TM.time_clock,TM.toolbox,TM.team_circle].forEach((a,i)=>{rise($('t'+i),p(u,a,a+.5));const on=u>=a+.3;FR[i].setAttribute('stroke',on?'var(--gain)':'var(--line)');SEG[i].setAttribute('fill',on?'var(--gain)':'var(--line)')});
$('th').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 625 355)');
rise($('best'),p(u,TM.team_circle+3,TM.team_circle+3.6));

rise($('sign'),p(u,TM.rowe_sign,TM.rowe_sign+.5));
rise($('desk'),p(u,TM.empty_desk,TM.empty_desk+.5));
rise($('flag'),p(u,TM.finish_flag,TM.finish_flag+.5));
WK.forEach((g,i)=>{let k=(t*.22+i/4)%1;if(i%2)k=1-k;g.setAttribute('transform','translate('+(1080+250*k).toFixed(1)+' 0)');g.setAttribute('opacity',Math.min(1,k*5,(1-k)*5).toFixed(2))});

rise($('sub6'),p(u,SC[6][0]/K+.3,SC[6][0]/K+.8));
rise($('lft'),p(u,TM.leash,TM.leash+.5));
rise($('rgt'),p(u,TM.spark,TM.spark+.5));
const sc=1+.15*Math.abs(Math.sin(t*3));
$('star').setAttribute('transform','translate(1000 310) scale('+sc.toFixed(3)+') translate(-1000 -310)');

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
$('blk').setAttribute('height',(160*p(u,TM.calendar+.8,TM.calendar+1.8)).toFixed(1));
$('blkT').setAttribute('opacity',p(u,TM.calendar+1.6,TM.calendar+2));
rise($('mini'),p(u,TM.mini_project,TM.mini_project+.5));
SB.forEach((b,i)=>rise(b,p(u,TM.mini_project+1+i*.6,TM.mini_project+1.4+i*.6)));
rise($('share'),p(u,TM.share_table,TM.share_table+.5));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));
rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('tiles'),p(u,TM.question_mark+1,TM.question_mark+1.5));
const hi=Math.floor(t*.8)%4;
TL.forEach((q,i)=>{const on=i===hi;q[0].setAttribute('fill',on?'var(--gain)':'var(--stage)');q[0].setAttribute('stroke',on?'var(--gain)':'var(--ink)');q[1].style.fill=on?'var(--on-gain)':'var(--ink)'});
rise($('qm'),p(u,TM.question_mark+1.4,TM.question_mark+1.9));
rise($('qd'),p(u,TM.question_mark+4.5,TM.question_mark+5));