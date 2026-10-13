const T0=TM.title_card;
rise($('tPpl'),p(u,T0,T0+.6));
$('tStarG').setAttribute('opacity',(p(u,T0+.3,T0+.8)*(1-p(u,T0+2.4,T0+3))).toFixed(2));
star.setAttribute('transform','rotate('+(t*30%360).toFixed(1)+' 1180 220)');
rise($('tQ'),p(u,T0+2.6,T0+3.1));

const W=TM.wagging_tail;
rise($('dog'),p(u,TM.dog,TM.dog+.5));
$('tail').setAttribute('transform','rotate('+(u>=W+4.2?Math.sin(t*14)*28:0).toFixed(1)+' 465 560)');
$('dogB').setAttribute('transform','translate(0 '+(u>=W+4.2?-Math.abs(Math.sin(t*5))*14:0).toFixed(1)+')');
rise($('pod'),p(u,W,W+.5)); $('podX').setAttribute('opacity',p(u,W+1,W+1.4));
rise($('dogP'),p(u,W+4.2,W+4.7));
rise($('hearts'),p(u,TM.heart,TM.heart+.5));
[[900,440],[985,370],[1050,470]].forEach((q,i)=>HR[i].setAttribute('transform','translate('+q[0]+' '+(q[1]-10*Math.sin(t*2+i*2)).toFixed(1)+') scale(.3)'));
rise($('dogMsg'),p(u,TM.heart+.6,TM.heart+1.2));

rise($('table'),p(u,TM.dinner_table,TM.dinner_table+.5));
rise($('plant'),p(u,TM.potted_plant,TM.potted_plant+.5));
[...$('qs').children].forEach((e,i)=>{const a=TM.potted_plant+1+i*.4;e.setAttribute('opacity',p(u,a,a+.3))});
rise($('clk'),p(u,TM.clock,TM.clock+.5)); rise($('bBub'),p(u,TM.clock+.6,TM.clock+1.1));
const hr=p(u,TM.clock,TM.clock+6);
$('hand').setAttribute('transform','rotate('+(360*6*hr).toFixed(1)+' 1340 320)');
$('hand2').setAttribute('transform','rotate('+(180*hr).toFixed(1)+' 1340 320)');

const S=TM.speech_bubble,Z=TM.zipped_mouth;
rise($('s3ppl'),p(u,S,S+.5)); rise($('bub3'),p(u,S+.4,S+.9)); rise($('quote'),p(u,S+5.4,S+5.9));
rise($('zip'),p(u,Z,Z+.5)); rise($('bars'),p(u,Z+.8,Z+1.3));
const bw=p(u,Z+1,Z+2.2); $('barB').setAttribute('width',(560*bw).toFixed(1)); $('barC').setAttribute('width',(24*bw).toFixed(1));
rise($('heard'),p(u,Z+3,Z+3.6));

rise($('mir'),p(u,TM.mirror,TM.mirror+.5));
rise($('ear'),p(u,TM.open_ear,TM.open_ear+.5));
WV.forEach((w,i)=>{const k=((t*1.2-i*.3)%1+1)%1;w.setAttribute('opacity',(u>=TM.open_ear?1-k:0).toFixed(2))});
[0,1,2].forEach(i=>{const a=TM.question_mark+i*.8;rise($('qc'+i),p(u,a,a+.4))});
rise($('talk'),p(u,TM.question_mark+3,TM.question_mark+3.6));

rise($('tag'),p(u,TM.name_tag,TM.name_tag+.5)); rise($('sweet'),p(u,TM.name_tag+1.4,TM.name_tag+2));
rise($('far'),p(u,TM.jim_farley,TM.jim_farley+.5));
const fp=p(u,TM.jim_farley+.3,TM.jim_farley+2.5);
$('farN').textContent=Math.round(50000*fp).toLocaleString('en-US');
DT.forEach((d,i)=>d.setAttribute('fill',i<90*fp?'var(--gain)':'var(--line)'));
rise($('wh'),p(u,TM.white_house,TM.white_house+.5)); rise($('whT'),p(u,TM.white_house+.5,TM.white_house+1));

const N=TM.neighbor_kids,M=TM.steel_mill;
rise($('rabs'),p(u,TM.rabbits,TM.rabbits+.5)); rise($('bowl'),p(u,TM.rabbits+.6,TM.rabbits+1.1));
rise($('boys'),p(u,N,N+.5)); rise($('rtags'),p(u,N+1.5,N+2));
rise($('food'),p(u,N+5.4,N+5.9)); rise($('happy'),p(u,N+5.4,N+6));
rise($('mill'),p(u,M,M+.5)); rise($('sign'),p(u,M+3,M+3.5)); rise($('track'),p(u,M+.5,M+1));
SM.forEach((c,i)=>{const k=((t*.5+i/3)%1);c.setAttribute('cy',(370-k*120).toFixed(1));c.setAttribute('r',(12+k*14).toFixed(1));c.setAttribute('opacity',(1-k).toFixed(2))});
$('rails').setAttribute('stroke',u>=M+7.8?'var(--gain)':'var(--ink)');
rise($('bought'),p(u,M+7.8,M+8.4));

rise($('k0'),p(u,TM.notebook,TM.notebook+.5)); rise($('k1'),p(u,TM.pen,TM.pen+.5)); rise($('k2'),p(u,TM.coffee_cup,TM.coffee_cup+.5));
TL.forEach((r,i)=>r.setAttribute('fill',u>=TM.pen+.6+i*.4?'var(--gain)':'var(--stage)'));
ST.forEach((s,i)=>s.setAttribute('transform','translate('+(4*Math.sin(t*2+i)).toFixed(1)+' '+(-6*Math.abs(Math.sin(t*1.5+i))).toFixed(1)+')'));
rise($('care'),p(u,TM.coffee_cup+4.6,TM.coffee_cup+5.2));

const C=TM.calendar;
rise($('qa'),p(u,C,C+.5)); rise($('qb'),p(u,C+.4,C+.9)); rise($('qc'),p(u,C+.8,C+1.3));
rise($('cal'),p(u,C+1.2,C+1.7));
DY.forEach((d,i)=>d.setAttribute('fill',i===6&&u>=C+1.8?'var(--gain)':'var(--line)'));
DY[6].setAttribute('opacity',u>=C+1.8?(.6+.4*Math.abs(Math.sin(t*3))).toFixed(2):1);