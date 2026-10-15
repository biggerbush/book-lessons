const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const star=(cx,cy,R,g)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?R*.45:R;s+=(cx+q*Math.cos(a)).toFixed(1)+','+(cy+q*Math.sin(a)).toFixed(1)+' '}return mk('polygon',{points:s,class:'gain'},g)};
const ray=(g,cx,cy,r1,r2,a,w)=>mk('path',{d:'M'+(cx+r1*Math.cos(a)).toFixed(1)+' '+(cy+r1*Math.sin(a)).toFixed(1)+'L'+(cx+r2*Math.cos(a)).toFixed(1)+' '+(cy+r2*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':w,'stroke-linecap':'round'},g);
const sa=i=>SC[i][0]/K;
for(let i=0;i<7;i++)ray($('rays'),1340,330,100,135,-Math.PI+i*Math.PI/6,8);
fig($('bornF'),1150,500,30,'ink');fig($('bornF'),1350,500,30,'ink');star(1150,414,26,$('bornF'));
fig($('sofaP'),1100,450,30,'ink');
const RG=[];for(let i=0;i<7;i++)RG.push(mk('path',{d:'M1060 '+(700-60*i)+'h140',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},$('rungs')));
const CL=mk('g',{},$('climbW'));fig(CL,0,-84,20,'gain');
[900,960,1280,1340,1400].forEach(x=>fig($('crowd3'),x,690,14,'ink'));
fig($('tchr'),950,360,22,'ink');
const ID=[280,400,520].map(x=>star(x,255,22,$('ideas')));
const LN=[300,380,240,340,200].map((w,i)=>[mk('rect',{x:200,y:340+i*48,width:0,height:16,rx:8,fill:i?'var(--muted)':'var(--ink)'},$('lines')),w]);
const CE=[];for(let r=0;r<4;r++)for(let c=0;c<7;c++)CE.push(mk('rect',{x:780+c*100,y:330+r*90,width:90,height:80,rx:10},$('cells')));
const FP=[];for(let i=0;i<12;i++){const k=i/11,s=i%2?14:-14,x=520+840*k+.306*s,y=720-270*k+.952*s;FP.push(mk('ellipse',{cx:x.toFixed(1),cy:y.toFixed(1),rx:16,ry:10,class:'ink',transform:'rotate(-17.8 '+x.toFixed(1)+' '+y.toFixed(1)+')'},$('steps')))}
for(let i=0;i<8;i++)mk('circle',{cx:230,cy:300+i*30,r:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spiral'));
const PL=[];for(let i=0;i<5;i++)PL.push(mk('path',{d:'M265 '+(340+i*36)+'h'+(i===4?80:140),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('plines')));
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(800+112*Math.cos(a)).toFixed(1)+' '+(410+112*Math.sin(a)).toFixed(1)+'L'+(800+124*Math.cos(a)).toFixed(1)+' '+(410+124*Math.sin(a)).toFixed(1),stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},$('ticks'))}
for(let i=0;i<8;i++)ray($('sunr'),1180,400,58,74,i*Math.PI/4,6);
fig($('mfig'),1380,420,26,'gain');