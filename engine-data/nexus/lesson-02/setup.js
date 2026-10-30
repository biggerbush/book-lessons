const fig=(g,x,y,r,c)=>{const f=mk('g',{class:c},g);mk('circle',{cx:x,cy:y,r:r},f);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`},f);return f};
const ln=(d,g,c,w)=>mk('path',{d:d,fill:'none',stroke:'var(--'+c+')','stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1,opacity:0},g);
const dr=(e,k)=>{e.setAttribute('stroke-dashoffset',(1-k).toFixed(3));e.setAttribute('opacity',k>0?1:0)};
const L=(a,b)=>'M'+a+'L'+b;

const ST=[[1060,260],[1180,330],[1300,240],[1420,320],[1340,450],[1200,480],[1080,420]],g0=$('sky0');
const SL0=[6,5,5,4,4].map((s,i)=>ln(L([1040+i*90,644],ST[s]),g0,'line',3));
const CL0=ST.slice(1).map((s,i)=>ln(L(ST[i],s),g0,'gain',4));
const SD0=ST.map(s=>mk('circle',{cx:s[0],cy:s[1],r:9,class:'ink'},g0));
const PP0=[0,1,2,3,4].map(i=>fig(g0,1040+i*90,660,16,'ink'));

const X1=[L([450,300],[730,660]),L([730,300],[450,660]),L([840,300],[1450,680]),L([1450,300],[840,680])].map(d=>ln(d,$('xs1'),'loss',10));

const N2=[[220,300],[430,270],[660,320],[300,480],[530,460],[800,440],[200,660],[450,650],[720,630]];
const L2=[[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],[3,6],[4,7],[5,8],[6,7],[7,8],[2,4]].map(e=>ln(L(N2[e[0]],N2[e[1]]),$('net2'),'line',4));
const TH=ln('M'+[0,1,2,5,4,3,6,7,8].map(i=>N2[i]).join('L'),$('net2'),'gain',6);
const P2=N2.map(q=>fig($('net2'),q[0],q[1],16,'ink'));

for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:L([400+110*c,450+110*s],[400+170*c,450+170*s]),class:'s-line','stroke-width':3},$('spk'))}
const PL3=[14,10,12,9].map((r,i)=>mk('circle',{r:r,class:i?'ink':'gain'},$('pl3')));
const CH3=['KINGS','WARS','MARRIAGES'].map((s,i)=>{const y=240+i*80,g=mk('g',{},$('pr3'));
  const d=mk('path',{d:L([575,450],[930,y+30]),fill:'none',stroke:'var(--muted)','stroke-width':3,'stroke-dasharray':'8 8'},g);
  mk('rect',{x:940,y:y,width:500,height:60,rx:30,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:970,y:y+39,'font-size':24,class:'m'},g);tx.textContent=s;return [g,d]});
[800,1080,1360].forEach((x,i)=>{fig($('ppl3'),x,590,20,'gain');const tx=mk('text',{x:x,y:730,'font-size':20,class:'m','text-anchor':'middle'},$('ppl3'));tx.textContent=['RULERS','ADVISERS','ORDINARY PEOPLE'][i]});
const LK3=['M800,590Q940,530 1080,590','M1080,590Q1220,530 1360,590','M575,500Q680,580 800,590'].map(d=>ln(d,$('lk3'),'gain',5));

const RX=[250,400,560],RY=[110,175,240],NR=[8,14,20],D4=[],LK4=[];
const E4=RX.map((rx,k)=>mk('ellipse',{cx:800,cy:490,rx:rx,ry:RY[k],fill:'none',class:'s-line','stroke-width':3},$('rings4')));
const lk4=mk('g',{},$('rings4'));
RX.forEach((rx,k)=>{for(let i=0;i<NR[k];i++){const a=(i+.5*k)*2*Math.PI/NR[k],x=800+rx*Math.cos(a),y=490+RY[k]*Math.sin(a);
  LK4.push([k,ln(L([800,490],[x,y]),lk4,'gain',2)]);D4.push([k,mk('circle',{cx:x,cy:y,r:11,class:'ink'},$('rings4'))])}});

const S5=[];
const tree=(y0,n5,br,c)=>{let prev=[[960,y0]];S5.push([0,mk('circle',{cx:960,cy:y0,r:12,class:c},$('sp5')),0]);
  for(let l=1;l<=n5;l++){const n=br?2**l:1,s=240/n,cur=[];
    for(let j=0;j<n;j++){const q=[960+l*150,y0+(j-(n-1)/2)*s];cur.push(q);S5.push([l,ln(L(prev[br?j>>1:0],q),$('sp5'),c,4),1])}
    cur.forEach(q=>S5.push([l,mk('circle',{cx:q[0],cy:q[1],r:10,class:c},$('sp5')),0]));prev=cur}};
tree(370,1,0,'loss');tree(630,3,1,'gain');

const W6=[0,1,2].map(i=>{const r=50+i*40;return mk('path',{d:`M${330+r*.8} ${380-r*.6}a${r} ${r} 0 0 1 0 ${r*1.2}`,fill:'none',class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('wv6'))});
const CR6=[];for(let r=0;r<3;r++)for(let i=0;i<5;i++)CR6.push(fig($('cr6'),560+i*100,280+r*85,14,'ink'));

const g7=$('ic7a');for(let i=0;i<5;i++){const a=i*2*Math.PI/5-Math.PI/2,x=560+80*Math.cos(a),y=600+80*Math.sin(a);mk('path',{d:L([560,600],[x,y]),class:'s-line','stroke-width':4},g7);mk('circle',{cx:x,cy:y,r:13,class:'ink'},g7)}
mk('circle',{cx:560,cy:600,r:24,class:'gain'},g7);
const CK7=[[680,260],[1400,260]].map(([x,y])=>ln(`M${x+12},${y+27}l10,11l20,-24`,$('cb7'),'gain',7));

const SH8=[[1170,170],[1110,260],[1190,330]].map(q=>[ln(`M1325,300Q${(1325+q[0])/2},${q[1]-60} ${q[0]},${q[1]}`,$('sh8'),'gain',4),mk('circle',{cx:q[0],cy:q[1],r:16,class:'gain',opacity:0},$('sh8'))]);