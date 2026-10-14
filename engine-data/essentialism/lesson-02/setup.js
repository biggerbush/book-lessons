const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const f=v=>v.toFixed(1);
const hd=(x,y,a,h)=>'M'+f(x-h*Math.cos(a-.5))+' '+f(y-h*Math.sin(a-.5))+'L'+f(x)+' '+f(y)+'L'+f(x-h*Math.cos(a+.5))+' '+f(y-h*Math.sin(a+.5));
const arD=(x1,y1,x2,y2,w)=>'M'+f(x1)+' '+f(y1)+'L'+f(x2)+' '+f(y2)+hd(x2,y2,Math.atan2(y2-y1,x2-x1),w*2.6);
const ST=(c,w)=>({fill:'none',stroke:'var(--'+c+')','stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round'});
const mini=(g,L,w,c)=>{const e=mk('g',{},g);return [e,mk('path',Object.assign({d:arD(0,0,L,0,w)},ST(c,w)),e)]};
const dash=(id,k)=>$(id).setAttribute('stroke-dashoffset',f(1-k));

mk('path',Object.assign({d:arD(1130,400,1430,400,12)},ST('gain',12)),$('tA'));
const TS=[...Array(8)].map(()=>mini($('tS'),70,8,'loss'));

person($('p1'),260,430,40,'ink');
person($('p2'),260,420,36,'ink');
const ENV=[...Array(9)].map((_,i)=>{const y=530-i*30,g=mk('g',{},$('ev2'));mk('rect',{x:380,y:y,width:100,height:60,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M384 '+(y+6)+'l46 28 46-28',fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g);return g});
const DR=['PROJECTS','COMMITTEES','MEETINGS','FAVOURS'].map((s,i)=>{const c=660+i*210,g=mk('g',{},$('dr2'));mk('rect',{x:c-75,y:330,width:150,height:260,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);mk('path',{d:'M'+(c-75)+' 330L'+(c+30)+' 352V568L'+(c-75)+' 590Z',fill:'var(--loss)','fill-opacity':.25,stroke:'var(--loss)','stroke-width':4,'stroke-linejoin':'round'},g);mk('circle',{cx:c+14,cy:465,r:7,class:'loss'},g);mk('text',{x:c,y:634,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent=s;return g});

person($('p3'),560,450,28,'ink');
const SA=[...Array(20)].map((_,i)=>{const [e,q]=mini($('sc3'),50,6,'gain');const a=i*Math.PI*2/20+((i*7)%5-2)*.03;const d=i%2?210+(i*13)%16:130+(i*11)%16;return [e,q,a,d]});
const YS=[...Array(9)].map((_,i)=>{const x=920+(i%3)*190,y=280+Math.floor(i/3)*96,g=mk('g',{},$('ys3')),no=i===7;mk('rect',{x:x,y:y,width:160,height:64,rx:32,fill:no?'var(--stage)':'var(--gain)',stroke:no?'var(--muted)':'var(--gain)','stroke-width':4},g);mk('text',{x:x+80,y:y+41,'font-size':24,'text-anchor':'middle',class:'m',style:no?'':'fill:var(--on-gain)'},g).textContent=no?'NO':'YES';return g});
const TR=[...Array(6)].map((_,i)=>{const y=646+i*22;mk('rect',{x:920,y:y,width:540,height:10,rx:5,fill:'var(--line)'},$('pg3'));return mk('rect',{x:920,y:y,width:0,height:10,rx:5,fill:'var(--gain)'},$('pg3'))});

const NA=[-Math.PI/2,0,Math.PI/2,Math.PI],M5=[.5,.25,.5,.25],EX=a=>800+300*Math.cos(a),EY=a=>490+220*Math.sin(a);
const A5=NA.map((a,i)=>{const b0=a+M5[i],b1=a+Math.PI/2-M5[(i+1)%4],x2=EX(b1),y2=EY(b1);return mk('path',Object.assign({d:'M'+f(EX(b0))+' '+f(EY(b0))+'A300 220 0 0 1 '+f(x2)+' '+f(y2)+hd(x2,y2,Math.atan2(220*Math.cos(b1),-300*Math.sin(b1)),22)},ST(i===3?'loss':'muted',6)),$('ar5'))});
const N5=['CLARITY','SUCCESS','OPTIONS','DIFFUSED EFFORT'].map((s,i)=>{const x=EX(NA[i]),y=EY(NA[i]),g=mk('g',{},$('nd5'));mk('rect',{x:f(x-130),y:f(y-38),width:260,height:76,rx:38,fill:'var(--stage)',stroke:i===0?'var(--gain)':i===3?'var(--loss)':'var(--ink)','stroke-width':5},g);mk('text',{x:f(x),y:f(y+8),'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g).textContent=s;return g});

const FL=[...Array(6)].map((_,i)=>{const y=656-64*i,g=mk('g',{},$('fl6'));mk('rect',{x:1000,y:y,width:200,height:64,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);[1030,1085,1140].forEach(x=>mk('rect',{x:x,y:y+20,width:30,height:24,class:'ink'},g));return g});
const PL=[[560,340],[680,430],[600,530],[760,300],[820,580],[1340,400],[1420,520],[1360,640]].map(q=>{const tx=mk('text',{x:q[0],y:q[1],'font-size':56,class:'d','text-anchor':'middle',style:'fill:var(--gain)'},$('pl6'));tx.textContent='+';return tx});

const GAP=Math.atan2(412-500,834-600);
const OP=[...Array(15)].map((_,i)=>[mk('rect',{width:36,height:36,rx:6,class:'loss'},$('op7')),260,GAP+(i+1)*Math.PI*2/16]);
mk('path',Object.assign({d:hd(834,412,Math.atan2(112,-246),26)},ST('gain',8)),$('bh7'));

// closing mirror: a clear amber purpose arrow, partly buried by a few spaced-out indigo squares
mk('path',Object.assign({d:arD(1268,452,1388,322,12)},ST('gain',12)),$('mi8'));
const BU=[[1300,420],[1345,376],[1250,350],[1396,438],[1288,300]].map(q=>mk('rect',{x:q[0]-22,y:q[1]-22,width:44,height:44,rx:7,class:'loss'},$('bu8')));