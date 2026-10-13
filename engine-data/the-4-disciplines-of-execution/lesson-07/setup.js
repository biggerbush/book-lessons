const I='var(--ink)',G='var(--gain)',L='var(--loss)',S='var(--stage)';
const fig=(g,x,y,r,f)=>{const a=f?{fill:f}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)};
const tx=(g,x,y,s,fs,at)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:'m','text-anchor':'middle'},at||{}),g);e.textContent=s;return e};
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(1300+118*s).toFixed(1)+' '+(420-118*c).toFixed(1)+'L'+(1300+132*s).toFixed(1)+' '+(420-132*c).toFixed(1),stroke:I,'stroke-width':i%3?4:8,'stroke-linecap':'round'},$('ticks'))}
[340,540,740].forEach(x=>fig($('teamp'),x,470,30,I));
const env=[];for(let i=0;i<8;i++){const g=mk('g',{},$('pile')),x=1000+(i*37)%30-15,y=760-(i+1)*55,c=i%2?I:L;mk('rect',{x:x,y:y,width:380,height:52,rx:6,fill:S,stroke:c,'stroke-width':4},g);mk('path',{d:'M'+x+' '+y+'l190 30l190-30',fill:'none',stroke:c,'stroke-width':3},g);env.push(g)}
'MTWTFSS'.split('').forEach((c,i)=>tx($('cal'),170+i*100,278,c,20));
const slot=[];for(let r=0;r<4;r++)for(let c=0;c<7;c++){const e=mk('rect',{x:126+c*100,y:300+r*90,width:88,height:78,rx:8,fill:S,stroke:'var(--line)','stroke-width':3},$('cal'));if(c===1)slot.push([e,tx($('cal'),270,346+r*90,'WIG',20,{style:'fill:var(--on-gain)',opacity:0})])}
const bd=[];for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3,x=560+230*Math.cos(a),y=500+230*Math.sin(a),bx=x+36,by=y-30;fig($('ring3'),x,y,24,I);const b=mk('g',{},$('badges')),no=i===4;mk('circle',{cx:bx,cy:by,r:20,fill:no?L:G},b);mk('path',{d:no?'M'+(bx-8)+' '+(by-8)+'l16 16m0-16l-16 16':'M'+(bx-9)+' '+by+'l6 7 12-14',fill:'none',stroke:no?S:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},b);bd.push(b)}
const HB=[110,150,180,240,300,370],bars=HB.map((h,i)=>{const x=180+i*115;tx($('bars'),x+35,774,'WK'+(i+1),20);return mk('rect',{x:x,y:740-h,width:70,height:h,rx:4,fill:i<3?I:G},$('bars'))});
const rays=[];for(let i=0;i<8;i++){const a=i*Math.PI/4,s=Math.sin(a),c=Math.cos(a);rays.push(mk('path',{d:'M'+(1260+125*s).toFixed(1)+' '+(400-125*c).toFixed(1)+'L'+(1260+160*s).toFixed(1)+' '+(400-160*c).toFixed(1),stroke:G,'stroke-width':6,'stroke-linecap':'round'},$('rays')))}
for(let i=0;i<6;i++)mk('circle',{cx:170+i*70,cy:240,r:14,fill:S,stroke:I,'stroke-width':5},$('rings'));
for(let i=0;i<6;i++){const a=i*Math.PI/3;mk('circle',{cx:1040+130*Math.cos(a),cy:480+130*Math.sin(a),r:18,fill:I},$('chairs'))}
const tw=[];for(let i=0;i<5;i++){const w=220-i*40;tw.push(mk('path',{d:'M'+(350-w/2)+' '+(520+i*40)+'h'+w,stroke:L,'stroke-width':8,'stroke-linecap':'round'},$('torn')))}
fig($('leadp'),780,330,26,G);
// peers in a row; boss above; peer links are arcs over the heads (never through bodies)
const PP=[200,330,460,590,720].map(x=>[x,620]);
const blines=PP.map(q=>mk('path',{d:'M460 388L'+q[0]+' '+(q[1]-28),stroke:'var(--muted)','stroke-width':3,'stroke-dasharray':'6 8','stroke-linecap':'round'},$('bl')));
const chs=[];for(let i=0;i<5;i++)for(let j=i+1;j<5;j++){const x1=PP[i][0],x2=PP[j][0],h=(x2-x1)*.25,cy=598-2*h;chs.push(mk('path',{d:'M'+x1+' 598Q'+((x1+x2)/2)+' '+cy+' '+x2+' 598',fill:'none',stroke:G,'stroke-width':4,'stroke-linecap':'round',opacity:0},$('ch')))}
fig($('boss'),460,300,20,'var(--muted)');
const PG=PP.map(q=>{const g=mk('g',{},$('peers'));fig(g,q[0],q[1],22);return g});
fig($('duo'),1020,420,34,I);fig($('duo'),1360,420,34,I);