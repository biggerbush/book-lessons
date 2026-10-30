const T=(g,x,y,s,fs,cls,an,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls},g);if(an)e.setAttribute('text-anchor',an);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const draw=(el,k)=>{el.setAttribute('stroke-dasharray','1 1');el.setAttribute('stroke-dashoffset',(1-k).toFixed(3))};
const pt=(cx,cy,r,a)=>[cx+r*Math.sin(a),cy-r*Math.cos(a)];
const wedge=(cx,cy,r,a0,a1)=>{const q0=pt(cx,cy,r,a0),q1=pt(cx,cy,r,a1);return 'M'+cx+' '+cy+'L'+q0[0].toFixed(1)+' '+q0[1].toFixed(1)+'A'+r+' '+r+' 0 '+(a1-a0>Math.PI?1:0)+' 1 '+q1[0].toFixed(1)+' '+q1[1].toFixed(1)+'Z'};
const setHand=(el,cx,cy,r,a)=>{const q=pt(cx,cy,r,a);el.setAttribute('x2',q[0].toFixed(1));el.setAttribute('y2',q[1].toFixed(1))};
const poly=(f,x0,x1,cls,g)=>{let s='';for(let x=x0;x<=x1;x+=10)s+=x+','+f(x).toFixed(1)+' ';return mk('polyline',{points:s,fill:'none',class:cls,'stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1},g)};
// flexed arm icon (local frame ~255 x 240): arm + fist in ink, bicep bulge in colour
const ARM='M0 240L180 240Q230 240 230 190L245 60L195 55L180 170Q165 180 150 175L20 175L0 170Z';
const armIcon=(g,tr,bc)=>{const a=mk('g',{transform:tr},g);mk('path',{d:ARM,class:'ink'},a);
  mk('rect',{x:185,y:0,width:70,height:60,rx:20,class:'ink'},a);
  mk('path',{d:'M197 22h46M197 40h46',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round'},a);
  const b=mk('path',{d:'M20 175Q87 90 155 175Z',class:bc},a);return [a,b]};

const SG=['ONE PERFECT DIET','WORKS FOR EVERYONE','THE ONLY PLAN'].map((s,i)=>{const x=160+i*460,g=mk('g',{},$('signs'));
  mk('path',{d:'M'+(x+180)+' 290v30',stroke:'var(--ink)','stroke-width':6},g);
  mk('rect',{x:x,y:220,width:360,height:70,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);T(g,x+180,263,s,22,'m','middle');
  return [g,mk('path',{d:'M'+(x+20)+' 280L'+(x+340)+' 230',stroke:'var(--loss)','stroke-width':7,'stroke-linecap':'round',pathLength:1},$('signs'))]});
fig($('ppl'),290,430,30,'ink');fig($('ppl'),1310,430,30,'ink');
const spA=poly(x=>565-120*Math.exp(-(((x-540)/40)**2)),410,650,'s-loss',$('ppl'));
const spB=poly(x=>540-12*Math.exp(-(((x-1070)/60)**2)),950,1190,'s-gain',$('ppl'));

const KN=[['Eat less','CALORIE RESTRICTION'],['Cut certain foods','DIETARY RESTRICTION'],['Limit when','TIME RESTRICTION']].map((d,i)=>{const c=340+i*460,g=mk('g',{},$('lvf'));
  mk('rect',{x:c-220,y:220,width:440,height:520,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  T(g,c-190,266,'LEVER '+(i+1),20,'m');T(g,c,590,d[0],36,'d5','middle');T(g,c,630,d[1],20,'m','middle');
  mk('path',{d:'M'+(c-130)+' 690H'+(c+130),stroke:'var(--line)','stroke-width':12,'stroke-linecap':'round'},g);
  g.appendChild($('ic'+i));return [g,mk('circle',{cx:c-130,cy:690,r:22},g),c]});

const SIG=[70,100,130].map(r=>mk('path',{d:'M'+(275+r*.77)+' '+(400-r*.64)+'A'+r+' '+r+' 0 0 1 '+(275+r*.77)+' '+(400+r*.64),fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('sig')));
const cA=poly(x=>610-300*Math.exp(-(((x-900)/80)**2))+40*Math.exp(-(((x-1080)/70)**2)),600,1440,'s-loss',$('curves'));
const cB=poly(x=>600-50*Math.exp(-(((x-950)/150)**2)),600,1440,'s-gain',$('curves'));

// muscle with age: bars topped by a flexed arm that gets smaller
const MB=[280,250,210,170,130].map((h,i)=>{const g=mk('g',{},$('mbars')),cx=180+i*86,top=570-h,s=.24*h/280;
  mk('rect',{x:150+i*86,y:top,width:60,height:h,rx:6,class:i?'loss':'ink'},g);
  armIcon(g,'translate('+(cx-127.5*s).toFixed(1)+' '+(top-8-240*s).toFixed(1)+') scale('+s.toFixed(3)+')',i?'loss':'gain');return g});
const gq=pt(800,450,130,Math.PI/6);$('gz').setAttribute('d','M'+gq[0].toFixed(1)+' '+gq[1].toFixed(1)+'A130 130 0 0 1 930 450');
const PL=[0,1,2,3].map(i=>{const x=640+i*220,g=mk('g',{},$('meals'));mk('circle',{cx:x,cy:770,r:55,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);mk('path',{d:wedge(x,770,38,.2,2.2),class:'gain'},g);return g});

// lesson learned: big flexed arm that shrinks
const BA=armIcon($('armbig'),'translate(650 390)','gain');

fig($('surg'),300,300,40,'ink');mk('path',{d:'M258 292a42 42 0 0 1 84 0z',class:'gain'},$('surg'));
const RK=['WORSE BLOOD SUGAR CONTROL','WEAKER THINKING','HIGHER ALZHEIMER’S RISK'].map((s,i)=>{const x=120+i*460,g=mk('g',{},$('risk'));
  mk('rect',{x:x,y:685,width:440,height:64,rx:32,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);T(g,x+220,724,s,20,'m','middle','fill:var(--loss)');return g});

const NC=[['Dark & cool','COOL, DARK ROOM'],['Steady times','SAME TIMES DAILY'],['Less alcohol','ESPECIALLY LATE'],['Screens away','LONG BEFORE BED']].map((d,i)=>{const x=120+i*346,g=mk('g',{},$('nights'));
  mk('rect',{x:x,y:240,width:320,height:420,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  T(g,x+160,590,d[0],34,'d5','middle');T(g,x+160,634,d[1],20,'m','middle');g.appendChild($('nc'+i));return g});
const MN=[0,1,2,3,4,5,6].map(i=>mk('circle',{cx:640+i*120,cy:760,r:24},$('addup')));