const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const T=(g,x,y,s,c,str,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:c},a||{}),g);e.textContent=str;return e};
const gear=(g,r)=>{mk('circle',{r:r,fill:'none',stroke:'var(--gain)','stroke-width':r*.5,'stroke-dasharray':(r*.33).toFixed(1)+' '+(r*.33).toFixed(1)},g);mk('circle',{r:r*.8,class:'gain'},g);mk('circle',{r:r*.3,fill:'var(--stage)'},g)};
const TB=[];[[[1203,62],[1269,62],[1335,62]],[[1203,29],[1236,62],[1302,62],[1368,29]],[[1203,62],[1269,62],[1335,62]]].forEach((row,r)=>row.forEach(b=>TB.push(mk('rect',{x:b[0],y:300+r*34,width:b[1],height:30,rx:3,class:'loss'},$('tbr')))));
fig($('smartP'),260,420,36,'ink');
const BR=['CYNICISM','LAZINESS','BAD HABITS','ARROGANCE'].map((s,i)=>{const y=290+i*96,g=mk('g',{},$('wall')),f=mk('g',{},$('fixes'));
  mk('rect',{x:640,y:y,width:320,height:84,rx:6,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':6},g);T(g,800,y+51,26,'m',s,{'text-anchor':'middle',style:'fill:var(--loss)'});
  mk('circle',{cx:1000,cy:y+42,r:24,class:'gain'},f);mk('path',{d:'M988 '+(y+42)+'l8 9 16-18',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},f);return [g,f]});
const WK=mk('g',{},$('walker'));
mk('circle',{cx:0,cy:640,r:22,fill:'var(--gain)',style:'fill:var(--gain)'},WK);
mk('path',{d:'M-33 732v-29a33 33 0 0 1 66 0v29z',fill:'var(--gain)',style:'fill:var(--gain)'},WK);
T(WK,0,604,22,'m','OPPORTUNITY',{'text-anchor':'middle',style:'fill:var(--gain);font-weight:700'});
const RW=[0,1,2,3,4].map(i=>{const y=330+i*70;mk('rect',{x:630,y:y-7,width:200-(i%2)*50,height:14,rx:7,fill:'var(--line)'},$('rows'));mk('rect',{x:860,y:y-14,width:60,height:28,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':3},$('rows'));return mk('circle',{cx:960,cy:y,r:14,fill:'var(--line)'},$('rows'))});
fig($('critP'),280,430,36,'ink');fig($('anlP'),1320,430,36,'gain');
fig($('busyP'),260,400,36,'ink');
let sp='';for(let i=0;i<16;i++){const a=i*Math.PI/8,r=i%2?16:42;sp+=(260+r*Math.sin(a)).toFixed(0)+','+(300-r*Math.cos(a)).toFixed(0)+' '}mk('polygon',{points:sp,class:'gain'},$('spark'));
const CAL=[];for(let i=0;i<30;i++){const x=520+(i%5)*104,y=290+Math.floor(i/5)*60;mk('rect',{x:x,y:y,width:104,height:60,fill:'none',stroke:'var(--line)','stroke-width':3},$('cal'));CAL.push(mk('rect',{x:x+8,y:y+8,width:88,height:44,rx:6,class:'ink'},$('cal')))}
gear($('gear'),44);gear($('gear2'),50);
const RY=[[1400,380],[1435,470],[1400,560]].map(q=>{mk('circle',{cx:q[0],cy:q[1],r:12,class:'gain'},$('rays'));return mk('path',{d:'M1275 470L'+q[0]+' '+q[1],fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},$('rays'))});
const RY8=[[1420,430],[1450,520],[1420,610]].map(q=>{const l=mk('path',{d:'M1298 520L'+q[0]+' '+q[1],fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},$('ry8'));mk('circle',{cx:q[0],cy:q[1],r:12,class:'gain'},$('ry8'));return l});
const SH=[];for(let i=0;i<8;i++){const g=mk('g',{},$('pile')),y=618-i*30,x=1140+(i%2)*10;mk('rect',{x:x,y:y,width:210,height:24,rx:4,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);mk('path',{d:'M'+(x+20)+' '+(y+12)+'h80',stroke:'var(--loss)','stroke-width':3},g);SH.push(g)}