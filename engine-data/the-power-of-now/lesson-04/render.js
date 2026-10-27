const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
R('clk',TM.wall_clock);
const fd=p(u,TM.wall_clock+2.4,TM.wall_clock+4);
$('hh').setAttribute('transform','rotate('+((t*40)%360).toFixed(1)+' 1300 380)'); $('mh').setAttribute('transform','rotate('+((t*240)%360).toFixed(1)+' 1300 380)');
$('hh').setAttribute('opacity',1-fd); $('mh').setAttribute('opacity',1-fd); $('ticks').setAttribute('opacity',1-fd*.7);
$('nowd').setAttribute('r',(16+40*fd).toFixed(1)); R('nowl',TM.wall_clock+3);

const cs=p(u,TM.two_circles+.8,TM.two_circles+2), co=p(u,TM.two_circles,TM.two_circles+.5);
$('ca').setAttribute('transform','translate('+(700-240*cs).toFixed(1)+' 380)'); $('cb').setAttribute('transform','translate('+(900+240*cs).toFixed(1)+' 380)');
$('ca').setAttribute('opacity',co); $('cb').setAttribute('opacity',co);
R('tl',TM.timeline); TD.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.timeline+.4+i*.15,TM.timeline+.7+i*.15)));
R('gd',TM.glowing_dot); $('gdot').setAttribute('r',(18+5*Math.sin(t*3)).toFixed(1));
$('cbc').style.stroke=u>=TM.glowing_dot?'var(--gain)':'var(--ink)'; R('q1',TM.glowing_dot+4.6,.6);

R('carry',TM.backpack); TG.forEach((g,i)=>{const a=TM.bills+i*1.1; rise(g,p(u,a,a+.4))});
R('cap2',TM.backpack+10); const pr=p(u,TM.backpack+12.9,TM.backpack+13.5); rise($('press'),pr);
$('bod').setAttribute('transform','translate(0 '+(pr*(10+6*Math.sin(t*2.5))).toFixed(1)+')');

R('qm',TM.question_mark); R('ask',TM.question_mark+2.1);
CP.forEach(([g,s],i)=>{const a=TM.question_mark+7.5+i*.6; rise(g,p(u,a,a+.4)); if(s)s.setAttribute('opacity',p(u,TM.question_mark+9.4,TM.question_mark+9.8))});
$('qmt').style.fill=u>=TM.empty_hand?'var(--muted)':'var(--loss)'; R('hnd',TM.empty_hand); R('nos',TM.empty_hand+.6);

R('pole',TM.signpost); R('sit',TM.signpost); R('a1',TM.signpost+3.8); R('a2',TM.signpost+4.6);
R('mind',TM.mind_cloud);
// the dark square hops slot to slot; only slots it has fully left show a light trail square, so nothing stacks
const cy7=(t*.8)%7, n7=Math.floor(cy7), hf=cl((cy7-n7)/.5), fp=n7<5?n7+ease(hf):5, lift=n7<5?70*Math.sin(Math.PI*hf):0;
const sx=940+88*fp, sy=600-lift;
GH.forEach((g,i)=>{const intro=p(u,TM.mind_cloud+.4+i*.3,TM.mind_cloud+.7+i*.3); g.setAttribute('opacity',(i<=fp-1?.25*intro:0).toFixed(2))});
$('sq').setAttribute('x',(sx-30).toFixed(1)); $('sq').setAttribute('y',sy.toFixed(1));
$('drg').setAttribute('d','M'+sx.toFixed(1)+' '+sy.toFixed(1)+'L1195 444'); R('cloud',TM.mind_cloud+.8); R('cap4',TM.mind_cloud+1.4);

R('mtn',TM.mountain); R('car',TM.race_car);
$('carb').setAttribute('transform','translate('+(4*Math.sin(t*9)).toFixed(1)+' '+(2*Math.sin(t*13)).toFixed(1)+')');
R('nrw',TM.race_car+.6); R('alive',TM.race_car+3.8); R('face',TM.calm_face); $('fring').setAttribute('r',(140+8*Math.sin(t*1.5)).toFixed(1));

ST.forEach((s,i)=>s.setAttribute('opacity',(p(u,TM.stairs+i*.25,TM.stairs+i*.25+.4)*(i<2?1:Math.max(.2,1-.13*i))).toFixed(2)));
$('fut').setAttribute('opacity',(p(u,TM.stairs+2,TM.stairs+2.5)*(.25+.25*Math.abs(Math.sin(t*1.3)))).toFixed(2));
ST[1].setAttribute('stroke',u>=TM.stairs+5.4?'var(--gain)':'var(--ink)');
rise($('hop'),p(u,TM.stairs+5.4,TM.stairs+5.9)*(1-p(u,TM.one_step,TM.one_step+.4)));
R('wk',TM.stairs+.5); const k=p(u,TM.one_step,TM.one_step+.9);
$('wki').setAttribute('transform','translate('+(240+160*k).toFixed(1)+' '+(690-70*k-60*Math.sin(Math.PI*k)).toFixed(1)+')');
R('act',TM.one_step+.6);

const b=p(u,TM.open_backpack+.5,TM.open_backpack+1.7); $('bp7').setAttribute('transform','translate('+(560+260*b).toFixed(1)+' '+(420+50*b).toFixed(1)+')');
L7.forEach((g,i)=>{const a=TM.open_backpack+4.2+i*1.3; rise(g,p(u,a,a+.4))});
$('brth').setAttribute('opacity',p(u,TM.open_backpack+4.2,TM.open_backpack+4.8)); $('brth').setAttribute('r',(160+12*Math.sin(t*1.2)).toFixed(1));
$('sun').setAttribute('opacity',p(u,TM.sunlight,TM.sunlight+.8)); $('rays').setAttribute('transform','rotate('+((t*6)%360).toFixed(1)+' 520 450)');
R('cap7',TM.sunlight+.5);

const S8=SC[8][0]/K; R('qa',S8+.3); R('qb',S8+.7); R('qc',S8+1.1); R('qd',S8+6.2);
RG.forEach((c,i)=>{const q=(t*.5+i/3)%1; c.setAttribute('r',(26+90*q).toFixed(1)); c.setAttribute('opacity',((1-q)*.8).toFixed(2))});