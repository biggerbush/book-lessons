const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const ckP=(x,y)=>'M'+x+' '+y+'l10 10 20-24';
const TC=[1290,1330,1370,1310,1350].map(x=>mk('circle',{cx:x,cy:230,r:20,class:'gain',stroke:'var(--ink)','stroke-width':3},$('tcoins')));
fig($('arkad'),320,380,40,'gain');
const ST=[760,900,1040,1180,1320].map(x=>{const g=mk('g',{},$('studs'));fig(g,x,470,26,'ink');return g});
const BR=[0,1,2,3].map(i=>{const x=180+i*125;return [mk('rect',{x:x,y:760,width:46,height:0,class:'gain'},$('bars')),mk('rect',{x:x+52,y:760,width:46,height:0,class:'loss'},$('bars'))]});
const CG=mk('g',{},$('cloud'));
[[-140,20,90],[-40,-60,110],[80,-30,100],[160,40,80],[0,60,110],[-100,80,70],[110,90,80]].forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],class:'loss','fill-opacity':.22},CG));
[['MORE',-70,-10],['NEWER',90,20],['BIGGER',0,90]].forEach(w=>{const tx=mk('text',{x:w[1],y:w[2],'font-size':30,'text-anchor':'middle',class:'d5'},CG);tx.textContent=w[0]});
// wish list: box, then a gap, then the item. Checks only on needs, indigo X + strike on desires.
const LI=['Bread','Rent','Clothes','Fine robes','New chariot','Feasts','Lamp oil','Jewels'],ND=[1,1,1,0,0,0,1,0];
const LR=LI.map((s,i)=>{const y=320+i*62,g=mk('g',{},$('list'));mk('rect',{x:172,y:y-26,width:28,height:28,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':3},g);
  const tx=mk('text',{x:236,y:y,'font-size':32,class:'d5'},g);tx.textContent=s;
  const ck=ND[i]?mk('path',{d:'M176 '+(y-12)+'l8 8 14-16',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round',opacity:0},$('list'))
              :mk('path',{d:'M179 '+(y-19)+'l14 14m0-14l-14 14',fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round',opacity:0},$('list'));
  const sk=mk('line',{x1:228,y1:y-11,x2:228,y2:y-11,stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round',opacity:0},$('list'));
  return [g,ck,sk,y,236+s.length*17+8]});
mk('path',{d:'M0 0l-10-24v-90h20v90z',class:'loss'},$('pen'));
const SG=[];for(let i=0;i<10;i++)SG.push(mk('rect',{x:820+i*64,y:390,width:58,height:80,rx:8,fill:i<9?'var(--line)':'var(--gain)',stroke:'var(--ink)','stroke-width':3},$('segs')));
const TR=[410,470,530,590].map(y=>{const g=mk('g',{},$('trows'));mk('path',{d:ckP(180,y-10),fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);mk('path',{d:'M230 '+y+'h210',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);return g});
const WN=[];for(let i=0;i<6;i++)WN.push(mk('circle',{r:16,class:'loss'},$('wants')));
$('oct').setAttribute('points',[...Array(8)].map((_,k)=>{const a=Math.PI/8+k*Math.PI/4;return (1320+120*Math.cos(a)).toFixed(1)+','+(400+120*Math.sin(a)).toFixed(1)}).join(' '));
$('inc').setAttribute('points','160,640 360,640 360,540 560,540 560,440 760,440 760,340 1100,340');
const IN=x=>x<360?640:x<560?540:x<760?440:340;
const PT=[1,1,0,0,1,0],PR=PT.map((n,i)=>{const c=350+i*76,g=mk('g',{},$('prow'));
  mk('rect',{x:580,y:c-7,width:130,height:14,rx:7,fill:'var(--ink)'},g);
  mk('rect',{x:730,y:c-18,width:110,height:36,rx:18,fill:n?'var(--gain)':'var(--stage)',stroke:n?'var(--gain)':'var(--loss)','stroke-width':3},g);
  const tx=mk('text',{x:785,y:c+6,'font-size':18,'text-anchor':'middle',class:'m',style:'fill:'+(n?'var(--on-gain)':'var(--loss)')},g);tx.textContent=n?'NEED':'DESIRE';return g});
// closing list: one mark centred vertically on each of the 10 rows (same 50px step)
const FM=[1,0,1,1,0,0,1,0,1,0].map((n,i)=>{const y=280+i*50,g=mk('g',{},$('prows'));
  mk('path',{d:'M1250 '+y+'h120',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},g);
  mk('path',{d:n?'M1404 '+(y+2)+'l8 8 16-20':'M1406 '+(y-10)+'l20 20m0-20l-20 20',fill:'none',stroke:n?'var(--gain)':'var(--loss)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});