const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const WOB='M1260 470q15-14 30 0t30 0t30 0t30 0', SMI='M1262 455q58 50 116 0';
const BK=[];for(let i=0;i<8;i++)BK.push(mk('rect',{x:650+(i%3)*8-8,y:690-28*(i+1)+3,width:140,height:24,rx:4,class:i%3===1?'gain':'ink'},$('books')));
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('line',{x1:1200+125*s,y1:470-125*c,x2:1200+140*s,y2:470-140*c,stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('ticks'))}
P($('sara'),300,380,50,'gain');
const BB=[[640,300],[900,300],[620,640],[920,630]].map(q=>{const g=mk('g',{},$('bubs'));mk('rect',{x:q[0]-48,y:q[1]-28,width:96,height:56,rx:20,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);for(let j=-1;j<2;j++)mk('circle',{cx:q[0]+j*22,cy:q[1],r:6,class:'gain'},g);return g});
P($('ppl'),220,420,36,'gain');P($('ppl'),760,420,36,'ink');
let sd='M330 310';for(let i=0;i<14;i++){const x=330+i*20;sd+=' C'+(x+30)+' 272 '+(x-10)+' 348 '+(x+20)+' '+(310+(i%3-1)*15)}
const scrib=mk('path',{d:sd,fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},$('scr'));
const TL=[];for(let k=0;k<8;k++){const x0=780+(k%4)*170,y0=350+Math.floor(k/4)*170;for(let i=0;i<4;i++)TL.push(mk('line',{x1:x0+i*28,y1:y0,x2:x0+i*28,y2:y0+110,stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round'},$('tal')));TL.push(mk('line',{x1:x0-12,y1:y0+90,x2:x0+96,y2:y0+20,stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round'},$('tal')))}
const PF=[400,540].map((x,i)=>{const g=mk('g',{},$('perf'));P(g,x,520,30,i?'ink':'gain');return g});
let calHi;for(let r=0;r<3;r++)for(let c=0;c<7;c++){const e=mk('rect',{x:190+c*40,y:390+r*60,width:32,height:40,rx:6,fill:r===1&&c===3?'var(--gain)':'var(--line)'},$('cal'));if(r===1&&c===3)calHi=e}
P($('refl'),800,400,22,'ink');
const strike=(id,x,w,k)=>$(id).setAttribute('x2',(x+w*k).toFixed(1));