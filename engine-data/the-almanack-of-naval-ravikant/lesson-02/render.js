const R=(e,a,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,a,a+d));
const S0=p(u,TM.spark,TM.spark+.6);$('spark').setAttribute('opacity',S0);
$('spark').setAttribute('transform','translate(1300 215) rotate('+(t*12%360).toFixed(1)+') scale('+(Math.max(.01,S0)*(1+.07*Math.sin(t*3))).toFixed(3)+')');
R('tag0',TM.spark+5.8);

const C=TM.classroom;R('board1',C);KD.forEach((g,i)=>R(g,C+.2+i*.08,.4));
const rp=p(u,C+4.6,C+5.2);rise($('youK'),p(u,C+.8,C+1.3)*(1-rp));rise($('repK'),rp);
R('robot',TM.robot_arm);
$('arm1').setAttribute('transform','rotate('+(14*Math.sin(t*1.2)).toFixed(1)+' 1090 640)');
$('arm2').setAttribute('transform','rotate('+(22*Math.sin(t*1.7+1)).toFixed(1)+' 1090 470)');
R('pack',TM.robot_arm+2.9,.6);

R('tb',TM.toolbox);R('app',TM.apprentice);
RP.forEach((c,i)=>c.setAttribute('fill',u>=TM.apprentice+.8+i*.5?'var(--gain)':'var(--line)'));
R('lock',TM.apprentice+4.9,.6);

const W=TM.two_people;R('ppl3',W);R('divi3',W);
const sm=u>=TM.smile_face;[...$('pL').children].forEach(c=>c.setAttribute('class',sm?'gain':'ink'));
['fL','clkL','lblL'].forEach(k=>R(k,TM.smile_face));['fR','clkR','lblR'].forEach(k=>R(k,TM.sweat_drop));
$('hdL').setAttribute('transform','rotate('+(t*300%360).toFixed(1)+' 230 300)');
$('hdR').setAttribute('transform','rotate('+(Math.floor(t)*6%360)+' 1370 300)');
$('drop').setAttribute('transform','translate(0 '+(8*Math.abs(Math.sin(t*2))).toFixed(1)+')');
R('stmt',W+11.7,.6);

const A=TM.trend_arrow;R('chart',A);const hot=u>=A+3.8;
CR.forEach((c,i)=>{const s=(t*.12+i/8)%1;c.setAttribute('cx',(160+440*s).toFixed(1));c.setAttribute('cy',(610-260.7*s).toFixed(1));c.setAttribute('opacity',(cl((1-s)*6)*p(u,A+.3,A+.8)).toFixed(2));c.setAttribute('class',hot?'loss':'ink')});
R('opp',A+3.8);R('comp',TM.compass);
$('needle').setAttribute('transform','rotate('+(50*p(u,TM.compass+.3,TM.compass+1.3)+5*Math.sin(t*2)).toFixed(1)+' 1060 440)');
R('trail',TM.compass+1.2,.7);R('bottom4',TM.compass+5.4,.6);

const KR=TM.kid_reading;R('kid5',KR);CP.forEach((g,i)=>R(g,KR+5.8+i*.6,.4));
R('books5',TM.book_stack);$('atom').setAttribute('transform','rotate('+(t*25%360).toFixed(1)+' 760 390)');
$('tl5').setAttribute('x2',(280+960*p(u,TM.book_stack+4.6,TM.book_stack+6)).toFixed(1));R('adult',TM.book_stack+5.4);

R('v0',TM.venn);R('v1',TM.venn+3.4);R('v2',TM.venn+3.9);R('core',TM.venn+4.6);
R('crownG',TM.crown);$('crB').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');R('redef',TM.crown+1,.6);

R('mirr',TM.mirror);R('quote',TM.mirror+3.4,.6);
FP.forEach((f,i)=>f.setAttribute('opacity',p(u,TM.fingerprint+i*.2,TM.fingerprint+i*.2+.3)));R('fpt',TM.fingerprint+1.4,.6);

const N=TM.notebook;['q0','q1','q2'].forEach((k,i)=>R(k,N+i*.4));R('note',N);
CK.forEach((c,i)=>c.setAttribute('opacity',p(u,N+1.4+i*.5,N+1.7+i*.5)));R('q3',N+6.1,.6);