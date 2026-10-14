const fig=(g,x,y,r,cls)=>{const G=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},G);mk('path',{d:'M'+(x-1.5*r)+' '+(y+4.2*r)+'v'+(-1.3*r)+'a'+1.5*r+' '+1.5*r+' 0 0 1 '+3*r+' 0v'+1.3*r+'z',class:cls},G);return G};
const dr=(el,k)=>{el.style.strokeDasharray='1 1';el.style.strokeDashoffset=(1-k).toFixed(3)};
fig($('covF'),1370,330,30,'loss');fig($('qP'),1370,620,30,'gain');
const RG=[],RP=[];for(let i=0;i<5;i++){const y=740-i*110,g=mk('g',{},$('rungs'));RG.push(g);
  RP.push(mk('path',{d:'M340 '+y+'H600',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},g));
  const n=mk('text',{x:300,y:y+12,class:'d','font-size':36,'text-anchor':'end'},g);n.textContent=i+1;
  if(i<3){const l=mk('text',{x:680,y:y+8,class:'m','font-size':22},g);l.textContent='LEVEL '+(i+1)}}
fig($('climb'),0,-80,16,'gain');
fig($('dsP'),300,360,48,'ink');
const SMK=[0,1,2].map(()=>mk('circle',{cx:1295,cy:280,r:16,fill:'var(--line)'},$('smoke')));
const CK=[];for(let i=0;i<15;i++){const x=555+(i%5)*66,y=325+Math.floor(i/5)*74;
  mk('rect',{x:x,y:y,width:56,height:56,rx:6,fill:'none',class:'s-line','stroke-width':3},$('calG'));
  CK.push(mk('path',{d:'M'+(x+14)+' '+(y+30)+'l10 10 20-22',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('calG')))}
const TL=[];for(let i=0;i<25;i++)TL.push(mk('rect',{x:120+i*54.4,y:660,width:46,height:50,rx:6,fill:'var(--stage)',stroke:i?'var(--ink)':'var(--loss)','stroke-width':i?3:5},$('tl')));
const ML=[0,1,2].map(i=>{const x=130+i*170,g=mk('g',{},$('mills')),b=mk('g',{},g);
  mk('rect',{x:x+122,y:340,width:24,height:160,class:'ink'},b);
  mk('path',{d:'M'+x+' 500V400l40-30v30l40-30v30l40-30V500z',class:'s-ink',fill:'var(--stage)','stroke-width':5,'stroke-linejoin':'round'},b);
  const tg=mk('g',{transform:'rotate(-8 '+(x+70)+' 440)'},g);mk('rect',{x:x+20,y:420,width:100,height:40,rx:6,class:'loss'},tg);
  const tx=mk('text',{x:x+70,y:448,class:'m','font-size':22,'text-anchor':'middle',style:'fill:var(--stage)'},tg);tx.textContent='SOLD';return [b,tg]});
const CO=[0,1,2,3].map(()=>mk('circle',{r:14,cy:420,cx:650,class:'gain'},$('coins')));
fig($('rivG'),1340,560,50,'loss');fig($('rivS'),1000,650,30,'gain');
fig($('smith'),0,440,26,'ink');
[[920,300],[1040,300],[920,420],[1040,420]].forEach(q=>fig($('winF'),q[0],q[1]-22,14,'gain'));
fig($('mirF'),1330,320,26,'ink');
// leader body spans x 294-366, successor body spans x 524-596: the baton travels in the clear gap between them
fig($('ldr'),330,580,24,'ink');fig($('suc'),560,580,24,'gain');fig($('ego'),0,575,32,'loss');