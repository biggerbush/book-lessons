const fig=(g,x,y,r,a)=>[mk('circle',Object.assign({cx:x,cy:y,r:r},a),g),mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)];
const T=(g,x,y,s,c,str,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:c},a||{}),g);e.textContent=str;return e};
const star=(x,y,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;d+=(i?'L':'M')+(x+q*Math.cos(a)).toFixed(1)+' '+(y+q*Math.sin(a)).toFixed(1)}return d+'z'};
const MI='JFMAMJJASOND';
const MO=['JAN','MAR','FEB','JAN','OCT','FEB','MAR','JAN'],rows=MO.map((m,i)=>{const y=330+i*56,g=mk('g',{},$('rows'));
  mk('circle',{cx:175,cy:y-8,r:20,class:'ink'},g);T(g,175,y-1,18,'m',String(i*7%30+4),{'text-anchor':'middle',style:'fill:var(--stage)'});
  mk('path',{d:'M215 '+(y-8)+'h'+(200+(i*37)%60),class:'s-line','stroke-width':8,'stroke-linecap':'round'},g);
  return [g,T(g,650,y,22,'m',m,{'text-anchor':'end'}),m!=='OCT']});
const BH=[300,285,260,225,195,170,150,130,115,100,90,80],bars=BH.map((h,i)=>{const x=780+i*58;T($('bars'),x+20,718,22,'m',MI[i],{'text-anchor':'middle'});
  return mk('rect',{x:x,y:680,width:40,height:0,fill:i<3?'var(--gain)':'var(--muted)'},$('bars'))});
for(let i=0;i<12;i++){const x=300+i*1000/11;mk('path',{d:'M'+x.toFixed(1)+' 290v20',class:'s-ink','stroke-width':4},$('ticks'));T($('ticks'),x.toFixed(1),272,22,'m',MI[i],{'text-anchor':'middle'})}
fig($('kA'),0,-100.8,24,{class:'gain'});fig($('kB'),0,-100.8,24,{class:'loss'});
const KS=[1.3,.85,1.25,.9,1.2,.8,1.3,.95],k3=KS.map((s,i)=>{const x=220+i*120,o=mk('g',{},$('kids3')),n=mk('g',{transform:'translate('+x+' 720) scale('+s+')'},o);
  const f=fig(n,0,-92.4,22,{class:'ink'}),st=s>1?mk('path',{d:star(x,720-114*s-34,22),class:'gain'},$('kids3')):null;return [o,f,st,s>1]});
fig($('coachF'),1340,634,30,{class:'ink'});
// snowball: stations along the slope (line y = 360 + (x-160)*0.3125), ball sits on the upper side
const SLY=x=>360+(x-160)*.3125, NX=.2983, NY=.9545;
const SX=[440,720,1000,1260], SLB=['BETTER COACHING','BETTER TEAMMATES','MORE GAMES','MORE PRACTICE'];
const stp=SX.map((x,i)=>{const y=SLY(x),g=mk('g',{},$('steps'));
  mk('circle',{cx:x,cy:y,r:9,class:'ink'},g);
  mk('path',{d:'M'+x+' '+(y+14).toFixed(1)+'V'+(y+58).toFixed(1),class:'s-muted','stroke-width':3,'stroke-dasharray':'5 6'},g);
  T(g,x,(y+86).toFixed(1),22,'m',SLB[i],{'text-anchor':'middle',style:i===3?'fill:var(--gain)':''});return g});
const gh=SX.slice(0,3).map((x,i)=>{const r=18+22*(i+1);return mk('circle',{cx:(x+(r+3)*NX).toFixed(1),cy:(SLY(x)-(r+3)*NY).toFixed(1),r:r,fill:'none',class:'s-gain','stroke-width':3,'stroke-dasharray':'8 8',opacity:0},$('ghosts'))});
const SW=['SUCCESS','OPPORTUNITY','SUCCESS','OPPORTUNITY','SUCCESS'],steps=SW.map((w,i)=>{const x=720+150*i,y=650-90*i,g=mk('g',{},$('stairs'));
  mk('rect',{x:x,y:y,width:150,height:740-y,fill:'var(--stage)',class:'s-ink','stroke-width':5},g);
  T(g,x+75,y+40,18,'m',w,i%2?{'text-anchor':'middle'}:{'text-anchor':'middle',style:'fill:var(--gain)'});return g});
const cl0=mk('g',{},$('climb'));fig(cl0,0,-75.6,18,{class:'gain'});
const lost=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('lostF'));fig(g,180+i*110,380,24,{class:'s-loss',fill:'none','stroke-width':4,'stroke-dasharray':'8 6'});return g});
[810,900,990,1210,1300,1390].forEach(x=>fig($('lgK'),x,420,22,{class:'gain'}));