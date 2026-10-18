const fig=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)};
fig($('lead'),300,330,40,'var(--ink)');fig($('foll'),540,330,40,'var(--muted)');
const BX=[0,1,2,3].map(i=>mk('rect',{x:608,y:360-i*40,width:60,height:32,rx:6,class:'loss','fill-opacity':.85-i*.15},$('pack')));
const B=[];for(let i=0;i<6;i++)B.push(mk('rect',{width:100,height:70,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('blk')));
const NB=[[320,500],[440,500],[560,500],[440,430]].map(q=>mk('rect',{x:q[0],y:q[1],width:100,height:70,rx:8,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},$('nb')));
for(let i=0;i<4;i++)for(let j=0;j<2;j++)mk('rect',{x:150+i*115,y:285+j*115,width:95,height:95,rx:8,fill:'var(--line)'},$('cells'));
const CR=[];for(let i=0;i<5;i++){const x=180+i*110,g=mk('g',{},$('crowd3'));fig(g,x,650,22,'var(--muted)');mk('path',{d:'M'+(x-33)+' 724l-22-26M'+(x+33)+' 724l22-26',class:'s-muted','stroke-width':6,'stroke-linecap':'round'},g);CR.push(g)}
for(let i=0;i<4;i++)mk('rect',{x:140+i*68,y:280,width:52,height:120,rx:6,fill:'var(--line)'},$('cells4'));
const CH4=['COBALT','NICKEL','ALUMINIUM','CARBON'].map((s,i)=>{const x=520+i*240,g=mk('g',{},$('chips4'));mk('rect',{x:x,y:290,width:220,height:90,rx:45,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);const tx=mk('text',{x:x+110,y:343,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=s;return g});
let gp='';for(let k=0;k<32;k++){const a=k*Math.PI/16,R=k%4<2?44:32;gp+=(k?'L':'M')+(R*Math.cos(a)).toFixed(1)+' '+(R*Math.sin(a)).toFixed(1)}
const GR=mk('g',{},$('gear'));mk('path',{d:gp+'Z',class:'gain'},GR);mk('circle',{r:12,fill:'var(--ink)'},GR);
const RG=[310,390,470,550].map((y,k)=>{const g=mk('g',{},$('rungs'));mk('path',{d:'M720 '+y+'H880',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},g);if(k<3){const tx=mk('text',{x:800,y:y+48,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent='WHY?'}return g});
const card=(par,s,i,x,cert)=>{const o=mk('g',{},par),g=mk('g',{},o),y=280+i*80;const r=mk('rect',cert?{x:x,y:y,width:400,height:64,rx:12,class:'gain'}:{x:x,y:y,width:400,height:64,rx:12,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  const tx=mk('text',{x:x+200,y:y+41,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var('+(cert?'--on-gain':'--ink')+')'},g);tx.textContent=s;
  const ln=cert?null:mk('line',{x1:x+16,y1:y+32,x2:x+16,y2:y+32,stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},g);return [o,g,ln,y,tx,r]};
const CTX=['WHAT IT IS MADE OF','WHAT MATERIALS COST','WHAT IT MUST DO'];
const CC=CTX.map((s,i)=>card($('cc'),s,i,120,1));
const FD=CTX.map((s,i)=>card($('fnd'),s,i,120,1));
const AC=['ALWAYS EXPENSIVE','MUST BE MADE THIS WAY','EVERYONE SAYS SO'].map((s,i)=>card($('ac'),s,i,1080,0));
for(let i=0;i<6;i++)mk('circle',{cx:1120+i*64,cy:240,r:10,class:'ink'},$('spir'));
const IT=[200,240,150,210].map((w,i)=>{const y=340+i*60,g=mk('g',{},$('items'));mk('rect',{x:1110,y:y-20,width:28,height:28,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M1160 '+(y-6)+'h'+w,class:'s-line','stroke-width':8,'stroke-linecap':'round'},g);return g});
fig($('mref'),1380,320,24,'var(--muted)');