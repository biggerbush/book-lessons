const T=(g,x,y,s,fs,cls,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':a||'start'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},g)};
const icon=(g,i,x,y)=>{if(i==0)mk('path',{d:`M${x-22} ${y+22}l36-36l10 10l-36 36z`,class:'ink'},g);else if(i==1)mk('path',{d:`M${x-16} ${y-22}l40 22l-40 22z`,class:'ink'},g);else{mk('rect',{x:x-12,y:y-26,width:24,height:38,rx:12,class:'ink'},g);mk('path',{d:`M${x-22} ${y+2}a22 22 0 0 0 44 0M${x} ${y+24}v10`,fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},g)}};

const PT=[580,520,460],PX=[1170,1290,1410];
const plats=PX.map((x,i)=>{const g=mk('g',{},$('plats'));mk('rect',{x:x-50,y:PT[i],width:100,height:700-PT[i],rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);icon(g,i,x,PT[i]+56);T(g,x,736,['WRITE','VIDEO','AUDIO'][i],20,'m','middle');return g});
fig($('hop'),0,-76,18,'gain');

fig($('me'),230,420,34,'ink');T($('me'),230,612,'YOUR PASSION',20,'m','middle','fill:var(--gain)');
// roads fan out as nested arcs ABOVE the doors, each ending just above its door's top centre
const DX=[820,1080,1340],RH=[255,215,175],doorR=[],doors=DX.map((x,i)=>{
  mk('path',{d:`M300 450C420 ${RH[i]} ${x-60} ${RH[i]} ${x} 316`,fill:'none',stroke:'var(--line)','stroke-width':6,'stroke-dasharray':'14 10','stroke-linecap':'round'},$('roads'));
  const g=mk('g',{},$('doors'));doorR.push(mk('rect',{x:x-90,y:330,width:180,height:300,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g));
  mk('circle',{cx:x+60,cy:490,r:8,class:'ink'},g);icon(g,i,x,440);T(g,x,700,['WRITING','VIDEO','AUDIO'][i],22,'m','middle');return g});

fig($('writer'),370,300,36,'ink');
const keys=[];for(let r=0;r<4;r++)for(let c=0;c<9;c++)keys.push(mk('rect',{x:145+c*52,y:545+r*48,width:42,height:36,rx:6,fill:'var(--line)'},$('keys')));
const fl=[];for(let i=0;i<5;i++)fl.push(mk('circle',{r:6,class:'gain'},$('fly')));
const posts=[0,1,2,3].map(i=>{const y=310+i*105,g=mk('g',{},$('posts'));mk('rect',{x:800,y:y,width:640,height:90,rx:10,fill:'none',stroke:'var(--line)','stroke-width':4},g);
  mk('rect',{x:824,y:y+22,width:220,height:16,rx:8,class:'gain'},g);mk('path',{d:`M824 ${y+60}h360`,stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);T(g,1416,y+56,'POST '+(i+1),20,'m','end');return g});

for(let r=0;r<2;r++)for(let i=0;i<12;i++)mk('rect',{x:722+i*62,y:(r?400:310)-52,width:24,height:48,rx:6,fill:i%4==1?'var(--gain)':'var(--muted)','fill-opacity':i%4==1?1:.5},$('btl'));
fig($('garyF'),1000,480,40,'gain');
const drops=[0,1,2,3].map(()=>mk('circle',{r:7,class:'loss'},$('drops')));

for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);if(s>.5)continue;mk('path',{d:`M${330+130*c} ${400+130*s}L${330+165*c} ${400+165*s}`,stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
const cards=['A tip','A review','A story','An opinion'].map((s,i)=>{const x=640+(i%2)*440,y=240+Math.floor(i/2)*180,g=mk('g',{},$('cards'));
  mk('rect',{x:x,y:y,width:380,height:150,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('circle',{cx:x+50,cy:y+75,r:22,class:'gain'},g);T(g,x+95,y+90,s,44,'d5');return g});

'MTWTFSS'.split('').forEach((d,c)=>{T($('cal'),154+c*68,268,d,20,'m','middle','fill:var(--stage)');for(let r=0;r<4;r++)mk('rect',{x:120+c*68,y:300+r*78,width:68,height:78,fill:'none',stroke:'var(--line)','stroke-width':3},$('cells'))});
const checks=[];for(let r=0;r<4;r++)[0,2,4].forEach(c=>{const x=154+c*68,y=339+r*78,g=mk('g',{},$('checks'));mk('circle',{cx:x,cy:y,r:22,class:'gain'},g);mk('path',{d:`M${x-10} ${y}l7 8l13-15`,fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);checks.push(g)});
const tiles=[];for(let i=0;i<24;i++){const x=720+(i%6)*125,y=240+Math.floor(i/6)*95,g=mk('g',{},$('tiles'));mk('rect',{x:x,y:y,width:110,height:80,rx:10,class:'ink'},g);mk('path',{d:`M${x+46} ${y+24}l26 16l-26 16z`,fill:'var(--stage)'},g);tiles.push(g)}

// spokes: arrow tips stop 22px short of each circle (r=50 -> tip at L-72)
const spokes=[],backs=[];for(let i=0;i<6;i++){const a=i*Math.PI/3,x=800+520*Math.cos(a),y=470+190*Math.sin(a),L=Math.hypot(x-800,y-470),dx=(x-800)/L,dy=(y-470)/L,px=-dy,py=dx;
  const g=mk('g',{},$('spokes')),ex=800+dx*(L-72),ey=470+dy*(L-72);
  mk('path',{d:`M${800+dx*120} ${470+dy*120}L${ex} ${ey}M${ex-dx*18+px*11} ${ey-dy*18+py*11}L${ex} ${ey}L${ex-dx*18-px*11} ${ey-dy*18-py*11}`,fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  mk('circle',{cx:x,cy:y,r:50,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  if(i%3==0)mk('rect',{x:x-18,y:y-18,width:36,height:36,rx:6,class:'ink'},g);else if(i%3==1)mk('circle',{cx:x,cy:y,r:18,class:'ink'},g);else mk('path',{d:`M${x} ${y-20}l20 34h-40z`,class:'ink'},g);
  spokes.push(g);backs.push([mk('circle',{r:9,class:'gain'},$('backs')),dx,dy,L])}

const rings=[0,1,2].map(i=>{const y=300+i*120,c=mk('circle',{cx:1340,cy:y,r:48,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},$('qi'));icon($('qi'),i==1?2:i==2?1:0,1340,y);return c});