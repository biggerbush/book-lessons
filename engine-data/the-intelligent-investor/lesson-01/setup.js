const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const draw=(el,k)=>{el.style.strokeDashoffset=(1-k).toFixed(3);el.setAttribute('opacity',k>0?1:0)};
const ln=(d,c,w,g)=>mk('path',{d:d,fill:'none',stroke:c,'stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':'1 2'},g);
const tx=(s,a,g)=>{const e=mk('text',a,g);e.textContent=s;return e};

fig($('gr'),260,400,44,'ink');tx('BENJAMIN GRAHAM',{x:260,y:640,'font-size':20,'text-anchor':'middle',class:'m'},$('gr'));
const CD=[['Analysis','STUDY FIRST'],['Safety','MONEY STAYS SAFE'],['Return','FAIR, NOT A FORTUNE']].map((c,i)=>{const x=440+i*360,g=mk('g',{},$('cards'));
  mk('rect',{x:x,y:250,width:320,height:470,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  tx('0'+(i+1),{x:x+28,y:296,'font-size':22,class:'m'},g);
  tx(c[0],{x:x+160,y:630,'font-size':44,'text-anchor':'middle',class:'d5'},g);
  tx(c[1],{x:x+160,y:680,'font-size':20,'text-anchor':'middle',class:'m'},g);return g});
const CS=[0,1,2,3].map(i=>mk('rect',{x:1260,y:520-i*32,width:120,height:26,rx:13,class:'gain',stroke:'var(--ink)','stroke-width':4},$('coinsS')));

const RW=['Analysis','Safety','Return'].map((s,i)=>{const y=290+i*140,g=mk('g',{},$('rows'));
  mk('rect',{x:180,y:y,width:90,height:90,rx:12,fill:'none',stroke:'var(--ink)','stroke-width':6},g);
  tx(s,{x:310,y:y+62,'font-size':48,class:'d5'},g);
  return {g:g,tk:ln('M200 '+(y+48)+'l22 22 46-52','var(--gain)',12,g)}});
const XX=ln('M200 590l50 50m0-50l-50 50','var(--loss)',12,$('rows'));

// scene 3: figure row shifted up 40px to clear the brand mark
fig($('a3'),360,500,34,'ink');
mk('rect',{x:430,y:560,width:70,height:90,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('a3'));
mk('path',{d:'M444 584h42M444 604h42M444 624h28',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},$('a3'));
tx('STUDIES · SENSIBLE PRICE',{x:360,y:702,'font-size':20,'text-anchor':'middle',class:'m'},$('a3'));
fig($('c3'),1220,500,34,'ink');[1330,1430].forEach(x=>fig($('crowd3'),x,520,22,'ink'));
[[1330,'SOAR!'],[1430,'BUY!']].forEach(b=>{mk('rect',{x:b[0]-42,y:428,width:84,height:46,rx:12,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},$('bb'));tx(b[1],{x:b[0],y:458,'font-size':18,'text-anchor':'middle',class:'m',style:'fill:var(--loss)'},$('bb'))});
tx('BUYS ON A HOT TIP',{x:1290,y:702,'font-size':20,'text-anchor':'middle',class:'m'},$('c3'));

const DG=[['Calling a bet an investment','FOOLING YOURSELF'],['No real knowledge or skill','SPECULATING BLIND'],['Risking more than you can lose','MONEY YOU CAN’T SPARE']].map((c,i)=>{const y=240+i*170,cy=y+70,g=mk('g',{},$('dang'));
  mk('rect',{x:640,y:y,width:840,height:140,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  if(i==0){mk('ellipse',{cx:720,cy:cy,rx:54,ry:30,class:'loss'},g);[-22,22].forEach(d=>mk('ellipse',{cx:720+d,cy:cy-4,rx:12,ry:8,fill:'var(--stage)'},g))}
  else if(i==1){mk('circle',{cx:720,cy:cy,r:36,class:'ink'},g);mk('rect',{x:676,y:cy-16,width:88,height:20,rx:6,class:'loss'},g)}
  else{mk('rect',{x:670,y:cy-32,width:100,height:64,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':6},g);mk('rect',{x:730,y:cy-14,width:40,height:28,rx:6,class:'loss'},g)}
  tx(c[0],{x:800,y:y+62,'font-size':36,class:'d5'},g);tx(c[1],{x:800,y:y+104,'font-size':20,class:'m',style:'fill:var(--loss)'},g);return g});

const Q7=['Have I analysed this properly?','Is my money reasonably safe?','Is the return fair, not fantastic?'].map((s,i)=>{const y=380+i*120,g=mk('g',{},$('qs'));
  const c=mk('circle',{cx:190,cy:y-14,r:30,fill:'none',stroke:'var(--ink)','stroke-width':5},g);
  tx(s,{x:250,y:y,'font-size':40,class:'d5'},g);
  return {g:g,c:c,tk:ln('M175 '+(y-14)+'l11 12 22-26','var(--on-gain)',7,g)}});

const QB=[0,1,2].map(i=>{const g=mk('g',{},$('qbx'));mk('rect',{x:143+i*100,y:620,width:70,height:70,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':5},g);tx('?',{x:178+i*100,y:670,'font-size':40,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},g);return g});