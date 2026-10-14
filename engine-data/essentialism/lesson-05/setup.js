const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const star=(cx,cy,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
// title: one ball at a time through the filter
const FB=mk('circle',{r:18,class:'loss'},$('fdots'));
const C1=[];for(let r=0;r<4;r++)for(let c=0;c<5;c++){const g=mk('g',{},$('cells1'));mk('rect',{x:640+c*108,y:320+r*108,width:100,height:100,rx:10,fill:'var(--line)'},g);tx(g,690+c*108,378+r*108,'OK',{class:'m','font-size':20,'text-anchor':'middle'});C1.push(g)}
person($('sivp'),260,420,40,'ink');
function thumb(g,cx,cy,cls,down){const h=mk('g',{transform:'translate('+cx+' '+cy+') rotate('+(down?180:0)+')'},g);
  mk('rect',{x:-55,y:-90,width:36,height:110,rx:18,class:cls},h);mk('rect',{x:-55,y:-10,width:110,height:90,rx:18,class:cls},h);
  mk('path',{d:'M-10 18h50M-10 40h50M-10 62h50',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round'},h);mk('rect',{x:60,y:-6,width:22,height:82,rx:6,class:'ink'},h)}
thumb($('tA'),1020,440,'gain',0);thumb($('tB'),1340,440,'loss',1);
mk('path',{d:star(146,270,18),class:'gain'},$('crit'));
for(let i=0;i<=10;i++){mk('path',{d:'M'+(200+i*120)+' 440v16',class:'s-muted','stroke-width':3},$('tick3'));tx($('tick3'),200+i*120,492,String(i*10),{class:'m','font-size':20,'text-anchor':'middle'})}
const MK=[['A',.4],['B',.7],['C',.95]].map((q,i)=>{const o=mk('g',{},$('mk3')),g=mk('g',{},o),c=mk('circle',{cx:0,cy:0,r:24,class:i==2?'gain':'ink'},g);
  tx(g,0,8,q[0],{class:'d','font-size':24,'text-anchor':'middle',style:'fill:var('+(i==2?'--on-gain':'--stage')+')'});return [o,g,c,q[1]]});
// scene 4: stretched thin vs confidence
person($('lfig4'),440,470,28,'ink');
const OP4=[[210,340],[670,340],[190,520],[690,520],[210,690],[670,690]].map(([x,y])=>{const s=mk('line',{x1:440,y1:560,x2:x,y2:y,'stroke-linecap':'round'},$('rp4')),g=mk('g',{},$('op4'));
  mk('rect',{x:x-65,y:y-25,width:130,height:50,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  tx(g,x,y+7,'DECENT',{class:'m','font-size':18,'text-anchor':'middle',style:'fill:var(--ink)'});return [g,s]});
person($('wk4'),940,482,28,'ink');
const OF=[0,1,2].map(i=>{const x=160+i*220,y=400,g=mk('g',{},$('offers5'));mk('rect',{x:x,y:y,width:180,height:240,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:'M'+(x+70)+' '+(y+64)+'v-16h40v16',fill:'none',stroke:'var(--ink)','stroke-width':6},g);mk('rect',{x:x+40,y:y+62,width:100,height:70,rx:10,class:'ink'},g);
  tx(g,x+90,y+190,'OFFER '+'ABC'[i],{class:'m','font-size':20,'text-anchor':'middle'});return g});
const PL=[0,1,2].map(i=>{tx($('padl5'),940,440+i*120,String(i+1),{class:'d','font-size':40});return mk('line',{x1:990,y1:428+i*120,x2:990,y2:428+i*120,class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('padl5'))});
const CX=[440,560,680,860,980,1100],MD=[[1,1,0,1,1,0],[1,1,1,1,0,0],[1,1,1,1,1,0]];
CX.forEach((x,j)=>{if(j<3)mk('rect',{x:x-18,y:262,width:36,height:36,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},$('hd6'));else mk('path',{d:star(x,280,22),class:'gain'},$('st6'))});
const R6=MD.map((m,r)=>{const y=400+r*120,o=mk('g',{},$('rows6')),g=mk('g',{},o);tx(g,120,y+12,'Offer '+'ABC'[r],{class:'d5','font-size':36});
  const mm=m.map((v,j)=>mk('path',{d:v?'M'+(CX[j]-18)+' '+y+'l12 14l24-28':'M'+(CX[j]-14)+' '+(y-14)+'l28 28m0-28l-28 28',fill:'none',stroke:v?'var(--gain)':'var(--loss)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g));
  const ok=r==2,res=mk('g',{},g);mk('rect',{x:1240,y:y-28,width:160,height:56,rx:28,fill:ok?'var(--gain)':'none',stroke:ok?'none':'var(--loss)','stroke-width':4},res);
  tx(res,1320,y+10,ok?'YES':'NO',{class:'d','font-size':28,'text-anchor':'middle',style:'fill:var('+(ok?'--on-gain':'--loss')+')'});return [o,g,mm,res]});
const C7=[];for(let r=0;r<4;r++)for(let c=0;c<4;c++)C7.push(mk('rect',{x:140+c*140,y:290+r*108,width:128,height:96,rx:10,fill:'var(--line)'},$('cells7')));
for(let i=0;i<8;i++)mk('rect',{x:840+i*36,y:650,width:24,height:50,fill:'var(--muted)'},$('many7'));