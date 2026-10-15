const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},g)};
const R=(g,x,y,w,h,a)=>mk('rect',Object.assign({x:x,y:y,width:w,height:h},a||{}),g);
const SL=(d,c,g)=>mk('path',{d:d,fill:'none',stroke:c,'stroke-width':5,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g);
const tl=[...Array(6)].map((_,i)=>{const g=mk('g',{},$('tl'));R(g,1180,250+i*60,280,36,{rx:18,fill:'var(--line)'});return g});
const tR=[1,4].map(i=>R($('tl'),1166,240+i*60,308,56,{rx:28,fill:'none',stroke:'var(--gain)','stroke-width':5}));
const tS=[0,2,3,5].map(i=>SL(`M1196 ${268+i*60}H1444`,'var(--loss)',$('tl')));
const NT=[];for(let r=0;r<6;r++)for(let c=0;c<14;c++){const x=138+c*96,y=228+r*66,g=mk('g',{},$('notes')),q=R(g,x,y,82,50,{rx:6,fill:'var(--line)'});
  mk('path',{d:`M${x+14} ${y+20}h52M${x+14} ${y+32}h34`,stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round','stroke-opacity':.5},g);NT.push([g,q,c>=11&&r>=4])}
fig($('me'),1360,680,16,'ink');
const BR=[260,370,480,590,700].map((y,i)=>{const g=$('br'),cy=240+y/2,
  pa=mk('path',{d:`M240 480C500 480 700 ${y} 1000 ${y}`,fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1'},g),
  n=mk('circle',{cx:1000,cy:y,r:16,fill:'var(--ink)'},g),
  c=i===2?null:mk('path',{d:`M587 ${cy-22}L623 ${cy+22}M623 ${cy-22}L587 ${cy+22}`,stroke:'var(--loss)','stroke-width':7,'stroke-linecap':'round'},g);return [pa,n,c]});
fig($('ppl'),300,420,30,'ink');fig($('ppl'),500,420,30,'ink');
// 25-goal grid: 144px columns; number right-aligned at x+32, short bar x+44..x+88,
// so each bar ends ~50px before the next column's number; rings span x-10..x+102 only
const LI=[],CI=[1,7,10,16,23];for(let i=0;i<25;i++){const x=760+(i%5)*144,y=310+Math.floor(i/5)*88,g=mk('g',{},$('lst'));
  mk('text',{x:x+32,y:y+35,'font-size':22,'text-anchor':'end',class:'m'},g).textContent=i+1;R(g,x+44,y+18,44,18,{rx:9,fill:'var(--line)'});LI.push(g)}
const LR=CI.map(i=>mk('ellipse',{cx:806+(i%5)*144,cy:337+Math.floor(i/5)*88,rx:56,ry:30,fill:'none',stroke:'var(--gain)','stroke-width':5},$('rings')));
for(let i=0;i<5;i++)R($('top5'),120,290+i*66,180,48,{rx:24,fill:'var(--gain)'});
const M20=[...Array(20)].map((_,i)=>R($('m20'),420+(i%5)*110,290+Math.floor(i/5)*84,90,60,{rx:10,fill:'var(--line)',stroke:'var(--ink)','stroke-width':3}));
mk('polygon',{points:[...Array(8)].map((_,i)=>{const a=Math.PI/8+i*Math.PI/4;return (675+110*Math.cos(a)).toFixed(1)+','+(446+110*Math.sin(a)).toFixed(1)}).join(' '),fill:'var(--loss)',stroke:'var(--stage)','stroke-width':8},$('oct'));
// discarded idea cards that drop into the bin (final resting positions inside it)
const FB=[[1140,520,-12],[1195,548,8],[1246,512,-6]].map(([x,y,a])=>{const g=mk('g',{},$('fall'));R(g,x,y,44,32,{rx:6,fill:'var(--muted)'});
  mk('path',{d:`M${x+10} ${y+16}h24`,stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},g);return [g,x+22,y+16,a]});
const WK=[...Array(26)].map((_,i)=>R($('wk'),120+i*52,716,40,40,{rx:6,fill:'var(--line)'}));
const SX=[900,1110,1320];SX.forEach(x=>{const g=$('slots');R(g,x,280,160,240,{rx:16,fill:'none',stroke:'var(--ink)','stroke-width':5});R(g,x+20,470,120,16,{rx:8,fill:'var(--line)'});
  mk('text',{x:x+80,y:560,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent='OPEN'});
const SB=SX.map(x=>R($('slots'),x+30,330,100,70,{rx:12,fill:'var(--gain)'})),BF=SX.map(x=>R($('slots'),x+20,470,0,16,{rx:8,fill:'var(--gain)'}));
const QB=[...Array(6)].map((_,i)=>R($('que'),140+i*110,345,100,70,{rx:12,fill:'var(--line)',stroke:'var(--ink)','stroke-width':3}));
const FL=[[600,270],[880,250],[1000,380],[560,390]].map(([x,y])=>{const g=mk('g',{},$('fl'));R(g,x,y,90,50,{rx:8,fill:'none',stroke:'var(--muted)','stroke-width':4});
  mk('path',{d:`M${x+16} ${y+25}h58`,stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},g);return g});
const RG=[0,1].map(()=>mk('circle',{cx:800,cy:486,r:46,fill:'none',stroke:'var(--gain)','stroke-width':4},$('rg')));
for(let i=0;i<5;i++)R($('yl'),1180,300+i*64,260,32,{rx:16,fill:'var(--line)'});
const YR=[0,2].map(i=>R($('yl'),1166,290+i*64,288,52,{rx:26,fill:'none',stroke:'var(--gain)','stroke-width':5}));
const YS=SL('M1196 508H1424','var(--loss)',$('yl'));YS.setAttribute('stroke-width',7);