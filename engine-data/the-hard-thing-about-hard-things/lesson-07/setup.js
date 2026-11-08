const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-1.6*r} ${y+3.6*r}v${-0.6*r}a${1.6*r} ${1.6*r} 0 0 1 ${3.2*r} 0v${0.6*r}z`,class:cls},g)};
const bricks=(g,x,y,w,h)=>{mk('rect',{x:x,y:y,width:w,height:h,class:'loss'},g);let d='';for(let r=0;y+r*30<y+h;r++){if(r)d+=`M${x} ${y+r*30}h${w}`;d+=`M${x+w*(r%2?.3:.7)} ${y+r*30}v${Math.min(30,h-r*30)}`}mk('path',{d:d,stroke:'var(--stage)','stroke-width':4,fill:'none'},g)};
const car=g=>{[[-40,-36],[24,-36],[-40,26],[24,26]].forEach(q=>mk('rect',{x:q[0],y:q[1],width:24,height:10,rx:4,fill:'var(--muted)'},g));mk('rect',{x:-60,y:-30,width:120,height:60,rx:16,class:'ink'},g);mk('rect',{x:10,y:-22,width:28,height:44,rx:6,fill:'var(--stage)'},g)};
bricks($('wall0'),1390,230,80,290);car($('car0'));
fig($('lead'),400,520,44,'ink');
const rain=[340,380,420,460].map(x=>mk('path',{d:`M${x} 432v34`,class:'s-loss','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':'10 14'},$('rain1')));
let bd='';for(let x=740;x<1040;x+=40)bd+=`M${x} 400v160`;mk('path',{d:bd,class:'s-line','stroke-width':4},$('bars2'));
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('line',{x1:1290+108*Math.sin(a),y1:400-108*Math.cos(a),x2:1290+120*Math.sin(a),y2:400-120*Math.cos(a),class:'s-ink','stroke-width':i%3?3:6},$('ticks2'))}
for(let i=0;i<5;i++){const y=270+i*100;mk('path',{d:`M700 470L1120 ${y}`,class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('br3'));mk('circle',{cx:1120,cy:y,r:16,class:'gain'},$('br3'))}
// OPTIONS label: right of the dot column, on a stage backing so nothing crosses it
mk('rect',{x:1180,y:448,width:150,height:42,rx:10,fill:'var(--stage)'},$('br3'));
mk('text',{x:1196,y:478,'font-size':22,class:'m'},$('br3')).textContent='OPTIONS';
bricks($('wall4'),1240,520,60,240);car($('car4'));
for(let r=0;r<8;r++)for(let c=0;c<8;c++)mk('rect',{x:160+c*56,y:240+r*56,width:56,height:56,fill:(r+c)%2?'var(--line)':'var(--stage)'},$('board5'));
mk('rect',{x:160,y:240,width:448,height:448,class:'s-ink',fill:'none','stroke-width':5},$('board5'));
[[2,4],[4,4],[3,3],[2,6],[4,6],[1,5],[5,4],[6,2],[1,2]].forEach(q=>mk('circle',{cx:188+q[0]*56,cy:268+q[1]*56,r:18,class:'loss'},$('board5')));
mk('circle',{cx:356,cy:548,r:22,class:'gain'},$('board5'));
mk('rect',{x:440,y:576,width:56,height:56,fill:'none',stroke:'var(--gain)','stroke-width':6},$('mv5'));
mk('path',{d:'M356 548H468V604',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-dasharray':'10 8','stroke-linecap':'round'},$('mv5'));
mk('circle',{cx:468,cy:604,r:10,class:'gain'},$('mv5'));
for(let i=0;i<7;i++){const a=-Math.PI*0.75+i*Math.PI/4*0.25*3;const s=Math.sin(a),c=Math.cos(a);mk('line',{x1:1100+125*s,y1:380-125*c,x2:1100+165*s,y2:380-165*c,class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays5'))}
for(let i=0;i<5;i++){const x=780+i*140;mk('ellipse',{cx:x,cy:330,rx:34,ry:14,class:'loss'},$('fr6'));fig($('fr6'),x,400,32,i?'ink':'gain')}
bricks($('wb7'),1340,300,70,400);
bricks($('gr8'),1390,230,70,210);
const steps=[[1230,430],[1250,392],[1262,352],[1270,312],[1286,274],[1308,240]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:9,class:'gain'},$('steps8')));