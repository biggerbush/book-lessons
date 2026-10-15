TR.forEach((c,i)=>{const f=((t*.35+i*.25)%1)*.6,[x,y]=F0[i];c.setAttribute('cx',(x+(1300-x)*f).toFixed(1));c.setAttribute('cy',(y+(410-y)*f).toFixed(1));c.setAttribute('opacity',p(t,.5,1.5))});
const lb=p(u,TM.lightbulb+1,TM.lightbulb+2);$('bulb').style.fill=lb>.5?'var(--gain)':'var(--stage)';$('glow').setAttribute('opacity',(lb*(.7+.3*Math.sin(t*3))).toFixed(2));

rise($('pat'),p(u,TM.patient,TM.patient+.5));rise($('mach'),p(u,TM.ray_machine,TM.ray_machine+.5));
const bk=p(u,TM.burst,TM.burst+1.2),tip=354+506*bk;$('beam').setAttribute('width',(506*bk).toFixed(1));
CE.forEach(([c,x,b])=>{const on=b&&bk>0&&tip>x;c.setAttribute('class',on?'loss':'ink');c.setAttribute('fill-opacity',on?1:.25)});
rise($('burnT'),p(u,TM.burst+1,TM.burst+1.6));rise($('most'),p(u,TM.burst+5,TM.burst+5.6));

rise($('fort'),p(u,TM.fortress,TM.fortress+.5));rise($('rd'),p(u,TM.roads,TM.roads+.5));rise($('army'),p(u,TM.roads+1,TM.roads+1.5));
const bl=p(u,TM.roads+2.5,TM.roads+3.5);$('blast').setAttribute('r',(10+60*bl).toFixed(1));$('blast').setAttribute('opacity',bl>0&&bl<1?(1-bl).toFixed(2):0);
$('armyX').setAttribute('opacity',p(u,TM.roads+3,TM.roads+3.4));
const gk=p(u,TM.small_groups+.5,TM.small_groups+3);G2.forEach(([g,c,s])=>{const r=280-150*gk;g.setAttribute('transform',`translate(${(800+r*c).toFixed(1)} ${(510+r*s).toFixed(1)})`);g.setAttribute('opacity',p(u,TM.small_groups,TM.small_groups+.5))});
rise($('grpL'),p(u,TM.small_groups+.5,TM.small_groups+1));

rise($('bod3'),p(u,TM.arrows,TM.arrows+.5));rise($('sub3'),p(u,TM.arrows,TM.arrows+.5));
R3.forEach((r,i)=>{const k=p(u,TM.arrows+4.9+i*.15,TM.arrows+5.6+i*.15);r.setAttribute('stroke-dashoffset',(230*(1-k)).toFixed(1))});
$('tum3').setAttribute('opacity',(1-.7*p(u,TM.arrows+6.5,TM.arrows+7.5)).toFixed(2));rise($('ray3L'),p(u,TM.arrows+5.5,TM.arrows+6));
rise($('ice'),p(u,TM.iceberg,TM.iceberg+.5));rise($('under'),p(u,TM.iceberg+3.8,TM.iceberg+4.4));

rise($('sci'),p(u,TM.scientist,TM.scientist+.5));
CD.forEach(([g,s],i)=>{rise(g,p(u,TM.cards+i*.6,TM.cards+i*.6+.5));s.setAttribute('opacity',(1-.75*p(u,TM.web+1,TM.web+2)).toFixed(2))});
W4.forEach((w,i)=>w.setAttribute('opacity',p(u,TM.web+i*.3,TM.web+i*.3+.4)));
rise($('node4'),p(u,TM.web+.8,TM.web+1.3));rise($('deep4'),p(u,TM.web+1.5,TM.web+2.1));

rise($('kep'),p(u,TM.kepler,TM.kepler+.5));rise($('sys'),p(u,TM.planets,TM.planets+.5));
$('pl0').setAttribute('cx',(900+160*Math.cos(t*.9)).toFixed(1));$('pl0').setAttribute('cy',(480+110*Math.sin(t*.9)).toFixed(1));
$('pl1').setAttribute('cx',(900+270*Math.cos(t*.5+2)).toFixed(1));$('pl1').setAttribute('cy',(480+190*Math.sin(t*.5+2)).toFixed(1));
const fc=(t*.6)%1;$('force').setAttribute('r',(50+80*fc).toFixed(1));$('force').setAttribute('opacity',(p(u,TM.magnet,TM.magnet+.5)*(1-fc)).toFixed(2));
C5.forEach((g,i)=>rise(g,p(u,TM.magnet+i*1.4,TM.magnet+i*1.4+.5)));rise($('each5'),p(u,TM.magnet+7,TM.magnet+7.6));

rise($('core6'),p(u,TM.inside_view,TM.inside_view+.5));rise($('sub6'),p(u,TM.inside_view,TM.inside_view+.5));
$('ring6').setAttribute('opacity',p(u,TM.inside_view+.3,TM.inside_view+.8));
const ex6=p(u,TM.outside_view,TM.outside_view+1.2);
$('lens6').setAttribute('opacity',p(u,TM.outside_view,TM.outside_view+.3));$('lens6').setAttribute('r',(110+180*ex6).toFixed(1));
rise($('inL'),p(u,TM.inside_view+7,TM.inside_view+7.5));rise($('outL'),p(u,TM.outside_view+1.2,TM.outside_view+1.7));
U6.forEach((g,i)=>rise(g,p(u,TM.outside_view+.6+i*.2,TM.outside_view+1+i*.2)));rise($('wide6'),p(u,TM.outside_view+5.3,TM.outside_view+5.9));

rise($('t0'),p(u,TM.question,TM.question+.5));$('rings7').setAttribute('opacity',(1-.85*p(u,TM.question+1.5,TM.question+3)).toFixed(2));
rise($('t1'),p(u,TM.map,TM.map+.5));M7.forEach((g,i)=>rise(g,p(u,TM.map+.6+i*.5,TM.map+1+i*.5)));
rise($('t2'),p(u,TM.toolbox,TM.toolbox+.5));
I7.forEach((e,i)=>{const k=p(u,TM.toolbox+.5+i*.5,TM.toolbox+1+i*.5);e.setAttribute('transform',`translate(${1213+i*40} ${(320+235*k).toFixed(1)})`);e.setAttribute('opacity',cl(k*5))});

rise($('qa'),p(u,TM.challenge,TM.challenge+.5));rise($('qb'),p(u,TM.challenge+2.9,TM.challenge+3.4));
rise($('qc'),p(u,TM.challenge+3.3,TM.challenge+3.8));rise($('qd'),p(u,TM.challenge+3.7,TM.challenge+4.2));
rise($('c8'),p(u,TM.challenge,TM.challenge+.5));N8.forEach((g,i)=>rise(g,p(u,TM.challenge+3.5+i*.5,TM.challenge+4+i*.5)));