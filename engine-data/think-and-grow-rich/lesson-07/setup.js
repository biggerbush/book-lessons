const tx=(g,x,y,s,str,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s},a||{}),g);e.textContent=str;return e};
const ghost=(g,x,y,s,c)=>{const e=mk('g',{},g);mk('path',{d:'M'+(x-s)+' '+(y+s*1.2)+'V'+y+'a'+s+' '+s+' 0 0 1 '+(2*s)+' 0v'+(s*1.2)+'l'+(-s/2)+' '+(-s*.3)+'l'+(-s/2)+' '+(s*.3)+'l'+(-s/2)+' '+(-s*.3)+'l'+(-s/2)+' '+(s*.3)+'z',fill:'var(--'+(c||'loss')+')'},e);[-1,1].forEach(k=>mk('circle',{cx:x+k*s*.38,cy:y+s*.05,r:s*.15,fill:'var(--stage)'},e));return e};
const fig=(g,x,y,r,c)=>{const e=mk('g',{class:c},g);mk('circle',{cx:x,cy:y,r:r},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},e);return e};
const dash=(id,d)=>{let L=d;try{L=$(id).getTotalLength()||d}catch(e){}$(id).setAttribute('stroke-dasharray',L);return L};

fig($('tperson'),1260,560,26,'ink');
const TG=[[1080,560],[1120,380],[1260,300],[1400,380],[1440,560],[1260,770]].map(q=>ghost($('tghosts'),q[0],q[1],40));

const C1=['Poverty','Criticism','Ill health','Loss of love','Old age','Death'].map((n,i)=>{const x=120+(i%3)*460,y=220+Math.floor(i/3)*310,o=mk('g',{},$('cards'));
  mk('rect',{x:x,y:y,width:420,height:280,rx:18,fill:'var(--stage)',class:'s-line','stroke-width':3},o);
  const c=mk('g',{},$('cards'));ghost(c,x+210,y+90,40);tx(c,x+210,y+190,20,'FEAR OF',{class:'m','text-anchor':'middle'});tx(c,x+210,y+245,44,n,{class:'d','text-anchor':'middle'});return [o,c]});

ghost($('cg'),420,310,36);
ghost($('wg'),310,330,44);
const TAGS=['WORRY','PROCRASTINATION','ENDLESS EXCUSES','OVER-CAUTION'].map((s,i)=>{const g=mk('g',{},$('tags'));
  mk('rect',{x:540,y:240+i*62,width:400,height:48,rx:24,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);tx(g,740,271+i*62,20,s,{class:'m','text-anchor':'middle'});return g});
const sn=$('snail');
mk('path',{d:'M-70 52h160c20 0 30-20 30-40M110 12l10-34M98 14l-2-34',fill:'none',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},sn);
mk('circle',{r:50,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':7},sn);mk('circle',{r:24,fill:'none',stroke:'var(--ink)','stroke-width':5},sn);mk('circle',{r:7,fill:'var(--ink)'},sn);
const EN=[0,1,2].map(()=>{const g=mk('g',{},$('envs'));mk('rect',{width:60,height:40,rx:4,fill:'var(--gain)'},g);mk('path',{d:'M4 4l26 20 26-20',fill:'none',stroke:'var(--stage)','stroke-width':4},g);return g});

fig($('vbody'),600,460,34,'ink');
for(let i=0;i<4;i++){const x=820+i*140;fig($('cpl'),x,460,30,'ink');mk('rect',{x:x-15,y:550,width:30,height:18,rx:4,fill:'var(--stage)'},$('cpl'))}

ghost($('pg'),1270,400,50);
const RL=dash('root',1300);

fig($('armp'),280,470,34,'ink');
const ATK=[430,540,650].map(y=>ghost($('atk'),0,y,26));
const IC=[
 [['path',{d:'M80 125c-34 0-46-30-30-58 8 14 18 16 18 16-6-30 10-52 30-66-2 28 34 44 24 80-4 18-20 28-42 28z',fill:'var(--gain)'}]],
 [['path',{d:'M115 75a35 35 0 1 1-10-25M91 52L105 50L103 36',fill:'none',stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'}]],
 [['rect',{x:45,y:25,width:70,height:95,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5}],['path',{d:'M56 52l8 8 14-14M56 84l8 8 14-14',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'}],['path',{d:'M88 56h16M88 88h16',stroke:'var(--line)','stroke-width':5}]],
 [['path',{d:'M30 125h30v-25h30v-25h30v-25',fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'}],['circle',{cx:105,cy:32,r:12,fill:'var(--gain)'}]]];
const TT=[['Burning desire',['CROWDS OUT DOUBT']],['Faith',['REPLACES FEAR','WITH BELIEF']],['Definite plan',['ENDS INDECISION']],['Persistence',['KEEPS YOU MOVING']]];
const TIL=[[690,220],[1090,220],[690,500],[1090,500]].map((q,i)=>{const o=mk('g',{},$('tiles')),g=mk('g',{transform:'translate('+q[0]+' '+q[1]+')'},o);
  const r=mk('rect',{width:390,height:260,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g);
  IC[i].forEach(c=>mk(c[0],c[1],g));tx(g,30,172,40,TT[i][0],{class:'d'});
  TT[i][1].forEach((s,k)=>tx(g,30,210+k*30,21,s,{class:'m'}));return [o,r]});

fig($('mp'),300,470,30,'ink');ghost($('mg'),380,420,30);
for(let x=600;x<=920;x+=40)mk('circle',{cx:x,cy:260,r:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));
const SL7=[dash('sc0',380),dash('sc1',380)];
ghost($('g7'),1250,330,36);
ghost($('qg'),1340,700,50);