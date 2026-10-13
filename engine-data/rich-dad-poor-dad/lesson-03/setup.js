const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const TB=[];for(let i=0;i<6;i++)TB.push(mk('rect',{x:1240,y:658-i*62,width:180,height:54,rx:8,class:'gain'},$('tcol')));
fig($('bkf'),300,330,40,'ink');mk('path',{d:'M300 392l-10 12 10 52 10-52z',fill:'var(--stage)'},$('bkf'));
fig($('yuf'),1100,330,44,'gain');
const FL=[];for(let i=0;i<8;i++){const g=mk('g',{},$('twr')),y=800-(i+1)*60;mk('rect',{x:180,y:y,width:240,height:56,class:'ink'},g);for(let w=0;w<3;w++)mk('rect',{x:200+w*76,y:y+14,width:48,height:28,fill:'var(--stage)'},g);FL.push(g)}
fig($('yo2f'),560,700,24,'ink');fig($('ownf'),860,320,36,'gain');
const BR=[60,100,140,180,220].map((h,i)=>[mk('rect',{x:1000+i*90,y:480,width:60,height:0,class:'gain'},$('bars')),h]);
fig($('krf'),270,450,34,'ink');
// students: three staggered rows, clear gaps between rows
const ST=[];for(let r=0;r<3;r++)for(let c=0;c<5;c++){const g=mk('g',{},$('stu'));fig(g,790+c*140+(r%2?70:0),480+r*110,16,'ink');ST.push(g)}
[400,650].forEach(y=>{mk('path',{d:'M140 '+y+'H980',stroke:'var(--line)','stroke-width':44},$('map'));mk('path',{d:'M140 '+y+'H980',stroke:'var(--stage)','stroke-width':3,'stroke-dasharray':'14 14'},$('map'))});
[360,760].forEach(x=>{mk('path',{d:'M'+x+' 230V820',stroke:'var(--line)','stroke-width':44},$('map'));mk('path',{d:'M'+x+' 230V820',stroke:'var(--stage)','stroke-width':3,'stroke-dasharray':'14 14'},$('map'))});
const CR=[389,639].map(y=>mk('rect',{x:140,y:y,width:40,height:22,rx:6,class:'ink'},$('cars')));
const LOT=[[360,400],[760,400],[360,650],[760,650]].map(([ix,iy])=>{const x=ix+30,y=iy-130;
  const r=mk('rect',{x:x,y:y,width:110,height:100,rx:8,fill:'var(--gain)','fill-opacity':0,stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 6'},$('lots'));
  const b=mk('g',{},$('lots'));mk('rect',{x:x+20,y:y+46,width:70,height:44,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},b);
  mk('path',{d:'M'+(x+25)+' '+(y+46)+'q15-40 30 0q15-40 30 0',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},b);return [r,b]});
fig($('dskf'),330,420,40,'ink');
const AB=[];for(let i=0;i<8;i++)AB.push(mk('rect',{x:920,y:730-i*62,width:260,height:54,rx:8,class:'gain'},$('ablk')));
const CN=[];for(let i=0;i<8;i++)CN.push([mk('circle',{cx:i%2?1160:1060,cy:590,r:22,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':3,opacity:0},$('cns')),790-Math.floor(i/2)*46]);
const CS=[];[6,8,10].forEach((n,s)=>{for(let j=0;j<n;j++)CS.push(mk('ellipse',{cx:220+s*120,cy:740-j*20,rx:50,ry:14,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':3},$('stk')))});
const FC=[];for(let i=0;i<5;i++)FC.push(mk('circle',{r:14,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':3},$('fcn')));
fig($('mirf'),1300,370,30,'gain');