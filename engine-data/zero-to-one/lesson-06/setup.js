const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const hb=(r,b,h)=>{h=Math.max(0,h);r.setAttribute('y',(b-h).toFixed(1));r.setAttribute('height',h.toFixed(1))};
const T0=[40,26,52,18,34,22].map((h,i)=>mk('rect',{x:1080+i*46,y:720-h,width:30,height:h,rx:4,class:'ink'},$('tb0')));
const BB=[],PB=[];for(let i=0;i<16;i++){BB.push(mk('rect',{x:180+i*32,width:22,rx:3,fill:'var(--muted)'},$('bbars')));PB.push(mk('rect',{x:900+i*34,width:24,rx:3,class:'ink'},$('pbars')))}
const BH=i=>300*Math.exp(-Math.pow((i-7.5)/3.5,2)),PH=i=>380/Math.pow(i+1,1.2);
for(let r=0;r<4;r++)for(let c=0;c<3;c++)mk('circle',{cx:220+c*70,cy:640-r*62,r:24,class:(r+c)%3?'ink':'gain'},$('coins'));
const POH=[48,36,30,62,30,54,40,44],PO=POH.map((h,i)=>mk('rect',{x:600+i*90,width:56,rx:4,class:i==2?'gain':'ink'},$('port')));
const TY=[];for(let i=0;i<12;i++){const h=6+((i*7)%5)*4;TY.push(mk('rect',{x:920+i*46,y:720-h,width:30,height:h,rx:3,class:'ink'},$('tiny3')))}
const SB=[];for(let i=0;i<20;i++)SB.push(mk('rect',{x:886+i*28,width:18,rx:3,class:'loss'},$('sbars')));
const SBH=i=>30+((i*7)%4)*5;
for(let i=0;i<5;i++)mk('rect',{x:1100+i*80,y:692,width:40,height:30,rx:4,class:'ink'},$('mods'));
fig($('me'),220,420,34,'ink');
const PT=[];for(let i=0;i<8;i++){const y=250+i*64;PT.push([mk('path',{d:'M300 480C700 480 900 '+y+' 1366 '+y,fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},$('paths')),mk('circle',{cx:1380,cy:y,r:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('paths'))])}
const CR=[140,90,800,120,70,100].map((w,i)=>{const g=mk('g',{},$('chan')),y=260+i*84,tx=mk('text',{x:420,y:y+30,'font-size':22,class:'m',style:'fill:var(--muted)'},g);tx.textContent='CHANNEL '+(i+1);return [g,mk('rect',{x:580,y:y,height:44,width:0,rx:6,class:i==2?'gain':'ink'},g),w,tx]});
[14,22,18,24].forEach((h,i)=>mk('rect',{x:1300+i*30,y:760-h,width:20,height:h,rx:3,class:'ink'},$('qg')));