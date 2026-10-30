const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const burst=(g,x,y,r)=>{let s='';for(let i=0;i<16;i++){const a=i*Math.PI/8,k=i%2?r*.55:r;s+=(x+k*Math.cos(a)).toFixed(1)+','+(y+k*Math.sin(a)).toFixed(1)+' '}mk('polygon',{points:s,class:'loss'},g)};
const eye=(g,x,y,s)=>{mk('path',{d:'M'+(x-s)+' '+y+'Q'+x+' '+(y-.7*s)+' '+(x+s)+' '+y+'Q'+x+' '+(y+.7*s)+' '+(x-s)+' '+y+'Z',fill:'var(--stage)',stroke:'var(--loss)','stroke-width':6,'stroke-linejoin':'round'},g);mk('circle',{cx:x,cy:y,r:s*.3,class:'loss'},g)};
const draw=(el,k)=>{el.style.strokeDashoffset=1-k};
burst($('fe0'),1220,270,46);eye($('fe1'),1410,270,56);
burst($('r1L'),190,270,44);eye($('r1R'),1420,270,54);
fig($('travI'),800,650,24,'gain');
let hl='',hr='';for(let y=370;y>=250;y-=6){const s=28*Math.sin((370-y)/18);hl+=(hl?'L':'M')+(270+s).toFixed(1)+' '+y;hr+=(hr?'L':'M')+(270-s).toFixed(1)+' '+y;if(y%18===10)mk('path',{d:'M'+(270+s).toFixed(1)+' '+y+'H'+(270-s).toFixed(1),class:'s-line','stroke-width':4},$('helix'))}
mk('path',{d:hl,fill:'none',class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('helix'));mk('path',{d:hr,fill:'none',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('helix'));
const MN=[0,1,2,3].map(i=>mk('rect',{x:150+i*62,y:620,width:46,height:36,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('minis')));
fig($('grp'),560,420,18,'ink');fig($('grp'),720,420,18,'ink');fig($('grp'),640,380,28,'loss');
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M'+(820+26*Math.cos(a)).toFixed(1)+' '+(440+26*Math.sin(a)).toFixed(1)+'L'+(820+42*Math.cos(a)).toFixed(1)+' '+(440+42*Math.sin(a)).toFixed(1),class:'s-loss','stroke-width':5,'stroke-linecap':'round'},$('bug'))}
mk('circle',{cx:820,cy:440,r:26,class:'loss'},$('bug'));
const CT=[[1110,380,70,50],[1150,490,40,55],[1260,375,80,45],[1300,480,45,55],[1410,500,40,30]];
CT.forEach(c=>mk('ellipse',{cx:c[0],cy:c[1],rx:c[2],ry:c[3],fill:'var(--line)'},$('conts')));
const DT=[];for(let i=0;i<40;i++){const c=CT[i%5],a=i*2.4,k=.15+((i*37)%10)/12,x=c[0]+c[2]*k*Math.cos(a),y=c[1]+c[3]*k*Math.sin(a);DT.push([mk('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:7,class:'loss'},$('dots')),Math.hypot(x-1260,y-375)/300])}
const DR=[0,1,2].map(i=>mk('circle',{cx:575,cy:640,r:8,class:'loss'},$('drips')));
const LB=[];for(let i=0;i<8;i++){const x=660+(i%4)*100,y=330+(i>>2)*130,g=mk('g',{},$('labs'));
mk('path',{d:'M'+x+' '+(y+30)+'L'+(x+35)+' '+y+'L'+(x+70)+' '+(y+30)+'z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g);
mk('rect',{x:x,y:y+30,width:70,height:50,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('rect',{x:x+27,y:y+54,width:16,height:26,class:'ink'},g);LB.push(g)}
[[170,330],[260,330],[350,330],[440,330],[215,470],[305,470],[395,470]].forEach((q,i)=>{fig($('crowd4'),q[0],q[1],20,'ink');if(i%3===0){const e=mk('text',{x:q[0]+28,y:q[1]-8,'font-size':36,class:'d',style:'fill:var(--loss)'},$('crowd4'));e.textContent='!'}});
const MON=[],REC=[];for(let i=0;i<9;i++){const r=Math.floor(i/3),x=980+(i%3)*170,y=260+r*130,cx=x+75,cy=y+58,g=mk('g',{},$('wall'));
mk('rect',{x:x,y:y,width:150,height:110,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
const ic=['M'+(cx-10)+' '+(cy-32)+'v22l-24 38h68l-24-38v-22z','M'+(cx-36)+' '+(cy-26)+'h72v44h-44l-16 14v-14h-12z','M'+(cx-40)+' '+(cy-26)+'h14l10 40h44l8-28h-58'][r];
mk('path',{d:ic,fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round','stroke-linecap':'round'},g);
if(r===2){mk('circle',{cx:cx-12,cy:cy+24,r:6,class:'ink'},g);mk('circle',{cx:cx+24,cy:cy+24,r:6,class:'ink'},g)}
REC.push(mk('circle',{cx:x+132,cy:y+16,r:6,class:'loss'},g));MON.push(g)}
const CM=[];[[140,90,220],[250,120,320],[390,80,180],[490,130,380],[640,100,260]].forEach((b,i)=>{const x=b[0],w=b[1],top=720-b[2];
mk('rect',{x:x,y:top,width:w,height:b[2],fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('city'));
for(let yy=top+30;yy<690;yy+=50)for(let xx=x+18;xx<x+w-20;xx+=34)mk('rect',{x:xx,y:yy,width:16,height:22,fill:'var(--line)'},$('city'));
if(i%2===1||i===4){const cx=x+w-14,cy=top-20;CM.push(mk('polygon',{points:cx+','+cy+' '+(cx+60)+','+(cy+130)+' '+(cx-24)+','+(cy+130),class:'loss','fill-opacity':.2},$('city')));
mk('path',{d:'M'+cx+' '+top+'v-20',class:'s-ink','stroke-width':4},$('city'));mk('rect',{x:cx-20,y:cy-10,width:30,height:14,rx:3,class:'ink'},$('city'))}});
// cage: top rail, bars, bottom rail ending at y=740 (labels at 776, takeaway at 846 stay clear)
mk('rect',{x:150,y:208,width:1302,height:14,class:'ink'},$('bars'));
for(let x=160;x<=1440;x+=80)mk('rect',{x:x,y:220,width:12,height:510,class:'ink','fill-opacity':.9},$('bars'));
mk('rect',{x:150,y:728,width:1302,height:12,class:'ink'},$('bars'));
for(let i=0;i<9;i++)mk('rect',{x:562+(i%3)*112,y:322+Math.floor(i/3)*100,width:92,height:64,rx:6,fill:'none',class:'s-muted','stroke-width':3,'stroke-dasharray':'8 8'},$('boxes'));
[['panL','CATASTROPHE'],['panR','DYSTOPIA']].forEach((q,i)=>{const g=$(q[0]);mk('path',{d:'M0 0L-80 110M0 0L80 110',class:'s-ink','stroke-width':3},g);
mk('path',{d:'M-100 110Q0 160 100 110Z',fill:'var(--line)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);
if(i)eye(g,0,74,44);else burst(g,0,72,34);const tx=mk('text',{x:0,y:180,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=q[1]});
burst($('sEnds'),160,760,22);eye($('sEnds'),900,760,34);