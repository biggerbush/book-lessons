const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const wv=(x0,x1,y,b,a,ph)=>{let d='M'+x0+' '+b;for(let x=x0;x<x1;x+=8)d+='L'+x+' '+(y+a*Math.sin(x/30+ph)).toFixed(1);return d+'L'+x1+' '+(y+a*Math.sin(x1/30+ph)).toFixed(1)+'L'+x1+' '+b+'Z'};
const draw=(el,k)=>{el.setAttribute('stroke-dasharray','1 1');el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));el.style.opacity=k>0?1:0};
fig($('who1'),230,440,32,'ink');
// bolts: x, top y; each 60px tall, clear of the black plan line, just above each drop on the indigo line
const B1=[[570,470],[730,488],[890,515]].map(([x,y])=>mk('path',{d:'M'+(x+10)+' '+y+'L'+(x-6)+' '+(y+30)+'H'+(x+8)+'L'+(x-5)+' '+(y+60),class:'s-loss',fill:'none','stroke-width':6,'stroke-linejoin':'round','stroke-linecap':'round'},$('bolts1')));
const CH1=['JOB LOSS','ILLNESS','MARKET CRASH','???'].map((s,i)=>{const g=mk('g',{},$('chips1'));mk('rect',{x:1100,y:470+i*80,width:360,height:60,rx:30,fill:'var(--stage)',stroke:i<3?'var(--loss)':'var(--muted)','stroke-width':4,'stroke-dasharray':i<3?'none':'10 8'},g);const tx=mk('text',{x:1280,y:508+i*80,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
const H2=[0,1,2].map(()=>mk('circle',{r:20,class:'loss',opacity:0},$('hits2')));
const TK3=[[0,0],[0,3],[1,0],[1,2],[1,3],[2,0],[2,1],[2,2]];
for(let r=0;r<3;r++)for(let c=0;c<5;c++){const tk=TK3.some(q=>q[0]==r&&q[1]==c);mk('rect',{x:1114+c*64,y:376+r*66,width:54,height:56,rx:8,fill:tk?'var(--ink)':'none',stroke:tk?'none':'var(--gain)','stroke-width':3,'stroke-dasharray':tk?'none':'6 6'},$('grid3'))}
const V4=i=>7*i+25*Math.sin(i*1.3)+15*Math.sin(i*2.9)-(i>=20&&i<30?150*(1-(i-20)/10):0)-(i>=42&&i<52?150*(1-(i-42)/10):0);
let pt4='';for(let i=0;i<=60;i++)pt4+=(170+i*15)+','+(690-.95*V4(i)).toFixed(1)+' ';$('mk4').setAttribute('points',pt4);
[20,42].forEach(i=>mk('circle',{cx:170+i*15,cy:(690-.95*V4(i)).toFixed(1),r:13,class:'loss',stroke:'var(--stage)','stroke-width':4},$('drops4')));
const Y6=s=>s<.45?340+170*(.5-.5*Math.cos(Math.PI*s/.45)):510-200*(.5-.5*Math.cos(Math.PI*(s-.45)/.55));
const P6=(px,a,b)=>{let q='';for(let k=0;k<=20;k++){const s=a+(b-a)*k/20;q+=(px+40+s*560).toFixed(1)+','+Y6(s).toFixed(1)+' '}return q};
$('cv0').setAttribute('points',P6(120,0,.45));$('cv1a').setAttribute('points',P6(840,0,.45));$('cv1b').setAttribute('points',P6(840,.45,1));
const TB=[0,1,2,3,4].map(k=>mk('rect',{x:410+(k%2?8:-6),y:694-26*k,width:60,height:24,rx:4,fill:'var(--ink)'},$('tow6')));
const MO=[0,1,2,3,4,5].map(i=>{const x=120+i*105;mk('rect',{x:x,y:400,width:90,height:130,rx:10,fill:'none',stroke:'var(--line)','stroke-width':4},$('mon7'));const tx=mk('text',{x:x+45,y:565,'font-size':20,'text-anchor':'middle',class:'m'},$('mon7'));tx.textContent='M'+(i+1);return mk('rect',{x:x+6,y:524,width:78,height:0,rx:6,class:'gain'},$('mon7'))});
fig($('walk7'),1170,262,18,'ink');
const NA={stroke:'var(--gain)','stroke-width':4,'vector-effect':'non-scaling-stroke','stroke-linecap':'round'};
[530,560,590].forEach(y=>mk('path',Object.assign({d:'M910 '+y+'H1430'},NA),$('net7')));
for(let x=910;x<=1430;x+=40)mk('path',Object.assign({d:'M'+x+' 530V590'},NA),$('net7'));