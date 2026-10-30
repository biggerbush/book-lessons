const P0=TM.plate_and_bed;
rise($('t_plate'),p(u,P0,P0+.6)); rise($('t_bed'),p(u,P0+.6,P0+1.2));
$('t_moon').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')');

SG.forEach((s,i)=>{const a=TM.diet_signs+i*.4;rise(s[0],p(u,a,a+.4));draw(s[1],p(u,a+2,a+2.5))});
const W2=TM.two_people;
rise($('ppl'),p(u,W2,W2+.5)); draw(spA,p(u,W2+.8,W2+2.2)); draw(spB,p(u,W2+.8,W2+2.2));
rise($('nosingle'),p(u,W2+4.6,W2+5.2)); rise($('exper'),p(u,W2+7.2,W2+7.8));

const LA=[TM.lever_one+4.2,TM.lever_two,TM.lever_three];
KN.forEach((k,i)=>{const a=TM.lever_one+i*.3;rise(k[0],p(u,a,a+.5));const q=p(u,LA[i],LA[i]+.8);
  k[1].setAttribute('cx',(k[2]-130+260*q).toFixed(1));k[1].setAttribute('fill',q>.5?'var(--gain)':'var(--ink)')});
$('por').setAttribute('r',(70-32*p(u,LA[0],LA[0]+.8)).toFixed(1));
$('x1').setAttribute('opacity',p(u,LA[1],LA[1]+.5));
$('win').setAttribute('d',wedge(1260,420,92,0,Math.PI*(1.8-1.1*p(u,LA[2],LA[2]+.8))));
rise($('mix'),p(u,TM.lever_three+4.6,TM.lever_three+5.2));

const G=TM.glucose_patch,S=TM.spike_chart;
rise($('armg'),p(u,G,G+.6));
SIG.forEach((s,i)=>s.setAttribute('opacity',(u>=G+.6?.3+.7*Math.max(0,Math.sin(t*3-i*.8)):0).toFixed(2)));
rise($('chart'),p(u,S,S+.5)); draw(cA,p(u,S+.4,S+2.2)); draw(cB,p(u,S+1.8,S+3.4));
rise($('lA'),p(u,S+1.6,S+2)); rise($('lB'),p(u,S+3.2,S+3.6)); rise($('fb'),p(u,S+5.8,S+6.4));

MB.forEach((b,i)=>{const a=TM.muscle_arm+i*.4;rise(b,p(u,a,a+.4))});
rise($('gauge'),p(u,TM.scale_icon,TM.scale_icon+.5));
const g1=p(u,TM.scale_icon+.4,TM.scale_icon+1.4),g2=p(u,TM.meal_row,TM.meal_row+1.2);
setHand($('ndl'),800,450,110,-Math.PI/2+.7*g1+2.2*g2+.04*Math.sin(t*2));
$('ndl').setAttribute('stroke',g2>.5?'var(--gain)':'var(--loss)');
const D=TM.protein_dose;
rise($('dose'),p(u,D,D+.5)); $('dosev').textContent=(1.6*p(u,D+.3,D+1.5)).toFixed(1)+' g';
rise($('dbl'),p(u,D+6.6,D+7.1)); $('dblbar').setAttribute('width',(170+170*p(u,D+7,D+8)).toFixed(1));
rise($('mealt'),p(u,TM.meal_row,TM.meal_row+.5));
PL.forEach((g,i)=>{const a=TM.meal_row+.3+i*.3;rise(g,p(u,a,a+.4))});

const F=TM.fasting_clock,R=TM.shrinking_arm;
rise($('fclock'),p(u,F,F+.5));
const fa=Math.PI*1.9*p(u,F+.3,F+2.6);
$('fw').setAttribute('d',wedge(360,470,140,0,fa+.001)); setHand($('fh'),360,470,120,fa);
rise($('farm'),p(u,R,R+.5));
const sh=p(u,R+.5,R+3);
BA[1].setAttribute('d','M20 175Q87 '+(90+70*sh).toFixed(1)+' 155 175Z'); BA[1].setAttribute('class',sh>.5?'loss':'gain');
BA[0].setAttribute('opacity',(1-.45*sh).toFixed(2));
$('mbar').setAttribute('width',(240-130*sh).toFixed(1));
rise($('turn'),p(u,R+5.4,R+5.9)); draw($('newp'),p(u,R+5.6,R+7)); $('ahd').setAttribute('opacity',p(u,R+6.8,R+7.1));
rise($('course'),p(u,R+5.6,R+6.2));

const SU=TM.surgeon,SL=TM.sleeper;
rise($('surg'),p(u,SU,SU+.5)); $('sstk').setAttribute('x2',(130+340*p(u,SU+4.5,SU+5.1)).toFixed(1));
rise($('temple'),p(u,SU+.3,SU+.8));
const sp=p(u,SL,SL+1); $('roof').setAttribute('transform','rotate('+(-5*(1-sp)).toFixed(2)+' 1080 300)'); $('spg').setAttribute('opacity',sp);
rise($('riskh'),p(u,TM.brain_clean,TM.brain_clean+.4));
RK.forEach((g,i)=>{const a=TM.brain_clean+i*1.2;rise(g,p(u,a,a+.4))});
rise($('slp'),p(u,SL+.6,SL+1.2));

[TM.dark_room,TM.clock_steady,TM.wine_glass,TM.phone_off].forEach((a,i)=>rise(NC[i],p(u,a,a+.5)));
setHand($('ck'),626,400,62,t*.5);
$('nos').setAttribute('opacity',p(u,TM.wine_glass+.6,TM.wine_glass+1));
$('scr').setAttribute('fill-opacity',(1-.85*p(u,TM.phone_off+.6,TM.phone_off+1.4)).toFixed(2));
rise($('addup'),p(u,TM.phone_off+3,TM.phone_off+3.5));
MN.forEach((m,i)=>m.setAttribute('fill',u>=TM.phone_off+3.3+i*.25?'var(--gain)':'var(--line)'));

const C=TM.challenge;
rise($('chal'),p(u,C,C+.5)); rise($('endg'),p(u,C+.3,C+.8));
['q0','q1','q2'].forEach((id,i)=>{const a=C+5+i*.4;rise($(id),p(u,a,a+.5))});