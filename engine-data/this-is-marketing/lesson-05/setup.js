const P=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const zig=(x1,y1,x2,y2,a,n)=>{const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L;let d='M'+x1+' '+y1;for(let i=1;i<n;i++){const s=i/n,o=a*(i%2?1:-1);d+='L'+(x1+dx*s+nx*o).toFixed(1)+' '+(y1+dy*s+ny*o).toFixed(1)}return d+'L'+x2+' '+y2};
const chip=(g,x,y,w,s,c)=>{const e=mk('g',{},g);mk('rect',{x:x,y:y,width:w,height:52,rx:26,fill:'var(--stage)',stroke:c,'stroke-width':4},e);const tx=mk('text',{x:x+w/2,y:y+34,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:'+c},e);tx.textContent=s;return e};
P($('stuck'),1240,551,26,'ink');
P($('sitter'),380,414,30,'ink');
const RK=['RISK','EFFORT','LOOKING FOOLISH'].map((s,i)=>chip($('rk'),720,540+i*64,360,s,'var(--loss)'));
P($('pA'),400,451,26,'ink');P($('pB'),1240,331,26,'gain');
P($('walk'),720,518,22,'gain');
const LD=[300,392,484,576,668,760].map((y,i)=>mk('circle',{cx:380,cy:y-24,r:20,class:i===2?'gain':'ink'},$('rungs')));
P($('actL'),620,537,34,'ink');P($('actR'),980,537,34,'ink');
const LC=['MEETINGS','PURCHASES','CONVERSATIONS'].map((s,i)=>chip($('life'),260+i*380,752,320,s,'var(--ink)'));
[[335,520,'ink'],[445,460,'gain'],[555,560,'ink']].forEach(q=>P($('podp'),q[0],q[1]-84,20,q[2]));
mk('circle',{cx:1160,cy:430,r:120,fill:'none',stroke:'var(--gain)','stroke-width':6},$('ring'));
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('circle',{cx:1160+120*Math.cos(a),cy:430+120*Math.sin(a),r:24,class:'ink'},$('ring'))}
P($('qfig'),970,720,12,'gain');