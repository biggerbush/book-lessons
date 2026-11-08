const person=(g,x,y,r,cls)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},e);return e};
const note=(g,x,y,c)=>{const e=mk('g',{},g);mk('ellipse',{cx:x,cy:y,rx:13,ry:10,fill:c,transform:'rotate(-20 '+x+' '+y+')'},e);mk('path',{d:'M'+(x+11)+' '+(y-3)+'V'+(y-46)+'l16 10',fill:'none',stroke:c,'stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},e);return e};
const cloud=(g,cx,cy,rx,ry,b)=>{mk('ellipse',{cx:cx,cy:cy,rx:rx,ry:ry,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);b.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g))};
const tx=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};
const GN='var(--gain)';

const T0=$('t0g');person(T0,1110,470,34,'ink');person(T0,1390,470,34,'ink');
mk('rect',{x:1030,y:622,width:440,height:14,class:'ink'},T0);
mk('path',{d:'M1060 636v110M1440 636v110',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},T0);
const ARM=mk('path',{class:'s-ink','stroke-width':12,'stroke-linecap':'round',fill:'none'},T0);
const HAND=mk('circle',{cx:1205,r:13,class:'ink'},T0);
const N0=[1070,1120,1170].map(x=>note($('t0n'),x,410,GN));

person($('s1a'),300,440,40,'ink');mk('rect',{x:180,y:620,width:540,height:14,class:'ink'},$('s1a'));
person($('s1b'),1160,440,40,'ink');
const KB=[40,40,70,70,40,90,40,70].map((h,i)=>mk('rect',{x:400+i*38,y:600-h,width:22,height:h,rx:6,class:'gain'},$('s1k')));

cloud($('s3a'),400,320,220,100,[[392,446,14],[386,482,9]]);person($('s3a'),380,560,44,'gain');
const N3=[270,340,410,480,550].map((x,i)=>note($('s3a'),x,i%2?340:370,GN));
cloud($('s3b'),1220,320,220,100,[[1212,446,14],[1206,482,9]]);person($('s3b'),1220,560,44,'ink');
const KM=[[1110,330],[1160,300],[1190,355],[1260,315],[1300,350],[1340,300]].map(q=>mk('path',{d:'M'+q[0]+' '+(q[1]-18)+'v36',class:'s-ink','stroke-width':9,'stroke-linecap':'round'},$('s3b')));
const DT=[];for(let i=0;i<8;i++)DT.push(mk('circle',{cy:690,r:8,class:'ink'},$('s3dots')));

person($('s4g'),420,430,40,'ink');person($('s4k'),1180,430,40,'gain');note($('s4k'),1340,400,GN);

cloud($('s5c'),330,230,170,64,[[318,308,10],[310,328,6]]);
[20,35,50,65].forEach((h,i)=>mk('rect',{x:240+i*46,y:270-h,width:32,height:h,class:'gain'},$('s5c')));
mk('path',{d:'M236 250L420 196',class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('s5c'));
person($('s5a'),300,380,36,'ink');mk('path',{d:'M220 500h160l-16 110h-128z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},$('s5a'));
[1100,1210,1320,1430].forEach(x=>{person($('s5s'),x,420,26,'ink');tx($('s5q'),{x:x,y:380,'font-size':40,'text-anchor':'middle',class:'d',style:'fill:var(--muted)'},'?')});
const JC=['DOCTORS','TEACHERS','ENGINEERS'].map((s,i)=>{const x=120+i*460,g=mk('g',{},$('s5j'));
  mk('rect',{x:x,y:630,width:440,height:130,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  tx(g,{x:x+30,y:680,'font-size':24,class:'m'},s);
  let d='';for(let k=0;k<2;k++){d+='M'+(x+30)+' '+(712+k*26);for(let j=0;j<9;j++)d+='q20 '+(j%2?12:-12)+' 40 0'}
  mk('path',{d:d,fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},g);return g});

const TL=['SIMPLE','UNEXPECTED','CONCRETE','CREDIBLE','EMOTIONAL','STORIES'].map((w,i)=>{const x=120+i*200,g=mk('g',{},$('s6t'));
  mk('rect',{x:x,y:560,width:180,height:120,rx:16,class:'gain'},g);
  tx(g,{x:x+90,y:650,'font-size':80,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},w[0]);
  tx(g,{x:x+90,y:720,'font-size':20,'text-anchor':'middle',class:'m'},w);return g});

person($('s7me'),340,400,26,'ink');note($('s7n'),740,440,GN);note($('s8n'),1380,770,GN);