const S='var(--stage)',I='var(--ink)',PU='var(--loss)';
const cow=(g,x,y,s,f)=>{const w=mk('g',{},g),c=mk('g',{transform:'translate('+x+' '+y+') scale('+s+')'},w);
mk('path',{d:'M-38 20v50M-18 20v50M22 20v50M42 20v50M-60-18q-22 10-14 42',fill:'none',stroke:I,'stroke-width':8,'stroke-linecap':'round'},c);
mk('rect',{x:-62,y:-36,width:124,height:66,rx:28,fill:f||S,stroke:I,'stroke-width':5},c);
if(!f){mk('ellipse',{cx:-22,cy:-8,rx:16,ry:11,fill:I},c);mk('ellipse',{cx:22,cy:8,rx:11,ry:8,fill:I},c)}
mk('path',{d:'M60-56l-8-14M86-56l8-14',stroke:I,'stroke-width':5,'stroke-linecap':'round'},c);
mk('rect',{x:50,y:-58,width:46,height:42,rx:14,fill:f||S,stroke:I,'stroke-width':5},c);
mk('circle',{cx:82,cy:-42,r:4,fill:I},c);return w};
const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
[1110,1260,1400].forEach(x=>cow($('t0c'),x,470,.6));
cow($('t0p'),1280,330,1.3,PU);
const C1=[640,840,1040,1240,1400].map(x=>cow($('f1cows'),x,610,.7));
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(300+122*s).toFixed(1)+' '+(460-122*c).toFixed(1)+'L'+(300+138*s).toFixed(1)+' '+(460-138*c).toFixed(1),stroke:I,'stroke-width':5,'stroke-linecap':'round'},$('ticks'))}
const G2=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++)G2.push(cow($('grid'),700+c*220,340+r*150,.8));
[220,320,420].forEach(x=>person($('faces'),x,410,30,'ink'));
[820,1380].forEach(x=>cow($('c3'),x,610,.8));
const P3=cow($('p3'),1100,580,1.15,PU);
for(let i=0;i<7;i++){const a=Math.PI+(i+1)*Math.PI/8,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1110+150*c).toFixed(1)+' '+(540+150*s).toFixed(1)+'L'+(1110+190*c).toFixed(1)+' '+(540+190*s).toFixed(1),stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
let fp='M720 630H1480M720 670H1480';for(let x=720;x<=1480;x+=95)fp+='M'+x+' 600V700';
mk('path',{d:fp,stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round',fill:'none'},$('fence'));
[350,410,470].forEach(x=>person($('frnd'),x,700,16,'ink'));
let hp='';for(let y=280;y<580;y+=20)hp+='M580 '+y+'h40';mk('path',{d:hp,stroke:I,'stroke-width':3},$('hatch'));
const D4=[];for(let i=0;i<6;i++)D4.push(mk('circle',{cx:1460,cy:320,r:12,fill:'var(--muted)'},$('dots')));
const R4=[780,960,1140,1320].map(x=>cow($('row'),x,480,.7));
const BX=[],CK=[];for(let r=0;r<2;r++)for(let i=0;i<10;i++){const x=180+i*126,y=300+r*240,g=mk('g',{},$('boxes'));
mk('rect',{x:x,y:y,width:100,height:180,rx:6,fill:'var(--line)',stroke:I,'stroke-width':4},g);
mk('rect',{x:x+15,y:y+60,width:70,height:40,fill:S},g);BX.push(g);
CK.push(mk('path',{d:'M'+(x+36)+' '+(y+80)+'l10 10 18-18',fill:'none',stroke:I,'stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g))}
const G6=[620,800,1240,1410].map(x=>cow($('c6'),x,470,.7));
cow($('p6'),1030,460,1,PU);
for(let x=160;x<=520;x+=60)mk('circle',{cx:x,cy:240,r:10,fill:S,stroke:I,'stroke-width':4},$('spir'));
const CD=[];let YR;for(let i=0;i<8;i++){const x=700+(i%4)*190,y=280+Math.floor(i/4)*150,yo=i===5,g=mk('g',{},$('cards'));
const r=mk('rect',{x:x,y:y,width:150,height:120,rx:12,fill:yo?S:'var(--line)',stroke:yo?'var(--gain)':I,'stroke-width':yo?6:4,'stroke-dasharray':yo?'10 8':'none'},g);
if(yo){YR=r;mk('path',{d:'M'+(x+30)+' '+(y+36)+'h90',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},g);
const tx=mk('text',{x:x+75,y:y+88,'font-size':24,'text-anchor':'middle',class:'m',style:'fill:var(--gain)'},g);tx.textContent='YOURS'}
else mk('path',{d:'M'+(x+25)+' '+(y+38)+'h100M'+(x+25)+' '+(y+64)+'h60',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round'},g);
CD.push(g)}
person($('str'),1060,640,26,'ink');
let RG;for(let i=0;i<13;i++){const x=150+i*70;if(i===8){RG=mk('circle',{cx:x,cy:740,r:34,fill:'none',stroke:'var(--gain)','stroke-width':5},$('row8'));mk('circle',{cx:x,cy:740,r:24,class:'loss'},$('row8'))}else mk('circle',{cx:x,cy:740,r:16,fill:'var(--muted)','fill-opacity':.5},$('row8'))}