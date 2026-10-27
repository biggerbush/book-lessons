const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const coin=(g,x,y,r,f)=>{const c=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,fill:f||'var(--gain)',stroke:'var(--ink)','stroke-width':4},c);mk('circle',{cx:x,cy:y,r:r*.6,fill:'none',stroke:'var(--ink)','stroke-width':2,'stroke-opacity':.4},c);return c};
const worker=(g,x,y,r)=>{mk('path',{d:'M'+(x-r*.35)+' '+(y+r*.8)+'l'+(-r*.15)+' '+(r*.9)+'M'+(x+r*.35)+' '+(y+r*.8)+'l'+(r*.15)+' '+(r*.9),stroke:'var(--ink)','stroke-width':Math.max(4,r/8),'stroke-linecap':'round',fill:'none'},g);
  if(r>=40){mk('path',{d:'M'+(x+r*.8)+' '+(y+r*.3)+'L'+(x+r*1.4)+' '+(y-r*.9)+'M'+(x+r*1.0)+' '+(y-r*1.0)+'q'+(r*.4)+' '+(-r*.1)+' '+(r*.8)+' '+(r*.3),stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round',fill:'none'},g)}
  coin(g,x,y,r);[-1,1].forEach(s=>mk('circle',{cx:x+s*r*.3,cy:y-r*.15,r:Math.max(3,r*.1),class:'ink'},g))};
const JC=[];for(let r=0;r<3;r++)for(let i=0;i<3;i++)JC.push(coin($('jarcoins'),1260+i*60,490-r*50,24));
fig($('ark1'),300,380,50,'ink');
const PC=[];for(let r=0;r<4;r++){const n=4-r;for(let i=0;i<n;i++)PC.push(coin($('pile1'),850-(n-1)*30+i*60,690-r*52,30))}
const DU=[];for(let i=0;i<10;i++)DU.push(mk('circle',{cx:720+i*25,cy:300,r:4,fill:'var(--muted)'},$('dust1')));
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(1320+74*Math.cos(a)).toFixed(1)+' '+(380+74*Math.sin(a)).toFixed(1)+'L'+(1320+84*Math.cos(a)).toFixed(1)+' '+(380+84*Math.sin(a)).toFixed(1),stroke:'var(--ink)','stroke-width':4},$('clk1'))}
const WK=[260,520,780].map(x=>{const o=mk('g',{},$('wk2')),g=mk('g',{},o);worker(g,x,380,50);return [o,g]});
const KD=[260,520,780].map(x=>{const o=mk('g',{},$('fam2'));[-60,60].forEach(d=>{mk('path',{d:'M'+x+' 485L'+(x+d)+' 670',class:'s-line','stroke-width':3,'stroke-dasharray':'6 6'},o);worker(o,x+d,700,24)});return o});
const FL=[0,1,2].map(()=>coin($('flow2'),0,0,14));
fig($('agg3'),280,360,44,'ink');
fig($('ark4'),220,360,40,'gain');fig($('agg4'),1380,360,40,'ink');
const SH=[640,800,960].map(x=>{const g=mk('g',{},$('sh4'));mk('path',{d:'M'+(x-55)+' 390h110v60q0 70-55 100q-55-30-55-100z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},g);mk('circle',{cx:x,cy:450,r:16,class:'gain'},g);fig(g,x,590,14,'ink');return g});
const LC=[0,1,2].map(()=>coin($('lc4'),0,0,22));
const RT=[0,1,2].map(()=>coin($('rc4'),0,0,22));
{const g=mk('g',{},$('rc4'));mk('circle',{cx:0,cy:0,r:32,fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'5 5'},g);coin(g,0,0,22);const tx=mk('text',{x:0,y:-46,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--gain)'},g);tx.textContent='RENT';RT.push(g)}
const ST=[3,4,5,6,7].map((n,i)=>{const x=1080+i*80,sl=[];for(let j=0;j<n;j++)sl.push(mk('rect',{x:x-32,y:680-(j+1)*22,width:64,height:18,rx:9,class:'gain',stroke:'var(--ink)','stroke-width':3},$('stk5')));const tx=mk('text',{x:x,y:716,'font-size':20,'text-anchor':'middle',class:'m'},$('stk5'));tx.textContent=i+1;return [sl,tx]});
const RL=$('riv6').getTotalLength()||1500;
const RV=[0,1,2,3,4,5].map(()=>coin($('rc6'),0,0,14));
fig($('ark6'),200,420,34,'gain');
const GE=[0,1,2,3,4,5,6].map(i=>coin($('gen6'),360+i*95,690,8+i*4)), GL=[4,5,6].map((i,j)=>coin($('gen6'),360+i*95,790,8+j*4));
const CC=[];for(let r=0;r<3;r++)for(let c=0;c<7;c++)CC.push(mk('rect',{x:1138+c*42,y:636+r*46,width:32,height:32,rx:6,fill:'var(--line)'},$('cells7')));
const CK=mk('path',{d:'M1229 699l7 8 13-16',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('cells7'));
const W8=[960,1040,1120].map(x=>{const g=mk('g',{},$('wk8'));worker(g,x,740,26);return g});
[1280,1340,1400].forEach(x=>coin($('wk8'),x,774,26,'var(--line)'));