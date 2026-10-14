const fig=(g,x,y,r,cls)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},e);return e};
const pt=(P,k)=>{const n=P.length-1,f=cl(k)*n,i=Math.min(Math.floor(f),n-1),r=f-i,a=P[i],b=P[i+1];return [a[0]+(b[0]-a[0])*r,a[1]+(b[1]-a[1])*r]};
const part=(P,k)=>{const n=P.length-1,f=cl(k)*n,i=Math.floor(f);let s=P.slice(0,i+1).map(q=>q.join(',')).join(' ');if(i<n){const q=pt(P,k);s+=' '+q[0].toFixed(1)+','+q[1].toFixed(1)}return s};
const mtext=(g,x,y,fs,s,o)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:'m'},o||{}),g);e.textContent=s;return e};

fig($('tman'),1300,540,24,'gain');
const TL=[];for(let x=1140;x<=1460;x+=20)TL.push([x,+(640+4*Math.sin(x/23)).toFixed(1)]);

const ZL=[];for(let x=180;x<=940;x+=40)ZL.push([x,+(720-(x-180)*.08+8*Math.sin(x/37)).toFixed(1)]);
[1120,1240,1360].forEach(x=>fig($('team'),x,600,24,'ink'));
const CP=[0,1,2,3].map(i=>{const g=mk('g',{},$('chips')),y=500-i*60;mk('rect',{x:1100,y:y,width:280,height:46,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mtext(g,1240,y+31,20,'+ NEW FEATURE',{'text-anchor':'middle'});return g});

fig($('org'),230,450,26,'ink');
const BD=[[400,451],[500,423],[600,395],[400,585],[500,610],[600,635]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:12,class:'gain'},$('bdots')));

fig($('pbody'),440,430,34,'ink');
const BK=['CUSTOMER','PROBLEM','SOLUTION','CHANNEL'].map((s,i)=>{const g=mk('g',{},$('blocks')),y=320+i*100;
  const r=mk('rect',{x:880,y:y,width:560,height:80,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const tx=mtext(g,910,y+50,24,s);const k=mtext(g,1410,y+50,22,i===2?'':'✓ KEPT',{'text-anchor':'end',style:'fill:var(--gain)'});return [g,r,tx,k]});

const NP=[0,1,2,3,4,5].map(i=>{const a=(i*60+30)*Math.PI/180;return [450+200*Math.cos(a),520+200*Math.sin(a)]});
NP.forEach((q,i)=>{const n=NP[(i+1)%6];mk('path',{d:'M450 520L'+q[0].toFixed(0)+' '+q[1].toFixed(0)+'L'+n[0].toFixed(0)+' '+n[1].toFixed(0),class:'s-line','stroke-width':4,fill:'none'},$('nlines'))});
const ND=NP.map(q=>mk('circle',{cx:q[0],cy:q[1],r:28,class:'ink'},$('nodes')));
NP.forEach(q=>{const x=q[0]+22,y=q[1]-22;mk('circle',{cx:x,cy:y,r:13,class:'gain'},$('badges'));mk('path',{d:'M'+(x-6)+' '+y+'l4 5 8-9',fill:'none',stroke:'var(--on-gain)','stroke-width':3,'stroke-linecap':'round'},$('badges'))});

const P=[[200,660],[440,660],[540,440],[760,440],[860,660],[1080,660],[1220,390]];
const VN=P.slice(1,6).map(q=>{const g=mk('g',{},$('vnodes'));mk('circle',{cx:q[0],cy:q[1],r:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mtext(g,q[0],q[1]>500?712:404,22,'NEW TEST',{'text-anchor':'middle'});return g});

const MK=[];for(let i=0;i<20;i++){const c=mk('rect',{x:168+(i%5)*62,y:350+Math.floor(i/5)*54,width:52,height:44,rx:6,stroke:'var(--line)','stroke-width':3,fill:'var(--stage)'},$('cells'));if(i===2||i===17)MK.push(c)}
const HD=[0,1,2,3,4,5].map(i=>{const a=(i*60+30)*Math.PI/180;return mk('circle',{cx:790+210*Math.cos(a),cy:470+140*Math.sin(a),r:26,class:'ink'},$('heads'))});

// zoom-in: product made of six feature tiles
const TI=[];for(let i=0;i<6;i++)TI.push(mk('rect',{x:280+(i%3)*112,y:340+Math.floor(i/3)*130,width:96,height:110,rx:10,fill:'var(--line)'},$('tiles')));
[[930,420],[990,420],[930,520],[990,520]].forEach(q=>fig($('oldc'),q[0],q[1],14,'ink'));
[[1330,420],[1390,420],[1330,520],[1390,520]].forEach(q=>fig($('newc'),q[0],q[1],14,'gain'));

for(let i=0;i<6;i++)mk('rect',{x:1322+(i%3)*44,y:662+Math.floor(i/3)*48,width:28,height:28,rx:5,fill:'var(--line)'},$('qcells'));