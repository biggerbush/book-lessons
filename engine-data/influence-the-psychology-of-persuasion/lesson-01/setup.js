const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const IK={stroke:'var(--ink)','stroke-linecap':'round','stroke-linejoin':'round',fill:'none'};
const A=(o,b)=>Object.assign({},o,b);
const turkey=(par,x,y)=>{const g=mk('g',{transform:`translate(${x} ${y})`},par);
  for(let i=0;i<6;i++){const a=(-165+i*21)*Math.PI/180;mk('path',{d:`M-30 0L${(-30+150*Math.cos(a)).toFixed(0)} ${(150*Math.sin(a)).toFixed(0)}`,stroke:i%2?'var(--muted)':'var(--line)','stroke-width':30,'stroke-linecap':'round'},g)}
  mk('path',A(IK,{d:'M60 -10Q105 -60 98 -105','stroke-width':18}),g);
  mk('ellipse',{cx:0,cy:20,rx:110,ry:80,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':7},g);
  mk('path',A(IK,{d:'M-50 10q50 60 110 10M-25 96v50h-18M30 96v50h18','stroke-width':6}),g);
  mk('circle',{cx:100,cy:-125,r:26,class:'ink'},g);mk('circle',{cx:108,cy:-130,r:5,fill:'var(--stage)'},g);
  mk('path',{d:'M122 -132l28 8-28 8z',class:'gain'},g);mk('ellipse',{cx:114,cy:-92,rx:8,ry:16,class:'loss'},g);return g};
const chick=(par,x,y,col,d)=>{mk('path',A(IK,{d:`M${x-12} ${y+30}v22M${x+12} ${y+30}v22`,'stroke-width':5}),par);mk('circle',{cx:x,cy:y,r:36,fill:col},par);mk('circle',{cx:x+28*d,cy:y-38,r:22,fill:col},par);mk('path',{d:`M${x+48*d} ${y-44}l${18*d} 6 ${-18*d} 6z`,class:'gain'},par)};
const waves=(par,cx,cy,rot,col)=>{const g=mk('g',{transform:`rotate(${rot} ${cx} ${cy})`},par);return [0,1,2].map(i=>{const r=24+i*22;return mk('path',{d:`M${cx+r*.82} ${cy-r*.57}A${r} ${r} 0 0 1 ${cx+r*.82} ${cy+r*.57}`,fill:'none',stroke:col||'var(--gain)','stroke-width':5,'stroke-linecap':'round'},g)})};
const pulse=(ws,on,tt)=>ws.forEach((w,i)=>w.setAttribute('opacity',on?(.25+.75*Math.max(0,Math.sin(tt*6-i*1.2))).toFixed(2):0));
turkey($('tk1'),400,560);turkey($('tk2'),380,580);
chick($('chA'),860,690,'var(--ink)',-1);chick($('chB'),1240,690,'var(--muted)',-1);
const wA=waves($('chA'),790,652,180),wR=waves($('recW'),1000,596,-90),wF=waves($('fakeW'),425,275,0,'var(--loss)');
const reel=(par,x,y,r)=>{const g=mk('g',{},par),w=r>20?6:4;mk('circle',{r:r,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':w},g);mk('path',A(IK,{d:`M${-r+6} 0H${r-6}M0 ${-r+6}V${r-6}`,'stroke-width':w}),g);return [g,x,y]};
const RL=[[650,395,34],[790,395,34]].map(q=>reel($('reels3'),...q)).concat([[1124,660,13],[1176,660,13]].map(q=>reel($('reelsH'),...q)));
mk('path',A(IK,{d:'M900 395H940','stroke-width':4}),$('frames'));
const FR=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('frames')),x=940+i*106;mk('rect',{x:x,y:350,width:90,height:90,rx:10,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);fig(g,x+45,366,10,'gain');return g});
[190,270,350,430].forEach((x,i)=>fig($('queue'),x,660,18,i?'ink':'gain'));
const RW=[['NO REASON','“May I go first?”','',''],['REAL REASON','“May I go first, ','because',' I’m in a rush?”'],['EMPTY REASON','“May I go first, ','because',' I have to make copies?”']].map((q,i)=>{const y=250+i*180,g=mk('g',{},$('rows'));
  mk('text',{x:520,y:y,'font-size':20,class:'m'},g).textContent=q[0];
  const tx=mk('text',{x:520,y:y+44,'font-size':32,class:'d5'},g);[q[1],q[2],q[3]].forEach((s,k)=>{if(s)mk('tspan',k==1?{style:'fill:var(--gain)'}:{},tx).textContent=s});
  const b=mk('rect',{x:520,y:y+62,height:44,rx:8,width:0,fill:i?'var(--gain)':'var(--muted)'},g);
  const n=mk('text',{x:540,y:y+100,'font-size':52,class:'d'},g);return [g,b,n]});
const ST=[];for(let i=0;i<6;i++){const g=mk('g',{},$('stones')),cx=200+(i%3)*140,cy=i<3?400:545;
  mk('path',A(IK,{d:`M${cx-24} ${cy-22}Q${cx} ${cy-50} ${cx+24} ${cy-22}`,'stroke-width':4}),g);
  mk('ellipse',{cx:cx,cy:cy,rx:40,ry:28,fill:'var(--ice)',stroke:'var(--ink)','stroke-width':4},g);
  mk('circle',{cx:cx,cy:cy,r:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},g);ST.push(g)}
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',A(IK,{d:`M${(300+112*Math.cos(a)).toFixed(1)} ${(470+112*Math.sin(a)).toFixed(1)}L${(300+126*Math.cos(a)).toFixed(1)} ${(470+126*Math.sin(a)).toFixed(1)}`,'stroke-width':6}),$('ticks'))}
const CD=[];for(let i=0;i<12;i++){const x=520+(i%3)*110,y=290+Math.floor(i/3)*100,g=mk('g',{},$('cards'));mk('rect',{x:x,y:y,width:90,height:80,rx:12,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);mk('text',{x:x+45,y:y+56,'font-size':44,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},g).textContent='?';CD.push(g)}
const ZG=$('zig'),ZL=ZG.getTotalLength()||600;
fig($('spP'),380,280,40,'loss');fig($('pupP'),620,560,30,'ink');fig($('mirP'),1330,600,24,'gain');