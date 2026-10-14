rise($('s0badge'),p(u,TM.last_item+.6,TM.last_item+1.1));
$('s0brect').setAttribute('stroke-width',u>TM.last_item+7.4?(4+3*Math.abs(Math.sin(t*4))).toFixed(2):4);
const f0=p(u,TM.last_item+2,TM.last_item+4);
$('s0fing').setAttribute('cx',(1460-50*f0).toFixed(1));$('s0fing').setAttribute('cy',(820-272*f0).toFixed(1));

rise($('s1gem'),p(u,TM.scarce_gem,TM.scarce_gem+.5));
rise($('s1gauge'),p(u,TM.value_gauge,TM.value_gauge+.5));
const v1=p(u,TM.value_gauge+.4,TM.value_gauge+2.4);
$('s1needle').setAttribute('transform','rotate('+(-80+150*v1).toFixed(1)+' 800 620)');
$('s1arc').setAttribute('stroke-dasharray',((10+150*v1)/180*100).toFixed(1)+' 100');
rise($('s1good'),p(u,TM.value_gauge+6.2,TM.value_gauge+6.8));
rise($('s1free'),p(u,TM.lost_freedom,TM.lost_freedom+.5));
const lk=p(u,TM.lost_freedom+.8,TM.lost_freedom+2.4);
$('s1db').setAttribute('opacity',(1-.6*lk).toFixed(2));
$('s1dbr').setAttribute('fill',lk>.5?'var(--line)':'var(--gain)');
rise($('s1lock'),p(u,TM.lost_freedom+2,TM.lost_freedom+2.6));

rise($('s2jars'),p(u,TM.two_jars,TM.two_jars+.5));
C10.forEach((c,i)=>rise(c,p(u,TM.full_jar+i*.08,TM.full_jar+i*.08+.3)));rise($('s2l0'),p(u,TM.full_jar,TM.full_jar+.5));
C2.forEach((c,i)=>rise(c,p(u,TM.near_empty+i*.2,TM.near_empty+i*.2+.3)));rise($('s2l1'),p(u,TM.near_empty,TM.near_empty+.5));
rise($('s2rate'),p(u,TM.near_empty+1.8,TM.near_empty+2.3));
const r2=p(u,TM.near_empty+2,TM.near_empty+3.5);
$('s2r0').setAttribute('width',(28+92*r2).toFixed(1));$('s2r1').setAttribute('width',(28+272*r2).toFixed(1));

const sh=p(u,TM.shrink_arrow+.5,TM.shrink_arrow+2.5);
C3.forEach((c,i)=>c.setAttribute('opacity',i<2?1:(1-p(u,TM.shrink_arrow+.5+(i-2)*.2,TM.shrink_arrow+.8+(i-2)*.2)).toFixed(2)));
$('s3cnt').textContent=Math.round(10-8*sh);
rise($('s3arrow'),p(u,TM.shrink_arrow,TM.shrink_arrow+.5));
[TM.shrink_arrow+.8,TM.shrink_arrow+6.9,TM.crowd_hands].forEach((a,i)=>rise($('s3st'+i),p(u,a,a+.5)));
rise($('s3crowd'),p(u,TM.crowd_hands,TM.crowd_hands+.4));
const hk=p(u,TM.crowd_hands+.5,TM.crowd_hands+2.5);
HS.forEach(([s,a,c],i)=>{const f=.25+.45*hk+.03*hk*Math.sin(t*5+i*1.7),x=s[0]+(1270-s[0])*f,y=s[1]+(440-s[1])*f;
  a.setAttribute('d','M'+s[0]+' '+s[1]+'L'+x.toFixed(1)+' '+y.toFixed(1));c.setAttribute('cx',x.toFixed(1));c.setAttribute('cy',y.toFixed(1))});
rise($('s3grab'),p(u,TM.crowd_hands+6.2,TM.crowd_hands+6.8));

[1.2,2.6,4].forEach((d,i)=>rise($('s4sign'+i),p(u,TM.sign_limited+d,TM.sign_limited+d+.5)));
rise($('s4clock'),p(u,TM.clock_ticking,TM.clock_ticking+.5));
$('s4mh').setAttribute('transform','rotate('+(Math.floor(t*2)*30)+' 1150 420)');
$('s4hh').setAttribute('transform','rotate('+(t*12).toFixed(1)+' 1150 420)');
rise($('s4bar'),p(u,TM.clock_ticking+.3,TM.clock_ticking+.8));
const b4=p(u,TM.clock_ticking+.6,TM.clock_ticking+4.6);
$('s4bf').setAttribute('width',(600-540*b4).toFixed(1));$('s4bf').setAttribute('fill',b4>.5?'var(--loss)':'var(--gain)');

rise($('s5who'),p(u,TM.heart_racing,TM.heart_racing+.5));
const calm=p(u,TM.pause_hand,TM.pause_hand+2),hb=1+(.16-.1*calm)*Math.pow(Math.abs(Math.sin(t*(9-5*calm))),6);
$('s5heart').setAttribute('transform','translate(360 560) scale('+hb.toFixed(3)+')');
rise($('s5lamp'),p(u,TM.heart_racing+2.6,TM.heart_racing+3.1));
const fl=(1-calm)*(.35+.65*Math.abs(Math.sin(t*6)))+calm*.2;
$('s5dome').setAttribute('fill-opacity',fl.toFixed(2));$('s5rays').setAttribute('opacity',fl.toFixed(2));
rise($('s5stop'),p(u,TM.pause_hand,TM.pause_hand+.5));

rise($('s6q'),p(u,TM.question_mark,TM.question_mark+.5));
$('s6qt').setAttribute('transform','rotate('+(6*Math.sin(t*2)).toFixed(2)+' 300 470)');
rise($('s6own'),p(u,TM.question_mark+3,TM.question_mark+3.5));
rise($('s6use'),p(u,TM.cookie_bite,TM.cookie_bite+.5));
$('s6bite').setAttribute('opacity',p(u,TM.cookie_bite+1.5,TM.cookie_bite+1.8));
rise($('s6same'),p(u,TM.cookie_bite+2.2,TM.cookie_bite+2.7));

SW.forEach(([g,tr,kn,x],i)=>{rise(g,p(u,TM.six_switches+i*.3,TM.six_switches+i*.3+.4));
  const on=p(u,TM.six_switches+4.6+i*.25,TM.six_switches+4.9+i*.25);kn.setAttribute('cx',(x-32+64*on).toFixed(1));tr.setAttribute('fill',on>.5?'var(--gain)':'var(--stage)')});
rise($('s7help'),p(u,TM.six_switches+4.6,TM.six_switches+5.2));
rise($('s7chk'),p(u,TM.honest_check,TM.honest_check+.5));
rise($('s7yes'),p(u,TM.honest_check+6.2,TM.honest_check+6.7));
rise($('s7no'),p(u,TM.honest_check+9.2,TM.honest_check+9.7));

const s8=SC[8][0]/K;
rise($('s8a'),p(u,s8+.3,s8+.8));rise($('s8t'),p(u,s8+.6,s8+1.1));
const sec=Math.max(0,59-Math.floor(Math.max(0,u-s8)));$('s8tt').textContent='00:'+(sec<10?'0':'')+sec;
rise($('s8qa'),p(u,s8+4.2,s8+4.7));rise($('s8qb'),p(u,s8+4.6,s8+5.1));
C8.forEach((c,i)=>rise(c,p(u,s8+5.2+i*.1,s8+5.5+i*.1)));