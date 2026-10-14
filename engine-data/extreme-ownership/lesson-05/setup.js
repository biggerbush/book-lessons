const fig=(g,x,y,r,col)=>{const h=mk('g',{fill:col},g);mk('circle',{cx:x,cy:y,r:r},h);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},h);return h};
const T=(g,x,y,s,c,fs,an)=>{const e=mk('text',{x:x,y:y,class:c,'font-size':fs,'text-anchor':an||'start'},g);e.textContent=s;return e};
const TC=[];for(let i=0;i<10;i++){const r=Math.floor(i/4),x=1150+(i%4)*76+(i*37%20)+(r===2?76:0),y=480-r*62,a=(i*47%30)-15,g=mk('g',{},$('tc'));
  mk('rect',{x:-35,y:-23,width:70,height:46,rx:6,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);T(g,0,11,'!','d',30,'middle').setAttribute('style','fill:var(--loss)');TC.push([g,x,y,a])}
// buildings sit only in the gaps between the figures
[[340,520,170],[866,300,50],[1340,240,130]].forEach(b=>mk('rect',{x:b[0],y:b[1],width:b[2],height:688-b[1],fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},$('city')));
const star=(cx,cy,R)=>{let d='';for(let i=0;i<16;i++){const a=i*Math.PI/8,rr=i%2?R*.4:R;d+=(i?'L':'M')+(cx+rr*Math.cos(a)).toFixed(0)+' '+(cy+rr*Math.sin(a)).toFixed(0)}return d+'Z'};
const BU=[[620,380],[1400,180]].map(q=>mk('path',{d:star(q[0],q[1],42),class:'loss'},$('gun0')));
fig($('inst'),240,580,24,'var(--ink)');
const LD=fig($('ldr'),990,580,24,'var(--ink)');
[1130,1210,1290].forEach(x=>fig($('crew'),x,600,20,'var(--ink)'));
fig($('calm'),200,620,22,'var(--gain)');
const CP=[0,1,2,3,4,5].map(i=>fig($('calm'),340+i*105,624,20,'var(--ink)'));
const SI=[[-40,420,-25],[120,360,18],[30,520,-8],[160,470,30],[-20,600,-15]];
const IT=SI.map(()=>{const g=mk('g',{},$('items'));return [g,mk('rect',{x:0,y:-16,width:360,height:32,rx:16},g),mk('circle',{cx:-40,cy:0,r:16},g)]});
fig($('st'),0,0,24,'var(--gain)');
[160,60,230,110].forEach(d=>{const a=d*Math.PI/180;mk('rect',{x:(408+160*Math.cos(a)).toFixed(0),y:(468+160*Math.sin(a)).toFixed(0),width:24,height:24,class:'loss'},$('others'))});
const HL=[];[-90,-18,54,126,198].forEach(d=>{const a=d*Math.PI/180,x=1120+180*Math.cos(a),y=500+180*Math.sin(a);
  HL.push(mk('path',{d:'M1120 490L'+(1120+(x-1120)*.7).toFixed(0)+' '+(490+(y+30-490)*.7).toFixed(0),class:'s-gain','stroke-width':4,'stroke-dasharray':'8 8'},$('hl')));fig($('hp'),x,y,20,'var(--ink)')});
fig($('hp'),1120,470,24,'var(--gain)');
[220,400,580].forEach(x=>fig($('ideas'),x,640,16,'var(--ink)'));
const ID=[220,400,580].map(x=>mk('circle',{cx:x,cy:598,r:8,class:'gain'},$('ideas')));
const AR=[0,1,2,3,4].map(i=>{const y=290+i*60;mk('circle',{cx:800,cy:y,r:14,class:'gain'},$('arw'));return mk('path',{d:'M822 '+y+'L1168 410',class:'s-gain','stroke-width':5,'stroke-dasharray':'14 12',fill:'none'},$('arw'))});
const CD=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('cards'));return [mk('rect',{x:120+i*190,y:240,width:160,height:120,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g),T(g,200+i*190,318,String(i+1),'d',56,'middle')]});
fig($('tun'),390,600,22,'var(--ink)');
mk('path',{d:'M1300 230v540M1420 230v540',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('lrg'));
for(let y=260;y<=760;y+=60)mk('path',{d:'M1300 '+y+'h120',class:'s-line','stroke-width':5},$('lrg'));
[270,450,630].forEach((y,i)=>fig($('lpp'),1360,y,20,i===1?'var(--gain)':'var(--ink)'));
for(let c=1;c<7;c++)mk('path',{d:'M'+(120+76*c)+' 286V610',class:'s-line','stroke-width':2},$('grid'));
for(let r=1;r<4;r++)mk('path',{d:'M120 '+(286+81*r)+'h532',class:'s-line','stroke-width':2},$('grid'));
const MK=[[1,0],[4,1],[2,3]].map((c,i)=>{const g=mk('g',{},$('marks')),x=158+76*c[0],y=326+81*c[1];mk('circle',{cx:x,cy:y,r:26,class:'gain'},g);T(g,x,y+10,String(i+1),'d',28,'middle').setAttribute('style','fill:var(--on-gain)');return g});
// project pile: three separate stacks of outlined folders with gaps; two tops will move to DONE
const FP=[];[[800,4],[980,3],[1160,4]].forEach(([x,n],j)=>{for(let l=0;l<n;l++)FP.push({x:x+((l*7+j*5)%15)-7,y:596-l*32,m:-1,i:FP.length})});
FP[3].m=0; FP[10].m=1;
const FD=FP.filter(f=>f.m<0).concat(FP.filter(f=>f.m>=0)).map(f=>{f.el=mk('path',{d:'M0 -6h44l6 6h100v22h-150z',stroke:'var(--ink)','stroke-width':3,'stroke-linejoin':'round'},$('fold'));return f});