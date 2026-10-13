const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const drw=(id,k)=>{const e=$(id);e.style.strokeDashoffset=1-k;e.setAttribute('opacity',k>0?1:0)};
const strk=(id,x,w,k)=>{const e=$(id);e.setAttribute('x2',x+w*k);e.setAttribute('opacity',k>0?1:0)};
for(let i=0;i<6;i++)mk('circle',{cx:180+i*50,cy:250,r:9,class:'s-ink',fill:'var(--stage)','stroke-width':4},$('nbsp'));
// climber low on the slope; slope line y = 720-(x-540)*0.8077
fig($('clm'),640,555,20,'ink');
// goal rolls along the slope, offset along the slope normal so the line never crosses it
const SLN=[-0.628,-0.778], GOFF=46;
const RY=[530,620,710],RL=['Yourself','People who depend on you','Your future'];
const AR=RY.map((Y,i)=>{const a=mk('path',{d:'M735 620L880 '+Y,class:'s-gain','stroke-width':5,'stroke-dasharray':'8 8','stroke-linecap':'round'},$('arr2'));
  const g=mk('g',{id:'r2_'+i},$('rows2'));
  if(i===0)fig(g,920,Y-22,12,'ink');
  if(i===1)[896,920,944].forEach(x=>fig(g,x,Y-14,9,'ink'));
  if(i===2)mk('path',{d:'M910 '+(Y+28)+'V'+(Y-30)+'l40 14-40 14',class:'s-gain',fill:'none','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  const tx=mk('text',{x:980,y:Y+12,'font-size':34,class:'d5'},g);tx.textContent=RL[i];return a});
fig($('yg'),220,316,24,'ink');
['SUCCESS IS NOT OPTIONAL','COMMITTED TO LEARNING SALES','STOPPED WAITING TO FEEL READY'].forEach((s,i)=>{const g=mk('g',{id:'c3_'+i},$('chips3'));
  mk('circle',{cx:982,cy:553+i*60,r:8,class:'gain'},g);const tx=mk('text',{x:1000,y:560+i*60,'font-size':20,class:'m'},g);tx.textContent=s});
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(420+150*c)+' '+(520+150*s)+'L'+(420+170*c)+' '+(520+170*s),class:'s-muted','stroke-width':5,'stroke-linecap':'round'},$('ticks4'))}
fig($('youfig'),900,540,30,'gain');
const BB=[];for(let i=0;i<5;i++){const x=1130+i*75;fig($('cw'),x,600,20,'ink');const b=mk('g',{},$('bb5'));
  mk('rect',{x:x-26,y:500,width:52,height:50,rx:12,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},b);
  const tx=mk('text',{x:x,y:537,'font-size':32,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},b);tx.textContent=i%2?'?':'!';BB.push(b)}
const CE=[];for(let r=0;r<4;r++)for(let c=0;c<7;c++)CE.push(mk('rect',{x:134+c*56,y:302+r*56,width:48,height:48,rx:6,fill:'var(--line)'},$('cells')));
for(let i=0;i<5;i++){const a=Math.PI*(1+(i+1)/6),c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(330+80*c)+' '+(760+80*s)+'L'+(330+110*c)+' '+(760+110*s),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
const TR=[];for(let i=0;i<5;i++){const x=660+i*160,y=700-i*100;TR.push(mk('path',{d:'M'+(x+8)+' '+y+'h144',class:'s-gain','stroke-width':12,'stroke-linecap':'round'},$('treads')));
  const tx=mk('text',{x:x+80,y:y+40,'font-size':18,'text-anchor':'middle',class:'m'},$('treads'));tx.textContent=i<4?'WIN':'NEXT PUSH'}
fig($('clb'),0,-74,16,'ink');
const NP=[740,810,880].map(x=>{const g=mk('g',{},$('ntp'));fig(g,x,420,16,'gain');return g});
fig($('fsp'),1180,444,18,'ink');