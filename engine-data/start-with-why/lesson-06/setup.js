const person=(g,x,y,r,f)=>{const q=mk('g',{fill:f},g);mk('circle',{cx:x,cy:y,r:r},q);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},q);return q};
const G=(x,c,s,h,b)=>{const z=(x-c)/s;return b-h*Math.exp(-(z*z)/2)};
const crv=(c,s,h,b,x0,x1)=>{let d='M'+x0+' '+G(x0,c,s,h,b).toFixed(1);for(let x=x0+4;x<x1;x+=4)d+='L'+x+' '+G(x,c,s,h,b).toFixed(1);return d+'L'+x1+' '+G(x1,c,s,h,b).toFixed(1)};
const area=(c,s,h,b,x0,x1,f,o,g)=>mk('path',{d:'M'+x0+' '+b+crv(c,s,h,b,x0,x1).replace('M','L')+'L'+x1+' '+b+'Z',fill:f,'fill-opacity':o},g);
const len=(e,d)=>{try{const v=e.getTotalLength();return v>0?v:d}catch(x){return d}};
const draw=(e,L,k)=>{e.setAttribute('stroke-dasharray',L);e.setAttribute('stroke-dashoffset',(L*(1-k)).toFixed(1))};

for(let i=0;i<5;i++){const a=i*2*Math.PI/5-Math.PI/2;mk('circle',{cx:1340+42*Math.cos(a),cy:440+42*Math.sin(a),r:16,class:'gain'},$('t0g'))}
const TR=[0,1].map(()=>mk('circle',{cx:1340,cy:440,fill:'none',stroke:'var(--gain)','stroke-width':4},$('t0g')));
const TD=[];for(let i=0;i<12;i++){const a=i*Math.PI/6;TD.push(mk('circle',{cx:1340+112*Math.cos(a),cy:440+112*Math.sin(a),r:14},$('t0g')))}

const A1=[[160,360,'var(--gain)',1],[360,580,'var(--gain)',.55],[580,800,'var(--muted)',.35],[800,1020,'var(--muted)',.25],[1020,1440,'var(--muted)',.15]].map(q=>area(800,220,420,720,q[0],q[1],q[2],q[3],$('bfill')));
const BC=mk('path',{d:crv(800,220,420,720,160,1440),fill:'none',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('bline')),BL=len(BC,1700);

const QP=[];for(let i=0;i<6;i++)QP.push(person($('qp'),620+i*68,480,18,'var(--gain)'));

[200,270,340].forEach(x=>person($('bel3'),x,440,20,'var(--gain)'));
const M3=[],Q3=[];for(let i=0;i<8;i++){const x=660+i*110;M3.push(person($('maj3'),x,440,20,'var(--ink)'));const q=mk('text',{x:x,y:402,'font-size':34,'text-anchor':'middle',class:'d',style:'fill:var(--muted)'},$('qm3'));q.textContent='?';Q3.push(q)}
const W3=[0,1,2].map(k=>mk('path',{d:'M'+(400+k*28)+' 445q20 30 0 60',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('talk3')));

area(1100,110,300,620,760,990,'var(--muted)',.12,$('mc4'));area(1100,110,300,620,990,1210,'var(--loss)',.35,$('mc4'));
mk('path',{d:crv(1100,110,300,620,760,1440),fill:'none',class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('mc4'));
const AR4=$('arr4'),AL4=len(AR4,600);

[18,24,20,28,22,26].forEach((h,i)=>mk('rect',{x:200+i*75,y:620-h,width:44,height:h,class:'loss'},$('bars5')));
const P5=[];for(let i=0;i<5;i++)P5.push(person($('ppl5'),850+i*46,500,14,'var(--ink)'));

const CX6=960,CY6=500;
const R6=[0,1,2].map(()=>mk('ellipse',{cx:CX6,cy:CY6,fill:'none',stroke:'var(--gain)','stroke-width':4},$('rip6')));
const D6=[];[[304,152,9,130],[464,216,12,110]].forEach(([rx,ry,n,am],j)=>{for(let i=0;i<n;i++){const a=(-am+2*am*i/(n-1))*Math.PI/180;D6.push([mk('circle',{cx:CX6+rx*Math.cos(a),cy:CY6+ry*Math.sin(a),r:14},$('crowd6')),j+Math.abs(a)*.3])}});
[840,900,960,1020,1080].forEach(x=>{person($('bel6'),x,460,18,'var(--gain)');mk('path',{d:'M'+(x+22)+' 498L'+(x+34)+' 444',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('hand6'))});

for(let r=0;r<4;r++)for(let c=0;c<6;c++)mk('circle',{cx:180+c*80,cy:320+r*90,r:18,fill:'var(--muted)','fill-opacity':.6},$('crd7'));
for(let i=0;i<9;i++)mk('circle',{cx:860+i*50,cy:250,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spr7'));
const RW=[];for(let i=0;i<10;i++){const y=400+i*38,g=mk('g',{},$('rows7'));const n=mk('text',{x:850,y:y+7,'font-size':18,class:'m'},g);n.textContent=i+1;mk('circle',{cx:900,cy:y,r:11,class:'gain'},g);mk('path',{d:'M925 '+y+'H1260',class:'s-line','stroke-width':4,'stroke-linecap':'round'},g);RW.push(g)}

[160,200,240].forEach(x=>mk('circle',{cx:x,cy:780,r:14,class:'gain'},$('g8')));
const G8=[];for(let i=0;i<18;i++)G8.push(mk('circle',{cx:300+i*32,cy:780,r:8},$('g8')));