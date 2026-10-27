const fig=(g,x,y,r,c)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},e);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},e);return e};
fig($('dalp'),340,400,32,'gain');
const BH=[330,280,360,300],bars=BH.map((h,i)=>mk('rect',{x:740+i*180,y:700,width:110,height:0,class:'loss'},$('bars')));
fig($('tvp'),330,320,24,'ink');
const chips=[];for(let s=0;s<3;s++)for(let i=0;i<9;i++)chips.push([mk('ellipse',{cx:1180+s*100,cy:600-i*22,rx:44,ry:14,fill:(i+s)%2?'var(--gain)':'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('chips')),(i*3+s)*.07]);
const coins=[0,1,2,3,4].map(i=>mk('circle',{cx:200+i*55,cy:612,r:13,class:'gain'},$('coins')));
const UP=[];for(let i=0;i<=20;i++){const x=640+i*39.5,y=480-190*Math.pow(i/20,1.4)+(i>0&&i<20?(i%2?14:-6):0);UP.push(x.toFixed(0)+','+y.toFixed(0))}$('up').setAttribute('points',UP.join(' '));
const staff=[];for(let i=0;i<8;i++){const x=220+(i%4)*180,y=280+Math.floor(i/4)*220;mk('rect',{x:x-70,y:y+92,width:140,height:14,rx:7,class:'ink'},$('office'));staff.push(fig($('office'),x,y,22,'ink'))}
fig($('lp'),1060,300,34,'ink');fig($('lp'),1380,330,28,'gain');
fig($('mirp'),330,380,40,'ink');
const AR=[0,1,2,3].map(()=>mk('path',{class:'s-muted',fill:'none','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('arrs')));
const dec=[];for(let i=0;i<6;i++){const x=120+i*230,g=mk('g',{},$('dec'));mk('rect',{x:x,y:560,width:180,height:140,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);const q=mk('text',{x:x+90,y:652,'font-size':64,'text-anchor':'middle',class:'d'},g);q.textContent='?';const c=mk('path',{d:`M${x+60} 630l22 22 40-46`,fill:'none',stroke:'var(--gain)','stroke-width':10,'stroke-linecap':'round','stroke-linejoin':'round'},g);dec.push([g,q,c])}
fig($('th'),220,440,28,'gain');
const TB=[500,650,800].map(x=>{fig($('th'),x,440,28,'ink');const g=mk('g',{},$('th'));const r=mk('rect',{x:x-58,y:300,width:116,height:56,rx:14,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);const tx=mk('text',{x:x,y:336,'font-size':20,'text-anchor':'middle',class:'m'},g);return [g,r,tx]});
for(let i=0;i<4;i++)mk('ellipse',{cx:1210,cy:560-i*22,rx:40,ry:12,fill:i%2?'var(--gain)':'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('shc'));
fig($('disp'),1390,610,30,'ink');