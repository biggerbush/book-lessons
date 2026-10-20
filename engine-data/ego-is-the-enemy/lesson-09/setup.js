const fig=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)};
const clk=(g,x,y,r,col)=>{mk('circle',{cx:x,cy:y,r:r,fill:'var(--stage)',stroke:col,'stroke-width':8},g);
  for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(x+r*.8*s).toFixed(1)+' '+(y-r*.8*c).toFixed(1)+'L'+(x+r*.9*s).toFixed(1)+' '+(y-r*.9*c).toFixed(1),stroke:col,'stroke-width':5,'stroke-linecap':'round'},g)}
  const h=mk('path',{d:'M'+x+' '+y+'v'+(-r*.5),stroke:'var(--ink)','stroke-width':9,'stroke-linecap':'round'},g),m=mk('path',{d:'M'+x+' '+y+'v'+(-r*.75),stroke:col,'stroke-width':6,'stroke-linecap':'round'},g);
  mk('circle',{cx:x,cy:y,r:8,fill:'var(--ink)'},g);
  return a=>{h.setAttribute('transform','rotate('+(a/12).toFixed(1)+' '+x+' '+y+')');m.setAttribute('transform','rotate('+a.toFixed(1)+' '+x+' '+y+')')}};
const arc=(x,y,r,f)=>{f=Math.min(f,.9999);const a=f*2*Math.PI;return 'M'+x+' '+y+'V'+(y-r)+'A'+r+' '+r+' 0 '+(f>.5?1:0)+' 1 '+(x+r*Math.sin(a)).toFixed(1)+' '+(y-r*Math.cos(a)).toFixed(1)+'Z'};
const txt=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};

[260,420,580].forEach(x=>{mk('rect',{x:x-50,y:600,width:100,height:16,class:'ink'},$('chairs'));mk('rect',{x:x-58,y:500,width:14,height:116,class:'ink'},$('chairs'));
  mk('path',{d:'M'+(x-44)+' 616V720M'+(x+44)+' 616V720',stroke:'var(--ink)','stroke-width':8},$('chairs'))});
fig($('chairs'),420,480,26,'var(--ink)');
const CW=clk($('wc'),760,330,70,'var(--ink)'),CD=clk($('dc'),440,430,150,'var(--muted)'),CA=clk($('ac'),1160,430,150,'var(--gain)'),CE=clk($('ec'),1300,720,70,'var(--loss)'),CF=clk($('fc'),1340,730,70,'var(--gain)');
const TG=['A LOST JOB','A REJECTED PROJECT','AN INJURY','A HARD SEASON'].map((s,i)=>{const g=mk('g',{},$('tags')),x=120+i*345;
  mk('rect',{x:x,y:760,width:315,height:60,rx:30,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);txt(g,x+157,797,s,{class:'m','font-size':20,'text-anchor':'middle'});return g});

const BL=['POINTS AT OTHERS','REPLAYS THE INJUSTICE','WAITS TO BE RESCUED'].map((s,i)=>{const g=mk('g',{},$('blame')),y=270+i*140,tx=745,ty=y+40,an=Math.atan2(ty-450,tx-515);
  const hd=d=>(tx-24*Math.cos(an+d)).toFixed(1)+' '+(ty-24*Math.sin(an+d)).toFixed(1);
  mk('path',{d:'M515 450L'+tx+' '+ty+'M'+hd(.5)+'L'+tx+' '+ty+'L'+hd(-.5),fill:'none',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  mk('rect',{x:760,y:y,width:520,height:80,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);txt(g,790,y+48,s,{class:'m','font-size':22});return g});
const MO=[];for(let i=0;i<12;i++)MO.push(mk('rect',{x:120+i*112,y:690,width:90,height:60,rx:8,stroke:'var(--ink)','stroke-width':4},$('months')));

// tally marks on the wall area left of the cell, clear of the bars
const TL=[];for(let g=0;g<4;g++){const x=140+(g%2)*120,y0=410+Math.floor(g/2)*90;for(let k=0;k<5;k++){TL.push(mk('path',{d:k<4?'M'+(x+k*14)+' '+y0+'V'+(y0+56):'M'+(x-6)+' '+(y0+51)+'L'+(x+52)+' '+(y0+4),stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('tally')))}}
[360,440].forEach((y,r)=>{mk('rect',{x:950,y:y,width:200,height:8,class:'ink'},$('shelf'));for(let i=0;i<7;i++){const h=46+((i*3+r)%3)*10;mk('rect',{x:960+i*26,y:y-h,width:20,height:h,fill:i%2?'var(--ink)':'var(--gain)'},$('shelf'))}});
fig($('mxf'),800,600,34,'inherit');
for(let x=440;x<=1160;x+=60)mk('path',{d:'M'+x+' 244V776','stroke-width':8},$('bars'));
mk('path',{d:'M404 300H1196M404 720H1196','stroke-width':8},$('bars'));

const CP=[];for(let i=0;i<7;i++){const y=310+i*40;mk('path',{d:'M150 '+y+'H350',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('dl'));CP.push(mk('line',{x1:410,y1:y,x2:410,y2:y,stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('dl')))}
const BK=[340,300,320,280,310,290].map((w,i)=>{const g=mk('g',{},$('stack')),y=544-i*56,gn=i%2===0;
  mk('rect',{x:900-w/2,y:y,width:w,height:50,rx:6,fill:gn?'var(--gain)':'var(--ink)'},g);
  const L={0:'HISTORY',2:'PHILOSOPHY'}[i];if(L)txt(g,900,y+33,L,{class:'m','font-size':20,'text-anchor':'middle',style:'fill:var(--on-gain)'});return g});
fig($('vf'),1290,400,34,'var(--gain)');
const VA=['M1352 380a28 28 0 0 1 0 40','M1372 368a44 44 0 0 1 0 64','M1394 356a60 60 0 0 1 0 88'].map(d=>mk('path',{d:d,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('va')));

for(let i=0;i<8;i++)mk('circle',{cx:740+i*58,cy:260,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
const IT=['READ THE POSTPONED BOOKS','PRACTISE THE MISSING SKILL','STUDY WHAT WENT WRONG'].map((s,i)=>{const g=mk('g',{},$('items')),y=380+i*100;
  mk('rect',{x:730,y:y,width:36,height:36,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);txt(g,790,y+26,s,{class:'m','font-size':20});
  return [g,mk('path',{d:'M736 '+(y+18)+'l10 12l22-26',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g)]});

fig($('sf'),300,680,26,'var(--gain)');fig($('ef'),960,680,26,'var(--ink)');