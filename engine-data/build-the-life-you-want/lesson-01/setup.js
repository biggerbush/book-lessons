const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
fig($('trun'),0,-50,12,'gain'); fig($('w1'),0,-84,20,'ink'); fig($('w2'),0,-84,20,'ink'); fig($('sp'),360,400,24,'ink');
for(let r=0;r<2;r++)for(let c=0;c<9;c++)mk('rect',{x:1110+c*20,y:380+r*20,width:20,height:20,fill:(r+c)%2?'var(--ink)':'var(--stage)',stroke:'var(--ink)','stroke-width':1},$('fl'));
const MS=['JOB','PARTNER','HOUSE'].map((s,i)=>{const x=420+i*220,g=mk('g',{},$('ms'));
  mk('path',{d:`M${x} 640V520`,class:'s-ink','stroke-width':6,'stroke-linecap':'round'},g);mk('path',{d:`M${x} 520l60 20-60 20z`,class:'gain'},g);
  const tx=mk('text',{x:x,y:690,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
const GP=[];for(let x=200;x<=760;x+=10){const y=x<260?620-300*(x-200)/60:620-300*Math.exp(-(x-260)/90);GP.push(x+','+y.toFixed(1))}
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:`M${(400+145*Math.sin(a)).toFixed(1)} ${(480-145*Math.cos(a)).toFixed(1)}L${(400+156*Math.sin(a)).toFixed(1)} ${(480-156*Math.cos(a)).toFixed(1)}`,class:'s-ink','stroke-width':4},$('tks'))}
const wav=(x,y0,h,ph)=>{let d='';for(let k=0;k<=8;k++)d+=(k?'L':'M')+(x+10*Math.sin(k*.9+ph)).toFixed(1)+' '+(y0-k*h/8).toFixed(1);return d};
const ST=[0,1,2].map(()=>mk('path',{class:'s-muted',fill:'none','stroke-width':6,'stroke-linecap':'round'},$('stm')));
const PS=[0,1].map(()=>mk('path',{class:'s-muted',fill:'none','stroke-width':5,'stroke-linecap':'round'},$('pst')));
let wd='';for(let x=120;x<=1480;x+=20)wd+=(x==120?'M':'L')+x+' '+(450-80*Math.sin((x-120)/1360*3*Math.PI)).toFixed(1);$('wv').setAttribute('d',wd);
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:`M${(347+52*Math.cos(a)).toFixed(1)} ${(280+52*Math.sin(a)).toFixed(1)}L${(347+66*Math.cos(a)).toFixed(1)} ${(280+66*Math.sin(a)).toFixed(1)}`,class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
const DR=[760,795,830,865].map(x=>mk('path',{d:`M${x} 0v18`,class:'s-loss','stroke-width':5,'stroke-linecap':'round'},$('drops')));
const FS=[];for(let i=0;i<12;i++){const f=i/11,s=i%2?1:-1,cx=800+640*f+s*10,cy=700-420*f+s*15;
  FS.push(mk('ellipse',{cx:cx.toFixed(1),cy:cy.toFixed(1),rx:12,ry:20,transform:`rotate(56.7 ${cx.toFixed(1)} ${cy.toFixed(1)})`},$('fts')))}