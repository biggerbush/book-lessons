const man=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const drw=(el,k)=>{el.style.strokeDasharray='1 1';el.style.strokeDashoffset=(1-k).toFixed(3);el.setAttribute('opacity',k>0?1:0)};
const txt=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const ML='JFMAMJJASOND',MS={class:'m','font-size':20,'text-anchor':'middle'};
const crops=[];for(let i=0;i<5;i++){const y=420+i*45;mk('path',{d:'M1000 '+y+'Q1240 '+(y-24)+' 1480 '+y,fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('field'));
  for(let j=0;j<7;j++){const x=1030+j*70,q=(x-1000)/480,b=y-48*q*(1-q),g=mk('g',{},$('field'));mk('path',{d:'M'+x+' '+b+'v-22',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},g);mk('circle',{cx:x,cy:b-28,r:7,fill:'var(--gain)'},g);crops.push(g)}}
for(let i=0;i<12;i++)txt($('mo1'),233+i*66.7,676,ML[i],MS);
// seedlings on the planting mound: straight stem + two leaves
[270,330,390,450].forEach(x=>{const q=(x-220)/280,y=480-80*q*(1-q),g=mk('g',{},$('pl'));
  mk('path',{d:'M'+x+' '+(y-2)+'V'+(y-40),fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},g);
  mk('path',{d:'M'+x+' '+(y-22)+'q-6-18 -22-20q2 18 22 20z',fill:'var(--gain)',stroke:'var(--gain)','stroke-width':2,'stroke-linejoin':'round'},g);
  mk('path',{d:'M'+x+' '+(y-32)+'q6-18 22-20q-2 18 -22 20z',fill:'var(--gain)',stroke:'var(--gain)','stroke-width':2,'stroke-linejoin':'round'},g)});
for(let i=0;i<5;i++){const x=720+i*40;mk('path',{d:'M'+x+' 490V350',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('hv'));mk('ellipse',{cx:x,cy:330,rx:10,ry:24,fill:'var(--gain)'},$('hv'))}
const FL=[];for(let i=0;i<9;i++)FL.push(mk('circle',{cx:1120+i*30,cy:300,r:5,fill:'var(--muted)'},$('flk')));
const EF=x=>.15+.8*Math.exp(-(((x-360)/120)**2))+.8*Math.exp(-(((x-800)/120)**2));
let dd='';for(let x=160;x<=1440;x+=10)dd+=(x==160?'M':'L')+x+' '+(770-140*EF(x)).toFixed(1);$('eff').setAttribute('d',dd);
man($('fm'),0,0,14,'ink');mk('path',{d:'M-24 -10h48M-13 -10v-12h26v12z',stroke:'var(--gain)',fill:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('fm'));
dd='';for(let x=160;x<=1180;x+=10)dd+=(x==160?'M':'L')+x+' '+(380-45*Math.sin((x-160)/1020*Math.PI*10)).toFixed(1);$('tlW').setAttribute('d',dd);
for(let r=0;r<4;r++)for(let c=0;c<3;c++)mk('rect',{x:680+c*52,y:585+r*44,width:32,height:24,fill:'var(--line)'},$('ofw'));
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1200+78*c).toFixed(1)+' '+(660+78*s).toFixed(1)+'L'+(1200+88*c).toFixed(1)+' '+(660+88*s).toFixed(1),stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},$('ckt'))}
const AL='SONDJFMAMJJA',AH=[170,190,200,150,160,180,190,200,170,60,50,60];
const bars=AH.map((h,i)=>{const cx=176.7+i*113.3;txt($('acM'),cx,290,AL[i],MS);return mk('rect',{x:cx-35,y:740,width:70,height:0,rx:6,fill:i<9?'var(--loss)':'var(--gain)'},$('bars'))});
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M'+(1310+38*Math.cos(a)).toFixed(1)+' '+(590+38*Math.sin(a)).toFixed(1)+'L'+(1310+50*Math.cos(a)).toFixed(1)+' '+(590+50*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('sunR'))}
const CM=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];let jb=[];
const cells=CM.map((s,i)=>{const x=120+(i%4)*186,y=230+Math.floor(i/4)*136,g=mk('g',{},$('cal'));mk('rect',{x:x,y:y,width:170,height:120,rx:12,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);txt(g,x+16,y+32,s,{class:'m','font-size':20});
  const bs=[0,1,2].map(k=>mk('rect',{x:x+16,y:y+50+k*20,width:138-k*34,height:12,rx:6,fill:'var(--loss)'},g));if(i==6)jb=bs;return g});
const SQ=[];[[340,6,2],[490,8,3]].forEach(([y,n,kp])=>{for(let i=0;i<n;i++)SQ.push([mk('rect',{x:940+i*64,y:y,width:50,height:50,rx:10,fill:'var(--loss)'},$('sq5')),i>=kp])});
const WH=[150,170,200,180,150,170],WB=WH.map((h,i)=>mk('rect',{x:120+i*230,y:480-h,width:160,height:h,rx:12,fill:'var(--loss)'},$('wkB')));
const DY=[];for(let i=0;i<20;i++)DY.push(mk('rect',{x:120+i*62+Math.floor(i/5)*24,y:600,width:52,height:52,rx:8,fill:'var(--line)'},$('days')));
dd='';for(let x=160;x<=1440;x+=8)dd+=(x==160?'M':'L')+x+' '+(450-150*Math.sin((x-160)/1280*Math.PI*6)).toFixed(1);$('wv7').setAttribute('d',dd);
[267,694,1121].forEach(x=>mk('circle',{cx:x,cy:300,r:10,fill:'var(--ink)'},$('pd')));
const VD=[480,907,1334].map(x=>mk('circle',{cx:x,cy:600,r:12,fill:'var(--gain)'},$('vd')));
for(let i=0;i<12;i++){const x=143+i*84;mk('rect',{x:x,y:650,width:70,height:50,rx:10,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('yr'));txt($('yr'),x+35,683,ML[i],MS)}