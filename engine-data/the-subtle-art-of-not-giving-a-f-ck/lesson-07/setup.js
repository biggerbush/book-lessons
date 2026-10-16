const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
function glass(g){mk('path',{d:'M-100 -150L100 -150L12 0L100 150L-100 150L-12 0Z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':7,'stroke-linejoin':'round'},g);
  const h=[mk('polygon',{class:'gain'},g),mk('polygon',{class:'gain'},g),mk('path',{d:'M0 -2V146',stroke:'var(--gain)','stroke-width':4},g)];
  [-174,150].forEach(y=>mk('rect',{x:-130,y:y,width:260,height:24,rx:8,class:'ink'},g));return h}
function sand(h,k){const y=-2-140*k,w=(-2-y)*.62;h[0].setAttribute('points',`${-w},${y} ${w},${y} 0,-2`);h[1].setAttribute('points',`-88,146 88,146 0,${146-140*(1-k)}`);h[2].setAttribute('opacity',k>.01&&k<.99?1:0)}
const H0=glass($('hg0')),H1=glass($('hg1'));
const PN=[[200,640],[330,420],[500,560],[640,340],[780,600],[920,400],[1040,620]],SEG=[],PIN=[];
PN.forEach((q,i)=>{if(i)SEG.push(mk('path',{d:`M${PN[i-1][0]} ${PN[i-1][1]}L${q[0]} ${q[1]}`,stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 10','stroke-linecap':'round'},$('route')));
  PIN.push(mk('circle',{cx:q[0],cy:q[1],r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('route')))});
const TG=mk('g',{},$('trav'));mk('rect',{x:-36,y:-48,width:20,height:40,rx:6,class:'gain'},TG);fig(TG,0,-70,16,'ink');
const FK=[270,370,470,570,670].map((y,i)=>{const g=mk('g',{},$('fork'));
  const f=[mk('path',{d:`M222 470C520 470 560 ${y} 900 ${y}`,fill:'none','stroke-width':6,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1'},$('fork')),
    mk('circle',{cx:916,cy:y,r:14,stroke:'var(--ink)','stroke-width':5},$('fork')),g];
  if(i===2){const e=mk('text',{x:950,y:y+11,'font-size':30,class:'d',style:'fill:var(--gain)'},g);e.textContent='YES'}
  else{mk('path',{d:`M944 ${y-12}l24 24m0-24l-24 24`,stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},g);const e=mk('text',{x:982,y:y+8,'font-size':22,class:'m',style:'fill:var(--loss)'},g);e.textContent='NO'}
  return f});
const TB=[];for(let i=0;i<8;i++){const x=720+i*95,g=mk('g',{},$('tabs'));mk('path',{d:`M${x} 330q40 44 80 0z`,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g);TB.push(g)}
const RP=[0,1,2].map(()=>mk('ellipse',{cx:450,cy:520,fill:'none',stroke:'var(--loss)','stroke-width':3},$('rip')));
fig($('mani'),960,400,34,'ink');
const CK=[400,470,540].map(y=>{mk('rect',{x:1150,y:y-22,width:30,height:30,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':4},$('nb'));
  mk('path',{d:`M1200 ${y}H1400`,stroke:'var(--line)','stroke-width':5,'stroke-linecap':'round'},$('nb'));
  return mk('path',{d:`M1156 ${y-8}l8 9 16-20`,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('nb'))});
fig($('walker'),0,-67,16,'loss');mk('path',{d:'M-70 -40H70',stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},$('walker'));
function pan(g){mk('path',{d:'M0 0L-110 140M0 0L110 140',stroke:'var(--ink)','stroke-width':3,fill:'none'},g);mk('path',{d:'M-120 140a120 44 0 0 0 240 0z',class:'ink'},g);return mk('g',{},g)}
const lt=(g,s)=>{const e=mk('text',{x:0,y:230,'font-size':20,'text-anchor':'middle',class:'m'},g);e.textContent=s};
const feL=pan($('panL')),htR=pan($('panR'));
[-30,0,26].forEach(x=>{mk('path',{d:`M${x} 136C${x-26} 100 ${x-10} 70 ${x+14} 62C${x+20} 92 ${x+12} 118 ${x} 136z`,fill:'var(--muted)'},feL);mk('path',{d:`M${x} 138L${x+14} 64`,stroke:'var(--ink)','stroke-width':3},feL)});
lt(feL,'SLIGHTS · LIKES · STATUS');
mk('path',{d:'M0 136C-42 108-45 77-21 72C-10 69-2 77 0 83C2 77 10 69 21 72C45 77 42 108 0 136Z',class:'gain'},htR);lt(htR,'PEOPLE · WORK YOU’D MISS');
for(let c=1;c<7;c++){const x=(1080+c*400/7).toFixed(1);mk('path',{d:`M${x} 340V660`,stroke:'var(--line)','stroke-width':2},$('grid'))}
for(let r=0;r<5;r++)mk('path',{d:`M1080 ${340+r*64}H1480`,stroke:'var(--line)','stroke-width':2},$('grid'));