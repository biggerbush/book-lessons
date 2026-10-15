const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
fig($('qbp'),350,560,22,'loss');fig($('impp'),1250,560,22,'loss');
for(let i=0;i<5;i++){const y=340+i*54;mk('rect',{x:168,y:y-22,width:26,height:26,fill:'none',stroke:'var(--ink)','stroke-width':4},$('plines'));mk('path',{d:'M212 '+(y-9)+'H410',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},$('plines'))}
const HA=[80,180,280,380],HE=[300,320,340,360],BA=[],BE=[];
[720,920,1120,1320].forEach((x,i)=>{BA.push(mk('rect',{x:x-75,y:680,width:70,height:0,class:'loss'},$('bars')));BE.push(mk('rect',{x:x+5,y:680,width:70,height:0,fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-dasharray':'10 8'},$('bars')));const tx=mk('text',{x:x,y:716,'font-size':20,'text-anchor':'middle',class:'m'},$('bars'));tx.textContent=['LOWEST','LOW','HIGH','HIGHEST'][i]});
const bz=(s,a)=>{const q=1-s;return q*q*q*a[0]+3*q*q*s*a[1]+3*q*s*s*a[2]+s*s*s*a[3]};
fig($('clim'),0,-62,12,'gain');
const QM=[[-34,-70],[30,-84],[-6,-104]].map(d=>{const e=mk('text',{x:d[0],y:d[1],'font-size':30,class:'d','text-anchor':'middle',style:'fill:var(--loss)'},$('clim'));e.textContent='?';return e});
fig($('hallap'),340,430,46,'gain');
const PX=[180,360,540,720,900,1080],HY=[690,680,650,580,470,400];
[[300,300,305,310,320,330],[380,400,420,450,480,500],[450,470,500,520,540,560]].forEach(a=>mk('path',{d:'M'+a.map((y,i)=>PX[i]+' '+y).join('L'),fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('others')));
const scr=(x,y,w,a)=>{let d='M'+x+' '+y;for(let i=0;i<w;i+=20)d+='q10 '+(i%40?a:-a)+' 20 0';return d};
const SW={fill:'none','stroke-width':5,'stroke-linecap':'round'};
for(let x=240;x<=1360;x+=80)mk('circle',{cx:x,cy:220,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
const BEL=mk('path',Object.assign({d:scr(240,340,1100,7),stroke:'var(--ink)',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},SW),$('belg'));
[520,580].forEach(y=>mk('path',Object.assign({d:scr(240,y,480,6),stroke:'var(--ink)'},SW),$('lcl')));
[520,580,640].forEach((y,i)=>mk('path',Object.assign({d:scr(840,y,400,i===2?14:6),stroke:i===2?'var(--loss)':'var(--ink)'},SW),$('rcl')));