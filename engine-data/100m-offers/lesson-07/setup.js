const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const strk=(id,x0,w,k)=>{const e=$(id);e.setAttribute('x2',(x0+w*k).toFixed(1));e.setAttribute('opacity',k>0?1:0)};
const STEPS=['CROWD','PRICE','VALUE','STACK','ENHANCERS'];
const chipRow=(g,y,h)=>STEPS.map((s,i)=>{const x=120+i*281,c=mk('g',{},g);
  const r=mk('rect',{x:x,y:y,width:236,height:h,rx:h/2,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},c);
  const e=tx(c,x+118,y+h/2+7,s,{class:'m','font-size':20,'text-anchor':'middle'});
  if(i<4)mk('path',{d:'M'+(x+242)+' '+(y+h/2)+'h30m-10-10 10 10-10 10',fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},c);
  return [c,r,e]});
const GY=[],TG=[],PR=['$$','$$$','$','$$'];
for(let i=0;i<4;i++){const x=120+i*350,g=mk('g',{},$('gyms'));
  mk('rect',{x:x,y:330,width:300,height:290,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},g);
  mk('rect',{x:x+60,y:268,width:180,height:60,rx:10,class:'ink'},g);
  tx(g,x+150,308,'GYM',{class:'m','font-size':26,'text-anchor':'middle',style:'fill:var(--stage)'});
  for(let j=0;j<2;j++)mk('rect',{x:x+40+j*140,y:380,width:80,height:70,fill:'none',stroke:'var(--line)','stroke-width':5},g);
  mk('rect',{x:x+120,y:520,width:60,height:100,class:'ink'},g);GY.push(g);
  const t=mk('g',{},$('tags'));
  const r=mk('path',{d:'M'+(x+80)+' 660h110l30 35-30 35h-110z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},t);
  tx(t,x+140,708,PR[i],{class:'d','font-size':34,'text-anchor':'middle'});TG.push([t,r])}
const CR=[];for(let r=0;r<6;r++)for(let c=0;c<6;c++)CR.push(mk('circle',{cx:160+c*90,cy:280+r*90,r:16},$('crowd2')));
person($('pers2'),860,380,40,'gain');
const SG=['ATTENTION','COACHING','CARE'].map((s,i)=>{const g=mk('g',{},$('segs'));mk('path',{d:'M460 '+(400+i*100)+'h180',stroke:'var(--stage)','stroke-width':5},g);tx(g,670,358+i*100,s,{class:'m','font-size':22});return g});
const CM=[1020,1180,1340].map(x=>{const g=mk('g',{},$('cmt'));person(g,x,400,30,'ink');mk('path',{d:'M'+(x-18)+' 330l12 12 24-26',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
let sp='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?16:40;sp+=(360+r*Math.cos(a)).toFixed(1)+','+(405+r*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:sp,class:'gain'},$('star4'));
[800,880,960].forEach(x=>person($('nBp'),x,362,14,'gain'));
const OBG=['NO TIME TO COOK','NO IDEA WHAT TO EAT','NO ONE KEEPING THEM ON TRACK'].map((s,i)=>{const y=280+i*120,g=mk('g',{},$('obs5'));
  const r=mk('rect',{x:120,y:y,width:520,height:90,rx:14,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);
  tx(g,150,y+54,s,{class:'m','font-size':22,style:'fill:var(--ink)'});return [g,r]});
const SOG=['Meal plans','Shopping lists','Check-ins'].map((s,i)=>{const y=280+i*120,g=mk('g',{},$('sol5'));
  mk('path',{d:'M664 '+(y+45)+'h96m-16-16 16 16-16 16',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  mk('rect',{x:800,y:y,width:520,height:90,rx:14,class:'gain'},g);tx(g,830,y+58,s,{class:'d5','font-size':36,style:'fill:var(--on-gain)'});return g});
const SE=[];for(let i=0;i<12;i++)SE.push(mk('rect',{x:650+(i%4)*80,y:340+Math.floor(i/4)*80,width:60,height:60,rx:8,stroke:'var(--ink)','stroke-width':4},$('seats')));
for(let i=0;i<4;i++){const x=140+i*160,g=$('same7');mk('path',{d:'M'+x+' 320L'+(x+50)+' 280L'+(x+100)+' 320z',class:'ink'},g);
  mk('rect',{x:x,y:320,width:100,height:100,fill:'var(--stage)',stroke:'var(--muted)','stroke-width':4},g);tx(g,x+50,380,'GYM',{class:'m','font-size':18,'text-anchor':'middle'});
  if(i<3)tx(g,x+130,385,'=',{class:'d','font-size':40,'text-anchor':'middle',style:'fill:var(--muted)'})}
const C7=chipRow($('steps7'),690,64), C8=chipRow($('steps8'),760,64);