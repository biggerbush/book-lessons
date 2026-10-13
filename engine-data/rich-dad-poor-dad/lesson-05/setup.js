const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const hut=(g,x,y,w,a)=>mk('path',Object.assign({d:'M'+x+' '+(y+w*.45)+'L'+(x+w/2)+' '+y+'L'+(x+w)+' '+(y+w*.45)+'V'+(y+w)+'H'+x+'Z','stroke-linejoin':'round'},a),g);
const txt=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
const BL=[[1196,120],[1244,80],[1290,140],[1356,110],[1400,150],[1444,90]].map((b,i)=>mk('rect',{x:b[0],y:640-b[1],width:36,height:b[1],fill:i<3?'var(--loss)':'var(--stage)',stroke:i<3?'var(--loss)':'var(--gain)','stroke-width':5},$('city')));
mk('path',{d:'M1338 230V640',stroke:'var(--muted)','stroke-width':3,'stroke-dasharray':'6 8'},$('city'));
const PP={5:[[-30,-30],[30,-30],[0,0],[-30,30],[30,30]],3:[[-30,-30],[0,0],[30,30]]};
[[270,420,-10,5],[430,500,12,3]].forEach(d=>{const g=mk('g',{transform:'translate('+d[0]+' '+d[1]+') rotate('+d[2]+')'},$('dice'));mk('rect',{x:-60,y:-60,width:120,height:120,rx:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':7},g);PP[d[3]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:11,class:'ink'},g))});
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(800+110*c).toFixed(0)+' '+(420+110*s).toFixed(0)+'L'+(800+140*c).toFixed(0)+' '+(420+140*s).toFixed(0),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
const IC=[c=>'M'+(c+18)+' 323l32 32',c=>'M'+c+' 265v90M'+(c-40)+' 355h80M'+(c-60)+' 285h120M'+(c-60)+' 285l-20 40h40zM'+(c+60)+' 285l-20 40h40z',c=>'M'+(c-50)+' 315h90m-30-30 30 30-30 30'];
const CD=['Spot','Judge','Act'].map((s,i)=>{const x=120+i*460,c=x+340,g=mk('g',{},$('cards'));mk('rect',{x:x,y:230,width:440,height:170,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);txt(g,s,{x:x+40,y:335,'font-size':52,class:'d'});
  if(i===0)mk('circle',{cx:c-5,cy:300,r:30,fill:'none',stroke:'var(--gain)','stroke-width':6},g);mk('path',{d:IC[i](c),fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
const BK=['NUMBERS','MARKETS','DEALS'].map((s,i)=>{const x=120+[20,0,40][i],y=550+i*80,g=mk('g',{},$('books'));mk('rect',{x:x,y:y,width:[400,440,380][i],height:66,rx:6,fill:i===1?'var(--gain)':'var(--stage)',stroke:i===1?'var(--gain)':'var(--ink)','stroke-width':5},g);txt(g,s,{x:x+30,y:y+42,'font-size':24,class:'m',style:i===1?'fill:var(--on-gain)':'fill:var(--ink)'});return g});
fig($('blP'),880,590,46,'ink');
const HS=[];for(let i=0;i<5;i++)HS.push(hut($('town'),140+i*110,476,84,{fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5}));
const CR=mk('g',{},$('crowd3'));for(let i=0;i<8;i++)fig(CR,560+i*90,670,18,'loss');
for(let i=0;i<4;i++)mk('rect',{x:160+i*62,y:345,width:22,height:200,class:'ink'},$('cols'));
const AR=[420,795,1150].map(x=>mk('path',{d:'M'+x+' 470h60m-18-18 18 18-18 18',fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('arr4')));
fig($('hsP'),1300,400,28,'ink');fig($('hsP'),1420,400,28,'gain');
fig($('nb'),260,440,30,'ink');fig($('nb'),380,440,30,'ink');
fig($('him'),1280,430,34,'gain');
fig($('rdP'),320,380,36,'gain');
const TG=[330,440,550].map(y=>{const g=mk('g',{},$('tags6'));mk('rect',{x:1370,y:y,width:100,height:60,rx:10,class:'gain'},g);txt(g,'DEAL',{x:1420,y:y+38,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'});return g});
for(let i=0;i<7;i++)mk('circle',{cx:562,cy:272+i*42,r:9,fill:'none',stroke:'var(--ink)','stroke-width':4},$('note'));
const RW=[];for(let i=0;i<5;i++){const y=300+i*50,g=mk('g',{},$('rows'));mk('path',{d:'M600 '+y+'h'+(150-(i%3)*30),stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},g);mk('path',{d:'M800 '+(y-10)+'l12 12 24-24',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);RW.push(g)}
const MH=[];for(let r=0;r<2;r++)for(let c=0;c<3;c++)MH.push(hut($('mh'),1040+c*150,280+r*140,80,{fill:'none',stroke:'var(--muted)','stroke-width':5}));