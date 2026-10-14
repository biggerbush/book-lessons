const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const T=(g,x,y,s,cls,txt,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:cls},ex||{}),g);e.textContent=txt;return e};
const BL=[0,1,2].map(i=>{const g=mk('g',{},$('bills'));mk('rect',{x:-60,y:-30,width:120,height:60,rx:8,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);T(g,0,12,34,'d','$',{'text-anchor':'middle',style:'fill:var(--gain)'});return g});
fig($('walker'),420,400,48,'ink');
mk('path',{d:'M398 404q8 8 16 0M426 404q8 8 16 0',fill:'none',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},$('walker'));
mk('path',{d:'M470 520L600 500',class:'s-ink','stroke-width':14,'stroke-linecap':'round'},$('walker'));
const IT=[0,1,2,3].map(i=>{const g=mk('g',{},$('items'));if(i%2===0){mk('rect',{x:-20,y:-56,width:40,height:50,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:'M20 -44h8a9 9 0 0 1 0 18h-8',fill:'none',stroke:'var(--ink)','stroke-width':5},g)}else{mk('circle',{cx:0,cy:-30,r:26,class:'gain'},g);[[-8,-36],[8,-24],[6,-42]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:4,class:'ink'},g))}return g});
const SK=[];for(let i=0;i<30;i++)SK.push(mk('rect',{x:1200+(i%5)*48,y:500-Math.floor(i/5)*44,width:40,height:40,rx:8,class:'loss'},$('stk')));
const WL=[];for(let i=0;i<12;i++){const x=i<6?240:560,y=340+(i%6)*64,len=240-((i*37)%90);mk('path',{d:'M'+x+' '+y+'h240',class:'s-line','stroke-width':3},$('rul'));
  const l=mk('line',{x1:x,y1:y-12,x2:x,y2:y-12,stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('wr'));
  const b=i<6?null:mk('circle',{cx:x-14,cy:y-12,r:6,class:'gain'},$('wr'));WL.push([l,x,y,len,b])}
const AR=['Money','Health','Time'].map((s,i)=>{const g=mk('g',{},$('areas'));const r=mk('rect',{x:960,y:330+i*100,width:440,height:80,rx:40,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);return [g,r,T(g,1000,384+i*100,40,'d5',s)]});
const RI=[];for(let i=0;i<8;i++){const y=300+i*56,g=mk('g',{},$('ritems'));if(i<3)T(g,530,y,22,'m',['PARKING FEE','SNACK','APP SUBSCRIPTION'][i]);else mk('rect',{x:530,y:y-16,width:120+((i*53)%140),height:14,rx:7,fill:'var(--line)'},g);T(g,870,y,26,'d5','$',{'text-anchor':'end'});RI.push(g)}
const rcpt=h=>{let d='M500 230h400v'+h.toFixed(1);for(let k=0;k<10;k++)d+='l-20 14l-20 -14';return d+'z'};
const TL=[];for(let c=0;c<8;c++){const gx=980+(c%4)*120,gy=290+Math.floor(c/4)*120;for(let j=0;j<5;j++)TL.push(mk('path',{d:j<4?'M'+(gx+10+j*20)+' '+gy+'v90':'M'+(gx-4)+' '+(gy+76)+'L'+(gx+84)+' '+(gy+14),class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('tal')))}
const FL=[];for(let i=0;i<9;i++){const y=340+i*52,g=mk('g',{},$('flog'));mk('circle',{cx:570,cy:y-8,r:8,class:['gain','loss'][i]||'ink'},g);if(i<2)T(g,596,y,22,'m',['APPLE','CHIPS, WHILE COOKING'][i]);else mk('rect',{x:596,y:y-15,width:160+((i*71)%220),height:14,rx:7,fill:'var(--line)'},g);FL.push(g)}
fig($('refl'),560,450,40,'ink');mk('rect',{x:530,y:560,width:60,height:44,rx:4,class:'gain'},$('refl'));
for(let k=0;k<7;k++){const a=Math.PI*(1+k/6),c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1100+110*c).toFixed(1)+' '+(380+110*s).toFixed(1)+'L'+(1100+140*c).toFixed(1)+' '+(380+140*s).toFixed(1),class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays'))}
const DG='MTWTFSS'.split('').map((d,c)=>{const g=mk('g',{},$('cal'));T(g,338+c*84,284,22,'m',d,{'text-anchor':'middle'});
  for(let r=0;r<3;r++){const x0=300+c*84,y0=300+r*120;mk('rect',{x:x0,y:y0,width:76,height:110,rx:10,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
    const n=(r===1||c>=5)?3+(r===1&&c>=5?2:0):(c*7+r*3)%3;for(let k=0;k<n;k++)mk('circle',{cx:x0+18+(k%3)*20,cy:y0+30+Math.floor(k/3)*24,r:8,class:'ink'},g)}return g});
for(let k=0;k<12;k++){const a=k*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(300+106*c).toFixed(1)+' '+(450+106*s).toFixed(1)+'L'+(300+120*c).toFixed(1)+' '+(450+120*s).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('tks'))}
const PB=[];for(let i=0;i<7;i++){PB.push(mk('rect',{x:1190,y:290+i*40,width:26,height:26,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('pbx')));mk('rect',{x:1236,y:298+i*40,width:90+((i*29)%40),height:10,rx:5,fill:'var(--line)'},$('pbx'))}