const tx=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};
const fig=(g,x,y,r,f)=>[mk('circle',{cx:x,cy:y,r:r,fill:f},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)];
const row=(g,x0,y,n,st,w)=>{const a=[];for(let i=0;i<n;i++){const x=x0+i*st;a.push(mk('rect',{x:x,y:y,width:w,height:70,rx:4,fill:'var(--line)'},g));mk('rect',{x:x+w/2-7,y:y+46,width:14,height:24,fill:'var(--stage)'},g);[0,1].forEach(j=>mk('rect',{x:x+8+j*(w-24),y:y+14,width:8,height:10,fill:'var(--stage)'},g))}return a};
const RA=row($('rowA'),170,700,8,70,44),RB=row($('rowB'),890,700,8,70,44),RC=row($('rowC'),120,700,14,96,48);
const gearD=(r,n)=>{let d='';for(let k=0;k<n*4;k++){const a=k*Math.PI/(2*n),R=(k%4<2)?r+14:r;d+=(k?'L':'M')+(R*Math.cos(a)).toFixed(1)+' '+(R*Math.sin(a)).toFixed(1)}return d+'Z'};
const gearA={fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'};
const G1=mk('path',Object.assign({d:gearD(70,10)},gearA),$('gw')),G2=mk('path',Object.assign({d:gearD(46,7)},gearA),$('gw'));
for(let i=0;i<6;i++){const y=560-i*32;mk('rect',{x:670,y:y,width:180,height:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('coins'));mk('ellipse',{cx:760,cy:y,rx:90,ry:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('coins'))}
const rings=(g,cx,cy)=>{const R=[230,155,75].map(r=>mk('circle',{cx:cx,cy:cy,r:r,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g));
  [['WHAT',-185],['HOW',-108]].forEach(q=>tx(g,{x:cx,y:cy+q[1],'font-size':20,'text-anchor':'middle',class:'m'},q[0]));
  R.push(tx(g,{x:cx,y:cy+8,'font-size':20,'text-anchor':'middle',class:'m'},'WHY'));return R};
const R4=rings($('rg4'),420,500),R5=rings($('rg5'),420,500);
const arr=(g,c)=>({l:mk('line',{y1:500,y2:500,stroke:c,'stroke-width':8,'stroke-linecap':'round'},g),h:mk('path',{d:'M0 -18L26 0L0 18z',fill:c},g)});
const setA=(a,x1,x2,k)=>{a.l.setAttribute('x1',x1);a.l.setAttribute('x2',x2.toFixed(1));a.h.setAttribute('transform','translate('+x2.toFixed(1)+' 500)');const o=k>0?1:0;a.l.setAttribute('opacity',o);a.h.setAttribute('opacity',o)};
const A4=arr($('ai'),'var(--loss)'),A5=arr($('ao'),'var(--gain)');
// audience under the speech bubble, clear of the bottom-right corner
const PG=[0,1,2,3].map(i=>{const g=mk('g',{},$('ppl'));fig(g,1040+i*96,716,18,'var(--line)');return g});
const CHT=['WHAT · COMPUTERS','HOW · BEAUTIFUL, SIMPLE','WHY · THINK DIFFERENTLY'];
const chip=(g,x,y,s)=>{const c=mk('g',{},g);const r=mk('rect',{x:x,y:y,width:500,height:76,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},c);const e=tx(c,{x:x+30,y:y+47,'font-size':22,class:'m',style:'fill:var(--ink)'},s);return {c:c,r:r,e:e}};
const CL=CHT.map((s,i)=>chip($('chL'),150,300+i*100,s)),CR=CHT.map((s,i)=>chip($('chR'),870,300+i*100,s));
for(let i=0;i<11;i++)mk('circle',{cx:180,cy:250+i*54,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spir'));
const NR=[240,160,80].map((r,i)=>mk('circle',{cx:540,cy:520,r:r,fill:'none',stroke:i==2?'var(--gain)':'var(--ink)','stroke-width':6,'stroke-linecap':'round',pathLength:100,'stroke-dasharray':'100 100','stroke-dashoffset':100},$('nr')));
let sd='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,R=i%2?22:50;sd+=(i?'L':'M')+(540+R*Math.cos(a)).toFixed(1)+' '+(520+R*Math.sin(a)).toFixed(1)}
mk('path',{d:sd+'Z',fill:'var(--gain)'},$('st'));