const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,fs,cls,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:cls},ex||{}),g);e.textContent=s;return e};
const TD=[];for(let i=0;i<12;i++){const x=1150+(i%4)*94+(i*37)%30,y=250+Math.floor(i/4)*140+(i*53)%40;TD.push([mk('circle',{cx:x,cy:y,r:10,class:'ink'},$('tdots')),x,y,x<1310?1230:1390])}
const VW=['Honesty','Humor','Faith','Fairness','Courage','Family','Growth','Loyalty','Respect','Kindness','Freedom','Learning','Trust','Service','Wisdom','Balance','Curiosity','Patience','Gratitude','Integrity'];
const PW=VW.slice(0,12).map((w,i)=>tx($('pwords'),160+(i%2)*240,350+Math.floor(i/2)*68,w,30,'d5'));
const AR=[];for(let i=0;i<12;i++){const a=i*Math.PI/6+.2,L=150+(i*37)%70,x=1150+L*Math.cos(a),y=470+L*Math.sin(a),g=mk('g',{},$('tangle')),s=i%3?'var(--muted)':'var(--ink)';
  const h=(d)=>(x+20*Math.cos(a+Math.PI+d)).toFixed(1)+' '+(y+20*Math.sin(a+Math.PI+d)).toFixed(1);
  mk('path',{d:'M1150 470L'+x.toFixed(1)+' '+y.toFixed(1)+'M'+h(.45)+'L'+x.toFixed(1)+' '+y.toFixed(1)+'L'+h(-.45),fill:'none',stroke:s,'stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);AR.push(g)}
person($('chp'),780,520,26,'ink');
const GW=VW.map((w,i)=>tx($('grid'),290+(i%4)*340,312+Math.floor(i/4)*100,w,34,'d5',{'text-anchor':'middle'}));
const CI=[0,4,7,9,13,17],KEEP=[4,9];
const rings=CI.map(i=>mk('ellipse',{cx:290+(i%4)*340,cy:300+Math.floor(i/4)*100,rx:140,ry:40,fill:'none',stroke:'var(--gain)','stroke-width':6,pathLength:1,'stroke-dasharray':'1 1'},$('rings')));
const ST=[0,1,2,-1,0,1,2,0,1,-1,2,0];
const FD=ST.map((s,i)=>{const r0=i<7,x=r0?1000+i*60:1030+(i-7)*80,y=r0?290:318;return [mk('circle',{cx:x,cy:y,r:12,class:'ink'},$('fdots')),x,y]});
person($('bfig'),260,320,40,'ink');
const NZ=[];for(let i=0;i<6;i++)NZ.push(mk('path',{fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},$('noise')));
const CK=[];for(let i=0;i<3;i++){const y=380+i*100,g=mk('g',{},$('chks'));mk('circle',{cx:170,cy:y,r:22,class:'gain'},g);
  mk('path',{d:'M160 '+y+'l8 8 14-16',fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  mk('rect',{x:210,y:y-8,width:290-i*60,height:16,rx:8,fill:'var(--line)'},g);CK.push(g)}
person($('mem'),1270,410,30,'gain');
for(let i=0;i<5;i++)person($('meet'),280+i*80,380,22,i===2?'gain':'ink');
mk('ellipse',{cx:440,cy:500,rx:240,ry:60,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},$('meet'));
[0,1,3,4].forEach(i=>{const x=280+i*80;mk('path',{d:'M'+(x-14)+' 336l7-10 7 10 7-10',fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},$('tense'))});
const TP=[];for(let i=0;i<5;i++){const x=960+i*120,g=mk('g',{},$('team'));person(g,x,690,20,'ink');mk('circle',{cx:x-12,cy:650,r:8,class:'gain'},g);mk('circle',{cx:x+12,cy:650,r:8,class:'gain'},g);TP.push(g)}
const K7=[1,7],PB=[],R7=[];for(let i=0;i<10;i++){const x=1210+(i<5?0:110),y=310+(i%5)*56;PB.push(mk('rect',{x:x,y:y,width:90,height:12,rx:6,fill:'var(--ink)'},$('paper')));
  if(K7.includes(i))R7.push(mk('ellipse',{cx:x+45,cy:y+6,rx:60,ry:22,fill:'none',stroke:'var(--gain)','stroke-width':5,pathLength:1,'stroke-dasharray':'1 1'},$('paper')))}