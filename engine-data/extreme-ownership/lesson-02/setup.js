const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
[340,530].forEach((y,k)=>{const g=$('tb'+k);for(let i=0;i<4;i++)person(g,1130+i*85,y,16,'ink');mk('rect',{x:1080,y:y+40,width:360,height:40,rx:20,class:k?'loss':'gain'},g)});
for(let i=0;i<7;i++)person($('crew1'),220+i*72,600,18,'ink');
const RW=[360,300,240,180,120],RB=['1ST','2ND','3RD','4TH','LAST'].map((s,i)=>{const y=280+i*80;mk('text',{x:1000,y:y,'font-size':22,class:'m'},$('rankg')).textContent=s;return mk('rect',{x:1080,y:y-28,width:0,height:36,rx:8,fill:i?(i==4?'var(--loss)':'var(--line)'):'var(--gain)'},$('rankg'))});
const XS=[0,1,2,3,4,5,6,7].map(i=>300+i*100),Y2=[300,290,330,290,290,300,290,290],Y6=[580,600,560,610,600,590,610,600];
function trace(el,Y,f){let s='';for(let i=0;i<8;i++){if(i<=f)s+=XS[i]+','+Y[i]+' ';else{const k=f-(i-1);if(k>0)s+=(XS[i-1]+100*k).toFixed(1)+','+(Y[i-1]+(Y[i]-Y[i-1])*k).toFixed(1)+' ';break}}el.setAttribute('points',s)}
for(let i=0;i<4;i++)person($('ld2f'),220+i*80,430,18,'ink');
person($('ld2f'),560,400,26,'gain');
[940,1040,1300,1400].forEach(x=>{mk('path',{d:'M1180 420L'+x+' 515',class:'s-loss','stroke-width':4,'stroke-dasharray':'8 8',fill:'none'},$('blame'));person($('ld6f'),x,540,18,'ink')});
person($('ld6f'),1180,330,26,'loss');
[420,1180].forEach((c,k)=>{const g=$('sw'+k);for(let i=0;i<5;i++)person(g,c-140+i*70,560,16,'ink');mk('rect',{x:c-260,y:600,width:520,height:40,rx:20,class:'ink'},g)});
person($('inst'),800,560,22,'ink');mk('path',{d:'M774 552a26 26 0 0 1 52 0z',class:'loss'},$('inst'));
const L2=mk('g',{},$('lds')),L6=mk('g',{},$('lds'));person(L2,0,0,22,'gain');person(L6,0,0,22,'loss');
for(let i=0;i<5;i++){person($('cr6'),600+i*55,410,16,i==2?'gain':'ink');person($('cr2'),300+i*55,510,16,'ink')}
const ROPE=[];for(let i=0;i<5;i++){const x=280+i*100;ROPE.push(mk('line',{x1:x,x2:x,y1:620,y2:620,class:'s-gain','stroke-width':4,'stroke-linecap':'round'},$('ropes')));person($('team'),x,640,18,'ink')}
person($('mirp'),300,400,34,'gain');
for(let i=0;i<3;i++){const y=420+i*60;mk('rect',{x:630,y:y-24,width:28,height:28,rx:4,fill:'none',class:'s-ink','stroke-width':4},$('rows'));mk('path',{d:'M680 '+(y-10)+'H860',class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('rows'))}
const CP=[[940,698],[1060,578],[1220,458],[1380,338]];