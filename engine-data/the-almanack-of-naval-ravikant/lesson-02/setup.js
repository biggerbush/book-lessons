const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
fig($('hd0'),1300,350,60,'ink');
const KD=[];for(let i=0;i<15;i++){if(i===7)continue;KD.push(fig(mk('g',{},$('kids')),180+(i%5)*110,340+Math.floor(i/5)*110,18,'ink'))}
fig($('youK'),400,450,18,'gain');fig($('repK'),400,450,18,'ink');
fig($('app'),980,400,30,'ink');fig($('app'),1180,412,26,'gain');
const RP=[];for(let i=0;i<6;i++)RP.push(mk('circle',{cx:900+i*70,cy:600,r:16},$('reps2')));
fig($('pL'),460,380,50,'ink');fig($('pR'),1140,380,50,'ink');
[0,680].forEach(o=>[[310,568],[344,568],[327,536],[560,568]].forEach(b=>mk('rect',{x:b[0]+o,y:b[1],width:32,height:32,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('blocks'))));
const CR=[];for(let i=0;i<8;i++)CR.push(mk('circle',{r:14},$('crowd4')));
fig($('kidF'),280,450,26,'ink');fig($('adF'),1240,430,32,'gain');
const CP=['EXPLAINING','ARGUING','BUILDING','TINKERING'].map((s,i)=>{const g=mk('g',{},$('chips5'));mk('rect',{x:120+i*345,y:230,width:325,height:64,rx:32,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);mk('text',{x:282+i*345,y:271,'font-size':22,'text-anchor':'middle',class:'m'},g).textContent=s;return g});
[220,180,240,200,170].forEach((w,i)=>mk('rect',{x:760-w/2,y:574-i*26,width:w,height:24,rx:4,fill:i%2?'var(--gain)':'var(--ink)'},$('bk5')));
fig($('mirP'),380,430,44,'gain');
const FP=[];for(let k=0;k<6;k++){const r=25+k*15,a0=(-110+k*25)*Math.PI/180,a1=a0+5.2;FP.push(mk('path',{d:'M'+(1330+r*Math.cos(a0)).toFixed(1)+' '+(640+r*Math.sin(a0)).toFixed(1)+'A'+r+' '+r+' 0 1 1 '+(1330+r*Math.cos(a1)).toFixed(1)+' '+(640+r*Math.sin(a1)).toFixed(1),fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('fp')))}
for(let i=0;i<5;i++)mk('circle',{cx:1260,cy:250+i*50,r:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('note'));
for(let i=0;i<3;i++){mk('rect',{x:1288,y:280+i*70,width:34,height:34,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},$('note'));mk('path',{d:'M1340 '+(297+i*70)+'H1430',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},$('note'))}
const CK=[0,1,2].map(i=>mk('path',{d:'M1294 '+(298+i*70)+'l9 10 18-24',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('checks')));