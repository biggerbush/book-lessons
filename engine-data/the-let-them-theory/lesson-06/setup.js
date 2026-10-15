const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
person($('frP'),360,380,50,'ink'); person($('youP'),1000,420,50,'ink');
let sd='';for(let i=0;i<=60;i++){const a=i*.35,r=4+i*.9;sd+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}
const SPI=mk('path',{d:sd,fill:'none',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},$('spi'));
const seats=[];for(let i=0;i<11;i++){const x=160+i*80,g=mk('g',{},$('seats'));person(g,x,312,18,'ink');mk('ellipse',{cx:x,cy:430,rx:28,ry:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);seats.push(g)}
const CK=[1000,1300].map((x,i)=>{const g=mk('g',{},$('clocks'));mk('circle',{cx:x,cy:470,r:110,fill:'var(--stage)',stroke:i?'var(--gain)':'var(--ink)','stroke-width':7},g);
  for(let k=0;k<12;k++){const a=k*Math.PI/6;mk('line',{x1:x+90*Math.cos(a),y1:470+90*Math.sin(a),x2:x+100*Math.cos(a),y2:470+100*Math.sin(a),stroke:'var(--muted)','stroke-width':4},g)}
  const h=mk('line',{x1:x,y1:470,x2:x,y2:410,stroke:'var(--ink)','stroke-width':9,'stroke-linecap':'round'},g);
  const m=mk('line',{x1:x,y1:470,x2:x,y2:385,stroke:i?'var(--gain)':'var(--ink)','stroke-width':5,'stroke-linecap':'round'},g);
  mk('text',{x:x,y:620,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent=i?'YOUR CLOCK':'THEIR CLOCK';return [g,h,m,x]});
person($('clm'),0,0,18,'gain');
const BL=[];for(let i=0;i<6;i++)BL.push(mk('rect',{x:1000,y:640-62*i,width:300,height:56,rx:8,class:'gain'},$('blk')));