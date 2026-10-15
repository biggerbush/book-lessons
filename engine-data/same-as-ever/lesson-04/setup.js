const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-1.6*r)+' '+(y+3.6*r)+'v'+(-r)+'a'+(1.6*r)+' '+(1.6*r)+' 0 0 1 '+(3.2*r)+' 0v'+r+'z',class:cls},g)};
fig($('star0'),1300,500,30,'ink');
const cells=[];for(let r=0;r<5;r++)for(let c=0;c<4;c++){const g=mk('g',{},$('grid')),x=180+c*130,y=300+r*40;mk('rect',{x:x,y:y,width:130,height:40,fill:r?'var(--stage)':'var(--line)',stroke:'var(--ink)','stroke-width':2},g);mk('rect',{x:x+20,y:y+16,width:40+((r*3+c*5)%4)*15,height:8,fill:'var(--muted)'},g);cells.push(g)}
fig($('pA'),440,540,22,'ink');fig($('pB'),980,540,22,'ink');
[[220,560],[540,560],[290,470],[470,470]].forEach(q=>fig($('ppl'),q[0],q[1],20,'ink'));
for(let i=0;i<7;i++){const a=Math.PI*(1+i/6);mk('path',{d:'M'+(400+98*Math.cos(a)).toFixed(0)+' '+(330+98*Math.sin(a)).toFixed(0)+'L'+(400+122*Math.cos(a)).toFixed(0)+' '+(330+122*Math.sin(a)).toFixed(0),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
[[360,290,4],[420,272,5],[448,318,4],[352,326,5],[438,350,3],[392,262,3]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:'var(--muted)'},$('dust')));
[[230,488],[470,486],[505,489],[560,487],[245,485]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:3,fill:'var(--muted)'},$('dust')));
const WV=[0,1,2].map(i=>mk('path',{d:'M'+(950+i*40)+' '+(360-i*20)+'q'+(30+i*10)+' '+(60+i*20)+' 0 '+(120+i*40),class:'s-gain',fill:'none','stroke-width':6,'stroke-linecap':'round'},$('waves')));
const CR=[];for(let r=0;r<7;r++)for(let c=0;c<10;c++)CR.push(mk('circle',{cx:1090+c*40,cy:300+r*40,r:13,class:'ink'},$('crowd2')));
fig($('n0'),500,470,18,'ink');fig($('lisP'),1320,470,26,'gain');
const pulse=(id,cx,cy,k)=>$(id).setAttribute('transform','translate('+cx+' '+cy+') scale('+k.toFixed(3)+') translate('+(-cx)+' '+(-cy)+')');