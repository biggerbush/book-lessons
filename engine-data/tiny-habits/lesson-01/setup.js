const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const XS=[0,1,2].map(i=>{const y=270+i*70,g=$('tl');mk('rect',{x:1160,y:y-20,width:40,height:40,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:`M1230 ${y}h170`,stroke:'var(--line)','stroke-width':10,'stroke-linecap':'round'},g);return mk('path',{d:`M1166 ${y-14}l28 28M1194 ${y-14}l-28 28`,stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},g)});
fig($('mirP'),1280,330,26,'ink');
fig($('sciP'),300,300,36,'ink');
fig($('knP'),260,450,40,'ink');
for(let i=0;i<7;i++){const h=150+(i*37)%40;mk('rect',{x:1112+i*19,y:590-h,width:14,height:h,rx:3,class:'loss'},$('fz'))}
const PG=mk('g',{},$('pu'));fig(PG,480,400,36,'ink');mk('path',{d:'M515 480H692',stroke:'var(--ink)','stroke-width':12,'stroke-linecap':'round'},PG);
const PB=mk('path',{stroke:'var(--ink)','stroke-width':12,'stroke-linecap':'round',fill:'none'},$('pf')),PA=mk('path',{stroke:'var(--ink)','stroke-width':10,'stroke-linecap':'round',fill:'none'},$('pf')),PH=mk('circle',{r:18,class:'ink'},$('pf'));
const HB=[16,40,70,110,160,230],BR=HB.map((h,i)=>mk('rect',{x:1100+i*62,width:44,rx:6,class:'gain'},$('ch')));
const CK=[];for(let i=0;i<5;i++){const x=640+i*140,y=700-i*90;mk('rect',{x:x,y:y,width:140,height:760-y,fill:'var(--line)'},$('st'));const g=mk('g',{},$('st'));mk('circle',{cx:x+70,cy:y-40,r:24,class:'gain'},g);mk('path',{d:`M${x+58} ${y-40}l9 9 16-18`,fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);CK.push(g)}
for(let x=160;x<=840;x+=40)mk('path',{d:`M${x} 240V740`,stroke:'var(--line)','stroke-width':1.5},$('gr'));
for(let y=270;y<=710;y+=40)mk('path',{d:`M130 ${y}H870`,stroke:'var(--line)','stroke-width':1.5},$('gr'));
function strike(id,w,k){const l=$(id),x=+l.getAttribute('x1');l.setAttribute('x2',(x+(w+16)*k).toFixed(1))}