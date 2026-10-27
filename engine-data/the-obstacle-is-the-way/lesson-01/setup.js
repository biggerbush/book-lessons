const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const crown=(g,x,y)=>mk('path',{d:`M${x-24} ${y}l-6-28 18 14 12-20 12 20 18-14-6 28z`,class:'gain'},g);
const rock=(g,cx,cy,r)=>{const F=[1,.9,1.04,.95,1.02,.88,1,.96,.92];let d='';F.forEach((f,i)=>{const a=i*2*Math.PI/9-1.6;d+=(i?'L':'M')+(cx+r*f*Math.cos(a)).toFixed(1)+' '+(cy+r*f*.85*Math.sin(a)).toFixed(1)});
  const e=mk('path',{d:d+'Z',class:'loss',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},g);
  mk('path',{d:`M${cx-r*.3} ${cy-r*.4}l${r*.2} ${r*.3}l${-r*.1} ${r*.3}`,fill:'none',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round'},g);return e};
const road=(g,y)=>{mk('rect',{x:120,y:y,width:1360,height:140,fill:'var(--stage)'},g);mk('path',{d:`M120 ${y}H1480M120 ${y+140}H1480`,class:'s-ink','stroke-width':5},g);mk('path',{d:`M140 ${y+70}H1460`,class:'s-line','stroke-width':6,'stroke-dasharray':'34 26'},g)};
const mtext=(g,x,y,s,col)=>{const tx=mk('text',{x:x,y:y,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:'+col},g);tx.textContent=s;return tx};

const rf=mk('g',{},$('r0')), r0p=rock(rf,0,0,72);

const PR=['PLAGUE','WAR','PRESSURE'].map((s,i)=>{const y=290+i*100,g=mk('g',{},$('prs'));
  mk('rect',{x:600,y:y,width:220,height:60,rx:30,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);mtext(g,710,y+38,s,'var(--loss)');
  mk('path',{d:`M590 ${y+30}h-70m16-16-16 16 16 16`,fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
const NL=[];for(let q=0;q<2;q++)for(let k=0;k<6;k++){const x=950+q*260;NL.push(mk('path',{d:`M${x} ${330+k*46}h${k==5?110:200}`,stroke:q==1&&k==2?'var(--gain)':'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('nl')))}

const rk2=mk('g',{},$('rk2'));rock(rk2,800,630,90);
const ST=[0,1,2,3].map(i=>mk('rect',{x:700+i*52,y:672,width:46,height:36,rx:6,class:'gain',stroke:'var(--ink)','stroke-width':4},$('st')));

road($('rd3'),600);const b3=mk('g',{},$('b3'));rock(b3,800,560,110);
const kgm=mk('g',{},$('kg'));person(kgm,300,440,30,'ink');crown(kgm,300,412);const klab=mtext(kgm,300,360,'THE KING','var(--muted)');

road($('rd4'),600);rock($('b4'),800,560,110);
const DY=x=>-230*Math.exp(-Math.pow((x-800)/160,2));
let rd='';for(let x=140;x<=1460;x+=20)rd+=(x>140?'L':'M')+x+' '+(615+DY(x)).toFixed(1);$('rt4').setAttribute('d',rd);
const WK=[0,1,2,3].map(i=>{const g=mk('g',{},$('wk'));person(g,0,0,18,'ink');const b=mk('g',{},g);
  mk('rect',{x:-30,y:-72,width:60,height:40,rx:12,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},b);mtext(b,0,-44,'#!','var(--loss)');return [g,b]});

road($('rd5'),600);const b5=mk('g',{},$('b5'));rock(b5,800,560,110);
const bk=mk('g',{},$('pz'));[[-22,-26],[0,-34],[22,-26]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:16,class:'gain',stroke:'var(--ink)','stroke-width':4},bk));mk('path',{d:'M-46-20h92l-12 40h-68z',class:'ink'},bk);
const pzi=mk('g',{},$('pz'));person(pzi,0,-109,26,'gain');
const SW=mk('g',{},pzi);[[-44,-150],[-58,-112],[-36,-80]].forEach(q=>mk('path',{d:`M${q[0]} ${q[1]-12}q9 12 0 18q-9-6 0-18z`,fill:'var(--ice)',stroke:'var(--ink)','stroke-width':2},SW));

road($('rd6'),600);rock($('b6'),1250,560,110);
const CN=[];for(let i=0;i<7;i++){const a=-Math.PI*5/6+i*Math.PI*4/36;CN.push([mk('circle',{r:18,class:'gain',stroke:'var(--ink)','stroke-width':4},$('cns')),800+180*Math.cos(a),560+180*Math.sin(a)])}

const LG=['A LOST JOB','A REJECTION','A BROKEN PLAN'].map(s=>{const g=mk('g',{},$('lgs'));
  mk('rect',{x:-150,y:-28,width:300,height:56,rx:28,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);mtext(g,0,8,s,'var(--loss)');return g});

const r8=mk('g',{},$('r8'));rock(r8,1260,730,70);