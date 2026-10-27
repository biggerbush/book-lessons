const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const cld=(x,y)=>'M'+(x-100)+' '+(y+40)+'a40 40 0 0 1 10-70a55 55 0 0 1 100-20a45 45 0 0 1 80 30a35 35 0 0 1-10 60z';
const cloudEl=(g,x,y)=>mk('path',{d:cld(x,y),fill:'var(--stage)',stroke:'var(--loss)','stroke-width':6,'stroke-dasharray':'14 10','stroke-linejoin':'round'},g);
cloudEl($('t0cp'),1300,240); fig($('t0f'),1300,400,30,'ink');
const house=(g,x,y0,h)=>{mk('rect',{x:x-80,y:y0,width:160,height:h,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);mk('path',{d:'M'+(x-100)+' '+y0+'L'+x+' '+(y0-90)+'L'+(x+100)+' '+y0+'z',fill:'var(--ink)','stroke-linejoin':'round'},g);mk('rect',{x:x-20,y:y0+h-66,width:40,height:60,fill:'var(--ink)'},g)};
cloudEl($('h1wc'),1000,700); house($('h1wh'),1000,470,140); house($('h1fh'),1340,530,130);
const star=(x,y,R)=>{let d='';for(let i=0;i<10;i++){const r=i%2?R*.45:R,a=-Math.PI/2+i*Math.PI/5;d+=(i?'L':'M')+(x+r*Math.cos(a)).toFixed(1)+' '+(y+r*Math.sin(a)).toFixed(1)}return d+'z'};
mk('path',{d:star(900,470,34),fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'6 6','stroke-linejoin':'round'},$('st2'));
fig($('pf2'),720,600,24,'ink'); fig($('pf3'),1180,600,24,'ink');
const EQ=['Dreams','Reality','Determination','Success'].map((s,i)=>{const x=[120,480,840,1220][i],f=i==3,g=mk('g',{},$('eq2'));
  mk('rect',{x:x,y:220,width:260,height:140,rx:18,fill:f?'var(--gain)':'var(--stage)',stroke:f?'var(--gain)':'var(--ink)','stroke-width':5},g);
  const tx=mk('text',{x:x+130,y:302,'font-size':32,'text-anchor':'middle',class:'d5',style:f?'fill:var(--on-gain)':''},g);tx.textContent=s;
  if(i){const o=mk('text',{x:[430,790,1160][i-1],y:312,'font-size':56,'text-anchor':'middle',class:'d',style:'fill:var(--muted)'},g);o.textContent=f?'=':'+'}return g});
const animal=(g,x,y,s,f,c,horn)=>{const o=mk('g',{},g),a=mk('g',{transform:'translate('+x+' '+y+') scale('+(f*s)+' '+s+')'},o),col='var(--'+c+')';
  mk('ellipse',{cx:0,cy:0,rx:60,ry:28,fill:col},a);mk('circle',{cx:66,cy:-22,r:18,fill:col},a);
  mk('path',{d:'M-40 18V70M-20 18V70M30 18V70M48 18V70M-58-6l-18 22M50-10L64-20',stroke:col,'stroke-width':9,'stroke-linecap':'round',fill:'none'},a);
  if(horn)mk('path',{d:'M58-36q-10-16 2-26M76-36q10-16-2-26',stroke:col,'stroke-width':6,'stroke-linecap':'round',fill:'none'},a);return o};
// scene 3: the hunt, hyenas closing in on a stumbling wildebeest
fig($('dal3f'),300,470,32,'ink');
const WBw=mk('g',{},$('herd3')), WB=animal(WBw,1070,649,1.3,1,'ink',1);
const HYD=[[880,677,1,-12],[960,600,1,-25],[1250,677,-1,12],[1190,590,-1,22],[1340,677,-1,6]];
const HY=HYD.map(q=>{const w=mk('g',{},$('herd3'));return [w,animal(w,q[0],q[1],.9,q[2],'loss'),q]});
[[770,470,1],[770,650,-1],[1390,520,-1],[1400,690,-1],[1190,350,1],[1360,340,-1]].forEach(q=>animal($('big3'),q[0],q[1],.5,q[2],'muted',1));
for(let r=0;r<3;r++)for(let c=0;c<5;c++)if(!(r==1&&c==2))mk('circle',{cx:380+c*60,cy:440+r*60,r:20,fill:'var(--gain)'},$('hd4'));
const IND=mk('circle',{cx:500,cy:500,r:20,fill:'var(--loss)'},$('hd4'));
fig($('pa5'),330,620,24,'loss'); fig($('pb5'),660,620,24,'gain');
const W7=[380,450,520].map(y=>mk('path',{d:'M130 '+y+'H290',stroke:'var(--muted)','stroke-width':5,'stroke-dasharray':'24 16','stroke-linecap':'round'},$('wd7')));
for(let i=0;i<12;i++){const a=i*Math.PI/6,P=r=>(1220+r*Math.sin(a)).toFixed(1)+' '+(440-r*Math.cos(a)).toFixed(1);mk('path',{d:'M'+P(128)+'L'+P(144),stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},$('tk7'))}