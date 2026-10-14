const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const seed=g=>{mk('path',{d:'M0 0C0-40 6-80 0-130',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},g);mk('path',{d:'M0-70c-40-10-60-40-56-60 30 0 52 20 56 60z',class:'gain'},g);mk('path',{d:'M2-100c40-14 62-46 56-66-32 2-54 24-56 66z',class:'gain'},g)};
['sd0','sd1','sd8'].forEach(i=>seed($(i)));
const grow=(id,x,y,k,s,r)=>$(id).setAttribute('transform','translate('+x+' '+y+') scale('+(s*Math.max(k,.001)).toFixed(3)+') rotate('+r.toFixed(2)+')');
const drawK=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const txt=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};
fig($('grf'),300,430,40,'ink');
const drops=[0,1,2].map(i=>mk('circle',{cx:1225+i*35,cy:330,r:8,class:'gain'},$('drops')));
fig($('jul'),0,490,26,'gain');txt($('jul'),{x:0,y:440,'font-size':20,'text-anchor':'middle',class:'m'},'JULIA CHILD');
// five sampled activities; the sixth stop on the path is the standalone magnifier node "WHAT GRABS YOU"
const TL=['PAINT','GUITAR','CODE','COOK','TENNIS'],GL=['M-20 20L20-20M-24 24l-6 6','M-14 14a10 10 0 1 0 .1 0M-4 14V-22l20 8','M-12-14l-14 14 14 14M12-14l14 14-14 14','M-26-4h52M-22-4a22 18 0 0 0 44 0','M-20 0a20 20 0 1 0 40 0a20 20 0 1 0-40 0M-20 0q20 10 40 0'];
const TC=TL.map((s,i)=>[220+i*230,i%2?560:400]);
const tiles=TC.map(([x,y],i)=>{const g=mk('g',{},$('tiles'));const r=mk('rect',{x:x-50,y:y-50,width:100,height:100,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:GL[i],transform:'translate('+x+' '+y+')',fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  txt(g,{x:x,y:i%2?y+118:y-76,'font-size':20,'text-anchor':'middle',class:'m'},TL[i]);return [g,r]});
const WP=$('wpath');let WL=1500;try{WL=WP.getTotalLength()||1500}catch(e){}
const sp=[];for(let i=0;i<8;i++){const x=230+i*100;mk('rect',{x:x-35,y:725,width:70,height:60,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('cal'));sp.push(mk('path',{d:'M0-20L6-6 20 0 6 6 0 20-6 6-20 0-6-6Z',transform:'translate('+x+' 755)',class:'gain'},$('cal')))}
let gp='200,680';for(let i=0;i<8;i++)gp+=' '+(230+i*100)+','+(620-50*i)+' '+(300+i*100)+','+(630-50*i);$('gline').setAttribute('points',gp);
['TEACHER','COACH','FRIEND'].forEach((s,i)=>{const x=1150+i*120;fig($('mfig'),x,420,26,'ink');txt($('mfig'),{x:x,y:575,'font-size':18,'text-anchor':'middle',class:'m'},s)});
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(165*c).toFixed(1)+' '+(165*s).toFixed(1)+'L'+(190*c).toFixed(1)+' '+(190*s).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
const roots=['M500 480C500 560 420 600 300 640','M500 480C510 580 560 640 700 680','M500 480C490 600 480 700 470 800','M420 590C380 650 320 700 280 780','M560 620C620 700 640 760 720 790','M300 640C260 650 220 690 200 720'].map((d,i)=>mk('path',{d:d,fill:'none',stroke:'var(--ink)','stroke-width':i<3?7:4,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},$('roots')));
const qs=[830,900,970].map(x=>txt($('qs'),{x:x,y:360,'font-size':48,'text-anchor':'middle',class:'d',style:'fill:var(--gain)'},'?'));
const dr=[1200,1300,1400].map(x=>{const g=mk('g',{},$('drift'));fig(g,x,390,20,'ink');return g});
for(let i=0;i<7;i++)mk('circle',{cx:180+i*60,cy:240,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('rings'));
fig($('me7'),1060,600,30,'ink');
const wk='MTWTFSS'.split('').map((c,i)=>[mk('rect',{x:120+i*90,y:770,width:70,height:60,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('wk')),txt($('wk'),{x:155+i*90,y:808,'font-size':20,'text-anchor':'middle',class:'m'},c)]);