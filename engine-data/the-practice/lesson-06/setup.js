const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const SPK=[[230,300],[555,350],[240,640],[550,610]].map(([x,y])=>mk('path',{d:'M'+x+' '+(y-16)+'v32M'+(x-16)+' '+y+'h32',class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('spark')));
[1250,1340,1430].forEach(x=>{fig($('crowd1'),x,430,22,'ink');const q=mk('text',{x:x,y:390,class:'d','font-size':40,'text-anchor':'middle'},$('crowd1'));q.textContent='?'});
fig($('amP'),300,450,30,'ink');fig($('proP'),1000,450,30,'gain');
const RAIN=[];for(let i=0;i<4;i++)RAIN.push(mk('path',{d:'M'+(1100+i*34)+' 380l-12 60',class:'s-muted','stroke-width':4,'stroke-dasharray':'10 14','stroke-linecap':'round'},$('rain')));
const STK=[];for(let i=0;i<6;i++)STK.push(mk('rect',{x:1360,y:516-i*50,width:80,height:44,rx:6,class:'gain'},$('stk')));
for(let r=0;r<5;r++)for(let c=0;c<7;c++)mk('circle',{cx:190+c*60,cy:340+r*60,r:8,fill:'var(--line)'},$('calg'));
for(let i=0;i<7;i++)mk('circle',{cx:720+i*80,cy:668,r:10,class:'s-line',fill:'none','stroke-width':4},$('rol'));
const TH=[],TL=[];for(let i=0;i<60;i++){const h=(i*37+3)%7;TH.push(h<2?0:h>4?2:1);TL.push(mk('rect',{x:640+(i%12)*70,y:240+Math.floor(i/12)*70,width:56,height:56,rx:8,fill:'var(--ink)',opacity:0},$('tiles')))}
for(let i=0,x=140;x<=1460;x+=40,i++)mk('path',{d:'M'+x+' 210v'+(i%5?18:36),class:'s-ink','stroke-width':4},$('ticks'));
const BR=['SKILL','CARE','EFFORT'].map((s,i)=>{const x=160+i*140;mk('rect',{x:x,y:360,width:80,height:280,rx:10,class:'s-line',fill:'none','stroke-width':4},$('bars'));
  const tx=mk('text',{x:x+40,y:680,class:'m','font-size':20,'text-anchor':'middle'},$('bars'));tx.textContent=s;return mk('rect',{x:x,y:640,width:80,height:0,rx:10,class:'gain'},$('bars'))});
const MO=[];for(let i=0;i<30;i++)MO.push(mk('rect',{x:690+(i%6)*56,y:330+Math.floor(i/6)*56,width:46,height:46,rx:6,fill:'var(--loss)','fill-opacity':.5,opacity:0},$('mong')));
for(let r=0;r<4;r++)for(let c=0;c<5;c++)mk('circle',{cx:660+c*70,cy:370+r*60,r:8,fill:'var(--line)'},$('mcal'));
const NL=[300,260,200].map((w,i)=>mk('rect',{x:1100,y:400+i*60,width:0,height:14,rx:7,fill:'var(--ink)'},$('nl')));