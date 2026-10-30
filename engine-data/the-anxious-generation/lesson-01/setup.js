const W_NUL=document.createElementNS('http://www.w3.org/2000/svg','g');
const G=id=>$(id)||W_NUL;
const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const txt=(g,x,y,s,fs,cls,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:cls},ex||{}),g);e.textContent=s;return e};
const dr=(el,k)=>{if(!el)return;if(!el._l){try{el._l=el.getTotalLength()}catch(e){}el._l=el._l||2000}el.style.strokeDasharray=el._l;el.style.strokeDashoffset=(el._l*(1-k)).toFixed(1)};
fig(G('w_teen'),1310,290,32,'ink');
const PIN=[[230,420],[330,380],[220,370],[420,580],[350,350]],CNM=['UNITED STATES','BRITAIN','CANADA','AUSTRALIA','NORDIC NATIONS'],cards=[],pins=[],marks=[];
CNM.forEach((s,i)=>{const x=i<3?540+i*320:700+(i-3)*320,y=i<3?240:470,g=mk('g',{},G('w_cards'));
  mk('rect',{x:x,y:y,width:290,height:200,rx:14,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);txt(g,x+20,y+40,s,20,'m');
  mk('path',{d:`M${x+20} ${y+170}L${x+180} ${y+164}Q${x+240} ${y+158} ${x+270} ${y+70}`,fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round'},g);cards.push(g);
  marks.push(mk('path',{d:`M${x+180} ${y+60}V${y+185}`,stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'6 6'},G('w_cards')));
  pins.push(mk('circle',{cx:PIN[i][0],cy:PIN[i][1],r:13,fill:'var(--loss)',stroke:'var(--stage)','stroke-width':4},G('w_pins')))});
const ph3=[];for(let i=0;i<6;i++){const x=520+i*160,g=mk('g',{},G('w_tiles'));
  mk('rect',{x:x,y:260,width:150,height:220,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);txt(g,x+75,310,String(2010+i),34,'d5',{'text-anchor':'middle'});
  ph3.push([g,mk('rect',{x:x+52,y:340,width:46,height:90,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g)])}
for(let r=0;r<4;r++)for(let c=0;c<3;c++)mk('circle',{cx:290+c*40,cy:485+r*40,r:9,class:'ink'},G('w_keys'));
const CO=['var(--gain)','var(--ink)','var(--loss)','var(--muted)'],apps=[];for(let i=0;i<12;i++)apps.push(mk('rect',{x:996+(i%3)*76,y:285+Math.floor(i/3)*100,width:56,height:56,rx:14,fill:CO[i%4]},G('w_apps')));
const feats=['INTERNET','ENDLESS APPS','SOCIAL MEDIA','ALL DAY LONG'].map((s,i)=>{const g=mk('g',{},G('w_feats'));txt(g,1280,330+i*60,s,20,'m',i===3?{style:'fill:var(--loss)'}:{});return g});
fig(G('w_selfie'),300,400,46,'ink');
const LW=[200,90,150,60,180,110],FT=[],FB=[];for(let i=0;i<6;i++){const x=540+(i%3)*315,y=240+Math.floor(i/3)*220,g=mk('g',{},G('w_feed'));
  mk('rect',{x:x,y:y,width:290,height:190,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);fig(g,x+145,y+40,20,'ink');
  mk('circle',{cx:x+40,cy:y+162,r:10,class:'gain'},g);FB.push(mk('rect',{x:x+60,y:y+154,height:16,width:0,rx:8,fill:i===0?'var(--gain)':'var(--muted)'},g));FT.push(g)}
const GP=[];for(let i=0;i<9;i++){const a=i*2.4,rr=40+(i*37)%110;GP.push(mk('circle',{cx:(1160+rr*Math.cos(a)).toFixed(0),cy:(450+rr*Math.sin(a)*.9).toFixed(0),r:10,fill:'var(--loss)'},G('w_gp')))}
const SW=[300,400].map(x=>{const g=mk('g',{},G('w_swings'));mk('path',{d:`M${x} 330V490`,stroke:'var(--line)','stroke-width':4},g);mk('rect',{x:x-22,y:488,width:44,height:10,rx:4,class:'ink'},g);fig(g,x,428,15,'gain');return g});
fig(G('w_slider'),610,355,15,'gain');
const KD=[930,1060,1190].map(x=>{const g=mk('g',{},G('w_kids'));fig(g,x,420,24,'ink');mk('circle',{cx:x,cy:490,r:34,fill:'var(--gain)','fill-opacity':.25},g);mk('rect',{x:x-11,y:472,width:22,height:36,rx:5,class:'gain'},g);return g});
const BB=[0,1,2,3].map(i=>mk('circle',{cx:1386+i*9,cy:540,r:4+i%2*2,fill:'var(--stage)'},G('w_bub')));
fig(G('w_pk0'),210,690,12,'gain');fig(G('w_pk0'),260,700,12,'gain');fig(G('w_pk1'),530,680,14,'ink');