const R=(id,a)=>rise($(id),p(u,a,a+.5));
R('man0',TM.worried_man);R('cloud0',TM.worried_man+.8);R('sun0',TM.worried_man+7.4);
rainL.forEach((l,i)=>{const o=(t*80+i*17)%40;l.setAttribute('transform',`translate(0 ${o.toFixed(1)})`);l.setAttribute('opacity',(1-o/40).toFixed(2))});

R('car1',TM.carrier);R('plant1',TM.glass_plant);R('pipe1',TM.glass_plant+2.5);R('dev1',TM.glass_plant+3);R('bad1',TM.broken_device+.8);
const bk=p(u,TM.broken_device,TM.broken_device+1.2);
$('needle1').setAttribute('transform',`rotate(${(40-115*bk+3*Math.sin(t*(3+6*bk))).toFixed(1)} 1250 560)`);
const cr=p(u,TM.broken_device+4.1,TM.broken_device+4.8);cf.style.fill=cr>0?'var(--loss)':'var(--ink)';cf.setAttribute('transform',`translate(0 ${(14*cr).toFixed(1)})`);
smk.forEach((c,i)=>{const o=(t*25+i*23)%70;c.setAttribute('cy',(290-o).toFixed(1));c.setAttribute('opacity',(1-o/70).toFixed(2))});

R('head2',TM.tangled_head);$('tang2').setAttribute('stroke-dashoffset',(8000*(1-p(u,TM.tangled_head,TM.tangled_head+3))).toFixed(0));
const sk=p(u,TM.tangled_head+3.4,TM.tangled_head+4.8);
D2.forEach(([a,c],i)=>{const r=60+(165+(i%3)*20)*sk,b=a+.15*Math.sin(t+i);c.setAttribute('cx',(380+r*Math.cos(b)).toFixed(1));c.setAttribute('cy',(480+r*Math.sin(b)).toFixed(1));c.setAttribute('opacity',sk)});
[0,1,2].forEach(i=>R('st2_'+i,TM.three_steps+i*.6));

R('q3',TM.step_one);R('job3',TM.pink_slip);R('stamp3',TM.pink_slip+.7);R('money3',TM.money_loss);
$('num3').textContent=fm(20000*p(u,TM.money_loss+.3,TM.money_loss+1.3));
B3.forEach((g,i)=>{const a=TM.money_loss+1.2+(4-i)*.25,k=p(u,a,a+.7);g.setAttribute('transform',`translate(${(16*k).toFixed(1)} ${(24*k).toFixed(1)})`);g.setAttribute('opacity',(1-.75*k).toFixed(2))});

R('q4',TM.step_two);R('face4',TM.step_two+.4);R('job4',TM.new_job);R('boss4',TM.new_job+2.6);
const cm=p(u,TM.calm_face,TM.calm_face+1);$('mouth4').setAttribute('d',`M280 590Q330 ${(560+60*cm).toFixed(1)} 380 590`);
$('faceT').setAttribute('fill-opacity',(.15*(1-cm)).toFixed(3));
R('calm4',TM.calm_face+.6);let wv='M600 830';for(let x=620;x<=1300;x+=20)wv+='L'+x+' '+(830+7*Math.sin(x/40-t*3)).toFixed(1);$('wave4').setAttribute('d',wv);

R('q5',TM.step_three);R('bench5',TM.test_bench);R('add5',TM.test_bench+1.2);
$('needle5').setAttribute('transform',`rotate(${(-70+125*p(u,TM.test_bench+1.5,TM.test_bench+3)).toFixed(1)} 290 600)`);
R('chart5',TM.profit_chart);const b1=p(u,TM.profit_chart+.3,TM.profit_chart+1.3),b2=p(u,TM.profit_chart+1.3,TM.profit_chart+2.3);
$('bar5a').setAttribute('height',(200*b1).toFixed(1));$('bar5b').setAttribute('y',(600-150*b2).toFixed(1));$('bar5b').setAttribute('height',(150*b2).toFixed(1));
$('num5').textContent='+'+fm(15000*b2);

R('quote6',TM.lin_yutang);R('me6',TM.lin_yutang+2);
$('ghosts6').setAttribute('opacity',(p(u,TM.lin_yutang+2.4,TM.lin_yutang+3)*(1-p(u,TM.energy_burst,TM.energy_burst+1.2))).toFixed(2));
G6.forEach((g,i)=>g.setAttribute('transform',`translate(${(8*Math.sin(t*1.5+i)).toFixed(1)} ${(6*Math.cos(t*1.2+i)).toFixed(1)})`));
R('rays6',TM.energy_burst+3.8);R('floor6',TM.floor_bottom);
const ck=p(u,TM.floor_bottom+1,TM.floor_bottom+4)*4,ci=Math.min(3,Math.floor(ck)),cfr=ck-ci;
cl6.setAttribute('transform',`translate(${(XS[ci]+(XS[ci+1]-XS[ci])*cfr).toFixed(1)} ${(YS[ci]+(YS[ci+1]-YS[ci])*cfr-84).toFixed(1)})`);

R('nb7',TM.notebook);R('q7_0',TM.notebook+3.8);R('q7_1',TM.notebook+7.2);R('q7_2',TM.ladder);R('lad7',TM.ladder+.3);
const lk=p(u,TM.ladder+1,TM.ladder+2);you7.setAttribute('transform',`translate(1160 ${(728-80*lk).toFixed(1)})`);
RG[0].setAttribute('stroke',lk>.9?'var(--gain)':'var(--ink)');

R('qa8',TM.question_mark);R('qb8',TM.question_mark+.4);
R('p8_0',TM.question_mark+.8);R('ar8_0',TM.question_mark+1.3);R('p8_1',TM.question_mark+1.6);R('ar8_1',TM.question_mark+2.1);R('p8_2',TM.question_mark+2.4);
R('lab8',TM.question_mark+3.3);
$('cl8').setAttribute('transform',`translate(${(5*Math.sin(t*1.4)).toFixed(1)} ${(3*Math.cos(t*1.1)).toFixed(1)})`);
const sp=p(u,TM.question_mark+2.9,TM.question_mark+5.2)*3,si=Math.min(2,Math.floor(sp)),sf=sp-si,hop=Math.sin(Math.PI*sf)*14;
st8.setAttribute('transform',`translate(${(SX8[si]+(SX8[si+1]-SX8[si])*sf).toFixed(1)} ${(SY8[si]+(SY8[si+1]-SY8[si])*sf-51-hop).toFixed(1)})`);