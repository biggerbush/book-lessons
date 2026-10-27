const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const figF=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g);return g};
const G=id=>mk('g',{},$(id));
fig($('lone'),1310,480,24,'ink');
let rd='';for(let i=0;i<7;i++){const a=Math.PI*(-1+i/6),c=Math.cos(a),s=Math.sin(a);rd+='M'+(1310+42*c).toFixed(1)+' '+(360+42*s).toFixed(1)+'L'+(1310+60*c).toFixed(1)+' '+(360+60*s).toFixed(1)}
mk('path',{d:rd,class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays'));
const LV=[[1180,590],[1420,590],[1200,400]].map(q=>[fig(G('leave'),q[0],q[1],15,'ink'),q[0],q[1]]);
for(let i=0;i<6;i++){const x=210+i*92;fig($('offp'),x,410,18,'ink');fig($('offq'),x,545,18,'ink')}
const DK=[];[960,1160,1360].forEach(cx=>[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([a,b])=>{
  DK.push([mk('rect',{width:50,height:50,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('desks')),cx,480,a*28,b*28,0]);
  DK.push([mk('circle',{r:14,class:'ink'},$('desks')),cx,480,a*70,b*28,1])}));
fig($('osbf'),260,380,34,'ink');
const SPK=[];for(let i=0;i<5;i++){fig($('spk'),660+i*80,520,22,'ink');SPK.push(mk('circle',{r:7,class:'gain'},$('sprk')))}
const GD=[[900,2],[1130,4],[1360,8]].map(([gx,n])=>{const g=G('gdots'),w=Math.min(n,4);for(let i=0;i<n;i++)mk('circle',{cx:gx+((i%4)-(w-1)/2)*28,cy:640+Math.floor(i/4)*28,r:10,class:'ink'},g);return g});
const PV=[[900,360],[1130,440],[1360,540]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:10,class:'loss'},$('pvs')));
fig($('w0f'),220,460,22,'ink');fig($('w0f'),320,460,22,'ink');fig($('slk'),450,470,22,'loss');
fig($('w1f'),650,470,22,'gain');
const QB=[790,850,910,970].map(x=>{fig($('w1f'),x,500,16,'ink');return mk('circle',{cx:x,cy:450,r:12,class:'gain'},$('w1f'))});
fig($('w2f'),1270,470,26,'loss');
const EY=[];for(let k=0;k<5;k++){const a=Math.PI*(-165+k*37.5)/180,ex=1270+160*Math.cos(a),ey=500+160*Math.sin(a),g=G('w2f'),n=Math.hypot(1270-ex,500-ey);
  [-16,16].forEach(o=>{mk('ellipse',{cx:ex+o,cy:ey,rx:13,ry:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},g);mk('circle',{cx:ex+o+(1270-ex)/n*4,cy:ey+(500-ey)/n*4,r:4,class:'ink'},g)});EY.push(g)}
fig($('wzf'),300,430,40,'gain');
const MP=[];for(let i=0;i<7;i++){const a=i*2*Math.PI/7-Math.PI/2;MP.push([1100+150*Math.cos(a),470+150*Math.sin(a)])}
const LKS=MP.map((q,i)=>{const r=MP[(i+2)%7];return mk('path',{d:'M'+q[0].toFixed(0)+' '+q[1].toFixed(0)+'L'+r[0].toFixed(0)+' '+r[1].toFixed(0),class:'s-gain','stroke-width':3,'stroke-dasharray':'6 10'},$('links'))});
MP.forEach(q=>fig($('mem'),q[0],q[1],16,'ink'));
fig($('cubf'),370,450,30,'gain');
for(let r=0;r<3;r++)for(let c=0;c<2;c++)mk('rect',{x:760+c*160,y:300+r*105,width:80,height:50,rx:4,class:'ink'},$('chips'));
const TR=['M840 325H920','M800 350V405','M960 350V405','M840 430H920','M800 455V510','M960 455V510','M840 455L920 510','M840 535H920'].map(d=>mk('path',{d:d,class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('trc')));
// closing day planner: solo figure in the amber hour, a group in the meeting
figF($('soloF'),1396,404,10,'var(--on-gain)');
const MF=[1336,1368,1400].map(x=>figF(G('meetF'),x,506,9,'var(--ink)'));