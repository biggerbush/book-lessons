const A=(e,o)=>{for(const k in o)e.setAttribute(k,o[k]);return e};
function clk(g,x,y,r,col,dash){mk('circle',{cx:x,cy:y,r:r,fill:'var(--stage)',stroke:col,'stroke-width':8,'stroke-dasharray':dash||'none'},g);
  for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(x+c*r*.78).toFixed(1)} ${(y+s*r*.78).toFixed(1)}L${(x+c*r*.88).toFixed(1)} ${(y+s*r*.88).toFixed(1)}`,stroke:col,'stroke-width':4,'stroke-linecap':'round'},g)}
  const h=mk('path',{d:`M${x} ${y}V${y-r*.45}`,stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},g),m=mk('path',{d:`M${x} ${y}V${y-r*.7}`,stroke:col,'stroke-width':6,'stroke-linecap':'round'},g);
  mk('circle',{cx:x,cy:y,r:7,fill:'var(--ink)'},g);return {h,m,x,y}}
const rot=(c,a,b)=>{c.h.setAttribute('transform',`rotate(${a.toFixed(1)} ${c.x} ${c.y})`);c.m.setAttribute('transform',`rotate(${b.toFixed(1)} ${c.x} ${c.y})`)};
function puff(g,L,col){L.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:'none',stroke:col,'stroke-width':10},g));L.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:'var(--stage)'},g))}
const C0=clk($('tc0'),1220,330,100,'var(--gain)'),C1=clk($('tc1'),1340,640,90,'var(--loss)','14 10'),C2=clk($('wc'),300,470,140,'var(--ink)');
for(let r=0;r<3;r++)for(let c=0;c<5;c++){const hi=(r===1&&c===2)||(r===2&&c===4);mk('rect',{x:580+c*64,y:410+r*70,width:52,height:56,rx:6,fill:hi?'var(--gain)':'none',stroke:hi?'var(--gain)':'var(--line)','stroke-width':3},$('cells'))}
let RL=700;try{RL=$('route').getTotalLength()||700}catch(e){}A($('route'),{'stroke-dasharray':RL,'stroke-dashoffset':RL});
puff($('cpuff'),[[720,400,60],[800,360,80],[880,400,60],[800,430,60]],'var(--loss)');
[[800,560,12],[790,527,8]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},$('cpuff')));
const C3=clk($('pclk'),800,395,40,'var(--loss)');
const FR=[0,1,2].map(i=>{const r=mk('rect',{x:220+i*72,y:560,width:56,height:44,rx:6,stroke:'var(--loss)','stroke-width':4},$('frames'));return r});
const FQ=[1215,1295,1375].map(x=>{const q=mk('text',{x:x,y:640,'font-size':56,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},$('fq'));q.textContent='?';return q});
const FP=[];for(let i=0;i<8;i++)FP.push(mk('ellipse',{cx:190+i*48,cy:i%2?712:700,rx:11,ry:5,class:'ink'},$('fp')));
const RN=[1160,1185,1240,1262].map(x=>mk('path',{d:`M${x} 0v14`,stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},$('rain')));
puff($('spuff'),[[1150,320,50],[1210,290,62],[1270,320,50],[1210,335,45]],'var(--ink)');
// alarm clock tool: bells, hammer and legs, then the face
mk('path',{d:'M-30 40L-46 78M30 40L46 78',stroke:'var(--ink)','stroke-width':9,'stroke-linecap':'round'},$('tool'));
mk('path',{d:'M0 -50V-70',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('tool'));
mk('circle',{cx:-38,cy:-46,r:22,fill:'var(--ink)'},$('tool'));mk('circle',{cx:38,cy:-46,r:22,fill:'var(--ink)'},$('tool'));
const C4=clk($('tool'),0,0,50,'var(--gain)');
const C5=clk($('endclk'),1340,720,70,'var(--gain)');