mv($('lid'),0,-30*p(t,.3,1.2)-12*Math.abs(Math.sin(t*2)));
SPK.forEach((s,i)=>s.setAttribute('opacity',(.5+.5*Math.sin(t*3+i*1.6)).toFixed(2)));
rise($('ftag'),p(u,TM.hook_gift+.6,TM.hook_gift+1.1));

rise($('mag'),p(u,TM.magnet,TM.magnet+.5)); rise($('ppl'),p(u,TM.magnet+.3,TM.magnet+.8));
PP.forEach((g,i)=>mv(g,-140*p(u,TM.magnet+.8+i*.2,TM.magnet+3+i*.2),0));
rise($('bxa'),p(u,TM.narrow_box,TM.narrow_box+.5));
const fa=p(u,TM.narrow_box+.6,TM.narrow_box+2); $('afill').setAttribute('y',(540-200*fa).toFixed(1)); $('afill').setAttribute('height',(200*fa).toFixed(1));
$('asol').setAttribute('opacity',p(u,TM.narrow_box+2,TM.narrow_box+2.4));
rise($('bxb'),p(u,TM.narrow_box+6.2,TM.narrow_box+6.7)); rise($('proof'),p(u,TM.narrow_box+9.2,TM.narrow_box+9.8));

rise($('sd'),p(u,TM.two_doors,TM.two_doors+.5));
const op=p(u,TM.two_doors+2.2,TM.two_doors+3.2); $('sdp').setAttribute('width',(160-130*op).toFixed(1));
$('sdl').textContent=op>.5?'SOLVED':'SMALL PROBLEM'; $('sdl').style.fill=op>.5?'var(--gain)':'';
rise($('bd'),p(u,TM.two_doors+2.6,TM.two_doors+3.2));
rise($('key'),p(u,TM.paid_offer,TM.paid_offer+.5)); mv($('keyi'),60*(1-p(u,TM.paid_offer,TM.paid_offer+1.2)),0);
const fx=u>=TM.paid_offer+1.3; $('bdr').setAttribute('fill',fx?'var(--gain)':'var(--loss)'); $('bdr').setAttribute('stroke',fx?'var(--gain)':'var(--loss)');
$('bdl').textContent=fx?'FIXED BY YOUR OFFER':'BIGGER PROBLEM';

rise($('g1'),p(u,TM.gym_owner,TM.gym_owner+.5));
rise($('a0'),p(u,TM.happy_client-.3,TM.happy_client+.2)); rise($('g2'),p(u,TM.happy_client,TM.happy_client+.5));
CHK.forEach((c,i)=>c.setAttribute('fill',u>=TM.happy_client+.4+i*.3?'var(--gain)':'var(--stage)'));
rise($('a1'),p(u,TM.workout_q-.3,TM.workout_q+.2)); rise($('ql'),p(u,TM.workout_q,TM.workout_q+.5));
QB.forEach((g,i)=>rise(g,p(u,TM.workout_q+i*.6,TM.workout_q+i*.6+.4)));
rise($('a2'),p(u,TM.workout_q+4.3,TM.workout_q+4.7)); rise($('g4'),p(u,TM.workout_q+4.6,TM.workout_q+5.1));

KF.forEach((f,i)=>rise(f,p(u,TM.reveal_icon+i*.3,TM.reveal_icon+i*.3+.5)));
[TM.reveal_icon+3.7,TM.sample_icon,TM.stairs].forEach((a,i)=>rise(KC[i],p(u,a,a+.5)));

FC.forEach((g,i)=>rise(g,p(u,TM.phone_screen+i*.4,TM.phone_screen+i*.4+.4)));
rise($('trk'),p(u,TM.phone_screen+3.6,TM.phone_screen+4.1));
const hh=80*(1-.75*p(u,TM.phone_screen+5.4,TM.phone_screen+7)); HU.forEach(h=>{h.setAttribute('y',(520-hh).toFixed(1));h.setAttribute('height',hh.toFixed(1))});
const rx=640+780*((t*.22)%1), dd=Math.min(...HX.map(x=>Math.abs(rx-x)));
$('run').setAttribute('cx',rx.toFixed(1)); $('run').setAttribute('cy',(500-(hh+10)*Math.max(0,1-dd/60)).toFixed(1));
rise($('fin'),p(u,TM.phone_screen+8.8,TM.phone_screen+9.3));
FD.forEach((c,i)=>c.setAttribute('fill',(i<3||u>=TM.phone_screen+9.6+i*.15)?'var(--gain)':'var(--line)'));
rise($('ban'),p(u,TM.headline,TM.headline+.6));

rise($('lock'),p(u,TM.secret_key,TM.secret_key+.5)); rise($('fear'),p(u,TM.secret_key+.4,TM.secret_key+.9));
const ok=p(u,TM.secret_key+3,TM.secret_key+3.6), lc=ok>.5?'var(--gain)':'var(--loss)';
mv($('shk'),0,-40*ok); $('shk').setAttribute('stroke',lc); $('lockb').setAttribute('fill',lc);
rise($('quote'),p(u,TM.secret_key+3,TM.secret_key+3.6)); rise($('ptag'),p(u,TM.price_tag,TM.price_tag+.5));
rise($('trust'),p(u,TM.price_tag+4.9,TM.price_tag+5.4)); $('trf').setAttribute('width',(1360*p(u,TM.price_tag+5.2,TM.price_tag+7)).toFixed(1));

rise($('sign'),p(u,TM.arrow_sign,TM.arrow_sign+.5)); mv($('signi'),8*Math.sin(t*3),0);
rise($('dsh'),p(u,TM.arrow_sign+4.6,TM.arrow_sign+5.1));
OP.forEach((g,i)=>rise(g,p(u,TM.calendar+i*.8,TM.calendar+i*.8+.4)));
rise($('btn'),p(u,TM.calendar+4.2,TM.calendar+4.7)); mv($('cur'),1080,615+6*Math.abs(Math.sin(t*2.5)));

rise($('qa'),p(u,TM.thought_cloud,TM.thought_cloud+.5)); rise($('qb'),p(u,TM.thought_cloud+.4,TM.thought_cloud+.9)); rise($('qc'),p(u,TM.thought_cloud+.8,TM.thought_cloud+1.3));
rise($('cloud'),p(u,TM.thought_cloud+1.5,TM.thought_cloud+2));
rise($('w1'),p(u,TM.thought_cloud+4.6,TM.thought_cloud+5.1)); rise($('w2'),p(u,TM.thought_cloud+5.1,TM.thought_cloud+5.6));