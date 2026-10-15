const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const T=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const R=(e,u,a,d=.5)=>rise(typeof e==='string'?$(e):e,p(u,a,a+d));
const DR=(id,k)=>$(id).setAttribute('stroke-dashoffset',(1-k).toFixed(3));
fig($('mirFig'),1300,330,36,'gain');
const P1=['ENTREPRENEUR','CELEBRITY','EMPLOYEE'].map((s,i)=>{const x=220+i*200,g=mk('g',{},$('ppl'));fig(g,x,380,34,i===2?'gain':'ink');
  if(i===2)mk('path',{d:'M'+x+' 432l-8 12 8 34 8-34z',class:'ink'},g);
  mk('path',{d:'M'+x+' 314V346',class:'s-muted','stroke-width':3},g);mk('rect',{x:x-60,y:270,width:120,height:44,rx:10,class:'gain'},g);
  T(g,x,299,'BRAND',{class:'m','font-size':20,'text-anchor':'middle',style:'fill:var(--on-gain)'});T(g,x,580,s,{class:'m','font-size':20,'text-anchor':'middle'});return g});
for(let i=0;i<12;i++)mk('rect',{x:180+(i%3)*80,y:410+Math.floor(i/3)*55,width:50,height:35,fill:'var(--line)'},$('cwin'));
fig($('shpF'),800,400,34,'ink');fig($('selF'),1290,400,34,'gain');fig($('tvF'),820,380,40,'gain');fig($('gryF'),240,380,40,'gain');
const EP=[];for(let i=0;i<8;i++)EP.push(mk('rect',{x:640+i*46,y:680,width:36,height:24,rx:5,fill:'var(--line)'},$('eps')));
const CR=[];for(let i=0;i<24;i++){const x=1110+(i%6)*66,y=330+Math.floor(i/6)*70,g=mk('g',{fill:'var(--ink)'},$('crowd'));mk('circle',{cx:x,cy:y,r:14},g);mk('path',{d:'M'+(x-18)+' '+(y+40)+'a18 18 0 0 1 36 0z'},g);CR.push(g)}
const BR=[];for(let i=0;i<5;i++)BR.push(mk('rect',{x:1040+i*80,y:640,width:50,height:0,class:'gain','fill-opacity':.35},$('bars')));
for(let i=0;i<8;i++)mk('rect',{x:180+(i%2)*100,y:370+Math.floor(i/2)*60,width:60,height:36,fill:'var(--line)'},$('jobw'));
const CH5=['REPUTATION','AUDIENCE','SKILLS','YOUR NAME'].map((s,i)=>{const g=mk('g',{},$('chips5'));mk('rect',{x:500,y:405+i*50,width:280,height:40,rx:20,class:'gain'},g);T(g,640,432+i*50,s,{class:'m','font-size':20,'text-anchor':'middle',style:'fill:var(--on-gain)'});return g});
const LV=[0,1].map(i=>mk('polygon',{fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},$('dr'+i)));
const TL=[],CK=[];for(let i=0;i<6;i++){const x=680+(i%3)*270,y=250+Math.floor(i/3)*180,g=mk('g',{},$('tiles'));
  mk('rect',{x:x,y:y,width:240,height:150,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g);
  const k=i%3;if(k===0)mk('circle',{cx:x+40,cy:y+42,r:16,class:'ink'},g);else if(k===1)mk('rect',{x:x+24,y:y+26,width:32,height:32,rx:9,class:'ink'},g);else mk('path',{d:'M'+(x+24)+' '+(y+58)+'l16-32 16 32z',class:'ink'},g);
  T(g,x+24,y+116,'@yourname',{class:'d5','font-size':30});TL.push(g);
  const c=mk('g',{},$('checks'));mk('circle',{cx:x+204,cy:y+40,r:18,class:'gain'},c);mk('path',{d:'M'+(x+195)+' '+(y+40)+'l6 6 11-12',fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round'},c);CK.push(c)}
const FL={1:'POST',3:'VIDEO',6:'REPLY'},FP=[];for(let i=0;i<8;i++){const s=i%2?1:-1,x=180+i*72+s*7,y=640-i*42+s*12,g=mk('g',{},$('prints'));
  mk('ellipse',{cx:x,cy:y,rx:12,ry:19,class:i===4?'loss':'gain',transform:'rotate(60 '+x+' '+y+')'},g);
  if(FL[i])T(g,x+26,y+44,FL[i],{class:'m','font-size':20});FP.push(g)}
const PN=[['TRUST UP','gain'],['TRUST DOWN','loss']].map(q=>{const g=mk('g',{},$('pans'));mk('path',{d:'M0 0L-70 130M0 0L70 130',class:'s-ink','stroke-width':3},g);
  mk('path',{d:'M-90 130h180a90 40 0 0 1-180 0z',class:q[1]},g);T(g,0,210,q[0],{class:'m','font-size':20,'text-anchor':'middle'});return g});
// closing scene: search results card
const RS=[0,1,2].map(i=>{const y=364+i*110,g=mk('g',{},$('res'));
  const av=mk('circle',{cx:1032,cy:y+22,r:22,fill:'var(--line)'},g);
  const tl=mk('rect',{x:1070,y:y+6,width:[300,240,270][i],height:16,rx:8,fill:'var(--line)'},g);
  mk('rect',{x:1070,y:y+36,width:360,height:10,rx:5,fill:'var(--line)'},g);
  mk('rect',{x:1070,y:y+56,width:[260,300,220][i],height:10,rx:5,fill:'var(--line)'},g);
  return [g,av,tl]});