const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const txt=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};
fig($('navF'),290,380,50,'ink');
const cards=[250,400,550].map((y,i)=>{const g=mk('g',{},$('thread'));mk('rect',{x:540,y:y,width:420,height:110,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('circle',{cx:584,cy:y+40,r:18,class:i?'ink':'gain'},g);mk('rect',{x:622,y:y+28,width:300,height:10,rx:5,fill:'var(--line)'},g);mk('rect',{x:622,y:y+58,width:i===2?160:240,height:10,rx:5,fill:'var(--line)'},g);return g});
for(let i=0;i<6;i++)mk('path',{d:'M1150 '+(680-i*80)+'H1330',class:'s-ink','stroke-width':6},$('rungs'));
const J=[340,800,1260].map((c,i)=>{const g=mk('g',{},$('jars'));mk('rect',{x:c-130,y:300,width:260,height:320,rx:36,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);mk('rect',{x:c-95,y:262,width:190,height:38,rx:10,class:'ink'},g);
  txt(g,{x:c,y:700,'font-size':52,'text-anchor':'middle',class:'d',style:i===2?'fill:var(--gain)':''},['Money','Status','Wealth'][i]);return g});
const BX=[0,1,2,3].map(()=>mk('rect',{x:560,y:694,width:26,height:26,rx:4,class:'gain'},$('boxes')));
const DT=[];for(let i=0;i<15;i++)DT.push(mk('circle',{cx:810+(i%5)*55,cy:450+Math.floor(i/5)*50,r:14,fill:'var(--line)'},$('dots')));
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(300+108*c).toFixed(1)+' '+(430+108*s).toFixed(1)+'L'+(300+122*c).toFixed(1)+' '+(430+122*s).toFixed(1),class:'s-ink','stroke-width':i%3?3:6},$('ticks'))}
const CN=[];for(let i=0;i<6;i++)CN.push(mk('ellipse',{cx:650,cy:560-i*26,rx:54,ry:16,class:'gain',stroke:'var(--stage)','stroke-width':3},$('coins')));
let op='';for(let i=0;i<8;i++){const a=(i+.5)*Math.PI/4;op+=(500+62*Math.cos(a)).toFixed(1)+','+(440+62*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:op,class:'loss'},$('stopO'));
fig($('plk'),210,500,22,'gain');fig($('plk'),590,500,22,'loss');
fig($('ppl'),920,476,20,'gain');fig($('ppl'),1380,476,20,'ink');fig($('ppl'),1440,476,20,'ink');
const PN=[[620,560,'WHAT'],[780,430,'WHO'],[920,420,'WHEN']].map(q=>{const g=mk('g',{},$('pins'));mk('circle',{cx:q[0],cy:q[1],r:16,class:'gain',stroke:'var(--ink)','stroke-width':4},g);txt(g,{x:q[0],y:q[1]-30,'font-size':22,'text-anchor':'middle',class:'m'},q[2]);return g});
fig($('stuF'),1280,330,34,'ink');
for(let i=0;i<12;i++)mk('circle',{cx:280+i*95,cy:220,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));
const RL=[380,460,540].map((y,i)=>{const g=mk('g',{},$('rowsL'));mk('circle',{cx:270,cy:y,r:10,class:'loss'},g);
  if(i===0)txt(g,{x:300,y:y+11,'font-size':32,class:'d5'},'Salary');else mk('path',{d:'M300 '+y+'H720',class:'s-line','stroke-width':5,'stroke-linecap':'round'},g);return g});