const fig=(g,x,y,r,cls)=>{const G=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},G);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},G);return G};
const HP=[];for(let i=0;i<72;i++){const a=i/72*2*Math.PI,s=Math.sin(a);HP.push([1300+152*s*s*s,400-9.5*(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a))])}
const HQ=HP.map(q=>[1300+(q[0]-1300)*.86,424+(q[1]-424)*.86]);
const inP=(P,x,y)=>{let c=false;for(let i=0,j=P.length-1;i<P.length;j=i++){const[a,b]=P[i],[e,f]=P[j];if((b>y)!==(f>y)&&x<(e-a)*(y-b)/(f-b)+a)c=!c}return c};
const sqIn=(px,py)=>[[0,0],[13,0],[26,0],[0,13],[26,13],[0,26],[13,26],[26,26],[13,13]].every(o=>inP(HQ,px+o[0],py+o[1]));
const HS=[];for(let py=545;py>=265;py-=30)for(let px=1150;px<=1450;px+=30)if(sqIn(px,py))HS.push(mk('rect',{x:px,y:py,width:26,height:26,rx:5,class:'gain',opacity:0},$('hrt')));
mk('path',{id:'hOut',d:'M'+HP.map(q=>q[0].toFixed(1)+' '+q[1].toFixed(1)).join('L')+'Z',class:'s-ink',fill:'none','stroke-width':6,'stroke-dasharray':'12 12','stroke-linejoin':'round'},$('hrt'));
fig($('cpl'),300,500,34,'ink');fig($('cpl'),440,500,34,'ink');mk('path',{d:'M200 650h340',class:'s-line','stroke-width':5},$('cpl'));
[840,878,915,1180,1218,1255].forEach(x=>mk('rect',{x:x,y:350,width:25,height:30,class:'ink'},$('mer')));
[955,1005,1055,1105,1150].forEach(x=>mk('rect',{x:x,y:435,width:25,height:25,class:'ink'},$('mer')));
fig($('ppl3'),300,400,40,'ink');fig($('ppl3'),1300,400,40,'ink');
const spike=(cx,cy,r)=>{let s='';for(let i=0;i<14;i++){const a=i/14*2*Math.PI,q=i%2?r*.65:r;s+=(cx+q*Math.cos(a)).toFixed(1)+','+(cy+q*Math.sin(a)).toFixed(1)+' '}const g=mk('g',{},$('arg'));mk('polygon',{points:s,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5,'stroke-linejoin':'round'},g);const tx=mk('text',{x:cx,y:cy+17,'font-size':48,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},g);tx.textContent='!'};
spike(440,300,50);spike(1160,300,50);
fig($('sadF'),560,390,34,'loss');fig($('hapF'),1110,390,34,'gain');
const P4=['UNDERSTAND','FORGIVE','MOVE FORWARD'].map((s,i)=>{const g=mk('g',{},$('pills4'));mk('rect',{x:1200,y:330+i*70,width:250,height:52,rx:26,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);const tx=mk('text',{x:1325,y:364+i*70,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=s;return g});
fig($('sit'),260,380,24,'ink');fig($('sit'),540,380,24,'ink');
const SK=['COMMUNICATION','PATIENCE','UNDERSTANDING'].map((s,i)=>{const g=mk('g',{},$('skl'));mk('rect',{x:680,y:600+i*60,width:340,height:48,rx:24,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);const tx=mk('text',{x:850,y:631+i*60,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=s;return g});
// friends: full-width staircase, columns 0..5 of 222px from x=140, rise 70px per step
const SX6=v=>251+222*v;
const ST=[1,2,3,4,5].map(i=>mk('rect',{x:140+i*222,y:780-i*70,width:222,height:i*70,fill:'var(--line)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},$('stairs')));
let sp='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?16:38;sp+=(1361+q*Math.cos(a)).toFixed(1)+','+(374+q*Math.sin(a)).toFixed(1)+' '}mk('polygon',{points:sp,class:'gain'},$('star'));
const CB=mk('g',{},$('frd')),CA=mk('g',{},$('frd'));fig(CA,0,0,34,'gain');fig(CB,0,0,34,'ink');
const P6=(v,h)=>{const f=v-Math.floor(v);return[SX6(v),780-70*v-143-h*Math.sin(Math.PI*f)]};
const setL=(id,x1,y1,x2,y2,o)=>{const l=$(id);l.setAttribute('x1',x1.toFixed(1));l.setAttribute('y1',y1.toFixed(1));l.setAttribute('x2',x2.toFixed(1));l.setAttribute('y2',y2.toFixed(1));l.setAttribute('opacity',o)};
for(let i=0;i<5;i++)mk('ellipse',{cx:1100,cy:550-i*22,rx:80,ry:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('dish'));