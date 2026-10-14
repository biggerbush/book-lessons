const V=n=>'var(--'+n+')';
const PG=(par,x,y,r,f)=>{const g=mk('g',{fill:f},par);mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},g);return g};
const tp=PG($('tperson'),1300,380,22,V('gain'));
const ST=[];for(let i=0;i<9;i++)ST.push(PG($('staff'),200+i*85,560,22,i<3?V('gain'):(i==4||i==7)?V('loss'):V('ink')));
for(let i=0;i<3;i++)mk('path',{d:'M'+(200+i*85)+' 478v26M'+(187+i*85)+' 491h26',stroke:V('gain'),'stroke-width':5,'stroke-linecap':'round'},$('stars1'));
const PL={1:'RULES',4:'FORMS',6:'APPROVALS'},PP=[];
for(let i=0;i<8;i++){const g=mk('g',{},$('papers')),y=720-i*40;mk('rect',{x:1060,y:y,width:340,height:30,rx:4,fill:V('stage'),stroke:V('ink'),'stroke-width':4},g);if(PL[i])mk('text',{x:1230,y:y+22,'font-size':18,'text-anchor':'middle',class:'m'},g).textContent=PL[i];PP.push(g)}
const FP=[[240,330],[400,300],[560,360],[300,520],[500,540]].map(q=>PG($('free'),q[0],q[1],16,V('gain')));
const TK=[0,1,2,3].map(i=>mk('path',{d:'M880 '+(548+i*50)+'l10 10 18-20',fill:'none',stroke:V('gain'),'stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('ticks')));
PG($('pilp'),1300,560,30,V('gain'));
PG($('athp'),280,330,40,V('gain'));
const MD=[];for(let i=0;i<6;i++)MD.push(mk('circle',{cx:190+i*36,cy:560,r:13,fill:V('gain')},$('medals')));
for(let i=0;i<6;i++)mk('circle',{cx:680+i*48,cy:456,r:20,fill:V('stage'),stroke:V('ink'),'stroke-width':4},$('lumps'));
const DR=[0,1,2,3].map(()=>mk('circle',{cx:800,cy:300,r:7,fill:V('muted')},$('drops')));
const FT=[0,1,2].map(i=>mk('circle',{cx:760+i*40,cy:590,r:9,fill:V('loss')},$('fat')));
const DY=[];for(let i=0;i<20;i++)DY.push(mk('rect',{x:1100+(i%5)*72,y:300+Math.floor(i/5)*72,width:56,height:56,rx:8,stroke:V('ink'),'stroke-width':4,fill:V('stage')},$('days')));
for(let i=0;i<9;i++){const y=316+i*48;mk('rect',{x:160,y:y-11,width:22,height:22,rx:4,fill:'none',stroke:V('muted'),'stroke-width':3},$('bars'));mk('rect',{x:200,y:y-6,width:240+(i*53)%160,height:12,rx:6,fill:V('line')},$('bars'))}
const KS=[1,2,3].map(i=>mk('line',{x1:766,y1:360+i*110,x2:766,y2:360+i*110,stroke:V('loss'),'stroke-width':5,'stroke-linecap':'round'},$('strk')));
const SCB=mk('g',{},$('sc4'));
[-11,11].forEach(c=>mk('circle',{cx:-22,cy:c,r:10,fill:'none',stroke:V('ink'),'stroke-width':5},SCB));
mk('path',{d:'M-14 -6L30 8M-14 6L30 -8',stroke:V('ink'),'stroke-width':5,'stroke-linecap':'round'},SCB);
// scene 5: boss on podium, spaced crowd standing on a floor
PG($('bossp'),440,300,30,V('loss'));
mk('path',{d:'M140 660H770',stroke:V('line'),'stroke-width':6,'stroke-linecap':'round'},$('crowd5'));
const CX5=[160,265,370,475,580,685];
const CR=CX5.map(x=>PG($('crowd5'),x,590,16,V('ink')));
const TP=[];for(let i=0;i<8;i++){const a=-Math.PI/2+i*Math.PI/4;TP.push(PG($('team5'),Math.round(1160+160*Math.cos(a)),Math.round(480+160*Math.sin(a)-25),16,V('gain')))}
const S6=[],PU=[];for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3,x=Math.round(720+210*Math.cos(a)),y=Math.round(500+210*Math.sin(a));S6.push([x,y]);
  mk('path',{d:'M720 500L'+x+' '+y,stroke:V('line'),'stroke-width':4},$('links6'));
  mk('path',{d:'M'+(x-34)+' '+(y+30)+'v-36l34-26 34 26v36z',fill:V('stage'),stroke:V('ink'),'stroke-width':5,'stroke-linejoin':'round'},$('stores'));
  mk('path',{d:'M'+x+' '+(y-4)+'v20M'+(x-10)+' '+(y+6)+'h20',stroke:V('gain'),'stroke-width':5,'stroke-linecap':'round'},$('stores'));
  PU.push(mk('circle',{cx:720,cy:500,r:7,fill:V('gain')},$('pulse6')))}
for(let i=0;i<6;i++){const a=i*Math.PI/3;mk('path',{d:'M1300 480L'+Math.round(1300+130*Math.cos(a))+' '+Math.round(480+130*Math.sin(a)),stroke:V('ink'),'stroke-width':6},$('wheel'))}
const RV=[];for(let i=0;i<5;i++)RV.push(mk('circle',{cx:160,cy:300,r:16,fill:V('loss')},$('rivals')));
PG($('walker'),0,0,22,V('gain'));