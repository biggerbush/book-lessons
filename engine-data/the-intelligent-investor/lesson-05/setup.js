const tx=(g,x,y,s,cls,fs,o)=>{const e=mk('text',Object.assign({x:x,y:y,class:cls,'font-size':fs,'text-anchor':'middle'},o||{}),g);e.textContent=s;return e};
const mkScale=(g,cx,by,hw,dr,base,a)=>{mk('path',{d:'M'+cx+' '+by+'V'+base,class:'s-ink','stroke-width':8},g);mk('rect',{x:cx-80,y:base,width:160,height:16,rx:8,class:'ink'},g);
  const b=mk('g',{},g);mk('path',{d:'M'+(cx-hw)+' '+by+'H'+(cx+hw),class:'s-ink','stroke-width':8,'stroke-linecap':'round'},b);mk('circle',{cx:cx,cy:by,r:12,class:'gain'},b);
  const pan=()=>{const q=mk('g',{},g);mk('path',{d:'M'+(-a*.9)+' '+dr+'L0 0L'+(a*.9)+' '+dr,class:'s-ink',fill:'none','stroke-width':4,'stroke-linejoin':'round'},q);mk('path',{d:'M'+(-a)+' '+dr+'a'+a+' '+(a*.5)+' 0 0 0 '+(2*a)+' 0z',class:'ink'},q);return q};
  return {b:b,L:pan(),R:pan(),cx:cx,by:by,hw:hw}};
const setScale=(S,ang)=>{S.b.setAttribute('transform','rotate('+ang.toFixed(2)+' '+S.cx+' '+S.by+')');const r=ang*Math.PI/180,dx=S.hw*Math.cos(r),dy=S.hw*Math.sin(r);
  S.L.setAttribute('transform','translate('+(S.cx-dx).toFixed(1)+' '+(S.by-dy).toFixed(1)+')');S.R.setAttribute('transform','translate('+(S.cx+dx).toFixed(1)+' '+(S.by+dy).toFixed(1)+')')};
const blk=(g,x,y,w,h,gain)=>mk('rect',gain?{x:x,y:y,width:w,height:h,rx:5,class:'gain'}:{x:x,y:y,width:w,height:h,rx:5,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);

const T=mkScale($('tsc'),1270,300,170,110,600,70);
for(let k=0;k<2;k++){blk(T.L,-28,88-k*24,56,22,1);blk(T.R,-28,88-k*24,56,22,0)}
tx(T.L,0,185,'STOCKS','m',20);tx(T.R,0,185,'BONDS','m',20);

const S3=mkScale($('sc3'),480,300,240,130,700,100);
blk(S3.L,-40,74,80,56,1);blk(S3.R,-40,74,80,56,0);
const LB=[S3.L,S3.R].map((q,i)=>{const g=mk('g',{},q);tx(g,0,240,'50%','d',52,i?{}:{style:'fill:var(--gain)'});tx(g,0,276,i?'BONDS':'STOCKS','m',22);return g});

const SQ=[];for(let j=0;j<3;j++)for(let i=0;i<4;i++)SQ.push(mk('rect',{x:395+i*50,y:500+j*46,width:36,height:36,rx:6,class:'gain'},$('stk')));
for(let k=0;k<4;k++){const y=598-k*40;mk('rect',{x:1030,y:y,width:180,height:32,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('bnd'));
  mk('path',{d:'M1050 '+(y+16)+'H1150',class:'s-line','stroke-width':4,'stroke-linecap':'round'},$('bnd'));mk('circle',{cx:1185,cy:y+16,r:8,class:'gain'},$('bnd'))}

[0,25,50,75,100].forEach(v=>{const x=160+12.8*v;mk('path',{d:'M'+x+' 530v18',class:'s-ink','stroke-width':4},$('tk'));tx($('tk'),x,584,v+'%','m',22)});

const DR=[1020,1050,1080,1380,1410,1440,1150,1230,1310].map((x,i)=>{const y1=i<6?580:450-110*Math.sqrt(1-Math.pow((x-1230)/120,2))-22;
  return [mk('path',{d:'M'+x+' 0v18',class:'s-loss','stroke-width':4,'stroke-linecap':'round'},$('rain')),310,y1]});