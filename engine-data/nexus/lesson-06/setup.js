const fig=(g,x,y,r,cls)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3).toFixed(1)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3).toFixed(1)+'z',class:cls},e);return e};
const ln=(g,a,b,o)=>mk('path',Object.assign({d:'M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'L'+b[0].toFixed(1)+' '+b[1].toFixed(1),'stroke-linecap':'round'},o),g);
const at=(el,x,y)=>{el.setAttribute('cx',x.toFixed(1));el.setAttribute('cy',y.toFixed(1))};
const mv=(el,a,b,f)=>at(el,a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f);
const fr=x=>x-Math.floor(x);

const T0=[[-62,-80],[48,-92],[82,-6],[40,88],[-60,76],[-84,4],[0,0]];
[1110,1370].forEach((c,k)=>{T0.forEach((d,i)=>mk('circle',{cx:c+d[0],cy:420+d[1],r:i==6&&!k?18:12,class:i==6&&!k?'loss':'ink'},$('dots')));
  const E=k?[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[6,3],[1,6],[6,4]]:[0,1,2,3,4,5].map(i=>[i,6]);
  E.forEach(e=>ln($(k?'lB':'lA'),[c+T0[e[0]][0],420+T0[e[0]][1]],[c+T0[e[1]][0],420+T0[e[1]][1]],{class:'s-ink','stroke-width':4}))});
const cA=c=>[1110+T0[c][0],420+T0[c][1]],cB=c=>[1370+T0[c][0],420+T0[c][1]];

const HN=[...Array(10)].map((_,i)=>{const a=i*Math.PI/5+.3;return[450+200*Math.cos(a),480+190*Math.sin(a)]});
HN.forEach(q=>{ln($('hubE'),q,[450,480],{class:'s-line','stroke-width':4});mk('circle',{cx:q[0],cy:q[1],r:16,class:'ink'},$('hubN'))});
const hP=HN.map(()=>mk('circle',{r:6,class:'gain'},$('hubP')));
const WN=[...Array(7)].map((_,i)=>{const a=i*2*Math.PI/7-.4;return[1150+200*Math.cos(a),480+190*Math.sin(a)]}).concat([[1080,420],[1230,450],[1140,570]]);
const WE=[];WN.forEach((a,i)=>WN.forEach((b,j)=>{if(j>i&&Math.hypot(a[0]-b[0],a[1]-b[1])<215){WE.push([a,b]);ln($('webE'),a,b,{class:'s-line','stroke-width':4})}}));
WN.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:16,class:'gain'},$('webN')));
const wP=[0,1,2,3,4,5].map(()=>mk('circle',{r:6,class:'ink'},$('webP')));

const PX=[300,550,800,1050,1300],HL=[],HR=[],HO=[];
PX.forEach(x=>{HL.push(ln($('hl'),[x,566],[800,440],{class:'s-line','stroke-width':4}));fig($('hp'),x,590,22,'ink');HR.push(mk('circle',{r:8,class:'ink'},$('hd')));HO.push(mk('circle',{r:8,class:'loss'},$('hd')))});
fig($('rul'),800,290,30,'loss');

