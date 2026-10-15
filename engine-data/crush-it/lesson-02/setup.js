const IC={heart:'M0 40C-50 8-54-30-25-37C-12-40-3-31 0-23C3-31 12-40 25-37C54-30 50 8 0 40Z',
flame:'M0-48C18-24 36-8 30 16C26 36 12 46 0 46C-12 46-28 36-30 16C-32-2-18-12-12-26C-6-10 0-6 4-12C10-24 4-36 0-48Z',
hammer:'M-40-40h60v26h-60zM-6-14h14v60h-14z',
bottle:'M-10-60h20v30c12 6 16 14 16 26v74h-52v-74c0-12 4-20 16-26z',
house:'M-46 0L0-40L46 0v44h-92z'};
const ico=(g,n,x,y,s,cls)=>mk('path',{d:IC[n],transform:'translate('+x+' '+y+') scale('+s+')',class:cls},g);
const per=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const txt=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
const strike=(id,w,k)=>{const l=$(id);l.setAttribute('x2',(+l.getAttribute('x1')+w*k).toFixed(1))};
const POD=[[1050,410,130,'2','hammer'],[1190,340,200,'1','heart'],[1330,450,90,'3','flame']].map((q,i)=>{const g=mk('g',{},$('pod'));
  mk('rect',{x:q[0],y:q[1],width:140,height:q[2],class:i==1?'gain':'ink'},g);
  txt(g,q[3],{x:q[0]+70,y:q[1]+62,'font-size':48,'text-anchor':'middle',class:'d',style:'fill:var('+(i==1?'--on-gain':'--stage')+')'});
  ico(g,q[4],q[0]+70,q[1]-60,.9,i==1?'gain':'ink');return g});
const CARDS=[['Family','heart'],['Hustle','hammer'],['Passion','flame']].map((q,i)=>{const x=120+i*460,g=mk('g',{},$('cards'));
  mk('rect',{x:x,y:230,width:440,height:300,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  ico(g,q[1],x+220,345,1.2,i?'ink':'gain');txt(g,q[0],{x:x+220,y:480,'font-size':52,'text-anchor':'middle',class:'d'});
  const b=mk('g',{},$('cards'));mk('circle',{cx:x+56,cy:286,r:30,class:'gain'},b);
  txt(b,String(i+1),{x:x+56,y:298,'font-size':32,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'});return [g,b]});
per($('fppl'),970,470,24,'ink');per($('fppl'),1065,500,18,'gain');per($('fppl'),1160,470,24,'ink');
ico($('fshh'),'heart',1405,505,.7,'gain');
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(800+124*c).toFixed(1)+' '+(420+124*s).toFixed(1)+'L'+(800+136*c).toFixed(1)+' '+(420+136*s).toFixed(1),class:'s-ink','stroke-width':i%3?3:6,'stroke-linecap':'round'},$('ctk'))}
ico($('tvh'),'hammer',1300,405,.9,'gain');
const BT=[];[417,537].forEach((y,r)=>{for(let i=0;i<7;i++)BT.push(ico($('wlb'),'bottle',610+i*60,y,.5,(i+r)%2?'ink':'gain'))});
const WK=[];for(let i=0;i<5;i++)WK.push(mk('rect',{x:1180+i*52,y:710,width:40,height:44,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('wk')));
const FLP=ico($('flp'),'flame',0,0,3,'gain');
for(let i=0;i<8;i++){const a=i*Math.PI/4+.39,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1260+122*c).toFixed(1)+' '+(410+122*s).toFixed(1)+'L'+(1260+146*c).toFixed(1)+' '+(410+146*s).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('blr'))}
const pan=(g,lab,item)=>{mk('path',{d:'M0 0L-70 110M0 0L70 110',class:'s-ink','stroke-width':3},g);
  mk('path',{d:'M-80 110h160a80 40 0 0 1-160 0z',class:'ink'},g);item(g);
  txt(g,lab,{x:0,y:190,'font-size':20,'text-anchor':'middle',class:'m'})};
pan($('pl'),'DEADLINE',g=>{mk('rect',{x:-40,y:60,width:80,height:50,rx:6,class:'loss'},g);mk('path',{d:'M-14 60v-12h28v12',fill:'none',class:'s-loss','stroke-width':5},g)});
pan($('pr'),'HOME',g=>ico(g,'house',0,66,.9,'gain'));
ico($('sth'),'heart',1390,370,.6,'gain');
ico($('vh'),'heart',650,478,.45,'gain');
per($('vtp'),1010,600,20,'ink');
const CL=[0,1,2].map(i=>{const y=600+i*60;txt($('cln'),String(i+1),{x:1150,y:y+8,'font-size':24,class:'m'});
  return mk('path',{d:'M1185 '+y+'h215',class:i?'s-ink':'s-gain','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':215,'stroke-dashoffset':215},$('cln'))});