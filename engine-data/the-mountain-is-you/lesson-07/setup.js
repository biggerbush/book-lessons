const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const at=(P,k)=>{k=cl(k,0,P.length-1);const i=Math.min(P.length-2,Math.floor(k)),f=k-i;return [P[i][0]+(P[i+1][0]-P[i][0])*f,P[i][1]+(P[i+1][1]-P[i][1])*f]};
const CP=[[1160,530],[1250,400],[1230,360],[1285,270]];
fig($('clim'),0,-50,12,'gain');
fig($('pf'),1080,340,30,'gain'); fig($('stk'),1060,660,22,'ink'); fig($('cf'),1180,360,34,'gain'); fig($('tf'),760,680,20,'gain');
let bs='';for(let i=0;i<16;i++){const a=i*Math.PI/8,R=i%2?28:62;bs+=(860+R*Math.cos(a)).toFixed(0)+','+(350+R*Math.sin(a)).toFixed(0)+' '}
mk('polygon',{points:bs,class:'loss'},$('burst'));
let wv='M740 610';for(let x=746;x<=1110;x+=6){const k=(x-740)/370;wv+='L'+x+' '+(610+40*(1-k)*Math.sin(k*28)).toFixed(1)}
mk('path',{d:wv,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('wave'));
const PL=['REST','CONNECTION','SAFETY','MEANING'].map((s,i)=>{const x=300+i*300,g=mk('g',{},$('plants'));
  mk('path',{d:'M'+(x-60)+' 620h120l-15 80h-90z',class:'ink'},g);
  const st=mk('path',{fill:'none',stroke:'var(--ink)','stroke-width':7,'stroke-linecap':'round'},g), fl=mk('circle',{r:24},g);
  const tx=mk('text',{x:x,y:760,'font-size':24,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return {x,g,st,fl}});
const can=mk('g',{opacity:0},$('can'));
mk('rect',{x:-60,y:-40,width:100,height:70,rx:12,class:'gain'},can);
mk('path',{d:'M-50 -40a30 30 0 0 1 60 0',fill:'none',stroke:'var(--gain)','stroke-width':8},can);
mk('path',{d:'M40 -10L90 -40',stroke:'var(--gain)','stroke-width':10,'stroke-linecap':'round'},can);
const DR=[0,1,2].map(()=>mk('circle',{r:6,class:'gain'},can));
for(let x=160;x<=1440;x+=160)mk('path',{d:'M'+x+' 260V740',class:'s-line','stroke-width':2},$('grid'));
for(let y=260;y<=740;y+=120)mk('path',{d:'M160 '+y+'H1440',class:'s-line','stroke-width':2},$('grid'));
const P5=[[160,720],[400,640],[640,520],[760,620],[900,560],[1120,420],[1440,270]];
const CHP=[[860,160,'NOTICE'],[1040,160,'ADJUST'],[1220,240,'KEEP GOING']].map(c=>{const g=mk('g',{},$('steps'));
  mk('rect',{x:c[0],y:772,width:c[1],height:60,rx:30,class:'gain'},g);
  const tx=mk('text',{x:c[0]+c[1]/2,y:810,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=c[2];return g});
const CELLS=[];for(let i=0;i<35;i++)CELLS.push(mk('rect',{x:680+(i%7)*104,y:250+Math.floor(i/7)*78,width:90,height:64,rx:10,stroke:'var(--line)','stroke-width':3},$('cal')));
const FP=[300,360,420,480,540,600].map(x=>[x,800-(x-220)*440/420]).concat([700,780,860,940].map(x=>[x,360+(x-640)*440/420]),[1060,1120,1180].map(x=>[x,800-(x-960)*280/260]));
const FT=FP.map((q,i)=>mk('ellipse',{cx:q[0]+(i%2?8:-8),cy:q[1]-16,rx:9,ry:6,class:'ink'},$('feet')));