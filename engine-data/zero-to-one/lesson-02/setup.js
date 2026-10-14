const fig=(g,x,y,r,c)=>{const h=mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g);return h};
fig($('t_fig'),1200,380,28,'ink');fig($('t_fig'),1400,380,28,'gain');
fig($('thf'),260,620,36,'ink');fig($('cand'),1200,575,30,'gain');
const ECH=[230,410,590].map(x=>{fig($('stud'),x,500,22,'ink');mk('rect',{x:x-60,y:595,width:120,height:12,rx:4,class:'ink'},$('stud'));
  const b=mk('g',{},$('stud'));mk('rect',{x:x-58,y:418,width:116,height:48,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},b);
  mk('text',{x:x,y:451,'font-size':24,'text-anchor':'middle',class:'m'},b).textContent='SAME';return b});
for(let i=0;i<5;i++)fig($('crowd2'),880+i*70,500,20,'ink');
fig($('crowd2'),1390,480,26,'gain');
const NH=[];for(let i=0;i<8;i++)NH.push(fig($('nod'),170+i*90,430,22,'ink'));
fig($('npf'),795,562,9,'ink');
const WIN=[[230,480],[390,480],[230,580],[390,580]].map(q=>mk('rect',{x:q[0],y:q[1],width:100,height:70,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('wins')));
fig($('travp'),1240,520,30,'ink');
const DT=[];for(let i=0;i<5;i++)DT.push(mk('circle',{cx:600,cy:580,r:9,class:'gain'},$('dots')));
let sd='M150 600H170';for(let k=0;k<8;k++)sd+='h40'+(k<7?'v-14':'');$('stp').setAttribute('d',sd);
const CL=mk('g',{},$('climb'));fig(CL,0,-50,12,'gain');
fig($('peek'),960,482,18,'ink');fig($('sit'),1260,410,26,'gain');
for(let i=0;i<10;i++){const a=i*Math.PI/5;mk('circle',{cx:(300+125*Math.cos(a)).toFixed(1),cy:(440+125*Math.sin(a)).toFixed(1),r:18,class:'ink'},$('spot'))}
for(let i=0;i<7;i++)mk('circle',{cx:1180,cy:290+i*40,r:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spir'));