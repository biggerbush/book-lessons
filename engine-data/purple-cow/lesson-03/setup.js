const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
fig($('fr1p'),920,470,28,'ink');fig($('fr1p'),1380,470,28,'ink');
const DR=[[500,140],[600,80],[770,170]].map(d=>[mk('path',{class:'s-loss','stroke-width':10,'stroke-linecap':'round',fill:'none'},$('drp')),d[0],d[1]]);
fig($('custp'),300,420,36,'ink');
const SLT=[];for(let r=0;r<3;r++)for(let i=0;i<10;i++){const x=660+i*82,yb=[390,530,670][r];
  const o=mk('rect',{x:x,y:yb-84,width:56,height:84,class:'ink','fill-opacity':.3},$('slots'));
  const j=mk('rect',{x:x,y:yb-90,width:56,height:90,rx:12,class:'gain'},$('slots'));SLT.push([o,j,(i*7+r*3)%30])}
const RG=[0,1,2].map(()=>mk('circle',{cx:1360,cy:560,fill:'none',stroke:'var(--gain)','stroke-width':4},$('rings')));
const D5=[];for(let i=0;i<6;i++){const a=i*Math.PI/3+.5;D5.push(mk('circle',{cx:(1360+118*Math.cos(a)).toFixed(0),cy:(560+110*Math.sin(a)).toFixed(0),r:14,class:'ink'},$('dots5')))}
fig($('pp6c'),620,480,30,'ink');fig($('frd'),1380,480,30,'ink');
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M'+(1360+52*Math.cos(a)).toFixed(0)+' '+(476+52*Math.sin(a)).toFixed(0)+'L'+(1360+76*Math.cos(a)).toFixed(0)+' '+(476+76*Math.sin(a)).toFixed(0),class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('spk'))}
for(let i=0;i<4;i++)mk('circle',{cx:720+i*53,cy:340,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('pad'));
const PL=[180,170,180,110].map((w,i)=>[mk('path',{class:'s-gain','stroke-width':8,'stroke-linecap':'round',fill:'none'},$('pad')),w,410+i*52]);