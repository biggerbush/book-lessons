const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const rings=(g,R,c)=>{for(let i=0;i<4;i++)mk('circle',{cx:0,cy:0,r:R*(4-i)/4,fill:i%2?'var(--stage)':c,stroke:'var(--ink)','stroke-width':5},g)};
rings($('tt0'),120,'var(--gain)');rings($('st2'),50,'var(--loss)');rings($('bt2'),220,'var(--gain)');rings($('brd'),220,'var(--line)');
fig($('sitter'),330,470,38,'ink');
fig($('sp'),290,400,46,'ink');mk('path',{d:'M290 470l-12 20 12 60 12-60z',class:'gain'},$('sp'));
const D10=[],D100=[];
for(let i=0;i<10;i++)D10.push(mk('circle',{cx:550+(i%5)*66,cy:600+Math.floor(i/5)*70,r:22,class:'ink'},$('d10')));
for(let i=0;i<100;i++)D100.push(mk('circle',{cx:990+(i%10)*50,cy:560+Math.floor(i/10)*22,r:9,class:'gain'},$('d100')));
for(let i=0;i<9;i++)mk('circle',{cx:168+(i%3)*22,cy:676+Math.floor(i/3)*22,r:6,class:'ink'},$('op'));
const OB=[0,1,2,3,4].map(i=>mk('rect',{x:300+i*84,width:56,rx:6,class:'ink'},$('obars')));
for(let i=0;i<5;i++){const a=(-150+i*30)*Math.PI/180;mk('path',{d:'M'+(960+110*Math.cos(a)).toFixed(0)+' '+(400+110*Math.sin(a)).toFixed(0)+'L'+(960+145*Math.cos(a)).toFixed(0)+' '+(400+145*Math.sin(a)).toFixed(0),stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
const CA=[0,1,2,3,4].map(i=>mk('rect',{x:160+i*88,y:310,width:72,height:110,rx:8},$('cellA')));
for(let i=0;i<9;i++)mk('circle',{cx:160,cy:270+i*60,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('sp7'));
const RW=[360,490,620];
const SQ=RW.map(y=>mk('path',{d:'M220 '+y+'q30 -26 60 0t60 0t60 0t60 0t60 0',fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':1},$('sq')));
const NT=RW.map(y=>{const g=mk('g',{},$('notes'));mk('rect',{x:580,y:y-50,width:200,height:80,rx:10,class:'gain'},g);const tx=mk('text',{x:680,y:y+6,'font-size':40,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},g);tx.textContent='10X';return g});
const WB=[];for(let i=0;i<7;i++)WB.push(mk('rect',{x:900+i*82,y:570,width:66,height:66,rx:10,stroke:'var(--ink)','stroke-width':5},$('wkb')));
fig($('mp'),0,-60,18,'');