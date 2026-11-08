const bd=TM.busy_desk,fix=p(u,bd+7,bd+7.6);
P0.forEach((q,i)=>{const a=bd+.6+i*.6;q[0].setAttribute('opacity',(p(u,a,a+.3)*(1-fix)).toFixed(3));q[1].setAttribute('r',(26+3*Math.sin(t*5+i)).toFixed(1))});
for(const c of $('who').children)c.setAttribute('class',u>=bd+7?'gain':'ink');

rise($('bar1'),p(u,TM.workday_bar,TM.workday_bar+.6));
IC.forEach((g,i)=>{const a=TM.ping_icons+i*1.4;rise(g,p(u,a,a+.4))});
PC.forEach((r,i)=>{const a=TM.broken_bar+i*.25,k=p(u,a,a+.8),x0=120+i*113.33;r.setAttribute('x',(x0+15*k).toFixed(1));r.setAttribute('width',(113.33-30*k).toFixed(1));
  r.setAttribute('transform','translate('+((i-5.5)*4*k).toFixed(1)+' '+((90+(i*7%5)*35)*k).toFixed(1)+') rotate('+(((i*5)%7-3)*6*k).toFixed(1)+' '+(x0+56).toFixed(1)+' 420)');r.setAttribute('class',k>.5?'loss':'gain')});
rise($('frag'),p(u,TM.broken_bar+6.3,TM.broken_bar+6.9));

rise($('z0'),p(u,TM.night_owl,TM.night_owl+.5));rise($('z2'),p(u,TM.night_owl+.6,TM.night_owl+1.1));
rise($('z1'),p(u,TM.quiet_room,TM.quiet_room+.5));rise($('az'),p(u,TM.quiet_room+3.6,TM.quiet_room+4.2));

rise($('tapL'),p(u,TM.shoulder_tap,TM.shoulder_tap+.5));$('bang').setAttribute('r',(24+5*Math.abs(Math.sin(t*4))).toFixed(1));
rise($('blunt'),p(u,TM.shoulder_tap+2.9,TM.shoulder_tap+3.5));
rise($('mailR'),p(u,TM.email_inbox,TM.email_inbox+.5));$('env').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');

rise($('room4'),p(u,TM.meeting_room,TM.meeting_room+.5));
WC.forEach((g,i)=>{const a=TM.word_cloud+i*.5;rise(g,p(u,a,a+.4))});rise($('wcl'),p(u,TM.word_cloud+2,TM.word_cloud+2.5));
rise($('dr'),p(u,TM.drift_arrow,TM.drift_arrow+.4));
const dk=p(u,TM.drift_arrow+.2,TM.drift_arrow+2.4),dp=DP.getPointAtLength(DL*dk);DP.setAttribute('stroke-dashoffset',(DL*(1-dk)).toFixed(1));
$('dhead').setAttribute('cx',dp.x.toFixed(1));$('dhead').setAttribute('cy',dp.y.toFixed(1));
rise($('prep'),p(u,TM.drift_arrow+2,TM.drift_arrow+2.5));

rise($('clock5'),p(u,TM.wall_clock,TM.wall_clock+.5));$('mh5').setAttribute('transform','rotate('+(360*p(u,TM.wall_clock+.3,TM.wall_clock+2.5)).toFixed(1)+' 290 440)');
TP.forEach((g,i)=>{const a=TM.ten_people+i*.25;rise(g,p(u,a,a+.4))});rise($('lab10'),p(u,TM.ten_people+2.8,TM.ten_people+3.3));
SB.forEach((r,i)=>{const a=TM.hour_stack+i*.25;rise(r,p(u,a,a+.4))});
rise($('stkl'),p(u,TM.hour_stack,TM.hour_stack+.4));$('hrs').textContent=Math.round(10*p(u,TM.hour_stack,TM.hour_stack+2.5))+' HOURS';
rise($('eq5'),p(u,TM.hour_stack+2.6,TM.hour_stack+3.2));

rise($('c60'),p(u,TM.kitchen_timer,TM.kitchen_timer+.5));
const tk=p(u,TM.kitchen_timer+.5,TM.kitchen_timer+4.5),ring=u>TM.kitchen_timer+4.5&&u<TM.kitchen_timer+5.5;
$('tsec').setAttribute('d',sector(330,420,88,1-tk));
$('thand').setAttribute('transform','rotate('+(360*(1-tk)).toFixed(1)+' 330 420)');
$('tmr').setAttribute('transform',ring?'rotate('+(4*Math.sin(t*40)).toFixed(1)+' 330 420)':'');
$('tring').setAttribute('opacity',(u>TM.kitchen_timer+4.5?(ring?.6+.4*Math.abs(Math.sin(t*20)):1):0).toFixed(2));
rise($('c61'),p(u,TM.small_group,TM.small_group+.5));
rise($('c62'),p(u,TM.owner_badge,TM.owner_badge+.5));rise($('badge6'),p(u,TM.owner_badge+.8,TM.owner_badge+1.3));

rise($('sign7'),p(u,TM.no_talk_sign,TM.no_talk_sign+.5));
rise($('qh'),p(u,TM.no_talk_sign+6,TM.no_talk_sign+6.5));$('qr').setAttribute('width',(520*p(u,TM.no_talk_sign+6.3,TM.no_talk_sign+7.5)).toFixed(1));
CC.forEach((c,i)=>{const a=TM.calendar+i*.15;rise(c[0],p(u,a,a+.4))});
const nt=i=>i==2&&u>=TM.calendar+1.2;CC.forEach((c,i)=>{c[1].setAttribute('fill',nt(i)?'var(--gain)':'var(--stage)');c[1].setAttribute('stroke',nt(i)?'var(--gain)':'var(--ink)');c[2].style.fill=nt(i)?'var(--on-gain)':''});
rise($('ntd'),p(u,TM.calendar+1.2,TM.calendar+1.7));

rise($('qa'),p(u,TM.shield,TM.shield+.5));rise($('qb'),p(u,TM.shield+.4,TM.shield+.9));rise($('qc'),p(u,TM.shield+.8,TM.shield+1.3));
rise($('sh8'),p(u,TM.shield+.2,TM.shield+.8));rise($('qm'),p(u,TM.shield+6,TM.shield+6.6));
const sil=1-p(u,TM.shield+6,TM.shield+6.6);
PG.forEach((q,i)=>{const dx=1320-q[1],dy=420-q[2],d=Math.hypot(dx,dy),k=12*Math.abs(Math.sin(t*3+i));q[0].setAttribute('cx',(q[1]+dx/d*k).toFixed(1));q[0].setAttribute('cy',(q[2]+dy/d*k).toFixed(1));q[0].setAttribute('opacity',sil.toFixed(3))});