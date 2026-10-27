rise($('tCloud'),p(u,TM.title_card,TM.title_card+.5));
[0,1,2].forEach(i=>{const e=$('tq'+i);rise(e,p(u,TM.title_card+.4+i*.3,TM.title_card+.9+i*.3));e.setAttribute('y',(390+8*Math.sin(t*2+i)).toFixed(1))});

const M=TM.mind_puzzle; rise($('pz'),p(u,M,M+.5)); rise($('mind'),p(u,M+.3,M+.8));
const gk=p(u,M+3,M+3.8); $('guess').setAttribute('opacity',gk); $('guess').setAttribute('transform','translate(0 '+(-140*(1-gk)).toFixed(1)+')');
const fl=u>=M+3.4; $('mindQ').textContent=fl?'!':'?'; $('mindQ').style.fill=fl?'var(--loss)':'var(--ink)';
SB.forEach((g,i)=>rise(g,p(u,TM.speech_bubble+i*.8,TM.speech_bubble+i*.8+.5)));
rise($('stamp'),p(u,TM.stamp_true,TM.stamp_true+.3)); rise($('forgot'),p(u,TM.stamp_true+.6,TM.stamp_true+1.2));

rise($('mall'),p(u,TM.shopping_mall,TM.shopping_mall+.5)); rise($('stranger'),p(u,TM.stranger,TM.stranger+.5));
const sm=p(u,TM.stranger+4.5,TM.stranger+5); $('smile').setAttribute('opacity',sm); $('spark').setAttribute('opacity',sm); $('spark').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
const TC=TM.thought_cloud; rise($('cloud2'),p(u,TC,TC+.5));
[TC+.8,TC+5,TC+6].forEach((a,i)=>rise($('ri'+i),p(u,a,a+.5)));
const nh=u>=TC+8; $('cl2').setAttribute('stroke-dasharray',nh?'14 12':'none'); $('cl2').setAttribute('stroke',nh?'var(--loss)':'var(--ink)');
rise($('none'),p(u,TC+8,TC+8.6));

const B=TM.broken_heart, br=p(u,B+1.2,B+2); rise($('heartW'),p(u,B,B+.5));
$('hL').setAttribute('transform',`translate(${(400-36*br).toFixed(1)} ${(470+10*br).toFixed(1)}) rotate(${(-10*br).toFixed(1)}) scale(1.6)`);
$('hR').setAttribute('transform',`translate(${(400+36*br).toFixed(1)} ${(470+10*br).toFixed(1)}) rotate(${(10*br).toFixed(1)}) scale(1.6)`);
['hLp','hRp'].forEach(k=>$(k).style.fill=br>0?'var(--loss)':'var(--gain)');
rise($('betray'),p(u,B+3.4,B+4));
const BF=TM.blame_finger; rise($('blame'),p(u,BF,BF+.5));
$('bolts').setAttribute('opacity',(p(u,BF+.8,BF+1.2)*(.6+.4*Math.abs(Math.sin(t*6)))).toFixed(2));
PL.forEach((g,i)=>rise(g,p(u,BF+.6+i*.6,BF+1.1+i*.6))); rise($('suffer'),p(u,BF+5,BF+5.6));

const C=TM.couple_sofa, D=TM.closed_door; rise($('sofa'),p(u,C,C+.5)); rise($('wishA'),p(u,C+2.6,C+3.1));
rise($('door'),p(u,D,D+.4)); const pw=40+212*p(u,D+.4,D+1.3); $('panel').setAttribute('width',pw.toFixed(1)); $('knob').setAttribute('cx',(1064+pw-22).toFixed(1));
FA.forEach(e=>e.setAttribute('class',u>=D+1?'loss':'ink')); rise($('upset'),p(u,D+1,D+1.5));
rise($('never'),p(u,D+4.6,D+5.1)); rise($('dreamB'),p(u,D+6.8,D+7.3));

const S=TM.scale; rise($('mirrorG'),p(u,TM.mirror,TM.mirror+.5)); rise($('gauge'),p(u,S,S+.5));
let th=60*p(u,S+.5,S+1.3)-120*p(u,S+2.2,S+3.2); const wb=p(u,S+4.2,S+5); th=th*(1-wb)+wb*55*Math.sin(t*1.6);
$('needle').setAttribute('transform','rotate('+th.toFixed(1)+' 1150 620)'); $('needle').setAttribute('stroke',Math.abs(th)<8?'var(--gain)':'var(--loss)');
const sc=1+th/60*.35; $('refl').setAttribute('transform',`translate(640 480) scale(${sc.toFixed(3)}) translate(-640 -480)`);
RF.forEach(e=>e.setAttribute('class',Math.abs(th)>10?'loss':'ink')); rise($('falsep'),p(u,S+4.2,S+4.8));

const Q=TM.question_mark, CL=TM.clear_sky, s6=SC[6][0]/K; rise($('qmark'),p(u,Q,Q+.5));
AK.forEach((g,i)=>rise(g,p(u,Q+3.4+i*.5,Q+3.8+i*.5))); rise($('askL'),p(u,Q+4.5,Q+5));
rise($('badge'),p(u,TM.courage_badge,TM.courage_badge+.5)); rise($('safer'),p(u,TM.courage_badge+1.5,TM.courage_badge+2));
const cs=p(u,CL,CL+1.2); $('storm').setAttribute('opacity',(p(u,s6+.3,s6+1)*(1-cs)).toFixed(2)); $('storm').setAttribute('transform','translate(0 '+(-40*cs).toFixed(1)+')');
rise($('sun'),p(u,CL+.4,CL+1.2)); $('rays').setAttribute('transform','rotate('+(t*15%360).toFixed(1)+' 1180 430)');
rise($('dissolve'),p(u,CL+.8,CL+1.4));

const O=TM.open_mouth, H=TM.handshake, mv=p(u,H,H+1.2);
rise($('bA'),p(u,O,O+.5)); bAd.setAttribute('opacity',1-p(u,O+3,O+3.3)); rise(bAt,p(u,O+3,O+3.5));
$('pA').setAttribute('transform','translate('+(160*mv).toFixed(1)+' 0)'); $('pB').setAttribute('transform','translate('+(-160*mv).toFixed(1)+' 0)');
QS.forEach((q,i)=>{q.setAttribute('opacity',(1-p(u,H+i*.08,H+i*.08+.6)).toFixed(2)); q.setAttribute('y',(420+Math.floor(i/4)*90+(i%2)*20+6*Math.sin(t*2+i)).toFixed(1))});
const ax=410+160*mv, bx=1190-160*mv, ao=p(u,H+1,H+1.4);
$('arms').setAttribute('d',`M${ax.toFixed(1)} 560Q800 600 ${bx.toFixed(1)} 560`); $('arms').setAttribute('opacity',ao);
$('clasp').setAttribute('cx',800); $('clasp').setAttribute('cy',580); $('clasp').setAttribute('opacity',ao);
rise($('bB'),p(u,H+.6,H+1.1)); rise($('change'),p(u,H+4.5,H+5.1));

const CA=TM.calendar; rise($('qa'),p(u,CA,CA+.5)); rise($('qb'),p(u,CA+.5,CA+1)); rise($('cal'),p(u,CA+.3,CA+.9));
rise($('qc'),p(u,CA+4.1,CA+4.6)); rise($('qlab'),p(u,CA+4.6,CA+5.1));
$('cell').setAttribute('opacity',(.6+.4*Math.sin(t*3)).toFixed(2));