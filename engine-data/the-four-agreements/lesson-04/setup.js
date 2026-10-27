const P=(par,x,y,r,cls)=>{const g=mk('g',{class:cls},par);mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},g);return g};
const me0=P($('ttl'),1300,400,44,'ink');
const me1=P($('you1'),420,592,40,'ink');P($('str'),1100,592,40,'ink');
P($('his'),480,520,36,'ink');P($('yo2'),1120,440,36,'gain');
P($('meS'),800,520,36,'gain');
const TB=[];[200,340,480,1120,1260,1400].forEach((x,i)=>{P($('crd'),x,560,26,'ink');
  mk('path',{d:'M'+x+' 530Q'+((x+800)/2)+' 380 '+(x<800?750:850)+' 500',fill:'none',stroke:'var(--muted)','stroke-width':3,'stroke-dasharray':'6 8'},$('crl'));
  const b=mk('g',{},$('thb'));mk('ellipse',{cx:x,cy:480,rx:52,ry:26,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},b);
  const tx=mk('text',{x:x,y:487,'font-size':18,'text-anchor':'middle',class:'m'},b);tx.textContent=i%2?'HOPE':'FEAR';TB.push(b)});
const me4=P($('yo4'),800,420,44,'ink');P($('oth4'),1340,420,40,'ink');
const DR=[0,1,2,3].map(()=>mk('circle',{r:10,class:'loss'},$('drp')));
const starD=(cx,cy,R,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
mk('path',{d:starD(520,570,42,18),class:'gain'},$('star'));
P($('spA'),200,330,30,'ink');P($('spB'),1400,330,30,'ink');
P($('yo6'),340,460,40,'ink');
const CHP=[0,1,2].map(()=>{const g=mk('g',{},$('chp'));mk('rect',{x:0,y:-25,width:170,height:50,rx:25,class:'loss'},g);
  const tx=mk('text',{x:85,y:7,'font-size':18,'text-anchor':'middle',class:'m',style:'fill:var(--stage)'},g);tx.textContent='CRITICISM';return g});
const CD=[['Pause','BEFORE YOU REACT'],['Breathe','LET IT PASS THROUGH'],['Label','THEIR DREAM'],['Decide','WHAT, IF ANYTHING?']].map((c,i)=>{
  const x=120+i*350,cx=x+155,g=mk('g',{},$('cards'));
  const r=mk('rect',{x:x,y:250,width:310,height:380,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g);
  if(i==0){mk('circle',{cx:cx,cy:400,r:64,class:'gain'},g);[cx-22,cx+8].forEach(a=>mk('rect',{x:a,y:375,width:14,height:50,rx:4,fill:'var(--on-gain)'},g))}
  if(i==1)[370,400,430].forEach(y=>mk('path',{d:'M'+(cx-70)+' '+y+'q35-30 70 0t70 0',fill:'none',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},g));
  if(i==2){mk('path',{d:'M'+(cx-70)+' 370h100l40 30-40 30h-100z',class:'ink'},g);mk('circle',{cx:cx+38,cy:400,r:8,fill:'var(--stage)'},g)}
  if(i==3){mk('circle',{cx:cx,cy:400,r:64,fill:'none',class:'s-ink','stroke-width':6},g);mk('path',{d:'M'+(cx-28)+' 402l20 22 38-44',fill:'none',class:'s-gain','stroke-width':10,'stroke-linecap':'round','stroke-linejoin':'round'},g)}
  const t1=mk('text',{x:cx,y:560,'font-size':40,'text-anchor':'middle',class:'d5'},g);t1.textContent=c[0];
  const t2=mk('text',{x:cx,y:600,'font-size':20,'text-anchor':'middle',class:'m'},g);t2.textContent=c[1];
  return [g,r]});
P($('fin'),1000,680,26,'gain');P($('fin'),1400,680,26,'ink');