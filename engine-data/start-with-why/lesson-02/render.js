const T0=TM.title_circles;[2,1,0].forEach((j,i)=>rise($('tc'+j),p(u,T0+i*.5,T0+i*.5+.5)));rise($('wo'),p(u,T0+5,T0+5.5));

rise($('r1o'),p(u,TM.outer_ring,TM.outer_ring+.5));rise($('r1m'),p(u,TM.middle_ring,TM.middle_ring+.5));
rise($('lb0'),p(u,TM.middle_ring+.4,TM.middle_ring+.9));rise($('lb1'),p(u,TM.middle_ring+2.6,TM.middle_ring+3.1));
const cd=p(u,TM.center_dot,TM.center_dot+.6);$('r1c').setAttribute('r',(70*cd*(1+.05*Math.sin(t*3))).toFixed(1));
rise($('lb2'),p(u,TM.center_dot+.4,TM.center_dot+.9));rise($('gold'),p(u,TM.center_dot+4.1,TM.center_dot+4.6));

rise($('pb'),p(u,TM.product_box,TM.product_box+.5));rise($('ra'),p(u,TM.product_box+5.8,TM.product_box+6.3));
RA.forEach((r,i)=>r.setAttribute('fill',u>=TM.product_box+6.2+i*.15?'var(--gain)':'var(--line)'));
const ga=t*30;G1.setAttribute('transform','translate(1110 440) rotate('+ga.toFixed(1)+')');G2.setAttribute('transform','translate(1240 370) rotate('+(12-ga*10/7).toFixed(1)+')');
rise($('gr'),p(u,TM.gears,TM.gears+.5));rise($('rb'),p(u,TM.gears+6.2,TM.gears+6.7));
RB.forEach((r,i)=>r.setAttribute('fill',[1,4,6].includes(i)&&u>=TM.gears+6.6+i*.1?'var(--gain)':'var(--line)'));

rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));rise($('cs'),p(u,TM.coin_stack,TM.coin_stack+.5));
rise($('cx3'),p(u,TM.coin_stack+1.5,TM.coin_stack+1.9));rise($('pr'),p(u,TM.coin_stack+4.2,TM.coin_stack+4.7));
rise($('rc'),p(u,TM.question_mark+12.2,TM.question_mark+12.7));RC.forEach((r,i)=>r.setAttribute('fill',i==6&&u>=TM.question_mark+12.9?'var(--gain)':'var(--line)'));

const a4=p(u,TM.arrow_inward,TM.arrow_inward+1.2);setA(A4,130,130+170*a4,a4);
R4[0].setAttribute('stroke',u>=TM.arrow_inward+.4?'var(--loss)':'var(--ink)');R4[1].setAttribute('stroke',u>=TM.arrow_inward+.9?'var(--loss)':'var(--ink)');R4[2].setAttribute('fill','var(--line)');
rise($('sp'),p(u,TM.sales_pitch,TM.sales_pitch+.4));[0,1,2].forEach(i=>rise($('pl'+i),p(u,TM.sales_pitch+i*2.4,TM.sales_pitch+i*2.4+.5)));
rise($('nt'),p(u,TM.sales_pitch+7,TM.sales_pitch+7.5));rise($('cold'),p(u,TM.sales_pitch+12.4,TM.sales_pitch+12.9));
const sh=u>=TM.sales_pitch+13?1:0;PG.forEach((g,i)=>g.setAttribute('transform','translate('+(sh*2.5*Math.sin(t*22+i*1.7)).toFixed(1)+' 0)'));

const a5=p(u,TM.arrow_outward,TM.arrow_outward+1.2);setA(A5,460,460+204*a5,a5);
const on5=u>=TM.arrow_outward;R5[2].setAttribute('fill',on5?'var(--gain)':'var(--line)');R5[3].style.fill=on5?'var(--on-gain)':'var(--ink)';
R5[1].setAttribute('stroke',u>=TM.laptop?'var(--gain)':'var(--ink)');R5[0].setAttribute('stroke',u>=TM.laptop+3.5?'var(--gain)':'var(--ink)');
rise($('bb'),p(u,TM.belief_banner,TM.belief_banner+.5));rise($('hw'),p(u,TM.laptop,TM.laptop+.5));rise($('wt'),p(u,TM.laptop+3.5,TM.laptop+4));

rise($('cards'),p(u,TM.two_cards,TM.two_cards+.5));rise($('oc'),p(u,TM.two_cards+2.6,TM.two_cards+3.1));
const ro=p(u,TM.two_cards+2.6,TM.two_cards+3.6);CR.forEach((c,i)=>c.c.setAttribute('transform','translate(0 '+((2-2*i)*100*ro).toFixed(1)+')'));
const wy=ro>.5;CR[2].r.setAttribute('fill',wy?'var(--gain)':'var(--stage)');CR[2].r.setAttribute('stroke',wy?'var(--gain)':'var(--ink)');CR[2].e.style.fill=wy?'var(--on-gain)':'var(--ink)';
const bt=1+.1*Math.pow(Math.abs(Math.sin(t*3.5)),6);$('hrt').setAttribute('transform','translate(1425 440) scale('+(.7*bt).toFixed(3)+')');
rise($('hz'),p(u,TM.heart,TM.heart+.5));rise($('bl'),p(u,TM.heart+.4,TM.heart+.9));rise($('quo'),p(u,TM.heart+6.2,TM.heart+6.8));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
const k0=p(u,TM.pen,TM.pen+1.8),k1=p(u,TM.pen+2,TM.pen+3.6),k2=p(u,TM.center_star,TM.center_star+1.2),KS=[k0,k1,k2];
KS.forEach((k,i)=>NR[i].setAttribute('stroke-dashoffset',(100*(1-k)).toFixed(1)));
const j=k2>0?2:k1>0?1:0,an=2*Math.PI*KS[j],RR=[240,160,80][j];
$('pc').setAttribute('transform','translate('+(540+RR*Math.cos(an)).toFixed(1)+' '+(520+RR*Math.sin(an)).toFixed(1)+')');
rise($('pcw'),p(u,TM.pen,TM.pen+.4));
rise($('l0'),p(u,TM.pen+1.8,TM.pen+2.2));rise($('w0'),p(u,TM.pen+1.8,TM.pen+2.3));
rise($('l1'),p(u,TM.pen+3.6,TM.pen+4));rise($('w1'),p(u,TM.pen+3.6,TM.pen+4.1));
rise($('w2'),p(u,TM.center_star,TM.center_star+.5));rise($('st'),p(u,TM.center_star+1.1,TM.center_star+1.6));rise($('sb'),p(u,TM.center_star+5.8,TM.center_star+6.3));

const c8=SC[8][0]/K;rise($('qa'),p(u,c8+.3,c8+.8));rise($('qb'),p(u,c8+.7,c8+1.2));rise($('qc'),p(u,c8+4.2,c8+4.7));
rise($('fc'),p(u,c8+.3,c8+.9));$('fcd').setAttribute('r',(36+5*Math.sin(t*2.5)).toFixed(1));