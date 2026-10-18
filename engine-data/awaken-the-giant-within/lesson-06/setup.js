const fig=(g,x,y,r,c)=>{const f=mk('g',{fill:c||'var(--ink)'},g);mk('circle',{cx:x,cy:y,r:r},f);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`},f);return f};
const compass=(g,cx,cy,r)=>{mk('circle',{cx:cx,cy:cy,r:r,class:'s-ink',fill:'var(--stage)','stroke-width':8},g);
  for(let i=0;i<12;i++){const a=i*Math.PI/6,l=i%3?.86:.76,s=Math.sin(a),c=Math.cos(a);mk('path',{d:`M${cx+r*.94*s} ${cy-r*.94*c}L${cx+r*l*s} ${cy-r*l*c}`,class:'s-ink','stroke-width':i%3?3:6,'stroke-linecap':'round'},g)}
  const n=mk('g',{},g);mk('path',{d:`M0 ${-r*.68}L${r*.12} 0H${-r*.12}z`,class:'gain'},n);mk('path',{d:`M0 ${r*.68}L${r*.12} 0H${-r*.12}z`,class:'loss'},n);mk('circle',{r:r*.07,class:'ink'},n);
  return a=>n.setAttribute('transform',`translate(${cx} ${cy}) rotate(${a.toFixed(1)})`)};
const pill=(g,x,y,w,s,good)=>{const q=mk('g',{},g);mk('rect',{x:x,y:y,width:w,height:80,rx:40,fill:good?'var(--gain)':'var(--stage)',stroke:good?'none':'var(--loss)','stroke-width':5},q);
  const tx=mk('text',{x:x+w/2,y:y+52,'font-size':34,'text-anchor':'middle',class:'d5',style:'fill:var('+(good?'--on-gain':'--loss')+')'},q);tx.textContent=s;return q};
const pen=g=>{const q=mk('g',{},g);mk('path',{d:'M0 0l8-26 62-62 18 18-62 62z',class:'ink'},q);mk('path',{d:'M0 0l8-26 18 18z',class:'gain'},q);return q};

const N0=compass($('tc'),1330,620,120), N1=compass($('c1'),430,520,200);
const PG=['Love','Freedom','Security'].map((s,i)=>pill($('pv'),760+i*240,310,220,s,1));
const PA=['Rejection','Failure'].map((s,i)=>pill($('pa'),760+i*240,600,220,s,0));
const LB=[['ADVENTURE','SECURITY'],['SECURITY','ADVENTURE']].map((v,k)=>{const cx=k?1250:350,g=$('lad');
  mk('path',{d:`M${cx-140} 230V560M${cx+140} 230V560M${cx-140} 470H${cx+140}M${cx-140} 520H${cx+140}`,class:'s-ink','stroke-width':7,'stroke-linecap':'round'},g);
  return v.map((s,j)=>{const r=mk('rect',{x:cx-125,y:250+j*100,width:250,height:70,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
    const tx=mk('text',{x:cx,y:293+j*100,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=(j+1)+' · '+s;return [r,tx]})});
const PP=[350,1250].map(x=>fig($('pp'),x,620,26));
const ROWS=[];for(let i=0;i<8;i++){const y=268+i*58,g=mk('g',{},$('rows'));mk('rect',{x:540,y:y,width:36,height:36,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},g);
  mk('rect',{x:600,y:y+11,width:200+(i*67%5)*40,height:14,rx:7,fill:'var(--line)'},g);
  if(i==1||i==4)mk('path',{d:`M546 ${y+18}l10 10 18-20`,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);ROWS.push(g)}
for(let i=0;i<4;i++)fig($('aud'),160+i*70,660,16);
fig($('ca'),420,560,34);fig($('ca'),1180,560,34);
const LV=[];for(let i=0;i<6;i++){const x=620+i*140;mk('rect',{x:x,y:280,width:100,height:120,fill:'none',stroke:'var(--ink)','stroke-width':5},$('drs'));LV.push([x,mk('polygon',{class:'gain'},$('drs'))])}
for(let i=1;i<6;i++){const a=Math.PI*(1+i/6),c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${240+95*c} ${780+95*s}L${240+125*c} ${780+125*s}`,stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('sun'))}
fig($('oth'),1130,340,22);fig($('oth'),1230,340,22);
const DAY=[];for(let i=0;i<7;i++)DAY.push(mk('rect',{x:120+i*100,y:690,width:80,height:80,rx:12,stroke:'var(--ink)','stroke-width':4},$('week')));
const P1=pen($('pn1')), P2=pen($('pn2'));