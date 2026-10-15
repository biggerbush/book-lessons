const blink=Math.floor(t*2)%2?0:1;
rise($('pg0'),p(u,TM.blank_page,TM.blank_page+.5)); $('cur0').setAttribute('opacity',blink);
I0.forEach((b,i)=>{const a=TM.blank_page+3.8+i*.3;rise(b,p(u,a,a+.4))});

rise($('desk1'),p(u,TM.writer_desk,TM.writer_desk+.5)); $('cur1').setAttribute('opacity',blink);
rise($('clk'),p(u,TM.clock,TM.clock+.4)); $('hand1').setAttribute('transform','rotate('+(360*p(u,TM.clock,TM.clock+3)).toFixed(1)+' 680 290)');
B1.forEach(([b,r],i)=>{const a=TM.brick_wall+(9-r)*.3+(i%4)*.05;rise(b,p(u,a,a+.3))});
rise($('lbl1'),p(u,TM.brick_wall+3,TM.brick_wall+3.5));

const s2a=SC[2][0]/K+.5; rise($('wq2'),p(u,s2a,s2a+.5));
const hf=p(u,TM.hiding_figure,TM.hiding_figure+.8);
$('fig2').setAttribute('transform','translate('+(70*(1-hf)).toFixed(1)+' 0)');
rise($('fig2i'),p(u,TM.hiding_figure,TM.hiding_figure+.4));
W2.forEach(([b])=>b.setAttribute('stroke',u>=TM.hiding_figure+.4?'var(--loss)':'var(--ink)'));
rise($('flab2'),p(u,TM.hiding_figure+.6,TM.hiding_figure+1.1));
B2.forEach((b,i)=>{const a=TM.idea_bulbs+i*.2;rise(b,p(u,a,a+.4))});
$('bulbs2').setAttribute('transform','translate(0 '+(4*Math.sin(t*2)).toFixed(1)+')'); $('bulbs2').setAttribute('opacity',(1-.6*p(u,TM.guard,TM.guard+.6)).toFixed(2));
rise($('leg2'),p(u,TM.idea_bulbs+1,TM.idea_bulbs+1.5)); rise($('ex2'),p(u,TM.idea_bulbs+1.5,TM.idea_bulbs+2));
$('exl2').setAttribute('stroke-dasharray',u>=TM.guard?'10 12':'none'); rise($('gd2'),p(u,TM.guard,TM.guard+.5));

rise($('fr3'),p(u,TM.two_friends,TM.two_friends+.5));
BB3.forEach((b,i)=>{const a=TM.speech_bubble+i*.7;rise(b,p(u,a,a+.4))});
rise($('card3'),p(u,TM.speech_bubble+2,TM.speech_bubble+2.5));
G3.forEach((r,i)=>{const a=TM.speech_bubble+2.3+i*.08;r.setAttribute('opacity',p(u,a,a+.3))});
rise($('no3'),p(u,TM.speech_bubble+6.2,TM.speech_bubble+6.8));

rise($('per4'),p(u,TM.shrug,TM.shrug+.5)); rise($('ord4'),p(u,TM.shrug+.8,TM.shrug+1.3));
rise($('flow4'),p(u,TM.conversation,TM.conversation+.6));
F4.forEach(([g,r],i)=>{const k=(i*140+t*70)%980,x=380+k;g.setAttribute('transform','translate('+x.toFixed(1)+' 380)');g.setAttribute('opacity',cl(Math.min(k/80,(980-k)/80)).toFixed(2));
  const gd=u>=TM.good_line&&i%3==1;r.setAttribute('fill',gd?'var(--gain)':'var(--stage)');r.setAttribute('stroke',gd?'var(--gain)':'var(--ink)')});
rise($('gl4'),p(u,TM.good_line,TM.good_line+.5)); rise($('same4'),p(u,TM.good_line+4.2,TM.good_line+4.8));

