const fig=(par,x,y,r,cls)=>{const g=mk('g',{class:cls},par);mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`},g);return g};
function beast(par){const g=mk('g',{},par);
  mk('path',{d:'M-150 60C-150-40-85-110 0-110S150-40 150 60Z',class:'loss'},g);
  mk('path',{d:'M-90-80l-20-60 60 30zM90-80l20-60-60 30z',class:'loss'},g);
  const c=mk('path',{d:'M-70-30q20 14 40 0M30-30q20 14 40 0',fill:'none',stroke:'var(--stage)','stroke-width':6,'stroke-linecap':'round'},g);
  const o=mk('g',{},g);[-50,50].forEach(x=>mk('circle',{cx:x,cy:-30,r:14,fill:'var(--stage)'},o));
  const m=mk('ellipse',{cx:0,cy:15,rx:45,ry:28,fill:'var(--stage)',opacity:0},g);return {g,c,o,m}}
const bt=(b,x,y,s,a)=>{b.g.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${s.toFixed(3)})`);b.c.setAttribute('opacity',(1-a).toFixed(2));b.o.setAttribute('opacity',a.toFixed(2))};
const cloud=par=>{const g=mk('g',{},par);[[-70,10,60],[0,-20,80],[70,10,60],[-20,40,60],[40,40,55]].forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],class:'loss'},g));return g};
const B0=beast($('b0'));
const ZZ=[0,1,2].map(i=>{const z=mk('text',{class:'d5','font-size':30+i*10},$('zz'));z.textContent='z';return z});
const DT=[];for(let i=0;i<12;i++){const x=290+(i*97)%260,y=575+(i*61)%200;DT.push([mk('circle',{cx:x,cy:y,r:10+(i%3)*3,class:'loss'},$('dots')),x,y])}
const CL1=cloud($('cl1'));
const B2=beast($('b2'));const F2=fig($('f2'),720,470,46,'ink');
const B3=beast($('b3'));
const PL=[];for(let i=0;i<5;i++)PL.push(mk('circle',{r:12,class:'loss'},$('pel')));
const B4a=beast($('b4a')),B4b=beast($('b4b'));
const YOU=fig($('f4'),460,420,50,'ink');fig($('f4'),1140,420,50,'ink');
let bp='';for(let i=0;i<24;i++){const r=i%2?40:66,a=i*Math.PI/12;bp+=(460+r*Math.cos(a)).toFixed(1)+','+(255+r*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:bp,class:'loss'},$('bst'));
const B5=beast($('b5'));const F5=fig($('f5'),640,450,36,'ink');
fig($('f6'),420,400,50,'ink');const CL6=cloud($('cl6'));
const RY6=[];for(let i=0;i<8;i++){const a=i*Math.PI/4+Math.PI/8;RY6.push(mk('path',{d:`M${(1140+112*Math.cos(a)).toFixed(1)} ${(480+112*Math.sin(a)).toFixed(1)}L${(1140+136*Math.cos(a)).toFixed(1)} ${(480+136*Math.sin(a)).toFixed(1)}`,class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('ry6')))}
const SP6=[];for(let i=0;i<6;i++)SP6.push(mk('circle',{r:7+(i%2)*3,class:'gain'},$('sp6')));
const B7=beast($('b7'));bt(B7,300,560,.9,1);
const B8=beast($('b8'));