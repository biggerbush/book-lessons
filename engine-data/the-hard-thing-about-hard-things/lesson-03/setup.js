const pp=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const bul=(g,x,y,w,h,a)=>{const b=mk('g',{},g);mk('path',Object.assign({d:`M${x-w/2} ${y}V${y-h*.62}Q${x-w/2} ${y-h} ${x} ${y-h}Q${x+w/2} ${y-h} ${x+w/2} ${y-h*.62}V${y}Z`},a),b);mk('path',{d:`M${x-w/2} ${y-h*.62}h${w}M${x-w/2} ${y-h*.2}h${w}`,stroke:'var(--stage)','stroke-width':3},b);return b};
const tx=(g,x,y,s,fs,cls,an,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':an},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const TL=[0,1,2,3,4].map(i=>bul($('t_lead'),1180+i*66,540,48,170,{class:'gain'}));
bul($('t_ghost'),1320,330,60,140,{fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-dasharray':'10 8'});
const SB=mk('g',{},$('sbg'));bul(SB,0,0,36,90,{class:'loss'});
bul($('bb'),800,468,30,80,{class:'loss'});
for(let i=0;i<5;i++){const a=(-160+i*35)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(800+105*c).toFixed(1)} ${(430+105*s).toFixed(1)}L${(800+135*c).toFixed(1)} ${(430+135*s).toFixed(1)}`,class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
[1170,1240,1310,1380].forEach(x=>pp($('team'),x,420,20,'ink'));
const TG=['FAST','SMART','PAINLESS'].map((s,i)=>{const g=mk('g',{},$('tags'));mk('rect',{x:1100,y:545+i*56,width:340,height:44,rx:22,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);tx(g,1270,575+i*56,s,22,'m','middle','fill:var(--loss)');return g});
const rack=(g,x,c)=>{mk('rect',{x:x,y:260,width:300,height:340,rx:12,fill:'var(--stage)',stroke:c,'stroke-width':6},g);for(let i=0;i<4;i++){mk('rect',{x:x+30,y:290+i*75,width:240,height:50,rx:6,fill:'none',stroke:c,'stroke-width':4},g);mk('circle',{cx:x+240,cy:315+i*75,r:8,fill:c},g)}};
rack($('opr'),120,'var(--ink)');rack($('blr'),1180,'var(--loss)');
// side-by-side comparison rows (schematic): Opsware bars short, BladeLogic bars long + check
const OW=[70,90,60,80],BW=[130,120,135,125];
const CR=OW.map((w,i)=>{const y=376+i*50,g=mk('g',{},$('cmprows'));
  tx(g,545,y+20,'ROUND '+(i+1),18,'m','start');
  mk('rect',{x:680,y:y,width:130,height:26,rx:6,fill:'none',stroke:'var(--line)','stroke-width':2},g);
  mk('rect',{x:880,y:y,width:140,height:26,rx:6,fill:'none',stroke:'var(--line)','stroke-width':2},g);
  const o=mk('rect',{x:680,y:y,width:0,height:26,rx:6,fill:'var(--muted)'},g);
  const b=mk('rect',{x:880,y:y,width:0,height:26,rx:6,class:'loss'},g);
  const c=mk('path',{d:`M1030 ${y+13}l8 9 16-20`,fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  return {g,o,b,c,ow:w,bw:BW[i]}});
const SG=['BLAME THE SALES PITCH','BLAME THE MARKETING','HUNT FOR A CLEVER WORKAROUND'].map((s,i)=>{const g=mk('g',{},$('signs')),y=250+i*130;mk('path',{d:`M120 ${y}h560l40 40-40 40H120z`,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4,'stroke-dasharray':'10 8','stroke-linejoin':'round'},g);tx(g,150,y+49,s,24,'m','start','fill:var(--loss)');return g});
bul($('svb'),300,620,80,280,{class:'loss'});
const LB=[];for(let r=0;r<3;r++)for(let i=0;i<12;i++)LB.push(bul($('lb'),570+i*76,410+r*120,44,100,{class:'gain'}));
const CD=[];[200,340,480].forEach(x=>{pp($('ppl'),x,380,22,'ink');mk('rect',{x:x-46,y:470,width:92,height:58,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('ppl'));mk('path',{d:`M${x-62} 536h124`,class:'s-ink','stroke-width':8,'stroke-linecap':'round'},$('ppl'));for(let j=0;j<2;j++)CD.push(mk('rect',{x:x-34,y:484+j*18,width:30,height:8,rx:4,class:'gain'},$('ppl')))});
const ST=[[660,560]];for(let i=1;i<=8;i++){ST.push([660+i*100,560-(i-1)*26]);ST.push([660+i*100,560-i*26])}
const part=(P,k)=>{const n=P.length-1,f=k*n,j=Math.min(Math.floor(f),n);let d='M'+P[0][0]+' '+P[0][1];for(let i=1;i<=j;i++)d+='L'+P[i][0]+' '+P[i][1];if(j<n){const a=P[j],b=P[j+1],r=f-j;d+='L'+(a[0]+(b[0]-a[0])*r).toFixed(1)+' '+(a[1]+(b[1]-a[1])*r).toFixed(1)}return d};
const MB=[];for(let i=0;i<10;i++)MB.push(mk('rect',{x:680+i*78,y:680,width:60,height:22,rx:5,fill:'var(--line)'},$('mon5')));
const FB=[];for(let r=0;r<3;r++)for(let j=0;j<4;j++)FB.push(mk('rect',{x:880+j*146,y:600-r*56,width:140,height:52,rx:4,class:'ink'},$('fnd')));
for(let i=0;i<5;i++)mk('circle',{cx:1230+i*35,cy:590,r:8,class:'ink'},$('nbs'));