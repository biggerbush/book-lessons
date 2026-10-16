const fig=(par,x,y,r,cls)=>{const g=mk('g',{},par);mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const recl=(g,c)=>[...g.children].forEach(e=>e.setAttribute('class',c));
const ring=(n,cx,cy,R,a0=-Math.PI/2)=>Array.from({length:n},(_,i)=>{const a=a0+i*2*Math.PI/n;return [cx+R*Math.cos(a),cy+R*Math.sin(a)]});
const sprout=(par,x,y)=>{const g=mk('g',{},par);mk('path',{d:'M'+x+' '+y+'v-26',class:'s-gain','stroke-width':5,'stroke-linecap':'round'},g);mk('circle',{cx:x-8,cy:y-26,r:8,class:'gain'},g);mk('circle',{cx:x+8,cy:y-32,r:8,class:'gain'},g);return g};
const TS=[];for(let r=0;r<2;r++)for(let i=0;i<4;i++)TS.push(sprout($('tsprout'),1230+i*47,410+r*48));
const TF=ring(7,1300,415,150).map((q,i)=>mk('circle',{cx:q[0],cy:q[1],r:24,class:i===3?'gain':'ink'},$('tfriends')));
const TR=[[320,730],[420,650],[500,560],[600,450],[660,370]];
const along=(P,k)=>{const n=P.length-1,f=cl(k)*n,i=Math.min(n-1,Math.floor(f)),s=f-i;return [P[i][0]+(P[i+1][0]-P[i][0])*s,P[i][1]+(P[i+1][1]-P[i][1])*s]};
[-14,14].forEach(dx=>fig($('walk'),dx,-46,10,'ink'));
fig($('elder'),420,400,46,'ink');mk('circle',{cx:420,cy:344,r:16,class:'ink'},$('elder'));mk('path',{d:'M500 500L520 596',class:'s-ink','stroke-width':7,'stroke-linecap':'round'},$('elder'));
const TK=[['CHORES','M-20-30L4 4M-8 10L14-10L30 24L10 32Z'],['COOKING','M-30-6h60v26a12 12 0 0 1-12 12h-36a12 12 0 0 1-12-12zM-38-6h76M-8-18h16'],['MENDING','M-26 26L26-26M18-26a6 6 0 1 1 8 8M-26 26q10-20 20 0t20 0'],['NEIGHBOURS','M-24-14a10 10 0 1 0 .1 0M4-14a10 10 0 1 0 .1 0M-30 26q16-24 32 0M-2 26q16-24 32 0']].map((d,i)=>{const x=i%2?640:200,y=i<2?320:620,g=mk('g',{},$('tasks'));
  mk('circle',{cx:x,cy:y,r:60,fill:'var(--stage)',class:'s-ink','stroke-width':5},g);
  mk('path',{d:d[1],transform:'translate('+x+' '+y+')',fill:'none',class:'s-ink','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  mk('text',{x:x,y:y+96,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent=d[0];return g});
const TI=ring(12,1150,470,160).map(q=>mk('circle',{cx:q[0],cy:q[1],r:11,fill:'var(--line)'},$('ticks')));
const PL=[];for(let i=0;i<8;i++){const g=mk('g',{},$('plants'));mk('path',{d:'M0 0V-130M0-60q-40-10-50-44q40 0 50 30M0-90q40-10 50-44q-40 0-50 30',class:'s-ink','stroke-width':5,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},g);
  if(i%3===1)[[-18,-130],[16,-118]].forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:13,class:'gain'},g));PL.push([g,220+i*105])}
const DR=[0,1,2].map(()=>mk('circle',{r:6,class:'loss'},$('drops')));
const TG=["Water the plants","Pull the weeds","Pick what's ready"].map((s,i)=>{const g=mk('g',{},$('tags')),y=250+i*100;
  mk('rect',{x:1060,y:y,width:420,height:76,rx:38,fill:'var(--stage)',class:'s-ink','stroke-width':4},g);mk('circle',{cx:1100,cy:y+38,r:12,class:'gain'},g);
  mk('text',{x:1130,y:y+49,'font-size':32,class:'d5'},g).textContent=s;return g});
const WK=[...'MTWTFSS'].map((c,i)=>{const x=1084+i*60,g=mk('g',{},$('week'));const r=mk('circle',{cx:x,cy:620,r:24,fill:'var(--line)'},g);
  const tx=mk('text',{x:x,y:627,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=c;return [r,tx]});
const MQ=ring(6,640,500,200),MW=MQ.map(()=>mk('g',{},$('mppl'))),MF=MQ.map((q,i)=>fig(MW[i],q[0],q[1],24,'ink'));
const CO=MQ.map(()=>mk('circle',{r:12,class:'gain',stroke:'var(--ink)','stroke-width':3},$('coins')));
fig($('lone'),1180,430,30,'ink');
const LF=ring(6,1180,470,200).map(q=>[fig($('lfr'),0,0,20,'ink'),q]);
const LN=[];for(let i=0;i<9;i++){const s=(i+1)/10,x=140+1320*s,y=230+220*s*(1-s),g=mk('g',{},$('lan'));
  mk('path',{d:'M'+x+' '+y+'v14',class:'s-ink','stroke-width':3},g);mk('rect',{x:x-22,y:y+14,width:44,height:60,rx:18,class:i%2?'loss':'gain'},g);
  mk('path',{d:'M'+(x-12)+' '+(y+14)+'h24M'+(x-12)+' '+(y+74)+'h24',class:'s-ink','stroke-width':4},g);LN.push([g,x,y])}
fig($('singer'),400,500,28,'ink');
const DN=[];for(let i=0;i<6;i++){const g=mk('g',{},$('dance'));fig(g,640+i*140,520,28,'ink');DN.push(g)}
for(let i=0;i<5;i++)mk('path',{d:'M'+(682+i*140)+' 600q28 30 56 0',class:'s-gain','stroke-width':7,fill:'none','stroke-linecap':'round'},$('link'));
const NT=[0,1,2].map(()=>{const g=mk('g',{},$('notes'));mk('circle',{cx:0,cy:0,r:10,class:'gain'},g);mk('path',{d:'M9 0V-36h14',class:'s-gain','stroke-width':5,fill:'none'},g);return g});
const ST=ring(4,1280,440,150,Math.PI/2).map((q,i)=>mk('circle',{cx:q[0],cy:q[1],r:i?34:48,'stroke-width':5,'stroke-dasharray':i?'8 8':'none',fill:i?'var(--stage)':'var(--gain)',stroke:i?'var(--ink)':'var(--gain)'},$('seats')));