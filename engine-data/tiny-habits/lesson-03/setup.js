const pers=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-1.6*r} ${y+3.6*r}v${-0.6*r}a${1.6*r} ${1.6*r} 0 0 1 ${3.2*r} 0v${0.6*r}z`,class:cls},g)};
const tx=(g,x,y,s,cls,str,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:cls},ex||{}),g);e.textContent=str;return e};
const CLD='M-150 60A60 60 0 0 1-130-40A80 80 0 0 1 20-90A70 70 0 0 1 140-30A55 55 0 0 1 150 60Z';
const cloud=(g,x,y,s)=>mk('path',{d:CLD,transform:`translate(${x} ${y}) scale(${s})`,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6/s,'stroke-linejoin':'round'},g);
const C0=cloud($('cl0'),1290,360,1.1);cloud($('cl1'),420,430,1.2);
pers($('tp'),1300,580,34,'ink');pers($('wp'),1010,350,22,'ink');
const starPts=(cx,cy,R,r)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;s+=(cx+q*Math.cos(a)).toFixed(1)+','+(cy+q*Math.sin(a)).toFixed(1)+' '}return s};
const STAR=mk('polygon',{points:starPts(360,500,170,72),class:'gain',stroke:'var(--gain)','stroke-width':8,'stroke-linejoin':'round'},$('star'));
mk('polygon',{points:starPts(436,482,30,13),class:'gain'},$('wand'));
for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3,x=436+74*Math.cos(a),y=482+74*Math.sin(a);mk('path',{d:`M${x-10} ${y}h20M${x} ${y-10}v20`,stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('spk'))}
const RW=[['It makes an impact.','REALLY HELPS YOU REACH YOUR ASPIRATION'],['You want to do it.','SOMETHING YOU GENUINELY WANT TO DO'],['You can do it.','YOU CAN ACTUALLY GET YOURSELF TO DO IT']];
const rows=RW.map((r,i)=>{const y=300+150*i,g=mk('g',{},$('rows'));const b=mk('rect',{x:660,y:y,width:72,height:72,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const c=mk('path',{d:`M676 ${y+38}l16 16 28-32`,fill:'none',stroke:'var(--gain)','stroke-width':9,'stroke-linecap':'round','stroke-linejoin':'round','stroke-dasharray':80},g);
  tx(g,770,y+50,46,'d',r[0]);tx(g,772,y+88,20,'m',r[1]);return [g,b,c]});
const SW=[[580,230],[890,240],[1200,250],[620,375],[930,390],[1210,380],[560,530],[870,520],[1180,540],[720,680],[1030,690]];
const LB={0:'MEDITATE',4:'STRETCH',6:'JOURNAL',9:'PHONE OUT OF BEDROOM'},LI=[0,4,6,9];
const cards=SW.map((q,i)=>{const g=mk('g',{},$('swarm'));mk('rect',{x:0,y:0,width:260,height:70,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const l=mk('path',{d:'M30 30h170M30 46h110',stroke:'var(--line)','stroke-width':5,'stroke-linecap':'round'},g);
  const w=LB[i]?tx(g,130,42,18,'m',LB[i],{'text-anchor':'middle'}):null;return {g,w,l}});
// chart grid: box y 210-740, midline 475, x-axis 775
const MID=475;
const CD=[['STRETCH',440,280,1010],['MEDITATE',600,410,500],['PHONE OUT',760,430,1040],['',920,650,560],['LUNCH WALK',1080,350,1220],['JOURNAL',1240,650,1250]];
const grid=par=>{const fg=mk('g',{},par);
  mk('rect',{x:340,y:210,width:1000,height:530,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},fg);
  mk('path',{d:'M840 226V724M356 475H1324',stroke:'var(--line)','stroke-width':3,'stroke-dasharray':'10 10'},fg);
  const ar={fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'};
  const va=mk('g',{},par);mk('path',Object.assign({d:'M300 730V226m-18 22 18-22 18 22'},ar),va);const hi=tx(va,120,236,20,'m','HIGH IMPACT');tx(va,120,738,20,'m','LOW IMPACT');
  const ha=mk('g',{},par);mk('path',Object.assign({d:'M350 775H1330m-22-18 22 18-22 18'},ar),ha);tx(ha,120,783,20,'m','HARD TO DO');const ez=tx(ha,1480,783,20,'m','EASY TO DO',{'text-anchor':'end'});
  const cs=CD.map(c=>{const g=mk('g',{},par);const r=mk('rect',{x:-75,y:-28,width:150,height:56,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
    const w=c[0]?tx(g,0,7,18,'m',c[0],{'text-anchor':'middle'}):mk('path',{d:'M-45 0h90',stroke:'var(--line)','stroke-width':5,'stroke-linecap':'round'},g);return {g,r,w}});
  return {fg,va,ha,hi,ez,cs}};
const G4=grid($('gr4')),G5=grid($('gr5')),G6=grid($('gr6'));
const CZ=mk('rect',{x:840,y:210,width:500,height:265,rx:16,fill:'var(--gain)','fill-opacity':.15,stroke:'var(--gain)','stroke-width':5},G6.fg);
const at=(c,x,y,o)=>{c.g.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)})`);c.g.setAttribute('opacity',o)};
// 'can wait' stack in the bottom-left: MEDITATE, blank, JOURNAL stacked with every label still readable
const PILE=[[590,540],[590,600],[590,660]];
const SP2=[[1272,250],[1330,262],[1410,248],[1290,300],[1380,310],[1275,350],[1340,370],[1400,360],[1300,400],[1420,405]];
const scraps=SP2.map(q=>mk('rect',{x:q[0],y:q[1],width:36,height:18,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('scr')));