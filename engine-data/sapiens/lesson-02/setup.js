const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const lion=(g,x,y,R)=>{let pts='';for(let i=0;i<36;i++){const a=i*Math.PI/18,rr=i%2?R*.78:R;pts+=(x+rr*Math.cos(a)).toFixed(1)+','+(y+rr*Math.sin(a)).toFixed(1)+' '}
  mk('polygon',{points:pts,class:'gain'},g);mk('circle',{cx:x,cy:y,r:R*.6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  [-1,1].forEach(s=>mk('circle',{cx:x+s*R*.22,cy:y-R*.12,r:R*.07,class:'ink'},g));
  mk('path',{d:'M'+(x-R*.12)+' '+(y+R*.12)+'h'+(R*.24)+'l-'+(R*.12)+' '+(R*.14)+'z',class:'ink'},g)};
const star=(g,x,y)=>mk('path',{d:'M'+x+' '+(y-14)+'l4 10 10 4-10 4-4 10-4-10-10-4 10-4z',class:'gain'},g);
const ln=(a,b,attrs,g)=>mk('path',Object.assign({d:'M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'L'+b[0].toFixed(1)+' '+b[1].toFixed(1)},attrs),g);

fig($('t_ape'),1250,470,28,'ink');lion($('t_lion'),1372,280,64);

for(let r=0;r<6;r++)for(let c=0;c<7;c++){const x=175+c*48,y=340+r*56;[[-10,5],[0,6],[13,7]].forEach(q=>mk('circle',{cx:x+q[0],cy:y,r:q[1],class:'ink'},$('ants')))}
const CHP=[0,1,2,3,4].map(k=>{const a=(-90+72*k)*Math.PI/180;return[800+110*Math.cos(a),450+110*Math.sin(a)]});
CHP.forEach((a,i)=>CHP.forEach((b,j)=>{if(j>i)ln(a,b,{class:'s-line','stroke-width':4},$('chimps'))}));CHP.forEach(q=>fig($('chimps'),q[0],q[1],18,'ink'));
const MP=[...Array(70)].map((_,i)=>[1095+(i*137)%350,325+(i*89)%330]);
const ML=MP.map((a,i)=>{let bj=0,bd=1e9;MP.forEach((b,j)=>{const d=(a[0]-b[0])**2+(a[1]-b[1])**2;if(j!==i&&d<bd){bd=d;bj=j}});return ln(a,MP[bj],{class:'s-gain','stroke-width':2},$('manyL'))});
const MD=MP.map(q=>mk('circle',{cx:q[0],cy:q[1],r:7,class:'gain'},$('many')));

const CAMP=[...Array(8)].map((_,k)=>{const a=(-67.5+45*k)*Math.PI/180;return[460+200*Math.cos(a),560+190*Math.sin(a)]});
const CG=CAMP.map(q=>{const g=mk('g',{},$('camp'));fig(g,q[0],q[1],16,'ink');return g});
const GL=[[0,3],[1,5],[2,6],[4,7],[0,5],[3,6]].map(([a,b])=>mk('path',{d:'M'+CAMP[a][0].toFixed(1)+' '+CAMP[a][1].toFixed(1)+'Q460 560 '+CAMP[b][0].toFixed(1)+' '+CAMP[b][1].toFixed(1),fill:'none',class:'s-muted','stroke-width':3,'stroke-dasharray':'8 8'},$('gos')));
const GD=[];for(let r=0;r<10;r++)for(let c=0;c<25;c++)GD.push({c:c,k:r*15+c,el:mk('circle',{cx:892+c*23,cy:510+r*23,r:7,class:c<15?'ink':'loss'},$('grid'))});

fig($('talker'),220,560,28,'ink');lion($('sl'),610,440,85);
[0,40,-40,180,140,220].forEach(d=>{const a=d*Math.PI/180;star($('spk'),610+130*Math.cos(a),440+130*Math.sin(a))});
lion($('lmh'),1200,320,60);

lion($('plion'),380,430,90);[690,780,870,960].forEach(x=>fig($('wk'),x,605,15,'ink'));

[220,520].forEach(x=>fig($('cath'),x,340,26,'ink'));
const NP=[];for(let r=0;r<3;r++)for(let i=0;i<13;i++){const g=mk('g',{},$('nat'));fig(g,780+i*56,600+r*60,10,'ink');NP.push(g)}

const RG=[...Array(18)].map(()=>mk('path',{class:'s-line','stroke-width':4},$('rungs')));
[1040,1120,1200].forEach((x,i)=>fig($('ppl'),x,i===1?290:310,i===1?32:26,'gain'));

const NP7=[...Array(12)].map((_,i)=>{const a=i*2.4,r=40+(i*37)%120;return[1060+r*Math.cos(a),470+r*Math.sin(a)]});
const NL=[];NP7.forEach((a,i)=>{NL.push(ln(a,NP7[(i+1)%12],{class:'s-gain','stroke-width':3},$('net7')));NL.push(ln(a,NP7[(i+5)%12],{class:'s-gain','stroke-width':3},$('net7')))});
NP7.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:8,class:'ink'},$('net7')));

const CH8=['YOUR COUNTRY','YOUR EMPLOYER','YOUR FAVOURITE BRAND'].map((s,i)=>{const x=120+i*360,g=mk('g',{},$('chips8'));
  mk('rect',{x:x,y:200,width:330,height:64,rx:32,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);
  const tx=mk('text',{x:x+165,y:240,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=s;return g});