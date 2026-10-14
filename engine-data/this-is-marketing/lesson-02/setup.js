const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g);return g};
const strk=(id,len,k)=>{const l=$(id);l.setAttribute('x2',(+l.getAttribute('x1')+len*k).toFixed(1))};
const TD=[];for(let j=0;j<7;j++)for(let i=0;i<7;i++){const x=1165+i*50,y=325+j*50;TD.push([mk('circle',{cx:x,cy:y,r:10,class:'ink'},$('tcrowd')),Math.hypot(x-1315,y-475)<=50])}
const WV=[0,1,2].map(i=>mk('path',{d:'M'+(560+i*36)+' '+(315-i*30)+'a'+(90+i*40)+' '+(90+i*40)+' 0 0 1 0 '+(120+i*60),fill:'none',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('waves')));
const MS=[];for(let r=0;r<3;r++)for(let c=0;c<8;c++)MS.push(P(mk('g',{},$('masses')),760+c*92,270+r*110,13,'ink'));
// crowd field: jittered grid, one dot per person, clear gaps
for(let j=0;j<8;j++)for(let i=0;i<11;i++){const x=680+i*72+(((i*7+j*3)%5)-2)*5,y=272+j*70+(((i*3+j*5)%5)-2)*5;if(Math.hypot(x-1060,y-520)<125)continue;mk('circle',{cx:x,cy:y,r:9,fill:'var(--muted)','fill-opacity':.6},$('field'))}
const CL=[[0,0],[-40,-25],[38,-30],[-30,40],[35,35]].map(q=>mk('circle',{cx:1060+q[0],cy:520+q[1],r:11,class:'ink'},$('field')));
[220,160,100,40].forEach((r,i)=>mk('circle',{cx:400,cy:520,r:r,fill:i==3?'var(--gain)':(i%2?'var(--line)':'var(--stage)'),stroke:'var(--ink)','stroke-width':5},$('bull')));
P($('dz1'),220,400,28,'ink');P($('dz2'),960,400,28,'ink');P($('dz2g'),960,400,28,'gain');
const CD=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=340+c*96,y=330+r*80,g=mk('g',{},$('cards'));mk('rect',{x:x,y:y,width:84,height:56,rx:6,fill:'var(--stage)',stroke:'var(--muted)','stroke-width':3},g);const tx=mk('text',{x:x+42,y:y+38,'font-size':24,'text-anchor':'middle',class:'d5'},g);tx.textContent='$';CD.push(g)}
const CH4=[['MENUS',870,180],['MARGINS',1060,180],['BUSY SEASONS',1250,210]].map(([s,x,w])=>{const g=mk('g',{},$('chips4'));mk('rect',{x:x,y:560,width:w,height:54,rx:27,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);const tx=mk('text',{x:x+w/2,y:593,'font-size':18,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
[540,670,930,1060].forEach(x=>P($('ppl'),x,400,24,'ink'));P($('rep'),800,400,24,'ink');
const HP='M0 12C-18 0-18-14-8-16C-3-17 0-13 0-10C0-13 3-17 8-16C18-14 18 0 0 12Z';
const HT=[540,670,800,930,1060].map((x,i)=>{const tr='translate('+x+' 330) scale(1.6)';
  if(i!==2)return mk('path',{d:HP,class:'gain',opacity:0,transform:tr},$('hearts'));
  const g=mk('g',{opacity:0,transform:tr},$('hearts'));
  mk('path',{d:HP,fill:'var(--line)'},g);
  mk('path',{d:'M0 -10l-3 6 4 5-3 5 2 5',fill:'none',stroke:'var(--stage)','stroke-width':2.2,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  return g});
[200,300,400,490].forEach(x=>P($('lp6i'),x,560,22,'ink'));[1050,1160,1270,1380].forEach(x=>P($('rp6'),x,560,22,'gain'));
const RP=[0,1,2].map(()=>mk('circle',{cx:700,cy:490,r:50,fill:'none',class:'s-gain','stroke-width':4},$('rip')));
const RD=[[6,110],[12,200],[18,280]];
const RG=RD.map(([n,R],j)=>{const g=mk('g',{},$('net'));for(let i=0;i<n;i++){const a=i*2*Math.PI/n+j*.2,x=700+R*Math.cos(a),y=490+R*Math.sin(a);let px=700,py=490;if(j){const [m,R0]=RD[j-1],k=Math.floor(i*m/n),b=k*2*Math.PI/m+(j-1)*.2;px=700+R0*Math.cos(b);py=490+R0*Math.sin(b)}
  mk('path',{d:'M'+px.toFixed(0)+' '+py.toFixed(0)+'L'+x.toFixed(0)+' '+y.toFixed(0),class:'s-line','stroke-width':3},g);mk('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:12-j*2,class:'gain'},g)}return g});
mk('circle',{cx:700,cy:490,r:50,fill:'var(--stage)',class:'s-gain','stroke-width':5},$('core'));
[[0,0],[26,0],[-26,0],[0,26],[0,-26]].forEach(q=>mk('circle',{cx:700+q[0],cy:490+q[1],r:11,class:'gain'},$('core')));