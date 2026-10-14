const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
for(let i=0;i<5;i++){const a=-Math.PI*(5/6)+i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1330+90*c).toFixed(0)+' '+(400+90*s).toFixed(0)+'L'+(1330+140*c).toFixed(0)+' '+(400+140*s).toFixed(0),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
fig($('pair'),380,330,36,'ink');fig($('pair'),800,330,36,'ink');
const WP=[0,1,2,3,4,5].map(i=>{const a=i*Math.PI/3-Math.PI/2;return[1220+160*Math.cos(a),400+160*Math.sin(a)]});
const WL=[];WP.forEach((a,i)=>WP.forEach((b,j)=>{if(j>i)WL.push(mk('path',{d:'M'+a[0].toFixed(0)+' '+a[1].toFixed(0)+'L'+b[0].toFixed(0)+' '+b[1].toFixed(0),class:'s-line','stroke-width':3},$('web')))}));
const WN=WP.map(q=>mk('circle',{cx:q[0],cy:q[1],r:22,class:'ink'},$('web')));
fig($('joe'),300,430,30,'ink');fig($('part'),600,430,30,'ink');
const tk=(g,x,y,w,h)=>{mk('rect',{x:x,y:y,width:w,height:h,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+(x+w*.25)+' '+y+'v'+h,stroke:'var(--ink)','stroke-width':3,'stroke-dasharray':'5 5'},g);return g};
tk($('rt'),250,320,100,44);
const TA=[0,1,2].map(i=>tk(mk('g',{},$('tA')),940,630-i*50,160,40));
const TB=[0,1,2,3,4,5].map(i=>tk(mk('g',{},$('tB')),1240,630-i*50,160,40));
fig($('mem'),300,440,34,'ink');fig($('trav'),720,440,34,'ink');
for(let i=0;i<5;i++){const a=i*2*Math.PI/5;mk('circle',{cx:(13*Math.cos(a)).toFixed(1),cy:(-6+13*Math.sin(a)).toFixed(1),r:10,class:'gain'},$('petals'))}
const CO=[0,1,2].map(()=>mk('circle',{cx:410,cy:420,r:9,class:'gain'},$('coins')));
fig($('boy'),260,470,26,'ink');fig($('cia'),1340,430,36,'ink');
const CB=[0,1].map(()=>{const g=mk('g',{},$('cbars'));mk('rect',{x:-35,y:-20,width:70,height:40,rx:5,class:'ink'},g);mk('path',{d:'M-12 -20v40M12 -20v40',stroke:'var(--stage)','stroke-width':3},g);return g});
for(let i=0;i<10;i++)fig($('stuF'),150+i*56,245,14,'ink');
const CL=[0,1,2,3,4,5,6].map(i=>mk('ellipse',{cx:600+i*70,cy:450,rx:40,ry:i%2?8:18,fill:'none',stroke:'var(--ink)','stroke-width':8},$('chain')));