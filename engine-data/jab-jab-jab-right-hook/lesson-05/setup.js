const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const tx=(g,x,y,s,f,c,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':f,class:c},a||{}),g);e.textContent=s;return e};
const xI=(g,x,y)=>mk('path',{d:'M'+(x-12)+' '+(y-12)+'l24 24m0-24l-24 24',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},g);
const ck=(g,x,y)=>mk('path',{d:'M'+(x-14)+' '+y+'l10 10 18-22',fill:'none',class:'s-gain','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);

const WV=[0,1,2].map(()=>mk('path',{d:'M1170 320a70 70 0 0 1 0 100',fill:'none',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('waves')));
[[1270,260],[1360,240],[1440,280],[1290,420],[1380,400],[1450,440]].forEach(q=>fig($('crowd0'),q[0],q[1],18,'ink'));
const CB=[[1290,190],[1415,225],[1310,362]].map(q=>{const g=mk('g',{},$('chat0'));mk('rect',{x:q[0],y:q[1],width:50,height:28,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},g);for(let k=0;k<3;k++)mk('circle',{cx:q[0]+13+k*12,cy:q[1]+14,r:3,class:'ink'},g);return g});

const BL=[];for(let i=0;i<16;i++){const x=190+i*80;BL.push(mk('circle',{cx:x,cy:(250+25*Math.abs(Math.sin(Math.PI*(x-170)/420))).toFixed(1),r:7,class:'gain'},$('bulbs')))}
const GR=['NEWS','GAMES','SHOWS','FRUSTRATIONS'].map((s,i)=>{const x=300+i*250,y=500+(i%2)*80,g=mk('g',{},$('groups'));mk('circle',{cx:x,cy:y+10,r:85,fill:'none',class:'s-line','stroke-width':3,'stroke-dasharray':'6 8'},g);[[0,-50],[43,25],[-43,25]].forEach(o=>fig(g,x+o[0],y+o[1],14,'ink'));tx(g,x,y+130,s,20,'m',{'text-anchor':'middle'});return g});
fig($('guestp'),1320,470,22,'loss');

const NB=[[150,260,230,140,'SALE!'],[410,280,240,140,'PRESS RELEASE'],[250,430,260,130,'NEW PRODUCT']].map(c=>{const g=mk('g',{},$('nb'));mk('rect',{x:c[0],y:c[1],width:c[2],height:c[3],rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('circle',{cx:c[0]+c[2]/2,cy:c[1]+4,r:9,class:'loss'},g);tx(g,c[0]+c[2]/2,c[1]+c[3]/2+12,c[4],20,'m',{'text-anchor':'middle',style:'fill:var(--ink)'});return g});
// silent feed: card frame fades (de-emphasis), text stays readable in muted grey-blue
const FP=['SALE!','PRESS RELEASE','NEW PRODUCT'].map((s,i)=>{const g=mk('g',{},$('feed')),y=300+i*150;const r=mk('rect',{x:800,y:y,width:380,height:120,rx:14,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);tx(g,830,y+52,s,30,'d5',{style:'fill:var(--muted)'});tx(g,830,y+96,'NO REPLIES',20,'m',{style:'fill:var(--muted)'});return [g,r]});

const KS=['your product','your industry','your town'];
const KT=KS.map((s,i)=>{const g=mk('g',{},$('kt'));mk('rect',{x:120+i*300,y:345,width:280,height:50,rx:25,fill:'none',stroke:'var(--gain)','stroke-width':4},g);tx(g,260+i*300,378,s.toUpperCase(),20,'m',{'text-anchor':'middle',style:'fill:var(--gain)'});return g});
const CV=[0,1,2].map(i=>{const y=430+i*120,g=mk('g',{},$('convs'));const r=mk('rect',{x:120,y:y,width:900,height:100,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);mk('circle',{cx:180,cy:y+50,r:26,class:'ink'},g);mk('rect',{x:230,y:y+30,width:420-i*60,height:14,rx:7,fill:'var(--muted)'},g);mk('rect',{x:230,y:y+58,width:260+i*70,height:12,rx:6,fill:'var(--line)'},g);tx(g,962,y+57,'LIVE',18,'m',{'text-anchor':'end'});return [g,r,mk('circle',{cx:980,cy:y+50,r:9,class:'gain'},g)]});

const UP=fig($('usr'),1340,320,40,'ink');
const TP=[];for(let i=0;i<6;i++)TP.push([160+i*170,i%2?720:640]);
const TL=mk('polyline',{points:TP.map(q=>(q[0]+55)+','+(q[1]+28)).join(' '),fill:'none',class:'s-line','stroke-width':3},$('thr'));
const TH=TP.map((q,i)=>mk('rect',{x:q[0],y:q[1],width:110,height:56,rx:16,fill:i%2?'var(--gain)':'var(--stage)',stroke:i%2?'var(--gain)':'var(--ink)','stroke-width':4},$('thr')));

const TR=[0,1,2,3,4].map(i=>{const y=310+i*76,g=mk('g',{},$('rows'));const r=mk('rect',{x:150,y:y,width:460,height:56,rx:12,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);const h=tx(g,172,y+39,'#',30,'d');mk('rect',{x:210,y:y+22,width:140+(i*67)%120,height:12,rx:6,fill:'var(--muted)'},g);return [g,r,h]});
const PP=[];for(let i=0;i<14;i++)PP.push([i*2*Math.PI/14,mk('circle',{r:14,class:'ink'},$('ppl5'))]);
[[700,360,'JUST A LOGO','loss',xI],[1100,380,'SOMETHING FRESH','gain',ck]].forEach((c,i)=>{const g=$('c5'+i);mk('rect',{x:c[0],y:740,width:c[1],height:90,rx:16,fill:'var(--stage)',stroke:'var(--'+c[3]+')','stroke-width':4},g);c[4](g,c[0]+44,785);tx(g,c[0]+84,793,c[2],22,'m',{style:'fill:var(--'+c[3]+')'})});

const LM=[170,650].map((x,i)=>{mk('path',{d:'M'+x+' 520V290',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},$('tow'));const b=mk('polygon',{points:x+',296 '+(i?520:300)+',540 '+(i?400:420)+',600',fill:'var(--gain)','fill-opacity':.25},$('tow'));return [mk('rect',{x:x-40,y:260,width:80,height:36,rx:6,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':4},$('tow')),b]});
const RT=[];for(let i=0;i<35;i++)RT.push([1250+(i%5)*55,260+Math.floor(i/5)*60,mk('circle',{r:9,class:'gain'},$('rt'))]);

for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(300+100*Math.sin(a)).toFixed(1)+' '+(430-100*Math.cos(a)).toFixed(1)+'L'+(300+112*Math.sin(a)).toFixed(1)+' '+(430-112*Math.cos(a)).toFixed(1),class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('ticks'))}
const HB=[];for(let i=0;i<8;i++){const hot=i<4;HB.push(mk('rect',{x:480+i*66,y:400,width:58,height:50,rx:8,fill:hot?'var(--gain)':'var(--muted)','fill-opacity':hot?1-i*.2:.12+(i-4)*.08,stroke:hot?'none':'var(--muted)','stroke-width':hot?0:3},$('heat')))}
const FT=['TRAGIC','DIVISIVE','NOT YOURS','FITS YOU'].map((s,i)=>{const g=mk('g',{},$('fit')),y=300+i*80;(i<3?xI:ck)(g,1100,y-8);tx(g,1140,y,s,24,'m',i<3?{}:{style:'fill:var(--gain)'});return g});
const RB=[0,1,2].map(i=>{const g=mk('g',{},$('rb'));mk('rect',{x:1275,y:300+i*70,width:150,height:50,rx:14,class:'gain'},g);tx(g,1350,332+i*70,'REPLY',18,'m',{'text-anchor':'middle',style:'fill:var(--on-gain)'});return g});