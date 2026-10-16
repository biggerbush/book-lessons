const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.9)+' '+(y+r*4.6)+'v-'+(r*1.1)+'a'+(r*1.9)+' '+(r*1.9)+' 0 0 1 '+(r*3.8)+' 0v'+(r*1.1)+'z',class:c},g)};
const RAY=(g,cx,cy,a,b,n,c,w,s=0,sp=2*Math.PI)=>{for(let i=0;i<n;i++){const q=s+(i+.5)*sp/n;mk('path',{d:'M'+(cx+a*Math.cos(q)).toFixed(1)+' '+(cy+a*Math.sin(q)).toFixed(1)+'L'+(cx+b*Math.cos(q)).toFixed(1)+' '+(cy+b*Math.sin(q)).toFixed(1),class:c,'stroke-width':w,'stroke-linecap':'round'},g)}};
RAY($('frays'),1180,640,48,80,10,'s-loss',7);
RAY($('wr'),1140,480,30,70,4,'s-loss',6,Math.PI,Math.PI);
RAY($('ring'),960,440,120,150,3,'s-loss',6,-.5,1);RAY($('ring'),960,440,120,150,3,'s-loss',6,Math.PI-.5,1);
P($('pl'),450,380,46,'ink');$('pl').appendChild($('fear'));P($('pr'),1150,380,46,'ink');P($('py'),300,420,40,'ink');P($('pt'),680,420,40,'ink');
let st='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?15:34;st+=(i?'L':'M')+(680+r*Math.cos(a)).toFixed(1)+' '+(330+r*Math.sin(a)).toFixed(1)}mk('path',{d:st+'z',class:'gain'},$('pt'));
const CHIP=g=>{mk('rect',{x:-60,y:-24,width:120,height:48,rx:24,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);mk('path',{d:'M-34 4l12-10 12 10 12-10 12 10 12-10',fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-linejoin':'round'},g)};
CHIP($('c0'));CHIP($('c1'));
const HT=[0,1,2,3,4].map(i=>mk('circle',{cx:960+i*110,cy:590,r:28,class:'loss'},$('hits')));
for(let i=0;i<4;i++){const x=460+i*60;mk('path',{d:'M'+(x-22)+' 800Q'+(x-22)+' 760 '+x+' 730Q'+(x+22)+' 760 '+(x+22)+' 800z',class:'loss'},$('flm'))}
const CH7=['REASSURANCE','A BOUNDARY','GOING AFTER A GOAL'].map((s,i)=>{const g=mk('g',{},$('chips7'));mk('rect',{x:160,y:430+i*80,width:520,height:60,rx:30,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);const tx=mk('text',{x:420,y:469+i*80,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=s;return g});