const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tf=(id,s)=>$(id).setAttribute('transform',s);
fig($('tfig'),1300,560,24,'ink');
fig($('manf'),340,420,40,'ink');
const tk=[];for(let i=0;i<5;i++)tk.push(mk('path',{d:'M'+(970+i*65)+' 710h40l-40-30z',class:'loss'},$('temps')));
const W3=[];
const bld=(g,arr)=>{[160,1180].forEach((bx,b)=>{mk('rect',{x:bx,y:330,width:260,height:460,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);for(let j=0;j<5;j++)for(let i=0;i<3;i++){const w=mk('rect',{x:bx+30+i*80,y:370+j*80,width:40,height:44,rx:4,fill:'var(--line)'},g);if(b&&arr)arr.push(w)}})};
bld($('b2'));bld($('b3'),W3);
fig($('f2'),330,237,22,'ink');fig($('walk'),0,237,22,'gain');fig($('kid'),1340,276,13,'gain');
for(let i=0;i<6;i++)mk('circle',{cx:160,cy:290+i*86,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
// junk food: start on cupboard shelves, end piled in the bin
const JT=[[1118,650],[1160,640],[1204,652],[1150,705]];
const JK=[[255,540],[325,540],[290,650],[370,650]].map((q,i)=>{const g=mk('g',{},$('junk'));mk('rect',{x:q[0],y:q[1],width:50,height:70,rx:6,class:'loss'},g);mk('path',{d:'M'+(q[0]+10)+' '+(q[1]+24)+'h30',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round'},g);return [g,q[0],q[1],JT[i][0],JT[i][1]]});
fig($('pals'),1100,420,34,'ink');fig($('pals'),1320,420,34,'gain');
const CK=[];for(let i=0;i<5;i++){mk('rect',{x:1060+i*66,y:700,width:44,height:44,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('days'));CK.push(mk('path',{d:'M'+(1070+i*66)+' 722l9 10 17-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('days')))}
// dirt clods flying from the hole to the mound
const CLD=[0,1,2].map(i=>mk('circle',{cx:1200,cy:500,r:9,fill:'var(--muted)'},$('clods')));
const FC=[1393,1426,1377];