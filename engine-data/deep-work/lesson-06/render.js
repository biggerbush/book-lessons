const fl=TM.inbox_flood, lv=.15+.75*p(t,fl,fl+1.5)-.6*p(t,fl+2.5,fl+5), wt=696-436*lv;
$('w0').setAttribute('y',wt.toFixed(1)); $('w0').setAttribute('height',(436*lv).toFixed(1));
FL.forEach((e,i)=>{tr(e,1220+i*45,wt+26+(i%2)*34+4*Math.sin(t*2+i)); op(e,(lv-.25-i*.08)*8)});
const dr=(t*1.5)%1; $('drop').setAttribute('cy',(745+dr*60).toFixed(1)); op($('drop'),p(t,fl+2.5,fl+3)*(1-dr));

rise($('pond1'),p(u,TM.pond,TM.pond+.6));
const ei=TM.email_icons, cr=p(u,ei+3.8,ei+6.5), rl=p(u,ei+8.8,ei+10.3), dk=1-.75*cr+.75*rl, fr=1-.55*cr+.55*rl;
$('deep').setAttribute('rx',(300*dk).toFixed(1)); $('deep').setAttribute('ry',(140*dk).toFixed(1)); op($('dl'),(dk-.5)*4);
IC.forEach((e,i)=>{const a=i*Math.PI/6+.2; tr(e,800+430*fr*Math.cos(a),510+185*fr*Math.sin(a)); op(e,p(u,ei+i*.2,ei+i*.2+.4)*(1-(i%2)*.8*rl))});
rise($('rule'),p(u,ei+8.8,ei+9.4));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
HR.forEach((g,r)=>rise(g,p(u,TM.notebook+.6+r*.2,TM.notebook+1+r*.2)));
const er=p(u,TM.eraser+.3,TM.eraser+1.2);
BLA.forEach((e,i)=>rise(e,p(u,TM.time_blocks+i*.35,TM.time_blocks+i*.35+.4)*(DA[i][0]>=4?1-er:1)));
BLB.forEach((e,i)=>rise(e,p(u,TM.eraser+1.3+i*.3,TM.eraser+1.7+i*.3)));
const ee=p(u,TM.eraser+.2,TM.eraser+1.3);
$('ers').setAttribute('transform','translate('+(540+260*Math.sin(ee*Math.PI*6)).toFixed(1)+' '+(520+260*ee).toFixed(1)+') rotate(-20)'); op($('ers'),ee>0&&ee<1?1:0);
rise($('intr'),p(u,TM.eraser,TM.eraser+.4)); rise($('dec'),p(u,TM.eraser+4.1,TM.eraser+4.7));

rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('tst'),p(u,TM.question_mark+2.9,TM.question_mark+3.4));
rise($('grad'),p(u,TM.graduate,TM.graduate+.5)); rise($('dep'),p(u,TM.graduate+1,TM.graduate+1.6));
const m1=p(u,TM.graduate+6.6,TM.graduate+7.6), m2=p(u,TM.graduate+10.4,TM.graduate+11.8);
$('c1').setAttribute('cy',(270+125*m1).toFixed(1)); op($('c1'),m1*5); rise($('l1'),p(u,TM.graduate+7,TM.graduate+7.5));
$('c2').setAttribute('cy',(270+400*m2).toFixed(1)); op($('c2'),m2*5); rise($('l2'),p(u,TM.graduate+11,TM.graduate+11.5));

