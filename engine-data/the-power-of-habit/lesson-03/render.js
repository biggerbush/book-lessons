const sb=TM.spray_bottle;
rise($('tbot'),p(u,sb,sb+.5)); fog(M0,p(u,sb+.5,sb+1));
rise($('tgear'),p(u,sb+6.2,sb+6.7)); $('tgr').setAttribute('transform','rotate('+((t*40)%360).toFixed(1)+' 1400 700)');

rise($('p1a'),p(u,TM.pg_lab,TM.pg_lab+.5)); rise($('p1b'),p(u,TM.smelly_couch,TM.smelly_couch+.5));
$('stk1').setAttribute('transform','translate(0 '+(6*Math.sin(t*3)).toFixed(1)+')');
const e1=SC[1][1]/K, fc=Math.min(TM.falling_chart,e1-2.6);
rise($('p1c'),p(u,fc-.6,fc-.1)); draw(C1,p(u,fc,fc+1.2));
const dA=Math.min(TM.falling_chart+.4,e1-1.6);
rise($('dis'),p(u,dA,dA+.4));

rise($('hs'),p(u,TM.cat_house,TM.cat_house+.5));
CG.forEach((g,i)=>rise(g,p(u,TM.cat_house+.4+i*.25,TM.cat_house+.8+i*.25)));
$('stk2').setAttribute('transform','translate(0 '+(6*Math.sin(t*3)).toFixed(1)+')');
rise($('wom'),p(u,TM.shrug_woman,TM.shrug_woman+.5)); rise($('bub2'),p(u,TM.shrug_woman+.8,TM.shrug_woman+1.3));
rise($('nose'),p(u,TM.blind_nose,TM.blind_nose+.5));
const bn=1-p(u,TM.blind_nose+.5,TM.blind_nose+4);
$('mfill').setAttribute('width',(248*bn).toFixed(1)); $('nw').setAttribute('opacity',bn.toFixed(2));
rise($('tuned'),p(u,TM.blind_nose+3.5,TM.blind_nose+4)); rise($('nocue'),p(u,TM.blind_nose+5.3,TM.blind_nose+5.9));

rise($('w3'),p(u,TM.clean_room,TM.clean_room+.5)); rise($('b0'),p(u,TM.clean_room+.6,TM.clean_room+1.1));
rise($('b1'),p(u,TM.made_bed,TM.made_bed+.5)); rise($('b2'),p(u,TM.made_bed+1.5,TM.made_bed+2));
fog(M3,p(u,TM.made_bed+2,TM.made_bed+2.5));
const sp=p(u,TM.sparkle,TM.sparkle+.5); SK.forEach((s,i)=>s.setAttribute('opacity',(sp*(.3+.7*Math.abs(Math.sin(t*3+i)))).toFixed(2)));
rise($('cel1'),p(u,TM.sparkle,TM.sparkle+.5)); rise($('cel2'),p(u,TM.sparkle+1.5,TM.sparkle+2));

rise($('pd'),p(u,TM.perfume_drop,TM.perfume_drop+.5));
const dk=(t%1.6)/1.6; $('drop').setAttribute('transform','translate(260 '+(240+105*dk).toFixed(1)+')');
$('drop').setAttribute('opacity',(p(u,TM.perfume_drop+.5,TM.perfume_drop+.9)*(dk<.8?1:(1-dk)/.2)).toFixed(2));
rise($('ad'),p(u,TM.new_ad,TM.new_ad+.5)); $('air').setAttribute('stroke-dashoffset',(-t*30%20).toFixed(1));
rise($('rc'),p(u,TM.rising_chart-.4,TM.rising_chart)); draw(C4,p(u,TM.rising_chart,TM.rising_chart+1.5));
rise($('succ'),p(u,TM.rising_chart+.8,TM.rising_chart+1.3));

rise($('mk5'),p(u,TM.monkey,TM.monkey+.5)); rise($('st0'),p(u,TM.monkey+1,TM.monkey+1.5)); rise($('st1'),p(u,TM.monkey+2.5,TM.monkey+3));
$('tri').setAttribute('opacity',(.35+.65*Math.abs(Math.sin(t*2))).toFixed(2));
$('lev').setAttribute('transform','rotate('+(-30*Math.max(0,Math.sin(t*3))).toFixed(1)+' 960 505)');
rise($('st2'),p(u,TM.juice_drop,TM.juice_drop+.5));
$('jdrop').setAttribute('transform','translate(1300 '+(420+75*((t%1.4)/1.4)).toFixed(1)+')');
const bx=1300-680*p(u,TM.brain_spark,TM.brain_spark+1.5), pl=1+.12*Math.abs(Math.sin(t*4));
$('spk5').setAttribute('transform','translate('+bx.toFixed(1)+' 290) scale('+pl.toFixed(3)+')');
$('spk5').setAttribute('opacity',p(u,TM.juice_drop+.6,TM.juice_drop+1.1).toFixed(2));
rise($('ant1'),p(u,TM.brain_spark+1.5,TM.brain_spark+2)); rise($('ant2'),p(u,TM.brain_spark+6.2,TM.brain_spark+6.8));

rise($('c0'),p(u,TM.sneakers,TM.sneakers+.5)); rise($('c1'),p(u,TM.sneakers+1.2,TM.sneakers+1.7)); rise($('c2'),p(u,TM.treat,TM.treat+.5));
rise($('arc6'),p(u,TM.anticipation,TM.anticipation+.6));
const k6=(t%2.5)/2.5, q6=1-k6; $('dot6').setAttribute('cx',(q6*q6*1240+2*q6*k6*800+k6*k6*360).toFixed(1)); $('dot6').setAttribute('cy',(q6*q6*540+2*q6*k6*780+k6*k6*540).toFixed(1));
$('dot6').setAttribute('opacity',p(u,TM.anticipation+.6,TM.anticipation+1).toFixed(2));
rise($('exp6'),p(u,TM.anticipation+1,TM.anticipation+1.6));

const s7=SC[7][0]/K;
rise($('q7m'),p(u,s7+.3,s7+.8)); rise($('qa'),p(u,s7+3.4,s7+3.9)); rise($('qb'),p(u,s7+3.8,s7+4.3)); rise($('qc'),p(u,s7+4.2,s7+4.7));
$('q7s').setAttribute('transform','translate(1320 600) scale('+(1+.06*Math.sin(t*3)).toFixed(3)+') rotate('+((t*10)%360).toFixed(1)+')');
$('q7s').setAttribute('opacity',p(u,s7+4.6,s7+5.2).toFixed(2));