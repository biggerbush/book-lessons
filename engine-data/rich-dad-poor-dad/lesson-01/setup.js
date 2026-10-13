const RNS='http://www.w3.org/2000/svg', RDUM=document.createElementNS(RNS,'g');
const G=id=>$(id)||RDUM;
const per=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
per(G('rTp'),1180,520,30,'ink');
const COIN=[];for(let i=0;i<9;i++)COIN.push(mk('rect',{x:1290,y:680-i*30,width:140,height:26,rx:12,class:'gain',stroke:'var(--ink)','stroke-width':4},G('rCoins')));
per(G('rBoys'),240,470,34,'ink');per(G('rBoys'),380,470,34,'gain');
const DU=[];[470,590,710].forEach(sy=>{for(let i=0;i<7;i++){const x=600+i*68;mk('rect',{x:x,y:sy-64,width:44,height:60,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},G('rCans'));mk('rect',{x:x,y:sy-46,width:44,height:20,class:'gain'},G('rCans'));DU.push(mk('path',{d:'M'+(x+6)+' '+(sy-74)+'h8M'+(x+22)+' '+(sy-80)+'h6M'+(x+34)+' '+(sy-72)+'h6',class:'s-muted','stroke-width':4,'stroke-linecap':'round'},G('rCans')))}});
per(G('rBoy2'),300,440,40,'loss');mk('path',{d:'M280 424l14 9M320 424l-14 9',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round'},G('rBoy2'));
const DR=[];for(let i=0;i<5;i++)DR.push(mk('rect',{x:350+i*36,y:430,width:22,height:14,rx:3,class:'loss'},G('rDrops')));
const CY=['WAKE UP','GO TO WORK','GET PAID','REPEAT'].map((s,i)=>{const x=320+i*290,g=mk('g',{},G('rCyc'));const r=mk('rect',{x:x,y:590,width:250,height:70,rx:35,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);const tx=mk('text',{x:x+125,y:633,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;if(i<3)mk('path',{d:'M'+(x+256)+' 625h28',class:'s-muted','stroke-width':4},g);return [g,r,tx]});
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M420 500L'+(420+200*Math.cos(a)).toFixed(0)+' '+(500+200*Math.sin(a)).toFixed(0),class:'s-line','stroke-width':4},G('rSpk'))}
const BL=[];for(let i=0;i<8;i++){const g=mk('g',{},G('rBills')),y=652-i*30;mk('rect',{x:1270,y:y,width:180,height:24,rx:4,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);mk('circle',{cx:1360,cy:y+12,r:6,class:'loss'},g);BL.push(g)}
// scene 5: two boys ask rich dad
per(G('rFig'),1030,570,22,'ink');per(G('rFig'),1110,570,22,'ink');per(G('rFig'),1360,520,34,'gain');
for(let k=0;k<3;k++)for(let i=0;i<6;i++){const h=50+((i*3+k)%3)*10;mk('rect',{x:300+i*24,y:[581,666,756][k]-h,width:18,height:h,fill:i%2?'var(--gain)':'var(--ink)'},G('rSpines'))}
[520,610,700].forEach(x=>{per(G('rKids'),x,610,22,'ink');mk('rect',{x:x-20,y:666,width:40,height:28,rx:3,class:'gain'},G('rKids'))});
per(G('rSis'),790,610,24,'gain');
per(G('rAway'),1300,540,26,'ink');per(G('rAway'),1400,540,26,'ink');
const FC=[0,1,2].map(()=>mk('circle',{r:12,class:'gain',stroke:'var(--ink)','stroke-width':3},G('rFlow')));
const bz=(k,a,b,c,d)=>{const m=1-k;return m*m*m*a+3*m*m*k*b+3*m*k*k*c+k*k*k*d};
per(G('rQp'),220,478,20,'ink');per(G('rBp'),1170,478,20,'gain');