const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const tx=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};
const CO=[0,1,2].map(i=>mk('circle',{cx:1250+i*50,cy:300,r:20,class:'gain'},$('coins')));
const MER=[0,1,2].map(()=>mk('ellipse',{cx:330,cy:520,rx:170,ry:170,fill:'none',class:'s-ink','stroke-width':4},$('mer')));
for(let i=0;i<15;i++)mk('path',{d:'M'+(620+i*60)+' 366v28',class:'s-line','stroke-width':4},$('ticks'));
const LN=[0,1].map(i=>{const ox=120+700*i,g=$('p'+i);
  mk('rect',{x:ox,y:220,width:660,height:570,rx:18,fill:'var(--stage)',class:'s-line','stroke-width':3},g);
  fig(g,ox+70,262,18,i?'gain':'ink');
  tx(g,{x:ox+130,y:318,class:'d','font-size':52},'Born '+(i?1970:1950));
  mk('path',{d:'M'+(ox+60)+' 420V720H'+(ox+600),fill:'none',class:'s-line','stroke-width':4},g);
  tx(g,{x:ox+60,y:760,class:'m','font-size':20},'THEIR TEENS AND TWENTIES');
  return mk('polyline',{fill:'none',class:i?'s-gain':'s-loss','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('ln'+i))});
function curve(i,k){let s='';for(let j=0;j<=60*k;j++){const f=j/60,x=180+700*i+540*f,y=i?690-290*Math.pow(f,2.2)+6*Math.sin(f*19):640-10*Math.sin(f*17)+8*Math.sin(f*6);s+=x.toFixed(1)+','+y.toFixed(1)+' '}return s}
fig($('res'),190,300,26,'ink');fig($('res'),290,300,26,'gain');
const DT=[];for(let i=0;i<100;i++)DT.push(mk('circle',{cx:500+(i%20)*50,cy:270+Math.floor(i/20)*45,r:9,fill:i%7===3?'var(--gain)':'var(--muted)'},$('grid')));
fig($('me5'),980,330,36,'ink');
const LR=[];for(let i=0;i<6;i++){const x=220+i*170,g=mk('g',{},$('learn'));fig(g,x,600,26,'ink');
  mk('rect',{x:x-16,y:668,width:32,height:32,rx:6,class:'gain'},g);
  tx(g,{x:x,y:692,class:'d','font-size':24,'text-anchor':'middle',style:'fill:var(--on-gain)'},'L');LR.push(g)}