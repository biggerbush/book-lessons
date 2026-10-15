const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
fig($('wr'),1190,420,32,'ink');
const SH=[0,1,2].map(()=>mk('rect',{width:40,height:50,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('sheets')));
const BB=[980,1110,1240,1370].map((x,i)=>{fig($('oc'),x,470,22,'ink');const b=mk('g',{},$('oc'));
  mk('rect',{x:x-32,y:350,width:64,height:56,rx:14,fill:'var(--stage)',stroke:'var(--muted)','stroke-width':4},b);
  const tx=mk('text',{x:x,y:390,'font-size':32,'text-anchor':'middle',class:'d'},b);tx.textContent=['?','…','!','?'][i];return b});
for(let i=0;i<9;i++){const a=(-150+i*37.5)*Math.PI/180,s=Math.sin(a),c=-Math.cos(a);mk('path',{d:'M'+(330+150*s).toFixed(1)+' '+(480+150*c).toFixed(1)+'L'+(330+168*s).toFixed(1)+' '+(480+168*c).toFixed(1),stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('ticks'))}
const CR=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++){const g=mk('g',{},$('crw'));fig(g,990+c*140,350+r*140,18,'ink');g.setAttribute('fill-opacity',.55);CR.push(g)}
fig($('me3'),370,570,36,'ink');
const RW=[0,1,2].map(i=>{const y=340+i*55,g=mk('g',{},$('board3'));const tx=mk('text',{x:930,y:y,'font-size':22,class:'m'},g);tx.textContent='LAUNCH '+(i+1);
  mk('path',{d:'M1080 '+(y-8)+'H1350',stroke:'var(--line)','stroke-width':4,'stroke-dasharray':'4 8'},g);
  mk('path',{d:'M1386 '+(y-24)+'l28 28m0-28l-28 28',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},g);return g});
const TW=[340,300,320,260,200],TL=TW.map((w,i)=>mk('rect',{x:200,y:310+i*42,height:14,rx:7,width:0,fill:i?'var(--line)':'var(--ink)'},$('tl')));
const CE=[];for(let i=0;i<28;i++){const x=760+(i%7)*98,y=310+Math.floor(i/7)*90,hit=i===4||i===13||i===22,h=hit?60:12+((i*7)%5)*6;
  const r=mk('rect',{x:x,y:y,width:92,height:80,rx:8,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('cal'));
  const b=mk('rect',{x:x+30,y:y+72-h,width:32,height:h,rx:4,fill:hit?'var(--gain)':'var(--muted)'},$('cal'));CE.push([r,b])}
const PH=[180,240,140,280,200,260,160],PL=PH.map((h,i)=>{const x=220+i*160;
  return {x:x,h:h,s:mk('path',{stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round',fill:'none'},$('plants')),l:mk('path',{fill:'var(--ink)'},$('plants')),b:i%2?mk('circle',{r:0,class:'gain'},$('plants')):null}});
mk('ellipse',{cx:1360,cy:696,rx:16,ry:10,class:'gain'},$('plants'));
const tdy=mk('text',{x:1360,y:772,'font-size':20,'text-anchor':'middle',class:'m'},$('plants'));tdy.textContent='TODAY';
mk('rect',{x:-50,y:-30,width:100,height:60,rx:10,class:'ink'},$('can'));
mk('path',{d:'M45 -10L100 -40M-50 -10a26 26 0 0 1 0-30',stroke:'var(--ink)','stroke-width':10,'stroke-linecap':'round',fill:'none'},$('can'));
const DR=[0,1,2].map(()=>mk('circle',{r:6,class:'gain'},$('can')));
const DY=[];for(let i=0;i<7;i++){const x=143+i*90;mk('rect',{x:x,y:690,width:64,height:64,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('days'));
  DY.push(mk('path',{d:'M'+(x+14)+' 722l14 14 24-28',fill:'none',stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round','stroke-dasharray':60,'stroke-dashoffset':60},$('days')))}