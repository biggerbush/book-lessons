const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const mkDoor=(g,x,y,w,h)=>{mk('rect',{x:x,y:y,width:w,height:h,fill:'none',stroke:'var(--ink)','stroke-width':6},g);const pn=mk('rect',{x:x,y:y,width:w,height:h,fill:'var(--ink)'},g);const kn=mk('circle',{cx:x+w-22,cy:y+h/2,r:10,fill:'var(--stage)'},g);return {pn,kn,x,w}};
const setDoor=(d,k)=>{const w=d.w*(.1+.9*k);d.pn.setAttribute('width',w.toFixed(1));d.kn.setAttribute('cx',(d.x+w-22).toFixed(1));d.kn.setAttribute('opacity',k>.5?1:0)};
const TB=$('t_boxes');
['YESTERDAY','TODAY','TOMORROW'].forEach((s,i)=>{const x=960+i*170;mk('rect',{x:x,y:260,width:160,height:220,rx:10,fill:'var(--stage)',stroke:i==1?'var(--gain)':'var(--ink)','stroke-width':6},TB);const tx=mk('text',{x:x+80,y:530,'font-size':22,'text-anchor':'middle',class:'m'},TB);tx.textContent=s});
person(TB,1210,330,24,'gain');
const TQ=[1040,1380].map(x=>{const q=mk('text',{x:x,y:400,'font-size':80,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},TB);q.textContent='?';return q});
const TD=[960,1300].map(x=>mk('rect',{x:x,y:260,width:160,height:0,rx:10,fill:'var(--ink)'},TB));
person($('st1'),260,460,34,'ink');
let sp='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?28:70;sp+=(1295+r*Math.cos(a)).toFixed(1)+','+(345+r*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:sp,class:'gain'},$('star'));
const L2=[695,995,1295].map(x=>mk('path',{d:'M260 550C260 720 '+x+' 740 '+x+' 660',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 10'},$('links2')));
person($('yp'),240,300,26,'ink');
const BH=[0,1,2,3,4,5].map(k=>mk('line',{x1:560+150*k,y1:440,x2:560+150*k,y2:440,stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('bh')));
person($('vp'),800,470,32,'gain');
person($('cp'),400,520,30,'ink');
const CK=[];for(let i=0;i<21;i++){const x=145+(i%7)*75,y=310+Math.floor(i/7)*80;mk('rect',{x:x,y:y,width:66,height:66,rx:8,fill:'none',stroke:'var(--line)','stroke-width':3},$('grid'));if([2,5,9,13,16].includes(i))CK.push(mk('path',{d:'M'+(x+16)+' '+(y+34)+'l12 12 24-26',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('grid')))}
let sc='';for(let i=0;i<=160;i++){const a=i*.45,r=60+50*Math.sin(i*.37)+20*Math.sin(i*1.3);sc+=(i?'L':'M')+(1120+r*Math.cos(a)).toFixed(1)+' '+(400+r*Math.sin(a)).toFixed(1)}
$('scrib').setAttribute('d',sc);
for(let k=0;k<6;k++)mk('circle',{cx:150,cy:290+k*90,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('nb'));
const NB=[300,240,280].map((w,k)=>{const y=380+k*110;mk('rect',{x:190,y:y,width:40,height:40,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':5},$('nb'));const b=mk('path',{d:'M260 '+(y+20)+'h'+w,stroke:'var(--muted)','stroke-width':10,'stroke-linecap':'round','stroke-dasharray':w+' '+(w+20)},$('nb'));const c=mk('path',{d:'M196 '+(y+20)+'l10 12 22-28',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('nb'));return [b,c,w]});
const D7=mkDoor($('d7'),820,260,260,460), D8=mkDoor($('qdoor'),1240,420,180,250);