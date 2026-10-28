const pp=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const tx=(g,x,y,s,fs,st,a)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:'m','text-anchor':a||'middle'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const blocks=(par,x,w,y0,L)=>L.map((s,i)=>{const g=mk('g',{},par),y=y0-i*70;mk('rect',{x:x,y:y,width:w,height:66,rx:8,class:'gain'},g);tx(g,x+w/2,y+42,s,22,'fill:var(--on-gain)');return g});
const TB=blocks($('tb'),1180,260,690,['OUTSIDER','TIMING','WORK']);
const BOY=mk('g',{},$('boyW'));pp(BOY,0,-84,20,'gain');
const WN=[];for(let i=0;i<9;i++)for(let j=0;j<2;j++)WN.push([mk('rect',{x:1245+j*70,y:600-i*40,width:40,height:20,class:'gain'},$('wins')),600-i*40]);
pp($('fl'),0,-92,22,'gain');
// documents: fly in and settle into a neat stack inside the office, right of the door
const PS=[0,1,2,3].map(i=>[1290,594-i*12]);
const PA=PS.map(()=>{const g=mk('g',{},$('papers'));mk('rect',{x:0,y:0,width:60,height:44,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M12 15H48M12 29H38',stroke:'var(--muted)','stroke-width':3,'stroke-linecap':'round'},g);return g});
const BH=[40,80,210,330],BR=BH.map((h,i)=>{tx($('bars'),840+i*160,692,['1950s','1960s','1970s','1980s'][i],20);return mk('rect',{x:790+i*160,y:650,width:100,height:0,class:i>1?'gain':'ink'},$('bars'))});
const BY=y=>340+180*Math.exp(-Math.pow((y-1934)/4,2)),BX=y=>180+(y-1915)*22;
const ST=[];for(let r=0;r<2;r++)for(let c=0;c<4;c++){const x=1030+c*120,y=340+r*160,i=r*4+c;
  if([0,3,5,6].includes(i)){const g=mk('g',{},$('seats'));pp(g,x,y,16,'gain');ST.push(g)}else mk('circle',{cx:x,cy:y+20,r:18,fill:'none',stroke:'var(--line)','stroke-width':4,'stroke-dasharray':'6 6'},$('seats'));
  mk('rect',{x:x-50,y:y+60,width:100,height:14,rx:4,class:'ink'},$('desks'))}
pp($('fam'),880,522,20,'ink');pp($('fam'),960,522,20,'ink');pp($('fam'),1030,547,14,'gain');
for(let i=0;i<5;i++){const x=1140+i*60;mk('path',{d:'M'+x+' 380v14',stroke:'var(--ink)','stroke-width':4},$('rack'));mk('rect',{x:x-22,y:394,width:44,height:70,rx:6,class:i%2?'ink':'gain'},$('rack'))}
const CH=['MAKE DECISIONS','SOLVE PROBLEMS','SELL'].map((s,i)=>{const g=mk('g',{},$('chips')),x=800+i*240;mk('rect',{x:x,y:640,width:200,height:52,rx:26,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);tx(g,x+100,672,s,18,'fill:var(--ink)');return g});
[[237,330],[329,330],[237,422]].forEach(q=>mk('rect',{x:q[0],y:q[1],width:88,height:88,rx:8,class:'ink'},$('pz')));
const PZ=mk('rect',{x:329,y:422,width:88,height:88,rx:8,class:'gain'},$('pz'));
const CO=[[1145,520],[1215,470],[1285,420],[1355,370],[1415,320]].map((q,i)=>{const r=8+i*4;return mk('circle',{cx:q[0],cy:q[1]-12-r,r:r,class:'gain'},$('coins'))});
pp($('ktp'),240,460,24,'ink');pp($('ktp'),500,460,24,'ink');pp($('ktp'),370,500,16,'gain');
pp($('adp'),840,460,24,'gain');
const SB=blocks($('sk'),1100,340,590,['OUTSIDER STATUS','TIMING','FAMILY LESSON']);
pp($('sf'),1270,366,20,'ink');tx($('sf'),1270,330,'FLOM',22,'fill:var(--ink)');