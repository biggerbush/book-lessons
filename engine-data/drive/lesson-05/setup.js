const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};
fig($('res'),260,400,30,'ink');
fig($('dwf'),800,330,40,'ink');
const GD=[[120,'TOO EASY','Bored',620,'var(--loss)','var(--muted)'],[590,'FAR TOO HARD','Anxious',320,'var(--loss)','var(--loss)'],[1060,'JUST RIGHT','Goldilocks',470,'var(--gain)','var(--gain)']];
const GC=GD.map((d,i)=>{const x=d[0],g=mk('g',{},$('gold'));
  const r=mk('rect',{x:x,y:230,width:420,height:530,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  tx(g,{x:x+30,y:280,'font-size':22,class:'m',style:i==2?'fill:var(--gain)':'fill:var(--muted)'},d[1]);
  tx(g,{x:x+30,y:730,'font-size':40,class:'d5',style:'fill:'+d[5]},d[2]);
  mk('path',{d:'M'+(x+30)+' 660h360',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},g);
  mk('path',{d:'M'+(x+30)+' 510h360',stroke:'var(--muted)','stroke-width':2,'stroke-dasharray':'6 8'},g);
  mk('path',{d:'M'+(x+230)+' 660V'+d[3]+'M'+(x+350)+' 660V'+d[3],stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:'M'+(x+215)+' '+d[3]+'h150',stroke:d[4],'stroke-width':12,'stroke-linecap':'round'},g);
  const pg=mk('g',{},g);fig(pg,x+120,551,26,i==2?'gain':'ink');return [g,r,pg]});
const WK=[];for(let i=0;i<14;i++)WK.push(mk('rect',{x:120+i*46,y:250,width:46,height:200,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('keys')));
[0,1,3,4,5,7,8,10,11,12].forEach(i=>mk('rect',{x:120+46*(i+1)-14,y:250,width:28,height:120,fill:'var(--ink)'},$('keys')));
const PK=[480,900,1300],rf=x=>740+5*Math.sin(x*.05)+4*Math.sin(x*.017)-110*PK.reduce((s,c)=>s+Math.exp(-(((x-c)/40)**2)),0);
let rd='',RL=0,py=0;for(let x=120;x<=1480;x+=10){const y=rf(x);rd+=(x==120?'M':'L')+x+' '+y.toFixed(1);if(x>120)RL+=Math.hypot(10,y-py);py=y}
$('rpath').setAttribute('d',rd);$('rpath').setAttribute('stroke-dasharray',RL.toFixed(1));
PK.forEach(c=>{mk('circle',{cx:c,cy:rf(c)-34,r:14,class:'gain'},$('peaks'));tx($('peaks'),{x:c,y:rf(c)-64,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--gain)'},'FLOW')});
const G5=[1,.55,1,.7,1],CD=G5.map((g,i)=>{const y=310+90*i;mk('path',{d:'M720 '+(y+66)+'H1400',stroke:'var(--line)','stroke-width':3},$('lanes'));
  const gg=mk('g',{},$('cads')),b=fig(gg,760,y,14,'ink');return [gg,gg.firstChild,b]});
const RG=[500,450,400,350,300].map(y=>mk('path',{d:'M740 '+y+'H860',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('rungs')));
let CS;for(let r=0;r<3;r++)for(let c=0;c<4;c++){const e=mk('circle',{cx:260+c*47,cy:375+r*42,r:10,fill:'var(--muted)'},$('calg'));if(r==1&&c==2)CS=e}