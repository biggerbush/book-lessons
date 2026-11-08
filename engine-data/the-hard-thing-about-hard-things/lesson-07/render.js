const e0=p(u,TM.speeding_car,TM.speeding_car+4);
$('car0').setAttribute('transform',`translate(${(1000+230*e0).toFixed(1)} 440) rotate(${(540*e0).toFixed(1)})`);
rise($('look0'),p(u,TM.speeding_car+6.2,TM.speeding_car+6.8));

const L=TM.lonely_leader,D=TM.dark_cloud;
rise($('lead'),p(u,L,L+.5)); rise($('cloud1'),p(u,D,D+.5)); rise($('q1'),p(u,D+.6,D+1.1));
rain.forEach(r=>r.setAttribute('stroke-dashoffset',(-(t*60)%24).toFixed(1)));
rise($('food1'),p(u,D+6.2,D+6.7)); rise($('plan1'),p(u,D+6.8,D+7.3));

const F=TM.falling_chart,B=TM.baby_crib,C=TM.clock_face,dc=Math.max(0,u-C);
rise($('ch2'),p(u,F,F+.4)); $('crash').setAttribute('stroke-dashoffset',(1-p(u,F+.3,F+2.3)).toFixed(3));
rise($('crib2'),p(u,B,B+.5)); rise($('clk2'),p(u,C,C+.5));
$('hh2').setAttribute('transform',`rotate(${Math.floor(dc/.9)*60} 1290 400)`);
$('mh2').setAttribute('transform',`rotate(${((dc/.9)*360%360).toFixed(1)} 1290 400)`);
[0,1].forEach(i=>{const k=(t*.9+i*.5)%1,tr=$('tr'+i);tr.setAttribute('cy',(500+56*k).toFixed(1));tr.setAttribute('opacity',u>=C?(1-k).toFixed(2):0)});
rise($('fear2'),p(u,C+3.3,C+3.8));

const BR=TM.brain_icon,FG=TM.fog_cloud;
rise($('mind3'),p(u,BR,BR+.5)); rise($('in3'),p(u,BR+5.7,BR+6.2));
$('br3').setAttribute('opacity',(p(u,BR+1,BR+1.6)*(1-.7*p(u,FG,FG+1))).toFixed(2));
$('fog3').setAttribute('opacity',p(u,FG,FG+1.2).toFixed(2));
$('fog3').setAttribute('transform',`translate(${(8*Math.sin(t*.7)).toFixed(1)} 0)`);
rise($('dis3'),p(u,FG+.8,FG+1.3));

const RT=TM.race_track,SK=TM.skid_marks,OR=TM.open_road;
rise($('road4'),p(u,RT,RT+.5));
const a4=p(u,RT,RT+3),b4=p(u,SK,SK+2.5),c4=p(u,OR,OR+3);
let x4=200+440*a4+260*b4,y4=700+10*b4,r4=35*b4;
if(c4>0){const s=c4;x4=(1-s)*(1-s)*900+2*s*(1-s)*1000+s*s*1000;y4=(1-s)*(1-s)*710+2*s*(1-s)*710+s*s*400;r4=35-125*s}
$('car4').setAttribute('transform',`translate(${x4.toFixed(1)} ${y4.toFixed(1)}) rotate(${r4.toFixed(1)})`);
$('car4').setAttribute('opacity',p(u,RT,RT+.5));
rise($('sk4'),p(u,SK,SK+.8));
const ro=u>=OR,ey=$('eye4');
ey.setAttribute('x1',x4.toFixed(1));ey.setAttribute('y1',y4.toFixed(1));ey.setAttribute('x2',ro?1000:1240);ey.setAttribute('y2',ro?260:640);
ey.setAttribute('stroke',ro?'var(--gain)':'var(--loss)');ey.setAttribute('opacity',u>=SK+.5?1:0);
rise($('lw4'),p(u,OR+5.4,OR+5.9)); rise($('lr4'),p(u,OR+9.6,OR+10.1));

const CB=TM.chess_board,LB=TM.light_bulb;
rise($('board5'),p(u,CB,CB+.5)); rise($('mv5'),p(u,CB+4.6,CB+5.1));
rise($('bulb5'),p(u,LB,LB+.5)); $('rays5').setAttribute('opacity',(.6+.4*Math.sin(t*4)).toFixed(2)); rise($('op5'),p(u,LB+.6,LB+1.1));

const HG=TM.hourglass,FP=TM.friend_pair,sd=p(u,HG,HG+6);
rise($('hg6'),p(u,HG,HG+.5));
const y0=290+140*sd,xl=250+70*(y0-260)/180,xr=410-70*(y0-260)/180;
$('sandT').setAttribute('points',sd<1?`${xl.toFixed(1)},${y0.toFixed(1)} ${xr.toFixed(1)},${y0.toFixed(1)} 330,436`:'');
$('sandB').setAttribute('points',`262,612 398,612 330,${(612-120*sd).toFixed(1)}`);
rise($('luck6'),p(u,HG+4,HG+4.6));
rise($('fr6'),p(u,FP,FP+.5)); rise($('t6a'),p(u,FP+6.6,FP+7.1)); rise($('t6b'),p(u,FP+10.3,FP+10.8));

const NB=TM.notebook,AF=TM.arrow_forward;
rise($('pg7'),p(u,NB,NB+.5)); rise($('w7'),p(u,NB+.6,NB+1.1));
$('st7').setAttribute('x2',(205+520*p(u,NB+6.2,NB+6.8)).toFixed(1));
rise($('mv7'),p(u,NB+7,NB+7.5));
const fw=p(u,AF+.6,AF+2);
$('wb7').setAttribute('opacity',(1-.8*fw).toFixed(2)); $('wt7').setAttribute('opacity',(1-.4*fw).toFixed(2));
rise($('ar7'),p(u,AF,AF+.3)); $('ars7').setAttribute('stroke-dashoffset',(1-p(u,AF,AF+1)).toFixed(3)); $('arh7').setAttribute('opacity',p(u,AF+.8,AF+1.2));

const Q=SC[8][0]/K;
rise($('q8a'),p(u,Q+.3,Q+.8)); rise($('q8b'),p(u,Q+.6,Q+1.1)); rise($('gr8'),p(u,Q+.3,Q+.9));
rise($('q8c'),p(u,Q+3.3,Q+3.8)); rise($('q8d'),p(u,Q+3.6,Q+4.1));
steps.forEach((s,i)=>s.setAttribute('opacity',p(u,Q+3.8+i*.3,Q+4.1+i*.3)));
rise($('lb8'),p(u,Q+5,Q+5.5));