const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const LN=el=>{let L=1000;try{L=el.getTotalLength()||1000}catch(e){}return L};
const draw=(el,k)=>{const L=LN(el);el.style.strokeDasharray=L;el.style.strokeDashoffset=(L*(1-k)).toFixed(1)};
const AT=(el,o)=>{for(const k in o)el.setAttribute(k,o[k])};
const RG=$('runner');mk('circle',{cx:1290,cy:380,r:28,class:'ink'},RG);
mk('path',{d:'M1290 410L1280 520',class:'s-ink','stroke-width':12,'stroke-linecap':'round'},RG);
const RL=[0,1].map(()=>mk('path',{class:'s-ink',fill:'none','stroke-width':10,'stroke-linecap':'round','stroke-linejoin':'round'},RG));
const RA=[0,1].map(()=>mk('path',{class:'s-ink',fill:'none','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},RG));
P($('rep'),430,380,26,'ink');
const TL=[];for(let i=0;i<20;i++){const x=170+i*22+Math.floor(i/5)*24;TL.push(mk('path',{d:'M'+x+' 640v60',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('tally')))}
[[285,455],[375,455],[330,500],[285,545],[375,545]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:14,class:'ink'},$('die')));
const SQ=[];for(let i=0;i<6;i++)SQ.push(mk('rect',{x:560+i*96,y:470,width:80,height:80,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('board2')));
P($('kid'),1260,400,30,'gain');mk('path',{d:'M1248 404q12 10 24 0',fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round'},$('kid'));
let sd='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?17:40;sd+=(i?'L':'M')+(1400+r*Math.cos(a)).toFixed(1)+' '+(300+r*Math.sin(a)).toFixed(1)}
mk('path',{d:sd+'Z',class:'gain'},$('goal2'));
const PA=[[620,460],[720,340],[720,580],[830,400],[830,520],[1180,460],[1080,340],[1080,580],[970,400],[970,520]],SEQ=[0,1,3,8,6,5,9,4,2,7];
const PL=PA.map((q,i)=>mk('circle',Object.assign({cx:q[0],cy:q[1],r:22},i<5?{class:'ink'}:{fill:'var(--stage)',stroke:'var(--muted)','stroke-width':6}),$('pl')));
for(let i=0;i<6;i++)mk('path',{d:'M150 '+(370+i*44)+'h'+(i%2?200:260),class:'s-line','stroke-width':10,'stroke-linecap':'round'},$('cardl'));
const WG=$('wall');mk('rect',{x:760,y:300,width:100,height:400,class:'loss'},WG);
for(let r=0;r<10;r++){if(r)mk('path',{d:'M760 '+(300+r*40)+'h100',stroke:'var(--stage)','stroke-width':4},WG);mk('path',{d:'M'+(r%2?793:827)+' '+(300+r*40)+'v40',stroke:'var(--stage)','stroke-width':4},WG)}
P($('golfer'),260,380,34,'ink');
P($('guide'),1400,420,26,'ink');