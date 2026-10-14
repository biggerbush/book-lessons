const wk=p(u,TM.empty_wallet,TM.empty_wallet+.5);rise($('wal'),wk);
BL.forEach((b,i)=>{const k=(t*.35+i/3)%1;b.setAttribute('transform','translate('+(1240+i*70+40*Math.sin(k*6+i)).toFixed(1)+' '+(360-210*k).toFixed(1)+')');b.setAttribute('opacity',(wk*Math.sin(k*Math.PI)).toFixed(2))});
rise($('wq'),p(u,TM.empty_wallet+5.8,TM.empty_wallet+6.3));

rise($('walker'),p(u,TM.sleepwalker,TM.sleepwalker+.5));rise($('zz'),p(u,TM.sleepwalker+.4,TM.sleepwalker+.9)*(.55+.45*Math.sin(t*2)));
$('belt').style.strokeDashoffset=(t*110).toFixed(1);
const ic=p(u,TM.coffee_cup,TM.coffee_cup+.5);
IT.forEach((g,i)=>{const x=1450-((t*110+i*230)%920);g.setAttribute('transform','translate('+x.toFixed(1)+' 610)');g.setAttribute('opacity',(ic*cl((x-560)/80)*cl((1450-x)/60)).toFixed(2))});
rise($('bf'),p(u,TM.blindfold,TM.blindfold+.5));rise($('stkl'),p(u,TM.blindfold+.3,TM.blindfold+.8));
const ns=30*p(u,TM.blindfold+.3,TM.blindfold+4);SK.forEach((s,i)=>s.setAttribute('opacity',cl(ns-i)));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
const sel=TM.pen+4.2;let px=240,py=328;
WL.forEach((w,i)=>{const a=i<6?TM.pen+.4+i*.55:sel+.8+(i-6)*.6,k=cl(lin(u,a,a+.5));w[0].setAttribute('x2',(w[1]+w[3]*k).toFixed(1));if(w[4])w[4].setAttribute('opacity',k>0?1:0);if(k>0){px=w[1]+w[3]*k;py=w[2]-12}});
rise($('penw'),p(u,TM.pen,TM.pen+.4));$('pen').setAttribute('transform','translate('+px.toFixed(1)+' '+py+')');
rise($('areas'),p(u,sel,sel+.5));const on=u>=sel+.6;
AR[0][1].setAttribute('fill',on?'var(--gain)':'var(--stage)');AR[0][1].setAttribute('stroke',on?'var(--gain)':'var(--ink)');AR[0][2].style.fill=on?'var(--on-gain)':'';
rise($('rec'),p(u,sel+.8,sel+1.3));

rise($('bill'),p(u,TM.dollar_bill,TM.dollar_bill+.5));
$('rc').setAttribute('d',rcpt(100+520*p(u,TM.receipt-.3,TM.receipt+4.2)));rise($('rcw'),p(u,TM.receipt-.3,TM.receipt+.2));
RI.forEach((g,i)=>{const a=TM.receipt+(i<3?i*1.3:3.6+(i-3)*.3);rise(g,p(u,a,a+.4))});
rise($('tall'),p(u,TM.tally_marks,TM.tally_marks+.5));
const tn=40*cl(lin(u,TM.tally_marks+.3,TM.tally_marks+4));TL.forEach((s,i)=>s.setAttribute('opacity',cl(tn-i)));
const ta=TM.tally_marks+4.5;rise($('tot'),p(u,ta,ta+.5));$('totb').setAttribute('width',(500*p(u,ta+.3,ta+1.8)).toFixed(1));rise($('shk'),p(u,ta+1.6,ta+2.1));

rise($('ap'),p(u,TM.apple,TM.apple+.5));rise($('logw'),p(u,TM.apple+.4,TM.apple+.9));rise($('chp'),p(u,TM.cookie,TM.cookie+.5));
FL.forEach((g,i)=>{const a=i===0?TM.apple+1:i===1?TM.cookie+.6:TM.food_list+(i-2)*.3;rise(g,p(u,a,a+.4))});
const sa=TM.food_list+3;rise($('scl'),p(u,sa,sa+.5)*(1-.5*p(u,sa+1.2,sa+2)));rise($('lsm'),p(u,sa+1.2,sa+1.7));

