const P=(g,x,y,r,c)=>{const q=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},q);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},q);return q};
const bolt=(g,x,y,s)=>mk('path',{d:'M'+x+' '+y+'l'+(24*s)+' -34l'+(8*s)+' 26l'+(26*s)+' -40',fill:'none',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
const truck=(g,x,y,f)=>{const q=mk('g',{fill:f},g);mk('rect',{x:x,y:y,width:44,height:30,rx:4},q);mk('rect',{x:x+46,y:y+10,width:20,height:20,rx:4},q);[x+12,x+52].forEach(c=>mk('circle',{cx:c,cy:y+34,r:7},q));return q};
const L1=P($('tp'),380,430,40,''), R1=P($('tp'),1220,430,40,'');
const MO=mk('path',{d:'M1204 452q16-12 32 0',fill:'none',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round'},R1);
[[540,490,1],[1060,490,-1],[680,450,1],[920,450,-1],[770,530,1]].forEach(b=>bolt($('heat'),b[0],b[1],b[2]));
const XS=[330,560,800,1040,1270], G2=XS.map(x=>P($('gst'),x,440,30,''));
XS.forEach(x=>mk('ellipse',{cx:x,cy:558,rx:42,ry:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('plt')));
P($('kp'),560,300,34,'gain'); P($('kp'),1150,300,34,'ink'); P($('gamp'),720,300,34,'ink');
let sp='';for(let i=0;i<16;i++){const a=i*Math.PI/8,r=i%2?14:34;sp+=(575+r*Math.cos(a)).toFixed(1)+','+(565+r*Math.sin(a)).toFixed(1)+' '}
const STAR=mk('polygon',{points:sp,fill:'var(--loss)'},$('kfx'));
P($('wk'),220,340,26,'ink'); P($('wk'),320,340,26,'gain');
const PN=['THE POINT','GOODWILL'].map((s,i)=>{const g=mk('g',{},$('scl'));mk('path',{d:'M0 0V110',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M-90 110a90 40 0 0 0 180 0z',fill:i?'var(--gain)':'var(--line)',stroke:'var(--ink)','stroke-width':4},g);const x=mk('text',{x:0,y:190,'font-size':22,'text-anchor':'middle',class:'m'},g);x.textContent=s;return g});
P($('op'),240,330,34,'ink'); P($('op'),480,330,34,'ink');
bolt($('hb'),300,392,1); bolt($('hb'),420,372,-1);
const CK=[...Array(8)].map((_,i)=>{const g=mk('g',{},$('chk')),x=722+i*92;mk('circle',{cx:x,cy:330,r:24,fill:'var(--ink)'},g);mk('path',{d:'M'+(x-10)+' 330l7 8 14-16',fill:'none',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
const TK=[...Array(8)].map((_,i)=>truck($('trk'),700+i*92,470,i<2?'var(--ink)':'var(--gain)'));
for(let i=0;i<28;i++)mk('rect',{x:128+(i%7)*53,y:316+Math.floor(i/7)*60,width:44,height:46,rx:6,fill:i===18?'var(--loss)':'var(--line)'},$('cal'));
P($('frp'),1150,540,30,'ink'); P($('frp'),1350,540,30,'ink');