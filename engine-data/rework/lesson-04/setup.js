const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-1.6*r)+' '+(y+3.6*r)+'v'+(-.8*r)+'a'+1.6*r+' '+1.6*r+' 0 0 1 '+3.2*r+' 0v'+.8*r+'z',class:c},g)};
const tx=(g,x,y,s,str,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:'m','text-anchor':'middle'},a||{}),g);e.textContent=str;return e};
const ray=(g,cx,cy,a,r1,r2,cls,w)=>mk('path',{d:'M'+(cx+r1*Math.cos(a)).toFixed(1)+' '+(cy+r1*Math.sin(a)).toFixed(1)+'L'+(cx+r2*Math.cos(a)).toFixed(1)+' '+(cy+r2*Math.sin(a)).toFixed(1),class:cls,'stroke-width':w,'stroke-linecap':'round'},g);
fig($('me1'),220,470,40,'ink');
const COIN=[];for(let i=0;i<6;i++)COIN.push(mk('rect',{x:840,y:462-i*22,width:120,height:18,rx:9,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':3},$('coins')));
[1300,1360,1420].forEach(x=>fig($('ppl'),x,380,22,'ink'));
for(let i=0;i<7;i++)fig($('crowdM'),180+i*110,650,18,'ink');
for(let i=0;i<8;i++)ray($('spark'),1160,300,i*Math.PI/4,30,60,'s-gain',6);
mk('circle',{cx:1160,cy:300,r:14,class:'gain'},$('spark'));
[1223,1273,1323].forEach(x=>fig($('team3'),x,440,14,'ink'));
[860,1300].forEach(cx=>{for(let i=0;i<12;i++)ray($('ticks'),cx,430,i*Math.PI/6,90,102,'s-ink',4)});
for(let i=0;i<3;i++){const x=760+i*220;mk('rect',{x:x,y:650,width:180,height:64,rx:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('talk'));mk('path',{d:'M'+(x+30)+' 674h120M'+(x+30)+' 692h80',class:'s-line','stroke-width':5,'stroke-linecap':'round'},$('talk'))}
const KEEP=[1,4,6],CH=[];for(let i=0;i<8;i++){const g=mk('g',{},$('chips5')),y=250+i*46;const r=mk('rect',{x:140,y:y,width:260,height:34,rx:17,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M164 '+(y+17)+'h'+(80+(i*37)%110),class:'s-muted','stroke-width':5,'stroke-linecap':'round'},g);CH.push([g,r])}
const TK=[];[380,460,540].forEach((y,i)=>{mk('rect',{x:910,y:y-24,width:48,height:48,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':5},$('rows5'));mk('rect',{x:990,y:y-12,width:[300,240,270][i],height:24,rx:12,fill:'var(--line)'},$('rows5'));TK.push(mk('path',{d:'M920 '+y+'l12 12l22-26',fill:'none',class:'s-gain','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('rows5')))});
let sp='';for(let i=0;i<10;i++){const r=i%2?17:40,a=-Math.PI/2+i*Math.PI/5;sp+=(1410+r*Math.cos(a)).toFixed(1)+','+(260+r*Math.sin(a)).toFixed(1)+' '}$('star').setAttribute('points',sp);
for(let r=0;r<2;r++)for(let i=0;i<6;i++)mk('rect',{x:220+i*72,y:382-r*38,width:64,height:36,fill:(i+r)%3?'var(--muted)':'var(--loss)',stroke:'var(--stage)','stroke-width':2},$('cont'));
const AL=[],AR=[];
for(let i=0;i<5;i++){const x=160+i*125,g=mk('g',{},$('apL'));mk('rect',{x:x,y:640,width:100,height:58,rx:10,fill:i?'var(--stage)':'var(--line)',stroke:'var(--ink)','stroke-width':4},g);tx(g,x+50,677,22,i?'OK?':'IDEA');if(i<4)mk('path',{d:'M'+(x+102)+' 669h21',class:'s-muted','stroke-width':4},g);AL.push(g)}
[[1000,'IDEA'],[1220,'DONE']].forEach((q,i)=>{const g=mk('g',{},$('apR'));mk('rect',{x:q[0],y:640,width:140,height:58,rx:10,class:'gain'},g);tx(g,q[0]+70,677,22,q[1],{style:'fill:var(--on-gain)'});if(!i)mk('path',{d:'M1150 669h56m-14-14 14 14-14 14',fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},g);AR.push(g)});
for(let y=270;y<=750;y+=60)mk('circle',{cx:120,cy:y,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spir'));
const RY=[];for(let i=0;i<7;i++)RY.push(ray($('rays'),1060,340,Math.PI+i*Math.PI/6,100,128,'s-gain',7));
const SL=[];for(let i=0;i<3;i++)SL.push(mk('path',{d:'M1145 '+(650+i*38)+'h200',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':'200 200'},$('sl8')));
const rot=(id,a,cx,cy)=>$(id).setAttribute('transform','rotate('+a.toFixed(1)+' '+cx+' '+cy+')');