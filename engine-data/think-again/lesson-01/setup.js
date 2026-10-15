const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const gp=(ro,ri,n)=>{let s='';for(let i=0;i<n*4;i++){const a=i*Math.PI/(n*2),rr=i%4<2?ro:ri;s+=(rr*Math.cos(a)).toFixed(1)+','+(rr*Math.sin(a)).toFixed(1)+' '}return s};
$('gA').setAttribute('points',gp(72,56,10));$('gB').setAttribute('points',gp(52,38,7));
const RN=['PREACHER','PROSECUTOR','POLITICIAN','SCIENTIST'];
const roles=gid=>RN.map((s,i)=>{const g=mk('g',{},$(gid)),x=120+i*346;const r=mk('rect',{x:x,y:220,width:322,height:56,rx:28,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g);const tx=mk('text',{x:x+161,y:256,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return [g,r,tx]});
const R1=roles('rl1'),R2=roles('rl2'),R3=roles('rl3'),R5=roles('rl5');
function hi(R,i,on){const r=R[i][1],tx=R[i][2],sc=i>2;r.setAttribute('stroke',on?(sc?'var(--gain)':'var(--loss)'):'var(--line)');r.setAttribute('fill',on&&sc?'var(--gain)':'var(--stage)');tx.style.fill=on?(sc?'var(--on-gain)':'var(--loss)'):''}
fig($('pfig'),430,430,42,'ink');
const SW=[420,360,400,240],SL=SW.map((w,i)=>mk('rect',{x:660,y:380+i*40,width:0,height:14,rx:7,class:'ink'},$('slines')));
const QB=[1250,1340,1430].map(x=>{fig($('lis'),x,620,22,'ink');const b=mk('g',{},$('lisq'));mk('rect',{x:x-30,y:520,width:60,height:50,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},b);const q=mk('text',{x:x,y:556,'font-size':32,'text-anchor':'middle',class:'d'},b);q.textContent='?';mk('path',{d:'M'+(x-36)+' 578L'+(x+36)+' 512',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},$('qx'));return b});
fig($('pfig2'),250,440,40,'ink');fig($('dfig'),1000,450,36,'ink');
const CD=['A','B','C','D'].map((s,i)=>{const g=mk('g',{},$('cards')),y=700-i*76;mk('rect',{x:480,y:y,width:360,height:64,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);const tx=mk('text',{x:506,y:y+40,'font-size':22,class:'m'},g);tx.textContent='EXHIBIT '+s;mk('path',{d:'M700 '+(y+32)+'h110',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},g);return g});
fig($('polfig'),330,440,40,'ink');
const CR=[0,1,2].map(r=>{const g=mk('g',{},$('crowd3'));for(let c=0;c<6;c++)fig(g,990+c*92,480+r*90,16,'ink');return g});
const TH=[];for(let c=0;c<6;c++){const x=990+c*92,y=420;TH.push(mk('path',{d:'M'+(x-16)+' '+(y+18)+'v-20h8l8-18a5 5 0 0 1 9 4l-3 12h12a5 5 0 0 1 5 6l-4 16z',class:'gain'},$('thumbs')))}
[[320,'PREACHER'],[800,'PROSECUTOR'],[1280,'POLITICIAN']].forEach(([x,s])=>{fig($('trio'),x,300,34,'ink');const tx=mk('text',{x:x,y:485,'font-size':22,'text-anchor':'middle',class:'m'},$('trio'));tx.textContent=s;
  mk('path',{d:'M'+(x+46)+' 282l12 14 24-28',fill:'none',stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('chk'));
  mk('path',{d:'M'+x+' 500L'+(800+(x-800)*.27)+' 556',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 8'},$('ties'))});
const OM=[[240,650],[330,700],[230,760],[1370,650],[1270,700],[1380,760]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:22,class:'ink'},$('others')));
fig($('sfig'),250,440,40,'gain');
const BB=[[385,7],[400,5],[415,8]].map(q=>mk('circle',{cx:q[0],cy:680,r:q[1],fill:'var(--stage)',stroke:'var(--gain)','stroke-width':3},$('bub5')));
const PP=[[850,390,'HYPOTHESIS'],[1020,560,'TEST'],[850,730,'EVIDENCE'],[680,560,'UPDATE']].map((q,i)=>{const g=mk('g',{},$('pills'));mk('rect',{x:q[0]-110,y:q[1]-28,width:220,height:56,rx:28,fill:i?'var(--stage)':'var(--gain)',stroke:i?'var(--ink)':'var(--gain)','stroke-width':5},g);const tx=mk('text',{x:q[0],y:q[1]+7,'font-size':20,'text-anchor':'middle',class:'m',style:i?'fill:var(--ink)':'fill:var(--on-gain)'},g);tx.textContent=q[2];return g});
const IP=[[230,290],[290,270],[220,360],[280,330],[270,420],[320,400],[310,480],[360,470],[350,540],[400,520],[390,600],[420,560]];
const DT=IP.map(()=>mk('circle',{r:12,class:'ink'},$('dots6')));