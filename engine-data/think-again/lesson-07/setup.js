const fig=(g,x,y,r,c)=>{const G=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},G);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},G);return G};
const dr=(el,k)=>{el.style.strokeDasharray='1';el.style.strokeDashoffset=(1-k).toFixed(3)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const B1=[300,440,580].map((x,i)=>{fig($('ppl1'),x,600,24,'ink');const b=mk('g',{},$('ppl1'));mk('rect',{x:x-34,y:508,width:68,height:54,rx:14,class:'gain'},b);tx(b,x,548,i==1?'?':'!',{class:'d','font-size':36,'text-anchor':'middle',style:'fill:var(--on-gain)'});return b});
fig($('me1'),960,600,24,'ink');fig($('rf1'),1180,580,20,'s-muted').setAttribute('opacity',.5);
for(let i=0;i<3;i++)for(let j=0;j<3;j++)mk('rect',{x:200+i*95,y:490+j*70,width:60,height:44,class:'s-line',fill:'none','stroke-width':4},$('win2'));
fig($('nf3'),260,360,30,'gain');fig($('wf3'),980,360,30,'ink');
const OK3=[],HD3=[];for(let i=0;i<5;i++){OK3.push(mk('circle',{cx:200+i*110,cy:560,r:20,fill:'var(--stage)',stroke:'var(--line)','stroke-width':5},$('ok3')));HD3.push(mk('circle',{cx:920+i*110,cy:560,r:20,class:'loss'},$('hd3')))}
fig($('lf4'),480,370,34,'gain');
const CM4=[200,160,180].map((w,i)=>{const g=mk('g',{},$('cm4'));mk('circle',{cx:715,cy:347+i*50,r:12,fill:'var(--muted)'},g);mk('rect',{x:740,y:340+i*50,width:w,height:14,rx:7,class:'loss'},g);return g});
const AR4=[];for(let i=0;i<4;i++){const x=1120+i*100;fig($('ef4'),x,420,26,'ink');const a=mk('g',{},$('ef4'));mk('path',{d:'M'+(x+30)+' 490L'+(x+50)+' 410',stroke:'var(--gain)','stroke-width':10,'stroke-linecap':'round'},a);mk('circle',{cx:x+50,cy:404,r:10,class:'gain'},a);AR4.push(a)}
fig($('kid5'),420,470,18,'gain');
fig($('dg5'),0,0,22,'ink');mk('path',{d:'M30 30L70 -40M58 -56l28 18',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round'},$('dg5'));
const HL6=[];for(let r=0;r<5;r++)for(let c=0;c<7;c++){const e=mk('rect',{x:142+c*58,y:336+r*56,width:46,height:46,rx:8,fill:'none',stroke:'var(--line)','stroke-width':4},$('grd6'));if((c==2&&r==1)||(c==5&&r==3))HL6.push(e)}
const TB7=[1140,1260,1380].map(x=>fig($('tp7'),x,280,22,'ink'));