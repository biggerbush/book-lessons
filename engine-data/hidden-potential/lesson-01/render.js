const fA=.5+.08*p(u,TM.climber+1,TM.climber+4),fB=.85*p(u,TM.climber+1,TM.climber+5);
$('tA').setAttribute('cx',(1082+200*fA).toFixed(1));$('tA').setAttribute('cy',(711-420*fA).toFixed(1));
$('tB').setAttribute('cx',(1459-140*fB).toFixed(1));$('tB').setAttribute('cy',(714-420*fB).toFixed(1));
rise($('tlab'),p(u,TM.climber,TM.climber+.5));

rise($('rc'),p(u,TM.report_card,TM.report_card+.5));RW.forEach((g,i)=>rise(g,p(u,TM.report_card+.5+i*.3,TM.report_card+.8+i*.3)));
rise($('vf'),p(u,TM.star_kid,TM.star_kid+.4));rise($('kA'),p(u,TM.star_kid+.3,TM.star_kid+.8));
$('kAs').setAttribute('opacity',(.75+.25*Math.sin(t*3)).toFixed(2));
rise($('kB'),p(u,TM.slow_kid,TM.slow_kid+.5));$('kBf').setAttribute('opacity',(1-.65*p(u,TM.slow_kid+1.2,TM.slow_kid+2.2)).toFixed(2));
rise($('kBt'),p(u,TM.slow_kid+1.4,TM.slow_kid+1.9));rise($('fool'),p(u,TM.slow_kid+4.3,TM.slow_kid+4.9));

rise($('mt'),p(u,TM.mountain,TM.mountain+.6));rise($('camp'),p(u,TM.base_camp,TM.base_camp+.5));
const tk=p(u,TM.base_camp+.6,TM.summit_flag+.4);TR.forEach((c,i)=>c.setAttribute('opacity',i<tk*TR.length?1:0));
rise($('flag'),p(u,TM.summit_flag,TM.summit_flag+.5));rise($('dist'),p(u,TM.summit_flag+4.5,TM.summit_flag+5.1));

rise($('gA'),p(u,TM.climber_a,TM.climber_a+.5));rise($('gB'),p(u,TM.climber_b,TM.climber_b+.5));
const k3=p(u,TM.trail_line,TM.trail_line+2.5);
const a0=slopePt(LB,LT,A0,GAP),aN=slopePt(LB,LT,A0+(A1-A0)*k3,GAP),aC=slopePt(LB,LT,A0+(A1-A0)*k3,GAP+LIFT);
const b0=slopePt(RB,RT,B0,GAP),bN=slopePt(RB,RT,B0+(B1-B0)*k3,GAP),bC=slopePt(RB,RT,B0+(B1-B0)*k3,GAP+LIFT);
$('lA').setAttribute('x1',a0[0].toFixed(1));$('lA').setAttribute('y1',a0[1].toFixed(1));$('lA').setAttribute('x2',aN[0].toFixed(1));$('lA').setAttribute('y2',aN[1].toFixed(1));
$('cA').setAttribute('cx',aC[0].toFixed(1));$('cA').setAttribute('cy',Math.min(GROUND-20,aC[1]).toFixed(1));
$('lB').setAttribute('x1',b0[0].toFixed(1));$('lB').setAttribute('y1',b0[1].toFixed(1));$('lB').setAttribute('x2',bN[0].toFixed(1));$('lB').setAttribute('y2',bN[1].toFixed(1));
$('cB').setAttribute('cx',bC[0].toFixed(1));$('cB').setAttribute('cy',Math.min(GROUND-20,bC[1]).toFixed(1));
rise($('dl'),p(u,TM.trail_line+2.6,TM.trail_line+3.2));rise($('clm'),p(u,TM.trail_line+7,TM.trail_line+7.6));

rise($('bl'),p(u,TM.bloom,TM.bloom+.5));CD.forEach((g,i)=>rise(g,p(u,TM.performers+i*.8,TM.performers+i*.8+.5)));
PL.forEach((g,i)=>rise(g,p(u,TM.child_photo+i*.4,TM.child_photo+i*.4+.5)));AR.forEach((a,i)=>a.setAttribute('opacity',p(u,TM.child_photo+5+i*.3,TM.child_photo+5.5+i*.3)));
rise($('grow'),p(u,TM.child_photo+5,TM.child_photo+5.6));

rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5));const a5=t*4;$('swh').setAttribute('x2',(320+90*Math.sin(a5)).toFixed(1));$('swh').setAttribute('y2',(440-90*Math.cos(a5)).toFixed(1));
rise($('sd'),p(u,TM.seedling,TM.seedling+.5));const h5=40+140*p(u,TM.seedling+.3,TM.seedling+8);
$('sdst').setAttribute('d','M800 560V'+(560-h5).toFixed(1));$('sdl').setAttribute('transform','translate(800 '+(560-h5).toFixed(1)+')');
rise($('mg'),p(u,TM.magnifier,TM.magnifier+.5));const q5=(t*.2)%1;$('mgl').setAttribute('transform','translate('+(1160+240*q5).toFixed(1)+' '+(560-190*q5).toFixed(1)+')');
rise($('watch'),p(u,TM.magnifier+3,TM.magnifier+3.6));

rise($('tb'),p(u,TM.toolbox,TM.toolbox+.5));$('tbr').setAttribute('fill',u>=TM.habits?'var(--gain)':'var(--stage)');
rise($('hl'),p(u,TM.habits+.3,TM.habits+.8));rise($('gf'),p(u,TM.habits+.6,TM.habits+1.1));
rise($('sc'),p(u,TM.support,TM.support+.5));const cy6=(560-240*p(u,TM.support+.5,TM.support+3.5)).toFixed(1);
$('cl3').setAttribute('cy',cy6);['rA','rB'].forEach(r=>{$(r).setAttribute('x2',1100);$(r).setAttribute('y2',cy6)});
rise($('later'),p(u,TM.support+4.2,TM.support+4.8));

rise($('mir'),p(u,TM.mirror,TM.mirror+.5));rise($('mid'),p(u,TM.old_photo,TM.old_photo+.5));rise($('stamp'),p(u,TM.old_photo+2.2,TM.old_photo+2.6));
rise($('chart'),p(u,TM.growth_chart,TM.growth_chart+.5));const h7=300*p(u,TM.growth_chart+.4,TM.growth_chart+1.6);
$('bar2').setAttribute('y',(640-h7).toFixed(1));$('bar2').setAttribute('height',h7.toFixed(1));
rise($('garr'),p(u,TM.growth_chart+1.6,TM.growth_chart+2.1));rise($('bench'),p(u,TM.growth_chart+4.2,TM.growth_chart+4.8));

const s8=SC[8][0]/K;rise($('qa'),p(u,s8+.4,s8+.9));rise($('qb'),p(u,s8+.8,s8+1.3));rise($('qc'),p(u,s8+1.2,s8+1.7));
rise($('stp'),p(u,s8+1.6,s8+2.1));const k8=Math.min(3,Math.floor((Math.max(0,u-s8-2)*.8)%5));
$('sdot').setAttribute('cx',1200+80*k8);$('sdot').setAttribute('cy',618-70*k8);rise($('chal'),p(u,s8+5,s8+5.6));