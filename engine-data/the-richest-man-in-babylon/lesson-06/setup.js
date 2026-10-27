const fig=(g,x,y,r,c)=>{const o=c?{class:c}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},o),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},o),g);return g};
const F=(id,r,c)=>fig(mk('g',{},$(id)),0,0,r,c);
mk('path',{d:'M1270 795V470M1350 795V470',class:'s-ink','stroke-width':7,'stroke-linecap':'round'},$('ladder'));
for(let y=760;y>480;y-=48)mk('path',{d:'M1270 '+y+'h80',class:'s-ink','stroke-width':5},$('ladder'));
const CLB=F('climber',22,'gain');
fig($('dab'),580,560,34,'gain');fig($('tark'),1020,560,34,'loss');
// IOU boxes in one column: every connector ends at a box's left edge, so no line crosses another box.
// Lines live in a layer behind the opaque boxes.
const IOU=[250,340,430,520,610].map(y=>{const x=1300;
  const ln=mk('path',{d:'M1066 590L'+x+' '+(y+23),class:'s-line','stroke-width':3},$('iouL'));
  const g=mk('g',{},$('ious'));
  mk('rect',{x:x,y:y,width:110,height:46,rx:8,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  mk('text',{x:x+55,y:y+32,'font-size':24,'text-anchor':'middle',class:'m'},g).textContent='IOU';return [ln,g]});
// chase: lenders (loss) behind, Dabasir (gain) fleeing with motion arrow
const CR=[0,1,2].map(()=>F('crs',26,'loss'));
const RUN=F('run',26,'gain');
mk('path',{d:'M-40 -70h80m-18-16 18 16-18 16',fill:'none',class:'s-gain','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},RUN);
mk('path',{d:'M-50 30h-22M-50 60h-24M-50 90h-20',class:'s-gain','stroke-width':5,'stroke-linecap':'round'},RUN);
mk('text',{x:0,y:-98,'font-size':23,'text-anchor':'middle',class:'m',style:'fill:var(--gain)'},RUN).textContent='DABASIR';
fig($('chn'),300,380,36,'ink');
for(let i=0;i<5;i++)mk('ellipse',{cx:200+50*i,cy:580,rx:28,ry:14,fill:'none',stroke:'var(--loss)','stroke-width':6},$('chn'));
fig($('sir'),620,380,36,'gain');
const WK=F('walk',26,'');
for(let i=0;i<5;i++)mk('circle',{cx:440+80*i,cy:340,r:16,class:'gain'},$('coins'));
const wdg=(a,b)=>{if(b-a<.001)return '';const A=a*2*Math.PI-Math.PI/2,B=b*2*Math.PI-Math.PI/2,f=v=>v.toFixed(1);
  return 'M440 500L'+f(440+250*Math.cos(A))+' '+f(500+250*Math.sin(A))+'A250 250 0 '+(b-a>.5?1:0)+' 1 '+f(440+250*Math.cos(B))+' '+f(500+250*Math.sin(B))+'Z'};
const MD=[0,1,1,0,1], LD=[200,380,560,740,920].map((x,i)=>{const g=mk('g',{},$('lend'));fig(g,x,300,28,'');
  const m=mk('path',{d:MD[i]?'M'+(x-10)+' 304q10 9 20 0':'M'+(x-10)+' 312q10-9 20 0',fill:'none',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},g);return [g,m]});
const VS=F('vst',28,'gain');
const STK=[],MON=[];for(let i=0;i<10;i++){STK.push(mk('rect',{x:1120,y:720-40*i,width:300,height:34,rx:6,class:'loss'},$('stk')));MON.push(mk('circle',{cx:200+96*i,cy:740,r:14},$('mon')))}
const CLM=F('clim',16,'gain');