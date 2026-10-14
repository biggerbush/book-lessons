const R=(e,a,d=.5)=>rise(typeof e==='string'?$(e):e,p(u,a,a+d));
R('qm',TM.question_mark);$('qmt').setAttribute('transform','translate(0 '+(8*Math.sin(t*2)).toFixed(1)+')');
R('fh0',TM.fox_hedgehog);

R('scroll',TM.greek_scroll);const qt=TM.greek_scroll+4.2;R('quote',qt);R('fox1',qt+.6);R('hb',qt+.9);
TR.forEach((a,i)=>R(a,TM.hedgehog_ball+i*.25,.3));
const cu=p(u,TM.hedgehog_ball+2.2,TM.hedgehog_ball+3);$('hog1').setAttribute('opacity',1-cu);$('ball1').setAttribute('opacity',cu);
$('ball1').setAttribute('transform','rotate('+(cu*360+(cu>=1?5*Math.sin(t*2):0)).toFixed(1)+' 1100 610)');
R('lead',TM.leader);

R('c2g',TM.circle_best);R('wish',TM.circle_best+5.8);R('could',TM.circle_best+7);
R('cross',TM.crossed_out);DR($('xline'),p(u,TM.crossed_out+1,TM.crossed_out+1.8));DR($('xmark'),p(u,TM.crossed_out+1.6,TM.crossed_out+2.2));

R('c3g',TM.circle_money);$('gear').setAttribute('transform','translate(400 510) rotate('+(t*25%360).toFixed(1)+')');
R('frac',TM.denominator);
const qx=u>=TM.question_x,ix=qx?Math.floor((u-TM.question_x)/1.3)%3:-1;
CP.forEach((c,i)=>{R(c[0],TM.question_x+i*.3,.4);const on=i===ix;c[1].setAttribute('fill',on?'var(--gain)':'var(--stage)');c[1].setAttribute('stroke',on?'var(--gain)':'var(--ink)');c[2].style.fill=on?'var(--on-gain)':'var(--muted)'});
$('den').textContent=qx?'per '+CP[ix][3]:'per ?';R('sharp',TM.question_x+3.5);

R('p4c',TM.circle_heart);$('heart4').setAttribute('transform','translate(400 500) scale('+(1.4*(1+.07*Math.pow(Math.abs(Math.sin(t*3)),6))).toFixed(3)+')');
R('lit',TM.spark);
CR4.forEach((c,i)=>{const on=u>=TM.spark+1+i*.4;c[0].forEach(e=>e.setAttribute('class',on?'gain':'ink'));c[1].setAttribute('opacity',on?.6+.4*Math.abs(Math.sin(t*3+i)):0)});
$('p4').setAttribute('opacity',1-p(u,TM.overlap,TM.overlap+.6));
const vk=p(u,TM.overlap+.3,TM.overlap+1.5);V4.forEach(v=>{v[0].setAttribute('transform','translate('+(v[1]*(1-vk)).toFixed(1)+' '+(v[2]*(1-vk)).toFixed(1)+')');v[0].setAttribute('opacity',vk)});
R('hc4',TM.overlap+1.4);

R('ch5',TM.drugstore);const dk=p(u,TM.drugstore+.3,TM.drugstore+2.3);DR($('mkt'),dk);DR($('wal'),dk);
R('sub5',TM.drugstore+5.4);R('map5',TM.street_corner);ST5.forEach((s,i)=>R(s,TM.street_corner+.6+i*.25,.3));
R('ms0',TM.profit_visit);DR($('st5'),p(u,TM.profit_visit+.8,TM.profit_visit+1.3));R('ms1',TM.profit_visit+1.3);

const s6=SC[6][0]/K;R('wl6',s6+.4);DR($('wa6'),p(u,s6+.6,s6+1.8));
R('ek6',TM.rival_store);DR($('ez6'),p(u,TM.rival_store+.4,TM.rival_store+2.4));
R('nq',TM.calendar);const ct=TM.calendar+3.4;PG.forEach((g,i)=>R(g,ct+i*.5,.4));R('yrs6',ct);
const yn=Math.round(4*p(u,ct,ct+2));$('yn').textContent=yn+(yn===1?' year':' years');

R('pad',TM.notepad);B7.forEach((col,c)=>col.forEach((b,r)=>R(b,TM.three_lists+c*1.6+r*.15,.3)));
VC7.forEach((c,i)=>R(c,TM.three_lists+i*1.6+.8));
const mt=TM.three_lists+5.4;DR($('mark7'),p(u,mt,mt+.8));R('dot7',mt+.6);R('meet',mt+.4);

const s8=SC[8][0]/K;R('l8',s8+.3);R('v8',s8+.6);R('qa',s8+2.6);R('qb',s8+3);R('qc',s8+3.4);
D8.setAttribute('r',(16+5*Math.abs(Math.sin(t*2.5))).toFixed(1));