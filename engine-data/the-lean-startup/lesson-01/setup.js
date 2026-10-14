const hum=(g,x,y,r,a)=>{mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)};
const DASH={fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'6 6'};
const gh=[1240,1330,1420].map(x=>{const g=mk('g',{},$('ghosts'));hum(g,x,610,18,DASH);return g});
hum($('ries'),260,330,40,{class:'ink'});
[[640,400],[960,400],[700,560],[900,560]].forEach(q=>hum($('team'),q[0],q[1],26,{class:'ink'}));
const qms=[[560,300],[1080,320],[1130,620],[520,660],[820,330],[1180,460]].map(q=>{const e=mk('text',{x:q[0],y:q[1],'font-size':64,class:'d','text-anchor':'middle',style:'fill:var(--loss)'},$('qms'));e.textContent='?';return e});
hum($('gar'),310,600,22,{class:'gain'});hum($('gar'),410,600,22,{class:'gain'});
for(let r=0;r<9;r++)for(let c=0;c<5;c++)if(r!==6)mk('rect',{x:1025+c*55,y:260+r*55,width:30,height:30,fill:'var(--line)'},$('tw'));
let hp='';for(let i=0;i<16;i++){const x=640+i*20,y=578-i*2+(i%2?4:-4);hp+=x+','+y+' ';mk('circle',{cx:x,cy:y,r:5,class:'ink'},$('hist'))}
mk('polyline',{points:hp,fill:'none',class:'s-ink','stroke-width':3},$('hist'));
const ticks=[];for(let i=0;i<5;i++){const y=340+i*76;mk('rect',{x:150,y:y-30,width:40,height:40,rx:6,fill:'none',class:'s-ink','stroke-width':4},$('chk'));
  const tx=mk('text',{x:212,y:y-2,'font-size':22,class:'m'},$('chk'));tx.textContent='MILESTONE '+(i+1);
  ticks.push(mk('path',{d:'M156 '+(y-12)+'l12 12 22-26',fill:'none',class:'s-gain','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('chk')))}
[150,100,50].forEach(r=>mk('circle',{cx:950,cy:470,r:r,fill:'none',class:'s-ink','stroke-width':6},$('plant')));
mk('circle',{cx:950,cy:470,r:14,class:'ink'},$('plant'));
[90,58].forEach(r=>mk('circle',{cx:1340,cy:300,r:r,fill:'none',class:'s-gain','stroke-width':6},$('realt')));
const core=mk('circle',{cx:1340,cy:300,r:24,class:'gain'},$('realt'));
hum($('win'),730,410,28,{class:'gain'});hum($('win'),870,410,28,{class:'ink'});
const NB=[[160,280,600,380],[160,500,600,520],[1220,280,1000,380],[1220,500,1000,520]];
const nets=NB.map(q=>{const g=mk('g',{},$('nets'));mk('rect',{x:q[0],y:q[1],width:220,height:90,rx:14,fill:'var(--stage)',class:'s-ink','stroke-width':5},g);
  const tx=mk('text',{x:q[0]+110,y:q[1]+52,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent='IM NETWORK';return g});
const wires=NB.map(q=>mk('path',{d:'M'+(q[0]<600?380:1220)+' '+(q[1]+45)+'L'+q[2]+' '+q[3],fill:'none','stroke-width':5,'stroke-dasharray':'10 8','stroke-linecap':'round'},$('wires')));
const segs=[];[[120,80,140],[60,170,90],[150,100,60],[90,130,110]].forEach((ws,r)=>{let x=630;ws.forEach(w=>{segs.push(mk('rect',{x:x,y:668+r*22,width:w,height:12,rx:6,fill:(segs.length%4===1)?'var(--gain)':'var(--ink)'},$('code')));x+=w+16})});
// scene 6: customer, friends on invite card, add-on code lines that drop into the bin
hum($('cust'),260,360,40,{class:'ink'});
[500,560,620].forEach(x=>hum($('cfr'),x,335,14,{class:'ink'}));
const pile=[];[[80,60,50],[50,100],[90,70],[60,80,40]].forEach((ws,r)=>{let x=1240;ws.forEach(w=>{const k=pile.length,g=mk('g',{},$('pile'));
  mk('rect',{x:-w/2,y:-6,width:w,height:12,rx:6,fill:k%4===1?'var(--gain)':'var(--ink)'},g);
  pile.push({g:g,sx:x+w/2,sy:300+r*24,ex:1040+((k%3)-1)*40,ey:662-Math.floor(k/3)*18,rt:(k%2?1:-1)*(6+(k%3)*4)});x+=w+12})});
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M'+(240+90*Math.cos(a)).toFixed(0)+' '+(360+90*Math.sin(a)).toFixed(0)+'L'+(240+115*Math.cos(a)).toFixed(0)+' '+(360+115*Math.sin(a)).toFixed(0),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
const tags=[];for(let i=0;i<4;i++){const y=360+i*90;mk('path',{d:'M480 '+(y-6)+'H'+(720-i*30),class:'s-line','stroke-width':10,'stroke-linecap':'round'},$('plan'));
  const r=mk('rect',{x:760,y:y-28,width:110,height:44,rx:22,'stroke-width':4},$('plan'));
  const tx=mk('text',{x:815,y:y+1,'font-size':20,'text-anchor':'middle',class:'m'},$('plan'));tags.push([r,tx])}
const chks=[1130,1260,1390].map(x=>{hum($('ppl'),x,420,30,{class:'ink'});return mk('path',{d:'M'+(x-16)+' 345l10 10 22-26',fill:'none',class:'s-gain','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('checks'))});
const sl=[150,120,140].map((w,i)=>mk('path',{d:'M1250 '+(690+i*40)+'h'+w,stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round'},$('slines')));