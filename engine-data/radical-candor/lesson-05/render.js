$('face').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')');
rise($('spin0'),p(u,TM.spinach,TM.spinach+.5)); rise($('qb0'),p(u,TM.spinach+5.8,TM.spinach+6.3));

const cw=p(u,TM.colleague,TM.colleague+3), yw=p(u,TM.whisper,TM.whisper+1.2);
$('col').setAttribute('transform','translate('+(560+260*cw).toFixed(1)+' 0)'); $('col').setAttribute('opacity',p(u,TM.colleague,TM.colleague+.5));
$('you1').setAttribute('transform','translate('+(260+420*yw).toFixed(1)+' 0)'); $('you1').setAttribute('opacity',p(u,TM.whisper,TM.whisper+.4));
rise($('wb'),p(u,TM.whisper+1,TM.whisper+1.5)); sp1.setAttribute('opacity',1-p(u,TM.whisper+2.4,TM.whisper+3)); rise($('ok1'),p(u,TM.whisper+3,TM.whisper+3.5));
Q4.forEach((g,i)=>{const a=TM.whisper+5.8+i*.4; rise(g,p(u,a,a+.5))});

rise($('magw'),p(u,TM.magnifier,TM.magnifier+.5));
$('mag').setAttribute('transform','translate('+(10*Math.sin(t*1.2)).toFixed(1)+' '+(8*Math.cos(t*.9)).toFixed(1)+')');
rise($('hb2'),p(u,TM.magnifier+1.4,TM.magnifier+1.9)); rise($('qm'),p(u,TM.magnifier+1.8,TM.magnifier+2.3));
rise($('bub2'),p(u,TM.speech_bubble,TM.speech_bubble+.5)); rise($('ppl2'),p(u,TM.speech_bubble+.3,TM.speech_bubble+.8)); rise($('corr'),p(u,TM.speech_bubble+2,TM.speech_bubble+2.6));

rise($('tb'),p(u,TM.toolbox,TM.toolbox+.5)); rise($('nf'),p(u,TM.toolbox+1.4,TM.toolbox+1.9));
sk('k3a',p(u,TM.toolbox+2.2,TM.toolbox+2.7)); sk('k3b',p(u,TM.toolbox+2.8,TM.toolbox+3.4));
rise($('tg'),p(u,TM.target,TM.target+.5));
const ak=1-p(u,TM.target+.6,TM.target+1.2);
$('arr').setAttribute('transform','translate('+(1080+200*ak).toFixed(1)+' '+(470-128*ak).toFixed(1)+')'); $('arr').setAttribute('opacity',p(u,TM.target+.6,TM.target+.8));
rise($('bo'),p(u,TM.target+2,TM.target+2.6));

rise($('clk'),p(u,TM.clock,TM.clock+.5));
$('h1').setAttribute('transform','rotate('+(t*20).toFixed(1)+' 260 420)'); $('h2').setAttribute('transform','rotate('+(t*120).toFixed(1)+' 260 420)');
rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); sk('arcL',p(u,TM.calendar+.5,TM.calendar+2)); rise($('gone'),p(u,TM.calendar+2,TM.calendar+2.5));
rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5)); sk('arcG',p(u,TM.stopwatch+.3,TM.stopwatch+.9));
$('swh').setAttribute('transform','rotate('+(360*p(u,TM.stopwatch,TM.stopwatch+4)).toFixed(1)+' 560 430)');
rise($('fast'),p(u,TM.stopwatch+1.5,TM.stopwatch+2.1));

rise($('lap'),p(u,TM.laptop,TM.laptop+.5)); rise($('bl'),p(u,TM.laptop+3.4,TM.laptop+3.8));
rise($('fc'),p(u,TM.faces,TM.faces+.5));
const sm=p(u,TM.faces+2,TM.faces+3); mB.setAttribute('d','M1346 336q14 '+(sm*12).toFixed(1)+' 28 0');
W5.forEach((w,i)=>w.setAttribute('opacity',(.3+.7*(.5+.5*Math.sin(t*4-i*1.2))).toFixed(2)));
rise($('rk'),p(u,TM.faces+5.4,TM.faces+6));

rise($('pr'),p(u,TM.closed_door,TM.closed_door+.5)); rise($('pu'),p(u,TM.spotlight,TM.spotlight+.5));
$('cone').setAttribute('fill-opacity',(.22+.08*Math.sin(t*2)).toFixed(2));
[TM.spotlight+6.2,TM.label].forEach((a,i)=>{rise($('r6o'+i),p(u,a,a+.4)); sk('k6'+i,p(u,a+.8,a+1.3)); rise($('r6n'+i),p(u,a+1.2,a+1.7))});

rise($('big'),p(u,TM.small_notes,TM.small_notes+.5)); sk('bx',p(u,TM.small_notes+5,TM.small_notes+5.6));
NT.forEach((n,i)=>{const a=TM.small_notes+.6+i*.12; n.setAttribute('opacity',p(u,a,a+.3))});
rise($('nlab'),p(u,TM.small_notes+.6,TM.small_notes+1.1));
rise($('tm'),p(u,TM.trust_meter,TM.trust_meter+.5));
const tr=p(u,TM.trust_meter+.5,TM.trust_meter+3); sk('tarc',tr);
$('ndl').setAttribute('transform','rotate('+(-80+160*tr).toFixed(1)+' 1100 780)');
rise($('tt'),p(u,TM.trust_meter+1,TM.trust_meter+1.6));

const s8=SC[8][0]/K;
rise($('gfx'),p(u,s8+.2,s8+.7)); $('gh').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 1370 300)');
rise($('qa'),p(u,s8+.4,s8+.9)); rise($('qb'),p(u,s8+1,s8+1.5)); rise($('qc'),p(u,s8+4.6,s8+5.1)); rise($('qlab'),p(u,s8+9.6,s8+10.1));