const guy=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const heart=(g,x,y,s)=>mk('path',{d:'M0 12C-24-4-22-26-8-26C-3-26 0-22 0-19C0-22 3-26 8-26C22-26 24-4 0 12Z',class:'gain',transform:'translate('+x+' '+y+') scale('+s+')'},g);
const txt=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};

guy($('t0p'),1265,560,34,'ink');
guy($('c1p'),230,440,36,'ink');guy($('y1p'),560,440,36,'ink');
const pr1=mk('rect',{x:870,width:580,rx:10,class:'gain'},$('w1')),pt1=txt($('w1'),900,0,'YOUR PRIORITIES',{class:'m','font-size':22,style:'fill:var(--on-gain)'});
const B1=[];for(let i=0;i<5;i++){const g=mk('g',{},$('w1'));mk('rect',{x:870,y:310+i*76,width:580,height:66,rx:10,class:'loss'},g);txt(g,900,351+i*76,'SAID YES',{class:'m','font-size':22,style:'fill:var(--stage)'});B1.push(g)}

guy($('pr2p'),1200,280,34,'ink');heart($('h2'),1290,250,1.6);
guy($('dkp'),320,660,26,'ink');guy($('rcp'),1280,660,26,'ink');heart($('h2b'),1340,640,1.2);
guy($('hsp'),1240,400,28,'ink');guy($('hsp'),1420,400,28,'ink');

const C4=[['1 · THE PAUSE',['Say nothing for a beat.','Let the silence work.']],['2 · THE SOFT DELAY',['“Let me check my','calendar and get','back to you.”']],['3 · ASK YOUR MANAGER',['“Yes. Which of my','other tasks','should I drop?”']],['4 · REFER SOMEONE',['Suggest someone who','might be a better fit.']]];
const K4=[],R4=[];let H4;
C4.forEach((c,i)=>{const x=120+(i%2)*690,y=220+Math.floor(i/2)*320,cx=x+115,cy=y+150,g=mk('g',{},$('cd4'));K4.push(g);
  R4.push(mk('rect',{x:x,y:y,width:670,height:290,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g));
  txt(g,x+230,y+70,c[0],{class:'m','font-size':20});
  c[1].forEach((s,j)=>txt(g,x+230,y+130+j*42,s,{class:'d5','font-size':30}));
  if(i==0){mk('circle',{cx:cx,cy:cy,r:62,fill:'var(--stage)',class:'s-ink','stroke-width':7},g);H4=mk('path',{d:'M'+cx+' '+cy+'v-44',class:'s-gain','stroke-width':7,'stroke-linecap':'round'},g);mk('circle',{cx:cx,cy:cy,r:8,class:'ink'},g)}
  if(i==1){mk('rect',{x:cx-60,y:cy-55,width:120,height:115,rx:10,fill:'var(--stage)',class:'s-ink','stroke-width':6},g);mk('rect',{x:cx-60,y:cy-55,width:120,height:28,class:'gain'},g);
    for(let r=0;r<3;r++)for(let k=0;k<3;k++)mk('circle',{cx:cx-30+k*30,cy:cy+2+r*24,r:6,class:r==1&&k==2?'gain':'ink'},g)}
  if(i==2)for(let r=0;r<3;r++){const yy=cy-40+r*40;mk('rect',{x:cx-62,y:yy-12,width:24,height:24,rx:4,fill:'var(--stage)',class:'s-ink','stroke-width':4},g);
    mk('path',{d:'M'+(cx-26)+' '+yy+'h86',stroke:r==1?'var(--loss)':'var(--ink)','stroke-width':7,'stroke-linecap':'round','stroke-dasharray':r==1?'6 10':'none'},g)}
  if(i==3){guy(g,cx-45,cy-20,16,'ink');guy(g,cx+45,cy-20,16,'gain');
    mk('path',{d:'M'+(cx-30)+' '+(cy-48)+'Q'+cx+' '+(cy-84)+' '+(cx+30)+' '+(cy-48)+'m-16-2 16 2 0-16',fill:'none',class:'s-gain','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g)}
});

const C5=[];for(let i=0;i<10;i++)C5.push(mk('ellipse',{cx:390,cy:780-i*24,rx:110,ry:16,class:'gain',stroke:'var(--ink)','stroke-width':3},$('cn5')));
const BR5=[];for(let i=0;i<8;i++){const h=60+i*28;BR5.push(mk('rect',{x:910+i*68,y:760-h,width:40,height:h,fill:'var(--ink)','fill-opacity':.3},$('br5')))}
const RP5=[];for(let i=0;i<=20;i++)RP5.push((930+i*25.5).toFixed(1)+','+(520+220*Math.pow(i/20,1.3)+8*Math.sin(i*1.7)).toFixed(1));

const CL6=[['ellipse',{cx:780,cy:380,rx:330,ry:120}],['circle',{cx:610,cy:300,r:60}],['circle',{cx:780,cy:280,r:70}],['circle',{cx:950,cy:300,r:60}],['circle',{cx:505,cy:490,r:16}],['circle',{cx:450,cy:515,r:11}],['circle',{cx:400,cy:535,r:7}]];
CL6.forEach(s=>mk(s[0],Object.assign({fill:'none',class:'s-ink','stroke-width':6},s[1]),$('cls6')));
CL6.forEach(s=>mk(s[0],Object.assign({fill:'var(--stage)'},s[1]),$('cls6')));
guy($('wk6'),0,0,40,'ink');

const ST7=[];for(let i=0;i<5;i++){const g=mk('g',{},$('st7')),y=760-(i+1)*80;mk('rect',{x:160+i*120,y:y,width:120,height:(i+1)*80,fill:'var(--stage)',class:'s-ink','stroke-width':5,'stroke-linejoin':'round'},g);
  txt(g,220+i*120,y+46,'NO',{class:'m','font-size':20,'text-anchor':'middle',style:'fill:var(--gain)'});ST7.push(g)}
guy($('cl7'),0,-66,16,'gain');
const TK7=[];for(let k=0;k<12;k++){const x=1050+(k%6)*68,y=380+Math.floor(k/6)*80,g=mk('g',{},$('tk7'));mk('circle',{cx:x,cy:y,r:24,class:'gain'},g);
  mk('path',{d:'M'+x+' '+y+'v-13M'+x+' '+y+'h9',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round'},g);TK7.push(g)}