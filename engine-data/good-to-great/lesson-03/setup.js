const fig=(g,x,y,r,cls)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},e);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},e);return e};
function bus(par,x,y,s){const g=mk('g',{transform:`translate(${x} ${y}) scale(${s})`},par),w=5/s,o={fill:'var(--stage)',stroke:'var(--ink)','stroke-width':w,'stroke-linejoin':'round'};
  mk('rect',Object.assign({x:0,y:0,width:400,height:170,rx:22},o),g);
  [24,92,160,228,346].forEach((q,i)=>mk('rect',Object.assign({x:q,y:26,width:i<4?56:40,height:60,rx:6},o),g));
  mk('rect',Object.assign({x:300,y:26,width:36,height:130,rx:4},o),g);
  mk('path',{d:'M0 116H290',stroke:'var(--gain)','stroke-width':w*1.4},g);
  [90,310].forEach(c=>mk('circle',{cx:c,cy:170,r:26,fill:'var(--ink)'},g));return g}
const seat=(g,cx,cls)=>{const e=mk('g',{},g);mk('circle',{cx:cx,cy:46,r:11,class:cls},e);mk('path',{d:`M${cx-16} 86v-10a16 16 0 0 1 32 0v10z`,class:cls},e);return e};
const check=(g,x,y,col)=>mk('path',{d:`M${x-14} ${y}l10 10l20-20`,fill:'none',stroke:col,'stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
const WX=[52,120,188,256];

const TB=bus($('tbus'),0,0,.9), TS=WX.map(c=>seat(TB,c,'gain')); seat(TB,366,'ink');
const BB=bus($('bbus'),360,300,2), BS=WX.slice(0,3).map(c=>seat(BB,c,'gain')), WR=seat(BB,256,'loss'); seat(BB,366,'ink');

const RB=bus($('rbus'),0,0,.5); WX.forEach(c=>seat(RB,c,'gain'));
const NR=$('newR'), NL=NR.getTotalLength();
[260,380,500].forEach(x=>{fig($('pAf'),x,670,18,'loss');mk('text',{x:x+34,y:652,'font-size':40,class:'d',style:'fill:var(--loss)'},$('pAf')).textContent='?'});
mk('path',{d:'M980 670H1220',class:'s-gain','stroke-width':4},$('pBf'));
[980,1100,1220].forEach(x=>fig($('pBf'),x,670,18,'gain'));

// eight hires, each with a readable dashed "JOB?" tag (22px, wide tags)
const WF=[];for(let i=0;i<8;i++){const x=1000+(i%4)*136,y=370+Math.floor(i/4)*190,g=mk('g',{},$('wfig'));fig(g,x,y,22,'gain');
  mk('rect',{x:x-56,y:y+100,width:112,height:36,rx:8,fill:'none',stroke:'var(--muted)','stroke-width':3,'stroke-dasharray':'6 5'},g);
  mk('text',{x:x,y:y+126,'font-size':22,'text-anchor':'middle',class:'m'},g).textContent='JOB?';WF.push(g)}

const RN=[];for(let i=0;i<7;i++)RN.push(mk('path',{d:`M${272+i*40} 392l-10 50`,class:'s-loss','stroke-width':4,'stroke-dasharray':'10 8','stroke-linecap':'round'},$('rain')));
const BX=[230,390,550], SB=BX.map(x=>{const g=mk('g',{},$('sbanks'));mk('path',{d:`M${x-50} 500L${x} 470L${x+50} 500Z`,class:'s-muted',fill:'none','stroke-width':5,'stroke-linejoin':'round'},g);mk('rect',{x:x-44,y:500,width:88,height:60,class:'s-muted',fill:'none','stroke-width':5},g);return g});
const TF=[200,320,440,560,680].map(x=>fig($('steamf'),x,670,20,'gain'));

const SX=[860,1000,1140,1280,1420], SF=SX.map((x,i)=>{mk('rect',{x:x-45,y:560,width:90,height:12,rx:4,fill:'var(--line)'},$('seatf'));return fig($('seatf'),x,460,22,i?'ink':'gain')});
const MK=SX.map((x,i)=>{const g=mk('g',{},$('marks'));if(i<4)check(g,x,605,'var(--gain)');else mk('path',{d:`M${x-12} 590l24 24M${x+12} 590l-24 24`,stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},g);return g});

const CX=[480,570,660,750,840]; CX.forEach(x=>{const f=fig($('cands'),x,460,16,'ink');f.setAttribute('opacity',.4)});
const CG=fig($('cands'),840,460,16,'gain');
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:`M${(1220+92*Math.cos(a)).toFixed(1)} ${(450+92*Math.sin(a)).toFixed(1)}L${(1220+80*Math.cos(a)).toFixed(1)} ${(450+80*Math.sin(a)).toFixed(1)}`,class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ticks'))}

[740,800,860].forEach(x=>fig($('stars'),x,330,18,'gain'));
const EB=bus($('ebus'),1100,620,.8); WX.forEach(c=>seat(EB,c,'gain'));
const EC=WX.map(c=>check($('echk'),1100+.8*c,596,'var(--gain)'));