const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const SPK=[[1130,300],[1470,350],[1150,600]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:8,class:'gain'},$('spk')));
person($('tp'),1290,310,30,'ink');
const BN=[];for(let i=0;i<5;i++){const g=mk('g',{},$('binders')),y=800-i*48,x=120+(i%2)*14;mk('rect',{x:x,y:y,width:440,height:44,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:x+370,y:y,width:70,height:44,rx:6,class:'ink'},g);const tx=mk('text',{x:x+22,y:y+31,'font-size':24,class:'m'},g);tx.textContent='YEAR '+(i+1);BN.push(g)}
const wave=(y,a,f,ph)=>{let d='';for(let x=150;x<=470;x+=10)d+=(x==150?'M':'L')+x+' '+(y+a*Math.sin(x/f+ph)).toFixed(1);return d};
for(let i=0;i<4;i++)mk('rect',{x:710+i*45,y:300,width:45,height:40,fill:i%2?'var(--stage)':'var(--gain)',stroke:'var(--ink)','stroke-width':4},$('awn'));
person($('cust'),1210,320,26,'ink');
for(let i=1;i<6;i++)mk('path',{d:'M'+(500+i*100)+' 600V820',class:'s-line','stroke-width':3},$('grid'));
[655,710,765].forEach(y=>mk('path',{d:'M500 '+y+'H1100',class:'s-line','stroke-width':3},$('grid')));
for(let r=0;r<2;r++)for(let c=0;c<5;c++)mk('circle',{cx:165+c*52,cy:410+r*40,r:12,fill:'var(--stage)'},$('keys'));
const SW=[110,215,110];
[340,510,680].forEach((y,i)=>{const g=$('tg'+i);mk('rect',{x:1110,y:y-58,width:330,height:80,rx:14,class:'gain'},g);mk('circle',{cx:1138,cy:y-18,r:9,fill:'var(--stage)'},g);const tx=mk('text',{x:1285,y:y,'font-size':48,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},g);tx.textContent='guess'});
const TK=[];for(let i=0;i<5;i++){const y=315+i*60,g=$('rows4');mk('rect',{x:150,y:y,width:34,height:34,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M210 '+(y+17)+'H'+(560-i%2*80),class:'s-line','stroke-width':8,'stroke-linecap':'round'},g);TK.push(mk('path',{d:'M156 '+(y+16)+'l10 10 18-20',class:'s-gain',fill:'none','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g))}
const BR=[];for(let i=0;i<12;i++){const h=24+i*30;BR.push(mk('rect',{x:180+i*100,y:760-h,width:60,height:h,rx:6,fill:i?'var(--gain)':'var(--ink)'},$('bars')))}
mk('path',{d:'M140 760H1360',class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('bars'));
const YG=[];for(let r=0;r<4;r++)for(let c=0;c<13;c++)YG.push(mk('rect',{x:120+c*40,y:270+r*40,width:34,height:34,rx:5,fill:'var(--line)'},$('yrg')));
'MTWTFSS'.split('').forEach((d,i)=>{const x=120+i*76;mk('rect',{x:x,y:550,width:68,height:80,rx:10,fill:i?'var(--stage)':'var(--gain)',stroke:i?'var(--ink)':'var(--gain)','stroke-width':4},$('wkb'));const tx=mk('text',{x:x+34,y:600,'font-size':24,'text-anchor':'middle',class:'m',style:i?'':'fill:var(--on-gain)'},$('wkb'));tx.textContent=d});
person($('per6'),860,424,18,'ink');
person($('wp'),440,341,20,'ink');
// plan-follower on the road: feet on the ground line (y=600), holding the plan
person($('clw'),900,508,22,'ink');mk('rect',{x:924,y:566,width:40,height:30,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('clw'));
const sk=(id,w,k)=>$(id).setAttribute('x2',(822+(w+16)*k).toFixed(1));