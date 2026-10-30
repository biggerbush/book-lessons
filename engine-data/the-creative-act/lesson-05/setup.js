const tries=[];
for(let i=0;i<8;i++){const a=(i*45+22.5)*Math.PI/180,c=Math.cos(a),s=Math.sin(a),x0=800+36*c,y0=490+26*s,x1=800+520*c,y1=490+190*s,w=i%2?1:-1,mx=(x0+x1)/2-60*s*w,my=(y0+y1)/2+60*c*w;
  const g=mk('g',{},$('tries'));
  const pa=mk('path',{d:`M${x0.toFixed(1)} ${y0.toFixed(1)}Q${mx.toFixed(1)} ${my.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)}`,fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1'},g);
  const sh=i%3===0?mk('circle',{cx:x1,cy:y1,r:24},g):i%3===1?mk('rect',{x:x1-22,y:y1-22,width:44,height:44,rx:6},g):mk('path',{d:`M${x1} ${y1-26}l26 44h-52z`},g);
  sh.setAttribute('stroke','var(--ink)');sh.setAttribute('stroke-width',5);sh.setAttribute('stroke-linejoin','round');tries.push([pa,sh])}
for(let k=0;k<11;k++){const a=(-135+k*27)*Math.PI/180,sn=Math.sin(a),cs=Math.cos(a);mk('path',{d:`M${(340+132*sn).toFixed(1)} ${(470-132*cs).toFixed(1)}L${(340+150*sn).toFixed(1)} ${(470-150*cs).toFixed(1)}`,class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('ticks'))}
const rows=['FASTER','SLOWER','ANOTHER KEY','NEW ARRANGEMENT'].map((s,i)=>{const y=240+i*120,g=mk('g',{},$('rows'));
  const r=mk('rect',{x:620,y:y,width:860,height:100,rx:14,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g);
  const tx=mk('text',{x:650,y:y+58,'font-size':20,class:'m'},g);tx.textContent=s;
  const pl=mk('polyline',{fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round','stroke-linecap':'round'},g);return [g,r,pl,y+50]});
const LV=[[478,604,-25,.28],[440,566,25,.36],[690,470,-35,.72],[640,438,35,.68]].map(q=>[mk('ellipse',{cx:q[0],cy:q[1],rx:24,ry:11,class:'gain',transform:`rotate(${q[2]} ${q[0]} ${q[1]})`},$('leaves')),q[3]]);
const jars=[1150,1270,1390].map(x=>{const g=mk('g',{},$('jars'));mk('path',{d:`M${x-34} 448h68l-8 52h-52z`,class:'ink'},g);mk('ellipse',{cx:x,cy:440,rx:14,ry:9,class:'gain'},g);return g});
for(let x=320;x<=1280;x+=40)mk('path',{d:`M${x} 260v${(x-320)%200?16:30}`,class:'s-ink','stroke-width':3},$('rticks'));
const rain=[];for(let i=0;i<6;i++)rain.push(mk('path',{class:'s-loss','stroke-width':5,'stroke-linecap':'round'},$('rain')));
const NSRC=[[300,560],[420,560],[760,560],[880,560]],notes=NSRC.map(()=>mk('rect',{width:40,height:30,rx:4,class:'gain'},$('notes')));
const mkPan=(g,lab,play)=>{mk('path',{d:'M0 0L-110 190M0 0L110 190',class:'s-ink','stroke-width':4},g);
  if(play){mk('circle',{cx:-50,cy:166,r:22,class:'gain'},g);mk('path',{d:'M10 186l26-46 26 46z',class:'gain'},g)}else mk('rect',{x:-50,y:136,width:100,height:54,rx:6,class:'ink'},g);
  mk('path',{d:'M-130 190a130 50 0 0 0 260 0z',class:'ink'},g);
  const t1=mk('text',{x:0,y:300,'font-size':44,'text-anchor':'middle',class:'d'},g);t1.textContent=lab;
  return mk('text',{x:0,y:345,'font-size':22,'text-anchor':'middle',class:'m'},g)};
const stL=mkPan($('panL'),'Play',1),stR=mkPan($('panR'),'Craft',0);
const arc=(cx,cy,r,f)=>{if(f<=0)return '';f=Math.min(f,.9999);const a=f*2*Math.PI,x=cx+r*Math.sin(a),y=cy-r*Math.cos(a);return `M${cx} ${cy}V${cy-r}A${r} ${r} 0 ${f>.5?1:0} 1 ${x.toFixed(1)} ${y.toFixed(1)}Z`};