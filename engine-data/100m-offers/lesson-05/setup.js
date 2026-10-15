const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const T=(g,x,y,s,fs,c,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:c},a||{}),g);e.textContent=s;return e};
const RR=(el,u,a,d=.5)=>rise(typeof el=='string'?$(el):el,p(u,a,a+d));
const drop=(g,k,h)=>{g.setAttribute('transform','translate(0 '+(-h*(1-k)).toFixed(1)+')');g.setAttribute('opacity',k.toFixed(3))};
const B0=[];for(let i=0;i<6;i++){const y=760-(i+1)*70+6,g=mk('g',{},$('tw0')),gn=i%2==0;mk('rect',{x:1200,y:y,width:240,height:64,rx:8,fill:gn?'var(--gain)':'var(--ink)'},g);
  mk('path',{d:'M1302 '+(y+32)+'l12 12l26-26',fill:'none',stroke:gn?'var(--on-gain)':'var(--stage)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);B0.push(g)}
P($('pers1'),220,560,30,'ink');
const SD=[];for(let i=0;i<6;i++)SD.push(mk('circle',{cx:433+i*133,cy:658-i*42,r:12,class:'gain'},$('stdots')));
const OB=[];for(let i=0;i<7;i++){const y=330+i*66,g=mk('g',{},$('obl'));mk('circle',{cx:210,cy:y,r:14,class:'loss'},g);mk('path',{d:'M245 '+y+'h'+(200+(i*53)%140),class:'s-ink','stroke-width':8,'stroke-linecap':'round'},g);OB.push(g)}
const PL=[];for(let i=0;i<10;i++){const g=mk('g',{},$('pile')),x=750+i*66,y=645+(i*37)%40,h=mk('g',{transform:'rotate('+((i*23)%30-15)+' '+(x+42)+' '+(y+30)+')'},g);
  mk('rect',{x:x,y:y,width:84,height:60,rx:4,fill:'var(--stage)',stroke:'var(--muted)','stroke-width':3},h);mk('path',{d:'M'+(x+14)+' '+(y+22)+'h50M'+(x+14)+' '+(y+38)+'h36',class:'s-line','stroke-width':4},h);PL.push(g)}
P($('pers3'),260,420,40,'ink');
const SK={fill:'none',class:'s-ink','stroke-width':5};
const IC={
  coach:(g,x,y)=>{P(g,x+105,y+60,18,'ink');P(g,x+175,y+60,18,'gain')},
  grp:(g,x,y)=>{for(let k=0;k<4;k++)P(g,x+80+k*40,y+70,13,k?'ink':'gain')},
  vid:(g,x,y)=>{mk('rect',Object.assign({x:x+70,y:y+40,width:140,height:96,rx:8},SK),g);mk('path',{d:'M'+(x+125)+' '+(y+66)+'l40 22l-40 22z',class:'gain'},g)},
  txt:(g,x,y)=>{mk('path',{d:'M'+(x+90)+' '+(y+120)+'l-12 30l40-30z',class:'ink'},g);mk('rect',Object.assign({x:x+60,y:y+40,width:160,height:84,rx:22},SK,{fill:'var(--stage)'}),g);for(let k=0;k<3;k++)mk('circle',{cx:x+105+k*35,cy:y+82,r:9,class:'gain'},g)},
  call:(g,x,y)=>{mk('rect',Object.assign({x:x+115,y:y+30,width:50,height:100,rx:10},SK),g);mk('circle',{cx:x+140,cy:y+115,r:5,class:'ink'},g);mk('path',{d:'M'+(x+180)+' '+(y+60)+'q14 20 0 40M'+(x+195)+' '+(y+48)+'q24 32 0 64',fill:'none',class:'s-gain','stroke-width':5,'stroke-linecap':'round'},g)},
  more:(g,x,y)=>T(g,x+140,y+140,'?',96,'d',{'text-anchor':'middle',style:'fill:var(--muted)'})
};
const DC=[[560,230,'1-ON-1 COACHING','coach'],[880,230,'SMALL GROUP','grp'],[1200,230,'RECORDED VIDEO','vid'],[560,500,'QUICK TEXT ANSWER','txt'],[880,500,'WEEKLY CALL','call'],[1200,500,'MORE IDEAS?','more']].map(q=>{
  const g=mk('g',{},$('dcards'));mk('rect',{x:q[0],y:q[1],width:280,height:220,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3,'stroke-dasharray':q[3]=='more'?'10 8':'none'},g);
  IC[q[3]](g,q[0],q[1]);T(g,q[0]+140,q[1]+195,q[2],20,'m',{'text-anchor':'middle'});return g});
const D6=[[390,430,'k'],[540,440,'k'],[660,300,'k'],[760,580,'c'],[880,540,'c'],[1010,580,'c'],[560,620,'m'],[820,350,'m'],[980,320,'m']].map(q=>[mk('circle',{cx:q[0],cy:q[1],r:18,fill:'var(--muted)'},$('dots6')),q[2]]);
const PC=[];for(let i=0;i<5;i++)PC.push(mk('rect',{x:200+i*58,y:560,width:46,height:46,rx:6,class:'gain',stroke:'var(--stage)','stroke-width':3},$('pcs')));
const DM=[];for(let i=0;i<5;i++)DM.push(mk('rect',{x:640+i*70,y:640,width:30,height:120,rx:4,class:'loss'},$('dms')));
const TW=['SHOPPING TEMPLATE','RESTAURANT GUIDE','GROUP COACHING','TEXT ANSWERS','WEEKLY CALL'].map((s,i)=>{const y=760-(i+1)*70+8,g=mk('g',{},$('tw7'));
  mk('rect',{x:1130,y:y,width:300,height:62,rx:8,class:'gain'},g);T(g,1280,y+38,s,18,'m',{'text-anchor':'middle',style:'fill:var(--on-gain)'});return g});
for(let i=0;i<4;i++)mk('circle',{cx:1220+i*56,cy:240,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('np'));
const NL=[];for(let i=0;i<10;i++){const y=300+i*48;T($('nl'),1186,y+8,String(i+1),22,'m');NL.push(mk('path',{d:'M1236 '+y+'h176',class:'s-ink','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':176,'stroke-dashoffset':176},$('nl')))}