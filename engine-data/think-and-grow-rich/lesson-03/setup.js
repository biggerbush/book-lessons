const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
function plant(g,good){const c=good?'var(--gain)':'var(--loss)';mk('path',{d:'M0 0V-150',stroke:c,'stroke-width':7,'stroke-linecap':'round',fill:'none'},g);
  if(good){mk('path',{d:'M0 -60q-50-4-56-44q46 0 56 44zM0 -95q50-4 56-44q-46 0-56 44z',fill:c},g);for(let i=0;i<6;i++){const a=i*Math.PI/3;mk('circle',{cx:22*Math.cos(a),cy:-170+22*Math.sin(a),r:16,fill:c},g)}mk('circle',{cx:0,cy:-170,r:13,fill:'var(--ink)'},g)}
  else mk('path',{d:'M0 -40l-40-30 14-4-30-30M0 -80l40-30-14-4 30-30M0 -150l-16-30M0 -150l16-30M0 -150v-36',stroke:c,'stroke-width':6,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},g)}
plant($('pl0'),0);plant($('pl1'),1);plant($('pl2'),0);plant($('pl3'),1);
const grow=(id,x,y,k,t)=>$(id).setAttribute('transform','translate('+x+' '+y+') rotate('+(2*Math.sin(t*1.5+x)).toFixed(2)+') scale('+Math.max(k,.001).toFixed(3)+')');
const BB=[0,1,2].map(i=>mk('circle',{cx:330+i*70,cy:600,r:7,fill:'var(--stage)'},$('bub1')));
const BR=[];for(let r=0;r<5;r++)for(let c=0;c<5;c++)BR.push(mk('rect',{x:880+c*108+(r%2)*27,y:644-r*52,width:104,height:48,rx:4,class:'gain',opacity:0},$('wall')));
fig($('mirP'),300,420,40,'ink');fig(mk('g',{opacity:.45},$('mirP')),600,420,30,'ink');
fig($('lpP'),1120,440,26,'ink');
const CPN=['WORRIES','DOUBTS','OLD STORIES'],CP=CPN.map(s=>{const g=mk('g',{},$('chips2'));const r=mk('rect',{x:-100,y:-26,width:200,height:52,rx:26,fill:'var(--stage)','stroke-width':4},g);
  const tx=mk('text',{x:0,y:7,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return [g,r,tx]});
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(280+72*c).toFixed(1)+' '+(420+72*s).toFixed(1)+'L'+(280+96*c).toFixed(1)+' '+(420+96*s).toFixed(1),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('sun'))}
fig($('scrP'),740,330,30,'gain');
const DY=[];for(let i=0;i<14;i++)DY.push(mk('circle',{cx:160+i*92,cy:730,r:16,fill:i%2?'var(--ink)':'var(--gain)',opacity:0},$('days')));
fig($('docP'),850,440,40,'ink');fig($('faP'),1300,440,40,'gain');
const NT=[];for(let i=0;i<6;i++){const x=200+i*72,y=320;NT.push(mk('path',{d:'M'+(x+8)+' '+(y-22)+'A24 24 0 1 0 '+(x+8)+' '+(y+22)+'A18 18 0 1 1 '+(x+8)+' '+(y-22)+'Z',class:'ink',opacity:0},$('nts')))}
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(280+100*c).toFixed(1)+' '+(360+100*s).toFixed(1)+'L'+(280+128*c).toFixed(1)+' '+(360+128*s).toFixed(1),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('brays'))}
const FP=[];for(let i=0;i<8;i++)FP.push(mk('ellipse',{cx:660+i*82,cy:i%2?660:620,rx:20,ry:11,class:'gain',opacity:0},$('fp')));