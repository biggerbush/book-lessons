const HP='M0 70C-90 10-95-55-45-66C-20-72-5-55 0-42C5-55 20-72 45-66C95-55 90 10 0 70Z';
const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const bub=(g,x,y,w,h,on)=>{mk('rect',{x:x,y:y,width:w,height:h,rx:h/2,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--ink)','stroke-width':5},g);for(let i=-1;i<2;i++)mk('circle',{cx:x+w/2+i*28,cy:y+h/2,r:8,fill:on?'var(--on-gain)':'var(--ink)'},g)};
const rings=(g,cx,cy,n)=>Array.from({length:n},()=>mk('circle',{cx:cx,cy:cy,fill:'none',stroke:'var(--gain)','stroke-width':4},g));
const ringAnim=(R,r0,dr,k)=>R.forEach((c,i)=>{const f=(t*.5+i/R.length)%1;c.setAttribute('r',(r0+dr*f).toFixed(1));c.setAttribute('opacity',(k*(1-f)).toFixed(2))});
const rayLines=(g,n)=>Array.from({length:n},()=>mk('line',{stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},g));
const rayAnim=(L,cx,cy,r1,r2,sp)=>L.forEach((l,i)=>{const a=i*2*Math.PI/L.length+t*sp,c=Math.cos(a),s=Math.sin(a);l.setAttribute('x1',(cx+r1*c).toFixed(1));l.setAttribute('y1',(cy+r1*s).toFixed(1));l.setAttribute('x2',(cx+r2*c).toFixed(1));l.setAttribute('y2',(cy+r2*s).toFixed(1))});

const RG=rings($('thR'),1310,440,2);
const TH=mk('path',{d:HP,class:'gain'},$('thH'));
[330,430,530].forEach(y=>{mk('path',{d:'M1150 '+y+'H1470',class:'s-ink','stroke-width':4},$('wire'));for(let x=1166;x<1470;x+=64)mk('path',{d:'M'+(x-8)+' '+(y-8)+'l16 16m0-16l-16 16',class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('wire'))});

for(let i=0;i<16;i++)mk('circle',{cx:150+(i*389)%1300,cy:225+(i*67)%110,r:3,fill:'var(--muted)'},$('sky'));
const PR=[];for(let i=0;i<6;i++){const x=260+i*110,g=mk('g',{},$('pris'));fig(g,x,500,22,'ink');mk('path',{d:'M'+(x-10)+' 592V638M'+(x+10)+' 592V638',class:'s-ink','stroke-width':7,'stroke-linecap':'round'},g);PR.push(g)}
[[380,690,70,14],[700,705,90,16],[1080,690,60,12],[1340,710,70,13]].forEach(e=>mk('ellipse',{cx:e[0],cy:e[1],rx:e[2],ry:e[3],fill:'var(--ice)',stroke:'var(--line)','stroke-width':3},$('ice')));
[[250,670,8],[520,700,10],[560,672,6],[880,690,9],[930,722,6],[1220,680,8],[1450,670,7]].forEach(s=>mk('circle',{cx:s[0],cy:s[1],r:s[2],fill:'var(--muted)'},$('ice')));
const EX=[1020,1300].map(x=>{const g=$('grd');fig(g,x,470,26,'loss');mk('rect',{x:x-30,y:432,width:60,height:12,rx:4,class:'loss'},g);
  mk('path',{d:'M'+(x-12)+' 579V638M'+(x+12)+' 579V638M'+(x+10)+' 540L'+(x-80)+' 580',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},g);
  const e=mk('text',{x:x+34,y:420,'font-size':64,class:'d',style:'fill:var(--loss)'},$('shout'));e.textContent='!';return e});
const SN=Array.from({length:28},()=>mk('circle',{r:4,fill:'var(--muted)'},$('snow')));

fig($('frk'),520,470,50,'ink');fig($('nbr'),780,470,50,'ink');
mk('polygon',{points:'722,540 728,488 760,512 800,512 832,488 838,540',fill:'var(--muted)'},$('nbr'));
const WS=['M700 490q-12 15 0 30','M680 482q-18 23 0 46','M660 474q-24 31 0 62'].map(d=>mk('path',{d:d,class:'s-muted',fill:'none','stroke-width':4,'stroke-linecap':'round'},$('wsp')));
fig($('tclW'),430,262,24,'gain');

fig($('frk3'),300,560,40,'ink');
const RY=rayLines($('rays3'),16);
bub($('cb1'),400,400,220,70,0);bub($('cb2'),580,490,220,70,1);

const SR=rayLines($('sunR'),12);

const GR=rings($('gr5'),500,560,2);
const H5=mk('path',{d:HP,class:'gain'},$('hrtW'));

fig($('frk6'),260,420,44,'ink');
const WF=[mk('circle',{cx:1240,cy:420,r:44,fill:'var(--ink)',stroke:'var(--ink)','stroke-width':4,'stroke-dasharray':'10 8'},$('wf')),
  mk('path',{d:'M1174 604.8v-57.2a66 66 0 0 1 132 0v57.2z',fill:'var(--ink)',stroke:'var(--ink)','stroke-width':4,'stroke-dasharray':'10 8'},$('wf'))];
const MV=mk('path',{d:HP,class:'gain'},$('mvW'));

fig($('phP'),320,370,34,'gain');
const CP=[['FAR AWAY',120,160],['UNWELL',300,140],['GONE',460,110]].map(([s,x,w])=>{const g=mk('g',{},$('chips7'));
  mk('rect',{x:x,y:680,width:w,height:50,rx:25,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  const tx=mk('text',{x:x+w/2,y:712,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
bub($('b71'),900,400,140,60,0);bub($('b72'),1060,330,150,60,1);

bub($('q81'),1180,260,220,90,0);bub($('q82'),1260,380,220,90,1);