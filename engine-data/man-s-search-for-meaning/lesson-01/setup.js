const fig=(g,x,y,r,c)=>{const G=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},G);mk('path',{d:`M${x-1.5*r} ${y+4.2*r}v${-1.3*r}a${1.5*r} ${1.5*r} 0 0 1 ${3*r} 0v${1.3*r}z`,class:c},G);return G};
const ST={fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round','stroke-linecap':'round'},A=e=>Object.assign({},ST,e);
const icon=(k,g,x,y)=>{const G=mk('g',{},g);
 if(k==0)mk('path',A({d:`M${x-28} ${y+26}v-28l28-24 28 24v28z`}),G);
 if(k==1){fig(G,x-14,y-16,10,'ink');fig(G,x+16,y-8,8,'ink')}
 if(k==2){mk('path',A({d:`M${x-12} ${y-12}v-10h24v10`,fill:'none'}),G);mk('rect',A({x:x-30,y:y-12,width:60,height:40,rx:6}),G)}
 if(k==3){mk('rect',A({x:x-32,y:y-18,width:64,height:40,rx:8}),G);mk('path',A({d:`M${x-18} ${y-4}h36M${x-18} ${y+8}h22`}),G)}
 return G};
const T0=[[1160,650],[1160,770],[1440,650],[1440,770]].map((q,i)=>icon(i,$('tg'),q[0],q[1]));
fig($('tg'),1300,640,26,'ink');
const halo0=mk('circle',{cx:1300,cy:718,r:20,fill:'none',stroke:'var(--gain)','stroke-width':4},$('tg')),core0=mk('circle',{cx:1300,cy:718,r:11,class:'gain'},$('tg'));
const vin=$('vin'),VP=[fig(vin,230,470,22,'ink'),fig(vin,320,490,16,'ink'),fig(vin,385,505,13,'ink'),icon(2,vin,390,590)];
for(let i=0;i<3;i++){const x=480+i*125;if(i)mk('path',{d:`M${x-15} 600h15`,stroke:'var(--ink)','stroke-width':6},$('trn'));mk('rect',A({x:x,y:560,width:110,height:68,rx:6,'stroke-width':6}),$('trn'));[25,85].forEach(w=>mk('circle',{cx:x+w,cy:636,r:10,class:'ink'},$('trn')))}
const CP='M-70 0L-140 30L-190 260L-150 270L-130 160V500H130V160L150 270L190 260L140 30L70 0L0 100Z';
const coatD=(g,f,s,da)=>{mk('path',{d:CP,fill:f,stroke:s,'stroke-width':7,'stroke-linejoin':'round','stroke-dasharray':da||'none'},g);mk('path',{d:'M0 100V500',stroke:s,'stroke-width':5,'stroke-dasharray':da||'none'},g)};
[[1020,520,-14],[1260,530,12],[1140,500,4]].forEach(q=>coatD(mk('g',{transform:`translate(${q[0]} ${q[1]}) scale(.4) rotate(${q[2]})`},$('pile')),'var(--line)','var(--muted)'));
coatD(mk('g',{transform:'translate(440 260)'},$('ghost')),'none','var(--muted)','14 12');
coatD($('coat'),'var(--stage)','var(--ink)');
mk('rect',{x:-120,y:200,width:110,height:140,rx:6,fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 8'},$('coat'));
const ms=mk('g',{},$('coat'));mk('rect',{x:-110,y:210,width:90,height:120,rx:4,class:'gain'},ms);
const ML=[];for(let i=0;i<5;i++)ML.push(mk('path',{d:`M-98 ${232+i*20}h${i==4?36:66}`,stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round'},ms));
const WS=[160,226,92,110];
fig($('flf'),220,420,28,'ink');
const FAM=[400,470,540].map(x=>{const g=mk('g',{},$('fam'));fig(g,x,440,22,'ink');const q=mk('text',{x:x,y:405,'font-size':44,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},g);q.textContent='?';return [g,q]});
const PIL=['HOME','WORK','FAMILY','NAME'].map((s,i)=>{const c=940+i*120,g=mk('g',{},$('pil'));mk('rect',A({x:c-35,y:456,width:70,height:220,'stroke-width':6}),g);const tx=mk('text',{x:c,y:720,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
fig($('pf'),1120,272,40,'ink');
// guards reaching for the core, and failing
const GD=$('grd');fig(GD,780,340,24,'loss');fig(GD,1440,340,24,'loss');
const AL=mk('path',{fill:'none',stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round'},GD),HL=mk('circle',{r:12,class:'loss'},GD);
const AR=mk('path',{fill:'none',stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round'},GD),HR=mk('circle',{r:12,class:'loss'},GD);
const BB=[[420,380,'MEMORIES'],[580,380,'THOUGHTS'],[500,530,'FEELINGS']].map(q=>{const g=mk('g',{},$('bub'));mk('circle',A({cx:q[0],cy:q[1],r:64,'stroke-width':4}),g);const tx=mk('text',{x:q[0],y:q[1]+7,'font-size':18,'text-anchor':'middle',class:'m'},g);tx.textContent=q[2];return g});
const CF=[];for(let i=0;i<60&&CF.length<22;i++){const x=140+(i*137)%740,y=240+(i*211)%420;if(Math.hypot(x-500,y-450)>235)CF.push([mk('circle',{cx:x,cy:y,r:5,class:'loss'},$('cold')),y])}
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(1360+52*c).toFixed(1)} ${(370+52*s).toFixed(1)}L${(1360+70*c).toFixed(1)} ${(370+70*s).toFixed(1)}`,stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('rays'))}
[200,280,360,440].forEach(x=>{fig($('sit'),x,560,18,'ink');mk('path',A({d:`M${x-22} 606a22 14 0 0 0 44 0z`,'stroke-width':4}),$('sit'))});
fig($('msg'),575,500,18,'gain');
for(let i=0;i<10;i++){const a=i*Math.PI/5,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(96*c).toFixed(1)} ${(96*s).toFixed(1)}L${(120*c).toFixed(1)} ${(120*s).toFixed(1)}`,stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('srays'))}
const CL=[[900,330],[1340,290],[1060,250]].map(q=>{const g=mk('g',{},$('cl'));[[-36,8,26],[0,-6,34],[36,8,26]].forEach(c=>mk('circle',{cx:q[0]+c[0],cy:q[1]+c[1],r:c[2]},g));return g});
[780,850,920,990].forEach(x=>fig($('wat'),x,556,20,'ink'));
fig($('fg7'),260,330,40,'ink');fig($('fg7'),520,400,22,'ink');
const MO=[];for(let i=0;i<6;i++)MO.push(mk('circle',{cx:990+i*56,cy:240,r:12,class:'gain'},$('mom')));