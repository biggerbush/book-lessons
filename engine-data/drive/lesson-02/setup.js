const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const txt=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const pill=(par,x,y,w,s,fs)=>{const g=mk('g',{},par);mk('rect',{x:x,y:y,width:w,height:y>600?70:64,rx:32,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);txt(g,x+w/2,y+(y>600?43:40),s,{class:'m','font-size':fs,'text-anchor':'middle'});return g};
const P1=['FIND FOOD','STAY SAFE','REPRODUCE'].map((s,i)=>{const x=800+i*240;mk('path',{d:'M'+(x+100)+' 364L1140 510',class:'s-line','stroke-width':3,'stroke-dasharray':'6 8'},$('pills1'));return pill($('pills1'),x,300,200,s,20)});
const HS=[0,1,2].map(i=>{const x=150+i*130,g=mk('g',{},$('houses'));mk('rect',{x:x,y:450,width:100,height:90,class:'s-ink',fill:'var(--stage)','stroke-width':5},g);mk('path',{d:'M'+(x-10)+' 450L'+(x+50)+' 390L'+(x+110)+' 450Z',class:'ink'},g);return g});
fig($('cpers'),800,400,26,'ink');
const SM=[0,1,2].map(()=>mk('circle',{cx:1375,cy:300,r:14,fill:'var(--line)'},$('smoke')));
for(let i=0;i<9;i++)mk('circle',{cx:160+i*100,cy:415,r:7,class:'ink'},$('rollers'));
fig($('workers'),320,480,22,'ink');fig($('workers'),760,480,22,'ink');
const WG=[...Array(8)].map(()=>mk('rect',{y:356,width:40,height:40,rx:6,class:'ink'},$('wid')));
const BR=[0,1,2].map(i=>{const b=1140+i*110;return [mk('rect',{x:b,width:36,class:'gain'},$('bars')),mk('rect',{x:b+40,width:36,class:'ink'},$('bars')),90*(i+1)]});
const PD=['WRITERS','EDITORS','MANAGERS'].map((s,i)=>{const x=280+i*160,g=mk('g',{},$('paidp'));fig(g,x,470,26,'ink');mk('circle',{cx:x+40,cy:440,r:18,class:'gain'},g);txt(g,x+40,448,'$',{class:'d','font-size':22,'text-anchor':'middle',style:'fill:var(--on-gain)'});txt(g,x,620,s,{class:'m','font-size':18,'text-anchor':'middle'});return g});
const VL=[0,1,2,3,4].map(i=>{const x=920+i*120,g=mk('g',{},$('volp'));fig(g,x,480,22,'ink');mk('path',{d:'M'+x+' 434c-18-12-20-26-9-28c5-1 8 2 9 5c1-3 4-6 9-5c11 2 9 16-9 28z',class:'gain'},g);return g});
const DT=[...Array(14)].map((_,i)=>{const a=i*2*Math.PI/14;return mk('circle',{cx:(420+230*Math.cos(a)).toFixed(1),cy:(470+230*Math.sin(a)).toFixed(1),r:10,class:'gain'},$('dots'))});
const CL=[220,320,180,280,360,240,300].map((w,i)=>mk('rect',{x:160+(i%3===1?40:0),y:283+i*34,width:w,height:14,rx:7,fill:i%3===2?'var(--gain)':i%2?'var(--muted)':'var(--ink)'},$('lines')));
// three programmers side by side inside the code window, right of the code lines
[606,660,714].forEach(x=>fig($('devs'),x,430,14,'ink'));
const PL=['CHALLENGE','ENJOYMENT','DESIRE TO CONTRIBUTE'].map((s,i)=>pill($('pills6'),330+i*380,655,340,s,22));