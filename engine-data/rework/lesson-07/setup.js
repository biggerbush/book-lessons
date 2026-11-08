const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const tw=[[130,410],[290,350],[450,410],[600,350]].map(([x,y])=>{const g=mk('g',{},$('tweaks'));mk('rect',{x:x,y:y,width:140,height:52,rx:26,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);const tx=mk('text',{x:x+70,y:y+34,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent='TWEAK';return g});
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(860+82*c).toFixed(1)+' '+(400+82*s).toFixed(1)+'L'+(860+92*c).toFixed(1)+' '+(400+92*s).toFixed(1),class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('ticks'))}
const cells=[];for(let i=0;i<30;i++)cells.push(mk('rect',{x:620+(i%6)*62,y:300+Math.floor(i/6)*56,width:54,height:48,rx:8,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('cal_cells')));
const CL=[[0,220,'ink'],[30,160,'gain'],[30,240,'ink'],[60,120,'gain'],[30,200,'ink'],[0,90,'ink']].map(([dx,w,c],i)=>[mk('rect',{x:1110+dx,y:278+i*36,width:0,height:14,rx:7,fill:'var(--'+c+')'},$('code_l')),w]);
fig($('dsk_p'),400,400,34,'ink');
[[-60,0,-12],[10,0,8],[70,4,-6],[-30,40,15],[40,44,-10],[0,82,4],[-10,118,-20]].forEach(([dx,dy,a])=>mk('rect',{x:-40,y:-28,width:80,height:56,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,transform:'translate('+(1160+dx)+' '+(620-dy)+') rotate('+a+')'},$('pile')));
[1340,1420].forEach(x=>fig($('guilt'),x,470,22,'ink'));
for(let k=0;k<7;k++){const a=Math.PI*(1+k/6),c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1260+110*c).toFixed(1)+' '+(420+110*s).toFixed(1)+'L'+(1260+145*c).toFixed(1)+' '+(420+145*s).toFixed(1),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
for(let i=0;i<14;i++){const y=280+i*34;mk('rect',{x:150,y:y-14,width:18,height:18,rx:3,fill:'none',class:'s-muted','stroke-width':3},$('lst_l'));mk('path',{d:'M184 '+(y-5)+'h'+(180+(i*37)%100),class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('lst_l'))}
const cards=[0,1,2,3,4].map(i=>{const x=600+i*172,g=mk('g',{},$('chunks'));mk('rect',{x:x,y:400,width:150,height:160,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);const c=mk('path',{d:'M'+(x+40)+' 480l25 25 45-50',fill:'none',stroke:'var(--gain)','stroke-width':9,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g);return [g,c]});
const PY=x=>600+18*Math.sin(x/110);
let rd='';for(let x=120;x<=1480;x+=20)rd+=(x===120?'M':'L')+x+' '+PY(x).toFixed(1);$('road').setAttribute('d',rd);
[320,560,800,1040].forEach(x=>{mk('rect',{x:x-18,y:PY(x)+18,width:36,height:28,rx:4,class:'gain'},$('ships'));const tx=mk('text',{x:x,y:PY(x)+76,'font-size':18,'text-anchor':'middle',class:'m'},$('ships'));tx.textContent='SHIP'});
fig($('walker'),0,0,16,'ink');
mk('path',{d:'M-20 36L-50 44',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('walker'));
mk('rect',{x:-66,y:44,width:32,height:24,rx:4,class:'gain'},$('walker'));
mk('path',{d:'M-66 52h32',stroke:'var(--on-gain)','stroke-width':3},$('walker'));
[1270,1345,1420].forEach(x=>fig($('team'),x,430,20,'gain'));