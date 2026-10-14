const NUL=document.createElementNS('http://www.w3.org/2000/svg','g');
const Q=id=>$(id)||NUL;
const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
// title: buzzing thoughts
const DOT=[];for(let i=0;i<16;i++){const a=i*2.4,r=20+(i*37%70);DOT.push([1320+r*Math.cos(a),400+r*Math.sin(a),mk('circle',{r:9,class:'loss'},Q('l4buzz'))])}
// crowded desk
const PP=[];for(let i=0;i<9;i++){const x=180+(i%3)*165,y=530-Math.floor(i/3)*75,g=mk('g',{transform:'rotate('+((i*17%21)-10)+' '+(x+70)+' '+(y+45)+')'},Q('l4papers'));
  mk('rect',{x:x,y:y,width:140,height:90,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('path',{d:'M'+(x+18)+' '+(y+30)+'h90M'+(x+18)+' '+(y+55)+'h60',stroke:'var(--line)','stroke-width':5,'stroke-linecap':'round'},g);PP.push(g)}
[[260,320],[470,310],[650,340]].forEach(q=>{const g=mk('g',{},Q('l4papers'));mk('circle',{cx:q[0],cy:q[1],r:20,class:'loss'},g);tx(g,q[0],q[1]+10,'!',{class:'d','font-size':28,'text-anchor':'middle',style:'fill:var(--stage)'});PP.push(g)});
// fog bands inside the window (no clipping needed)
const FOG=[];for(let i=0;i<8;i++)FOG.push(mk('rect',{x:905,y:266+i*49,width:470,height:44,rx:22,fill:'var(--line)','fill-opacity':.9},Q('l4fog')));
// calendar
['MON','TUE','WED','THU','FRI'].forEach((d,i)=>tx(Q('l4days'),220+i*150,262,d,{class:'m','font-size':20,'text-anchor':'middle'}));
const SLT=[];for(let i=0;i<5;i++)for(let j=0;j<10;j++){const x=150+i*150,y=280+j*50,bl=(j*7+i*3)%10<4;
  const r=mk('rect',{x:x,y:y,width:140,height:46,rx:8,'stroke-width':4,'stroke-dasharray':'8 6'},Q('l4slots'));
  SLT.push([r,bl?tx(Q('l4slots'),x+70,y+30,'FREE',{class:'m','font-size':18,'text-anchor':'middle',style:'fill:var(--gain)'}):null,bl,i*10+j])}
fig(Q('l4wm'),1150,680,34,'ink');
// think week
for(let i=0;i<52;i++)mk('rect',{x:120+i*26.2,y:236,width:20,height:36,rx:4,fill:(i===12||i===38)?'var(--gain)':'var(--line)'},Q('l4year'));
const BK=[];for(let i=0;i<6;i++){const w=220-(i*23%50);BK.push(mk('rect',{x:860-w/2,y:686-i*38,width:w,height:34,rx:4,fill:['var(--ink)','var(--gain)','var(--stage)'][i%3],stroke:'var(--ink)','stroke-width':4},Q('l4bks')))}
// sleep battery
const CEL=[];for(let i=0;i<4;i++)CEL.push(mk('rect',{x:180+i*80,y:320,width:66,height:120,rx:8,class:'gain'},Q('l4cells')));
fig(Q('l4me'),330,600,26,'ink');
[1120,1220,1320].forEach(x=>{mk('circle',{cx:x,cy:620,r:32,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},Q('l4opts'));tx(Q('l4opts'),x,632,'?',{class:'d','font-size':34,'text-anchor':'middle',style:'fill:var(--loss)'})});
// clock ticks
for(let i=0;i<24;i++){const a=i*Math.PI/12,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(1230+192*s).toFixed(1)+' '+(480-192*c).toFixed(1)+'L'+(1230+206*s).toFixed(1)+' '+(480-206*c).toFixed(1),stroke:'var(--muted)','stroke-width':i%6?3:6,'stroke-linecap':'round'},Q('l4ticks'))}
// play
fig(Q('l4kid'),260,580,30,'ink');
const ND=[[700,410],[760,370],[860,390],[910,460],[870,540],[780,560],[700,520],[800,460]],ED=[];
for(let i=0;i<7;i++){ED.push(mk('path',{d:'M'+ND[i][0]+' '+ND[i][1]+'L'+ND[(i+1)%7][0]+' '+ND[(i+1)%7][1]+'M'+ND[i][0]+' '+ND[i][1]+'L800 460',stroke:'var(--gain)','stroke-width':4},Q('l4net')))}
const NC=ND.map(q=>mk('circle',{cx:q[0],cy:q[1],r:16},Q('l4net')));
for(let i=0;i<8;i++){const a=i*Math.PI/4,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(1260+105*s).toFixed(1)+' '+(410-105*c).toFixed(1)+'L'+(1260+135*s).toFixed(1)+' '+(410-135*c).toFixed(1),stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},Q('l4rays'))}