const man=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(1290+108*c).toFixed(1)} ${(390+108*s).toFixed(1)}L${(1290+126*c).toFixed(1)} ${(390+126*s).toFixed(1)}`,stroke:'var(--ink)','stroke-width':i%3?4:8,'stroke-linecap':'round'},$('cticks'))}
const ST=[0,1,2,3,4,5].map(i=>mk('ellipse',{cx:200+170*i,cy:720,rx:62,ry:18,fill:'var(--line)'},$('stones')));
man($('hop'),0,0,22,'gain');
const TK=[0,1,2,3].map(i=>{const y=540+60*i;mk('rect',{x:1170,y:y-24,width:30,height:30,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},$('list'));
  mk('path',{d:`M1222 ${y-9}H${1420-i*30}`,stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},$('list'));
  return mk('path',{d:`M1176 ${y-10}l8 9l16-18`,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('list'))});
man($('key'),280,380,34,'ink');
const jar=(g,x,full,lab)=>{mk('rect',{x:x-90,y:400,width:180,height:240,rx:28,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':7},g);
  if(full)mk('rect',{x:x-74,y:450,width:148,height:174,rx:18,class:'gain'},g);
  mk('rect',{x:x-100,y:368,width:200,height:38,rx:8,class:'ink'},g);
  const tx=mk('text',{x:x,y:690,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=lab};
jar($('jarD'),720,0,'TODAY');jar($('jarTm'),1150,1,'TOMORROW');
const cp=$('cpath'),CL=cp.getTotalLength();cp.setAttribute('stroke-dasharray',CL.toFixed(1));
const FP=[];for(let i=0;i<14;i++){const l=(i+.5)/14*CL,a=cp.getPointAtLength(l),b=cp.getPointAtLength(Math.min(CL,l+2)),dx=b.x-a.x,dy=b.y-a.y,n=Math.hypot(dx,dy)||1,s=i%2?7:-7;
  FP.push([l/CL,mk('ellipse',{cx:(a.x-dy/n*s).toFixed(1),cy:(a.y+dx/n*s).toFixed(1),rx:9,ry:6,fill:'var(--muted)'},$('fps'))])}
man($('wk'),0,0,18,'ink');
const NT=[0,1,2].map(()=>{const g=mk('g',{},$('notes'));mk('circle',{cx:0,cy:0,r:11,class:'ink'},g);mk('path',{d:'M10 0V-40l14 6',fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},g);return g});
const CAL='MTWTFSS'.split('').map((d,k)=>{const x=140+104*(k%4),y=340+130*Math.floor(k/4);
  const r=mk('rect',{x:x,y:y,width:92,height:110,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('days'));
  const tx=mk('text',{x:x+46,y:y+40,'font-size':20,'text-anchor':'middle',class:'m'},$('days'));tx.textContent=d;return r});
const pa=$('paint'),PL=pa.getTotalLength();pa.setAttribute('stroke-dasharray',PL.toFixed(1));