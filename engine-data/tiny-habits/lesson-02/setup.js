const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const ICP={m:'M0 30C-50 0-45-35-22-38C-10-40-3-30 0-22C3-30 10-40 22-38C45-35 50 0 0 30Z',a:'M-36 30V14H-12V-6H12V-26H36V30Z',p:'M-30 20C-28-10-24-32 0-32C24-32 28-10 30 20L38 28H-38Z'};
const ico=(k,x,y,s,col,g)=>{const h=mk('g',{transform:'translate('+x+' '+y+') scale('+s+')'},g);mk('path',{d:ICP[k],fill:col},h);if(k==='p'){mk('circle',{cx:0,cy:36,r:7,fill:col},h);mk('circle',{cx:0,cy:-36,r:5,fill:col},h)}return h};
const tx=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
const ring=(g,x,y,r)=>mk('circle',{cx:x,cy:y,r:r,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);

const T0=['M','A','P'].map(L=>{const g=mk('g',{},$('t0g'));ring(g,0,0,46);tx(g,L,{x:0,y:16,'font-size':44,'text-anchor':'middle',class:'d'});return g});
const T0E=[[1330,330],[1252,465],[1408,465]],T0S=[[1330,190],[1170,580],[1430,600]];
const t0b=mk('g',{},$('t0g'));mk('circle',{cx:1330,cy:420,r:34,class:'gain'},t0b);tx(t0b,'B',{x:1330,y:432,'font-size':34,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'});

for(let i=0;i<4;i++)mk('rect',{x:160+i*64,y:352,width:28,height:160,class:'ink'},$('cols'));
const IC1=[['m','Motivation'],['a','Ability'],['p','Prompt']].map((d,i)=>{const x=700+i*300,g=mk('g',{},$('ic1'));ring(g,x,640,64);ico(d[0],x,640,1.1,i?'var(--ink)':'var(--gain)',g);tx(g,d[1],{x:x,y:760,'font-size':34,'text-anchor':'middle',class:'d5'});return g});

fig($('per2'),260,400,50,'ink');
const R2=[['Motivation: high','EXPECTING GOOD NEWS'],['Ability: easy','PHONE RIGHT BESIDE YOU'],['Prompt: the ring','IT SAYS ACT NOW']].map((d,i)=>{const y=320+i*130,g=mk('g',{},$('rows2'));const c=mk('circle',{cx:1030,cy:y,r:28,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:'M1016 '+y+'l10 10 18-20',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  tx(g,d[0],{x:1080,y:y+12,'font-size':40,class:'d5'});tx(g,d[1],{x:1080,y:y+48,'font-size':20,class:'m'});return [g,c]});

ico('p',470,420,1.4,'var(--muted)',$('bell5'));

const C6=[['1','Prompt','IS ANYTHING','REMINDING YOU?','p'],['2','Ability','TOO HARD','RIGHT NOW?','a'],['3','Motivation','LEAST RELIABLE','LEVER','m']].map((d,i)=>{const x=420+i*360,y=280,col=i==2?'var(--loss)':'var(--ink)',g=mk('g',{},$('cards6'));
  mk('rect',{x:x,y:y,width:320,height:320,rx:18,fill:'var(--stage)',stroke:i==2?'var(--loss)':'var(--line)','stroke-width':i==2?5:3},g);
  tx(g,d[0],{x:x+30,y:y+100,'font-size':80,class:'d',style:'fill:'+col});ico(d[4],x+250,y+70,.9,col,g);
  tx(g,d[1],{x:x+30,y:y+190,'font-size':40,class:'d5'});
  if(i<2)mk('path',{d:'M'+(x+325)+' 440h30m-10-10 10 10-10 10',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  const q=mk('g',{},$('cards6'));tx(q,d[2],{x:x+30,y:y+240,'font-size':20,class:'m',style:'fill:'+col});tx(q,d[3],{x:x+30,y:y+272,'font-size':20,class:'m',style:'fill:'+col});return [g,q]});

const R7=[['m','Do I want it?'],['a','Can I do it easily?'],['p','What will prompt me?']].map((d,i)=>{const y=300+i*120,g=mk('g',{},$('rows7'));ring(g,620,y,42);ico(d[0],620,y,.75,'var(--gain)',g);tx(g,d[1],{x:690,y:y+14,'font-size':40,class:'d5'});return g});

const E8=['M','A','P'].map((L,i)=>{const g=mk('g',{},$('end3'));ring(g,0,0,32);tx(g,L,{x:0,y:11,'font-size':30,'text-anchor':'middle',class:'d'});return g});