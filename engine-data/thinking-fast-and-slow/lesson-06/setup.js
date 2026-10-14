const man=(g,x,y,r,c)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+r*1.5+' '+r*1.5+' 0 0 1 '+r*3+' 0v'+r*1.3+'z',class:c},e);return e};
const lab=(g,x,y,s,st)=>{const e=mk('text',{x:x,y:y,'font-size':20,class:'m','text-anchor':'middle'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const dial=(g,cx,cy,r1,r2)=>{for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('line',{x1:cx+r1*Math.sin(a),y1:cy-r1*Math.cos(a),x2:cx+r2*Math.sin(a),y2:cy-r2*Math.cos(a),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},g)}};
dial($('ticks'),1300,320,88,100);dial($('swt'),330,480,118,136);
const t0a=man($('t0p'),1230,500,24,'ink'),t0b=man($('t0p'),1370,500,24,'gain');
lab(t0a,1230,640,'LIVES');lab(t0b,1370,640,'DECIDES','fill:var(--gain)');
man($('pa1'),330,400,36,'ink');man($('pb1'),1090,400,36,'gain');
const FL=[];for(let i=0;i<5;i++){FL.push(mk('rect',{x:160+i*112,y:610,width:96,height:72,rx:8,stroke:'var(--ink)','stroke-width':4},$('pa1')));const k=i===2||i===4;mk('rect',{x:900+i*112,y:610,width:96,height:72,rx:8,fill:k?'var(--gain)':'none',stroke:k?'var(--gain)':'var(--line)','stroke-width':4,'stroke-dasharray':k?'none':'8 8'},$('pb1'))}
const PA=[2,3,5,6,5,7,8,8],PB=[2,3,5,6,5,7,8,7,6,7,5,6,5,4,5,4,3,3,2,2,1,1,1,1];
const bars=(A,g,y0)=>A.map((v,i)=>mk('rect',{x:260+i*50,y:y0-v*18,width:40,height:v*18,rx:4,class:'ink'},$(g)));
const BA=bars(PA,'ba',420),BB=bars(PB,'bb',700);
// bowls: cold water = light indigo tint; trial 2 warms to a pale amber tint
const HD=[];let WM;[0,1].forEach(k=>{const g=$('cw'+k),d=k*740,w=`M${262+d} 460h336l-29 108h-278z`;
  HD.push(mk('rect',{x:398+d,y:240,width:64,height:200,rx:32,class:'ink'},g));
  mk('path',{d:w,fill:'var(--loss)','fill-opacity':.2},g);
  if(k){WM=mk('g',{opacity:0},g);mk('path',{d:w,fill:'var(--stage)','fill-opacity':.85},WM);mk('path',{d:w,fill:'var(--gain)','fill-opacity':.3},WM)}
  mk('path',{d:`M${250+d} 420h360l-40 150h-280z`,class:'s-ink',fill:'none','stroke-width':6,'stroke-linejoin':'round'},g)});
man($('lis'),190,380,28,'ink');
const WV=[];for(let i=0;i<52;i++)WV.push(mk('line',{x1:300+i*20,x2:300+i*20,class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('wave6')));
man($('dskp'),460,400,40,'gain');man($('strg'),900,600,24,'ink');