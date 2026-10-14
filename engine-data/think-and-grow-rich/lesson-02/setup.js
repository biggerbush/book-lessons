const PER=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const TX=(g,x,y,s,f,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':f,class:'m'},a||{}),g);e.textContent=s;return e};
const LN=(g,d,c,w)=>mk('path',{d:d,class:c,fill:'none','stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1},g);
const DR=(e,k)=>{e.setAttribute('stroke-dasharray','1 1');e.setAttribute('stroke-dashoffset',(1-k).toFixed(3))};
const PI=Math.PI;
let sp='';for(let i=0;i<10;i++){const r=i%2?15:38,a=-PI/2+i*PI/5;sp+=(r*Math.cos(a)).toFixed(1)+','+(r*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:sp,class:'gain'},$('star'));
const SL=[];for(let i=0;i<6;i++){const y=350+i*34,g=mk('g',{},$('slines'));TX(g,1204,y+6,String(i+1),18);mk('path',{d:'M1232 '+y+'h160',class:'s-line','stroke-width':6,'stroke-linecap':'round'},g);SL.push(g)}
[[-90,10,62],[-30,-35,76],[50,-25,70],[105,20,52],[0,35,72]].forEach(c=>mk('circle',{cx:380+c[0],cy:480+c[1],r:c[2],fill:'var(--muted)','fill-opacity':.28},$('fog')));
PER($('cperson'),800,420,30,'ink');
const HV=[];for(let i=0;i<6;i++){const a=-PI/2+i*PI/3;HV.push([1260+140*Math.cos(a),480+140*Math.sin(a)])}
mk('polygon',{points:HV.map(v=>v[0].toFixed(0)+','+v[1].toFixed(0)).join(' '),class:'s-line',fill:'none','stroke-width':4,'stroke-dasharray':'8 10'},$('hex'));
const HX=HV.map((v,i)=>{const w=HV[(i+1)%6];return LN($('hex'),'M'+v[0].toFixed(0)+' '+v[1].toFixed(0)+'L'+w[0].toFixed(0)+' '+w[1].toFixed(0),'s-gain',8)});
const VA=[-2.6,-1.9,-1.1,-.3,.5,2.4].map(a=>{const x=300+110*Math.cos(a),y=700+100*Math.sin(a);mk('circle',{cx:x,cy:y,r:7,class:'loss'},$('varr'));return LN($('varr'),'M300 700L'+x.toFixed(0)+' '+y.toFixed(0),'s-loss',5)});
const TA=[[620,550,1062,626],[620,640,1080,640],[620,730,1096,654]].map(q=>({x0:q[0],y0:q[1],x1:q[2],y1:q[3],l:mk('line',{class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('tarr')),c:mk('circle',{r:9,class:'ink'},$('tarr'))}));
const PO=[0,1].map(()=>mk('line',{class:'s-ink','stroke-width':8,'stroke-linecap':'round'},$('sposts')));
const CHP=['SKILLS','SERVICE','TIME','EFFORT'].map((s,i)=>{const o=mk('g',{},$('chips')),g=mk('g',{},o);mk('rect',{x:-100,y:-44-i*46,width:200,height:40,rx:20,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);TX(g,0,-17-i*46,s,20,{'text-anchor':'middle',style:'fill:var(--ink)'});return [o,g]});
const CW=600/7;for(let d=1;d<=31;d++){const ix=d+1;TX($('cgrid'),160+CW*(ix%7+.5),362+90*Math.floor(ix/7),String(d),22,{'text-anchor':'middle',style:'fill:var(--ink)'})}
for(let r=1;r<5;r++)mk('path',{d:'M170 '+(310+r*90)+'h580',class:'s-line','stroke-width':2},$('cgrid'));
const CD=mk('circle',{cx:160+CW*4.5,cy:625,r:38,class:'s-gain',fill:'none','stroke-width':7,pathLength:1},$('cgrid'));
for(let i=0;i<12;i++){const a=i*PI/6;mk('path',{d:'M'+(1160+152*Math.cos(a)).toFixed(0)+' '+(500+152*Math.sin(a)).toFixed(0)+'L'+(1160+164*Math.cos(a)).toFixed(0)+' '+(500+164*Math.sin(a)).toFixed(0),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('wticks'))}
const RP=mk('path',{d:$('route').getAttribute('d'),fill:'none'},$('wps')),RL=RP.getTotalLength();
[.3,.62].forEach(f=>{const q=RP.getPointAtLength(f*RL);mk('circle',{cx:q.x,cy:q.y,r:12,class:'ink'},$('wps'))});
for(let i=0;i<5;i++)mk('circle',{cx:640+i*80,cy:220,r:10,class:'ink'},$('rings'));
const RW=['AMOUNT','DEADLINE','WHAT I WILL GIVE','MY PLAN'].map((s,i)=>{const y=360+i*110,g=mk('g',{},$('rows'));mk('rect',{x:600,y:y-18,width:18,height:18,class:'gain'},g);TX(g,640,y,s,22,{style:'fill:var(--ink)'});
  let d='M640 '+(y+38);for(let j=0;j<12;j++)d+=j%2?'q15 12 30 0':'q15 -12 30 0';return {g:g,y:y+38,s:LN($('rows'),d,'s-ink',4)}});
PER($('rp'),800,520,34,'ink');
for(let i=0;i<8;i++){const a=i*PI/4;mk('path',{d:'M'+(1300+66*Math.cos(a)).toFixed(0)+' '+(400+66*Math.sin(a)).toFixed(0)+'L'+(1300+90*Math.cos(a)).toFixed(0)+' '+(400+90*Math.sin(a)).toFixed(0),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
const NT=[];for(let i=0;i<6;i++){const y=560+i*34;mk('rect',{x:1244,y:y-14,width:16,height:16,class:'s-ink',fill:'none','stroke-width':3},$('nticks'));mk('path',{d:'M1274 '+(y-6)+'h120',class:'s-line','stroke-width':5,'stroke-linecap':'round'},$('nticks'));NT.push(LN($('nticks'),'M1242 '+(y-8)+'l8 8 14-18','s-gain',5))}