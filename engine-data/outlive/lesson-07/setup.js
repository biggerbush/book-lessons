const fx=v=>v.toFixed(1);
const fig=(g,x,y,r,a)=>{mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g);return g};
const H='M0 30C-40 5-42-22-20-28C-9-31-2-24 0-18C2-24 9-31 20-28C42-22 40 5 0 30Z';
const pill=(g,x,y,w,h,s)=>{const r=mk('rect',{x:x,y:y,width:w,height:h,rx:h/2,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);const tx=mk('text',{x:x+w/2,y:y+h/2+11,'font-size':32,'text-anchor':'middle',class:'d5'},g);tx.textContent=s;return [g,r,tx]};

fig($('heroP'),1330,330,50,{class:'gain'});

const rows=['TRAINS HARD','TRACKS HEALTH','PUSHES AT WORK'].map((s,i)=>{const y=390+i*80,g=mk('g',{},$('rows'));
  mk('rect',{x:150,y:y-28,width:36,height:36,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},g);
  mk('path',{d:'M157 '+(y-10)+'l9 10 16-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  const tx=mk('text',{x:206,y:y,'font-size':20,class:'m'},g);tx.textContent=s;return g});
fig($('att'),600,500,36,{class:'ink'});
fig($('fam'),1120,507,34,{class:'ink'});fig($('fam'),1240,558,22,{class:'ink'});fig($('fam'),1330,558,22,{class:'ink'});

const WN=[];for(let i=0;i<6;i++)WN.push(mk('rect',{x:725+(i%3)*85,y:395+Math.floor(i/3)*90,width:60,height:60,rx:6,fill:'var(--line)'},$('wins')));
fig($('kid'),1170,524,20,{fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'6 6'});
fig($('adult'),1380,470,32,{class:'ink'});

const YR=[];for(let i=0;i<12;i++){const a=i>=8;YR.push(mk('rect',{x:520+i*80,y:300,width:70,height:80,rx:8,fill:a?'none':'var(--ink)','fill-opacity':a?1:.25,stroke:a?'var(--gain)':'none','stroke-width':4,'stroke-dasharray':a?'8 6':'none'},$('years')))}
fig($('lonP'),1000,540,28,{class:'loss'});

const PL=[400,800,1200].map(c=>{const w=mk('g',{},$('pills')),g=mk('g',{},w);
  mk('rect',{x:c-90,y:330,width:180,height:20,fill:'var(--ink)'},g);
  const r=mk('rect',{x:c-70,y:350,width:140,height:370,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  mk('path',{d:'M'+(c-30)+' 380V690M'+c+' 380V690M'+(c+30)+' 380V690',stroke:'var(--line)','stroke-width':4},g);return [g,r,w]});
const crack=mk('path',{d:'M1185 360L1220 440L1180 520L1222 600L1190 710',fill:'none',stroke:'var(--loss)','stroke-width':7,'stroke-linejoin':'round'},PL[2][0]);

[250,570].forEach(x=>mk('path',{d:H,class:'gain',transform:'translate('+x+' 420) scale(1.4)'},$('bell')));
fig($('sess'),920,390,34,{class:'ink'});fig($('sess'),1320,390,34,{class:'gain'});
const CD=['A feeling','Notice it','Then act'].map((s,i)=>{const x=120+i*460,g=mk('g',{},$('cards'));
  const r=mk('rect',{x:x,y:680,width:360,height:120,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const tx=mk('text',{x:x+180,y:752,'font-size':34,'text-anchor':'middle',class:'d5'},g);tx.textContent=s;
  if(i<2)mk('path',{d:'M'+(x+380)+' 740h60m-18-18 18 18-18 18',fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  return [g,r,tx]});

const ST=['Name it','Breathe','Choose'].map((s,i)=>pill(mk('g',{},$('steps')),520+i*330,300,300,90,s));
const DY=[];for(let i=0;i<14;i++)DY.push(mk('rect',{x:520+i*68,y:480,width:48,height:48,rx:8,fill:'var(--line)'},$('days')));
[240,360,480].forEach((x,i)=>fig($('lov'),x,660,28,{class:i==1?'gain':'ink'}));

fig($('drP'),280,450,34,{class:'ink'});
const HL=[[760,'THERAPIST'],[1040,'FRIEND'],[1320,'SUPPORT GROUP']].map(([x,s],i)=>{const g=mk('g',{},$('hlp'));
  if(i<2)fig(g,x,420,32,{class:'gain'});else[-70,0,70].forEach(d=>fig(g,x+d,440,24,{class:'gain'}));
  const tx=mk('text',{x:x,y:600,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;
  const a=mk('path',{d:'M410 460Q'+((410+x)/2)+' 260 '+x+' '+(i<2?380:408),fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 10'},$('arcs'));
  return [g,a]});
const CP=[['HEART DISEASE',600,270],['CANCER',890,220],['EMOTIONAL HEALTH',1130,350]].map(([s,x,w],i)=>{const g=mk('g',{},$('chips7')),on=i==2;
  mk('rect',{x:x,y:710,width:w,height:70,rx:35,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:x+w/2,y:753,'font-size':22,'text-anchor':'middle',class:'m'},g);if(on)tx.style.fill='var(--on-gain)';tx.textContent=s;return g});

fig($('old'),1360,430,30,{class:'gain'});