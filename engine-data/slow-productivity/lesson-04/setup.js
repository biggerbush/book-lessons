const who=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const F=[];for(let i=0;i<6;i++)F.push(mk('rect',{x:1210,y:200,width:200,height:14,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('flood')));
const CX=[220,380,1250,1400];CX.forEach(x=>who($('cols'),x,470,24,'ink'));who($('worker'),720,500,30,'ink');
const SH=[];for(let i=0;i<14;i++)SH.push(mk('rect',{width:100,height:14,rx:3,'stroke-width':3},$('pile')));
[330,630,930].forEach(x=>{mk('path',{d:'M760 320L'+(x+130)+' 410',class:'s-line','stroke-width':4},$('projs'));
  mk('rect',{x:x,y:410,width:260,height:80,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('projs'));
  mk('text',{x:x+130,y:460,'font-size':30,'text-anchor':'middle',class:'d5'},$('projs')).textContent='Project';
  [0,140].forEach(o=>{const cx=x+o,g=$('tasks');mk('path',{d:'M'+(x+130)+' 490L'+(cx+60)+' 590',class:'s-line','stroke-width':3},g);
    mk('rect',{x:cx,y:590,width:120,height:50,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
    mk('rect',{x:cx+14,y:605,width:20,height:20,rx:4,fill:'none',stroke:'var(--gain)','stroke-width':4},g);
    mk('path',{d:'M'+(cx+46)+' 615h58',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},g)})});
// limit rows: items slightly narrower, limit bar shifted left so it clears both neighbours
const R3=['Missions','Projects','Today'].map((s,r)=>{const cy=300+r*180,g=mk('g',{},$('rows3')),k=[2,3,4][r],wx=500+k*120-64;
  mk('text',{x:120,y:cy+14,'font-size':40,class:'d5'},g).textContent=s;const it=[];
  for(let i=0;i<8;i++){const cx=500+i*120,h=r==2?44:70;it.push(r?mk('rect',{x:cx-40,y:cy-h/2,width:80,height:h,rx:12,'stroke-width':4},g):mk('circle',{cx:cx,cy:cy,r:32,'stroke-width':4},g))}
  const w=mk('g',{},g);mk('path',{d:'M'+wx+' '+(cy-56)+'V'+(cy+56),class:'s-ink','stroke-width':8,'stroke-linecap':'round'},w);
  mk('text',{x:wx,y:cy-70,'font-size':20,'text-anchor':'middle',class:'m'},w).textContent='LIMIT';return {g,it,k,w}});
const DT=[];for(let i=0;i<14;i++)DT.push(mk('circle',{r:12,class:'loss'},$('chores')));
const card=(g,f,s)=>{const c=mk('g',{},g);mk('rect',{width:260,height:70,rx:12,fill:f,stroke:s,'stroke-width':4},c);mk('path',{d:'M24 28h150M24 46h100',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},c);return c};
const QC=[];for(let i=0;i<5;i++)QC.push(card($('queue'),'var(--stage)','var(--ink)'));
const AC=[300,440,580].map(y=>{const c=card($('active'),'var(--gain)','var(--gain)');c.setAttribute('transform','translate(820 '+y+')');return c});
const ASK=card($('askG'),'var(--loss)','var(--loss)');
const DX=[820,1060,1300];DX.forEach(x=>{who($('devs'),x,300,26,'ink');mk('rect',{x:x-100,y:440,width:200,height:210,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('devs'));
  [470,560].forEach(y=>mk('rect',{x:x-85,y:y,width:170,height:70,rx:10,fill:'none',stroke:'var(--line)','stroke-width':3,'stroke-dasharray':'8 6'},$('devs')))});
mk('text',{x:720,y:694,'font-size':20,class:'m'},$('devs')).textContent='EACH WORKS ON A FEW ITEMS';
const TK=[];for(let k=0;k<12;k++)TK.push(mk('rect',{width:90,height:40,rx:8,'stroke-width':4},$('tickets')));
const RW=[];for(let i=0;i<8;i++)RW.push(mk('rect',{x:150,y:316+i*48,width:260+(i*67)%120,height:20,rx:10,fill:'var(--line)'},$('rowsW')));
const RA=[];for(let i=0;i<3;i++)RA.push(mk('rect',{x:690,y:316+i*68,width:360,height:40,rx:10,class:'gain'},$('rowsA')));
who($('asker'),1380,300,26,'ink');