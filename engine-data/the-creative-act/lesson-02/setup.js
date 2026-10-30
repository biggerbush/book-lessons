const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const arcD=(cx,cy,r,s)=>{const a=.85,x1=(cx+s*r*Math.cos(a)).toFixed(1),y1=(cy-r*Math.sin(a)).toFixed(1),y2=(cy+r*Math.sin(a)).toFixed(1);return 'M'+x1+' '+y1+'A'+r.toFixed(1)+' '+r.toFixed(1)+' 0 0 '+(s>0?1:0)+' '+x1+' '+y2};
const mkWaves=g=>{const a=[];for(let i=0;i<3;i++)[1,-1].forEach(s=>a.push([mk('path',{fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$(g)),s,i]));return a};
const WV=mkWaves('waves'),CW=mkWaves('cw');
const waveR=(arr,cx,cy,r0,span,t,on)=>arr.forEach(([e,s,i])=>{const f=(t*.5+i/3)%1;e.setAttribute('d',arcD(cx,cy,r0+span*f,s));e.setAttribute('opacity',(on*(1-f)).toFixed(2))});
const TD=[];for(let i=0;i<7;i++){const a=i*.9+.4;TD.push([mk('circle',{r:8+i%3*3,class:'gain','fill-opacity':.55},$('tdots')),1300+150*Math.cos(a),340+110*Math.sin(a)])}
const BX=[380,530,680,830],BY=[420,480,420,480],BITS=['MELODIES','STORIES','IMAGES','SOLUTIONS'].map(s=>{const g=mk('g',{},$('bits'));mk('circle',{r:24,class:'gain'},g);const tx=mk('text',{x:0,y:52,'font-size':18,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
const RC=fig($('rcv'),1280,560,36,'ink');
let tk='';for(let i=0;i<=12;i++)tk+='M'+(720+i*60)+' '+(i%3?570:560)+'V580';mk('path',{d:tk,class:'s-ink','stroke-width':4},$('tune'));
fig($('pL'),400,600,40,'ink');const P1=fig($('pR'),1200,600,40,'ink');
for(let i=0;i<7;i++)mk('circle',{cx:200+i*64,cy:250,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));
let ct='';for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);ct+='M'+(1120+140*s).toFixed(1)+' '+(450-140*c).toFixed(1)+'L'+(1120+124*s).toFixed(1)+' '+(450-124*c).toFixed(1)}
mk('path',{d:ct,class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('cticks'));
const BR=[40,70,100,130].map((h,i)=>mk('rect',{x:1330+i*34,y:620-h,width:24,height:h,rx:4,class:'gain'},$('bars')));
fig($('lpP'),400,520,46,'ink');
const SB=[60,110,160,210].map((h,i)=>mk('rect',{x:780+i*80,y:640-h,width:56,height:h,rx:8},$('sbars')));
const SU=[];for(let i=0;i<7;i++)SU.push(mk('circle',{cx:800+i*70,cy:770,r:18},$('sudots')));