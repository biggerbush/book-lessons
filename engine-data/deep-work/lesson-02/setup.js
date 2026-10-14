const P=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const EN=(g,x,y,w,h)=>{mk('rect',{x:x,y:y,width:w,height:h,rx:5,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+x+' '+y+'L'+(x+w/2)+' '+(y+h*.6)+'L'+(x+w)+' '+y,fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g)};
const TX=(g,x,y,s,a)=>{const e=mk('text',a,g);e.setAttribute('x',x);e.setAttribute('y',y);e.textContent=s;return e};
const TE=[];for(let i=0;i<8;i++){const g=mk('g',{},$('tenv'));EN(g,0,0,90,60);TE.push([g,1180+(i%3)*85,630-Math.floor(i/3)*40])}
const DK=[200,340,480,620].map(x=>{const g=mk('g',{},$('desks'));P(g,x,430,24,'ink');mk('rect',{x:x-55,y:535,width:110,height:12,rx:4,class:'ink'},g);mk('rect',{x:x-30,y:497,width:60,height:38,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  return [g,TX($('qs'),x,385,'?',{'font-size':56,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'})]});
const BR=[120,200,160,260,220].map((h,i)=>mk('rect',{x:880+i*110,y:640-h,width:70,height:h,rx:6,class:'ink'},$('bars')));
const RG=[110,150,190].map(r=>mk('ellipse',{cx:1140,cy:450,rx:r,ry:r*.36,fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-dasharray':'14 12'},$('hole')));
const HC=mk('circle',{cx:1140,cy:450,r:0,class:'loss'},$('hole'));
P($('jug'),380,470,30,'ink');mk('path',{d:'M335 545L300 470M425 545L460 470M362 596V690M398 596V690',class:'s-ink','stroke-width':10,'stroke-linecap':'round',fill:'none'},$('jug'));
const BL=[0,1,2].map(()=>mk('circle',{r:20,class:'loss'},$('balls')));
const TL=['Fast email replies','Packed calendars','Constant meetings'].map((s,i)=>{const y=250+i*130,g=mk('g',{},$('tiles'));
  mk('rect',{x:760,y:y,width:720,height:100,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  if(i==0)EN(g,790,y+28,70,46);
  if(i==1){mk('rect',{x:790,y:y+22,width:70,height:58,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},g);for(let k=0;k<6;k++)mk('rect',{x:798+(k%3)*20,y:y+36+Math.floor(k/3)*20,width:14,height:14,class:'loss'},g)}
  if(i==2){P(g,806,y+30,11,'ink');P(g,844,y+30,11,'ink')}
  TX(g,900,y+63,s,{'font-size':38,class:'d5'});return g});
P($('cto'),270,330,36,'ink');mk('rect',{x:150,y:490,width:240,height:14,rx:4,class:'ink'},$('cto'));mk('rect',{x:220,y:444,width:100,height:46,rx:5,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('cto'));
// envelopes in the empty space around the figure: [x, y, slide-in dx, slide-in dy]
const MS=[[140,296,-40,0],[248,214,0,-30],[340,214,30,-30],[140,396,-40,0],[344,402,30,0]];
const ML=MS.map(()=>{const g=mk('g',{},$('mails'));EN(g,0,0,44,30);return g});
const SR=[];for(let r=0;r<5;r++){const y=306+r*60,g=mk('g',{},$('rows'));if(r<4)mk('path',{d:'M560 '+(y+60)+'H1000',stroke:'var(--line)','stroke-width':3},g);
  mk('rect',{x:580,y:y+22,width:60+((r*53)%120),height:16,rx:8,class:'ink'},g);mk('rect',{x:800,y:y+22,width:70+((r*71)%110),height:16,rx:8,class:'gain'},g);SR.push(g)}
const CN=[];for(let s=0;s<4;s++)for(let k=0;k<3+2*s;k++)CN.push(mk('rect',{x:1100+s*95,y:600-k*20,width:80,height:18,rx:9,class:'gain',stroke:'var(--ink)','stroke-width':3},$('coins')));
P($('res'),200,400,30,'ink');
const CS=[480,600,720,840].map(x=>{mk('path',{d:'M'+(x-18)+' 352q18-16 36 0M'+(x-32)+' 338q32-28 64 0',fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-linecap':'round'},$('sig'));return P($('cons'),x,400,28,'ink')});
['MON','TUE','WED','THU','FRI'].forEach((s,i)=>{TX($('cal'),1012+i*104,322,s,{'font-size':20,'text-anchor':'middle',class:'m'});if(i)mk('path',{d:'M'+(960+i*104)+' 340V540',stroke:'var(--line)','stroke-width':3},$('cal'))});
const HP=['Enjoyed work more','Communicated better','Better client work'].map((s,i)=>{const x=120+i*460,g=mk('g',{},$('happy'));mk('circle',{cx:x+26,cy:708,r:26,class:'gain'},g);
  mk('path',{d:'M'+(x+14)+' 708l9 10 17-19',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);TX(g,x+66,720,s,{'font-size':34,class:'d5'});return g});
const SH=[];for(let i=0;i<14;i++)SH.push(mk('rect',{x:140+i*70,y:350,width:56,height:120,rx:8,class:'loss'},$('shal')));
P($('refl'),360,420,44,'ink');
const TG=['INSTANT REPLIES?','EXTRA MEETINGS?','PACKED CALENDAR?'].map((s,i)=>{const y=290+i*100,g=mk('g',{},$('tags'));mk('rect',{x:580,y:y,width:340,height:64,rx:32,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);TX(g,750,y+40,s,{'font-size':22,'text-anchor':'middle',class:'m'});return g});
const TY=[];for(let g=0;g<3;g++)for(let i=0;i<5;i++){const x=1100+g*120;TY.push(mk('path',{d:i<4?'M'+(x+i*20)+' 640V760':'M'+(x-12)+' 730L'+(x+72)+' 670',stroke:i<4?'var(--ink)':'var(--loss)','stroke-width':8,'stroke-linecap':'round'},$('tally')))}