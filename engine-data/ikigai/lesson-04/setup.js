const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const face=(g,x,y,r,k,col)=>{mk('circle',{cx:x,cy:y,r:r,fill:'var(--stage)',stroke:col,'stroke-width':6},g);
  [-1,1].forEach(s=>mk('circle',{cx:x+s*r*.35,cy:y-r*.2,r:r*.1,class:'ink'},g));
  const my=y+r*.4,st={fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'};
  if(k==0)mk('path',Object.assign({d:`M${x-r*.45} ${my-r*.1}q${r*.45} ${r*.4} ${r*.9} 0`},st),g);
  if(k==1)mk('ellipse',{cx:x,cy:my,rx:r*.18,ry:r*.24,class:'ink'},g);
  if(k==2){mk('path',Object.assign({d:`M${x-r*.45} ${my}q${r*.15} ${-r*.15} ${r*.3} 0t${r*.3} 0t${r*.3} 0`},st),g);
    const dx=x+r*.78,dy=y-r*.6;mk('path',{d:`M${dx} ${dy}q${r*.14} ${r*.2} 0 ${r*.3}q${-r*.14} ${-r*.1} 0 ${-r*.3}z`,fill:'var(--loss)'},g)}};
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('line',{x1:1300+108*c,y1:420+108*s,x2:1300+122*c,y2:420+122*s,stroke:'var(--ink)','stroke-width':i%3?3:6,'stroke-linecap':'round'},$('ticks'))}
// painting on the canvas: hills, sun, birds, ground
const PG=$('paint');
const PB=[
  mk('path',{d:'M190 470Q265 360 340 470z',class:'loss','fill-opacity':.8},PG),
  mk('path',{d:'M280 470Q370 380 450 470z',fill:'var(--muted)'},PG),
  mk('circle',{cx:395,cy:318,r:26,class:'gain'},PG),
  mk('path',{d:'M215 320q12-12 24 0q12-12 24 0',fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},PG),
  mk('path',{d:'M190 470H450',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},PG)];
fig($('pfig'),620,360,36,'ink');
fig($('pfig2'),300,400,44,'ink');
face($('hface'),1350,280,40,0,'var(--gain)');
face($('bf'),240,420,60,1,'var(--ink)');
face($('af'),1360,420,60,2,'var(--loss)');
fig($('jf'),330,470,30,'ink');
const BL=[0,1,2,3].map(i=>mk('circle',{r:14,class:i%2?'loss':'gain'},$('balls')));
fig($('cf'),300,400,44,'ink');
[730,800,870].forEach(x=>{mk('rect',{x:x-26,y:518,width:52,height:26,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('nigiri'));mk('rect',{x:x-30,y:504,width:60,height:18,rx:9,class:'gain'},$('nigiri'))});
const DT=[];for(let i=0;i<12;i++)DT.push(mk('circle',{cx:657+i*26,cy:620,r:8},$('days')));
[1150,1280,1410].forEach(x=>fig($('arts'),x,380,22,'ink'));
const CD=[['WORK','Your job'],['HOBBY','Cooking'],['HOBBY','Carpentry'],['HOBBY','Music']].map((c,i)=>{const x=620+(i%2)*450,y=250+Math.floor(i/2)*180,g=mk('g',{},$('cards'));
  mk('rect',{x:x,y:y,width:410,height:150,rx:16,fill:'var(--stage)',stroke:i?'var(--ink)':'var(--gain)','stroke-width':5},g);
  mk('text',{x:x+40,y:y+48,'font-size':20,class:'m'},g).textContent=c[0];
  mk('text',{x:x+40,y:y+108,'font-size':42,class:'d5'},g).textContent=c[1];
  mk('circle',{cx:x+360,cy:y+75,r:18,class:'gain'},g);return g});
const WK=[];for(let i=0;i<7;i++)WK.push(mk('rect',{x:620+i*126,y:640,width:100,height:80,rx:12},$('wk')));
const CK=[];for(let i=0;i<4;i++){const y=330+i*65;mk('path',{d:`M1250 ${y}h160`,stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},$('nl'));
  mk('circle',{cx:1222,cy:y-10,r:11,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('nl'));
  CK.push(mk('path',{d:`M1215 ${y-11}l6 6 12-14`,fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('nl')))}
// one-hour timer: full sweep = 60 minutes
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.sin(a),s=-Math.cos(a);mk('line',{x1:1310+57*c,y1:690+57*s,x2:1310+64*c,y2:690+64*s,stroke:'var(--ink)','stroke-width':i%3?3:5,'stroke-linecap':'round'},$('tticks'))}
const pie=k=>{if(k<.001)return '';if(k>.999)return 'M1310 634a56 56 0 1 1 0 112a56 56 0 1 1 0-112z';const a=k*2*Math.PI;return `M1310 690V634A56 56 0 ${k>.5?1:0} 1 ${(1310+56*Math.sin(a)).toFixed(1)} ${(690-56*Math.cos(a)).toFixed(1)}Z`};