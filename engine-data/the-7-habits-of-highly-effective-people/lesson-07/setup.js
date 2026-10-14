const guy=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const Z=(a,b,y,h,w)=>{let d='M'+a+' '+y;for(let x=a;x+w<=b+.1;x+=w)d+='l'+w/2+' '+h+'l'+w/2+' '+(-h);return d};
const star=(cx,cy,R,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
$('teeth0').setAttribute('d',Z(1068,1380,350,22,24));
guy($('pp0'),1150,560,30,'ink');guy($('pp0'),1390,560,30,'gain');
const W1=[480,400,320].map(y=>mk('rect',{x:390,y:y,width:140,height:80,rx:6,fill:'var(--line)',stroke:'var(--ink)','stroke-width':5},$('wts')));
const SAME=[],ORIG=[];
for(let i=0;i<5;i++){const x=180+i*110,g=$('row2');guy(g,x,380,24,i?'ink':'gain');const s=mk('rect',{x:x-14,y:290,width:28,height:28,class:i?'ink':'gain'},g);
  if(i){SAME.push(s);ORIG.push(mk(i%2?'circle':'path',i%2?{cx:x,cy:304,r:15,class:'ink'}:{d:'M'+x+' 288l16 30h-32z',class:'ink'},g))}}
guy($('see2'),880,500,30,'ink');guy($('see2'),1400,500,30,'ink');
const star2=mk('path',{d:star(1140,500,44,20),class:'gain'},$('idea2'));
guy($('cp3'),420,450,30,'ink');guy($('cp3'),1180,450,30,'ink');
for(let r=0;r<3;r++)for(let c=0;c<4;c++)mk('circle',{cx:1058+c*28,cy:284+r*22,r:6,fill:r==1&&c==2?'var(--loss)':'var(--muted)'},$('cal3'));
guy($('cal3'),1250,255,14,'ink');
guy($('side4'),760,690,18,'ink');guy($('side4'),840,690,18,'ink');
[-155,-120,-60,-25].forEach(d=>{const a=d*Math.PI/180;mk('path',{d:'M'+(800+58*Math.cos(a)).toFixed(1)+' '+(270+58*Math.sin(a)).toFixed(1)+'L'+(800+76*Math.cos(a)).toFixed(1)+' '+(270+76*Math.sin(a)).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('ray4'))});
guy($('wcp5'),440,637,34,'ink');
const DR=[[380,585],[362,622],[395,552]].map(q=>mk('path',{d:'M'+q[0]+' '+q[1]+'c-8 12-10 20 0 22c10-2 8-10 0-22z',class:'loss'},$('sw5')));
const T5s=Z(606,936,724,20,22),T5d=Z(606,936,724,6,22);
guy($('pb5'),1250,637,34,'gain');
const C6=[['BODY',['EXERCISE','GOOD FOOD','REST']],['MIND',['READING · LEARNING','WRITING · PLANNING']],['HEART',['RELATIONSHIPS']],['SPIRIT',['VALUES · NATURE','REFLECTION · PRAYER']]];
const IC=[
 c=>[['path',{d:`M${c-60} 400h120`,class:'s-ink','stroke-width':14}],['rect',{x:c-84,y:360,width:26,height:80,rx:6,class:'ink'}],['rect',{x:c+58,y:360,width:26,height:80,rx:6,class:'ink'}]],
 c=>[['path',{d:`M${c} 370c-30-20-70-20-90-10v90c20-10 60-10 90 10c30-20 70-20 90-10v-90c-20-10-60-10-90 10z`,class:'ink'}],['path',{d:`M${c} 370v90`,stroke:'var(--stage)','stroke-width':4}]],
 c=>[['path',{d:`M${c} 450C${c-100} 390 ${c-80} 330 ${c-40} 335C${c-15} 338 ${c} 355 ${c} 365C${c} 355 ${c+15} 338 ${c+40} 335C${c+80} 330 ${c+100} 390 ${c} 450Z`,class:'ink'}]],
 c=>[['circle',{cx:c,cy:400,r:56,class:'s-ink',fill:'none','stroke-width':7}],['path',{d:`M${c} 352l16 48-16 48-16-48z`,class:'gain'}]]];
const cards6=[],seg6=[];
C6.forEach((cd,i)=>{const x=120+i*346,c=x+160,g=mk('g',{},$('cards6'));
  mk('rect',{x:x,y:240,width:320,height:500,rx:18,fill:'var(--stage)',class:'s-line','stroke-width':3},g);
  IC[i](c).forEach(e=>mk(e[0],e[1],g));
  const tt=mk('text',{x:c,y:560,'font-size':48,'text-anchor':'middle',class:'d'},g);tt.textContent=cd[0];
  cd[1].forEach((s,k)=>{const l=mk('text',{x:c,y:620+k*32,'font-size':20,'text-anchor':'middle',class:'m'},g);l.textContent=s});
  cards6.push(g);seg6.push(mk('path',{d:Z(x+4,x+324,804,18,20),fill:'none','stroke-width':5,'stroke-linejoin':'round'},$('teeth6')))});
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(360+128*Math.sin(a)).toFixed(1)+' '+(450-128*Math.cos(a)).toFixed(1)+'L'+(360+142*Math.sin(a)).toFixed(1)+' '+(450-142*Math.cos(a)).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('tick7'))}
const HX=1150,HR=220,HRY=40,HY0=740,HH=450,HA0=Math.PI/2,HA1=7*Math.PI,HN=390;
const HP=[],HL=[0];
for(let i=0;i<=HN;i++){const a=HA0+(HA1-HA0)*i/HN,s=i/HN;HP.push([HX+HR*Math.cos(a),HY0-HH*s+HRY*Math.sin(a),Math.sin(a)>=0]);
  if(i)HL.push(HL[i-1]+Math.hypot(HP[i][0]-HP[i-1][0],HP[i][1]-HP[i-1][1]))}
const HRUN=[];{let st=0;for(let i=1;i<=HN;i++){if(HP[i][2]!==HP[st][2]||i===HN){HRUN.push({f:HP[st][2],i0:st,i1:i});st=i}}}
const hpts=(r,n)=>{const e=Math.min(r.i1,n);if(e-r.i0<1)return '';let s='';for(let i=r.i0;i<=e;i++)s+=HP[i][0].toFixed(1)+','+HP[i][1].toFixed(1)+' ';return s};
const GR7=[];
HRUN.filter(r=>!r.f).forEach(r=>mk('polyline',{points:hpts(r,HN),fill:'none',stroke:'var(--line)','stroke-width':5,'stroke-dasharray':'10 10','stroke-linecap':'round'},$('spb7')));
HRUN.filter(r=>!r.f).forEach(r=>GR7.push([r,mk('polyline',{fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 10','stroke-linecap':'round','stroke-opacity':.75},$('spb7'))]));
HRUN.filter(r=>r.f).forEach(r=>mk('polyline',{points:hpts(r,HN),fill:'none',stroke:'var(--line)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('spf7')));
HRUN.filter(r=>r.f).forEach(r=>GR7.push([r,mk('polyline',{fill:'none',stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('spf7'))]));
const hidx=L=>{let i=0;while(i<HN&&HL[i]<L)i++;return i};
const D7=[];for(let k=0;k<7;k++){const i=hidx(HL[HN]*(k+.5)/7),q=HP[i];D7.push([i,mk('circle',{cx:q[0].toFixed(1),cy:q[1].toFixed(1),r:12,stroke:'var(--ink)','stroke-width':4},$('dots7'))])}
mk('path',{d:star(1250,530,30,13),class:'gain'},$('venn8'));