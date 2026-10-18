const fig=(g,x,y,r,a)=>{mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g);return g};
const tx=(g,x,y,s,a,str)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s},a),g);e.textContent=str;return e};

fig($('giant0'),1300,628,22,{fill:'none',stroke:'var(--gain)','stroke-width':2,'stroke-dasharray':'5 3','stroke-linejoin':'round'});
fig($('tiny0'),1300,628,22,{class:'ink'});

const RG=['ACTIONS','HABITS','BELIEFS','IDENTITY'].map((s,i)=>{const y=680-i*140,g=mk('g',{},$('rungs')),top=i===3;
  mk('rect',{x:150,y:y,width:340,height:76,rx:14,fill:top?'var(--gain)':'var(--stage)',stroke:top?'var(--gain)':'var(--ink)','stroke-width':5},g);
  tx(g,320,y+48,24,{class:'m','text-anchor':'middle',style:'fill:var('+(top?'--on-gain':'--ink')+')'},s);return g});
fig($('mirp'),800,400,32,{class:'ink'});

const P2=[0,1].map(i=>{const o=i*720,c=i?'var(--gain)':'var(--ink)',G=$('two');
  mk('rect',{x:120+o,y:220,width:640,height:560,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},G);
  const pg=fig(mk('g',{},G),280+o,500,34,{class:i?'gain':'ink'});
  const bg=mk('g',{},G);
  mk('rect',{x:160+o,y:250,width:560,height:100,rx:20,fill:'var(--stage)',stroke:c,'stroke-width':5},bg);
  mk('path',{d:`M${250+o} 346L${270+o} 400L${300+o} 346z`,fill:'var(--stage)'},bg);
  mk('path',{d:`M${250+o} 349L${270+o} 400L${300+o} 349`,fill:'none',stroke:c,'stroke-width':5,'stroke-linejoin':'round'},bg);
  tx(bg,190+o,312,32,{class:'d5'},i?'“I am a non-smoker.”':'“I am trying to quit smoking.”');
  const mg=mk('g',{},G);
  mk('ellipse',{cx:560+o,cy:540,rx:90,ry:120,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},mg);
  fig(mg,560+o,500,24,{class:i?'gain':'ink'});
  if(!i){mk('rect',{x:578,y:506,width:40,height:9,class:'ink'},mg);mk('rect',{x:616,y:506,width:8,height:9,class:'loss'},mg);
    mk('path',{d:'M622 496c-8-12 8-18 0-30',fill:'none',stroke:'var(--muted)','stroke-width':3,'stroke-linecap':'round'},mg)}
  mk('path',{d:i?`M${340+o} 540h110`:'M340 540l20-20 20 40 20-40 20 40 20-20',fill:'none',stroke:i?'var(--gain)':'var(--loss)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round','stroke-dasharray':i?'10 10':'none'},mg);
  tx(mg,150+o,740,20,{class:'m',style:'fill:'+(i?'var(--gain)':'var(--loss)')},i?'LIGHTING UP FEELS OUT OF CHARACTER':'EVERY CRAVING IS A FIGHT');
  return [pg,bg,mg]});

fig($('rbp'),210,330,34,{class:'ink'});
fig($('anp'),940,330,34,{class:'gain'});
const TR=[1,2,3].map(k=>mk('circle',{cx:0,cy:435,r:34-k*6,class:'loss'},$('trail')));

const WL=[[440,400,460,280],[460,420,380,300]].flatMap((ls,j)=>ls.map((l,i)=>{const x=j?850:280,y=380+i*70;
  return [mk('line',{x1:x,y1:y,x2:x,y2:y,stroke:j?'var(--gain)':'var(--muted)','stroke-width':j?12:8,'stroke-linecap':'round'},$('ln'+j)),x,l,y,j,i]}));
mk('path',{d:'M0 0l6-26 62-62 20 20-62 62z',class:'ink'},$('pen0'));

const TL='CANI'.split('').map((ch,i)=>{const x=120+i*220,g=mk('g',{},$('cani'));
  mk('rect',{x:x,y:230,width:130,height:100,rx:14,class:'gain'},g);
  tx(g,x+65,302,60,{class:'d','text-anchor':'middle',style:'fill:var(--on-gain)'},ch);
  tx(g,x+65,368,20,{class:'m','text-anchor':'middle'},['CONSTANT','AND','NEVER-ENDING','IMPROVEMENT'][i]);return g});
const STP=[];for(let i=0;i<13;i++){const y=744-i*36;STP.push(mk('rect',{x:620+i*64,y:y,width:64,height:780-y,fill:'var(--line)',stroke:'var(--ink)','stroke-width':3},$('st')))}
fig($('clbm'),0,-59,14,{class:'gain'});
fig($('leapp'),220,704,18,{class:'ink'});

const FU=['FEELINGS','BELIEFS','QUESTIONS','WORDS'].map((s,i)=>{const x=480+i*170,g=mk('g',{},$('fuel'));
  mk('rect',{x:x,y:290,width:150,height:60,rx:30,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  tx(g,x+75,327,20,{class:'m','text-anchor':'middle',style:'fill:var(--ink)'},s);
  mk('path',{d:`M${x+75} 354V386`,fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},g);return g});

const CK=[];for(let n=0;n<28;n++){const x=850+(n%7)*88,y=330+Math.floor(n/7)*88;
  mk('rect',{x:x,y:y,width:76,height:76,rx:8,fill:'none',stroke:'var(--line)','stroke-width':3},$('cells'));
  CK.push(mk('path',{d:`M${x+18} ${y+40}l14 14 28-30`,fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('cells')))}
fig($('idf'),590,440,26,{class:'gain'});