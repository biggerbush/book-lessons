const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const txt=(g,x,y,s,fs,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:'m'},a||{}),g);e.textContent=s;return e};
fig($('wkb'),1320,380,30,'ink');
const cells0=[];for(let i=0;i<15;i++)cells0.push(mk('rect',{x:1198+(i%5)*54,y:202+Math.floor(i/5)*40,width:48,height:32,rx:6,fill:'var(--line)'},$('cal0')));
fig($('asker'),260,330,40,'ink');
for(let i=0;i<23;i++){const x=1020+i*20;mk('path',{d:'M'+x+' 400v'+(i%5?20:40),class:'s-ink','stroke-width':4},$('ticks1'));if(i%5===0)txt($('ticks1'),x,475,'?',22,{'text-anchor':'middle',style:'fill:var(--loss)'})}
const envs=[];for(let i=0;i<5;i++){const g=mk('g',{},$('envs')),x=180+i*14,y=270+i*46;mk('rect',{x:x,y:y,width:260,height:120,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:'M'+x+' '+y+'l130 60 130-60',fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);envs.push(g)}
const calC=[];for(let i=0;i<30;i++)calC.push(mk('rect',{x:636+(i%5)*70,y:316+Math.floor(i/5)*42,width:58,height:32,rx:5,fill:'var(--loss)'},$('calC')));
for(let i=0;i<8;i++){const a=i*Math.PI/4+.4;mk('circle',{cx:1270+175*Math.cos(a),cy:440+110*Math.sin(a),r:22,class:'ink'},$('heads'))}
const slips=[];for(let i=0;i<11;i++)slips.push(mk('rect',{x:720,y:660-i*40,width:160,height:32,rx:6,class:'loss','fill-opacity':i%2?.6:1},$('slips')));
mk('ellipse',{cx:0,cy:0,rx:24,ry:17,class:'gain'},$('beeM'));mk('path',{d:'M-8-15v30M6-16v32',class:'s-ink','stroke-width':5},$('beeM'));mk('circle',{cx:26,cy:0,r:9,class:'ink'},$('beeM'));
const wings=[-10,4].map(x=>mk('ellipse',{cx:x,cy:-24,rx:10,ry:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('beeM')));
[[300,300],[420,250],[520,280],[600,240],[700,350],[640,300],[260,360],[460,330]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:22,class:'gain','fill-opacity':.5},$('leaves')));
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(1060+76*Math.cos(a))+' '+(450+76*Math.sin(a))+'L'+(1060+84*Math.cos(a))+' '+(450+84*Math.sin(a)),class:'s-ink','stroke-width':4},$('cticks'))}
for(let k=0;k<3;k++){const x=1270+k*12,y=350+k*14;mk('rect',{x:x,y:y,width:160,height:200,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('pg'));if(k===2)for(let j=0;j<5;j++)mk('path',{d:'M'+(x+20)+' '+(y+80+j*24)+'h'+(j===4?70:120),class:'s-line','stroke-width':5,'stroke-linecap':'round'},$('pg'))}
for(let i=0;i<4;i++)mk('rect',{x:190,y:320+i*80,width:160,height:48,rx:12,fill:'var(--line)'},$('pbars'));
const tiles=[];for(let i=0;i<9;i++){const x=184+(i%3)*216,y=254+Math.floor(i/3)*136,g=mk('g',{},$('tiles'));mk('rect',{x:x,y:y,width:200,height:124,rx:8,fill:'var(--line)'},g);tiles.push([g].concat(fig(g,x+100,y+40,16,'ink')))}
const chats=[],dots=[];for(let i=0;i<6;i++){const x=i%2?1100:940,y=240+i*76,g=mk('g',{},$('chats'));mk('rect',{x:x,y:y,width:380,height:60,rx:28,fill:i%2?'var(--gain)':'var(--stage)',stroke:i%2?'none':'var(--ink)','stroke-width':4},g);for(let k=0;k<3;k++)dots.push([mk('circle',{cx:x+40+k*28,cy:y+30,r:7,fill:i%2?'var(--on-gain)':'var(--ink)'},g),y+30,k]);chats.push(g)}
for(let i=0;i<7;i++)mk('circle',{cx:-60+i*20,cy:126,r:10,class:'loss'},$('pell'));for(let i=0;i<4;i++)mk('circle',{cx:-30+i*20,cy:106,r:10,class:'loss'},$('pell'));
const SPL=$('spath').getTotalLength()||700;
for(let i=0;i<5;i++)mk('circle',{cx:1250+i*45,cy:280,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spir'));