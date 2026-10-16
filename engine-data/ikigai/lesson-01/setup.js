const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const T=(g,x,y,fs,cls,s,a)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':a||'start'},g);e.textContent=s;return e};
const starD=(cx,cy,R,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const rayset=(g,cx,cy,r1,r2,n)=>{for(let i=0;i<n;i++){const a=i*2*Math.PI/n;mk('path',{d:'M'+(cx+r1*Math.cos(a)).toFixed(1)+' '+(cy+r1*Math.sin(a)).toFixed(1)+'L'+(cx+r2*Math.cos(a)).toFixed(1)+' '+(cy+r2*Math.sin(a)).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},g)}};
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(1070+42*Math.cos(a)).toFixed(1)+' '+(600+42*Math.sin(a)).toFixed(1)+'L'+(1070+50*Math.cos(a)).toFixed(1)+' '+(600+50*Math.sin(a)).toFixed(1),class:'s-ink','stroke-width':i%3?2:4,'stroke-linecap':'round'},$('ticks'))}
const RX0=[1200,1232,1262,1292,1330,1362,1394,1422];
const RN0=RX0.map(x=>mk('path',{class:'s-muted','stroke-width':3,'stroke-linecap':'round',fill:'none'},$('rain0')));
const PN=[[230,660],[290,610],[340,560],[390,490],[450,430],[500,375],[535,320]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:10,class:'gain',stroke:'var(--ink)','stroke-width':3},$('pins')));
fig($('elder'),820,400,50,'ink');
mk('path',{d:'M795 410q25 24 50 0M793 388q9-9 18 0M829 388q9-9 18 0',fill:'none',stroke:'var(--stage)','stroke-width':6,'stroke-linecap':'round'},$('elder'));
const AU=[[1250,'GARCÍA'],[1390,'MIRALLES']].map((q,i)=>{const g=mk('g',{},$('auth'));fig(g,q[0],420,30,i?'gain':'ink');T(g,q[0],600,20,'m',q[1],'middle');return g});
rayset($('rays'),380,400,66,88,8);
fig($('riser'),620,380,22,'ink');
const FC=[];for(let i=0;i<10;i++){const x=190+i*136,g=fig(mk('g',{},$('faces')),x,680,22,'ink'),k=i%4;
  if(k===0)mk('circle',{cx:x,cy:630,r:12,class:'gain'},g);else if(k===1)mk('rect',{x:x-10,y:620,width:20,height:20,class:'gain'},g);
  else if(k===2)mk('path',{d:'M'+(x-12)+' 640h24l-12-22z',class:'gain'},g);else mk('path',{d:starD(x,630,14,6),class:'gain'},g);FC.push(g)}
$('star').setAttribute('d',starD(800,492,34,15));
for(let r=0;r<4;r++)for(let c=0;c<5;c++){const on=r===2&&c===3;mk('rect',{x:150+c*72,y:350+r*72,width:60,height:60,rx:8,fill:on?'var(--loss)':'none',stroke:on?'var(--loss)':'var(--line)','stroke-width':3},$('cells'))}
fig($('gman'),900,480,40,'ink');
const PL=[1150,1240,1330,1420].map(x=>[mk('path',{class:'s-ink','stroke-width':6,'stroke-linecap':'round',fill:'none'},$('plants')),mk('circle',{cx:x,r:0,class:'gain'},$('plants')),x]);
const DR=[0,1,2].map(()=>mk('circle',{r:6,class:'gain'},$('drops')));
fig($('digger'),250,256,18,'ink');
for(let i=0;i<9;i++)mk('circle',{cx:790,cy:280+i*55,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));
rayset($('r7'),1340,700,76,100,10);