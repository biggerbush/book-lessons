const fig=(g,x,y,r,f,o)=>[mk('circle',Object.assign({cx:x,cy:y,r:r,fill:f},o||{}),g),mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},o||{}),g)];
const HP='M0 120C-150 20-160-90-75-110C-35-120-8-92 0-70C8-92 35-120 75-110C160-90 150 20 0 120Z';
const heart=(g,x,y,s,f)=>mk('path',{d:HP,transform:'translate('+x+' '+y+') scale('+s+')',fill:f||'var(--gain)'},g);
const wave=(el,x0,x1,y,A,f,ph)=>{let s='';for(let x=x0;x<=x1;x+=8)s+=x+','+(y+A*Math.sin((x-x0)/f+ph)).toFixed(1)+' ';el.setAttribute('points',s)};
const lbl=(g,x,y,s,fs,o)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:'m'},o||{}),g);e.textContent=s;return e};
const SK={fill:'none','stroke-linecap':'round','stroke-linejoin':'round'};
const sk=(g,d,c,w)=>mk('path',Object.assign({d:d,stroke:c,'stroke-width':w},SK),g);

fig($('pA'),1060,360,30,'var(--ink)');fig($('pBf'),1300,360,30,'var(--ink)');heart($('bB'),1300,250,.15);

const HALO={stroke:'var(--stage)','stroke-width':6,'stroke-linejoin':'round'};
const FR=fig($('fr'),330,400,30,'var(--ink)',HALO);fig($('me'),560,400,30,'var(--ink)',HALO);
const TP=[0,1,2].map(i=>{const g=mk('g',{},$('tips')),y=350+i*80;mk('circle',{cx:950,cy:y,r:22,fill:'var(--gain)'},g);
  const n=mk('text',{x:950,y:y+8,'font-size':22,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},g);n.textContent=i+1;
  sk(g,'M990 '+y+'h220','var(--line)',12);return g});

const RG=[250,1350].map(x=>{const g=$('brains'),r=mk('circle',{cx:x,cy:350,r:115,fill:'none',stroke:'var(--gain)','stroke-width':4},g);
  mk('ellipse',{cx:x,cy:350,rx:100,ry:80,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  sk(g,'M'+x+' 272q-16 40 0 78q16 40 0 78M'+(x-70)+' 330q20-24 40 0M'+(x+30)+' 330q20-24 40 0M'+(x-60)+' 380q20 24 40 0M'+(x+20)+' 385q20 24 40 0','var(--ink)',5);return r});

fig($('bfig'),270,320,34,'var(--ink)');fig($('tfig'),1060,430,30,'var(--ink)');fig($('tfig'),1380,430,30,'var(--gain)');heart($('th'),1220,470,.22);

const CP=['DECISIONS','FEELINGS','WHO THEY ARE'].map((s,i)=>{const x=550+i*310,c=x+145,g=mk('g',{},$('chips'));
  mk('rect',{x:x,y:290,width:290,height:200,rx:18,fill:'none',stroke:'var(--line)','stroke-width':4},g);
  if(i===0)sk(g,'M'+c+' 420v-40l-34-34M'+c+' 380l34-34','var(--ink)',8);
  if(i===1)heart(g,c,375,.22);
  if(i===2)[-40,0,40].forEach((d,k)=>mk('circle',{cx:c+d,cy:375,r:16,fill:k===1?'var(--gain)':'var(--ink)'},g));
  lbl(g,c,460,s,20,{'text-anchor':'middle'});return g});
const TG=['WORDS','TONE','BODY LANGUAGE'].map((s,i)=>{const x=420+i*340,r=mk('rect',{x:x,y:660,width:300,height:80,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('tags'));
  lbl($('tags'),x+150,708,s,22,{'text-anchor':'middle'});return r});
$('clues').appendChild($('mag'));

const CD=[['SHARING A FEELING','Comfort first.'],['WANTS A SOLUTION','Help solve it.'],['TALKING IDENTITY','Acknowledge it.']].map((q,i)=>{const x=120+i*470,c=x+210,g=mk('g',{},$('cards'));
  mk('rect',{x:x,y:220,width:420,height:420,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  lbl(g,x+30,270,q[0],20);
  if(i===0){fig(g,c-55,400,28,'var(--ink)');fig(g,c+55,400,28,'var(--ink)');sk(g,'M'+(c+30)+' 455Q'+c+' 418 '+(c-50)+' 446','var(--gain)',10);heart(g,c,330,.15)}
  if(i===1){sk(g,'M'+(c-40)+' 400v-30h80v30','var(--ink)',8);mk('rect',{x:c-110,y:400,width:220,height:110,rx:12,fill:'var(--gain)'},g);
    mk('rect',{x:c-110,y:440,width:220,height:10,fill:'var(--stage)'},g);mk('rect',{x:c-16,y:432,width:32,height:26,rx:4,fill:'var(--ink)'},g)}
  if(i===2){mk('circle',{cx:c,cy:430,r:100,fill:'none',stroke:'var(--line)','stroke-width':4,'stroke-dasharray':'8 8'},g);
    for(let k=0;k<6;k++){const a=-Math.PI/2+k*Math.PI/3;mk('circle',{cx:c+100*Math.cos(a),cy:430+100*Math.sin(a),r:20,fill:k?'var(--ink)':'var(--gain)'},g)}}
  const e=mk('text',{x:x+30,y:610,'font-size':34,class:'d5'},g);e.textContent=q[1];return g});