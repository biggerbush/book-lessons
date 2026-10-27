const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const starD=(cx,cy,R,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const part=(P,f)=>{const n=Math.floor(f),o=P.slice(0,Math.min(n+1,P.length));let tip=o[o.length-1];if(n<P.length-1&&f>n){const a=P[n],b=P[n+1],k=f-n;tip=[a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k];o.push(tip)}return [o.map(q=>q[0].toFixed(1)+','+q[1].toFixed(1)).join(' '),tip]};

const rays=[-140,-115,-90,-65,-40].map(d=>{const a=d*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return mk('path',{d:'M'+(1300+170*c).toFixed(0)+' '+(370+170*s).toFixed(0)+'L'+(1300+205*c).toFixed(0)+' '+(370+205*s).toFixed(0),class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays0'))});
mk('path',{d:starD(1300,330,30,13),fill:'var(--stage)'},$('troph'));

const brain=[[320,410,44],[385,395,48],[420,445,38],[355,460,42],[300,455,34]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:'var(--muted)'},$('brain1')));
const glow=[0,1,2].map(()=>mk('circle',{cx:360,cy:440,r:150,fill:'none',stroke:'var(--gain)','stroke-width':6},$('glow1')));
$('spark').setAttribute('d',starD(760,320,70,28));
const prz=['MONEY','STATUS','PARTY'].map((s,i)=>{const x=960+i*180,cx=x+80,g=mk('g',{},$('prizes'));mk('rect',{x:x,y:540,width:160,height:150,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  if(i==0){mk('circle',{cx:cx,cy:615,r:44,class:'gain'},g);const tx=mk('text',{x:cx,y:632,'font-size':48,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},g);tx.textContent='$'}
  else if(i==1)mk('path',{d:starD(cx,622,52,22),class:'gain'},g);
  else{mk('ellipse',{cx:cx,cy:600,rx:30,ry:38,class:'gain'},g);mk('path',{d:'M'+cx+' 638q-14 20 0 40',fill:'none',stroke:'var(--ink)','stroke-width':4},g)}
  const l=mk('text',{x:cx,y:730,'font-size':20,'text-anchor':'middle',class:'m'},g);l.textContent=s;return g});

const car=$('car');const spd=mk('path',{d:'M-170 -60h40M-180 -40h50M-160 -20h30',class:'s-gain','stroke-width':6,'stroke-linecap':'round'},car);
mk('path',{d:'M-60 -64l24-40h76l24 40z',class:'ink'},car);mk('rect',{x:-110,y:-66,width:220,height:52,rx:14,class:'ink'},car);
[-60,60].forEach(x=>mk('circle',{cx:x,cy:-12,r:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':8},car));

[-10,4,0].forEach((a,i)=>{const g=mk('g',{transform:'rotate('+a+' 250 410)'},$('deck'));mk('rect',{x:160,y:285,width:180,height:250,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);if(i==2)mk('path',{d:'M250 360l40 50-40 50-40-50z',class:'gain'},g)});
const OUT=[1,1,-1,1,-1,1,-1,-1,-1,-1],PT=[[460,560]];let cv=0;
const cards=OUT.map((o,i)=>{cv+=o;const x=460+i*102;PT.push([x+42,560-cv*40]);const g=mk('g',{},$('cards'));mk('rect',{x:x,y:250,width:84,height:116,rx:10,fill:'var(--stage)',stroke:o>0?'var(--gain)':'var(--loss)','stroke-width':5},g);const tx=mk('text',{x:x+42,y:332,'font-size':60,'text-anchor':'middle',class:'d',style:'fill:var('+(o>0?'--gain':'--loss')+')'},g);tx.textContent=o>0?'+':'−';return g});
const runr=mk('g',{},$('runner'));mk('circle',{cx:0,cy:-64,r:14,class:'ink'},runr);const limbs=mk('path',{fill:'none',stroke:'var(--ink)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},runr);

const CL=[[700,340,50],[770,300,62],[850,330,52],[780,360,48]];
CL.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:'none',stroke:'var(--ink)','stroke-width':10},$('cloud4')));
CL.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:'var(--stage)'},$('cloud4')));
fig($('thinker'),700,520,40,'ink');
const stA=[],stB=[];for(let j=0;j<8;j++){stA.push(mk('rect',{x:1100,y:692-j*34,width:140,height:28,rx:14,class:'loss'},$('stkA')));if(j<3)stB.push(mk('rect',{x:1320,y:692-j*34,width:140,height:28,rx:14,class:'loss'},$('stkB')))}

const P5=[[160,600],[220,560],[280,575],[340,500],[400,515],[460,430],[520,445],[580,350],[640,290]],D5=[[640,290],[690,560],[740,620]];
fig($('trader'),980,440,48,'loss');
[1220,1320,1420].forEach(x=>fig($('quiet5'),x,500,24,'ink'));

fig($('buf'),300,420,40,'ink');
const aud=[];for(let i=0;i<6;i++)aud.push(mk('circle',{cx:160+i*60,cy:730,r:16,fill:'var(--muted)'},$('aud6')));
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1000+100*c).toFixed(0)+' '+(400+100*s).toFixed(0)+'L'+(1000+150*c).toFixed(0)+' '+(400+150*s).toFixed(0),class:'s-loss','stroke-width':8,'stroke-linecap':'round'},$('pop6'))}
const P6=[[640,680],[720,665],[800,640],[870,610],[940,575],[1000,540]],F6=[[1000,540],[1080,610],[1180,650],[1300,672],[1440,690]];

const pan=(lbl,cls)=>{const g=mk('g',{},$('pans7'));mk('path',{d:'M0 0L-80 140M0 0L80 140',stroke:'var(--muted)','stroke-width':4,fill:'none'},g);mk('path',{d:'M-100 140h200a100 40 0 0 1-200 0z',fill:'var(--muted)'},g);mk('circle',{cx:0,cy:108,r:30,class:cls},g);const tx=mk('text',{x:0,y:230,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=lbl;return g};
const pL=pan('EAGER','gain'),pR=pan('CAREFUL','ink');
[960,1070,1180,1290].forEach((x,i)=>fig($('team7'),x,470,30,i<2?'gain':'ink'));fig($('quiet7'),1400,470,30,'ink');