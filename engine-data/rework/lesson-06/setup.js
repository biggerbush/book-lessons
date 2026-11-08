const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const T=(g,x,y,s,txt,cls,a)=>{const e=mk('text',{x:x,y:y,'font-size':s,class:cls,'text-anchor':a},g);e.textContent=txt;return e};
fig($('who'),1290,380,34,'ink');
const P0=[[1150,300],[1430,290],[1140,450],[1450,440],[1290,250]].map(([x,y])=>{const g=mk('g',{},$('pings0'));const c=mk('circle',{cx:x,cy:y,r:26,class:'loss'},g);T(g,x,y+11,30,'!','d','middle').style.fill='var(--stage)';return [g,c]});
const PC=[];for(let i=0;i<12;i++)PC.push(mk('rect',{x:120+i*113.33,y:380,width:113.33,height:80,class:'gain'},$('bar1')));
const ST={fill:'none',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'};
const IC=[[460,'QUESTION'],[687,'CALL'],[1027,'MESSAGE'],[1253,'TAP']].map(([x,s],i)=>{const g=mk('g',{},$('icons'));
  mk('path',{d:'M'+x+' 326V378',class:'s-loss','stroke-width':4,'stroke-dasharray':'6 6'},g);mk('circle',{cx:x,cy:290,r:34,class:'loss'},g);T(g,x,240,20,s,'m','middle');
  if(i==0)T(g,x,303,38,'?','d','middle').style.fill='var(--stage)';
  if(i==1)mk('rect',Object.assign({x:x-11,y:272,width:22,height:36,rx:5},ST),g);
  if(i==2)mk('path',Object.assign({d:'M'+(x-17)+' 276h34v22h-18l-10 9v-9h-6z'},ST),g);
  if(i==3)mk('path',Object.assign({d:'M'+(x-6)+' 308v-30a6 6 0 0 1 12 0v14l10 4v12'},ST),g);
  return g});
fig($('lone0'),300,440,20,'gain');fig($('lone2'),1300,440,20,'gain');
for(let i=0;i<7;i++)fig($('crowd2'),540+i*85,445,16,'loss');
fig($('wk3'),340,380,28,'ink');fig($('tp3'),600,370,28,'loss');
[300,420,540,660].forEach(x=>fig($('ppl4'),x,430,22,'ink'));
const WC=[['IDEAS',300,270],['WORDS',560,250],['ABSTRACT',420,350],['TALK',660,350]].map(([s,x,y])=>{const g=mk('g',{},$('wc'));mk('rect',{x:x-80,y:y-26,width:160,height:52,rx:26,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);T(g,x,y+7,20,s,'m','middle');return g});
const DP=$('dpath'),DL=DP.getTotalLength();DP.setAttribute('stroke-dasharray',DL);
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(290+108*Math.sin(a)).toFixed(1)+' '+(440-108*Math.cos(a)).toFixed(1)+'L'+(290+120*Math.sin(a)).toFixed(1)+' '+(440-120*Math.cos(a)).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ticks5'))}
// timer tick marks (outside the amber sector, inside the rim)
for(let i=0;i<12;i++){const a=i*Math.PI/6,r0=i%3==0?92:96;mk('path',{d:'M'+(330+r0*Math.sin(a)).toFixed(1)+' '+(420-r0*Math.cos(a)).toFixed(1)+'L'+(330+103*Math.sin(a)).toFixed(1)+' '+(420-103*Math.cos(a)).toFixed(1),class:'s-ink','stroke-width':i%3==0?6:4,'stroke-linecap':'round'},$('tticks'))}
const TP=[],SB=[];for(let i=0;i<10;i++){const g=mk('g',{},$('ten'));fig(g,560+(i%5)*110,290+Math.floor(i/5)*160,22,'ink');TP.push(g);
  SB.push(mk('rect',{x:1200,y:606-i*42,width:240,height:34,rx:6,class:'gain'},$('stk')))}
[680,800,920].forEach((x,i)=>fig($('few6'),x,460+(i==1?20:0),20,'gain'));
fig($('own6'),1270,380,34,'ink');
const sector=(cx,cy,r,f)=>{if(f<=0)return '';f=Math.min(f,.9999);const a=2*Math.PI*f;return 'M'+cx+' '+cy+'V'+(cy-r)+'A'+r+' '+r+' 0 '+(f>.5?1:0)+' 1 '+(cx+r*Math.sin(a)).toFixed(1)+' '+(cy-r*Math.cos(a)).toFixed(1)+'Z'};
const CC=['M','T','W','T','F'].map((s,i)=>{const x=560+i*187.5,g=mk('g',{},$('cal'));const r=mk('rect',{x:x,y:500,width:170,height:120,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);const tx=T(g,x+85,580,48,s,'d','middle');return [g,r,tx]});
const PG=[[1150,280],[1465,330],[1160,520],[1460,520],[1320,215]].map(([x,y])=>[mk('circle',{cx:x,cy:y,r:12,class:'loss'},$('pg8')),x,y]);