const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const SP0=[];[363,476,589].forEach((b,k)=>{for(let i=0;i<12;i++){const h=64+((i*7+k*5)%5)*9;SP0.push(mk('rect',{x:1058+i*31,y:b-3-h,width:26,height:h,rx:3,fill:(i+k)%4===1?'var(--gain)':'var(--ink)'},$('spines0')))}});
const GB1=[],SB1=[];for(let i=0;i<8;i++){const w=200+((i*3)%4)*14;GB1.push(mk('rect',{x:280-w/2+((i%3)-1)*10,y:700-(i+1)*40,width:w,height:36,rx:4,fill:'var(--muted)'},$('gen1')))}
for(let i=0;i<3;i++)SB1.push(mk('rect',{x:480+(i%2)*8,y:700-(i+1)*40,width:180,height:36,rx:4,class:'gain'},$('spec1')));
const CL1=[];for(let i=0;i<4;i++)CL1.push(mk('rect',{x:922+i*68,y:482,width:56,height:136,rx:6,class:'gain'},$('cells1')));
fig($('lawp2'),760,470,36,'ink');fig($('fordp2'),1250,470,40,'gain');fig($('ford3'),200,500,30,'gain');
const B3=[],E3=[],W3=[];['HISTORY','LAW','FINANCE','ENGINEERING','SALES'].forEach((n,i)=>{const x=420+i*190;
W3.push(mk('path',{d:'M'+x+' 518V396','stroke-width':4,'stroke-dasharray':'8 8',stroke:'var(--line)'},$('exp3')));
const g=mk('g',{},$('exp3'));fig(g,x,290,24,'ink');const tx=mk('text',{x:x,y:245,'font-size':18,'text-anchor':'middle',class:'m'},g);tx.textContent=n;E3.push(g);
const b=mk('g',{},$('btn3'));const d=mk('path',{d:'M'+(x-34)+' 556a34 34 0 0 1 68 0z',class:'ink'},b);mk('rect',{x:x-46,y:556,width:92,height:14,rx:4,class:'ink'},b);B3.push([b,d])});
for(let i=1;i<8;i++){mk('path',{d:'M1000 '+(240+i*60)+'h480M'+(1000+i*60)+' 240v480',stroke:'var(--line)','stroke-width':1.5},$('grid5'))}
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(760+92*c).toFixed(0)+' '+(390+92*s).toFixed(0)+'L'+(760+122*c).toFixed(0)+' '+(390+122*s).toFixed(0),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays5'))}
const BR=[];for(let i=0;i<12;i++){const sx=160+(i*137)%320,sy=310+(i*89)%360,sr=(i*23)%40-20,r=Math.floor(i/4),c=i%4;
mk('rect',{x:sx-40,y:sy-18,width:80,height:36,rx:4,transform:'rotate('+sr+' '+sx+' '+sy+')'},$('ghost5'));
const g=mk('g',{},$('bricks5'));BR.push([g,mk('rect',{x:-40,y:-18,width:80,height:36,rx:4,class:'ink'},g),sx,sy,sr,1120+c*84+(r%2?42:0),640-r*40])}
const P6=[];for(let k=0;k<9;k++){const x=160+(k%3)*124,y=260+Math.floor(k/3)*124,e=[2,4,6].indexOf(k);
if(e<0)mk('rect',{x:x,y:y,width:116,height:116,rx:10,class:'ink'},$('puz6'));
else{mk('rect',{x:x+3,y:y+3,width:110,height:110,rx:10,fill:'none',class:'s-muted','stroke-width':4,'stroke-dasharray':'10 8'},$('puz6'));P6[e]=[mk('rect',{x:x,y:y,width:116,height:116,rx:10,class:'gain'},$('pcs6')),940-x,267+e*140-y]}}
const CD6=[];['Hire','Ask','Partner'].forEach((n,i)=>{const y=270+i*140,g=mk('g',{},$('cards6'));
mk('rect',{x:700,y:y,width:360,height:110,rx:16,fill:'var(--stage)',class:'s-line','stroke-width':3},g);fig(g,750,y+28,14,'ink');
const tx=mk('text',{x:800,y:y+68,'font-size':38,class:'d5'},g);tx.textContent=n;CD6.push(g);
mk('path',{d:'M1060 '+(y+55)+'L1250 480',class:'s-gain','stroke-width':4,'stroke-dasharray':'8 8'},$('links6'))});
for(let i=0;i<7;i++)mk('circle',{cx:620,cy:280+i*65,r:10,fill:'var(--stage)',class:'s-ink','stroke-width':4},$('spir7'));
const NB=[];[260,200,300,180,240].forEach((w,i)=>{const y=370+i*62,g=mk('g',{},$('rows7'));mk('circle',{cx:680,cy:y,r:8,class:'ink'},g);
const b=mk('rect',{x:705,y:y-8,width:w,height:16,rx:8,fill:'var(--line)'},g);
const s=i%2?null:mk('path',{d:'M695 '+y+'h'+(w+20),class:'s-loss','stroke-width':5,'stroke-linecap':'round'},g);NB.push([g,b,s])});
const QB8=[1220,1320,1420].map((x,i)=>{const c=mk('circle',{cx:x,cy:700,r:34,stroke:'var(--ink)','stroke-width':5},$('btns8'));const tx=mk('text',{x:x,y:710,'font-size':28,'text-anchor':'middle',class:'d'},$('btns8'));tx.textContent=i+1;return [c,tx]});