const ape=(g,x,y,r)=>{mk('path',{d:`M${x-1.4*r} ${y+3*r}v${-.8*r}a${1.4*r} ${1.4*r} 0 0 1 ${2.8*r} 0v${.8*r}z`,class:'ink'},g);[-1,1].forEach(s=>mk('circle',{cx:x+s*.95*r,cy:y-.1*r,r:.38*r,class:'ink'},g));mk('circle',{cx:x,cy:y,r:r,class:'ink'},g);mk('ellipse',{cx:x,cy:y+.18*r,rx:.68*r,ry:.58*r,fill:'var(--stage)'},g);[-1,1].forEach(s=>mk('circle',{cx:x+s*.25*r,cy:y+.02*r,r:.1*r,class:'ink'},g));return mk('path',{d:'',fill:'none',stroke:'var(--ink)','stroke-width':Math.max(3,r*.08),'stroke-linecap':'round'},g)};
const mouth=(m,x,y,r,s)=>m.setAttribute('d',`M${x-.25*r} ${y+.4*r}q${.25*r} ${s*.2*r} ${.5*r} 0`);
const pp=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-1.5*r} ${y+4.2*r}v${-1.3*r}a${1.5*r} ${1.5*r} 0 0 1 ${3*r} 0v${1.3*r}z`,class:cls},g)};
const M0=ape($('mk0'),1170,380,50);mouth(M0,1170,380,50,1);
const M2=ape($('mk2'),440,440,64), M3=ape($('mk3'),220,420,50);
for(let x=200;x<=680;x+=80)mk('path',{d:`M${x} 230V750`,class:'s-line','stroke-width':4},$('bars'));
[200,320].forEach(x=>pp($('sci'),x,420,30,'ink'));
const RA=[];for(let i=0;i<6;i++)RA.push(mk('ellipse',{cx:405+(i%3)*35,cy:260,rx:13,ry:9,class:'loss'},$('rais')));
const mark=(g,x,y,ok)=>mk('path',{d:ok?`M${x-20} ${y}l13 15 28-32`:`M${x-17} ${y-17}l34 34m0-34l-34 34`,fill:'none',stroke:ok?'var(--gain)':'var(--loss)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},g);
const R1=[],R2=[];for(let i=0;i<6;i++){R1.push(mark($('row1'),820+i*110,380,1));R2.push(mark($('row2'),820+i*110,580,[0,1,0,0,1,0][i]))}
for(let i=0;i<7;i++){const a=Math.PI+i*Math.PI/6;mk('path',{d:`M${(330+135*Math.cos(a)).toFixed(1)} ${(410+135*Math.sin(a)).toFixed(1)}L${(330+170*Math.cos(a)).toFixed(1)} ${(410+170*Math.sin(a)).toFixed(1)}`,class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays'))}
// other scientists, seen from behind: plain backs with hair cap, no faces
[1200,1300,1400].forEach(x=>{pp($('ign'),x,430,26,'loss');mk('path',{d:`M${x-26} 428a26 26 0 0 1 52 0z`,class:'ink','fill-opacity':.35},$('ign'))});
pp($('deci'),330,470,28,'ink');pp($('stud'),620,480,30,'ink');
const piece=(x,y,c)=>{const g=mk('g',{},$('cubes'));c.forEach(q=>mk('rect',{x:x+q[0]*24,y:y+q[1]*24,width:24,height:24,class:'gain',stroke:'var(--stage)','stroke-width':2},g));return g};
const CB=[piece(700,576,[[0,0],[1,0],[0,-1]]),piece(770,576,[[0,0],[1,0],[2,0],[1,-1]]),piece(852,576,[[0,0],[0,-1],[1,-1]])];
const sec=k=>{if(k<=0)return '';const a=-Math.PI/2+2*Math.PI*Math.min(k,.999);return `M1320 330V252A78 78 0 ${k>.5?1:0} 1 ${(1320+78*Math.cos(a)).toFixed(1)} ${(330+78*Math.sin(a)).toFixed(1)}Z`};
const PA=[[360,520],[660,380],[960,600]], FR=[[360,520],[660,490],[960,460]];
const pl=(P,k)=>{let s=P[0].join(',');for(let i=0;i<2;i++){const f=cl(k-i);if(f>0)s+=' '+(P[i][0]+(P[i+1][0]-P[i][0])*f).toFixed(1)+','+(P[i][1]+(P[i+1][1]-P[i][1])*f).toFixed(1)}return s};
const gear=(g,x,y,r,f)=>{const q=mk('g',{},g);for(let i=0;i<8;i++)mk('rect',{x:x-16,y:y-r-36,width:32,height:44,rx:6,fill:f,transform:`rotate(${i*45} ${x} ${y})`},q);mk('circle',{cx:x,cy:y,r:r,fill:f},q);mk('circle',{cx:x,cy:y,r:r*.35,fill:'var(--stage)'},q);return q};
const GX=[360,800,1240], GR=GX.map((x,i)=>gear($('gw'+i),x,540,100,i<2?'var(--muted)':'var(--gain)'));
for(let y=310;y<=570;y+=40)mk('circle',{cx:1180,cy:y,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spir'));