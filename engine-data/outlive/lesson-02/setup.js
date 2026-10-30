const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g);return g};
P($('docp'),1130,430,44,'ink');P($('patp'),1250,480,28,'ink');P($('coachp'),1250,400,30,'ink');P($('you7'),1420,420,24,'gain');
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${1370+62*c} ${300+62*s}L${1370+72*c} ${300+72*s}`,class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('ctk'))}
[0,1,2].forEach(i=>{const x=340+460*i;mk('circle',{cx:x,cy:262,r:16,fill:i?'var(--stage)':'var(--gain)',stroke:'var(--ink)','stroke-width':5},$('tl'));const tx=mk('text',{x:x,y:310,'font-size':22,'text-anchor':'middle',class:'m'},$('tl'));tx.textContent='MEDICINE '+(i+1)+'.0';if(!i)tx.style.fill='var(--gain)'});
const JF=[0,1,2,3].map(i=>{const x=520+160*i,g=$('jars'),f=mk('rect',{x:x+6,width:98,rx:12,fill:i%2?'var(--loss)':'var(--gain)','fill-opacity':.55},g);mk('rect',{x:x,y:480,width:110,height:220,rx:18,fill:'none',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:x+25,y:450,width:60,height:30,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);return f});
// amber flames on the roof: pointed, flickering tongues with a pale core, plus rising smoke
const FLD='M0 0C-42 0-52-38-34-70C-28-56-18-52-14-62C-18-92-2-112 6-134C14-104 46-84 42-46C40-18 26 0 0 0Z';
const FLC='M2-6C-16-6-22-24-12-42C-8-32-2-32 0-40C4-54 10-60 12-68C20-50 24-36 20-22C18-12 12-6 2-6Z';
const FL=[[268,402,.62],[350,338,.82],[432,402,.62]].map(([x,y,k])=>{const g=mk('g',{},$('flm'));
  mk('path',{d:FLD,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':3,'stroke-linejoin':'round'},g);
  mk('path',{d:FLC,fill:'var(--stage)','fill-opacity':.85},g);return {g,x,y,k}});
const SMK=[0,1,2].map(()=>mk('circle',{cx:0,cy:0,r:10,fill:'var(--muted)'},$('smk')));
const TP=[...Array(7)].map((_,i)=>[420+i*100,690-280*Math.pow(i/6,1.3)]);
const TPL=mk('polyline',{points:TP.map(q=>q.join(',')).join(' '),fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linejoin':'round',pathLength:1,'stroke-dasharray':1},$('trend'));
const TD=TP.map((q,i)=>mk('circle',{cx:q[0],cy:q[1],r:i==6?16:11,fill:'var(--loss)'},$('trend')));
const FP=[0,1,2,3,4,5].map(i=>{const r=30+24*i;return mk('ellipse',{cx:780,cy:470,rx:r,ry:r*1.25,fill:'none',stroke:i?'var(--ink)':'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-dasharray':(r*4)+' '+(18+i*6),'stroke-dashoffset':i*37},$('fp'))});
const ST=[[960,690],[1080,650],[1200,610],[1320,570]];ST.forEach((s,i)=>mk('ellipse',{cx:s[0],cy:s[1],rx:46,ry:14,fill:i<2?'var(--gain)':'var(--line)'},$('stones')));
const WK=P(mk('g',{},$('stp')),0,-92,22,'gain');
[[1210,590],[1270,575],[1330,545],[1390,500],[1440,430]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:10,fill:'var(--loss)'},$('mdots')));
const sh=(id,a,d=.5)=>rise($(id),p(u0,a,a+d));let u0=0;