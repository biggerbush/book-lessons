const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const starP=(cx,cy,R,r,n)=>{let s='';for(let i=0;i<2*n;i++){const a=-Math.PI/2+i*Math.PI/n,q=i%2?r:R;s+=(cx+q*Math.cos(a)).toFixed(1)+','+(cy+q*Math.sin(a)).toFixed(1)+' '}return s};
const draw=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
person($('lifter'),300,400,40,'ink');
const RB=[];for(let i=0;i<10;i++){const x=640+i*82,g=mk('g',{},$('reps'));const r=mk('rect',{x:x,y:400,width:70,height:70,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);const tx=mk('text',{x:x+35,y:446,'font-size':26,'text-anchor':'middle',class:'m'},g);tx.textContent=i+1;RB.push([r,tx])}
const CK=[0,1].map(q=>{const px=120+q*740,a=[];for(let j=0;j<3+q;j++){const y=310+j*70,g=mk('g',{},$('ck'+q)),x4=j===3;
  mk('rect',{x:px+40,y:y,width:40,height:40,rx:8,fill:x4?'var(--gain)':'var(--stage)',stroke:x4?'var(--gain)':'var(--ink)','stroke-width':4},g);
  mk('path',{d:'M'+(px+49)+' '+(y+20)+'l9 10l15-18',fill:'none',stroke:x4?'var(--on-gain)':'var(--ink)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  if(x4){const tx=mk('text',{x:px+100,y:y+28,'font-size':20,class:'m',style:'fill:var(--gain)'},g);tx.textContent='+ A LITTLE EXTRA'}
  else mk('path',{d:'M'+(px+100)+' '+(y+20)+'h200',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);a.push(g)}return a});
$('st0').setAttribute('points',starP(600,420,50,22,5));$('st1').setAttribute('points',starP(1330,420,100,42,5));$('burst').setAttribute('points',starP(870,760,62,46,12));
const DOC=[];for(let i=0;i<5;i++){const x=160+i*260,g=mk('g',{},$('docs')),h=mk('g',{},g);mk('rect',{x:x,y:400,width:160,height:210,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},h);
  for(let k=0;k<4;k++)mk('path',{d:'M'+(x+24)+' '+(440+k*36)+'h'+(k===3?70:112),stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},h);DOC.push([g,h])}
for(let i=0;i<6;i++)mk('path',{d:'M120 '+(395+i*70)+'H1480',stroke:'var(--line)','stroke-width':i%5?3:5},$('track'));
for(let r=0;r<23;r++)for(let c=0;c<2;c++)mk('rect',{x:1390+c*15,y:397+r*15,width:15,height:15,fill:(r+c)%2?'var(--ink)':'var(--stage)'},$('fin5'));
const RU=[];for(let i=0;i<5;i++){const g=mk('g',{},$('run5'));person(g,0,412+i*70,11,i===2?'gain':'ink');RU.push(g)}
const cv=(H,k)=>{let d='';for(let i=0;i<=40;i++){const s=i/40;d+=(i?'L':'M')+(200+1240*s).toFixed(1)+' '+(720-H*(Math.exp(k*s)-1)/(Math.exp(k)-1)).toFixed(1)}return d};
$('cv0').setAttribute('d',cv(200,1.5));$('cv1').setAttribute('d',cv(450,3));
$('arrP').setAttribute('transform','translate(1440 270) rotate('+(Math.atan2(-1350*Math.exp(3)/(Math.exp(3)-1),1240)*180/Math.PI).toFixed(1)+')');
const DY=[];for(let i=0;i<7;i++)DY.push(mk('circle',{cx:158+i*50,cy:770,r:14},$('days8')));