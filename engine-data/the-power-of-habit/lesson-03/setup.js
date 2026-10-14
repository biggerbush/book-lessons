const ps=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const bot=(g,x,y,s)=>{mk('rect',{x:x-14*s,y:y-26*s,width:28*s,height:26*s,class:'ink'},g);mk('rect',{x:x-26*s,y:y-56*s,width:66*s,height:32*s,rx:6*s,class:'ink'},g);mk('rect',{x:x+40*s,y:y-50*s,width:14*s,height:12*s,class:'ink'},g);
  mk('path',{d:`M${x+12*s} ${y-24*s}l${14*s} ${28*s}`,class:'s-ink','stroke-width':6*s,'stroke-linecap':'round'},g);
  mk('rect',{x:x-40*s,y:y,width:80*s,height:140*s,rx:16*s,class:'gain'},g);mk('rect',{x:x-28*s,y:y+40*s,width:56*s,height:44*s,rx:6*s,fill:'var(--stage)'},g)};
const mist=(g,x,y,s,n)=>Array.from({length:n},(_,i)=>({c:mk('circle',{r:5*s,fill:'var(--muted)'},g),x,y,s,i,n}));
const fog=(a,k)=>a.forEach(d=>{const h=(t*.7+d.i/d.n)%1;d.c.setAttribute('cx',(d.x+130*d.s*h).toFixed(1));d.c.setAttribute('cy',(d.y+((d.i%3)-1)*26*d.s*h).toFixed(1));d.c.setAttribute('opacity',(k*(1-h)).toFixed(2))});
const wav=(g,x,y)=>mk('path',{d:`M${x} ${y}q-14-15 0-30t0-30t0-30`,class:'s-loss','stroke-width':6,fill:'none','stroke-linecap':'round'},g);
const chart=(g,x,y,w,h,v,col)=>({pl:mk('polyline',{fill:'none',stroke:col,'stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},g),pts:v.map((q,i)=>[x+i*w/(v.length-1),y+h-q*h])});
const draw=(c,k)=>{const n=c.pts.length-1,f=k*n,i=Math.min(n,Math.floor(f));const s=c.pts.slice(0,i+1).map(q=>q.join(','));if(i<n){const a=c.pts[i],b=c.pts[i+1],r=f-i;s.push((a[0]+(b[0]-a[0])*r).toFixed(1)+','+(a[1]+(b[1]-a[1])*r).toFixed(1))}c.pl.setAttribute('points',s.join(' '))};
const starP=(cx,cy,R,r)=>Array.from({length:10},(_,i)=>{const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;return (cx+q*Math.cos(a)).toFixed(1)+','+(cy+q*Math.sin(a)).toFixed(1)}).join(' ');
const cat=(g,x,y)=>{mk('ellipse',{cx:x,cy:y,rx:30,ry:18,class:'ink'},g);mk('circle',{cx:x+28,cy:y-18,r:15,class:'ink'},g);mk('path',{d:`M${x+16} ${y-26}l2-18 10 10zM${x+40} ${y-26}l-2-18-10 10z`,class:'ink'},g);mk('path',{d:`M${x-28} ${y}q-22-4-18-30`,class:'s-ink','stroke-width':6,fill:'none','stroke-linecap':'round'},g)};

bot($('tbot'),1240,330,1.6); const M0=mist($('tmist'),1326,260,1.1,9);
[720,800,880].forEach(x=>wav($('stk1'),x,400));
const C1=chart($('ch1'),1100,280,340,340,[.85,.7,.72,.5,.42,.25,.18],'var(--loss)');
[230,420,590].forEach(x=>wav($('stk2'),x,540));
const CG=[[260,690],[360,690],[460,690],[560,690],[310,580],[510,580]].map(([x,y])=>{const g=mk('g',{},$('cats'));cat(g,x,y);return g});
ps($('wom'),800,470,30,'ink');
ps($('w3'),200,390,30,'ink');
bot($('b3b'),1300,360,.8); const M3=mist($('m3'),1343,325,.7,7);
const SK=[[1405,420,18],[1432,480,12],[1225,470,14],[1215,380,10]].map(([x,y,r])=>mk('path',{d:`M${x} ${y-r}Q${x} ${y} ${x+r} ${y}Q${x} ${y} ${x} ${y+r}Q${x} ${y} ${x-r} ${y}Q${x} ${y} ${x} ${y-r}z`,class:'gain'},$('spk3')));
bot($('bot4'),260,440,1.3);
ps($('ad'),920,400,26,'ink');
const C4=chart($('ch4'),1120,280,320,330,[.08,.15,.22,.38,.55,.78,.98],'var(--gain)');
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:`M${(30*Math.cos(a)).toFixed(1)} ${(30*Math.sin(a)).toFixed(1)}L${(44*Math.cos(a)).toFixed(1)} ${(44*Math.sin(a)).toFixed(1)}`,class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('spk5'))}
$('st6').setAttribute('points',starP(1240,420,70,30)); $('q7s').setAttribute('points',starP(0,0,80,34));