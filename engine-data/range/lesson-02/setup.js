const person=(par,x,y,r,f)=>{const g=mk('g',{fill:f},par);mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},g);return g};
const grid=(par,x0,y0,s,n)=>{for(let r=0;r<n;r++)for(let c=0;c<n;c++)mk('rect',{x:x0+c*s,y:y0+r*s,width:s,height:s,fill:(r+c)%2?'var(--ink)':'var(--stage)','fill-opacity':(r+c)%2?.25:1},par);mk('rect',{x:x0,y:y0,width:s*n,height:s*n,fill:'none',stroke:'var(--ink)','stroke-width':5},par)};
const pc=(par,x,y,r,dark)=>mk('circle',{cx:x,cy:y,r:r,fill:dark?'var(--ink)':'var(--gain)',stroke:'var(--stage)','stroke-width':3},par);
grid($('tSq'),1040,280,44,4);
const rain=[0,1,2,3,4].map(()=>mk('path',{class:'s-loss','stroke-width':5,'stroke-linecap':'round'},$('tRain')));
person($('hog'),800,360,36,'var(--ink)');
grid($('cBoard'),1000,310,40,8);
[[1,6],[2,6],[3,5],[4,4],[5,6],[2,1],[4,1],[5,2],[3,3]].forEach((q,i)=>pc($('cBoard'),1020+q[0]*40,330+q[1]*40,13,i>4));
person($('gmP'),240,380,36,'var(--ink)');
grid($('rgS'),540,270,36,8);grid($('rdS'),1060,270,36,8);
const RP=[[0,0],[0,2],[0,4],[0,6],[0,7],[1,0],[1,1],[1,2],[1,5],[1,6],[1,7],[2,3],[3,4],[4,4],[5,2],[6,0],[6,1],[6,5],[6,6],[6,7],[7,0],[7,4],[7,7]];
const RD=RP.map((q,i)=>{pc($('rgS'),558+q[1]*36,288+q[0]*36,12,q[0]<4);const k=(i*29+7)%64;return [pc($('rdS'),1078+q[1]*36,288+q[0]*36,12,q[0]<4),1078+q[1]*36,288+q[0]*36,1078+(k&7)*36,288+(k>>3)*36]});
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(1000+92*Math.cos(a)).toFixed(1)+' '+(440+92*Math.sin(a)).toFixed(1)+'L'+(1000+104*Math.cos(a)).toFixed(1)+' '+(440+104*Math.sin(a)).toFixed(1),class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('ticks'))}
person($('docP'),280,400,34,'var(--ink)');
const PT=[640,820,1000,1180,1360].map(x=>person($('pts'),x,420,26,'var(--ink)'));
const GM=[];for(let i=0;i<14;i++)GM.push(mk('circle',{r:6,class:'loss'},$('germs')));
const DT=[];for(let i=0;i<7;i++)DT.push(mk('circle',{cx:1450,cy:290+i*60,r:12},$('dots')));