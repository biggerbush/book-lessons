const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const flame=(x,b,h,w)=>'M'+(x-w)+' '+b+'Q'+(x-w*1.2)+' '+(b-h*.55).toFixed(1)+' '+x+' '+(b-h).toFixed(1)+'Q'+(x+w*1.2)+' '+(b-h*.55).toFixed(1)+' '+(x+w)+' '+b+'Z';
// multi-tongue fire silhouette for the burning factory
const fireP=(x,b,h,w)=>{const P=(dx,dy)=>(x+w*dx).toFixed(1)+' '+(b-h*dy).toFixed(1);
  return 'M'+P(-1,0)+'C'+P(-1.3,.35)+' '+P(-1,.6)+' '+P(-.6,.78)+'Q'+P(-.42,.52)+' '+P(-.12,.56)+'Q'+P(-.25,.84)+' '+P(0,1)+'Q'+P(.32,.72)+' '+P(.24,.5)+'Q'+P(.5,.56)+' '+P(.62,.8)+'C'+P(.98,.56)+' '+P(1.3,.34)+' '+P(1,0)+'Z'};
const hsh=i=>{const v=Math.sin(i*12.9898+3.1)*43758.5453;return v-Math.floor(v)};
const drops=(g,xs,stop)=>xs.map((x,i)=>({el:mk('line',{x1:x,x2:x,y1:0,y2:0,class:'s-loss','stroke-width':4,'stroke-linecap':'round'},g),ph:hsh(i),s:stop(x)}));
const fall=(R,y0,t,sp)=>R.forEach(d=>{const y=y0+((t*sp+d.ph)%1)*(d.s-y0+26);const a=Math.max(y0,y-26),b=Math.min(y,d.s);d.el.setAttribute('y1',a.toFixed(1));d.el.setAttribute('y2',b.toFixed(1));d.el.setAttribute('stroke-opacity',b-a>2?1:0)});
const C0=[];for(let c=0;c<9;c++)C0.push(1245+c*21.25);
const R0=drops($('rain0'),C0.concat(C0),x=>600-70*Math.sqrt(Math.max(0,1-((x-1330)/100)**2)));
const C4=[];for(let c=0;c<24;c++)C4.push(180+c*560/23);
const R4=drops($('rain4'),C4,()=>715);
fig($('per0'),1330,690,24,'ink');
fig($('sen'),260,560,46,'ink');
const TEAM=[0,1,2,3,4,5].map(i=>{const a=(30+60*i)*Math.PI/180;return mk('circle',{cx:560+370*Math.cos(a),cy:500+200*Math.sin(a),r:30,class:'ink'},$('team'))});
const PM=[0,1,2].map(i=>{const y=390+i*120,g=mk('g',{},$('pmrows'));const c=mk('circle',{cx:1040,cy:y,r:34,class:'loss'},g);
  const q=mk('text',{x:1040,y:y+14,'font-size':40,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'},g);q.textContent='?';
  const k=mk('path',{d:'M1022 '+y+'l13 14 24-26',fill:'none',stroke:'var(--on-gain)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  const tx=mk('text',{x:1100,y:y+13,'font-size':38,class:'d5'},g);return {g,c,q,k,tx}});
fig($('calm'),460,552,40,'ink');
const WP=[],WIN=[];for(let r=0;r<2;r++)for(let c=0;c<4;c++){const x=235+c*105,y=570+r*100;WP.push([x,y]);WIN.push(mk('rect',{x:x,y:y,width:60,height:50,rx:4},$('win')))}
// fires: roof tongues, chimney, windows (outer amber + pale inner core)
const mkFire=(g,x,b,h,w)=>({o:mk('path',{class:'gain'},g),i:mk('path',{fill:'var(--stage)','fill-opacity':.5},g),x,b,h,w});
const FL=[245,335,425,515,605].map((x,i)=>mkFire($('fl'),x,484,i%2?260:215,54));
FL.push(mkFire($('fl'),685,424,160,32));
const WF=WP.map(q=>mkFire($('wfl'),q[0]+30,q[1]+50,78,26));
const SMK=[];for(let i=0;i<11;i++)SMK.push(mk('circle',{r:20,fill:'var(--loss)'},$('smk')));
const ed=mk('g',{},$('ed'));fig(ed,950,540,34,'ink');fig(ed,1100,580,26,'ink');
const BR=[];for(let r=0;r<4;r++)for(let c=0;c<4;c++)BR.push(mk('rect',{x:1190+c*64+(r%2)*32,y:760-(r+1)*34,width:58,height:28,rx:3,class:'gain'},$('br')));
const FF=[0,1,2].map(()=>mk('path',{class:'gain'},$('flm')));
const OB=[0,1,2].map(()=>mk('rect',{rx:6},$('obs')));
for(let i=0;i<8;i++)mk('circle',{cx:160,cy:270+i*72,r:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
const NR=[0,1,2].map(i=>{const y=400+i*140,a=mk('g',{},$('nrows')),b=mk('g',{},$('nrows'));
  mk('circle',{cx:250,cy:y,r:24,class:'loss'},a);const n=mk('text',{x:250,y:y+9,'font-size':24,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'},a);n.textContent=i+1;
  mk('path',{d:'M300 '+y+'h260',class:'s-loss','stroke-width':10,'stroke-linecap':'round'},a);mk('path',{d:'M300 '+(y+36)+'h170',class:'s-line','stroke-width':6,'stroke-linecap':'round'},a);
  mk('path',{d:'M630 '+y+'h290',class:'s-gain','stroke-width':10,'stroke-linecap':'round'},b);mk('path',{d:'M630 '+(y+36)+'h200',class:'s-line','stroke-width':6,'stroke-linecap':'round'},b);
  return [a,b]});