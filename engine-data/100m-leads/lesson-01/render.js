rise($('shop'),p(u,TM.empty_shop,TM.empty_shop+.6)); rise($('cust0'),p(u,TM.empty_shop+1,TM.empty_shop+1.5));
$('cust0').style.fill=u>=TM.empty_shop+6.2?'var(--loss)':'var(--muted)';
const tf=(t*.12)%1; $('tumble').setAttribute('transform','translate('+(1470-340*tf).toFixed(1)+' 520) rotate('+(-t*90%360).toFixed(1)+')');
$('tumble').setAttribute('opacity',(p(u,TM.empty_shop+1.5,TM.empty_shop+2)*Math.min(1,tf*8,(1-tf)*8)).toFixed(2));

rise($('owner'),p(u,TM.owner,TM.owner+.5)); rise($('prod'),p(u,TM.owner+.3,TM.owner+.8)); rise($('door0'),p(u,TM.owner+.6,TM.owner+1.1));
TL.forEach((g,i)=>rise(g,p(u,TM.toolbox+i*1.2,TM.toolbox+i*1.2+.4)));
SPK.forEach((s,i)=>s.setAttribute('opacity',(p(u,TM.toolbox+4.2,TM.toolbox+4.6)*(.5+.5*Math.sin(t*6+i*1.7))).toFixed(2)));
rise($('rare'),p(u,TM.toolbox+7.9,TM.toolbox+8.5));

rise($('crowd'),p(u,TM.crowd,TM.crowd+.8)); rise($('spot'),p(u,TM.spotlight,TM.spotlight+.6));
CR.forEach((g,i)=>{const on=i%3===0&&u>=TM.spotlight+6.1+i*.05; g.setAttribute('fill',on?'var(--gain)':'var(--muted)'); g.setAttribute('fill-opacity',on?1:.45)});
rise($('fixtxt'),p(u,TM.spotlight+6.1,TM.spotlight+6.7));

rise($('card'),p(u,TM.contact_card,TM.contact_card+.5)); rise($('ph'),p(u,TM.phone,TM.phone+.4)); rise($('em'),p(u,TM.phone+1.6,TM.phone+2));
rise($('board3'),p(u,TM.phone+.8,TM.phone+1.3)); LR.forEach((g,i)=>rise(g,p(u,TM.phone+1.2+i*.25,TM.phone+1.5+i*.25)));
rise($('nobuy'),p(u,TM.phone+6.1,TM.phone+6.6)); rise($('nob2'),p(u,TM.phone+6.3,TM.phone+6.9));

rise($('row'),p(u,TM.hand_raise,TM.hand_raise+.5));
ARM.forEach(a=>rise(a,p(u,TM.hand_raise+.6,TM.hand_raise+1.1)));
const en=u>=TM.hand_raise+3.3; PP.forEach((g,i)=>g.setAttribute('fill',en?(EN.includes(i)?'var(--gain)':'var(--muted)'):'var(--ink)'));
rise($('englab'),p(u,TM.hand_raise+3.3,TM.hand_raise+3.8));
BB.forEach((g,k)=>rise(g,p(u,TM.reply_bubble+k*1.2,TM.reply_bubble+k*1.2+.4)));
rise($('eng2'),p(u,TM.reply_bubble+5,TM.reply_bubble+5.6));

const f0=p(u,TM.funnel,TM.funnel+.6), f1=p(u,TM.more_drops,TM.more_drops+.6);
rise(FN[0],f0); rise(FN[1],f1);
OUT[0].dataset.on=u>=TM.drops?'1':'0'; OUT[1].dataset.on=u>=TM.more_drops+.6?'1':'0';
flow(0,f0,t); flow(1,f1,t);
TR[0].forEach((d,j)=>d.setAttribute('opacity',p(u,TM.drops+.8+j*1.2,TM.drops+1.1+j*1.2)));
TR[1].forEach((d,j)=>d.setAttribute('opacity',p(u,TM.more_drops+.8+j*.7,TM.more_drops+1.1+j*.7)));
rise($('mir'),p(u,TM.more_drops+5.8,TM.more_drops+6.4));

rise($('cust'),p(u,TM.coins,TM.coins+.5)); rise($('mon'),p(u,TM.coins+.5,TM.coins+1));
CO.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.coins+.8+i*.2,TM.coins+1+i*.2)));
rise($('todo'),p(u,TM.checklist-.4,TM.checklist));
const mv=p(u,TM.checklist+1.5,TM.checklist+2.5);
CK.forEach((g,i)=>{const a=i,b=i==3?0:i+1;g.setAttribute('transform','translate(0 '+(330+(a+(b-a)*mv)*100).toFixed(1)+')');g.setAttribute('opacity',p(u,TM.checklist+i*.25,TM.checklist+i*.25+.4))});
tick.setAttribute('opacity',p(u,TM.checklist+3,TM.checklist+3.4));
rise($('lead1'),p(u,TM.checklist+6.6,TM.checklist+7.2));

rise($('note'),p(u,TM.tally,TM.tally+.5));
TY.forEach((m,i)=>m.setAttribute('opacity',p(u,TM.tally+.6+i*.18,TM.tally+.75+i*.18)));
rise($('pin'),p(u,TM.tally+4.6,TM.tally+5.1)); rise($('chart'),p(u,TM.tally+5.4,TM.tally+5.9));
BR.forEach((r,i)=>{const k=i?p(u,TM.arrow_up+i*.3,TM.arrow_up+i*.3+.5):p(u,TM.tally+5.8,TM.tally+6.3);r.setAttribute('height',(BH[i]*k).toFixed(1));r.setAttribute('y',(650-BH[i]*k).toFixed(1))});
const ak=p(u,TM.arrow_up+.6,TM.arrow_up+1.8); $('arw').setAttribute('stroke-dashoffset',(1-ak).toFixed(3)); $('arw').setAttribute('opacity',ak>0?1:0);
$('arwh').setAttribute('opacity',p(u,TM.arrow_up+1.7,TM.arrow_up+1.9)); rise($('job'),p(u,TM.arrow_up+1,TM.arrow_up+1.6));

rise($('ql'),p(u,TM.question,TM.question+.5));
rise($('qa'),p(u,TM.question+2.2,TM.question+2.7)); rise($('qb'),p(u,TM.question+2.6,TM.question+3.1)); rise($('qc'),p(u,TM.question+3,TM.question+3.5));
HD.forEach((g,i)=>rise(g,p(u,TM.question+3.6+(i>1?.8:0),TM.question+4.1+(i>1?.8:0))));
rise($('x2'),p(u,TM.question+4.4,TM.question+4.9));