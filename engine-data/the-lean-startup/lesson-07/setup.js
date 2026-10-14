const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
const env=(g,x,y,w,h,s='var(--ink)')=>{mk('rect',{x:x,y:y,width:w,height:h,rx:6,fill:'var(--stage)',stroke:s,'stroke-width':5},g);mk('path',{d:`M${x} ${y}L${x+w/2} ${y+h*.55}L${x+w} ${y}`,fill:'none',stroke:s,'stroke-width':5,'stroke-linejoin':'round'},g)};
const arr=(g,x1,y,x2)=>mk('path',{d:`M${x1} ${y}H${x2}m-16 -16l16 16-16 16`,fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
const tx=(g,x,y,s,fs,c,o={})=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:c},o),g);e.textContent=s;return e};

for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${1330+108*c} ${400+108*s}L${1330+92*c} ${400+92*s}`,stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('swt'))}

const ND=['BUILD','MEASURE','LEARN'].map((s,i)=>{const a=-Math.PI/2+i*2*Math.PI/3,x=520+230*Math.cos(a),y=520+230*Math.sin(a),g=mk('g',{},$('nodes'));
  const c=mk('circle',{cx:x,cy:y,r:72,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);return [g,c,tx(g,x,y+8,s,22,'m',{'text-anchor':'middle'})]});
for(let i=0;i<3;i++){const a=-Math.PI/6+i*2*Math.PI/3,cx=520+230*Math.cos(a),cy=520+230*Math.sin(a),vx=-Math.sin(a),vy=Math.cos(a),nx=Math.cos(a),ny=Math.sin(a);
  mk('path',{d:`M${cx-vx*10+nx*16} ${cy-vy*10+ny*16}L${cx+vx*12} ${cy+vy*12}L${cx-vx*10-nx*16} ${cy-vy*10-ny*16}`,fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('lpa'))}

for(let i=0;i<5;i++)env($('pile'),160+i*24,250+i*30,260,140);
const fm=$('fam');fig(fm,1100,300,34,'ink');fig(fm,940,360,24,'gain');fig(fm,1260,360,24,'gain');mk('path',{d:'M860 480H1340',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},fm);
const BS=['FOLD ALL','STUFF ALL','SEAL ALL','STAMP ALL'].map((s,i)=>{const x=120+i*353,g=$('batch');
  mk('rect',{x:x,y:585,width:300,height:180,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);tx(g,x+20,623,s,22,'m');if(i<3)arr(g,x+308,675,x+346);
  const sh=[];for(let k=0;k<9;k++)sh.push(mk('rect',{x:x+50,y:745-k*12,width:200,height:8,rx:3,fill:i<3?'var(--ink)':'var(--gain)'},g));return sh});

const ST=['FOLD','STUFF','SEAL','STAMP'].map((s,i)=>{const c=220+i*300,r=mk('rect',{x:c-110,y:230,width:220,height:80,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('pipe'));tx($('pipe'),c,280,s,24,'m',{'text-anchor':'middle'});return r});
mk('path',{d:'M160 380H1290',stroke:'var(--line)','stroke-width':4,'stroke-dasharray':'10 10'},$('pipe'));
env($('mov'),0,0,80,52);
const DN=[];for(let k=0;k<5;k++){const g=mk('g',{},$('done'));env(g,1340,400-k*16,100,60,'var(--gain)');DN.push(g)}

const PL=[];for(let k=0;k<18;k++)for(let i=0;i<5;i++)PL.push(mk('rect',{x:890+i*112,y:630-k*14,width:90,height:10,rx:3,fill:'var(--ink)'},$('pl')));

const TY=[];for(let i=0;i<11;i++){const x=160+i*110;TY.push([mk('rect',{x:x,y:674,width:36,height:36,rx:6,class:'gain'},$('tiny')),mk('circle',{cx:x+18,cy:648,r:9,fill:'var(--ink)'},$('tiny'))])}

const PK=[];for(let i=0;i<6;i++)PK.push(mk('rect',{x:420,y:311,width:28,height:28,rx:5},$('pk')));
[1260,1340,1420].forEach(x=>fig($('cust'),x,290,22,'ink'));

const CD=[['BUILD','BUILD THE SMALLEST','THING THAT MEASURES',3],['MEASURE','WHAT WOULD YOU','MEASURE?',2],['LEARN','WHAT DO YOU','NEED TO LEARN?',1]].map((d,i)=>{const x=120+i*490,cx=x+190,g=$('cards');
  const r=mk('rect',{x:x,y:260,width:380,height:320,rx:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  tx(g,cx,480,d[0],44,'d',{'text-anchor':'middle'});tx(g,cx,525,d[1],20,'m',{'text-anchor':'middle'});tx(g,cx,553,d[2],20,'m',{'text-anchor':'middle'});
  if(i<2)arr(g,x+392,420,x+478);
  const ic=mk('g',{},g);mk('circle',{cx:x+44,cy:304,r:24,class:'gain'},ic);tx(ic,x+44,313,String(d[3]),24,'d',{'text-anchor':'middle',style:'fill:var(--on-gain)'});
  if(i===2)tx(ic,cx,410,'?',120,'d',{'text-anchor':'middle',style:'fill:var(--gain)'});
  if(i===1){mk('rect',{x:cx-100,y:335,width:200,height:50,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},ic);for(let j=1;j<10;j++)mk('path',{d:`M${cx-100+j*20} 335v${j%2?14:26}`,stroke:'var(--ink)','stroke-width':4},ic)}
  if(i===0){mk('path',{d:`M${cx+30} 340L${cx-50} 425`,stroke:'var(--ink)','stroke-width':14,'stroke-linecap':'round'},ic);mk('path',{d:`M${cx} 312L${cx+60} 368`,stroke:'var(--gain)','stroke-width':30},ic)}
  return [r,ic]});

const CC=[];for(let k=0;k<12;k++)CC.push(mk('rect',{x:1282+(k%4)*44,y:282+Math.floor(k/4)*38,width:30,height:28,rx:5},$('cells')));
const sc=$('sc');[-22,22].forEach(y=>mk('circle',{cx:60,cy:y,r:16,fill:'none',stroke:'var(--ink)','stroke-width':6},sc));
mk('path',{d:'M46 -14L-40 10M46 14L-40 -10',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},sc);