const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,str,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s},a||{}),g);e.textContent=str;return e};
const TD=[];for(let i=0;i<8;i++)TD.push(mk('circle',{r:12,class:'loss'},$('t0dots')));
fig($('a1p'),440,400,36,'ink');
fig($('ep'),330,380,50,'ink');
for(let i=0;i<5;i++)mk('ellipse',{cx:266+i*32,cy:650,rx:20,ry:12,fill:'none',stroke:'var(--ink)','stroke-width':5},$('chain2'));
[[1160,440,26],[1290,480,18],[1400,430,22],[1200,580,20],[1340,620,30],[1170,720,16],[1420,720,24],[1290,760,14]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],class:'loss'},$('lossdots')));
const cards=[['JUDGMENTS','CHOICES','EFFORT','ATTITUDE'],['WEATHER','THE ECONOMY','OTHER PEOPLE','THE PAST']].map((arr,s)=>arr.map((w,i)=>{const g=mk('g',{},$(s?'pr':'pl')),x=(s?860:140)+(i%2)*24,y=290+i*84;
mk('rect',{x:x,y:y,width:440,height:66,rx:14,fill:s?'var(--stage)':'var(--gain)',stroke:s?'var(--loss)':'var(--gain)','stroke-width':5},g);
tx(g,x+28,y+42,26,w,{class:'m',style:'fill:'+(s?'var(--loss)':'var(--on-gain)')});return g}));
fig($('bx'),420,400,46,'ink');
[330,510].forEach(x=>mk('circle',{cx:x,cy:520,r:34,class:'gain'},$('bx')));
const BARS=[];for(let i=0;i<6;i++)BARS.push(mk('line',{x1:268+i*61,y1:250,x2:268+i*61,y2:250,stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('bars')));
const OH=['The verdict','The walls','The sentence'].map((w,i)=>{const g=mk('g',{},$('oh')),y=380+i*120;tx(g,760,y,52,w,{class:'d5'});mk('path',{d:'M1340 '+(y-38)+'l40 40m0-40l-40 40',stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round',fill:'none'},g);return g});
const BK=[300,250,280,230].map((w,i)=>mk('rect',{x:800-w/2+(i%2?14:-10),y:590-(i+1)*46,width:w,height:40,rx:6,fill:i%2?'var(--ink)':'var(--gain)'},$('bks')));
fig($('walker'),1273,440,18,'gain');
const CE=[];for(let i=0;i<5;i++)CE.push(mk('rect',{x:180+i*84,y:320,width:72,height:140,rx:8},$('cells')));
for(let x=800;x<=1440;x+=80)for(let y=520;y<=740;y+=70){if(Math.hypot(x-1060,y-640)<120)continue;mk('circle',{cx:x,cy:y,r:12,class:'loss','fill-opacity':.6},$('spdots'))}
const SIDE=[0,1,1,0,1,0],PC=SIDE.map((s,i)=>{const k=SIDE.slice(0,i).filter(v=>v===s).length;return {s:s,x0:900+(i%3)*170,y0:250+Math.floor(i/3)*100,x1:(s?1030:330)+k*98,y1:548,el:mk('rect',{width:44,height:44,rx:10},$('pcs'))}});
for(let i=0;i<3;i++){const y=650+i*60;mk('rect',{x:1150,y:y-26,width:32,height:32,rx:6,fill:'none',stroke:'var(--muted)','stroke-width':4},$('clist'));mk('path',{d:'M1204 '+(y-10)+'h'+(i===1?200:160),stroke:i===1?'var(--ink)':'var(--line)','stroke-width':8,'stroke-linecap':'round'},$('clist'))}
const TK=mk('g',{},$('clist'));mk('rect',{x:1150,y:684,width:32,height:32,rx:6,class:'gain'},TK);mk('path',{d:'M1157 700l7 8 13-15',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},TK);