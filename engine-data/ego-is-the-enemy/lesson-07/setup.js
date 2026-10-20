const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const dr=(el,k)=>{el.style.strokeDashoffset=(1-k).toFixed(3)};
let md='';for(let i=0;i<=60;i++){const s=i/60,o=80*Math.sin(Math.PI*s)*Math.sin(s*19);md+=(i?'L':'M')+(760+650*s+.458*o).toFixed(1)+' '+(640-335*s+.889*o).toFixed(1)}
$('messy').setAttribute('d',md);
const ST=[];for(let i=0;i<5;i++){const y=760-(i+1)*90;ST.push(mk('rect',{x:140+i*120,y:y,width:120,height:760-y,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('steps')))}
fig($('wfig'),260,360,50,'ink');
fig($('think'),430,630,30,'ink');
fig($('stf'),1273,320,34,'ink');
fig($('mirp'),300,400,30,'ink');
for(let i=0;i<3;i++){const x=212+i*80;mk('rect',{x:x,y:270,width:70,height:230,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('lock'));
  mk('path',{d:'M'+(x+15)+' 300h40M'+(x+15)+' 316h40',stroke:'var(--line)','stroke-width':4,'stroke-linecap':'round'},$('lock'));
  mk('rect',{x:x+50,y:380,width:8,height:30,rx:3,class:i===1?'gain':'ink'},$('lock'))}
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(800+78*Math.sin(a)).toFixed(1)+' '+(400-78*Math.cos(a)).toFixed(1)+'L'+(800+88*Math.sin(a)).toFixed(1)+' '+(400-88*Math.cos(a)).toFixed(1),stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},$('ticks'))}
const PP=[],CK=[];for(let i=0;i<5;i++){PP.push(mk('circle',{cx:1000+i*90,cy:450,r:26,fill:'var(--line)'},$('pips')));
  const y=320+i*84;mk('rect',{x:180,y:y,width:44,height:44,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rows'));
  mk('path',{d:'M250 '+(y+22)+'h310',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},$('rows'));
  CK.push(mk('path',{d:'M190 '+(y+22)+'l10 12 22-26',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},$('rows')))}
for(let i=0;i<6;i++)mk('circle',{cx:660,cy:290+i*56,r:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spir'));
const NL=[];for(let i=0;i<4;i++){const y=330+i*70,g=mk('g',{},$('nlines'));mk('rect',{x:700,y:y-18,width:24,height:24,rx:5,fill:'var(--gain)'},g);
  mk('path',{d:'M740 '+(y-6)+'h'+(i%2?130:160),stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},g);NL.push(g)}
const CL=[];for(let r=0;r<4;r++)for(let c=0;c<5;c++)CL.push(mk('rect',{x:1132+c*70,y:322+r*72,width:58,height:60,rx:8,fill:'var(--line)'},$('cells')));