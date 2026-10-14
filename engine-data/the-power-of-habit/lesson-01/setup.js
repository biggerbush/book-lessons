const prs=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)};
const len=P=>P.slice(1).reduce((s,b,i)=>s+Math.hypot(b[0]-P[i][0],b[1]-P[i][1]),0);
const at=(P,s)=>{for(let i=1;i<P.length;i++){const a=P[i-1],b=P[i],l=Math.hypot(b[0]-a[0],b[1]-a[1]);if(s<=l||i==P.length-1){const k=cl(s/l);return[a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k]}s-=l}};
const R0=[0,1,2].map(()=>mk('circle',{cx:1250,cy:400,r:30,fill:'none',stroke:'var(--gain)','stroke-width':4},$('rings')));
prs($('ppl'),300,400,40,'var(--ink)');prs($('ppl'),470,412,36,'var(--muted)');
const VR=[0,1,2,3,4].map(()=>{const g=mk('g',{},$('virus'));mk('path',{d:'M-24 0h48M0-24v48M-17-17l34 34M17-17l-34 34',stroke:'var(--loss)','stroke-width':4,'stroke-linecap':'round'},g);mk('circle',{r:13,class:'loss'},g);return g});
const FB=[480,380,520,300,440].map((w,i)=>mk('rect',{x:900,y:340+i*70,width:w,height:24,rx:12,class:'ink'},$('facts')));
const KP=[[1080,410],[1240,430],[1380,390]],KL=len(KP);
$('kpath').setAttribute('d','M'+KP.join('L'));$('kpath').setAttribute('stroke-dasharray',KL);
for(let r=0;r<3;r++)for(let c=0;c<4;c++)mk('rect',{x:700+c*200,y:250+r*160,width:160,height:120,rx:10,fill:'var(--line)'},$('grid'));
const RP=[[680,230],[1280,230],[1280,550],[880,550],[880,390],[680,390],[680,230]],RL=len(RP);
$('route').setAttribute('d','M'+RP.join('L'));$('route').setAttribute('stroke-dasharray',RL);
prs($('bvp'),300,440,40,'var(--muted)');prs($('scp'),220,380,40,'var(--ink)');
const BR=[0,1,2,3,4,5,6,7].map(i=>mk('rect',{x:1030+i*54,y:640,width:36,height:0,class:'gain'},$('bars')));
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(300+95*Math.cos(a)).toFixed(1)+' '+(440+95*Math.sin(a)).toFixed(1)+'L'+(300+130*Math.cos(a)).toFixed(1)+' '+(440+130*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round'},$('rays'))}