const bust=(g,x,y,r,cls)=>mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);
const who=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);bust(g,x,y,r,cls)};
const ln=(d,g,c,w,dash)=>mk('path',{d:d,fill:'none',stroke:'var(--'+c+')','stroke-width':w,'stroke-linecap':'round','stroke-dasharray':dash||'none'},g);
const tx=(g,x,y,s,cls,str)=>{const e=mk('text',{x:x,y:y,'font-size':s,class:cls},g);e.textContent=str;return e};
const bot=(g,x,y,r,cls)=>{ln('M'+x+' '+(y-r)+'v'+(-r*.5),g,cls,Math.max(4,r*.12));mk('circle',{cx:x,cy:y-r*1.6,r:r*.18,class:cls},g);
  mk('rect',{x:x-r,y:y-r,width:2*r,height:2*r,rx:r*.3,class:cls},g);[-1,1].forEach(s=>mk('circle',{cx:x+s*r*.4,cy:y-r*.1,r:r*.17,fill:'var(--stage)'},g));
  ln('M'+(x-r*.4)+' '+(y+r*.45)+'h'+(r*.8),g,'stage',r*.12)};

[1100,1190,1280].forEach(x=>who($('hum'),x,440,26,'ink'));
ln('M1100 412Q1145 360 1190 412M1190 412Q1235 360 1280 412',$('hum'),'line',4,'8 8');
ln('M1280 412Q1330 350 1370 405',$('rob'),'gain',4,'8 8');ln('M1446 440V560',$('rob'),'muted',8);
bust($('rob'),1400,440,26,'gain');bot($('rob'),1400,440,30,'gain');

for(let i=0;i<3;i++)mk('rect',{x:596+i*10,y:430-i*16,width:110,height:76,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('copies'));
ln('M636 420h70M636 444h70M636 468h40',$('copies'),'line',6);
bot($('aibot'),1160,430,64,'gain');
const RW=[0,1].map(s=>['COPY A BOOK','WRITE A BOOK','CHOOSE WHAT TO PRINT'].map((w,i)=>{const x0=120+s*720,y=590+i*60,g=mk('g',{},$('rw'+s));
  tx(g,x0+30,y,22,'m',w);const mx=x0+590,my=y-8;
  if(s||!i)ln('M'+(mx-16)+' '+my+'l10 12 22-26',g,'gain',7);else ln('M'+(mx-12)+' '+(my-12)+'l24 24m0-24l-24 24',g,'loss',7);return g}));

for(let i=0;i<9;i++){ln('M188 '+(258+i*50)+'H588',$('grid'),'ink',2);ln('M'+(188+i*50)+' 258V658',$('grid'),'ink',2)}
const ST=[[2,2,0],[6,2,1],[2,6,1],[6,6,0],[3,3,1],[5,5,0],[4,2,0],[2,4,1],[5,3,1],[3,5,0]].map(q=>mk('circle',{cx:188+q[0]*50,cy:258+q[1]*50,r:20,fill:q[2]?'var(--stage)':'var(--ink)',stroke:'var(--ink)','stroke-width':4},$('stones')));
[760,840,920].forEach(x=>who($('expp'),x,290,20,'ink'));

const HO=[];for(let i=0;i<5;i++){const y=290+i*98,g=$('posts');
  mk('rect',{x:205,y:y,width:250,height:80,rx:12,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  if(i===1||i===2||i===4)HO.push(mk('rect',{x:205,y:y,width:250,height:80,rx:12,class:'loss',opacity:0},g));
  mk('circle',{cx:232,cy:y+28,r:12,fill:'var(--muted)'},g);ln('M255 '+(y+28)+'h150M220 '+(y+56)+'h200',g,'line',6)}

who($('engp'),200,360,26,'ink');
const DT=[];for(let j=0;j<4;j++)for(let i=0;i<24;i++){const x=160+i*55,y=660+j*48;DT.push([mk('circle',{cx:x,cy:y,r:9,fill:'var(--line)'},$('dots')),Math.hypot(x-160,y-708)])}

bot($('lbot'),1000,520,60,'ink');
// pill boxes on the repair loop, used to keep the travelling dot clear of them
const PILLS=[[870,290,260,60],[1043,590,260,60],[697,590,260,60]];
const pillClear=(x,y)=>{let d=1e9;PILLS.forEach(b=>{const dx=Math.max(b[0]-x,0,x-(b[0]+b[2])),dy=Math.max(b[1]-y,0,y-(b[1]+b[3]));d=Math.min(d,Math.hypot(dx,dy))});return cl((d-22)/20)};

bust($('btr'),360,410,50,'ink');bot($('btr'),360,400,70,'ink');
const BB=[];for(let i=0;i<10;i++){const x=120+i*136,y=i%2?770:716,g=mk('g',{},$('conv'));
  mk('rect',{x:x,y:y,width:116,height:46,rx:16,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  [38,58,78].forEach(d=>mk('circle',{cx:x+d,cy:y+23,r:5,fill:'var(--muted)'},g));BB.push(g)}

const PP=[1170,1273,1376].map(x=>{const g=mk('g',{},$('ppl'));who(g,x,380,22,'gain');return g});
bot($('magb'),1300,440,40,'gain');