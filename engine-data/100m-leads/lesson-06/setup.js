const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const T=(g,x,y,s,txt,cls,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:cls},ex||{}),g);e.textContent=txt;return e};
const TX=[1180,1300,1420];TX.forEach(x=>fig($('tfig'),x,500,24,'ink'));
const CO=[];for(let i=0;i<6;i++)CO.push(mk('ellipse',{cx:820,cy:620-i*34,rx:100,ry:26,class:'gain',stroke:'var(--ink)','stroke-width':4},$('cstk')));
const CR=[];for(let i=0;i<42;i++)CR.push(mk('circle',{cx:1148+(i%7)*44,cy:340+Math.floor(i/7)*44,r:11,class:i%9==4?'gain':'ink'},$('crw')));
const DR=[420,470,520].map(x=>mk('circle',{cx:x,cy:690,r:9,class:'loss'},$('drips')));
const CE=[];for(let i=0;i<30;i++){const x=124+(i%6)*80,y=304+Math.floor(i/6)*76;CE.push([mk('rect',{x:x,y:y,width:72,height:68,rx:8,stroke:'var(--line)','stroke-width':3},$('cells')),T($('cells'),x+10,y+26,18,String(i+1),'m')])}
const BX=[780,1000,1220,1420],BY=BX.map((x,i)=>{const g=mk('g',{},$('buyers'));fig(g,x,430,26,i?'ink':'gain');T(g,x,595,20,'BUYER '+(i+1),'m',{'text-anchor':'middle'});return g});
// arrows between buyers; each coin sits centred just above its arrow's midpoint
const AW=[0,1,2].map(i=>{const g=mk('g',{},$('arrows')),a=BX[i]+50,b=BX[i+1]-50,mx=(a+b)/2;
  mk('path',{d:'M'+a+' 480H'+b+'m-14-14 14 14-14 14',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  const c=mk('circle',{cx:mx,cy:448,r:14,class:'gain'},g);return [g,c]});
const TI=[];for(let i=0;i<8;i++){const x=120+(i%4)*160,y=240+Math.floor(i/4)*190,o=mk('g',{},$('tiles')),g=mk('g',{},o);
  const r=mk('rect',{x:x,y:y,width:140,height:170,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('rect',{x:x+16,y:y+16,width:108,height:64,rx:6,fill:'var(--line)'},g);T(g,x+16,y+116,18,'AD '+(i+1),'m');
  TI.push([o,g,r,i==7?T(g,x+16,y+150,20,'KEEP','m',{style:'fill:var(--gain)'}):null])}
const TK=[];for(let i=0;i<11;i++){const a=(-135+i*27)*Math.PI/180,s=Math.sin(a),c=-Math.cos(a);TK.push(mk('path',{d:'M'+(1180+168*s).toFixed(1)+' '+(440+168*c).toFixed(1)+'L'+(1180+192*s).toFixed(1)+' '+(440+192*c).toFixed(1),'stroke-width':8,'stroke-linecap':'round'},$('ticks')))}
const AT=[];for(let i=0;i<24;i++)AT.push(mk('circle',{cx:132+i*44,cy:770,r:12,class:i==23?'gain':'ink','fill-opacity':i==23?1:.35},$('tries')));
for(let i=0;i<9;i++)mk('rect',{x:1322+(i%3)*42,y:228+Math.floor(i/3)*32,width:32,height:24,rx:5,fill:i==8?'var(--gain)':'var(--stage)'},$('cbtn'));