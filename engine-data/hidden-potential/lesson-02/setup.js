const P=(g,x,y,r,c)=>{const e=mk('g',{fill:'var(--'+c+')'},g);mk('circle',{cx:x,cy:y,r:r},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},e);return e};
const T=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a||{}),g);e.textContent=s;return e};
const drw=(e,k)=>(typeof e==='string'?$(e):e).setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const KD=[1230,1290].map(x=>P($('kids'),x,704,18,'ink'));
P($('star'),400,590,30,'gain');
[640,760].forEach(x=>P($('dark'),x,610,26,'muted').setAttribute('opacity',.45));
const SW={fill:'none','stroke-width':9,'stroke-linecap':'round','stroke-linejoin':'round'};
const ICON=[g=>mk('path',Object.assign({d:'M-40 0h70m-26-26 26 26-26 26',stroke:'var(--gain)'},SW),g),
g=>{[40,24].forEach(r=>mk('circle',{r:r,fill:'none',stroke:'var(--ink)','stroke-width':6},g));mk('circle',{r:9,fill:'var(--gain)'},g)},
g=>{mk('path',{d:'M-45 40h90',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},g);mk('path',Object.assign({d:'M0 26v-70m-24 24 24-24 24 24',stroke:'var(--gain)'},SW),g)},
g=>{P(g,-22,-28,12,'ink');P(g,22,-28,12,'gain')}];
const CD=[['Proactivity','TAKING INITIATIVE','INSTEAD OF WAITING'],['Discipline','STAYING ON TASK','DESPITE DISTRACTIONS'],['Determination','PUSHING THROUGH','OBSTACLES'],['Prosociality','WORKING WELL WITH OTHERS','AND LIFTING THEM UP']];
const cards=CD.map((d,i)=>{const x=500+(i%2)*500,y=240+Math.floor(i/2)*280,g=mk('g',{},$('cards'));
mk('rect',{x:x,y:y,width:480,height:250,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
ICON[i](mk('g',{transform:'translate('+(x+80)+' '+(y+95)+')'},g));
T(g,x+150,y+108,d[0],{class:'d5','font-size':40});T(g,x+40,y+180,d[1],{class:'m','font-size':20});T(g,x+40,y+212,d[2],{class:'m','font-size':20});return g});
let gd='';for(let i=0;i<32;i++){const a=i*Math.PI/16,r=i%4<2?46:32;gd+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}
mk('path',{d:gd+'z',fill:'var(--gain)'},$('gear'));mk('circle',{r:12,fill:'var(--stage)'},$('gear'));
const BV=$('bv');let BL=600;try{BL=BV.getTotalLength()}catch(e){}
const RM=[],RK=[],RT=[];for(let r=0;r<3;r++){const x=120+r*280;
RM.push(mk('rect',{x:x,y:230,width:250,height:290,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rooms')));
RT.push(P($('rooms'),x+125,262,12,'ink'));
for(let k=0;k<9;k++)RK.push(mk('circle',{cx:x+65+(k%3)*60,cy:370+Math.floor(k/3)*50,r:14,fill:'var(--ink)'},$('rooms')))}
P($('child'),240,524,18,'ink');P($('adult'),760,466,32,'gain');
const RTS=['rt0','rt1','rt2','rt3','rt4','rt5'];
const BH=[100,180,260],BR=BH.map((h,i)=>mk('rect',{x:1220+i*80,y:600,width:60,height:0,rx:4,fill:'var(--gain)'},$('bars')));
// scene 6: figure drawn over the arm so the arm joins at the shoulder
P($('kid'),800,380,40,'gain');
const CP=['INITIATIVE','FOCUS','PERSISTENCE','COOPERATION'].map((s,i)=>{const L=i<2,x=L?180:1100,y=270+(i%2)*140,g=mk('g',{},$('chips'));
mk('path',{d:'M'+(L?500:1100)+' '+(y+35)+'L'+(L?730:860)+' '+(L?450:500),stroke:'var(--line)','stroke-width':4},g);
mk('rect',{x:x,y:y,width:320,height:70,rx:35,fill:'var(--gain)'},g);
T(g,x+160,y+45,s,{'font-size':24,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'});return g});
// rising payoff curve and growing markers
const PY=s=>[240+1220*s,750-130*Math.pow(s,1.6)];
let pd='';for(let i=0;i<=40;i++){const q=PY(i/40);pd+=(i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)}
$('payln').setAttribute('d',pd);
const DT=[];for(let i=1;i<=10;i++){const q=PY(i/10);DT.push([mk('circle',{cx:q[0].toFixed(1),cy:q[1].toFixed(1),r:0,fill:'var(--gain)'},$('dots')),6+i*1.3])}
P($('mp'),300,380,30,'ink');
const CK=['Takes initiative?','Stays focused?','Keeps going when tough?'].map((s,i)=>{const y=340+i*110;
mk('rect',{x:600,y:y,width:56,height:56,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':5},$('items'));
T($('items'),690,y+40,s,{class:'d5','font-size':36});
return mk('path',Object.assign({d:'M612 '+(y+28)+'l14 16 26-30',stroke:'var(--gain)',pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},SW),$('items'))});
const DY=[];for(let i=0;i<7;i++)DY.push(mk('circle',{cx:1060+i*64,cy:690,r:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('days')));