const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const bubD=(x,y,w,h,t0)=>{const r=20;return `M${x+r} ${y}h${w-2*r}a${r} ${r} 0 0 1 ${r} ${r}v${h-2*r}a${r} ${r} 0 0 1 -${r} ${r}H${t0+14}l-14 40l-6 -40H${x+r}a${r} ${r} 0 0 1 -${r} -${r}v-${h-2*r}a${r} ${r} 0 0 1 ${r} -${r}z`};
const star=(cx,cy,R,r)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;s+=(cx+q*Math.cos(a)).toFixed(1)+','+(cy+q*Math.sin(a)).toFixed(1)+' '}return s};
const ST={fill:'var(--stage)',stroke:'var(--ink)'};

fig($('tFig'),1320,600,36,'ink');

[0,1,2,3].forEach(i=>{const x=120+i*230,g=$('pz');
  if(i===2){mk('rect',{x:x,y:270,width:210,height:190,rx:16,fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'12 10'},g);return}
  mk('rect',Object.assign({x:x,y:270,width:210,height:190,rx:16,'stroke-width':6},ST),g);
  mk('path',Object.assign({d:`M${x+81} 270a24 24 0 0 1 48 0`,'stroke-width':6},ST),g)});
const SB=['WHAT THEY THINK','WHAT THEY MEAN','WHY THEY ACT'].map((s,i)=>{const x=120+i*460,g=mk('g',{},$('sb'));
  mk('path',Object.assign({d:bubD(x,540,420,100,x+70),'stroke-width':5},ST),g);
  tx(g,x+210,600,s,{class:'m','font-size':22,'text-anchor':'middle'});return g});

for(let i=0;i<3;i++){const x=160+i*200;mk('rect',{x:x,y:268,width:180,height:22,fill:'var(--line)'},$('winM'));mk('rect',{x:x,y:300,width:180,height:140,class:'s-line',fill:'none','stroke-width':4},$('winM'))}
fig($('youF'),640,560,30,'ink'); fig($('strF'),260,560,30,'ink');

fig($('blameF'),950,440,34,'ink'); fig($('blameF'),1320,440,34,'ink');
const PL=['BLAME','REACT','DRAMA'].map((s,i)=>{const x=840+i*220,g=mk('g',{},$('pills'));
  mk('rect',{x:x,y:680,width:190,height:56,rx:28,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  tx(g,x+95,717,s,{class:'m','font-size':22,'text-anchor':'middle',style:'fill:var(--loss)'});return g});

const FA=fig($('cA'),340,470,30,'ink'); fig($('cB'),620,470,30,'ink');
mk('polygon',{points:star(720,272,30,13),class:'gain'},$('starB'));

fig($('self'),330,410,32,'ink'); const RF=fig($('refl'),640,410,32,'ink');

const AK=[0,1,2].map(i=>{const x=140+i*120,g=mk('g',{},$('asks'));
  mk('rect',{x:x,y:545,width:90,height:70,rx:18,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);
  tx(g,x+45,595,'?',{class:'d','font-size':40,'text-anchor':'middle',style:'fill:var(--gain)'});return g});
mk('polygon',{points:star(680,420,50,22),fill:'var(--on-gain)'},$('badgeStar'));
[[1080,440,80],[1180,390,100],[1290,440,80]].forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],class:'loss'},$('storm')));
mk('rect',{x:1080,y:440,width:210,height:80,class:'loss'},$('storm'));
mk('path',{d:'M1195 420l-30 56h30l-22 50',fill:'none',stroke:'var(--stage)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('storm'));
mk('path',{d:'M1060 550l-10 40M1120 550l-10 40M1240 550l-10 40M1300 550l-10 40',class:'s-loss','stroke-width':5,'stroke-linecap':'round'},$('storm'));
[1010,1180,1350].forEach((x,i)=>tx($('storm'),x,i===1?670:650,'STORY',{class:'m','font-size':20,'text-anchor':'middle',style:'fill:var(--loss)'}));
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(1180+92*c).toFixed(1)} ${(430+92*s).toFixed(1)}L${(1180+122*c).toFixed(1)} ${(430+122*s).toFixed(1)}`,class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays'))}

const QS=[];for(let i=0;i<12;i++)QS.push(tx($('qs'),580+(i%4)*130,420+Math.floor(i/4)*90+(i%2)*20,'?',{class:'d','font-size':56,'text-anchor':'middle',style:'fill:var(--loss)'}));
fig($('pAf'),360,470,40,'ink'); fig($('pBf'),1240,470,40,'ink');
mk('path',Object.assign({d:bubD(160,220,400,140,330),'stroke-width':5},ST),$('bA'));
const bAd=tx($('bA'),360,300,'…',{class:'d','font-size':60,'text-anchor':'middle'});
const bAt=mk('g',{},$('bA'));
['WHAT I WANT','WHAT I NEED'].forEach((s,i)=>{mk('circle',{cx:206,cy:272+i*50,r:9,class:'gain'},bAt);tx(bAt,228,280+i*50,s,{class:'m','font-size':24})});
mk('path',Object.assign({d:bubD(1040,220,400,140,1220),'stroke-width':5},ST),$('bB'));
mk('path',{d:'M1100 290l26 26l52-52',fill:'none',class:'s-gain','stroke-width':12,'stroke-linecap':'round','stroke-linejoin':'round'},$('bB'));
tx($('bB'),1210,302,'UNDERSTOOD',{class:'m','font-size':22});

const cal=$('cal');
mk('path',{d:'M1210 596v28M1350 596v28',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},cal);
mk('rect',Object.assign({x:1160,y:610,width:240,height:210,rx:14,'stroke-width':6},ST),cal);
mk('rect',{x:1160,y:610,width:240,height:52,rx:14,class:'ink'},cal);
for(let r=0;r<3;r++)for(let c=0;c<5;c++)mk('rect',{x:1180+c*42,y:680+r*44,width:32,height:32,rx:6,fill:r===1&&c===2?'var(--gain)':'var(--line)',id:r===1&&c===2?'cell':null},cal);
tx(cal,1280,754,'?',{class:'d','font-size':24,'text-anchor':'middle',style:'fill:var(--on-gain)'});