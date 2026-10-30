const P=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const T=(g,x,y,s,fs,c,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:c,'text-anchor':a||'start'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const G=pg=>mk('g',{},pg);
for(let i=0;i<7;i++){const a=(-150+i*20)*Math.PI/180,c=Math.cos(a)*.8,s=Math.sin(a);mk('path',{d:'M'+(1280+200*c).toFixed(1)+' '+(400+200*s).toFixed(1)+'L'+(1280+230*c).toFixed(1)+' '+(400+230*s).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('trays'))}
P($('treader'),1280,600,26,'ink');
const HP=[220,440,660].map((x,i)=>{const g=G($('hp'));P(g,x,430,34,'ink');T(g,x,620,['LEADER','JUDGE','EXPERT'][i],22,'m','middle');return g});
const TG=['lies','bribes','wrong'].map((w,i)=>{const x=220+i*220,g=G($('tags'));mk('rect',{x:x-80,y:306,width:160,height:60,rx:30,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);T(g,x,348,w,30,'d','middle','fill:var(--loss)');return g});
const HY=[250,370,490,610],CP=HY.map(h=>{mk('path',{d:'M600 390L1260 '+(h+50),class:'s-line','stroke-width':4,'stroke-dasharray':'8 10',fill:'none'},$('cpl'));
  mk('path',{d:'M1300 '+(h+30)+'L1340 '+h+'L1380 '+(h+30)+'V'+(h+80)+'H1300Z',class:'s-ink',fill:'var(--stage)','stroke-width':5,'stroke-linejoin':'round'},$('cpl'));
  return mk('rect',{x:-18,y:-13,width:36,height:26,rx:4,class:'ink'},$('cpb'))});
const PK=[0,3,5,8,10],PG=[];for(let i=0;i<12;i++){const x=170+(i%4)*95+(i*37)%20,y=300+Math.floor(i/4)*115+(i*53)%24,r=(i*29)%30-15,g=G($('pile'));
  mk('rect',{x:-40,y:-50,width:80,height:100,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('path',{d:'M-24-24h48M-24 0h48M-24 24h32',stroke:'var(--line)','stroke-width':5,'stroke-linecap':'round'},g);PG.push([g,x,y,r])}
const PPL=[];[680,800,920].forEach(x=>{PPL.push(...P($('schp'),x,300,22,'ink'),...P($('eldp'),x,500,22,'ink'))});
const CD=['A NEW CITY','A NEW CENTURY','A NEW SITUATION'].map((s,i)=>{const y=260+i*160,g=G($('cards'));
  const r=mk('rect',{x:1000,y:y,width:440,height:110,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,1030,y+64,s,24,'m');
  const q=T(g,1410,y+76,'?',56,'d','end','fill:var(--loss)');const l=mk('path',{d:'M840 440L990 '+(y+55),class:'s-line','stroke-width':4,fill:'none','stroke-dasharray':'8 8'},g);return [g,q,l,r]});
P($('rabp'),760,380,36,'ink');
[740,800,860].forEach(x=>P($('nxp'),x,270,14,'ink'));
P($('rdp'),1200,420,36,'ink');
P($('tp'),1050,360,30,'ink');
[[950,510,24],[1150,510,24],[870,650,20],[990,650,20],[1110,650,20],[1230,650,20]].forEach(q=>P($('hr'),q[0],q[1],q[2],'ink'));
P($('spkp'),400,500,30,'ink');
for(let i=0;i<5;i++)mk('circle',{cx:1220,cy:630+i*40,r:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));
// point on the book -> top figure interpretation curve
const QB=k=>{const a=(1-k)*(1-k),b=2*k*(1-k),c=k*k;return [a*490+b*720+c*990,a*500+b*330+c*390]};