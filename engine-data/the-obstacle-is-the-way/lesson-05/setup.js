const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const bricks=(g,x,y,w,h,n)=>{const bh=h/n;let d='';for(let i=0;i<n;i++){if(i)d+='M'+x+' '+(y+i*bh)+'h'+w;(i%2?[.25,.75]:[.5]).forEach(f=>d+='M'+(x+w*f)+' '+(y+i*bh)+'v'+bh)}
  mk('rect',{x:x,y:y,width:w,height:h,fill:'var(--stage)'},g);mk('path',{d:d,stroke:'var(--line)','stroke-width':3},g);
  mk('rect',{x:x,y:y,width:w,height:h,fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},g)};
const along=(P,k)=>{const L=[];let T=0;for(let i=1;i<P.length;i++){const l=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);L.push(l);T+=l}
  let d=k*T;for(let i=0;i<L.length;i++){if(d<=L[i]||i===L.length-1){const f=Math.min(1,d/L[i]);return[P[i][0]+(P[i+1][0]-P[i][0])*f,P[i][1]+(P[i+1][1]-P[i][1])*f]}d-=L[i]}};
const bz=(P,k)=>{const q=1-k;return[0,1].map(j=>q*q*q*P[0][j]+3*q*q*k*P[1][j]+3*q*k*k*P[2][j]+k*k*k*P[3][j])};
const topfig=(g,cls,dir)=>{[-1,1].forEach(s=>mk('path',{d:'M'+(dir*10)+' '+(s*36)+'L'+(dir*48)+' '+(s*30),stroke:'var(--'+cls+')','stroke-width':12,'stroke-linecap':'round'},g));
  mk('ellipse',{cx:0,cy:0,rx:24,ry:50,class:cls},g);mk('circle',{cx:0,cy:0,r:20,class:cls,stroke:'var(--stage)','stroke-width':4},g)};
const TP=[[1215,380],[1215,600],[1400,600],[1400,380]], EP=[[1280,715],[1280,840],[1430,840],[1430,715]], PA=[[800,505],[900,300],[1300,300],[1440,420]];
bricks($('twall'),1260,240,80,320,8); fig($('walker'),0,0,22,'gain');
bricks($('w1'),1000,250,120,470,10);
const chg=$('charger'); fig(chg,0,0,30,'loss'); mk('path',{d:'M20 72H50',stroke:'var(--loss)','stroke-width':14,'stroke-linecap':'round'},chg); mk('circle',{cx:64,cy:72,r:15,class:'loss'},chg);
fig($('hist'),250,330,36,'ink');
for(let i=0;i<3;i++)mk('rect',{x:540,y:450+i*44,width:32,height:32,rx:6,class:'gain'},$('units'));
for(let i=0;i<5;i++)mk('rect',{x:1100,y:410+i*44,width:32,height:32,rx:6,class:'loss'},$('units'));
fig($('a2f'),260,405,14,'gain'); fig($('tfig'),1050,590,16,'gain');
topfig($('you'),'gain',-1); topfig($('opp'),'loss',1);
fig($('ganf'),760,470,30,'gain');
const MF=[855,950,1045].map(x=>fig(mk('g',{},$('march')),x,486,26,'gain'));
const NB=[0,1,2,3].map(i=>mk('rect',{x:1185,y:350+i*60,width:250-i*40,height:26,rx:6,class:'loss'},$('bars')));
for(let i=0;i<8;i++)mk('circle',{cx:170+i*60,cy:230,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spir'));
bricks($('ewall'),1330,620,50,190,5);