const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const txt=(g,x,y,s,c,f,st)=>{const e=mk('text',{x:x,y:y,class:c,'font-size':f},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const rope=(g,d)=>{mk('path',{d:d,fill:'none',stroke:'var(--ink)','stroke-width':18,'stroke-linecap':'round'},g);return mk('path',{d:d,fill:'none',stroke:'var(--stage)','stroke-width':18,'stroke-dasharray':'4 16'},g)};
const wv=(x0,x1,y,a,ph)=>{let s='M'+x0+' '+y;for(let x=x0;x<=x1;x+=14)s+='L'+x+' '+(y+a*Math.sin(x/28+ph)).toFixed(1);return s};
const blob=(cx,cy,r,w,ph)=>{let s='';for(let i=0;i<=36;i++){const a=i*Math.PI/18,q=r*(1+w*Math.sin(3*a+ph)+w*.6*Math.sin(5*a-ph*1.3));s+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return s+'Z'};
const RP=[],cards=['Palms sting','Blisters form','Barely bothers you'].map((s,i)=>{const x=120+i*473,g=mk('g',{},$('cards'));
  mk('rect',{x:x,y:240,width:414,height:440,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  txt(g,x+40,310,s,'d5',32);
  RP.push(rope(g,'M'+(x+40)+' 380C'+(x+150)+' 350 '+(x+260)+' 410 '+(x+374)+' 380'));
  mk('rect',{x:x+40,y:540,width:334,height:50,rx:6,fill:'var(--line)'},g);
  mk('rect',{x:x+40,y:i<2?528:490,width:334,height:i<2?12:50,rx:6,fill:i<2?'var(--ink)':'var(--gain)'},g);
  for(let k=0;k<3;k++){if(i===0)mk('path',{d:'M'+(x+110+k*90)+' 450l14 30',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round'},g);if(i===1)mk('circle',{cx:x+110+k*90,cy:522,r:16,fill:'var(--loss)'},g)}
  txt(g,x+40,640,['1 · STING','2 · BLISTERS','3 · CALLUS'][i],'m',22,i===2?'fill:var(--gain)':'');
  return g});
fig($('sitter'),330,380,30,'ink');
const PB=[['He ran.','BODY BEGGED TO STOP'],['He swam.','WATER FRIGHTENED HIM'],['He studied.','SCHOOL WAS A STRUGGLE']].map((q,i)=>{const x=120+i*473,g=mk('g',{},$('pan'));
  mk('rect',{x:x,y:240,width:414,height:480,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  txt(g,x+40,600,q[0],'d5',40);txt(g,x+40,646,q[1],'m',20,'fill:var(--loss)');
  mk('rect',{x:x+40,y:680,width:334,height:12,rx:6,fill:'var(--line)'},g);
  return [g,mk('rect',{x:x+40,y:680,width:0,height:12,rx:6,fill:'var(--gain)'},g)]});
mk('rect',{x:120,y:240,width:496,height:54,rx:10,fill:'var(--ink)'},$('cal'));txt($('cal'),140,276,'DAY AFTER DAY','m',22,'fill:var(--stage)');
const CELL=[];for(let i=0;i<28;i++)CELL.push(mk('rect',{x:120+(i%7)*72,y:310+Math.floor(i/7)*72,width:64,height:64,rx:8,fill:'var(--line)'},$('cal')));
const LY=[158,176,194].map(r=>mk('circle',{cx:1060,cy:470,r:r,fill:'none',stroke:'var(--gain)','stroke-width':10},$('lay')));
const ST=['WASH THE DISHES','MAKE YOUR BED','A LITTLE HARDER','KEEP CLIMBING'].map((s,i)=>{const x=120+i*340,y=720-i*120,g=mk('g',{},$('steps'));
  mk('rect',{x:x,y:y,width:340,height:800-y,fill:'var(--line)'},g);
  mk('path',{d:'M'+x+' '+y+'h340',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},g);
  txt(g,x+30,y+50,s,'m',20,'fill:var(--ink)');return g});
const clim=mk('g',{},$('climb'));fig(clim,0,-75.6,18,'gain');
const RG=[];for(let i=0;i<8;i++){const y=710-i*60;mk('path',{d:'M1180 '+y+'h160',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('rungs'));RG.push(mk('circle',{cx:1260,cy:y-26,r:12,fill:'var(--gain)'},$('rungs')))}