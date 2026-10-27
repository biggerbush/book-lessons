const T=(g,x,y,s,fs,cls,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls||'m'},g);if(a)e.setAttribute('text-anchor',a);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const loopG=(g,cx,cy,R,r)=>{mk('circle',{cx:cx,cy:cy,r:R,fill:'none',stroke:'var(--line)','stroke-width':6},g);return [0,1,2,3,4].map(i=>{const a=-Math.PI/2+i*2*Math.PI/5,x=cx+R*Math.cos(a),y=cy+R*Math.sin(a),n=mk('g',{},g),c=mk('circle',{cx:x,cy:y,r:r,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},n);T(n,x,y+r*.33,i+1,Math.max(18,Math.round(r*.9)),'d','middle');return [n,c,x,y]})};
const dotAt=(el,cx,cy,R,a)=>{el.setAttribute('cx',(cx+R*Math.cos(a)).toFixed(1));el.setAttribute('cy',(cy+R*Math.sin(a)).toFixed(1))};
const N0=loopG($('tl'),1300,440,140,34);T($('tl'),1300,450,'5 STEPS',24,'m','middle');
const N6=loopG($('lp'),420,500,160,34);
const L8=[1310,700,112];
const N8=loopG($('cl'),L8[0],L8[1],L8[2],29);
fig($('fkp'),800,640,20,'ink');
const MI=[0,1,2,3,4,5].map(i=>{const y=330+i*56,g=mk('g',{},$('mnI'));mk('rect',{x:1140,y:y-22,width:28,height:28,rx:5,fill:'none',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M1192 '+(y-8)+'h'+(170+(i*37)%90),stroke:'var(--line)','stroke-width':14,'stroke-linecap':'round'},g);const ck=mk('path',{d:'M1144 '+(y-10)+'l8 10 16-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);return [g,ck]});
fig($('rp'),200,430,20,'ink');
const RK=[[880,760,28],[1040,720,22],[1140,780,16]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],class:'loss'},$('rk')));
fig($('trp'),150,300,16,'ink');
for(let i=0;i<3;i++){const y=565+i*40;mk('path',{d:'M150 '+y+'h150M340 '+y+'h180',stroke:'var(--line)','stroke-width':12,'stroke-linecap':'round'},$('ttr'))}
const PD=[[995,265],[1070,260],[1040,315],[980,330],[1095,330]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:14,class:'loss'},$('pd')));
for(let k=1;k<11;k++)mk('path',{d:'M'+(120+k*40)+' 230v440M120 '+(230+k*40)+'h440',stroke:'var(--line)','stroke-width':1.5},$('bpg'));
const FR=['WHO','WHAT','WHEN'].map((s,i)=>{const x=640+i*290,g=mk('g',{},$('fs'));mk('rect',{x:x,y:230,width:260,height:200,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);T(g,x+130,410,s,22,'m','middle');return g});
fig(FR[0],770,270,22,'ink');
mk('rect',{x:1000,y:280,width:80,height:70,rx:8,class:'gain'},FR[1]);mk('path',{d:'M1092 315h50m-14-14 14 14-14 14',fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},FR[1]);
mk('circle',{cx:1350,cy:320,r:52,fill:'none',stroke:'var(--ink)','stroke-width':5},FR[2]);mk('path',{d:'M1350 320V285M1350 320h26',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},FR[2]);
for(let k=0;k<8;k++)mk('circle',{cx:720+k*100,cy:510,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('nbI'));
const NC=[380,300,420,260].map((w,i)=>{const y=570+i*50;mk('rect',{x:680,y:y-20,width:24,height:24,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':4},$('nbI'));mk('path',{d:'M730 '+(y-8)+'h'+w,stroke:'var(--line)','stroke-width':12,'stroke-linecap':'round'},$('nbI'));return mk('path',{d:'M684 '+(y-10)+'l7 9 14-18',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('nbI'))});
fig($('rg'),250,470,22,'ink');
const LG=mk('path',{fill:'none',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('rg'));
// spiral staircase: treads alternate left and right around the pole, rising evenly
const TR=[];for(let i=0;i<12;i++){const y=730-i*38,L=i%2===0,x1=L?1220:1240,x2=L?1110:1350;TR.push([mk('path',{d:'M'+x1+' '+y+'H'+x2,stroke:'var(--line)','stroke-width':12,'stroke-linecap':'round'},$('st')),(x1+x2)/2,y])}
const HY=[210,150,110,70,30],BX=[],BY=[],BT=[];
['GOALS','PROBLEMS','DIAGNOSE','DESIGN','DO'].forEach((s,i)=>{const x=120+i*276,cx=x+125,g=mk('g',{},$('bx'));mk('rect',{x:x,y:220,width:250,height:100,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,x+24,286,i+1,40,'d');T(g,x+66,280,s,22,'m');BX.push(g);
  mk('rect',{x:cx-55,y:400,width:110,height:220,fill:'none',stroke:'var(--line)','stroke-width':3,'stroke-dasharray':'8 8'},$('bars'));BY.push(mk('rect',{x:cx-55,y:620,width:110,height:0,class:'ink'},$('bars')));BT.push(mk('rect',{x:cx-55,y:620,width:110,height:0,class:'gain'},$('bars')))});