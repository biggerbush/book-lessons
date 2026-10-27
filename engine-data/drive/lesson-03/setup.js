const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const mid=(a,b,f)=>a+(b-a)*f, L=(a,b,k)=>a+(b-a)*k;
fig($('t_fig'),1150,589,36,'ink');
const CK=[];for(let i=0;i<4;i++){const y=310+i*56,g=$('chk');mk('rect',{x:160,y:y,width:32,height:32,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M210 '+(y+16)+'H'+(600-i*60),class:'s-line','stroke-width':6,'stroke-linecap':'round'},g);CK.push(mk('path',{d:'M166 '+(y+16)+'l9 9l16-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g))}
for(let x=180;x<=700;x+=104)mk('circle',{cx:x,cy:716,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('belt'));
const BXS=[0,1,2,3].map(()=>mk('rect',{y:632,width:56,height:56,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('boxes')));
const DR=[0,1,2,3,4,5].map(i=>mk('circle',{cx:i<3?1044:1260,r:6,class:'loss'},$('drips')));
const T0=[[250,690],[280,680],[310,695],[340,682],[300,705]],T1=[[140,732],[170,732],[410,732],[440,732],[470,732]];
const TK=T0.map(q=>mk('circle',{cx:q[0],cy:q[1],r:7,class:'ink'},$('tk')));
fig($('sci_p'),280,420,44,'ink');
for(let i=0;i<4;i++){fig($('gA_p'),600+i*100,330,22,'ink');fig($('gB_p'),600+i*100,630,22,'ink')}
const CS=[0,1,2,3].map(i=>{const g=mk('g',{},$('cash'));mk('rect',{x:1220,y:720-i*36,width:160,height:30,rx:4,class:'gain'},g);const tx=mk('text',{x:1300,y:743-i*36,'font-size':22,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},g);tx.textContent='$';return g});
const LT=[0,1,2,3,4,5].map(i=>mk('circle',{cx:470+i*34,cy:588,r:7,class:'ink'},$('lt_t')));