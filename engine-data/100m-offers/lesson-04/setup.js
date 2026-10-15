const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const star=(g,x,y,r,c)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;d+=(i?'L':'M')+(x+q*Math.cos(a)).toFixed(1)+' '+(y+q*Math.sin(a)).toFixed(1)}mk('path',{d:d+'Z',class:c},g)};
const txt=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
fig($('d2me'),300,520,40,'ink');fig($('d2hero'),900,400,28,'gain');star($('d2st'),800,360,18,'gain');star($('d2st'),1000,380,18,'gain');
fig($('d3me'),300,480,40,'ink');fig($('d3me2'),300,480,40,'gain');
const C3=['PEOPLE LIKE THEM','CLEAR RESULTS','TRACK RECORD'].map((s,i)=>{const x=500+i*270,g=mk('g',{},$('d3cards'));
  mk('rect',{x:x,y:240,width:240,height:260,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  if(i==0)for(let k=0;k<3;k++)fig(g,x+60+k*60,320,16,'ink');
  if(i==1)for(let k=0;k<4;k++)mk('rect',{x:x+50+k*38,y:390-k*22,width:26,height:30+k*22,class:k==3?'gain':'ink'},g);
  if(i==2)for(let k=0;k<5;k++)star(g,x+40+k*40,370,16,'gain');
  txt(g,x+120,470,s,{'font-size':20,'text-anchor':'middle',class:'m'});return g});
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(260+90*Math.cos(a)).toFixed(1)+' '+(470+90*Math.sin(a)).toFixed(1)+'L'+(260+102*Math.cos(a)).toFixed(1)+' '+(470+102*Math.sin(a)).toFixed(1),class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('d4tk'))}
for(let r=0;r<2;r++)for(let i=0;i<=12;i++){const x=480+i*920/12;mk('path',{d:'M'+x.toFixed(1)+' '+(r?552:332)+'v16',class:'s-muted','stroke-width':3},$(r?'d4tb':'d4ta'))}
const W4=[520,590,680,790,920,1080,1260].map((x,i)=>mk('circle',{cx:x,cy:560,r:i?14:18,class:'gain'},$('d4w')));
fig($('d5run'),330,420,26,'loss');
const SW=[0,1,2].map(i=>mk('circle',{cx:372+i*18,cy:400,r:6,class:'loss'},$('d5sw')));
[440,500,560].forEach(y=>{mk('circle',{cx:1220,cy:y,r:16,class:'gain'},$('d5rt'));mk('path',{d:'M1212 '+y+'l6 6 10-12',fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round'},$('d5rt'));mk('path',{d:'M1252 '+y+'H1420',class:'s-line','stroke-width':8,'stroke-linecap':'round'},$('d5rt'))});
const C6=[0,1,2].map(i=>{const y=250+i*100,g=mk('g',{},$('d6c'));mk('rect',{x:120,y:y,width:400,height:76,rx:14,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);star(g,165,y+38,16,'gain');txt(g,200,y+49,'The dream',{'font-size':30,class:'d5'});return g});
for(let i=0;i<=20;i++){const x=640+i*22;mk('path',{d:'M'+x+' 580v'+(i%5?12:22),class:'s-ink','stroke-width':3},$('d6rt'))}
const ND=['DREAM','BELIEF','TIME','EFFORT'].map((s,i)=>{const x=1055+(i%2)*190,y=345+Math.floor(i/2)*160,g=$('d7d');
  mk('circle',{cx:x,cy:y,r:48,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);txt(g,x,y+82,s,{'font-size':22,'text-anchor':'middle',class:'m'});
  const l=mk('line',{x1:x,y1:y,x2:x,y2:y-38,stroke:i<2?'var(--gain)':'var(--loss)','stroke-width':6,'stroke-linecap':'round'},g);mk('circle',{cx:x,cy:y,r:6,class:'ink'},g);return [l,x,y]});