rise($('ph0'),p(u,TM.phone,TM.phone+.5));
PR.forEach((g,i)=>rise(g,p(u,TM.phone+.4+i*.3,TM.phone+.8+i*.3)));
const ak=p(u,TM.phone+4.2,TM.phone+4.7);$('ask0').setAttribute('opacity',ak);
$('ask0').setAttribute('transform','translate(1430 250) scale('+(ak*(1+.06*Math.sin(t*4))).toFixed(3)+') translate(-1430 -250)');

rise($('you1'),p(u,TM.contact_list,TM.contact_list+.5));
CARD.forEach((g,i)=>rise(g,p(u,TM.contact_list+.8+i*1.2,TM.contact_list+1.3+i*1.2)));
BR.forEach((b,i)=>{const k=p(u,TM.trust_bridge+i*.3,TM.trust_bridge+1+i*.3);draw(b,k);const f=(t*.45+i*.27)%1,q=b.getPointAtLength(b.getTotalLength()*(1-f));DOT[i].setAttribute('cx',q.x.toFixed(1));DOT[i].setAttribute('cy',q.y.toFixed(1));DOT[i].setAttribute('opacity',(k>=1?Math.sin(Math.PI*f):0).toFixed(2))});
rise($('trl'),p(u,TM.trust_bridge+1.5,TM.trust_bridge+2));rise($('coin1'),p(u,TM.coin,TM.coin+.5));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
[0,1,2].forEach(i=>rise($('ic'+i),p(u,TM.social_icons+i*1.2,TM.social_icons+.5+i*1.2)));
NB.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.social_icons+.8+i*.5,TM.social_icons+1.1+i*.5)));
const aw=u>=TM.social_icons+5.8;[2,6].forEach(i=>NB[i].style.fill=aw?'var(--loss)':'var(--ink)');rise($('awl'),p(u,TM.social_icons+5.8,TM.social_icons+6.3));
rise($('scg'),p(u,TM.long_scroll,TM.long_scroll+.4));const sh=60+430*p(u,TM.long_scroll+.2,TM.long_scroll+2.4);
$('scr').setAttribute('height',sh.toFixed(1));$('roll').setAttribute('y',(225+sh).toFixed(1));
// a line shows only when its bottom is at least 16px above the roller top
SLN.forEach((l,i)=>l.setAttribute('opacity',280+i*38+14+16<=225+sh?1:0));

rise($('pitch'),p(u,TM.speech_bubble,TM.speech_bubble+.5));draw($('pstrike'),p(u,TM.speech_bubble+.8,TM.speech_bubble+1.4));rise($('nop'),p(u,TM.speech_bubble+1.2,TM.speech_bubble+1.7));
AC.forEach((a,i)=>{rise(a[0],p(u,TM.speech_bubble+2.5+i*.8,TM.speech_bubble+3+i*.8));const on=u>=TM.thumbs_up+i*2.2;a[1].setAttribute('stroke',on?'var(--gain)':'var(--line)');a[1].setAttribute('stroke-width',on?6:4)});
rise($('thumb'),p(u,TM.thumbs_up,TM.thumbs_up+.5));

const qm=TM.question_mark;rise($('p4you'),p(u,qm,qm+.5));rise($('p4fr'),p(u,qm+.2,qm+.7));
rise($('b4a'),p(u,qm+.3,qm+.8)*(1-p(u,qm+3.4,qm+3.8)));rise($('b4b'),p(u,qm+3.7,qm+4.2));
rise($('door4'),p(u,TM.open_door,TM.open_door+.5));const dk=p(u,TM.open_door+.4,TM.open_door+1.6),dw=220*(1-.65*dk);
$('panel').setAttribute('d','M1100 290L'+(1100+dw).toFixed(1)+' '+(290+30*dk).toFixed(1)+'V'+(670-30*dk).toFixed(1)+'L1100 670Z');$('lite').setAttribute('opacity',dk);
const rh=p(u,TM.raised_hand,TM.raised_hand+.6);draw($('arm'),rh);$('hand').setAttribute('opacity',rh>=1?1:0);
FR4.childNodes.forEach(c=>c.setAttribute('class',rh>=1?'gain':'ink'));rise($('me4'),p(u,TM.raised_hand+.5,TM.raised_hand+1));

