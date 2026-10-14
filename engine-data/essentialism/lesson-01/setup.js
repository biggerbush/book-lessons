const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const arr=(x1,y1,x2,y2,h)=>{const a=Math.atan2(y2-y1,x2-x1),f=n=>n.toFixed(1);return 'M'+f(x1)+' '+f(y1)+'L'+f(x2)+' '+f(y2)+'M'+f(x2-h*Math.cos(a-.5))+' '+f(y2-h*Math.sin(a-.5))+'L'+f(x2)+' '+f(y2)+'L'+f(x2-h*Math.cos(a+.5))+' '+f(y2-h*Math.sin(a+.5))};
const star=(cx,cy,R)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?R*.45:R;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'z'};
const ln=(d,c,w,g,x={})=>mk('path',Object.assign({d:d,class:c,'stroke-width':w,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},x),g);
const tx=(s,a,g)=>{const e=mk('text',a,g);e.textContent=s;return e};

fig($('t_fig'),1220,560,26,'ink');
const TS=[];for(let i=0;i<12;i++){const a=i*Math.PI/6+.26;TS.push(ln(arr(1220+72*Math.cos(a),400+72*Math.sin(a),1220+104*Math.cos(a),400+104*Math.sin(a),12),'s-loss',5,$('t_sc')))}

fig($('jug'),380,560,40,'ink');ln('M335 650L280 560M425 650L480 560','s-ink',10,$('jug'));
const BL=[];for(let i=0;i<12;i++)BL.push(mk('circle',{r:16,class:i%3?'loss':'ink'},$('balls')));
const YS=[0,1,2].map(i=>{const g=mk('g',{},$('yes'));mk('rect',{x:640,y:280+i*100,width:130,height:56,rx:28,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);tx('YES',{x:705,y:317+i*100,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--loss)'},g);return g});
['MON','TUE','WED','THU','FRI'].forEach((s,c)=>tx(s,{x:918+c*116,y:278,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--stage)'},$('cells')));
const CL=[];for(let r=0;r<6;r++)for(let c=0;c<5;c++)CL.push(mk('rect',{x:866+c*116,y:306+r*58,width:104,height:48,rx:6,class:'loss','fill-opacity':.8},$('cells')));

const SA=[];for(let i=0;i<24;i++){const a=i*Math.PI/12;SA.push(ln(arr(520+126*Math.cos(a),500+126*Math.sin(a),520+170*Math.cos(a),500+170*Math.sin(a),12),'s-loss',5,$('sarr')))}
const BR=[];for(let i=0;i<10;i++){const h=18+(i*7%3)*8;BR.push(mk('rect',{x:940+i*50,y:620-h,width:30,height:h,class:'loss'},$('barsg')))}

fig($('rams'),260,420,40,'ink');
for(let i=0;i<16;i++)mk('circle',{cx:1130+(i%4)*34,cy:350+Math.floor(i/4)*34,r:8,class:'ink'},$('grid'));
[[1140,500],[1190,500],[1240,500],[1290,500],[1400,500],[1280,320],[1410,310]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:11,class:'loss'},$('clut')));

const pan=(g,L)=>{ln('M0 0L-60 100M0 0L60 100','s-line',4,g);mk('path',{d:'M-70 100a70 34 0 0 0 140 0z',class:'ink'},g);tx(L,{x:0,y:174,'font-size':20,'text-anchor':'middle',class:'m'},g)};
pan($('panL'),'MANY THINGS');pan($('panR'),'THE VITAL FEW');
for(let i=0;i<9;i++)mk('rect',{x:i<6?-57+i*19:-38+(i-6)*19,y:i<6?76:52,width:15,height:22,class:'loss'},$('panL'));
mk('rect',{x:-30,y:46,width:60,height:54,rx:6,class:'gain'},$('panR'));
fig($('f1'),880,340,22,'ink');fig($('f2'),880,570,22,'gain');

fig($('pupf'),390,450,36,'loss');

for(let i=0;i<9;i++)mk('circle',{cx:380+i*105,cy:240,r:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
const RW=[],RA=[];[520,380,600,440,300,480].forEach((L,i)=>{const y=330+i*76,g=mk('g',{},$('rows'));RA.push(ln(arr(370,y,440,y,16),'s-ink',6,g));mk('rect',{x:470,y:y-7,width:L,height:14,rx:7,fill:'var(--line)'},g);RW.push(g)});
const MK=[406,558].map(y=>[ln('M340 '+y+'a420 36 0 1 0 840 0a420 36 0 1 0 -840 0','s-gain',5,$('marks'),{pathLength:1,'stroke-dasharray':'1 1'}),mk('path',{d:star(1240,y,26),class:'gain'},$('marks'))]);