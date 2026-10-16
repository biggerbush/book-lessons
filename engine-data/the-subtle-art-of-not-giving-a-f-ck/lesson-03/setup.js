const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const cls=(f,c)=>f.forEach(e=>e.setAttribute('class',c));
const row0=[1170,1235,1300,1365,1430].map((x,i)=>fig($('row0'),x,400,18,i==2?'gain':'ink'));
let sd='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,R=i%2?26:60;sd+=(i?'L':'M')+(R*Math.cos(a)).toFixed(1)+' '+(R*Math.sin(a)).toFixed(1)}$('star0').setAttribute('d',sd+'Z');
fig($('jimP'),320,420,40,'ink');
fig($('mirP'),820,400,36,'ink');fig($('refP'),1130,390,40,'gain');
fig($('p0'),480,400,36,'ink');fig($('p1'),1120,400,36,'ink');
fig($('vicP'),520,450,34,'ink');
const AR=[440,520,600].map(y=>mk('path',{d:'M150 '+y+'h120m-20-18 20 18-20 18',fill:'none',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('exp')));
const CR=[];for(let j=0;j<3;j++)for(let i=0;i<6;i++){const g=mk('g',{},$('crw')),x=900+i*100,y=320+j*130;fig(g,x,y,14,'ink');mk('circle',{cx:x,cy:y+50,r:6,class:'loss'},g);CR.push(g)}
const CD=['RICHEST','FUNNIEST','MOST BEAUTIFUL'].map((s,i)=>{const g=mk('g',{},$('cards'));mk('rect',{x:172,y:260+i*140,width:256,height:120,rx:12,class:'gain'},g);const tx=mk('text',{x:300,y:328+i*140,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=s;return g});
for(let y=270;y<720;y+=25)mk('path',{d:'M540 '+y+'h'+(y%50?14:26),class:'s-ink','stroke-width':3},$('ticks'));
fig($('ordP'),680,612,20,'ink');fig($('spP'),1270,570,26,'ink');
const bcY=x=>640-340*Math.exp(-(((x-520)/120)**2)/2);
let bd='';for(let x=140;x<=900;x+=10)bd+=(x>140?'L':'M')+x+' '+bcY(x).toFixed(1);$('bc').setAttribute('d',bd);
const LF=fig($('lifter'),1200,520,34,'ink');
for(let i=0;i<7;i++)mk('circle',{cx:880+i*40,cy:260,r:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('spi'));
const BR=[0,1,2,3].map(i=>mk('rect',{x:870,y:390+i*50,height:26,rx:13,width:26,class:'gain'},$('bars')));