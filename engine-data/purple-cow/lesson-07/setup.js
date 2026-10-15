// safety: make sure every scene group the template expects exists
(function(){const s0=$('s0'),sv=s0&&s0.parentNode;if(sv&&SC&&SC.length){for(let i=1;i<SC.length;i++){if(!$('s'+i))mk('g',{id:'s'+i,opacity:0},sv)}}})();
const RZ=(el,k)=>{if(el)rise(el,k)};
const SA=(el,a,v)=>{if(el)el.setAttribute(a,v)};
const PAR=id=>$(id)||$('s0');
const L7person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const L7cow=(par,x,y,s,c,ex)=>{const o=mk('g',ex||{},par),g=mk('g',{transform:'translate('+x+' '+y+') scale('+s+')'},o),S={stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},A=a=>Object.assign({},S,a);
  [-55,-25,25,55].forEach(l=>mk('path',A({d:'M'+l+' 30V88','stroke-width':10}),g));
  mk('path',A({d:'M-82-20q-28 10-22 46M82-70l-10-18M118-70l10-18',fill:'none'}),g);
  const b=[mk('rect',A({x:-85,y:-45,width:170,height:90,rx:32,fill:c}),g),mk('rect',A({x:68,y:-72,width:64,height:58,rx:20,fill:c}),g)];
  [[-30,-8,22,16],[30,14,16,12]].forEach(e=>mk('ellipse',{cx:e[0],cy:e[1],rx:e[2],ry:e[3],fill:'var(--ink)','fill-opacity':.2},g));
  mk('circle',{cx:110,cy:-50,r:5,fill:'var(--ink)'},g);return {o,b}};
const L7col=(c,v)=>c.b.forEach(e=>e.setAttribute('fill',v));
L7cow(PAR('l7tcow'),1290,430,1.1,'var(--gain)');
const MC=L7cow(PAR('l7mcow'),800,430,1.2,'var(--gain)');
for(let i=0;i<7;i++)L7person(PAR('l7fans'),500+i*100,650,18,'ink');
const CP=[[260,330],[300,560],[1350,330],[1320,560],[500,300],[1110,300]].map(q=>L7cow(PAR('l7copy'),q[0],q[1],.5,'var(--gain)'));
const ST=[260,320,380].map(x=>mk('path',{d:'M'+x+' 280q-14-15 0-30t0-30',fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},PAR('l7steam')));
const SH=[];for(let i=0;i<8;i++){const x=120+i*170,g=mk('g',{},PAR('l7shops'));
  mk('rect',{x:x,y:620,width:150,height:130,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('rect',{x:x-6,y:600,width:162,height:30,rx:6,fill:'var(--muted)'},g);
  mk('rect',{x:x+55,y:690,width:40,height:60,fill:'var(--line)'},g);
  [x+12,x+106].forEach(w=>mk('rect',{x:w,y:650,width:32,height:28,fill:'var(--line)'},g));SH.push(g)}
L7cow(PAR('l7kcow'),380,440,1.3,'var(--gain)');
const DR=[0,1,2].map(()=>mk('circle',{cx:705,cy:380,r:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},PAR('l7drops')));
const CO=[];for(let i=0;i<8;i++)CO.push(mk('rect',{x:958,y:556-i*26,width:164,height:20,rx:8,class:'gain'},PAR('l7coins')));
const BH=[80,150,230],BR=BH.map((h,i)=>mk('rect',{x:1220+i*80,y:580,width:60,height:0,rx:6,class:'gain'},PAR('l7bars')));
for(let i=0;i<4;i++)L7person(PAR('l7ppl'),220+i*80,470,22,'ink');
const SC4=L7cow(PAR('l7scow'),840,470,.85,'var(--gain)');
L7cow(PAR('l7jcow'),380,440,.8,'var(--gain)');
const JK=[];for(let i=0;i<5;i++)JK.push(mk('ellipse',{cx:640,cy:520-i*22,rx:50,ry:12,class:'gain',stroke:'var(--ink)','stroke-width':3},PAR('l7jcoins')));
L7cow(PAR('l7ncow'),1100,440,.8,'var(--stage)',{'stroke-dasharray':'10 8'});
const PL=['MILK','INVEST','INVENT','REPEAT'].map((s,i)=>{const x=120+i*350,g=PAR('l7pills');
  const r=mk('rect',{x:x,y:700,width:290,height:64,rx:32,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);
  const tx=mk('text',{x:x+145,y:741,'font-size':24,'text-anchor':'middle',class:'m'},g);tx.textContent=s;
  if(i<3)mk('path',{d:'M'+(x+298)+' 732h42m-14-14 14 14-14 14',fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return [r,tx]});
const FC=[];for(let i=0;i<10;i++){const r=i<5?0:1,x=r?330+(i-5)*260:220+i*270;FC.push(L7cow(PAR('l7fcows'),x,r?610:420,.6,'var(--muted)'))}
for(let x=140;x<=1460;x+=110)mk('path',{d:'M'+x+' 712v48',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},PAR('l7fence'));
const CE=[];for(let r=0;r<4;r++)for(let c=0;c<7;c++){const x=120+c*88.5,y=320+r*82,e=mk('rect',{x:x,y:y,width:82,height:74,rx:8,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},PAR('l7cells'));
  if(c===4){const tx=mk('text',{x:x+41,y:y+45,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},PAR('l7cells'));tx.textContent='TRY';CE.push([e,tx])}}
L7cow(PAR('l7ncow2'),1170,340,.8,'var(--gain)');
L7cow(PAR('l7mcow3'),1330,624,.5,'var(--muted)');