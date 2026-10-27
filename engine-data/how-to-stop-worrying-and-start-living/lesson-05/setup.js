const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const cloud=(g,x,y,s,cls,lab)=>{[[-50,10,40],[0,-15,52],[50,10,40]].forEach(c=>mk('circle',{cx:x+c[0]*s,cy:y+c[1]*s,r:c[2]*s,class:cls},g));
  mk('rect',{x:x-90*s,y:y+10*s,width:180*s,height:40*s,rx:20*s,class:cls},g);
  const tx=mk('text',{x:x,y:y+4,'font-size':24,'text-anchor':'middle',class:'m',style:'fill:'+(cls==='gain'?'var(--on-gain)':'var(--stage)')},g);tx.textContent=lab};
fig($('me'),1300,600,34,'ink');
cloud($('cd1'),1150,450,1.1,'gain','FIX IT');
cloud($('cd2'),1370,320,1.1,'loss','LET GO');
fig($('boy'),0,-59,14,'gain');
const road=(id,x0)=>{let d='M'+x0+' 530';for(let i=0;i<10;i++)d+='q29 -22 58 0';$(id).setAttribute('d',d)};
road('rd0',150);road('rd1',870);
const BR=[];for(let i=0;i<7;i++)BR.push(mk('path',{class:'s-gain',fill:'none','stroke-width':6,'stroke-linecap':'round'},$('br')));
const PY=[360,330,350,300,320,280,310,340,330,380,370,420,410,460,450,500,530,560];
fig($('ben'),200,440,30,'ink');
const pan=g=>{mk('path',{d:'M0 0L-90 120M0 0L90 120',class:'s-ink','stroke-width':3},g);mk('path',{d:'M-100 120h200q-30 50-100 50q-70 0-100-50z',class:'ink'},g)};
pan($('pnL'));pan($('pnR'));
mk('rect',{x:-46,y:88,width:64,height:30,rx:12,class:'gain'},$('pnL'));mk('circle',{cx:26,cy:98,r:20,class:'gain'},$('pnL'));
const COIN=[];for(let i=0;i<10;i++)COIN.push(mk('ellipse',{cx:0,cy:108-i*14,rx:52,ry:12,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':3},$('pnR')));
// milk swirl: a spiral that spins and is squashed into perspective over the drain
let swd='';for(let i=0;i<=80;i++){const a=i/80*4*Math.PI,r=12+108*i/80;swd+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}
mk('path',{d:swd,fill:'none',stroke:'var(--muted)','stroke-width':3,'stroke-linecap':'round','vector-effect':'non-scaling-stroke'},$('swl'));
const saw=(g,x,y)=>{let d='M'+x+' '+(y+36);for(let i=0;i<11;i++)d+='l10 10l10-10';
  mk('path',{d:d,fill:'var(--line)',stroke:'var(--ink)','stroke-width':3,'stroke-linejoin':'round'},g);
  mk('rect',{x:x,y:y,width:220,height:36,fill:'var(--line)',stroke:'var(--ink)','stroke-width':4},g);
  mk('rect',{x:x+220,y:y-10,width:56,height:56,rx:16,class:'gain'},g)};
saw($('saw1'),330,354);saw($('saw2'),1050,360);
for(let i=0;i<8;i++){const x=170+i*72;fig($('kids'),x,640,16,'ink');
  if(i!==2&&i!==5)mk('path',{d:'M'+(x-20)+' 690l-14-62M'+(x+20)+' 690l14-62',class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('arms'))}
for(let i=0;i<14;i++){const x=960+i*34,q=(x-1160)/280;mk('circle',{cx:x,cy:560-100*(1-q*q)*((i*37%10)/12)-6,r:4,class:'ink'},$('specks'))}
const oct=r=>{let s='';for(let i=0;i<8;i++){const a=(i*45+22.5)*Math.PI/180;s+=(r*Math.cos(a)).toFixed(1)+','+(r*Math.sin(a)).toFixed(1)+' '}return s};
mk('polygon',{points:oct(130),class:'gain'},$('sg'));
mk('polygon',{points:oct(112),fill:'none',stroke:'var(--on-gain)','stroke-width':5},$('sg'));
const stx=mk('text',{x:0,y:26,'font-size':72,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},$('sg'));stx.textContent='STOP';