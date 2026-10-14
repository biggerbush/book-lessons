const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const star=(cx,cy,r1,r2,n)=>{let s='';for(let i=0;i<2*n;i++){const a=i*Math.PI/n-Math.PI/2,r=i%2?r2:r1;s+=(cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1)+' '}return s};
const lbl=(g,x,y,s)=>{const e=mk('text',{x:x,y:y,'font-size':18,class:'m','text-anchor':'middle'},g);e.textContent=s;return e};

const BUR=[[980,245],[1110,232],[1240,250],[1370,236],[1446,252]].map(q=>[mk('polygon',{points:star(0,0,30,14,8),class:'loss'},$('bursts')),q[0],q[1]]);
const GR=[[260,470,55],[370,410,40],[460,510,50],[580,420,45],[680,520,40],[300,590,35],[560,580,35]];
const gears=GR.map(([x,y,r])=>{const g=mk('g',{},$('gears')),n=Math.round(r/5),c=2*Math.PI*r;
  const o=mk('circle',{cx:x,cy:y,r:r,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':16,'stroke-dasharray':(c/n/2).toFixed(2)},g);
  mk('circle',{cx:x,cy:y,r:r-20,fill:'none',stroke:'var(--ink)','stroke-width':4},g);mk('circle',{cx:x,cy:y,r:r*.25,class:'ink'},g);return [g,o,x,y]});
const crew=[];for(let i=0;i<6;i++){const g=fig(mk('g',{},$('crew')),180+i*100,720,18,i?'ink':'gain');if(i==0)lbl(g,180,840,'LEADER');if(i==5)lbl(g,680,840,'NEWEST');crew.push(g)}

const zy=x=>390+45*Math.sin((x-200)/30), by=x=>680-110*Math.exp(-Math.pow((x-800)/110,2));
let z='',rb='';for(let x=200;x<=1380;x+=10){z+=(x>200?'L':'M')+x+' '+zy(x).toFixed(1);rb+=(x>200?'L':'M')+x+' '+by(x).toFixed(1)}
mk('path',{d:z,class:'s-muted',fill:'none','stroke-width':4},$('zig'));
const RT=mk('path',{d:rb,class:'s-gain',fill:'none','stroke-width':7,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':1},$('route'));
['ob0','ob1'].forEach(i=>$(i).setAttribute('points',star(0,0,40,20,9)));

const smoke=[0,1,2].map(i=>mk('circle',{cx:440+i*8,r:14+i*4,fill:'var(--muted)','fill-opacity':.35},$('smoke')));
const W3=[120,72,136,96,48,112,80,144,64,104],ROWS=W3.map((w,i)=>{const y=320+i*40,g=mk('g',{},$('rows'));
  mk('rect',{x:630,y:y,width:90,height:14,rx:4,fill:'var(--line)'},g);mk('rect',{x:740,y:y,width:w,height:14,rx:4,class:'ink'},g);
  mk('path',{d:'M902 '+(y+6)+'l7 7 13-14',class:'s-gain',fill:'none','stroke-width':4,'stroke-linecap':'round'},$('ticks'));return g});

[920,1120,1320].forEach(x=>{fig($('sups'),x,520,34,'ink');mk('path',{d:'M'+(x-51)+' 632l-30-30l-6-26M'+(x+51)+' 632l30-30l6-26',fill:'none',class:'s-ink','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('arms'));
  const q=mk('text',{x:x,y:455,'font-size':56,class:'d','text-anchor':'middle',style:'fill:var(--loss)'},$('qs'));q.textContent='?'});
fig($('leif'),260,520,40,'gain');

const R5=[];for(let i=0;i<10;i++){const y=240+i*44,o=mk('g',{},$('cut')),g=mk('g',{},o);
  mk('rect',{x:120,y:y,width:100,height:22,rx:6,fill:'var(--line)'},g);mk('rect',{x:240,y:y,width:[260,200,180,240,120,280,150,220,100,200][i],height:22,rx:6,class:i<2?'gain':'ink'},g);R5.push([o,g])}
const TG=[920,1260].map(cx=>{const cy=470,g=mk('g',{},$('tgs'));
  mk('circle',{cx:cx,cy:cy,r:110,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);mk('circle',{cx:cx,cy:cy,r:72,fill:'none',stroke:'var(--ink)','stroke-width':6},g);mk('circle',{cx:cx,cy:cy,r:34,class:'gain'},g);
  lbl(g,cx,630,'CLEAR MEASURE');const a=mk('path',{d:'M0 0L110-110M88-118l22 8 8 22',fill:'none',class:'s-ink','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('tgs'));return [g,a,cx,cy]});

fig($('ldr'),260,480,44,'gain');
[900,1060,1220,1380].forEach(x=>{fig($('team'),x,540,30,'ink');mk('path',{d:'M'+(x-24)+' 482q6-12 12 0t12 0t12 0t12 0',class:'s-loss',fill:'none','stroke-width':4,'stroke-linecap':'round'},$('sq'))});

fig($('ppl7'),240,430,40,'ink');fig($('ppl7'),1360,430,40,'ink');
const card=(g,c)=>{mk('rect',{x:0,y:0,width:120,height:76,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M20 22h80M20 38h80M20 54h50',class:c,'stroke-width':5,'stroke-linecap':'round'},g)};
card($('cd1'),'s-ink');card($('cd2'),'s-gain');
const NL=[0,1,2].map(i=>mk('path',{d:'M-90 '+(-60+i*60)+'h'+(i==2?110:180),stroke:'var(--on-gain)','stroke-width':12,'stroke-linecap':'round'},$('nl')));