const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const env=(g,x,y,w,h)=>{mk('rect',{x:x,y:y,width:w,height:h,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:'M'+x+' '+y+'L'+(x+w/2)+' '+(y+h*.55)+'L'+(x+w)+' '+y,fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);
  mk('circle',{cx:x+w/2,cy:y+h*.55,r:h*.11,fill:'var(--gain)'},g)};
const burst=(g,n,r1,r2)=>{for(let i=0;i<n;i++){const a=i*2*Math.PI/n;mk('path',{d:'M'+(r1*Math.cos(a)).toFixed(1)+' '+(r1*Math.sin(a)).toFixed(1)+'L'+(r2*Math.cos(a)).toFixed(1)+' '+(r2*Math.sin(a)).toFixed(1),stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},g)}};
env($('envb0'),1180,220,280,140); env($('henv3'),1150,300,140,90); env($('envc8'),1200,260,240,150);
fig($('pp1'),510,370,36,'ink'); const WV=$('wvp');
const LK2=[];for(let i=0;i<6;i++)LK2.push(mk('circle',{r:9,class:'loss'},$('lk2')));
fig($('mv2'),0,500,24,'ink');
for(let i=0;i<16;i++){const a=i*Math.PI/8;mk('circle',{cx:(480+200*Math.cos(a)).toFixed(1),cy:(480+200*Math.sin(a)).toFixed(1),r:10,class:'ink'},$('po3'))}
burst($('bu3'),8,22,48); burst($('st6'),8,18,42);
for(let i=0;i<4;i++)mk('rect',{x:1148+i*38,y:420,width:30,height:110,rx:15,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('fg3'));
const RP5=[];for(let i=0;i<3;i++)RP5.push(mk('ellipse',{cx:450,cy:470,fill:'none',stroke:'var(--gain)','stroke-width':4},$('rp5')));
fig($('pp6'),540,470,34,'ink');
for(let i=0;i<8;i++)mk('circle',{cx:1080,cy:265+i*52,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spr6'));