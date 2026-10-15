const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const P=(par,x,y,r,cls)=>person(mk('g',{},par),x,y,r,cls);
const T=(par,x,y,s,txt,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s},a||{}),par);e.textContent=txt;return e};
const MA={class:'m','text-anchor':'middle'};
const env=(g,x,y,w,h)=>{mk('rect',{x:x,y:y,width:w,height:h,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+x+' '+y+'l'+w/2+' '+h*.6+'l'+w/2+' '+(-h*.6),fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g)};
const starD=(cx,cy,R)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?R*.45:R;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'};
const store=(g,x)=>{mk('rect',{x:x,y:400,width:200,height:140,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:x-6,y:366,width:212,height:34,rx:6,class:'gain'},g);mk('rect',{x:x+80,y:470,width:40,height:70,class:'ink'},g)};

P($('me0'),1290,360,30,'gain');
const EN=[1200,1350].map(x=>{const g=mk('g',{},$('env0'));env(g,x,426,40,28);return g});
const RG=[];for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3,ca=Math.cos(a),sa=Math.sin(a);RG.push([P($('ring0'),1290+150*ca,400+150*sa,14,'ink'),ca,sa])}

const LG=['CUSTOMERS','EMPLOYEES','AGENCIES','AFFILIATES'].map((s,i)=>{const cx=270+i*350,g=mk('g',{},$('lgCards'));
  mk('rect',{x:cx-150,y:230,width:300,height:270,rx:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);P(g,cx,300,26,i?'ink':'gain');T(g,cx,465,22,s,MA);
  mk('path',{d:'M'+cx+' 500L800 670',stroke:'var(--line)','stroke-width':4},$('lgLines'));return [g,cx,mk('circle',{r:9,class:'gain'},$('lgLines'))]});

P($('hc'),420,380,40,'gain');T($('hc'),420,600,20,'CUSTOMER',MA);
const RF=[250,420,590].map(y=>[mk('path',{d:'M500 420Q720 '+(y-80)+' 950 '+(y+30),fill:'none',stroke:'var(--gain)','stroke-width':5,pathLength:1,'stroke-dasharray':1},$('refs')),P($('refs'),1000,y,26,'ink')]);
mk('path',{d:starD(290,695,46),class:'gain'},$('star'));

P($('emYou'),300,400,40,'ink');T($('emYou'),300,605,20,'YOU',MA);
P($('emHire'),1200,400,40,'gain');T($('emHire'),1200,605,20,'NEW HIRE',MA);
const SC3=[0,1,2].map(i=>mk('path',{d:'M720 '+(362+i*60)+'l8 8l14-16',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('sheet')));
const CP=['OUTREACH','CONTENT','ADS'].map(s=>{const g=mk('g',{},$('chips'));mk('rect',{x:-110,y:-24,width:220,height:48,rx:24,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);T(g,0,8,20,s,MA);return g});
const LD3=[0,1,2,3].map(()=>mk('circle',{cy:470,r:10,class:'gain'},$('leads3')));

for(let r=0;r<3;r++)for(let c=0;c<3;c++)mk('rect',{x:205+c*55,y:360+r*60,width:35,height:35,fill:'var(--line)'},$('ag'));
P($('ag'),670,380,34,'ink');
store($('shopP'),880);store($('shopY'),1250);
const AUD=[];for(let i=0;i<8;i++)AUD.push(mk('circle',{cy:630,r:8,class:'ink'},$('aud')));

P($('desk5'),270,430,36,'ink');
const CE=[];for(let i=0;i<100;i++)CE.push(mk('rect',{x:520+(i%10)*36,y:230+Math.floor(i/10)*36,width:30,height:30,rx:5},$('grid5')));
const AC=[0,1,2].map(i=>{const x=520+i*320,g=mk('g',{},$('acts'));
  mk('rect',{x:x,y:650,width:300,height:150,rx:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  T(g,x+150,780,20,['100 MESSAGES','100 MINUTES','$100 OF ADS'][i],MA);
  if(i==0)env(g,x+120,680,60,42);
  if(i==1){mk('circle',{cx:x+150,cy:705,r:30,fill:'none',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:'M'+(x+140)+' 690l24 15-24 15z',class:'gain'},g)}
  if(i==2)T(g,x+150,732,64,'$',{class:'d','text-anchor':'middle',style:'fill:var(--gain)'});return g});

mk('path',{d:starD(1420,595,30),class:'gain','fill-opacity':.6},$('shinyG'));

const FR7=[];for(let i=0;i<7;i++){const a=i*2*Math.PI/7;FR7.push(mk('circle',{cx:640+75*Math.cos(a),cy:400+75*Math.sin(a),r:11,class:'ink'},$('fr7')))}
const MT=[950,1100,1250,1400].map(x=>{const g=mk('g',{},$('mtr'));mk('rect',{x:x-10,y:560,width:20,height:180,class:'ink'},g);mk('circle',{cx:x,cy:530,r:60,class:'gain'},g);return g});

const CK8=[];for(let i=0;i<5;i++){const y=320+i*62;mk('rect',{x:1210,y:y-20,width:28,height:28,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':4},$('cl8'));
  mk('path',{d:'M1260 '+(y-6)+'h150',class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('cl8'));
  CK8.push(mk('path',{d:'M1214 '+(y-8)+'l8 9l16-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('cl8')))}