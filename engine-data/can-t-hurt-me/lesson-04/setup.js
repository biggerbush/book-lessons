const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const ck=(g,x,y,r)=>{const c=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:'gain'},c);[[-.4,-.3],[.3,-.35],[.05,.1],[-.3,.4],[.42,.32]].forEach(d=>mk('circle',{cx:x+d[0]*r,cy:y+d[1]*r,r:Math.max(3,r*.11),class:'ink'},c));return c};
const jar=(g,cx,y,w,h)=>{mk('rect',{x:cx-w/2,y:y,width:w,height:h,rx:w*.16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':7},g);mk('rect',{x:cx-w*.34,y:y-12,width:w*.68,height:16,rx:6,class:'ink'},g);return mk('rect',{x:cx-w*.4,y:y-44,width:w*.8,height:30,rx:8,class:'ink'},g)};
const lg=(x,y,a,b,L1,L2)=>{const kx=x+L1*Math.sin(a),ky=y+L1*Math.cos(a);return 'M'+x+' '+y+'L'+kx.toFixed(1)+' '+ky.toFixed(1)+'L'+(kx+L2*Math.sin(b)).toFixed(1)+' '+(ky+L2*Math.cos(b)).toFixed(1)};

const lid0=jar($('tjar'),1300,340,280,300);
[[1230,580],[1300,590],[1370,580],[1265,515],[1340,515]].forEach(q=>ck($('tjar'),q[0],q[1],34));
const tck=ck($('tjar'),0,0,44);

const RL=[0,1,2,3].map(()=>mk('path',{fill:'none',stroke:'var(--ink)','stroke-width':14,'stroke-linecap':'round','stroke-linejoin':'round'},$('run')));
mk('path',{d:'M420 370L400 520',stroke:'var(--ink)','stroke-width':16,'stroke-linecap':'round'},$('run'));
mk('circle',{cx:420,cy:330,r:34,class:'ink'},$('run'));
for(let i=0;i<5;i++){const x=900+i*120;fig($('evr'),x,560,18,'ink');mk('rect',{x:x-26,y:500,width:52,height:26,rx:13,fill:'var(--loss)','fill-opacity':.35},$('evr'))}
ck($('rf'),1340,806,36);

jar($('shf'),420,440,180,160);
[[385,555],[455,555],[420,500]].forEach(q=>ck($('shf'),q[0],q[1],26));
ck($('mc'),880,410,50);
const mv2=ck($('s2mv'),0,0,30);

[120,593,1066].forEach((x,i)=>ck($('ca'+i),x+370,262,22));

const RN4=[];for(let i=0;i<6;i++)RN4.push(mk('path',{d:'M'+(340+i*64)+' 420l-12 50',class:'s-loss','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':'14 14'},$('rain')));
const CH4=['ABUSIVE FATHER','POVERTY','RACISM'].map((s,i)=>{const g=mk('g',{},$('chips4'));mk('rect',{x:820,y:250+i*84,width:380,height:64,rx:32,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);const tx=mk('text',{x:1010,y:290+i*84,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
fig($('boy'),500,560,24,'ink');

const PT=[[120,760],[380,520],[520,600],[800,320]],SG=[];let TOT=0;
for(let i=0;i<3;i++){const l=Math.hypot(PT[i+1][0]-PT[i][0],PT[i+1][1]-PT[i][1]);SG.push(l);TOT+=l}
const FX=[1120,1220,1320],FC=FX.map(()=>ck($('fck'),0,0,26));

const PILE=[[-40,100],[0,100],[40,100],[-20,64],[20,64],[0,28]].map(q=>ck($('rpn'),q[0],q[1],20));

for(let y=270;y<=730;y+=46)mk('circle',{cx:160,cy:y,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spr'));
ck($('bw'),920,400,90);ck($('bw'),1220,430,50);

jar($('j8'),1340,600,200,200).setAttribute('opacity',0);
const dck=ck($('j8'),0,0,40);