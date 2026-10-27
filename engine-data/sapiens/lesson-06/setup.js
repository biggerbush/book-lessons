const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
fig($('farmF'),260,420,36,'ink');fig($('shoeF'),640,420,36,'ink');
const NN=[];for(let i=0;i<24;i++){const a=i*Math.PI/12;NN.push([1200+190*Math.cos(a),430+190*Math.sin(a)])}
const CHD=[];for(let i=0;i<24;i++)for(let j=i+1;j<24;j++)CHD.push(mk('line',{x1:NN[i][0].toFixed(1),y1:NN[i][1].toFixed(1),x2:NN[j][0].toFixed(1),y2:NN[j][1].toFixed(1),stroke:'var(--loss)','stroke-width':1.5,'stroke-opacity':.55},$('chords')));
NN.forEach(q=>mk('circle',{cx:q[0].toFixed(1),cy:q[1].toFixed(1),r:9,class:'ink'},$('nodes')));
const RG=['AFRICA','SOUTH ASIA','EAST ASIA','OCEANIA'].map((s,i)=>{const x=600+(i%2)*440,y=240+Math.floor(i/2)*80,g=mk('g',{},$('regs'));
  mk('rect',{x:x,y:y,width:420,height:60,rx:30,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:x+210,y:y+39,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
const SH=[];for(let i=0;i<10;i++){const s=(i+.5)/10,x=600+860*s,y=450+120*s*(1-s),g=mk('g',{},$('shls'));
  mk('ellipse',{cx:x.toFixed(1),cy:(y+4).toFixed(1),rx:24,ry:16,class:'gain'},g);mk('path',{d:'M'+(x-14).toFixed(1)+' '+(y+4).toFixed(1)+'h28',stroke:'var(--on-gain)','stroke-width':3,'stroke-linecap':'round'},g);SH.push(g)}
fig($('inmate'),380,400,40,'ink');
for(let i=0;i<7;i++)mk('path',{d:'M'+(215+i*55)+' 240V690',stroke:'var(--ink)','stroke-width':6},$('bars'));
const CX=[820,1000,1180,1360];CX.forEach((x,i)=>fig($('chainP'),x,440,30,i===1?'gain':'ink'));
const DG=[0,1,2,3].map(i=>mk('text',{x:190,y:310+i*44,'font-size':26,class:'m',style:'fill:var(--gain)'},$('digits')));
const LT=[610,672,737].map(y=>mk('circle',{cx:440,cy:y,r:8,class:'gain'},$('lights')));
const WN=[];for(let i=0;i<8;i++){const a=-Math.PI/2+i*Math.PI/4;WN.push([500+230*Math.cos(a),520+230*Math.sin(a)])}
const WL=[];for(let i=0;i<8;i++)for(let j=i+1;j<8;j++)WL.push(mk('line',{x1:WN[i][0].toFixed(1),y1:WN[i][1].toFixed(1),x2:WN[j][0].toFixed(1),y2:WN[j][1].toFixed(1),class:'s-line','stroke-width':3},$('wl')));
WN.forEach((q,i)=>mk('circle',{cx:q[0].toFixed(1),cy:q[1].toFixed(1),r:26,class:i?'ink':'gain'},$('wn')));
// banknote route: around every stranger, back to YOU, then home into the central note
const TR=[0,1,2,3,4,5,6,7,0].map(i=>WN[i]).concat([[500,520]]);
fig($('pplL'),440,440,34,'ink');fig($('pplR'),1160,440,34,'ink');
const PW=[];for(let i=0;i<10;i++){const a=i*Math.PI/5+.3,x=1310+160*Math.cos(a),y=430+160*Math.sin(a),g=mk('g',{},$('pw'));
  mk('path',{d:'M1310 430L'+x.toFixed(1)+' '+y.toFixed(1),class:'s-line','stroke-width':3,'stroke-dasharray':'6 6'},g);mk('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:12,class:'ink'},g);PW.push(g)}
const arcXY=(f,x0,x1,y0,h)=>[x0+(x1-x0)*f,y0-h*Math.sin(Math.PI*f)];