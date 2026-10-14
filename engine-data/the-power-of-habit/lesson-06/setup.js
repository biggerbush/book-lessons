const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
fig($('stA'),230,330,32,'ink');fig($('stB'),950,330,32,'ink');
[410,470,530,590].forEach(x=>{mk('circle',{cx:x,cy:476,r:24,class:'gain'},$('cks'));[[-8,-6],[7,-2],[-2,9]].forEach(d=>mk('circle',{cx:x+d[0],cy:476+d[1],r:3.5,class:'ink'},$('cks')))});
[1150,1210,1270].forEach(x=>{mk('path',{d:'M'+x+' 458l-10-26M'+x+' 458l10-26',class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('rds'));mk('circle',{cx:x,cy:478,r:22,class:'loss'},$('rds'))});
const steam=(xs,y,g)=>xs.map(x=>mk('path',{d:'M'+x+' '+y+'c-14-14 14-26 0-42',class:'s-muted',fill:'none','stroke-width':4,'stroke-linecap':'round'},g));
const ST=steam([440,500,560],440,$('stm')),ST2=steam([250,290,330],292,$('stm2'));
const pl=a=>{let s=0;for(let i=2;i<a.length;i+=2)s+=Math.hypot(a[i]-a[i-2],a[i+1]-a[i-1]);return s};
const SW=[[160,500,240,590],[240,590,320,460,400,550,480,420,560,510,640,370,720,460]].map((a,i)=>{const L=pl(a);return [mk('polyline',{points:a.join(' '),fill:'none',class:i?'s-gain':'s-loss','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round','stroke-dasharray':L,'stroke-dashoffset':L},$('saw')),L]});
const AR=[[1340,300],[1400,430],[1340,560]].map(q=>{mk('path',{d:'M1024 430L'+q[0]+' '+q[1],class:'s-line','stroke-width':4,'stroke-dasharray':'8 10'},$('spl'));return mk('circle',{cx:q[0],cy:q[1],r:36,class:'ink'},$('spl'))});
const RP=[0,1,2].map(()=>mk('circle',{cx:960,cy:430,r:64,fill:'none',class:'s-gain','stroke-width':4},$('rip')));
fig($('tf0'),300,420,44,'ink');fig($('f1'),800,420,44,'ink');fig($('f2'),1300,420,44,'ink');
fig($('emp'),260,400,36,'gain');fig($('cust'),560,400,36,'loss');
let sp='';for(let i=0;i<16;i++){const a=i*Math.PI/8,r=i%2?40:56;sp+=(620+1.4*r*Math.cos(a)).toFixed(0)+','+(280+r*Math.sin(a)).toFixed(0)+' '}$('shout').setAttribute('points',sp);
const QP=[690,770,850,930].map(x=>{const g=mk('g',{},$('que'));fig(g,x,430,26,'ink');return g});
const WL=[];for(let k=0;k<2;k++)for(let i=0;i<5;i++){const x=150+k*260,y=330+i*50;WL.push([mk('line',{x1:x,y1:y,x2:x,y2:y,stroke:k?'var(--gain)':'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('wl')),x,[200,160,190,120,170][i]])}
const LR=['Listen to the customer','Acknowledge their complaint','Take action to solve it','Thank them','Explain why it happened'].map((w,i)=>{const y=228+i*100,g=mk('g',{},$('steps'));mk('rect',{x:560,y:y,width:76,height:76,rx:12,class:'gain'},g);
  const a=mk('text',{x:598,y:y+54,'font-size':44,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},g);a.textContent=w[0];
  const b=mk('text',{x:670,y:y+52,'font-size':36,class:'d5'},g);b.textContent=w;return g});
fig($('rp'),260,380,40,'ink');fig($('rp'),520,380,40,'gain');
const BB=[260,520].map(x=>{const g=mk('g',{},$('bub'));mk('rect',{x:x-60,y:240,width:120,height:60,rx:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);for(let j=-1;j<2;j++)mk('circle',{cx:x+j*26,cy:270,r:6,class:'ink'},g);return g});
const RD=[];for(let i=0;i<8;i++){const x=790+i*90;if(i<7)mk('path',{d:'M'+(x+28)+' 400h34',stroke:'var(--line)','stroke-width':4},$('reps'));RD.push(mk('circle',{cx:x,cy:400,r:26},$('reps')))}
const CG=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++)CG.push(mk('rect',{x:1140+c*38,y:680+r*34,width:24,height:24,rx:4,fill:'var(--line)'},$('cgrid')));
const NL=[90,70,85,50].map((w,i)=>[mk('line',{x1:1350,y1:660+i*30,x2:1350,y2:660+i*30,stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('nl')),w]);