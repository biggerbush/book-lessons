const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const setC=(els,c)=>els.forEach(e=>e.setAttribute('class',c));
fig($('t_fig'),1290,320,50,'ink');
const SCAT=[[-10,150,-14],[70,250,10],[-40,70,18],[90,210,-8]];
const cards=SCAT.map((o,i)=>{const x=120+i*165,g=mk('g',{},$('st_cards'));mk('rect',{x:x,y:280,width:150,height:110,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  [0,1,2].forEach(j=>mk('path',{d:'M'+(x+22)+' '+(316+j*24)+'h'+(j==2?60:106),class:'s-line','stroke-width':6,'stroke-linecap':'round'},g));return g});
// soldiers with legs, standing on the ground (y 720), heads top at y 552, well below the wall top (y 440)
const MX=[520,625,735,845,955];
const LY=x=>414+0.45*(x-380); // log line: passes 26px above the wall's top corner
const men=MX.map(x=>{const g=$('sd_men');
  const legs=mk('path',{d:'M'+(x-10)+' 652L'+(x-12)+' 716M'+(x+10)+' 652L'+(x+12)+' 716',fill:'none',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},g);
  const b=mk('path',{d:'M'+(x-22)+' 652v-36a22 22 0 0 1 44 0v36z',class:'ink'},g);
  const h=mk('circle',{cx:x,cy:568,r:16,class:'ink'},g);
  const a=[0,1].map(()=>mk('path',{d:'M0 0',fill:'none',class:'s-ink','stroke-width':7,'stroke-linecap':'round'},g));
  return {f:[h,b],s:[legs].concat(a),a:a}});
const P=[1,0,1,1,0],A=[0,0,1,0,1];
const acts=P.map((v,i)=>{const y=374+i*60,g=$('fb_rows');mk('circle',{cx:170,cy:y,r:14,class:'ink'},g);
  mk('circle',{cx:300,cy:y,r:14,fill:v?'var(--gain)':'none',stroke:'var(--gain)','stroke-width':4},g);
  const a=mk('g',{},g);mk('circle',{cx:440,cy:y,r:14,fill:A[i]?'var(--ink)':'none',stroke:'var(--ink)','stroke-width':4},a);
  if(v!==A[i])mk('path',{d:'M497 '+(y-10)+'l20 20m0-20l-20 20',class:'s-loss','stroke-width':5,'stroke-linecap':'round'},a);return a});
[1140,1260,1380].forEach(x=>fig($('fb_ppl'),x,310,22,'ink'));
const cells=[];for(let i=0;i<24;i++)cells.push(mk('rect',{x:550+(i%6)*56,y:340+Math.floor(i/6)*60,width:42,height:42,rx:6,fill:'var(--line)'},$('pl_grid')));
fig($('pl_ep'),1240,410,40,'ink');
const ov=[];for(let i=0;i<10;i++){const x=170+i*90;ov.push(fig($('ov_ppl'),x,280,22,'ink'));
  if(i<4)mk('path',{d:'M'+(x-26)+' 300l52 52m0-52l-52 52',class:'s-loss','stroke-width':7,'stroke-linecap':'round'},$('ov_x'))}
const H=[40,90,150,210,250,230,190,150,110,80,50,30];
const bars=H.map((h,i)=>mk('rect',{x:260+i*95,y:700-h,width:75,height:h,rx:6,fill:'var(--line)'},$('pf_bars')));
fig($('tc_p'),1110,420,34,'ink');