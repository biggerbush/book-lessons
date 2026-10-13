const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const TK=$('trk');[300,380,460,540].forEach(y=>mk('path',{d:'M960 '+y+'H1480',class:'s-line','stroke-width':4},TK));
mk('path',{d:'M1440 300V540',class:'s-gain','stroke-width':6,'stroke-dasharray':'12 10'},TK);
const RU=[340,420,500].map((y,i)=>mk('circle',{cx:1000,cy:y,r:22,class:i===1?'gain':'ink'},TK));
const SHG=$('shops');
[[200,'gain'],[1000,'ink']].forEach(([x,c])=>{mk('rect',{x:x,y:420,width:360,height:280,fill:'var(--stage)',class:'s-ink','stroke-width':6},SHG);mk('rect',{x:x-20,y:390,width:400,height:40,rx:8,class:c},SHG);mk('rect',{x:x+40,y:470,width:280,height:130,fill:'none',class:'s-ink','stroke-width':4},SHG)});
mk('rect',{x:1176,y:330,width:8,height:60,class:'ink'},SHG);mk('rect',{x:1120,y:280,width:120,height:50,rx:8,class:'ink'},SHG);
const IT=(g,k,cx)=>k===0?mk('circle',{cx:cx,cy:535,r:22,class:'ink'},g):k===1?mk('rect',{x:cx-20,y:515,width:40,height:40,class:'ink'},g):mk('path',{d:'M'+cx+' 513l24 42h-48z',class:'ink'},g);
for(let k=0;k<3;k++)IT(SHG,k,1100+k*80);
const CP=[0,1,2].map(k=>{const g=mk('g',{},$('cpy'));IT(g,k,300+k*80);return g});
const PS=[0,1,2,3].map(i=>{const a0=i*Math.PI/2-Math.PI/2,a1=a0+Math.PI/2,f=a=>(860+130*Math.cos(a)).toFixed(1)+' '+(480+130*Math.sin(a)).toFixed(1);return [mk('path',{d:'M860 480L'+f(a0)+'A130 130 0 0 1 '+f(a1)+'z',fill:i%2?'var(--line)':'var(--ink)',stroke:'var(--stage)','stroke-width':4},$('pieS')),a0+Math.PI/4]});
[[1220,520],[1140,560],[1060,600]].forEach(q=>fig($('fol2'),q[0],q[1],16,'ink'));
const RW=['Return every call.','Follow up after the sale.','Show up again.'].map((s,i)=>{const y=300+i*120,g=mk('g',{},$('rows'));mk('rect',{x:120,y:y,width:640,height:96,rx:16,fill:'var(--stage)',class:'s-line','stroke-width':3},g);mk('circle',{cx:176,cy:y+48,r:28,class:'gain'},g);mk('path',{d:'M162 '+(y+48)+'l10 10 18-20',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);const tx=mk('text',{x:230,y:y+60,'font-size':34,class:'d5'},g);tx.textContent=s;return g});
for(let i=0;i<3;i++)mk('rect',{x:980,y:760-44*(i+1)+4,width:140,height:40,rx:6,fill:'var(--line)'},$('blkR'));
const BY=[];for(let i=0;i<11;i++)BY.push(mk('rect',{x:1240,y:760-44*(i+1)+4,width:140,height:40,rx:6,class:'gain'},$('blkY')));
const RN=[];for(let i=0;i<6;i++)RN.push(mk('path',{class:'s-muted','stroke-width':4,'stroke-linecap':'round'},$('rain')));
[160,400].forEach(x=>{mk('rect',{x:x,y:560,width:180,height:220,fill:'var(--stage)',class:'s-ink','stroke-width':6},$('riv'));mk('rect',{x:x+30,y:600,width:120,height:80,fill:'none',class:'s-ink','stroke-width':4},$('riv'));mk('rect',{x:x+30,y:600,width:120,height:80,class:'loss'},$('shut'));mk('path',{d:'M'+(x+30)+' 620h120M'+(x+30)+' 640h120M'+(x+30)+' 660h120',stroke:'var(--stage)','stroke-width':3},$('shut'))});
const CU=[0,1,2,3].map(()=>{const g=mk('g',{},$('cus4'));fig(g,0,0,12,'ink');return g});
fig($('me'),800,430,36,'gain');
const CS=[0,1,2,3].map(()=>{const g=mk('g',{},$('cus5'));fig(g,0,0,16,'ink');return g});
// each rival gets its own arc that rises above the other heads and ends just right of the leader's head
const FL=[0,1,2].map(i=>{const x0=1160+i*110,cx=((x0+852)/2).toFixed(0),cy=330-i*50;
  mk('path',{d:'M'+x0+' 422Q'+cx+' '+cy+' 852 400',fill:'none',class:'s-line','stroke-width':3,'stroke-dasharray':'6 8','stroke-linecap':'round'},$('look5'));
  const g=mk('g',{},$('fol5'));fig(g,0,0,20,'ink');return g});
const CE=[];for(let r=0;r<4;r++)for(let c=0;c<4;c++)CE.push(mk('rect',{x:120+c*170,y:240+r*110,width:160,height:100,rx:10,'stroke-width':4},$('grid')));
for(let i=0;i<6;i++)mk('circle',{cx:200+i*80,cy:230,r:10,class:'ink'},$('bind'));
const CK=[];for(let r=0;r<4;r++){const y=420+r*90;const tx=mk('text',{x:860,y:y+8,'font-size':22,class:'m'},$('chk'));tx.textContent='W'+(r+1);for(let c=0;c<3;c++){const x=1010+c*170;CK.push([mk('circle',{cx:x,cy:y,r:30,'stroke-width':4,stroke:'var(--line)',fill:'none'},$('chk')),mk('path',{d:'M'+(x-13)+' '+y+'l9 10 18-20',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('chk'))])}}
for(let r=0;r<4;r++)for(let c=0;c<3;c++)mk('rect',{x:1432+c*14,y:680+r*14,width:14,height:14,fill:(r+c)%2?'var(--ink)':'var(--stage)',stroke:'var(--ink)','stroke-width':1},$('flg'));