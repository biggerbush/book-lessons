const pers=(g,x,y,r,at)=>{mk('circle',Object.assign({cx:x,cy:y,r:r},at),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},at),g)};
const dr=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const tf=(el,s)=>el.setAttribute('transform',s);
const lbl=(g,x,y,s,at)=>{const tx=mk('text',Object.assign({x:x,y:y,'font-size':20,'text-anchor':'middle',class:'m'},at||{}),g);tx.textContent=s;return tx};
// flames: amber, pointed flickering tips
const FOUT='M0 0C-30 0-40-26-26-56C-22-42-14-38-12-46C-14-70 0-84 0-112C14-84 30-62 24-40C30-46 34-50 34-56C44-30 32 0 0 0Z';
const FIN='M0 -6C-14 -6-18-20-10-34C-6-44 0-50 0-64C6-50 14-40 12-28C14-16 10-6 0-6Z';
const FL=[[1250,470,.9],[1320,400,1.2],[1395,470,.9],[1280,330,.7],[1365,325,.8],[1276,702,.7],[1364,702,.6]].map(q=>{const g=mk('g',{},$('fire'));
  mk('path',{d:FOUT,class:'gain',stroke:'var(--stage)','stroke-width':3,'stroke-linejoin':'round'},g);mk('path',{d:FIN,fill:'var(--stage)'},g);return [g,q]});
const CAN=[$('cn0'),$('cn1'),$('cn2')];
const EV=['MARKET CRASH','WAR','PANDEMIC'].map((s,i)=>{const g=mk('g',{},$('evs'));mk('rect',{x:120+i*240,y:740,width:220,height:56,rx:28,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);lbl(g,230+i*240,776,s);return g});
const BR=[];for(let i=0;i<14;i++){const h=40*Math.pow(1.15,i);BR.push(mk('rect',{x:160+i*52,y:700-h,width:40,height:h,rx:4,class:'gain'},$('bars')))}
const CD=[];for(let r=0;r<5;r++)for(let c=0;c<7;c++){const x=1020+c*60,y=300+r*60,td=r*7+c===17;mk('rect',{x:x,y:y,width:60,height:60,fill:'none',stroke:td?'var(--gain)':'var(--line)','stroke-width':td?5:2},$('cells'));CD.push(mk('circle',{cx:x+30,cy:y+30,r:4,class:'gain'},$('cells')))}
for(let i=0;i<6;i++){const x=170+i*90,g=$('crowd'),st={fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'6 6'};pers(g,x,600,18,st);mk('path',{d:'M'+(x-27)+' 652l-16-46M'+(x+27)+' 652l16-46',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round',fill:'none'},g)}
const TK=[];for(let i=0;i<12;i++)TK.push(mk('circle',{cx:200+i*112,cy:740,r:10,fill:'var(--line)'},$('ticks')));
const fy=x=>{const s=(x-680)/760;return 300+300*s*s*(3-2*s)};
let hd='';for(let x=680;x<=1440;x+=20)hd+=(x===680?'M':'L')+x+' '+fy(x).toFixed(1);$('hline').setAttribute('d',hd);
const SV=[];for(let x=740;x<=1420;x+=40)for(let y=336;y<fy(x)-18;y+=36)SV.push(mk('circle',{cx:x,cy:y,r:8,class:'gain'},$('saved')));
for(let i=0;i<15;i++){const row=i<10?0:1;mk('circle',{cx:row?-32+(i-10)*16:-72+i*16,cy:row?86:100,r:6,class:'gain'},$('rpd'))}
const C6=['SAVINGS','SKILLS','HEALTH','RELATIONSHIPS'].map((s,i)=>{const g=mk('g',{},$('chips6'));mk('rect',{x:120+i*345,y:210,width:325,height:56,rx:28,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);lbl(g,282+i*345,246,s);return g});
const gy=x=>720-380*Math.pow((x-160)/1280,1.4)+(x>=1180?110*Math.exp(-(x-1180)/120):0);
let gd='';for(let x=160;x<=1440;x+=16)gd+=(x===160?'M':'L')+x+' '+gy(x).toFixed(1);$('g6').setAttribute('d',gd);
const DY=gy(1184);$('dip').setAttribute('cx',1184);$('dip').setAttribute('cy',DY.toFixed(1));
const AL=[['20 YEARS AGO',.25],['10 YEARS AGO',.6],['LAST WEEK',1],['TODAY',1]].map((q,i)=>{const x=120+i*350,cx=x+155,s=q[1],g=mk('g',{},$('alb'));
  const r=mk('rect',{x:x,y:230,width:310,height:300,rx:12,fill:'var(--stage)',stroke:'var(--line)','stroke-width':5},g);
  mk('rect',{x:cx-8*s-2,y:510-130*s,width:16*s+4,height:130*s,class:'ink'},g);mk('circle',{cx:cx,cy:510-130*s,r:80*s,class:'gain'},g);
  mk('path',{d:'M'+(x+30)+' 510h250',stroke:'var(--line)','stroke-width':4},g);lbl(g,cx,572,q[0]);return [g,r]});
const LG=['Savings up','A new skill','Better health'].map((s,i)=>{const y=720+i*45,g=mk('g',{},$('log'));mk('path',{d:'M160 '+(y-12)+'l10 10l20-22',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);const tx=mk('text',{x:204,y:y,'font-size':30,class:'d5'},g);tx.textContent=s;return g});