rise($('tr5'),p(u,TM.trainer,TM.trainer+.5));$('bell').setAttribute('transform','translate(0 '+(-14*Math.abs(Math.sin(t*1.6))).toFixed(1)+')');
rise($('m0'),p(u,TM.text_message+.5,TM.text_message+.9));rise($('m1'),p(u,TM.text_message+2.5,TM.text_message+2.9));
CH5.forEach((g,i)=>rise(g,p(u,TM.text_message+5.8+i*.8,TM.text_message+6.2+i*.8)));
rise($('m3'),p(u,TM.referral,TM.referral+.5));draw($('refa'),p(u,TM.referral+1.2,TM.referral+2.2));
rise($('refp'),p(u,TM.referral+1.9,TM.referral+2.4));rise($('refl'),p(u,TM.referral+2.3,TM.referral+2.8));

rise($('yes6'),p(u,TM.handshake,TM.handshake+.5));
PL.forEach((q,i)=>{const a=TM.handshake+.6+i*.6;draw(q[1],p(u,a,a+.5));rise(q[0],p(u,a+.3,a+.8))});
ST.forEach((s,i)=>s.setAttribute('fill',u>=TM.star_review+.3+i*.3?'var(--gain)':'var(--line)'));rise($('st6'),p(u,TM.star_review,TM.star_review+.4));rise($('stl6'),p(u,TM.star_review+1.8,TM.star_review+2.3));
rise($('gearG'),p(u,TM.gear,TM.gear+.5));$('gearR').setAttribute('transform','translate(1220 420) rotate('+(t*30%360).toFixed(1)+')');
const eo=p(u,TM.gear+.6,TM.gear+1.1);EV.forEach((e,i)=>{const f=(t*.4+i/3)%1;e.setAttribute('transform','translate('+(890+180*f).toFixed(1)+' 420)');e.setAttribute('opacity',(eo*Math.sin(Math.PI*f)).toFixed(2))});

rise($('face7'),p(u,TM.worried_face,TM.worried_face+.5));$('facei').setAttribute('transform','rotate('+(4*Math.sin(t*5)).toFixed(2)+' 300 420)');
rise($('gift7'),p(u,TM.gift_box,TM.gift_box+.5));rise($('fav7'),p(u,TM.gift_box+1.2,TM.gift_box+1.7));
$('gifti').setAttribute('transform','translate(0 '+(-10*Math.abs(Math.sin(t*2.2))).toFixed(1)+')');
rise($('step7'),p(u,TM.small_steps,TM.small_steps+.5));
const ck=p(u,TM.small_steps+.4,TM.small_steps+2.6)*3,ci=Math.min(2,Math.floor(ck)),cr=ck-ci;
$('climb').setAttribute('cx',(SP7[ci][0]+(SP7[ci+1][0]-SP7[ci][0])*cr).toFixed(1));$('climb').setAttribute('cy',(SP7[ci][1]+(SP7[ci+1][1]-SP7[ci][1])*cr-30*Math.sin(Math.PI*cr)).toFixed(1));

rise($('qa'),p(u,TM.five_faces,TM.five_faces+.5));rise($('qb'),p(u,TM.five_faces+.4,TM.five_faces+.9));rise($('qc'),p(u,TM.five_faces+.8,TM.five_faces+1.3));
const sb=u>=TM.send_button;F8.forEach((f,i)=>{rise(f[0],p(u,TM.five_faces+1.4+i*.3,TM.five_faces+1.8+i*.3));f[1].setAttribute('class',sb&&i===4?'gain':'ink')});
draw($('ln8'),p(u,TM.send_button+.3,TM.send_button+.9));rise($('send8'),p(u,TM.send_button,TM.send_button+.5));rise($('go8'),p(u,TM.send_button+1,TM.send_button+1.5));
$('sendi').setAttribute('transform','translate(1050 650) scale('+(1+(sb?.04*Math.sin(t*4):0)).toFixed(3)+') translate(-1050 -650)');
const pf=(t*.5)%1,po=p(u,TM.send_button+1.2,TM.send_button+1.6);
$('plane').setAttribute('transform','translate('+(1220+200*pf).toFixed(1)+' '+(650-120*pf).toFixed(1)+') rotate(-30)');$('plane').setAttribute('opacity',(po*Math.sin(Math.PI*pf)).toFixed(2));