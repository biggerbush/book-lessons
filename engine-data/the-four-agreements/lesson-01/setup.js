const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const T=(g,x,y,s,fs,cls,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls},g);if(a)e.setAttribute('text-anchor',a);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const cloud=(g,a,s)=>{a.forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],fill:'none',stroke:s,'stroke-width':10},g));a.forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],fill:'var(--stage)'},g))};
const bubs=(g,a,s)=>a.forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],fill:'var(--stage)',stroke:s,'stroke-width':5},g));

cloud($('cloud0'),[[1260,380,60],[1340,340,75],[1420,380,55],[1335,420,60]],'var(--ink)');
bubs($('cloud0'),[[1228,600,9],[1250,520,15]],'var(--ink)');
const DL=[0,1,2].map(i=>mk('path',{d:'M1280 '+(345+i*36)+'h'+(110-i*20),'stroke-width':8,'stroke-linecap':'round',stroke:'var(--muted)'},$('cloud0')));

fig($('baby'),800,600,26,'ink');
mk('rect',{x:730,y:684,width:140,height:44,rx:22,fill:'var(--stage)',stroke:'var(--line)','stroke-width':5},$('baby'));
const ADS=[320,1280].map(x=>fig(mk('g',{},$('ad')),x,360,44,'ink'));
const BB=[['WORDS',440,240],['RULES',960,240],['VALUES',440,440]].map(([s,x,y])=>{const g=mk('g',{},$('bubs')),cx=x+100,cy=y+32,dx=800-cx,dy=390-cy,L=Math.hypot(dx,dy);
  mk('path',{d:'M'+(cx+dx/L*105).toFixed(0)+' '+(cy+dy/L*105).toFixed(0)+'L'+(800-dx/L*112).toFixed(0)+' '+(390-dy/L*112).toFixed(0),stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'6 8'},g);
  mk('rect',{x:x,y:y,width:200,height:64,rx:32,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  T(g,cx,cy+8,s,22,'m','middle','fill:var(--ink)');return g});
const DT=[];for(let i=0;i<14;i++){const a=i*2.4,r=14+(i*37)%58;DT.push(mk('circle',{cx:(800+r*Math.cos(a)).toFixed(1),cy:(390+r*Math.sin(a)).toFixed(1),r:9,class:'gain'},$('dots')))}

const PP=[];for(let i=0;i<5;i++){const x=1020+i*100,g=mk('g',{},$('ppl'));fig(g,x,400,26,i===2?'gain':'ink');T($('says'),x,352,'tree',22,'d5','middle');PP.push([g,x])}

let sd='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,R=i%2?15:36;sd+=(i?'L':'M')+(1110+R*Math.cos(a)).toFixed(1)+' '+(320+R*Math.sin(a)).toFixed(1)}$('star').setAttribute('d',sd+'z');

const TK=[[300,300],[260,430],[300,560]].map(([x,y])=>{const g=mk('g',{},$('ticks'));mk('circle',{cx:x,cy:y,r:30,class:'gain'},g);mk('path',{d:'M'+(x-13)+' '+y+'l9 10l18-20',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
fig($('real'),560,400,50,'ink');
bubs($('tcloud'),[[690,322,10],[770,302,14],[860,292,18]],'var(--loss)');
cloud($('tcloud'),[[1060,360,70],[1150,330,80],[1240,370,65],[1150,425,60]],'var(--loss)');
T($('tcloud'),1150,362,'Am I good',34,'d5','middle');T($('tcloud'),1150,406,'enough?',34,'d5','middle');

const PL=[];for(let i=0;i<12;i++)PL.push(mk('rect',{x:160+(i%2)*24,y:700-i*34,width:300,height:26,rx:6,fill:'var(--stage)',stroke:i%4===3?'var(--gain)':'var(--ink)','stroke-width':3},$('pile')));
const W5=['RIGHT','BEAUTIFUL','POSSIBLE','WRONG','UGLY','IMPOSSIBLE'].map((s,i)=>T($('words'),i<3?865:1255,410+(i%3)*100,s,40,'d5','middle','fill:var(--'+(i<3?'gain':'loss')+')'));

const CR=[];for(let i=0;i<14;i++){const a=-Math.PI/2+i*2*Math.PI/14;CR.push(mk('circle',{cx:(1150+235*Math.cos(a)).toFixed(1),cy:(500+235*Math.sin(a)).toFixed(1),r:14,class:'ink'},$('crowd')))}

const RW=[0,1,2].map(i=>{const y=380+i*90,g=$('rows');mk('rect',{x:790,y:y-18,width:36,height:36,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},g);
  const ln=mk('path',{d:'M850 '+y+'H1200','stroke-width':6,'stroke-linecap':'round','stroke-dasharray':'4 14',stroke:'var(--muted)'},g);
  const ck=mk('path',{d:'M797 '+y+'l9 10l18-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);return [ln,ck]});

fig($('mref'),1320,420,30,'gain');