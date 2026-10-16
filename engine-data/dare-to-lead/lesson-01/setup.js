const per=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const MX=(g,x,y,c)=>mk('path',{d:'M'+(x-9)+' '+y+'l6 7 13-14',fill:'none',stroke:c||'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
const ST={fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'};
const S=o=>Object.assign({},ST,o);

for(let i=0;i<5;i++)per($('leaders'),660+i*60,680,16,'ink');

const SB=[];for(let i=0;i<8;i++){const x=120+(i%4)*150,y=250+Math.floor(i/4)*120,g=mk('g',{},$('bubs'));
  mk('path',{d:'M'+(x+24)+' '+(y+60)+'l-6 26 30-26z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g);
  mk('rect',{x:x,y:y,width:120,height:64,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  for(let j=0;j<3;j++)mk('circle',{cx:x+36+j*24,cy:y+32,r:6,fill:'var(--muted)'},g);SB.push(g)}
per($('gp'),570,548,22,'ink');

let sp='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?70:150;sp+=(300+r*Math.cos(a)).toFixed(0)+','+(450+r*Math.sin(a)).toFixed(0)+' '}
mk('polygon',{points:sp,fill:'none',stroke:'var(--line)','stroke-width':5,'stroke-linejoin':'round'},$('star'));
const CK=['Taught','Observed','Measured'].map((s,i)=>{const y=380+i*100,g=mk('g',{},$('rows'));
  mk('rect',{x:1120,y:y-34,width:44,height:44,rx:8,fill:'none',stroke:'var(--ink)','stroke-width':4},g);
  tx(g,1190,y,s,{class:'d5','font-size':38});
  const k=mk('path',{d:'M1128 '+(y-14)+'l12 14 26-30',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g);return [g,k]});

const L4=[['HARD','CONVERSATIONS'],['CLEAR','VALUES'],['TRUST'],['RISING AFTER','FAILURE']];
const BL=[0,1,2,3].map(i=>{const x=120+i*350,cx=x+155,g=mk('g',{},$('blocks'));
  mk('rect',{x:x,y:260,width:310,height:300,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);const ic=mk('g',{},g);
  if(i==0){mk('rect',S({x:cx-80,y:320,width:90,height:50,rx:12,'stroke-width':5}),ic);mk('rect',{x:cx-10,y:375,width:90,height:50,rx:12,fill:'var(--gain)'},ic)}
  if(i==1){mk('circle',S({cx:cx,cy:372,r:55}),ic);mk('path',{d:'M'+cx+' 326L'+(cx+14)+' 372L'+cx+' 418L'+(cx-14)+' 372Z',fill:'var(--gain)'},ic)}
  if(i==2){mk('circle',S({cx:cx-28,cy:372,r:42}),ic);mk('circle',S({cx:cx+28,cy:372,r:42,stroke:'var(--gain)'}),ic)}
  if(i==3){mk('path',S({d:'M'+(cx-80)+' 330L'+(cx-25)+' 410'}),ic);mk('path',S({d:'M'+(cx-25)+' 410L'+(cx+60)+' 330M'+(cx+28)+' 330H'+(cx+62)+'V364',stroke:'var(--gain)'}),ic)}
  L4[i].forEach((s,j)=>tx(ic,cx,490+j*34,s,{class:'m','font-size':22,'text-anchor':'middle',style:'fill:var(--ink)'}));
  const tk=mk('g',{},g);mk('circle',{cx:x+275,cy:295,r:20,fill:'var(--gain)'},tk);MX(tk,x+275,295);return [g,ic,tk]});

const D=[0,1,2].map(()=>mk('circle',{cx:1196,cy:285,r:6,class:'gain'},$('drops')));

const PN=[0,1,2].map(i=>{const x0=120+i*466,g=mk('g',{id:'p'+i},$('pan'));
  mk('rect',{x:x0,y:230,width:428,height:470,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  tx(g,x0+214,640,['A parent','A new hire','A big title'][i],{class:'d5','font-size':36,'text-anchor':'middle'});return g});
per(PN[0],274,400,32,'ink');per(PN[0],394,462,22,'gain');
mk('path',{d:'M160 556h340',class:'s-line','stroke-width':5,'stroke-linecap':'round'},PN[0]);
mk('path',S({d:'M364 412A40 40 0 1 1 424 412M412 402l12 12 12-10',stroke:'var(--gain)','stroke-width':5}),PN[0]);
tx(PN[0],394,330,'TRY AGAIN',{class:'m','font-size':18,'text-anchor':'middle'});
per(PN[1],690,410,28,'gain');
const SQ=mk('polyline',{id:'sq',fill:'none','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},PN[1]);
[750,960].forEach(x=>mk('circle',{cx:x,cy:470,r:10,class:'ink'},PN[1]));
per(PN[2],1266,400,30,'ink');
mk('rect',{x:1126,y:500,width:280,height:22,class:'ink'},PN[2]);
mk('path',S({d:'M1146 522v70M1386 522v70','stroke-width':8}),PN[2]);
mk('rect',{x:1196,y:460,width:140,height:40,rx:6,class:'gain'},PN[2]);
tx(PN[2],1266,487,'MANAGER',{class:'m','font-size':18,'text-anchor':'middle',style:'fill:var(--on-gain)'});
tx(PN[2],1384,400,'?',{class:'d','font-size':64,'text-anchor':'middle',style:'fill:var(--loss)'});
tx(PN[2],1266,680,'NOT AUTOMATICALLY LEADING',{class:'m','font-size':18,'text-anchor':'middle',style:'fill:var(--loss)'});
[334,800].forEach(c=>{mk('circle',{cx:c+170,cy:270,r:22,class:'gain'},$('chk6'));MX($('chk6'),c+170,270)});
mk('circle',{cx:1436,cy:270,r:22,class:'loss'},$('chk6'));
mk('path',S({d:'M1428 262l16 16M1444 262l-16 16',stroke:'var(--stage)','stroke-width':5}),$('chk6'));

const BR=[];for(let i=0;i<8;i++){const h=40+i*40;BR.push([mk('rect',{x:140+i*76,y:680,width:50,height:0,rx:6,fill:i<3?'var(--muted)':'var(--gain)'},$('bars')),h])}
'MTWTFSS'.split('').forEach((d,c)=>{tx($('days'),940+c*80,360,d,{class:'m','font-size':22,'text-anchor':'middle'});
  mk('rect',{x:908+c*80,y:380,width:64,height:160,rx:10,fill:'none',stroke:'var(--line)','stroke-width':3},$('days'))});