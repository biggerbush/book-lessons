const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const dr=(e,k)=>e.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const cloud=(g,x,y,w,h,n)=>{const r=w/(2*n);let d='M'+x+' '+y;for(let i=0;i<n;i++)d+='a'+r+' '+r+' 0 0 1 '+2*r+' 0';d+='a'+h/2+' '+h/2+' 0 0 1 0 '+h;for(let i=0;i<n;i++)d+='a'+r+' '+r+' 0 0 1 -'+2*r+' 0';d+='a'+h/2+' '+h/2+' 0 0 1 0 -'+h+'z';mk('path',{d:d,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':6,'stroke-linejoin':'round'},g)};
fig($('me2'),300,470,40,'ink');
[[370,410,7],[420,375,11],[480,345,15]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],class:'loss'},$('dcc')));
cloud($('dcc'),600,280,460,120,5);
[[370,540,7],[440,575,11],[520,605,15],[610,630,19]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],class:'loss'},$('ccc')));
cloud($('ccc'),760,560,560,120,5);
fig($('ppf'),410,650,30,'loss');fig($('ppf'),1120,650,30,'gain');
const BR=[];for(let i=0;i<10;i++)BR.push(mk('rect',{x:240+i*40,width:24,rx:4,class:'gain'},$('bars')));
const COL=[];for(let i=0;i<6;i++)COL.push(mk('rect',{x:520+i*100,width:92,fill:'var(--stage)','stroke-width':5},$('wallg')));
const ST=[[470,798]].concat([0,1,2,3,4,5].map(j=>[566+j*100,820-63*(j+1)-24]));
for(let r=0;r<2;r++)for(let i=0;i<4;i++){const x=180+i*110,y=280+r*120;fig($('clp'),x,y,16,'ink');mk('rect',{x:x-40,y:y+70,width:80,height:10,class:'ink'},$('clp'))}
const BN=[[250,640],[300,700],[330,600],[400,640],[380,720],[450,600],[480,690],[530,650]];
const LKS=[[0,2],[0,1],[1,4],[2,3],[3,4],[2,5],[5,7],[6,7],[3,6],[4,6],[1,3],[3,5]].map(([a,b])=>mk('path',{d:'M'+BN[a]+'L'+BN[b],class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('bl')));
BN.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:12,class:'gain'},$('bn')));
for(let i=0;i<5;i++)mk('circle',{cx:1210+i*55,cy:260,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('nbs'));