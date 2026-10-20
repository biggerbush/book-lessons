const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const sec=(cx,cy,r0,r1,a0,a1)=>{const P=(r,a)=>(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1);return 'M'+P(r0,a0)+'L'+P(r1,a0)+'A'+r1+' '+r1+' 0 0 1 '+P(r1,a1)+'L'+P(r0,a1)+'A'+r0+' '+r0+' 0 0 0 '+P(r0,a0)+'Z'};
[[270,540,16],[360,530,20],[450,545,15]].forEach(q=>person($('cavep'),q[0],q[1],q[2],'loss'));
for(let i=0;i<6;i++)mk('ellipse',{cx:730+i*60,cy:i%2?565:530,rx:13,ry:20,class:'ink'},$('trk'));
const S0=[],S1=[];
for(let i=0;i<8;i++){const a0=-Math.PI/2+i*Math.PI/4,a1=a0+Math.PI/4;
  S0.push(mk('path',{d:sec(440,490,80,200,a0,a1),fill:'var(--gain)',stroke:'var(--stage)','stroke-width':6},$('w0')));
  S1.push(mk('path',{d:sec(1160,490,80,200,a0,a1),fill:'var(--line)',stroke:'var(--stage)','stroke-width':6},$('w1')));
  if(i){const a=(a0+a1)/2;mk('circle',{cx:1160+240*Math.cos(a),cy:490+240*Math.sin(a),r:14,class:'ink'},$('exs'))}}
[440,1160].forEach((x,k)=>{const g=$('w'+k);mk('circle',{cx:x,cy:490,r:76,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);person(g,x,456,18,'ink')});
// decorative ring now sits OUTSIDE the plate rim (r=258), well clear of every food label inside
const RG=[];for(let i=0;i<36;i++){const a=i*Math.PI/18;RG.push(mk('circle',{cx:460+258*Math.cos(a),cy:500+258*Math.sin(a),r:7,fill:i%3?'var(--ink)':'var(--gain)'},$('ring')))}
const FN=['BERRIES','NUTS','SNAILS','TURTLES','RABBITS','GREENS'],FC=['gain','ink','muted','ink','muted','gain'];
const FD=FN.map((s,i)=>{const a=-Math.PI/2+i*Math.PI/3,x=460+120*Math.cos(a),y=490+120*Math.sin(a),g=mk('g',{},$('foods'));
  mk('circle',{cx:x,cy:y,r:26,fill:'var(--'+FC[i]+')'},g);const tx=mk('text',{x:x,y:y+50,'font-size':18,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
const FX=mk('path',{d:'M436 346l48 48M484 346l-48 48',stroke:'var(--loss)','stroke-width':7,'stroke-linecap':'round'},$('foods'));
for(let i=0;i<7;i++)mk('ellipse',{cx:1060+i*40,cy:472,rx:14,ry:8,class:'gain'},$('grains'));
const DY=[];for(let i=0;i<9;i++){const x=600+i*95,g=mk('g',{},$('days')),h=i%3===0;
  mk('rect',{x:x,y:640,width:70,height:70,rx:10,fill:h?'var(--gain)':'var(--stage)',stroke:h?'var(--gain)':'var(--line)','stroke-width':4},g);
  if(h)mk('path',{d:'M'+(x+35)+' 696v-40m-12 14l12-14 12 14',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);DY.push(g)}
for(let i=0;i<5;i++)person($('band'),250+i*75,470,20,i===2?'gain':'ink');
for(let i=0;i<4;i++)for(let j=0;j<3;j++){const x=850+i*150,y=320+j*120;mk('path',{d:'M'+x+' '+(y+30)+'l45-30 45 30z',class:'ink'},$('houses'));mk('rect',{x:x,y:y+30,width:90,height:50,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('houses'))}
const GM=[];for(let i=0;i<16;i++)GM.push(mk('circle',{cx:840+(i*137)%600,cy:310+(i*89)%360,r:9,class:'loss'},$('germs')));
const ST=[[1220,640],[1290,590],[1360,650],[1440,610],[1400,740]];
mk('path',{d:'M'+ST.map(q=>q.join(' ')).join('L'),fill:'none',stroke:'var(--line)','stroke-width':4},$('sky'));
const SS=ST.map(q=>mk('circle',{cx:q[0],cy:q[1],r:10,class:'gain'},$('sky')));
const S=i=>SC[i][0]/K;