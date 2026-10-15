const fig=(g,x,y,r,col)=>{const h=mk('g',{fill:col},g);mk('circle',{cx:x,cy:y,r:r},h);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},h);return h};
const arcs=(g,cx,cy,rs,d,col)=>rs.map(r=>{const c=Math.cos(.44)*r,s=Math.sin(.44)*r,x=(cx-d*c).toFixed(1);return mk('path',{d:'M'+x+' '+(cy-s).toFixed(1)+'A'+r+' '+r+' 0 0 '+(d>0?0:1)+' '+x+' '+(cy+s).toFixed(1),fill:'none',stroke:col,'stroke-width':6,'stroke-linecap':'round'},g)});
const fr=(a,b,f)=>a+(b-a)*f;
const pulse=(L,k,sp)=>L.forEach((a,i)=>a.setAttribute('opacity',(k*(.3+.7*(.5+.5*Math.sin(t*sp-i*1.2)))).toFixed(2)));

fig($('t_who'),1370,440,44,'var(--ink)');
const TA=arcs($('t_arcs'),1370,440,[80,105,130],1,'var(--gain)');

fig($('a_pair'),300,440,42,'var(--ink)');
const AR=fig($('a_pair'),1240,440,42,'var(--ink)');
const AW=[400,470,540].map(y=>{const g=mk('g',{},$('a_arr'));mk('path',{d:'M0 0H110M86-20l24 20-24 20',fill:'none',stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},g);g._y=y;return g});
const WR=[];for(let j=0;j<6;j++){const g=mk('g',{},$('a_wall')),y=680-56*(j+1);(j%2?[[960,100]]:[[960,50],[1010,50]]).forEach(b=>mk('rect',{x:b[0],y:y,width:b[1],height:56,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g));WR.push(g)}

fig($('m_mf'),380,420,46,'var(--ink)');
[[680,320],[920,320],[800,260]].forEach(([x,y])=>{mk('path',{d:'M'+x+' '+(y-28)+'l30 52h-60z',fill:'var(--loss)'},$('m_tri'));mk('text',{x:x,y:y+18,'font-size':28,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'},$('m_tri')).textContent='!'});
[1180,1340].forEach(x=>{const g=$('m_nf');fig(g,x,440,36,'var(--ink)');mk('rect',{x:x-44,y:320,width:88,height:56,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);[-20,0,20].forEach(d=>mk('circle',{cx:x+d,cy:348,r:6,fill:'var(--ink)'},g))});

fig($('d_momf'),520,430,44,'var(--ink)');
fig($('d_docf'),1080,430,44,'var(--ink)');
const DA=arcs($('d_arcs'),1080,430,[70,95,120],1,'var(--gain)');

fig($('f_inf'),1020,430,40,'var(--gain)');

fig($('v_f'),720,370,30,'var(--ink)');fig($('v_f'),880,370,30,'var(--gain)');
arcs($('v_e0'),720,370,[50,72],-1,'var(--ink)');
const VE=arcs($('v_e1'),880,370,[50,72],1,'var(--gain)');

for(let i=0;i<8;i++){const a=i*Math.PI/4-Math.PI/2,c=Math.cos(a),s=Math.sin(a);if(s>.5)continue;mk('path',{d:'M'+(1240+95*c).toFixed(1)+' '+(400+95*s).toFixed(1)+'L'+(1240+125*c).toFixed(1)+' '+(400+125*s).toFixed(1),stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('w_ry'))}