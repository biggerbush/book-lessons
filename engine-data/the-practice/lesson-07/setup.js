const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,fs,anc,fill)=>{const e=mk('text',{x:x,y:y,'font-size':fs,'text-anchor':anc||'start',class:'m'},g);if(fill)e.style.fill=fill;e.textContent=s;return e};
const NP=[[960,260],[1200,500],[960,740],[720,500]],NL=['SHOW UP','MAKE','SHIP','LEARN'];
const nodes=NP.map((q,i)=>{const g=mk('g',{},$('nodes'));mk('rect',{x:q[0]-100,y:q[1]-32,width:200,height:64,rx:32,fill:i?'var(--stage)':'var(--gain)',stroke:i?'var(--ink)':'var(--gain)','stroke-width':5},g);tx(g,q[0],q[1]+8,NL[i],24,'middle',i?'var(--ink)':'var(--on-gain)');return g});
fig($('walker'),200,600,22,'ink');
const laps=[360,620,880,1140].map((x,i)=>{const g=mk('g',{},$('laps')),x2=x+260;mk('rect',{x:x-28,y:644,width:56,height:56,rx:8,class:'gain'},g);mk('path',{d:'M'+(x+28)+' 680C'+(x+80)+' 520 '+(x2-80)+' 520 '+(x2-28)+' 680',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':i==3?'10 10':'none'},g);tx(g,x+130,530,'NEXT LAP',18,'middle');return g});
const TL=[300,240,320,180,280].map((w,i)=>[mk('path',{d:'M200 330h0',stroke:'var(--line)','stroke-width':10,'stroke-linecap':'round'},$('typ')),w,i]),TS=TL.reduce((s,q)=>s+q[1],0);
const cal=[];for(let i=0;i<28;i++){const x=700+(i%7)*110,y=280+Math.floor(i/7)*86,g=mk('g',{},$('cal'));cal.push([g,mk('rect',{x:x,y:y,width:100,height:76,rx:10,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g),mk('circle',{cx:x+50,cy:y+38,r:14,class:'gain'},g),(i*7)%5==0])}
const pg=[];for(let i=0;i<9;i++)pg.push(mk('rect',{x:220,y:806-i*16,width:240,height:14,rx:3,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('stk')));
let sd='',SPL=0,lx,ly;const SPP=[];for(let a=0;a<=8*Math.PI+.01;a+=.1){const x=1060+260*Math.cos(a),y=760-a*18.3+50*Math.sin(a);SPP.push([x,y]);if(lx!==undefined)SPL+=Math.hypot(x-lx,y-ly);sd+=(sd?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);lx=x;ly=y}
$('spi').setAttribute('d',sd);$('spi').setAttribute('stroke-dasharray',SPL.toFixed(0));
[170,250,330,410].forEach(x=>fig($('que'),x,540,22,'ink'));
fig($('gk'),600,520,28,'loss');
const TG=['AN EDITOR','A BOSS','A GALLERY','A BIG BREAK'].map((s,i)=>{const g=mk('g',{},$('tags'));mk('rect',{x:700,y:300+i*70,width:230,height:52,rx:26,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);tx(g,815,334+i*70,s,22,'middle','var(--ink)');return g});
fig($('you5'),0,540,22,'gain');
const ST=[];for(let i=0;i<8;i++)ST.push(mk('rect',{x:722+75*i,y:660-40*i,width:71,height:120+40*i,rx:4,class:'gain'},$('stp')));
fig($('refl'),520,400,48,'ink');
const TW=['Writer','Designer','Artist'];