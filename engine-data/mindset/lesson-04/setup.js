const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const drw=(el,k)=>{el.setAttribute('stroke-dasharray','1 1');el.setAttribute('stroke-dashoffset',(1-k).toFixed(3))};
const mv=(el,x,y)=>el.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')');
const bar=(id,h)=>{const e=$(id);e.setAttribute('y',(700-h).toFixed(1));e.setAttribute('height',Math.max(h,0).toFixed(1))};
const puz=(g,x0,y0,n,s)=>{for(let r=0;r<n;r++)for(let c=0;c<n;c++){const x=x0+c*s,y=y0+r*s,k=(r*3+c*2)%4;mk('rect',{x:x,y:y,width:s,height:s,fill:'none',stroke:'var(--line)','stroke-width':3},g);
  if(r===n-1&&c===n-1)tx(g,x+s/2,y+s*.72,'?',{class:'d','font-size':Math.round(s*.6),'text-anchor':'middle',style:'fill:var(--gain)'});
  else if(k===0)mk('circle',{cx:x+s/2,cy:y+s/2,r:s*.25,class:'ink'},g);
  else if(k===1)mk('rect',{x:x+s*.25,y:y+s*.25,width:s*.5,height:s*.5,class:'ink'},g);
  else if(k===2)mk('path',{d:'M'+(x+s/2)+' '+(y+s*.2)+'l'+(s*.3)+' '+(s*.55)+'h-'+(s*.6)+'z',class:'ink'},g)}};
puz($('pz1g'),725,240,3,50); puz($('pz3g'),712,242,4,44);
const KL=[],KR=[];for(let i=0;i<12;i++){const g=mk('g',{},$(i<6?'kl':'kr'));fig(g,305+i*90,520,18,'ink');(i<6?KL:KR).push(g)}
const paint=(arr,cls)=>arr.forEach(g=>g.childNodes.forEach(c=>c.setAttribute('class',cls)));
// scene 2: two groups of kids who walk to the task they choose (schematic)
const DT=[];let ne=0,nc=0;for(let i=0;i<20;i++){const L=i<10,j=i%10,toC=L?j>=7:j<9,k=toC?nc++:ne++;
  const g=mk('g',{},$('dots'));fig(g,0,0,12,L?'loss':'gain');
  DT.push({e:g,L:L,j:j,sx:(L?530:870)+(j%5)*50,sy:360+Math.floor(j/5)*80,ex:(toC?1214:254)+(k%4)*44,ey:340+Math.floor(k/4)*72})}
const CP=['EFFORT','STRATEGIES','FOCUS','PERSISTENCE','IMPROVEMENT'].map((s,i)=>{const g=mk('g',{},$('chips6')),x=120+i*277;
  mk('rect',{x:x,y:200,width:252,height:60,rx:30,class:'gain'},g);tx(g,x+126,238,s,{class:'m','font-size':20,'text-anchor':'middle',style:'fill:var(--on-gain)'});return g});
const KJ=mk('g',{},$('kidJ'));fig(KJ,450,679,24,'ink');