const fig=(par,x,y,r,f)=>{const g=mk('g',{fill:f},par);mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},g);return g};
const G='var(--gain)',I='var(--ink)',L='var(--loss)';
const txt=(par,x,y,s,fs,anc,cls)=>{const e=mk('text',{x:x,y:y,'font-size':fs,'text-anchor':anc||'start',class:cls||'m'},par);e.textContent=s;return e};
fig($('t0'),1230,360,32,G);fig($('t0'),1410,392,26,I);
mk('path',{d:'M1150 500h330',class:'s-line','stroke-width':5,'stroke-linecap':'round'},$('t0'));
fig($('td1f'),960,420,30,G);fig($('td1f'),1280,420,30,I);
fig($('cls2f'),790,330,30,G);
for(let r=0;r<2;r++)for(let i=0;i<8;i++)fig($('cls2f'),160+i*80,540+r*100,14,I);
const CK=[];for(let i=0;i<4;i++){const y=320+i*70;mk('rect',{x:990,y:y,width:36,height:36,rx:6,fill:'none',stroke:I,'stroke-width':4},$('nt2c'));
mk('path',{d:'M1050 '+(y+18)+'H'+(1290-i*30),class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('nt2c'));
CK.push(mk('path',{d:'M996 '+(y+18)+'l10 10 18-22',fill:'none',stroke:G,'stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('nt2c')))}
fig($('st3f'),892,599,24,I);fig($('st3f'),1228,439,24,G);
const PT=[[480,240],[800,240],[480,420],[800,420]],PS=[[140,250,-6],[1140,230,5],[170,520,4],[1120,540,-2]];
const PL=[['WATCH YOUR FEELINGS'],['CHOOSE GRATITUDE'],['GET OVER YOURSELF'],['INVEST IN FAMILY','AND FRIENDS']];
const PZ=PT.map((q,i)=>{const o=mk('g',{},$('pz4')),g=mk('g',{},o);
const d=i%2===0?'M0 0H320V68a22 22 0 0 1 0 44V180H0Z':'M0 0H320V180H0V112a22 22 0 0 0 0-44Z';
mk('path',{d:d,fill:'var(--stage)',stroke:I,'stroke-width':5,'stroke-linejoin':'round'},g);
const l=mk('g',{},g);PL[i].forEach((s,k)=>txt(l,160,(PL[i].length>1?74:100)+k*48,s,20,'middle'));return [o,g,l]});
const F5a=fig($('f5'),560,560,30,L),F5b=fig($('f5'),1040,560,30,I);
const RP=[0,1,2].map(()=>mk('ellipse',{cx:800,cy:500,fill:'none',stroke:G,'stroke-width':4},$('rp6')));
const R1=[],R2=[],LN=[];
for(let i=0;i<5;i++){const a=(-90+72*i)*Math.PI/180,x=800+200*Math.cos(a),y=500+150*Math.sin(a);
[-18,18].forEach(o=>{const b=(-90+72*i+o)*Math.PI/180,x2=800+360*Math.cos(b),y2=500+270*Math.sin(b);
LN.push(mk('path',{d:'M'+x.toFixed(0)+' '+y.toFixed(0)+'L'+x2.toFixed(0)+' '+y2.toFixed(0),class:'s-line','stroke-width':3,'stroke-dasharray':'6 8'},$('ln6')));
R2.push(mk('circle',{cx:x2,cy:y2,r:14},$('rg6')))});
R1.push(mk('circle',{cx:x,cy:y,r:24},$('rg6')))}
for(let i=0;i<6;i++)mk('circle',{cx:220,cy:330+i*42,r:8,class:'ink'},$('nb7'));
for(let i=0;i<5;i++)mk('path',{d:'M262 '+(357+i*50)+'h'+(i===2?146:120),class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('nb7'));
const ST=[];[720,900].forEach(x=>{mk('path',{d:'M'+(x+50)+' 450a24 24 0 0 1 0 48',fill:'none',stroke:I,'stroke-width':8},$('cp7'));
mk('path',{d:'M'+(x-50)+' 430h100v80a30 30 0 0 1-30 30h-40a30 30 0 0 1-30-30z',class:'ink'},$('cp7'));
ST.push(mk('path',{d:'M'+(x-15)+' 410c-14-14 14-24 0-40M'+(x+15)+' 410c-14-14 14-24 0-40',fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},$('cp7')))});
const CL=[];for(let i=0;i<7;i++){const c=i%4,r=Math.floor(i/4);CL.push(mk('rect',{x:1130+c*72,y:390+r*76,width:60,height:60,rx:8,stroke:I,'stroke-width':3},$('cl7')))}
fig($('q8'),1260,600,24,G);fig($('q8'),1410,622,20,I);