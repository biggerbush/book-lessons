const R=(e,a,d=.5)=>rise(typeof e==='string'?$(e):e,p(u,a,a+d));
const tl=TM.brave_leader;
$('t_rays').setAttribute('opacity',p(u,tl,tl+1));$('t_rays').setAttribute('transform',`rotate(${((t*6)%360).toFixed(1)} 1260 440)`);
const hb=p(u,tl+.8,tl+1.4),hk=1.4*(.5+.5*hb)*(1+.08*Math.pow(Math.abs(Math.sin(t*3)),6));
$('t_heart').setAttribute('opacity',hb);$('t_heart').setAttribute('transform',`translate(1260 482) scale(${hk.toFixed(3)})`);

S1.forEach((o,i)=>{R(o[0],TM.three_clouds+.6+i*1.2);R(o[1],TM.speech_bubble+i*1.6);R(o[2],TM.speech_bubble+5.8+i*.3)});
R('s1m',TM.speech_bubble+5.8);R('s1s',TM.speech_bubble+9.2);
let w='M120 850';for(let x=130;x<=990;x+=10)w+='L'+x+' '+(850+5*Math.sin(x/9+t*14)).toFixed(1);$('s1w').setAttribute('d',w);

SOL.forEach((g,i)=>R(g,TM.soldiers+.3+i*.2));
R('s2card',TM.question_card);R('s2q',TM.question_card+5);
const ra=p(u,TM.raised_hand,TM.raised_hand+.6);
$('s2arm').setAttribute('x2',(545+30*ra).toFixed(1));$('s2arm').setAttribute('y2',(590-140*ra).toFixed(1));$('s2arm').setAttribute('opacity',ra>0?1:0);
[...SOL[3].children].slice(0,2).forEach(e=>e.setAttribute('class',u>=TM.raised_hand?'gain':'ink'));
R('s2bub',TM.raised_hand+.6);R('s2zero',TM.raised_hand+5);

const sc=TM.scale;R('s3sc',sc);
const an=14*(1-p(u,sc+.6,sc+2.4)),rr=an*Math.PI/180,cc=220*Math.cos(rr),ss=220*Math.sin(rr);
$('s3beam').setAttribute('transform',`rotate(${an.toFixed(2)} 440 340)`);
$('s3pL').setAttribute('transform',`translate(${(440-cc).toFixed(1)} ${(340-ss).toFixed(1)})`);
$('s3pR').setAttribute('transform',`translate(${(440+cc).toFixed(1)} ${(340+ss).toFixed(1)})`);
R('s3w',sc+2.6);$('s3ws').setAttribute('x2',(112+300*p(u,sc+3.4,sc+4.2)).toFixed(1));
R('s3m',TM.mountain);
const pt=TR.getPointAtLength(TL*p(u,TM.mountain+.6,TM.mountain+3.2));$('s3cl').setAttribute('cx',pt.x.toFixed(1));$('s3cl').setAttribute('cy',pt.y.toFixed(1));

R('s4L',TM.shield_person);
const rn=p(u,TM.shield_person+3.8,TM.shield_person+4.6);$('s4rain').setAttribute('opacity',rn);
RN.forEach(([l,bot,i])=>{const top=292,span=bot-top-24,y=top+((t*220+i*53)%span);l.setAttribute('y1',y.toFixed(1));l.setAttribute('y2',(y+24).toFixed(1))});
SPS.forEach((s,i)=>s.setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*6+i*1.3))).toFixed(2)));
R('s4u',TM.shield_person+3.8);R('s4c',TM.shield_person+5.5);
R('s4R',TM.lone_climber);
$('s4rope').setAttribute('opacity',p(u,TM.lone_climber+3,TM.lone_climber+4));R('s4sup',TM.lone_climber+3);
[...CLB.children].forEach(e=>e.setAttribute('class',u>=TM.lone_climber+3?'gain':'ink'));
R('s4w',TM.lone_climber+3.4);

R('s5bp',TM.blueprint);
$('s5er').setAttribute('transform',`translate(${(420+70*Math.sin(t*5)).toFixed(1)} ${(430+10*Math.sin(t*10)).toFixed(1)}) rotate(-12)`);
R('s5no',TM.blueprint+3.8);R('s5d',TM.blueprint+4.8);
R('s5r',TM.two_hands);
BARS.forEach((pr,k)=>{const a=TM.two_hands+4.9+k*.9,h=70*(k+1)*p(u,a,a+.6);pr.forEach(b=>{b.setAttribute('y',(660-h).toFixed(1));b.setAttribute('height',h.toFixed(1))})});
R('s5a',TM.two_hands+4.9);

R('s6L',TM.diary);
SPL.forEach((r,i)=>{const k=((t*90+i*37)%140)/140;r.setAttribute('x',(410+(i-3.5)*28*k).toFixed(1));r.setAttribute('y',(515+140*k).toFixed(1));r.setAttribute('opacity',(1-k).toFixed(2))});
R('s6x',TM.diary+2.9);R('s6t',TM.diary+2.9);
R('s6R',TM.fence);R('s6p',TM.fence+3);

R('s7tab',TM.meeting_table);
PP.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.meeting_table+.4+i*.15,TM.meeting_table+.8+i*.15)));
$('s7ring').setAttribute('opacity',u>=TM.i_dont_know?(.4+.6*Math.abs(Math.sin(t*3))).toFixed(2):0);
R('s7c0',TM.i_dont_know);R('s7c1',TM.i_dont_know+4.6);R('s7c2',TM.open_door);
const dw=p(u,TM.open_door+.5,TM.open_door+1.3),dx=1380+60*(1-.6*dw);
$('s7door').setAttribute('points',`1380,598 ${dx.toFixed(1)},${(598+12*dw).toFixed(1)} ${dx.toFixed(1)},${(682-12*dw).toFixed(1)} 1380,682`);
R('s7s',TM.open_door+3.3);

R('qa',TM.calendar);R('qb',TM.calendar+.4);R('qc',TM.calendar+.8);
R('s8cal',TM.calendar+1.4);R('s8ring',TM.calendar+5);R('s8m',TM.calendar+5);