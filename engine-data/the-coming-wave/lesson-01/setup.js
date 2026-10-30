const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const wy=(x,y,a,ph)=>y+a*Math.sin(x/50+ph);
const W=(x0,x1,y,a,ph)=>{let s='';for(let x=x0;x<=x1;x+=10)s+=(x==x0?'M':'L')+x+' '+wy(x,y,a,ph).toFixed(1);return s};
const dr=(el,k)=>{el.style.strokeDashoffset=1-k};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const f1=v=>v.toFixed(1);

const TW=[0,1,2].map(i=>mk('path',{fill:'none',stroke:['var(--gain)','var(--ink)','var(--line)'][i],'stroke-width':8-i*2,'stroke-linecap':'round'},$('tw')));
const TR=[0,1,2,3].map(i=>mk('circle',{r:14,class:i==1?'gain':'ink'},$('tw')));

const BN=[[600,300,'FIRE','M0 -32c14 16 22 26 22 38a22 22 0 0 1-44 0c0-10 8-16 12-24 2 8 6 12 10 12 0-10-4-18 0-26z','gain'],[640,500,'WRITING','M-20 20L18 -24M-24 30h44','s-ink'],[600,700,'ELECTRICITY','M6 -32L-18 4h16l-6 28 26-38h-16z','gain']].map(([x,y,s,d,c])=>{
  const l=mk('path',{d:'M300 500L'+x+' '+y,class:'s-ink','stroke-width':5,pathLength:1,'stroke-dasharray':1},$('br'));const g=mk('g',{},$('br'));
  mk('circle',{cx:x,cy:y,r:50,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:d,transform:'translate('+x+' '+y+')',class:c,fill:'none','stroke-width':6,'stroke-linecap':'round'},g);
  tx(g,x+(s=='ELECTRICITY'?88:72),y+8,s,{class:'m','font-size':22});return [l,g]});
[135,165,195,225].forEach(a=>{const r=a*Math.PI/180,x=300+170*Math.cos(r),y=500-170*Math.sin(r);mk('path',{d:'M300 500L'+f1(x)+' '+f1(y),class:'s-line','stroke-width':3},$('brx'));mk('circle',{cx:f1(x),cy:f1(y),r:12,fill:'var(--muted)'},$('brx'))});
const WR=[0,1,2,3,4].map(i=>mk('circle',{r:18,class:i%2?'gain':'ink'},$('wcr')));

[[560,620,76,'wr'],[860,650,46,'wf']].forEach(([x,y,r,id])=>{for(let i=0;i<3;i++){const a=i*Math.PI/3,c=r*Math.cos(a),s=r*Math.sin(a);mk('path',{d:'M'+f1(x-c)+' '+f1(y-s)+'L'+f1(x+c)+' '+f1(y+s),class:'s-ink','stroke-width':4},$(id))}});
const PF=[0,1,2,3].map(()=>mk('circle',{fill:'var(--muted)','fill-opacity':.35},$('pf')));
[200,280,360].forEach(x=>{person($('crd'),x,600,22,'ink');tx($('crd'),x,550,'?',{class:'d','font-size':44,'text-anchor':'middle',style:'fill:var(--loss)'})});

const BC=[0,1,2,3,4].map(()=>{const g=mk('g',{},$('belt'));mk('rect',{x:0,y:296,width:60,height:26,rx:6,class:'gain'},g);mk('rect',{x:14,y:280,width:30,height:18,rx:4,class:'ink'},g);[12,48].forEach(c=>mk('circle',{cx:c,cy:328,r:7,class:'ink'},g));return g});
[-30,90,210].forEach(a=>{const r=a*Math.PI/180,x=1170+170*Math.cos(r),y=530+170*Math.sin(r),tx_=-Math.sin(r),ty=Math.cos(r),nx=Math.cos(r),ny=Math.sin(r);
  mk('path',{d:'M'+f1(x+14*tx_)+' '+f1(y+14*ty)+'L'+f1(x-10*tx_+12*nx)+' '+f1(y-10*ty+12*ny)+'L'+f1(x-10*tx_-12*nx)+' '+f1(y-10*ty-12*ny)+'Z',class:'ink'},$('cyx'))});
