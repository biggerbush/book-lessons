R('split',TM.brain_split,u); R('h1',TM.brain_split+.4,u); R('h2',TM.brain_split+4.2,u);
$('zz').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');

R('face',TM.angry_face,u); R('kn',TM.angry_face+4.2,u); R('lt',TM.lightning,u); R('s1tag',TM.lightning+.4,u); R('sw',TM.lightning+4.1,u); R('auto',TM.lightning+4.4,u);

R('mp',TM.math_problem,u); R('gr',TM.gears,u); R('st0',TM.gears+.4,u); R('st1',TM.gears+1.8,u); R('mem',TM.gears+2.8,u); R('st2',TM.gears+4.5,u); R('s2tag',TM.gears+4.8,u);
const ga=30*Math.max(0,u-TM.gears);
$('gA').setAttribute('transform','translate(980 420) rotate('+ga.toFixed(1)+')'); $('gB').setAttribute('transform','translate(1190 515) rotate('+(-ga*1.5+11).toFixed(1)+')');

R('bat',TM.battery,u);
const lv=1-.7*p(u,TM.walker,TM.walker+7); $('batf').setAttribute('width',(248*lv).toFixed(1)); $('batf').style.fill=lv>.5?'var(--gain)':'var(--loss)';
R('wkp',TM.walker,u);
const wkk=cl(lin(u,TM.walker+.3,TM.walker+3.3)), sg=(wkk>0&&wkk<1)?20*Math.sin(t*9):0;
$('wk').setAttribute('transform','translate('+(560+240*wkk).toFixed(1)+' 600)');
$('lg').setAttribute('d','M-12 -56L'+(-12+sg).toFixed(1)+' 0M12 -56L'+(12-sg).toFixed(1)+' 0');
R('thk',TM.walker+3.5,u); R('cost',TM.walker+7.3,u); R('couch',TM.lazy_couch,u);
$('zz2').setAttribute('transform','translate('+(4*Math.sin(t*1.5)).toFixed(1)+' '+(6*Math.sin(t*2)).toFixed(1)+')');

R('bb',TM.bat_ball,u); R('tot',TM.bat_ball+3.4,u); R('tag',TM.price_tag,u); R('q4',TM.price_tag+3.8,u); R('ten',TM.ten_cents,u);

R('w0',TM.check_math,u); R('r0',TM.check_math+1.4,u); R('r1',TM.check_math+3.5,u); R('r2',TM.check_math+6.5,u); R('w1',TM.five_cents,u);
R('stu',TM.students,u); R('stl',TM.students+.4,u);
ST.forEach((s,i)=>{const c=WR[i]&&u>=TM.students+.8+i*.12?'var(--loss)':'var(--ink)';s.forEach(e=>e.style.fill=c)});
R('cb0',TM.students+5.4,u); R('cb1',TM.students+9.2,u);

// who is in charge: suggestions travel from System 1 to the desk and get stamped
R('boss',TM.boss_desk,u); R('adv',TM.advisor,u); R('trail',TM.advisor+.2,u);
CD.forEach((g,i)=>{const a=TM.advisor+.4+i*.35; rise(g,p(u,a,a+.4))});
$('flow').setAttribute('cx',(300+((t*140)%660)).toFixed(1));
rise($('lc'),p(u,TM.advisor+1.8,TM.advisor+2.2));
const lk=p(u,TM.stamp-.8,TM.stamp);
$('lc').setAttribute('transform','translate('+(820+190*lk).toFixed(1)+' '+(450+50*lk-40*Math.sin(Math.PI*lk)).toFixed(1)+')');
R('stp',TM.stamp,u); $('stpi').setAttribute('transform','translate(1040 '+(500-80*Math.abs(Math.sin(t*3))).toFixed(1)+')');
R('apv',TM.stamp+.6,u); R('fine6',TM.stamp+3.4,u);

const ho=p(u,TM.stop_sign,TM.stop_sign+.5)*(1-p(u,TM.stop_sign+3.4,TM.stop_sign+3.9));
HN.forEach((c,i)=>{const x=140+((t*140+i*150)%750);c.setAttribute('cx',x.toFixed(1));c.setAttribute('opacity',(ho*(x>820?cl((890-x)/70):1)).toFixed(2))});
R('hl',TM.stop_sign,u); R('stp7',TM.stop_sign+.3,u);
const ik=p(u,TM.stop_sign+3.4,TM.stop_sign+4.2); $('imp').setAttribute('transform','translate('+(120+570*ik).toFixed(1)+' 500)'); $('imp').setAttribute('opacity',cl(ik*3).toFixed(2));
R('il',TM.stop_sign+4.2,u);
R('sw7',TM.stopwatch,u);
const sc=cl(lin(u,TM.stopwatch+.5,TM.stopwatch+4.5)), sa=sc*2*Math.PI;
$('cnt').textContent=Math.round(10*sc)+' s';
$('hand').setAttribute('x2',(1260+110*Math.sin(sa)).toFixed(1)); $('hand').setAttribute('y2',(470-110*Math.cos(sa)).toFixed(1));
const ea=Math.min(sa,2*Math.PI-.01); $('arc').setAttribute('d',sc>.001?'M1260 342A128 128 0 '+(ea>Math.PI?1:0)+' 1 '+(1260+128*Math.sin(ea)).toFixed(1)+' '+(470-128*Math.cos(ea)).toFixed(1):'');
R('ver',TM.stopwatch+.6,u);

R('mg',TM.magnifier,u); R('qa',TM.magnifier,u); R('qb',TM.magnifier+.4,u); R('qc',TM.magnifier+4.2,u); R('qm',TM.magnifier+4.6,u);