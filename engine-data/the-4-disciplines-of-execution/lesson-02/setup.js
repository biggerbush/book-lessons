const fig=(g,x,y,r,c)=>{const a=c?{class:c}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`},a),g)};
const lnk=(g,cx,cy,w,h,sw)=>mk('rect',{x:cx-w/2,y:cy-h/2,width:w,height:h,rx:h/2,fill:'none',stroke:'var(--ink)','stroke-width':sw},g);
const tx=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
const NM=['FOCUS','LEVERAGE','ENGAGEMENT','ACCOUNTABILITY'];
const NZ=[0,1,2,3,4,5].map(i=>{const a=-2.6+i*.95,x=1320+165*Math.cos(a),y=330+165*Math.sin(a),g=mk('g',{},$('noise'));mk('circle',{cx:x,cy:y,r:22,class:'loss'},g);tx(g,'!',{x:x,y:y+10,'font-size':28,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'});return g});
const L1=NM.map((s,i)=>{const g=mk('g',{},$('chain1')),x=300+i*290;lnk(g,x,400,320,130,14);tx(g,i+1,{x:x,y:420,'font-size':56,'text-anchor':'middle',class:'d'});tx(g,s,{x:x,y:520,'font-size':22,'text-anchor':'middle',class:'m'});return g});
const A1=[0,1,2].map(i=>mk('path',{d:`M${300+i*290} 325Q${445+i*290} 245 ${590+i*290} 325`,fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 8','stroke-linecap':'round'},$('arcs')));
NM.forEach((s,i)=>{mk('rect',{x:150,y:655+i*42,width:24,height:24,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':3},$('mrows'));tx($('mrows'),s,{x:190,y:675+i*42,'font-size':20,class:'m'})});
const PL=[[380,360],[600,640],[330,600],[560,330],[400,700],[650,520],[300,460]].map((q,i)=>{const o=mk('g',{},$('planes')),n=mk('g',{transform:`translate(${q[0]} ${q[1]}) rotate(${i*53})`},o);mk('path',{d:'M0-18L13 14L0 7L-13 14z',class:'ink'},n);return [o,n]});
const BK=[0,1,2].map(i=>mk('rect',{x:215+i*60,y:598,width:50,height:40,rx:6,class:'gain'},$('blocks')));
const TF=[0,1,2,3,4,5].map(i=>{const g=mk('g',{},$('team')),h=mk('g',{fill:'var(--ink)'},g);fig(h,450+i*140,650,24);return [g,h]});
let AL=720;try{const v=$('act').getTotalLength();if(v>0)AL=v}catch(e){}
$('act').setAttribute('stroke-dasharray',AL);
'MTWTFSS'.split('').forEach((c,i)=>{tx($('calg'),c,{x:175+i*70,y:280,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--stage)'});for(let r=0;r<4;r++)mk('rect',{x:145+i*70,y:320+r*74,width:60,height:60,rx:8,fill:'none',stroke:'var(--line)','stroke-width':3},$('calg'))});
const DT=[0,1,2,3].map(r=>mk('circle',{cx:175,cy:350+r*74,r:20,class:'gain'},$('dots')));
const MX=[960,1080,1200,1320];MX.forEach(x=>fig($('mppl'),x,480,24,'ink'));
const BB=MX.map(x=>{const g=mk('g',{},$('bubs'));mk('rect',{x:x-34,y:396,width:68,height:48,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);const c=mk('path',{d:`M${x-14} 420l9 9 18-18`,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);const n=tx(g,'+1',{x:x,y:431,'font-size':28,'text-anchor':'middle',class:'d',style:'fill:var(--gain)'});return [g,c,n]});
const L6=NM.map((s,i)=>{const g=mk('g',{},$('chain6'));return [g,lnk(g,470+i*220,295,240,90,12)]});
const PB=['Spread thin','Just a wish','Lost interest','Whirlwind wins'];
const PG=['NO FOCUS','NO LEAD MEASURES','NO SCOREBOARD','NO RHYTHM'].map((s,i)=>{const x=120+i*345,g=mk('g',{},$('panels'));mk('rect',{x:x,y:420,width:320,height:340,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);tx(g,s,{x:x+160,y:460,'font-size':18,'text-anchor':'middle',class:'m'});tx(g,PB[i],{x:x+160,y:735,'font-size':32,'text-anchor':'middle',class:'d5'});return g});
for(let k=0;k<8;k++){const a=k*Math.PI/4+.3,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${280+30*c} ${585+30*s}L${280+92*c} ${585+92*s}`,stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},PG[0]);mk('circle',{cx:280+102*c,cy:585+102*s,r:8,class:'loss'},PG[0])}
mk('circle',{cx:280,cy:585,r:16,class:'ink'},PG[0]);
const TG=mk('g',{},PG[1]);[80,52,24].forEach(r=>mk('circle',{cx:625,cy:585,r:r,fill:'none',stroke:'var(--ink)','stroke-width':5},TG));
const FOG=mk('g',{},PG[1]);[545,590,635].forEach(y=>mk('path',{d:`M505 ${y}q20-14 40 0t40 0t40 0t40 0t40 0t40 0`,fill:'none',stroke:'var(--muted)','stroke-width':7,'stroke-linecap':'round',opacity:.7},FOG));
mk('rect',{x:880,y:510,width:180,height:130,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':5},PG[2]);tx(PG[2],'?',{x:970,y:605,'font-size':80,'text-anchor':'middle',class:'d',style:'fill:var(--muted)'});
// No rhythm: a weekly calendar losing its days into the whirlwind
const CALW=mk('g',{},PG[3]);
mk('rect',{x:1175,y:525,width:130,height:120,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},CALW);
mk('rect',{x:1175,y:525,width:130,height:28,rx:10,fill:'var(--ink)'},CALW);
mk('path',{d:'M1205 512v24M1275 512v24',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},CALW);
[[1185,568,1],[1215,568,0],[1245,568,1],[1275,568,0],[1185,605,0],[1215,605,1],[1245,605,0]].forEach(q=>{
  if(q[2])mk('rect',{x:q[0],y:q[1],width:22,height:22,rx:4,fill:'var(--muted)','fill-opacity':.35},CALW);
  else mk('rect',{x:q[0],y:q[1],width:22,height:22,rx:4,fill:'none',stroke:'var(--line)','stroke-width':3,'stroke-dasharray':'4 4'},CALW)});
let sd='';for(let a=0;a<=12.6;a+=.3){const r=4+a*4.4;sd+=(a?'L':'M')+(1400+r*Math.cos(a)).toFixed(1)+' '+(590+r*Math.sin(a)).toFixed(1)}
const WH=mk('path',{d:sd,fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round'},PG[3]);
const FCG=mk('g',{},PG[3]);
const FC=[0,1,2,3].map(()=>mk('rect',{x:-11,y:-11,width:22,height:22,rx:4,fill:'var(--ink)'},FCG));
const CK=NM.map((s,i)=>{mk('rect',{x:150,y:305+i*60,width:30,height:30,rx:5,fill:'none',stroke:'var(--ink)','stroke-width':4},$('prows'));tx($('prows'),s,{x:200,y:328+i*60,'font-size':18,class:'m'});return mk('path',{d:`M155 ${320+i*60}l8 8 14-16`,fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('prows'))});
const UG=[0,1,2].map(i=>{const o=mk('g',{},$('urg')),n=mk('g',{},o),y=250+i*110;mk('path',{d:`M900 ${y+32}L770 440`,stroke:'var(--loss)','stroke-width':4,'stroke-dasharray':'8 6'},n);mk('rect',{x:900,y:y,width:150,height:64,rx:10,class:'loss'},n);tx(n,'URGENT',{x:975,y:y+40,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--stage)'});return [o,n]});
const WK=[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>mk('rect',{x:120+i*100,y:630,width:80,height:56,rx:8,fill:'var(--line)'},$('weeks')));