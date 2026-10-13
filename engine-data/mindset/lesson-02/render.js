const f0=TM.failed_test,mp=p(u,f0+4.6,f0+5.2);
XS.forEach((e,i)=>e.setAttribute('opacity',p(u,f0+.4+i*.3,f0+.7+i*.3)*(1-mp)));
$('pmap').setAttribute('opacity',mp);
R('lv',f0+3.8,u);R('lm',f0+4.6,u);

R('st0',TM.two_students,u);R('st1',TM.two_students+.4,u);
$('div1').setAttribute('opacity',p(u,TM.split_screen,TM.split_screen+.6));
R('b0',TM.split_screen+.4,u);R('b1',TM.split_screen+.9,u);
R('tg0',TM.split_screen+4.6,u);R('tg1',TM.split_screen+5,u);

const ga=35*(1-p(u,TM.gavel+.4,TM.gavel+.8));
$('gav').setAttribute('transform','translate(620 470) rotate('+ga.toFixed(2)+')');
$('imp').setAttribute('opacity',p(u,TM.gavel+.75,TM.gavel+.85)*(1-p(u,TM.gavel+1.4,TM.gavel+2)));
R('v2',TM.gavel+4.6,u);R('tag',TM.label_tag,u);

const e3=cl((u-TM.compass)/3),na=90+70*(1-e3)*Math.sin(e3*14);
$('ndl').setAttribute('transform','translate(320 470) rotate('+na.toFixed(2)+')');
R('route',TM.compass+5.4,u);R('tbox',TM.toolbox,u);
CP.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(150*(1-p(u,TM.toolbox+.5+i*.3,TM.toolbox+1+i*.3))).toFixed(1)+')'));
R('q3',TM.toolbox+1.5,u);

R('r4',TM.brain_scan,u);R('c4a',TM.feedback_card,u);R('c4b',TM.feedback_card+2,u);
$('c4br').setAttribute('stroke',u>=TM.right_answer?'var(--gain)':'var(--ink)');
wave(WV[0],490,60*p(u,TM.feedback_card+4.9,TM.feedback_card+5.5),0,t);
wave(WV[1],690,0,60*p(u,TM.right_answer+4.2,TM.right_answer+4.8),t);
R('to4',TM.right_answer+.4,u);R('pa4',TM.right_answer+4.2,u);

R('uni',TM.university,u);R('bk',TM.english_book,u);
R('g5a',TM.english_book+.6,u);R('g5b',TM.english_book+.9,u);
R('yes5',TM.english_book+6.6,u);
$('mv5').setAttribute('transform','translate('+(-150*p(u,TM.english_book+6.8,TM.english_book+7.8)).toFixed(1)+' 0)');
R('li5',TM.english_book+9.6,u);R('dep5',TM.english_book+10.2,u);

R('lp6',TM.steep_hill,u);R('ft6',TM.steep_hill+3,u);
$('sw6').setAttribute('transform','translate(0 '+(4*Math.sin(t*4)).toFixed(1)+')');
R('rp6',TM.engine,u);
$('gr6').setAttribute('transform','translate(1030 470) rotate('+(60*Math.max(0,u-TM.engine)).toFixed(1)+')');
BR.forEach((b,i)=>{const h=BH[i]*p(u,TM.engine+.8+i*.4,TM.engine+1.4+i*.4);b.setAttribute('y',(680-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});

R('n0',TM.notebook,u);R('n1',TM.notebook+1.5,u);
$('stk7').setAttribute('x2',(172+258*p(u,TM.notebook+2.6,TM.notebook+3.1)).toFixed(1));
R('n2',TM.notebook+5.4,u);
R('a7',TM.arrow_forward,u);R('cal',TM.arrow_forward+.3,u);R('step7',TM.arrow_forward+1,u);

R('qa',TM.mirror,u);R('qb',TM.mirror+.4,u);
$('mx8').setAttribute('opacity',p(u,TM.mirror+.6,TM.mirror+1.1)*(1-p(u,TM.mirror+4.2,TM.mirror+4.6)));
$('ma8').setAttribute('opacity',p(u,TM.mirror+4.4,TM.mirror+4.9));
R('qc',TM.mirror+4.2,u);R('qd',TM.mirror+4.6,u);