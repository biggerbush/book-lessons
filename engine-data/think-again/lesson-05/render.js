orb(TA,1300,440,130,60,t*.9);orb(TB,1300,440,130,60,t*.9+Math.PI);
rise($('tdance'),p(u,TM.hook,TM.hook+.6));rise($('secret'),p(u,TM.hook+6.2,TM.hook+6.7));$('secret').setAttribute('r',(12+3*Math.sin(t*3)).toFixed(1));

rise($('fighters'),p(u,TM.two_fighters,TM.two_fighters+.5));rise($('arrows'),p(u,TM.arrows,TM.arrows+.5));rise($('l1'),p(u,TM.arrows,TM.arrows+.5));
const end=u>=TM.wall?1010:1170;
AR.forEach((a,i)=>{const s=(t*380+i*157)%(end-380);a.setAttribute('transform',`translate(${(380+s).toFixed(1)} ${370+i*32})`);a.setAttribute('opacity',(1-cl((s-(end-460))/80)).toFixed(2))});
BR.forEach((b,i)=>{const a=TM.wall+Math.floor(i/2)*.15;b.setAttribute('opacity',p(u,a,a+.3))});
rise($('l2'),p(u,TM.wall+.6,TM.wall+1.1));rise($('cap1'),p(u,TM.wall+1,TM.wall+1.6));

rise($('stg'),p(u,TM.stage,TM.stage+.5));rise($('robot'),p(u,TM.robot,TM.robot+.5));
DOC.forEach((d,i)=>{const a=TM.robot+.4+i*.2;rise(d,p(u,a,a+.3))});
rise($('card'),p(u,TM.topic_card,TM.topic_card+.5));rise($('tags'),p(u,TM.topic_card+3.3,TM.topic_card+3.8));

rise($('h3'),p(u,TM.harish,TM.harish+.5));rise($('bub'),p(u,TM.handshake,TM.handshake+.5));rise($('fair'),p(u,TM.handshake+5.4,TM.handshake+5.9));
rise($('aud'),p(u,TM.audience,TM.audience+.5));
const mv=p(u,TM.audience+.6,TM.audience+2.4);
MV.forEach((c,i)=>{const k=cl((mv-i*.08)/.76);c.setAttribute('cx',(1230+i*60-320*k).toFixed(1));c.setAttribute('class',k>.5?'gain':'ink')});
rise($('cap3'),p(u,TM.audience+1,TM.audience+1.6));

rise($('tbl'),p(u,TM.table,TM.table+.5));rise($('mag'),p(u,TM.magnifier,TM.magnifier+.5));
$('magp').setAttribute('transform',`translate(${(300+60*Math.sin(t*.9)).toFixed(1)} 272)`);
rise($('vn'),p(u,TM.venn,TM.venn+.5));$('lens').setAttribute('opacity',p(u,TM.venn+.6,TM.venn+1.6));
rise($('cg'),p(u,TM.venn+1,TM.venn+1.5));rise($('cap4'),p(u,TM.venn+4.2,TM.venn+4.8));

rise($('lbl5'),p(u,TM.scale,TM.scale+.5));bar(SB,360,p(u,TM.scale,TM.scale+.8));
let sh=360,n=1;WB.forEach((r,i)=>{const a=TM.weak_reason+i*.5,k=p(u,a,a+.5);bar(r,WH[i],k);sh+=WH[i]*k;n+=k});
const ay=(700-sh/n).toFixed(1);$('avg').setAttribute('d',`M160 ${ay}H740`);$('avgT').setAttribute('y',ay-12);
$('avgG').setAttribute('opacity',p(u,TM.scale+.6,TM.scale+1.1));
const dis=p(u,TM.weak_reason+4.6,TM.weak_reason+5.2);SB.setAttribute('opacity',(1-.6*dis).toFixed(2));
WB[3].setAttribute('stroke',dis>0?'var(--ink)':'none');WB[3].setAttribute('stroke-width',(4+3*Math.abs(Math.sin(t*4))).toFixed(1));rise($('shk'),dis);
rise($('rp'),p(u,TM.gold_coin,TM.gold_coin+.5));RB.forEach((r,i)=>{const a=TM.gold_coin+.3+i*.3;bar(r,RH[i],p(u,a,a+.8))});
rise($('cap5'),p(u,TM.gold_coin+1,TM.gold_coin+1.6));

rise($('ppl6'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qm'),p(u,TM.question_mark+.3,TM.question_mark+.8));
rise($('ear'),p(u,TM.ear,TM.ear+.5));rise($('l6a'),p(u,TM.ear+.3,TM.ear+.8));
rise($('think'),p(u,TM.ear+3.7,TM.ear+4.2));rise($('l6b'),p(u,TM.ear+3.9,TM.ear+4.4));
const sp=p(u,TM.spiral,TM.spiral+3),N=Math.floor(167*sp);let pts='1180,470';
for(let k=1;k<=N;k++){const th=k*.15,r=4+th*7.5;pts+=' '+(1180+r*Math.cos(th)).toFixed(1)+','+(470+r*Math.sin(th)).toFixed(1)}
$('spir').setAttribute('points',pts);$('spir').setAttribute('opacity',u>=TM.spiral?1:0);
rise($('l6c'),p(u,TM.spiral+.5,TM.spiral+1));rise($('nox'),p(u,TM.spiral+3.4,TM.spiral+3.9));

const sw=Math.sin(t*1.6);
$('pair').setAttribute('transform',`translate(${(40*sw).toFixed(1)} 0) rotate(${(6*sw).toFixed(2)} 800 470)`);
$('dA').setAttribute('transform',`translate(0 ${(-8*Math.max(0,Math.sin(t*3.2))).toFixed(1)})`);
$('dB').setAttribute('transform',`translate(0 ${(-8*Math.max(0,-Math.sin(t*3.2))).toFixed(1)})`);
rise($('dancers'),p(u,TM.dancers,TM.dancers+.5));
FP.forEach((f,i)=>{const a=TM.footsteps+i*.25;f.setAttribute('opacity',p(u,a,a+.3))});rise($('l7'),p(u,TM.footsteps+.5,TM.footsteps+1));
const ph=Math.PI*(1-p(u,TM.rhythm+.5,TM.rhythm+4));W1.setAttribute('d',wv(0,t));W2.setAttribute('d',wv(ph,t));
rise($('waves'),p(u,TM.rhythm,TM.rhythm+.5));rise($('l7b'),p(u,TM.rhythm+3,TM.rhythm+3.5));

rise($('qa'),p(u,TM.your_turn,TM.your_turn+.5));rise($('fin'),p(u,TM.your_turn+.5,TM.your_turn+1));
rise($('qb'),p(u,TM.your_turn+5.4,TM.your_turn+5.9));rise($('qc'),p(u,TM.your_turn+6.4,TM.your_turn+6.9));