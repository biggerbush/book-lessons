const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g);return g};
const T=(g,x,y,s,c,txt,a)=>{const e=mk('text',{x:x,y:y,'font-size':s,class:c},g);if(a)e.setAttribute('text-anchor',a);e.textContent=txt;return e};
// title: long message bars compress into the core
const B0=[[980,204,480],[980,236,400],[980,268,460],[980,300,360],[980,332,430]];
const BR=B0.map(b=>mk('rect',{x:b[0],y:b[1],width:b[2],height:14,rx:7,fill:'var(--muted)',opacity:0},$('msg')));
fig($('arm0'),1060,690,18,'ink');$('arm0').appendChild($('arm0').firstElementChild);
// plan breaks
[200,290,380].forEach(x=>fig($('sold'),x,520,22,'ink'));
const P=[[600,720],[760,640],[900,680],[1060,520],[1200,560],[1380,330]];
const SG=P.slice(1).map((q,i)=>mk('path',{d:'M'+P[i]+'L'+q,fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-dasharray':'14 12','stroke-linecap':'round'},$('route')));
const WP=P.slice(1,5).map((q,i)=>{const g=mk('g',{},$('route'));mk('circle',{cx:q[0],cy:q[1],r:30,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const n=T(g,q[0],q[1]+10,28,'d',''+(i+1),'middle');n.setAttribute('style','font-size:28px');return g});
let bp='';for(let i=0;i<16;i++){const r=i%2?38:92,a=i*Math.PI/8;bp+=(r*Math.cos(a)).toFixed(1)+','+(r*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:bp,class:'loss'},$('boom'));
for(let i=0;i<8;i++)mk('path',{d:'M160 '+(460+i*42)+'h'+(300+((i*7)%4)*40),class:'s-line','stroke-width':8,'stroke-linecap':'round'},$('ordl'));
fig($('sol2'),760,696,20,'ink');
// two questions: idea rows (no strike on the core row)
const IR=['NICE TO HAVE','ALSO GOOD','THE ONE THING','WORTH DOING','INTERESTING'].map((s,i)=>{const y=470+i*66,g=mk('g',{},$('ideas'));
  const r=mk('rect',{x:120,y:y,width:760,height:50,rx:25,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const tx=T(g,150,y+34,24,'m',s);
  const k=i===2?null:mk('line',{x1:140,y1:y+26,x2:140,y2:y+26,stroke:'var(--loss)','stroke-width':3,'stroke-linecap':'round',opacity:0},g);return [g,r,tx,k,y]});
// southwest
for(let i=0;i<6;i++)mk('circle',{cx:300+i*40,cy:402,r:7,fill:'var(--stage)'},$('planeB'));
fig($('kel'),760,300,34,'gain');
for(let i=0;i<22;i++)mk('path',{d:'M'+(620+i*40)+' 650v'+(i%5?20:40),class:'s-ink','stroke-width':3},$('ticks'));
fig($('mkt'),220,340,30,'ink');
for(let i=0;i<7;i++)fig($('emp'),300+i*130,640,18,'ink');
fig($('pod'),310,330,30,'ink');$('pod').appendChild($('pod').firstElementChild);
// juggler with three balls
fig($('juggler'),790,520,26,'ink');
mk('path',{d:'M760 606L714 560M820 606L866 560',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},$('juggler'));
[[714,560],[866,560]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:11,class:'ink'},$('juggler')));
const JB=[0,1,2].map(()=>mk('circle',{r:22,class:'loss'},$('balls'))), LAND=[645,705,935];
// proverb, card, trash
for(let i=0;i<8;i++){const l=i<4,y=340+(i%4)*40;mk('path',{d:'M'+(l?170:370)+' '+y+'h140',class:'s-muted','stroke-width':4,'stroke-linecap':'round'},$('bkm'))}
[[190,370],[190,430],[390,370],[390,430]].forEach(q=>mk('path',{d:'M'+q[0]+' '+q[1]+'h100',class:'s-gain','stroke-width':14,'stroke-linecap':'round'},$('bkg')));
const XL=[360,300,330].map((w,i)=>mk('rect',{x:670,y:410+i*45,width:w,height:12,rx:6,fill:'var(--line)'},$('cardx')));
const SCR=[0,1,2].map(()=>mk('rect',{x:-14,y:-14,width:28,height:28,rx:6,fill:'var(--muted)',opacity:0},$('scr')));