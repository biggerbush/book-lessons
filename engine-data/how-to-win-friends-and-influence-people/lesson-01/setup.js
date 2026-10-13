const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const hat=(g,x,y,r)=>{mk('rect',{x:x-r*.7,y:y-r*2.75,width:r*1.4,height:r*1.75,class:'ink'},g);mk('rect',{x:x-r*1.25,y:y-r*1.1,width:r*2.5,height:r*.3,class:'ink'},g)};
fig($('tp'),1340,540,36,'ink');
fig($('you1'),380,420,50,'ink');
fig($('cwf'),1180,420,50,'ink');
for(let c=0;c<3;c++)for(let r=0;r<5;r++)mk('rect',{x:257+c*55,y:340+r*60,width:35,height:40,fill:c===1&&r===2?'var(--gain)':'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('win'));
for(let i=0;i<4;i++)mk('path',{d:'M720 '+(320+i*45)+'q20-14 40 0t40 0t40 0'+(i<3?'t40 0':''),fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},$('hw'));
fig($('crw'),1273,380,40,'ink');
for(let i=0;i<6;i++)mk('path',{d:'M'+(1138+i*54)+' 270V640',class:'s-ink','stroke-width':8},$('bars'));
fig($('vic'),900,420,46,'ink');
const sq=(g,cls)=>[[-36,-12],[0,-12],[36,-12],[-36,18],[0,18],[36,18]].forEach(q=>mk('rect',{x:q[0]-12,y:q[1]-12,width:24,height:24,rx:4,class:cls},g));
sq($('leeS'),'loss');sq($('meaS'),'gain');
fig($('lin'),1120,430,40,'ink');hat($('lin'),1120,430,40);
fig($('lin5'),780,430,40,'ink');hat($('lin5'),780,430,40);
for(let i=0;i<6;i++){const x=1000+i*68;mk('path',{d:'M'+x+' 435v50M'+(x-14)+' 450h28',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('crs'))}
const RS=[[1030,440],[1100,410],[1170,440]].map(q=>{const g=mk('g',{},$('rsn'));mk('circle',{cx:q[0],cy:q[1],r:26,class:'gain'},g);mk('path',{d:'M'+(q[0]-11)+' '+q[1]+'l8 9 15-17',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
for(let i=0;i<5;i++)mk('circle',{cx:725+i*38,cy:310,r:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('nbl'));
const NL=[0,1,2].map(i=>mk('path',{d:'M730 '+(370+i*36)+'h'+(i===2?80:140),class:'s-ink','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':'140 140','stroke-dashoffset':140},$('nbl')));
const CD=[];for(let i=0;i<7;i++)CD.push(mk('rect',{x:1270+(i%4)*50,y:260+Math.floor(i/4)*54,width:42,height:44,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('cal')));