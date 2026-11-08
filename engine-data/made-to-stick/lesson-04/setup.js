const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const fox=g=>{mk('path',{d:'M-66-6q-60-10-70-50q30 20 64 26z',class:'gain'},g);
  mk('path',{d:'M-40 24v36M-12 28v32M28 28v32M52 22v38',stroke:'var(--gain)','stroke-width':9,'stroke-linecap':'round'},g);
  mk('ellipse',{cx:0,cy:0,rx:70,ry:32,class:'gain'},g);mk('circle',{cx:66,cy:-36,r:26,class:'gain'},g);
  mk('path',{d:'M48-54l6-30 18 20zM70-60l14-26 8 26zM86-46l32 10-30 12z',class:'gain'},g);
  mk('circle',{cx:76,cy:-42,r:4,fill:'var(--on-gain)'},g)};
const grp=(g,x,y)=>{mk('path',{d:'M'+x+' '+(y-10)+'v24',stroke:'var(--ink)','stroke-width':5,fill:'none'},g);
  [4,3,2,1].forEach((n,r)=>{for(let i=0;i<n;i++)mk('circle',{cx:x+(i-(n-1)/2)*26,cy:y+24+r*24,r:14},g)})};
const dr=(el,k)=>{el.setAttribute('stroke-dasharray',k.toFixed(3)+' 1');el.setAttribute('opacity',k>0?1:0)};
const bz=(P,k)=>{const q=1-k;return[0,1].map(j=>q*q*q*P[0][j]+3*q*q*k*P[1][j]+3*q*k*k*P[2][j]+k*k*k*P[3][j])};
fox($('tfox'));fox($('f2i'));grp($('tgr'),1400,240);grp($('fgr'),560,256);
[[330,380,70],[430,340,90],[540,380,70],[430,420,70],[340,430,50],[530,430,55]].forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],fill:'var(--line)'},$('fog')));
const R1=[[960,600],[1020,420],[1180,300],[1290,330]],R2=[[1320,400],[1240,560],[1080,660],[980,650]],MR=[[660,690],[690,590],[780,530],[930,520]];
const FP=[[190,628],[230,640],[430,640],[470,628]].map(q=>mk('ellipse',{cx:q[0],cy:q[1],rx:10,ry:5,fill:'var(--ink)'},$('fp')));
for(let i=0;i<5;i++){const x=1130+i*72;fig($('crw'),x,520,18,'ink');mk('path',{d:'M'+x+' 498L1273 372',class:'s-line','stroke-width':3,'stroke-dasharray':'6 8'},$('lks'))}
for(let i=0;i<12;i++)mk('circle',{cx:200+i*20,cy:16,r:5,fill:'var(--stage)'},$('plw'));
const ST=[];for(let i=0;i<32;i++)ST.push(mk('rect',{x:160+(i%8)*34,y:500+Math.floor(i/8)*30,width:24,height:22,rx:5,fill:'var(--line)'},$('seat')));
for(let y=236;y<=750;y+=24){mk('path',{d:'M760 '+y+'a9 9 0 0 0 0 16',fill:'none',stroke:'var(--ink)','stroke-width':4},$('loops'));mk('path',{d:'M850 '+y+'a9 9 0 0 1 0 16',fill:'none',stroke:'var(--ink)','stroke-width':4},$('loops'))}
const HK=[];for(let i=0;i<12;i++)HK.push(mk('path',{d:'M80 0h18a7 7 0 0 1 0 14',fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round',transform:'rotate('+(i*30)+')'},$('cbh')));
fig($('shf'),980,410,30,'gain');
const CP=['REAL PERSON','REAL OBJECT','REAL ACTION'].map((s,i)=>{const g=mk('g',{},$('chips')),x=720+i*255;mk('rect',{x:x,y:680,width:230,height:56,rx:28,class:'gain'},g);
  const tx=mk('text',{x:x+115,y:716,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=s;return g});