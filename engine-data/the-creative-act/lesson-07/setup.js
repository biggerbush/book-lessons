const fig=(g,x,y,r,a)=>{mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)};
const IK={class:'ink'};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const M=(sz,anc)=>({class:'m','font-size':sz,'text-anchor':anc||'start'});
fig($('art1'),290,440,32,IK);
// flaw marks placed outside the sweep of the magnifier handle
const FL=[[470,330],[650,320],[650,430],[470,545],[565,555]].map(q=>mk('path',{d:'M'+(q[0]-11)+' '+(q[1]-11)+'l22 22m0-22l-22 22',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('flaws')));
const LP=$('lp');
[-90,30,150].forEach(a=>{const r=a*Math.PI/180;mk('circle',{cx:1150+170*Math.cos(r),cy:480+170*Math.sin(r),r:14,class:'ink'},LP)});
[-30,90,210].forEach(a=>{const r=a*Math.PI/180;mk('path',{d:'M-10-14l14 14-14 14',fill:'none',class:'s-loss','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round',transform:'translate('+(1150+170*Math.cos(r)).toFixed(1)+' '+(480+170*Math.sin(r)).toFixed(1)+') rotate('+(a+90)+')'},LP)});
tx(LP,1150,280,'LOOK',M(22,'middle'));tx(LP,1320,610,'FIND FLAW',M(22));tx(LP,980,610,'FIX',M(22,'end'));
tx(LP,1150,498,'AGAIN',{class:'d','font-size':52,'text-anchor':'middle'});
fig($('art2'),330,430,30,IK);
const AU=$('aud');
for(let i=0;i<5;i++)fig(AU,1080+i*90,400,22,IK);
for(let i=0;i<3;i++){const y=420+i*50;mk('path',{d:'M1040 '+y+'H962m14-12-14 12 14 12',fill:'none',class:'s-loss','stroke-width':4,'stroke-dasharray':'8 6','stroke-linecap':'round'},AU)}
tx(AU,1260,580,'JUDGMENT',Object.assign(M(22,'middle'),{style:'fill:var(--loss)'}));
fig($('ghost'),330,330,44,{fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'10 8'});
fig($('polP'),310,590,22,IK);
const JL=[];for(let i=0;i<5;i++){[760,1080].forEach((x,k)=>JL.push(mk('path',{d:'M'+x+' '+(370+i*56)+'h'+((i+k)%3===2?150:240),class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('jl'))))}
for(let i=0;i<15;i++)mk('circle',{cx:740+i*50,cy:740,r:i===7?16:10,fill:i===7?'var(--gain)':'var(--line)'},$('ticks'));
const KN=[];for(let i=0;i<6;i++){const x=670+i*60;mk('path',{d:'M'+x+' 380V540',class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('fad'));KN.push(mk('rect',{x:x-18,y:450,width:36,height:18,rx:5,class:'ink'},$('fad')))}
for(let r=0;r<3;r++)for(let c=0;c<5;c++)mk('rect',{x:1130+c*58,y:430+r*60,width:40,height:40,rx:6,fill:'var(--line)'},$('grid'));
// jar: old ideas inside, new ideas waiting
const OLDP=[[625,432],[675,432],[725,432],[775,432],[700,386]];
const OLD=OLDP.map(()=>mk('circle',{r:22,class:'ink'},$('ideas')));
const NEW=[0,1].map(()=>mk('circle',{r:22,class:'gain'},$('newi')));
const L2=(a,b,k)=>[a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k];
fig($('art6'),240,420,26,IK);
for(let i=0;i<5;i++)fig($('crowd6'),1170+i*66,450,18,IK);
const SYM=['+','?','−','!'];
const RB=[],RT=[];for(let i=0;i<5;i++){const x=1170+i*66,g=mk('g',{},$('reacts'));mk('rect',{x:x-22,y:366,width:44,height:42,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);RT.push(tx(g,x,398,'+',{class:'d','font-size':28,'text-anchor':'middle'}));RB.push(g)}
const STK=[];for(let i=0;i<8;i++){const x=860+i*60,y=560-i*30,g=mk('g',{},$('stk'));mk('rect',{x:x,y:y,width:160,height:190,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:x+14,y:y+14,width:132,height:120,fill:i===7?'var(--gain)':'var(--line)'},g);mk('circle',{cx:x+80,cy:y+70,r:18,class:'ink'},g);STK.push(g)}