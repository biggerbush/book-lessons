const cfFig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const cfTxt=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
const cfFmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,',');
const cfExpo=(x0,y0,w,h,f)=>{let d='',x=x0,y=y0;for(let s=0;s<=f+1e-9;s+=.01){x=x0+w*s;y=y0-h*Math.pow(2,30*s-30);d+=(d?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}if(!d)d='M'+x0+' '+y0;return [d,x,y]};
const cfCells=[];for(let i=0;i<31;i++){const x=120+(i%7)*90,y=240+Math.floor(i/7)*90;
  cfCells.push([mk('rect',{x:x,y:y,width:80,height:80,rx:10,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('cal')),cfTxt($('cal'),i+1,{x:x+12,y:y+30,class:'m','font-size':18})])}
const cfFN=[['Larry',['SAME ROUTINE']],['Scott',['+10 PAGES A DAY','−125 CALORIES']],['Brad',['+ BIG SCREEN TV','+ A FEW SNACKS']]];
const cfFr=cfFN.map((f,i)=>{const x=360+i*440,g=$('f'+i),P=cfFig(g,x,300,40,'ink');cfTxt(g,f[0],{x:x,y:540,class:'d5','font-size':48,'text-anchor':'middle'});
  const ch=mk('g',{},g);f[1].forEach((s,j)=>{mk('rect',{x:x-190,y:590+j*70,width:380,height:50,rx:25,fill:'var(--stage)',stroke:i==1?'var(--gain)':i==2?'var(--loss)':'var(--line)','stroke-width':4},ch);
  cfTxt(ch,s,{x:x,y:622+j*70,class:'m','font-size':20,'text-anchor':'middle'})});return [P,ch]});
for(let i=0;i<3;i++)cfFig($('same'),1060+i*140,320,28,'ink');
const cfL4=[['gain',-6],['ink',0],['loss',6]].map(c=>[mk('path',{fill:'none',stroke:'var(--'+c[0]+')','stroke-width':5,'stroke-linecap':'round'},$('ln4')),c[1]]);
const cfR6=[[['Small, smart','choices'],['Consistency'],['Time'],['Radical','difference']],[['One extra snack,','skipped walk'],['Consistency'],['Time'],['Compounds','just as surely']]];
const cfB6=cfR6.map((row,r)=>row.map((L,k)=>{const x=120+k*360,y=r?600:280,g=mk('g',{},$('f6')),last=k==3;
  mk('rect',{x:x,y:y,width:280,height:160,rx:18,fill:last?(r?'var(--loss)':'var(--gain)'):'var(--stage)',stroke:r?'var(--loss)':'var(--ink)','stroke-width':5},g);
  L.forEach((s,j)=>cfTxt(g,s,{x:x+140,y:y+(L.length>1?72+j*42:92),class:'d5','font-size':28,'text-anchor':'middle',style:last?'fill:'+(r?'var(--stage)':'var(--on-gain)'):''}));
  if(k)cfTxt(g,k==3?'=':'+',{x:x-40,y:y+102,class:'d','font-size':64,'text-anchor':'middle',style:'fill:var(--muted)'});return g}));
const cfBL=[];for(let i=0;i<30;i++)cfBL.push(mk('rect',{rx:3,'stroke-width':3},$('blk')));
cfFig($('fut'),1190,460,34,'gain');