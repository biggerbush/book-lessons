const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const R=(id,a,u)=>rise($(id),p(u,a,a+.5));
const MK=[[1330,310],[1240,406],[1350,454],[1230,550]];
[150,190,120,170,140,180].forEach((w,i)=>mk('path',{d:'M1170 '+(310+i*48)+'h'+w,class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('plines')));
const XS=MK.map(([x,y])=>mk('path',{d:'M'+(x-14)+' '+(y-14)+'l28 28m0-28l-28 28',stroke:'var(--loss)','stroke-width':7,'stroke-linecap':'round'},$('pmarks')));
MK.forEach(([x,y])=>mk('circle',{cx:x,cy:y,r:12,class:'gain'},$('pmap')));
mk('path',{d:'M'+MK.map(q=>q.join(' ')).join('L'),fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 8','stroke-linecap':'round'},$('pmap'));
[400,1200].forEach((x,i)=>{const g=$('st'+i);person(g,x,500,34,'ink');mk('rect',{x:x-30,y:580,width:60,height:76,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+(x-12)+' 600l24 24m0-24l-24 24',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round'},g)});
person($('who2'),1150,400,40,'ink');
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(320+120*c).toFixed(1)+' '+(470+120*s).toFixed(1)+'L'+(320+134*c).toFixed(1)+' '+(470+134*s).toFixed(1),class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('tick3'))}
const CP=['STRATEGY','EFFORT','HELP'].map((s,i)=>{const g=mk('g',{},$('chips3')),x=1020+i*145;mk('rect',{x:x,y:320,width:130,height:56,rx:28,class:'gain'},g);const tx=mk('text',{x:x+65,y:355,'font-size':18,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=s;return g});
const WV=[490,690].map((y,i)=>{const g=$('r4'),c=i?'var(--gain)':'var(--loss)';mk('circle',{cx:260,cy:y,r:56,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);mk('ellipse',{cx:260,cy:y-6,rx:34,ry:24,fill:c,'fill-opacity':.35},g);mk('path',{d:'M260 '+(y-30)+'v48',stroke:'var(--ink)','stroke-width':4},g);const tx=mk('text',{x:340,y:y+8,'font-size':24,class:'m',style:'fill:'+c},g);tx.textContent=i?'GROWTH':'FIXED';return mk('polyline',{fill:'none',stroke:c,'stroke-width':4,'stroke-linejoin':'round'},g)});
const wave=(el,Y,a1,a2,t)=>{let s='';for(let x=520;x<=1460;x+=6){const A=4+a1*Math.exp(-(((x-760)/110)**2))+a2*Math.exp(-(((x-1250)/110)**2));s+=x+','+(Y+A*Math.sin(x/7+t*5)).toFixed(1)+' '}el.setAttribute('points',s)};
person($('p5a'),1150,440,30,'gain');person($('p5b'),1360,440,30,'loss');
person($('cl6'),420,430,22,'loss');
let gp='';for(let k=0;k<12;k++){const a=k*Math.PI/6;[[-.13,86],[-.08,112],[.08,112],[.13,86]].forEach(([d,r])=>{gp+=(r*Math.cos(a+d)).toFixed(1)+','+(r*Math.sin(a+d)).toFixed(1)+' '})}$('gp6').setAttribute('points',gp);
const BH=[80,140,200,260],BR=BH.map((h,i)=>mk('rect',{x:1220+i*60,y:680,width:40,height:0,rx:6,class:'gain'},$('bars6')));
for(let i=0;i<5;i++)mk('circle',{cx:220+i*110,cy:230,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rg7'));
for(let i=0;i<7;i++)mk('rect',{x:1060+(i%4)*98,y:410+Math.floor(i/4)*110,width:86,height:96,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('cells7'));