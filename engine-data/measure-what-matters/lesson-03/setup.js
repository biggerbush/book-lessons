const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},g)];
const txt=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};
const chip=(g,cx,cy,h,fill,stroke,tx,fs,tf)=>{for(let k=0;k<4;k++){const o=-h+h*(2*k+1)/4;mk('path',{d:`M${cx+o} ${cy-h-20}v${2*h+40}M${cx-h-20} ${cy+o}h${2*h+40}`,stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},g)}
  mk('rect',{x:cx-h,y:cy-h,width:2*h,height:2*h,rx:10,fill:fill,stroke:stroke,'stroke-width':6},g);if(tx)txt(g,{x:cx,y:cy+fs*.35,'font-size':fs,'text-anchor':'middle',class:'d',style:'fill:'+tf},tx)};
fig($('jug'),1290,560,34,'ink');
const BL=[];for(let i=0;i<20;i++)BL.push(mk('circle',{r:11,class:i%3?'ink':'loss'},$('balls')));
const RW=[];for(let i=0;i<12;i++){const g=mk('g',{},$('rows')),y=300+i*42;mk('rect',{x:150,y:y-12,width:24,height:24,rx:5,fill:'none',stroke:'var(--ink)','stroke-width':3},g);mk('path',{d:`M195 ${y}h${120+(i*37%4)*55}`,stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);RW.push(g)}
const FB=[];for(let i=0;i<5;i++){const x=1020+(i-2)*100,g=mk('g',{},$('blk'));if(i<3){mk('rect',{x:x,y:560,width:80,height:120,rx:12,class:'gain'},g);txt(g,{x:x+40,y:636,'font-size':44,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},i+1)}else mk('rect',{x:x,y:560,width:80,height:120,rx:12,fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},g);FB.push(g)}
// scene 2: idea cards; non-kept ones get dimmed and struck through
const KEEP=[1,4,6],ST=[],DG=[];for(let i=0;i<8;i++){const y=230+i*62,k=KEEP.includes(i),g=mk('g',{},$('cards'));
  mk('rect',{x:120,y:y,width:520,height:48,rx:10,fill:k?'var(--gain)':'var(--stage)',stroke:k?'var(--gain)':'var(--ink)','stroke-width':3},g);
  mk('path',{d:`M150 ${y+24}h${160+(i*53%5)*50}`,stroke:k?'var(--on-gain)':'var(--ink)','stroke-width':8,'stroke-linecap':'round'},g);
  if(!k){DG.push(g);ST.push(mk('line',{x1:130,y1:y+24,x2:130,y2:y+24,stroke:'var(--loss)','stroke-width':7,'stroke-linecap':'round'},$('cards')))}}
[-58,0,58].forEach(x=>{mk('rect',{x:x-26,y:72,width:52,height:46,rx:8,class:'loss'},$('nos'));txt($('nos'),{x:x,y:103,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--stage)'},'NO')});
chip($('ci'),560,380,80,'var(--stage)','var(--ink)','8086',40,'var(--ink)');
chip($('cm'),900,380,90,'var(--loss)','var(--loss)','RIVAL',30,'var(--stage)');
// scene 3: customer row, last three drift toward the rival
const CX=[300,370,440,510,580,650],CF=CX.map(x=>{const g=mk('g',{transform:`translate(${x} 0)`},$('custIn'));return {g:g,e:fig(g,0,640,16,'ink')}});
[200,270,340,410].forEach(x=>fig($('mp'),x,360,20,'ink'));
chip($('gc'),1160,330,36,'var(--gain)','var(--gain)');
const DEP=['ENGINEERS','MARKETERS','SALES'],RY0=[290,460,630],RY1=[380,460,540],RG=[],RI=[],BX=[],AR=[];
DEP.forEach((s,i)=>{const o=mk('g',{},$('rowsT')),g=mk('g',{},o);BX.push(mk('rect',{x:120,y:-42,width:400,height:84,rx:14,fill:'none',stroke:'var(--line)','stroke-width':3},g));
  txt(g,{x:145,y:8,'font-size':20,class:'m'},s);[340,400,460].forEach(x=>fig(g,x,-24,14,'ink'));RG.push(o);RI.push(g);
  AR.push(mk('path',{stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 8',fill:'none'},$('arr')))});
// scene 6: rocket trail samples
const RP=$('rpath'),RS=[];let RL=600;try{RL=RP.getTotalLength()}catch(e){}
for(let i=0;i<=60;i++){let q={x:1220+200*i/60,y:720-420*i/60};try{q=RP.getPointAtLength(RL*i/60)}catch(e){}RS.push([q.x,q.y])}
for(let c=0;c<5;c++)for(let r=0;r<4;r++){const x=170+c*80,y=290+r*80,dx=x-410,dy=y-450;if(!dx&&!dy)continue;if(Math.hypot(dx,dy)<75||(dx>0&&Math.abs(dx-dy)<30))continue;mk('circle',{cx:x,cy:y,r:14,fill:'var(--muted)','fill-opacity':.5},$('mgd'))}
const PL=[],PB=[];['TIME','MONEY','ENERGY'].forEach((s,i)=>{const y=270+i*100,a=mk('g',{},$('res')),b=mk('g',{},$('res'));
  mk('rect',{x:640,y:y,width:200,height:60,rx:30,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},a);txt(a,{x:740,y:y+38,'font-size':22,'text-anchor':'middle',class:'m'},s);
  mk('path',{d:`M856 ${y+30}h100m-18-18 18 18-18 18`,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},b);
  mk('rect',{x:980,y:y,width:360,height:60,rx:12,class:'gain'},b);txt(b,{x:1004,y:y+41,'font-size':30,class:'d5',style:'fill:var(--on-gain)'},'Priority '+(i+1));PL.push(a);PB.push(b)});
fig($('drp'),190,690,26,'ink');
// scene 8: list rows 50px apart, ovals ry 15 -> clear gap between neighbouring ovals
const EL=[],N8=[];for(let i=0;i<6;i++){const y=200+i*50,k=[0,2,3].includes(i);mk('circle',{cx:1200,cy:y,r:6,class:'ink'},$('l8'));
  const l=mk('path',{d:`M1230 ${y}h${140+(i*29%3)*40}`,stroke:k?'var(--ink)':'var(--line)','stroke-width':8,'stroke-linecap':'round'},$('l8'));
  if(k)EL.push(mk('ellipse',{cx:1320,cy:y,rx:140,ry:15,fill:'none',stroke:'var(--gain)','stroke-width':4},$('l8')));else N8.push(l)}