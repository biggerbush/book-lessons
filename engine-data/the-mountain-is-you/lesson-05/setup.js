const fig=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)};
const CI='var(--ink)',CG='var(--gain)',CL='var(--loss)',CM='var(--muted)';
fig($('clim'),1220,476,20,CI);
const rocks=[[1143,532],[1157,532],[1171,532],[1150,514],[1164,514],[1143,496],[1171,496],[1157,478],[1157,458]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:9,fill:CL,stroke:'var(--stage)','stroke-width':2},$('rocks')));
fig($('phP'),330,350,40,CM);
const tags=['THE SHY ONE','THE FAILURE','THE ONE WHO GOT LEFT'].map((s,i)=>{const g=mk('g',{},$('tags'));mk('rect',{x:580,y:270+i*90,width:400,height:64,rx:32,fill:'var(--stage)',stroke:CL,'stroke-width':4},g);const tx=mk('text',{x:780,y:310+i*90,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
fig($('lean'),620,592,40,CI);
fig($('cpl'),320,380,40,CI);fig($('cpl'),500,380,40,CI);
for(let i=0;i<20;i++)mk('rect',{x:180+(i%5)*46,y:320+Math.floor(i/5)*46,width:34,height:34,rx:6,fill:i<13?'var(--line)':'var(--stage)',stroke:'var(--line)','stroke-width':2},$('days'));
mk('circle',{cx:289,cy:429,r:26,fill:'none',stroke:CL,'stroke-width':5},$('days'));
const pans=[0,1].map(()=>{const g=mk('g',{},$('pans'));mk('path',{d:'M-55 70L0 0L55 70',fill:'none',stroke:CM,'stroke-width':3},g);mk('path',{d:'M-60 70a60 30 0 0 0 120 0z',fill:CI},g);return g});
const balls=[0,1,2,3,4].map(()=>mk('circle',{r:9},$('balls')));
const FP=[];for(let i=0;i<9;i++){const x=300+i*110;FP.push([x,mk('ellipse',{cx:x,cy:i%2?612:590,rx:16,ry:9,fill:CI},$('fp'))])}
fig($('wk'),0,451,26,CI);
fig($('then'),300,400,44,CM);
fig($('mirP'),640,400,44,CG);