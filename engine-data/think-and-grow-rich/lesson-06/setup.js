const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
fig($('unc'),0,540,24,'ink');
const NX=[450,530,610,690];
const NB=NX.map(x=>fig(mk('g',{},$('nb')),x,420,22,'ink'));
const CO=NX.map(x=>[x,mk('circle',{r:12,class:'gain'},$('coins'))]);
fig($('pair'),1000,600,24,'ink');fig($('pair'),1070,600,24,'gain');
fig($('jm'),820,720,24,'ink');
fig($('eng'),1200,200,24,'ink');
const CN=[];for(let i=0;i<5;i++){const h=4+(i*3)%5;for(let j=0;j<h;j++)CN.push([mk('rect',{x:980+i*94,y:786-j*16,width:72,height:12,rx:6,class:'gain'},$('stk')),j*.15+i*.05])}
fig($('dby'),240,430,36,'gain');
const CU=[640,770,900].map(x=>{const g=fig(mk('g',{},$('cus')),x,460,26,'ink'),b=mk('g',{},$('cus'));
  mk('rect',{x:x-42,y:350,width:84,height:52,rx:16,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},b);
  const tx=mk('text',{x:x,y:388,'font-size':30,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},b);tx.textContent='NO';return [g,b]});
const DT=[];for(let i=0;i<14;i++){const w=i>=12;DT.push([mk('circle',{r:12,class:'ink'},$('dots')),180+(i%4)*40,w?(i===12?1110:1190):905+(i%4)*40,w?366:446-Math.floor(i/4)*26,w?5:4,w])}
const BR=[[480,320,120,'gain','DECIDE'],[620,320,520,'gain','CHANGE MIND SLOWLY'],[480,490,520,'loss','DECIDE SLOWLY'],[1020,490,120,'loss','ABANDON']].map(b=>{const g=mk('g',{},$('bars'));
  const r=mk('rect',{x:b[0],y:b[1],width:0,height:60,rx:12,fill:'var(--'+b[3]+')','fill-opacity':.25,stroke:'var(--'+b[3]+')','stroke-width':4},g);
  const tx=mk('text',{x:b[0]+b[2]/2,y:b[1]+38,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=b[4];return [r,tx,b[2]]});