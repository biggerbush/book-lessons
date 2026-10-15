rise($('tb'),p(u,TM.title_card+1,TM.title_card+1.6));

rise($('ax'),p(u,TM.two_axes,TM.two_axes+.6));
const ca=p(u,TM.care_arrow,TM.care_arrow+1.2),ha=p(u,TM.chall_arrow,TM.chall_arrow+1.2);
$('ca').setAttribute('y2',(760-500*ca).toFixed(1));$('ca').setAttribute('opacity',ca>0?1:0);
$('ha').setAttribute('x2',(440+860*ha).toFixed(1));$('ha').setAttribute('opacity',ha>0?1:0);
rise($('cah'),p(u,TM.care_arrow+1,TM.care_arrow+1.3));rise($('cal'),p(u,TM.care_arrow+.3,TM.care_arrow+.8));
rise($('hah'),p(u,TM.chall_arrow+1,TM.chall_arrow+1.3));rise($('hal'),p(u,TM.chall_arrow+.3,TM.chall_arrow+.8));
rise($('rc'),p(u,TM.chall_arrow+3,TM.chall_arrow+3.6));

rise($('ring'),p(u,TM.whole_person,TM.whole_person+.6));$('ring').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));
LCg.forEach((g,i)=>rise(g,p(u,TM.life_icons+i*1.2,TM.life_icons+i*1.2+.5)));
rise($('door'),p(u,TM.life_icons+6.6,TM.life_icons+7.2));

const mk1=p(u,TM.red_pen+.5,TM.red_pen+1.5);$('mark').setAttribute('stroke-dashoffset',(1-mk1).toFixed(3));$('mark').setAttribute('opacity',mk1>0?1:0);
rise($('nge'),p(u,TM.red_pen+1.2,TM.red_pen+1.7));
rise($('fork'),p(u,TM.hard_call,TM.hard_call+.5));rise($('pick'),p(u,TM.hard_call+1,TM.hard_call+1.5));rise($('sad'),p(u,TM.hard_call+2,TM.hard_call+2.5));
rise($('meter'),p(u,TM.hard_call+4.9,TM.hard_call+5.4));
const mf=p(u,TM.hard_call+5.2,TM.hard_call+6.5)*(.9+.05*Math.sin(t*3));$('mfill').setAttribute('y',(676-410*mf).toFixed(1));$('mfill').setAttribute('height',(410*mf).toFixed(1));
rise($('avoid'),p(u,TM.hard_call+5.5,TM.hard_call+6.1));

rise($('face'),p(u,TM.spinach_smile,TM.spinach_smile+.6));rise($('meet'),p(u,TM.spinach_smile+2.6,TM.spinach_smile+3.2));
rise($('wh'),p(u,TM.whisper,TM.whisper+.5));$('spr').setAttribute('opacity',u>=TM.whisper?(.5+.5*Math.sin(t*5)).toFixed(2):0);
rise($('silent'),p(u,TM.whisper+5.4,TM.whisper+6));

rise($('sc5'),p(u,TM.balance_scale,TM.balance_scale+.5));
const a1=p(u,TM.balance_scale+.6,TM.balance_scale+1.6),a2=p(u,TM.storm_cloud,TM.storm_cloud+1.2),a3=p(u,TM.storm_cloud+5.8,TM.storm_cloud+7);
const ang=-12*a1+24*a2-12*a3,ar=ang*Math.PI/180,co=Math.cos(ar),si=Math.sin(ar);
$('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 800 360)');
$('pl').setAttribute('transform','translate('+(800-300*co).toFixed(1)+' '+(360-300*si).toFixed(1)+')');
$('pr').setAttribute('transform','translate('+(800+300*co).toFixed(1)+' '+(360+300*si).toFixed(1)+')');
PN.forEach(q=>{q[0].setAttribute('fill',a3>.5?'var(--gain)':'var(--stage)');q[1].style.fill=a3>.5?'var(--on-gain)':'var(--ink)'});
rise($('lt'),p(u,TM.balance_scale+1,TM.balance_scale+1.5));
rise($('storm'),p(u,TM.storm_cloud,TM.storm_cloud+.5)*(1-a3));$('bolt').setAttribute('opacity',Math.sin(t*7)>0?1:.3);
rise($('rt'),p(u,TM.storm_cloud+1,TM.storm_cloud+1.5));
rise($('side'),p(u,TM.storm_cloud+5.8,TM.storm_cloud+6.4));

BUB.forEach((g,i)=>rise(g,p(u,TM.speech_bubble+i*.6,TM.speech_bubble+i*.6+.5)));
rise($('mir'),p(u,TM.mirror,TM.mirror+.5));rise($('lab'),p(u,TM.mirror+1,TM.mirror+1.5));
rise($('lx'),p(u,TM.mirror+2,TM.mirror+2.5));
rise($('lis'),p(u,TM.mirror+5.4,TM.mirror+6));$('larr').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
rise($('meas'),p(u,TM.mirror+6,TM.mirror+6.6));

rise($('k0'),p(u,TM.calendar,TM.calendar+.5));rise($('k1'),p(u,TM.coffee_cup,TM.coffee_cup+.5));rise($('k2'),p(u,TM.note_card,TM.note_card+.5));
DAY.setAttribute('fill',u>=TM.calendar+.8?'var(--gain)':'var(--line)');
['st0','st1','st2'].forEach((id,i)=>{const k=(t*.6+i/3)%1;$(id).setAttribute('transform','translate(0 '+(-20*k).toFixed(1)+')');$(id).setAttribute('opacity',Math.sin(Math.PI*k).toFixed(2))});

['qa','qb','qc','qd'].forEach((id,i)=>rise($(id),p(u,TM.question_mark+i*.4,TM.question_mark+i*.4+.5)));
rise($('tooth'),p(u,TM.question_mark+1.8,TM.question_mark+2.3));$('spn').setAttribute('opacity',(.6+.4*Math.sin(t*4)).toFixed(2));