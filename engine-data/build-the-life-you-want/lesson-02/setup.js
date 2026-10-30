const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-1.6*r} ${y+3.8*r}v${-r}a${1.6*r} ${1.6*r} 0 0 1 ${3.2*r} 0v${r}z`,class:c},g)};
const txt=(g,x,y,s,fs,c,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:c,'text-anchor':a||'start'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const wedge=(cx,cy,r,a0,a1)=>{const P=a=>(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1);return `M${cx} ${cy}L${P(a0)}A${r} ${r} 0 0 1 ${P(a1)}z`};
const plate=(g,cx,cy,r)=>{mk('circle',{cx:cx,cy:cy,r:r*1.3,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);return ['var(--gain)','var(--ink)','var(--loss)'].map((f,i)=>{const a=-Math.PI/2+i*2*Math.PI/3;return mk('path',{d:wedge(cx,cy,r,a+.05,a+2*Math.PI/3-.05),fill:f},g)})};
const P0=plate($('plate0'),1240,380,115), P7=plate($('plate7'),990,775,48);
const BW=[['Enjoyment','PROTEIN'],['Satisfaction','CARBS'],['Purpose','FAT']].map((s,i)=>{const x=360+i*440,g=mk('g',{},$('bowls')),l=mk('g',{},$('bowls')),m=mk('g',{},$('bowls'));
  mk('path',{d:`M${x-130} 380a130 80 0 0 1 260 0z`,class:'gain'},g);mk('path',{d:`M${x-150} 380h300a150 110 0 0 1 -300 0z`,class:'ink'},g);
  txt(l,x,570,s[0],52,'d','middle');txt(m,x,620,'LIKE '+s[1],20,'m','middle');return [g,l,m]});
fig($('lone'),300,430,36,'ink');
const PP=[1000,1110,1230,1340].map(x=>{const g=mk('g',{},$('ppl'));fig(g,x,400,30,'ink');return g});
const TR=$('trail'),TL=TR.getTotalLength();
const RG=[0,1,2].map(()=>mk('circle',{cx:1000,cy:300,r:30,fill:'none',stroke:'var(--gain)','stroke-width':5},$('rings')));
fig($('runner'),1120,470,30,'gain');
const HB=[],WB=[];for(let r=0;r<4;r++)for(let c=0;c<3;c++){const x=920+c*180,h=mk('g',{},$('haves'));
  mk('rect',{x:x,y:446-r*50,width:160,height:44,rx:8,class:'gain'},h);if(!r)txt(h,x+80,475,['STUFF','MONEY','PRAISE'][c],20,'m','middle','fill:var(--on-gain)');HB.push(h);
  WB.push(mk('rect',{x:x,y:530+r*50,width:160,height:44,rx:8,class:'loss'},$('wants')))}
for(let c=0;c<3;c++)mk('rect',{x:170+c*160,y:400,width:140,height:50,rx:8,class:'gain'},$('h6'));
// want row: two kept wants, two cut wants; each cut want leaves a dashed outline in exactly its own slot
for(let k=0;k<4;k++){const x=170+k*115;
  if(k<2)mk('rect',{x:x,y:490,width:105,height:50,rx:8,class:'loss'},$('w6'));
  else{mk('rect',{x:x,y:490,width:105,height:50,rx:8,class:'loss'},$('cut'));mk('rect',{x:x,y:490,width:105,height:50,rx:8,fill:'none',stroke:'var(--muted)','stroke-width':3,'stroke-dasharray':'8 8'},$('ghost'))}}
const WL=['A bigger house','The newest phone','More followers','Time with friends','Good health'].map((s,i)=>txt($('list'),820,330+i*80,s,38,'d5'));
const LS=[0,1,2].map(i=>WL[i].textContent.length*19+16);
const SK=LS.map((l,i)=>mk('path',{d:`M812 ${318+i*80}h${l}`,stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':l},$('list')));
const ST=$('story'),SL=ST.getTotalLength();ST.setAttribute('stroke-dasharray',SL);
const SB=[.28,.55,.78].map(f=>{const q=ST.getPointAtLength(SL*f);return [f,mk('circle',{cx:q.x,cy:q.y,r:16,class:'loss'},$('setb'))]});
let sp='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?12:28;sp+=(1440+r*Math.cos(a)).toFixed(1)+','+(300+r*Math.sin(a)).toFixed(1)+' '}
const STAR=mk('polygon',{points:sp,class:'gain'},$('setb'));
const WLn=$('wline').getTotalLength();$('wline').setAttribute('stroke-dasharray',WLn);$('xline').setAttribute('stroke-dasharray',196);