const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const sh=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*2.7)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0z',class:cls},g)};
const rv=(id,uu,a)=>rise($(id),p(uu,a,a+.5));
const R0=[];for(let i=0;i<10;i++){const a=i*Math.PI/5,c=Math.cos(a),s=Math.sin(a);if(s>.8)continue;R0.push(mk('path',{d:'M'+(1300+140*c).toFixed(0)+' '+(380+180*s).toFixed(0)+'L'+(1300+180*c).toFixed(0)+' '+(380+222*s).toFixed(0),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays0')))}
person($('p1'),320,430,40,'ink');
person($('emp'),300,400,70,'ink');
for(let i=0;i<8;i++){const d=-165+i*20+(i<4?0:70),a=d*Math.PI/180;mk('ellipse',{cx:(300+84*Math.cos(a)).toFixed(1),cy:(400+84*Math.sin(a)).toFixed(1),rx:15,ry:7,class:'gain',transform:'rotate('+(d+90)+' '+(300+84*Math.cos(a)).toFixed(1)+' '+(400+84*Math.sin(a)).toFixed(1)+')'},$('emp'))}
[['panL','MY VIEW OF ME',[0],'gain'],['panR','THEIR VIEW OF ME',[-50,0,50],'ink']].forEach(q=>{const g=$(q[0]);mk('path',{d:'M0 0L-100 160M0 0L100 160',class:'s-ink','stroke-width':3},g);
  q[2].forEach(x=>person(g,x,92,14,q[3]));mk('path',{d:'M-110 160a110 36 0 0 0 220 0z',class:'ink'},g);
  const tx=mk('text',{x:0,y:236,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=q[1]});
person($('p3'),800,470,30,'ink');
for(let i=0;i<9;i++){const x=260+i*135;sh($('aud'),x,760,26,'ink');mk('path',{d:'M'+x+' 734L800 520',class:'s-loss','stroke-width':3,'stroke-dasharray':'6 8'},$('gz'))}
[190,290,390,490].forEach(x=>{sh($('peers'),x,680,22,'ink');mk('circle',{cx:x+28,cy:618,r:26,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('me4'));
  const tx=mk('text',{x:x+28,y:624,'font-size':18,'text-anchor':'middle',class:'m'},$('me4'));tx.textContent='ME'});
person($('p5'),400,560,26,'ink');
// cage bars: the bar in the doorway stops at the lintel
[840,880,920,960].forEach(x=>mk('path',{d:'M'+x+' '+(440-Math.sqrt(10000-(x-900)*(x-900))).toFixed(0)+'V'+(x===960?520:640),class:'s-ink','stroke-width':4},$('cage')));
$('cage').appendChild($('door'));
// flight path from the cage door out to freedom
const BZ=f=>{const a=(1-f)*(1-f),b=2*(1-f)*f,c=f*f;return [a*880+b*1080+c*1310,a*590+b*560+c*330]};
const TR=[];for(let i=0;i<16;i++){const f=.08+i*.052,q=BZ(f);TR.push([f,mk('circle',{cx:q[0].toFixed(1),cy:q[1].toFixed(1),r:5,class:'gain'},$('trail'))])}
const TG=['Try things','Make mistakes','Be yourself'].map((s,i)=>{const g=mk('g',{},$('tags'));mk('rect',{x:1120,y:470+i*90,width:340,height:64,rx:32,class:'gain'},g);
  const tx=mk('text',{x:1290,y:512+i*90,'font-size':30,'text-anchor':'middle',class:'d5',style:'fill:var(--on-gain)'},g);tx.textContent=s;return g});
person($('out6'),260,480,16,'ink');person($('out6'),330,486,16,'ink');
person($('me6'),430,620,34,'ink');
person($('q6p'),880,320,26,'ink');person($('q6p'),1400,320,26,'gain');
const G6=[...$('gz6').children];
person($('walker'),600,420,40,'ink');
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1250+100*c).toFixed(0)+' '+(540+100*s).toFixed(0)+'L'+(1250+130*c).toFixed(0)+' '+(540+130*s).toFixed(0),class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays7'))}