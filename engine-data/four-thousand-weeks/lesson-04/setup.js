const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const R0=[0,1,2].map(()=>mk('circle',{cx:1285,cy:445,r:110,fill:'none',stroke:'var(--gain)','stroke-width':5},$('t_rings')));
const IC=[];for(let i=0;i<12;i++){const c=i%3,r=Math.floor(i/3);IC.push(mk('rect',{x:190+c*72,y:280+r*80,width:56,height:56,rx:14,fill:['var(--gain)','var(--ink)','var(--loss)'][(i+r)%3]},$('ic')))}
fig($('pp'),760,430,40,'ink');fig($('p2'),250,470,36,'ink');fig($('p3'),300,470,36,'ink');fig($('rf'),1110,640,22,'ink');fig($('p4'),330,470,34,'ink');fig($('stp'),0,0,18,'gain');
const PF=fig($('psin'),860,520,40,'ink');
const FD=[];for(let i=0;i<5;i++){const g=mk('g',{},$('fd'));mk('rect',{x:770,y:0,width:330,height:90,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('circle',{cx:812,cy:45,r:22,fill:i%2?'var(--gain)':'var(--loss)'},g);mk('path',{d:'M850 32h200M850 60h140',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);FD.push(g)}
const HX=[290,627,963,1300],HL=['PHONE','TIDYING','SNACKING','BUSYWORK'];
const MO=HX.map((x,i)=>{const h=$('hl');mk('ellipse',{cx:x,cy:520,rx:100,ry:26,class:'ink'},h);const m=mk('g',{},h);mk('circle',{cx:x,cy:470,r:46,class:'loss'},m);mk('circle',{cx:x-16,cy:460,r:6,fill:'var(--stage)'},m);mk('circle',{cx:x+16,cy:460,r:6,fill:'var(--stage)'},m);
mk('path',{d:'M'+(x-100)+' 520a100 26 0 0 0 200 0z',class:'ink'},h);const tx=mk('text',{x:x,y:600,'font-size':20,'text-anchor':'middle',class:'m'},h);tx.textContent=HL[i];
mk('path',{d:'M'+x+' 615C'+x+' 660 800 640 800 680',fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-dasharray':'8 8'},$('rts'));return m});
// one-minute dial ticks
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1300+118*s).toFixed(1)+' '+(380-118*c).toFixed(1)+'L'+(1300+132*s).toFixed(1)+' '+(380-132*c).toFixed(1),stroke:i%3?'var(--line)':'var(--ink)','stroke-width':i%3?4:6,'stroke-linecap':'round'},$('tks'))}
// strike widths for the crossed-out belief (measured once fonts load)
const NW={nt1:200,nt2:200};
function measureNW(){for(const k in NW){try{const v=$(k).getComputedTextLength();if(v>0)NW[k]=v}catch(e){}}}
measureNW(); if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{measureNW();try{render(t)}catch(e){}});