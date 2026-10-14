const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const CK=[[-.45,-.3],[.3,-.5],[.05,.05],[-.3,.45],[.45,.3]];
const cookie=(g,x,y,r)=>{mk('circle',{cx:x,cy:y,r:r,class:'gain'},g);CK.forEach(c=>mk('circle',{cx:x+c[0]*r,cy:y+c[1]*r,r:r*.11,class:'ink'},g));return g};
const txt=(g,x,y,s,fs,cls,anc,sty)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':anc||'start'},g);if(sty)e.setAttribute('style',sty);e.textContent=s;return e};
const PZ=[0,1,2,3].map(k=>{const a0=k*Math.PI/2,a1=a0+Math.PI/2,am=a0+Math.PI/4,cx=1240,cy=370,R=150,g=mk('g',{},$('pz'));
  mk('path',{d:'M'+cx+' '+cy+'L'+(cx+R*Math.cos(a0)).toFixed(1)+' '+(cy+R*Math.sin(a0)).toFixed(1)+'A'+R+' '+R+' 0 0 1 '+(cx+R*Math.cos(a1)).toFixed(1)+' '+(cy+R*Math.sin(a1)).toFixed(1)+'Z',class:'gain',stroke:'var(--stage)','stroke-width':8,'stroke-linejoin':'round'},g);
  [[115,am-.4],[115,am+.4],[42,am]].forEach(c=>mk('circle',{cx:cx+c[0]*Math.cos(c[1]),cy:cy+c[0]*Math.sin(c[1]),r:11,class:'ink'},g));
  txt(g,cx+85*Math.cos(am),cy+85*Math.sin(am)+14,String([3,4,1,2][k]),40,'d','middle','fill:var(--on-gain)');
  return [g,Math.cos(am),Math.sin(am)]});
const WK=mk('g',{},$('walker'));fig(WK,0,0,24,'gain');
[1300,1400].forEach(x=>fig($('cols'),x,450,24,'ink'));
cookie($('ck1'),1080,562,36);
const ST=['Get up','Walk over','Buy cookie','Chat'].map((s,i)=>{const x=120+i*350,g=mk('g',{},$('steps'));
  mk('rect',{x:x,y:330,width:290,height:120,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);txt(g,x+145,402,s,34,'d5','middle');
  if(i<3)mk('path',{d:'M'+(x+300)+' 390h40m-14-14 14 14-14 14',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
for(let i=0;i<3;i++)mk('rect',{x:120+i*280,y:280,width:250,height:300,rx:16,fill:'none',stroke:'var(--line)','stroke-width':4,'stroke-dasharray':'10 10'},$('slots'));
const PW=[0,1,2].map(i=>{const y=370+i*65,g=mk('g',{},$('pw'));txt(g,1025,y,(i+1)+'.',22,'m');mk('path',{d:'M1060 '+y+'h130',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},g);return g});
cookie($('ck3'),150,705,32);
fig($('palf'),260,360,34,'gain');fig($('palf'),480,360,34,'ink');
cookie($('ck4'),850,430,90);
const CX=[200,500,800,1100,1400],LB=['WHERE?','WHEN?','MOOD?','WHO?','JUST DID?'];let HH,MH;
const sk=(g,d)=>mk('path',{d:d,fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
const CU=CX.map((x,i)=>{mk('circle',{cx:x,cy:380,r:80,fill:'none',stroke:'var(--line)','stroke-width':4,'stroke-dasharray':'10 10'},$('cuesl'));
  const g=mk('g',{},$('cues')),ring=mk('circle',{cx:x,cy:380,r:80,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  if(i===0){mk('path',{d:'M'+x+' 425c-34-40-40-58-40-74a40 40 0 0 1 80 0c0 16-6 34-40 74z',class:'ink'},g);mk('circle',{cx:x,cy:350,r:13,fill:'var(--stage)'},g)}
  if(i===1){mk('circle',{cx:x,cy:380,r:46,fill:'none',stroke:'var(--ink)','stroke-width':6},g);HH=sk(g,'M'+x+' 380v-24');MH=sk(g,'M'+x+' 380v-36')}
  if(i===2){mk('circle',{cx:x,cy:380,r:46,fill:'none',stroke:'var(--ink)','stroke-width':6},g);mk('circle',{cx:x-16,cy:368,r:6,class:'ink'},g);mk('circle',{cx:x+16,cy:368,r:6,class:'ink'},g);sk(g,'M'+(x-18)+' 398h36')}
  if(i===3){fig(g,x-24,350,13,'ink');fig(g,x+24,350,13,'ink')}
  if(i===4)sk(g,'M'+(x+36)+' 410V375a20 20 0 0 0-20-20H'+(x-36)+'m18-18-18 18 18 18');
  txt(g,x,510,LB[i],22,'m','middle');return [g,ring]});
mk('path',{d:'M200 720H1400',stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},$('tl'));
['12PM','1PM','2PM','3PM','4PM','5PM','6PM'].forEach((s,i)=>{mk('path',{d:'M'+(200+i*200)+' 712v16',stroke:'var(--ink)','stroke-width':4},$('tl'));txt($('tl'),200+i*200,760,s,20,'m','middle')});
const DT=[892,906,896,908,900].map((x,i)=>mk('circle',{cx:x,cy:684-i*32,r:13,class:'gain'},$('dots')));
[[1140,280,'CUE','3:30'],[1287,535,'ROUTINE','TALK'],[993,535,'REWARD','BREAK']].forEach(n=>{mk('circle',{cx:n[0],cy:n[1],r:64,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':6},$('nodes'));txt($('nodes'),n[0],n[1]-6,n[2],18,'m','middle');txt($('nodes'),n[0],n[1]+28,n[3],28,'d','middle')});
const RW=['Name the routine.','Test rewards to find the craving.','Spot the cue.','Plan your new response.'].map((s,i)=>{const y=300+i*120,g=mk('g',{},$('rows'));
  mk('path',{d:'M480 530L568 '+(y-14),fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},g);
  mk('circle',{cx:600,cy:y-14,r:32,class:'gain'},g);txt(g,600,y-2,String(i+1),34,'d','middle','fill:var(--on-gain)');txt(g,660,y,s,40,'d');return g});
fig($('mirf'),1300,380,36,'gain');
let cxp=143;const CHP=['PLACE','TIME','MOOD','PEOPLE','WHAT JUST HAPPENED'].map(s=>{const w=s.length*15+40,g=mk('g',{},$('chk'));
  const r=mk('rect',{x:cxp,y:600,width:w,height:56,rx:28,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);const tx=txt(g,cxp+w/2,635,s,20,'m','middle');cxp+=w+20;return [g,r,tx]});