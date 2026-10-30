const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const draw=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const segs=[];for(let i=0;i<10;i++){const a0=(-90+i*36+3)*Math.PI/180,a1=a0+30*Math.PI/180,R=150;
  segs.push(mk('path',{d:'M'+(1300+R*Math.cos(a0)).toFixed(1)+' '+(400+R*Math.sin(a0)).toFixed(1)+'A'+R+' '+R+' 0 0 1 '+(1300+R*Math.cos(a1)).toFixed(1)+' '+(400+R*Math.sin(a1)).toFixed(1),fill:'none',stroke:i>6?'var(--loss)':'var(--gain)','stroke-width':22,'stroke-linecap':'round'},$('ring')))}
fig($('hike'),1210,650,20,'gain'); fig($('chair'),1395,650,18,'loss');
for(let i=0;i<=10;i++)mk('path',{d:'M'+(120+i*128)+' 258v24',class:'s-ink','stroke-width':4},$('ticks'));
// body bars: grey track, navy remainder that shrinks, dashed outline of what is lost
const BT=[110,150,80];
const BL=['MUSCLE','STRENGTH','BALANCE'].map((s,i)=>{const g=mk('g',{},$('bars')),y=640+i*70;const tx=mk('text',{x:120,y:y,'font-size':22,class:'m'},g);tx.textContent=s;
  mk('rect',{x:300,y:y-24,width:300,height:30,rx:8,fill:'var(--line)'},g);
  const lost=mk('rect',{x:300,y:y-24,width:0,height:30,rx:8,fill:'none',stroke:'var(--loss)','stroke-width':3,'stroke-dasharray':'8 6'},g);
  const bar=mk('rect',{x:300,y:y-24,width:300,height:30,rx:8,fill:'var(--loss)'},g);
  return [g,bar,lost,BT[i]]});
fig($('climber'),760,696,20,'ink');
const NP=[];for(let i=0;i<14;i++){const a=i*2.4,r=25+10*i;NP.push([360+r*Math.cos(a),500+r*Math.sin(a)])}
const NE=[];for(let i=1;i<14;i++)[i-1,i-3].forEach(j=>{if(j>=0)NE.push(mk('path',{d:'M'+NP[i][0].toFixed(0)+' '+NP[i][1].toFixed(0)+'L'+NP[j][0].toFixed(0)+' '+NP[j][1].toFixed(0),class:'s-line','stroke-width':4},$('nodes')))});
const ND=NP.map(q=>mk('circle',{cx:q[0].toFixed(0),cy:q[1].toFixed(0),r:13,class:'gain'},$('nodes')));
// puzzle: real interlocking pieces; tabs (+1) of one piece fit notches (-1) of its neighbour
const PS=200;
function pzEdge(x,y,dx,dy,s){const nx=dy,ny=-dx,P=(a,h)=>(x+dx*a+nx*h).toFixed(1)+' '+(y+dy*a+ny*h).toFixed(1);
  if(!s)return 'L'+P(PS,0);
  return 'L'+P(80,0)+'C'+P(50,55*s)+' '+P(150,55*s)+' '+P(120,0)+'L'+P(PS,0)}
function pzPath(x,y,e){return 'M'+x+' '+y+pzEdge(x,y,1,0,e[0])+pzEdge(x+PS,y,0,1,e[1])+pzEdge(x+PS,y+PS,-1,0,e[2])+pzEdge(x,y+PS,0,-1,e[3])+'Z'}
const PE=[[1000,300,[0,1,1,0]],[1200,300,[0,0,1,-1]],[1000,500,[-1,1,0,0]],[1200,500,[-1,0,0,-1]]];
mk('path',{d:pzPath(1200,500,PE[3][2]),fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'10 8','stroke-linejoin':'round'},$('pz'));
const PZ=PE.map((q,i)=>{const g=mk('g',{},$('pz'));
  mk('path',{d:pzPath(q[0],q[1],q[2]),fill:i===3?'var(--gain)':'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},g);
  if(i===3){const tx=mk('text',{x:1300,y:612,'font-size':20,'text-anchor':'middle',style:'font-family:var(--mono);letter-spacing:.02em;font-weight:700;fill:var(--on-gain)'},g);tx.textContent='INDEPENDENCE'}return g});
[1100,1240,1380].forEach(x=>fig($('frd'),x,430,30,'ink'));
fig($('ya'),300,560,30,'gain'); fig($('old'),1250,580,26,'ink');
const BK=['STRENGTH','HABITS','',''].map((s,i)=>{const y=636-i*56,g=mk('g',{},$('blk'));mk('rect',{x:380,y:y,width:200,height:50,rx:8,class:'gain','fill-opacity':i<2?1:.55},g);
  if(s){const tx=mk('text',{x:480,y:y+33,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=s}return g});
for(let r=0;r<3;r++)for(let c=0;c<5;c++)mk('rect',{x:718+c*34,y:276+r*34,width:28,height:28,rx:4,fill:'var(--line)'},$('cells'));
for(let i=0;i<5;i++)mk('circle',{cx:1200+i*50,cy:300,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('holes'));