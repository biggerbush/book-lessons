$('ring').setAttribute('stroke-dashoffset',(880*(1-p(t,.6,3.6))).toFixed(1));
TD.forEach((d,i)=>d.setAttribute('fill',t>=.65+i*.75?'var(--gain)':'var(--stage)'));

rise($('phoneG'),p(u,TM.phone,TM.phone+.5)); rise($('tag'),p(u,TM.phone+5,TM.phone+5.5));
rise($('youG'),p(u,TM.tight_chest-.5,TM.tight_chest)); rise($('squeeze'),p(u,TM.tight_chest+.3,TM.tight_chest+.8));
rise($('draft'),p(u,TM.tight_chest+1.2,TM.tight_chest+1.7));
TY.forEach((d,i)=>d.setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*3-i*.6))).toFixed(2)));
rise($('kick'),p(u,TM.tight_chest+4.1,TM.tight_chest+4.6));

rise($('pauseG'),p(u,TM.pause_button,TM.pause_button+.5));
const KW=[120,120,170];
[0,1,2].forEach(i=>{const a=TM.pause_button+2.6+i*1.1;rise($('x'+i),p(u,a,a+.4));$('k'+i).setAttribute('x2',(712+KW[i]*p(u,a+.4,a+.9)).toFixed(1))});
rise($('breathG'),p(u,TM.slow_breath,TM.slow_breath+.5));
$('breath').setAttribute('r',(70+40*(.5-.5*Math.cos(Math.max(0,u-TM.slow_breath)*1.2))).toFixed(1));
rise($('gapG'),p(u,TM.slow_breath+1.8,TM.slow_breath+2.3));

rise($('spk'),p(u,SC[3][0]/K+.3,SC[3][0]/K+.8)); rise($('bub'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
rise($('l1'),p(u,TM.speech_bubble+6.2,TM.speech_bubble+6.7)); rise($('l2'),p(u,TM.speech_bubble+8,TM.speech_bubble+8.5));
rise($('handG'),p(u,TM.open_hand,TM.open_hand+.5));
FL.forEach((c,i)=>{const k=(t*.4+i/3)%1;c.setAttribute('cy',(440-180*k).toFixed(1));c.setAttribute('opacity',(u>=TM.open_hand?1-k:0).toFixed(2))});
rise($('ctrl'),p(u,TM.open_hand+2.6,TM.open_hand+3.1));

$('mline').setAttribute('stroke-dashoffset',(520*(1-p(u,TM.dividing_line,TM.dividing_line+1.2))).toFixed(1));
[TM.their_side,TM.your_side].forEach((a,s)=>{rise($('lb'+s),p(u,a,a+.4));CP[s].forEach((g,i)=>rise(g,p(u,a+1+i*1.6,a+1.5+i*1.6)))});

rise($('sign'),p(u,TM.let_me_sign,TM.let_me_sign+.5));
[TM.let_me_sign+5.8,TM.calendar,TM.calendar+3.7].forEach((a,i)=>rise($('c'+i),p(u,a,a+.5)));
CELL.setAttribute('opacity',u>=TM.calendar?(.5+.5*Math.abs(Math.sin(t*3))).toFixed(2):1);

rise($('hap'),p(u,SC[6][0]/K+.4,SC[6][0]/K+.9));
ST.forEach((g,i)=>rise(g,p(u,TM.four_steps+i*.5,TM.four_steps+i*.5+.4)));
rise($('doG'),p(u,TM.four_steps+2,TM.four_steps+2.5)); rise($('gapB'),p(u,TM.four_steps+3,TM.four_steps+3.5));
rise($('wheel'),p(u,TM.steering_wheel,TM.steering_wheel+.5));
$('wheelR').setAttribute('transform','rotate('+(25*Math.sin(t*1.1)).toFixed(1)+' 800 610)');
rise($('peace'),p(u,TM.steering_wheel+3.8,TM.steering_wheel+4.3));

rise($('any'),p(u,SC[7][0]/K+.3,SC[7][0]/K+.8));
[TM.late_clock,TM.red_pen,TM.trophy].forEach((a,i)=>rise($('w'+i),p(u,a,a+.5)));
$('hM').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 327 390)');
$('hH').setAttribute('transform','rotate('+(t*7.5%360).toFixed(1)+' 327 390)');
$('pen').setAttribute('transform','translate('+(10*Math.sin(t*4)).toFixed(1)+' 0)');
RP.forEach((g,i)=>rise(g,p(u,TM.trophy+3.4+i*.5,TM.trophy+3.8+i*.5)));

const s8=SC[8][0]/K;
[.3,.8,4.2].forEach((d,i)=>rise($('q'+(i+1)),p(u,s8+d,s8+d+.5)));
rise($('qm'),p(u,s8+4.8,s8+5.3));
rise($('qp0'),p(u,s8+.5,s8+1)); rise($('qp1'),p(u,s8+1.1,s8+1.6)); rise($('qp2'),p(u,s8+4.4,s8+4.9));
$('qbars').setAttribute('opacity',(.55+.45*Math.abs(Math.sin(t*1.6))).toFixed(2));