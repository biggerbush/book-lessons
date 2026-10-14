const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const R=(el,u,a,d)=>rise(el,p(u,a,a+(d||.5)));
const walker=$('walker');
person(walker,0,-4.2*14,14,'gain');
person($('climber'),1250,390,18,'loss');
const gear=(cx,cy,r,n,cls)=>{const g=mk('g',{},$('gears'));let d='';const st=2*Math.PI/n;for(let i=0;i<n;i++){const a=i*st;[[r,a],[r+18,a+.15*st],[r+18,a+.45*st],[r,a+.6*st]].forEach((q,j)=>{d+=(i+j?'L':'M')+(cx+q[0]*Math.cos(q[1])).toFixed(1)+' '+(cy+q[0]*Math.sin(q[1])).toFixed(1)})}mk('path',{d:d+'Z',class:cls},g);mk('circle',{cx:cx,cy:cy,r:r*.35,fill:'var(--stage)'},g);return g};
const GA=gear(1020,420,100,12,'ink'),GB=gear(1208,420,70,8,'gain');
person($('push'),340,486,20,'ink');
const BX=[0,1,2,3].map(()=>mk('rect',{x:900,y:576,width:50,height:40,rx:6,class:'gain'},$('boxes')));
const sw=$('swm');mk('ellipse',{cx:0,cy:0,rx:54,ry:14,class:'gain'},sw);mk('circle',{cx:62,cy:-4,r:16,class:'ink'},sw);
const arm=mk('path',{d:'M-30 -6h60',class:'s-ink','stroke-width':8,'stroke-linecap':'round',fill:'none'},sw);
const CP=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('steps2')),x=120+i*280;const r=mk('rect',{x:x,y:610,width:240,height:70,rx:35,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);const tx=mk('text',{x:x+120,y:653,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent='STEP '+(i+1);return [g,r,tx]});
const TL=[];for(let i=0;i<20;i++){const k=i%5,x=800+Math.floor(i/5)*160;TL.push(mk('path',{d:k<4?'M'+(x+k*26)+' 310v100':'M'+(x-12)+' 395L'+(x+90)+' 325',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},$('tally')))}
const YR=[];for(let i=0;i<14;i++){const x=120+i*94,g=mk('g',{},$('yrs'));if(i<7){mk('rect',{x:x,y:600,width:80,height:70,rx:10,class:'gain'},g);mk('path',{d:'M'+(x+40)+' 660v-40m0 14l-12-10m12 10l12-10m-12 12l-12-10m12 10l12-10',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round',fill:'none'},g)}else{mk('rect',{x:x,y:600,width:80,height:70,rx:10,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);mk('path',{d:'M'+(x+20)+' 615l18 20-10 10 18 18',fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-linecap':'round'},g)}YR.push(g)}
const PP=[1090,1170,1250].map(x=>{const g=mk('g',{},$('ppl'));person(g,x,400,22,'ink');return g});
person($('kid'),980,360,26,'gain');
const ST=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('stp'));mk('rect',{x:1080+i*80,y:660-(i+1)*70,width:76,height:(i+1)*70,rx:6,class:'gain'},g);return g});
const LY=[560,500,440,380],LV=LY.map((y,i)=>{const cx=340+(i%2?-30:30);return mk('ellipse',{cx:cx,cy:y,rx:30,ry:12,class:'gain',transform:'rotate('+(i%2?30:-30)+' '+cx+' '+y+')'},$('leaves'))});
// nine small ascending steps: TODAY (x 740) up to YOUR NORMAL (top of last step, x 1316-1380, y 352)
const NS=9,SB=[];for(let i=0;i<NS;i++)SB.push(mk('rect',{x:740+i*72,y:640-i*36,width:64,height:40+i*36,rx:6,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},$('dots')));
const me=mk('circle',{r:14,class:'ink',cx:772,cy:622},$('dots'));
const CAL=[],TK=[];'MTWTFSS'.split('').forEach((d,i)=>{const x=136+i*150,g=mk('g',{},$('cal'));mk('text',{x:x+65,y:592,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent=d;mk('rect',{x:x,y:610,width:130,height:140,rx:12,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);mk('rect',{x:x+12,y:622,width:106,height:50,rx:8,class:'gain'},g);mk('rect',{x:x+12,y:690,width:106,height:44,rx:8,fill:'none',stroke:'var(--gain)','stroke-width':3,'stroke-dasharray':'6 6'},g);TK.push(mk('path',{d:'M'+(x+48)+' 646l12 12 24-24',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g));CAL.push(g)});