const fig=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)};
const T=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
const RC=(g,a)=>mk('path',Object.assign({fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},a),g);
[1330,1390,1450].forEach(x=>fig($('fan0'),x,540,16,'var(--muted)'));
// cycle nodes; labels sit OUTSIDE the ring so the runner never crosses them
const ND=[['ASPIRING',520,300,520,236,'middle'],['SUCCEEDING',693,600,754,608,'start'],['FAILING',347,600,286,608,'end']].map(q=>{const g=mk('g',{},$('nodes'));mk('circle',{cx:q[1],cy:q[2],r:44,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);mk('circle',{cx:q[1],cy:q[2],r:16,fill:'var(--loss)'},g);T(g,q[0],{x:q[3],y:q[4],class:'m','font-size':24,'text-anchor':q[5]});return g});
const MP=[[900,760],[1040,440],[1120,580],[1260,360],[1340,520],[1460,300]];
const along=k=>{const n=MP.length-1,f=cl(k)*n,i=Math.min(n-1,Math.floor(f)),r=f-i;return [MP[i][0]+(MP[i+1][0]-MP[i][0])*r,MP[i][1]+(MP[i+1][1]-MP[i][1])*r]};
const CH2=['APPLAUSE','PROMOTIONS','WINS','FOLLOWERS'].map((s,i)=>{const x=120+(i%2)*290,y=250+Math.floor(i/2)*80,g=mk('g',{},$('chips2'));mk('rect',{x:x,y:y,width:270,height:60,rx:30,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);T(g,s,{x:x+135,y:y+39,class:'m','font-size':22,'text-anchor':'middle',style:'fill:var(--ink)'});return g});
const CR2=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('crowd2'));fig(g,170+i*100,560,22,'var(--ink)');return g});
fig($('coach3'),300,540,28,'var(--ink)');
for(let x=784;x<=1440;x+=48){mk('rect',{x:x,y:252,width:24,height:14,rx:3,fill:'var(--line)'},$('holes'));mk('rect',{x:x,y:614,width:24,height:14,rx:3,fill:'var(--line)'},$('holes'))}
for(let i=0;i<5;i++){const x=880+i*120;mk('circle',{cx:x,cy:450,r:22,fill:'none',stroke:'var(--ink)','stroke-width':5},$('play'));RC($('play'),{d:'M'+(x+44)+' 524l32 32m0-32l-32 32',stroke:'var(--ink)','stroke-width':5})}
const ER=[[1000,450],[1180,540],[1360,450]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:44,fill:'none',stroke:'var(--loss)','stroke-width':6},$('errs')));
const ICK=[];[430,510,590].forEach(y=>{mk('circle',{cx:230,cy:y,r:18,class:'ink'},$('oc'));RC($('oc'),{d:'M270 '+y+'H640',stroke:'var(--muted)','stroke-width':8,'stroke-dasharray':'2 18'});
  mk('rect',{x:940,y:y-20,width:40,height:40,rx:8,fill:'none',stroke:'var(--gain)','stroke-width':5},$('ic'));RC($('ic'),{d:'M1000 '+y+'H1380',stroke:'var(--line)','stroke-width':8});
  ICK.push(RC($('ic'),{d:'M948 '+y+'l9 9 17-20',stroke:'var(--gain)','stroke-width':6}))});
fig($('buf'),800,440,20,'var(--ink)');
fig($('foes'),1060,300,24,'var(--loss)');[1120,1200,1280].forEach(x=>fig($('foes'),x,550,20,'var(--muted)'));
const DK=['M','T','W','T','F','S','S'].map((s,i)=>{const x=120+i*190;mk('rect',{x:x,y:240,width:160,height:110,rx:12,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},$('days'));T($('days'),s,{x:x+20,y:278,class:'m','font-size':20});return RC($('days'),{d:'M'+(x+56)+' 306l20 20 36-42',stroke:'var(--gain)','stroke-width':8})});
const RY=[690,750,810],RL=[380,320,350],LN=RY.map((y,i)=>{mk('rect',{x:900,y:y-28,width:36,height:36,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':5},$('rows8'));return RC($('rows8'),{d:'M960 '+(y-10)+'H961',stroke:'var(--gain)','stroke-width':8})});
const BK=RY.map(y=>RC($('rows8'),{d:'M906 '+(y-12)+'l8 8 16-18',stroke:'var(--gain)','stroke-width':6}));