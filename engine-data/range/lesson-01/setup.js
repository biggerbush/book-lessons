const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const draw=(el,k)=>{el.style.strokeDashoffset=(1-k).toFixed(3)};
const at=(el,dot,k)=>{const q=el.getPointAtLength(el.getTotalLength()*k);dot.setAttribute('cx',q.x.toFixed(1));dot.setAttribute('cy',q.y.toFixed(1))};
[680,760,840].forEach(x=>{const g=mk('g',{style:'fill:var(--muted)'},$('others'));mk('circle',{cx:x,cy:560,r:22,fill:'var(--muted)'},g);mk('path',{d:'M'+(x-33)+' 652v-28.6a33 33 0 0 1 66 0v28.6z',fill:'var(--muted)'},g)});
const RUN=mk('g',{},$('runr'));fig(RUN,0,560,22,'loss');
fig($('boy'),360,360,40,'gain');
// sport icons: each sport gets its own drawing, centred at 0,0
const IC=[
 (s,o)=>{o(0,0,28);s('M0 -11l10 7-4 12h-12l-4-12z',1);s('M0 -11V-28M10 -4l17-7M6 8l10 16M-6 8l-10 16M-10 -4l-17-7')},
 (s,o)=>{o(0,0,28);s('M-28 0h56M0 -28v56M-19 -20q12 20 0 40M19 -20q-12 20 0 40')},
 (s,o)=>{o(10,-4,20);s('M-8 -10q18 10 36 0M10 -24q-8 20 0 40');s('M-36 -10h14M-38 4h18M-36 18h14')},
 (s,o)=>{o(0,22,8,1);s('M-6 16L-22-24M6 16L22-24M0 14V-26M-22 -24q22-10 44 0')},
 (s,o)=>{o(-6,-8,20,1);s('M8 6L24 24',0,9);o(24,-24,6,1)},
 (s,o)=>{s('M-32 14L24 -16q8-4 6 4M-24 26L32 -4q8-4 6 4');s('M-12 -28L-4 16M6 -32L14 12')},
 (s,o)=>{o(8,-16,8,1);s('M-22 -2q12-24 28-14');s('M-32 10q8-8 16 0t16 0t16 0t16 0M-32 24q8-8 16 0t16 0t16 0t16 0')},
 (s,o)=>{o(-16,-18,8,1);o(16,-18,8,1);s('M-30 16v-8a12 12 0 0 1 24 0v8zM6 16v-8a12 12 0 0 1 24 0v8z',1);s('M-8 0H8');s('M-32 28h64')},
 (s,o)=>{s('M-36 -6q4 10 14 10h44q10 0 14-10');o(-18,16,6,1);o(18,16,6,1)}
];
const TK=['SOCCER','BASKETBALL','HANDBALL','BADMINTON','TABLE TENNIS','SKIING','SWIMMING','WRESTLING','SKATEBOARDING'].map((nm,i)=>{const x=820+(i%3)*240,y=290+Math.floor(i/3)*180,c=i%2?'var(--ink)':'var(--gain)',g=mk('g',{},$('tokens'));
 mk('circle',{cx:x,cy:y,r:46,fill:'var(--stage)',stroke:c,'stroke-width':5},g);
 const ig=mk('g',{transform:'translate('+x+' '+y+')'},g);
 const s=(d,f,w)=>mk('path',{d:d,fill:f?c:'none',stroke:c,'stroke-width':w||4,'stroke-linecap':'round','stroke-linejoin':'round'},ig);
 const o=(cx,cy,r,f)=>mk('circle',{cx:cx,cy:cy,r:r,fill:f?c:'none',stroke:c,'stroke-width':4},ig);
 IC[i](s,o);
 const tx=mk('text',{x:x,y:y+82,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=nm;return g});
const SG=[];for(let i=0;i<8;i++)SG.push(mk('rect',{x:320+i*56,y:370,width:52,height:44,rx:8,fill:['var(--ink)','var(--muted)','var(--line)'][i%3]},$('segs')));
const T5=[];for(let i=0;i<9;i++){const x=270+i*60,y=600+(i%2)*40;T5.push(i%2?mk('rect',{x:x-14,y:y-14,width:28,height:28,rx:4,fill:'var(--muted)'},$('tok5')):mk('circle',{cx:x,cy:y,r:15,fill:'var(--ink)'},$('tok5')))}
const CR=[];for(let r=0;r<3;r++)for(let c=0;c<5;c++){const g=mk('g',{},$('crowd6'));fig(g,380+c*60,440+r*80,14,'gain');CR.push(g)}
const BR=[170,250,330,410,490].map(x=>{const b=x===410,g=mk('g',{},$('br7'));mk('path',{d:`M330 650Q330 520 ${x} 380`,fill:'none',stroke:b?'var(--gain)':'var(--line)','stroke-width':5,pathLength:1,'stroke-dasharray':'1 1','stroke-linecap':'round'},g);
if(b)mk('circle',{cx:x,cy:380,r:40,fill:'none',stroke:'var(--gain)','stroke-width':4},g);mk('circle',{cx:x,cy:380,r:b?26:16,fill:b?'var(--gain)':'var(--stage)',stroke:b?'var(--gain)':'var(--muted)','stroke-width':4},g);return g});
for(let i=0;i<5;i++)mk('circle',{cx:1185+i*42,cy:290,r:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));