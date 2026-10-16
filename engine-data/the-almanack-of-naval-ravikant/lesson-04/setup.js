const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const sig=(g,x,y,w)=>mk('path',{d:'M'+x+' '+y+'c12-36 30-40 24 0s24-40 42-12 12 24 30-8 24 14 42 0 28-18 50-6',fill:'none',stroke:'var(--gain)','stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g);
const draw=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const S0=sig($('sg0'),1222,515,6),S1=sig($('sg1'),250,650,6),S8=sig($('sg8'),1150,770,7);
let L8=188;try{L8=S8.getTotalLength()||188}catch(e){}
fig($('me'),340,380,40,'gain');
for(let i=0;i<8;i++)fig($('cp'),860+(i%4)*170,360+Math.floor(i/4)*160,26,'ink');
const BR=[];for(let i=0;i<9;i++)BR.push(mk('path',{d:'M'+(800+i*80)+' 260V700',class:'s-loss','stroke-width':6,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1'},$('bars')));
const AC=mk('g',{},$('actor'));fig(AC,440,560,30,'ink');
fig($('hp2'),1215,440,30,'ink');
const TG=['RESPONSIBILITY','EQUITY','LEVERAGE'].map((s,i)=>{const g=mk('g',{},$('tg'));mk('rect',{x:940,y:300+i*90,width:360,height:64,rx:32,class:'gain'},g);const tx=mk('text',{x:970,y:341+i*90,'font-size':24,class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=s;return g});
const CK=[];for(let i=0;i<6;i++)CK.push(mk('path',{d:'M'+(160+i*90)+' 715l14 14 28-30',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('ck')));
const OB=[];for(let i=0;i<6;i++)OB.push(mk('rect',{x:840+i*110,y:830,width:70,height:0,rx:6,class:'gain','fill-opacity':(.35+i*.13).toFixed(2)},$('opp')));
fig($('invp'),360,380,50,'ink');
const GV=[];for(let i=0;i<5;i++){fig($('givers'),1100+i*85,400,24,'ink');GV.push(1100+i*85)}
const PL=[];for(let c=0;c<8;c++)for(let s=0;s<4;s++)PL.push(mk('ellipse',{cx:650+s*62,cy:650-c*14,rx:26,ry:9,class:'gain',stroke:'var(--stage)','stroke-width':2},$('pile')));
const FC=GV.map(()=>mk('circle',{r:10,class:'gain'},$('fly')));
const TD=[];for(let i=0;i<12;i++)TD.push(mk('circle',{cx:160+i*110,cy:760,r:12,class:'gain'},$('tl')));
const gear=(cx,cy,c)=>{const g=mk('g',{},$('gr'));let pts='';for(let i=0;i<56;i++){const a=i*Math.PI/28,R=i%4<2?96:78;pts+=(cx+R*Math.cos(a)).toFixed(1)+','+(cy+R*Math.sin(a)).toFixed(1)+' '}mk('polygon',{points:pts,class:c},g);mk('circle',{cx:cx,cy:cy,r:26,fill:'var(--stage)'},g);return g};
const G1=gear(720,450,'gain'),G2=gear(895,450,'ink');
const NC=[];for(let i=0;i<5;i++){const y=310+i*80;mk('path',{d:'M1190 '+y+'h170',class:'s-line','stroke-width':8,'stroke-linecap':'round'},$('nck'));NC.push(mk('path',{d:'M1396 '+(y-8)+'l12 12 24-26',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('nck')))}