const pk=p(u,TM.cookie,TM.cookie+1.6);
PZ.forEach(q=>q[0].setAttribute('transform','translate('+(q[1]*80*(1-pk)).toFixed(1)+' '+(q[2]*80*(1-pk)).toFixed(1)+')'));
rise($('pzl'),p(u,TM.cookie+6.4,TM.cookie+7));

const wk=p(u,TM.writer_desk+1,TM.writer_desk+4),w1=1-wk;
WK.setAttribute('transform','translate('+(w1*w1*240+2*w1*wk*710+wk*wk*1180).toFixed(1)+' '+(w1*w1*450+2*w1*wk*270+wk*wk*450).toFixed(1)+')');
$('trip').setAttribute('opacity',p(u,TM.writer_desk,TM.writer_desk+.5));
rise($('caf'),p(u,TM.writer_desk+.6,TM.writer_desk+1.1));
rise($('ck1'),p(u,TM.choc_cookie,TM.choc_cookie+.5)); rise($('chat'),p(u,TM.choc_cookie+1.5,TM.choc_cookie+2));
rise($('scl'),p(u,TM.scale,TM.scale+.5));
$('ndl').setAttribute('transform','rotate('+(-60+120*p(u,TM.scale+.4,TM.scale+1.6)+(u>=TM.scale+1.6?4*Math.sin(t*7):0)).toFixed(1)+' 220 790)');

rise($('lens2'),p(u,TM.magnifier,TM.magnifier+.5));
$('lens2i').setAttribute('transform','translate('+(790-525*Math.cos(t*.6)).toFixed(1)+' '+(262+4*Math.sin(t*2)).toFixed(1)+')');
ST.forEach((g,i)=>{const a=TM.routine_path+.8+i*1.3;rise(g,p(u,a,a+.5))});
rise($('brk'),p(u,TM.routine_path+5.4,TM.routine_path+6));
rise($('qq'),p(u,TM.question_mark,TM.question_mark+.6)); $('bigq').setAttribute('opacity',(.6+.4*Math.sin(t*3)).toFixed(2));

rise($('rh'),p(u,TM.reward_menu,TM.reward_menu+.5)); $('slots').setAttribute('opacity',p(u,TM.reward_menu,TM.reward_menu+.5));
[TM.apple,TM.apple+3.4,TM.reward_menu+1.2].forEach((a,i)=>rise($('c'+i),p(u,a,a+.5)));
rise($('pad'),p(u,TM.notepad,TM.notepad+.5)); PW.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.notepad+.8+i*.5,TM.notepad+1.2+i*.5)));
rise($('alm'),p(u,TM.alarm_clock,TM.alarm_clock+.5));
const am=p(u,TM.alarm_clock+.5,TM.alarm_clock+3);
$('mh2').setAttribute('transform','rotate('+(360*am).toFixed(1)+' 1360 420)'); $('mins').textContent=Math.round(15*am)+' MIN';
rise($('still'),p(u,TM.alarm_clock+3.5,TM.alarm_clock+4.1));

rise($('pals'),p(u,TM.friends_chat,TM.friends_chat+.5)); rise($('talk'),p(u,TM.friends_chat+.8,TM.friends_chat+1.3));
const tb=p(u,TM.friends_chat+.5,TM.cookie_fade); $('tbar').setAttribute('width',(360*tb).toFixed(1)); $('tmin').textContent=Math.round(15*tb)+' MIN';
rise($('ckw'),p(u,TM.friends_chat-.6,TM.friends_chat));
$('ck4').setAttribute('opacity',(1-.75*p(u,TM.cookie_fade,TM.cookie_fade+1)).toFixed(2));
rise($('xx'),p(u,TM.cookie_fade+.4,TM.cookie_fade+.9));
rise($('rr0'),p(u,TM.cookie_fade+4.2,TM.cookie_fade+4.7));
$('sk').setAttribute('x2',(1072+175*p(u,TM.cookie_fade+5,TM.cookie_fade+5.6)).toFixed(1));
rise($('rr1'),p(u,TM.cookie_fade+7.2,TM.cookie_fade+7.8));

$('cuesl').setAttribute('opacity',p(u,TM.five_icons,TM.five_icons+.6));
[TM.five_icons+5,TM.clock_face,TM.clock_face+1.8,TM.clock_face+3.5,TM.clock_face+4.9].forEach((a,i)=>rise(CU[i][0],p(u,a,a+.4)));
const on=u>=TM.time_330;
HH.setAttribute('transform','rotate('+(on?105:t*30).toFixed(1)+' 500 380)'); MH.setAttribute('transform','rotate('+(on?180:t*120).toFixed(1)+' 500 380)');
CU[1][1].setAttribute('stroke',on?'var(--gain)':'var(--ink)');
rise($('tl'),p(u,TM.time_330,TM.time_330+.5));
DT.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.time_330+.5+i*.3,TM.time_330+.8+i*.3)));
rise($('t330'),p(u,TM.time_330+2,TM.time_330+2.5));

rise($('card'),p(u,TM.plan_card,TM.plan_card+.5));
[0,1,2].forEach(i=>rise($('pl'+i),p(u,TM.daily_alarm+i*1.6,TM.daily_alarm+i*1.6+.5)));
rise($('lp'),p(u,TM.daily_alarm+4.8,TM.daily_alarm+5.4));
const e=Math.max(0,u-TM.new_loop),ang=-Math.PI/2+e*(1.2+e*.35);
$('pulse').setAttribute('cx',(1140+170*Math.cos(ang)).toFixed(1)); $('pulse').setAttribute('cy',(450+170*Math.sin(ang)).toFixed(1)); $('pulse').setAttribute('opacity',u>=TM.new_loop?1:0);
rise($('auto'),p(u,TM.new_loop+1.5,TM.new_loop+2.1));

rise($('tbx'),p(u,TM.toolbox,TM.toolbox+.5));
[3,4.4,7.4,8.7].forEach((d,i)=>rise(RW[i],p(u,TM.toolbox+d,TM.toolbox+d+.5)));
rise($('fin'),p(u,TM.toolbox+10.9,TM.toolbox+11.5));

rise($('mir'),p(u,TM.mirror,TM.mirror+.6)); rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9));
rise($('qc'),p(u,TM.mirror+2.6,TM.mirror+3.1));
CHP.forEach((c,i)=>{const a=TM.mirror+3.2+i*1.1,f=u>=a+.5;rise(c[0],p(u,a,a+.4));c[1].setAttribute('fill',f?'var(--gain)':'var(--stage)');c[2].setAttribute('style',f?'fill:var(--on-gain)':'')});