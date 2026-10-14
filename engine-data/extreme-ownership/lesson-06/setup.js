const P=(g,x,y,r,cls)=>{const a=cls?{class:cls}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g);return g};
const T=(g,x,y,s,fs,cls,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':'middle'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
P($('boss'),1320,380,40,'ink');
const ASK=[1200,1320,1440].map(x=>{const g=mk('g',{fill:'var(--ink)'},$('asks'));P(g,x,640,18);return [g,T($('asks'),x,600,'?',40,'d','fill:var(--loss)')]});
// crowd: compact grid (y 260-680), wires start just outside the dashed 6-10 ring
const CW=[],CD=[];for(let i=0;i<48;i++){const x=760+(i%8)*88,y=260+Math.floor(i/8)*84,a=Math.atan2(y-520,x-360),sx=360+210*Math.cos(a),sy=520+210*Math.sin(a);
  CW.push(mk('path',{d:'M'+sx.toFixed(0)+' '+sy.toFixed(0)+'L'+(x-14*Math.cos(a)).toFixed(0)+' '+(y-14*Math.sin(a)).toFixed(0),class:'s-line','stroke-width':2,'stroke-linecap':'round'},$('wires')));
  CD.push(mk('circle',{cx:x,cy:y,r:14,class:'ink'},$('crd')))}
for(let k=0;k<8;k++){const a=k*Math.PI/4,x=360+120*Math.cos(a),y=520+120*Math.sin(a);mk('path',{d:'M360 520L'+x.toFixed(0)+' '+y.toFixed(0),class:'s-gain','stroke-width':3},$('inner'));mk('circle',{cx:x,cy:y,r:16,class:'ink'},$('inner'))}
const OF=[[0,-28],[-28,8],[28,8],[0,36]],MB=[];
for(let i=0;i<4;i++){const x=320+320*i;mk('circle',{cx:x,cy:620,r:62,class:'s-line',fill:'none','stroke-width':4,'stroke-dasharray':'8 8'},$('ft'));T($('ft'),x,716,'FIRE TEAM',20,'m')}
for(let i=0;i<16;i++)MB.push(mk('circle',{r:14,class:'ink'},$('mem')));
for(let i=0;i<4;i++)for(let j=0;j<4;j++)mk('rect',{x:120+i*160,y:230+j*140,width:120,height:100,rx:6,fill:'var(--line)'},$('map'));
const FO=[[580,350],[260,630],[580,630],[260,350],[260,490]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:10,class:'loss'},$('foes')));
const SDA=['SEE','DECIDE','ACT'].map((s,i)=>{const x=800+i*240,g=mk('g',{},$('sda'));mk('rect',{x:x,y:560,width:190,height:80,rx:40,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);T(g,x+95,610,s,26,'m','fill:var(--ink)');
  if(i<2)mk('path',{d:'M'+(x+198)+' 600h34m-12-12 12 12-12 12',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
P($('kp'),220,600,22);
const AL=$('adp').getTotalLength();$('adp').setAttribute('stroke-dasharray',AL);
for(let x=320;x<=1280;x+=96){mk('circle',{cx:x,cy:250,r:9,class:'ink'},$('posts'));mk('circle',{cx:x,cy:700,r:9,class:'ink'},$('posts'))}
for(let y=340;y<700;y+=90){mk('circle',{cx:320,cy:y,r:9,class:'ink'},$('posts'));mk('circle',{cx:1280,cy:y,r:9,class:'ink'},$('posts'))}
const FD=[[560,370],[1040,370],[520,610],[1060,610],[660,470]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:18},$('fdots')));
P($('snr'),300,460,36);P($('jnr'),900,460,36);
[[1180,360],[1400,360],[1180,560],[1400,560]].forEach(q=>{for(let k=0;k<3;k++)mk('circle',{cx:q[0]+(k-1)*30,cy:q[1]+(k%2)*20,r:12,class:'ink'},$('bpc'))});
mk('path',{d:'M1290 490V420',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('bpc'));mk('path',{d:'M1290 420l44 14-44 14z',class:'gain'},$('bpc'));
P($('ofp'),320,420,30);P($('ofp'),1060,420,30);P($('cust'),1390,420,30);
for(let r=0;r<4;r++)for(let c=0;c<5;c++)mk('rect',{x:1200+c*48,y:320+r*42,width:30,height:26,rx:4,fill:(r===1&&c===2)?'var(--gain)':'var(--line)'},$('days'));