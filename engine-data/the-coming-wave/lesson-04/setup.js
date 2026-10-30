const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const gearD=R=>{const n=Math.round(R/14);let d='';for(let k=0;k<n*4;k++){const a=k/(n*4)*2*Math.PI,r=k%4<2?R+14:R-12;d+=(k?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}return d+'Z'};
const GR=[['gA',440,540,150,'RIVALRY'],['gB',680,440,110,'PROFIT'],['gC',920,540,150,'CURIOSITY']].map(([id,x,y,R,s])=>{const r=mk('g',{},$(id));mk('path',{d:gearD(R),class:'ink'},r);mk('circle',{r:R-48,fill:'var(--stage)'},r);
  const tx=mk('text',{x:x,y:y+8,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},$('glab'));tx.textContent=s;return [r,x,y,tx]});
const G8=mk('g',{},$('g8'));mk('path',{d:gearD(52),class:'gain'},G8);mk('circle',{r:20,fill:'var(--stage)'},G8);
let gd='';for(let i=0;i<9;i++)gd+=`M160 ${280+i*50}H560M${160+i*50} 280V680`;mk('path',{d:gd,class:'s-ink','stroke-width':3},$('grid'));
const ST=[[4,4,1],[4,3,0],[3,4,1],[5,3,0],[5,5,1],[2,2,0],[6,6,1],[3,5,0],[6,2,1],[2,6,0],[5,4,1],[4,5,0]].map(([c,r,w])=>mk('circle',{cx:160+c*50,cy:280+r*50,r:21,fill:w?'var(--ink)':'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('stones')));
for(let i=0;i<6;i++)fig($('aud2'),700+i*64,600,14,'ink');
// sprint pose: limbs always clearly separated, small swing around a wide stride
const rd=ph=>{const s=Math.sin(ph),f=v=>v.toFixed(1);
  return `M10 -86L-4 -44`+
  `M-4 -44L${f(20+8*s)} -26L${f(14+12*s)} 0`+
  `M-4 -44L${f(-24-8*s)} -24L${f(-44-12*s)} -10`+
  `M6 -74L${f(26+6*s)} -60L${f(38+6*s)} -76`+
  `M6 -74L${f(-14-6*s)} -60L${f(-28-6*s)} -48`};
const CN=[];[6,10,14].forEach((n,c)=>{for(let k=0;k<n;k++)CN.push([mk('ellipse',{cx:200+c*140,cy:690-k*24,rx:58,ry:16,class:'gain',stroke:'var(--stage)','stroke-width':3},$('coins')),k])});
fig($('invf'),800,400,32,'ink');
let ld='M1170 280V720M1310 280V720';for(let y=310;y<=710;y+=50)ld+=`M1170 ${y}H1310`;mk('path',{d:ld,class:'s-ink','stroke-width':6},$('lad'));
fig($('you4'),1205,500,20,'loss');[-8,3].forEach(x=>mk('rect',{x:1205+x,y:542,width:5,height:18,fill:'var(--stage)'},$('you4')));
fig($('riv4'),0,0,20,'ink');const rvt=mk('text',{x:56,y:8,'font-size':20,class:'m'},$('riv4'));rvt.textContent='RIVAL';
fig($('scif'),280,420,34,'ink');
const CP=[-1.9,-1.1,-.3,.5,1.3,2.4].map(a=>{const x=920+110*Math.cos(a),y=430+110*Math.sin(a);mk('circle',{cx:x,cy:y,r:10,class:'gain'},$('dots'));
  return [mk('rect',{width:34,height:44,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('cps')),x,y]});
mk('circle',{cx:660,cy:300,r:38,class:'gain'},$('sun6'));for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:`M${660+50*Math.cos(a)} ${300+50*Math.sin(a)}L${660+66*Math.cos(a)} ${300+66*Math.sin(a)}`,class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('sun6'))}
const EY=[];for(let i=0;i<5;i++){fig($('aud6'),200+i*100,520,28,'ink');EY.push(mk('circle',{cy:516,r:6,fill:'var(--stage)'},$('aud6')))}
fig($('mirf'),340,420,30,'ink');
for(let i=0;i<6;i++)mk('circle',{cx:680+i*60,cy:270,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));