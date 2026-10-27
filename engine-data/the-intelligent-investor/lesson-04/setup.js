const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const drw=(el,k)=>{el.setAttribute('stroke-dasharray','1 1');el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));el.setAttribute('opacity',k>0?1:0)};
fig($('gamP'),860,380,40,'ink');fig($('sitP'),370,440,34,'gain');fig($('dskP'),330,470,40,'ink');
const CN=[0,1,2,3,4,5].map(i=>mk('ellipse',{cx:840,cy:566-i*22,rx:70,ry:16,class:'gain',stroke:'var(--stage)','stroke-width':3},$('cns')));
for(let r=0;r<4;r++)for(let c=0;c<7;c++){const on=r===1&&c===2;mk('rect',{x:942+c*62,y:374+r*64,width:56,height:58,rx:6,fill:on?'var(--gain)':'none',stroke:on?'var(--gain)':'var(--line)','stroke-width':3},$('cgrid'))}
const BL=[[160,90,140,'ink'],[262,96,190,'gain'],[370,80,120,'ink']].map(([x,w,h,c])=>mk('rect',{x:x,y:560-h,width:w,height:h,class:c},$('bk')));
const PR=[1,.8,.6,.5,.7,.9,.6,1],X=i=>640+i*110,PY=v=>300+(1-v)*240;
const CO=PR.map((v,i)=>{const g=mk('g',{},$('coinG'));mk('circle',{cx:X(i),cy:535,r:22,class:'gain'},g);const s=mk('text',{x:X(i),y:544,'font-size':24,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},g);s.textContent='$';return g});
$('pl').setAttribute('d','M'+PR.map((v,i)=>X(i)+' '+PY(v)).join('L'));
const PD=PR.map((v,i)=>mk('circle',{cx:X(i),cy:PY(v),r:8,class:'ink'},$('plG')));
const BR=PR.map((v,i)=>mk('rect',{x:X(i)-25,width:50,rx:6,fill:v<.7?'var(--gain)':'var(--ink)'},$('barG')));
const CD=[];for(let i=0;i<12;i++){const x=760+(i%4)*175,y=260+Math.floor(i/4)*125,g=mk('g',{},$('cards'));
const r=mk('rect',{x:x,y:y,width:150,height:100,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
mk('path',{d:'M'+(x+20)+' '+(y+40)+'h110M'+(x+20)+' '+(y+66)+'h70',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},g);CD.push([g,r,[1,6,11].includes(i)])}
const RDS=['M800 830V620C800 480 420 460 420 300','M800 620C800 480 1180 460 1180 300'];
const RP=RDS.map(d=>mk('path',{d:d,fill:'none',stroke:'var(--line)','stroke-width':64,'stroke-linecap':'round'},$('road')));
RDS.forEach(d=>mk('path',{d:d,fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'16 14'},$('road')));
let TL=600,LT=700;try{TL=$('trl').getTotalLength();LT=RP[0].getTotalLength()}catch(e){}