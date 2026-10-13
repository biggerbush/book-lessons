const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};

// title crowd with one empty seat
const SL=[];for(let i=0;i<7;i++){const a=-Math.PI/2+i*2*Math.PI/7;SL.push([1330+140*Math.cos(a),420+140*Math.sin(a)]);if(i<6)mk('circle',{cx:SL[i][0],cy:SL[i][1],r:30,class:'ink'},$('crowd'))}
mk('circle',{cx:1330,cy:420,r:56,class:'s-line',fill:'none','stroke-width':4},$('crowd'));
// Polgar home
const SP=[];[[430,530],[430,636],[430,742]].forEach((r,k)=>{for(let i=0;i<7;i++){const h=60+((i*5+k*3)%4)*10;SP.push(mk('rect',{x:352+i*23,y:r[1]-h-4,width:18,height:h,fill:i%3===1?'var(--gain)':'var(--ink)','fill-opacity':i%3===2?.45:1},$('spines')))}});
for(let r=0;r<8;r++)for(let c=0;c<8;c++)mk('rect',{x:677+c*22,y:578+r*22,width:22,height:22,fill:(r+c)%2?'var(--ink)':'var(--stage)',stroke:'var(--ink)','stroke-width':1},$('board'));
[[699,600,'gain'],[743,644,'gain'],[809,688,'ink'],[787,622,'ink']].forEach(q=>{mk('circle',{cx:q[0],cy:q[1],r:8,fill:q[2]==='gain'?'var(--gain)':'var(--line)',stroke:'var(--ink)','stroke-width':2},$('board'))});
const girls=[1060,1140,1220].map((x,i)=>{const g=mk('g',{},$('girls'));person(g,x,640+i*10,20,'gain');return g});
// three groups
for(let i=0;i<4;i++){const a=i*Math.PI/2+.5;mk('circle',{cx:360+55*Math.cos(a),cy:480+55*Math.sin(a),r:22,class:'ink'},$('gd0'))}
for(let i=0;i<24;i++){mk('circle',{cx:800+(i%6-2.5)*44,cy:480+(Math.floor(i/6)-1.5)*48,r:15,class:'ink'},$('gd1'))}
// the close: network
const FR=[];for(let i=0;i<10;i++){const a=i*2*Math.PI/10+.3;const x=560+290*Math.cos(a),y=510+290*Math.sin(a);mk('circle',{cx:x,cy:y,r:14,fill:'var(--muted)','fill-opacity':.45},$('net'))}
for(let i=0;i<6;i++){const a=i*Math.PI/3-.2;const x=560+170*Math.cos(a),y=510+170*Math.sin(a);mk('path',{d:'M560 510L'+x.toFixed(0)+' '+y.toFixed(0),class:'s-line','stroke-width':4},$('net'));FR.push(mk('circle',{cx:x,cy:y,r:28,class:'ink'},$('net')))}
// Asch room
const bub=[];for(let i=0;i<7;i++){const x=760+i*106,g=mk('g',{},$('room'));person(g,x,560,24,i===6?'gain':'ink');
  const b=mk('g',{},$('room'));mk('rect',{x:x-34,y:420,width:68,height:60,rx:12,fill:'var(--stage)',stroke:i===6?'var(--gain)':'var(--ink)','stroke-width':4},b);
  const tx=mk('text',{x:x,y:462,'font-size':34,'text-anchor':'middle',class:'d'},b);tx.textContent=i===6?'B?':'B';bub.push(b)}
// powerful: fans looking up
for(let i=0;i<6;i++){const x=180+i*80;const g=mk('g',{},$('fans'));person(g,x,650,18,'ink');mk('path',{d:'M'+x+' 630L1170 260',class:'s-line','stroke-width':2,'stroke-dasharray':'6 8'},$('looks'))}
// join
const RN=[[380,430],[480,410],[580,440],[420,520],[540,520]];RN.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:26,class:'gain'},$('runners')));
const RD=[[960,420],[1240,420],[960,610],[1240,610],[1100,380]];RD.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:24,class:'gain'},$('readers')));