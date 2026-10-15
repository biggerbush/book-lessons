const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const ln=(g,d,st,w,ex)=>mk('path',Object.assign({d:d,fill:'none',stroke:st,'stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round'},ex||{}),g);
const DR={pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1};
const drw=(e,k)=>e.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
fig($('climber'),0,-58.8,14,'ink');
for(let i=0;i<12;i++){const a=i*Math.PI/6+.26,c=Math.cos(a),s=Math.sin(a);ln($('spk'),'M'+(800+300*c).toFixed(0)+' '+(420+170*s).toFixed(0)+'L'+(800+345*c).toFixed(0)+' '+(420+200*s).toFixed(0),'var(--gain)',6)}
fig($('pE'),620,370,16,'ink');fig($('pS'),620,620,16,'ink');
const SB=[610,665,720].map((c,i)=>{const g=mk('g',{},$('subs'));ln(g,'M680 665C760 665 760 '+c+' 840 '+c,'var(--muted)',4);
  mk('rect',{x:840,y:c-20,width:160,height:40,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:920,y:c+7,'font-size':18,'text-anchor':'middle',class:'m'},g);tx.textContent='SUBJECT '+(i+1);
  ln(g,'M1000 '+c+'C1120 '+c+' 1120 665 1240 665',i==1?'var(--gain)':'var(--muted)',4);return g});
const Y1=[400,300,380,330],EL=[],SLn=[];
for(let i=0;i<4;i++){const y0=310+i*26;EL.push(ln($('eL'),'M140 '+y0+'H440C490 '+y0+' 490 '+Y1[i]+' 540 '+Y1[i]+'H860','var(--loss)',5,DR));
  mk('circle',{cx:490,cy:(y0+Y1[i])/2,r:7,class:'loss'},$('eD'));
  const y2=550+i*24;SLn.push(ln($('sL'),'M140 '+y2+'c40 -30 80 30 120 0s80 -30 120 0s80 30 120 0H860','var(--gain)',5,DR))}
const VX=[220,500,780,1060,1340],SG=[];
for(let i=0;i<4;i++)SG.push(ln($('segs'),'M'+VX[i]+' 470H'+VX[i+1],i==3?'var(--gain)':'var(--muted)',6,DR));
const TN=['TRY','NOTICE','ADJUST'].map((s,i)=>{const a=-Math.PI/2+i*2*Math.PI/3,x=980+140*Math.cos(a),y=400+140*Math.sin(a),g=mk('g',{},$('tnodes'));
  mk('rect',{x:x-80,y:y-24,width:160,height:48,rx:24,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:x,y:y+7,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
const ST=[];for(let i=0;i<6;i++)ST.push(mk('ellipse',{cx:200+200*i,cy:720,rx:60,ry:18,fill:'var(--line)'},$('stones')));
fig($('hopp'),0,-58.8,14,'ink');
const CE=[];for(let i=0;i<28;i++)CE.push(mk('rect',{x:140+(i%7)*50,y:310+Math.floor(i/7)*52,width:40,height:40,rx:6,fill:'var(--line)'},$('cells')));
for(let i=0;i<6;i++)mk('circle',{cx:600,cy:270+i*44,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));
const BB=[0,1,2].map(i=>mk('circle',{cx:1374+i*12,cy:700,r:5+i*2,class:'gain'},$('bub')));
const CP=['var(--gain)','var(--loss)','var(--ink)','var(--muted)'];