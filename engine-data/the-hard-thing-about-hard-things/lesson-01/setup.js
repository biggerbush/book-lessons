const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const SPN=[];[380,527,674].forEach((b,k)=>{for(let i=0;i<15;i++){const h=78+((i*7+k*5)%5)*10;SPN.push(mk('rect',{x:140+i*36,y:b-h,width:28,height:h,rx:3,fill:(i+k)%4===1?'var(--gain)':'var(--ink)','fill-opacity':(i+k)%3===2?.5:1},$('spines1')))}});
const ADV=['Set a bold goal','Hire great people','Build a strong culture'].map((s,i)=>{const y=260+i*140,g=mk('g',{},$('adv'));
  mk('rect',{x:800,y:y,width:680,height:110,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  mk('circle',{cx:865,cy:y+55,r:28,class:'gain'},g);
  mk('path',{d:'M851 '+(y+56)+'l10 10 18-20',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  const tx=mk('text',{x:920,y:y+69,'font-size':40,class:'d5'},g);tx.textContent=s;return g});
const TEAM=[1000,1150,1300].map(x=>{const g=mk('g',{},$('team'));const sh=fig(g,x,360,30,'ink');
  const cr=mk('path',{d:'M'+(x-24)+' 322l6-26 12 14 6-18 6 18 12-14 6 26z',class:'loss'},g);return [sh,cr]});
const COIN=[0,1,2,3,4].map(i=>mk('circle',{cx:420+i*35,cy:230,r:15,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},$('coins')));
const CU=[];for(let i=0;i<6;i++){const x=270+i*88,g=mk('g',{},$('cust'));mk('path',{d:'M'+x+' 600L490 540',class:'s-line','stroke-width':3},g);fig(g,x,620,14,'ink');CU.push(g)}
for(let i=0;i<10;i++){const a=i*Math.PI/5+.2,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(330+150*c).toFixed(0)+' '+(440+150*s).toFixed(0)+'L'+(330+190*c).toFixed(0)+' '+(440+190*s).toFixed(0),class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('shards'))}
const BX=[];for(let i=0;i<12;i++)BX.push(mk('rect',{x:640+(i%4)*100,y:320+Math.floor(i/4)*100,width:60,height:60,rx:10,class:'ink'},$('boxes')));
const GONE=[5,0,10,3,7,1,11,8,2];
const PT=['PEOPLE','TIMING','FEAR'].map((s,i)=>{const g=mk('g',{},$('parts'));
  mk('circle',{cx:0,cy:0,r:66,fill:'var(--stage)',stroke:i===2?'var(--loss)':'var(--ink)','stroke-width':5},g);
  const tx=mk('text',{x:0,y:8,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
fig($('owner'),975,306,26,'gain');
const STEP=[[1226,520],[1319,430],[1413,340]];