const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const setc=(a,c)=>a.forEach(e=>e.setAttribute('class',c));
[[1150,'M1185 540Q1230 560 1262 590'],[1450,'M1415 540Q1370 560 1338 590']].forEach(q=>{fig($('helpers'),q[0],450,20,'ink');mk('path',{d:q[1],fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 8','stroke-linecap':'round'},$('helpers'))});
fig($('par'),760,380,46,'ink');fig($('par'),880,480,28,'gain');mk('path',{d:'M660 600H960',class:'s-line','stroke-width':5,'stroke-linecap':'round'},$('par'));
fig($('kid2'),1300,330,30,'gain');
fig($('coachg'),360,340,32,'ink');
for(let i=0;i<5;i++)fig($('teamg'),300+i*150,700,16,'gain');
const CK=[340,410,480,550].map(y=>{mk('rect',{x:175,y:y-22,width:28,height:28,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':4},$('clipr'));mk('path',{d:'M224 '+(y-8)+'H360',class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('clipr'));
  return mk('path',{d:'M180 '+(y-9)+'l8 10 16-22',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('clipr'))});
for(let i=0;i<4;i++){mk('path',{d:'M'+(500+i*320)+' 280V620',class:'s-line','stroke-width':3,'stroke-dasharray':'6 8'},$('cal'));if(i<3){const tx=mk('text',{x:660+i*320,y:262,'font-size':20,'text-anchor':'middle',class:'m'},$('cal'));tx.textContent='YEAR '+(i+1)}}
const FAM=[[280,26],[380,26],[480,18],[560,18]].map((q,i)=>fig($('fam'),q[0],700-q[1]*4.2,q[1],i<2?'ink':'gain'));
// practice calendar: daily checkmarks
const CALC=[];for(let r=0;r<3;r++)for(let c=0;c<3;c++){const x=1334+c*38,y=340+r*34;
  CALC.push(mk('path',{d:'M'+x+' '+y+'l9 10 18-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('calck')))}
let op='';for(let i=0;i<8;i++){const a=Math.PI/8+i*Math.PI/4;op+=(1380+70*Math.cos(a)).toFixed(1)+','+(645+70*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:op,class:'loss'},$('stopo'));
const MN=['SPORTS','MUSIC','DEBATE'].map((s,i)=>{const y=240+i*125,r=mk('rect',{x:120,y:y,width:480,height:100,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('menu')),tx=mk('text',{x:160,y:y+64,'font-size':40,class:'d5'},$('menu'));tx.textContent=s;return [r,tx]});
for(let i=0;i<6;i++)fig($('grp'),300+i*100,460,26,'gain');
const YOU=fig($('youm'),1100,460,26,'ink');
fig($('refl'),1350,400,24,'gain');