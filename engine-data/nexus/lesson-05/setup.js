const per=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const txt=(g,x,y,s,fs,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,'text-anchor':'middle',class:'m',style:st||''},g);e.textContent=s;return e};
per($('krp'),1340,470,30,'ink');
const GN=[1,3,6,10,14],GR=[34,24,18,14,11],WN=[];
for(let g=1;g<5;g++){const n=GN[g],np=GN[g-1];for(let i=0;i<n;i++){const x=220+g*300,y=260+(i+.5)*520/n,j=Math.floor(i*np/n),px=220+(g-1)*300,py=260+(j+.5)*520/np;
  const e=mk('path',{d:'M'+px+' '+py.toFixed(0)+'L'+x+' '+y.toFixed(0),class:'s-loss','stroke-width':3},$('webE'));
  const c=mk('circle',{cx:x,cy:y.toFixed(0),r:GR[g],class:'loss'},$('webN'));WN.push({c:c,e:e,g:g,i:i})}}
[[440,310,'CONFESSION'],[610,480,'PROOF!'],[440,650,'ARREST'],[270,480,'TORTURE']].forEach(q=>{mk('rect',{x:q[0]-95,y:q[1]-28,width:190,height:56,rx:28,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},$('lpP'));txt($('lpP'),q[0],q[1]+7,q[2],20,'fill:var(--ink)')});
[810,940,1070].forEach(x=>{mk('path',{d:'M'+x+' 386L940 318',class:'s-line','stroke-width':3,'stroke-dasharray':'6 8'},$('jdP'));per($('jdP'),x,410,24,'ink')});
const DG=[];for(let k=0;k<100;k++)DG.push(mk('circle',{cx:780+(k%25)*28,cy:640+Math.floor(k/25)*40,r:9,class:'loss'},$('dgP')));
[190,280,370].forEach(x=>per($('sciP'),x,440,22,'ink'));
per($('eqP'),200,380,30,'ink');per($('eqP'),440,380,30,'ink');
for(let i=0;i<10;i++)mk('path',{d:'M680 '+(320+i*50)+'h'+(i%3===2?260:380),class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('ppL'));
const EP=[[760,325],[980,425],[720,525],[1020,625],[840,725]];
const EX=EP.map(q=>mk('path',{d:'M'+(q[0]-14)+' '+(q[1]-14)+'l28 28m0-28l-28 28',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('errs')));
const RG=EP.map(q=>mk('circle',{cx:q[0],cy:q[1],r:30,fill:'none',stroke:'var(--gain)','stroke-width':5},$('rings')));
const ST=[];for(let i=0;i<8;i++){const x=300+i*140,y=480-i*30;ST.push(mk('path',{d:'M'+x+' '+y+'h140'+(i<7?'v-30':''),fill:'none',class:'s-gain','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('stp')))}
const PL=[];[5,4,3,2].forEach((n,r)=>{for(let j=0;j<n;j++){const x=360+r*32+j*64,y=800-(r+1)*64,g=mk('g',{},$('pl'));mk('rect',{x:x+3,y:y+3,width:58,height:58,rx:6,class:'loss'},g);mk('path',{d:'M'+(x+20)+' '+(y+20)+'l24 24m0-24l-24 24',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round'},g);PL.push(g)}});
[360,460,560,660,760].forEach((x,i)=>per($('tmP'),x,420,26,i===4?'gain':'ink'));