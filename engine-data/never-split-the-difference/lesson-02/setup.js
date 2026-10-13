const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const txt=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};
fig($('t0p'),1120,380,30,'ink');fig($('t0p'),1400,380,30,'gain');
fig($('m1p'),260,420,36,'ink');fig($('m1p'),1380,420,36,'gain');
fig($('w0a'),0,380,30,'ink');fig($('w0b'),0,380,30,'ink');
fig($('c3'),220,520,34,'ink');fig($('wt3'),620,500,34,'gain');
mk('path',{d:'M660 570L700 534',stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round'},$('wt3'));
mk('ellipse',{cx:705,cy:528,rx:44,ry:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('wt3'));
fig($('d5a'),420,470,36,'gain');fig($('b5'),1150,430,44,'loss');
fig($('f6'),320,420,56,'gain');fig($('b6'),1280,420,50,'loss');
mk('path',{d:'M294 412q9-9 18 0M328 412q9-9 18 0M298 440q22 18 44 0',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round'},$('f6'));
// scene 1 pills: X icon beside readable ink labels
const C1=['NO ARGUMENT','NO CLEVER COMEBACK','JUST THEIR WORDS'].map((s,i)=>{const x=120+i*460,g=mk('g',{},$('m1c'));
  mk('rect',{x:x,y:680,width:440,height:80,rx:40,fill:i<2?'var(--stage)':'var(--gain)',stroke:i<2?'var(--ink)':'var(--gain)','stroke-width':4},g);
  if(i<2){mk('circle',{cx:x+56,cy:720,r:20,class:'loss'},g);
    mk('path',{d:`M${x+48} 712l16 16m0-16l-16 16`,stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},g)}
  txt(g,{x:x+(i<2?250:220),y:728,'font-size':22,'text-anchor':'middle',class:'m',style:i<2?'fill:var(--ink)':'fill:var(--on-gain)'},s);return g});
const JF=[1010,1330].map((c,i)=>{const g=$('jars');mk('rect',{x:c-80,y:350,width:160,height:30,rx:8,class:'ink'},g);
  const f=mk('rect',{x:c-88,y:672,width:176,height:0,rx:14,fill:i?'var(--gain)':'var(--muted)','fill-opacity':i?1:.45},g);
  mk('rect',{x:c-100,y:380,width:200,height:300,rx:24,fill:'none',stroke:'var(--ink)','stroke-width':6},g);
  txt(g,{x:c,y:730,'font-size':20,'text-anchor':'middle',class:'m',style:i?'fill:var(--gain)':''},i?'REPEATED ORDER':'OTHER WAITERS');return f});
const W4=[0,1,2].map(i=>mk('path',{d:`M${560+i*34} ${490-i*20}q${24+i*10} ${45+i*20} 0 ${90+i*40}`,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('r4w')));
const C4=['DEEP','SLOW','CALM','REASSURING'].map((s,i)=>{const x=660+i*210,g=mk('g',{},$('r4c'));
  mk('rect',{x:x,y:250,width:190,height:64,rx:32,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);
  txt(g,{x:x+95,y:290,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},s);return g});
const SH=[];for(let j=0;j<8;j++)[520,590,660].forEach(x=>SH.push(mk('rect',{x:x,y:588-j*14,width:56,height:10,rx:2,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('d5s'))));
const D6=[0,1,2,3].map(i=>mk('circle',{cx:200+i*60,cy:740,r:16},$('d6')));
// closing scene: two figures, mirror bubbles, countdown and 1-4 beats
fig($('z5'),1010,470,30,'ink');fig($('z5'),1410,470,30,'gain');
const Z4=[0,1,2,3].map(i=>{const x=1060+i*100;const c=mk('circle',{cx:x,cy:710,r:36,stroke:'var(--gain)','stroke-width':5},$('z4'));
  const tx=txt($('z4'),{x:x,y:722,'font-size':32,'text-anchor':'middle',class:'d'},String(i+1));return [c,tx]});