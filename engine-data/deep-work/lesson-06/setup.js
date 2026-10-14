const env=(g,w,f,s)=>{const h=w*.68;mk('rect',{x:-w/2,y:-h/2,width:w,height:h,rx:4,fill:f,stroke:s,'stroke-width':4},g);mk('path',{d:'M'+(-w/2)+' '+(-h/2)+'L0 '+(h*.1)+'L'+(w/2)+' '+(-h/2),fill:'none',stroke:s,'stroke-width':4,'stroke-linejoin':'round'},g)};
const tx=(g,x,y,s,o)=>{const e=mk('text',Object.assign({x:x,y:y},o),g);e.textContent=s;return e};
const tr=(e,x,y,s)=>e.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')'+(s==null?'':' scale('+s.toFixed(3)+')'));
const op=(e,v)=>e.setAttribute('opacity',cl(v).toFixed(3));
const FL=[0,1,2,3,4].map(()=>{const g=mk('g',{},$('flo'));env(g,40,'var(--stage)','var(--loss)');return g});
const IC=[];for(let i=0;i<12;i++){const g=mk('g',{},$('ics')),k=i%3;
  if(k==0)env(g,44,'var(--stage)','var(--loss)');
  else if(k==1)[-12,12].forEach(d=>{mk('circle',{cx:d,cy:-8,r:9,fill:'var(--loss)'},g);mk('path',{d:'M'+(d-13)+' 18a13 13 0 0 1 26 0z',fill:'var(--loss)'},g)});
  else mk('path',{d:'M-22 -16h44v26h-26l-10 10v-10h-8z',fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4,'stroke-linejoin':'round'},g);
  IC.push(g)}
// hour labels and gridlines (drawn first, behind all blocks)
const HR=[];for(let r=0;r<9;r++){const g=mk('g',{},$('hrs'));tx(g,165,280+r*64,''+(9+r),{class:'m','font-size':20,'text-anchor':'middle'});if(r)mk('path',{d:'M210 '+(240+r*64)+'H880',class:'s-line','stroke-width':2},g);HR.push(g)}
// each block gets an opaque stage-coloured underlay so no gridline shows through a block or its label
const blk=(g,[r,n,s,c])=>{const e=mk('g',{},g),y=245+r*64,h=n*64-10;
  mk('rect',{x:228,y:y,width:632,height:h,rx:10,fill:'var(--stage)'},e);
  mk('rect',{x:228,y:y,width:632,height:h,rx:10,fill:c=='g'?'var(--gain)':c=='l'?'var(--loss)':'var(--line)','fill-opacity':c=='l'?.3:1},e);
  tx(e,252,247+r*64+n*32,s,{class:'m','font-size':20,style:'fill:var(--'+(c=='g'?'on-gain':'ink')+')'});return e};
const DA=[[0,2,'DEEP WORK','g'],[2,1,'EMAIL','l'],[3,1,'LUNCH','n'],[4,2,'DEEP WORK','g'],[6,1,'MEETINGS','l'],[7,2,'SHALLOW TASKS','l']];
const BLA=DA.map(b=>blk($('blkA'),b)), BLB=[[4,1,'INTERRUPTION','l'],[5,2,'DEEP WORK','g'],[7,2,'EMAIL + ADMIN','l']].map(b=>blk($('blkB'),b));
const wed=(a,b)=>{const P=f=>(900+220*Math.sin(f*6.2832)).toFixed(1)+' '+(500-220*Math.cos(f*6.2832)).toFixed(1);return 'M900 500L'+P(a)+'A220 220 0 '+(b-a>.5?1:0)+' 1 '+P(b)+'Z'};
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(360+148*s).toFixed(1)+' '+(470-148*c).toFixed(1)+'L'+(360+164*s).toFixed(1)+' '+(470-164*c).toFixed(1),class:'s-ink','stroke-width':i%3?4:8,'stroke-linecap':'round'},$('tks'))}
const TK=[[220,700,480,712,312,'DEEP WORK',1],[160,940,480,944,312,'KEY TASK',1],[160,1120,480,1116,312,'KEY TASK',1],[110,700,600,0,0,'LOW',0],[110,830,600,0,0,'LOW',0],[110,960,600,0,0,'LOW',0]].map(q=>{const g=mk('g',{},$('tk'));
  mk('rect',{x:0,y:0,width:q[0],height:76,rx:10,fill:q[6]?'var(--gain)':'var(--loss)','fill-opacity':q[6]?1:.35},g);
  tx(g,q[0]/2,46,q[5],{class:'m','font-size':20,'text-anchor':'middle',style:'fill:var(--'+(q[6]?'on-gain':'ink')+')'});return [g,q]});
for(let k=0;k<3;k++){const y=540+k*50;mk('path',{d:'M168 '+y+'l10 10 20-22',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('rows'));mk('rect',{x:216,y:y-7,width:360-k*60,height:14,rx:7,fill:'var(--line)'},$('rows'))}
const FE=[];for(let i=0;i<6;i++){const g=mk('g',{},$('fl6'));env(g,40,i%3==0?'var(--gain)':'var(--stage)',i%3==0?'var(--ink)':'var(--muted)');FE.push(g)}
const BB=[];for(let i=0;i<8;i++){const g=mk('g',{},$('thr')),x=i%2==0?460:120,y=320+i*54;
  mk('rect',{x:x,y:y,width:300,height:40,rx:16,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  if(i==0)tx(g,480,347,'SURE, WHEN WORKS?',{class:'m','font-size':18});else mk('path',{d:'M'+(x+24)+' '+(y+20)+'h'+(150+(i*37)%90),class:'s-line','stroke-width':6,'stroke-linecap':'round'},g);BB.push(g)}
for(let r=0;r<2;r++)for(let c=0;c<3;c++)mk('circle',{cx:935+c*45,cy:370+r*40,r:10,fill:r==1&&c==1?'var(--gain)':'var(--line)'},$('cal'));
const MB=[];for(let i=0;i<5;i++)MB.push(mk('rect',{x:1180+i*46,y:670,width:38,height:60,rx:6,fill:i%2?'var(--line)':'var(--gain)'},$('mini')));
$('rest').setAttribute('d',wed(.5,1));