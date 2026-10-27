rise($('me'),p(t,.1,.6));
rise($('cw1'),p(u,TM.worry_cloud,TM.worry_cloud+.5)); rise($('cw2'),p(u,TM.worry_cloud+.6,TM.worry_cloud+1.1));
const fl=p(u,TM.worry_cloud+3.8,TM.worry_cloud+7);
$('cd2').setAttribute('transform','translate('+(-20*fl).toFixed(1)+' '+(-110*fl+6*Math.sin(t*2)).toFixed(1)+')'); $('cd2').setAttribute('opacity',(1-fl).toFixed(2));

rise($('cab'),p(u,TM.log_cabin,TM.log_cabin+.5));
$('arc').setAttribute('opacity',(.8*p(u,TM.log_cabin+1.2,TM.log_cabin+1.8)).toFixed(2));
const jp=p(u,TM.log_cabin+1.5,TM.log_cabin+3),jq=1-jp;
$('boy').setAttribute('transform','translate('+(jq*jq*400+2*jq*jp*620+jp*jp*760).toFixed(1)+' '+(jq*jq*345+2*jq*jp*160+jp*jp*760).toFixed(1)+')');
$('boy').setAttribute('opacity',p(u,TM.log_cabin+.3,TM.log_cabin+.8));
rise($('hand'),p(u,TM.ring_nail,TM.ring_nail+.5)); rise($('nr'),p(u,TM.ring_nail+.6,TM.ring_nail+1.1));
$('gone').setAttribute('opacity',((.5+.5*Math.abs(Math.sin(t*2)))*(1-.75*p(u,TM.ring_nail+4.6,TM.ring_nail+6))).toFixed(2));
rise($('hard'),p(u,TM.ring_nail+4.6,TM.ring_nail+5.1)); rise($('adj'),p(u,TM.ring_nail+8.4,TM.ring_nail+9));

rise($('pl'),p(u,TM.car_tire,TM.car_tire+.5));
$('rt').setAttribute('transform','translate(440 '+(420-22*Math.abs(Math.sin(t*4))).toFixed(1)+')');
const ck=p(u,TM.car_tire+5,TM.car_tire+5.6); $('crk').setAttribute('opacity',ck); $('torn').setAttribute('opacity',ck);
rise($('pr'),p(u,TM.soft_tire,TM.soft_tire+.5));
const sq=Math.abs(Math.sin(t*4)); $('st').setAttribute('transform','translate(1160 420)');
$('ste').setAttribute('rx',(80+8*sq).toFixed(1)); $('ste').setAttribute('ry',(80-8*sq).toFixed(1)); $('ste').setAttribute('cy',(8*sq).toFixed(1)); $('sth').setAttribute('cy',(8*sq).toFixed(1));
$('last').setAttribute('opacity',p(u,TM.soft_tire+1,TM.soft_tire+1.5));
rise($('wil'),p(u,TM.willow,TM.willow+.5)); rise($('wtx'),p(u,TM.willow+.8,TM.willow+1.4));
const wd=24+24*Math.sin(t*1.6);
BR.forEach((b,i)=>{const k=i-3;b.setAttribute('d','M'+(300+k*10)+' 690Q'+(300+k*70+wd*.6).toFixed(1)+' 610 '+(300+k*46+wd*1.4).toFixed(1)+' 830')});

rise($('trb'),p(u,TM.two_doors,TM.two_doors+.5)); rise($('dl'),p(u,TM.two_doors+.4,TM.two_doors+.9)); rise($('dr'),p(u,TM.two_doors+.8,TM.two_doors+1.3));
rise($('fix'),p(u,TM.two_doors+2.2,TM.two_doors+2.7)); rise($('free'),p(u,TM.open_hands,TM.open_hands+.5));
const bp=p(u,TM.open_hands+.8,TM.open_hands+3);
$('ball').setAttribute('transform','translate('+(6*Math.sin(t*2)*bp).toFixed(1)+' '+(-70*bp).toFixed(1)+')');
$('ball').setAttribute('opacity',(p(u,TM.open_hands,TM.open_hands+.5)*(1-bp)).toFixed(2));

rise($('chart'),p(u,TM.stock_chart,TM.stock_chart+.5));
const pm=Math.max(1,Math.round(p(u,TM.stock_chart+.5,TM.stock_chart+4)*(PY.length-1))); let ps='';
for(let i=0;i<=pm;i++)ps+=(180+i*45)+','+PY[i]+' '; $('px').setAttribute('points',ps); $('px').setAttribute('opacity',p(u,TM.stock_chart+.3,TM.stock_chart+.6));
rise($('stp'),p(u,TM.stock_chart+1.5,TM.stock_chart+2)); rise($('sold'),p(u,TM.stock_chart+4.2,TM.stock_chart+4.7));
rise($('gauge'),p(u,TM.price_line,TM.price_line+.5));
const gh=250*p(u,TM.price_line+1,TM.price_line+3); $('gf').setAttribute('height',gh.toFixed(1)); $('gf').setAttribute('y',(690-gh).toFixed(1));
rise($('nom'),p(u,TM.price_line+3,TM.price_line+3.5)); rise($('pay'),p(u,TM.price_line+3.4,TM.price_line+4));

