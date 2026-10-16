const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const bulb=(g,x,y,r,f)=>{const c=mk('circle',{cx:x,cy:y,r:r,fill:f,stroke:'var(--ink)','stroke-width':Math.max(3,r/8)},g);mk('rect',{x:x-r*.4,y:y+r*.85,width:r*.8,height:r*.45,rx:3,class:'ink'},g);return c};
const drw=(el,k)=>{el.setAttribute('stroke-dasharray','1 1');el.setAttribute('stroke-dashoffset',(1-k).toFixed(3))};
for(let i=0;i<8;i++){const a=i*Math.PI/4-Math.PI/2+.39,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1100+104*c)+' '+(320+104*s)+'L'+(1100+136*c)+' '+(320+136*s),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
const PL=[];[6,5,4,3,2,1].forEach((n,r)=>{for(let i=0;i<n;i++){const g=mk('g',{},$('pile'));bulb(g,450+(i-(n-1)/2)*64,760-r*56,26,'var(--stage)');PL.push(g)}});
const DU=[];for(let i=0;i<14;i++)DU.push(mk('circle',{cx:290+(i*97)%330,r:4,class:'ink','fill-opacity':.35},$('dust')));
mk('path',{d:'M880 700H1420',class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('sups'));
// cards fan outward (left pair tips left, right pair tips right) so neighbours never intersect
const ANG=[-14,-6,6,14],SU=[940,1080,1220,1360].map(x=>{const o=mk('g',{},$('sups')),g=mk('g',{},o),r=mk('rect',{x:x-50,y:500,width:100,height:200,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);for(let k=0;k<3;k++)mk('path',{d:'M'+(x-26)+' '+(540+k*50)+'h52',class:'s-line','stroke-width':6,'stroke-linecap':'round'},g);bulb($('sbul'),x,420,28,'var(--gain)');return [o,g,r,x]});
const gp=(r,n)=>{let d='';for(let i=0;i<n*4;i++){const a=i*Math.PI*2/(n*4),R=(i%4<2)?r:r+14;d+=(i?'L':'M')+(R*Math.cos(a)).toFixed(1)+' '+(R*Math.sin(a)).toFixed(1)}return d+'Z'};
const GR=[[300,670,80,12,'gain',1],[456,670,64,10,'ink',-1.25],[552,606,44,7,'gain',1.82]].map(q=>{const g=mk('g',{},$('gearsG'));mk('path',{d:gp(q[2],q[3]),class:q[4]},g);mk('circle',{r:14,fill:'var(--stage)'},g);return [g,q]});
[[940,620],[1400,620],[1170,760]].forEach(q=>fig($('tang'),q[0],q[1],22,'ink'));
const RP=[[972,690],[1368,690],[1170,734]].map(e=>[mk('path',{fill:'none',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('tang')),e]);
mk('circle',{cx:1170,cy:650,r:16,class:'loss'},$('tang'));
for(let i=0;i<5;i++){const v=212+i*54,w=332+i*54;[[v-6,268,12,32],[v-6,580,12,32],[148,w-6,32,12],[460,w-6,32,12]].forEach(q=>mk('rect',{x:q[0],y:q[1],width:q[2],height:q[3],class:'ink'},$('pins')))}
fig($('grove'),760,380,40,'ink');
fig($('fnd'),350,560,26,'ink');fig($('fnd'),490,560,26,'ink');
const TD=[];for(let i=0;i<36;i++)TD.push(mk('circle',{cx:820+(i%12)*52,cy:600+Math.floor(i/12)*50,r:16,class:'ink'},$('team')));
const KR=[.8,.55,.95].map((w,i)=>{const y=408+i*70,tx=mk('text',{x:600,y:y+22,'font-size':20,class:'m'},$('krs'));tx.textContent='KEY RESULT '+(i+1);mk('rect',{x:820,y:y,width:600,height:28,rx:14,fill:'var(--line)'},$('krs'));return [mk('rect',{x:820,y:y,height:28,rx:14,class:'gain'},$('krs')),w]});
for(let i=0;i<6;i++){const x=760+i*128;fig($('aud'),x,700,18,'ink');mk('path',{d:'M'+x+' 668V636m-10 10l10-10 10 10',fill:'none',class:'s-gain','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('look'))}
const bz=s=>{const m=1-s;return [m*m*m*180+3*m*m*s*500+3*m*s*s*700+s*s*s*880,m*m*m*700+3*m*m*s*690+3*m*s*s*600+s*s*s*270]};
const TG=[.2,.4,.6,.8,1].map((s,i)=>{const q=bz(s);return [mk('circle',{cx:q[0],cy:q[1],r:8+i*4,class:'gain',stroke:'var(--stage)','stroke-width':4},$('tags')),s]});
const LV=[];[1060,1230,1400].forEach(c=>{mk('path',{d:'M1230 314L'+c+' 420',class:'s-line','stroke-width':4},$('tree'));mk('rect',{x:c-70,y:420,width:140,height:56,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('tree'));const tx=mk('text',{x:c,y:456,'font-size':20,'text-anchor':'middle',class:'m'},$('tree'));tx.textContent='TEAM';[-44,0,44].forEach(o=>{mk('path',{d:'M'+c+' 476L'+(c+o)+' 546',class:'s-line','stroke-width':3},$('tree'));LV.push(mk('circle',{cx:c+o,cy:560,r:14,class:'ink'},$('tree')))})});
fig($('isl'),320,480,18,'ink');fig($('isl'),380,490,18,'ink');
// stepping stones: larger pills with 24px labels
const ST=[0,1,2,3].map(i=>{const g=mk('g',{},$('stones')),x=462+i*174;mk('rect',{x:x,y:560,width:154,height:48,rx:12,class:'gain'},g);const tx=mk('text',{x:x+77,y:593,'font-size':24,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);tx.textContent='STEP '+(i+1);return g});