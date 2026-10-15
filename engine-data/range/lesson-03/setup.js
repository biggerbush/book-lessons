const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const part=(P,k)=>{const n=P.length-1,f=cl(k)*n,i=Math.min(Math.floor(f),n),s=P.slice(0,i+1);let e=P[i];if(i<n){const a=P[i],b=P[i+1],r=f-i;e=[a[0]+(b[0]-a[0])*r,a[1]+(b[1]-a[1])*r];s.push(e)}return [s.map(q=>q[0].toFixed(1)+','+q[1].toFixed(1)).join(' '),e]};
const draw=(el,k)=>{el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));el.setAttribute('opacity',k>0?1:0)};
const CP=[[1120,640],[1250,580],[1180,500],[1300,430],[1260,360],[1300,290]];
fig($('stu1'),580,600,24,'ink');fig($('tch1'),1000,560,30,'ink');
const H1=[0,1,2].map(i=>{const g=mk('g',{},$('hints1'));mk('rect',{x:860+i*150,y:330,width:120,height:56,rx:28,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);mk('text',{x:920+i*150,y:366,'font-size':22,'text-anchor':'middle',class:'m'},g).textContent='HINT';return g});
const S2=[],F2=[];for(let x=200;x<=1440;x+=20){const k=(x-200)/1240;S2.push([x,740-300*(1-Math.exp(-k*4))+12*Math.sin(x/23)*(1-k)]);F2.push([x,740-340*(k<.15?k/.15:Math.exp(-(k-.15)*2.2))])}
const N3=[[900,300],[1040,280],[1200,310],[1360,290],[960,420],[1110,400],[1280,430],[1420,410],[880,540],[1030,560],[1180,520],[1340,560],[980,650],[1240,650]];
N3.forEach((a,i)=>[i+1,i+4].forEach(j=>{if(j<N3.length&&!(j===i+1&&i%4===3))mk('path',{d:'M'+a[0]+' '+a[1]+'L'+N3[j][0]+' '+N3[j][1],class:'s-line','stroke-width':3},$('net3'))}));
const ND=N3.map(a=>mk('circle',{cx:a[0],cy:a[1],r:14,class:'ink'},$('net3')));
const tile=(g,ty)=>{mk('rect',{x:0,y:0,width:80,height:80,rx:12,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);if(ty===0)mk('rect',{x:16,y:16,width:48,height:48,class:'ink'},g);else if(ty===1)mk('circle',{cx:40,cy:40,r:26,class:'gain'},g);else mk('path',{d:'M40 12L68 66H12z',class:'loss'},g)};
const BK=[];for(let i=0;i<10;i++){const o=mk('g',{transform:'translate('+(120+i*104)+' 280)'},$('blk4')),g=mk('g',{},o);tile(g,0);BK.push(g)}
const T4=[0,0,0,0,1,1,1,2,2,2],S4=[3,7,0,5,9,2,6,1,8,4],MX=T4.map(ty=>{const g=mk('g',{},$('mix4'));tile(g,ty);return g});
fig($('prof5'),690,450,24,'ink');fig($('prof5'),1410,450,24,'ink');
const star=(cx,cy,R)=>{let d='';for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,r=k%2?R*.45:R;d+=(k?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'};
[[160,5,'st5a'],[880,2,'st5b']].forEach(([ox,n,id])=>{for(let i=0;i<5;i++)mk('path',{d:star(ox+20+i*50,712,20),fill:i<n?'var(--gain)':'none',stroke:i<n?'var(--gain)':'var(--muted)','stroke-width':3,'stroke-linejoin':'round'},$(id))});
const AS=[0,1,1,0,1,0,0,1,0,1,1,0],C0=[],C1=[];let ka=0,kb=0;
const CD=AS.map((a,i)=>{C0.push([500+i*54,280]);C1.push(a?[900+(kb++)*70,470]:[180+(ka++)*70,470]);return mk('circle',{r:14,fill:'var(--muted)'},$('cad5'))});
const R6=['M640 480C640 600 560 680 540 820','M640 480C650 620 700 700 760 800','M640 480V830','M640 480C620 560 520 580 470 640','M640 480C660 560 760 580 820 640'].map(d=>mk('path',{d:d,class:'s-gain','stroke-width':6,fill:'none','stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1'},$('roots6')));
const W7=[100,80,96,60].map((w,i)=>mk('path',{d:'M287 '+(340+i*36)+'h'+w,class:'s-gain','stroke-width':6,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1'},$('wl7')));
const M7=[0,1,2].map(ty=>{const g=mk('g',{},$('mix7'));tile(g,ty);return g});