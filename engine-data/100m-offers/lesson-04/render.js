const sw=Math.sin(t*1.6);
rise($('tA'),p(u,TM.price_tag,TM.price_tag+.5)); rise($('tB'),p(u,TM.price_tag+1.2,TM.price_tag+1.8));
$('tAi').setAttribute('transform','rotate('+(3*sw).toFixed(2)+' 1135 305)'); $('tBi').setAttribute('transform','rotate('+(-2*sw).toFixed(2)+' 1160 475)');
$('rule0').setAttribute('x2',(1100+380*p(u,TM.price_tag+5.2,TM.price_tag+6.2)).toFixed(1));

rise($('f1lbl'),p(u,TM.balance,TM.balance+.5)); $('f1bar').setAttribute('x2',(500+940*p(u,TM.balance,TM.balance+1)).toFixed(1));
rise($('f1t0'),p(u,TM.top_pair,TM.top_pair+.5)); rise($('f1t1'),p(u,TM.top_pair+2.5,TM.top_pair+3));
rise($('f1b0'),p(u,TM.bottom_pair,TM.bottom_pair+.5)); rise($('f1b1'),p(u,TM.bottom_pair+2.5,TM.bottom_pair+3));
const k1=p(u,TM.bottom_pair+6,TM.bottom_pair+7.2);
$('f1top').setAttribute('transform','translate(0 '+(-20*k1).toFixed(1)+')');
$('f1bot').setAttribute('transform','translate(970 610) scale('+(1-.3*k1).toFixed(3)+') translate(-970 -610)');
rise($('f1arr'),k1); rise($('f1say'),p(u,TM.bottom_pair+6,TM.bottom_pair+6.6));

rise($('d2me'),p(u,TM.dreamer,TM.dreamer+.5)); rise($('d2sc'),p(u,TM.dreamer+3.8,TM.dreamer+4.3));
const x2=p(u,TM.dreamer+5,TM.dreamer+5.6);
$('d2x').setAttribute('x2',(212+176*x2).toFixed(1)); $('d2x').setAttribute('y2',(792-68*x2).toFixed(1));
const b2=p(u,TM.beach,TM.beach+.8), v2=p(u,TM.beach+5.8,TM.beach+7);
$('d2trl').setAttribute('opacity',b2); $('d2bub').setAttribute('opacity',b2);
$('d2bub').setAttribute('transform','translate(900 450) scale('+(.5+.4*b2+.12*v2).toFixed(3)+') translate(-900 -450)');
rise($('d2w'),p(u,TM.beach+1.5,TM.beach+2)); rise($('d2met'),b2);
const h2=430*(.1+.4*b2+.5*v2); $('d2fill').setAttribute('height',h2.toFixed(1)); $('d2fill').setAttribute('y',(695-h2).toFixed(1));
rise($('d2say'),p(u,TM.beach+5.8,TM.beach+6.4));

const g3=p(u,TM.testimonial+4,TM.testimonial+5);
rise($('d3me'),p(u,TM.doubt_cloud,TM.doubt_cloud+.5)); $('d3me2').setAttribute('opacity',g3);
rise($('d3cl'),p(u,TM.doubt_cloud+.6,TM.doubt_cloud+1.1)*(1-g3));
C3.forEach((g,i)=>rise(g,p(u,TM.testimonial+i*1.5,TM.testimonial+i*1.5+.5)));
rise($('d3g'),p(u,TM.doubt_cloud+1.5,TM.doubt_cloud+2));
const a3=-70+60*p(u,TM.testimonial,TM.testimonial+4)+80*p(u,TM.testimonial+7,TM.testimonial+8);
$('d3n').setAttribute('transform','rotate('+a3.toFixed(1)+' 880 720)');
rise($('d3say'),p(u,TM.testimonial+7,TM.testimonial+7.6));

const ck=Math.max(0,u-TM.clock);
rise($('d4clk'),p(u,TM.clock,TM.clock+.5));
$('d4h1').setAttribute('transform','rotate('+(ck*180%360).toFixed(1)+' 260 470)'); $('d4h2').setAttribute('transform','rotate('+(ck*15%360).toFixed(1)+' 260 470)');
rise($('d4a'),p(u,TM.calendar,TM.calendar+.5)); rise($('d4b'),p(u,TM.calendar+2.5,TM.calendar+3));
W4.forEach((c,i)=>{const a=i?TM.calendar+6.6+i*.4:TM.calendar+3; c.setAttribute('opacity',p(u,a,a+.3))});
rise($('d4say'),p(u,TM.calendar+6.6,TM.calendar+7.2));

