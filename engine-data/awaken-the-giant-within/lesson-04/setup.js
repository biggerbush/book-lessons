const P=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},g);return g};
P($('thk'),330,380,60,'ink');
const AC=[];for(let i=0;i<9;i++){const x=960+(i%3)*170,y=230+Math.floor(i/3)*110;AC.push([mk('rect',{x:x,y:y,width:140,height:80,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('ans')),x+70,y+40]);mk('path',{d:`M${x+24} ${y+32}h${60+(i*17)%30}M${x+24} ${y+52}h50`,stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},$('ans'))}
const HP=[0,4,2,6,8,5];
const QR=[];for(let i=0;i<12;i++){const q=mk('text',{x:160+i*110,y:780,'font-size':40,class:'d5','text-anchor':'middle',style:'fill:var(--muted)'},$('qrow'));q.textContent='?';QR.push(q)}
const OB=[[610,365],[870,540],[1105,540],[1340,375]];
for(let i=0;i<5;i++)mk('path',{d:`M${395+i*32} 495v50`,stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':'10 12'},$('rain'));
const BW=[380,320,350,260],BR=BW.map((w,i)=>mk('rect',{x:150,y:590+i*32,width:0,height:20,rx:6,class:'loss','fill-opacity':.5},$('bars')));
P($('sm'),680,580,26,'ink');P($('tl'),1400,551,26,'gain');
for(let i=0;i<9;i++){const a=Math.PI+i*Math.PI/8,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(1120+88*c).toFixed(0)} ${(600+88*s).toFixed(0)}L${(1120+124*c).toFixed(0)} ${(600+124*s).toFixed(0)}`,stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
const F=$('fence');[1105,1135].forEach(x=>{mk('path',{d:`M${x} 240V740`,stroke:'var(--ink)','stroke-width':4},F);for(let y=262;y<740;y+=48)mk('path',{d:`M${x-8} ${y-8}l16 16m0-16l-16 16`,stroke:'var(--ink)','stroke-width':3},F)});
for(let i=0;i<5;i++)mk('rect',{x:1108,y:250+i*110,width:24,height:40,rx:4,class:'ink'},F);
const IM=[[220,420],[370,380],[520,430],[250,600],[400,620],[560,580]].map((q,i)=>{const g=mk('g',{fill:'var(--muted)','fill-opacity':.6},$('inm'));P(g,q[0],q[1],22,'');const tx=mk('text',{x:q[0],y:q[1]-36,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=i%2?'HOW?':'WHY?';return g});
P($('lec'),850,480,28,'gain');
// grass only at the far right, well clear of where Lec stops (x≈1300)
[1410,1445,1472].forEach(x=>mk('path',{d:`M${x} 640l-7-20M${x} 640v-26M${x} 640l7-20`,stroke:'var(--gain)','stroke-width':4,'stroke-linecap':'round'},$('grass')));
// running Lec: head + bust (same icon as scene 4), legs/arms animated in render
P($('rbody'),0,0,20,'gain');
const LEX=1300;
const RW=[[300,['What is great about this problem?']],[410,['What is not perfect yet?']],[520,['What am I willing to do','to make it the way I want?']],[670,['How can I enjoy the process while I fix it?']]].map(([y,ls],i)=>{const g=mk('g',{},$('rows'));if(i<3)mk('rect',{x:560,y:y-42,width:56,height:56,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);ls.forEach((s,j)=>{mk('text',{x:650,y:y+j*40,'font-size':34,class:'d5'},g).textContent=s});const tk=i<3?mk('path',{d:`M572 ${y-16}l12 12 24-26`,fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g):null;return [g,tk]});
const DD=[];for(let i=0;i<7;i++)DD.push(mk('circle',{cx:160+i*110,cy:760,r:24},$('dd')));