const pers=(g,x,y,r,a)=>[mk('circle',Object.assign({cx:x,cy:y,r:r},a),g),mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)];
const glove=(g,cls,s)=>{const q=mk('g',{transform:'scale('+s+')'},g);mk('rect',{x:-38,y:40,width:76,height:44,rx:8,fill:'var(--muted)'},q);mk('rect',{x:-50,y:-46,width:100,height:92,rx:40,class:cls},q);mk('rect',{x:-64,y:-6,width:34,height:44,rx:17,class:cls,stroke:'var(--stage)','stroke-width':5},q);return q};
const G=(par,x,y,cls,s)=>{const w=mk('g',{transform:'translate('+x+' '+y+')'},par);glove(w,cls,s);return w};
const R=(id,u,a,d=.5)=>rise($(id),p(u,a,a+d));
const TG=G($('tg'),1420,760,'loss',1);
pers($('bxr'),420,500,32,{class:'ink'});pers($('bxr'),820,500,32,{fill:'var(--muted)','fill-opacity':.5});
const JB=G($('jab'),490,570,'gain',.5);
for(let i=0;i<3;i++){const y=280+i*165;mk('rect',{x:190,y:y,width:240,height:140,rx:12,fill:'none',stroke:'var(--line)','stroke-width':4},$('feed'));mk('path',{d:'M214 '+(y+40)+'h120M214 '+(y+80)+'h180',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},$('feed'))}
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1300+68*c).toFixed(1)+' '+(420+68*s).toFixed(1)+'L'+(1300+92*c).toFixed(1)+' '+(420+92*s).toFixed(1),stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('sn'))}
const HK=G($('hk'),220,660,'gain',.8);
const BH=[60,110,160,220],BR=BH.map((h,i)=>mk('rect',{x:1110+i*85,y:560,width:60,height:0,rx:6,class:'gain'},$('bars')));
const TL=['SALE','NEW!','BUY NOW','LAUNCH','DEAL','ORDER'].map((s,i)=>{const x=460+(i%3)*170,y=250+Math.floor(i/3)*170,g=mk('g',{},$('posts'));mk('rect',{x:x,y:y,width:150,height:150,rx:14,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);const tx=mk('text',{x:x+75,y:y+86,'font-size':26,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},g);tx.textContent=s;return g});
for(let i=0;i<4;i++){const x=1100+i*110;pers($('crowd4'),x,360,26,{fill:'var(--muted)'});mk('circle',{cx:x,cy:368,r:7,fill:'var(--stage)'},$('crowd4'));mk('path',{d:'M'+(x-14)+' 350h9M'+(x+5)+' 350h9',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},$('crowd4'))}
const CV=[0,1,2].map(()=>mk('path',{d:'M-22 12l22-20 22 20',fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('chev')));
const GF=[0,1,2,3,4].map(i=>{const x=200+i*180,g=mk('g',{},$('gifts'));mk('rect',{x:x-40,y:300,width:80,height:70,class:'gain'},g);mk('rect',{x:x-46,y:280,width:92,height:22,class:'gain'},g);mk('rect',{x:x-6,y:280,width:12,height:90,fill:'var(--stage)'},g);[-12,12].forEach(d=>mk('circle',{cx:x+d,cy:268,r:10,fill:'none',stroke:'var(--ink)','stroke-width':4},g));mk('path',{d:'M'+x+' 392v44',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'6 6'},g);return g});
for(let i=0;i<5;i++)mk('rect',{x:160+i*68,y:290,width:68,height:60,fill:i%2?'var(--stage)':'var(--gain)',stroke:'var(--ink)','stroke-width':4},$('awn'));
const FL=[0,1,2,3,4,5,6].map(i=>pers($('fol'),660+i*120,670,18,{fill:'var(--muted)'}));
const pan=par=>{const g=mk('g',{},par);mk('path',{d:'M0 0L-90 100M0 0L90 100',stroke:'var(--ink)','stroke-width':3,fill:'none'},g);mk('path',{d:'M-90 100a90 30 0 0 0 180 0z',class:'ink'},g);return g};
const PL=pan($('scl')),PR=pan($('scl'));
const GB=[-54,-17,20].map(x=>mk('rect',{x:x,y:66,width:34,height:34,rx:6,class:'gain'},PL)),AB=mk('rect',{x:-17,y:66,width:34,height:34,rx:6,class:'loss'},PR);
const CE=[...Array(28)].map((_,i)=>mk('rect',{x:890+(i%7)*80,y:292+Math.floor(i/7)*68,width:60,height:52,rx:8,fill:'var(--line)'},$('cells')));
const CG=[940,1060,1180].map(x=>{const g=mk('g',{},$('cg'));G(g,x,690,'gain',.55);return g});
const HG=G($('hg'),1360,690,'ink',.75);