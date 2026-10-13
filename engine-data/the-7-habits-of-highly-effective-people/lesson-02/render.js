rise($('t0storm'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
const ps=TM.storm_cloud+4.2;
$('t0bolt').setAttribute('opacity',u<ps?(Math.sin(t*9)>0?1:.35):.25);
$('t0spk').setAttribute('opacity',(p(u,TM.storm_cloud+.8,TM.storm_cloud+1.2)*(1-p(u,ps,ps+.6))).toFixed(2));
rise($('t0pause'),p(u,ps,ps+.5));

rise($('f1man'),p(u,TM.frankl,TM.frankl+.5));
$('f1rect').setAttribute('opacity',p(u,TM.prison_cell,TM.prison_cell+.4));
BARS.forEach((b,i)=>rise(b,p(u,TM.prison_cell+i*.12,TM.prison_cell+i*.12+.4)));
const il=p(u,TM.inner_light,TM.inner_light+.6);
CHP.forEach((c,i)=>{const a=TM.prison_cell+.6+i*.5;rise(c[0],p(u,a,a+.4));const fo=(1-.6*il).toFixed(2);c[1].setAttribute('stroke-opacity',fo);c[2].setAttribute('stroke-opacity',fo)});
rise($('f1one'),p(u,TM.prison_cell+4.2,TM.prison_cell+4.7));
rise($('f1light'),il);rise($('f1resp'),p(u,TM.inner_light+.4,TM.inner_light+1));
$('f1halo').setAttribute('r',(30+8*Math.sin(t*3)).toFixed(1));

const ka=p(u,TM.arrow_event,TM.arrow_event+.8),kb=p(u,TM.your_reply,TM.your_reply+.8);
$('g2in').setAttribute('transform','translate('+(-260*(1-ka)).toFixed(1)+' 0)');$('g2in').setAttribute('opacity',ka);
$('g2out').setAttribute('transform','translate('+(-200*(1-kb)).toFixed(1)+' 0)');$('g2out').setAttribute('opacity',kb);
rise($('g2gap'),p(u,TM.gap_space,TM.gap_space+.6));rise($('g2txt'),p(u,TM.gap_space+1.2,TM.gap_space+1.8));

rise($('r3w'),p(u,TM.split_word,TM.split_word+.5));
$('r3b').setAttribute('transform','translate('+(70*p(u,TM.split_word+1,TM.split_word+1.8)).toFixed(1)+' 0)');
rise($('r3L'),p(u,TM.reactive_guy,TM.reactive_guy+.6));rise($('r3R'),p(u,TM.umbrella_guy,TM.umbrella_guy+.6));
RL.forEach((d,i)=>d.setAttribute('d','M'+(395+i*18)+' '+(505+(t*110+i*29)%70).toFixed(1)+'v14'));
RR.forEach((d,i)=>d.setAttribute('d','M'+(1090+i*28)+' '+(470+(t*110+i*23)%34).toFixed(1)+'v10'));

rise($('w4h'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
W4[0].forEach((g,i)=>{const a=TM.locked_phrase+i*1.8;rise(g,p(u,a,a+.4))});
W4[1].forEach((g,i)=>{const a=TM.open_phrase+i*2;rise(g,p(u,a,a+.4))});
rise($('w4end'),p(u,TM.open_phrase+5.5,TM.open_phrase+6.1));

rise($('c5c'),p(u,TM.big_circle,TM.big_circle+.6));
[0,1,2,3].forEach(i=>{const a=TM.worry_icons+i*.9;rise($('c5i'+i),p(u,a,a+.4))});
rise($('c5r'),p(u,TM.worry_icons+3.8,TM.worry_icons+4.4));
FL.forEach(f=>f.setAttribute('stroke-dashoffset',(-(t*50%26)).toFixed(1)));

rise($('i6c'),p(u,TM.small_circle,TM.small_circle+.6));
const R6=110+80*p(u,TM.growing_ring+4.6,TM.growing_ring+7),ph=(t%2)/2;
$('i6r').setAttribute('r',R6.toFixed(1));$('i6ring').setAttribute('r',(R6+40*ph).toFixed(1));
$('i6ring').setAttribute('opacity',((1-ph)*p(u,TM.growing_ring,TM.growing_ring+.5)).toFixed(2));
const wk=p(u,TM.growing_ring,TM.growing_ring+.6);$('i6w0').setAttribute('opacity',1-wk);rise($('i6w1'),wk);
rise($('i6grow'),p(u,TM.growing_ring+4.6,TM.growing_ring+5.2));
rise($('i6old'),p(u,TM.have_be,TM.have_be+.5));
$('i6s').setAttribute('x2',(952+(W6.v+16)*p(u,TM.have_be+1.2,TM.have_be+1.8)).toFixed(1));
$('i6arr').setAttribute('opacity',p(u,TM.have_be+1.4,TM.have_be+1.8));
rise($('i6new'),p(u,TM.have_be+1.6,TM.have_be+2.2));

rise($('d7cal'),p(u,TM.calendar,TM.calendar+.6));
const nd=Math.floor(30*lin(u,TM.calendar+1,TM.compassion+3));
CEL.forEach((c,i)=>c.setAttribute('fill',i<nd?'var(--gain)':'var(--line)'));
[TM.small_promise,TM.mirror,TM.compassion].forEach((a,i)=>rise($('d7r'+i),p(u,a,a+.5)));

rise($('e8btn'),p(u,TM.pause_button,TM.pause_button+.5));
$('e8ring').setAttribute('r',(110+30*ph).toFixed(1));$('e8ring').setAttribute('opacity',(1-ph).toFixed(2));
rise($('e8a'),p(u,TM.pause_button+.3,TM.pause_button+.8));
rise($('e8b'),p(u,TM.pause_button+4.6,TM.pause_button+5.1));rise($('e8c'),p(u,TM.pause_button+5,TM.pause_button+5.5));