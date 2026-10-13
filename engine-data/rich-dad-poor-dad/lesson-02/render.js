const k0=p(u,TM.two_columns,TM.two_columns+.5);rise($('wal'),k0);rise($('lblio'),p(u,TM.two_columns+.5,TM.two_columns+1));
const a0=cyc(t,0,2.4),a1=cyc(t,1.2,2.4);
$('cin').setAttribute('cy',(180+170*ease(a0)).toFixed(1));$('cin').setAttribute('opacity',k0);
$('cout').setAttribute('cy',(420+180*ease(a1)).toFixed(1));$('cout').setAttribute('opacity',(k0*(1-a1)).toFixed(2));

rise($('dad'),p(u,TM.rich_dad,TM.rich_dad+.5));rise($('cardIn'),p(u,TM.coin_in,TM.coin_in+.5));rise($('cardOut'),p(u,TM.coin_out,TM.coin_out+.5));
const b0=cyc(t,0,2),b1=cyc(t,.6,2);
// coin in: fades in well inside the card, drops into the pocket
$('coinA').setAttribute('cy',(290+150*ease(b0)).toFixed(1));$('coinA').setAttribute('opacity',cl(b0/.15).toFixed(2));
// coin out: rises from the pocket and is fully gone before it nears the border (stops at y=290)
$('coinB').setAttribute('cy',(440-150*ease(b1)).toFixed(1));$('coinB').setAttribute('opacity',(1-cl((b1-.5)/.35)).toFixed(2));
rise($('nojar'),p(u,TM.coin_out+3.4,TM.coin_out+3.9));

rise($('pad'),p(u,TM.sketch_pad,TM.sketch_pad+.5));rise($('incB'),p(u,TM.income_box,TM.income_box+.5));rise($('expB'),p(u,TM.expense_box,TM.expense_box+.5));
$('leak').setAttribute('stroke-dashoffset',(-t*40%26).toFixed(1));
rise($('more'),p(u,TM.expense_box+4.2,TM.expense_box+4.7));rise($('flowT'),p(u,TM.expense_box+4.8,TM.expense_box+5.4));

rise($('pay'),p(u,TM.paycheck,TM.paycheck+.5));$('flow').setAttribute('opacity',p(u,TM.paycheck+.8,TM.paycheck+1.3));
BN.forEach((g,i)=>rise(g,p(u,TM.paycheck+1.5+i*.8,TM.paycheck+2+i*.8)));
PC.forEach((c,i)=>{const q=cyc(t,i*.7,2.1);let x,y;if(q<.5){x=400+1000*q;y=330}else{const s=(q-.5)*2;x=900+140*s;y=330+(BY[i]-330)*s}c.setAttribute('cx',x.toFixed(1));c.setAttribute('cy',y.toFixed(1))});
rise($('jarG'),p(u,TM.paycheck+6.1,TM.paycheck+6.6));rise($('emp'),p(u,TM.empty_jar,TM.empty_jar+.5));

rise($('couple'),p(u,TM.young_couple,TM.young_couple+.5));rise($('raise'),p(u,TM.young_couple+2.5,TM.young_couple+3));
const dg=p(u,TM.debt_chain,TM.debt_chain+4);
$('cpl').setAttribute('transform','translate(0 '+(-Math.abs(Math.sin(t*(2+6*dg)))*8).toFixed(1)+')');
[0,1,2].forEach(i=>rise($('it'+i),p(u,TM.big_house+i*1.6,TM.big_house+i*1.6+.5)));
rise($('loans'),p(u,TM.debt_chain,TM.debt_chain+.5));LN.forEach((r,i)=>r.setAttribute('height',(40+120*cl(dg*1.2-i*.1)).toFixed(1)));
rise($('hard'),p(u,TM.debt_chain+1,TM.debt_chain+1.5));rise($('trap'),p(u,TM.debt_chain+5.4,TM.debt_chain+6));

rise($('home'),p(u,TM.house_bills,TM.house_bills+.5));
BL.forEach((g,i)=>rise(g,p(u,TM.tax_bill+i,TM.tax_bill+i+.5)));BA.forEach(a=>a.setAttribute('stroke-dashoffset',(t*30%22).toFixed(1)));
rise($('month'),p(u,TM.tax_bill+4,TM.tax_bill+4.6));rise($('chart'),p(u,TM.tax_bill+5.4,TM.tax_bill+6));

const s6=SC[6][0]/K;rise($('hd6'),p(u,s6+.3,s6+.9));rise($('inc'),p(u,s6+1,s6+1.5));
rise($('flat'),p(u,TM.rental_flat,TM.rental_flat+.5));rise($('biz'),p(u,TM.small_biz,TM.small_biz+.5));rise($('paper'),p(u,TM.small_biz+2,TM.small_biz+2.5));
rise($('inw'),p(u,TM.arrow_up,TM.arrow_up+.5));
RC.forEach((c,i)=>{const q=cyc(t,i*.4,1.5),s=SG[i];c.setAttribute('cx',(s[0]+(s[2]-s[0])*q).toFixed(1));c.setAttribute('cy',(s[1]+(s[3]-s[1])*q).toFixed(1));c.setAttribute('opacity',(1-q*q).toFixed(2))});

rise($('car'),p(u,TM.sports_car,TM.sports_car+.5));rise($('pile'),p(u,TM.asset_pile,TM.asset_pile+.4));
PB.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.asset_pile+i*.2,TM.asset_pile+i*.2+.3)));
const ka=p(u,TM.asset_pile+1.4,TM.asset_pile+1.9);
LC.forEach((c,i)=>{const q=cyc(t,i*.8,2.4),m=1-q;c.setAttribute('cx',(m*m*375+2*m*q*780+q*q*1180).toFixed(1));c.setAttribute('cy',(m*m*410+2*m*q*200+q*q*400).toFixed(1));c.setAttribute('opacity',(ka*(1-q*q)).toFixed(2))});
rise($('rev'),p(u,TM.asset_pile+4.9,TM.asset_pile+5.5));

rise($('qa'),p(u,TM.your_list,TM.your_list+.5));rise($('qb'),p(u,TM.your_list+.4,TM.your_list+.9));rise($('qc'),p(u,TM.your_list+.8,TM.your_list+1.3));
CK.forEach((g,i)=>rise(g,p(u,TM.your_list+1.5+i*.4,TM.your_list+1.9+i*.4)));
rise($('qd'),p(u,TM.your_list+5.7,TM.your_list+6.2));