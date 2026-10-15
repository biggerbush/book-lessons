const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const tx=(par,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),par);e.textContent=s;return e};
const strk=(id,w,k)=>{const l=$(id);l.setAttribute('x2',(+l.getAttribute('x1')+(w+16)*k).toFixed(1));l.setAttribute('opacity',k>0?1:0)};
const MSG=['Hey!','You around?','Hello?'].map((s,i)=>{const g=mk('g',{},$('tmsg'));mk('rect',{x:1240,y:300+i*72,width:170,height:54,rx:18,class:'gain'},g);tx(g,1258,336+i*72,s,{class:'d5','font-size':22,style:'fill:var(--on-gain)'});return g});
const TD=[0,1,2].map(i=>mk('circle',{cx:1236+i*24,cy:555,r:7,fill:'var(--muted)'},$('tdots')));
const CH=fig(mk('g',{},$('chase')),230,360,26,'gain');mk('path',{d:'M175 400h-36M175 430h-48M175 460h-30',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},CH);
const RU=fig(mk('g',{},$('chase')),430,360,26,'ink');
const CE=[];for(let j=0;j<3;j++)for(let i=0;i<4;i++)CE.push(mk('rect',{x:620+i*92,y:320+j*80,width:84,height:70,rx:8,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('cal')));
const XS=[];for(let i=0;i<5;i++){const x=140+i*270,g=$('cards');mk('rect',{x:x,y:230,width:220,height:160,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:x,y:230,width:220,height:34,rx:12,class:'ink'},g);
  mk('path',{d:'M'+(x+30)+' 300h160M'+(x+30)+' 340h110',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},g);
  XS.push(mk('path',{d:'M'+(x+70)+' 275l80 80m0-80l-80 80',stroke:'var(--loss)','stroke-width':9,'stroke-linecap':'round'},g))}
fig($('yu4'),220,400,26,'gain');fig($('fr4'),620,400,26,'ink');
const CB=['Coffee Friday?','Just checking in!','Got your message!'].map((s,i)=>{const g=mk('g',{},$('bubs')),y=320+i*100;mk('circle',{cx:165,cy:y+28,r:18,class:'ink'},g);
  mk('rect',{x:196,y:y,width:300,height:56,rx:18,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);tx(g,214,y+36,s,{class:'d5','font-size':22});return g});
const PX=[330,495,660,825,990],GR=[0,2,3],ST={},LF={};
PX.forEach((x,i)=>{const P=$('pots'),g=GR.includes(i);mk('path',{d:'M'+(x-50)+' 630h100l-12 70h-76z',class:'ink'},P);tx(P,x,740,g?'RETURNED':'BARE',{class:'m','font-size':18,'text-anchor':'middle'});
  if(g){ST[i]=mk('line',{x1:x,y1:630,x2:x,y2:610,stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round'},P);const l=mk('g',{},P);
    mk('ellipse',{cx:-26,cy:0,rx:26,ry:12,class:'gain'},l);mk('ellipse',{cx:26,cy:0,rx:26,ry:12,class:'gain'},l);mk('circle',{cx:0,cy:-10,r:14,class:'gain'},l);LF[i]=l}
  else mk('path',{d:'M'+x+' 630v-50l-18-22M'+x+' 600l16-14',fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round'},P)});
const DR=[0,1,2].map(()=>mk('path',{d:'M0 0v14',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('drops')));
fig($('retf'),1270,580,22,'gain');
for(let k=0;k<8;k++){const a=k*Math.PI/4+Math.PI/8;fig($('ppl'),400+230*Math.cos(a),470+230*Math.sin(a)-20,10,'ink')}
const TK=[0,1,2].map(i=>{const y=270+i*70,P=$('nbr');mk('rect',{x:1280,y:y-24,width:34,height:34,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},P);
  const ln=mk('path',{d:'M1334 '+(y-6)+'h100',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},P);
  return [mk('path',{d:'M1286 '+(y-8)+'l9 10 18-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},P),ln]});
for(let i=0;i<5;i++)mk('circle',{cx:1220,cy:230+i*52,r:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('nb'));
const W={kt0:400,kt1:290};
function measure(){for(const k in W){try{const v=$(k).getComputedTextLength();if(v>0)W[k]=v}catch(e){}}}
measure();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measure);