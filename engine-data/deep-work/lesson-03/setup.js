const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const T=(g,x,y,s,fs,cls,st,anc)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':anc||'start'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const env=(g,x,y,w,h,col)=>{mk('rect',{x:x,y:y,width:w,height:h,rx:4,fill:'var(--stage)',stroke:col,'stroke-width':4},g);mk('path',{d:'M'+x+' '+y+'l'+w/2+' '+h*.55+'l'+w/2+' '+(-h*.55),fill:'none',stroke:col,'stroke-width':4,'stroke-linejoin':'round'},g)};
fig($('tfig'),1290,500,30,'ink');
const D=[0,1,2,3].map(i=>{const c=290+i*340,g=mk('g',{},$('doors'));const r=mk('rect',{x:c-110,y:240,width:220,height:360,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  T(g,c,400,i+1,96,'d','','middle');mk('circle',{cx:c+72,cy:440,r:10,class:'ink'},g);
  T(g,c,652,['MONASTIC','BIMODAL','RHYTHMIC','JOURNALISTIC'][i],26,'m','font-size:26px;fill:var(--ink);font-weight:700;letter-spacing:.06em','middle');return [g,r]});
const PL=['Your job','Your family','Your freedom'].map((s,i)=>{const g=mk('g',{},$('pills'));mk('rect',{x:120+i*460,y:720,width:440,height:80,rx:40,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);T(g,340+i*460,772,s,34,'d5','','middle');return g});
const EV=[];for(let i=0;i<8;i++){const g=mk('g',{},$('envs'));env(g,-30,-20,60,40,'var(--muted)');EV.push([g,(i+.5)*Math.PI/4])}
fig($('monk'),460,450,34,'gain');
fig($('jung'),0,470,20,'gain');
const CE=[];for(let i=0;i<7;i++){const g=mk('g',{},$('cells')),x=120+i*194,dp=i===4||i===5;mk('rect',{x:x,y:680,width:180,height:60,rx:10,fill:dp?'var(--gain)':'var(--line)'},g);T(g,x+90,717,dp?'DEEP':'SHALLOW',dp?20:18,'m',dp?'fill:var(--on-gain)':'','middle');CE.push(g)}
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(300+118*s).toFixed(1)+' '+(400-118*c).toFixed(1)+'L'+(300+132*s).toFixed(1)+' '+(400-132*c).toFixed(1),class:'s-ink','stroke-width':4},$('ticks'))}
const XM=[];for(let k=0;k<28;k++){const x=770+(k%7)*100,y=300+Math.floor(k/7)*80;mk('rect',{x:x,y:y,width:100,height:80,fill:'none',class:'s-line','stroke-width':3},$('cal'));if(k<20)XM.push(mk('path',{d:'M'+(x+30)+' '+(y+20)+'l40 40m0-40l-40 40',class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('xs')))}
[[120,180],[400,220],[720,200],[1020,180],[1300,180]].forEach(q=>{mk('rect',{x:q[0],y:300,width:q[1],height:100,rx:8,class:'loss','fill-opacity':.3},$('day'));T($('day'),q[0]+q[1]/2,358,'SHALLOW',20,'m','','middle')});
const GP=[300,620,920,1200].map(x=>{const g=mk('g',{},$('day'));mk('rect',{x:x+6,y:300,width:88,height:100,rx:8,class:'gain'},g);T(g,x+50,357,'DEEP',20,'m','fill:var(--on-gain)','middle');return g});
const PG=[];for(let i=0;i<6;i++)PG.push(mk('path',{d:'M1290 '+(480+i*28)+'h120',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('pg')));
const TK=[];for(let i=0;i<3;i++){const y=340+i*70;mk('rect',{x:205,y:y,width:30,height:30,rx:6,class:'gain'},$('rows'));mk('path',{d:'M250 '+(y+15)+'h100',class:'s-line','stroke-width':8,'stroke-linecap':'round'},$('rows'));TK.push(mk('path',{d:'M211 '+(y+15)+'l7 8 12-15',fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round'},$('rows')))}
const QS=[[140,300],[430,290],[150,520],[440,500],[300,690]].map(q=>T($('qs'),q[0],q[1],'?',64,'d','fill:var(--loss)','middle'));
for(let r=0;r<3;r++)for(let i=0;i<5;i++){const h=46+((i*3+r)%3)*8;mk('rect',{x:552+i*28,y:409+r*73-h,width:20,height:h,fill:i%2?'var(--gain)':'var(--ink)'},$('sp'))}
fig($('walker'),1360,420,20,'ink');
const SCR=[0,1,2].map(i=>mk('path',{d:'M1240 '+(604+i*70)+'h170',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':170},$('scr')));
const arcD=(cx,cy,r,deg)=>{if(deg<1)return 'M0 0';const a=deg*Math.PI/180;return 'M'+cx+' '+cy+'V'+(cy-r)+'A'+r+' '+r+' 0 '+(deg>180?1:0)+' 1 '+(cx+r*Math.sin(a)).toFixed(1)+' '+(cy-r*Math.cos(a)).toFixed(1)+'Z'};