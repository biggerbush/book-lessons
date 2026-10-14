const fig=(g,x,y,r,cls)=>{const q=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},q);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},q);return q};
const tx=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
fig($('tLone'),1240,320,28,'gain');
const TC=[[1240,150],[1070,240],[1410,240],[1090,420],[1390,420],[1240,500]].map(c=>fig($('tCrowd'),c[0],c[1],22,'gain'));
fig($('qP'),260,470,36,'ink');
const CY=[250,400,550],CL=[['Clothes','WHICH WE WEAR'],['Restaurants','WHICH FEEL RIGHT'],['Schools','WHICH SEEM NORMAL']];
const links=CY.map(y=>mk('path',{d:'M720 560C810 560 810 '+(y+60)+' 900 '+(y+60),fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},$('cLinks')));
const cards=CY.map((y,i)=>{const g=mk('g',{},$('cCards')),cx=965,cy=y+60;
  mk('rect',{x:900,y:y,width:580,height:120,rx:16,fill:'var(--stage)',class:'s-line','stroke-width':3},g);
  if(i==0)mk('path',{d:`M${cx-14} ${cy-30}l-30 12 10 22 12-5v31h44v-31l12 5 10-22-30-12q-14 12-28 0z`,class:'ink'},g);
  else if(i==1){mk('circle',{cx:cx,cy:cy,r:30,fill:'none',class:'s-ink','stroke-width':5},g);mk('circle',{cx:cx,cy:cy,r:13,class:'gain'},g);mk('path',{d:`M${cx-46} ${cy-28}v56`,class:'s-ink','stroke-width':5,'stroke-linecap':'round'},g)}
  else{mk('path',{d:`M${cx-40} ${cy-6}L${cx} ${cy-36}L${cx+40} ${cy-6}z`,class:'ink'},g);mk('rect',{x:cx-30,y:cy-6,width:60,height:38,class:'ink'},g);mk('rect',{x:cx-9,y:cy+10,width:18,height:22,fill:'var(--stage)'},g)}
  tx(g,CL[i][0],{x:1030,y:y+56,'font-size':40,class:'d5'});tx(g,CL[i][1],{x:1030,y:y+92,'font-size':20,class:'m'});return g});
for(let k=0;k<8;k++){const a=(k*45+22.5)*Math.PI/180,c=Math.cos(a)*130,s=Math.sin(a)*130;
  mk('circle',{cx:420+c,cy:490+s,r:18,class:'gain'},$('wAin'));mk('rect',{x:1125+c,y:475+s,width:30,height:30,class:'ink'},$('wB'))}
[[160,290],[680,280],[150,690],[700,700],[770,480]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:12,fill:'var(--muted)'},$('wOut')));
const ND=[];for(let x=720;x<=1360;x+=80)for(let y=340;y<=660;y+=80){if(((x-1040)/370)**2+((y-500)/210)**2<=1){const d=Math.hypot(x-880,y-420);ND.push([mk('circle',{cx:x,cy:y,r:16,class:'ink'},$('nDots')),d<90?d/200:.8+d/200])}}
const NR=[0,1].map(()=>mk('circle',{cx:880,cy:420,r:20,fill:'none',stroke:'var(--gain)','stroke-width':4},$('nRings')));
const HB=[],HW=[];for(let i=0;i<5;i++){const x=160+i*270,g=mk('g',{},$('hHouses'));
  mk('rect',{x:x,y:440,width:200,height:180,fill:'var(--stage)',class:'s-ink','stroke-width':6,'stroke-linejoin':'round'},g);
  mk('polygon',{points:`${x-14},440 ${x+100},330 ${x+214},440`,class:'ink'},g);
  mk('rect',{x:x+30,y:530,width:50,height:90,class:'ink'},g);
  HW.push(mk('rect',{x:x+110,y:480,width:60,height:50,fill:'var(--stage)',class:'s-ink','stroke-width':5},g));
  const b=mk('g',{},$('hBins'));mk('rect',{x:x+120,y:652,width:56,height:68,rx:6,class:'gain'},b);mk('rect',{x:x+114,y:640,width:68,height:12,rx:4,class:'ink'},b);
  mk('path',{d:`M${x+148} 704c-14-6-14-24 0-32 14 8 14 26 0 32z`,fill:'var(--on-gain)'},b);HB.push([g,b])}
[620,690,830,900].forEach(x=>fig($('lPeople'),x,622,18,'ink'));
for(let i=0;i<10;i++)mk('circle',{cx:220,cy:270+i*60,r:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('kRings'));
fig($('eRef'),1360,215,22,'gain');