const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const draw=(el,k)=>{el.style.strokeDashoffset=1-k;el.style.opacity=k>0?1:0};
const CF=[];for(let i=0;i<9;i++)CF.push(mk('rect',{x:1180+i*32,y:200,width:12,height:12,rx:2,class:i%3?'gain':'loss'},$('conf')));
const B1=[];for(let i=0;i<8;i++)B1.push(mk('rect',{x:180+i*62,y:640,width:44,height:0,class:i==7?'gain':'ink'},$('bars1')));
const TB=[880,1020,1160].map(x=>{const g=mk('g',{},$('team')),h=mk('g',{},g);fig(h,x,390,28,'gain');mk('path',{d:'M'+(x-36)+' 450l-34-70M'+(x+36)+' 450l34-70',class:'s-gain',fill:'none','stroke-width':10,'stroke-linecap':'round'},h);return [g,h]});
fig($('avs'),240,340,22,'gain');fig($('avs'),440,340,22,'ink');
const FB=[];for(let i=0;i<10;i++){const g=mk('g',{},$('feat2')),x=120+i*136;mk('rect',{x:x,y:724,width:112,height:56,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('text',{x:x+56,y:759,'font-size':18,'text-anchor':'middle',class:'m'},g).textContent='NEW';FB.push(g)}
for(let i=0;i<3;i++){const y=240+i*90,f=$('fl3');mk('path',{d:'M360 '+(y+32)+'L760 385',class:'s-muted',fill:'none','stroke-width':3,'stroke-dasharray':'8 8'},f);mk('rect',{x:120,y:y,width:240,height:64,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},f);mk('text',{x:240,y:y+40,'font-size':20,'text-anchor':'middle',class:'m'},f).textContent='NEW FEATURE'}
const AD=[0,1,2,3].map(()=>mk('circle',{r:10,class:'ink'},$('adots')));
for(let i=0;i<4;i++){const a=i*Math.PI/4,c=130*Math.cos(a),s=130*Math.sin(a);mk('path',{d:'M'+(1270-c).toFixed(1)+' '+(430-s).toFixed(1)+'L'+(1270+c).toFixed(1)+' '+(430+s).toFixed(1),class:'s-line','stroke-width':4},$('spk'))}
const CX=[520,760,1000,1240],FR=[[.55,.52,.56,.54],[.2,.22,.19,.21]],COH=[],RB=[],ARC=[];
CX.forEach((c,i)=>{const g=mk('g',{},$('coh'));mk('text',{x:c,y:250,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent='GROUP '+(i+1);
  for(let j=0;j<9;j++)mk('circle',{cx:c-40+(j%3)*40,cy:290+Math.floor(j/3)*36,r:12,class:i==3?'gain':'ink'},g);COH.push(g);
  [460,590].forEach((y,r)=>{mk('rect',{x:c-100,y:y,width:200,height:40,rx:6,fill:'var(--line)'},$('rows4'));RB.push([mk('rect',{x:c-100,y:y,width:0,height:40,rx:6,class:'gain'},$('rows4')),FR[r][i],r])});
  if(i<3)ARC.push(mk('path',{d:'M'+c+' 680Q'+(c+120)+' 740 '+(c+240)+' 680',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 8','stroke-linecap':'round'},$('arcs')))});
const PN=[];for(let i=0;i<6;i++)PN.push(mk('circle',{cx:260+i*130,cy:650,r:10,class:'gain'},$('pins5')));
const KF=['Actionable','Accessible','Auditable'].map((w,i)=>{const x=120+i*473,g=mk('g',{},$('cards'));mk('rect',{x:x,y:230,width:414,height:560,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  mk('text',{x:x+36,y:370,'font-size':120,class:'d',style:'fill:var(--gain)'},g).textContent='A';mk('text',{x:x+36,y:450,'font-size':44,class:'d5'},g).textContent=w;return g});
[703,800,897].forEach(x=>fig($('ki1'),x,540,20,'ink'));
const BA=[];for(let i=0;i<12;i++)BA.push(mk('circle',{cx:i<6?440+i*80:980+(i-6)*80,cy:360,r:16,class:i<6?'ink':'gain'},$('badots')));
for(let j=0;j<8;j++)mk('circle',{cx:160+(j%4)*40,cy:630+Math.floor(j/4)*40,r:14,class:'ink'},$('clu'));