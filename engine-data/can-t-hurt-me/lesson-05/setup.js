const PT=(cx,cy,R,f)=>{const a=Math.PI*(1-f);return [cx+R*Math.cos(a),cy-R*Math.sin(a)]};
const ARC=(cx,cy,R,f0,f1)=>{if(f1-f0<.002)return '';const a=PT(cx,cy,R,f0),b=PT(cx,cy,R,f1);return 'M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'A'+R+' '+R+' 0 0 1 '+b[0].toFixed(1)+' '+b[1].toFixed(1)};
const NEED=(el,cx,cy,R,f)=>{const b=PT(cx,cy,R,f);el.setAttribute('x2',b[0].toFixed(1));el.setAttribute('y2',b[1].toFixed(1))};
const R0=mk('g',{},$('run0'));mk('circle',{cx:0,cy:-170,r:22,class:'ink'},R0);
const RL=mk('path',{fill:'none',class:'s-ink','stroke-width':9,'stroke-linecap':'round','stroke-linejoin':'round'},R0);
const SWD=[266,394].map(()=>mk('path',{d:'M0 -12c6 8 8 12 0 18c-8-6-6-10 0-18z',class:'loss'},$('sweat')));
const F4=[330,360,395].map(r=>PT(560,640,r,.4));
mk('path',{d:'M'+F4[0]+'L'+F4[1],class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('fm'));
mk('text',{x:F4[2][0],y:F4[2][1],'font-size':22,'text-anchor':'middle',class:'m'},$('fm')).textContent='40%';
for(let i=0;i<24;i++){const a=i*Math.PI/12,r1=i%6?128:116;mk('path',{d:'M'+(330+r1*Math.sin(a)).toFixed(1)+' '+(460-r1*Math.cos(a)).toFixed(1)+'L'+(330+140*Math.sin(a)).toFixed(1)+' '+(460-140*Math.cos(a)).toFixed(1),class:'s-ink','stroke-width':i%6?3:6,'stroke-linecap':'round'},$('tk'))}
const CC=[];for(let i=0;i<28;i++)CC.push(mk('rect',{x:1144+(i%7)*38,y:404+Math.floor(i/7)*52,width:30,height:40,rx:6,fill:'var(--line)'},$('cells')));
['LEGS FAILING','FEET FAILING','BLOOD IN URINE'].forEach((s,i)=>{const x=480+i*280,g=mk('g',{id:'pm'+i},$('pms'));
  mk('circle',{cx:x,cy:340,r:32,fill:'none',class:'s-loss','stroke-width':6},g);
  mk('text',{x:x,y:356,'font-size':44,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},g).textContent='!';
  mk('text',{x:x,y:410,'font-size':18,'text-anchor':'middle',class:'m'},g).textContent=s});
for(let i=0;i<8;i++){const a=Math.PI*(-1+i/7);mk('path',{d:'M'+(300+112*Math.cos(a)).toFixed(1)+' '+(420+112*Math.sin(a)).toFixed(1)+'L'+(300+142*Math.cos(a)).toFixed(1)+' '+(420+142*Math.sin(a)).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
const B6=[];for(let i=0;i<5;i++){const h=60+i*50;B6.push(mk('rect',{x:1100+i*72,y:600-h,width:50,height:h,rx:6,class:i===4?'gain':'ink'},$('bars6')))}