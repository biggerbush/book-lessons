const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const HP='M0 120C-150 20-160-90-75-110C-35-120-8-92 0-70C8-92 35-120 75-110C160-90 150 20 0 120Z';
fig($('tPpl'),1180,330,40,'ink');fig($('tPpl'),1380,330,40,'gain');
let sd='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,R=i%2?16:38;sd+=(i?'L':'M')+(1180+R*Math.cos(a)).toFixed(1)+' '+(220+R*Math.sin(a)).toFixed(1)}
const star=mk('path',{d:sd+'Z',class:'ink'},$('tStarG'));
fig($('dogP'),1180,500,44,'ink');
const HR=[[900,440],[985,370],[1050,470]].map(()=>mk('path',{d:HP,class:'gain'},$('hearts')));
fig($('dinPpl'),520,420,40,'gain');fig($('dinPpl'),1080,420,40,'ink');
[[590,360],[635,315],[680,270]].forEach(q=>{mk('text',{x:q[0],y:q[1],class:'d','font-size':52,style:'fill:var(--gain)'},$('qs')).textContent='?'});
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1340+56*c).toFixed(1)+' '+(320+56*s).toFixed(1)+'L'+(1340+64*c).toFixed(1)+' '+(320+64*s).toFixed(1),class:'s-ink','stroke-width':4},$('ticks'))}
fig($('s3ppl'),300,560,36,'ink');fig($('s3ppl'),560,560,36,'ink');
fig($('refl'),480,425,28,'loss');fig($('mirP'),260,430,40,'ink');
const WV=[0,1,2].map(i=>mk('path',{d:'M'+(930+i*24)+' '+(400-i*14)+'q'+(18+i*6)+' '+(40+i*14)+' 0 '+(80+i*28),class:'s-gain',fill:'none','stroke-width':6,'stroke-linecap':'round'},$('waves')));
const DT=[];for(let i=0;i<90;i++)DT.push(mk('circle',{cx:740+(i%18)*40,cy:440+Math.floor(i/18)*34,r:11},$('dots')));
[230,420,610].forEach(x=>{const g=$('rabs');
  mk('ellipse',{cx:x+30,cy:504,rx:8,ry:26,class:'ink'},g);mk('ellipse',{cx:x+50,cy:504,rx:8,ry:26,class:'ink'},g);
  mk('ellipse',{cx:x,cy:580,rx:50,ry:36,class:'ink'},g);mk('circle',{cx:x+40,cy:540,r:24,class:'ink'},g);mk('circle',{cx:x+48,cy:536,r:4,fill:'var(--stage)'},g);
  mk('rect',{x:x-40,y:630,width:80,height:28,rx:6,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},$('rtags'));mk('path',{d:'M'+(x-26)+' 644h52',stroke:'var(--gain)','stroke-width':4},$('rtags'))});
[300,440,580].forEach(x=>fig($('boys'),x,330,22,'gain'));
for(let i=0;i<5;i++)mk('ellipse',{cx:390+i*25,cy:684,rx:14,ry:8,class:'gain'},$('food'));
const SM=[0,1,2].map(()=>mk('circle',{cx:1320,r:16,fill:'var(--line)'},$('smoke')));
for(let x=890;x<=1450;x+=40)mk('path',{d:'M'+x+' 704v40',class:'s-muted','stroke-width':5},$('track'));
for(let i=0;i<4;i++)mk('circle',{cx:230,cy:320+i*50,r:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));
const TL=[0,1,2,3].map(i=>mk('rect',{x:650+i*80,y:300,width:64,height:64,rx:8,stroke:'var(--ink)','stroke-width':5},$('tiles')));
const ST=[0,1,2].map(i=>mk('path',{d:'M'+(1210+i*40)+' 340q-12-15 0-30q12-15 0-30',class:'s-muted',fill:'none','stroke-width':5,'stroke-linecap':'round'},$('steam')));
const DY=[];for(let i=0;i<12;i++)DY.push(mk('rect',{x:1278+(i%4)*44,y:660+Math.floor(i/4)*38,width:32,height:28,rx:5,fill:'var(--line)'},$('days')));