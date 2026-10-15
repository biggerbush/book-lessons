const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,fill:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:c},g)};
for(let i=0;i<6;i++)mk('rect',{x:250+i*80,y:392+(i%2)*20,width:28,height:28,rx:4,fill:'var(--ice)',stroke:'var(--ink)','stroke-width':3},$('ice'));
const TP=[];for(let i=0;i<5;i++){const x=200+i*140,g=mk('g',{},$('team'));fig(g,x,640,26,'var(--ink)');
  mk('circle',{cx:x+34,cy:578,r:24,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const q=mk('text',{x:x+34,y:589,'font-size':30,'text-anchor':'middle',class:'d'},g);q.textContent='?';TP.push(g)}
const CW=[];[180,290,400,1200,1310,1420].forEach((x,a)=>[300,440,580].forEach((y,b)=>{const k=a*3+b,g=mk('g',{},$('crowd2'));
  fig(g,x,y,16,k===4?'var(--gain)':k%2?'var(--muted)':'var(--ink)');CW.push([g,(k*7)%18])}));
fig($('chemf'),240,360,34,'var(--ink)');
fig($('resf'),220,380,32,'var(--ink)');
const BH=[70,120,170,230,300],BR=BH.map((h,i)=>mk('rect',{x:520+i*180,y:640,width:120,height:0,fill:i>2?'var(--gain)':'var(--line)'},$('bars')));
const GR=[[230,390],[370,390]].map(([x,y])=>{const g=mk('g',{},$('gears'));
  mk('circle',{cx:x,cy:y,r:56,fill:'none',stroke:'var(--ink)','stroke-width':14,'stroke-dasharray':'10 9'},g);
  mk('circle',{cx:x,cy:y,r:44,fill:'var(--ink)'},g);mk('circle',{cx:x,cy:y,r:12,fill:'var(--stage)'},g);return [g,x,y]});
const CD=[0,1,2,3].map(i=>{const g=mk('g',{},$('cards'));
  mk('rect',{x:0,y:0,width:50,height:70,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('circle',{cx:25,cy:35,r:9,fill:i%2?'var(--loss)':'var(--ink)'},g);return g});
fig($('yok'),640,400,32,'var(--gain)');
const armA=mk('polyline',{fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},$('grab')),
  armB=mk('polyline',{fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},$('grab')),
  claw=mk('path',{fill:'none',stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round'},$('grab'));
fig($('sh0'),1170,400,26,'var(--ink)');fig($('sh1'),1420,400,26,'var(--gain)');