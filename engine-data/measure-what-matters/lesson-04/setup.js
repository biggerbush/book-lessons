const per=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const tx=(g,x,y,s,fs,a)=>{const e=mk('text',{x:x,y:y,'font-size':fs,'text-anchor':a||'start',class:'m'},g);e.textContent=s;return e};
const G=par=>mk('g',{},par);
const FL=[];for(let i=0;i<6;i++){const a=i*Math.PI/3+.6,x=(1300+165*Math.cos(a)).toFixed(0),y=430+165*Math.sin(a),g=G($('flags'));
  mk('path',{d:`M${x} ${y}v-46`,class:'s-ink','stroke-width':4,'stroke-linecap':'round'},g);mk('path',{d:`M${x} ${y-46}l30 10-30 10z`,fill:['var(--gain)','var(--loss)','var(--ink)'][i%3]},g);FL.push(g)}
[2.6,-.5,1.9,-2.2].forEach((a,i)=>{const x=1240+i*40;mk('path',{d:`M${x} 430l${(70*Math.cos(a)).toFixed(0)} ${(70*Math.sin(a)).toFixed(0)}`,class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('oars'));mk('circle',{cx:x,cy:430,r:13,class:'ink'},$('oars'))});
['TEAM A','TEAM B','TEAM C'].forEach((n,k)=>{const x=120+k*480,g=$('rooms');
  mk('rect',{x:x,y:240,width:400,height:320,rx:14,fill:'var(--stage)',class:'s-ink','stroke-width':5},g);
  mk('rect',{x:x+24,y:262,width:48,height:62,rx:4,fill:'var(--stage)',class:'s-ink','stroke-width':4},g);
  mk('path',{d:`M${x+34} 282h28M${x+34} 296h20`,class:'s-line','stroke-width':4},g);
  mk('rect',{x:x+54,y:304,width:26,height:20,rx:3,class:'ink'},g);
  mk('path',{d:`M${x+59} 304v-7a8 8 0 0 1 16 0v7`,fill:'none',class:'s-ink','stroke-width':4},g);
  [100,200,300].forEach(o=>per(g,x+o,430,20,'ink'));tx(g,x+200,600,n,22,'middle')});
per($('blkp'),1280,430,20,'loss');
const CD=[];for(let i=0;i<8;i++){const x=400+(i%4)*210,y=420+Math.floor(i/4)*130,g=G($('cards'));
  mk('rect',{x:x,y:y,width:190,height:100,rx:10,fill:'var(--stage)',class:'s-ink','stroke-width':4},g);
  mk('circle',{cx:x+30,cy:y+32,r:12,class:'ink'},g);mk('path',{d:`M${x+54} ${y+32}h110M${x+20} ${y+70}h150`,class:'s-line','stroke-width':6,'stroke-linecap':'round'},g);CD.push(g)}
[190,290,1310,1410].forEach(x=>per($('view'),x,560,20,'gain'));
const NP=[[560,280],[290,440],[560,440],[830,440],[200,620],[380,620],[560,620],[740,620],[920,620]],ED=[[0,1],[0,2],[0,3],[1,4],[1,5],[2,6],[3,7],[3,8]];
ED.forEach(([a,b])=>mk('path',{d:`M${NP[a][0]} ${NP[a][1]+30}L${NP[b][0]} ${NP[b][1]-30}`,class:'s-line','stroke-width':4},$('tree')));
const NR=NP.map(([x,y])=>mk('rect',{x:x-75,y:y-30,width:150,height:60,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('tree')));
const NT=NP.map(([x,y])=>tx($('tree'),x,y+8,'',20,'middle'));
[700,780].forEach(x=>{mk('path',{d:`M${x-24} 720Q${x} 696 ${x+24} 720Q${x} 744 ${x-24} 720Z`,fill:'var(--stage)',class:'s-ink','stroke-width':4},$('eyes'));mk('circle',{cx:x,cy:720,r:7,class:'ink'},$('eyes'))});
const SG=[],PC=[],BR=[];
['LEADERS','LAYER 2','LAYER 3','LAYER 4'].forEach((n,i)=>{const x=120+i*220,y=240+i*140,g=G($('steps'));
  mk('rect',{x:x,y:y,width:300,height:96,rx:12,fill:'var(--stage)',class:'s-ink','stroke-width':5},g);tx(g,x+20,y+82,n,18);
  if(i<3)mk('path',{d:`M${x+250} ${y+104}v30m-12-12 12 12 12-12`,fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  const pg=G(g);for(let k=0;k<4;k++)if(i==0||k==i)BR.push(mk('rect',{x:x+20+k*66,y:y+16,width:54,height:30,rx:6,class:'gain'},i?pg:g));SG.push(g);PC.push(pg)});
for(let k=0;k<12;k++){const a=k*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(1300+92*c).toFixed(1)} ${(370+92*s).toFixed(1)}L${(1300+102*c).toFixed(1)} ${(370+102*s).toFixed(1)}`,class:'s-ink','stroke-width':4},$('tk'))}
[1180,1260,1340].forEach(x=>{per($('otk'),x,640,16,'ink');mk('path',{d:`M${x-10} 596l10 10 10-10`,fill:'none',class:'s-loss','stroke-width':4,'stroke-linecap':'round'},$('otk'))});
const TX=[200,320,440,560,680];TX.forEach(x=>per($('team'),x,600,20,'ink'));
const BB=TX.map(x=>mk('circle',{cx:x,cy:560,r:14,class:'gain'},$('bub')));
[1180,1290,1400].forEach(x=>{per($('cust'),x,600,20,'ink');mk('circle',{cx:x,cy:520,r:22,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},$('cust'));const e=tx($('cust'),x,531,'!',30,'middle');e.setAttribute('class','d');e.style.fill='var(--loss)'});
[260,670,1080].forEach(x=>{mk('rect',{x:x,y:640,width:260,height:80,rx:14,fill:'var(--stage)',class:'s-ink','stroke-width':5},$('teams6'));tx($('teams6'),x+130,688,'TEAM',20,'middle')});
const SD=[0,1,2,3].map(()=>mk('circle',{r:9,class:'gain',cy:680},$('sdots')));
[700,900].forEach(x=>per($('pp2'),x,480,22,'ink'));