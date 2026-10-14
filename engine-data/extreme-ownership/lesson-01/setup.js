const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const star=(g,x,y,s,c)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?s*.45:s;d+=(i?'L':'M')+(x+rr*Math.cos(a)).toFixed(1)+' '+(y+rr*Math.sin(a)).toFixed(1)}mk('path',{d:d+'z',class:c},g)};
fig($('refl'),1320,330,30,'gain');
const BK=[];for(let r=0;r<4;r++)for(let c=0;c<5;c++)BK.push(mk('rect',{x:140+c*176,y:250+r*136,width:140,height:100,rx:8,fill:'var(--line)'},$('blocks')));
const UN=[0,1,2,3,4,5].map(i=>mk('circle',{r:14,fill:i%2?'var(--stage)':'var(--ink)',stroke:'var(--ink)','stroke-width':5},$('units')));
const WV=[30,50,70].map(r=>mk('path',{d:'M'+(1170+r*.6)+' '+(280-r*.8)+'A'+r+' '+r+' 0 0 1 '+(1170+r*.6)+' '+(280+r*.8),fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},$('waves')));
[200,1120].forEach(x0=>{const g=$('houses');mk('path',{d:'M'+(x0-20)+' 400L'+(x0+140)+' 320L'+(x0+300)+' 400z',class:'ink'},g);mk('rect',{x:x0,y:400,width:280,height:200,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':7},g);[40,160].forEach(w=>{mk('rect',{x:x0+w,y:440,width:80,height:100,fill:'var(--line)'},g);fig(g,x0+w+40,474,14,'ink')})});
const CS=[['ONE IRAQI SOLDIER','KILLED','loss'],['OTHERS','WOUNDED','ink'],['A SEAL','HURT','ink']].map((q,i)=>{const x=120+i*473,g=mk('g',{},$('cas'));mk('rect',{x:x,y:660,width:414,height:140,rx:16,fill:'var(--stage)',stroke:i?'var(--line)':'var(--loss)','stroke-width':4},g);fig(g,x+70,690,18,q[2]);[q[0],q[1]].forEach((s,k)=>{mk('text',{x:x+130,y:722+k*34,'font-size':20,class:'m'},g).textContent=s});return g});
const RL=[];for(let i=0;i<8;i++)RL.push([mk('rect',{x:150,y:330+i*44,height:12,rx:6,width:0,fill:'var(--line)'},$('rlines')),200+(i*67)%90]);
fig($('jk3'),640,420,36,'ink');
const BL=['The plan changed.','Messages were missed.','Mistakes on the ground.'].map((s,i)=>{const y=250+i*170,g=mk('g',{},$('bl'));mk('path',{d:'M700 470L888 '+(y+60),fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-dasharray':'10 10','stroke-linecap':'round'},g);mk('rect',{x:900,y:y,width:580,height:120,rx:16,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);mk('text',{x:940,y:y+74,'font-size':36,class:'d5'},g).textContent=s;return g});
fig($('jk4'),880,420,40,'ink');star($('jk4s'),880,330,26,'gain');fig($('mir'),1260,410,40,'gain');
const W=[200,250,190];function meas(){for(let i=0;i<3;i++){try{const v=$('nt'+i).getComputedTextLength();if(v>0)W[i]=v}catch(e){}}}
meas();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(meas);
fig($('jk5'),240,420,36,'gain');
const RW=['PLANS CHANGED','MESSAGES MISSED','ERRORS ON THE GROUND'].map((s,i)=>{const y=370+i*100,a=mk('g',{},$('rows')),b=mk('g',{},$('rows'));mk('text',{x:400,y:y,'font-size':20,class:'m',style:'fill:var(--loss)'},a).textContent=s;mk('path',{d:'M704 '+(y-8)+'h56m-14-14 14 14-14 14',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},a);mk('rect',{x:790,y:y-36,width:200,height:52,rx:26,class:'gain'},b);mk('path',{d:'M868 '+(y-10)+'l14 14 28-28',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},b);return [a,b]});
fig($('aud'),1270,300,30,'ink');star($('aud'),1270,240,20,'gain');
for(let i=0;i<8;i++)fig($('aud'),1120+(i%4)*100,530+Math.floor(i/4)*110,20,'ink');
const arc=(a0,a1,c)=>{const P=a=>(480+240*Math.cos(a)).toFixed(1)+' '+(620+240*Math.sin(a)).toFixed(1);mk('path',{d:'M'+P(a0)+'A240 240 0 0 1 '+P(a1),fill:'none',stroke:c,'stroke-width':28},$('gauge'))};
arc(Math.PI,Math.PI*4/3,'var(--loss)');arc(Math.PI*4/3,Math.PI*5/3,'var(--line)');arc(Math.PI*5/3,Math.PI*2,'var(--gain)');
const ndl=mk('line',{x1:480,y1:620,stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('gauge'));mk('circle',{cx:480,cy:620,r:16,class:'ink'},$('gauge'));
const TX=[1000,1130,1260,1390],TA=TX.map(x=>{fig($('tm'),x,560,26,'ink');return mk('path',{fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('tm'))});
fig($('ldr'),480,490,30,'gain');
const FL=[];for(let i=0;i<6;i++){const a=Math.PI/6+i*Math.PI/3,x=480+175*Math.cos(a),y=520+175*Math.sin(a);mk('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:22,class:'ink'},$('tw'));if(i%2==0)FL.push(mk('path',{d:'M'+(x+18).toFixed(1)+' '+(y-38).toFixed(1)+'l20 20m0-20l-20 20',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},$('tw')))}
fig($('me8'),1330,400,40,'gain');