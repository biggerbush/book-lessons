rise($('gift'),p(u,TM.free_gift,TM.free_gift+.6));
const lf=p(u,TM.free_gift+1.5,TM.free_gift+2.5);
$('lid').setAttribute('transform','translate(0 '+(-50*lf).toFixed(1)+') rotate('+(-10*lf).toFixed(1)+' 1200 426)');
$('rays').setAttribute('opacity',(lf*(.6+.4*Math.sin(t*3))).toFixed(2));

rise($('pair'),p(u,TM.two_people,TM.two_people+.5));
rise($('give'),p(u,TM.two_people+.8,TM.two_people+1.3));
const ms=p(u,TM.two_people+1.2,TM.two_people+3),mx=(1-ms)*(1-ms)*450+2*(1-ms)*ms*590+ms*ms*730,my=(1-ms)*(1-ms)*300+2*(1-ms)*ms*230+ms*ms*300;
$('mini').setAttribute('transform','translate('+mx.toFixed(1)+' '+my.toFixed(1)+')');$('mini').setAttribute('opacity',u>=TM.two_people+1.2?1:0);
rise($('back'),p(u,TM.two_people+3.5,TM.two_people+4));
WN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.web_arrows+i*.2,TM.web_arrows+i*.2+.3)));
WL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.web_arrows+1+i*.08,TM.web_arrows+1.3+i*.08)));
rise($('webl'),p(u,TM.web_arrows+1.5,TM.web_arrows+2));
rise($('debt'),p(u,TM.web_arrows+3.8,TM.web_arrows+4.4));

rise($('lab'),p(u,TM.lab_room,TM.lab_room+.5));
const cb=p(u,TM.cola_bottle+.8,TM.cola_bottle+2.2);
$('cola').setAttribute('transform','translate('+(350+180*cb).toFixed(1)+' 470)');$('cola').setAttribute('opacity',u>=TM.cola_bottle?p(u,TM.cola_bottle,TM.cola_bottle+.4):0);
rise($('rt'),p(u,TM.raffle_ticket,TM.raffle_ticket+.5));
rise($('chart'),p(u,TM.raffle_ticket+.6,TM.raffle_ticket+1.1));
TA.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.raffle_ticket+1+i*.2,TM.raffle_ticket+1.2+i*.2)));
TB.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.raffle_ticket+3.3+i*.2,TM.raffle_ticket+3.5+i*.2)));
rise($('x2'),p(u,TM.raffle_ticket+4.6,TM.raffle_ticket+5.1));
rise($('dis'),p(u,TM.raffle_ticket+7.9,TM.raffle_ticket+8.5));

rise($('air'),p(u,TM.airport,TM.airport+.6));
const fv=p(u,TM.flower,TM.flower+1.2);
$('fl').setAttribute('transform','translate('+(360+290*fv).toFixed(1)+' 500)');$('fl').setAttribute('opacity',p(u,TM.flower,TM.flower+.3));
rise($('refuse'),p(u,TM.flower+2.8,TM.flower+3.3));
rise($('cup'),p(u,TM.donation_cup,TM.donation_cup+.5));
const pd=TM.donation_cup+3;
CO.forEach((c,i)=>{const ph=((t*.8+i/3)%1);c.setAttribute('cy',(420+100*ph).toFixed(1));c.setAttribute('opacity',u>=pd?(1-ph*.6).toFixed(2):0)});
rise($('grr'),p(u,pd,pd+.4));$('grrt').setAttribute('x',(720+3*Math.sin(t*25)).toFixed(1));
rise($('paid'),p(u,pd,pd+.5));rise($('real'),p(u,TM.donation_cup+6,TM.donation_cup+6.6));

rise($('t1'),p(u,TM.boy_scout+1,TM.boy_scout+1.5));
$('st1').setAttribute('x2',(440+440*p(u,TM.circus_ticket,TM.circus_ticket+.5)).toFixed(1));$('st1').setAttribute('opacity',u>=TM.circus_ticket?1:0);
rise($('bubg'),p(u,TM.circus_ticket,TM.circus_ticket+.4));
const by=TM.chocolate_bar+6.1,yes=u>=by;
$('bub').textContent=yes?'Yes.':'No.';$('bub').style.fill=yes?'var(--gain)':'var(--loss)';
rise($('t2'),p(u,TM.chocolate_bar,TM.chocolate_bar+.6));
const bb=p(u,by,by+1.2);
CB.forEach((g,i)=>{g.setAttribute('transform','translate('+(580+635*bb).toFixed(1)+' '+(565+(i*55-45)*bb).toFixed(1)+')');g.setAttribute('opacity',yes?1:0)});
rise($('two'),p(u,by+.6,by+1.2));

rise($('stu'),p(u,TM.students,TM.students+.6));
const g0=p(u,TM.bar_17,TM.bar_17+1),g2=p(u,TM.bar_50,TM.bar_50+1.2);
rise($('r0'),p(u,TM.bar_17,TM.bar_17+.4));$('b0').setAttribute('width',(840*.17*g0).toFixed(1));
$('v0').setAttribute('x',(580+840*.17*g0).toFixed(1));$('v0').textContent=Math.round(17*g0)+'%';
rise($('r1'),p(u,TM.bar_17+1.8,TM.bar_17+2.3));rise($('ref'),p(u,TM.bar_17+8,TM.bar_17+8.4));
rise($('r2'),p(u,TM.bar_50,TM.bar_50+.4));$('b2').setAttribute('width',(840*.5*g2).toFixed(1));
$('v2').setAttribute('x',(580+840*.5*g2).toFixed(1));$('v2').textContent=Math.round(50*g2)+'%';
rise($('same'),p(u,TM.bar_50+1.6,TM.bar_50+2.2));

rise($('hands'),p(u,TM.open_hands,TM.open_hands+.5));
rise($('chain'),p(u,TM.open_hands+1,TM.open_hands+1.5));rise($('oweg'),p(u,TM.open_hands+1.4,TM.open_hands+1.9));
rise($('mag'),p(u,TM.magnifier,TM.magnifier+.6));
$('magw').setAttribute('transform','rotate('+(1.5*Math.sin(t*1.6)).toFixed(2)+' 235 510)');
rise($('tag'),p(u,TM.magnifier+5.4,TM.magnifier+5.9));
const br=p(u,TM.broken_chain,TM.broken_chain+.6);
CL.forEach((c,i)=>{c.setAttribute('transform','translate('+(i<3?-30*br:i>3?30*br:0).toFixed(1)+' '+(i===3?40*br:0).toFixed(1)+')');c.setAttribute('opacity',i===3?(1-br).toFixed(2):1);c.setAttribute('stroke',br>0?'var(--muted)':'var(--ink)')});
$('owe').textContent=br>.5?'You owe nothing':'You owe…';$('owe').style.fill=br>.5?'var(--gain)':'var(--ink)';
rise($('trick'),p(u,TM.broken_chain+.6,TM.broken_chain+1.2));

rise($('qlab'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qbox'),p(u,TM.question_mark+.5,TM.question_mark+1));
$('qmk').setAttribute('transform','rotate('+(6*Math.sin(t*2)).toFixed(1)+' 1330 530)');
rise($('qa'),p(u,TM.question_mark+6.2,TM.question_mark+6.7));rise($('qb'),p(u,TM.question_mark+6.7,TM.question_mark+7.2));rise($('qc'),p(u,TM.question_mark+7.2,TM.question_mark+7.7));