const fig=(par,x,y,r,cls)=>{const g=mk('g',{class:cls},par);mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},g);return g};
const hd=(x,y,s)=>'M'+x+' '+(y+s*.9)+'C'+(x-s*1.3)+' '+(y+s*.1)+' '+(x-s*.9)+' '+(y-s*.9)+' '+x+' '+(y-s*.35)+'C'+(x+s*.9)+' '+(y-s*.9)+' '+(x+s*1.3)+' '+(y+s*.1)+' '+x+' '+(y+s*.9)+'Z';

fig($('tgirl'),1170,400,34,'ink');
for(let i=0;i<6;i++)mk('rect',{x:1282+(i%2)*72,y:280+Math.floor(i/2)*90,width:64,height:80,rx:8,fill:i%3===1?'var(--line)':'var(--gain)'},$('tgrid'));
const TH=[0,1,2].map(()=>mk('path',{d:hd(0,0,16),class:'gain'},$('thearts')));

[310,360,480,530].forEach(x=>fig($('ag'),x,470,16,'ink'));fig($('ag'),420,380,22,'gain');
for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/2;mk('circle',{cx:860+105*Math.cos(a),cy:470+105*Math.sin(a),r:20,class:'ink'},$('cm'))}

const FD=[];for(let i=0;i<3;i++){const y=240+i*190,g=mk('g',{},$('feed')),c=i===1?'gain':'ink';
  mk('rect',{x:165,y:y,width:250,height:170,rx:12,fill:'var(--line)'},g);mk('circle',{cx:290,cy:y+65,r:30,class:c},g);mk('path',{d:'M250 '+(y+150)+'a40 40 0 0 1 80 0z',class:c},g);FD.push(g)}
const TL=[];for(let i=0;i<120;i++)TL.push(mk('rect',{x:560+(i%20)*25,y:600+Math.floor(i/20)*25,width:20,height:20,rx:4,fill:i%4?'var(--line)':'var(--gain)'},$('tiles')));
const HT=[];for(let i=0;i<30;i++){const x=1190+(i%5)*58,y=340+Math.floor(i/5)*62;
  HT.push(i%3===2?mk('rect',{x:x-14,y:y-10,width:28,height:20,rx:6,class:'ink'},$('hts')):mk('path',{d:hd(x,y,16),class:'gain'},$('hts')))}

const SF=[400,510,620].map(x=>fig($('sfig'),x,330,24,'ink'));
for(let i=0;i<15;i++)mk('rect',{x:1110+(i%3)*105,y:310+Math.floor(i/3)*82,width:70,height:50,fill:'var(--line)'},$('win'));

fig($('bf'),200,320,26,'ink');fig($('bf'),380,320,26,'ink');
[600,670,740].forEach(x=>fig($('gf'),x,320,24,'ink'));const OUT=fig($('gf'),910,320,24,'ink');
[1180,1240,1300].forEach(x=>fig($('pf'),x,490,15,'ink'));
const GH=mk('g',{fill:'none',stroke:'var(--loss)','stroke-width':3,'stroke-dasharray':'5 5'},$('pf'));
mk('circle',{cx:1360,cy:490,r:15},GH);mk('path',{d:'M1337.5 553v-19.5a22.5 22.5 0 0 1 45 0v19.5z'},GH);

fig($('rf'),210,400,28,'ink');fig($('rf'),410,400,28,'gain');
const RG=[0,1,2].map(()=>mk('circle',{cx:310,cy:430,r:10,fill:'none',stroke:'var(--gain)','stroke-width':4},$('rings')));
const ND=[];[[0,1],[95,6],[175,10],[250,14]].forEach(([rr,n],k)=>{for(let i=0;i<n;i++){const a=i*2*Math.PI/n+k*.4;ND.push({x:840+rr*Math.cos(a),y:480+rr*Math.sin(a),d:rr,k:k,i:i})}});
const NE=mk('g',{},$('net')),ln=(a,b)=>mk('path',{d:'M'+a.x.toFixed(0)+' '+a.y.toFixed(0)+'L'+b.x.toFixed(0)+' '+b.y.toFixed(0),stroke:'var(--line)','stroke-width':3},NE);
ND.forEach((q,j)=>{if(!q.k)return;let b=null,bd=1e9;ND.forEach(o=>{if(o.k===q.k-1){const dd=(o.x-q.x)**2+(o.y-q.y)**2;if(dd<bd){bd=dd;b=o}}});ln(q,b);
  if(q.k>1)ln(q,ND[j+1<ND.length&&ND[j+1].k===q.k?j+1:j-q.i])});
const NC=ND.map(q=>mk('circle',{cx:q.x.toFixed(0),cy:q.y.toFixed(0),r:q.k?14:20},$('net')));
const SG=fig($('sf'),1240,260,22,'ink');SG.setAttribute('style','fill:var(--muted)');
mk('text',{x:1240,y:268,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--stage)'},$('sf')).textContent='?';
fig($('sf'),1400,470,28,'gain');
const EV=[0,1,2].map(()=>{const g=mk('g',{},$('env'));mk('rect',{x:-18,y:-13,width:36,height:26,rx:3,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':3},g);
  mk('path',{d:'M-18 -13L0 2L18 -13',fill:'none',stroke:'var(--loss)','stroke-width':3},g);return g});

fig($('k0f'),230,400,32,'ink');fig($('k0f'),420,420,26,'gain');
fig($('k2f'),1190,430,26,'ink');fig($('k2f'),1290,430,26,'gain');
fig($('qg'),1360,620,30,'gain');