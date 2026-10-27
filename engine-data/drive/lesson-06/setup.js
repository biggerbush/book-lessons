const fig=(g,x,y,r,a)=>{a=typeof a==='string'?{class:a}:a;return [mk('circle',Object.assign({cx:x,cy:y,r:r},a),g),mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)]};
const TF=fig($('t_fig'),1330,330,26,'ink');
const TK=[0,1,2].map(i=>{const g=mk('g',{},$('t_ticks')),x=1240+i*90;mk('circle',{cx:x,cy:570,r:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:'M'+(x-10)+' 570l7 8 13-15',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(340+122*c).toFixed(1)+' '+(480+122*s).toFixed(1)+'L'+(340+138*c).toFixed(1)+' '+(480+138*s).toFixed(1),stroke:'var(--ink)','stroke-width':i%3?3:6,'stroke-linecap':'round'},$('ticks'))}
const BL=[];for(let i=0;i<7;i++)BL.push(mk('rect',{x:1180,y:656-i*52,width:260,height:44,rx:8,class:'gain','fill-opacity':(.4+i*.1).toFixed(2)},$('stk')));
[[200,400],[290,400],[380,400],[245,520],[335,520]].forEach(q=>{fig($('grads'),q[0],q[1],20,'ink');mk('path',{d:'M'+(q[0]-28)+' '+(q[1]-22)+'l28-12 28 12-28 12z',class:'ink'},$('grads'))});
[[450,620],[560,650],[670,620]].forEach(q=>fig($('mem'),q[0],q[1],18,'ink'));
fig($('outp'),780,560,18,'loss');
fig($('selfp'),700,330,20,'ink');fig($('givep'),700,600,20,'gain');fig($('recvp'),830,600,20,'ink');
fig($('notep'),1170,500,18,{fill:'var(--on-gain)'});
const DR=[0,1,2].map(()=>mk('circle',{r:9,class:'ink'},$('drops')));