const CDOT=[0,1,2].map(()=>mk('circle',{r:10,class:'gain'},$('cyx')));
const CY=[[-90,'CHEAPER CARS'],[30,'MORE BUYERS'],[150,'MORE IMPROVEMENTS']].map(([a,s])=>{const r=a*Math.PI/180,x=1170+170*Math.cos(r),y=530+170*Math.sin(r),g=mk('g',{},$('cyx'));
  mk('rect',{x:f1(x-125),y:f1(y-28),width:250,height:56,rx:28,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  tx(g,f1(x),f1(y+7),s,{class:'m','font-size':18,'text-anchor':'middle',style:'fill:var(--ink)'});return g});

for(let i=0;i<8;i++){const h=60+(i*37)%70;mk('rect',{x:130+i*78,y:392-h,width:62,height:h,fill:'var(--line)'},$('bld'))}
const CR=[];for(let i=0;i<10;i++)CR.push(mk('rect',{y:i%2?442:408,width:44,height:20,rx:6,class:i%3?'ink':'gain'},$('cars')));
for(let i=0;i<8;i++)mk('rect',{x:1180,y:440,width:20,height:24,rx:3,class:'ink',transform:'rotate('+i*45+' 1190 510)'},$('gear'));
mk('circle',{cx:1190,cy:510,r:56,class:'ink'},$('gear'));mk('circle',{cx:1190,cy:510,r:18,fill:'var(--stage)'},$('gear'));
const EP=[[990,330,'SHIPS','M-36 6h72l-14 22h-44zM-2 6V-30h4V6z','M2 -28l24 28h-24z'],
  [1390,330,'TRACTORS','M-14 -4h44v18h-44zM-22 -30h22v26h-22zM-32 14a18 18 0 1 0 36 0a18 18 0 1 0-36 0z','M14 22a10 10 0 1 0 20 0a10 10 0 1 0-20 0z'],
  [990,690,'PLANES','M-36 -5h62a6 6 0 0 1 0 10h-62zM-6 -4l-14-26h10l20 26zM-6 4l-14 26h10l20-26z','M-34 -4l-6-14h8l8 14z'],
  [1390,690,'GENERATORS','M-32 -22h64v44h-64z','M4 -16l-14 18h10l-4 16 14-20h-10z']].map(([x,y,s,a,b])=>{const g=mk('g',{},$('engx'));
  mk('path',{d:'M1190 510L'+x+' '+y,class:'s-gain','stroke-width':4,'stroke-dasharray':'8 8'},g);
  mk('circle',{cx:x,cy:y,r:56,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:a,class:'ink',transform:'translate('+x+' '+y+')'},g);mk('path',{d:b,class:'gain',transform:'translate('+x+' '+y+')'},g);
  tx(g,x,y+92,s,{class:'m','font-size':20,'text-anchor':'middle'});return g});
const GD=[];for(let i=0;i<14;i++){const a=i*2.4,r=20+(i*37)%85;GD.push(mk('circle',{cx:f1(260+r*Math.cos(a)),cy:f1(650+r*Math.sin(a)),r:8,class:'gain'},$('gd')))}

// presses spreading from Mainz across a schematic Europe (illustrative city positions)
const EC=[[760,440],[730,410],[790,410],[800,460],[720,470],[690,440],[770,500],[840,420],[870,460],[610,530],[685,355],[900,410],[800,550],[880,325],[900,520]];
const EL=EC.map((c,i)=>i?mk('path',{d:'M760 440L'+c[0]+' '+c[1],stroke:'var(--gain)','stroke-width':2,'stroke-dasharray':'4 5',fill:'none'},$('eul')):null);
const ED=EC.map((c,i)=>{const g=mk('g',{},$('eud'));
  if(i==0){mk('circle',{cx:c[0],cy:c[1],r:14,class:'gain',stroke:'var(--stage)','stroke-width':3},g)}
  else{mk('rect',{x:c[0]-9,y:c[1]-9,width:18,height:18,rx:3,class:'ink',stroke:'var(--stage)','stroke-width':3},g)}
  return g});
for(let i=0;i<6;i++)mk('rect',{x:1080+(i%2)*14,y:690-i*30,width:200,height:26,rx:4,fill:['var(--ink)','var(--gain)','var(--muted)'][i%3]},$('bst'));
person($('rdr'),1360,600,18,'gain');person($('rdr'),1435,630,18,'ink');

// ban: a queue held back before the sign, a few tools slipping past
const FQ=[];for(let i=0;i<6;i++)FQ.push(mk('circle',{cx:1140-i*40,cy:640,r:14,class:'ink'},$('fl6')));
const FP=[0,1].map(()=>mk('circle',{r:14,cy:640,class:'gain'},$('fl6')));
[600,670,740].forEach((x,i)=>person($('ppl'),x,600,20,i==1?'gain':'ink'));