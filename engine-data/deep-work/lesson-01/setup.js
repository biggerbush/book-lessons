const P=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const DR=(e,k)=>e.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const hero=P($('hero'),1320,590,30,'ink');
P($('deskman'),340,470,30,'ink');
const rings=[0,1,2].map(()=>mk('circle',{cx:530,cy:548,r:40,fill:'none',stroke:'var(--gain)','stroke-width':5},$('rings')));
const env=[];for(let i=0;i<9;i++){const x=1030+(i*53)%140,y=570-i*27,o=mk('g',{},$('pile')),g=mk('g',{transform:'rotate('+((i%3-1)*7)+' '+(x+70)+' '+(y+40)+')'},o);
  mk('rect',{x:x,y:y,width:140,height:80,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('path',{d:'M'+x+' '+y+'l70 44 70-44',fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linejoin':'round'},g);env.push(o)}
P($('podp'),810,438,24,'gain');
const cli=[-180,-150,-120,-60,-30,0].map(d=>{const a=d*Math.PI/180,x=1280+180*Math.cos(a),y=470+180*Math.sin(a),g=mk('g',{},$('cli'));
  mk('path',{d:'M1280 370L'+x.toFixed(0)+' '+y.toFixed(0),stroke:'var(--gain)','stroke-width':3,'stroke-dasharray':'6 8'},g);P(g,x,y-24,10,'ink');return g});
let sp='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?13:32;sp+=(1280+r*Math.cos(a)).toFixed(1)+','+(370+r*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:sp,class:'gain'},$('starP'));P($('starP'),1280,450,26,'ink');
const cells=[];for(let r=0;r<8;r++)for(let c=0;c<6;c++){mk('rect',{x:130+c*60,y:280+r*40,width:60,height:40,fill:r?'var(--stage)':'var(--line)',stroke:'var(--line)','stroke-width':2},$('grid'));
  if(r)cells.push(mk('rect',{x:140+c*60,y:296+r*40,width:16+((r*7+c*11)%4)*8,height:8,rx:4,fill:'var(--muted)'},$('grid')))}
const CW=[180,140,200,120,220,160,100],code=CW.map((w,i)=>mk('rect',{x:645+(i%3)*24,y:350+i*26,width:0,height:12,rx:6,fill:i%3==1?'var(--gain)':'var(--ink)'},$('code')));
const HC=[[950,510,60],[1190,510,40],[1300,510,40],[1410,510,40]],hands=HC.map(([x,y,r],i)=>{mk('circle',{cx:x,cy:y,r:r,fill:'var(--stage)',stroke:i?'var(--muted)':'var(--gain)','stroke-width':i?5:8},$('clocks'));
  if(i)mk('circle',{cx:x+r*.75,cy:y-r*.75,r:9,class:'loss'},$('clocks'));return mk('path',{stroke:'var(--ink)','stroke-width':i?4:6,'stroke-linecap':'round',fill:'none'},$('clocks'))});
const wk=mk('g',{},$('walker'));P(wk,0,554,30,'ink');
const dots=[0,1,2,3,4,5].map(()=>mk('circle',{r:9,class:'gain'},$('dots')));
const folkG=[],pings=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=170+c*110,y=290+r*110,g=mk('g',{},$('folk'));P(g,x,y,16,'ink');
  mk('rect',{x:x+22,y:y+22,width:16,height:26,rx:3,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},g);pings.push(mk('circle',{cx:x+38,cy:y+20,r:7,class:'loss'},g));folkG.push(g)}
const hrs=[];for(let i=0;i<24;i++)hrs.push(mk('rect',{x:136+i*56,y:640,width:46,height:60,rx:8,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('hrs')));