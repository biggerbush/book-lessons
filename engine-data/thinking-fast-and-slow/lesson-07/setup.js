const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const fins=(g,x1,x2,y,s,out,sw)=>{const d=out?s:-s;mk('path',{d:'M'+x1+' '+y+'l'+(-d)+' '+(-s)+'M'+x1+' '+y+'l'+(-d)+' '+s+'M'+x2+' '+y+'l'+d+' '+(-s)+'M'+x2+' '+y+'l'+d+' '+s,class:'s-ink','stroke-width':sw,'stroke-linecap':'round',fill:'none'},g)};
const mine=(g,x,y,r)=>{mk('circle',{cx:x,cy:y,r:r,class:'loss'},g);mk('path',{d:'M'+x+' '+(y-r)+'q6 -14 16 -16',class:'s-ink','stroke-width':3,fill:'none','stroke-linecap':'round'},g)};
const bar=(id,h)=>{const e=$(id);e.setAttribute('y',(700-h).toFixed(1));e.setAttribute('height',Math.max(0,h).toFixed(1))};
fins($('fa'),420,1020,340,50,1,8);fins($('fb'),420,1020,560,50,0,8);
for(let i=0;i<=12;i++)mk('path',{d:'M'+(420+i*50)+' 690v'+(i%2?16:28),class:'s-ink','stroke-width':3},$('rticks'));
[[560,1],[670,0]].forEach(([y,o])=>{mk('path',{d:'M300 '+y+'H580',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('mini'));fins($('mini'),300,580,y,32,o,6)});
fig($('auth'),280,430,48,'ink');{const tx=mk('text',{x:280,y:690,'font-size':22,'text-anchor':'middle',class:'m'},$('auth'));tx.textContent='KAHNEMAN'}
[[820,330],[990,620],[1200,330],[1430,600],[1050,360],[1240,640],[1420,320]].forEach(q=>mine($('mines'),q[0],q[1],12));
const BM=[[880,430,'BIG PURCHASE'],[1100,560,'CAREER MOVE'],[1320,420,'SNAP JUDGMENT']].map(([x,y,s])=>{const g=mk('g',{},$('bigm'));mine(g,x,y,24);const tx=mk('text',{x:x,y:y+50,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
fig($('wIn'),0,596,20,'ink');
fig($('dec'),440,470,46,'loss');fig($('obs'),1160,470,46,'gain');
const TH=[];for(let i=0;i<6;i++)TH.push(mk('circle',{r:8+(i%3)*3,fill:'none',stroke:'var(--loss)','stroke-width':4},$('busy')));
for(let i=0;i<3;i++)for(let j=0;j<4;j++)mk('rect',{x:200+i*100,y:340+j*80,width:60,height:46,fill:'var(--line)',stroke:'var(--ink)','stroke-width':3},$('wins'));
const TK=[];for(let i=0;i<5;i++){const y=350+i*80;mk('rect',{x:690,y:y,width:40,height:40,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rows'));mk('path',{d:'M760 '+(y+20)+'H'+(1010-(i%2)*60),class:'s-line','stroke-width':8,'stroke-linecap':'round'},$('rows'));TK.push(mk('path',{d:'M698 '+(y+20)+'l10 10l18-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('rows')))}
fig($('p1'),600,470,44,'ink');fig($('p2'),1020,470,44,'gain');