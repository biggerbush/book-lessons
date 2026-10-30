const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g);return g};
const bIn=fig(mk('g',{},$('boy0')),1400,370,24,'ink');
[1150,1225].forEach(x=>fig($('crowd1'),x,430,18,'ink'));
fig($('away'),0,430,18,'ink');
fig($('climb'),818,0,16,'gain');
const roam=[1290,1360,1430].map(x=>fig(mk('g',{},$('roam')),x,640,16,'gain'));
const bars=[];for(let i=0;i<9;i++)bars.push(mk('path',{d:`M${200+i*45} 330V700`,class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('bars')));
fig($('boy3'),1360,630,18,'ink');
const tiles=['QUESTS','TEAMS','REWARDS','PROGRESS'].map((s,i)=>{const x=150+(i%2)*355,y=250+Math.floor(i/2)*140,g=mk('g',{},$('tiles'));
  mk('rect',{x:x,y:y,width:325,height:120,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('circle',{cx:x+60,cy:y+60,r:26,class:'gain'},g);
  mk('text',{x:x+110,y:y+68,'font-size':24,class:'m'},g).textContent=s;return g});
// real-life blocks stacked in the right pan (muted grey-blue)
const items=['SLEEP','SCHOOL','FRIENDS','OUTDOORS'].map((s,i)=>{const g=mk('g',{},$('items')),y=240-40*(i+1);
  mk('rect',{x:-92,y:y+2,width:184,height:36,rx:6,fill:'var(--loss)','fill-opacity':.16,stroke:'var(--muted)','stroke-width':3},g);
  mk('text',{x:0,y:y+27,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent=s;return g});
const mv6=fig(mk('g',{},$('mv6')),340,420,30,'ink');
fig($('in6'),760,580,20,'ink');
const IC=[g=>{mk('circle',{cx:0,cy:0,r:46,fill:'none',class:'s-ink','stroke-width':6},g);mk('path',{d:'M-46 0h92M0-46c-24 24-24 68 0 92M0-46c24 24 24 68 0 92',fill:'none',class:'s-ink','stroke-width':4},g)},
 g=>{mk('rect',{x:-50,y:-26,width:100,height:66,rx:10,class:'ink'},g);mk('path',{d:'M-20-26v-14h40v14',fill:'none',class:'s-ink','stroke-width':6},g)},
 g=>{mk('path',{d:'M-30 46L24-24',class:'s-ink','stroke-width':12,'stroke-linecap':'round'},g);mk('rect',{x:-6,y:-48,width:70,height:34,rx:6,class:'gain',transform:'rotate(45 29 -31)'},g)},
 g=>{mk('path',{d:'M-56 44L0-46L56 44z',class:'s-ink',fill:'none','stroke-width':6,'stroke-linejoin':'round'},g);mk('path',{d:'M0 44L-16 14h32z',class:'gain'},g)}];
const cards=[['Sports',''],['Jobs',''],['Building','THINGS'],['Trips','WITH FRIENDS']].map((c,i)=>{const x=620+(i%2)*440,y=240+Math.floor(i/2)*240,g=mk('g',{},$('cards'));
  mk('rect',{x:x,y:y,width:420,height:220,rx:18,class:'s-line',fill:'var(--stage)','stroke-width':3},g);
  IC[i](mk('g',{transform:`translate(${x+90} ${y+110})`},g));
  mk('text',{x:x+170,y:y+120,'font-size':40,class:'d5'},g).textContent=c[0];
  if(c[1])mk('text',{x:x+170,y:y+160,'font-size':20,class:'m'},g).textContent=c[1];return g});
fig($('riser'),1420,0,22,'gain');