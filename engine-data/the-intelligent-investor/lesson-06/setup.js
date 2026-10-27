const man=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const TK=['BUY ▲','SELL ▼','HOT ▲','NOW ▼','BUY ▲','SELL ▼','HOT ▲','NOW ▼'].map((s,i)=>{const e=mk('text',{x:1200,y:292,'font-size':32,class:'m',opacity:0,style:'fill:var('+(i%2?'--stage':'--gain')+')'},$('tick'));e.textContent=s;return e});
for(let i=0;i<10;i++)mk('circle',{cx:175+50*i,cy:384,r:25,class:'gain'},$('awn'));
man($('bk'),390,480,18,'ink');
man($('cust'),710,680,18,'ink');man($('cust'),780,680,18,'ink');
for(let i=1;i<8;i++)mk('path',{d:'M'+(160+60*i)+' 410V760',class:'s-muted','stroke-width':3,'stroke-dasharray':'8 8'},$('cuts'));
const CK=['Size','Financial strength','Steady earnings','Dividend record','Fair price'].map((s,i)=>{const y=340+i*96,g=mk('g',{},$('cks'));
  const c=mk('circle',{cx:960,cy:y,r:26,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const n=mk('text',{x:960,y:y+9,'font-size':26,'text-anchor':'middle',class:'d'},g);n.textContent=i+1;
  const l=mk('text',{x:1010,y:y+12,'font-size':36,class:'d5'},g);l.textContent=s;return [g,c,n]});
const H=[],EB=[];for(let i=0;i<10;i++){H.push(180*(1+i/27)+(i%3)*8);EB.push(mk('rect',{x:160+i*112,y:720,width:72,height:0,class:'gain'},$('ebar')))}
man($('holder'),1380,290,30,'ink');
const CN=[];for(let i=0;i<6;i++)CN.push(mk('circle',{r:20,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':4},$('cn')));
const CELL=[];for(let i=0;i<20;i++)CELL.push(mk('rect',{x:120+i*68,y:570,width:56,height:56,rx:8,stroke:'var(--ink)','stroke-width':4,fill:'var(--stage)'},$('cells')));
let wd='M120 '+(510-22*Math.sin(1)).toFixed(1);for(let x=130;x<=1480;x+=10)wd+='L'+x+' '+(510-22*Math.sin(x/120)).toFixed(1);$('wv').setAttribute('d',wd);
const PL=['SIZE','FINANCES','EARNINGS','DIVIDENDS','PRICE'].map((s,i)=>{const x=120+i*272;
  const r=mk('rect',{x:x,y:210,width:248,height:70,rx:35,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('pills'));
  const e=mk('text',{x:x+124,y:254,'font-size':24,'text-anchor':'middle',class:'m'},$('pills'));e.textContent=s;return r});