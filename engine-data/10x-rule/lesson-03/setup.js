const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const tx=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
const TB=[16,40,140,380].map((h,i)=>{const r=mk('rect',{x:1120+i*90,y:640,width:70,height:0,rx:6,class:i==3?'gain':'ink','fill-opacity':i==3?1:.25+i*.2},$('tbars'));tx($('tbars'),i+1,{x:1155+i*90,y:684,'font-size':24,'text-anchor':'middle',class:'m'});return [r,h]});
P($('p1'),420,380,36,'ink');
const EX=['NOT READY YET','BAD TIMING','MAYBE NEXT WEEK'].map((s,i)=>{const g=mk('g',{},$('ex'));mk('rect',{x:760,y:250+i*120,width:420,height:84,rx:42,fill:'var(--stage)',class:'s-muted','stroke-width':4},g);tx(g,s,{x:970,y:301+i*120,'font-size':24,'text-anchor':'middle',class:'m'});return g});
P($('wp'),0,500,30,'ink');
const CR=[];for(let i=0;i<15;i++){const g=mk('g',{},$('crowd'));P(g,200+(i%5)*110,400+Math.floor(i/5)*110,18,'ink');CR.push(g)}
const ST=[];for(let i=0;i<10;i++)ST.push(mk('rect',{x:680,y:760-(i+1)*46,width:320,height:40,rx:8,class:'gain','fill-opacity':i%2?.7:1},$('stack')));
[1190,1300,1410].forEach(x=>P($('ol'),x,600,22,'ink'));
const TL=[[],[]],DL=[[],[]];
['pL','pR'].forEach((id,k)=>{const x=k?840:120,g=$(id);
mk('rect',{x:x,y:220,width:640,height:480,rx:18,fill:'var(--stage)',class:'s-line','stroke-width':3},g);
P(g,x+100,320,30,'gain');
mk('rect',{x:x+180,y:330,width:44,height:80,rx:10,fill:'var(--stage)',class:'s-ink','stroke-width':5},g);
tx(g,k?'Massive action':'Normal action',{x:x+290,y:300,'font-size':36,class:'d5',style:k?'fill:var(--gain)':''});
(k?['KEEPS CALLING','FOLLOWS UP LATE']:['USUAL CALLS','STOPS AT SHIFT END']).forEach((s,j)=>tx(g,s,{x:x+290,y:350+j*32,'font-size':20,class:'m'}));
for(let i=0;i<(k?30:6);i++){const cx=x+50+(i%15)*38,cy=490+Math.floor(i/15)*72;TL[k].push(mk('path',{d:'M'+cx+' '+cy+'v50',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},g))}
tx(g,'DEALS',{x:x+50,y:667,'font-size':20,class:'m'});
for(let i=0;i<(k?5:1);i++)DL[k].push(mk('circle',{cx:x+170+i*48,cy:660,r:16,class:'gain'},g))});
const PL=[[220,680],[300,680],[380,680],[460,680],[540,680],[220,600],[300,600],[380,600],[460,600],[540,600],[260,500],[340,500],[420,500],[500,500],[300,420],[380,420],[460,420],[670,700],[730,700]].map((q,i)=>{const g=mk('g',{},$('pile'));P(g,q[0],q[1],14,i<10?'ink':'loss');return g});
const CX=500,CY=620,R=280,pt=(a,r)=>(CX+r*Math.cos(a*Math.PI/180)).toFixed(1)+' '+(CY+r*Math.sin(a*Math.PI/180)).toFixed(1);
for(let k=0;k<4;k++){const a0=180+45*k+2,a1=a0+41;mk('path',{d:'M'+pt(a0,R)+'A'+R+' '+R+' 0 0 1 '+pt(a1,R),fill:'none',stroke:['var(--line)','var(--line)','var(--muted)','var(--gain)'][k],'stroke-width':44},$('arcs'));
const q=pt(202.5+45*k,350).split(' ');tx($('arcs'),k+1,{x:q[0],y:+q[1]+12,'font-size':36,'text-anchor':'middle',class:'d',style:k==3?'fill:var(--gain)':''})}
const DY=[];for(let i=0;i<7;i++){const g=mk('g',{},$('days')),x=920+i*78;mk('rect',{x:x,y:330,width:62,height:62,rx:10,class:'gain'},g);mk('path',{d:'M'+(x+16)+' 362l10 10 20-22',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);DY.push(g)}
P($('mpA'),1360,370,30,'ink');P($('mpB'),1360,370,30,'gain');