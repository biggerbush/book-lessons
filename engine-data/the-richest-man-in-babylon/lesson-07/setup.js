const fig=(g,x,y,r,cls)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},e);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},e);return e};
const bag=(g,x,y,s)=>{const e=mk('g',{},g);mk('path',{d:`M${x-30*s} ${y-60*s}Q${x-110*s} ${y+80*s} ${x} ${y+80*s}Q${x+110*s} ${y+80*s} ${x+30*s} ${y-60*s}l${18*s} ${-28*s}h${-96*s}z`,class:'gain'},e);mk('path',{d:`M${x-34*s} ${y-58*s}h${68*s}`,stroke:'var(--ink)','stroke-width':6*s,'stroke-linecap':'round'},e);return e};
const tab=(g,x,y,w,h)=>{const e=mk('g',{},g);mk('rect',{x:x,y:y,width:w,height:h,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},e);return [e,[0,1,2,3,4].map(i=>mk('path',{d:`M${x+w*.3} ${y+h*(.18+i*.16)}H${x+w*.85}`,stroke:'var(--muted)','stroke-width':Math.max(4,w/40),'stroke-linecap':'round'},e))]};
const coin=(g,x,y,r)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:'gain'},e);mk('circle',{cx:x,cy:y,r:r*.6,fill:'none',stroke:'var(--on-gain)','stroke-width':2},e);return e};
const flame=(x,b,h,w)=>`M${x-w} ${b}Q${x-w*1.1} ${b-h*.45} ${x} ${b-h}Q${x+w*1.1} ${b-h*.45} ${x+w} ${b}Z`;

const bag0=bag($('t0bag'),1110,500,1.2), tab0=tab($('t0tab'),1290,340,190,260);

for(let i=0;i<22;i++)mk('circle',{cx:170+(i*137)%820,cy:225+(i*53)%170,r:i%4?2.5:4,class:'ink'},$('stars'));
mk('circle',{cx:920,cy:270,r:34,class:'gain'},$('stars'));mk('circle',{cx:936,cy:258,r:30,fill:'var(--stage)'},$('stars'));
const FL=[mk('path',{class:'gain'},$('fire')),mk('path',{fill:'var(--stage)'},$('fire'))];
[340,780].forEach(x=>fig($('trav'),x,600,24,'ink'));
fig($('kal'),1000,500,30,'ink');
fig($('story'),1170,330,22,'ink');
const nomM=mk('g',{},$('nomS'));fig(nomM,1300,350,18,'gain');

fig($('ark2'),260,360,34,'ink');bag($('gift1'),600,500,1);tab($('gift2'),820,360,200,260);
const TD=[];for(let i=0;i<11;i++)TD.push(mk('circle',{cx:140+i*120,cy:770,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('tl')));

const HR=[362,428].map((y,i)=>mk('ellipse',{cx:190,cy:y,rx:30,ry:16,class:i?'gain':'ink'},$('race')));
[300,440].forEach(x=>fig($('trk'),x,520,18,'loss'));fig($('trk'),620,520,18,'gain');
fig($('prt'),960,400,26,'loss');fig($('prt'),1360,400,26,'gain');
// empty coin slots stay behind once each coin is lost
const PO=[];for(let i=0;i<10;i++)PO.push(mk('circle',{cx:160+i*70,cy:750,r:26,fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'6 7'},$('slots')));
const PC=[];for(let i=0;i<10;i++)PC.push(coin($('purse'),160+i*70,750,26));

const T4=tab($('tab4'),120,240,320,460);
const NUM=['I','II','III','IV','V'].map((s,i)=>{const e=mk('text',{x:150,y:252+460*(.18+i*.16),'font-size':36,class:'d5'},$('tab4'));e.textContent=s;return e});
for(let i=0;i<9;i++)mk('circle',{cx:560+i*84,cy:350,r:30,fill:'var(--line)',stroke:'var(--ink)','stroke-width':3},$('c10'));
const C9=coin($('c10'),1316,350,30);
const FK=[];for(let i=0;i<36;i++)FK.push(coin($('flk'),560+(i%12)*70,590+Math.floor(i/12)*60,18));

fig($('own'),300,450,30,'gain');[760,880,1000].forEach(x=>fig($('adv'),x,440,24,'ink'));
const SK=[],FC=[];for(let k=0;k<6;k++){SK.push(mk('ellipse',{cx:1220+(k%3)*100,cy:560-Math.floor(k/3)*24,rx:40,ry:14,class:'gain',stroke:'var(--ink)','stroke-width':3},$('stk')));FC.push(coin($('fly'),0,0,14))}

const DR=[0,1,2].map(()=>coin($('drip'),430,575,14)), FE=[0,1,2,3].map(()=>coin($('flee'),1080,610,14));
fig($('p5'),960,440,28,'loss');

bag($('lft'),240,520,.6);[[420,530],[540,530],[480,450]].forEach(q=>bag($('hom'),q[0],q[1],.7));
const pan=(lab)=>{const g=mk('g',{},$('scl'));mk('path',{d:'M0 0L-80 120M0 0L80 120',stroke:'var(--muted)','stroke-width':4,fill:'none'},g);mk('path',{d:'M-90 120Q0 180 90 120Z',class:'ink'},g);const e=mk('text',{x:0,y:200,'font-size':20,'text-anchor':'middle',class:'m'},g);e.textContent=lab;return g};
const panL=pan('WISDOM'),panR=pan('GOLD');tab(panL,-36,40,72,80);bag(panR,0,80,.45);

const LB=mk('g',{},$('lockbag'));bag(LB,1360,620,.8);
mk('path',{d:'M1346 612v-12a14 14 0 0 1 28 0v12',fill:'none',stroke:'var(--ink)','stroke-width':6},LB);mk('rect',{x:1336,y:610,width:48,height:38,rx:6,class:'ink'},LB);