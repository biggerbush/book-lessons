const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,fs,cls,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:cls},a||{}),g);e.textContent=s;return e};
const LEN=(e,d)=>{try{return e.getTotalLength()||d}catch(x){return d}};
const draw=(e,L,k)=>{e.style.strokeDasharray=L;e.style.strokeDashoffset=(L*(1-k)).toFixed(1)};
const tr=(e,x,y)=>e.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')');
const BR=[];for(let r=0;r<7;r++)for(let c=-1;c<4;c++){const xs=1240+c*70+(r%2?35:0),x1=Math.max(1240,xs),x2=Math.min(1460,xs+66);if(x2-x1>8)BR.push(mk('rect',{x:x1,y:250+r*40,width:x2-x1,height:36,rx:3,class:'loss'},$('wall')))}
[180,300,420].forEach((x,i)=>{mk('circle',{cx:x,cy:290,r:40,fill:i==1?'var(--gain)':'none',stroke:i==1?'var(--gain)':'var(--line)','stroke-width':5},$('disc'));tx($('disc'),x,304,String(i+1),40,'d',{'text-anchor':'middle',style:i==1?'fill:var(--on-gain)':'fill:var(--muted)'})});
tx($('disc'),490,308,'Action',52,'d',{style:'fill:var(--gain)'});
const ST=[];for(let i=0;i<8;i++)ST.push(mk('rect',{x:400+i*125,y:780-(i+1)*40,width:125,height:(i+1)*40,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('steps')));
fig($('climber'),260,696,20,'ink');
fig($('gr'),290,320,40,'gain');tx($('gr'),290,540,'GEN. ULYSSES GRANT',20,'m',{'text-anchor':'middle'});
for(let i=0;i<18;i++)mk('circle',{cx:170+(i%6)*48,cy:600+Math.floor(i/6)*40,r:12,class:'gain'},$('army'));
tx($('army'),290,730,'UNION ARMY',20,'m',{'text-anchor':'middle'});
[[660,390],[700,640],[1230,680],[1330,340],[1290,580]].forEach(q=>{mk('ellipse',{cx:q[0],cy:q[1],rx:54,ry:16,class:'loss','fill-opacity':.3},$('swamp'));mk('path',{d:'M'+(q[0]-20)+' '+(q[1]-6)+'l-6-24M'+q[0]+' '+(q[1]-6)+'v-30M'+(q[0]+20)+' '+(q[1]-6)+'l6-24',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round',fill:'none'},$('swamp'))});
const RL=LEN($('riv'),700),RL2=LEN($('riv2'),600),ML=LEN($('march'),900),AL=LEN($('act'),620),S1=LEN($('sc1'),420),S2=LEN($('sc2'),330);
const cards=[],xs=[];
['DIG CANALS','BOATS THROUGH BAYOUS','ANOTHER ROUTE','THE NEXT THING'].forEach((s,i)=>{const x=120+i*350,g=mk('g',{},$('cards')),G=i==3;
 mk('rect',{x:x,y:240,width:310,height:300,rx:16,fill:'var(--stage)',stroke:G?'var(--gain)':'var(--line)','stroke-width':G?5:3},g);
 tx(g,x+155,515,s,20,'m',{'text-anchor':'middle',style:G?'fill:var(--gain)':''});
 [[['M'+(x+30)+' 300C'+(x+150)+' 280 '+(x+170)+' 470 '+(x+280)+' 450','var(--ice)',16],['M'+(x+30)+' 300L'+(x+280)+' 450','var(--ink)',6,'12 10']],
  [['M'+(x+90)+' 410h130l-22 30h-86z','var(--ink)',6],['M'+(x+155)+' 410v-80l40 60z','var(--ink)',5],['M'+(x+40)+' 460q30-12 60 0t60 0t60 0t60 0','var(--muted)',4],['M'+(x+40)+' 440v-60M'+(x+270)+' 440v-60','var(--muted)',4]],
  [['M'+(x+40)+' 460Q'+(x+120)+' 300 '+(x+220)+' 380','var(--ink)',6,'12 10'],['M'+(x+240)+' 320v130','var(--loss)',20]],
  [['M'+(x+60)+' 390h180m-40-40 40 40-40 40','var(--gain)',12]]][i].forEach(a=>mk('path',{d:a[0],fill:'none',stroke:a[1],'stroke-width':a[2],'stroke-dasharray':a[3]||'none','stroke-linecap':'round','stroke-linejoin':'round'},g));
 cards.push(g);
 if(i<3)xs.push(mk('path',{d:'M'+(x+100)+' 325l110 110m0-110l-110 110',stroke:'var(--loss)','stroke-width':12,'stroke-linecap':'round'},$('xs')))});
[180,250,320].forEach(x=>fig($('crowd3'),x,680,16,'ink'));
const BT=[0,1,2].map(()=>mk('path',{d:'M-22 -8h44l-10 16h-24z',class:'gain'},$('boats')));
for(let i=0;i<12;i++){const a=i*Math.PI/6,x=605+120*Math.cos(a),y=410+120*Math.sin(a);if(x>515&&y>330)mk('circle',{cx:x,cy:y,r:10,class:'gain'},$('siege'))}
const FD=[0,1,2,3,4].map(i=>mk('circle',{cx:960,cy:360+i*85,r:14,class:i==2?'gain':'ink'},$('fun')));
[200,290,380].forEach(x=>fig($('ppl'),x,290,20,'ink'));
const LP=[['RELEASE',880,290],['WATCH',1036,560],['IMPROVE',724,560]].map(a=>{const g=mk('g',{},$('loop'));const r=mk('rect',{x:a[1]-95,y:a[2]-28,width:190,height:56,rx:28,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);tx(g,a[1],a[2]+7,a[0],20,'m',{'text-anchor':'middle',style:'fill:var(--ink)'});return r});
const LD=mk('circle',{r:14,class:'gain'},$('loop'));
const CX=[];for(let i=0;i<28;i++){const x=140+(i%7)*54,y=310+Math.floor(i/7)*58;mk('rect',{x:x,y:y,width:46,height:46,rx:6,fill:'none',stroke:'var(--line)','stroke-width':3},$('cal'));CX.push(mk('path',{d:'M'+(x+10)+' '+(y+10)+'l26 26m0-26l-26 26',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},$('cal')))}
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(770+105*c).toFixed(1)+' '+(400+105*s).toFixed(1)+'L'+(770+118*c).toFixed(1)+' '+(400+118*s).toFixed(1),stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('clk'))}
const C4=['START NOW','TEST','ADJUST','REPEAT'].map((s,i)=>{const x=120+i*340,g=mk('g',{},$('c4'));mk('rect',{x:x,y:690,width:280,height:70,rx:35,class:'gain'},g);tx(g,x+140,736,s,30,'d5',{'text-anchor':'middle',style:'fill:var(--on-gain)'});if(i<3)mk('path',{d:'M'+(x+292)+' 725h36m-12-12 12 12-12 12',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
for(let i=0;i<5;i++)mk('circle',{cx:180+i*80,cy:240,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('nb'));
const SN=[[780,640],[930,560],[1080,480],[1230,400],[1380,320]],STN=SN.map(q=>mk('ellipse',{cx:q[0],cy:q[1],rx:60,ry:20,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('stones')));
['TAKE IT','NOTICE','CHOOSE NEXT'].forEach((s,i)=>tx($('stones'),SN[i][0],SN[i][1]+52,s,20,'m',{'text-anchor':'middle'}));
fig($('hop'),0,-63,14,'gain');
const DY=[0,1,2,3,4,5,6].map(i=>mk('rect',{x:720+i*100,y:760,width:56,height:56,rx:8,fill:'none',stroke:'var(--ink)','stroke-width':4},$('days')));
const TRY=[590,660,730,800].map((y,i)=>mk('path',{d:'M'+(i?1060:1200)+' '+y+'H1370m-24-20 24 20-24 20',fill:'none',stroke:i?'var(--gain)':'var(--loss)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('tries')));