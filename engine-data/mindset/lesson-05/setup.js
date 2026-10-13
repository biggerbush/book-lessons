const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const PL=(pts,k)=>{const n=pts.length-1,f=cl(k)*n,i=Math.floor(f),s=pts.slice(0,Math.min(i,n)+1);if(i<n){const a=pts[i],b=pts[i+1],r=f-i;s.push([a[0]+(b[0]-a[0])*r,a[1]+(b[1]-a[1])*r])}if(s.length<2)s.push(s[0]);return s.map(q=>q[0].toFixed(1)+','+q[1].toFixed(1)).join(' ')};
fig($('throne'),1250,360,26,'loss');
fig($('learner'),1420,420,24,'gain');
fig($('mir'),340,514,30,'loss');
fig(mk('g',{opacity:.5},$('mir')),580,450,18,'loss');
// growth panel: the boss stands with the briefcase, team members rise around
fig($('tool'),1160,462,28,'gain');
const AR=[950,1040,1280,1370].map(x=>{fig($('tool'),x,470,22,'ink');return mk('path',{d:'M'+x+' 420V362m-14 14 14-14 14 14',class:'s-gain',fill:'none','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('tool'))});
fig($('spotF'),1280,580,28,'gain');
[1120,1440].forEach(x=>fig($('spotO'),x,662,14,'ink'));
fig($('door'),500,470,22,'loss');
const OUT=[0,1,2].map(()=>{const g=mk('g',{},$('outs'));fig(g,0,0,20,'ink');return g});
const FP=[[640,320],[720,300],[800,360],[860,340],[940,450],[1000,430],[1080,600]];
const VB=[[1250,330],[1390,330],[1250,500],[1390,500]].map(q=>{fig($('voices'),q[0],q[1],18,'ink');const b=mk('g',{},$('voices'));
  mk('rect',{x:q[0]+20,y:q[1]-62,width:46,height:40,rx:10,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},b);
  const tx=mk('text',{x:q[0]+43,y:q[1]-32,'font-size':30,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},b);tx.textContent='!';return b});
// simulated company: worker seats on the left, arrows into job slots
for(let j=0;j<3;j++){const y=307+j*70;
  mk('rect',{x:880,y:280+j*70,width:120,height:54,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-dasharray':'8 6'},$('jobs'));
  mk('circle',{cx:630,cy:y,r:14,fill:'none',stroke:'var(--gain)','stroke-width':4},$('jobs'));
  mk('path',{d:'M664 '+y+'H864m-12-12 12 12-12 12',fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},$('jobs'))}
const WK=[0,1,2].map(()=>mk('circle',{r:14,class:'gain'},$('jobs')));
const SF=[200,320,440,560,1040,1160,1280,1400].map(x=>fig($('stu'),x,620,24,'ink'));
const GP=[[200,630],[320,600],[420,615],[520,560],[620,520],[720,545],[820,460],[940,410],[1060,320]], FX=[[200,650],[400,640],[600,655],[800,642],[1060,650]];
for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3;mk('circle',{cx:420+190*Math.cos(a),cy:520+190*Math.sin(a),r:26,class:i?'ink':'gain'},$('heads'))}
// IBM: a status staircase that collapses into a linked, equal team
const ST=[0,16,32,48,64,80], TX=[880,980,1080,1180,1280,1380];
ST.forEach((h,i)=>{if(h>0)mk('rect',{x:TX[i]-42,y:450-h,width:84,height:h,fill:'var(--line)',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},$('steps6'))});
const TF=TX.map(()=>{const g=mk('g',{},$('team6'));return [g,fig(g,0,-59,14,'ink')]});
const LN=TX.slice(0,5).map((x,i)=>mk('path',{d:'M'+(x+26)+' 440H'+(TX[i+1]-26),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('links6')));
[850,910,970].forEach(x=>fig($('od'),x,620,16,'ink'));
fig($('od'),1400,610,20,'gain');
let DAY;for(let j=0;j<3;j++)for(let i=0;i<4;i++){const r=mk('rect',{x:257+i*40,y:408+j*36,width:24,height:24,rx:4,fill:'var(--line)'},$('days'));if(i===2&&j===1){r.setAttribute('fill','var(--gain)');DAY=r}}
for(let k=0;k<7;k++){const a=Math.PI+k*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1340+95*c).toFixed(1)+' '+(290+95*s).toFixed(1)+'L'+(1340+125*c).toFixed(1)+' '+(290+125*s).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays'))}