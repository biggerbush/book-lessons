const dr=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const ADS=['BE HAPPIER','BE RICHER','BE FITTER','BE MORE CONFIDENT'],LACK=['happy','rich','fit','confident'],cards=[],rows=[],xs=[];
ADS.forEach((s,i)=>{const y=300+i*110,cy=y+45,g=mk('g',{},$('ads'));
  mk('rect',{x:175,y:y,width:290,height:90,rx:14,class:'gain'},g);
  const a=mk('text',{x:320,y:cy+7,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);a.textContent=s;cards.push(g);
  const r=mk('g',{},$('rows'));
  mk('path',{d:'M475 '+cy+'H650',stroke:'var(--muted)','stroke-width':3,'stroke-dasharray':'6 8'},r);
  mk('rect',{x:660,y:cy-28,width:56,height:56,rx:8,fill:'none',stroke:'var(--loss)','stroke-width':5},r);
  const b=mk('text',{x:750,y:cy+13,'font-size':38,class:'d5'},r);b.textContent='You’re not '+LACK[i]+' enough.';rows.push(r);
  xs.push(mk('path',{d:'M674 '+(cy-14)+'l28 28m0-28l-28 28',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round',opacity:0},r))});
const lets=[];for(let i=0;i<12;i++){const x=440+(i%4)*115,y=250+Math.floor(i/4)*100,g=mk('g',{},$('lets'));
  mk('rect',{x:x,y:y,width:100,height:72,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('path',{d:'M'+(x+4)+' '+(y+4)+'l46 18l46-18',fill:'none',stroke:'var(--line)','stroke-width':3,'stroke-linejoin':'round'},g);
  const n=mk('text',{x:x+50,y:y+62,'font-size':24,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},g);n.textContent='NO';lets.push(g)}
const books=[];for(let i=0;i<8;i++){const w=260-(i*37)%60;books.push(mk('rect',{x:310-w/2+(i%2?6:-6),y:716-i*44,width:w,height:40,rx:6,fill:i%3===1?'var(--gain)':'var(--ink)'},$('books')))}
const orb=[0,1,2].map(()=>mk('circle',{r:12,class:'loss'},$('orb')));
const rain=[];for(let i=0;i<6;i++)rain.push(mk('path',{stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round'},$('rain')));