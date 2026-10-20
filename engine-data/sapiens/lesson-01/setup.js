const CG='var(--gain)',CI='var(--ink)';
const fig=(g,x,y,r,c,w=1.5)=>{const q=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,fill:c},q);mk('path',{d:'M'+(x-r*w)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*w)+' '+(r*1.5)+' 0 0 1 '+(2*r*w)+' 0v'+(r*1.3)+'z',fill:c},q);return q};
fig($('t0'),1290,600,28,CG);fig($('t1'),1410,604,27,CI,2);fig($('t1'),1220,653,16,CI);
const BR=[],SB=[];
[280,500,720,940,1160,1380].forEach((x,i)=>{BR.push(mk('path',{d:'M830 620C830 530 '+x+' 530 '+x+' 440',fill:'none',stroke:CI,'stroke-width':6,'stroke-linecap':'round'},$('brs')));mk('circle',{cx:x,cy:440,r:10,fill:CI},$('tree'));if(i)SB.push(fig($('sibs'),x,330,18,CI,1.4+(i%3)*.2))});
fig($('sap'),280,330,18,CG);
const ST=[0,1,2,3].map(i=>mk('line',{x1:120,y1:710+i*18,x2:120,y2:710+i*18,stroke:i%2?'var(--muted)':CI,'stroke-width':8,'stroke-linecap':'round'},$('stripes')));
fig($('isl'),380,535,12,CI);
for(let i=0;i<=14;i++){const y=760-i*30;mk('line',{x1:790,y1:y,x2:790+(i%5?16:30),y2:y,stroke:CI,'stroke-width':3},$('tape'))}
fig($('tape'),960,518,58,CI);
const SH=[[1140,30],[1270,22],[1390,15]].map(([x,r])=>fig($('shr'),x,760-4.2*r,r,CI));
const RG=[];for(let i=0;i<10;i++)RG.push(mk('line',{stroke:'var(--muted)','stroke-width':4},$('rungs')));
const CO=[800,960,1120,1280,1440].map(x=>{const g=mk('g',{},$('cous'));mk('circle',{cx:x,cy:680,r:40,fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 8'},g);mk('text',{x:x,y:694,'font-size':40,'text-anchor':'middle',class:'d'},g).textContent='?';return g});
const OT=[[760,28,2],[900,22,1.5],[1030,14,1.5],[1160,26,1.6],[1320,24,1.7]].map(([x,r,w])=>fig($('oth'),x,520-4.2*r,r,CI,w));
[300,420,540].forEach(x=>fig($('walk'),x,419.2,24,CG));
fig($('me'),240,400,30,CG);fig($('refl'),420,410,18,'var(--muted)');
const BT=[650,700,750,800,850,900,950].map((x,i)=>mk('path',{d:'M800 540C800 440 '+x+' 420 '+x+' '+(300+(i%2)*40),fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-dasharray':'10 8','stroke-linecap':'round'},$('brs7')));
fig($('pair'),1300,650,26,CG);fig($('pair'),1410,652,26,CI,2);