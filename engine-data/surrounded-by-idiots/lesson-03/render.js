const e0=p(u,TM.party_room+2,TM.party_room+3.5);
rise($('room0'),p(u,TM.party_room,TM.party_room+.6));
$('glow0').setAttribute('fill-opacity',(.16*e0).toFixed(3));
$('ylw0').setAttribute('transform','translate('+(60*(1-e0)).toFixed(1)+' 0)');$('ylw0').setAttribute('opacity',e0);
$('rays0').setAttribute('opacity',(.6+.4*Math.sin(t*4)).toFixed(2));
rise($('tag0'),p(u,TM.party_room+7.4,TM.party_room+8));

rise($('meet1'),p(u,TM.yellow_person,TM.yellow_person+.6));
rise($('sb1'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
rise($('sun1'),p(u,TM.sun_icon,TM.sun_icon+.6));$('rays1').setAttribute('transform','rotate('+(t*15).toFixed(1)+' 1200 320)');
rise($('mix1'),p(u,TM.mixed_colors,TM.mixed_colors+.5));
bars.forEach(([r,w],i)=>r.setAttribute('width',(w*p(u,TM.mixed_colors+i*.3,TM.mixed_colors+i*.3+.6)).toFixed(1)));
yl1.setAttribute('opacity',p(u,TM.mixed_colors+.4,TM.mixed_colors+.8));

rise($('cr2'),p(u,TM.crowd,TM.crowd+.6));rise($('bat2l'),p(u,TM.crowd,TM.crowd+.6));
$('bf2l').setAttribute('width',(244*p(u,TM.crowd+.5,TM.crowd+2.5)).toFixed(1));
rise($('spot2'),p(u,TM.spotlight,TM.spotlight+.6));
rise($('desk2'),p(u,TM.empty_desk,TM.empty_desk+.6));
$('bf2r').setAttribute('width',(244*(1-.85*p(u,TM.empty_desk+.6,TM.empty_desk+3.5))).toFixed(1));
$('fid2').setAttribute('transform','rotate('+(6*Math.sin(t*5)).toFixed(1)+' 1260 500)');

rise($('bulb3'),p(u,TM.lightbulb,TM.lightbulb+.6));$('rays3').setAttribute('opacity',(.5+.5*Math.abs(Math.sin(t*3))).toFixed(2));
rise($('wb3'),p(u,TM.whiteboard,TM.whiteboard+.5));
notes.forEach((g,i)=>rise(g,p(u,TM.whiteboard+.6+i*.7,TM.whiteboard+.9+i*.7)));
rise($('mega3'),p(u,TM.megaphone,TM.megaphone+.5));
ARC.forEach((a,i)=>a.setAttribute('opacity',u>=TM.megaphone?(.3+.7*Math.max(0,Math.sin(t*5-i))).toFixed(2):0));
const fb=p(u,TM.megaphone+1,TM.megaphone+1.5);FAN.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(-14*Math.abs(Math.sin(t*5+i))*fb).toFixed(1)+')'));

rise($('w40'),p(u,TM.ear_crossed,TM.ear_crossed+.6));rise($('x4'),p(u,TM.ear_crossed+.9,TM.ear_crossed+1.3));
rise($('w41'),p(u,TM.loose_papers,TM.loose_papers+.6));
const ps=p(u,TM.loose_papers+.3,TM.loose_papers+1.8);
PAP.forEach((g,i)=>g.setAttribute('transform','translate('+(800+DX[i]*ps).toFixed(1)+' '+(420+DY[i]*ps+6*Math.sin(t+i)).toFixed(1)+') rotate('+((i-2)*12*ps+4*Math.sin(t*1.5+i)).toFixed(1)+')'));
rise($('w42'),p(u,TM.broken_chain,TM.broken_chain+.6));
const cb=p(u,TM.broken_chain+.8,TM.broken_chain+2);
CH4.forEach((e,i)=>{if(i>1)e.setAttribute('transform','translate('+(30*cb).toFixed(1)+' '+(40*cb).toFixed(1)+') rotate('+(20*cb).toFixed(1)+' '+(1273+(i-1.5)*70)+' 420)')});

rise($('tab5'),p(u,TM.meeting_table,TM.meeting_table+.6));rise($('cal5'),p(u,TM.meeting_table+.4,TM.meeting_table+1));
CHP.forEach((g,i)=>{const a=TM.meeting_table+2.2+i*.8,k=p(u,a,a+.8),s=p(u,TM.calendar+.4+i*.4,TM.calendar+1.4+i*.4);
  g.setAttribute('transform','translate('+(-186*(1-k)).toFixed(1)+' '+((52-74*i)*(1-k)+110*s).toFixed(1)+')');g.setAttribute('opacity',(k*(1-.85*s)).toFixed(2))});
rise($('wk5'),p(u,TM.calendar,TM.calendar+.6));
rise($('ni5'),p(u,TM.calendar+4.6,TM.calendar+5.2));
rise($('st5'),p(u,TM.calendar+6.8,TM.calendar+7.4));rise($('mv5'),p(u,TM.calendar+6.8,TM.calendar+7.4));

[TM.handshake,TM.big_picture,TM.thumbs_up,TM.thumbs_up+4.1].forEach((a,i)=>rise($('v6'+i),p(u,a,a+.6)));
DOT6.forEach((d,i)=>d.setAttribute('cy',(346-8*Math.max(0,Math.sin(t*5-i*.9))).toFixed(1)));
rise($('x6'),p(u,TM.thumbs_up+4.6,TM.thumbs_up+5));
$('th6').setAttribute('opacity',(.5+.5*Math.abs(Math.sin(t*3))).toFixed(2));

[TM.checklist,TM.email,TM.check_in].forEach((a,i)=>rise($('c7'+i),p(u,a,a+.6)));
TK.forEach((k,i)=>k.setAttribute('opacity',p(u,TM.checklist+1+i*.5,TM.checklist+1.3+i*.5)));
$('hand7').setAttribute('x2',(1200+50*Math.sin(t*2)).toFixed(1));$('hand7').setAttribute('y2',(370-50*Math.cos(t*2)).toFixed(1));
rise($('cp7'),p(u,TM.check_in,TM.check_in+.6));
const bx7=200+1200*p(u,TM.check_in+.6,TM.check_in+4.6);
$('ball7').setAttribute('cx',bx7.toFixed(1));$('ball7').setAttribute('cy',(638-12*Math.abs(Math.sin(t*5))).toFixed(1));
$('prog7').setAttribute('x2',bx7.toFixed(1));
CPC.forEach(([c,x])=>c.setAttribute('fill',bx7>=x?'var(--gain)':'var(--stage)'));
rise($('sup7'),p(u,TM.check_in+5,TM.check_in+5.6));

const S8=SC[8][0]/K;
rise($('qt8'),p(u,S8+.3,S8+.9));
rise($('qa'),p(u,S8+3,S8+3.5));rise($('qb'),p(u,S8+3.4,S8+3.9));rise($('qc'),p(u,S8+3.8,S8+4.3));
rise($('g8'),p(u,S8+4.4,S8+5));$('rays8').setAttribute('transform','rotate('+(t*20).toFixed(1)+' 1220 720)');