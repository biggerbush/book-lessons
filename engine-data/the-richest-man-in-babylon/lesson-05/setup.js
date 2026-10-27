const I='var(--ink)',G='var(--gain)',L='var(--loss)',S='var(--stage)',M='var(--muted)';
const fig=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)};
const gem=(g,x,y,s,f)=>mk('path',{d:'M'+(x-s)+' '+y+'l'+s*.5+' '+(-s*.6)+'h'+s+'l'+s*.5+' '+s*.6+'l'+(-s)+' '+s*1.1+'z',fill:f,stroke:I,'stroke-width':4,'stroke-linejoin':'round'},g);
// title: coins dropping into the year's pouch
const ST=[];for(let i=0;i<8;i++)ST.push(mk('ellipse',{cx:1140,cy:220,rx:30,ry:9,fill:G,stroke:I,'stroke-width':4,opacity:0},$('stack')));
fig($('fg1'),300,380,36,I);fig($('fg1'),560,380,36,M);
for(let i=0;i<10;i++)mk('circle',{cx:760+i*70,cy:300,r:24,fill:S,stroke:i<9?I:M,'stroke-width':4,'stroke-dasharray':i<9?'none':'6 6'},$('cn1'));
const MO=[];for(let i=0;i<12;i++)MO.push(mk('circle',{cx:760+i*57,cy:830,r:10},$('mo1')));
fig($('fz2'),260,320,36,I);fig($('fk2'),580,320,36,I);
const C2=[];for(let i=0;i<5;i++)C2.push(mk('ellipse',{cx:670,cy:470-i*12,rx:26,ry:8,fill:G,stroke:I,'stroke-width':3},$('cs2')));
[[1290,420],[1360,380],[1430,420]].forEach(q=>gem($('gm2'),q[0],q[1],26,G));
const GM3=[[300,400],[410,360],[520,400]].map(q=>gem($('gm3'),q[0],q[1],40,G));
const SH3=[[-120,20],[-60,-40],[0,30],[60,-30],[120,20],[-30,80],[50,90]].map(q=>[mk('path',{d:'M0 -22l20 32h-34z',fill:L,stroke:I,'stroke-width':3,'stroke-linejoin':'round'},$('sh3')),q[0],q[1]]);
fig($('fg4'),250,380,44,M);
const RW4=[],MK4=[];[['Brickmaker','about jewels'],['Baker','about the stars'],['Jeweler','about jewels']].forEach((r,i)=>{const y=310+i*170,g=mk('g',{},$('rw4'));
 if(i==2){mk('rect',{x:490,y:y-54,width:980,height:80,rx:16,fill:'none',stroke:G,'stroke-width':4},g);gem(g,540,y-22,30,G)}
 if(i==0)mk('rect',{x:505,y:y-34,width:70,height:36,fill:L,stroke:I,'stroke-width':4},g);
 if(i==1)mk('ellipse',{cx:540,cy:y-16,rx:36,ry:20,fill:M,stroke:I,'stroke-width':4},g);
 mk('text',{x:620,y:y,'font-size':40,class:'d5'},g).textContent=r[0];
 mk('path',{d:'M870 '+(y-14)+'h96m-18-18 18 18-18 18',fill:'none',stroke:M,'stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
 mk('text',{x:1010,y:y,'font-size':40,class:'d5'},g).textContent=r[1];
 MK4.push(mk('path',{d:i<2?'M1376 '+(y-40)+'l48 48m0-48l-48 48':'M1372 '+(y-14)+'l18 18 36-40',fill:'none',stroke:i<2?L:G,'stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},g));RW4.push(g)});
[[180,300],[300,280],[420,300],[180,500],[300,480],[420,500]].forEach(q=>fig($('cr6'),q[0],q[1],26,I));
// advice chips: 3 worthy (kept) and 6 rejected, each with its own hover spot between crowd and funnel
const KP6=[[520,350],[520,460],[520,570]], RJ6=[[560,300],[660,300],[600,405],[560,515],[660,515],[600,610]];
const KB=KP6.map(()=>mk('rect',{width:40,height:28,rx:8,'stroke-width':4},$('bb6')));
const RB=RJ6.map(()=>mk('rect',{width:40,height:28,rx:8,'stroke-width':4},$('bb6')));
const RW7=[],TK7=[];[['Can I get my money back?','IF THINGS GO WRONG · PROTECT THE PRINCIPAL'],['Does my adviser know this field?','REAL EXPERIENCE IN THIS EXACT TRADE'],['Still yes with a smaller profit?','IGNORE THE DAZZLING PROMISE']].forEach((r,i)=>{const y=320+i*160,c=330+i*120,g=mk('g',{},$('rw7'));
 mk('rect',{x:530,y:y-42,width:54,height:54,rx:10,fill:S,stroke:I,'stroke-width':5},g);
 mk('text',{x:620,y:y,'font-size':40,class:'d5'},g).textContent=r[0];
 mk('text',{x:620,y:y+44,'font-size':20,class:'m'},g).textContent=r[1];
 mk('rect',{x:175,y:c-20,width:36,height:36,rx:6,fill:'none',stroke:I,'stroke-width':4},$('cl7'));
 mk('path',{d:'M230 '+c+'h170',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},$('cl7'));
 const sty={fill:'none',stroke:G,'stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'};
 TK7.push([mk('path',Object.assign({d:'M542 '+(y-16)+'l12 12 26-30'},sty),g),mk('path',Object.assign({d:'M181 '+(c-2)+'l9 9 18-22'},sty),$('cl7'))]);RW7.push(g)});