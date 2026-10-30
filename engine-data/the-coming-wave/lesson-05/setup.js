const guy=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const drw=(el,k)=>{el.style.strokeDashoffset=(1-k).toFixed(3)};
[[220,330],[340,330],[460,330],[220,470],[340,470],[460,470]].forEach(q=>guy($('cits'),q[0],q[1],20,'ink'));
[1110,1180,1250,1320,1390].forEach(x=>mk('rect',{x:x,y:390,width:24,height:180,class:'ink'},$('cols')));
[690,770,850].forEach(x=>{mk('rect',{x:x-28,y:630,width:56,height:50,class:'ink'},$('houses'));mk('path',{d:`M${x-36} 632L${x} 598L${x+36} 632Z`,class:'gain'},$('houses'))});
for(let j=0;j<4;j++)for(let i=0;i<12;i++)mk('circle',{cx:160+i*32,cy:610+j*32,r:10,fill:'var(--muted)','fill-opacity':.6},$('army'));
[800,880,960].forEach(x=>guy($('tinyp'),x,600,18,'gain'));
const DT=[0,1,2].map(()=>mk('circle',{r:9,class:'gain'},$('flow')));
const bz=(a,b,c,d,s)=>{const v=1-s;return v*v*v*a+3*v*v*s*b+3*v*s*s*c+s*s*s*d};
const WIN=[];for(let r=0;r<3;r++)for(let c=0;c<3;c++)WIN.push(mk('rect',{x:200+c*90,y:410+r*80,width:60,height:50,rx:4,stroke:'var(--ink)','stroke-width':4},$('wins')));
const WG=[];for(let k=0;k<6;k++){const a1=k*Math.PI/3-Math.PI/2,a2=a1+Math.PI/3,P=a=>(560+180*Math.cos(a)).toFixed(1)+' '+(490+180*Math.sin(a)).toFixed(1);
  WG.push([mk('path',{d:`M560 490L${P(a1)}A180 180 0 0 1 ${P(a2)}Z`,class:'ink',stroke:'var(--stage)','stroke-width':8,'stroke-linejoin':'round'},$('wedges')),a1+Math.PI/6])}
const CHP=['Companies','Gangs','Movements'].map((s,i)=>{const g=mk('g',{},$('chips'));mk('rect',{x:1020,y:320+i*110,width:440,height:80,rx:40,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  const tx=mk('text',{x:1240,y:373+i*110,'font-size':36,'text-anchor':'middle',class:'d5'},g);tx.textContent=s;return g});
const DS=[];for(let j=0;j<4;j++)for(let i=0;i<14;i++){const x=620+i*60,y=360+j*80;mk('path',{d:`M${x} ${y}L300 365`,stroke:'var(--line)','stroke-width':1.5},$('sight'));DS.push([mk('circle',{cx:x,cy:y,r:14,class:'ink'},$('pop')),i])}
[700,900,1100,1300].forEach(x=>{mk('rect',{x:x-26,y:256,width:44,height:28,rx:5,class:'ink'},$('cams'));mk('path',{d:`M${x+18} 262l16-8v28l-16-8z`,class:'ink'},$('cams'))});
[150,200,250].forEach(x=>guy($('tugL'),x,350,14,'loss'));guy($('tugR'),1400,300,36,'loss');
const PAN=[0,1].map(i=>{const g=mk('g',{},$('pans'));mk('path',{d:'M-60 100L0 0L60 100',fill:'none',stroke:'var(--muted)','stroke-width':3},g);mk('path',{d:'M-70 100A70 40 0 0 0 70 100Z',class:'ink'},g);
  if(i===0)mk('circle',{cx:0,cy:66,r:30,class:'loss'},g);else[-34,0,34].forEach(x=>mk('circle',{cx:x,cy:88,r:11,class:'loss'},g));return g});