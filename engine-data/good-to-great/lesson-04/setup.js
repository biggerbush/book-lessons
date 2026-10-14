const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const dr=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const store=(g,x,y,w,h,name,fs,cls)=>{mk('rect',{x:x,y:y,width:w,height:h,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  const n=Math.round(w/50),sw=w/n;for(let i=0;i<n;i++)mk('rect',{x:x+i*sw,y:y-40,width:sw,height:40,fill:i%2?'var(--stage)':'var(--'+cls+')',stroke:'var(--ink)','stroke-width':4},g);
  const sh=fs*1.4;mk('rect',{x:x+w*.2,y:y-50-sh,width:w*.6,height:sh,rx:8,fill:'var(--ink)'},g);
  const tx=mk('text',{x:x+w/2,y:y-50-sh*.28,'font-size':fs,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'},g);tx.textContent=name;
  [x+20,x+w/2+40].forEach(wx=>mk('rect',{x:wx,y:y+30,width:w/2-60,height:h*.4,fill:'none',stroke:'var(--ink)','stroke-width':4},g));
  mk('rect',{x:x+w/2-30,y:y+h-110,width:60,height:110,fill:'var(--ink)'},g)};
fig($('walkI'),0,0,14,'gain');
store($('ap'),160,360,500,280,'A&P',56,'loss');
store($('kp'),900,480,300,160,'KROGER',30,'gain');
store($('gkb'),160,380,400,240,'GOLDEN KEY',30,'gain');
const HS=[];for(let i=0;i<6;i++){const x=150+i*120;HS.push(mk('path',{d:'M'+x+' 600l45-40 45 40v80h-90z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},$('row')));mk('rect',{x:x+33,y:640,width:24,height:40,fill:'var(--ink)'},$('row'))}
fig($('stock'),450,440,40,'ink');
for(let i=0;i<9;i++)mk('path',{d:'M'+(250+i*50)+' 260V740',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('bars'));
mk('path',{d:'M230 300H670M230 700H670',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('bars'));
const MX=[260,560,860],MK=[],XS=[];
['CHRISTMAS','EASTER','CHRISTMAS'].forEach((s,i)=>{const x=MX[i],g=mk('g',{},$('tl'));
  if(i===1)mk('ellipse',{cx:x,cy:455,rx:38,ry:50,class:'gain'},g);else{mk('path',{d:'M'+x+' 395l-50 95h100z',class:'gain'},g);mk('rect',{x:x-10,y:490,width:20,height:24,class:'ink'},g)}
  const tx=mk('text',{x:x,y:600,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;MK.push(g);
  XS.push(mk('path',{d:'M'+(x-50)+' 390L'+(x+50)+' 510M'+(x+50)+' 390L'+(x-50)+' 510',stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round'},$('tl')))});
for(let k=0;k<5;k++){const a=(-160+k*35)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(76*c).toFixed(1)+' '+(190+76*s).toFixed(1)+'L'+(100*c).toFixed(1)+' '+(190+100*s).toFixed(1),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('sunR'))}
const HD=[],VL=[];for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);
  VL.push(mk('path',{d:'M'+(600+292*c).toFixed(0)+' '+(500+198*s).toFixed(0)+'L'+(600+246*c).toFixed(0)+' '+(500+142*s).toFixed(0),stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'6 6','stroke-linecap':'round'},$('voices')));
  HD.push(mk('circle',{cx:(600+330*c).toFixed(1),cy:(500+230*s).toFixed(1),r:28,class:'ink'},$('tbl')))}