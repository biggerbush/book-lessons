const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
fig($('team'),1160,470,22,'ink');fig($('team'),1280,470,22,'ink');
const F0=[];for(let i=0;i<6;i++)F0.push(mk('rect',{x:1370,y:514-i*46,width:100,height:40,rx:6,class:i%2?'ink':'gain'},$('feat')));
let td='';for(let i=0;i<=33;i++){td+='M'+(140+i*40)+' 210v'+(i%5?14:26)}mk('path',{d:td,class:'s-ink','stroke-width':3},$('ticks'));
const FB=[],SB=[];for(let i=0;i<4;i++){FB.push(mk('rect',{x:360,y:590,width:50,height:50,rx:6,class:'ink'},$('fbox')));SB.push(mk('rect',{x:880,y:548,width:50,height:50,rx:6,class:'ink'},$('sbox')))}
fig($('cust1'),1150,420,22,'ink');fig($('riesP'),280,400,40,'ink');fig($('avP'),560,500,20,'gain');
const SH=[];for(let i=0;i<7;i++){const g=mk('g',{},$('sheets')),y=600-i*44;mk('rect',{x:1150,y:y,width:280,height:36,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M1170 '+(y+18)+'h'+(60+(i*37)%120),stroke:i%3?'var(--muted)':'var(--gain)','stroke-width':6,'stroke-linecap':'round'},g);SH.push(g)}
fig($('teamP'),820,450,26,'ink');fig($('custP'),1020,450,26,'ink');
[[1320,430],[1400,430],[1290,500],[1360,510],[1430,500]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:22,fill:'var(--muted)','fill-opacity':.5},$('frdP')));
const FL=[];for(let i=0;i<4;i++){const g=mk('g',{},$('fall'));mk('rect',{x:-55,y:-15,width:110,height:30,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M-38 0h50',stroke:'var(--muted)','stroke-width':5},g);FL.push(g)}
for(let i=0;i<7;i++){const a=Math.PI*(1+i/6),c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(740+100*c).toFixed(0)+' '+(400+100*s).toFixed(0)+'L'+(740+128*c).toFixed(0)+' '+(400+128*s).toFixed(0),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
const NP=[];for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/2;NP.push([1200+100*Math.cos(a),400+100*Math.sin(a)])}
NP.forEach((a,i)=>NP.forEach((b,j)=>{if(j>i)mk('path',{d:'M'+a[0].toFixed(0)+' '+a[1].toFixed(0)+'L'+b[0].toFixed(0)+' '+b[1].toFixed(0),class:'s-line','stroke-width':3},$('net'))}));
NP.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:18,class:'gain'},$('net')));
fig($('custS'),1040,480,24,'ink');fig($('shrug'),960,430,30,'ink');
const EH=[70,130,190,250],EB=EH.map((h,i)=>mk('rect',{x:220+i*120,y:640,width:70,height:0,class:'gain'},$('evb')));