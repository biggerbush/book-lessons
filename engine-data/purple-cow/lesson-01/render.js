rise($('t0p'),p(u,TM.title_cow,TM.title_cow+.7));
$('t0x').setAttribute('opacity',u>TM.title_cow+1?(.6+.4*Math.sin(t*5)).toFixed(2):0);

const cx=120+180*p(u,TM.car,TM.car+2.5);
$('car').setAttribute('transform','translate('+cx.toFixed(1)+' '+(690+2*Math.sin(t*12)).toFixed(1)+')');
$('car').setAttribute('opacity',p(u,TM.car,TM.car+.5));
C1.forEach((c,i)=>{const a=TM.cows+i*.3;rise(c,p(u,a,a+.5))});
rise($('hearts'),p(u,TM.cows+4.6,TM.cows+5.1)); rise($('pb'),p(u,TM.cows+6.8,TM.cows+7.3));

rise($('clk'),p(u,TM.clock,TM.clock+.5));
const ck=p(u,TM.clock+.3,TM.clock+2.8),ca=ck*2*Math.PI/3,sx=Math.sin(ca),sy=Math.cos(ca);
$('wedge').setAttribute('d','M300 460L300 320A140 140 0 0 1 '+(300+140*sx).toFixed(1)+' '+(460-140*sy).toFixed(1)+'Z');
$('hand').setAttribute('x2',(300+110*sx).toFixed(1)); $('hand').setAttribute('y2',(460-110*sy).toFixed(1));
rise($('nob'),p(u,TM.clock+3.8,TM.clock+4.3));
const fd=p(u,TM.cow_copies+3.8,TM.cow_copies+5);
G2.forEach((c,i)=>{const a=TM.cow_copies+i*.2;rise(c,p(u,a,a+.4)*(1-.6*fd))});
rise($('bor'),p(u,TM.cow_copies+3.8,TM.cow_copies+4.4));

rise(P3,p(u,TM.purple_cow,TM.purple_cow+.6));
$('rays').setAttribute('opacity',(p(u,TM.purple_cow+.6,TM.purple_cow+1.1)*(.6+.4*Math.sin(t*4))).toFixed(2));
rise($('faces'),p(u,TM.faces_glass,TM.faces_glass+.5));
rise($('phone'),p(u,TM.phone_photo,TM.phone_photo+.5));
const fl=p(u,TM.phone_photo+.6,TM.phone_photo+1.4);
$('flash').setAttribute('r',(60+60*fl).toFixed(1)); $('flash').setAttribute('opacity',(fl>0&&fl<1?1-fl:0).toFixed(2));
rise($('frnd'),p(u,TM.phone_photo+2,TM.phone_photo+2.5));

rise($('flt'),p(u,TM.filter,TM.filter+.5));
const dv=p(u,TM.filter,TM.filter+.5);
D4.forEach((d,i)=>{const q=((t*.3+i/6)%1);d.setAttribute('cx',(1460-q*830).toFixed(1));d.setAttribute('opacity',(dv*(q>.9?(1-q)*10:1)).toFixed(2))});
const gone=1-.85*p(u,TM.cow_row+1.8,TM.cow_row+3.5);
R4.forEach((c,i)=>{const a=TM.cow_row+i*.25;rise(c,p(u,a,a+.4)*gone)});
rise($('inv'),p(u,TM.cow_row+4.2,TM.cow_row+4.8));

rise($('shelfb'),p(u,TM.shelf,TM.shelf+.5));
BX.forEach((b,i)=>{const a=TM.shelf+.3+i*.06;rise(b,p(u,a,a+.4))});
CK.forEach((c,i)=>{const a=TM.fine_box+i*.05;c.setAttribute('opacity',p(u,a,a+.3))});
const gx=160+1280*p(u,TM.fine_box+2.1,TM.fine_box+5);
$('eye2').setAttribute('transform','translate('+gx.toFixed(1)+' 790)'); $('eye2').setAttribute('opacity',u>=TM.fine_box+2.1?1:0);
$('trail').setAttribute('d','M160 790H'+gx.toFixed(1));
rise($('slide'),p(u,TM.fine_box+2.4,TM.fine_box+2.9));

rise($('mega'),p(u,TM.spotlight,TM.spotlight+.5));
const xk=p(u,TM.spotlight+1.6,TM.spotlight+2.1);
$('xm').setAttribute('x2',(150+290*xk).toFixed(1)); $('xm').setAttribute('y2',(240+260*xk).toFixed(1));
rise($('p6'),p(u,TM.spotlight+3.7,TM.spotlight+4.2));
$('beam').setAttribute('opacity',p(u,TM.contrast,TM.contrast+.6));
G6.forEach(c=>c.setAttribute('opacity',(1-.6*p(u,TM.contrast,TM.contrast+.8)).toFixed(2)));
rise($('st1'),p(u,TM.contrast+4.6,TM.contrast+5.1)); rise($('st2'),p(u,TM.contrast+6,TM.contrast+6.5));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); rise($('pick'),p(u,TM.notebook+2,TM.notebook+2.5));
CD.forEach((c,i)=>{const a=TM.stranger+i*.1;rise(c,p(u,a,a+.4))});
rise($('str'),p(u,TM.stranger+1,TM.stranger+1.5));
YR.setAttribute('stroke',u>=TM.stranger+4.6&&Math.sin(t*3)<0?'var(--ink)':'var(--gain)');
rise($('wq'),p(u,TM.stranger+4.6,TM.stranger+5.1));

rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.4,TM.question+.9)); rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('ql'),p(u,TM.question+1.4,TM.question+1.9)); rise($('row8'),p(u,TM.question+1.6,TM.question+2.1));
RG.setAttribute('r',(34+6*Math.sin(t*3)).toFixed(1));