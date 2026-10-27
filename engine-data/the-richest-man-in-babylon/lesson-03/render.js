const R=TM.raise_coins;
TC.forEach((c,i)=>{const a=R+.2+i*.25,fi=p(u,a,a+.8),b=R+3.5+i*.3,fo=p(u,b,b+1.2);c.setAttribute('cy',(230+(300-(i>2?40:0))*fi+300*fo).toFixed(1));c.setAttribute('opacity',(cl(fi*4)*(1-fo)).toFixed(2))});
rise($('tq'),p(u,R+6.5,R+7.1));

const A=TM.arkad_teach,H=TM.student_hand;
rise($('arkadW'),p(u,A,A+.5));
$('purse').setAttribute('transform','translate(470 520) scale('+(.7+.45*p(u,A+2,A+5)).toFixed(3)+')');
ST.forEach((g,i)=>rise(g,p(u,A+1+i*.3,A+1.5+i*.3)));
rise($('arm'),p(u,H,H+.5)); rise($('bub1'),p(u,H+3.8,H+4.3)); rise($('bq2'),p(u,H+9.2,H+9.7));

const G=TM.growing_jar;
rise($('leg2'),p(u,G,G+.5));
BR.forEach((b,i)=>{const h=140+100*i,a=G+.6+i*1.2,k1=p(u,a,a+.8),k2=p(u,a+.4,a+1.2);
  b[0].setAttribute('y',(760-h*k1).toFixed(1));b[0].setAttribute('height',(h*k1).toFixed(1));
  b[1].setAttribute('y',(760-h*k2).toFixed(1));b[1].setAttribute('height',(h*k2).toFixed(1))});
rise($('scroll'),p(u,TM.quote_scroll,TM.quote_scroll+.6)); rise($('houses'),p(u,TM.two_houses,TM.two_houses+.6));

const N=TM.need_basket,D=TM.desire_cloud;
rise($('basket'),p(u,N,N+.5));
[0,1,2].forEach(i=>rise($('ni'+i),p(u,N+4.1+i*.4,N+4.6+i*.4))); rise($('fhc'),p(u,N+5.2,N+5.7));
rise($('neq'),p(u,D-.3,D+.2)); rise($('cloud'),p(u,D,D+.5));
const cs=(.7+.3*p(u,D+.5,D+5))+.03*Math.sin(t*2);
CG.setAttribute('transform','translate(1100 500) scale('+cs.toFixed(3)+')');
rise($('fam'),p(u,D+5,D+5.6));

const W=TM.wish_list,P=TM.red_pen;
rise($('paper'),p(u,W,W+.5));
let j=0;LR.forEach((r,i)=>{rise(r[0],p(u,W+3+i*.5,W+3.4+i*.5));
  if(ND[i])r[1].setAttribute('opacity',p(u,P+1+i*.5,P+1.3+i*.5));
  else{const a=P+7.4+j*.5,k=p(u,a,a+.4);j++;r[2].setAttribute('x2',(228+(r[4]-228)*k).toFixed(1));r[2].setAttribute('opacity',k>0?1:0);r[1].setAttribute('opacity',k.toFixed(2))}});
rise($('penW'),p(u,P,P+.4));
// pen stays fully inside the card (x 550-635), travelling down to the Jewels row
$('pen').setAttribute('transform','translate(560 '+(330+414*p(u,P+.6,P+9.6)).toFixed(1)+') rotate(35)');
rise($('inc4'),p(u,P,P+.5)); SG.forEach((s,i)=>rise(s,p(u,P+.3+i*.15,P+.7+i*.15)));
rise($('seglab'),p(u,P+2.2,P+2.7)); rise($('regret'),p(u,P+7.4,P+8));

const B=TM.budget_tablet,X=TM.treasure_box;
rise($('tab'),p(u,B,B+.5)); TR.forEach((g,i)=>rise(g,p(u,B+.5+i*.3,B+.9+i*.3)));
rise($('sub5'),p(u,B+2.2,B+2.7));
rise($('arr5'),p(u,X-.3,X+.2)); rise($('chest'),p(u,X,X+.5)); rise($('wants'),p(u,X+.8,X+1.3)); rise($('wl'),p(u,X+.8,X+1.3));
WN.forEach((c,i)=>{const a=i*Math.PI/3+.4,r=300-56*Math.abs(Math.sin(t*1.6+i));c.setAttribute('cx',(1060+r*Math.cos(a)).toFixed(1));c.setAttribute('cy',(520+r*Math.sin(a)).toFixed(1))});

const S=TM.spend_arrow,Q=TM.stop_hand;
$('inc').setAttribute('opacity',p(u,S,S+.6)); rise($('leg6'),p(u,S,S+.5)); rise($('sub6'),p(u,S+3,S+3.5));
const XE=160+940*p(u,S+3,S+7.5),sh=p(u,Q,Q+1.2);let sp='';
for(let x=160;x<=XE;x+=10){let y=IN(x-70)+14;if(x>560)y=y*(1-sh)+554*sh;sp+=x+','+y.toFixed(1)+' '}
$('spd').setAttribute('points',sp||'160,654'); $('spd').setAttribute('opacity',u>=S+3?1:0);
rise($('stop'),p(u,Q,Q+.5)); rise($('dec'),p(u,Q+.6,Q+1.1)); rise($('gap'),p(u,Q+1.2,Q+1.8));

const F=TM.phone_bank,C=TM.circled_item;
rise($('oldt'),p(u,F,F+.5)); rise($('arr7'),p(u,F+.6,F+1)); rise($('phone'),p(u,F+.6,F+1.1));
PR.forEach((g,i)=>rise(g,p(u,F+1.2+i*.3,F+1.6+i*.3)));
rise($('pr1'),p(u,C+.3,C+.8)); rise($('pr2'),p(u,C+2,C+2.5)); $('circ').setAttribute('opacity',p(u,C+2.5,C+3));

const E=TM.pen_paper;
rise($('pp'),p(u,E,E+.5)); rise($('tonight'),p(u,E,E+.6)); FM.forEach((g,i)=>g.setAttribute('opacity',p(u,E+.8+i*.3,E+1.1+i*.3).toFixed(2)));
rise($('qa'),p(u,E+5.4,E+5.9)); rise($('qb'),p(u,E+5.8,E+6.3));