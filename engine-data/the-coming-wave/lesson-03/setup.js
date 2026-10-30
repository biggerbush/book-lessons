const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a||{}),g);e.textContent=s;return e};
const man=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const LEN=e=>{let v=0;try{v=e.getTotalLength()}catch(x){}return v>0?v:1200};
const draw=(e,L,k)=>{e.setAttribute('stroke-dasharray',L.toFixed(1));e.setAttribute('stroke-dashoffset',(L*(1-k)).toFixed(1))};
const WY=(x,t)=>700+14*Math.sin(x/70-t*2);
const TD=[300,500,700,900].map(x=>mk('circle',{cx:x,cy:674,r:18,class:'gain'},$('tdots')));
const LIM=['BIG','SLOW TO CHANGE','PEOPLE AT THE CONTROLS'];
const TG=LIM.map((s,i)=>{const g=mk('g',{},$('tags'));mk('rect',{x:720,y:250+i*90,width:760,height:64,rx:32,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);tx(g,760,292+i*90,s,{class:'m','font-size':24});return g});
const KS=LIM.map((s,i)=>mk('line',{x1:740,y1:282+i*90,x2:740,y2:282+i*90,stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},$('tags')));
const KW=LIM.map(s=>40+s.length*18);
const TR=['ASYMMETRY','HYPER-EVOLUTION','OMNI-USE','AUTONOMY'];
const BX=TR.map((s,i)=>{const g=mk('g',{},$('boxes')),x=120+i*346;mk('rect',{x:x,y:600,width:320,height:140,rx:16,class:'gain'},g);tx(g,x+160,662,''+(i+1),{class:'d','font-size':48,'text-anchor':'middle',style:'fill:var(--on-gain)'});tx(g,x+160,712,s,{class:'m','font-size':22,'text-anchor':'middle',style:'fill:var(--on-gain)'});return g});
for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=880+c*62,y=592+r*32;mk('rect',{x:x,y:y,width:50,height:22,rx:4,class:'loss'},$('army'));mk('path',{d:'M'+(x+25)+' '+(y+6)+'h-30',stroke:'var(--loss)','stroke-width':4},$('army'))}
let h1='',h2='';for(let x=560;x<=800;x+=6){const s=36*Math.sin((x-560)/40);h1+=(x===560?'M':'L')+x+' '+(320+s).toFixed(1);h2+=(x===560?'M':'L')+x+' '+(320-s).toFixed(1)}
for(let x=572;x<800;x+=24){const s=36*Math.sin((x-560)/40);mk('path',{d:'M'+x+' '+(320+s).toFixed(1)+'V'+(320-s).toFixed(1),class:'s-line','stroke-width':4},$('hx'))}
mk('path',{d:h1,fill:'none',class:'s-gain','stroke-width':6},$('hx'));mk('path',{d:h2,fill:'none',class:'s-ink','stroke-width':6},$('hx'));
const LC=LEN($('cc')),LD=LEN($('dc'));
const ANG=[-18,-42,-66,-90],BL=[230,200,180,150].map((L,i)=>mk('rect',{x:190,y:482,width:L,height:16,rx:8,fill:i===1?'var(--gain)':'var(--muted)'},$('blades')));
const PD=[];for(let r=0;r<4;r++)for(let c=0;c<12;c++)PD.push(mk('circle',{cx:1115+c*30,cy:640+r*25,r:8,class:'loss'},$('pdots')));
const G=i=>170+i*52.5;
for(let i=0;i<9;i++)mk('path',{d:'M'+G(i)+' 260V680M170 '+(260+i*52.5)+'H590',class:'s-line','stroke-width':3},$('board'));
[[2,2,1],[3,3,1],[2,5,1],[5,6,1],[6,5,1],[3,6,1],[6,2,0],[5,3,0],[2,3,0],[6,6,0],[4,5,0]].forEach(s=>mk('circle',{cx:G(s[0]),cy:260+s[1]*52.5,r:22,fill:s[2]?'var(--ink)':'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('board')));
const BR=[],BT=[];for(let i=0;i<3;i++){const x=780+i*120;BR.push(mk('rect',{x:x-34,y:340,width:68,height:60,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('ex')));BT.push(tx($('ex'),x,384,'?',{class:'d','font-size':36,'text-anchor':'middle'}));man($('ex'),x,470,26,'ink')}
const ST=[['Cheap','ASYMMETRY'],['Fast','HYPER-EVOLUTION'],['Flexible','OMNI-USE'],['Self-directed','AUTONOMY']].map((d,i)=>{const g=mk('g',{},$('stack')),y=640-i*100;mk('rect',{x:120,y:y,width:440,height:86,rx:14,class:'gain'},g);tx(g,150,y+56,d[0],{class:'d5','font-size':34,style:'fill:var(--on-gain)'});tx(g,540,y+54,d[1],{class:'m','font-size':18,'text-anchor':'end',style:'fill:var(--on-gain)'});return g});
// barrier posts: 40 tall every 70 -> 30px gaps centred at y=295,365,...,645
for(let i=0;i<7;i++)mk('rect',{x:1040,y:240+i*70,width:40,height:40,rx:6,class:'ink'},$('posts'));
// small tools: one dot stream per gap, settling past the barrier in a diagonal formation
const LK=[];for(let j=0;j<3;j++)for(let r=0;r<6;r++)LK.push({e:mk('circle',{cx:1000,cy:295+70*r,r:7,class:'gain',opacity:0},$('leak')),x:1130+j*100+r*24,o:(2-j)*6+r});
const QS=[['ASYMMETRY','Who does it','empower?'],['HYPER-EVOLUTION','How fast does','it change?'],['OMNI-USE','What else','could it do?'],['AUTONOMY','How much runs','without people?']];
const CD=QS.map((q,i)=>{const x=640+(i%2)*440,y=250+Math.floor(i/2)*240,g=mk('g',{},$('cards'));mk('rect',{x:x,y:y,width:400,height:210,rx:18,fill:'var(--stage)',class:'s-line','stroke-width':3},g);tx(g,x+30,y+66,''+(i+1),{class:'d','font-size':48,style:'fill:var(--gain)'});tx(g,x+90,y+58,q[0],{class:'m','font-size':18});tx(g,x+30,y+130,q[1],{class:'d5','font-size':34});tx(g,x+30,y+176,q[2],{class:'d5','font-size':34});return g});