const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
[1215,1285,1355,1425].forEach(x=>fig($('liftp'),x,480,18,'ink'));
[240,300,180,330,0,260,210,280].forEach((h,i)=>{if(i!==4)mk('rect',{x:600+i*110,y:700-h,width:70,height:h,rx:6,fill:'var(--line)'},$('bars'))});
const fin=mk('rect',{x:1040,y:700,width:70,height:0,rx:6},$('bars'));
const FK=[];for(let i=0;i<6;i++){const k=i>>1,s=.35+.28*k,dn=i%2;FK.push([mk('circle',{r:16,class:'ink'},$('forkk')),180+i*36,380+320*s,500+(dn?170:-170)*s,dn])}
const RK=[];for(let r=0;r<3;r++)for(let c=0;c<5;c++){const g=mk('g',{},$('roomk'));fig(g,950+c*110,430+r*88,13,(r+c)%3?'ink':'gain');RK.push(g)}
const FD=[];for(let i=0;i<8;i++)FD.push(mk('circle',{cx:160+i*46,cy:270,r:14,class:i===3?'gain':'ink'},$('fdots')));
fig($('tchf'),320,580,24,'gain');
const PH=[140,200,170],PB=[1080,1220,1360].map(x=>{fig($('prog'),x,620,18,'ink');return mk('rect',{x:x-20,y:590,width:40,height:0,rx:6,class:'gain'},$('prog'))});
const CP=[];for(let k=0;k<3;k++){const g=mk('g',{},$('cal')),x=140+k*20,y=260+k*20;mk('rect',{x,y,width:200,height:220,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x,y,width:200,height:44,rx:12,class:'gain'},g);for(let j=0;j<12;j++)mk('rect',{x:x+24+(j%4)*42,y:y+70+Math.floor(j/4)*44,width:26,height:26,rx:4,fill:'var(--line)'},g);CP.push(g)}
const LP=[440,790,1140].map((x,k)=>{const g=mk('g',{},$('loop'));mk('rect',{x,y:250,width:320,height:290,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);fig(g,x+70,406,20,'gain');const r=12+3*k;for(let j=0;j<3;j++)fig(g,x+150+j*60,510-r*5.2,r,'ink');return g});
fig($('helper'),640,300,18,'gain');
const ST=fig($('strug'),0,0,18,'loss');
['h0','h1','h2'].forEach((id,i)=>{const y=348+i*110;mk('circle',{cx:720,cy:y,r:22,class:'gain'},$(id));mk('path',{d:'M709 '+y+'l8 8 14-15',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$(id))});
fig($('iv'),330,450,24,'ink');
const SE=[-90,-30,30,150,210].map(a=>{const r=a*Math.PI/180;return mk('circle',{cx:(450+210*Math.cos(r)).toFixed(0),cy:(500+210*Math.sin(r)).toFixed(0),r:28,class:'ink'},$('seats'))});
['Stay to see people grow','Pair newcomers with mentors','Help early, judge the climb'].forEach((s,i)=>{const g=$('k'+i),y=260+i*170;mk('rect',{x:820,y,width:660,height:130,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);mk('circle',{cx:880,cy:y+65,r:30,class:'gain'},g);const n=mk('text',{x:880,y:y+76,'font-size':30,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},g);n.textContent=i+1;const tx=mk('text',{x:940,y:y+76,'font-size':32,class:'d5'},g);tx.textContent=s});