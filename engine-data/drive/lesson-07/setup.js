const fig=(g,x,y,r,cls)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},e);return e};
const drw=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const rv=(id,a,d=.5)=>rise($(id),p(u_,a,a+d));
let u_=0;
fig($('t0x'),1220,330,34,'ink');fig($('t0i'),1380,330,34,'gain');
fig($('x1p'),440,380,30,'ink');fig($('i1p'),1160,380,30,'ink');
const star=(cx,cy,R)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?R*.45:R;s+=(cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1)+' '}return s};
const RW=['M282 424h80m-14-14 14 14-14 14','M440 306v34m-12-12 12 12 12-12','M598 424h-80m14-14-14 14 14 14'].map(d=>{const g=mk('g',{},$('x1r'));mk('path',{d:d,class:'s-muted',fill:'none','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
mk('circle',{cx:240,cy:420,r:34,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},RW[0]);
mk('text',{x:240,y:434,'font-size':36,'text-anchor':'middle',class:'d'},RW[0]).textContent='$';
mk('polygon',{points:star(440,270,30),class:'s-ink',fill:'var(--stage)','stroke-width':5,'stroke-linejoin':'round'},RW[1]);
mk('path',{d:'M610 440v-40l15 20 15-25 15 25 15-20v40z',class:'s-ink',fill:'var(--stage)','stroke-width':5,'stroke-linejoin':'round'},RW[2]);
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1160+110*c).toFixed(1)+' '+(430+110*s).toFixed(1)+'L'+(1160+140*c).toFixed(1)+' '+(430+140*s).toFixed(1),class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('i1y'))}
fig($('mgp'),1420,280,16,'ink');
const rows=[['More say over how','Real challenges','A reason that matters'],['Where am I free?','Where am I growing?','What do I serve?']].flatMap((a,j)=>a.map((s,i)=>{const y=(j?620:330)+i*50,g=mk('g',{},$(j?'mrl':'mgl'));mk('circle',{cx:920,cy:y-9,r:8,class:'gain'},g);mk('text',{x:944,y:y,'font-size':28,class:'d5'},g).textContent=s;return g}));
fig($('luc'),450,560,34,'gain');fig($('ken'),1150,560,34,'ink');
[[220,590,26,'ink'],[310,590,26,'ink'],[390,630,17,'gain'],[440,630,17,'gain']].forEach(q=>fig($('famp'),q[0],q[1],q[2],q[3]));
const cells=[];for(let i=0;i<28;i++){cells.push(mk('rect',{x:146+(i%7)*66,y:316+Math.floor(i/7)*66,width:56,height:56,rx:8,fill:i<17?'var(--muted)':'var(--line)','fill-opacity':i<17?.5:1},$('cells')))}
const steps=[];for(let i=0;i<6;i++)steps.push(mk('rect',{x:720+i*120,y:760-(i+1)*50,width:120,height:(i+1)*50,fill:'var(--line)'},$('st')));