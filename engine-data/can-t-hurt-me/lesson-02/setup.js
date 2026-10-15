const fig=(g,x,y,r,cls,op)=>{const a=mk('g',{class:cls,opacity:op||1},g);mk('circle',{cx:x,cy:y,r:r},a);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a);return a};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const scr=(g,x,y,w,n,gap,col,sw)=>{for(let i=0;i<n;i++)mk('path',{d:'M'+x+' '+(y+i*gap)+'h'+(w-(i%2)*w*.3),stroke:col,'stroke-width':sw,'stroke-linecap':'round'},g)};
fig($('rf0'),1300,330,40,'ink',.75);
fig($('dv'),300,380,34,'ink');fig($('fr'),620,380,34,'ink',.5);
fig($('rf'),350,370,44,'ink',.45);fig($('gp'),740,400,44,'ink');
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(870+36*c).toFixed(1)+' '+(700+36*s).toFixed(1)+'L'+(870+50*c).toFixed(1)+' '+(700+50*s).toFixed(1),stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('rays'))}
const FG=[0,1,2].map(i=>mk('circle',{cx:430,cy:470,r:120-i*22,fill:'var(--muted)','fill-opacity':.18},$('fog')));
const PL=[240,200,230,150].map((w,i)=>[mk('line',{x1:1050,y1:390+i*50,x2:1050,y2:390+i*50,stroke:'var(--on-gain)','stroke-width':9,'stroke-linecap':'round'},$('pl')),w]);
const CC=[[190,'WHAT I AVOID','fill:var(--loss)'],[620,'WHAT I WANT','fill:var(--gain)'],[1050,'NEXT TINY STEP','fill:var(--ink)']];
const NT=CC.map((c,k)=>{const g=$('c'+k);tx(g,c[0],290,c[1],{class:'m','font-size':22,style:c[2]});
  return [0,1].map(j=>{const n=mk('g',{},g),y=320+j*200;
    if(k<2){mk('rect',{x:c[0],y:y,width:360,height:160,rx:8,fill:k?'var(--gain)':'var(--stage)',stroke:k?'none':'var(--loss)','stroke-width':5},n);scr(n,c[0]+30,y+50,300-j*40,3,40,k?'var(--on-gain)':'var(--loss)',7)}
    else{mk('rect',{x:c[0],y:y+20,width:300,height:120,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},n);mk('rect',{x:c[0]+24,y:y+50,width:30,height:30,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':4},n);scr(n,c[0]+74,y+60,190,2,36,'var(--ink)',6)}
    return n})});
[[560,400],[560,600],[990,400],[990,600]].forEach(q=>mk('path',{d:'M'+q[0]+' '+q[1]+'h44m-14-14 14 14-14 14',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('arw')));