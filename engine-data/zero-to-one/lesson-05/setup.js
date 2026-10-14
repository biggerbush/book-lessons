const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const cells=[];for(let r=0;r<5;r++)for(let c=0;c<5;c++)cells.push(mk('rect',{x:1160+c*64,y:300+r*64,width:60,height:60,rx:8,fill:'var(--line)','fill-opacity':.5},$('mapg')));
$('mapg').appendChild(cells[20]);
let gd='';for(let i=0;i<32;i++){const a=i*Math.PI/16,R=[100,100,78,78][i%4];gd+=(i?'L':'M')+(300+R*Math.cos(a)).toFixed(1)+' '+(400+R*Math.sin(a)).toFixed(1)}$('gear').setAttribute('d',gd+'Z');
const RV=[180,240,140].map((w,i)=>[mk('rect',{x:940,y:604+i*30,width:0,height:18,rx:9,fill:'var(--muted)','fill-opacity':.5},$('rivals')),w]);
const ST=[];for(let i=0;i<9;i++)ST.push(mk('circle',{cx:240+(i%3)*90,cy:520+Math.floor(i/3)*70,r:16,class:'ink'},$('studs')));
const NP=[],ND=[],LK2=[];for(let i=0;i<14;i++){const rr=190*Math.sqrt((i+.5)/14),a=i*2.4,x=980+rr*Math.cos(a),y=500+rr*Math.sin(a);NP.push([x,y]);ND.push(mk('rect',{x:(x-11).toFixed(1),y:(y-18).toFixed(1),width:22,height:36,rx:5,class:'ink'},$('nodes2')))}
for(let i=1;i<14;i++){[i-1,Math.floor((i-1)/2)].filter((j,k)=>k===0||j!==i-1).forEach(j=>LK2.push([mk('line',{x1:NP[i][0].toFixed(1),y1:NP[i][1].toFixed(1),x2:NP[j][0].toFixed(1),y2:NP[j][1].toFixed(1),stroke:'var(--gain)','stroke-width':3},$('links2')),i]))}
const CD=[200,150,240,120,180,90].map((w,i)=>mk('rect',{x:150+(i%3?30:0),y:268+i*34,width:w,height:14,rx:7,fill:i%2?'var(--ink)':'var(--gain)'},$('code')));
const SLI=[];for(let j=1;j<12;j++){const x=120+380*j/12;SLI.push(mk('path',{d:'M'+x.toFixed(1)+' 650v70',stroke:'var(--stage)','stroke-width':4},$('slices')))}
const cy3=s=>680-380/(1+8*s);let cp='';for(let s=0;s<=1.0001;s+=.025)cp+=(660+760*s).toFixed(1)+','+cy3(s).toFixed(1)+' ';$('curve').setAttribute('points',cp);
const CU=[];for(let j=0;j<12;j++)CU.push(mk('circle',{cx:680+j*64,cy:735,r:9,class:'ink'},$('custs')));
const SL=[[380,450],[470,440],[340,530],[430,525],[520,520],[390,600],[480,605]].map(q=>fig($('sellers'),q[0],q[1],13,'ink'));
const RD=[];for(let r=0;r<4;r++)for(let c=0;c<7;c++){const x=900+c*90,y=330+r*110;if(Math.abs(x-1160)<80&&y>400&&y<600)continue;RD.push([mk('circle',{r:14,class:'loss'},$('rivs')),x,y])}
fig($('rivs'),1160,470,20,'s-muted').forEach(e=>{e.setAttribute('fill','var(--line)');e.setAttribute('stroke-width',4)});
const RG=[80,150,220,290].map(r=>mk('circle',{cx:520,cy:520,r:r,fill:'none','stroke-width':5},$('rings')));
for(let i=0;i<6;i++){const h=40+(i*7)%17;mk('rect',{x:478+i*15,y:542-h,width:11,height:h,fill:i%3===1?'var(--gain)':'var(--ink)'},$('spines6'))}
for(let i=0;i<7;i++)mk('circle',{cx:140,cy:290+i*72,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('nbl'));
for(let i=0;i<5;i++)mk('path',{d:'M190 '+(430+i*70)+'H580',class:'s-line','stroke-width':3},$('nbl'));
const SCR=[0,1,2].map(i=>{let d='M200 '+(418+i*70);for(let k=0;k<9-i*2;k++)d+=' q16 -18 32 0';return mk('path',{d:d,fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1'},$('nbl'))});
const TD=[];for(let k=0;k<8;k++){const a=(22.5+k*45)*Math.PI/180;TD.push(mk('circle',{cx:(1080+68*Math.cos(a)).toFixed(1),cy:(500+68*Math.sin(a)).toFixed(1),r:11,class:'ink'},$('tdots')))}
const CH8=['TECH','NETWORK','SCALE','BRAND'].map((s,i)=>{const g=mk('g',{},$('chips8'));mk('rect',{x:143+i*230,y:730,width:210,height:60,rx:30,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);mk('text',{x:248+i*230,y:768,'font-size':22,'text-anchor':'middle',class:'m'},g).textContent=s;return g});