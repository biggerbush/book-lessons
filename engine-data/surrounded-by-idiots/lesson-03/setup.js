const P=(g,x,y,r,c)=>{const h=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},h);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},h);return h};
const RAYS=(g,cx,cy,r1,r2,n,a0,a1,w)=>{for(let i=0;i<n;i++){const a=a0+(a1-a0)*i/(n-1);mk('path',{d:'M'+(cx+r1*Math.cos(a)).toFixed(1)+' '+(cy+r1*Math.sin(a)).toFixed(1)+'L'+(cx+r2*Math.cos(a)).toFixed(1)+' '+(cy+r2*Math.sin(a)).toFixed(1),class:'s-gain','stroke-width':w,'stroke-linecap':'round'},g)}};
const TX=(g,x,y,s,fs,cls,o)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:cls},o||{}),g);e.textContent=s;return e};
const CARD=(g,x,y,w,h,st)=>{const r=mk('rect',{x:x,y:y,width:w,height:h,rx:18,fill:'var(--stage)',stroke:st||'var(--line)','stroke-width':3},g);g.insertBefore(r,g.firstChild)};
const FULL=n=>2*Math.PI*(n-1)/n;

P($('guests0'),1180,360,18,'ink');P($('guests0'),1260,370,18,'ink');
P($('yp0'),1390,340,22,'gain');RAYS($('rays0'),1390,340,32,48,5,Math.PI,2*Math.PI,5);

P($('yp1'),330,300,60,'gain');RAYS($('rays1'),1200,320,90,120,12,0,FULL(12),7);
let bx=600;const bars=[[440,'gain'],[180,'loss'],[140,'ink'],[120,'muted']].map(([w,c])=>{const r=mk('rect',{x:bx,y:605,width:0,height:70,fill:'var(--'+c+')'},$('bar1'));bx+=w;return [r,w]});
const yl1=TX($('bar1'),620,648,'YELLOW',20,'m',{style:'fill:var(--on-gain)'});

[[210,450],[300,430],[580,430],[670,450]].forEach(q=>P($('cr2'),q[0],q[1],20,'ink'));P($('cr2'),440,420,30,'gain');
P($('fid2'),1260,410,22,'gain');

RAYS($('rays3'),280,380,100,130,7,Math.PI,2*Math.PI,7);
const notes=[];for(let k=0;k<8;k++){const r=k>>2,c=r?3-k%4:k%4,x=510+c*150,y=270+r*180,g=mk('g',{},$('notes3'));
  mk('rect',{x:x,y:y,width:110,height:100,rx:8,class:'gain'},g);
  mk('path',{d:'M'+(x+18)+' '+(y+36)+'h74M'+(x+18)+' '+(y+62)+'h50',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round'},g);
  if(k){const d=k===4?'M1015 378v64':r?'M'+(x+144)+' '+(y+50)+'h-24':'M'+(x-34)+' '+(y+50)+'h24';mk('path',{d:d,class:'s-muted','stroke-width':5,'stroke-linecap':'round'},g)}
  notes.push(g)}
const ARC=[0,1,2].map(i=>mk('path',{d:'M'+(1370+i*28)+' '+(340-i*20)+'q'+(30+i*10)+' '+(60+i*20)+' 0 '+(120+i*40),fill:'none',class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('arcs3')));
const FAN=[1210,1290,1370,1450].map(x=>P($('fans3'),x,560,16,'ink'));

[['Poor listeners','THEY TALK MORE','THAN THEY HEAR'],['Fuzzy details','FACTS BLUR, PAPERWORK','GETS FORGOTTEN'],['Drifting off','HUGE START, THEN','NO FINISH LINE']].forEach((w,i)=>{const g=$('w4'+i),x=120+i*473;
  CARD(g,x,230,414,530);TX(g,x+36,650,w[0],44,'d5');TX(g,x+36,700,w[1],20,'m');TX(g,x+36,732,w[2],20,'m')});
const DX=[-110,-55,0,55,110],DY=[20,-20,10,-30,20];
const PAP=DX.map(()=>{const g=mk('g',{},$('pap4'));mk('rect',{x:-50,y:-65,width:100,height:130,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:'M-30 -35h60M-30 -10h60M-30 15h40',class:'s-line','stroke-width':5,'stroke-linecap':'round'},g);return g});
const CH4=[0,1,2,3].map(i=>mk('ellipse',{cx:1273+(i-1.5)*70,cy:420,rx:46,ry:26,fill:'none',stroke:i<2?'var(--gain)':'var(--loss)','stroke-width':10},$('ch4')));

[240,350,460].forEach(x=>[288,512].forEach(y=>mk('circle',{cx:x,cy:y,r:26,class:'ink'},$('seats5'))));
const C5=$('cal5');mk('rect',{x:720,y:250,width:760,height:400,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},C5);
mk('path',{d:'M720 300H1480M872 250V650M1024 250V650M1176 250V650M1328 250V650',class:'s-line','stroke-width':3},C5);
['MON','TUE','WED','THU','FRI'].forEach((s,i)=>TX(C5,796+i*152,284,s,20,'m',{'text-anchor':'middle'}));
const CHP=[0,1,2].map(i=>{const g=mk('g',{},$('chips5'));mk('rect',{x:732,y:320+i*74,width:128,height:56,rx:10,class:'gain'},g);TX(g,796,355+i*74,'YES!',20,'m',{'text-anchor':'middle',style:'fill:var(--on-gain)'});return g});
let sd='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,R=i%2?15:34;sd+=(i?'L':'M')+(380+R*Math.cos(a)).toFixed(1)+' '+(610+R*Math.sin(a)).toFixed(1)}mk('path',{d:sd+'Z',class:'gain'},$('st5'));

[['Small talk','WARMTH FIRST'],['The big picture','VISION, NOT NUMBERS'],['Enthusiasm','PRAISE IN PUBLIC'],['No fine print','NO SPREADSHEETS']].forEach((c,i)=>{const g=$('v6'+i),x=120+i*346;
  CARD(g,x,230,320,490,i===3?'var(--loss)':0);TX(g,x+30,610,c[0],34,'d5');TX(g,x+30,656,c[1],18,'m')});
const DOT6=[200,240,280].map(x=>mk('circle',{cx:x,cy:346,r:11,fill:'var(--stage)'},$('hs6')));
RAYS($('th6'),952,330,40,58,3,Math.PI*1.1,Math.PI*1.9,5);
for(let r=0;r<4;r++)for(let c=0;c<4;c++)mk('rect',{x:1218+c*50,y:330+r*34,width:50,height:34,fill:'none',stroke:'var(--ink)','stroke-width':3},$('grid6'));

[0,1,2].forEach(i=>CARD($('c7'+i),120+i*480,230,400,310));
const TK=[0,1,2].map(i=>{const y=310+i*65,g=$('c70');mk('rect',{x:150,y:y,width:40,height:40,rx:8,fill:'none',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:'M220 '+(y+20)+'H480',class:'s-line','stroke-width':8,'stroke-linecap':'round'},g);
  return mk('path',{d:'M158 '+(y+20)+'l10 12 18-24',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g)});
const CPC=[500,800,1100].map(x=>{TX($('cp7'),x,708,'CHECK-IN',18,'m',{'text-anchor':'middle'});return [mk('circle',{cx:x,cy:660,r:14,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},$('cp7')),x]});

RAYS($('rays8'),1220,720,52,70,8,0,FULL(8),5);