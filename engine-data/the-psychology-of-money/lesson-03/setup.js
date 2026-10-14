const fig=(g,x,y,r,cls)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},e);return e};
fig($('wbf'),420,430,50,'ink');
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(1300+106*s).toFixed(1)+' '+(400-106*c).toFixed(1)+'L'+(1300+120*s).toFixed(1)+' '+(400-120*c).toFixed(1),class:'s-ink','stroke-width':i%3?3:6,'stroke-linecap':'round'},$('tks'))}
const coins=[];for(let i=0;i<6;i++)coins.push(mk('ellipse',{cx:1300,cy:700-i*24,rx:52,ry:14,class:'gain',stroke:'var(--ink)','stroke-width':4},$('coins')));
for(let i=0;i<10;i++)mk('path',{d:'M'+(160+i*140)+' 486v28',class:'s-ink','stroke-width':4},$('tlt'));
const cv=(x0,x1,yb,h,k,s1)=>{let s='';const E=Math.exp(k)-1;for(let i=0;i<=60;i++){const q=s1*i/60;s+=(x0+(x1-x0)*q).toFixed(1)+','+(yb-h*(Math.exp(k*q)-1)/E).toFixed(1)+' '}return s};
const drawC=(el,pts,pr)=>{el.setAttribute('points',pts);el.setAttribute('opacity',pr>0?1:0)};
const DT=[];for(let i=1;i<=5;i++){const q=i/10;DT.push(mk('circle',{cx:160+840*q,cy:760-480*(Math.exp(5*q)-1)/(Math.exp(5)-1),r:8,class:'ink'},$('dts')))}
const PP=[0,1,2,3,4].map(i=>fig($('ppl'),1130+i*76,560,18,i===2?'gain':'ink'));
const YR=[];for(let i=0;i<16;i++)YR.push(mk('rect',{x:120+i*84,y:630,width:60,height:60,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('yrs')));