const fig=(g,x,y,r,a)=>{mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)};
const I={class:'ink'},G={class:'gain'};
fig($('tfig'),1300,300,50,I);fig($('mk1'),330,380,40,I);fig($('mk2'),1150,400,40,G);
for(let r=0;r<2;r++)for(let c=0;c<3;c++)mk('rect',{x:170+c*80,y:420+r*90,width:50,height:60,class:'s-ink',fill:'none','stroke-width':5},$('win'));
const ENV=[[560,360,-12],[700,330,8],[830,400,-6],[600,500,10],[760,520,-14],[660,620,6],[830,610,12]].map(e=>{const g=mk('g',{},$('mail'));
  mk('rect',{x:-55,y:-36,width:110,height:72,rx:6,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);
  mk('path',{d:'M-55 -36L0 6L55 -36',fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linejoin':'round'},g);return [g,e]});
for(let c=0;c<3;c++)for(let r=0;r<4;r++){const x=1010+c*150,y=376+r*70;mk('rect',{x:x,y:y,width:24,height:24,rx:4,class:'gain'},$('rows'));mk('path',{d:'M'+(x+36)+' '+(y+12)+'h84',class:'s-line','stroke-width':8,'stroke-linecap':'round'},$('rows'))}
const PP=[];for(let i=0;i<8;i++){const g=mk('g',{},$('ppl'));fig(g,1000+i*60,770,12,I);PP.push(g)}
fig($('ghost'),740,400,40,{fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 8'});
[['USE',-90],['FEEL',30],['FIX',150]].forEach(n=>{const a=n[1]*Math.PI/180,x=1220+160*Math.cos(a),y=430+160*Math.sin(a);
  mk('rect',{x:x-75,y:y-28,width:150,height:56,rx:28,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('nodes'));
  mk('text',{x:x,y:y+8,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},$('nodes')).textContent=n[0]});
fig($('dys'),960,480,36,I);
for(let i=0;i<6;i++)mk('circle',{cx:240+i*36,cy:752+(i%2)*10,r:6,fill:'var(--muted)'},$('dust'));
const BL=[];for(let k=0;k<5;k++)for(let i=0;i<5-k;i++){const x=340+(i-(4-k)/2)*70,y=640-k*62,g=mk('g',{},$('pile'));
  mk('circle',{cx:x,cy:y,r:24,class:'s-muted',fill:'var(--stage)','stroke-width':4},g);mk('rect',{x:x-8,y:y+22,width:16,height:12,fill:'var(--muted)'},g);BL.push(g)}
const CR=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=650+c*110,y=400+r*120,g=mk('g',{},$('crowd5'));fig(g,x,y,14,I);mk('circle',{cx:x,cy:y-36,r:9,class:'gain'},g);CR.push(g)}
fig($('bfig'),1180,450,32,G);
const BK=[];for(let i=0;i<4;i++)BK.push(mk('rect',{x:1320,y:560-i*42,width:110,height:38,rx:4,class:i%2?'gain':'ink'},$('blocks')));
const CE=[];for(let r=0;r<4;r++)for(let c=0;c<7;c++)CE.push(mk('rect',{x:136+c*58,y:316+r*68,width:46,height:54,rx:6,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('cells')));
for(let i=0;i<7;i++)mk('circle',{cx:200+i*60,cy:240,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));
const IT=[300,220,340,260,310,200].map((w,i)=>{const y=380+i*66,g=mk('g',{},$('items'));mk('circle',{cx:210,cy:y,r:7,class:'ink'},g);
  mk('path',{d:'M240 '+y+'h'+w,class:'s-line','stroke-width':8,'stroke-linecap':'round'},g);return g});