const pp=(g,x,y,r,c)=>{const h=mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g);return h};
const pt=(cx,cy,r,a)=>{const q=a*Math.PI/180;return (cx+r*Math.cos(q)).toFixed(1)+' '+(cy+r*Math.sin(q)).toFixed(1)};
const drops=[];for(let i=0;i<14;i++)drops.push(mk('path',{d:'M0 0l-6 22',class:'s-muted','stroke-width':4,'stroke-linecap':'round'},$('rain')));
const sheets=(g,n)=>Array.from({length:n},()=>mk('rect',{x:-20,y:-26,width:40,height:52,rx:4,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g));
const papers=sheets($('papers'),6), pap2=sheets($('pap2'),7);
const gear=(g,r,n)=>{let s='';for(let i=0;i<4*n;i++)s+=pt(0,0,i%4<2?r+16:r,i*90/n)+' ';mk('polygon',{points:s,class:'ink'},g);mk('circle',{cx:0,cy:0,r:r*.3,fill:'var(--stage)'},g)};
gear($('gA'),90,10);gear($('gB'),60,7);
const cells=[];for(let i=0;i<28;i++)cells.push(mk('circle',{cx:1100+(i%7)*50,cy:384+Math.floor(i/7)*66,r:14,fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-dasharray':'60 30'},$('cells')));
const chips=['1 · FOCUS','2 · LEAD MEASURES','3 · SCOREBOARD','4 · ACCOUNTABILITY'].map((s,i)=>{const x=880+(i%2)*300,y=630+Math.floor(i/2)*72,g=mk('g',{},$('rules'));
  mk('rect',{x:x,y:y,width:280,height:56,rx:28,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);
  const tx=mk('text',{x:x+140,y:y+35,'font-size':18,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=s;return g});
for(let i=0;i<10;i++){const a=(i*36-90)*Math.PI/180;mk('circle',{cx:400+245*Math.cos(a),cy:480+245*Math.sin(a),r:16,fill:'none',stroke:'var(--muted)','stroke-width':4},$('ten'))}
// team sight lines end at the scoreboard's left edge
const T4=[200,330,460,590].map((x,i)=>{mk('path',{d:'M'+x+' 610L748 '+(380+i*40),stroke:'var(--gain)','stroke-width':3,'stroke-dasharray':'8 8','stroke-linecap':'round'},$('looks'));return pp(mk('g',{},$('team')),x,640,24,'ink')});
for(let i=0;i<6;i++){const a=(i*60-90)*Math.PI/180;mk('circle',{cx:330+150*Math.cos(a),cy:520+150*Math.sin(a),r:30,class:i===1?'gain':'ink'},$('heads'))}
['MON','TUE','WED','THU','FRI'].forEach((d,c)=>{const tx=mk('text',{x:604+c*178,y:454,'font-size':22,class:'m'},$('wk'));tx.textContent=d;
  for(let r=0;r<3;r++)if(!(c===2&&r===1))mk('rect',{x:600+c*178,y:470+r*52,width:168,height:44,rx:8,fill:'var(--loss)','fill-opacity':.25},$('wk'))});
let op='';for(let i=0;i<8;i++)op+=pt(1360,735,62,22.5+i*45)+' ';mk('polygon',{points:op,class:'loss'},$('oct'));
const ot=mk('text',{x:1360,y:746,'font-size':30,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'},$('oct'));ot.textContent='STOP';
const chk=[];[170,290,410,530].forEach(x=>{pp($('ppl6'),x,280,24,'ink');for(let k=0;k<2;k++){const bx=x-42+k*48;
  mk('rect',{x:bx,y:410,width:36,height:36,rx:6,fill:'none',stroke:'var(--line)','stroke-width':4},$('ppl6'));
  chk.push(mk('path',{d:'M'+(bx+8)+' 428l7 8 14-16',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('chk6')))}});
const blk=[];for(let c=0;c<12;c++)for(let r=0;r<8;r++)blk.push([mk('rect',{x:120+c*30,y:770-r*26,width:24,height:20,rx:4,class:'gain'},$('stk6')),c]);
const orb=[];for(let i=0;i<8;i++)orb.push(mk('circle',{r:16,class:'ink'},$('orb')));
// closing clock ticks
for(let i=0;i<12;i++){const a=i*30-90;mk('path',{d:'M'+pt(1200,410,i%3===0?150:162,a)+'L'+pt(1200,410,176,a),class:'s-ink','stroke-width':i%3===0?8:5,'stroke-linecap':'round'},$('ticks'))}