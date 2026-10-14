const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const sP=(cx,cy,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const dr=(el,k)=>{el.style.strokeDashoffset=(1-k).toFixed(3)};
$('gstar0').setAttribute('d',sP(1380,260,40));$('gs1').setAttribute('d',sP(1330,330,26));$('gstar8').setAttribute('d',sP(1200,580,34));
$('star6').setAttribute('d',sP(1200,600,44));
fig($('sitter'),1290,520,28,'ink');
for(let i=0;i<7;i++)mk('path',{d:'M1000 '+(700-60*i)+'h140',class:'s-ink','stroke-width':6},$('rungs'));
fig($('climber'),1070,608,22,'ink');
[600,700,800].forEach(x=>fig($('team'),x,520,24,'ink'));
const FL=[];for(let i=0;i<12;i++)FL.push(mk('rect',{x:1010+((i*37)%5-2)*6,y:640-i*30,width:360,height:24,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('files')));
const ST=[];for(let i=0;i<11;i++)ST.push(mk('path',{d:sP(700+i*70,812,24),class:'gain'},$('stars')));
for(let r=0;r<4;r++)for(let c=0;c<3;c++){mk('rect',{x:250+c*76,y:410+r*70,width:48,height:44,fill:'var(--stage)','fill-opacity':.5},$('winA'));mk('rect',{x:630+c*76,y:410+r*70,width:48,height:44,fill:'var(--ink)','fill-opacity':.25},$('winB'))}
fig($('walker'),0,676,20,'gain');
const SPS=[[880,640],[1140,520],[1380,360]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:14,class:'gain'},$('stops')));