const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const TD=[0,1,2,3].map(i=>{const a=-Math.PI/2+i*Math.PI/2;return mk('circle',{cx:1290+140*Math.cos(a),cy:420+140*Math.sin(a),r:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('tdots'))});
[280,330,380].forEach(x=>fig($('brunch'),x,330,14,'ink'));
fig($('you'),1000,430,50,'ink');
const TY=[1230,1290,1350].map(x=>mk('circle',{cx:x,cy:315,r:12,class:'ink'},$('draft')));
fig($('spk'),260,520,40,'ink');
const FL=[1260,1310,1360].map(x=>mk('circle',{cx:x,cy:440,r:16,fill:'var(--muted)'},$('float')));
const CP=[['Their plans','Their guest list','Their reasons'],['Your words','Your time','Your next move']].map((L,s)=>L.map((w,i)=>{const g=mk('g',{},$('side'+s)),x=s?900:180,y=330+i*120;
  mk('rect',{x:x,y:y,width:520,height:90,rx:45,fill:s?'var(--gain)':'var(--stage)',stroke:s?'var(--gain)':'var(--loss)','stroke-width':5},g);
  tx(g,x+44,y+58,w,{class:'d5','font-size':36,style:s?'fill:var(--on-gain)':''});return g}));
let CELL;for(let r=0;r<3;r++)for(let c=0;c<4;c++){const e=mk('rect',{x:730+c*37,y:476+r*40,width:28,height:30,rx:4,fill:r===1&&c===3?'var(--gain)':'var(--line)'},$('cal'));if(r===1&&c===3)CELL=e}
[1213,1273,1333].forEach((x,i)=>fig($('ppl'),x,450,18,i===1?'gain':'ink'));
const ST=['PAUSE','LET THEM','SORT','LET ME'].map((s,i)=>{const g=mk('g',{},$('steps')),x=400+i*200;
  mk('rect',{x:x,y:300,width:180,height:100,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);tx(g,x+90,358,s,{class:'m','font-size':20,'text-anchor':'middle'});return g});
const RP=['PAUSE','LET THEM','SORT WHAT’S YOURS','LET ME'].map((s,i)=>{const g=mk('g',{},$('rt')),x=120+i*350,l=i===3;
  mk('rect',{x:x,y:680,width:310,height:80,rx:40,fill:l?'var(--gain)':'var(--stage)',stroke:l?'var(--gain)':'var(--ink)','stroke-width':5},g);
  tx(g,x+155,728,s,{class:'m','font-size':22,'text-anchor':'middle',style:l?'fill:var(--on-gain)':''});
  if(i<3)mk('path',{d:'M'+(x+316)+' 720h26m-10-10 10 10-10 10',fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},g);return g});