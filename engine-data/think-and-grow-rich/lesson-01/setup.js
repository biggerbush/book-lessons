const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const fl=(cx,by,h,w)=>{const f=v=>v.toFixed(1);return 'M'+f(cx)+' '+f(by-h)+'C'+f(cx+w*.6)+' '+f(by-h*.6)+' '+f(cx+w)+' '+f(by-h*.35)+' '+f(cx+w*.8)+' '+f(by-h*.12)+'C'+f(cx+w*.6)+' '+f(by)+' '+f(cx-w*.6)+' '+f(by)+' '+f(cx-w*.8)+' '+f(by-h*.12)+'C'+f(cx-w)+' '+f(by-h*.35)+' '+f(cx-w*.6)+' '+f(by-h*.6)+' '+f(cx)+' '+f(by-h)+'Z'};
const sk=(id,w,k)=>{const l=$(id);l.setAttribute('x2',(+l.getAttribute('x1')+w*k).toFixed(1))};
const WD={pzt:136};
function measureW(){for(const k in WD){try{const v=$(k).getComputedTextLength();if(v>0)WD[k]=v+12}catch(e){}}}
measureW(); if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measureW);
for(let i=0;i<7;i++){const a=(200+i*140/6)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1320+130*c).toFixed(1)+' '+(360+130*s).toFixed(1)+'L'+(1320+158*c).toFixed(1)+' '+(360+158*s).toFixed(1),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
fig($('dreamer'),260,560,36,'ink');
[[330,500,10],[380,470,16],[445,440,22]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],class:'s-ink',fill:'var(--stage)','stroke-width':4},$('bubs')));
fig($('bar'),300,420,50,'ink');fig($('edi'),1300,420,50,'ink');
const TR=$('trm');
[[0,550,170,90],[185,550,170,90],[370,570,150,70],[370,520,70,50],[480,540,20,30]].forEach((q,i)=>mk('rect',{x:q[0],y:q[1],width:q[2],height:q[3],rx:i>3?3:6,class:i>1?'ink':'s-ink',fill:i>1?'var(--ink)':'var(--stage)','stroke-width':5},TR));
[30,140,215,325,400,490].forEach(x=>mk('circle',{cx:x,cy:652,r:13,class:'ink'},TR));
fig($('tramp'),1180,540,28,'ink');
fig($('bar4'),300,420,40,'ink');
const CELLS=[];for(let r=0;r<3;r++)for(let c=0;c<6;c++)CELLS.push(mk('rect',{x:795+c*50,y:310+r*50,width:44,height:40,rx:6},$('cells')));
const QM=[];[600,700,800].forEach(x=>{fig($('sal'),x,320,24,'ink');const q=mk('text',{x:x,y:280,'font-size':40,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},$('sal'));q.textContent='?';QM.push(q)});
fig($('bar5'),1040,320,28,'gain');
const DP=[[490,650],[580,720],[660,640],[740,740],[800,670],[880,625],[930,735],[990,670],[540,750],[700,690]];
const ROUTES=DP.map(q=>{const dx=q[0]-760,dy=q[1]-695,L=Math.hypot(dx,dy),sx=760+dx/L*18,sy=695+dy/L*18;return mk('path',{d:'M'+sx.toFixed(1)+' '+sy.toFixed(1)+'L'+q[0]+' '+q[1],stroke:'var(--gain)','stroke-width':3,'stroke-dasharray':'6 6','stroke-linecap':'round'},$('routes'))});
const DOTS=DP.map(q=>mk('circle',{cx:q[0],cy:q[1],r:14},$('dots')));
[220,320,420].forEach((x,i)=>fig($('eq'),x,400,26,i===1?'gain':'ink'));
const FI=[1130,1200,1270,1340,1410].map(()=>mk('path',{class:'gain'},$('fires')));
for(let i=0;i<8;i++)mk('circle',{cx:420+i*108,cy:220,r:12,class:'s-ink',fill:'var(--stage)','stroke-width':5},$('rings'));
const st=(cx,cy,R,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
$('starP').setAttribute('d',st(500,625,30,13));
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M'+(500+42*Math.cos(a)).toFixed(1)+' '+(625+42*Math.sin(a)).toFixed(1)+'L'+(500+56*Math.cos(a)).toFixed(1)+' '+(625+56*Math.sin(a)).toFixed(1),class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('spk'))}