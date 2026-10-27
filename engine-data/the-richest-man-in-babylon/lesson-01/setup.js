const guy=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const PP='M-50-80Q-70-50-95-20Q-125 40-85 70Q-45 90 0 90Q45 90 85 70Q125 40 95-20Q70-50 50-80Z';
const bag=(par,x,y,s,st,fi,da)=>{const g=mk('g',{transform:'translate('+x+' '+y+') scale('+s+')',fill:fi,stroke:st,'stroke-width':7/s,'stroke-linecap':'round','stroke-linejoin':'round'},par);const a={d:PP};if(da)a['stroke-dasharray']=(12/s)+' '+(10/s);mk('path',a,g);mk('path',{d:'M-62-80h124M-15-80l-18-34M15-80l18-34',fill:'none'},g);return g};
const coin=(g)=>mk('circle',{r:13,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':3},g);
bag($('tp'),1310,470,1.3,'var(--ink)','var(--stage)');
mk('circle',{cx:1310,cy:500,r:46,fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 8'},$('tp'));
const TL=[];for(let i=0;i<20;i++){const x=1166+i*13+Math.floor(i/5)*12;TL.push(mk('path',{d:'M'+x+' 640v60',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('tally')))}
guy($('bz'),630,542,28,'ink');guy($('wf'),1005,600,24,'ink');
guy($('df'),800,310,28,'ink');bag($('dpurse'),880,420,.35,'var(--ink)','var(--gain)');
const DC=[];for(let i=0;i<6;i++)DC.push(coin($('dcoins')));
bag($('rp'),1000,700,.55,'var(--loss)','none',1);
guy($('bk'),520,460,40,'ink');guy($('kk'),1080,460,40,'ink');
[520,1080].forEach(x=>bag($('br'),x,740,.4,'var(--loss)','none',1));
const CE=[];for(let i=0;i<40;i++)CE.push(mk('rect',{x:120+(i%10)*48,y:250+Math.floor(i/10)*48,width:40,height:40,rx:6,fill:'var(--line)'},$('cal')));
const IN=[],OUT=[];for(let i=0;i<5;i++){const c=coin($('cin'));c.setAttribute('cx',1100);IN.push(c);OUT.push(coin($('cout')))}
[[208,'ink'],[260,'ink'],[312,'gain']].forEach(q=>guy($('boys'),q[0],500,16,q[1]));
guy($('ak'),1000,330,24,'gain');guy($('lp'),940,640,22,'ink');guy($('lp'),1010,640,22,'ink');
for(let k=0;k<6;k++)mk('rect',{x:1110+k*58,y:306,width:30,height:26,class:'ink'},$('pal'));
for(let i=0;i<5;i++){const a=Math.PI*(-.9+i*.2);mk('path',{d:'M'+(455+48*Math.cos(a)).toFixed(1)+' '+(406+48*Math.sin(a)).toFixed(1)+'L'+(455+72*Math.cos(a)).toFixed(1)+' '+(406+72*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
guy($('walk'),700,680,18,'ink');guy($('walk'),752,680,18,'ink');
mk('rect',{x:1210,y:690,width:200,height:100,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('mpal'));
for(let k=0;k<4;k++)mk('rect',{x:1218+k*52,y:672,width:26,height:18,class:'ink'},$('mpal'));
mk('path',{d:'M1295 790v-40a15 15 0 0 1 30 0v40z',class:'gain'},$('mpal'));
const HC=[];for(let i=0;i<3;i++)HC.push(coin($('hc')));
const OF=[0,20,0,20,0];for(let k=0;k<4;k++){const x=820+160*k;mk('polygon',{points:x+','+(260+OF[k])+' '+(x+160)+','+(260+OF[k+1])+' '+(x+160)+','+(480+OF[k+1])+' '+x+','+(480+OF[k]),fill:k%2?'var(--line)':'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},$('mapp'))}