const fig=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y,class:'m','font-size':22},a||{}),g);e.textContent=s;return e};
const drw=(e,L,k)=>{e.setAttribute('stroke-dasharray',L);e.setAttribute('stroke-dashoffset',(L*(1-k)).toFixed(1));e.setAttribute('opacity',k>0?1:0)};
const dot=(g,x,y,r,f)=>mk('circle',{cx:x,cy:y,r:r,fill:f},g);
const LN={class:'s-ink','stroke-width':6,'stroke-linecap':'round',fill:'none'};
function cross(g,cx,cy,x0,x1,y0,y1,L){const h=mk('path',Object.assign({d:'M'+x0+' '+cy+'H'+x1},LN),g),v=mk('path',Object.assign({d:'M'+cx+' '+y0+'V'+y1},LN),g);
  const lb=[[x0-16,cy+8,'end'],[x1+16,cy+8,'start'],[cx,y0-14,'middle'],[cx,y1+34,'middle']].map((q,i)=>tx(g,q[0],q[1],L[i],{'text-anchor':q[2]}));
  return {h:h,v:v,lb:lb,hl:x1-x0,vl:y1-y0}}
function loaf(g,cx,cy){mk('ellipse',{cx:cx,cy:cy,rx:80,ry:44,class:'gain'},g);mk('path',{d:'M'+(cx-40)+' '+(cy-18)+'l20 32M'+(cx-6)+' '+(cy-24)+'l20 34M'+(cx+28)+' '+(cy-18)+'l16 28',stroke:'var(--stage)','stroke-width':6,'stroke-linecap':'round',fill:'none'},g)}

for(let i=0;i<12;i++){const a=i*2.4,rr=16+(i%4)*13;dot($('t_crowd'),1290+rr*Math.cos(a),430+rr*Math.sin(a),13,'var(--ink)')}

// shelf: 6 wider boxes per row so labels can be 22px
const BX=[],BL=[];for(let i=0;i<12;i++){const x=140+(i%6)*150,y=i<6?320:570,g=mk('g',{},$('c_boxes'));
  mk('rect',{x:x,y:y,width:140,height:140,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);dot(g,x+70,y+38,16,'var(--line)');
  BX.push(g);BL.push(tx(g,x+70,y+104,i%2?'CHEAPER':'BETTER',{'font-size':22,'text-anchor':'middle'}))}

const X2=cross($('x_map'),800,530,420,1180,270,790,['SIMPLE','POWERFUL','HANDMADE','MASS-MADE']);
const F2=[[360,440],[1250,440],[900,236],[900,776]].map(q=>{const g=mk('g',{},$('x_fans'));fig(g,q[0],q[1],14,'var(--gain)');return g});

const MN=['Speed','Price','Convenience','Performance','Sustainability'].map((s,i)=>{const y=350+i*85,g=mk('g',{},$('p_menu'));
  const b=mk('rect',{x:160,y:y-30,width:36,height:36,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);tx(g,220,y,s,{class:'d5','font-size':36});return [g,b]});
const CK=[0,4].map(i=>mk('path',{d:'M167 '+(338+i*85)+'l9 10 16-20',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('p_menu')));
const BR=[220,170,120,70].map((h,i)=>mk('rect',{x:800+i*170,y:760-h,width:120,height:h,rx:8,fill:'var(--loss)'},$('p_bars')));

const X4=cross($('r_map'),700,520,300,1100,260,800,['SLOW','FAST','ADVENTUROUS','FAMILIAR']);
const RS=[[420,340],[980,320],[560,700],[1040,680],[700,400],[880,460],[460,600],[960,560],[640,640]],RO=[[-60,-30],[0,-45],[60,-20],[-40,20],[30,25],[80,35],[-75,50],[10,62],[60,-62]];
const RD=RS.map(q=>dot($('r_dots'),q[0],q[1],18,'var(--loss)'));

cross($('e_map'),620,520,260,980,260,800,['SLOW','FAST','ADVENTUROUS','FAMILIAR']);RO.forEach(o=>dot($('e_map'),700+o[0],580+o[1],18,'var(--loss)'));
loaf($('e_loaf'),440,380);tx($('e_loaf'),440,470,'SLOW · WILD · 3 DAYS',{'font-size':20,'text-anchor':'middle',style:'fill:var(--gain)'});

loaf($('f_loaf'),420,440);
const FF=[[200,330],[320,280],[520,280],[640,330],[220,520],[620,520],[420,560]].map(q=>{const g=mk('g',{},$('f_fans'));fig(g,q[0],q[1],20,'var(--gain)');return g});
const WK=[880,1060,1240].map(x=>{const g=mk('g',{},$('f_walk'));fig(g,x,500,22,'var(--muted)');mk('path',{d:'M'+(x-33)+' 574l-20-22M'+(x+33)+' 574l20-22',stroke:'var(--muted)','stroke-width':7,'stroke-linecap':'round'},g);return g});

cross($('w_a'),400,500,200,600,300,700,['SLOW','FAST','ADVENTUROUS','FAMILIAR']);
[[290,390],[322,420],[262,432],[340,368],[280,350],[352,442],[240,380]].forEach(q=>dot($('w_a'),q[0],q[1],14,'var(--loss)'));dot($('w_a'),305,398,16,'var(--gain)');
const XB=cross($('w_b'),1140,500,940,1340,300,700,['SLOW','FAST','HANDS-ON','GRAB-AND-GO']);
[[1200,560],[1250,590],[1230,630],[1280,560],[1190,610],[1290,620]].forEach(q=>dot($('w_dots'),q[0],q[1],14,'var(--loss)'));

[[1378,705],[1400,722],[1386,742],[1412,698]].forEach(q=>dot($('z_riv'),q[0],q[1],10,'var(--loss)'));