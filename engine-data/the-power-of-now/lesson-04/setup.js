const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1300+118*c).toFixed(1)+' '+(380+118*s).toFixed(1)+'L'+(1300+130*c).toFixed(1)+' '+(380+130*s).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ticks'))}
const TD=[];for(let i=0;i<10;i++)TD.push(mk('circle',{cx:200+i*133,cy:680,r:8,class:'ink','fill-opacity':.5},$('tdots')));
fig($('bod'),470,336,44,'ink');
[400,470,540].forEach(x=>mk('path',{d:'M'+x+' 220v60m-16-16 16 16 16-16',fill:'none',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('press')));
const TG=['BILLS','DEADLINES','AN AWKWARD CONVERSATION','A WORRY ABOUT NEXT YEAR'].map((s,i)=>{const y=290+i*90,g=mk('g',{},$('tags'));
  mk('path',{d:'M690 500L820 '+(y+30),stroke:'var(--loss)','stroke-width':3,'stroke-dasharray':'6 8',fill:'none'},g);
  mk('rect',{x:820,y:y,width:560,height:60,rx:30,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('text',{x:850,y:y+38,'font-size':22,class:'m'},g).textContent=s;return g});
const CP=['TOMORROW','LATER TODAY','THIS SECOND'].map((s,i)=>{const x=460+i*320,g=mk('g',{},$('chips3')),on=i===2;
  mk('rect',{x:x,y:350,width:290,height:64,rx:32,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--ink)','stroke-width':4},g);
  mk('text',{x:x+145,y:390,'font-size':22,'text-anchor':'middle',class:'m',style:on?'fill:var(--on-gain)':''},g).textContent=s;
  return [g,on?null:mk('path',{d:'M'+(x+20)+' 382H'+(x+270),stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round',opacity:0},g)]});
// timeline slots: centres at 940 + 88*i; the dark square hops slot to slot, light squares are the trail it leaves behind
const GH=[];for(let i=0;i<6;i++)GH.push(mk('rect',{x:910+i*88,y:600,width:60,height:60,rx:8,class:'loss',opacity:0},$('ghosts')));
fig($('clb'),480,396,14,'gain');
const ST=[];for(let i=0;i<7;i++)ST.push(mk('path',{d:'M'+(160+160*i)+' '+(760-70*i)+'V'+(690-70*i)+'H'+(320+160*i),fill:'none',stroke:i<2?'var(--ink)':'var(--muted)','stroke-width':i<2?8:5,'stroke-dasharray':i<2?'none':'12 10','stroke-linecap':'round','stroke-linejoin':'round'},$('stp')));
fig($('wki'),0,-76,18,'gain');
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(520+200*c).toFixed(1)+' '+(450+200*s).toFixed(1)+'L'+(520+240*c).toFixed(1)+' '+(450+240*s).toFixed(1),class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays'))}
fig($('me'),520,380,44,'ink');
const L7=['Feel your breath','Notice the room','Ask the question'].map((s,i)=>{const y=330+i*120,g=mk('g',{},$('lst'));
  mk('circle',{cx:1020,cy:y-12,r:26,class:'s-gain',fill:'none','stroke-width':5},g);
  mk('text',{x:1020,y:y-4,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--gain)'},g).textContent=i+1;
  mk('text',{x:1070,y:y,'font-size':38,class:'d5'},g).textContent=s;return g});
const RG=[0,1,2].map(()=>mk('circle',{cx:1300,cy:600,r:26,class:'s-gain',fill:'none','stroke-width':4},$('rg')));