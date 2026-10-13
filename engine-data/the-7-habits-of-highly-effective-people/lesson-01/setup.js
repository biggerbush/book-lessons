const fig=(g,x,y,r,f)=>{const a=f?{fill:f}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g);return g};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const SPN=[];for(let i=0;i<24;i++){const h=120+(i*37%5)*18;SPN.push(mk('rect',{x:140+i*54,y:518-h,width:40,height:h,rx:4,stroke:'var(--ink)','stroke-width':4},$('shelf')))}
for(let i=0;i<5;i++)mk('path',{d:'M150 '+(360+i*80)+'H690',class:'s-line','stroke-width':5},$('grid'));
for(let i=0;i<6;i++)mk('path',{d:'M'+(180+i*100)+' 340V720',class:'s-line','stroke-width':5},$('grid'));
mk('path',{d:'M150 700L690 380',class:'s-line','stroke-width':9},$('grid'));
[170,410,1010,1250].forEach(x=>mk('rect',{x:x,y:260,width:180,height:100,rx:14,fill:'var(--stage)',stroke:'var(--line)','stroke-width':5},$('win')));
[220,330,1200,1320].forEach(x=>fig($('pax'),x,470,24,'var(--muted)'));fig($('pax'),1080,470,24,'var(--ink)');
fig($('dad'),600,465,26,'var(--ink)');
// each child runs in its own lane so they never overlap
const KX=[710,810,910];
const KID=[0,1,2].map(i=>{const g=mk('g',{},$('kids'));fig(g,0,560,16,'var(--loss)');tx(g,0,528,'!',{'font-size':30,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'});return g});
fig($('parents'),220,430,30,'var(--ink)');fig($('parents'),330,430,30,'var(--ink)');fig($('son'),760,480,22);
const LF=[80,150,220,290].map((h,i)=>{const x=1220+(i%2?-26:26),y=700-h;return mk('ellipse',{cx:x,cy:y,rx:28,ry:12,fill:'var(--gain)',transform:'rotate('+(i%2?30:-30)+' '+x+' '+y+')'},$('plant'))});
const ARW=[0,1,2,3,4,5].map(i=>mk('path',{d:'M822 500h30m-12-12 12 12-12 12',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('arw')));
const LG=['How you see','Your behavior','Your results'].map((s,i)=>{const g=mk('g',{},$('legend')),y=400+i*100;mk('circle',{cx:930,cy:y-12,r:26,class:'gain'},g);tx(g,930,y-3,String(i+1),{class:'d','font-size':26,'text-anchor':'middle',style:'fill:var(--on-gain)'});tx(g,980,y,s,{class:'d5','font-size':40});return g});
[0,1,2].forEach(i=>{const g=$('k'+i),x=120+i*470,r=mk('rect',{x:x,y:240,width:420,height:470,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);g.insertBefore(r,g.firstChild);tx(g,x+30,290,'STEP '+(i+1),{class:'m','font-size':20})});
fig($('fz'),330,400,34,'var(--loss)');fig($('fg'),1250,400,22,'var(--gain)');