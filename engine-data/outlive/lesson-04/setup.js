const R=n=>n.toFixed(1);
const RD=(x,y,s,ph)=>{const S=Math.sin,sx=x+10*s,sy=y-80*s;let d='M'+x+' '+y+'L'+sx+' '+sy;
[0,Math.PI].forEach(k=>{const a=ph+k;d+='M'+x+' '+y+'L'+R(x+30*s*S(a))+' '+R(y+52*s)+'L'+R(x+45*s*S(a)-14*s)+' '+R(y+100*s-16*s*Math.max(0,Math.cos(a)));
d+='M'+sx+' '+sy+'L'+R(sx-26*s*S(a))+' '+R(sy+36*s)+'L'+R(sx-26*s*S(a)+26*s)+' '+R(sy+40*s)});return d};
const BR=[380,280,210,160,120].map((h,i)=>mk('rect',{x:720+i*150,y:720-h,width:110,height:h,rx:6,fill:i?'var(--ink)':'var(--loss)'},$('bars')));
['LEAST FIT','BELOW AVG','ABOVE AVG','HIGH','ELITE'].forEach((s,i)=>{mk('text',{x:260+i*200,y:744-i*80,'font-size':18,'text-anchor':'middle',class:'m'},$('stairs')).textContent=s});
const MP=[[-80,-60,30],[60,-90,-20],[95,30,40],[-30,75,-10],[-110,40,60],[15,-5,10]],MI=MP.map(q=>{const g=mk('g',{},$('mito'));mk('ellipse',{rx:44,ry:22,class:'gain'},g);mk('path',{d:'M-28 0q7-12 14 0t14 0t14 0',fill:'none',stroke:'var(--stage)','stroke-width':4},g);return g});
const BK=[0,1,2,3].map(i=>{const g=mk('g',{},$('blk'));mk('rect',{x:1190+i*72,y:560,width:60,height:60,rx:10,class:'gain'},g);mk('text',{x:1220+i*72,y:599,'font-size':24,'text-anchor':'middle',class:'d5',style:'fill:var(--on-gain)'},g).textContent='45';return g});
const IV=[];for(let i=0;i<6;i++){const x=540+i*150;IV.push(mk('rect',{x:x,y:340,width:70,height:300,rx:6,fill:i<4?'var(--gain)':'none',stroke:'var(--gain)','stroke-width':i<4?0:4,'stroke-dasharray':'10 8'},$('ivs')));IV.push(mk('rect',{x:x+75,y:550,width:70,height:90,rx:6,fill:'var(--line)'},$('ivs')))}
const DY=[...'MTWTFSS'];
DY.forEach((d,i)=>{const x=540+i*130,on=i==3;mk('rect',{x:x,y:720,width:110,height:90,rx:12,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--line)','stroke-width':4},$('cal'));mk('text',{x:x+55,y:776,'font-size':28,'text-anchor':'middle',class:'d5',style:on?'fill:var(--on-gain)':''},$('cal')).textContent=d});
const SH='M0 0h40l12 14 30 8q14 4 14 18v8H0z',TY='zzhzzrz',TL=DY.map((d,i)=>{const x=120+i*190,c=TY[i],h=c=='h',g=mk('g',{},$('week'));
mk('rect',{x:x,y:240,width:170,height:150,rx:16,fill:h?'var(--gain)':'var(--stage)',stroke:h?'var(--gain)':'var(--ink)','stroke-width':4},g);
mk('text',{x:x+20,y:274,'font-size':20,class:'m',style:h?'fill:var(--on-gain)':''},g).textContent=d;
if(c=='z'){mk('path',{d:SH,transform:'translate('+(x+37)+' 292)',fill:'var(--gain)'},g);mk('text',{x:x+85,y:372,'font-size':18,'text-anchor':'middle',class:'m'},g).textContent='ZONE 2'}
else mk('text',{x:x+85,y:345,'font-size':h?36:20,'text-anchor':'middle',class:h?'d':'m',style:h?'fill:var(--on-gain)':''},g).textContent=h?'HARD':'REST';return g});
const CY=f=>732-262*(Math.exp(3*f)-1)/(Math.exp(3)-1);let cd='';for(let i=0;i<=40;i++){const f=i/40;cd+=(i?'L':'M')+R(160+1280*f)+' '+R(CY(f))}$('cv').setAttribute('d',cd);
const DF=[.2,.35,.5,.65,.8,.95],DT=DF.map(f=>mk('circle',{cx:R(160+1280*f),cy:R(CY(f)),r:11,class:'gain',stroke:'var(--stage)','stroke-width':4},$('dots')));
const CB=[0,1,2].map(i=>{const g=mk('g',{},$('cal8'));mk('rect',{x:1190+i*90,y:680,width:70,height:110,rx:10,class:'gain'},g);mk('text',{x:1225+i*90,y:745,'font-size':28,'text-anchor':'middle',class:'d5',style:'fill:var(--on-gain)'},g).textContent='1H';return g});