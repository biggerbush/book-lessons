const seed=(par,x,y,s,a,f)=>{const g=mk('g',{},par);mk('ellipse',{cx:x,cy:y,rx:14*s,ry:9*s,transform:'rotate('+a+' '+x+' '+y+')',fill:f||'var(--ink)'},g);return g};
const drop=(g,k,d)=>{g.setAttribute('opacity',k.toFixed(3));g.setAttribute('transform','translate(0 '+(-(1-k)*d).toFixed(1)+')')};
const PS=[];for(let r=0;r<6;r++){const n=7-r;for(let i=0;i<n;i++)PS.push(seed($('pile'),1320+(i-(n-1)/2)*36,500-r*20,1.1,((r*7+i*13)%60)-30,r===1&&i===1?'var(--gain)':'var(--ink)'))}
const BS=[];[560,610,660].forEach((y,r)=>{for(let i=0;i<4;i++)BS.push(seed($('bedseeds'),210+i*180+(r%2)*40,y,1,(i*25+r*40)%70-35))});
const CH1=['NOT CHOOSING','NOT POLISHING','JUST GATHERING'].map((s,i)=>{const g=mk('g',{},$('chips1')),on=i===2;
  mk('rect',{x:1000,y:560+i*64,width:400,height:52,rx:26,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--muted)','stroke-width':3},g);
  const tx=mk('text',{x:1200,y:593+i*64,'font-size':20,'text-anchor':'middle',class:'m',style:on?'fill:var(--on-gain)':''},g);tx.textContent=s;return g});
const S5=d=>({d:d,fill:'none',class:'s-ink','stroke-width':5,'stroke-linejoin':'round','stroke-linecap':'round'});
const IC=[[300,290,'MELODY SCRAP',[['circle',{cx:-12,cy:18,r:12,class:'ink'}],['path',S5('M0 18V-28l24 8')]]],
 [300,470,'OVERHEARD PHRASE',[['path',S5('M-30-24h60v36H-2l-14 14v-14h-14z')]]],
 [300,650,'A SHAPE',[['path',S5('M0-26L28 22H-28z')]]],
 [1300,290,'A FEELING',[['path',{d:'M0 24C-40 0-36-28-18-28C-8-28-2-20 0-14C2-20 8-28 18-28C36-28 40 0 0 24Z',class:'ink'}]]],
 [1300,470,'A QUESTION',[['text',{y:20,'font-size':60,'text-anchor':'middle',class:'d'},'?']]],
 [1300,650,'HALF-FORMED THEME',[['path',Object.assign(S5('M-26 0a26 26 0 1 0 52 0a26 26 0 1 0-52 0'),{'stroke-dasharray':'8 8'})]]]];
const ICG=IC.map(([x,y,lb,parts])=>{const g=mk('g',{},$('icons')),dx=800-x,dy=470-y,L=Math.hypot(dx,dy);
  mk('path',{d:'M'+x+' '+y+'L'+(800-dx/L*95).toFixed(0)+' '+(470-dy/L*65).toFixed(0),class:'s-line','stroke-width':4,'stroke-dasharray':'8 8'},g);
  mk('circle',{cx:x,cy:y,r:58,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const ig=mk('g',{transform:'translate('+x+' '+y+')'},g);parts.forEach(q=>{const e=mk(q[0],q[1],ig);if(q[2])e.textContent=q[2]});
  const tx=mk('text',{x:x,y:y+92,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=lb;return g});
// ranked cards: seed icon at x=236, label starts at x=290 (clear gap), strike limited to label width
const TX0=290;
const CD=[0,1,2,3].map(i=>{const cy=300+i*105,g=mk('g',{},$('cards'));
  const r=mk('rect',{x:200,y:cy-40,width:500,height:80,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const sd=seed(g,236,cy,1,-20);
  const tx=mk('text',{x:TX0,y:cy+9,'font-size':24,class:'m',style:'fill:var(--muted)'},g);tx.textContent='ROUGH IDEA';
  const rk=mk('text',{x:160,y:cy+8,'font-size':24,'text-anchor':'middle',class:'m',style:'fill:var(--loss)'},g);rk.textContent='#'+(i+1);
  const st=mk('line',{x1:TX0-4,y1:cy,x2:TX0-4,y2:cy,stroke:'var(--loss)','stroke-width':3,'stroke-linecap':'round'},g);return {g,r,rk,st,cy,tx,sd}});
let TW=170;function m3(){try{const v=CD[0].tx.getComputedTextLength();if(v>0)TW=v}catch(e){}}
m3();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(m3);
const PL=[[960,1.6,140,'var(--ink)','IMPRESSIVE'],[1160,1.2,100,'var(--ink)',''],[1360,.7,420,'var(--gain)','SMALL, PLAIN']].map(([x,s,h,c,lb])=>{const g=$('plants');
  const st=mk('line',{x1:x,y1:700,x2:x,y2:700,stroke:c,'stroke-width':6,'stroke-linecap':'round'},g);const cr=mk('circle',{cx:x,cy:700,r:0,fill:c},g);seed(g,x,716,s,-15,c);
  if(lb){const tx=mk('text',{x:x,y:760,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:'+c},g);tx.textContent=lb}return {st,cr,h,big:s<1}});
const SX=[240,450,660,870,1080],SH=[110,60,220,140,80];
const SP4=SX.map((x,i)=>{const g=$('sprouts'),c=i===2?'var(--gain)':'var(--ink)';
  const st=mk('line',{x1:x,y1:640,x2:x,y2:640,stroke:c,'stroke-width':6,'stroke-linecap':'round'},g);const lf=mk('g',{opacity:0},g);
  [-1,1].forEach(d=>mk('ellipse',{cx:x+d*18,cy:0,rx:18,ry:9,fill:c},lf));seed(g,x,656,1.2,-15);
  const q=mk('text',{x:x,y:540,'font-size':72,'text-anchor':'middle',class:'d',style:'fill:var(--muted)'},$('qs'));q.textContent='?';return {st,lf,q,x,h:SH[i]}});
// droplets fall from the spout tip (local ~121,7 after the 28deg tilt)
const DR=[0,1,2].map(j=>mk('line',{x1:116+j*9,x2:116+j*9,stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('drops')));
const JS=[];for(let i=0;i<40;i++){const c=i%8,r=Math.floor(i/8);JS.push(seed($('jarseeds'),908+c*29+(r%2)*10,695-r*34,1,((i*37)%80)-40,i===27?'var(--gain)':'var(--ink)'))}
const DY=[];for(let i=0;i<20;i++)DY.push(mk('rect',{x:190+(i%5)*68,y:358+Math.floor(i/5)*62,width:48,height:46,rx:8,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('days')));
const LIDS=[820,1080,1340].map((c,i)=>{const g=$('jars');mk('rect',{x:c-70,y:430,width:140,height:170,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  if(i!==1)seed(g,c,575,1.2,-20,'var(--muted)');return mk('rect',{x:c-80,y:406,width:160,height:24,rx:6,class:'ink'},g)});
const LW=[380,260,320,200,350,180,300,240],L7=LW.map((w,i)=>mk('rect',{x:690,y:282+i*60,width:w,height:16,rx:8,fill:'var(--ink)'},$('lines7')));
const D7=[1280,1340,1400].map(x=>mk('circle',{cx:x,cy:610,r:16,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},$('dots7')));
const grow=(ln,y0,h,k)=>ln.setAttribute('y2',(y0-h*k).toFixed(1));