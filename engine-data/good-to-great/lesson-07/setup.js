const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const WH=(id,cx,cy,r,sw)=>{const par=$(id);
  mk('path',{d:`M${cx} ${cy}L${cx-r*.55} ${cy+r+40}M${cx} ${cy}L${cx+r*.55} ${cy+r+40}M${cx-r*.8} ${cy+r+40}h${r*1.6}`,class:'s-muted',fill:'none','stroke-width':sw,'stroke-linecap':'round'},par);
  const g=mk('g',{},par);
  const o=mk('circle',{cx:cx,cy:cy,r:r,fill:'var(--stage)',class:'s-ink','stroke-width':sw*1.6},g);
  mk('circle',{cx:cx,cy:cy,r:r*.78,fill:'none',class:'s-line','stroke-width':sw},g);
  for(let i=0;i<6;i++){const a=i*Math.PI/3;mk('path',{d:`M${cx} ${cy}L${(cx+r*.78*Math.cos(a)).toFixed(1)} ${(cy+r*.78*Math.sin(a)).toFixed(1)}`,class:'s-ink','stroke-width':sw,'stroke-linecap':'round'},g)}
  mk('circle',{cx:cx,cy:cy,r:r*.16,class:'ink'},g);mk('circle',{cx:cx,cy:cy-r*.89,r:r*.09,class:'gain'},g);
  return {g:g,o:o,cx:cx,cy:cy}};
const rot=(w,a)=>w.g.setAttribute('transform',`rotate(${a.toFixed(1)} ${w.cx} ${w.cy})`);
const w0=WH('w0g',1320,330,110,6),w1=WH('w1g',900,520,220,8),w2=WH('w2g',400,490,170,7),w4=WH('w4g',1100,440,160,7),w6=WH('w6g',420,450,150,7),w7=WH('w7g',1400,380,70,5),w8=WH('w8g',1340,620,100,6);
const T=(par,x,y,s,txt,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:'m'},a||{}),par);e.textContent=txt;return e};

[0,1].forEach(k=>[0,180].forEach(sd=>{const r=195+k*22,a1=(200+sd)*Math.PI/180,a2=(250+sd)*Math.PI/180;
  mk('path',{d:`M${(400+r*Math.cos(a1)).toFixed(1)} ${(490+r*Math.sin(a1)).toFixed(1)}A${r} ${r} 0 0 1 ${(400+r*Math.cos(a2)).toFixed(1)} ${(490+r*Math.sin(a2)).toFixed(1)}`,class:'s-gain',fill:'none','stroke-width':5,'stroke-linecap':'round'},$('sp2'))}));
const B2=[1,2,4,8].map((n,i)=>{const x=780+i*170;return [mk('rect',{x:x,y:680,width:120,height:0,rx:6,class:i===3?'gain':'ink'},$('br2')),T($('br2'),x+60,722,26,n,{'text-anchor':'middle'}),n*40]});
const D2=[];for(let i=0;i<8;i++)D2.push(mk('circle',{cx:140+i*60,cy:765,r:10,class:'gain'},$('pd2')));

fig($('ld3'),640,420,40,'ink');
const C3=[];for(let r=0;r<5;r++)for(let c=0;c<7;c++)C3.push(mk('rect',{x:880+c*80,y:334+r*66,width:60,height:50,rx:8,fill:'var(--line)'},$('cc3')));

const S4=[40,70,100,140,190].map((h,i)=>[mk('rect',{x:170+i*85,y:740,width:55,height:0,class:'gain'},$('cb4')),h]);
const T4=[880,1000,1120,1240,1360].map(x=>{const g=mk('g',{},$('tm4'));fig(g,x,720,20,'ink');
  const a=mk('path',{d:`M${x-22} 760L${x-38} 712M${x+22} 760L${x+38} 712`,class:'s-gain',fill:'none','stroke-width':8,'stroke-linecap':'round'},g);return [g,a]});

for(let c=0;c<3;c++)for(let r=0;r<4;r++)mk('rect',{x:160+c*48,y:390+r*56,width:28,height:32,fill:'var(--stage)'},$('co5'));
const Z5=[[480,295,'NEW PROGRAM'],[720,315,'NEW FAD'],[960,305,'REVERSE']].map(q=>{const g=mk('g',{},$('zl5'));T(g,q[0],q[1],20,q[2],{'text-anchor':'middle',style:'fill:var(--loss)'});return g});

fig($('nb6'),720,400,34,'loss');T($('nb6'),720,590,20,'NEW LEADER',{'text-anchor':'middle'});
const N6=[[1180,290,'RESTART'],[1370,480,'WHEEL STOPS'],[1180,670,'POOR RESULTS'],[990,480,'PANIC']].map(q=>{const g=mk('g',{},$('nd6'));
  mk('rect',{x:q[0]-105,y:q[1]-30,width:210,height:60,rx:30,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);
  T(g,q[0],q[1]+7,20,q[2],{'text-anchor':'middle',style:'fill:var(--ink)'});return g});

const F7=[400,580,760,940,1120].map(x=>{const g=mk('g',{},$('fl7'));mk('path',{d:`M${x} 372V290`,class:'s-ink','stroke-width':5,'stroke-linecap':'round'},g);mk('path',{d:`M${x} 290l50 18l-50 18z`,class:'gain'},g);return g});
let oc='';for(let i=0;i<8;i++){const a=(22.5+45*i)*Math.PI/180;oc+=(260+90*Math.cos(a)).toFixed(1)+','+(660+90*Math.sin(a)).toFixed(1)+' '}
$('st7').insertBefore(mk('polygon',{points:oc,class:'loss'},$('st7')),$('st7').firstChild);