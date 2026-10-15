const fig=(g,x,y,r)=>{mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},g);return g};
const star=(g,cx,cy,R,f)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?R*.45:R;s+=(cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1)+' '}return mk('polygon',{points:s,fill:f},g)};
const txt=(g,x,y,s,fs,cls,anc,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':anc||'start'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
star($('shop'),1250,430,32,'var(--gain)');star($('prod'),630,450,60,'var(--gain)');star($('offstar'),800,665,28,'var(--on-gain)');
fig($('owner'),260,420,36);mk('path',{d:'M300 540L470 470',fill:'none',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('owner'));
const SPK=[[450,320],[810,330],[815,605],[445,612]].map(q=>mk('path',{d:'M'+(q[0]-14)+' '+q[1]+'h28M'+q[0]+' '+(q[1]-14)+'v28',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('spark')));
const TL=['TWEAK FEATURES','CHANGE PRICES','REDESIGN LOGO'].map((s,i)=>{const g=mk('g',{},$('tools')),x=120+i*320;mk('rect',{x:x,y:650,width:290,height:64,rx:32,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);txt(g,x+145,691,s,20,'m','middle');return g});
const CR=[];for(let r=0;r<2;r++)for(let x=160;x<=1440;x+=80){if(x>600&&x<1000)continue;CR.push(fig(mk('g',{fill:'var(--muted)'},$('crowd')),x,470+r*140,20))}
const LR=[];for(let i=0;i<8;i++){const g=mk('g',{},$('list')),y=300+i*50;mk('circle',{cx:870,cy:y,r:10,fill:'var(--ink)'},g);mk('path',{d:'M895 '+y+'h'+(170+(i*53)%110),stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);LR.push(g)}
const EN=[1,3,5],PP=[],ARM=[];
for(let i=0;i<7;i++){const x=240+i*186;PP.push(fig(mk('g',{fill:'var(--ink)'},$('row')),x,520,34));
  if(EN.includes(i)){const a=mk('g',{},$('arms'));mk('path',{d:'M'+(x+40)+' 610L'+(x+62)+' 474',fill:'none',stroke:'var(--gain)','stroke-width':12,'stroke-linecap':'round'},a);mk('circle',{cx:x+64,cy:462,r:13,fill:'var(--gain)'},a);ARM.push(a);txt($('englab'),x,710,'ENGAGED',20,'m','middle','fill:var(--gain)')}}
const BB=['REPLY','ASK A QUESTION','BOOK A CALL'].map((s,k)=>{const x=240+EN[k]*186,g=mk('g',{},$('bub'));mk('rect',{x:x-120,y:330,width:240,height:70,rx:16,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);mk('path',{d:'M'+(x+20)+' 400l20 20l4-20',fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4,'stroke-linejoin':'round'},g);txt(g,x,373,s,20,'m','middle');return g});
const FX=[460,1140];
const FN=FX.map((c,k)=>{const g=mk('g',{},$('fun'));mk('path',{d:'M'+(c-200)+' 290H'+(c+200)+'L'+(c+40)+' 530V590H'+(c-40)+'V530Z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},g);
  mk('path',{d:'M'+(c-120)+' 680v50h240v-50',fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  txt(g,c,232,k?'2× LEADS IN':'LEADS IN',22,'m','middle');txt(g,c,785,'BUYERS',20,'m','middle');return g});
const IN=[[],[]],TR=[[],[]];
for(let k=0;k<2;k++){for(let j=0;j<(k?12:6);j++)IN[k].push(mk('circle',{r:10,fill:'var(--gain)'},$('flow')));const n=k?6:3;for(let j=0;j<n;j++)TR[k].push(mk('circle',{cx:FX[k]-(n-1)*18+j*36,cy:712,r:14,fill:'var(--gain)'},$('flow')))}
const OUT=[0,1].map(()=>mk('circle',{r:10,fill:'var(--gain)'},$('flow')));
function flow(k,on,t){const A=IN[k],n=A.length;A.forEach((d,j)=>{const f=(t*.45+j/n)%1,s=(((j*7)%n)/(n-1)-.5)*300;d.setAttribute('cx',(FX[k]+s*(1-f*.95)).toFixed(1));d.setAttribute('cy',(250+f*270).toFixed(1));d.setAttribute('opacity',(on*(f<.9?1:(1-f)*10)).toFixed(2))});
  const f=(t*.7+k*.5)%1,o=OUT[k];o.setAttribute('cx',FX[k]);o.setAttribute('cy',(600+f*90).toFixed(1));o.setAttribute('opacity',(on>0&&OUT[k].dataset.on==='1'?(f<.85?1:(1-f)/.15):0).toFixed(2))}
[170,240,310].forEach(x=>fig($('cust'),x,520,20));
const CO=[];for(let i=0;i<7;i++)CO.push(mk('ellipse',{cx:540,cy:640-i*30,rx:70,ry:20,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':4},$('coins')));
const CK=['Tweak features','Change prices','Redesign logo','Get engaged leads'].map((s,i)=>{const g=mk('g',{},$('list2'));mk('rect',{x:860,y:-30,width:50,height:50,rx:8,fill:'var(--stage)',stroke:i==3?'var(--gain)':'var(--muted)','stroke-width':5},g);txt(g,940,10,s,36,'d5','start',i==3?'fill:var(--gain)':'fill:var(--muted)');return g});
const tick=mk('path',{d:'M870 -5l14 14 22-26',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},CK[3]);
const TY=[];for(let g=0;g<3;g++){const x=170+g*130;for(let i=0;i<4;i++)TY.push(mk('path',{d:'M'+(x+i*20)+' 390V500',stroke:'var(--on-gain)','stroke-width':7,'stroke-linecap':'round'},$('tally')));TY.push(mk('path',{d:'M'+(x-12)+' 485L'+(x+72)+' 405',stroke:'var(--on-gain)','stroke-width':7,'stroke-linecap':'round'},$('tally')))}
const BH=[80,130,190,260,340],BR=BH.map((h,i)=>mk('rect',{x:770+i*140,y:650-h,width:90,height:h,fill:i?'var(--gain)':'var(--ink)'},$('bars')));
const HD=[1200,1280,1360,1440].map(x=>fig(mk('g',{},$('hands')),x,740,16));