rise($('carrotW'),p(u,TM.golden_carrot,TM.golden_carrot+.6));
$('carrot').setAttribute('transform','rotate('+(8*Math.sin(t*1.6)).toFixed(2)+' 1400 250)');
const q0=mid(TM.golden_carrot,TM.checklist,.57); rise($('t_q'),p(u,q0,q0+.5));

rise($('pA'),p(u,TM.checklist,TM.checklist+.5));
CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.checklist+.8+i*.6,TM.checklist+1.1+i*.6)));
rise($('path1'),p(u,TM.checklist+3.2,TM.checklist+3.7));
rise($('belt'),p(u,TM.assembly_line,TM.assembly_line+.5)); $('boxes').setAttribute('opacity',p(u,TM.assembly_line,TM.assembly_line+.5));
BXS.forEach((b,i)=>b.setAttribute('x',(160+((t*90+i*126)%504)).toFixed(1)));
rise($('pB'),p(u,TM.maze_map,TM.maze_map+.5));
$('sol').setAttribute('stroke-dashoffset',(980*(1-p(u,TM.maze_map+.6,TM.maze_map+3.5))).toFixed(1));

rise($('tbl'),p(u,TM.candle_table,TM.candle_table+.6));
rise($('wall'),p(u,TM.cork_wall,TM.cork_wall+.5)); rise($('ask'),p(u,TM.cork_wall+1,TM.cork_wall+1.5));
const f2=mid(TM.cork_wall,TM.empty_box,.57); rise($('fail'),p(u,f2,f2+.6));
DR.forEach((d,i)=>{const k=((t*90+(i%3)*43)%120); d.setAttribute('cy',((i<3?470:486)+k).toFixed(1)); d.setAttribute('opacity',(1-k/120).toFixed(2))});

const e3=p(u,TM.empty_box+.3,TM.empty_box+1.3);
TK.forEach((c,i)=>{c.setAttribute('cx',L(T0[i][0],T1[i][0],e3).toFixed(1));c.setAttribute('cy',(L(T0[i][1],T1[i][1],e3)-70*Math.sin(Math.PI*e3)).toFixed(1))});
const m3=p(u,TM.empty_box+1.5,TM.empty_box+3);
$('bx').setAttribute('transform','translate('+L(220,970,m3).toFixed(1)+' '+(L(660,470,m3)-90*Math.sin(Math.PI*m3)).toFixed(1)+')');
$('pins').setAttribute('opacity',p(u,TM.empty_box+3,TM.empty_box+3.4));
const c3=p(u,TM.candle_shelf,TM.candle_shelf+1.5);
$('cdl').setAttribute('transform','translate('+L(520,1030,c3).toFixed(1)+' '+(L(600,330,c3)-60*Math.sin(Math.PI*c3)).toFixed(1)+')');
rise($('shl'),p(u,TM.candle_shelf+1.4,TM.candle_shelf+1.9));
const h3=mid(TM.candle_shelf,TM.scientist,.47); rise($('hard'),p(u,h3,h3+.6));

rise($('sci'),p(u,TM.scientist,TM.scientist+.5));
rise($('gA'),p(u,TM.stopwatch,TM.stopwatch+.5));
$('hand').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 1300 370)');
rise($('gB'),p(u,TM.cash_stack,TM.cash_stack+.5));
CS.forEach((g,i)=>rise(g,p(u,TM.cash_stack+.6+i*.3,TM.cash_stack+.9+i*.3)));

$('b1').setAttribute('width',(480*p(u,TM.bar_chart,TM.bar_chart+1.2)).toFixed(1));
$('b2').setAttribute('width',(880*p(u,TM.bar_chart+.4,TM.bar_chart+2.2)).toFixed(1));
$('dl').setAttribute('opacity',p(u,TM.bar_chart+1.2,TM.bar_chart+1.6));
rise($('brk'),p(u,TM.bar_chart+2.2,TM.bar_chart+2.7));
const s5=mid(TM.bar_chart,TM.blinkers,.66); rise($('shp'),p(u,s5,s5+.5));
rise($('blk'),p(u,TM.blinkers,TM.blinkers+.6)); rise($('nar'),p(u,TM.blinkers+1,TM.blinkers+1.6));

rise($('lt'),p(u,TM.loose_tacks,TM.loose_tacks+.5));
LT.forEach((c,i)=>{const k=p(u,TM.loose_tacks+.4+i*.15,TM.loose_tacks+.9+i*.15); c.setAttribute('cy',(588-160*(1-k)).toFixed(1)); c.setAttribute('opacity',k)});
const r6=mid(TM.loose_tacks,TM.finish_flag,.5); rise($('rtn'),p(u,r6,r6+.5));
rise($('race'),p(u,TM.finish_flag,TM.finish_flag+.4));
// bar length = time taken (same encoding as scene 5): cash bar stops sooner and shorter
$('r1').setAttribute('width',(620*p(u,TM.finish_flag+.3,TM.finish_flag+2.3)).toFixed(1));
$('r2').setAttribute('width',(434*p(u,TM.finish_flag+.3,TM.finish_flag+1.7)).toFixed(1));
rise($('fstr'),p(u,TM.finish_flag+1.7,TM.finish_flag+2.1));
rise($('fst'),p(u,TM.finish_flag+2.2,TM.finish_flag+2.7));

rise($('c7_0'),p(u,TM.if_then_sign,TM.if_then_sign+.5));
rise($('c7_1'),p(u,TM.lightbulb,TM.lightbulb+.5));
$('glow').setAttribute('opacity',(1-.75*p(u,TM.lightbulb+.6,TM.lightbulb+1.6)+.05*Math.sin(t*9)).toFixed(2));
rise($('c7_2'),p(u,TM.gift_box,TM.gift_box+.5));
const g7=p(u,TM.gift_box+.8,TM.gift_box+1.4);
$('lid').setAttribute('transform','translate(0 '+(-(34+6*Math.sin(t*3))*g7).toFixed(1)+')');
$('spk').setAttribute('opacity',g7);

const S8=SC[8][0]/K, E8=SC[8][1]/K, Q8=mid(S8,E8,.38);
rise($('q8l'),p(u,S8+.4,S8+.9)); rise($('q8g'),p(u,S8+.6,S8+1.1));
rise($('qa'),p(u,Q8,Q8+.5)); rise($('qb'),p(u,Q8+.4,Q8+.9)); rise($('qc'),p(u,Q8+.8,Q8+1.3));
const cf=p(u,Q8+1.4,Q8+2.4);
$('q8s').setAttribute('opacity',(1-cf).toFixed(2));
$('q8c').setAttribute('transform','translate(0 '+(40*cf).toFixed(1)+') rotate('+(25*cf).toFixed(1)+' 1440 700)');