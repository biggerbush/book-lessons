const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
fig($('walker'),0,0,22,'ink');
fig($('nzf'),220,280,36,'ink');
for(let i=0;i<3;i++){const y=300+i*46;mk('rect',{x:140,y:y,width:200,height:26,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('cigs'));mk('rect',{x:140,y:y,width:56,height:26,rx:4,class:'gain'},$('cigs'))}
[160,230,300].forEach(x=>fig($('look'),x,680,18,'ink'));
const MEN=[300,560].map(y=>fig($('men'),260,y,30,'loss'));
fig($('kid'),1260,330,18,'gain');
for(let i=0;i<4;i++)mk('rect',{x:1180+(i%2)*10,y:660-i*30,width:170,height:26,rx:4,fill:i===3?'none':'var(--ink)',stroke:i===3?'var(--gain)':'var(--ink)','stroke-width':4,'stroke-dasharray':i===3?'8 6':'none'},$('bk'));
const HF=fig($('hf'),760,420,34,'ink');
const BR=[...Array(8)].map((_,i)=>[mk('rect',{x:190+i*86,y:640,width:56,height:0,class:i===5?'loss':'ink'},$('bars')),i===5?320:40+(i*37%5)*8]);
fig($('pr'),1000,470,24,'ink');
const SCR=[];for(let i=0;i<12;i++){const x=580+(i%3)*126,y=260+Math.floor(i/3)*108,o=mk('g',{},$('scr')),g=mk('g',{transform:'rotate('+((i*7%5)-2)*2+' '+(x+55)+' '+(y+46)+')'},o);
  mk('rect',{x:x,y:y,width:110,height:92,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},g);
  mk('path',{d:'M'+(x+14)+' '+(y+34)+'q8-12 16 0t16 0t16 0t16 0M'+(x+14)+' '+(y+64)+'q8-12 16 0t16 0t16 0',fill:'none',stroke:'var(--ink)','stroke-width':3,'stroke-linecap':'round'},g);SCR.push(o)}
fig($('pw'),0,0,26,'ink');