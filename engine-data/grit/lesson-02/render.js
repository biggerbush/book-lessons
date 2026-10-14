const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
$('kstar').setAttribute('transform','rotate('+(t*25%360).toFixed(1)+' 1300 220)');
R('kid',TM.gifted_kid,.6); R('x2',TM.gifted_kid+6.2,.6);

R('spot',TM.spotlight,.6); R('comf',TM.spotlight+6.2); R('couchg',TM.couch,.6); R('hides',TM.couch+5.3,.6);

R('eq0',TM.equation_one); R('eq1',TM.equation_two);
$('lnk').setAttribute('opacity',p(u,TM.equation_two+.5,TM.equation_two+1.2));
const both=u>=TM.equation_two+3.7;
R2.forEach(r=>{r[1][0].setAttribute('fill',both?'var(--gain)':'var(--stage)');r[1][0].setAttribute('stroke',both?'var(--gain)':'var(--ink)');r[1][1].style.fill=both?'var(--on-gain)':''});
R2[0][0][0].setAttribute('stroke-dasharray',u>=TM.equation_two+6.7?'12 10':'none');
R('cnt2',TM.equation_two+3.7); R('cnt1',TM.equation_two+6.7);

R('dialg',TM.speed_dial,.6);
$('ndl').setAttribute('transform','rotate('+(-80+140*p(u,TM.speed_dial+.5,TM.speed_dial+2)+4*Math.sin(t*3)).toFixed(1)+' 360 520)');
R('roadg',TM.finish_flag,.6);
$('trav').setAttribute('cx',(660+700*p(u,TM.finish_flag+5.4,TM.finish_flag+8.4)).toFixed(1));
R('far',TM.finish_flag+5.4,.6);

R('wheel',TM.potter,.6);
$('pg').setAttribute('transform','translate('+(25*Math.sin(t*6)).toFixed(1)+' 0)');
R('quote',TM.potter+6.2,.6);
POTS.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.pot_shelf+i*.2,TM.pot_shelf+i*.2+.3)));

R('cf',TM.runner_fast); R('chart',TM.runner_fast); R('cs',TM.runner_steady);
drw($('lf'),p(u,TM.runner_steady+5,TM.runner_steady+9)); drw($('ls'),p(u,TM.runner_steady+5,TM.runner_steady+10));
R('farm',TM.runner_steady+9.5);

drw($('grow'),p(u,TM.broken_line,TM.broken_line+1.5)); R('brk',TM.broken_line+1.5); R('nothing',TM.broken_line+4.2,.6);
R('qq0',TM.two_bars); R('qq1',TM.two_bars+.3);
const cx=u>=TM.two_bars+1.5;
R6.forEach(r=>{r[1][0].setAttribute('stroke',cx?'var(--loss)':'var(--ink)');r[1][1].textContent=cx?'0':'EFFORT';r[1][1].style.fill=cx?'var(--loss)':'';r[2][0].setAttribute('opacity',cx?.3:1);r[2][1].setAttribute('opacity',cx?.3:1)});
R('stay',TM.two_bars+3,.6);

const k1=p(u,TM.scale,TM.scale+1),k2=p(u,TM.hand_dial,TM.hand_dial+1.5),ang=(-8*k1+22*k2)*Math.PI/180,ca=220*Math.cos(ang),sa=220*Math.sin(ang);
$('beam').setAttribute('transform','rotate('+(ang*180/Math.PI).toFixed(2)+' 520 300)');
$('panL').setAttribute('transform','translate('+(520-ca).toFixed(1)+' '+(300-sa).toFixed(1)+')');
$('panR').setAttribute('transform','translate('+(520+ca).toFixed(1)+' '+(300+sa).toFixed(1)+')');
rise($('wT'),k1); R('fast',TM.scale+3); R('wE',TM.hand_dial); R('dial',TM.hand_dial,.6);
$('ptr').setAttribute('transform','rotate('+(-120+240*p(u,TM.hand_dial+.5,TM.hand_dial+2.5)).toFixed(1)+' 1220 460)');
R('bet',TM.hand_dial+5,.6);

R('tm',TM.timer,.6); drw($('tprog'),p(u,TM.timer+.6,TM.timer+7));
R('qa',TM.timer+8.2); R('qb',TM.timer+8.6); R('qc',TM.timer+9);