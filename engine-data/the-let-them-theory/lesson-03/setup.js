const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const fr=(a,b,k)=>a+(b-a)*k;
const Y0=fig($('you0'),1300,380,36,'ink');
const QB=[[1170,270],[1430,250],[1450,440]].map(([x,y])=>{const g=mk('g',{},$('qs0'));mk('circle',{cx:x,cy:y,r:30,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);const tx=mk('text',{x:x,y:y+12,'font-size':34,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},g);tx.textContent='?';return g});
fig($('you1'),260,400,44,'ink');
const JR=[];for(let i=0;i<12;i++){const row=i<6?0:1,k=i%6,g=mk('g',{},$('jr'));JR.push({g:g,c:fig(g,800+k*110+row*55,350+row*95,18,'ink')})}
const YR=[];for(let i=0;i<12;i++)YR.push(mk('rect',{x:160+i*110,y:670,width:96,height:30,rx:6,fill:'var(--line)'},$('yr')));
fig($('you3'),190,460,24,'ink');
const JD=[];[305,675].forEach(y=>[920,962,1004].forEach(x=>{const g=mk('g',{},$('jd3'));mk('circle',{cx:x,cy:y,r:16,class:'loss'},g);JD.push(g)}));
const RN=[0,1,2,3].map(i=>mk('path',{d:'M'+(182+i*26)+' 722l-4 10',class:'s-muted','stroke-width':4,'stroke-linecap':'round'},$('rn3')));
fig($('oth4'),910,590,30,'ink');fig($('oth4'),1295,590,30,'ink');
fig($('w4'),200,590,30,'gain');
const CR=[];for(let i=0;i<8;i++){const g=mk('g',{},$('cr5'));fig(g,i<4?820+i*70:1200+(i-4)*70,500,18,i<4?'gain':'loss');CR.push(g)}
fig($('cl6'),0,0,22,'gain');
const P7=fig($('p7'),420,472,40,'ink');
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1150+110*c).toFixed(1)+' '+(470+110*s).toFixed(1)+'L'+(1150+140*c).toFixed(1)+' '+(470+140*s).toFixed(1),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('ry7'))}