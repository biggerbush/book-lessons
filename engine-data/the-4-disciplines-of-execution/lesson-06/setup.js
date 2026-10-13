const fig=(g,x,y,r,c)=>{const a=mk('g',{},g),f='var(--'+c+')';mk('circle',{cx:x,cy:y,r:r,fill:f},a);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},a);return a};
const part=(P,k)=>{const n=P.length-1,f=cl(k)*n,i=Math.floor(f),s=[];for(let j=0;j<=Math.min(i,n);j++)s.push(P[j].join(','));if(i<n){const a=P[i],b=P[i+1],r=f-i;s.push((a[0]+(b[0]-a[0])*r).toFixed(1)+','+(a[1]+(b[1]-a[1])*r).toFixed(1))}return s.join(' ')};
const TP=[fig($('t_pl'),1160,380,16,'ink'),fig($('t_pl'),1380,380,16,'ink')];
const TL=[];[[1130,5],[1290,3]].forEach(([x,n])=>{for(let i=0;i<n;i++)TL.push(mk('path',{d:i<4?'M'+(x+i*18)+' 240v46':'M'+(x-8)+' 280L'+(x+64)+' 246',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('t_mk')))});
[200,320,440].forEach(x=>fig($('a_fig'),x,400,30,'ink'));
const GR=[];for(let r=0;r<14;r++){const g=mk('g',{},$('c_grid'));GR.push(g);for(let c=0;c<8;c++){const x=120+c*72,y=230+r*33;mk('rect',{x:x,y:y,width:72,height:33,fill:r?'none':'var(--line)',stroke:'var(--line)','stroke-width':2},g);mk('path',{d:'M'+(x+10)+' '+(y+17)+'h'+(10+((r*7+c*3)%5)*10),stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},g)}}
const PL=[0,1,2].map(i=>{const x=780+i*60,y=240+i*60,g=mk('g',{},$('c_pile'));mk('rect',{x:x,y:y,width:300,height:190,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);let pts='';for(let j=0;j<9;j++)pts+=(x+20+j*32)+','+(y+150-((j*37+i*23)%90))+' ';mk('polyline',{points:pts,fill:'none',stroke:i==2?'var(--loss)':'var(--muted)','stroke-width':4},g);for(let j=0;j<6;j++)mk('rect',{x:x+24+j*44,y:y+20,width:30,height:12,fill:'var(--line)'},g);return g});
fig($('c_bf'),1360,290,26,'ink');
[860,970,1080,1190,1300].forEach(x=>{fig($('c_tf'),x,640,20,'muted');mk('path',{d:'M'+(x-7)+' 646h14',stroke:'var(--stage)','stroke-width':3,'stroke-linecap':'round'},$('c_tf'))});
fig($('p_ff'),190,520,24,'gain');
const TK=['SIMPLE','VISIBLE','LEAD + LAG','SECONDS TO READ'].map((s,i)=>{const y=320+i*120;mk('rect',{x:160,y:y,width:56,height:56,rx:8,fill:'none',stroke:'var(--ink)','stroke-width':5},$('k_rows'));mk('text',{x:240,y:y+37,'font-size':20,class:'m'},$('k_rows')).textContent=s;return mk('path',{d:'M170 '+(y+28)+'l14 16 30-34',fill:'none',stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('k_rows'))});
[1160,1260,1360].forEach(x=>fig($('k_ppl'),x,500,16,'ink'));
const LB=[],LG=[];for(let i=0;i<8;i++){LB.push(mk('rect',{x:200+i*78,y:620,width:40,height:0,class:'ink'},$('l_bars')));LG.push([220+i*78,560-Math.max(0,i-2)*50])}
let WL=800;try{WL=$('w_ln').getTotalLength()||800}catch(e){}
[560,720,880,1040].forEach(x=>{fig($('w_tf'),x,690,24,'gain');mk('path',{d:'M'+(x-10)+' 696q10 10 20 0',fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round'},$('w_tf'))});
const WS=[];for(let i=0;i<6;i++)WS.push(mk('rect',{x:480+i*56,y:548,width:36,height:36,rx:6,fill:'var(--line)'},$('w_sq')));
const QM=[250,440,630].map(x=>{fig($('y_wk'),x,440,28,'ink');const q=mk('text',{x:x,y:395,'font-size':60,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},$('y_wk'));q.textContent='?';return q});
const YP=[1280,1350,1420].map(x=>fig($('y_pp'),x,520,16,'gain'));
const YL=[[900,610],[980,560],[1060,575],[1140,500],[1220,470],[1300,400],[1380,340],[1440,290]];
const ZL=[[1180,780],[1260,740],[1330,750],[1420,660]];