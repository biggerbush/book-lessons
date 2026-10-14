const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const cookie=(g,x,y,r)=>{const c=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':Math.max(2,r/9)},c);[[-.35,-.3],[.3,-.1],[-.05,.38]].forEach(q=>mk('circle',{cx:x+q[0]*r,cy:y+q[1]*r,r:r*.13,class:'ink'},c));return c};
for(let i=0;i<6;i++){const x=1250+(i%3)*70,y=250+Math.floor(i/3)*70;mk('rect',{x:x,y:y,width:50,height:50,rx:8,fill:i>3?'var(--ink)':'none',stroke:i>3?'var(--ink)':'var(--line)','stroke-width':4,'stroke-dasharray':i>3?'none':'6 6'},$('s0slots'))}
fig($('s2fig'),800,400,30,'ink');cookie($('s2fig'),865,478,16);
const C10=[];for(let i=0;i<10;i++)C10.push(cookie($('s2c10'),380+(i%4)*66,600-Math.floor(i/4)*56,26));
const C2=[1080,1160].map(x=>cookie($('s2c2'),x,600,26));
const C3=[];for(let i=0;i<10;i++)C3.push(cookie($('s3jar'),180+(i%4)*54,550-Math.floor(i/4)*46,20));
cookie($('s3last'),1270,440,34);
const HS=[[1070,700],[1470,700],[1270,740],[1070,260],[1470,260]].map(s=>[s,mk('path',{class:'s-ink','stroke-width':14,'stroke-linecap':'round',fill:'none'},$('s3hands')),mk('circle',{r:20,class:'ink'},$('s3hands'))]);
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('line',{x1:1150+125*c,y1:420+125*s,x2:1150+140*c,y2:420+140*s,class:'s-ink','stroke-width':i%3?3:6,'stroke-linecap':'round'},$('s4ticks'))}
for(let i=0;i<7;i++){const a=Math.PI*(-5/6+i/9),c=Math.cos(a),s=Math.sin(a);mk('line',{x1:800+100*c,y1:490+100*s,x2:800+140*c,y2:490+140*s,class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('s5rays'))}
cookie($('s6ck'),1160,450,60);cookie($('s6ck'),1360,450,60);
const SW=['GIFTS','COMMITMENT','CROWDS','LIKING','AUTHORITY','SCARCITY'].map((s,i)=>{const x=233+i*227,g=mk('g',{},$('s7sw'));
  const tr=mk('rect',{x:x-60,y:260,width:120,height:56,rx:28,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const kn=mk('circle',{cx:x-32,cy:288,r:20,class:'ink'},g);
  const tx=mk('text',{x:x,y:360,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return [g,tr,kn,x]});
const C8=[];for(let i=0;i<12;i++)C8.push(cookie($('s8ck'),160+i*60,760,22));