const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const swirl=(par,cx,cy,rs)=>{const g=mk('g',{},par);rs.forEach((r,i)=>mk('ellipse',{cx:cx,cy:cy,rx:r,ry:r*.62,fill:'none',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round','stroke-dasharray':(r*.9).toFixed(0)+' '+(r*.5).toFixed(0),transform:'rotate('+(i*40)+' '+cx+' '+cy+')'},g));return g};
const spin=(el,cx,cy,a,s=1)=>el.setAttribute('transform','translate('+cx+' '+cy+') rotate('+a.toFixed(1)+') scale('+s.toFixed(3)+') translate('+(-cx)+' '+(-cy)+')');
const txt=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
swirl($('tsw'),1330,480,[150,110,70]);
fig($('ldr'),280,420,34,'gain');mk('path',{d:'M330 500L420 450',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('ldr'));
for(let i=0;i<6;i++){const x=480+i*100;fig($('aud'),x,670,22,'ink');mk('path',{d:'M'+(x-18)+' 625l-8-12M'+x+' 620v-14M'+(x+18)+' 625l8-12',class:'s-gain','stroke-width':4,'stroke-linecap':'round'},$('spk'))}
for(let r=0;r<3;r++)for(let c=0;c<5;c++)mk('rect',{x:1150+c*62,y:360+r*70,width:40,height:40,rx:6,fill:'var(--line)'},$('cgrid'));
const ENV=[];for(let i=0;i<8;i++){const g=mk('g',{},$('env')),x=160+((i*37)%5-2)*8,y=660-i*56;
  mk('rect',{x:x,y:y,width:220,height:48,rx:6,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);
  mk('path',{d:'M'+x+' '+y+'l110 26l110-26',fill:'none',stroke:'var(--loss)','stroke-width':4},g);ENV.push(g)}
const WK=[0,1,2,3,4].map(i=>{const x=780+i*155,g=mk('g',{},$('wk')),b=mk('g',{transform:'translate('+x+' 420) scale('+(1-i*.17).toFixed(2)+')',opacity:(1-i*.2).toFixed(2)},g);
  mk('rect',{x:-65,y:-45,width:130,height:90,rx:18,fill:'var(--stage)',stroke:i<4?'var(--ink)':'var(--muted)','stroke-width':5,'stroke-dasharray':i<4?'none':'8 8'},b);
  if(i<4)txt(b,'GOAL',{y:12,'font-size':32,'text-anchor':'middle',class:'d'});
  txt(g,'WEEK '+(i+1),{x:x,y:540,'font-size':20,'text-anchor':'middle',class:'m'});return g});
const FN=[];for(let i=0;i<8;i++){const r=260-i*30;FN.push(mk('ellipse',{cx:520,cy:300+i*55,rx:r,ry:r*.2,fill:'none',stroke:'var(--loss)','stroke-width':6},$('funnel')))}
const GR=[[930,600,70],[1060,520,50]].map(([x,y,r])=>{const g=mk('g',{},$('gears')),d=(Math.PI*r/10).toFixed(1);
  mk('circle',{cx:x,cy:y,r:r,fill:'none',stroke:'var(--ink)','stroke-width':22,'stroke-dasharray':d+' '+d},g);
  mk('circle',{cx:x,cy:y,r:r-14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  mk('circle',{cx:x,cy:y,r:r*.25,class:'ink'},g);return [g,x,y]});
fig($('cust'),630,588,22,'ink');
mk('ellipse',{cx:1120,cy:490,rx:300,ry:110,fill:'none',stroke:'var(--line)','stroke-width':4,'stroke-dasharray':'10 10'},$('borb'));
const ORB=[0,1,2,3,4,5].map(()=>mk('circle',{r:14,class:'loss'},$('borb')));
const PP=[];for(let i=0;i<12;i++){const g=mk('g',{},$('ppl'));fig(g,960+(i%4)*130,330+Math.floor(i/4)*120,20,'ink');PP.push(g)}
const SWC=[1160,475];
const SWL=swirl($('swal'),SWC[0],SWC[1],[165,120,75]);
fig($('vic'),800,380,40,'ink');
const STX=[[1130,1350],[1145,1335]];