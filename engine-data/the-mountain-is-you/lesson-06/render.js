const D=TM.future_door,o0=p(u,D,D+1.6);
$('dpanel').setAttribute('width',(180-144*o0).toFixed(1));
$('tYou').setAttribute('transform','translate('+(1060+90*p(u,D+1.2,D+3.2)).toFixed(1)+' 0)');
$('tHalo').setAttribute('opacity',(p(u,D+5.2,D+6)*(.6+.4*Math.sin(t*2))).toFixed(2));

const Q=TM.quiet_chair;rise($('chair'),p(u,Q,Q+.5));rise($('breath'),p(u,Q+2.6,Q+3.2));
BR.forEach((c,i)=>{const f=(t*.35+i*.5)%1;c.setAttribute('r',(46+60*f).toFixed(1));c.setAttribute('stroke-opacity',(1-f).toFixed(2))});
const A=TM.path_ahead;rise($('pathG'),p(u,A,A+.5));
const wp=T1.getPointAtLength(L1*p(u,A+.4,A+4.6));$('walk').setAttribute('transform','translate('+wp.x.toFixed(1)+' '+wp.y.toFixed(1)+')');$('walk').setAttribute('opacity',p(u,A,A+.4));
const O=TM.older_you;rise($('old'),p(u,O,O+.6));[0,1,2].forEach(i=>rise($('ol'+i),p(u,O+.8+i*1.2,O+1.3+i*1.2)));

const W=TM.worry_cloud;rise($('bub'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
rise($('cloudG'),p(u,W-.4,W+.1));rise($('ans'),p(u,W,W+.5));
$('cloudX').setAttribute('opacity',p(u,W+.6,W+1.1).toFixed(2));
rise($('ans2'),p(u,W+1.6,W+2.1));
const sc=1-.5*p(u,W+5.3,W+6.5);$('cloudS').setAttribute('transform','translate(300 300) scale('+sc.toFixed(3)+') translate(-300 -300)');
rise($('kind'),p(u,W+5.3,W+5.9));

const X=TM.two_arrows;rise($('roads'),p(u,TM.crossroads,TM.crossroads+.5));rise($('arrL'),p(u,X,X+.5));rise($('arrR'),p(u,X+.5,X+1));rise($('ask3'),p(u,X+1,X+1.6));
const wa=p(u,TM.crossroads+.8,TM.crossroads+2.5),wb=p(u,X+4.6,X+6.2);
$('w3').setAttribute('cx',(800+240*wb).toFixed(1));$('w3').setAttribute('cy',(790-230*wa-220*wb).toFixed(1));$('w3').setAttribute('class',wb>0?'gain':'ink');$('w3').setAttribute('opacity',p(u,TM.crossroads+.5,TM.crossroads+.9));
rise($('doit'),p(u,X+4.6,X+5.2));

const G=TM.giant_leap,B=TM.alarm_bell,S=TM.snap_back;rise($('bigR'),p(u,G,G+.5));
const js=p(u,G+1,G+3.5)-p(u,S+.4,S+1.8),jx=(1-js)*(1-js)*340+2*js*(1-js)*730+js*js*1120,jy=(1-js)*(1-js)*600+2*js*(1-js)*200+js*js*600-26;
$('jmp').setAttribute('cx',jx.toFixed(1));$('jmp').setAttribute('cy',jy.toFixed(1));
$('rope').setAttribute('x2',jx.toFixed(1));$('rope').setAttribute('y2',jy.toFixed(1));$('rope').setAttribute('opacity',p(u,B+1.5,B+2.2));
rise($('alarm'),p(u,B,B+.5));$('bellR').setAttribute('transform','rotate('+(u>=B&&u<S+2?14*Math.sin(t*16):0).toFixed(1)+' 800 212)');
rise($('snap'),p(u,S,S+.6));

const Y=TM.stair_climb;rise($('c1'),p(u,TM.water_glass,TM.water_glass+.5));rise($('c2'),p(u,TM.water_glass+3.5,TM.water_glass+4));
ST.forEach((r,i)=>r.setAttribute('fill',(i===0&&u>=TM.tiny_step)||u>=Y+i*.35?'var(--gain)':'var(--line)'));
const sf=11*p(u,Y,Y+4.2),si=Math.min(10,Math.floor(sf)),sr=sf-si;
$('clb').setAttribute('cx',(655+(si+sr)*70).toFixed(1));$('clb').setAttribute('cy',(780-(si+1)*36-18-sr*36-18*Math.sin(sr*Math.PI)).toFixed(1));$('clb').setAttribute('opacity',p(u,TM.tiny_step,TM.tiny_step+.5));
rise($('safe'),p(u,TM.tiny_step+.5,TM.tiny_step+1));rise($('newT'),p(u,Y+3.5,Y+4));

const Z=TM.comfort_zone,N=TM.next_step;
TK.forEach((k,i)=>k.setAttribute('opacity',p(u,TM.calendar+.3+i*.12,TM.calendar+.5+i*.12)));
$('zone').setAttribute('r',(140+140*p(u,Z+.8,Z+3)+60*p(u,N+1.5,N+3.5)).toFixed(1));
rise($('md1'),p(u,Z,Z+.5));rise($('md2'),p(u,N,N+.5));rise($('eff'),p(u,Z+3,Z+3.6));

rise($('mirrorG'),p(u,TM.mirror,TM.mirror+.6));
const g7=p(u,TM.two_selves,TM.two_selves+4),d7=340*g7;
$('me7').setAttribute('transform','translate('+d7.toFixed(1)+' 0)');$('me7').setAttribute('fill',g7>.98?'var(--gain)':'var(--ink)');
$('gapL').setAttribute('x1',(361+d7).toFixed(1));$('gapT').setAttribute('x',((1151+d7)/2).toFixed(1));$('gap').setAttribute('opacity',(p(u,TM.mirror+1,TM.mirror+1.6)*(1-g7)).toFixed(2));
const M=TM.mountain_top,k7=p(u,M+.5,M+4);rise($('mtn'),p(u,M,M+.5));
T7.setAttribute('stroke-dashoffset',(L7*(1-k7)).toFixed(1));const q7=T7.getPointAtLength(L7*k7);
$('c7').setAttribute('cx',q7.x.toFixed(1));$('c7').setAttribute('cy',q7.y.toFixed(1));$('c7').setAttribute('opacity',p(u,M+.5,M+.8));
rise($('ord'),p(u,M+1,M+1.6));

const s8=SC[8][0]/K,e8=SC[8][1]/K;
rise($('qa'),p(u,s8+.4,s8+.9));rise($('qb'),p(u,s8+.8,s8+1.3));rise($('qc'),p(u,s8+1.2,s8+1.7));
rise($('sun'),p(u,s8+1.6,s8+2.3));$('rays').setAttribute('opacity',(.6+.4*Math.sin(t*2)).toFixed(2));
rise($('lab8'),p(u,s8+(e8-s8)*.62,s8+(e8-s8)*.62+.6));