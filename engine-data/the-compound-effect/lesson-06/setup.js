const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const txt=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const IN=[0,1,2,3].map(i=>mk('circle',{r:8+(i%2)*4,fill:i===2?'var(--gain)':'var(--muted)'},$('ins')));
const CD=['NEWS','SHOWS','SCROLL'].map((s,i)=>{const g=mk('g',{},$('cards')),y=270+i*100;const r=mk('rect',{x:120,y:y,width:280,height:76,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);txt(g,260,y+47,s,{class:'m','font-size':24,'text-anchor':'middle'});return [g,r]});
const PK=[0,1,2,3,4,5].map(()=>mk('rect',{y:411,width:18,height:18,rx:4},$('pk')));
const CL=[];for(let i=0;i<35;i++)CL.push(mk('rect',{x:984+(i%7)*70,y:330+Math.floor(i/7)*62,width:56,height:50,rx:8,fill:'var(--line)'},$('cells')));
const FD=[],FL=[];for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3,x=+(400+210*Math.cos(a)).toFixed(1),y=+(500+210*Math.sin(a)-40).toFixed(1);
  FL.push(mk('path',{d:'M'+x+' '+(y+40)+'L400 500',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'10 12'},$('plines')));
  const g=mk('g',{},$('pfr'));fig(g,x,y,22,'ink');FD.push(g)}
const RW=[];for(let i=0;i<5;i++){const y=230+i*110,o=mk('g',{},$('rows')),g=mk('g',{},o);
  mk('rect',{x:120,y:y,width:640,height:90,rx:14,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  const av=mk('circle',{cx:175,cy:y+45,r:24,fill:'var(--ink)'},g);
  mk('rect',{x:220,y:y+26,width:220,height:14,rx:7,fill:'var(--line)'},g);mk('rect',{x:220,y:y+52,width:140,height:10,rx:5,fill:'var(--line)'},g);
  const tg=mk('g',{},o);
  if(i<4){const h=i<2;mk('rect',{x:590,y:y+22,width:150,height:46,rx:23,fill:h?'var(--gain)':'none',stroke:h?'var(--gain)':'var(--muted)','stroke-width':3},tg);
    const at={class:'m','font-size':20,'text-anchor':'middle'};if(h)at.style='fill:var(--on-gain)';txt(tg,665,y+52,h?'3 HOURS':'3 MIN',at)}
  else mk('path',{d:'M140 '+(y+45)+'H740',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},tg);
  RW.push([o,g,av,tg])}
[1000,1160,1320].forEach(x=>fig($('mt'),x,640,26,'gain'));
[[230,500,90,60,-12],[330,490,70,70,8],[420,510,120,50,-4],[540,470,60,90,15],[260,600,80,40,20],[480,610,100,30,-10],[640,590,50,50,30]].forEach((q,i)=>{
  mk('rect',{x:q[0],y:q[1],width:q[2],height:q[3],rx:4,transform:'rotate('+q[4]+' '+(q[0]+q[2]/2)+' '+(q[1]+q[3]/2)+')',fill:i%2?'var(--loss)':'var(--stage)','fill-opacity':i%2?.5:1,stroke:'var(--ink)','stroke-width':4},$('mess'))});
const RG=[[440,330,'var(--loss)'],[1160,330,'var(--gain)']].map((q,j)=>{mk('circle',{cx:q[0],cy:q[1],r:10,fill:q[2]},$('sig'+j));return [0,1,2].map(()=>mk('circle',{cx:q[0],cy:q[1],fill:'none',stroke:q[2],'stroke-width':4},$('sig'+j)))});
const ST=[];const DR=[['ONE SHOW',240],['ONE CHAT',520],['ONE MESSY CORNER',800]].map(([s,x])=>{const g=mk('g',{},$('drops'));
  mk('path',{d:'M'+x+' 214C'+(x+30)+' 254 '+(x+24)+' 274 '+x+' 274C'+(x-24)+' 274 '+(x-30)+' 254 '+x+' 214Z',fill:'var(--muted)'},g);
  txt(g,x,312,s,{class:'m','font-size':20,'text-anchor':'middle'});
  ST.push(mk('path',{d:'M'+x+' 340C'+x+' 470 760 560 900 560',fill:'none',stroke:'var(--muted)','stroke-width':8,'stroke-linecap':'round','stroke-dasharray':'14 18'},$('streams')));return g});
// challenge icons
fig($('amb'),1340,426,14,'gain'); fig($('you7'),1200,426,14,'ink');
const CLT=[[1218,590,40,28,-14],[1262,594,30,24,10],[1330,588,44,30,-6],[1350,600,26,18,18]].map((q,i)=>mk('rect',{x:q[0],y:q[1],width:q[2],height:q[3],rx:4,transform:'rotate('+q[4]+' '+(q[0]+q[2]/2)+' '+(q[1]+q[3]/2)+')',fill:i%2?'var(--loss)':'var(--stage)','fill-opacity':i%2?.5:1,stroke:'var(--ink)','stroke-width':4},$('clut')));