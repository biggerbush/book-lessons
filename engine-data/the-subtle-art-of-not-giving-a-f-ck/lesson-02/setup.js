const fig=(g,x,y,r,cls)=>{const a=cls?{class:cls}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
// guitar: two-lobed body, neck, headstock (local origin = lower lobe centre, pointing up)
const gtr=(g,tf,filled,sw)=>{const G=mk('g',{transform:tf},g),F=filled?'var(--ink)':'var(--stage)',H=filled?'var(--stage)':'var(--ink)',S={stroke:'var(--ink)','stroke-width':sw,'stroke-linejoin':'round'};
  mk('rect',Object.assign({x:-6,y:-192,width:12,height:132,rx:3,fill:F},S),G);
  mk('rect',Object.assign({x:-13,y:-224,width:26,height:36,rx:6,fill:F},S),G);
  mk('circle',{cx:-17,cy:-214,r:4,fill:'var(--ink)'},G);mk('circle',{cx:17,cy:-214,r:4,fill:'var(--ink)'},G);mk('circle',{cx:-17,cy:-198,r:4,fill:'var(--ink)'},G);mk('circle',{cx:17,cy:-198,r:4,fill:'var(--ink)'},G);
  mk('path',Object.assign({d:'M-21.9 -26A26 26 0 1 1 21.9 -26A34 34 0 1 1 -21.9 -26Z',fill:F},S),G);
  mk('circle',{cx:0,cy:-14,r:9,fill:H},G);
  mk('rect',{x:-12,y:10,width:24,height:6,rx:2,fill:H},G);
  if(!filled)mk('path',{d:'M0 10V-188',stroke:'var(--muted)','stroke-width':2},G);
  return G};
gtr($('gtrD'),'translate(470 508) rotate(55) scale(.7)',true,4);
gtr($('gtrP'),'translate(960 566) rotate(20)',false,6);
fig($('thop'),0,-60,14,'gain');
const LB=[650,570,490,410,330,250].map(y=>{mk('path',{d:'M1000 '+y+'h200',class:'s-ink','stroke-width':7,'stroke-linecap':'round'},$('rungs'));return mk('rect',{x:1225,y:y-36,width:36,height:36,rx:6,'stroke-width':5,stroke:'var(--loss)'},$('rungs'))});
fig($('clb'),0,-60,14,'gain');
fig($('gFig'),250,400,30);
fig($('rFig'),440,448,22,'gain');
fig($('sFig'),1300,722,20,'gain');
for(let i=0;i<10;i++){const x=190+i*56;fig($('crowdW'),x,600,11,'ink');mk('path',{d:'M'+(x-16)+' 632l-8-32M'+(x+16)+' 632l8-32',class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('crowdW'))}
for(let i=0;i<7;i++)mk('circle',{cx:1130+i*48,cy:405,r:18,fill:'none',class:'s-muted','stroke-width':4,'stroke-dasharray':'5 5'},$('pl'));
for(let i=0;i<6;i++)mk('circle',{cx:160+i*56,cy:230,r:10,fill:'var(--stage)',class:'s-ink','stroke-width':5},$('rings'));
let sp='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?26:60;sp+=(290+r*Math.cos(a)).toFixed(1)+','+(420+r*Math.sin(a)).toFixed(1)+' '}$('star').setAttribute('points',sp);
['MON','TUE','WED','THU','FRI','SAT','SUN'].forEach((s,i)=>{const x=540+i*134,on=i===1;mk('rect',{x:x,y:230,width:120,height:90,rx:12,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--ink)','stroke-width':4},$('days'));const e=tx($('days'),x+60,284,s,{class:'m','font-size':22,'text-anchor':'middle'});if(on)e.style.fill='var(--on-gain)'});
[[570,430,300,1],[890,430,260,0],[570,470,180,0],[770,470,340,1],[570,510,420,0],[1010,510,200,1]].forEach(b=>mk('rect',{x:b[0],y:b[1],width:b[2],height:24,rx:12,fill:b[3]?'var(--gain)':'var(--line)'},$(b[3]?'bG':'bB')));
const MP=[[760,740],[1000,660],[860,560],[1060,480],[960,390],[1022,268]],PS=MP.map(q=>q.join(',')).join(' ');
$('mpath').setAttribute('points',PS);$('trail').setAttribute('points',PS);
const seg=[];let TL=0;for(let i=1;i<MP.length;i++){const d=Math.hypot(MP[i][0]-MP[i-1][0],MP[i][1]-MP[i-1][1]);seg.push(d);TL+=d}
$('trail').setAttribute('stroke-dasharray',TL.toFixed(1)+' '+TL.toFixed(1));
const along=k=>{let d=k*TL;for(let i=0;i<seg.length;i++){if(d<=seg[i]||i===seg.length-1){const f=cl(d/seg[i]);return [MP[i][0]+(MP[i+1][0]-MP[i][0])*f,MP[i][1]+(MP[i+1][1]-MP[i][1])*f]}d-=seg[i]}};
fig($('clm'),-8,-44,10,'gain');