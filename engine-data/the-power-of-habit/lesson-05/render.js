const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d)),dr=(id,k)=>$(id).setAttribute('stroke-dashoffset',(1-k).toFixed(3)),
fall=(D,a)=>D.a.forEach((r,i)=>{const k=p(u,a+i*.18,a+i*.18+.35),m=i<D.a.length-1?D.mx:82;r.setAttribute('transform','rotate('+(m*k).toFixed(1)+' '+(D.x0+i*D.s+D.w)+' '+D.yb+')')});

R('ceo',TM.ceo_podium);R('bub',TM.ceo_podium+1);
RB.forEach((r,i)=>{const h=[30,60,95,130][i]*p(u,TM.ceo_podium+5+i*.2,TM.ceo_podium+5.6+i*.2);r.setAttribute('y',(820-h).toFixed(1));r.setAttribute('height',h.toFixed(1))});

HR.forEach((g,i)=>rise(g,p(u,TM.habit_row+i*.2,TM.habit_row+i*.2+.4)));R('hlab',TM.habit_row+1.4);
ST.forEach((s,k)=>{const a=k==4?TM.keystone+1.8:TM.keystone+(4-Math.abs(k-4))*.3,q=p(u,a,a+.6);s.setAttribute('opacity',q.toFixed(2));if(k==4)s.setAttribute('transform','translate(0 '+(-140*(1-q)).toFixed(1)+')')});
R('klab',TM.keystone+2.2);R('kname',TM.keystone+6.2);
$('dom1').setAttribute('opacity',p(u,TM.dominoes,TM.dominoes+.4));fall(D1,TM.dominoes+.8);

R('plant',TM.alcoa_plant);R('y87',TM.alcoa_plant+.6);
SM.forEach((c,i)=>{const k=(t*.5+i/3)%1;c.setAttribute('cy',(275-65*k).toFixed(1));c.setAttribute('cx',(480+18*k).toFixed(1));c.setAttribute('r',(12+8*k).toFixed(1));c.setAttribute('opacity',(.6*(1-k)).toFixed(2))});
R('gloom',TM.gloomy_chart);dr('gline',p(u,TM.gloomy_chart+.3,TM.gloomy_chart+1.8));R('trust',TM.gloomy_chart+2.4);
const po=p(u,TM.paul_oneill,TM.paul_oneill+1);$('pon').setAttribute('opacity',po.toFixed(2));$('pon').setAttribute('transform','translate('+(160*(1-po)).toFixed(1)+' 0)');

R('inv',TM.investor_room);R('speaker',TM.investor_room+.4);const cf=u>=TM.confused_faces;
BQ.forEach((b,i)=>{rise(b[0],p(u,TM.investor_room+1.5+i*.3,TM.investor_room+1.9+i*.3));b[1].textContent=cf?'?':'$';b[1].style.fill=cf?'var(--loss)':'var(--ink)'});
R('exit',TM.exit_sign);dr('ptr',p(u,TM.exit_sign+.5,TM.exit_sign+1.3));R('goal',TM.exit_sign+3.3);
R('sell',TM.confused_faces+1);const sl=u>=TM.confused_faces+1;[...SI.children].forEach(c=>c.setAttribute('class',sl?'loss':'ink'));

R('clk',TM.clock_24);$('ring').setAttribute('stroke-dasharray',p(u,TM.clock_24+.4,TM.clock_24+2.2).toFixed(3)+' 1');
R('wk',TM.injury_report);R('ar1',TM.injury_report+1);R('doc',TM.injury_report+1.6);R('ar2',TM.injury_report+3);R('bossg',TM.injury_report+3.6);
R('plan',TM.fix_plan);R('plab',TM.fix_plan+.8);R('talk4',TM.fix_plan+5.4);

R('mgr',TM.talk_lines);R('wrk',TM.talk_lines+.3);
LN.forEach((l,i)=>{l.setAttribute('opacity',p(u,TM.talk_lines+1+i*.15,TM.talk_lines+1.4+i*.15).toFixed(2));l.setAttribute('stroke-dashoffset',((-t*30)%20).toFixed(1))});
BL.forEach((g,i)=>rise(g,p(u,TM.idea_bulb+i*.3,TM.idea_bulb+i*.3+.4)));R('ideas',TM.idea_bulb+2);
R('belt',TM.smooth_line);BX.forEach((b,i)=>{const x=960+((t*70+i*94)%470);b.setAttribute('x',x.toFixed(1));b.setAttribute('opacity',cl(Math.min((x-960)/40,(1430-x)/40)).toFixed(2))});
R('qlab',TM.smooth_line+1);dr('qline',p(u,TM.smooth_line+1.2,TM.smooth_line+2.8));

R('pchart',TM.profit_peak);dr('pline',p(u,TM.profit_peak+.3,TM.profit_peak+1.7));R('star',TM.profit_peak+1.6);
R('bars',TM.five_bars);const fb=p(u,TM.five_bars+.6,TM.five_bars+2.2),bh=70+280*fb;$('bar5').setAttribute('y',(640-bh).toFixed(1));$('bar5').setAttribute('height',bh.toFixed(1));$('x5').textContent=(1+Math.round(4*fb))+'×';
R('never',TM.five_bars+6.6);R('rest',TM.five_bars+8.7);

R('win',TM.small_win);R('rings',TM.small_win+.4);R('easier',TM.small_win+4.2);
DT.forEach((d,i)=>{const a=i<6?TM.small_win+4.2+i*.35:TM.ripple_ring+(i-6)*.2,on=u>=a;d.setAttribute('fill',on?'var(--gain)':'var(--line)');d.setAttribute('r',on?14:10)});
const rr=u>=TM.ripple_ring;RP.forEach((c,i)=>{const k=(t*.4+i/3)%1;c.setAttribute('r',(56+224*k).toFixed(1));c.setAttribute('opacity',rr?(1-k).toFixed(2):0)});
R('run',TM.runner);R('olab',TM.runner+1);CP.forEach((g,i)=>rise(g,p(u,TM.runner+1.5+i*.6,TM.runner+1.9+i*.6)));

R('qa',TM.mirror);R('qb',TM.mirror+.4);R('qc',TM.mirror+.8);
$('dom8').setAttribute('opacity',p(u,TM.mirror+1.2,TM.mirror+1.6));fall(D8,TM.mirror+2);R('pick',TM.mirror+5);