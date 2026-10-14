const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const star=(x,y,r)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;s+=(x+q*Math.cos(a)).toFixed(1)+','+(y+q*Math.sin(a)).toFixed(1)+' '}return s};
const quad=g=>[[600,280],[1000,280],[600,540],[1000,540]].forEach(c=>mk('rect',{x:c[0],y:c[1],width:400,height:260,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g));
for(let i=1;i<6;i++)mk('path',{d:'M'+(1160+i*53)+' 403V597',stroke:'var(--gain)','stroke-opacity':.25,'stroke-width':2},$('bpg'));
for(let j=1;j<4;j++)mk('path',{d:'M1163 '+(400+j*50)+'H1477',stroke:'var(--gain)','stroke-opacity':.25,'stroke-width':2},$('bpg'));
for(let i=0;i<8;i++)mk('rect',{x:146+i*13,y:300,width:i%3?4:8,height:140,class:'ink'},$('lts'));
[330,430,530].forEach(x=>{mk('circle',{cx:x,cy:400,r:42,class:'loss'},$('lts'));const q=mk('text',{x:x,y:418,'font-size':52,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'},$('lts'));q.textContent='?'});
const D=[];for(let i=0;i<5;i++){const x=780+i*140,g=mk('g',{},$('drs'));mk('rect',{x:x,y:300,width:110,height:240,class:'ink','fill-opacity':.15},g);mk('rect',{x:x,y:300,width:110,height:240,fill:'none',stroke:'var(--ink)','stroke-width':5},g);
  D.push([g,mk('polygon',{fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g),x])}
fig($('pw'),1110,600,28,'ink');
quad($('q2'));quad($('q3'));
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M'+(1140+24*Math.cos(a)).toFixed(1)+' '+(236+24*Math.sin(a)).toFixed(1)+'L'+(1140+32*Math.cos(a)).toFixed(1)+' '+(236+32*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':4,'stroke-linecap':'round'},$('sun'))}
const FZ=[];for(let i=0;i<14;i++){const x=150+(i*37)%140;FZ.push([mk('circle',{cx:x,cy:600+(i*53)%110,r:8+(i%3)*4,fill:'var(--muted)','fill-opacity':.35},$('fz')),x])}
mk('polygon',{points:star(672,350,16),fill:'var(--stage)'},$('cn'));
for(let i=0;i<4;i++)mk('rect',{x:1040,y:588+i*20,width:120,height:8,class:'loss'},$('usf'));
mk('polygon',{points:star(1095,420,56),class:'gain'},$('dfs'));
for(let i=0;i<4;i++)mk('rect',{x:1180+i*70,y:450,width:30,height:240,class:'ink'},$('cols'));
const CO=[];for(let i=0;i<4;i++){const g=mk('g',{},$('coins'));mk('circle',{r:18,class:'loss'},g);const s=mk('text',{y:8,'font-size':22,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'},g);s.textContent='$';CO.push(g)}
const RW=[];for(let i=0;i<8;i++){const y=380+i*52,g=mk('g',{},$('rsr'));mk('rect',{x:150,y:y-20,width:26,height:26,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':4},g);
  mk('path',{d:'M195 '+(y-7)+'h'+(160+(i*53)%120),class:'s-line','stroke-width':8,'stroke-linecap':'round'},g);
  RW.push([g,mk('path',{d:'M150 '+(y-6)+'l8 8 14-16',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g)])}
for(let i=0;i<7;i++)mk('rect',{x:650+i*52,y:380,width:28,height:40,class:'loss'},$('pits'));
[-160,-125,-90,-55,-20,15].forEach(d=>{const a=d*Math.PI/180,f=(r,b)=>(820+r*Math.cos(b)).toFixed(1)+' '+(300+r*Math.sin(b)).toFixed(1),x2=820+70*Math.cos(a),y2=300+70*Math.sin(a),h=b=>(x2-14*Math.cos(b)).toFixed(1)+' '+(y2-14*Math.sin(b)).toFixed(1);
  mk('path',{d:'M'+f(20,a)+'L'+f(70,a)+'M'+h(a-.5)+'L'+f(70,a)+'L'+h(a+.5),class:'s-loss','stroke-width':5,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},$('arr'))});
const PB=[];for(let i=0;i<4;i++){const x=180+i*140,g=mk('g',{},$('pb'));mk('rect',{x:x,y:500,width:90,height:90,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('rect',{x:x+18,y:518,width:54,height:40,rx:4,class:'gain','fill-opacity':.4+i*.2},g);mk('path',{d:'M'+(x+45)+' 610v20',class:'s-ink','stroke-width':4},g);PB.push(g)}
fig($('zk'),940,590,28,'gain');
const ZB=[0,1,2].map(i=>mk('rect',{x:1110+i*110,y:730,width:70,height:0,class:'gain'},$('zb')));
const P=[[220,640],[480,560],[760,640],[1040,540],[1300,560]];
$('route').setAttribute('d','M'+P.join('L'));
const MS=P.map(q=>mk('circle',{cx:q[0],cy:q[1],r:20,'stroke-width':6},$('ms')));