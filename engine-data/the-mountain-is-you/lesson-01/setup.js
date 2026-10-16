const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const T=(g,x,y,s,f,c,a,col)=>{const e=mk('text',{x:x,y:y,'font-size':f,class:c},g);if(a)e.setAttribute('text-anchor',a);if(col)e.style.fill=col;e.textContent=s;return e};
P($('hk'),930,680,18,'ink');
const MK=[];for(let r=0;r<5;r++)for(let c=0;c<7;c++){const a={x:136+c*54,y:316+r*74,width:44,height:60,rx:6};mk('rect',Object.assign({fill:'none',stroke:'var(--line)','stroke-width':3},a),$('cells'));if(c===3)MK.push(mk('rect',Object.assign({fill:'var(--loss)'},a),$('cells')))}
const RW=[[260,'NEW JOB','SAME BURNOUT'],[520,'NEW RELATIONSHIP','SAME ARGUMENTS']].map((q,i)=>{const y=q[0],g=mk('g',{},$('rows'));T(g,600,y+30,q[1],22,'m');
  if(i===0){mk('rect',{x:650,y:y+50,width:120,height:130,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);for(let k=0;k<6;k++)mk('rect',{x:672+(k%2)*48,y:y+70+Math.floor(k/2)*36,width:28,height:22,class:'ink'},g)}
  else{P(g,670,y+80,16,'ink');P(g,750,y+80,16,'ink')}
  mk('path',{d:'M820 '+(y+120)+'H1070m-20-20 20 20-20 20',fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  let d='M1120 '+(y+100)+'h320M1120 '+(y+140)+'h320';for(let k=0;k<3;k++)for(let j=(k%2?40:80);j<320;j+=80)d+='M'+(1120+j)+' '+(y+60+k*40)+'v40';
  mk('rect',{x:1120,y:y+60,width:320,height:120,fill:'var(--loss)','fill-opacity':.15,stroke:'var(--loss)','stroke-width':5},g);mk('path',{d:d,stroke:'var(--loss)','stroke-width':4},g);
  T(g,1280,y+212,q[2],20,'m','middle','var(--loss)');return g});
const LN=[['HABITS',-90],['FEARS',30],['REACTIONS',150]].map(q=>{const a=q[1]*Math.PI/180,x=980+170*Math.cos(a),y=520+170*Math.sin(a),g=mk('g',{},$('ln'));
  mk('rect',{x:x-100,y:y-30,width:200,height:60,rx:30,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,x,y+7,q[0],20,'m','middle','var(--ink)');return g});
P($('tp'),800,290,22,'ink');
const JC=[];for(let i=0;i<6;i++)JC.push(mk('circle',{cx:215+(i%2)*50,cy:690-Math.floor(i/2)*44,r:18,class:'gain'},$('jc')));
// fog clouds inside the mountain, raised so the base orbit stays clear of the labels
const FG=[['HABITS',515,180],['FEARS',595,230],['REACTIONS',675,280]].map(q=>{const g=mk('g',{},$('fg')),cx=1180,cy=q[1],w=q[2];
  mk('circle',{cx:cx-w/4,cy:cy-18,r:22,fill:'var(--line)'},g);mk('circle',{cx:cx+w/6,cy:cy-22,r:28,fill:'var(--line)'},g);
  mk('rect',{x:cx-w/2,y:cy-18,width:w,height:36,rx:18,fill:'var(--line)'},g);T(g,cx,cy+7,q[0],20,'m','middle','var(--ink)');return g});
P($('bper'),240,440,26,'ink');
const BL=['BOSS','PARTNER','BAD LUCK'].map((s,i)=>{const y=305+i*160,g=mk('g',{},$('blm'));
  mk('path',{d:'M310 490L540 '+y,stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':'10 10'},g);
  mk('rect',{x:560,y:y-32,width:260,height:64,rx:32,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,690,y+8,s,22,'m','middle','var(--ink)');return g});
const TP=[[700,800],[1300,690],[860,570],[1180,470],[1010,410]],TN=TP.length-1,SL=[0];
for(let i=1;i<=TN;i++)SL.push(SL[i-1]+Math.hypot(TP[i][0]-TP[i-1][0],TP[i][1]-TP[i-1][1]));
const at=k=>{const d=k*SL[TN];let i=1;while(i<TN&&SL[i]<d)i++;const f=(d-SL[i-1])/(SL[i]-SL[i-1]);return [TP[i-1][0]+(TP[i][0]-TP[i-1][0])*f,TP[i-1][1]+(TP[i][1]-TP[i-1][1])*f]};
const MKR=[1,2,3].map(i=>[mk('circle',{cx:TP[i][0],cy:TP[i][1],r:10},$('mkr')),SL[i]/SL[TN]]);
P($('hk6'),0,-52,12,'ink');
P($('cmp'),220,540,30,'ink');P($('cmp'),440,540,30,'gain');
for(let i=0;i<6;i++)mk('circle',{cx:220,cy:318+i*48,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rg'));
let sd='M1100 590';for(let i=0;i<5;i++)sd+='h70'+(i<4?'v-70':'');$('st').setAttribute('d',sd);
const FP=[0,1,2,3,4].map(i=>mk('ellipse',{cx:1135+70*i,cy:575-70*i,rx:10,ry:15,class:'gain'},$('fp')));