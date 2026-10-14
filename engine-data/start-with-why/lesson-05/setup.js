const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
fig($('wk'),200,700,18,'ink');
const WKP=[...$('wk').children];
// illegible smudges standing in for the fogged-out sign text
[[200,326,210],[200,362,150]].forEach(q=>mk('rect',{x:q[0],y:q[1],width:q[2],height:16,rx:8,fill:'var(--muted)','fill-opacity':.55},$('smg')));
// grey-blue fog bands drifting over the sign
const FOG=[[150,276,380],[220,306,340],[140,338,420],[200,370,360],[160,402,400],[230,434,300],[170,470,320]].map(q=>mk('rect',{x:q[0],y:q[1],width:q[2],height:30,rx:15,fill:'var(--muted)','fill-opacity':.42},$('fog')));
const TF=[[960,700],[740,650],[1060,700],[1160,700],[740,750],[1260,700]];
const TK=TF.map((f,i)=>mk('circle',{cx:160,cy:700,r:28,class:i%3==1?'loss':'gain'},$('toks')));
const BD=[480,950,1420].map(x=>{const g=mk('g',{},$('bdg'));mk('circle',{cx:x,cy:560,r:24,class:'gain'},g);mk('path',{d:'M'+(x-11)+' 560l7 8 14-15',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
const BB=['COOKIES','CANDY','RICE MILK','CELERY'].map((s,i)=>{const x=200+i*150;fig(mk('g',{},$('crowd6')),x,560,22,'ink');const b=mk('g',{},$('bubs'));
  const r=mk('rect',{x:x-70,y:420,width:140,height:60,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},b);
  mk('path',{d:'M'+(x-8)+' 480l8 18 8-18',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},b);
  const tx=mk('text',{x:x,y:457,'font-size':20,'text-anchor':'middle',class:'m'},b);tx.textContent=s;return [b,r]});
const PL=[...Array(10)].map((_,i)=>mk('rect',{x:272+i*106,y:400,width:96,height:26,rx:4,class:'ink'},$('planks')));
const WK=[0,1,2].map(()=>mk('circle',{cx:300,cy:382,r:14},$('walk')));
const CD=[...'MTWTFSS'].map((s,i)=>{const x=120+i*140,r=mk('rect',{x:x,y:660,width:120,height:100,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('cal'));
  const tx=mk('text',{x:x+60,y:724,'font-size':36,'text-anchor':'middle',class:'d'},$('cal'));tx.textContent=s;return [r,tx]});