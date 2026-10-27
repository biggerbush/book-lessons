const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
P($('rider'),1385,410,26,'gain');
for(let i=0;i<6;i++){const x=260+i*165;mk('rect',{x:x,y:340,width:135,height:120,rx:12,fill:'var(--ice)',stroke:'var(--ink)','stroke-width':4},$('win'));if(i!==3){const g=mk('g',{opacity:.5},$('win'));P(g,x+67,380,18,'ink')}}
mk('rect',{x:1250,y:340,width:100,height:120,rx:12,fill:'var(--ice)',stroke:'var(--ink)','stroke-width':4},$('win'));P($('win'),1300,380,18,'ink');
P($('rosaG'),822,380,18,'gain');
P($('pp'),420,330,60,'ink');
const C2=['SOFT-SPOKEN','GENTLE','RESERVED'].map((s,i)=>{const x=[700,980,1220][i],w=[250,210,240][i],g=mk('g',{},$('chips2'));mk('rect',{x:x,y:430,width:w,height:64,rx:32,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);const tx=mk('text',{x:x+w/2,y:470,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
const RG=[0,1,2].map(()=>mk('circle',{cx:400,cy:440,fill:'none',stroke:'var(--gain)','stroke-width':5},$('rings')));
P($('parks3'),400,380,34,'gain');P($('kg'),1200,380,34,'ink');
for(let k=1;k<4;k++)mk('path',{d:'M'+(1150-k*36)+' '+(440-k*40)+'Q'+(1120-k*60)+' 440 '+(1150-k*36)+' '+(440+k*40),fill:'none',stroke:'var(--ink)','stroke-width':7,'stroke-linecap':'round'},$('kw'));
const D4=[0,1,2,3,4,5].map(()=>mk('circle',{r:10,class:'gain'},$('dots4')));
const ST=['PATIENCE','LISTENING','NOT GIVING UP'].map((s,i)=>{const x=760+i*240,y=500-i*80,g=mk('g',{},$('steps4'));mk('rect',{x:x,y:y,width:220,height:600-y,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);const tx=mk('text',{x:x+110,y:y+50,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
P($('gd'),330,300,46,'ink');
const CHO=[1,4,6],TL=[0,1,2,3,4,5,6,7].map(i=>{const x=720+(i%4)*190,y=280+Math.floor(i/4)*90,g=mk('g',{},$('tiles'));const r=mk('rect',{x:x,y:y,width:170,height:60,rx:12,fill:'var(--stage)',stroke:'var(--muted)','stroke-width':4},g);const l=mk('path',{d:'M'+(x+20)+' '+(y+30)+'h'+(60+(i*37)%70),stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round'},g);const j=CHO.indexOf(i);return {g:g,r:r,l:l,j:j,dx:j<0?0:810+j*190-x,dy:490-y}});
// Listen first card (x 120-430): speaker at 190, listener at 350
P($('k0'),190,330,24,'ink');P($('k0'),350,330,24,'gain');P($('k3'),1325,350,26,'gain');
const LD=[0,1,2].map(()=>mk('circle',{cy:340,r:7,class:'ink'},$('lis')));
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(975+76*Math.cos(a)).toFixed(1)+' '+(400+76*Math.sin(a)).toFixed(1)+'L'+(975+86*Math.cos(a)).toFixed(1)+' '+(400+86*Math.sin(a)).toFixed(1),stroke:'var(--ink)','stroke-width':4},$('k2'))}
[['Listen first','OTHERS FEEL HEARD'],['Build trust','WILLING TO CHANGE'],['Persist','OUTLASTS THE REST'],['Stand firm','SINCERE, NOT SHOWY']].forEach((c,i)=>{const g=$('k'+i),x=120+i*350;mk('rect',{x:x,y:230,width:310,height:490,rx:18,fill:'none',stroke:'var(--line)','stroke-width':3},g);mk('text',{x:x+24,y:640,'font-size':36,class:'d5'},g).textContent=c[0];mk('text',{x:x+24,y:680,'font-size':20,class:'m'},g).textContent=c[1]});
['One cause','Words, prepared','Again and again'].forEach((s,i)=>{const g=$('t'+i),x=120+i*473;mk('rect',{x:x,y:250,width:414,height:390,rx:18,fill:'none',stroke:'var(--line)','stroke-width':3},g);mk('text',{x:x+30,y:600,'font-size':36,class:'d5'},g).textContent=s});
const D7=[0,1,2,3,4,5,6,7,8,9].map(i=>mk('circle',{cx:1136+(i%5)*68,cy:380+Math.floor(i/5)*80,r:20},$('dots7')));