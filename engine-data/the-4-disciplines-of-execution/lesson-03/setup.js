const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const CD=[];for(let i=0;i<6;i++){const g=mk('g',{},$('stack')),w=i===3;
  mk('rect',{x:1180,y:0,width:280,height:58,rx:12,fill:w?'var(--gain)':'var(--stage)',stroke:w?'var(--gain)':'var(--ink)','stroke-width':4},g);
  mk('circle',{cx:1212,cy:29,r:11,fill:'none',stroke:w?'var(--on-gain)':'var(--muted)','stroke-width':4},g);
  mk('path',{d:'M1240 29h'+(170-i*14),stroke:w?'var(--on-gain)':'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);CD.push(g)}
const GP=[.12,.06,.18,.04,.1,.08,.15,.05,.09,.14],GF=[];
for(let i=0;i<10;i++){const c=i>4?1:0,x=150+c*370,y=320+(i%5)*84,g=mk('g',{},$('gl'));
  mk('rect',{x:x,y:y-24,width:26,height:26,rx:5,fill:'none',stroke:'var(--ink)','stroke-width':4},g);
  mk('text',{x:x+42,y:y,'font-size':22,class:'m'},g).textContent='GOAL '+(i+1);
  const ex=mk('text',{x:x+300,y:y+2,'font-size':34,class:'d',style:'fill:var(--gain)'},g);ex.textContent='!';
  mk('rect',{x:x+42,y:y+14,width:260,height:10,rx:5,fill:'var(--line)'},g);
  GF.push([g,mk('rect',{x:x+42,y:y+14,width:0,height:10,rx:5,fill:'var(--gain)'},g),ex])}
// each team member gets their own fan of ten lines, ending on top of their own head (lines pass above the other figures)
[1020,1150,1280,1410].forEach(x=>{for(let j=0;j<10;j++){const ex=x-12+j*2.6;
  mk('path',{d:'M884 '+(240+j*17)+'L'+ex.toFixed(1)+' 426',stroke:'var(--line)','stroke-width':2,'stroke-linecap':'round'},$('thr'))}
  fig($('team'),x,450,22,'ink')});
const SQ=[];[3,10,20].forEach((n,gi)=>{const cx=420+gi*280;for(let k=0;k<n;k++){
  SQ.push([mk('rect',{x:cx-60,y:740-(k+1)*22,width:120,height:18,rx:3,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3,'fill-opacity':gi===1&&k===1?.5:1},$('stk')),gi,k,gi===0||(gi===1&&k<2)])}});
const PL=[];for(let i=0;i<14;i++){const r=i>6?1:0,c=i%7;PL.push([mk('path',{d:$('lp').getAttribute('d'),fill:'var(--muted)'},$('sky')),540+c*136+r*68,250+r*130+((c*37)%3)*14,(i*67)%360])}
const BL=[];for(let i=0;i<18;i++){const x=170+(i%9)*150,y=290+Math.floor(i/9)*130,g=mk('g',{},$('bulbs'));
  const c=mk('circle',{cx:x,cy:y,r:34,fill:'var(--gain)'},g);mk('rect',{x:x-15,y:y+30,width:30,height:24,rx:5,fill:'var(--ink)'},g);BL.push([g,c])}
const TL=[];for(let i=0;i<6;i++){const x=120+i*230,g=mk('g',{},$('tiles'));
  const r=mk('rect',{x:x,y:580,width:200,height:120,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const tx=mk('text',{x:x+100,y:648,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent='AREA '+'ABCDEF'[i];TL.push([g,r,tx])}
const BT=[860,1060,1260].map(x=>{const g=mk('g',{},$('bat'));
  mk('path',{d:'M1150 340L'+(x+90)+' 470',stroke:'var(--line)','stroke-width':4},g);
  mk('rect',{x:x,y:470,width:180,height:70,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('text',{x:x+90,y:513,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent='BATTLE';fig(g,x+90,580,16,'ink');return g});
const gear=(cx,cy,r,n)=>{let d='';for(let j=0;j<n*4;j++){const a=j*Math.PI/(n*2),R=j%4<2?r+12:r;d+=(j?'L':'M')+(cx+R*Math.cos(a)).toFixed(1)+' '+(cy+R*Math.sin(a)).toFixed(1)}
  const g=mk('g',{},$('gr'));mk('path',{d:d+'Z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},g);mk('circle',{cx:cx,cy:cy,r:r*.3,fill:'var(--ink)'},g);return [g,cx,cy,n]};
const GR=[gear(280,560,80,12),gear(430,670,55,8),gear(570,545,65,10)];