rise($('d5L'),p(u,TM.treadmill,TM.treadmill+.5)); rise($('d5pl'),p(u,TM.meal_box+1,TM.meal_box+1.5)); rise($('d5R'),p(u,TM.meal_box+3,TM.meal_box+3.5));
SW.forEach((c,i)=>{const k=(t*.9+i/3)%1; c.setAttribute('cy',(400+60*k).toFixed(1)); c.setAttribute('opacity',(1-k).toFixed(2))});
const k5=p(u,TM.meal_box+6.6,TM.meal_box+8);
rise($('d5bars'),p(u,TM.meal_box+6.6,TM.meal_box+7));
$('d5b0').setAttribute('width',(820-600*k5).toFixed(1)); $('d5b1').setAttribute('width',(180+640*k5).toFixed(1));

const f6=p(u,TM.ruler+4.2,TM.ruler+4.8);
C6.forEach((g,i)=>rise(g,p(u,TM.ruler+i*.5,TM.ruler+i*.5+.4)*(1-.5*f6)));
rise($('d6f'),f6); rise($('d6rul'),f6); rise($('d6val'),f6);
const a6=p(u,TM.ruler+5,TM.ruler+6.5), z6=p(u,TM.zero,TM.zero+2.5), s6=1-.45*a6;
$('d6bot').setAttribute('transform','translate(860 490) scale('+s6.toFixed(3)+') translate(-860 -490)');
$('d6bot').setAttribute('opacity',(1-z6).toFixed(3));
rise($('d6z'),p(u,TM.zero+1,TM.zero+1.6));
const h6=370*(.15+.2*a6+.65*z6); $('d6v').setAttribute('height',h6.toFixed(1)); $('d6v').setAttribute('y',(635-h6).toFixed(1));
rise($('d6say'),p(u,TM.zero+3.8,TM.zero+4.4));

rise($('d7h'),p(u,TM.mind,TM.mind+.6)); rise($('d7a'),p(u,TM.mind+3.4,TM.mind+3.9));
$('d7arr').setAttribute('opacity',p(u,TM.mind+4,TM.mind+4.6)); rise($('d7b'),p(u,TM.mind+4.5,TM.mind+5));
rise($('d7d'),p(u,TM.four_dials,TM.four_dials+.5)); rise($('d7say'),p(u,TM.four_dials+.3,TM.four_dials+.9));
ND.forEach(([l,x,y],i)=>{const k=p(u,TM.four_dials+.5+i*.4,TM.four_dials+1.2+i*.4),a=(i<2?65:-65)*k+3*Math.sin(t*2+i)*k; l.setAttribute('transform','rotate('+a.toFixed(1)+' '+x+' '+y+')')});

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+.7,s8+1.2));
rise($('d8eq'),p(u,s8+1.2,s8+1.8));
rise($('d8c0'),p(u,TM.checklist,TM.checklist+.5)); rise($('d8c1'),p(u,TM.checklist+1.4,TM.checklist+1.9));
$('d8k0').setAttribute('opacity',p(u,TM.checklist+.8,TM.checklist+1.1)); $('d8k1').setAttribute('opacity',p(u,TM.checklist+2.2,TM.checklist+2.5));
const e0=1-.5*p(u,TM.checklist+.8,TM.checklist+1.8), e1=1-.5*p(u,TM.checklist+2.2,TM.checklist+3.2);
$('d8tm').setAttribute('transform','translate(980 735) scale('+e0.toFixed(3)+') translate(-980 -735)');
$('d8ef').setAttribute('transform','translate(1260 735) scale('+e1.toFixed(3)+') translate(-1260 -735)');
const up=p(u,TM.checklist+2.6,TM.checklist+3.2);
rise($('d8up'),up); $('d8up').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*2))*up+(1-up)*8).toFixed(1)+')');
rise($('d8l'),p(u,TM.checklist+3,TM.checklist+3.5));