const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const gearD=(r,n)=>{let d='';const s=2*Math.PI/n;for(let i=0;i<n;i++){const a=i*s;[[r,-.25],[r+16,-.13],[r+16,.13],[r,.25]].forEach((q,j)=>{d+=(i+j?'L':'M')+(q[0]*Math.cos(a+q[1]*s)).toFixed(1)+' '+(q[0]*Math.sin(a+q[1]*s)).toFixed(1)})}return d+'Z'};
const mkGear=(par,x,y,r,n,cls,lab)=>{const h=mk('g',{transform:'translate('+x+' '+y+')'},par);const g=mk('path',{d:gearD(r,n),class:cls},h);mk('circle',{r:r*.42,fill:'var(--stage)'},h);if(lab){const tx=mk('text',{y:8,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},h);tx.textContent=lab}return g};
const head=(g,x,y,dx,dy,cls)=>{const L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,s=22;mk('path',{d:'M'+(x-s*(ux-uy*.6)).toFixed(1)+' '+(y-s*(uy+ux*.6)).toFixed(1)+'L'+x+' '+y+'L'+(x-s*(ux+uy*.6)).toFixed(1)+' '+(y-s*(uy-ux*.6)).toFixed(1),fill:'none',class:cls,'stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g)};
const ladder=(g,x1,x2,y)=>{let d='';for(let x=x1+14;x<x2;x+=28)d+='M'+x+' '+(y-22)+'V'+(y+22);mk('path',{d:d,class:'s-line','stroke-width':4},g);mk('path',{d:'M'+x1+' '+(y-22)+'H'+x2+'M'+x1+' '+(y+22)+'H'+x2,class:'s-ink','stroke-width':6,'stroke-linecap':'round'},g)};
const bz=(P,s)=>{const a=1-s;return[a*a*a*P[0]+3*a*a*s*P[2]+3*a*s*s*P[4]+s*s*s*P[6],a*a*a*P[1]+3*a*a*s*P[3]+3*a*s*s*P[5]+s*s*s*P[7]]};
const tr=(el,x,y)=>el.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')');

const GA=mkGear($('gA'),1200,720,80,12,'ink','AI'), GB=mkGear($('gB'),1355,680,70,10,'gain','DNA');

let pd='';for(let i=0;i<5;i++){const v=392+i*44;pd+='M352 '+v+'H370M590 '+v+'H608M'+v+' 352V370M'+v+' 590V608'}
mk('path',{d:pd,class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('chip'));
const LYR=[[420,[420,480,540]],[480,[400,453,507,560]],[540,[440,520]]];
for(let l=0;l<2;l++)LYR[l][1].forEach(a=>LYR[l+1][1].forEach(b=>mk('path',{d:'M'+LYR[l][0]+' '+a+'L'+LYR[l+1][0]+' '+b,class:'s-line','stroke-width':3},$('chip'))));
const NODES=[];LYR.forEach((L,l)=>L[1].forEach(y=>NODES.push([mk('circle',{cx:L[0],cy:y,r:12,class:'ink'},$('chip')),l])));
const RUNG=[];for(let i=0;i<11;i++)RUNG.push(mk('path',{class:'s-line','stroke-width':4},$('helix')));
const H1=mk('path',{class:'s-ink',fill:'none','stroke-width':7,'stroke-linecap':'round'},$('helix')),H2=mk('path',{class:'s-gain',fill:'none','stroke-width':7,'stroke-linecap':'round'},$('helix'));

let gd='';for(let i=0;i<9;i++){const v=190+i*50;gd+='M'+v+' 270V670M190 '+(270+i*50)+'H590'}
mk('path',{d:gd,class:'s-line','stroke-width':3},$('grid2'));
const ST=[[2,2,1],[2,6,1],[6,6,1],[3,4,1],[5,3,1],[6,2,0],[4,5,0],[5,6,0],[3,6,0],[1,4,0]].map(q=>mk('circle',{cx:190+q[0]*50,cy:270+q[1]*50,r:21,fill:q[2]?'var(--ink)':'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('stones')));
const RAYS=[];for(let i=0;i<7;i++){const a=Math.PI+i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);RAYS.push(mk('path',{d:'M'+(1300+110*c).toFixed(0)+' '+(400+110*s).toFixed(0)+'L'+(1300+140*c).toFixed(0)+' '+(400+140*s).toFixed(0),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays')))}

ladder($('rd3'),160,500,420);ladder($('ed3'),630,970,470);
const LT='A T G C C T A G';
const WR=[];for(let i=0;i<6;i++)WR.push(mk('path',{d:'M1246 '+(456+i*26)+'H1294',class:'s-line','stroke-width':4},$('wr3')));

// protein: straight chain folds into a clean, non-overlapping shape
const FOLD=[[200,590],[250,630],[310,640],[370,620],[400,570],[380,515],[330,490],[270,500],[230,450],[250,395],[310,370],[370,385],[440,420],[480,480]];
const LN=[],FD=[],B4=[];for(let i=0;i<14;i++){LN.push([170+i*34,520]);FD.push(FOLD[i]);B4.push(mk('circle',{r:14,class:'ink'},$('beads')))}
person($('sct4'),860,520,26,'ink');
const AF=[];for(let j=0;j<5;j++)for(let i=0;i<7;i++){const x=1090+i*52,y=400+j*56;AF.push(mk('path',{d:'M'+(x-14)+' '+(y+6)+'q7-22 14-6t14-6',fill:'none',class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('afg')))}

const TOP=[1080,400,1000,230,600,230,520,400],BOT=[520,600,600,770,1000,770,1080,600];
head($('hd5'),520,400,-80,170,'s-muted');head($('hd5'),1080,600,80,-170,'s-muted');
const DS=[],MO=[];for(let i=0;i<6;i++)DS.push(mk('rect',{x:-8,y:-8,width:16,height:16,class:'ink'},$('dsp')));
for(let i=0;i<5;i++)MO.push(mk('path',{d:'M-13 0L-7-11H7L13 0L7 11H-7Z',class:'gain'},$('mop')));

mk('path',{d:'M700 312L450 410',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},$('ar6a'));head($('ar6a'),450,410,-250,98,'s-muted');
mk('path',{d:'M900 312L1150 410',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},$('ar6b'));head($('ar6b'),1150,410,250,98,'s-muted');
let vd='';for(let i=0;i<8;i++){const a=i*Math.PI/4;vd+='M'+(1160+26*Math.cos(a)).toFixed(1)+' '+(625+26*Math.sin(a)).toFixed(1)+'L'+(1160+40*Math.cos(a)).toFixed(1)+' '+(625+40*Math.sin(a)).toFixed(1)}
mk('path',{d:vd,class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('vir'));mk('circle',{cx:1160,cy:625,r:26,class:'loss'},$('vir'));

const QA=mkGear($('qg'),1290,760,50,9,'ink'),QB=mkGear($('qg'),1390,735,40,7,'gain');