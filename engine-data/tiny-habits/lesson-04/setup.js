const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const SQ=$('sq0');
P($('bp'),360,520,36,'ink');
const LV=[0,1].map(i=>{const x=980+i*270,g=$('cd'+i);mk('rect',{x:x,y:260,width:236,height:384,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  const tx=mk('text',{x:x+118,y:304,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=i?'TIRED DAY':'DAY 1';
  mk('rect',{x:x+103,y:326,width:30,height:14,class:'ink'},g);mk('rect',{x:x+78,y:340,width:80,height:240,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':6},g);
  const lv=mk('rect',{x:x+88,width:60,rx:4,fill:i?'var(--loss)':'var(--gain)'},g);
  const lb=mk('text',{x:x+118,y:620,'font-size':22,'text-anchor':'middle',class:'m'},g);lb.textContent='MOTIVATION';return lv});
const TE=[];for(let i=0;i<8;i++)TE.push(mk('rect',{x:260+i*130,y:380,width:100,height:150,rx:30,stroke:'var(--ink)','stroke-width':6},$('teeth')));
let wd='';for(let x=160;x<=1240;x+=10)wd+=(x==160?'M':'L')+x+' '+(450-150*Math.sin((x-160)/1080*Math.PI*5)).toFixed(1);$('wave').setAttribute('d',wd);
const DT=[];for(let i=0;i<10;i++)DT.push(mk('circle',{cx:214+i*108,cy:650,r:13,class:'gain'},$('dots')));
const C28='M-28 0a28 28 0 1 0 56 0a28 28 0 1 0-56 0';
const IC=[C28+'M0-16V0h14',C28+'M-14 0a14 14 0 1 0 28 0a14 14 0 1 0-28 0','M-26 0h52M-26-18v36M26-18v36M-38-10v20M38-10v20','M-18-6a18 18 0 1 1 36 0q0 12-10 20h-16q-10-8-10-20zM-8 26h16','M-28-22h56v48h-56zM-28-8h56M-14-30v14M14-30v14'];
// five equal pills, evenly spaced: width 232, pitch 280 -> clear gaps
const CL=['TIME','MONEY','PHYSICAL|EFFORT','MENTAL|EFFORT','ROUTINE'].map((s,i)=>{const cx=236+i*282,o=mk('g',{},$('chain')),g=mk('g',{transform:`translate(${cx} 420)`},o);
  const r=mk('rect',{x:-116,y:-60,width:232,height:120,rx:60,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':10},g);
  const ic=mk('path',{d:IC[i],fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  const lb=mk('g',{},$('chain'));s.split('|').forEach((w,j)=>{const tx=mk('text',{x:cx,y:540+j*30,'font-size':22,'text-anchor':'middle',class:'m'},lb);tx.textContent=w});return [o,g,r,lb,ic]});
for(let i=0;i<4;i++)mk('rect',{x:160+i*180,y:660-60*i,width:180,height:60+60*i,fill:'var(--line)'},$('stairs'));
mk('rect',{x:880,y:480,width:560,height:240,fill:'var(--line)'},$('stairs'));
const SH=[176,256].map(x=>mk('path',{d:`M${x} 660v-26h24l22 12q28 4 28 14z`},$('shoes')));
P($('walker'),0,-59,14,'gain');
for(let j=0;j<6;j++){const w=260-(j*37)%60;mk('rect',{x:440-w/2,y:600-j*44,width:w,height:40,rx:6,fill:j%2?'var(--ink)':'var(--muted)'},$('stack'))}
const RN=[];for(let i=0;i<6;i++)RN.push(mk('path',{d:`M${300+i*40} 390l-14 120`,stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':'24 20'},$('rain')));
P($('wp'),400,560,26,'ink');
const TG=['SICK','BUSY','EXHAUSTED'].map((s,i)=>{const x=140+i*210,g=mk('g',{},$('tags'));mk('rect',{x:x,y:730,width:195,height:56,rx:28,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  const tx=mk('text',{x:x+97,y:766,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});