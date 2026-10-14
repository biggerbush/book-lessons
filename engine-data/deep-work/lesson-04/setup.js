const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const brainG=(g,cx,cy,rx,ry)=>{mk('ellipse',{cx:cx,cy:cy,rx:rx,ry:ry,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':7},g);mk('path',{d:`M${cx} ${cy-ry+10}V${cy+ry-10}`,stroke:'var(--ink)','stroke-width':5},g);
  [-1,1].forEach(s=>mk('path',{d:`M${cx+s*rx*.2} ${cy-ry*.4}q${s*rx*.3} ${-ry*.3} ${s*rx*.55} 0M${cx+s*rx*.15} ${cy+ry*.1}q${s*rx*.3} ${ry*.35} ${s*rx*.6} 0M${cx+s*rx*.25} ${cy+ry*.55}q${s*rx*.2} ${-ry*.25} ${s*rx*.45} 0`,fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},g))};
const bz=(s,a,b,c,d)=>(1-s)**3*a+3*(1-s)**2*s*b+3*(1-s)*s*s*c+s**3*d;
fig($('t0fig'),1290,360,50,'ink');
const b1in=mk('g',{},$('b1brain'));brainG(b1in,300,450,160,120);
fig($('n2fig'),260,320,40,'ink');brainG($('n2b'),1250,450,140,110);
const ND=[];for(let i=0;i<14;i++)ND.push([mk('circle',{r:10,class:i%5===0?'gain':'loss'},$('n2dots')),590+((i*137)%340)]);
const SPK=[];for(let i=0;i<10;i++)SPK.push(mk('line',{stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round'},$('n2spk')));
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('line',{x1:260+82*c,y1:380+82*s,x2:260+94*c,y2:380+94*s,stroke:'var(--ink)','stroke-width':4},$('i3ticks'))}
const SL=[];for(let i=0;i<10;i++){const x=470+i*100;mk('rect',{x:x,y:330,width:70,height:100,rx:12,fill:'none',stroke:'var(--line)','stroke-width':4},$('i3sl'));SL.push(mk('rect',{x:x+15,y:345,width:40,height:70,rx:6,class:'loss'},$('i3sl')))}
fig($('i3mind'),0,620,30,'loss');
[420,860,1260].forEach(x=>{mk('rect',{x:x,y:510,width:140,height:80,class:'loss'},$('f4blk'));[50,78].forEach(o=>mk('rect',{x:x+o,y:530,width:12,height:40,rx:3,fill:'var(--stage)'},$('f4blk')))});
for(let i=0;i<15;i++)mk('path',{d:'M'+(120+i*97.1).toFixed(1)+' 600v16',stroke:'var(--muted)','stroke-width':4},$('f4tk'));
for(let r=0;r<3;r++)for(let c=0;c<4;c++)mk('rect',{x:1016+c*36,y:716+r*34,width:24,height:22,rx:4,fill:(r*4+c)%5===1?'var(--loss)':'var(--line)'},$('f4cells'));
fig($('n5fig'),1200,520,22,'ink');
const wk=mk('g',{},$('w6walk'));fig(wk,0,-75,16,'ink');
const RP=[];for(let i=0;i<5;i++)RP.push(mk('circle',{cx:1200+i*56,cy:510,r:16},$('w6reps')));
fig($('r7fig'),260,330,36,'ink');
const BR=[];for(let i=0;i<4;i++)BR.push(mk('rect',{x:140+i*80,y:600,width:50,height:80,rx:8,class:'gain'},$('r7bursts')));