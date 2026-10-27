const pp=(g,x,y,r,c)=>{const h=mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g);return h};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const TB=[];let WIN,CROWN;
[1120,1260,1400].forEach((x,i)=>{const w=i===1,f=w?'var(--gain)':'var(--stage)',s=w?'var(--gain)':'var(--ink)';pp($('tcrowd'),x,600,26,w?'gain':'ink');const o=mk('g',{},$('tcrowd')),g=mk('g',{},o);
  mk('path',{d:`M${x-14} 496l14 24 14-24`,fill:f,stroke:s,'stroke-width':5,'stroke-linejoin':'round'},g);
  mk('rect',{x:x-55,y:430,width:110,height:70,rx:16,fill:f,stroke:s,'stroke-width':5},g);
  [[452,70],[474,46]].forEach(([y,wd])=>mk('rect',{x:x-35,y:y,width:wd,height:8,rx:4,fill:w?'var(--on-gain)':'var(--muted)'},g));
  if(w){WIN=g;CROWN=mk('path',{d:`M${x-34} 418l8-30 26 18 26-18 8 30z`,class:'gain'},g)}TB.push(o)});
const TH=[],BG=[];[860,990,1120,1250,1380].forEach(x=>{TH.push(pp($('team'),x,470,26,'ink'));const b=mk('g',{},$('bangs'));mk('circle',{cx:x,cy:380,r:22,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},b);tx(b,x,391,'!',{class:'d','font-size':30,'text-anchor':'middle',style:'fill:var(--loss)'});BG.push(b)});
tx($('team'),1120,640,'TEAM',{class:'m','font-size':22,'text-anchor':'middle'});
const MW=[560,500,540,420,520,300],MB=MW.map((w,i)=>mk('rect',{x:150,y:330+i*40,width:w,height:16,rx:8,fill:'var(--line)'},$('mbars')));
const SPK=[220,400].map(x=>{mk('circle',{cx:x,cy:410,r:60,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},$('reels'));const g=mk('g',{},$('reels'));for(let k=0;k<3;k++){const a=k*2.094;mk('path',{d:`M${x} 410l${(48*Math.cos(a)).toFixed(1)} ${(48*Math.sin(a)).toFixed(1)}`,stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},g)}mk('circle',{cx:x,cy:410,r:10,class:'ink'},g);return g});
const TP=[];[400,520,640].forEach((b,k)=>{for(let i=0;i<12;i++){const h=64+((i*5+k*3)%4)*10;TP.push(mk('rect',{x:616+i*31,y:b-h-4,width:26,height:h,rx:3,fill:k===1&&i===5?'var(--gain)':'var(--ink)','fill-opacity':i%3===2?.5:1},$('tapes')))}});
// dot collector: each row = a colleague, with a 1-5 dot rating being tapped
const RS=[4,2,5,3],NW=[120,90,110,80],RR=RS.map((s,i)=>{const y=330+i*90,g=mk('g',{},$('dots'));
  mk('circle',{cx:172,cy:y,r:12,class:'ink'},g);
  mk('rect',{x:194,y:y-6,width:NW[i],height:12,rx:6,fill:'var(--muted)','fill-opacity':.5},g);
  const ds=[];for(let k=0;k<5;k++)ds.push(mk('circle',{cx:178+k*40,cy:y+32,r:12,fill:'var(--line)'},g));
  return [ds,s,y]});
const TAP=mk('circle',{r:16,fill:'none',stroke:'var(--gain)','stroke-width':4},$('dots'));
const PK=[0,1,2].map(()=>mk('circle',{cx:388,cy:440,r:7,class:'gain'},$('pkts')));
const VV=[.3,.9,.4,.6,.9,.8,1,.7,.5,.2,.6,.3,.4,.7,.3,.5],CE=[];
for(let r=0;r<4;r++){const y=300+r*90;mk('circle',{cx:500,cy:y,r:20,class:r===1?'gain':'ink'},$('cells'));for(let c=0;c<4;c++)CE.push(mk('rect',{x:550+c*86,y:y-36,width:72,height:72,rx:10,fill:'var(--gain)',stroke:'var(--line)','stroke-width':3},$('cells')))}
const gearD=(R,n)=>{let d='';for(let k=0;k<n;k++){const a=k*2*Math.PI/n,w=Math.PI/n*.55;[[a-w,R],[a-w*.6,R+18],[a+w*.6,R+18],[a+w,R]].forEach(([b,r],j)=>d+=(k||j?'L':'M')+(r*Math.cos(b)).toFixed(1)+' '+(r*Math.sin(b)).toFixed(1))}return d+'Z'};
const GR=[[320,520,110,14,1],[510,410,80,10,-1],[640,550,70,9,1]].map(([x,y,R,n,dr])=>{const g=mk('g',{},$('gears'));const pa=mk('path',{d:gearD(R,n),fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},g);mk('circle',{r:R*.3,fill:'none',stroke:'var(--ink)','stroke-width':6},g);mk('path',{d:`M0 ${-R*.3}V${-R*.75}`,stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},g);return [g,x,y,R,dr,pa]});
const RW=['SOMETHING WENT WRONG','DIAGNOSE THE ROOT CAUSE','FIX THE PART THAT FAILED'].map((s,i)=>{const g=mk('g',{},$('rows')),y=420+i*80;tx(g,940,y,s,{class:'m','font-size':22});const c=mk('circle',{cx:1410,cy:y-8,r:14,fill:'var(--gain)'},g);mk('path',{d:`M940 ${y+30}h480`,stroke:'var(--line)','stroke-width':2},g);return [g,c]});
// loop pills; captions sit outside the dashed circle
const LP=[[440,300,'TRUTH','SURFACES PROBLEMS',440,250,'middle'],[613,600,'TRANSPARENCY','EVERYONE SEES',585,696,'start'],[267,600,'BELIEVABILITY','PICKS THE FIX',295,696,'end']].map(([x,y,a,b,xb,yb,an])=>{const g=mk('g',{},$('pills'));mk('rect',{x:x-130,y:y-32,width:260,height:64,rx:32,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);tx(g,x,y+8,a,{class:'m','font-size':22,'text-anchor':'middle',style:'fill:var(--ink)'});tx(g,xb,yb,b,{class:'m','font-size':18,'text-anchor':an});return g});
const SP=[[890,660]];for(let i=0;i<6;i++){const [x,y]=SP[SP.length-1];SP.push([x+90,y],[x+90,y-60])}
$('stair').setAttribute('d','M'+SP.map(q=>q.join(' ')).join('L'));
const tip=L=>{for(let i=1;i<SP.length;i++){const [a,b]=SP[i-1],[c,d]=SP[i],s=Math.abs(c-a)+Math.abs(d-b);if(L<=s){const f=L/s;return [a+(c-a)*f,b+(d-b)*f]}L-=s}return SP[SP.length-1]};
[[440,470],[300,610],[160,470],[300,330]].forEach((q,i)=>mk('circle',{cx:q[0],cy:q[1],r:28,class:i===1?'gain':'ink'},$('tppl')));
const RY=[];for(let i=0;i<8;i++)if(i!==4)RY.push([mk('path',{stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('rays')),i*Math.PI/4-Math.PI/2]);