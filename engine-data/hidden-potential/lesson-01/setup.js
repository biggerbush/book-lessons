const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const txt=(g,x,y,s,fs,cls,anc)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':anc||'start'},g);e.textContent=s;return e};
const star=(cx,cy,R)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?R*.45:R;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const along=(P,n)=>{const L=[0];for(let i=1;i<P.length;i++)L.push(L[i-1]+Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]));const T=L[L.length-1],o=[];
  for(let k=0;k<n;k++){const s=T*k/(n-1);let i=1;while(i<L.length-1&&L[i]<s)i++;const f=(s-L[i-1])/(L[i]-L[i-1]||1);o.push([P[i-1][0]+(P[i][0]-P[i-1][0])*f,P[i-1][1]+(P[i][1]-P[i-1][1])*f])}return o};
// two-climbers tracks: points along each slope, offset outward by a constant gap, clamped above the ground line
const GROUND=760,GAP=14,LIFT=20;
const slopePt=(base,top,f,gap)=>{const dx=top[0]-base[0],dy=top[1]-base[1],L=Math.hypot(dx,dy);
  let nx=dy/L,ny=-dx/L; if(ny>0){nx=-nx;ny=-ny}
  const x=base[0]+dx*f+nx*gap,y=Math.min(GROUND-4,base[1]+dy*f+ny*gap);return [x,y]};
const LB=[220,760],LT=[700,240],RB=[1180,760],RT=[700,240];
const A0=.5,A1=.715,B0=0,B1=.666;
fig($('kAf'),920,420,40,'gain');mk('path',{d:star(920,315,40),class:'gain'},$('kAs'));fig($('kBf'),1260,420,40,'ink');
const RW=[0,1,2,3].map(i=>{const g=mk('g',{},$('rows')),y=380+i*90;mk('path',{d:'M160 '+y+'h'+(200+(i*37)%80),class:'s-line','stroke-width':10,'stroke-linecap':'round'},g);
  mk('rect',{x:460,y:y-30,width:70,height:56,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':5},g);return g});
const TR=along([[420,745],[620,690],[480,620],[680,545],[600,460],[720,370],[760,262]],30).map(q=>mk('circle',{cx:q[0].toFixed(1),cy:q[1].toFixed(1),r:7,class:'gain'},$('trail')));
const CD=[],PL=[],AR=[];
['PIANISTS','SWIMMERS','MATHEMATICIANS'].forEach((s,i)=>{const x=120+i*480,c=x+200,g=mk('g',{},$('cards'));CD.push(g);
  mk('rect',{x:x,y:230,width:400,height:300,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  if(i===0){for(let k=0;k<7;k++)mk('rect',{x:c-105+k*30,y:300,width:30,height:120,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
    [0,1,3,4,5].forEach(k=>mk('rect',{x:c-95+k*30,y:300,width:20,height:72,class:'ink'},g))}
  if(i===1){mk('circle',{cx:c-40,cy:350,r:22,class:'ink'},g);mk('path',{d:'M'+(c-20)+' 345q50-50 100 0',fill:'none',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},g);
    mk('path',{d:'M'+(c-120)+' 400q30-20 60 0t60 0t60 0t60 0',fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round'},g)}
  if(i===2)txt(g,c,400,'∑ π √',80,'d','middle');
  txt(g,c,490,s,24,'m','middle');
  const q=mk('g',{},$('pols'));PL.push(q);mk('rect',{x:c-110,y:570,width:220,height:200,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},q);
  fig(q,c,608,16,'ink');txt(q,c,745,'AS A CHILD',22,'m','middle');
  AR.push(mk('path',{d:'M'+c+' 566V538M'+(c-12)+' 550L'+c+' 538L'+(c+12)+' 550',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('pols')))});
for(let y=300;y<600;y+=68)mk('path',{d:'M980 '+y+'h240',class:'s-line','stroke-width':5},$('rungs'));
fig($('crew'),880,500,20,'ink');fig($('crew'),1320,500,20,'ink');
fig($('mirf'),330,400,36,'gain');