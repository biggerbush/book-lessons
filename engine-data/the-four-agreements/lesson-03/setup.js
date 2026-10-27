const fig=(g,x,y,r,c)=>{const G=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,fill:'var(--'+c+')'},G);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:'var(--'+c+')'},G);return G};
const col=(G,c)=>G.childNodes.forEach(n=>n.setAttribute('fill','var(--'+c+')'));
const dr=(e,k)=>{e.style.strokeDashoffset=1-k;e.style.opacity=k>0?1:0};
const ln=(d,c,w,g)=>mk('path',{d:d,fill:'none',stroke:'var(--'+c+')','stroke-width':w,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g);
for(let i=0;i<4;i++)mk('circle',{cx:140+i*44,cy:690,r:14,fill:i?'var(--line)':'var(--gain)'},$('agd'));
let sp='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?14:34;sp+=(405+r*Math.cos(a)).toFixed(1)+','+(382+r*Math.sin(a)).toFixed(1)+' '}$('star').setAttribute('points',sp);
fig($('spk'),700,440,46,'ink');
const ARC=[70,120,170].map(r=>mk('path',{d:'M'+(760+r*.766)+' '+(440-r*.643)+'A'+r+' '+r+' 0 0 1 '+(760+r*.766)+' '+(440+r*.643),fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('spk')));
const MS=Array.from({length:5},(_,i)=>mk('ellipse',{cx:1170+i*50,cy:458,rx:9,ry:12,fill:'var(--gain)'},$('mseeds')));
fig($('meg'),1150,620,34,'ink');
fig($('mom'),420,455,50,'ink');
const KID=fig($('kid'),1100,540,30,'gain');
const NT=Array.from({length:3},()=>{const g=mk('g',{},$('notes'));mk('ellipse',{cx:0,cy:0,rx:12,ry:9,fill:'var(--gain)'},g);mk('path',{d:'M11 -2V-44l14 8',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},g);return g});
const RT=['M780 432C780 520 720 560 660 640','M780 432C790 540 840 600 900 680','M780 432V720','M780 432C760 500 640 520 600 560','M780 432C800 500 920 520 960 560'].map(d=>ln(d,'loss',6,$('rts')));
fig($('womg'),1240,430,44,'ink');
mk('circle',{cx:0,cy:0,r:34,fill:'var(--loss)'},$('vir'));
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(34*c)+' '+(34*s)+'L'+(50*c)+' '+(50*s),stroke:'var(--loss)','stroke-width':6},$('vir'));mk('circle',{cx:56*c,cy:56*s,r:7,fill:'var(--loss)'},$('vir'))}
const PP=Array.from({length:7},(_,i)=>fig($('ppl'),520+i*150,420,24,'ink'));
const LN=[[410,360,490,412]].concat(Array.from({length:4},(_,i)=>[550+i*150,420,640+i*150,420])).map(q=>ln('M'+q[0]+' '+q[1]+'L'+q[2]+' '+q[3],'loss',5,$('lnk')));
fig($('mfig'),360,410,44,'ink');
const WD=Array.from({length:9},()=>mk('path',{d:'M-22 0L-14-80L-4-18L6-120L14-20L26-70L22 0Z',fill:'var(--loss)'},$('weeds')));
const DP=Array.from({length:5},()=>mk('circle',{r:7,fill:'var(--gain)'},$('drops')));
for(let i=0;i<6;i++){const a=i*Math.PI/3;mk('circle',{cx:30*Math.cos(a),cy:-220+30*Math.sin(a),r:22,fill:'var(--gain)'},$('pet'))}
const TL=Array.from({length:8},(_,i)=>{const r=Math.floor(i/4),x=1225+(i%4)*45;return mk('path',{d:'M'+x+' '+(340+r*100)+'V'+(400+r*100),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('tal'))});
const S8=$('spr0').cloneNode(true);S8.id='spr8';$('sp8').appendChild(S8);