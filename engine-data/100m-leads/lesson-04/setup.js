const fig=(g,x,y,r,cls)=>{const o=cls?{class:cls}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},o),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},o),g);return g};
const FD=[0,1,2].map(i=>{const g=mk('g',{},$('feed'));const r=mk('rect',{x:1205,y:0,width:190,height:110,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('circle',{cx:1232,cy:28,r:12,fill:'var(--muted)'},g);mk('rect',{x:1252,y:22,width:110,height:12,rx:6,fill:'var(--line)'},g);const n=mk('rect',{x:1220,y:56,width:160,height:38,rx:6,fill:'var(--line)'},g);return [g,r,n]});
fig($('stranger'),1040,660,26,'ink');
const AU=[];for(let i=0;i<15;i++){const x=560+(i%5)*110,y=300+Math.floor(i/5)*130;mk('path',{d:'M350 430L'+x+' '+y,class:'s-line','stroke-width':3,'stroke-dasharray':'6 10'},$('rays'));AU.push(fig(mk('g',{},$('aud')),x,y,18,'ink'))}
fig($('vfig'),1300,380,40,'ink');
const CR=[];for(let i=0;i<12;i++)CR.push(fig(mk('g',{},$('crowd')),180+i*100,720,16));
let RL=1400;try{RL=$('ret').getTotalLength()||1400}catch(e){}
const GV=[];for(let i=0;i<6;i++)GV.push(mk('rect',{x:-100+(i%3)*68,y:102-36*Math.floor(i/3),width:62,height:34,rx:4,class:'gain'},$('gives')));
fig($('ofig'),290,400,44,'ink');
const VW=[1120,1255,1390].map(x=>fig(mk('g',{},$('viewers')),x,600,22,'ink'));
const SQ=[];for(let i=0;i<10;i++)SQ.push(mk('rect',{x:700+(i%5)*44,y:314+Math.floor(i/5)*42,width:32,height:32,rx:6,fill:'var(--line)'},$('sqs')));
const EX=[1270,1345,1420].map(x=>mk('circle',{cx:x,cy:350,r:0,class:'gain'},$('exps')));
const DT=[];for(let m=0;m<6;m++){const x0=680+m*136;mk('rect',{x:x0,y:470,width:120,height:270,rx:12,fill:'none',stroke:'var(--line)','stroke-width':3},$('months'));for(let i=0;i<20;i++)DT.push(mk('circle',{cx:x0+20+(i%4)*27,cy:510+Math.floor(i/4)*48,r:8},$('months')))}
const PLW=[140,130,80];