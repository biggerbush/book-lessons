const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const T=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};
const D0=[];for(let i=0;i<7;i++)D0.push(mk('circle',{cx:1230+i*30,cy:720,r:9},$('days')));
fig($('p1'),300,560,40,'ink');
const tags1=['SMALL','ANXIOUS','GUILTY'].map((s,i)=>{const y=270+i*100,g=mk('g',{},$('tags1'));const r=mk('rect',{x:580,y:y,width:420,height:56,rx:28,fill:'none',stroke:'var(--ink)','stroke-width':4},g);
  T(g,{x:700,y:y+37,'font-size':22,'text-anchor':'end',class:'m'},'I FEEL');T(g,{x:744,y:y+37,'font-size':22,class:'m'},s);return [g,r]});
fig($('p2'),240,380,38,'ink');
const links=[];for(let i=0;i<9;i++){const k=i/8;links.push(mk('ellipse',{cx:290+338*k,cy:522-12*k,rx:i%2?22:24,ry:i%2?5:12,fill:'none',stroke:'var(--ink)','stroke-width':5},$('chainG')))}
const nd=[];for(let i=0;i<6;i++)nd.push(mk('circle',{r:8,class:'loss'},$('nrg')));
const bars2=[];for(let i=0;i<7;i++){const h=30+i*30;bars2.push(mk('rect',{x:1230+i*34,y:620-h,width:24,height:h,class:'gain'},$('bars2')))}
fig($('refl'),260,430,28,'s-muted');$('refl').setAttribute('fill','none');$('refl').setAttribute('stroke-width',4);
fig($('wom'),520,450,40,'ink');mk('circle',{cx:520,cy:404,r:18,class:'ink'},$('wom'));
const cells=[];for(let i=0;i<4;i++)cells.push(mk('rect',{x:200+i*118,y:360,width:104,height:180,rx:8,class:'gain'},$('cells')));
const tg4=[0,1,2].map(i=>{const y=290+i*120,g=mk('g',{},$('tg4')),inn=mk('g',{},g);mk('rect',{x:960,y:y,width:480,height:80,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},inn);T(inn,{x:1200,y:y+50,'font-size':24,'text-anchor':'middle',class:'m'},'OLD AGREEMENT');
  const cr=mk('path',{d:'M1200 '+y+'l-15 20 30 20-30 20 15 20',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linejoin':'round'},g);return [g,inn,cr,y]});
const dots4=[0,1,2].map(()=>mk('circle',{r:14,class:'gain'},$('dots4')));
fig($('fig'),0,-185,44,'ink');
for(let i=0;i<4;i++)mk('rect',{x:952+i*28,y:340,width:22,height:110,rx:11,class:'gain'},$('fing'));
const reels=[];
[['tp0',120,'var(--ink)','OLD AGREEMENTS',0],['tp1',560,'var(--gain)','NEW AGREEMENTS',1]].forEach(([id,x,c,l,nw])=>{const g=$(id);mk('rect',{x:x,y:230,width:340,height:190,rx:18,fill:'var(--stage)',stroke:c,'stroke-width':6},g);mk('rect',{x:x+60,y:280,width:220,height:70,rx:35,fill:'none',stroke:'var(--line)','stroke-width':4},g);
  [x+110,x+230].forEach(cx=>{if(nw){mk('circle',{cx:cx,cy:315,r:26,fill:'var(--gain)'},g);mk('path',{d:'M'+(cx-12)+' 315l8 10 16-18',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g)}
    else{mk('circle',{cx:cx,cy:315,r:26,fill:'none',stroke:c,'stroke-width':6},g);reels.push([mk('path',{d:'M'+(cx-20)+' 315h40M'+cx+' 295v40',stroke:c,'stroke-width':5,'stroke-linecap':'round'},g),cx])}});
  T(g,{x:x+170,y:398,'font-size':20,'text-anchor':'middle',class:'m'},l)});
for(let k=0;k<5;k++){const a=Math.PI+Math.PI*(k+1)/6;mk('path',{d:'M'+(1240+88*Math.cos(a)).toFixed(1)+' '+(420+88*Math.sin(a)).toFixed(1)+'L'+(1240+114*Math.cos(a)).toFixed(1)+' '+(420+114*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('rays6'))}
const steps=[];for(let i=0;i<7;i++){const y=760-i*36;steps.push(mk('rect',{x:140+i*190,y:y,width:170,height:800-y,rx:8},$('stepsG')))}
const habT=T($('stepsG'),{x:1365,y:640,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},'NEW HABIT');
const CT=[['Be impeccable','with your word.'],['Don’t take','anything','personally.'],['Don’t make','assumptions.'],['Always do','your best.']],FR7=[.6,.4,.7,.5];
const cards=CT.map((L,i)=>{const x=120+i*350,g=mk('g',{},$('cards'));const r=mk('rect',{x:x,y:220,width:310,height:260,rx:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,{x:x+30,y:268,'font-size':22,class:'m'},'AGREEMENT '+(i+1));
  L.forEach((s,j)=>T(g,{x:x+30,y:322+j*40,'font-size':30,class:'d5'},s));mk('rect',{x:x+30,y:440,width:250,height:14,rx:7,fill:'var(--line)'},g);return [g,r,mk('rect',{x:x+30,y:440,width:150,height:14,rx:7,fill:'var(--gain)'},g)]});
const bars7=[160,140,90,170,150,110,180].map((h,i)=>mk('rect',{x:420+i*90,y:780-h,width:56,height:h,rx:6,class:'gain'},$('bars7')));
const nbl=[0,1,2,3].map(i=>mk('path',{d:'M1230 '+(320+i*40)+'h180',stroke:'var(--line)','stroke-width':7,'stroke-linecap':'round','stroke-dasharray':180,'stroke-dashoffset':180},$('nbl')));
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M'+(1320+62*Math.cos(a)).toFixed(1)+' '+(640+62*Math.sin(a)).toFixed(1)+'L'+(1320+90*Math.cos(a)).toFixed(1)+' '+(640+90*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('rays8'))}