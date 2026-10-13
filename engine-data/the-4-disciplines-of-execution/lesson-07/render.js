$('hand').setAttribute('transform','rotate('+(Math.floor(t*2)*15)+' 1300 420)');
rise($('clk'),p(u,TM.ticking_clock,TM.ticking_clock+.5));

rise($('team'),p(u,TM.team_desk,TM.team_desk+.5)); rise($('goal'),p(u,TM.team_desk+.6,TM.team_desk+1.1));
$('mon').textContent=u>=TM.inbox_pile?'MARCH':'JANUARY';
env.forEach((e,i)=>{const a=TM.inbox_pile+i*.35;rise(e,p(u,a,a+.3))});
$('gcard').setAttribute('opacity',(1-.75*p(u,TM.inbox_pile+1.5,TM.inbox_pile+4.5)).toFixed(2));
rise($('quit1'),p(u,TM.inbox_pile+4.6,TM.inbox_pile+5.1));

rise($('cal'),p(u,TM.calendar_page,TM.calendar_page+.5));
slot.forEach((s,i)=>{const k=p(u,TM.same_slot+i*.5,TM.same_slot+i*.5+.4);s[0].setAttribute('fill',k>.5?G:S);s[1].setAttribute('opacity',k)});
rise($('ssl'),p(u,TM.same_slot,TM.same_slot+.5)); rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5));
const sa=Math.PI*.999*p(u,TM.stopwatch+.3,TM.stopwatch+2);
$('swarc').setAttribute('d','M1180 330A140 140 0 0 1 '+(1180+140*Math.sin(sa)).toFixed(1)+' '+(470-140*Math.cos(sa)).toFixed(1));
rise($('beats'),p(u,TM.stopwatch+3.7,TM.stopwatch+4.3));

rise($('ring3'),p(u,TM.circle_chairs,TM.circle_chairs+.5));
bd.forEach((b,i)=>{const a=TM.checkmark+i*.6;rise(b,p(u,a,a+.4))});
rise($('nox'),p(u,TM.checkmark+5,TM.checkmark+5.5)); rise($('yn'),p(u,TM.checkmark+5.8,TM.checkmark+6.3));

rise($('sb'),p(u,TM.scoreboard,TM.scoreboard+.5));
bars.forEach((b,i)=>{if(i<3)return;const a=TM.up_arrow+(i-3)*.7,h=HB[i]*p(u,a,a+.6);b.setAttribute('y',(740-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
rise($('upa'),p(u,TM.up_arrow+.5,TM.up_arrow+1));
rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5));
rays.forEach((r,i)=>r.setAttribute('opacity',(p(u,TM.lightbulb+.4,TM.lightbulb+.8)*(.55+.45*Math.sin(t*4+i))).toFixed(2)));

rise($('np'),p(u,TM.notepad,TM.notepad+.5));
$('w1').setAttribute('stroke-dashoffset',1-p(u,TM.notepad+.6,TM.notepad+1.8)); $('w2').setAttribute('stroke-dashoffset',1-p(u,TM.notepad+1.8,TM.notepad+3));
rise($('tg'),p(u,TM.target,TM.target+.5));
$('dart').setAttribute('transform','translate('+(840+380*p(u,TM.target+.4,TM.target+1.2)).toFixed(1)+' 450)'); $('dart').setAttribute('opacity',u>=TM.target+.4?1:0);
rise($('tq'),p(u,TM.target+.8,TM.target+1.3));
rise($('vg'),p(u,TM.target+4.6,TM.target+5.1));
let vw=400; try{vw=$('vt').getComputedTextLength()||400}catch(e){} $('vs').setAttribute('x2',(272+(vw+16)*p(u,TM.target+5.6,TM.target+6.1)).toFixed(1));
rise($('sp'),p(u,TM.target+6.4,TM.target+6.9));

rise($('room'),p(u,SC[6][0]/K+.3,SC[6][0]/K+.8)); rise($('cld'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
tw.forEach((w,i)=>w.setAttribute('transform','translate('+(20*Math.sin(t*3+i)).toFixed(1)+' 0)'));
const da=Math.PI/2*(1-p(u,TM.door_closed,TM.door_closed+1));
$('door').setAttribute('x2',(640-180*Math.sin(da)).toFixed(1)); $('door').setAttribute('y2',(700-180*Math.cos(da)).toFixed(1));
rise($('lead'),p(u,TM.open_hands,TM.open_hands+.5)); rise($('cq'),p(u,TM.open_hands+.5,TM.open_hands+1));
$('obs').setAttribute('opacity',(1-p(u,TM.open_hands+1,TM.open_hands+1.6)).toFixed(2)); $('cpath').setAttribute('opacity',(.25+.75*p(u,TM.open_hands+1.2,TM.open_hands+1.8)).toFixed(2));
$('cpath').setAttribute('stroke-dashoffset',(-22*t*p(u,TM.open_hands+1.2,TM.open_hands+1.8)).toFixed(1));

rise($('net'),p(u,TM.handshake,TM.handshake+.5));
const pr=p(u,TM.handshake+3,TM.handshake+4);
PG.forEach(g=>g.setAttribute('fill',pr>.3?G:I)); blines.forEach(b=>b.setAttribute('opacity',(1-.85*pr).toFixed(2)));
chs.forEach((c,i)=>{const a=TM.handshake+3+i*.15;c.setAttribute('opacity',p(u,a,a+.4))});
rise($('duo'),p(u,TM.two_people,TM.two_people+.5)); rise($('dl'),p(u,TM.two_people+3,TM.two_people+3.5)); rise($('stick'),p(u,TM.two_people+7.4,TM.two_people+8));

rise($('pp'),p(u,TM.pen_paper,TM.pen_paper+.5)); rise($('qa'),p(u,TM.pen_paper+.3,TM.pen_paper+.8)); rise($('qb'),p(u,TM.pen_paper+.8,TM.pen_paper+1.3));
rise($('qc'),p(u,TM.pen_paper+7,TM.pen_paper+7.5)); rise($('qm'),p(u,TM.pen_paper+7.6,TM.pen_paper+8.1));