rise($('ben'),p(u,TM.young_ben,TM.young_ben+.5)); rise($('scl'),p(u,TM.young_ben+.8,TM.young_ben+1.3));
COIN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.coin_pile+i*.25,TM.coin_pile+i*.25+.2)));
const an=(-6+18*p(u,TM.coin_pile,TM.coin_pile+3))*Math.PI/180,bc=260*Math.cos(an),bs=260*Math.sin(an);
$('bm').setAttribute('x1',(820-bc).toFixed(1)); $('bm').setAttribute('y1',(360-bs).toFixed(1)); $('bm').setAttribute('x2',(820+bc).toFixed(1)); $('bm').setAttribute('y2',(360+bs).toFixed(1));
$('pnL').setAttribute('transform','translate('+(820-bc).toFixed(1)+' '+(360-bs).toFixed(1)+')'); $('pnR').setAttribute('transform','translate('+(820+bc).toFixed(1)+' '+(360+bs).toFixed(1)+')');
[0,1,2].forEach(i=>rise($('f'+i),p(u,TM.coin_pile+5+i*.5,TM.coin_pile+5.5+i*.5))); rise($('over'),p(u,TM.coin_pile+6.5,TM.coin_pile+7.1));

// spilt milk: bottle knocked from the desk, tips over the sink rim, milk pours and swirls down the drain
rise($('desk'),p(u,TM.milk_bottle,TM.milk_bottle+.5)); rise($('snk'),p(u,TM.milk_bottle+.4,TM.milk_bottle+.9)); rise($('btw'),p(u,TM.milk_bottle+.8,TM.milk_bottle+1.3));
const kn=p(u,TM.milk_bottle+3.5,TM.milk_bottle+5);
const bx=590+(691-590)*kn, by=520+(405-520)*kn-60*Math.sin(Math.PI*kn);
$('bt').setAttribute('transform','translate('+bx.toFixed(1)+' '+by.toFixed(1)+') rotate('+(115*kn).toFixed(1)+')');
$('bcap').setAttribute('opacity',(1-p(u,TM.milk_bottle+4.4,TM.milk_bottle+4.8)).toFixed(2));
const sOn=p(u,TM.milk_bottle+5,TM.milk_bottle+5.6), sOff=p(u,TM.sink_drain+1.5,TM.sink_drain+2);
const so=(300*(1-sOn)).toFixed(1), sop=(sOn*(1-sOff)).toFixed(2);
['strO','strI'].forEach(id=>{$(id).setAttribute('stroke-dashoffset',so); $(id).setAttribute('opacity',sop)});
const mh=104*(1-.8*p(u,TM.milk_bottle+5,TM.sink_drain+2)); $('bmilk').setAttribute('height',mh.toFixed(1)); $('bmilk').setAttribute('y',(-8-mh).toFixed(1));
const pk=p(u,TM.milk_bottle+5.3,TM.milk_bottle+7)*(1-p(u,TM.sink_drain,TM.sink_drain+3.5));
$('pud').setAttribute('rx',(130*pk).toFixed(1)); $('pud').setAttribute('ry',(14*pk).toFixed(1));
$('swl').setAttribute('transform','translate(980 684) scale('+pk.toFixed(3)+' '+(.11*pk).toFixed(3)+') rotate('+((t*140)%360).toFixed(1)+')');
$('swl').setAttribute('opacity',(pk>.02?1:0));
$('pipeflow').setAttribute('stroke-dashoffset',(-(t*40)%14).toFixed(1));
$('pipeflow').setAttribute('opacity',(p(u,TM.sink_drain,TM.sink_drain+.4)*(1-p(u,TM.sink_drain+3.2,TM.sink_drain+3.6))).toFixed(2));
rise($('pt'),p(u,TM.sink_drain+2.6,TM.sink_drain+3.1)); rise($('nod'),p(u,TM.sink_drain+4.4,TM.sink_drain+5));

rise($('wood'),p(u,TM.saw_wood,TM.saw_wood+.5));
$('saw1').setAttribute('transform','translate('+(40*Math.sin(t*6)).toFixed(1)+' 0)');
rise($('kids'),p(u,TM.saw_wood+3,TM.saw_wood+3.5));
$('arms').setAttribute('opacity',(p(u,TM.saw_wood+6.2,TM.saw_wood+6.6)*(1-p(u,TM.sawdust,TM.sawdust+.4))).toFixed(2));
rise($('dust'),p(u,TM.sawdust,TM.sawdust+.5)); rise($('nx'),p(u,TM.sawdust+3.8,TM.sawdust+4.3)); rise($('rep'),p(u,TM.sawdust+6.8,TM.sawdust+7.4));

rise($('qa'),p(u,TM.stop_sign,TM.stop_sign+.5)); rise($('qb'),p(u,TM.stop_sign+1.2,TM.stop_sign+1.7));
rise($('qc'),p(u,TM.stop_sign+4.6,TM.stop_sign+5.1)); rise($('qd'),p(u,TM.stop_sign+5.2,TM.stop_sign+5.7));
rise($('sgw'),p(u,TM.stop_sign+.6,TM.stop_sign+1.1));
$('sg').setAttribute('transform','translate(1300 520) rotate('+(-25*(1-p(u,TM.stop_sign+.6,TM.stop_sign+1.4))).toFixed(1)+')');