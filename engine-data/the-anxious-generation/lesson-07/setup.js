const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const house=(g,cx,top,w,h)=>{mk('path',{d:'M'+(cx-w/2-10)+' '+top+'L'+cx+' '+(top-h*.5)+'L'+(cx+w/2+10)+' '+top+'z',class:'ink'},g);const b=mk('rect',{x:cx-w/2,y:top,width:w,height:h,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:cx-w*.12,y:top+h*.45,width:w*.24,height:h*.55,class:'ink'},g);return b};
const TH=[[1330,360],[1440,470],[1330,580],[1220,470]].map(q=>{const g=mk('g',{},$('homes'));return [g,house(g,q[0],q[1]-12,60,44)]});
fig($('tkid'),1330,440,18,'gain');
const KD=[];for(let i=0;i<7;i++){const x=220+i*130,g=mk('g',{},$('kids'));const fe=fig(g,x,300,26,i===6?'gain':'ink');KD.push([g,mk('rect',{x:x+22,y:352,width:22,height:36,rx:4,class:'loss',stroke:'var(--stage)','stroke-width':3},g),fe])}
const DM=[];for(let i=0;i<10;i++)DM.push(mk('rect',{x:200+i*120,y:560,width:30,height:140,rx:5,fill:'var(--ink)'},$('dom')));
for(let k=0;k<9;k++)mk('circle',{cx:480+(k%3)*30,cy:455+Math.floor(k/3)*30,r:7,class:'gain'},$('keys'));
const SG=[];for(let i=0;i<6;i++){const y=450+i*56,g=mk('g',{},$('sigs'));mk('path',{d:'M900 '+y+'H1260',class:'s-line','stroke-width':3},g);mk('path',{d:'M910 '+(y-6)+'q15-28 30 0t30 0t30 0t30 0',fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},g);mk('circle',{cx:1330,cy:y-12,r:18,class:'gain'},g);mk('path',{d:'M1321 '+(y-12)+'l6 6 12-12',fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round'},g);SG.push(g)}
for(let a=10;a<=16;a++){const x=160+(a-10)*920/6;mk('path',{d:'M'+x+' 628v24',class:a===16?'s-gain':'s-ink','stroke-width':5},$('ticks'));const tx=mk('text',{x:x,y:690,'font-size':22,'text-anchor':'middle',class:'m'},$('ticks'));tx.textContent=a;if(a===16)tx.setAttribute('style','fill:var(--gain)')}
const K3=fig($('kid3'),0,-110,26,'ink');
const PH=[],LK=[];for(let i=0;i<5;i++){const x=140+i*112,g=$('lockers');PH.push(mk('rect',{x:x+30,y:690,width:40,height:70,rx:8,class:'loss'},$('phs')));mk('rect',{x:x,y:250,width:100,height:410,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:'M'+(x+25)+' 285h50M'+(x+25)+' 300h50M'+(x+25)+' 315h50',class:'s-line','stroke-width':4},g);LK.push(mk('circle',{cx:x+80,cy:460,r:9,fill:'var(--line)'},g))}
[920,1060,1200,1340].forEach(x=>fig($('studs'),x,460,30,'ink'));
const BB=[0,1,2,3].map(i=>{const x=920+i*140,g=mk('g',{},$('bubs'));mk('rect',{x:x-50,y:320,width:100,height:60,rx:30,class:'gain'},g);mk('path',{d:'M'+(x-20)+' 375l-8 22 26-20z',class:'gain'},g);for(let j=-1;j<2;j++)mk('circle',{cx:x+j*22,cy:350,r:5,fill:'var(--on-gain)'},g);return g});
fig($('kid5'),0,-100,22,'gain');
const ST=[[1215,320],[1405,320],[1445,460],[1175,460]].map(q=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?7:18;d+=(i?'L':'M')+(q[0]+r*Math.cos(a)).toFixed(1)+' '+(q[1]+r*Math.sin(a)).toFixed(1)}return mk('path',{d:d+'z',class:'gain'},$('stars'))});
const H7=[[240,350],[600,350],[960,350],[1320,350],[240,620],[600,620],[1320,620]].map(q=>{const g=mk('g',{},$('hs7'));return [g,house(g,q[0],q[1],120,90),q]});
const PK=[[860,735],[905,712],[955,705],[1045,720],[1085,700],[1118,738],[1000,738]];
const KS=PK.map(()=>mk('circle',{r:13,class:'gain'},$('kd7')));
const WV=[30,55,80].map(r=>mk('path',{d:'M1390 '+(640-r)+'a'+r+' '+r+' 0 0 1 '+r+' '+r,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('waves')));