const N3=[['NEWSPAPERS',360,300],['COURTS',1240,300],['UNIVERSITIES',360,620],['BUSINESSES',1240,620],['CITIZENS',800,700],['GOVERNMENT',800,450]];
const E3=[[0,1],[0,2],[0,4],[1,3],[1,4],[2,4],[3,4],[2,3]];
const eL=E3.map(e=>ln($('we3'),[N3[e[0]][1],N3[e[0]][2]],[N3[e[1]][1],N3[e[1]][2]],{class:'s-ink','stroke-width':4}));
const P3=[0,1,2,3].map(()=>mk('circle',{r:7,class:'gain'},$('wp3')));
const nG=N3.map((n,i)=>{const g=mk('g',{},$('wn3')),w=i<5?260:240;mk('rect',{x:n[1]-w/2,y:n[2]-32,width:w,height:64,rx:32,fill:i<5?'var(--stage)':'none',stroke:i<5?'var(--gain)':'var(--muted)','stroke-width':i<5?5:4,'stroke-dasharray':i<5?'none':'10 8'},g);
  const tx=mk('text',i<5?{x:n[1],y:n[2]+8,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'}:{x:n[1],y:n[2]+8,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=n[0];return g});
const rt3=i=>i==5?TM.newspaper:i==0?TM.newspaper+1.5:TM.courthouse+(i-1)*.6;

const HP=[],DI=18;
[380,500,620].forEach(y=>{for(let i=0;i<8;i++){const x=310+i*140,g=mk('g',{},$('hallP')),n=mk('g',{},g),f=fig(n,x,y,20,'ink');
  const c=mk('path',{d:'M'+(x-30)+' '+(y-4)+'l-12-10M'+(x+30)+' '+(y-4)+'l12-10M'+(x-34)+' '+(y+12)+'h-14M'+(x+34)+' '+(y+12)+'h14',class:'s-gain','stroke-width':4,'stroke-linecap':'round'},n);HP.push([g,n,f,c])}});
for(let i=0;i<6;i++)ln($('cage'),[546+i*18,592],[546+i*18,752],{class:'s-loss','stroke-width':5});
mk('rect',{x:536,y:584,width:108,height:176,rx:8,fill:'none',class:'s-loss','stroke-width':6},$('cage'));

const S5=[[280,620],[440,540],[600,460]],CH5=S5.concat([[780,330]]),B5=[],K5=[];
for(let i=0;i<3;i++)K5.push(ln($('lk5'),CH5[i],CH5[i+1],{class:'s-muted','stroke-width':4,'stroke-dasharray':'8 8'}));
S5.forEach(q=>{fig($('pp5'),q[0],q[1],22,'ink');const g=mk('g',{},$('pp5'));const r=mk('rect',{x:q[0]-110,y:q[1]-92,width:80,height:56,rx:14,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  const tx=mk('text',{x:q[0]-70,y:q[1]-52,'font-size':34,'text-anchor':'middle',class:'d'},g);B5.push([g,r,tx])});
fig($('ru5'),780,300,28,'loss');

// scene 6: majority tally, web that turns into a hub
const T6=[...Array(7)].map((_,i)=>mk('circle',i<5?{cx:184+i*32,cy:290,r:13,class:'gain'}:{cx:184+i*32,cy:290,r:13,fill:'var(--muted)'},$('tal6')));
const C6=[1080,460];
const N6=[...Array(8)].map((_,i)=>{const a=i*Math.PI/4;return[1080+230*Math.cos(a),460+200*Math.sin(a)]});
const CUT6=[0,4],E6=[],S6=[],ND6=[];
N6.forEach((q,i)=>{E6.push(ln($('we6'),q,N6[(i+1)%8],{class:'s-gain','stroke-width':4}));if(i<4)E6.push(ln($('we6'),q,N6[i+3],{class:'s-gain','stroke-width':4}));
  if(CUT6.includes(i)){ln($('cut6'),q,C6,{class:'s-muted','stroke-width':4,'stroke-dasharray':'8 10'});
    const mx=(q[0]+C6[0])/2,my=q[1];mk('path',{d:'M'+(mx-12)+' '+(my-16)+'l24 32M'+(mx+12)+' '+(my-16)+'l-24 32',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('cut6'))}
  else S6.push(ln($('sp6'),q,C6,{class:'s-loss','stroke-width':5,pathLength:1,'stroke-dasharray':'1 1'}));
  ND6.push(mk('circle',{cx:q[0],cy:q[1],r:20,class:'gain'},$('nd6')))});

const R7=[0,1,2].map(()=>mk('circle',{cx:800,cy:320,r:40,fill:'none',class:'s-loss','stroke-width':4},$('rg7')));
const A7=[],L7=[];
for(let i=0;i<6;i++){const x=260+i*216,g=mk('g',{},$('ar7'));fig(g,x,640,22,'ink');const b=mk('g',{},g);
  mk('path',{d:'M'+(x-55)+' 506h110v58h-44l-11 14-11-14h-44z',fill:'var(--stage)',class:'s-ink','stroke-width':4,'stroke-linejoin':'round'},b);
  mk('path',{d:'M'+(x-36)+' 535q9-14 18 0t18 0 18 0 18 0',fill:'none',class:'s-muted','stroke-width':4,'stroke-linecap':'round'},b);
  A7.push([g,b,x]);L7.push(ln($('lk7'),[x,500],[800,366],{class:'s-gain','stroke-width':4,'stroke-dasharray':'8 8'}))}

fig($('em8'),1060,560,18,'ink');fig($('em8'),1380,500,22,'gain');