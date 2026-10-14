TH.setAttribute('transform','translate(1310 440) scale('+(1.15+.06*Math.sin(t*3)).toFixed(3)+')');
rise($('tht'),p(u,TM.title_card,TM.title_card+.8));
ringAnim(RG,80,80,p(u,TM.title_card+4.6,TM.title_card+5.4));

$('sky').setAttribute('opacity',p(u,TM.dark_road,TM.dark_road+1));
const dx=60*p(u,TM.dark_road,TM.dark_road+12);
PR.forEach((g,i)=>{const a=TM.dark_road+i*.25;g.setAttribute('opacity',p(u,a,a+.4));g.setAttribute('transform','translate('+dx.toFixed(1)+' '+(3*Math.sin(t*4+i*1.3)).toFixed(1)+')')});
rise($('ice'),p(u,TM.icy_puddles,TM.icy_puddles+.5));
rise($('grd'),p(u,TM.guards_shout,TM.guards_shout+.5));
rise($('shout'),p(u,TM.guards_shout+.3,TM.guards_shout+.7));
EX.forEach((e,i)=>e.setAttribute('transform','translate('+(3*Math.sin(t*20+i)).toFixed(1)+' 0)'));
const sk=p(u,TM.guards_shout+3.8,TM.guards_shout+4.6);
SN.forEach((c,i)=>{c.setAttribute('cy',(220+((i*61+t*50)%400)).toFixed(1));c.setAttribute('cx',(140+(i*197)%1320+12*Math.sin(t+i)).toFixed(1));c.setAttribute('opacity',sk.toFixed(2))});
rise($('lab2'),sk);

rise($('frk'),p(u,TM.neighbor-.4,TM.neighbor+.1));rise($('nbr'),p(u,TM.neighbor,TM.neighbor+.5));
const wk=p(u,TM.neighbor+4.4,TM.neighbor+4.8);
WS.forEach((a,i)=>a.setAttribute('opacity',(wk*(.4+.6*Math.abs(Math.sin(t*2-i*.6)))).toFixed(2)));
rise($('wbub'),p(u,TM.neighbor+4.6,TM.neighbor+5.2));
rise($('tcl'),p(u,TM.thought_cloud,TM.thought_cloud+.6));

rise($('frk3'),p(u,TM.wife_face-.5,TM.wife_face));
rise($('por'),p(u,TM.wife_face,TM.wife_face+.8));
rise($('cb1'),p(u,TM.conversation,TM.conversation+.4));rise($('cb2'),p(u,TM.conversation+2,TM.conversation+2.4));
$('smi').setAttribute('opacity',p(u,TM.her_smile,TM.her_smile+.5));
const rl=p(u,TM.her_smile+3.4,TM.her_smile+4.6);
rayAnim(RY,1060,440,205,205+35*rl,.15);$('rays3').setAttribute('opacity',rl);

const sr=p(u,TM.rising_sun,TM.rising_sun+3),scy=600-260*sr;
$('sun').setAttribute('cy',scy.toFixed(1));
rayAnim(SR,800,scy,110,110+50*sr,.1);
rise($('tru'),p(u,TM.rising_sun+3.4,TM.rising_sun+4));
rise($('qt'),p(u,TM.quote_card,TM.quote_card+.6));

rise($('fgr'),p(u,TM.empty_hands,TM.empty_hands+.6));
rise($('own'),p(u,TM.empty_hands+1,TM.empty_hands+1.6));
const hg=p(u,TM.heart_glow,TM.heart_glow+.8);
H5.setAttribute('transform','translate(500 560) scale('+((.1+.25*hg)*(1+.06*Math.sin(t*3))).toFixed(3)+')');H5.setAttribute('opacity',hg);
ringAnim(GR,50,80,hg);
rise($('feel'),p(u,TM.heart_glow+.4,TM.heart_glow+.9));
const jf=p(u,TM.heart_glow+.8,TM.heart_glow+2.8);
$('joyF').setAttribute('width',(50+460*jf).toFixed(1));$('joyF').setAttribute('opacity',jf);
$('joyT').setAttribute('opacity',p(u,TM.heart_glow+2.4,TM.heart_glow+2.8));
rise($('jy3'),p(u,TM.heart_glow+6.2,TM.heart_glow+6.8));

rise($('frk6'),p(u,TM.question_mark-.6,TM.question_mark-.1));
rise($('wf'),p(u,TM.question_mark-.3,TM.question_mark+.2));
const io=p(u,TM.inner_self,TM.inner_self+1);
WF.forEach(e=>e.setAttribute('fill-opacity',(1-.85*io).toFixed(2)));
rise($('qmG'),p(u,TM.question_mark,TM.question_mark+.5));
$('qm').setAttribute('transform','rotate('+(6*Math.sin(t*1.5)).toFixed(1)+' 1240 300)');$('qm').setAttribute('opacity',(1-.6*io).toFixed(2));
const ln=p(u,TM.question_mark+4.2,TM.question_mark+5);
$('cn').setAttribute('opacity',ln);
MV.setAttribute('transform','translate('+(360+780*((t*.25)%1)).toFixed(1)+' 500) scale(.22)');MV.setAttribute('opacity',ln);
rise($('same6'),p(u,TM.question_mark+4.6,TM.question_mark+5.2));
$('core').setAttribute('r',(26*io*(1+.1*Math.sin(t*3))).toFixed(1));
rise($('inl'),io);
rise($('dth'),p(u,TM.inner_self+5,TM.inner_self+5.6));

rise($('phn'),p(u,TM.phone_photo,TM.phone_photo+.6));
CP.forEach((c,i)=>{const a=TM.phone_photo+3.8+i*.5;rise(c,p(u,a,a+.4))});
rise($('chr'),p(u,TM.two_chairs,TM.two_chairs+.6));
$('gh').setAttribute('opacity',(.6+.3*Math.sin(t*2)).toFixed(2));
rise($('b71'),p(u,TM.two_chairs+3.8,TM.two_chairs+4.2));rise($('b72'),p(u,TM.two_chairs+4.8,TM.two_chairs+5.2));
rise($('lov7'),p(u,TM.two_chairs+9.2,TM.two_chairs+9.8));

const S8=SC[8][0]/K;
rise($('qa'),p(u,S8+.4,S8+.9));rise($('qb'),p(u,S8+.8,S8+1.3));rise($('qc'),p(u,S8+1.2,S8+1.7));
rise($('lbl8'),p(u,S8+1.8,S8+2.4));
rise($('q81'),p(u,S8+5,S8+5.4));rise($('q82'),p(u,S8+6,S8+6.4));