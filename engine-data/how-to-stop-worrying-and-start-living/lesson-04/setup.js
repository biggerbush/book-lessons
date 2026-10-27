const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
fig($('farm'),520,620,30,'ink');
const JIM=fig($('jim'),220,460,34,'ink');
const trn=mk('g',{},$('train'));
for(let i=0;i<4;i++){const x=380+i*270;for(let j=0;j<5;j++)mk('circle',{cx:x+35+j*40,cy:484,r:16,class:'gain'},trn);
  mk('rect',{x:x,y:500,width:230,height:100,rx:8,class:'s-ink',fill:'var(--stage)','stroke-width':6},trn);
  [50,180].forEach(d=>mk('circle',{cx:x+d,cy:612,r:14,class:'ink'},trn));
  if(i<3)mk('path',{d:'M'+(x+230)+' 560h40',class:'s-ink','stroke-width':6},trn)}
for(let i=0;i<7;i++)mk('circle',{cx:180+i*80,cy:230,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
const CELLS=[];for(let i=0;i<336;i++)CELLS.push(mk('rect',{x:830+(i%24)*26,y:240+Math.floor(i/24)*26,width:20,height:20,rx:4,class:'ink'},$('grid')));
const WR=[37,118,190,251,309];
for(let r=0;r<3;r++)for(let c=0;c<4;c++)mk('rect',{x:-96+c*48,y:110-r*38,width:44,height:36,rx:4,class:'gain'},$('blk'));
for(let i=0;i<5;i++)mk('rect',{x:172+i*80,y:420,width:36,height:240,class:'s-ink',fill:'var(--stage)','stroke-width':5},$('cols'));
const COINS=[];[4,7,10].forEach((n,k)=>{for(let j=0;j<n;j++)COINS.push(mk('rect',{x:700+k*130,y:670-j*22,width:100,height:20,rx:10,class:'gain',stroke:'var(--stage)','stroke-width':3},$('coins')))});
for(let i=0;i<10;i++){mk('rect',{x:150+i*48,y:240,width:22,height:12,rx:3,fill:'var(--line)'},$('spr'));mk('rect',{x:150+i*48,y:538,width:22,height:12,rx:3,fill:'var(--line)'},$('spr'))}
const TL=[];for(let g=0;g<3;g++)for(let j=0;j<5;j++){const x=640+g*120;TL.push(mk('path',{d:j<4?'M'+(x+j*20)+' 312v68':'M'+(x-10)+' 372L'+(x+72)+' 320',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('marks')))}
const HAP=mk('path',{d:'M640 482v68',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('marks'));
const wave=(y0,A,f,s,tt)=>{let d='';for(let x=300;x<=1460;x+=20)d+=(x===300?'M':'L')+x+' '+(y0+A*Math.sin(x/f+tt*s)*(A>8?Math.sin(x/170+tt):1)).toFixed(1);return d};