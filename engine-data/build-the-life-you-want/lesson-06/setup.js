const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const BM=['M1070 700H1470','M1110 700V400','M1223 700V400','M1337 700V400','M1450 700V400','M1070 400H1470','M1070 400L1270 260L1470 400'].map(d=>mk('path',{d:d,class:'s-ink','stroke-width':10,'stroke-linecap':'round','stroke-linejoin':'round',fill:'none'},$('frame')));
const CELL=[0,1,2,3].map(i=>mk('rect',{x:204+i*86,y:364,width:72,height:172,rx:8,class:'gain'},$('cells')));
[0,1,2,3].forEach(i=>mk('rect',{x:1082+i*90,y:370,width:46,height:230,class:'gain'},$('minip')));
const PX=[380,640,960,1220],PN=['Family','Friendship','Work','Faith'];
const PL=PX.map(x=>mk('rect',{x:x-50,y:370,width:100,height:320,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},$('cols')));
const LB=PX.map((x,i)=>{const e=mk('text',{x:x,y:780,'font-size':36,'text-anchor':'middle',class:'d5'},$('cols'));e.textContent=PN[i];return e});
[230,360,490,620].forEach(x=>fig($('famp'),x,420,24,'ink'));
fig($('chp'),960,410,24,'ink');fig($('chp'),1320,410,24,'ink');
fig($('dealF'),330,320,28,'ink');fig($('dealF'),550,320,28,'ink');
fig($('realF'),1100,320,28,'ink');fig($('realF'),1220,320,28,'ink');
const CC=[];for(let i=0;i<28;i++)CC.push(mk('rect',{x:175+(i%7)*67,y:315+Math.floor(i/7)*79,width:59,height:70,rx:8,fill:'var(--gain)','fill-opacity':0,stroke:'var(--line)','stroke-width':3},$('cells2')));
const BLK=[9,10,11,24,25];
const ST=[];[[960,'ink'],[1280,'gain']].forEach(([x,c])=>{mk('path',{d:'M'+(x-60)+' 440h120v70a40 40 0 0 1-40 40h-40a40 40 0 0 1-40-40z',class:c},$('cupg'));mk('path',{d:'M'+(x+60)+' 460a24 24 0 0 1 0 48',fill:'none',stroke:'var(--'+c+')','stroke-width':8},$('cupg'));for(let k=0;k<2;k++)ST.push(mk('path',{d:'M'+(x-20+k*40)+' 420q-14-20 0-40t0-40',fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},$('cupg')))});
fig($('deskF'),230,410,24,'ink');fig($('handF'),1280,360,20,'ink');
const SR=[];for(let i=0;i<40;i++){const x=160+((i*367)%1280),y=230+((i*151)%220);if(x>1290&&y<350)continue;SR.push(mk('circle',{cx:x,cy:y,r:3+(i%3)*1.5,class:'gain'},$('stars')))}
fig($('skyp'),300,530,22,'ink');
[700,800,900,1180,1290,1400].forEach(x=>mk('path',{d:'M'+(x-45)+' 640L'+x+' 500L'+(x+45)+' 640z',class:'ink'},$('trees')));
const CR=['FAMILY','FRIENDS','WORK','FAITH'].map((s,i)=>{const y=320+i*80,g=mk('g',{},$('ckr'));mk('rect',{x:1170,y:y-26,width:36,height:36,rx:6,fill:'none',stroke:i===1?'var(--loss)':'var(--ink)','stroke-width':4},g);const tx=mk('text',{x:1226,y:y+6,'font-size':22,class:'m'},g);tx.textContent=s;const c=i===1?null:mk('path',{d:'M1177 '+(y-8)+'l9 10 16-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);return [g,c]});