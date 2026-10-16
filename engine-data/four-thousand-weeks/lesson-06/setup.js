const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const dr=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
fig($('tp0'),1250,470,40,'loss');fig($('ph0'),220,290,26,'ink');fig($('art0'),760,300,18,'gain');fig($('lr0'),220,640,26,'ink');fig($('rs0'),200,300,30,'ink');
const BC=['var(--ink)','var(--gain)','var(--muted)','var(--loss)','var(--ink)'];
const BL=BC.map((c,i)=>mk('path',{d:'M380 '+(520+i*40)+'C470 '+(520+i*40)+' 470 '+(584+i*8)+' 580 '+(584+i*8)+'H1460',fill:'none',stroke:c,'stroke-width':5,pathLength:1,'stroke-dasharray':'1 1','stroke-linecap':'round'},$('lines2')));
[700,900,1100,1300].forEach(x=>{mk('path',{d:'M'+x+' 580V510',class:'s-ink','stroke-width':5},$('stops2'));mk('circle',{cx:x,cy:500,r:14,class:'gain'},$('stops2'))});
const BS=[0,1,2].map(()=>mk('rect',{y:583,width:60,height:34,rx:7,class:'ink'},$('buses2')));
const YR=[0,1,2,3,4].map(i=>{const x=380+i*200,g=mk('g',{},$('yrs3'));mk('circle',{cx:x,cy:420,r:16,class:'ink'},g);mk('text',{x:x,y:480,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent='YEAR '+(i+1);return g});
const ret=$('ret'),RL=ret.getTotalLength();ret.setAttribute('stroke-dasharray',RL+' '+RL);
const BE=[[1380,330],[1380,480],[1380,630],[1380,790]],BR=BE.map(e=>mk('path',{d:'M700 560L'+e[0]+' '+e[1],fill:'none',stroke:'var(--line)','stroke-width':10,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1'},$('br4')));
const star=(cx,cy,R,r)=>{let s='';for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,q=k%2?r:R;s+=(k?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return s+'z'};
const CD=[0,1,2,3,4,5].map(i=>{const x=140+i*230,cx=x+85,g=mk('g',{},$('cards5'));mk('rect',{x:x,y:240,width:170,height:220,rx:14,fill:'var(--stage)',stroke:i===5?'var(--gain)':'var(--ink)','stroke-width':5},g);
  if(i<5)mk('circle',{cx:cx,cy:350,r:40,fill:'none',stroke:i<4?'var(--muted)':'var(--ink)','stroke-width':6},g);
  if(i===4)mk('path',{d:'M'+(cx-14)+' 364l14-28 14 28z',class:'gain'},g);
  if(i===5)mk('path',{d:star(cx,352,62,26),class:'gain'},g);return g});
const CE=[];for(let i=0;i<14;i++){const x=360+(i%7)*76,y=260+Math.floor(i/7)*76;mk('rect',{x:x,y:y,width:70,height:70,rx:8,fill:'none',stroke:'var(--line)','stroke-width':3},$('cells6'));CE.push(mk('rect',{x:x+15,y:y+20,width:40,height:30,rx:4,class:'gain'},$('cells6')))}
const DT=[];for(let i=3;i<14;i++)DT.push(mk('circle',{cx:1001+i*34,cy:404,r:5,class:'s-muted',fill:'var(--muted)'},$('dots6')));
let op='';for(let k=0;k<8;k++){const a=k*Math.PI/4+Math.PI/8;op+=(250+90*Math.cos(a)).toFixed(1)+','+(690+90*Math.sin(a)).toFixed(1)+' '}$('oct').setAttribute('points',op);
for(let k=0;k<12;k++){const a=k*Math.PI/6;mk('path',{d:'M'+(1120+125*Math.sin(a)).toFixed(1)+' '+(440-125*Math.cos(a)).toFixed(1)+'L'+(1120+138*Math.sin(a)).toFixed(1)+' '+(440-138*Math.cos(a)).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ticks7'))}
const DP=[[300,320],[440,560],[680,500],[260,660],[560,660]],DE=DP.map(q=>{const g=mk('g',{},$('dets7'));mk('circle',{cx:q[0],cy:q[1],r:9,class:'gain'},g);return [g,mk('circle',{cx:q[0],cy:q[1],r:22,fill:'none',stroke:'var(--gain)','stroke-width':3},g)]});
[400,700,1000,1300].forEach(x=>mk('circle',{cx:x,cy:800,r:11,class:'ink'},$('stops8')));