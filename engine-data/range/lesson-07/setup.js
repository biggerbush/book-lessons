const XNS='http://www.w3.org/2000/svg', XDUM=document.createElementNS(XNS,'g');
const E=id=>$(id)||XDUM;
const person=(g,x,y,r,cls)=>{if(!g)return;mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},g)};
const flame=(cx,w,h,b)=>`M${cx-w} ${b}Q${cx-w} ${(b-h*.55).toFixed(1)} ${cx} ${(b-h).toFixed(1)}Q${cx+w} ${(b-h*.55).toFixed(1)} ${cx+w} ${b}Z`;
const mkFire=(g,xs)=>xs.map(x=>[mk('path',{class:'loss'},g),mk('path',{class:'gain'},g),x]);
const fire=(F,b,t,k)=>F.forEach((f,i)=>{const h=Math.max(0,(170+40*Math.sin(t*5+i*1.9))*k);f[0].setAttribute('d',flame(f[2],30,h,b));f[1].setAttribute('d',flame(f[2],13,h*.45,b))});
const F0=mkFire(E('xfl0'),[1110,1140,1170,1200,1230]),F1=mkFire(E('xfl1'),[160,225,290,355,420,485]);
person(E('xffp'),1340,400,34,'ink');
for(let i=0;i<4;i++){const x=180+i*95;mk('polygon',{points:`${x-50},700 ${x},500 ${x+50},700`,fill:'var(--line)'},E('xtrees'))}
person(E('xrp'),0,470,28,'ink');
person(E('xlpp'),300,380,36,'ink');person(E('xbp'),600,390,30,'gain');person(E('xep'),600,420,32,'ink');
[60,120,90,170].forEach((h,i)=>mk('rect',{x:1120+i*80,y:650-h,width:50,height:h,class:'ink'},E('xbars3')));
[[175,420],[190,290],[200,540],[330,260],[430,400],[440,530]].forEach(([x,y])=>mk('path',{d:`M${x} ${y-14}v28M${x-12} ${y-7}l24 14M${x+12} ${y-7}l-24 14`,stroke:'var(--ice)','stroke-width':4,'stroke-linecap':'round'},E('xsnow')));
const DT=[];for(let j=0;j<8;j++)for(let i=0;i<9;i++)DT.push(mk('circle',{cx:140+i*38,cy:260+j*40,r:9,class:'ink'},E('xdots')));
let xsp='';for(let k=0;k<=24;k++){const a=Math.PI-k*Math.PI*.85/24,r=k%2?135:175;xsp+=(800+r*Math.cos(a)).toFixed(0)+','+(600-r*Math.sin(a)*.8).toFixed(0)+' '}
mk('polygon',{points:xsp+'800,600',class:'ink'},E('xspk'));
[[1320,600,130],[1330,560,110],[1325,520,120]].forEach(([x,y,w])=>mk('rect',{x:x,y:y,width:w,height:40,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},E('xbooks')));
const IDX=[[140,430],[150,290],[250,245],[350,245],[450,290],[460,430]].map(([x,y],i)=>{const g=mk('g',{},E('xfx'));mk('path',{d:`M300 480L${x} ${y}`,class:'s-line','stroke-width':3},g);mk('circle',{cx:x,cy:y,r:18,class:i%2?'ink':'gain'},g);return g});
const pan=(g,cls,lab)=>{mk('path',{d:'M0 0L-50 100M0 0L50 100',class:'s-ink','stroke-width':3},g);mk('path',{d:'M-60 100Q0 140 60 100Z',class:'ink'},g);mk('circle',{cx:0,cy:82,r:16,class:cls},g);mk('text',{x:0,y:168,'font-size':18,'text-anchor':'middle',class:'m'},g).textContent=lab};
pan(E('xpanL'),'loss','VIEW A');pan(E('xpanR'),'gain','VIEW B');
person(E('xsp6'),250,400,34,'ink');person(E('xkp'),1320,580,26,'gain');