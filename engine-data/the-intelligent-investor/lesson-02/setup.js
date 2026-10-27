const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const hat=(g,x,y,r)=>{mk('rect',{x:x-r*1.05,y:y-r*.95,width:r*2.1,height:r*.28,rx:r*.1,class:'ink'},g);mk('rect',{x:x-r*.65,y:y-r*1.95,width:r*1.3,height:r*1.1,class:'ink'},g);mk('rect',{x:x-r*.65,y:y-r*1.15,width:r*1.3,height:r*.16,class:'gain'},g)};
const mm=(g,x,y,r)=>{fig(g,x,y,r,'ink');hat(g,x,y,r)};
const mouth=(cx,cy,r,k)=>'M'+(cx-r*.45)+' '+(cy+r*.35)+'Q'+cx+' '+(cy+r*.35+k*r*.4).toFixed(1)+' '+(cx+r*.45)+' '+(cy+r*.35);
const face=(g,cx,cy,r)=>{const c=mk('circle',{cx:cx,cy:cy,r:r,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);[-1,1].forEach(s=>mk('circle',{cx:cx+s*r*.35,cy:cy-r*.15,r:r*.09,class:'ink'},g));const m=mk('path',{fill:'none',stroke:'var(--ink)','stroke-width':Math.max(5,r*.06),'stroke-linecap':'round'},g);return {c:c,m:m,cx:cx,cy:cy,r:r}};
const setFace=(f,k)=>f.m.setAttribute('d',mouth(f.cx,f.cy,f.r,k));

mm($('tMM'),1390,430,40);
const tMouth=mk('path',{fill:'none',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round'},$('tMM'));
fig($('tYou'),1200,470,30,'gain');

mm($('pMM'),1300,330,40);
const cal=[];for(let i=0;i<7;i++){const g=mk('g',{},$('cal'));mk('rect',{x:1090+i*56,y:600,width:48,height:48,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+(1102+i*56)+' 624l8 9 16-18',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);cal.push(g)}

mm($('dMM'),300,380,44);fig($('dYou'),1300,380,44,'gain');

const B3=[],L3=[];for(let i=0;i<6;i++){const x=210+i*115,h=160+i*30;B3.push([mk('rect',{x:x,y:720-h,width:64,height:h,rx:4,class:'ink'},$('bars3')),h]);L3.push((x+32)+','+(720-h-34+(i%2?10:-6)))}
$('line3').setAttribute('points',L3.join(' '));
const f3=face($('nod3'),1210,440,140);setFace(f3,.1);

const cv4=f=>{let s='';for(let x=160;x<=160+920*f+.1;x+=8)s+=x+','+(480-180*Math.sin(2*Math.PI*(x-160)/920)).toFixed(1)+' ';return s||'160,480'};
const f4=face($('f4g'),1300,440,120);

mm($('nOff'),230,400,36);fig($('nYou'),880,400,34,'gain');

const BK=[[650,560],[730,560],[810,560],[690,495],[770,495]].map(q=>[mk('rect',{x:q[0],y:q[1],width:70,height:60,rx:6,class:'gain'},$('blk7')),q[1]]);
mk('circle',{cx:0,cy:0,r:14,class:'ink'},$('mini7'));hat($('mini7'),0,0,14);

const f8=face($('f8g'),1320,640,80);