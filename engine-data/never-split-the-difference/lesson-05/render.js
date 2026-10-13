$('wheel').setAttribute('transform','rotate('+(18*Math.sin(t*.8)).toFixed(2)+' 1290 380)');
rv('wheelg',u,TM.steering,.6);rv('hands',u,TM.steering+1.2);rv('feel',u,TM.steering+6.6);

rv('pp',u,TM.two_people);
const off=1-p(u,TM.crown,TM.crown+.6);
$('push').setAttribute('opacity',(p(u,TM.two_people+.8,TM.two_people+1.3)*off).toFixed(3));
$('wall').setAttribute('opacity',(p(u,TM.two_people,TM.two_people+.5)*off).toFixed(3));
pR.setAttribute('class',u>=TM.crown?'gain':'loss');
rv('crown',u,TM.crown);rv('qm',u,TM.question_mark);

rv('hw',u,TM.how_what);rv('yn',u,TM.yes_no_box);
const yk=p(u,TM.yes_no_box+.8,TM.yes_no_box+1.4);$('ynx').setAttribute('x2',530+360*yk);$('ynx').setAttribute('y2',370-140*yk);
rv('cloud',u,TM.thought_cloud);rv('tc',u,TM.thought_cloud);
for(let i=0;i<3;i++)$('td'+i).setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*3-i*.6))).toFixed(2));
// INFO chips emerge beside the thinker (clear of the cloud) and travel left into a row
cards.forEach((c,i)=>{const a=TM.thought_cloud+4.1+i*.45,k=p(u,a,a+.6);c.setAttribute('transform','translate('+(1040+(120+i*130-1040)*k).toFixed(1)+' '+(540+100*k).toFixed(1)+')');c.setAttribute('opacity',cl(lin(u,a,a+.15)))});
rv('info',u,TM.thought_cloud+4.1);

rv('why',u,TM.why_finger);rv('dm',u,TM.why_finger+.4);rv('acc',u,TM.why_finger+3.8);
dmP.setAttribute('class',u>=TM.defensive_man?'loss':'ink');rv('def',u,TM.defensive_man);

rv('kgrp',u,TM.kidnapper);rv('nocard',u,TM.angry_face);
$('af').setAttribute('transform','translate('+(u>=TM.angry_face?3*Math.sin(t*20):0).toFixed(1)+' 0)');
rv('yescard',u,TM.angry_face+2.6);for(let i=0;i<3;i++)rv('bar'+i,u,TM.angry_face+3+i*.4,.3);
rv('reply',u,TM.phone);

rv('kid2',u,TM.puzzle,.4);rv('pc',u,TM.puzzle,.4);
const pk=p(u,TM.puzzle+.6,TM.puzzle+2);$('piece').setAttribute('transform','translate('+(300+320*pk).toFixed(1)+' '+(540+20*pk).toFixed(1)+')');
rv('gears',u,TM.gears);
G[0].setAttribute('transform','rotate('+(t*40%360).toFixed(1)+' 740 400)');G[1].setAttribute('transform','rotate('+(-t*400/7%360).toFixed(1)+' 812 350)');
rv('emp',u,TM.gears+4.6);rv('bulb',u,TM.lightbulb,.4);
$('rays').setAttribute('opacity',(.6+.4*Math.sin(t*4)).toFixed(2));rv('own',u,TM.lightbulb+.5,.6);

trio.forEach((g,i)=>rv(g,u,TM.boss+i*.8));
rv('sb0',u,TM.speech_bubble);rv('sb1',u,TM.speech_bubble+3.8);rv('comp',u,TM.compass);
const nk=p(u,TM.compass,TM.compass+2),na=(1-nk)*(-60+25*Math.sin(t*3))+nk*45;
$('needle').setAttribute('transform','rotate('+na.toFixed(1)+' 1260 620)');

rv('face',u,TM.calm_face);rv('clk',u,TM.clock);
$('hand').setAttribute('transform','rotate('+(360*p(u,TM.clock,TM.clock+4)).toFixed(1)+' 800 450)');
rv('room',u,TM.clock+4.2);for(let i=0;i<3;i++)$('rd'+i).setAttribute('opacity',p(u,TM.clock+4.6+i*.4,TM.clock+4.9+i*.4));
rv('guide',u,TM.clock+6.8,.6);

rv('qcirc',u,TM.your_turn);rv('qa',u,TM.your_turn);rv('qb',u,TM.your_turn+.4);rv('qc',u,TM.your_turn+.8);rv('listen',u,TM.your_turn+5.8,.6);