const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,fs,cls,anc,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':anc||'start'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
fig($('gra'),300,520,44,'ink');tx($('gra'),300,762,'BENJAMIN GRAHAM',20,'m','middle');
// motto: measure each word and lay out with even word spacing, centred on the sign
const WW=[255,80,265];
function layMotto(){const w=WW.slice();for(let i=0;i<3;i++){try{const v=$('w'+i).getComputedTextLength();if(v>0)w[i]=v}catch(e){}}
  const gap=24,tot=w[0]+w[1]+w[2]+2*gap;let x=980-tot/2;for(let i=0;i<3;i++){$('w'+i).setAttribute('x',x.toFixed(1));x+=w[i]+gap}}
layMotto(); if(document.fonts&&document.fonts.ready)document.fonts.ready.then(layMotto);
const PT=['BONDS','STOCKS','PRICE','DIVERSIFY'].map((s,i)=>{const x=560+i*210,g=mk('g',{},$('pts'));mk('rect',{x:x-95,y:752,width:190,height:50,rx:25,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);tx(g,x,784,s,20,'m','middle');mk('path',{d:'M'+(x-10)+' 744l10-14 10 14',fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
// bond test: 5 earnings blocks vs 1 interest block
const EB=[],ETOP=[];for(let i=0;i<5;i++){ETOP.push(704-i*62);EB.push(mk('rect',{x:600,y:704-i*62,width:180,height:56,rx:6,class:'gain'},$('ep')))}
tx($('ep'),690,806,'PAST EARNINGS',20,'m','middle');
const CK=[];for(let i=0;i<10;i++){const g=mk('g',{},$('chk'));mk('rect',{x:124+i*60,y:594,width:56,height:92,rx:4,class:'gain'},g);CK.push(g)}
for(let r=0;r<4;r++)for(let c=0;c<3;c++)mk('rect',{x:236+c*66,y:390+r*60,width:40,height:36,class:'s-line',fill:'none','stroke-width':4},$('win'));
const SQ=[[490,340],[175,400],[500,460]],SPK=SQ.map(q=>mk('path',{d:'M0 -24L6 -6 24 0 6 6 0 24 -6 6 -24 0 -6 -6Z',class:'gain'},$('spk')));
const LO=[3,8,14,17],CO=[];for(let i=0;i<20;i++)CO.push(mk('circle',{cx:200+(i%5)*110,cy:320+Math.floor(i/5)*110,r:38,class:'ink'},$('cn')));
const pan=(g,cls,n,lab)=>{mk('path',{d:'M0 0L-80 140M0 0L80 140',class:'s-ink','stroke-width':4},g);for(let k=0;k<n;k++){const row=k<3?0:k<5?1:2,idx=k<3?k:k<5?k-3:0,cnt=[3,2,1][row];mk('circle',{cx:(idx-(cnt-1)/2)*34,cy:122-row*30,r:16,class:cls},g)}mk('path',{d:'M-100 140h200a100 40 0 0 1-200 0z',fill:'var(--stage)',class:'s-ink','stroke-width':5},g);tx(g,0,226,lab,20,'m','middle')};
pan($('pnL'),'gain',6,'WINNERS');pan($('pnR'),'loss',2,'LOSERS');
fig($('wk'),1220,400,30,'ink');