const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-1.6*r} ${y+3.9*r}v${-r}a${1.6*r} ${1.6*r} 0 0 1 ${3.2*r} 0v${r}z`,class:c},g)};
const face=(g,x,y,c,h)=>{mk('circle',{cx:x,cy:y,r:24,fill:'var(--stage)',stroke:`var(--${c})`,'stroke-width':4},g);[-8,8].forEach(d=>mk('circle',{cx:x+d,cy:y-6,r:3,fill:`var(--${c})`},g));mk('path',{d:h?`M${x-10} ${y+6}q10 10 20 0`:`M${x-10} ${y+12}q10-10 20 0`,fill:'none',stroke:`var(--${c})`,'stroke-width':4,'stroke-linecap':'round'},g)};
const txt=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
[150,110,70,30].forEach((r,i)=>mk('circle',{cx:1270,cy:420,r:r,fill:i==3?'var(--gain)':'var(--stage)',stroke:'var(--ink)','stroke-width':6},$('tgt')));
fig($('doe'),330,470,34,'gain');fig($('grvp'),760,430,40,'ink');
[[880,420,140,60],[1000,400,120,55],[940,470,160,50],[860,360,100,45],[1040,470,110,45]].forEach(f=>mk('ellipse',{cx:f[0],cy:f[1],rx:f[2],ry:f[3],fill:'var(--muted)','fill-opacity':.35},$('fog')));
const TK=[];for(let i=0;i<25;i++)TK.push(mk('path',{d:`M${530+i*36} 630v${i%5?16:30}`,stroke:'var(--on-gain)','stroke-width':4},$('tape')));
const TG=['IMPORTANT','CONCRETE','EXCITING'].map((s,i)=>{const g=mk('g',{},$('tags'));mk('rect',{x:120+i*200,y:730,width:180,height:52,rx:26,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);txt(g,s,{x:210+i*200,y:763,'font-size':20,'text-anchor':'middle',class:'m'});return g});
for(let i=0;i<10;i++)mk('circle',{cx:821+i*42,cy:360,r:21,class:'gain'},$('awn'));
const RG=[];for(let i=0;i<5;i++){const y=740-i*90;RG.push(mk('path',{d:`M200 ${y}H340`,stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},$('rungs')))}
const TKS=[];for(let i=0;i<3;i++){const y=380+i*100,g=$('rows');mk('rect',{x:500,y:y,width:44,height:44,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  TKS.push(mk('path',{d:`M510 ${y+22}l10 12 18-24`,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g));
  txt(g,'SPECIFIC',{x:570,y:y+30,'font-size':20,class:'m'});mk('rect',{x:780,y:y-2,width:180,height:48,rx:24,class:'gain'},g);
  txt(g,'DEADLINE',{x:870,y:y+29,'font-size':21,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'})}
fig($('myp'),230,320,36,'ink');
const FEW=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('few')),x=120+i*126;
  if(i<3){mk('rect',{x:x,y:600,width:110,height:150,rx:10,class:'gain'},g);txt(g,'KR'+(i+1),{x:x+55,y:688,'font-size':34,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'})}
  else mk('rect',{x:x,y:600,width:110,height:150,rx:10,fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'10 8'},g);return g});
const MANY=[];for(let i=0;i<12;i++){const x=920+(i%6)*88+(i*13%20),y=550+Math.floor(i/6)*90+(i*7%16),g=mk('g',{transform:`rotate(${(i*37)%31-15} ${x+40} ${y+50})`},$('many'));
  mk('rect',{x:x,y:y,width:80,height:100,rx:8,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);mk('path',{d:`M${x+16} ${y+34}h48M${x+16} ${y+58}h32`,stroke:'var(--line)','stroke-width':5,'stroke-linecap':'round'},g);MANY.push(g)}
const GX=1160,GY=680,GR=180;
const pt=(v,r)=>{const a=Math.PI*(1+v/10);return[GX+r*Math.cos(a),GY+r*Math.sin(a)]};
const gg=$('gg');mk('path',{d:`M${GX-GR} ${GY}A${GR} ${GR} 0 0 1 ${GX+GR} ${GY}`,fill:'none',stroke:'var(--line)','stroke-width':16},gg);
const A7=pt(7,GR),A9=pt(9,GR),GA=mk('path',{d:`M${A7[0]} ${A7[1]}A${GR} ${GR} 0 0 1 ${A9[0]} ${A9[1]}`,fill:'none',stroke:'var(--gain)','stroke-width':16},gg);
for(let v=0;v<=10;v++){const a=pt(v,145),b=pt(v,165);mk('path',{d:`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`,stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},gg)}
const ND=mk('line',{x1:GX,y1:GY,x2:GX,y2:GY,stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},gg);
mk('circle',{cx:GX,cy:GY,r:14,class:'ink'},gg);face(gg,GX-200,GY+50,'loss',0);face(gg,GX+200,GY+50,'gain',1);
const GN=txt(gg,'7',{x:GX,y:GY+80,'font-size':60,'text-anchor':'middle',class:'d'});
for(let i=0;i<10;i++)mk('circle',{cx:170+i*60,cy:230,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rng'));
const LN=[],PL=[];for(let i=0;i<3;i++){const y=520+i*80;LN.push(mk('line',{x1:170,y1:y,x2:170,y2:y,stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('krs')));
  const g=mk('g',{},$('krs'));mk('circle',{cx:620,cy:y-8,r:24,class:'gain'},g);txt(g,'#',{x:620,y:y+2,'font-size':28,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'});PL.push(g)}
fig($('skp'),900,420,36,'ink');