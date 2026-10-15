const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
fig($('dper'),300,400,26,'ink'); fig($('nper'),1040,400,26,'gain');
const PL=[0,1,2,3].map(i=>mk('rect',{x:528,y:380,width:74,height:10,rx:5,class:'loss'},$('phl')));
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('line',{x1:830+80*Math.cos(a),y1:440+80*Math.sin(a),x2:830+92*Math.cos(a),y2:440+92*Math.sin(a),class:'s-ink','stroke-width':4},$('ticks'))}
const SQ=[];for(let i=0;i<6;i++)for(let j=0;j<(i+1)*2;j++)SQ.push(mk('rect',{x:1030+i*72,y:598-j*28,width:60,height:22,rx:4,class:'gain'},$('bars')));
// episode strip with a column of viewers under each episode, growing along the timeline
const EP=[];for(let i=0;i<20;i++)EP.push(mk('rect',{x:120+i*68,y:470,width:56,height:44,rx:6,stroke:'var(--ink)','stroke-width':4},$('eps')));
const VC=[];for(let i=0;i<20;i++){const cx=148+i*68,n=Math.round(1+13*Math.pow(i/19,3)),figs=[];
  for(let k=0;k<n;k++){const g=mk('g',{},$('aud')),j=Math.floor(k/2),x=n===1?cx:cx+(k%2?14:-14);fig(g,x,752-j*34,6,'ink');figs.push(g)}
  VC.push(figs)}
const LY=[560,500,440,390],LV=LY.map((y,i)=>{const s=i%2?1:-1,x=800+s*32;return mk('ellipse',{cx:x,cy:y,rx:32,ry:13,class:'gain',transform:'rotate('+(-25*s)+' '+x+' '+y+')'},$('leaves'))});
const FL=[230,320,410].map(x=>{const g=mk('g',{},$('flee'));fig(g,x,470,20,'ink');return g});
[1180,1300,1420].forEach(x=>fig($('fans'),x,470,20,'ink'));
const BC=[];for(let i=0;i<16;i++)BC.push(mk('circle',{cx:200+i*80,cy:770,r:18,class:'gain'},$('bigc')));
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('circle',{cx:330+120*Math.cos(a),cy:470+120*Math.sin(a),r:20,class:'ink'},$('comm'))}
// doors: indigo leaf shrinks toward its hinge (explicit width, no scaling); handle sits on the right side
const DR=['ADVERTISING','SPONSORSHIPS','SPEAKING','CONSULTING'].map((s,i)=>{const x=640+i*210,g=mk('g',{},$('doors'));
  mk('rect',{x:x,y:300,width:150,height:260,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  mk('circle',{cx:x+75,cy:430,r:40,class:'gain'},g);
  const d=mk('text',{x:x+75,y:446,'font-size':44,'text-anchor':'middle',class:'d',style:'fill:var(--on-gain)'},g);d.textContent='$';
  const pg=mk('rect',{x:x+3,y:303,width:144,height:254,class:'loss'},g);
  const hd=mk('circle',{cx:x+126,cy:440,r:9,class:'gain'},g);
  const lb=mk('text',{x:x+75,y:278,'font-size':20,'text-anchor':'middle',class:'m'},g);lb.textContent=s;
  const a=(15+22*i)*Math.PI/180,sx=330+150*Math.cos(a),sy=470+150*Math.sin(a),ex=x+75,ey=568;
  const lk=mk('g',{},$('links'));
  mk('path',{d:'M'+sx.toFixed(1)+' '+sy.toFixed(1)+'Q'+ex+' '+(620+i*45)+' '+ex+' '+ey,fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 10','stroke-linecap':'round'},lk);
  mk('circle',{cx:sx.toFixed(1),cy:sy.toFixed(1),r:7,class:'gain'},lk);
  mk('circle',{cx:ex,cy:ey,r:7,class:'gain'},lk);
  return [pg,hd,lb,lk]});
const CE=[];for(let i=0;i<42;i++)CE.push(mk('rect',{x:140+(i%7)*48,y:320+Math.floor(i/7)*38,width:40,height:28,rx:4},$('cells')));
const ST=[];for(let i=0;i<12;i++)ST.push(mk('path',{d:'M'+(600+i*46)+' '+(746-i*38.6).toFixed(1)+'v-38h46',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('steps')));
const HR=[];for(let i=0;i<30;i++)HR.push(mk('rect',{x:143+i*44,y:660,width:32,height:32,rx:6},$('hrs')));