const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const ray=(g,cx,cy,r0,r1,a,cls,w)=>{const c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(cx+r0*c).toFixed(1)+' '+(cy+r0*s).toFixed(1)+'L'+(cx+r1*c).toFixed(1)+' '+(cy+r1*s).toFixed(1),class:cls,'stroke-width':w,'stroke-linecap':'round'},g)};
let ODD;for(let i=0;i<16;i++){const c=mk('circle',{cx:1170+(i%4)*90,cy:250+Math.floor(i/4)*80,r:24,class:i===9?'gain':'ink'},$('grid'));if(i===9)ODD=c}
let pd='M540 470';for(let i=1;i<=15;i++)pd+='L'+(540+i*44)+' '+(i%2?430:510);$('pat').setAttribute('d',pd);
for(let i=0;i<5;i++)ray($('brs'),320,450,175,215,-Math.PI*5/6+i*Math.PI/6,'s-gain',8);
for(let i=0;i<4;i++)ray($('qr'),800,470,150,185,-Math.PI*3/4+i*Math.PI/6,'s-gain',7);
for(let i=0;i<6;i++)mk('circle',{cx:180+i*88,cy:230,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
const ST=[0,1,2,3].map(i=>fig($('stu'),820+i*100,290,22,'ink')[0]);
for(let i=0;i<5;i++)ray($('rays'),260,420,88,112,-Math.PI*5/6+i*Math.PI/6,'s-gain',6);
const GA=[];for(let i=0;i<6;i++){const g=mk('g',{},$('ga')),a=i*1.05+.3,L=60+(i*37)%55,c=Math.cos(a),s=Math.sin(a);ray(g,1160,420,45,45+L,a,'s-loss',6);mk('circle',{cx:(1160+(53+L)*c).toFixed(1),cy:(420+(53+L)*s).toFixed(1),r:8,class:'loss'},g);GA.push(g)}
const IT=[0,1,2].map(i=>mk('path',{d:'M'+(1040+i*85)+' 520l12-14 12 14 12-14 12 14 12-14',class:'s-loss',fill:'none','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},$('itc')));
fig($('scp'),190,580,26,'ink');
const DU=[];for(let i=0;i<44;i++)DU.push([mk('circle',{r:3+(i%3)*1.5,class:i%4?'ink':'gain'},$('dst')),i*2*Math.PI/44,1+((i*7)%5-2)*.04]);
const PC=[0,1,2,3].map(i=>mk('rect',{x:935+(i%2)*270,y:465+Math.floor(i/2)*140,width:260,height:130,rx:12,class:'gain'},$('pcs')));
fig($('ln'),1160,650,24,'ink');