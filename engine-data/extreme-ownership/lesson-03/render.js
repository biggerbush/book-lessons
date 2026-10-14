const h0=SC[0][1]/K*.55,dr=40*p(u,h0,h0+1.5);
$('tA').setAttribute('transform',`translate(${1180-dr} 480)`);$('tB').setAttribute('transform',`translate(${1380+dr} 480)`);$('tArc').setAttribute('opacity',1-p(u,h0,h0+1.2));

const T=TM.cover_fire,L=TM.leapfrog;
const aX=200+320*p(u,T+.8,T+2.8)+840*p(u,L+1.4,L+2.8),bX=200+620*p(u,L,L+1.4)+540*p(u,L+2.8,L+4.2);
let cv=-1;if(u>=T&&u<L)cv=1;else if(u>=L&&u<L+1.4)cv=0;else if(u>=L+1.4&&u<L+2.8)cv=1;else if(u>=L+2.8&&u<L+4.2)cv=0;
const hop=8*Math.abs(Math.sin(t*9));
SA.setAttribute('transform',`translate(${aX.toFixed(1)} ${(400-(cv===1?hop:0)).toFixed(1)})`);SA.setAttribute('class',cv===1?'gain':'ink');
SB.setAttribute('transform',`translate(${bX.toFixed(1)} ${(600-(cv===0?hop:0)).toFixed(1)})`);SB.setAttribute('class',cv===0?'gain':'ink');
$('lA').setAttribute('x',aX.toFixed(1));$('lA').textContent=cv===0?'COVER':cv===1?'MOVE':'';
$('lB').setAttribute('x',bX.toFixed(1));$('lB').textContent=cv===1?'COVER':cv===0?'MOVE':'';
const cx=(cv===1?bX:aX)+40,cy=cv===1?600:400;
$('cone').setAttribute('transform',`translate(${cx.toFixed(1)} ${cy}) scale(${cl((1470-cx)/320,0,1).toFixed(3)} 1)`);$('cone').setAttribute('opacity',cv<0?0:1);
rise($('sold'),p(u,TM.two_soldiers,TM.two_soldiers+.5));rise($('tac'),p(u,L+3.3,L+3.9));

BL.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.ramadi_city+i*.03,TM.ramadi_city+i*.03+.4)));
rise($('op'),p(u,TM.ramadi_city,TM.ramadi_city+.5));rise($('base'),p(u,TM.ramadi_city+.6,TM.ramadi_city+1.1));
rise($('routes'),p(u,TM.two_squads,TM.two_squads+.5));rise($('squads'),p(u,TM.two_squads,TM.two_squads+.5));
const S2=TM.two_squads+3.7,k2=p(u,S2,S2+5.5);
[[RA,.62*k2],[RB,.3*k2]].forEach(([R,k],i)=>{const q=along(R,k);SQD[i].setAttribute('transform',`translate(${q[0].toFixed(1)} ${q[1].toFixed(1)})`)});
rise($('own'),p(u,S2,S2+.5));

const E=TM.exposed_icon,F=E+11.3,dg=300*p(u,TM.open_gap,TM.open_gap+2.5)*(1-p(u,F,F+1.5)),ex=u>=E&&u<F;
[640-dg,960+dg].forEach((x,i)=>{$('q'+i).setAttribute('transform',`translate(${x.toFixed(1)} 470)`);$('rg'+i).setAttribute('cx',x.toFixed(1));$('rg'+i).style.stroke=u>=F?'var(--gain)':ex?'var(--loss)':'var(--line)';SQ[i].w.setAttribute('opacity',ex?p(u,E,E+.4):0);SQ[i].ps.forEach(g=>g.setAttribute('class',ex?'loss':'ink'))});
$('gapL').setAttribute('opacity',p(u,TM.open_gap+1.5,TM.open_gap+2.5)*(1-p(u,F,F+.6)));
rise($('forgot'),p(u,E+4.1,E+4.7));rise($('fix'),p(u,E+9.3,E+9.9));

rise($('mag'),p(u,TM.magnifier,TM.magnifier+.5));$('magm').setAttribute('transform',`translate(${(8*Math.sin(t*1.5)).toFixed(1)} ${(6*Math.cos(t*1.2)).toFixed(1)})`);
SI.forEach((g,i)=>rise(g,p(u,TM.desk_silos+i*.4,TM.desk_silos+i*.4+.5)));
rise($('obst'),p(u,TM.desk_silos+4.2,TM.desk_silos+4.7));rise($('big'),p(u,TM.desk_silos+8.4,TM.desk_silos+9));

const AM=TM.angry_manager,SG=TM.shared_goal;
rise($('bld'),p(u,TM.office_build,TM.office_build+.5));rise($('ppl'),p(u,TM.office_build+.6,TM.office_build+1.1));
MG.setAttribute('class',u>=AM&&u<SG+1?'loss':'ink');
$('bub').setAttribute('opacity',p(u,AM+.3,AM+.8)*(1-p(u,SG+1,SG+1.5)));
rise($('goal'),p(u,SG,SG+.6));rise($('same5'),p(u,SG+1,SG+1.6));
$('wall5').setAttribute('stroke-dasharray',u>=SG+1?'14 14':'none');

const co=p(u,TM.real_enemy-.6,TM.real_enemy-.1);
rise($('co'),co);$('walls').setAttribute('opacity',co*(1-.85*p(u,TM.bridge,TM.bridge+1)));
rise($('foe'),p(u,TM.real_enemy+.4,TM.real_enemy+.9));rise($('help'),p(u,TM.handshake,TM.handshake+.6));
rise($('brg'),p(u,TM.bridge+.5,TM.bridge+1));rise($('alone'),p(u,TM.bridge+4.2,TM.bridge+5));

const C7=[TM.phone_call,TM.question_mark,TM.question_mark+3.4,TM.question_mark+7.2];
let pg=0;C7.forEach((a,i)=>{rise($('k'+i),p(u,a,a+.5));pg+=340*p(u,a,a+.8)});
$('prog').setAttribute('width',pg.toFixed(1));$('wav').setAttribute('opacity',(.4+.6*Math.abs(Math.sin(t*3))).toFixed(2));
rise($('credit'),p(u,C7[3]+.6,C7[3]+1.2));

const Q=SC[8][0]/K;
rise($('qa'),p(u,Q+.3,Q+.8));rise($('qb'),p(u,Q+.7,Q+1.2));rise($('qc'),p(u,Q+1.1,Q+1.6));rise($('qd'),p(u,Q+4.6,Q+5.2));
const c8=(t%4)/4;$('fa').setAttribute('cx',(1060+200*ease(cl(c8*2))).toFixed(1));$('fb').setAttribute('cx',(1160+200*ease(cl(c8*2-1))).toFixed(1));