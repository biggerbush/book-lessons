const fig=(g,x,y,r,c)=>{const G=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},G);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},G);return G};
const dr=(el,k)=>{el.setAttribute('stroke-dasharray','1 1');el.setAttribute('stroke-dashoffset',(1-k).toFixed(3))};
const TC=[];for(let i=0;i<6;i++)TC.push(mk('ellipse',{cx:1290,cy:500-i*22,rx:70,ry:14,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':4},$('tcoins')));
fig($('hppl'),260,450,34,'ink');fig($('hppl'),470,450,34,'ink');
for(let i=0;i<5;i++)mk('ellipse',{cx:150,cy:580-i*18,rx:28,ry:9,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':3},$('hppl'));
fig($('hhel'),680,450,34,'gain');
fig($('gupi'),0,0,24,'ink');
fig($('f3me'),360,411,26,'ink');[800,900,1000].forEach(x=>fig($('f3fr'),x,216,20,'ink'));fig($('f3hf'),1360,411,26,'ink');
fig($('m4p'),230,400,30,'ink');
// Ponzi pyramid (built bottom-up), then collapses into a tidy rubble heap inside the panel
const PT=[[900,662,0],[1012,662,0],[1124,662,0],[1236,662,0],[956,596,-6],[1068,598,5],[1180,596,-4],[1292,598,7],[1348,662,0],[1124,528,12]];
const PY=[];for(let r=0;r<4;r++)for(let j=0;j<4-r;j++){const x=1170-((4-r)*108-8)/2+j*108,y=662-r*64,i=PY.length;
  PY.push([mk('rect',{x:x,y:y,width:100,height:56,rx:6,class:'loss',stroke:'var(--stage)','stroke-width':3},$('pyr')),x,y,i,PT[i]])}
const RK=[];for(let i=0;i<5;i++)RK.push(mk('rect',{x:1120+i*70,y:510-i*45,width:50,height:50+i*45,rx:6,class:'loss'},$('risk')));
fig($('runi'),0,0,20,'gain');
const BR=[120,230,310,380,430,470].map((h,i)=>{const x=260+i*200,c=i?'ink':'gain',o=mk('g',{opacity:i<2?1:(1-(i-1)*.13).toFixed(2)},$('bars6')),g=mk('g',{},o);
  mk('rect',{x:x-60,y:800-h,width:120,height:h,rx:6,class:c,'fill-opacity':i<2?1:.5},g);fig(g,x,800-h-76,18,c);return g});
for(let i=0;i<6;i++)mk('ellipse',{cx:0,cy:-16-i*20,rx:70,ry:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('coins7'));
const CHP=['REPUTATION','FREEDOM','FAMILY','LOVED ONES'].map((s,i)=>{const g=mk('g',{},$('chips'));mk('rect',{x:-110,y:-44*(i+1),width:220,height:38,rx:19,class:'gain'},g);
  const tx=mk('text',{x:0,y:-44*(i+1)+26,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=s;return g});