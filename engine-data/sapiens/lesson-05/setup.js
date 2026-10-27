const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const TP=[0,1,2,3,4].map(i=>{const x=1170+i*65;mk('path',{d:`M${x} 618L${1250+i*30} 382`,class:'s-line','stroke-width':3,'stroke-dasharray':'6 8'},$('t_beams'));const g=mk('g',{},$('t_ppl'));fig(g,x,640,18,i===2?'gain':'ink');return g});
for(let y=400;y<=720;y+=40)mk('path',{d:`M340 ${y}h180`,class:'s-muted','stroke-width':5,'stroke-dasharray':'14 8','stroke-linecap':'round'},$('st1l'));
for(let i=0;i<9;i++)mk('path',{d:`M1050 ${360+i*40}h${i?180-(i%3)*30:200}`,class:i?'s-line':'s-ink','stroke-width':i?5:8,'stroke-linecap':'round'},$('pa1l'));
for(let i=0;i<5;i++)fig($('fp3'),200+i*110,420,22,'ink');
const RG=[];for(let i=0;i<15;i++){const y=265+i*30;RG.push(mk('line',{x1:300,x2:300,y1:y,y2:y,class:'s-line','stroke-width':4},$('rg4')))}
const CP=[],CL=[],D=19;for(let r=0;r<3;r++)for(let c=0;c<7;c++){const x=760+c*110,y=440+r*100;CL.push(mk('path',{d:`M1090 310L${x} ${y-16}`,class:'s-line','stroke-width':2},$('ln4')));const g=mk('g',{},$('cr4'));CP.push([g,...fig(g,x,y,16,'ink')])}
for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5;fig($('vp5'),320+120*Math.cos(a),480+120*Math.sin(a),16,'ink')}
const KD=[];for(let i=0;i<81;i++)KD.push(mk('circle',{cx:640+(i%9)*40,cy:290+Math.floor(i/9)*40,r:9,class:'ink'},$('kd5')));
const W6=[];for(let i=0;i<12;i++)W6.push(mk('path',{d:`M${220+(i%6)*66} ${290+Math.floor(i/6)*80}l36 0l-18 44z`,class:'ink'},$('w6')));
const C6=[];for(let i=0;i<5;i++)C6.push(mk('circle',{cx:240+i*70,cy:480,r:22,class:'s-ink',fill:'none','stroke-width':6},$('n6')));
for(let k=0;k<3;k++){const x=820+k*80;mk('path',{d:`M${x} 560V320`,class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('brs6'));for(let j=0;j<5;j++)mk('ellipse',{cx:x+(j%2?12:-12),cy:340+j*36,rx:10,ry:18,class:'gain'},$('brs6'))}
const T7=[];for(let s=0;s<4;s++)for(let i=0;i<6;i++)T7.push(mk('rect',{x:165+i*55,y:355+s*115-90,width:40,height:80,rx:6,fill:(i+s)%3?'var(--ink)':'var(--gain)'},$('tl7')));
// empire network: spokes stop short of the building and of each person icon
const K7=[],IC=[];
for(let j=0;j<8;j++){const a=(j*45+22.5)*Math.PI/180,ix=1090+250*Math.cos(a),iy=475+160*Math.sin(a);
  const dx=ix-1090,dy=iy-470,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L;
  const x1=1090+ux*75,y1=470+uy*75,x2=ix-ux*44,y2=iy-uy*44;
  const l=mk('path',{d:`M${x1.toFixed(0)} ${y1.toFixed(0)}L${x2.toFixed(0)} ${y2.toFixed(0)}`,class:'s-gain','stroke-width':4,'stroke-linecap':'round'},$('cl7'));
  const g=mk('g',{},$('ck7'));fig(g,ix,iy-19,12,'gain');K7.push([l,g]);IC.push([ix,iy,x1,y1,x2,y2])}
const segD=(px,py,x1,y1,x2,y2)=>{const vx=x2-x1,vy=y2-y1,k=cl(((px-x1)*vx+(py-y1)*vy)/(vx*vx+vy*vy));return Math.hypot(px-x1-k*vx,py-y1-k*vy)};
const S7=[];
for(let r=0;r<8;r++)for(let c=0;c<11;c++){const x=800+c*60+(r%2?30:0),y=285+r*56;
  if(((x-1090)/300)**2+((y-475)/195)**2>.9)continue;
  if(x>1010&&x<1170&&y>390&&y<545)continue;
  let ok=true;IC.forEach(q=>{const ddx=Math.max(q[0]-18-x,0,x-q[0]-18),ddy=Math.max(q[1]-31-y,0,y-q[1]-31);if(Math.hypot(ddx,ddy)<30)ok=false;if(segD(x,y,q[2],q[3],q[4],q[5])<22)ok=false});
  if(ok)S7.push(mk('circle',{cx:x,cy:y,r:8,fill:'var(--muted)','fill-opacity':.35},$('st7')))}
const D8=[];for(let i=0;i<24;i++)D8.push(mk('circle',{cx:1230+(i%8)*30,cy:740+Math.floor(i/8)*36,r:9,class:i===13?'gain':'ink'},$('dt8')));