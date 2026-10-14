const fig=(g,x,y,r,f)=>[mk('circle',{cx:x,cy:y,r:r,fill:f},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)];
const CR=[];for(let i=0;i<10;i++){const g=mk('g',{},$('crowd'));fig(g,170+(i%5)*100,330+Math.floor(i/5)*150,22,(i===3||i===6)?'var(--gain)':'var(--ink)');CR.push(g)}
const JK=fig($('jkp'),220,560,30,'var(--ink)'),JL=fig($('jlp'),940,560,30,'var(--ink)');
for(let i=0;i<=10;i++)mk('path',{d:'M'+(200+i*120)+' 508v24',class:'s-ink','stroke-width':4},$('ticks'));
let cd='';for(let x=-300;x<=300;x+=10){const y=x>=0?-4.9*Math.pow(x,.6):8.33*Math.pow(-x,.6);cd+=(x===-300?'M':'L')+(1140+x)+' '+(520+y).toFixed(1)}
$('curveP').setAttribute('d',cd);
fig($('shp'),430,420,24,'var(--stage)');fig($('stp'),980,420,24,'var(--loss)');
const CK=['✕ TURN DOWN GOOD BETS','✕ CLING TO WHAT WE HAVE','✕ AVOID HELPFUL CHANGES'].map((s,i)=>{const g=mk('g',{},$('chips')),y=300+i*120;
mk('rect',{x:1110,y:y,width:370,height:80,rx:40,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
const tx=mk('text',{x:1135,y:y+47,'font-size':20,class:'m'},g);tx.textContent=s;return g});
const CO=[],CUM=[0];for(let i=0;i<100;i++){const w=((i*7+3+Math.floor(i/10)*3)%10)<5;CUM.push(CUM[i]+(w?1.5:-1));
CO.push([mk('circle',{cx:140+(i%10)*48,cy:260+Math.floor(i/10)*48,r:18,'stroke-width':3},$('coins')),w])}
// closing: 10x10 grid of muted dots inside a card, one highlighted in amber (one of a hundred)
const HI=44,DX=1100,DY=310,DS=40;
const DT=[];for(let i=0;i<100;i++){const x=DX+20+(i%10)*DS,y=DY+20+Math.floor(i/10)*DS;
DT.push(mk('circle',{cx:x,cy:y,r:14,fill:i===HI?'var(--gain)':'var(--muted)','fill-opacity':i===HI?1:.5},$('dots')))}
const HIR=mk('circle',{cx:DX+20+(HI%10)*DS,cy:DY+20+Math.floor(HI/10)*DS,r:20,fill:'none',stroke:'var(--gain)','stroke-width':4},$('dots'));