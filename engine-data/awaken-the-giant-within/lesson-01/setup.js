const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(30*c).toFixed(1)+' '+(30*s).toFixed(1)+'L'+(58*c).toFixed(1)+' '+(58*s).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('t0rays'))}
person($('trav'),560,650,22,'ink');
const W={n1:145,n2:306};
function msr(){for(const k in W){try{const v=$(k).getComputedTextLength();if(v>0)W[k]=v}catch(e){}}}
msr(); if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{msr();render(t)});
const RP=['MAYBE LATER','PLAN B','GIVE UP','STAY THE SAME'].map((s,i)=>{const yb=330+i*120,g=mk('g',{},$('opts'));
  mk('rect',{x:160,y:yb-30,width:240,height:60,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:280,y:yb+8,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;
  const Y=x=>yb+(x-400)/656*(500-yb);
  const a=mk('path',{d:'M400 '+yb+'L722 '+Y(722).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ropes'));
  const b=mk('path',{d:'M738 '+Y(738).toFixed(1)+'L1056 500',class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ropes'));
  return {g:g,a:a,b:b,cy:Y(730)}});
const SB=[0,1].map(()=>{const g=mk('g',{},$('sc'));mk('path',{d:'M-40 0H90',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},g);mk('circle',{cx:-58,cy:0,r:18,fill:'none',class:'s-ink','stroke-width':7},g);return g});
mk('circle',{cx:0,cy:0,r:6,class:'gain'},$('sc'));
const FL=[470,510,550,590].map(y=>mk('path',{d:'M140 '+y+'H1250',class:'s-loss','stroke-width':4,'stroke-dasharray':'50 70','stroke-linecap':'round'},$('flow')));
const FF=[0,1,2,3,4].map(i=>mk('path',{d:'M'+(1285+i*35)+' 440V760',class:'s-loss','stroke-width':4,'stroke-dasharray':'40 30'},$('fl')));
mk('rect',{x:-60,y:0,width:120,height:22,rx:4,class:'ink'},$('raft'));person($('raft'),0,-55,13,'gain');
const CD=['1 · FOCUS','2 · MEANING','3 · ACTION'].map((s,i)=>{const x=120+i*460,g=mk('g',{},$('cards'));
  const r=mk('rect',{x:x,y:240,width:440,height:480,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':5},g);
  const a=mk('text',{x:x+30,y:292,'font-size':24,class:'m'},g);a.textContent=s;
  const b=mk('text',{x:x+30,y:670,'font-size':34,class:'d5'},g);b.textContent=['What you focus on','What it means to you','What you do about it'][i];return [g,r]});
const FP=[[1170,570,-1],[1230,530,1],[1240,460,-1],[1300,420,1],[1310,350,-1],[1370,310,1]].map(q=>mk('ellipse',{cx:q[0],cy:q[1],rx:15,ry:24,class:'ink',transform:'rotate('+(q[2]*12)+' '+q[0]+' '+q[1]+')'},$('ft')));
const LA=$('rA').getTotalLength(),LB=$('rB').getTotalLength();$('rB').setAttribute('stroke-dasharray',LB);
const BB=830, BR=[0,1,2,3,4].map(i=>mk('rect',{x:980+i*52,y:BB,width:36,height:0,rx:6,class:'gain'},$('bars')));
const WW=[150,150,150,90],WL=WW.map((w,i)=>mk('path',{d:'M1230 '+(320+i*60)+'h'+w,class:'s-ink','stroke-width':5,pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},$('wl')));