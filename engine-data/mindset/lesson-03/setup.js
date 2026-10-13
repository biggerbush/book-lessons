const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const starD=(cx,cy,R)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?R*.45:R;s+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return s+'Z'};
const draw=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
$('starP').setAttribute('d',starD(1300,450,80));
const SPK=[];for(let i=0;i<5;i++){const a=Math.PI+i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);SPK.push(mk('path',{d:'M'+(1300+112*c).toFixed(1)+' '+(450+112*s).toFixed(1)+'L'+(1300+138*c).toFixed(1)+' '+(450+138*s).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('spark0')))}
const BR=[];for(let r=0;r<4;r++){const n=4-r;for(let i=0;i<n;i++)BR.push(mk('rect',{x:1300-(n*88-4)/2+i*88,y:700-r*48,width:84,height:40,rx:4,class:'s-ink',fill:'var(--stage)','stroke-width':5},$('bricks')))}
[170,250,330,410].forEach(x=>fig($('crowdG'),x,580,20,'ink'));
fig($('ath'),760,330,30,'gain');
$('wtip').setAttribute('d',starD(884,294,24));
const CK=[];for(let i=0;i<14;i++){const x=590+(i%7)*57,y=i<7?580:680,g=mk('g',{},$('clocks'));mk('circle',{cx:x,cy:y,r:22,class:'s-ink',fill:'var(--stage)','stroke-width':4},g);CK.push([g,mk('line',{x1:x,y1:y,x2:x,y2:y-14,class:'s-ink','stroke-width':4,'stroke-linecap':'round'},g),x,y])}
fig($('ply'),300,596,24,'ink');
fig($('kid4'),370,430,20,'gain');
for(let i=1;i<10;i++)mk('line',{x1:120+i*50,y1:520,x2:120+i*50,y2:650,class:'s-ink','stroke-width':3},$('keys'));
[0,1,3,4,5,7,8].forEach(i=>mk('rect',{x:120+i*50+35,y:520,width:30,height:75,class:'ink'},$('keys')));
const YR=[];for(let i=0;i<10;i++)YR.push(mk('rect',{x:720+i*74,y:300,width:64,height:64,rx:8,stroke:'var(--ink)','stroke-width':4,fill:'none'},$('yrs')));
for(let i=0;i<5;i++)mk('line',{x1:720,y1:560+i*20,x2:1460,y2:560+i*20,class:'s-line','stroke-width':3},$('staff'));
const NT=[];for(let i=0;i<8;i++){const x=770+i*84,y=640-((i*3)%5)*20,g=mk('g',{},$('staff')),c=i>5?'var(--gain)':'var(--ink)';mk('ellipse',{cx:x,cy:y,rx:14,ry:10,fill:c},g);mk('line',{x1:x+13,y1:y,x2:x+13,y2:y-50,stroke:c,'stroke-width':4},g);NT.push(g)}
const BF=[...$('bf').querySelectorAll('path')],AF=[...$('af').querySelectorAll('path')];
[...BF,...AF].forEach(e=>{e.setAttribute('pathLength',1);e.setAttribute('stroke-dasharray',1)});
fig($('kid1'),220,560,20,'loss');fig($('kid3'),1410,520,20,'gain');
$('kstar').setAttribute('d',starD(1410,470,18));
const DT=[600,480,360].map(y=>mk('circle',{cx:220,cy:y,r:14,class:'ink'},$('dots')));
const TG=[['PRACTICE',580,620],['STRATEGIES',820,520],['LEARNING',1060,420]].map(q=>{const g=mk('g',{},$('tags'));mk('rect',{x:q[1]-100,y:q[2]-64,width:200,height:44,rx:22,class:'gain'},g);const tx=mk('text',{x:q[1],y:q[2]-35,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=q[0];return g});
const ST=$('stair');let SL=1;try{SL=ST.getTotalLength()}catch(e){}
const qb8=(k)=>{const a=1-k;return [a*a*1230+2*a*k*1290+k*k*1352, a*a*530+2*a*k*100+k*k*336]};