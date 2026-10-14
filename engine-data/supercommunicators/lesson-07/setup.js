const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const H='M0 120C-150 20-160-90-75-110C-35-120-8-92 0-70C8-92 35-120 75-110C160-90 150 20 0 120Z';
const tx=(g,x,y,s,fs)=>{const e=mk('text',{x:x,y:y,'font-size':fs,'text-anchor':'middle',class:'m'},g);e.textContent=s;return e};
const op=(el,v)=>el.setAttribute('opacity',v);
const draw=(el,k)=>{el.setAttribute('stroke-dashoffset',1-k);op(el,k>0?1:0)};
fig($('tf'),1100,300,40,'ink');fig($('tf'),1380,300,40,'gain');
// scene 1: two people in a learning conversation
fig($('dfg'),1080,560,34,'ink');fig($('dfg'),1400,560,34,'gain');
fig($('law'),360,380,40,'ink');
const SF=fig($('str'),1200,380,40,'loss');
const BB=[0,1,2].map(i=>{const x=700+i*270,cx=x+115,g=mk('g',{},$('bub'));
  const r=mk('rect',{x:x,y:300,width:230,height:170,rx:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:'M'+(x+40)+' 468v38l38-38',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);
  if(i==0){mk('circle',{cx:cx,cy:385,r:36,fill:'none',stroke:'var(--ink)','stroke-width':14,'stroke-dasharray':'12 7'},g);mk('circle',{cx:cx,cy:385,r:12,class:'ink'},g)}
  if(i==1)mk('path',{d:H,transform:'translate('+cx+' 388) scale(.36)',class:'loss'},g);
  if(i==2)fig(g,cx,338,16,'ink');
  tx(g,cx,560,['SOLVE A PROBLEM','SHARE A FEELING','SAY WHO THEY ARE'][i],20);
  return {g:g,r:r}});
// scene 4: two people, goal bubbles, shared target
fig($('gp'),420,470,36,'ink');fig($('gp'),1180,470,36,'gain');
tx($('gp'),420,662,'YOU',20);tx($('gp'),1180,662,'THEM',20);
mk('circle',{cx:800,cy:430,r:100,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},$('ctg'));
mk('circle',{cx:800,cy:430,r:66,fill:'none',stroke:'var(--ink)','stroke-width':6},$('ctg'));
const CTC=mk('circle',{cx:800,cy:430,r:32,class:'loss'},$('ctg'));
const GAR=[[490,520,690,472],[1110,520,910,472]].map(q=>{const g=mk('g',{},$('gar'));
  mk('path',{d:'M'+q[0]+' '+q[1]+'L'+q[2]+' '+q[3],fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 9','stroke-linecap':'round'},g);
  const a=Math.atan2(q[3]-q[1],q[2]-q[0]),L=20,w=.5;
  mk('path',{d:'M'+(q[2]-L*Math.cos(a-w)).toFixed(1)+' '+(q[3]-L*Math.sin(a-w)).toFixed(1)+'L'+q[2]+' '+q[3]+'L'+(q[2]-L*Math.cos(a+w)).toFixed(1)+' '+(q[3]-L*Math.sin(a+w)).toFixed(1),fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  return g});
const GB=[0,1].map(i=>{const g=$('tg'+i),c=i?'var(--gain)':'var(--ink)';
  mk('rect',{x:-140,y:-32,width:280,height:64,rx:32,fill:'var(--stage)',stroke:c,'stroke-width':5},g);
  mk('path',{d:'M-18 30l18 26l18-26',fill:'var(--stage)',stroke:c,'stroke-width':5,'stroke-linejoin':'round'},g);
  tx(g,0,8,i?'WHAT THEY WANT':'WHAT I WANT',20);
  return {g:g,x:i?1180:420}});
fig($('fp'),260,470,40,'ink');fig($('fp'),1340,470,40,'ink');
const CH=[260,1340].map(x=>mk('path',{d:H,transform:'translate('+x+' 604) scale(.22)',fill:'var(--line)'},$('fp')));
fig($('ip'),220,360,40,'ink');fig($('ip'),1380,360,40,'ink');
for(let r=0;r<10;r++)for(let c=0;c<2;c++)mk('rect',{x:770+c*30,y:240+r*32,width:30,height:32,class:'loss',stroke:'var(--stage)','stroke-width':3},$('wl'));
const BD=['PARENT','NEIGHBOUR','NURSE','FOOTBALL FAN','TEACHER','NEIGHBOUR','RUNNER','FOOTBALL FAN'].map((s,i)=>{const x=i<4?360:980,y=250+(i%4)*72,g=mk('g',{},$('bdg'));
  return {g:g,r:mk('rect',{x:x,y:y,width:260,height:52,rx:26,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g),e:tx(g,x+130,y+34,s,20)}});
const ARC=[1,3].map(i=>{const y=276+i*72;return mk('path',{d:'M620 '+y+'Q800 '+(y-50)+' 980 '+y,fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 8'},$('bdg'))});
const DL=['NOTICE','GOALS','FEELINGS','IDENTITY'].map((s,i)=>{const x=230+i*260,g=mk('g',{},$('dls'));
  mk('circle',{cx:x,cy:440,r:100,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  for(let k=0;k<7;k++){const a=Math.PI*(.75+k*.25),c=Math.cos(a),n=Math.sin(a);mk('line',{x1:x+78*c,y1:440+78*n,x2:x+92*c,y2:440+92*n,stroke:'var(--line)','stroke-width':5,'stroke-linecap':'round'},g)}
  const nd=mk('line',{x1:x,y1:440,x2:x,y2:370,stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round'},g);
  const hb=mk('circle',{cx:x,cy:440,r:12,class:'ink'},g);
  const n=mk('text',{x:x,y:462,'font-size':64,'text-anchor':'middle',class:'d'},g);n.textContent=i+1;
  tx(g,x,590,s,22);return {g:g,nd:nd,hb:hb,n:n,x:x}});
for(let k=0;k<7;k++){const a=Math.PI*(1+k/6),c=Math.cos(a),n=Math.sin(a);mk('line',{x1:1340+112*c,y1:420+112*n,x2:1340+140*c,y2:420+140*n,stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
for(let j=0;j<3;j++)for(let i=0;i<4;i++)mk('circle',{cx:1275+i*50,cy:690+j*40,r:7,fill:'var(--line)'},$('cald'));