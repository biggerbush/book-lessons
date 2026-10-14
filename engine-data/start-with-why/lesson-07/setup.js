const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const R=(u,e,a,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,a,a+d));
const DR=(e,k)=>{(typeof e=='string'?$(e):e).style.strokeDashoffset=(1-k).toFixed(3)};
const T=(g,x,y,s,c,txt,o)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:c},o||{}),g);e.textContent=txt;return e};
const B0=[0,1,2,3].map(i=>mk('rect',{x:1110+i*95,y:560,width:56,height:0,rx:6,class:'ink'},$('bars0')));
fig($('wal1'),720,440,34,'gain');T($('wal1'),720,630,22,'m','SAM WALTON',{'text-anchor':'middle'});
const PG=['CUSTOMERS','WORKERS','COMMUNITIES'].map((s,i)=>{const y=270+i*180,g=mk('g',{},$('ppl1'));mk('path',{d:'M772 480L1065 '+(y+35),class:'s-gain','stroke-width':4,'stroke-dasharray':'8 8',fill:'none'},g);[[1100,y],[1150,y-12],[1200,y]].forEach(q=>fig(g,q[0],q[1],18,'ink'));T(g,1250,y+50,22,'m',s);return g});
const D2=[],L2=[];for(let i=0;i<44;i++){const rr=.4+.6*Math.sqrt(i/43),a=i*2.39996,x=800+600*rr*Math.cos(a),y=490+240*rr*Math.sin(a);L2.push(mk('path',{d:'M800 490L'+x.toFixed(0)+' '+y.toFixed(0),class:'s-gain','stroke-width':2,opacity:0},$('rays2')));D2.push(mk('rect',{x:(x-10).toFixed(0),y:(y-10).toFixed(0),width:20,height:20,rx:4,class:'ink'},$('dots2')))}
fig($('wal2'),800,470,22,'gain');
fig($('wal3'),300,380,26,'gain');
const S3=[660,860,1060,1260].map(x=>{const g=mk('g',{},$('succ3'));fig(g,x,400,26,'ink');return g});
const I3=['STORES','SYSTEMS','LOW PRICES'].map((s,i)=>{const g=mk('g',{},$('items3')),x=520+i*320;mk('rect',{x:x,y:610,width:280,height:80,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,x+140,659,22,'m',s,{'text-anchor':'middle'});return g});
const panL=mk('g',{},$('pans4')),panR=mk('g',{},$('pans4'));
[panL,panR].forEach(g=>{mk('path',{d:'M0 0L-90 90M0 0L90 90',class:'s-muted','stroke-width':3,fill:'none'},g);mk('path',{d:'M-100 90Q0 140 100 90z',class:'ink'},g)});
const tag4=mk('g',{},panL);mk('rect',{x:-50,y:-28,width:100,height:56,rx:8,class:'loss'},tag4);T(tag4,0,8,20,'m','PRICE',{'text-anchor':'middle',style:'fill:var(--stage)'});
[-30,0,30].forEach(x=>fig(panR,x,46,10,'ink'));
fig($('fd6'),560,260,24,'gain');
const FL=[],FN=[];for(let i=0;i<7;i++){const x=260+i*100;FN.push(mk('path',{class:'s-gain','stroke-width':3,fill:'none'},$('ln6')));const g=mk('g',{},$('fl6'));fig(g,x,440,16,'ink');FL.push(g)}
const MG=[];[[3,440],[5,565]].forEach((r,j)=>{for(let i=0;i<r[0];i++){const g=mk('g',{opacity:.6},$('mg6'));fig(g,560+(i-(r[0]-1)/2)*100,r[1],16,'ink');MG.push([g,j])}});
const C7=[905,975,1045].map((x,i)=>{const g=mk('g',{},$('cand7'));fig(g,x,i==1?390:400,22,i==1?'gain':'ink');return g});