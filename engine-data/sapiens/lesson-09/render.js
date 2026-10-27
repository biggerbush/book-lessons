const bv=TM.bank_vault; rise($('vault'),p(u,bv,bv+.6));
NT.forEach((g,i)=>{const k=p(u,bv+1.2+i*.6,bv+2+i*.6);g.setAttribute('transform',`translate(${(1300+(1190+i*110-1300)*k).toFixed(1)} ${(390+268*k).toFixed(1)}) scale(${(.5+.5*k).toFixed(3)})`);g.setAttribute('opacity',cl(k*4))});
rise($('lent'),p(u,bv+3,bv+3.5)); rise($('faith'),p(u,TM.old_village-4.4,TM.old_village-3.9));

rise($('pieA'),p(u,TM.old_village,TM.old_village+.6));
const pg=p(u,TM.pie_slice,TM.pie_slice+1.2); let a0=0;
P1.forEach((s,i)=>{const w=(i==0?60+40*pg:i==1?60-40*pg:60)*D;s.setAttribute('d',sl(200,a0,a0+w));a0+=w});
rise($('pl'),p(u,TM.pie_slice+.6,TM.pie_slice+1.2));
rise($('lend'),p(u,TM.money_lender,TM.money_lender+.5));
[0,1,2,3].forEach(i=>{const a=TM.money_lender+.6+i*.6;rise($('lr'+i),p(u,a,a+.5))});

rise($('field'),p(u,TM.empty_field,TM.empty_field+.5)); rise(C2.N[0].n,p(u,TM.empty_field+.6,TM.empty_field+1.1));
rise(C2.ring,p(u,TM.stuck_cycle,TM.stuck_cycle+.5));
C2.N.forEach((o,i)=>{if(i){const a=TM.stuck_cycle+.6+(i-1)*1.2;rise(o.n,p(u,a,a+.5))}});
orb(C2.dot,1060,500,200,t*1.4); C2.dot.setAttribute('opacity',p(u,TM.stuck_cycle+4,TM.stuck_cycle+4.5));
rise($('dist'),p(u,SC[3][0]/K-3.6,SC[3][0]/K-3));

const s3=SC[3][0]/K; rise($('bank3'),p(u,s3+.5,s3+1.1));
rise($('con3'),p(u,TM.contractor,TM.contractor+.5)); rise($('dep3'),p(u,TM.contractor+1.6,TM.contractor+2.1));
rise($('jane3'),p(u,TM.baker_jane,TM.baker_jane+.5)); rise($('bor3'),p(u,TM.baker_jane+1.6,TM.baker_jane+2.1));
const b3=390+410*p(u,TM.contractor+.6,TM.contractor+1.8)+380*p(u,TM.baker_jane+.6,TM.baker_jane+1.8);
$('bag3').setAttribute('transform',`translate(${b3.toFixed(1)} 470)`); $('bag3').setAttribute('opacity',u>=TM.contractor+.3?1:0);

const bs=TM.building_site; rise($('loop4'),p(u,bs-.4,bs+.2));
BR.forEach((b,i)=>b.setAttribute('opacity',p(u,bs+.5+i*.3,bs+.8+i*.3)));
const cp=lp(1+2*p(u,bs+.5,bs+3.5)+3*p(u,TM.second_loan+.3,TM.second_loan+4.5));
$('coin4').setAttribute('cx',cp[0].toFixed(1)); $('coin4').setAttribute('cy',cp[1].toFixed(1)); $('coin4').setAttribute('opacity',u>=bs+.5?1:0);
[bs-.2,bs+3.3,TM.second_loan+4.3].forEach((a,i)=>rise(SG[i],p(u,a,a+.5)));
rise($('bkv'),p(u,TM.ledger,TM.ledger+.5)); $('bk4').textContent='$'+Math.round(1+2*p(u,TM.ledger,TM.ledger+1.2))+'M';
rise($('vault4'),p(u,TM.ledger+1,TM.ledger+1.5));

rise($('bakery'),p(u,TM.bakery_open,TM.bakery_open+.6)); rise($('repay'),p(u,TM.bakery_open+2,TM.bakery_open+2.5));
rise($('pies'),p(u,TM.growing_pie,TM.growing_pie+.6));
$('pm').setAttribute('transform',`translate(1240 500) scale(${(1.1+.9*p(u,TM.growing_pie+1,TM.growing_pie+3)).toFixed(3)})`);
rise($('slices'),p(u,SC[6][0]/K-4.2,SC[6][0]/K-3.6));

const s6=SC[6][0]/K; rise($('smith'),p(u,TM.adam_smith,TM.adam_smith+.5));
rise($('profit'),p(u,TM.adam_smith+1.5,TM.adam_smith+2)); rise($('plough'),p(u,TM.adam_smith+2.5,TM.adam_smith+3.1));
OV.forEach((o,i)=>{const a=i?TM.new_oven+(i-1)*1.6:s6+.5;rise(o[0],p(u,a,a+.5));o[1].setAttribute('opacity',(.7+.3*Math.sin(t*5+i)).toFixed(2))});
WK.forEach((g,i)=>{const a=i?TM.new_oven+.6+i*.5:s6+.7;rise(g,p(u,a,a+.4))});
LF.forEach((e,i)=>{const a=i<2?s6+.9:TM.new_oven+2.4+i*.4;rise(e,p(u,a,a+.4))});
rise($('more6'),p(u,TM.new_oven,TM.new_oven+.5)); rise($('heart6'),p(u,SC[7][0]/K-3.6,SC[7][0]/K-3));

[0,1,2].forEach(i=>{const a=TM.ships+i*1.2;rise($('ic'+i),p(u,a,a+.5))});
rise(C7.ring,p(u,TM.growth_loop,TM.growth_loop+.5));
const cr=u>=TM.cracks+.6;
C7.N.forEach((o,i)=>{const a=TM.growth_loop+i*1.2;rise(o.n,p(u,a,a+.5));o.b.setAttribute('stroke',cr?'var(--loss)':'var(--ink)')});
C7.N[3].tx.style.fill=u>=TM.cracks?'var(--loss)':'var(--ink)';
orb(C7.dot,1040,500,210,t*1.6); C7.dot.setAttribute('opacity',(p(u,TM.growth_loop+4.5,TM.growth_loop+5)*(1-p(u,TM.cracks,TM.cracks+1))).toFixed(3));
const ck=p(u,TM.cracks+.3,TM.cracks+1.3); $('crack').setAttribute('stroke-dashoffset',(1-ck).toFixed(3)); $('crack').setAttribute('opacity',ck>0?1:0);
rise($('coll'),p(u,TM.cracks+1,TM.cracks+1.6));

const sd=TM.seedling, st=p(u,sd,sd+1.5); $('stem').setAttribute('stroke-dashoffset',(1-st).toFixed(3)); $('stem').setAttribute('opacity',st>0?1:0);
rise($('lv0'),p(u,sd+1,sd+1.4)); rise($('lv1'),p(u,sd+1.4,sd+1.8)); rise($('prompt'),p(u,sd+.3,sd+.8));
TG.forEach((g,i)=>{const a=sd+1.8+i*.6;rise(g,p(u,a,a+.4))});
rise($('qa'),p(u,sd+7.8,sd+8.3)); rise($('qb'),p(u,sd+8.2,sd+8.7));