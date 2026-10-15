const PP=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const cow=(g,x,y,f)=>{mk('path',{d:`M${x+18} ${y+46}v32M${x+82} ${y+46}v32`,stroke:f,'stroke-width':9,'stroke-linecap':'round'},g);mk('rect',{x:x,y:y,width:100,height:50,rx:18,fill:f},g);mk('circle',{cx:x+110,cy:y+6,r:20,fill:f},g);mk('circle',{cx:x+42,cy:y+22,r:10,fill:'var(--stage)','fill-opacity':.5},g)};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const COW=[],BDG=[];
for(let i=0;i<6;i++){const x=1000+(i%3)*160,y=280+Math.floor(i/3)*140,g=mk('g',{},$('herd'));cow(g,x,y,'var(--muted)');COW.push(g);
  const b=mk('g',{},$('herd'));mk('circle',{cx:x+50,cy:y-26,r:16,fill:'var(--gain)'},b);
  mk('path',{d:`M${x+42} ${y-26}l6 6l11-12`,fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},b);BDG.push(b)}
const CMP=[[990,548],[1090,594],[1000,644]].map(q=>{const g=mk('g',{},$('cmp'));mk('rect',{x:q[0],y:q[1],width:90,height:42,rx:14,class:'loss'},g);
  tx(g,q[0]+45,q[1]+31,'!!',{class:'d','font-size':26,'text-anchor':'middle',style:'fill:var(--stage)'});return g});
const CK=[0,1,2].map(i=>mk('path',{d:`M438 ${390+i*90}l12 12l24-26`,fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('ck')));
// paint aisle
const CAN=[];
for(let r=0;r<3;r++)for(let i=0;i<6;i++){const x=205+i*210,y=300+r*180,g=mk('g',{},$('cans'));
  mk('rect',{x:x,y:y,width:140,height:120,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('ellipse',{cx:x+70,cy:y,rx:70,ry:14,fill:'var(--line)',stroke:'var(--ink)','stroke-width':5},g);
  mk('rect',{x:x+12,y:y+40,width:116,height:46,rx:6,fill:'var(--stage)',stroke:'var(--muted)','stroke-width':3},g);
  CAN.push([g,tx(g,x+70,y+72,'GOOD',{class:'m','font-size':24,'text-anchor':'middle'})])}
// drips: [startX,startY,runX,runTop,runEnd]; side runs hug the outer walls to the floor, front run stops above the label band
const DR=[[700,384,712,406,770],[300,384,288,406,770],[380,414,380,424,470]].map(q=>[q,mk('path',{class:'s-loss','stroke-width':14,'stroke-linecap':'round','stroke-linejoin':'round',fill:'none'},$('drp'))]);
for(let i=0;i<6;i++)[520,620].forEach(y=>mk('rect',{x:1065+i*65,y:y,width:45,height:60,class:'s-muted',fill:'var(--line)','stroke-width':3},$('store')));
for(let i=0;i<3;i++)mk('rect',{x:1090+i*110,y:360,width:70,height:80,rx:12,class:'gain'},$('store'));
const BUB=[1060,1200,1340].map(x=>{const g=mk('g',{},$('bub'));mk('rect',{x:x,y:210,width:120,height:54,rx:16,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);
  tx(g,x+60,250,'!',{class:'d','font-size':32,'text-anchor':'middle',style:'fill:var(--gain)'});return g});
const CRW=[];
for(let r=0;r<4;r++)for(let c=0;c<7;c++){const g=mk('g',{},$('crw'));PP(g,800+c*95,300+r*120,18,'ink');CRW.push(g)}
PP($('youG'),1085,540,18,'gain');
for(let i=0;i<9;i++)mk('circle',{cx:200+i*60,cy:250,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('spi'));
const ARS=[358,468,578].map(y=>mk('path',{d:`M740 ${y}C880 ${y} 900 400 1020 400`,fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 10'},$('ars')));
for(let i=0;i<6;i++){const a=(-165+i*30)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);
  mk('path',{d:`M${(1150+135*c).toFixed(1)} ${(400+135*s).toFixed(1)}L${(1150+175*c).toFixed(1)} ${(400+175*s).toFixed(1)}`,class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
cow($('endcow'),1260,700,'var(--gain)');