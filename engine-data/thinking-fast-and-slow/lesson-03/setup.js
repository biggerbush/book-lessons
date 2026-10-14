const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const WHL=(par,cx,cy,r,n,lab)=>{const o=mk('g',{},par),g=mk('g',{},o),ws=[],lb=[],R=Math.PI/180,f=v=>v.toFixed(1);
for(let i=0;i<n;i++){const a0=((i-.5)*360/n-90)*R,a1=((i+.5)*360/n-90)*R;
ws.push(mk('path',{d:`M0 0L${f(r*Math.cos(a0))} ${f(r*Math.sin(a0))}A${r} ${r} 0 0 1 ${f(r*Math.cos(a1))} ${f(r*Math.sin(a1))}Z`,fill:i%2?'var(--line)':'var(--stage)',stroke:'var(--ink)','stroke-width':3},g));}
if(lab){for(let i=0;i<n;i++){const a=(i*360/n-90)*R,x=f(.78*r*Math.cos(a)),y=f(.78*r*Math.sin(a));
const tx=mk('text',{x:x,y:y,dy:10,'font-size':28,'text-anchor':'middle',class:'d',style:'fill:var(--ink)',transform:`rotate(${i*360/n} ${x} ${y})`},g);tx.textContent=lab(i);lb.push(tx)}}
mk('circle',{r:r,fill:'none',stroke:'var(--ink)','stroke-width':7},g);mk('circle',{r:r*.09,class:'ink'},g);
mk('path',{d:`M${cx-20} ${cy-r-36}h40l-20 44z`,class:'loss'},o);return{g,ws,lb,cx,cy}};
const spin=(w,a)=>w.g.setAttribute('transform',`translate(${w.cx} ${w.cy}) rotate(${a.toFixed(1)})`);
const TW=WHL($('tw'),1310,420,150,12);TW.ws[0].setAttribute('fill','var(--gain)');TW.ws[6].setAttribute('fill','var(--loss)');
const WH=WHL($('s1w'),400,530,220,20,i=>i*5);
const ST=[0,1,2,3].map(i=>{const g=mk('g',{},$('stu'));P(g,800+i*100,480,22,'ink');return g});
P($('hd'),300,480,60,'ink');
const IDE=[['High',980,340],['Many',1230,450],['Most',960,580],['Big',1250,610]].map(([s,x,y])=>{const g=mk('g',{},$('ideas'));
mk('rect',{x:x-110,y:y-35,width:220,height:70,rx:35,class:'gain'},g);
mk('text',{x:x,y:y+13,'font-size':36,'text-anchor':'middle',class:'d5',style:'fill:var(--on-gain)'},g).textContent=s;return g});
P($('jp'),250,320,38,'ink');
const RW=[[9,8,260],[3,5,520]].map(([d,n,y0])=>{const g=mk('g',{},$('rows')),e=800+n*55,bars=[];
mk('text',{x:620,y:y0-18,'font-size':20,class:'m'},g).textContent='ROLLED '+d+' · SUGGESTED ABOUT';
mk('path',{d:`M780 ${y0}H${e}M780 ${y0+120}H${e}`,class:'s-ink','stroke-width':8,'stroke-linecap':'round'},g);
for(let j=0;j<n;j++)bars.push(mk('path',{d:`M${800+j*55} ${y0}v120`,class:d===9?'s-loss':'s-ink','stroke-width':10},g));
const tx=mk('text',{x:e+30,y:y0+76,'font-size':46,class:'d'},g);return{g,n,bars,tx}});
[120,590,1060].forEach(x=>{mk('rect',{x:x,y:230,width:420,height:280,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('cards'));
const tx=x+320;mk('path',{d:`M${tx} 250h50l20 20-20 20h-50z`,class:'gain'},$('cards'));mk('circle',{cx:tx+50,cy:270,r:5,fill:'var(--stage)'},$('cards'))});
const IT=[];for(let i=0;i<12;i++)IT.push(mk('rect',{x:820+(i%6)*42,y:655+Math.floor(i/6)*37,width:34,height:30,rx:6,class:i%3?'ink':'gain'},$('items')));
P($('walker'),1360,356,26,'gain');