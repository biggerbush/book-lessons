const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const mt=(g,x,y,s,txt,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:'m'},a||{}),g);e.textContent=txt;return e};
const T0=[];for(let i=0;i<48;i++){const c=i%6,r=Math.floor(i/6),cx=1204+c*48,cy=291+r*40,cls=i%5===2?'loss':'ink';T0.push([mk('rect',{x:cx-18,y:cy-15,width:36,height:30,rx:6,class:cls},$('t0')),(i*37)%9-4,cx,cy,(c+r)%2===0,cls])}
for(let i=0;i<12;i++){const x=910+(i*97)%400,y=320+(i*61)%200,w=70+(i*13)%60,h=40+(i*7)%30;mk('rect',{x:x,y:y,width:w,height:h,rx:6,class:'loss','fill-opacity':.35+(i%3)*.2,transform:'rotate('+((i*29)%30-15)+' '+(x+w/2)+' '+(y+h/2)+')'},$('jum'))}
// scene 2: rows; cut rows stack neatly on the right with a strike-through
const R2=[],E2=[],STK=[];let kk=0;for(let i=0;i<8;i++){const y=230+i*68,e=i===1||i===5,g=mk('g',{},$('rows'));mk('rect',{x:120,y:y,width:560,height:50,rx:10,fill:e?'var(--gain)':'var(--stage)',stroke:e?'var(--gain)':'var(--ink)','stroke-width':4},g);
  if(e){mt(g,150,y+33,20,'ESSENTIAL',{style:'fill:var(--on-gain)'});E2.push([g,y])}
  else{mk('path',{d:'M150 '+(y+25)+'h'+(200+(i*53)%220),stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);R2.push([g,y,kk]);
    STK.push(mk('path',{d:'M915 '+(340+kk*70+25)+'H1445',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},$('stk')));kk++}}
[[40,-16],[40,16]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:14,fill:'none',stroke:'var(--ink)','stroke-width':6},$('scm')));
mk('path',{d:'M28 -8L-40 6M28 8L-40 -6',stroke:'var(--ink)','stroke-width':7,'stroke-linecap':'round'},$('scm'));
const C3=[[920,300,'CONDIMENTS'],[1380,300,'THE CART'],[920,740,'THE SIGN'],[1380,740,'THE NAME']].map(q=>{const g=mk('g',{},$('chp'));mk('rect',{x:q[0]-100,y:q[1]-28,width:200,height:56,rx:28,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mt(g,q[0],q[1]+7,20,q[2],{'text-anchor':'middle'});return g});
// scene 4: a stack of fully labelled cost cards, each with a "+" badge
const TW=['WORK','COMPLEXITY','MAINTENANCE','SUPPORT','BUGS','DOCS'].map((s,i)=>{const g=mk('g',{},$('tw')),y=650-i*72,x=960+((i*41)%60-30);
  mk('rect',{x:x,y:y,width:380,height:64,rx:10,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);
  mk('circle',{cx:x+36,cy:y+32,r:18,class:'loss'},g);
  mk('path',{d:'M'+(x+28)+' '+(y+32)+'h16M'+(x+36)+' '+(y+24)+'v16',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},g);
  mt(g,x+200,y+41,24,s,{'text-anchor':'middle',style:'fill:var(--ink)'});return g});
// scene 5: wish list items, each gets struck through and faded (released)
const SL5=[];for(let i=0;i<8;i++){const y=290+i*50,w=200+(i*71)%140,g=mk('g',{},$('slp'));
  const bar=mk('rect',{x:150,y:y,width:w,height:30,rx:8,fill:'var(--ink)'},g);
  const sk=mk('path',{d:'M140 '+(y+15)+'H'+(160+w),stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g);
  SL5.push([g,bar,sk])}
const CU=[0,1,2].map(i=>{const x=820+i*260,g=mk('g',{},$('cus'));fig(g,x,600,24,'ink');mk('rect',{x:x-115,y:446,width:230,height:76,rx:18,class:'gain'},g);
  mk('path',{d:'M'+(x-14)+' 520l14 26l14-26z',class:'gain'},g);mt(g,x,492,22,'SAME REQUEST',{'text-anchor':'middle',style:'fill:var(--on-gain)'});return g});
const LB=[];for(let i=0;i<6;i++){const a=i*Math.PI/3+Math.PI/6;LB.push(mk('circle',{cx:800+140*Math.cos(a),cy:480+140*Math.sin(a),r:0,class:'loss'},$('lob')))}
fig($('pui'),300,420,30,'loss');
const RQ=[];for(let i=0;i<5;i++){const g=mk('g',{},$('rq')),x=400+i*60,y=460+(i%2?-40:40);mk('rect',{x:x,y:y-18,width:36,height:36,rx:8,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  const tx=mk('text',{x:x+18,y:y+10,'font-size':30,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},g);tx.textContent='+';RQ.push(g)}
const NW=[1120,1240,1360].map(x=>{const g=mk('g',{},$('nw'));fig(g,x,450,24,'ink');return g});
const nwl=mt($('nw'),1240,620,20,'NEW PEOPLE, SIMPLER NEEDS',{'text-anchor':'middle'});
const LS=[],CI=[];for(let i=0;i<7;i++){const y=290+i*68,L=280+(i*113)%320,e=i===1||i===4,g=mk('g',{},$('ls'));mk('circle',{cx:175,cy:y,r:8,class:'ink'},g);
  LS.push([g,mk('path',{d:'M210 '+y+'h'+L,stroke:'var(--ink)','stroke-width':10,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g),e]);
  if(e){const rx=(90+L)/2;CI.push(mk('path',{d:'M150 '+y+'a'+rx+' 32 0 1 0 '+(2*rx)+' 0a'+rx+' 32 0 1 0 '+(-2*rx)+' 0',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},$('cir')))}}