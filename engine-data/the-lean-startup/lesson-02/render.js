$('team').setAttribute('transform','translate(0 '+(3*Math.sin(t*6)).toFixed(1)+')');
F0.forEach((b,i)=>rise(b,p(u,TM.busy_team+.4+i*.5,TM.busy_team+.8+i*.5)));
rise($('qm'),p(u,TM.busy_team+4.6,TM.busy_team+5.1));

rise($('ruler'),p(u,TM.ruler,TM.ruler+.5));rise($('fac'),p(u,TM.factory,TM.factory+.5));rise($('stu'),p(u,TM.question,TM.question+.5));
rise($('waste1'),p(u,TM.question+2,TM.question+2.6));
FB.forEach((b,i)=>{const ph=(t*.2+i/4)%1;b.setAttribute('x',(360+320*ph).toFixed(1))});
SB.forEach((b,i)=>{const ph=(t*.2+i/4)%1,mv=Math.min(ph/.85,1),fo=cl((ph-.85)/.15),fi=cl(ph/.06);b.setAttribute('x',(880+330*mv).toFixed(1));b.setAttribute('opacity',(Math.min(fi,1-fo)).toFixed(2))});

rise($('riesg'),p(u,TM.ries,TM.ries+.5));rise($('chat'),p(u,TM.chat_window,TM.chat_window+.5));
rise($('addon'),p(u,TM.chat_window+1,TM.chat_window+1.5));rise($('bet'),p(u,TM.chat_window+2.2,TM.chat_window+2.8));
SH.forEach((g,i)=>rise(g,p(u,TM.code_pile+i*.45,TM.code_pile+i*.45+.4)));rise($('codeL'),p(u,TM.code_pile+1,TM.code_pile+1.5));

rise($('dl'),p(u,TM.launch,TM.launch+.5));rise($('intv'),p(u,TM.interview,TM.interview+.5));
rise($('nox'),p(u,TM.interview+1.8,TM.interview+2.3));rise($('frd'),p(u,TM.friends,TM.friends+.6));

rise($('trash'),p(u,TM.trash_can,TM.trash_can+.5));
FL.forEach((g,i)=>{const a=TM.trash_can+.5+i*.5,k=p(u,a,a+.9);g.setAttribute('transform','translate('+(300+(i%2?40:-20))+' '+(210+230*k).toFixed(1)+') rotate('+((i%2?1:-1)*(10+40*k)).toFixed(1)+')');g.setAttribute('opacity',u<a?0:(1-cl((k-.8)/.2)).toFixed(2))});
rise($('wfor'),p(u,TM.trash_can+4.2,TM.trash_can+4.8));
rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.6));$('bulbC').setAttribute('r',(80+4*Math.sin(t*3)).toFixed(1));

rise($('hg'),p(u,TM.hourglass,TM.hourglass+.5));
const k=(t*.12)%1,ys=320+130*k,w=(65-(ys-304)*.34)*.9;
$('sandT').setAttribute('points',(260-w).toFixed(1)+','+ys.toFixed(1)+' '+(260+w).toFixed(1)+','+ys.toFixed(1)+' 260,455');
$('sandB').setAttribute('points','210,612 310,612 260,'+(612-100*k).toFixed(1));
rise($('row1'),p(u,TM.hourglass+2.1,TM.hourglass+2.6));$('bar1').setAttribute('width',(960*p(u,TM.hourglass+2.3,TM.hourglass+4)).toFixed(1));
rise($('row2'),p(u,TM.sketch,TM.sketch+.5));$('bar2').setAttribute('width',(180*p(u,TM.sketch+.2,TM.sketch+.8)).toFixed(1));
$('chk').setAttribute('opacity',p(u,TM.sketch+1.5,TM.sketch+2));
rise($('better'),p(u,TM.sketch+5.4,TM.sketch+6));

const sk=p(u,TM.label,TM.label+.4);$('stamp').setAttribute('transform','translate(310 285) rotate(-4) scale('+(1.5-.5*sk).toFixed(3)+')');$('stamp').setAttribute('opacity',sk);
rise($('ev'),p(u,TM.chart,TM.chart+.5));
EB.forEach((b,i)=>{const h=EH[i]*p(u,TM.chart+.4+i*.35,TM.chart+1+i*.35);b.setAttribute('height',h.toFixed(1));b.setAttribute('y',(640-h).toFixed(1))});
rise($('exc'),p(u,TM.excuse,TM.excuse+.6));

rise($('card'),p(u,TM.scorecard,TM.scorecard+.5));
$('stk').setAttribute('x2',(150+470*p(u,TM.scorecard+1.8,TM.scorecard+2.4)).toFixed(1));
rise($('l2'),p(u,TM.scorecard+2.4,TM.scorecard+3));
rise($('itA'),p(u,TM.checkmark,TM.checkmark+.5));rise($('wstamp'),p(u,TM.checkmark+1,TM.checkmark+1.4));
rise($('itB'),p(u,TM.checkmark+1.6,TM.checkmark+2.1));rise($('wst'),p(u,TM.checkmark+2.2,TM.checkmark+2.8));

const s8=SC[8][0]/K;
rise($('ca'),p(u,s8+.3,s8+.8));rise($('cb'),p(u,s8+.7,s8+1.2));rise($('cc'),p(u,s8+1.1,s8+1.6));
rise($('pad'),p(u,s8+3.4,s8+3.9));$('penl').setAttribute('stroke-dashoffset',(180*(1-p(u,s8+4,s8+5.6))).toFixed(1));
rise($('ctag'),p(u,s8+4.4,s8+5));