const P=(g,x,y,r,c)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},e);mk('path',{d:`M${x-1.5*r} ${y+4.2*r}v${-1.3*r}a${1.5*r} ${1.5*r} 0 0 1 ${3*r} 0v${1.3*r}z`,class:c},e);return e};
const T=(g,x,y,s,c,str,a)=>{const e=mk('text',{x:x,y:y,'font-size':s,class:c,'text-anchor':a||'start'},g);e.textContent=str;return e};
const HEART='M0 30C-38 5-40-22-19-28C-9-30-2-23 0-17C2-23 9-30 19-28C40-22 38 5 0 30Z';
$('t_heart').setAttribute('d',HEART);
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('line',{x1:1260+190*c,y1:440+190*s,x2:1260+220*c,y2:440+220*s,stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('t_rays'))}
P($('t_me'),1260,330,50,'ink');
const S1=[[330,'UNCERTAINTY','Ask for a raise'],[800,'RISK','Give hard news'],[1270,'EXPOSURE','Admit I was wrong']].map(([x,lab,ex])=>{
  const c=mk('g',{},$('s1c'));mk('path',{d:`M${x-150} 380a50 50 0 0 1 20-95a70 70 0 0 1 130-20a60 60 0 0 1 110 30a45 45 0 0 1-10 85z`,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},c);T(c,x,338,22,'m',lab,'middle');
  const b=mk('g',{},$('s1b'));mk('path',{d:`M${x-20} 516l10 32l30-32z`,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},b);mk('rect',{x:x-190,y:430,width:380,height:90,rx:20,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},b);T(b,x,486,30,'d5',ex,'middle');
  const o=mk('g',{},$('s1o'));mk('path',{d:`M${x} 560V612`,stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'6 8'},o);mk('circle',{cx:x,cy:655,r:38,fill:'none',stroke:'var(--loss)','stroke-width':6},o);const q=T(o,x,672,48,'d','?','middle');q.setAttribute('style','fill:var(--loss)');
  return [c,b,o]});
const SOL=[];for(let i=0;i<6;i++){const x=180+i*110,g=P($('s2sol'),x,520,26,'ink');mk('path',{d:`M${x-32} 510a32 32 0 0 1 64 0h10`,fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round'},g);SOL.push(g)}
const TR=$('s3tr');let TL=400;try{TL=TR.getTotalLength()}catch(e){}
P($('s4me'),360,430,30,'ink');
// rain: columns over the figure and shield stop short above them; open columns fall to the floor
const RN=[];for(let i=0;i<16;i++){const x=170+i*36,cov=x>=280&&x<=570,bot=cov?392:640;
  RN.push([mk('line',{x1:x,x2:x-8,stroke:'var(--loss)','stroke-width':4,'stroke-linecap':'round'},$('s4rain')),bot,i])}
const SPS=[];[300,345,390,445,490,535].forEach(x=>SPS.push(mk('path',{d:`M${x-10} 404l-6-8M${x+10} 404l6-8`,stroke:'var(--loss)','stroke-width':3,'stroke-linecap':'round',fill:'none'},$('s4rain'))));
const CLB=P($('s4cl'),1160,348,20,'ink');
[920,1000,1320,1400].forEach(x=>{mk('path',{d:`M1160 400L${x} 580`,fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},$('s4rope'));P($('s4sup'),x,580,18,'gain')});
for(let x=160;x<720;x+=40)mk('path',{d:`M${x} 232V628`,stroke:'var(--loss)','stroke-opacity':.25,'stroke-width':1},$('s5grid'));
for(let y=270;y<630;y+=40)mk('path',{d:`M122 ${y}H718`,stroke:'var(--loss)','stroke-opacity':.25,'stroke-width':1},$('s5grid'));
// paired step bars: trust and vulnerability rise together in equal steps
const BARS=[];for(let k=0;k<4;k++){const x=890+k*140;
  BARS.push([mk('rect',{x:x,width:50,rx:6,class:'ink',y:660,height:0},$('s5bars')),mk('rect',{x:x+56,width:50,rx:6,class:'gain',y:660,height:0},$('s5bars'))])}
const SPL=[];for(let i=0;i<8;i++)SPL.push(mk('rect',{width:40,height:8,rx:4,class:'loss'},$('s6sp')));
P($('s6pp'),1070,400,28,'ink');P($('s6pp'),1270,400,28,'ink');
const PP=[];for(let i=0;i<7;i++){const a=-Math.PI/2+i*2*Math.PI/7;PP.push(mk('circle',{cx:460+300*Math.cos(a),cy:500+210*Math.sin(a),r:28,class:i?'ink':'gain'},$('s7ppl')))}
for(let j=0;j<3;j++)for(let i=0;i<7;i++)mk('circle',{cx:1205+i*35,cy:700+j*40,r:7,class:'ink','fill-opacity':.4},$('s8dots'));