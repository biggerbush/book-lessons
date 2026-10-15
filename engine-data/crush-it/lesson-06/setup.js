const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const RC={'stroke-linecap':'round','stroke-linejoin':'round',fill:'none'};
const TB=[0,1,2].map(i=>{const g=mk('g',{},$('tbub')),x=1150+i*110,y=480+(i%2)*30;
  const r=mk('rect',{x:x,y:y,width:90,height:56,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const tl=mk('path',{d:'M'+(x+18)+' '+(y+54)+'l-6 18 24-18z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);return [g,r,tl]});
const RW=[],BD=[];for(let i=0;i<6;i++){const y=230+i*96,g=mk('g',{},$('rows'));
  mk('rect',{x:840,y:y,width:640,height:76,rx:14,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  mk('circle',{cx:884,cy:y+38,r:20,fill:'var(--muted)'},g);
  mk('path',{d:'M924 '+(y+28)+'h'+(200+(i*70)%180)+'M924 '+(y+50)+'h'+(120+(i*50)%140),stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);RW.push(g);
  const b=mk('g',{},$('rows'));mk('circle',{cx:1436,cy:y+38,r:22,class:'gain'},b);
  mk('path',Object.assign({d:'M1446 '+(y+48)+'v-6a8 8 0 0 0-8-8h-14m7-7-7 7 7 7',stroke:'var(--on-gain)','stroke-width':4},RC),b);BD.push(b)}
fig($('garyp'),230,680,30,'gain');
const MS=[];for(let i=0;i<12;i++){const c=i%4,r=Math.floor(i/4),x=120+c*145,y=240+r*120,g=mk('g',{},$('msgs'));
  const b=mk('rect',{x:x,y:y,width:125,height:90,rx:i%2?8:20,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('path',Object.assign({d:i%2?'M'+x+' '+y+'l62 46 63-46':'M'+(x+22)+' '+(y+34)+'h80M'+(x+22)+' '+(y+56)+'h50',stroke:'var(--line)','stroke-width':i%2?4:7},RC),g);
  const k=mk('path',Object.assign({d:'M'+(x+88)+' '+(y+62)+'l10 10 18-22',stroke:'var(--gain)','stroke-width':7},RC),g);MS.push([b,k])}
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('line',{x1:1150+132*c,y1:420+132*s,x2:1150+148*c,y2:420+148*s,stroke:'var(--ink)','stroke-width':i%3?3:7,'stroke-linecap':'round'},$('ticks'))}
const VW=fig($('vw'),300,470,40,'ink');fig($('host'),800,370,30,'gain');
const PL=['TELLS FRIENDS','COMES BACK NEXT WEEK','STICKS UP FOR THE SHOW'].map((s,i)=>{const y=300+i*100,g=mk('g',{},$('pills'));
  mk('rect',{x:1060,y:y,width:420,height:70,rx:35,class:'gain'},g);
  const tx=mk('text',{x:1090,y:y+44,'font-size':22,class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=s;return g});
const FRW=[0,1,2,3].map(i=>{const y=310+i*70,g=mk('g',{},$('frows')),c=i<3?'var(--muted)':'var(--gain)';
  mk('circle',{cx:168,cy:y+27,r:16,fill:c},g);
  mk('path',{d:'M200 '+(y+18)+'h'+(220-i*30)+'M200 '+(y+38)+'h140',stroke:i<3?'var(--line)':'var(--gain)','stroke-width':8,'stroke-linecap':'round'},g);return g});
const TW=[[1370,230],[1380,330],[1060,230]].map(q=>{const g=mk('g',{},$('tw'));
  const r=mk('rect',{x:q[0],y:q[1],width:90,height:44,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);return [g,r]});
const GF=[],GL=[];['ANSWER A QUESTION','RECOMMEND A BOTTLE','THANK SOMEONE'].forEach((s,i)=>{const c=260+i*250,g=mk('g',{},$('gifts'));
  mk('path',Object.assign({d:'M'+c+' 340c-30-40-52-10 0 0c30-40 52-10 0 0',stroke:'var(--gain)','stroke-width':7},RC),g);
  mk('rect',{x:c-70,y:340,width:140,height:32,rx:6,class:'gain'},g);mk('rect',{x:c-58,y:372,width:116,height:96,class:'gain'},g);
  mk('path',{d:'M'+c+' 340V468M'+(c-70)+' 372h140',stroke:'var(--on-gain)','stroke-width':7},g);GF.push(g);
  const l=mk('g',{},$('gifts')),tx=mk('text',{x:c,y:520,'font-size':20,'text-anchor':'middle',class:'m'},l);tx.textContent=s;GL.push(l)});
[1315,1385,1452].forEach(x=>fig($('backp'),x,520,17,'ink'));
fig($('skp'),240,430,36,'loss');
for(let i=0;i<6;i++){const a=i*Math.PI/3+.3,x=1020+150*Math.cos(a),y=500+150*Math.sin(a);
  mk('path',{d:'M1020 500L'+x.toFixed(0)+' '+y.toFixed(0),stroke:'var(--line)','stroke-width':4},$('nl'));mk('circle',{cx:x,cy:y,r:24,class:'ink'},$('near'))}
const OD=[];for(let i=0;i<16;i++){const a=i*Math.PI/8,x=1020+260*Math.cos(a),y=500+260*Math.sin(a);OD.push(mk('circle',{cx:x,cy:y,r:13,class:'gain'},$('odots')))}
[290,390,490,590].forEach(x=>{for(let r=0;r<3;r++)mk('circle',{cx:x,cy:440+r*80,r:20,class:'ink'},$('crw'));
  mk('path',Object.assign({d:'M'+x+' 405V350m-12 12 12-12 12 12',stroke:'var(--muted)','stroke-width':4},RC),$('crw'))});
const NP=[];for(let i=0;i<8;i++){const a=i*Math.PI/4-Math.PI/2;NP.push([1120+170*Math.cos(a),450+170*Math.sin(a)])}
const LN=[];NP.forEach((a,i)=>NP.forEach((b,j)=>{if(j>i)LN.push(mk('line',{x1:a[0],y1:a[1],x2:b[0],y2:b[1],stroke:'var(--gain)','stroke-width':3},$('rl')))}));
NP.forEach((q,i)=>mk('circle',{cx:q[0],cy:q[1],r:22,class:i?'ink':'gain'},$('rn')));
const NW={v:300};const msr=()=>{try{const v=$('ns').getComputedTextLength();if(v>0)NW.v=v}catch(e){}};msr();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(msr);