const aw=TM.mirror+4.1;rise($('mir'),p(u,TM.mirror,TM.mirror+.5));
rise($('refl'),p(u,TM.mirror+.4,TM.mirror+.9)*(.3+.7*p(u,aw,aw+1)));rise($('aw'),p(u,aw,aw+.5));
rise($('bulb'),p(u,aw+.6,aw+1.1));rise($('tog'),p(u,aw+.6,aw+1.1));
const lit=p(u,TM.lightbulb,TM.lightbulb+.4);$('bulbc').setAttribute('fill',lit>.5?'var(--gain)':'var(--stage)');$('rays').setAttribute('opacity',(lit*(.7+.3*Math.sin(t*4))).toFixed(2));
const sw=p(u,TM.lightbulb+.3,TM.lightbulb+1);$('knob').setAttribute('cx',(1005+190*sw).toFixed(1));$('knob').setAttribute('fill',sw>.5?'var(--gain)':'var(--muted)');$('chl').style.fill=sw>.5?'var(--gain)':'';

DG.forEach((g,i)=>rise(g,p(u,TM.calendar+i*.4,TM.calendar+i*.4+.4)));rise($('rowl'),p(u,TM.calendar,TM.calendar+.5));
const mg=p(u,TM.magnifier,TM.magnifier+2.2);$('mag').setAttribute('transform','translate('+(380+420*mg).toFixed(1)+' 475)');$('mag').setAttribute('opacity',p(u,TM.magnifier-.3,TM.magnifier+.2));
const sn=TM.arrow_path+5.4,sc=u>=sn?'var(--gain)':'var(--loss)';
rise($('hA'),p(u,TM.magnifier+1,TM.magnifier+1.5));rise($('hW'),p(u,TM.magnifier+2.6,TM.magnifier+3.1));$('hA').setAttribute('stroke',sc);$('hW').setAttribute('stroke',sc);
const ak=p(u,TM.arrow_path,TM.arrow_path+2);$('arw').style.strokeDashoffset=(1-ak).toFixed(3);$('arh').setAttribute('opacity',cl((ak-.95)*20));
rise($('arl'),p(u,TM.arrow_path,TM.arrow_path+.5));$('arwg').setAttribute('opacity',(1-.6*p(u,sn,sn+1)).toFixed(2));rise($('seen'),p(u,sn,sn+.5));

rise($('stw'),p(u,TM.stopwatch,TM.stopwatch+.5));rise($('msr'),p(u,TM.stopwatch+1,TM.stopwatch+1.5));
$('hand').setAttribute('transform','rotate('+(u>=TM.stopwatch?(t*120)%360:0).toFixed(1)+' 300 450)');
rise($('sb'),p(u,TM.scoreboard,TM.scoreboard+.5));
const ck=p(u,TM.checkmark,TM.checkmark+.6);$('sbq').setAttribute('opacity',((1-ck)*(.6+.4*Math.sin(t*3))).toFixed(2));
$('b0').setAttribute('width',(420*p(u,TM.checkmark,TM.checkmark+1.2)).toFixed(1));$('b1').setAttribute('width',(500*p(u,TM.checkmark+.2,TM.checkmark+1.4)).toFixed(1));
rise($('cor'),p(u,TM.checkmark+.4,TM.checkmark+.9));
const wq=p(u,TM.checkmark+.6,TM.checkmark+3.2);let pts='';for(let i=0;i<=60;i++){const f=wq*i/60;pts+=(540+820*f).toFixed(1)+','+(730+70*Math.exp(-3*f)*Math.sin(f*18)).toFixed(1)+' '}$('wig').setAttribute('points',pts);
rise($('ck'),p(u,TM.checkmark+3,TM.checkmark+3.5));

rise($('pb'),p(u,TM.pocket_book,TM.pocket_book+.5));rise($('chal'),p(u,TM.pocket_book+.3,TM.pocket_book+.8));
PB.forEach((b,i)=>b.setAttribute('fill',u>=TM.pocket_book+1+i*.5?'var(--gain)':'var(--stage)'));
const qq=TM.pocket_book+5.4;rise($('qa'),p(u,qq,qq+.5));rise($('qb'),p(u,qq+.4,qq+.9));rise($('qc'),p(u,qq+.8,qq+1.3));