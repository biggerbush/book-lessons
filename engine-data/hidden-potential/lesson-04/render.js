const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
const k0=p(u,TM.sponge_rock,TM.sponge_rock+1),s0k=p(u,TM.sponge_rock+5.2,TM.sponge_rock+7),sc0=1+.3*s0k;
tr($('spg0'),1240,180+(616-30*sc0-180)*k0,sc0);
$('rock0').setAttribute('transform','translate(1360 '+(180+402*k0).toFixed(1)+')');
const w0=400+60*s0k,o0=40*(w0-300)/320;
$('water').setAttribute('points',(1146+o0).toFixed(1)+','+w0+' '+(1454-o0).toFixed(1)+','+w0+' 1414,614 1186,614');
R('lb0',TM.sponge_rock+5.4);

R('rp1',TM.rock_person);R('sp1',TM.splashes+4.2);
const v1=[p(u,TM.splashes,TM.splashes+.5),p(u,TM.splashes+4.2,TM.splashes+4.7)];
D1.forEach(([e,s,i])=>{const ph=(t*.5+i*.2+s*.1)%1,f=Math.min(ph/.6,1),q=Math.max(0,(ph-.6)/.4),x0=(s?1000:420)+(i-2)*34;let x=x0,y,sc=1;
  if(s){y=230+170*f;sc=1-q}else{y=230+150*f-60*q+200*q*q;x=x0+(i<2?-1:1)*130*q}
  tr(e,x,y,sc);e.setAttribute('opacity',((1-q)*v1[s]).toFixed(2))});
R('gro1',TM.growth_arrow,.4);$('gl').setAttribute('stroke-dashoffset',(330*(1-p(u,TM.growth_arrow,TM.growth_arrow+1.4))).toFixed(1));
$('gh').setAttribute('opacity',p(u,TM.growth_arrow+1.2,TM.growth_arrow+1.5));

const k2=p(u,TM.reaching_hand,TM.reaching_hand+1.2),hx=350+430*k2;
$('arm').setAttribute('d','M350 500L'+hx.toFixed(1)+' 480');$('arm').setAttribute('opacity',k2>0?1:0);
$('hand').setAttribute('cx',hx.toFixed(1));$('hand').setAttribute('opacity',k2>0?1:0);
R('q2',TM.question_mark);
for(let i=0;i<3;i++){const a=TM.question_mark+.8+i*1.4;R('t2'+i,a);$('r2'+i).setAttribute('opacity',p(u,a,a+.5))}
R('pro2',TM.question_mark+7.4);

const on3=p(u,TM.filter,TM.filter+.5),a3=on3*Math.pow(Math.sin(Math.PI*((t%1.6)/1.6)),2),sy=1-.18*a3,sx=1+.05*a3;
$('sq').setAttribute('transform','translate(430 430) scale('+sx.toFixed(3)+' '+sy.toFixed(3)+') translate(-430 -430)');
$('tp3').setAttribute('y',(430-90*sy-18).toFixed(1));$('bp3').setAttribute('y',(430+90*sy+2).toFixed(1));$('pl3').setAttribute('opacity',on3);
G3.forEach((e,i)=>{const ph=(t*.6+i*.25)%1;tr(e,360+i*45,560+170*ph);e.setAttribute('opacity',(on3*(1-ph)).toFixed(2))});
R('sl3',TM.filter+.4);R('va3',TM.two_voices);R('vb3',TM.two_voices+.6);
$('aa3').setAttribute('opacity',p(u,TM.two_voices,TM.two_voices+.6));$('ab3').setAttribute('opacity',p(u,TM.two_voices+.6,TM.two_voices+1.2));
R('ck3',TM.two_voices+2.6);R('ck3b',TM.two_voices+3.4);

R('fb4',TM.feedback_form);R('jd4',TM.scorecard);
ST.forEach((e,i)=>{const a=TM.scorecard+.6+i*.15;e.setAttribute('opacity',p(u,a,a+.3))});
R('pa4',TM.scorecard+1.6);R('b41',TM.thumbs);R('b42',TM.thumbs+1);R('cr4',TM.thumbs+2.6);

R('pl5',TM.speech_bubble);R('pr5',TM.speech_bubble+.6);R('vl5',TM.speech_bubble+3);
CL.forEach((g,i)=>rise(g,p(u,TM.checklist+i*.4,TM.checklist+i*.4+.4)));
R('ul5',TM.checklist+1.4);R('al5',TM.arrow_forward);R('ar5',TM.arrow_forward+.8);

R('cw6',TM.critic);R('yw6',TM.coach);R('kw6',TM.coach+.3);
$('coach').setAttribute('transform','translate('+(-210*p(u,TM.side_by_side,TM.side_by_side+1.2)).toFixed(1)+' 0)');
R('fw6',TM.side_by_side+.6);R('wd6',TM.side_by_side+5);

R('c71',TM.notebook);R('c72',TM.mentor);R('c73',TM.mentor+3.4);
$('st7').setAttribute('x2',(1088+360*p(u,TM.mentor+4.2,TM.mentor+4.8)).toFixed(1));
R('ak7',TM.mentor+5);R('nb7',TM.next_time);R('nl7',TM.next_time+2);

const b8=SC[8][0]/K;
R('qa',b8+.4);R('qb',b8+.8);R('qc',b8+1.2);R('sg8',b8+.6);R('ql8',b8+4.6);
const v8=p(u,b8+1,b8+1.6),f8=(t*.5)%1,g8=((t*.5)+.5)%1;
tr(D8[0],1300,230+130*f8,1-Math.max(0,(f8-.8)/.2));D8[0].setAttribute('opacity',v8.toFixed(2));
tr(D8[1],1340,515+140*g8);D8[1].setAttribute('opacity',(v8*(1-g8)).toFixed(2));