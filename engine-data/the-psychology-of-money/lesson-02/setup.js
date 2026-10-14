const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const star=(cx,cy,R)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?R*.45:R;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'};
fig($('tw0'),1250,360,40,'gain');fig($('tw1'),1400,360,40,'loss');
$('twst').setAttribute('d',star(1325,250,30));$('tkst').setAttribute('d',star(1360,515,40));$('ost').setAttribute('d',star(900,250,16));
const LT=[];for(let i=0;i<6;i++)LT.push(mk('circle',{cx:690+i*40,cy:545,r:8},$('lights')));
fig($('gts'),1050,500,28,'gain');
const GR=[];for(let i=0;i<35;i++){const c=i%5,r=Math.floor(i/5);GR.push(mk('rect',{x:1160+c*64,y:290+r*60,width:40,height:40,rx:6,fill:i===12?'var(--gain)':'var(--muted)','fill-opacity':i===12?1:.3},$('grid')))}
const ST=[];for(let i=0;i<5;i++)ST.push(mk('rect',{x:140+i*150,y:720-(i+1)*72,width:150,height:(i+1)*72,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('steps')));
fig($('bl'),300,330,36,'ink');fig($('ktf'),520,330,36,'ink');
const BR=[618,650,738,770].map((y,i)=>mk('rect',{x:160,y:y,width:0,height:22,rx:6,class:'ink'},$('bars')));
fig($('sp2'),190,400,18,'ink');fig($('sp2'),250,400,18,'ink');
const PS=$('ps'),PU=$('pu'),PD=$('pd'),LS=PS.getTotalLength(),LU=PU.getTotalLength(),LD=PD.getTotalLength();
const draw=(el,L,k)=>{el.setAttribute('stroke-dasharray',L+' '+L);el.setAttribute('stroke-dashoffset',(L*(1-k)).toFixed(1));el.setAttribute('opacity',k>0?1:0)};
const CR=[];for(let c=0;c<57;c++)for(let r=0;r<3;r++)CR.push([c,mk('circle',{cx:120+c*20,cy:772+r*18,r:5,class:'ink'},$('crowd5'))]);
fig($('mref'),1270,370,26,'ink');
const DT=[];for(let i=0;i<60;i++){const x=220+i*20,y=640-(x-220)*.2+((i*37)%11-5)*8;DT.push(mk('circle',{cx:x,cy:y.toFixed(1),r:9},$('dots7')))}