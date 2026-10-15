const T=(g,x,y,s,c,tx,o)=>{const e=mk('text',Object.assign({x,y,'font-size':s,class:c},o||{}),g);e.textContent=tx;return e};
const P=(g,x,y,r,f)=>[mk('circle',{cx:x,cy:y,r,fill:f},g),mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,fill:f},g)];
const env=(g,x,y,w,h,s,f)=>{mk('rect',{x,y,width:w,height:h,rx:8,fill:f||'var(--stage)',stroke:s,'stroke-width':5},g);mk('path',{d:`M${x} ${y+4}l${w/2} ${h*.55}l${w/2} ${-h*.55}`,fill:'none',stroke:s,'stroke-width':5,'stroke-linejoin':'round','stroke-linecap':'round'},g)};
const G=par=>mk('g',{},par);

for(let i=0;i<6;i++){const a=i*Math.PI/3;mk('circle',{cx:380+100*Math.cos(a),cy:500+100*Math.sin(a),r:16,fill:'var(--ink)'},$('wdots'))}
const CD=[];for(let r=0;r<7;r++)for(let c=0;c<10;c++)CD.push(mk('circle',{cx:720+c*80,cy:280+r*72,r:12,fill:'var(--muted)'},$('crowd')));
const LI=[3,17,25,38,44,52,61,66];
const LN=LI.map(i=>mk('path',{d:`M432 500L${CD[i].getAttribute('cx')} ${CD[i].getAttribute('cy')}`,stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8',fill:'none'},$('links')));

const ROWS=[],BADX=[],AIM=[];
for(let i=0;i<6;i++){const y=320+i*65,g=G($('rows'));mk('circle',{cx:170,cy:y,r:16,fill:'var(--ink)'},g);
  mk('rect',{x:200,y:y-8,width:160+(i*37)%60,height:16,rx:8,fill:'var(--line)'},g);
  mk('rect',{x:430,y:y-10,width:100,height:20,rx:10,fill:'none',stroke:'var(--muted)','stroke-width':3},g);ROWS.push(g);
  if(i==1||i==4)BADX.push(mk('path',{d:`M548 ${y-12}l24 24m0-24l-24 24`,stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},$('aim')));
  else AIM.push(mk('path',{d:`M545 ${y}C800 ${y} 900 450 ${1166+(i%3)*8} ${444+i*2}`,fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},$('aim')))}
const SRC=['BUILD IT YOURSELF','CONTACT-FINDING TOOLS','BUY A LIST'].map((s,i)=>{const g=G($('src'));
  mk('rect',{x:120+i*460,y:750,width:440,height:64,rx:32,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,340+i*460,790,22,'m',s,{'text-anchor':'middle'});return g});

const PL=[];for(let i=0;i<9;i++){const g=G($('pile'));env(g,150+((i*37)%60),600-i*36,280,160,'var(--muted)');PL.push(g)}
P($('av'),800,320,30,'var(--ink)');

P($('me4'),260,470,36,'var(--gain)');const TH=P($('them4'),1340,470,36,'var(--ink)');

const TC=[[0,'EMAIL'],[2,'MESSAGE'],[3,'PHONE'],[5,'EMAIL']].map(([d,s])=>{const cx=210+d*196,g=G($('cal'));
  if(s=='EMAIL')env(g,cx-45,340,90,60,'var(--ink)');
  else if(s=='PHONE'){mk('rect',{x:cx-22,y:325,width:44,height:80,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':5},g);mk('circle',{cx,cy:392,r:5,fill:'var(--ink)'},g)}
  else mk('path',{d:`M${cx-45} 335h90v56h-50l-24 20v-20h-16z`,fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);
  T(g,cx,452,20,'m',s,{'text-anchor':'middle'});T(g,cx,494,22,'m','NO REPLY',{'text-anchor':'middle',style:'fill:var(--loss)'});return g});
const DB=G($('cal'));$('cal').insertBefore(DB,$('cal').firstChild);
for(let i=0;i<7;i++){const x=120+i*196;mk('rect',{x,y:240,width:180,height:280,rx:14,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},DB);T(DB,x+20,280,20,'m','DAY '+(i+1))}
const ANS=G($('cal'));mk('rect',{x:1296,y:240,width:180,height:280,rx:14,fill:'var(--gain)'},ANS);
T(ANS,1386,380,30,'d','YES / NO',{'text-anchor':'middle',style:'fill:var(--on-gain)'});
T(ANS,1386,438,22,'m','CLEAR',{'text-anchor':'middle',style:'fill:var(--on-gain)'});
T(ANS,1386,470,22,'m','ANSWER',{'text-anchor':'middle',style:'fill:var(--on-gain)'});

const shop=(g,x)=>{for(let k=0;k<4;k++)mk('rect',{x:x+k*40,y:410,width:40,height:30,fill:k%2?'var(--stage)':'var(--gain)',stroke:'var(--ink)','stroke-width':3},g);
  mk('rect',{x,y:440,width:160,height:160,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);mk('rect',{x:x+62,y:520,width:36,height:80,fill:'var(--ink)'},g);
  [16,108].forEach(o=>mk('rect',{x:x+o,y:466,width:36,height:30,fill:'none',stroke:'var(--muted)','stroke-width':4},g))};
shop($('rA'),1040);shop($('rB'),1280);P($('bk'),220,400,40,'var(--gain)');
['COSTS · SITE ONE','COSTS · SITE TWO','TRACK BOTH SITES'].forEach((s,i)=>{const y=460+i*48,g=$('chk');
  mk('rect',{x:430,y:y-20,width:24,height:24,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':3},g);
  mk('path',{d:`M434 ${y-8}l7 7l12-14`,fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-linecap':'round'},g);T(g,470,y,20,'m',s)});

for(let i=0;i<24;i++)mk('circle',{cx:180+(i%12)*40,cy:232+Math.floor(i/12)*30,r:10,fill:'var(--muted)'},$('fin'));
const FL=[];for(let i=0;i<8;i++)FL.push(mk('circle',{r:9,fill:'var(--ink)'},$('fall')));
const VB=[];for(let i=0;i<3;i++){const y=340+i*80,g=$('ver');
  mk('rect',{x:1110,y,width:350,height:56,rx:12,fill:'none',stroke:'var(--ink)','stroke-width':4},g);
  VB.push(mk('rect',{x:1110,y,width:0,height:56,rx:12,fill:'var(--gain)','fill-opacity':.45},g));T(g,1130,y+36,20,'m','MESSAGE V'+(i+1))}
const TMG=[];for(let i=0;i<8;i++){const x=760+i*90,g=G($('team'));
  if(i%2){mk('path',{d:`M${x} 752v-14`,stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},g);mk('rect',{x:x-25,y:752,width:50,height:44,rx:10,fill:'var(--ink)'},g);
    [-10,10].forEach(o=>mk('circle',{cx:x+o,cy:772,r:5,fill:'var(--stage)'},g))}
  else P(g,x,762,13,'var(--gain)');TMG.push(g)}

const EN=[],CK=[];for(let i=0;i<10;i++){const g=G($('tenm'));env(g,140+i*124,600,92,62,'var(--ink)');EN.push(g);
  const c=G($('tenm'));mk('circle',{cx:232+i*124,cy:600,r:16,fill:'var(--gain)'},c);
  mk('path',{d:`M${224+i*124} 600l6 6l10-12`,fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},c);CK.push(c)}