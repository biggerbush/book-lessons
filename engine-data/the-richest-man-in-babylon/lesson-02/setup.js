const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const cn=(g,x,y,r,gold)=>mk('circle',{cx:x,cy:y,r:r,fill:gold?'var(--gain)':'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
const FL=[0,1,2,3].map(()=>cn($('fly'),1330,470,22,0));
fig($('ark1'),300,400,38,'ink');
const WD=[];for(let r=0;r<5;r++)for(let c=0;c<8;c++){const x=600+c*40,y=345+r*54;WD.push(mk('path',{d:'M'+x+' '+y+'l22 7-22 7z',class:'ink'},$('wedges')))}
// scene 1: pay stack (amber) and empty outlines where it vanishes
const PC=[];for(let j=0;j<5;j++){mk('ellipse',{cx:1290,cy:640-j*18,rx:50,ry:14,fill:'none',stroke:'var(--muted)','stroke-width':3,'stroke-dasharray':'8 6'},$('ghost'));
  PC.push(mk('ellipse',{cx:1290,cy:440-j*18,rx:50,ry:14,class:'gain',stroke:'var(--ink)','stroke-width':3},$('paycoins')))}
fig($('ark2'),380,360,36,'ink');fig($('alg2'),1180,360,36,'ink');
fig($('ark4'),240,440,34,'ink');
const MY=[300,470,640],MN=['SANDAL MAKER','GARMENT MAKER','FOOD SELLER'];
const LN=MY.map(y=>mk('path',{d:'M320 480L1060 '+y,class:'s-line','stroke-width':4,'stroke-dasharray':'10 10'},$('lines')));
const MG=MY.map((y,i)=>{const g=mk('g',{},$('mer'));fig(g,1100,y-30,18,'ink');const tx=mk('text',{x:1150,y:y+8,class:'m','font-size':22},g);tx.textContent=MN[i];return g});
const C4=MY.map(()=>cn($('flow'),320,480,14,0));
const C5=[];for(let i=9;i>=0;i--)C5[i]=cn($('coins5'),160+i*100,400,38,i===0);
const XS=[240,460,680,900],ST=[];
const G6=XS.map((x,i)=>{const g=mk('g',{},$('stacks'));const tx=mk('text',{x:x,y:300,class:'m','font-size':20,'text-anchor':'middle'},g);tx.textContent='PAYDAY '+(i+1);
  for(let j=0;j<9;j++)mk('ellipse',{cx:x,cy:560-j*24,rx:46,ry:13,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},g);ST.push(g);
  return mk('ellipse',{cx:x,cy:344,rx:46,ry:13,class:'gain',stroke:'var(--ink)','stroke-width':3},$('gold6'))});
// tree fruit: all inside the canopy, none on the trunk axis (x=800)
const FR7=[[740,330],[860,350],[730,460],[690,400],[900,420],[860,270]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:14,class:'gain',stroke:'var(--ink)','stroke-width':3},$('fruit')));
const P7=[];[3,6,9].forEach((n,s)=>{for(let j=0;j<n;j++)P7.push(mk('ellipse',{cx:1120+s*110,cy:690-j*20,rx:40,ry:12,class:'gain',stroke:'var(--ink)','stroke-width':3},$('pile')))});
for(let r=0;r<4;r++)for(let c=0;c<7;c++)mk('rect',{x:1196+c*38,y:270+r*42,width:28,height:28,rx:5,fill:'var(--line)'},$('grid'));
const op=(el,v)=>el.setAttribute('opacity',(+v).toFixed(2));