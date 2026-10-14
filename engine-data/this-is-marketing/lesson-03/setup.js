const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-1.5*r)+' '+(y+4.2*r)+'v'+(-1.3*r)+'a'+(1.5*r)+' '+(1.5*r)+' 0 0 1 '+(3*r)+' 0v'+(1.3*r)+'z',class:c},g);return g};
const G=par=>mk('g',{},par);
const R=(el,u,a,d=.5)=>rise(typeof el==='string'?$(el):el,p(u,a,a+d));
const HP='M0 120C-150 20-160-90-75-110C-35-120-8-92 0-70C8-92 35-120 75-110C160-90 150 20 0 120Z';
const drill=(g,x,y,k)=>{const d=mk('g',{transform:'translate('+x+' '+y+') scale('+k+')'},g);
  mk('rect',{x:-80,y:-25,width:170,height:50,rx:14,class:'ink'},d);mk('rect',{x:-30,y:20,width:40,height:60,class:'ink'},d);
  mk('rect',{x:-45,y:76,width:70,height:22,rx:6,class:'gain'},d);mk('rect',{x:90,y:-7,width:60,height:14,fill:'var(--muted)'},d);return d};
const chip=(g,x,y,w,s,h=46)=>{mk('rect',{x:x,y:y,width:w,height:h,rx:h/2,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:x+w/2,y:y+h/2+7,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g};

const T0=G($('tg')),T1=G($('tg'));
P(T0,1110,300,30,'gain');
mk('rect',{x:1070,y:440,width:80,height:60,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},T0);
mk('path',{d:'M1070 462h80',stroke:'var(--ink)','stroke-width':4},T0);
mk('path',{d:HP,class:'gain',transform:'translate(1110 215) scale(.25)'},T0);
const ASM=[],REAL=[];
[1290,1430].forEach((x,i)=>{P(T1,x,330,26,'ink');
  mk('circle',{cx:x,cy:225,r:40,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},T1);
  mk('circle',{cx:x,cy:285,r:7,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},T1);
  ASM.push(mk('path',{d:HP,fill:'none',stroke:'var(--muted)','stroke-width':14,'stroke-dasharray':'20 16',transform:'translate('+x+' 228) scale(.18)'},T1));
  REAL.push(mk('path',{d:i?'M'+x+' 205l22 38h-44z':'M'+(x-18)+' 207h36v36h-36z',class:'loss'},T1))});

P($('you1'),380,440,40,'gain'); P($('them'),1260,440,40,'ink');
for(let i=0;i<3;i++){mk('circle',{cx:630+i*50,cy:360,r:16,class:'gain'},$('cy'));mk('path',{d:'M'+(950+i*50)+' 344l17 30h-34z',class:'loss'},$('ct'))}

P($('seller'),300,410,34,'ink'); drill($('drl'),470,440,1.1); P($('cust'),1200,440,36,'ink');
const CH2=['SPEED','POWER','BATTERY'].map((s,i)=>chip(G($('chips2')),400+i*150,330,130,s));

const RW=['A hole in the wall','A shelf to hang','A room that feels tidy','The pride of doing it myself'].map((s,i)=>{const c=290+i*140,g=G($('rows')),last=i===3;
  mk('rect',{x:120,y:c-65,width:1360,height:130,rx:14,fill:'var(--line)','fill-opacity':.15+i*.12},g);
  mk('circle',{cx:200,cy:c,r:12,class:last?'gain':'ink'},g);
  const tx=mk('text',{x:420,y:c+16,'font-size':46,class:last?'d':'d5'},g);if(last)tx.setAttribute('style','fill:var(--gain)');tx.textContent=s;return g});
mk('circle',{cx:330,cy:290,r:24,class:'ink'},RW[0]);
mk('rect',{x:280,y:440,width:100,height:12,class:'ink'},RW[1]);mk('path',{d:'M295 452v16M365 452v16',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},RW[1]);
for(let i=0;i<3;i++)mk('rect',{x:292+i*18,y:400,width:14,height:40,class:'gain'},RW[1]);
mk('rect',{x:290,y:535,width:80,height:70,fill:'none',stroke:'var(--ink)','stroke-width':5},RW[2]);mk('path',{d:'M300 572h60',stroke:'var(--ink)','stroke-width':4},RW[2]);
for(let i=0;i<4;i++)mk('rect',{x:304+i*12,y:550,width:9,height:22,class:'ink'},RW[2]);
mk('circle',{cx:330,cy:710,r:34,class:'gain'},RW[3]);
mk('path',{d:'M318 700v1M342 700v1M314 720q16 14 32 0',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round'},RW[3]);
[[0,'WHAT THEY ASKED FOR'],[3,'WHAT THEY REALLY WANT']].forEach(([i,s])=>{const tx=mk('text',{x:1450,y:298+i*140,'font-size':20,'text-anchor':'end',class:'m'},RW[i]);tx.textContent=s});

const WC=[[400,200,'BELIEFS'],[620,200,'BIASES'],[840,360,'PAST EXPERIENCES']].map(c=>chip(G($('wc')),c[0],430,c[1],c[2]));
[['pa',280,'gain'],['pb',1320,'loss']].forEach(q=>{P($(q[0]),q[1],560,30,'ink');
  [-12,12].forEach(o=>mk('circle',{cx:q[1]+o,cy:556,r:10,fill:'none',stroke:'var(--'+q[2]+')','stroke-width':4},$(q[0])))});
const DT=[];for(let i=0;i<6;i++)DT.push(mk('circle',{r:12,cy:640},$('dots')));

P($('lpp'),280,400,34,'ink'); P($('lpp'),600,400,34,'ink');

drill($('drl6'),760,330,.9); P($('rent'),260,300,34,'ink'); P($('home'),1340,300,34,'ink');

const NL=[];for(let i=0;i<6;i++){NL.push(mk('path',{d:'M210 '+(400+i*60)+'H510',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},$('nlines')));
  mk('circle',{cx:200+i*64,cy:260,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'))}
P($('lis'),1180,440,50,'ink');
const QC=['WHAT DO THEY FEAR?','WHAT DO THEY DREAM OF?','WHAT DO THEY ASSUME?'].map((s,i)=>{chip(G($('qch')),640,300+i*120,360,s,64);
  mk('path',{d:'M632 '+(332+i*120)+'H580m16-14-16 14 16 14',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('qlinks'));return $('qch').lastChild});

const CB=[];for(let i=0;i<3;i++){const g=G($('crd'));mk('circle',{cx:1120,cy:650+i*50,r:10,class:'gain'},g);mk('path',{d:'M1145 '+(650+i*50)+'H1420',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);CB.push(g)}