rise($('boss'),p(u,TM.boss,TM.boss+.5)); rise($('you4'),p(u,TM.boss+.6,TM.boss+1.1)); $('bq').textContent=u>=TM.pie_chart?'%?':'?';
rise($('pie'),p(u,TM.pie_chart,TM.pie_chart+.5));
const q1=p(u,TM.pie_chart+4.2,TM.pie_chart+5.4), q2=p(u,TM.pie_chart+5,TM.pie_chart+6.4);
$('w1').setAttribute('d',wed(0,Math.max(.001,.3*q1))); $('w2').setAttribute('d',wed(.3,.3+Math.max(.001,.2*q2)));
op($('w1'),q1*5); op($('w2'),q2*5); op($('sl'),(q1-.6)*3);
rise($('pl'),q1); $('pv').textContent='30–'+Math.round(30+20*q2)+'%';
const pr=p(u,TM.pie_chart+8.8,TM.pie_chart+9.4); op($('rest'),pr); rise($('pr'),pr);

rise($('clk'),p(u,TM.clock,TM.clock+.5));
const h5=5.5*p(u,TM.clock+.3,TM.clock+2.5), ha=h5*Math.PI/6, ma=h5*2*Math.PI;
$('hh').setAttribute('x2',(360+90*Math.sin(ha)).toFixed(1)); $('hh').setAttribute('y2',(470-90*Math.cos(ha)).toFixed(1));
$('mh').setAttribute('x2',(360+135*Math.sin(ma)).toFixed(1)); $('mh').setAttribute('y2',(470-135*Math.cos(ma)).toFixed(1));
rise($('fsp'),p(u,TM.clock+5.4,TM.clock+6)); rise($('day5'),p(u,TM.deadline,TM.deadline+.5)); rise($('bin'),p(u,TM.trash_can,TM.trash_can+.4));
TK.forEach(([g,q],i)=>{const a=p(u,TM.deadline+.3+i*.25,TM.deadline+.7+i*.25);
  if(q[6]){const m=p(u,TM.deadline+2+i*.4,TM.deadline+2.8+i*.4); tr(g,q[1]+(q[3]-q[1])*m,q[2]+(q[4]-q[2])*m); op(g,a)}
  else{const m=p(u,TM.trash_can+.4+i*.3,TM.trash_can+1.3+i*.3), s=1-.6*m; tr(g,q[1]+(1300-q[0]*s/2-q[1])*m,q[2]+(600-38*s-q[2])*m,s); op(g,a*(1-cl((m-.7)/.3)))}});

rise($('web'),p(u,TM.website,TM.website+.5)); rise($('rul'),p(u,TM.filter,TM.filter+.5)); rise($('fun'),p(u,TM.filter+.4,TM.filter+.9));
const fo=p(u,TM.filter+.8,TM.filter+1.4);
FE.forEach((e,i)=>{const c=(t*.35+i/6)%1, x0=940+i*72, ok=i%3==0; let x=1120,y,o=1;
  if(c<.5){const k2=c/.5; x=x0+(1120-x0)*k2; y=240+230*k2} else {y=470+210*(c-.5)/.5; if(!ok)o=1-cl((c-.5)/.08)}
  tr(e,x,y); op(e,fo*o*cl(c/.08)*(ok?1-cl((c-.9)/.1):1))});
rise($('rude'),p(u,TM.envelope,TM.envelope+.6));

rise($('ask'),p(u,TM.coffee_cup,TM.coffee_cup+.5));
BB.forEach((g,i)=>rise(g,p(u,TM.coffee_cup+3.3+i*.4,TM.coffee_cup+3.6+i*.4)));
rise($('lng'),p(u,TM.coffee_cup+6,TM.coffee_cup+6.5));
rise($('card'),p(u,TM.calendar,TM.calendar+.5)); rise($('cf'),p(u,TM.calendar+3,TM.calendar+3.5)); rise($('chk'),p(u,TM.check_mark,TM.check_mark+.5));

const S8=SC[8][0]/K;
rise($('qa'),p(u,S8+.3,S8+.8)); rise($('qb'),p(u,S8+.8,S8+1.3)); rise($('qc'),p(u,S8+5,S8+5.5));
MB.forEach((e,i)=>rise(e,p(u,S8+1.2+i*.3,S8+1.5+i*.3))); rise($('wall8'),p(u,S8+5.4,S8+5.9));