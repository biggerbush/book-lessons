const fig=(g,x,y,r,cls)=>{const q=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},q);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},q);return q};
const house=(g,x,y,w,h,cls)=>{const q=mk('g',{},g);mk('rect',{x:x-w/2,y:y-h,width:w,height:h,class:cls},q);mk('path',{d:'M'+(x-w/2-6)+' '+(y-h+1)+'L'+x+' '+(y-h-w*.5)+'L'+(x+w/2+6)+' '+(y-h+1)+'Z',class:cls},q);return q};

const TH=[[1030,500],[1105,470],[1335,470],[1410,500]].map(q=>house($('town'),q[0],q[1],50,44,'ink'));
const CHU=mk('g',{},$('town'));house(CHU,1220,456,60,60,'gain');mk('rect',{x:1212,y:330,width:16,height:40,class:'gain'},CHU);mk('path',{d:'M1220 300v30M1208 312h24',class:'s-gain','stroke-width':5,'stroke-linecap':'round'},CHU);TH.push(CHU);

fig($('wolf'),250,380,40,'ink');fig($('wolf'),450,400,34,'ink');
const RT=$('route'),RTL=RT.getTotalLength?RT.getTotalLength():0;

const TN=[[340,340],[240,470],[440,470],[190,610],[290,610],[390,610],[490,610]],PA=[0,0,1,1,2,2];
PA.forEach((a,i)=>mk('path',{d:'M'+TN[a][0]+' '+TN[a][1]+'L'+TN[i+1][0]+' '+TN[i+1][1],class:'s-ink','stroke-width':5},$('tree')));
TN.forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:22,class:'gain'},$('tree')));
const RP=[[880,380],[1060,350],[1260,400],[1400,340],[960,560],[1180,590],[1380,540]],RS=[1,0,2,6,3,4,5];
const RLK=RP.map((q,j)=>{const s=TN[RS[j]];return mk('path',{d:'M'+s[0]+' '+s[1]+'C'+(s[0]+220)+' '+s[1]+' '+(q[0]-220)+' '+q[1]+' '+q[0]+' '+q[1],fill:'none',class:'s-line','stroke-width':3,'stroke-dasharray':'6 8'},$('rlinks'))});
const REL=RP.map(q=>mk('circle',{cx:q[0],cy:q[1],r:22,class:'gain'},$('rel')));

[340,800,1260].forEach((x,i)=>[-60,0,60].forEach(d=>house($('tw'+i),x+d,662,44,40,'ink')));

fig($('p0f'),250,420,30,'ink');fig($('p0f'),410,420,30,'ink');
const DT=[];[[240,317],[410,297]].forEach(c=>{for(let k=-1;k<2;k++)DT.push(mk('circle',{cx:c[0]+k*22,cy:c[1],r:6,class:'ink'},$('dots')))});
const G3=[[710,511,26],[800,494,30],[885,544,18]].map(q=>fig($('p1f'),q[0],q[1],q[2],'gain'));
const CL=[];for(let i=0;i<12;i++){if(i%6===3)continue;const a=i*Math.PI/6,x=1270+170*Math.cos(a),y=480+140*Math.sin(a);
  CL.push(mk('path',{d:'M'+x.toFixed(0)+' '+y.toFixed(0)+'L1270 540',class:'s-gain','stroke-width':3,'stroke-dasharray':'6 8'},$('p2d')));mk('circle',{cx:x,cy:y,r:12,class:'ink'},$('p2d'))}

const WN=[];for(let i=0;i<22;i++){const a=i*2*Math.PI/22-Math.PI/2;WN.push([1150+200*Math.cos(a),470+200*Math.sin(a)])}
WN.forEach((q,i)=>[5,9].forEach(k=>{const r=WN[(i+k)%22];mk('path',{d:'M'+q[0].toFixed(0)+' '+q[1].toFixed(0)+'L'+r[0].toFixed(0)+' '+r[1].toFixed(0),class:'s-line','stroke-width':2},$('chords'))}));
const WC=WN.map(q=>mk('circle',{cx:q[0],cy:q[1],r:16,class:'gain'},$('web')));
mk('circle',{cx:1150,cy:470,r:30,class:'ink'},$('web'));
const AR=[1,3,5,7].map(k=>mk('path',{fill:'none',class:'s-loss','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('stress')));
const arr=(a,d)=>{const c=Math.cos(a),s=Math.sin(a),tx=1150+c*d,ty=470+s*d,bx=1150+c*(d+60),by=470+s*(d+60),hx=1150+c*(d+22),hy=470+s*(d+22);
  return 'M'+bx.toFixed(1)+' '+by.toFixed(1)+'L'+tx.toFixed(1)+' '+ty.toFixed(1)+'M'+(hx-s*16).toFixed(1)+' '+(hy+c*16).toFixed(1)+'L'+tx.toFixed(1)+' '+ty.toFixed(1)+'L'+(hx+s*16).toFixed(1)+' '+(hy-c*16).toFixed(1)};
let BIG=null;for(let i=0;i<7;i++){const x=170+i*95,g=mk('g',{},$('eqh'));house(g,x,680,70,60,'ink');if(i===3)BIG=g}

for(let i=0;i<10;i++){const a=i*Math.PI/5,x=800+480*Math.cos(a),y=440+190*Math.sin(a);
  mk('path',{d:'M'+x.toFixed(0)+' '+y.toFixed(0)+'L800 410',class:'s-gain','stroke-width':3,'stroke-dasharray':'6 8'},$('comm'));fig($('comm'),x,y,22,'gain')}
fig($('me'),800,410,30,'ink');
const vfd=(a,b,c,d,L=50)=>'M'+a+' '+(b+L)+'V'+b+'H'+(a+L)+'M'+(c-L)+' '+b+'H'+c+'V'+(b+L)+'M'+c+' '+(d-L)+'V'+d+'H'+(c-L)+'M'+(a+L)+' '+d+'H'+a+'V'+(d-L);
fig($('callF'),1180,640,26,'ink');fig($('callF'),1420,640,26,'gain');
const beat=(t)=>1+.08*Math.pow(Math.abs(Math.sin(t*3.6)),6);