rise($('sub5'),p(u,TM.idea_pile+1.8,TM.idea_pile+2.3));
P5.forEach(([g,r],i)=>{const a=TM.idea_pile+i*.06;rise(g,p(u,a,a+.3));
  const gm=i===21&&u>=TM.gem;r.setAttribute('fill',gm?'var(--gain)':'var(--stage)');r.setAttribute('stroke',gm?'var(--gain)':'var(--ink)');
  g.setAttribute('opacity',i!==21&&i%3!==0?(1-.6*p(u,TM.trash_can+i*.03,TM.trash_can+i*.03+.4)).toFixed(2):1)});
rise($('trash5'),p(u,TM.trash_can,TM.trash_can+.5));
BL5.forEach((b,i)=>{const a=TM.trash_can+.6+i*.5,k=p(u,a,a+.6);b.setAttribute('cy',(300+300*k).toFixed(1));b.setAttribute('opacity',u>=a&&k<1?1:0)});
rise($('gem5'),p(u,TM.gem,TM.gem+.5)); rise($('more5'),p(u,TM.gem+5,TM.gem+5.6));

const X=560+120*p(u,TM.walking_pair,TM.step_forward)+720*p(u,TM.step_forward,TM.step_forward+5), bob=8*Math.abs(Math.sin(t*4)), sF=1-.25*p(u,TM.step_forward,TM.step_forward+5);
$('you6').setAttribute('transform','translate('+X.toFixed(1)+' '+(400-bob).toFixed(1)+')');
$('fear6').setAttribute('transform','translate('+(X-300).toFixed(1)+' '+(400-bob).toFixed(1)+')');
$('fear6s').setAttribute('transform','translate(0 '+(214*(1-sF)).toFixed(1)+') scale('+sF.toFixed(3)+')');
$('fl6').setAttribute('y',(214*(1-sF)-51*sF-40).toFixed(1));
rise($('fear6i'),p(u,TM.fear_shadow,TM.fear_shadow+.6)); rise($('ylab6'),p(u,TM.walking_pair,TM.walking_pair+.5));
rise($('keep6'),p(u,TM.fear_shadow+3.4,TM.fear_shadow+4));
S6.forEach((s,i)=>{const a=TM.step_forward+i*.2;rise(s,p(u,a,a+.4));s.setAttribute('fill',X>660+i*180?'var(--gain)':'var(--line)')});
rise($('stl6'),p(u,TM.step_forward,TM.step_forward+.5));

rise($('cal7'),p(u,TM.calendar,TM.calendar+.5));
C7.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.6+i*.15?'var(--gain)':'var(--stage)'));
rise($('nw7'),p(u,TM.calendar+2,TM.calendar+2.5));
D7.forEach(([g,r],i)=>{const a=TM.rough_draft+i*.3;rise(g,p(u,a,a+.4));const l=i===4&&u>=TM.notebook;r.setAttribute('fill',l?'var(--gain)':'var(--stage)')});
rise($('xs7'),p(u,TM.rough_draft+2.5,TM.rough_draft+3)); rise($('rl7'),p(u,TM.rough_draft+1,TM.rough_draft+1.5));
rise($('arr7'),p(u,TM.notebook,TM.notebook+.6)); rise($('nb7'),p(u,TM.notebook+.6,TM.notebook+1.2));

rise($('q0'),p(u,TM.timer,TM.timer+.5)); rise($('q1'),p(u,TM.timer+.4,TM.timer+.9)); rise($('q2'),p(u,TM.timer+.8,TM.timer+1.3));
rise($('tm8'),p(u,TM.timer+1,TM.timer+1.5));
const f=Math.min(p(u,TM.timer+1.2,TM.timer+5.5),.999), an=-Math.PI/2+2*Math.PI*f;
$('arc8').setAttribute('d',f>0?'M1360 600A90 90 0 '+(f>.5?1:0)+' 1 '+(1360+90*Math.cos(an)).toFixed(1)+' '+(690+90*Math.sin(an)).toFixed(1):'');
rise($('nx8'),p(u,TM.timer+5,TM.timer+5.6));