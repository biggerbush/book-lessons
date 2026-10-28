const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const plane=(g,c)=>{mk('rect',{x:-60,y:-10,width:120,height:20,rx:10,class:c},g);mk('path',{d:'M-8 -8L-34 -50H-16L22 -8ZM-8 8L-34 50H-16L22 8ZM-56 -8L-70 -32H-56L-38 -8Z',class:c},g)};
fig($('pilots'),1080,580,40,'ink');fig($('pilots'),1320,580,40,'ink');
const P1=mk('g',{},$('pl1'));plane(P1,'ink');
const ER=[['BAD WEATHER',''],['TIRED CREW',''],['SLIP IN','COMMUNICATION']].map((l,i)=>{const x=120+i*360,g=mk('g',{},$('errs'));
 mk('rect',{x:x,y:520,width:320,height:120,rx:16,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);
 const a=mk('text',{x:x+160,y:588,'font-size':22,'text-anchor':'middle',class:'m'},g),b=mk('text',{x:x+160,y:604,'font-size':22,'text-anchor':'middle',class:'m'},g);
 if(i<2)mk('text',{x:x+340,y:596,'font-size':44,'text-anchor':'middle',class:'d'},g).textContent='+';return [g,a,b,l]});
const P2=mk('g',{},$('pl2'));plane(P2,'ink');
const RN=[];for(let i=0;i<9;i++)RN.push(mk('path',{class:'s-loss','stroke-width':4,'stroke-linecap':'round'},$('rain')));
fig($('cap'),900,520,34,'ink');fig($('fo'),1100,520,34,'ink');fig($('fe'),1340,520,34,'ink');
const RG=[];for(let i=0;i<6;i++){const y=290+i*88;RG.push(mk('path',{d:'M960 '+y+'H1240',stroke:i===0?'var(--gain)':i===5?'var(--loss)':'var(--muted)','stroke-width':12-i*1.6,'stroke-linecap':'round','stroke-dasharray':i>2?'14 '+(i*4):'none'},$('rungs')))}
for(let i=0;i<9;i++)mk('path',{d:'M'+(120+i*170)+' 254v32',class:'s-line','stroke-width':4},$('ticks'));
fig($('lowp'),330,577,34,'ink');fig($('lowp'),550,577,34,'ink');
fig($('hip'),1310,477,34,'ink');fig($('hip'),970,611,26,'ink');
fig($('cop'),820,500,32,'ink');
const WV=[];for(let i=0;i<4;i++)WV.push(mk('path',{class:'s-ink',fill:'none','stroke-width':6,'stroke-linecap':'round'},$('waves')));
const CG=mk('g',{},$('pil')),JG=mk('g',{},$('pil'));fig(CG,0,0,30,'ink');fig(JG,0,0,30,'ink');
const AR=mk('g',{},JG);mk('path',{d:'M34 70L58 -6',class:'s-ink','stroke-width':12,'stroke-linecap':'round'},AR);mk('circle',{cx:58,cy:-16,r:12,class:'ink'},AR);
mk('rect',{x:80,y:-90,width:120,height:70,rx:16,class:'gain'},AR);mk('text',{x:140,y:-36,'font-size':56,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},AR).textContent='!';
const TP=[];for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3;TP.push([mk('circle',{cx:800+140*Math.cos(a),cy:470+140*Math.sin(a),r:22,class:'ink'},$('tpl')),470+140*Math.sin(a)])}
fig($('clr'),1160,540,30,'ink');