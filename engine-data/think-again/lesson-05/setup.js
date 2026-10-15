const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-1.6*r} ${y+3.6*r}v${-.6*r}a${1.6*r} ${1.6*r} 0 0 1 ${3.2*r} 0v${.6*r}z`,class:c},g)};
const TA=mk('g',{},$('tdance')),TB=mk('g',{},$('tdance'));fig(TA,0,-50,26,'ink');fig(TB,0,-50,26,'gain');
fig($('fighters'),300,400,40,'ink');fig($('fighters'),1300,400,40,'ink');
const AR=[0,1,2,3,4].map(()=>{const g=mk('g',{},$('arrows'));mk('path',{d:'M0 0h70m-18-14 18 14-18 14',fill:'none',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
const BR=[];for(let r=0;r<6;r++)for(let c=0;c<2;c++)BR.push(mk('rect',{x:1080+c*60,y:524-r*36,width:60,height:36,class:'loss',stroke:'var(--stage)','stroke-width':4},$('bricks')));
fig($('harish2'),400,440,36,'ink');
const DOC=[[1320,390],[1380,425],[1325,465],[1385,500],[1322,540],[1382,575]].map(q=>{const g=mk('g',{},$('docs'));mk('rect',{x:q[0],y:q[1],width:40,height:50,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},g);mk('path',{d:`M${q[0]+8} ${q[1]+16}h24M${q[0]+8} ${q[1]+28}h24M${q[0]+8} ${q[1]+40}h14`,stroke:'var(--muted)','stroke-width':3},g);return g});
fig($('h3p'),200,470,34,'ink');
for(let i=0;i<10;i++){const w=200-(i%3)*20;mk('rect',{x:530-w/2+(i%2?8:-8),y:578-i*24,width:w,height:22,rx:3,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('mtn'))}
for(let j=0;j<12;j++)[910,1230].forEach(x0=>mk('circle',{cx:x0+(j%4)*60,cy:330+Math.floor(j/4)*70,r:18,class:'ink'},$('dots')));
const MV=[0,1,2,3].map(c=>mk('circle',{cx:1230+c*60,cy:540,r:18,class:'ink'},$('movers')));
// skilled vs average groups
[230,300,370].forEach(x=>fig($('grpS'),x,380,20,'ink'));
[530,600,670].forEach(x=>fig($('grpA'),x,380,20,'ink'));
const SB=mk('rect',{x:180,y:700,width:80,height:0,class:'gain'},$('bars5'));
const WH=[120,90,140,70],WB=WH.map((h,i)=>mk('rect',{x:290+i*110,y:700,width:80,height:0,class:'loss'},$('bars5')));
const RH=[360,320,300],RB=RH.map((h,i)=>mk('rect',{x:960+i*140,y:700,width:100,height:0,class:'gain'},$('rbars')));
const bar=(r,h,k)=>{r.setAttribute('y',(700-h*k).toFixed(1));r.setAttribute('height',(h*k).toFixed(1))};
fig($('ppl6'),220,470,36,'ink');fig($('ppl6'),640,470,36,'ink');
// dancers side by side, facing each other
fig($('dA'),740,400,30,'ink');fig($('dB'),860,400,30,'gain');
mk('circle',{cx:756,cy:394,r:5,fill:'var(--stage)'},$('dA'));mk('circle',{cx:844,cy:394,r:5,fill:'var(--stage)'},$('dB'));
const FP=[];for(let i=0;i<16;i++){const th=i*Math.PI/8,x=800+540*Math.cos(th),y=470+200*Math.sin(th),an=Math.atan2(200*Math.cos(th),-540*Math.sin(th))*180/Math.PI;
FP.push(mk('ellipse',{cx:0,cy:0,rx:10,ry:17,class:i%2?'gain':'ink',transform:`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(an-90).toFixed(1)})`},$('feet')))}
const W1=mk('path',{fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('waves')),W2=mk('path',{fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('waves'));
const wv=(ph,tt)=>{let s='';for(let x=160;x<=1440;x+=20)s+=(x===160?'M':'L')+x+' '+(760+22*Math.sin(x/70-tt*3+ph)).toFixed(1);return s};
const orb=(g,cx,cy,rx,ry,a)=>g.setAttribute('transform',`translate(${(cx+rx*Math.cos(a)).toFixed(1)} ${(cy+ry*Math.sin(a)).toFixed(1)})`);