const person=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const tx=(g,x,y,s,c,str,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:c},a||{}),g);e.textContent=str;return e};
const cards=[2,7,3,9,4].map(v=>{const g=mk('g',{},$('cards'));mk('rect',{x:-50,y:-70,width:100,height:140,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);tx(g,0,18,52,'d',''+v,{'text-anchor':'middle',style:'fill:var(--loss)'});return g});
const chips=[];for(let i=0;i<12;i++)chips.push(mk('ellipse',{cx:1220,cy:600-i*16,rx:46,ry:14,fill:i%2?'var(--gain)':'var(--ink)',stroke:'var(--stage)','stroke-width':3},$('chips4')));
person($('jm'),410,370,40,'ink');
person($('climb'),0,-76,18,'gain');
[[900,614],[1064,544],[1228,474]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:16,class:'loss'},$('rocks')));
const sits=['STUCK IN TRAFFIC','REJECTED FOR A JOB','TREATED UNFAIRLY'].map((s,i)=>{const g=mk('g',{},$('sits'));mk('rect',{x:120+i*460,y:240,width:440,height:80,rx:40,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);tx(g,340+i*460,288,24,'m',s,{'text-anchor':'middle'});return g});
const me=person($('me7'),800,440,22,'ink');