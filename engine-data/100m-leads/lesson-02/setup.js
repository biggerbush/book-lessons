const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},g)};
const T=(g,x,y,s,txt,cls,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:cls},ex||{}),g);e.textContent=txt;return e};
const mv=(e,x,y)=>e.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)})`);
const SPK=[[1205,600],[1500,600],[1200,540],[1490,540]].map(q=>mk('path',{d:`M${q[0]-10} ${q[1]}h20M${q[0]} ${q[1]-10}v20`,class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('spk')));
const PP=[[640,290],[730,330],[610,400],[700,430],[650,500]].map(q=>{const g=mk('g',{},$('ppl'));fig(g,q[0],q[1],14,'ink');return g});
const CHK=[];for(let i=0;i<7;i++){const y=322+i*34;CHK.push(mk('rect',{x:172,y:y,width:18,height:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('rows')));mk('path',{d:`M204 ${y+9}H364`,class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('rows'))}
fig($('hap'),670,290,34,'gain');
const QB=['HOW TO TRAIN?','STAY MOTIVATED?','KEEP GOING?'].map((s,i)=>{const g=mk('g',{},$('qs')),y=260+i*90;mk('rect',{x:930,y:y,width:240,height:64,rx:32,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);T(g,1050,y+40,20,s,'m',{'text-anchor':'middle'});return g});
const KF=[],KC=[];
[['Reveal a problem','Like a free assessment.'],['Sample or trial','Of your actual product.'],['One step of many','Of a multi-step process.']].forEach((c,i)=>{const x=120+i*473,cx=x+207,f=mk('g',{},$('kinds')),k=mk('g',{},$('kinds'));
  mk('rect',{x:x,y:230,width:414,height:520,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},f);T(f,x+36,320,60,String(i+1),'d',{style:'fill:var(--gain)'});
  T(k,x+36,640,34,c[0],'d5');T(k,x+36,692,24,c[1],'b');
  if(i===0){mk('rect',{x:cx-90,y:380,width:130,height:170,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},k);
    mk('path',{d:`M${cx-66} 420h80M${cx-66} 455h80M${cx-66} 490h50`,class:'s-line','stroke-width':6,'stroke-linecap':'round'},k);
    mk('circle',{cx:cx+30,cy:500,r:48,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':10},k);
    mk('path',{d:`M${cx+64} 534l36 36`,stroke:'var(--loss)','stroke-width':12,'stroke-linecap':'round'},k);
    mk('path',{d:`M${cx+16} 486l28 28m0-28-28 28`,stroke:'var(--loss)','stroke-width':7,'stroke-linecap':'round'},k)}
  if(i===1){const a=cx-20;mk('path',{d:`M${a} 470L${a+45} 392A90 90 0 1 0 ${a+90} 470Z`,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},k);
    mk('path',{d:`M${a+14} 456L${a+59} 378A90 90 0 0 1 ${a+104} 456Z`,class:'gain'},k)}
  if(i===2)for(let j=0;j<4;j++)mk('rect',{x:cx-130+j*65,y:560-(j+1)*42,width:65,height:(j+1)*42,fill:j?'var(--line)':'var(--gain)',stroke:'var(--stage)','stroke-width':3},k);
  KF.push(f);KC.push(k)});
const FC=['SOFTWARE','INFO','SERVICE','PRODUCT'].map((s,i)=>{const x=120+(i%2)*240,y=230+Math.floor(i/2)*180,cx=x+110,cy=y+62,g=mk('g',{},$('fmt'));
  mk('rect',{x:x,y:y,width:220,height:160,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  if(i===0)mk('rect',{x:cx-22,y:cy-38,width:44,height:76,rx:8,fill:'none',stroke:'var(--ink)','stroke-width':5},g);
  if(i===1)mk('path',{d:`M${cx} ${cy-25}c-20-12-45-12-60-6v64c15-6 40-6 60 6 20-12 45-12 60-6v-64c-15-6-40-6-60 6z`,class:'ink'},g);
  if(i===2)fig(g,cx,cy-38,16,'ink');
  if(i===3)mk('path',{d:`M${cx-36} ${cy-30}h72v60h-72zM${cx} ${cy-30}v24`,fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);
  T(g,cx,y+140,22,s,'m',{'text-anchor':'middle'});return g});
const HX=[760,940,1120,1300], HU=HX.map(x=>mk('rect',{x:x-20,width:40,class:'loss'},$('hur')));
const FD=[];for(let i=0;i<10;i++)FD.push(mk('circle',{cx:840+i*60,cy:602,r:16},$('fin')));
const OP=['Book a call','Visit the store','Claim the offer'].map((s,i)=>{const x=620+i*290,cx=x+130,cy=330,g=mk('g',{},$('opts'));
  mk('rect',{x:x,y:240,width:260,height:220,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  if(i===0){mk('rect',{x:cx-50,y:cy-45,width:100,height:90,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:cx-50,y:cy-45,width:100,height:22,class:'gain'},g);
    for(let r=0;r<2;r++)for(let c=0;c<3;c++)mk('rect',{x:cx-36+c*28,y:cy-10+r*24,width:16,height:14,class:'ink'},g)}
  if(i===1){mk('path',{d:`M${cx-60} ${cy-10}l60-45 60 45v55h-120z`,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);mk('rect',{x:cx-14,y:cy+10,width:28,height:35,class:'gain'},g)}
  if(i===2){mk('rect',{x:cx-60,y:cy-35,width:120,height:70,rx:10,class:'gain'},g);[cx-60,cx+60].forEach(h=>mk('circle',{cx:h,cy:cy,r:12,fill:'var(--stage)'},g));
    mk('path',{d:`M${cx-24} ${cy-30}v60`,stroke:'var(--stage)','stroke-width':4,'stroke-dasharray':'6 6'},g)}
  T(g,cx,430,26,s,'d5',{'text-anchor':'middle'});return g});
const CL=[[1260,740,60],[1340,700,70],[1410,750,55],[1320,790,50]];
CL.forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],fill:'none',stroke:'var(--ink)','stroke-width':12},$('cloud')));
CL.forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],fill:'var(--stage)'},$('cloud')));
[[1180,830,12],[1150,850,7]].forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],class:'ink'},$('cloud')));
mk('rect',{x:1262,y:722,width:28,height:28,class:'gain'},$('cloud'));
mk('path',{d:'M1300 736h26m-10-10 10 10-10 10',fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},$('cloud'));
mk('rect',{x:1338,y:706,width:60,height:60,class:'loss'},$('cloud'));