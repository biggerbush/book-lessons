const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d)),s6=SC[6][0]/K;
R('tBoard',TM.game_board);R('tStorm',TM.storm_cloud);
rain.forEach((l,i)=>{const y=372+(t*110+i*31)%84;l.setAttribute('d','M'+(1300+i*32)+' '+y.toFixed(1)+'l-6 16')});

R('hog',TM.hogarth);R('kSign',TM.sun_sign);R('wSign',TM.thorn_sign);R('sum1',TM.thorn_sign+1.8,.6);

R('golfP',TM.golf_course);R('gRule',TM.golf_course+2.2);
const gk=p(u,TM.golf_ball+.3,TM.golf_ball+1.8);$('gBall').setAttribute('cx',(220+412*gk).toFixed(1));$('gBall').setAttribute('cy',(588-260*Math.sin(Math.PI*gk)).toFixed(1));
R('gSee',TM.golf_ball+1.8);R('chessP',TM.chess_board);R('kPay',TM.chess_board+5,.6);

R('gm',TM.grandmaster);R('rgB',TM.grandmaster+.6);R('rl0',TM.real_game+1);
$('rb0').setAttribute('width',(259*p(u,TM.real_game+.5,TM.real_game+2)).toFixed(1));
R('rdB',TM.random_board);R('rl1',TM.random_board+1.6);
$('rb1').setAttribute('width',(72*p(u,TM.random_board+1.2,TM.random_board+2.4)).toFixed(1));
const sk2=p(u,TM.random_board+.3,TM.random_board+1.5);RD.forEach(q=>{q[0].setAttribute('cx',(q[1]+(q[3]-q[1])*sk2).toFixed(1));q[0].setAttribute('cy',(q[2]+(q[4]-q[2])*sk2).toFixed(1))});
R('pat',TM.random_board+4.2,.6);

R('mz',TM.maze);R('ruleL',TM.shifting_rule);
$('mw').setAttribute('transform','rotate('+(u>=TM.shifting_rule?90*Math.sin(t*1.6):0).toFixed(1)+' 480 560)');$('mw').setAttribute('opacity',p(u,TM.shifting_rule,TM.shifting_rule+.4));
R('clk',TM.delayed_clock);$('hand').setAttribute('transform','rotate('+(t*120%360).toFixed(1)+' 1000 440)');
[0,1,2].forEach(i=>R('f'+i,TM.delayed_clock+.6+i*.9));R('most',TM.delayed_clock+4.1,.6);

R('doc',TM.doctor);R('pts',TM.doctor+.8);
// hand stops just left of each patient's head (8px gap), hopping between them
const hk=p(u,TM.tongue+.3,TM.tongue+4),hx=584+720*hk,hy=432-40*Math.abs(Math.sin(hk*4*Math.PI));
$('hnd').setAttribute('transform','translate('+hx.toFixed(1)+' '+hy.toFixed(1)+')');$('hnd').setAttribute('opacity',p(u,TM.tongue,TM.tongue+.3));
PT.forEach((g,i)=>g.setAttribute('fill',u>=TM.sick_patients+.6+i*.6?'var(--loss)':'var(--ink)'));
R('bub',TM.sick_patients+3);R('germs',TM.germs);R('gTxt',TM.germs+.8,.6);
const bx=p(u,TM.germs+1,TM.germs+1.4);$('bubX').setAttribute('opacity',bx.toFixed(2));$('bubX').setAttribute('transform','translate(564 252) scale('+(.6+.4*bx).toFixed(3)+') translate(-564 -252)');
GM.forEach((g,i)=>{const x=640+(i*52+t*80)%720;g.setAttribute('cx',x.toFixed(1));g.setAttribute('cy',(372-50*Math.abs(Math.sin(Math.PI*(x-640)/180))).toFixed(1))});

R('b0',s6+.4);R('b1',s6+1.4);R('b2',s6+2.4);$('loop1').setAttribute('opacity',p(u,s6+2.8,s6+3.4));
const wr=u>=TM.wrong_arrow;$('lb').setAttribute('fill',wr?'var(--loss)':'var(--stage)');$('lb').setAttribute('stroke',wr?'var(--loss)':'var(--ink)');
$('lt').textContent=wr?'WRONG LESSON':'LESSON';$('lt').style.fill=wr?'var(--stage)':'var(--ink)';$('ar2').setAttribute('stroke',wr?'var(--loss)':'var(--muted)');
R('chart',TM.confident_face);const cd=p(u,TM.confident_face+.3,TM.confident_face+2.3);$('cf').setAttribute('stroke-dashoffset',(1-cd).toFixed(3));$('sk').setAttribute('stroke-dashoffset',(1-cd).toFixed(3));
R('face',TM.confident_face+.8);R('old',TM.confident_face+4.2,.6);

R('qm',TM.question_mark);R('lens',TM.question_mark+1);R('chk',TM.checklist);
const h=30+170*p(u,TM.wide_lens,TM.wide_lens+1.5);$('cone').setAttribute('points','1262,470 1460,'+(470-h).toFixed(1)+' 1460,'+(470+h).toFixed(1));
DT.forEach(d=>d.setAttribute('fill',Math.abs(+d.getAttribute('cy')-470)<=h?'var(--gain)':'var(--line)'));
R('wide',TM.wide_lens+.8,.6);

R('qL',TM.mirror);R('mir',TM.mirror+.4);$('mirI').setAttribute('transform','rotate('+(3*Math.sin(t*1.2)).toFixed(2)+' 1300 740)');
R('qa',TM.mirror+3.8);R('qb',TM.mirror+4.4);R('qK',TM.mirror+5);