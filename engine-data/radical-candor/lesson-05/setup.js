const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const sk=(id,k)=>$(id).setAttribute('stroke-dashoffset',(1-k).toFixed(3));

fig($('col'),0,420,40,'ink');
mk('rect',{x:-18,y:426,width:36,height:12,rx:4,fill:'var(--stage)'},$('col'));
const sp1=mk('rect',{x:-12,y:427,width:9,height:10,class:'loss'},$('col'));
fig($('you1'),0,420,40,'gain');
const Q4=['HUMBLE','HELPFUL','IMMEDIATE','IN PERSON'].map((s,i)=>{const g=mk('g',{},$('q4')),x=120+i*350;
  mk('rect',{x:x,y:700,width:300,height:70,rx:35,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);
  tx(g,x+150,744,s,{class:'m','font-size':22,'text-anchor':'middle',style:'fill:var(--ink)'});return g});

fig($('ppl2'),880,620,28,'gain'); fig($('ppl2'),1300,620,28,'ink');

for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(260+80*c).toFixed(1)+' '+(420+80*s).toFixed(1)+'L'+(260+92*c).toFixed(1)+' '+(420+92*s).toFixed(1),stroke:'var(--ink)','stroke-width':4},$('ticks'))}
for(let r=0;r<3;r++)for(let c=0;c<4;c++)mk('circle',{cx:1220+c*54,cy:400+r*44,r:9,fill:'var(--muted)','fill-opacity':.5},$('calg'));

let bp='';for(let i=0;i<16;i++){const a=i*Math.PI/8,r=i%2?30:64;bp+=(640+r*Math.cos(a)).toFixed(1)+','+(320+r*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:bp,class:'loss'},$('bl'));
fig($('fc'),960,320,40,'gain'); fig($('fc'),1360,320,40,'ink');
[960,1360].forEach(x=>[-13,13].forEach(d=>mk('circle',{cx:x+d,cy:312,r:5,fill:'var(--stage)'},$('fc'))));
mk('path',{d:'M946 334q14 12 28 0',fill:'none',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},$('fc'));
const mB=mk('path',{fill:'none',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},$('fc'));
const W5=[1130,1165,1200].map(x=>mk('path',{d:'M'+x+' 300q18 20 0 40',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('fc')));
[['IN PERSON','var(--gain)','var(--gain)','var(--on-gain)'],['VIDEO / PHONE','var(--stage)','var(--gain)','var(--ink)'],['EMAIL','var(--stage)','var(--line)','var(--muted)']].forEach((c,i)=>{const x=120+i*460;
  mk('rect',{x:x,y:645,width:380,height:90,rx:45,fill:c[1],stroke:c[2],'stroke-width':4},$('rk'));
  tx($('rk'),x+190,699,c[0],{class:'m','font-size':24,'text-anchor':'middle',style:'fill:'+c[3]});
  if(i<2)tx($('rk'),x+420,708,'›',{class:'d','font-size':56,'text-anchor':'middle',style:'fill:var(--muted)'})});

fig($('pr6p'),260,330,30,'gain'); fig($('pr6p'),400,330,30,'ink');
fig($('pu6p'),1160,380,30,'gain');
[920,980,1340,1400].forEach(x=>mk('circle',{cx:x,cy:510,r:18,class:'ink'},$('pu6p')));

const NT=[];for(let i=0;i<24;i++){const c=i%12,r=Math.floor(i/12);NT.push(mk('rect',{x:480+c*82,y:300+r*76,width:48,height:48,rx:8,class:'gain'},$('notes')))}