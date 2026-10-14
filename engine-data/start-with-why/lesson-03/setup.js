const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const drw=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const CI=[['gain','%',1260],['loss','!',1320],['ink','+',1380]].map(([c,s,x])=>{const g=mk('g',{},$('cartItems'));mk('rect',{x:x-22,y:362,width:44,height:44,rx:6,class:c},g);const tx=mk('text',{x:x,y:394,'font-size':26,'text-anchor':'middle',class:'d',style:'fill:'+(c==='gain'?'var(--on-gain)':'var(--stage)')},g);tx.textContent=s;return g});
[[400,244,436,360],[460,244,460,280],[520,244,484,360]].forEach(q=>mk('path',{d:'M'+q[0]+' '+q[1]+'L'+q[2]+' '+q[3],stroke:'var(--muted)','stroke-width':3},$('pupFig')));
fig($('pupFig'),460,300,20,'loss');
for(let i=0;i<7;i++){const a=Math.PI*(1+i/6),c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1140+72*c).toFixed(1)+' '+(300+72*s).toFixed(1)+'L'+(1140+96*c).toFixed(1)+' '+(300+96*s).toFixed(1),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
const SX=[760,940,1120,1300],cuts=SX.map((x,i)=>{const g=mk('g',{},$('cuts'));const tx=mk('text',{x:x,y:556,'font-size':18,'text-anchor':'middle',class:'m'},g);tx.textContent='CUT';const h=150-i*40;mk('rect',{x:x-50,y:800-h,width:100,height:h,rx:6,class:'loss'},g);return g});
const FM=[];for(let i=0;i<6;i++){const x=760+i*80,g=mk('g',{},$('forms'));mk('rect',{x:x,y:600,width:50,height:60,rx:5,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+(x+10)+' 618h30M'+(x+10)+' 632h30M'+(x+10)+' 646h18',stroke:'var(--line)','stroke-width':4},g);FM.push([g,x])}
fig($('buyerFig'),330,500,28,'ink');
const BX=['OTHER','IBM','OTHER'].map((s,i)=>{const x=640+i*280;const r=mk('rect',{x:x,y:340,width:240,height:140,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('boxes'));const tx=mk('text',{x:x+120,y:i===1?428:420,'font-size':i===1?52:24,'text-anchor':'middle',class:i===1?'d':'m'},$('boxes'));tx.textContent=s;return [r,tx]});
for(let r=0;r<4;r++)for(let c=0;c<3;c++)mk('circle',{cx:240+c*50,cy:500+r*35,r:9,class:'ink'},$('keys'));
const RV=[];for(let i=0;i<4;i++){const x=1100+i*80,g=mk('g',{},$('rivals'));mk('rect',{x:x,y:722,width:40,height:76,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('rect',{x:x+8,y:732,width:24,height:26,rx:3,class:'gain'},g);RV.push(g)}
for(let r=0;r<4;r++)for(let c=0;c<3;c++)mk('rect',{x:180+c*50,y:420+r*32,width:36,height:22,rx:4,class:'ink'},$('regKeys'));
fig($('dealFig'),700,470,26,'ink');
const BR=[];for(let i=0;i<6;i++){const h=60+i*45;BR.push(mk('rect',{x:1020+i*75,y:620-h,width:50,height:h,rx:6,class:'loss'},$('costB')))}
const WD=[0,1,2].map(i=>mk('circle',{cx:960+i*30,cy:783,r:6,class:'ink'},$('waitD')));
const CD=[['%','DISCOUNT'],['+1','FREEBIE'],['!','SCARE'],['★','GIMMICK']].map(([g,s],i)=>{const x=120+i*350,G=mk('g',{},$('cards'));const r=mk('rect',{x:x,y:250,width:310,height:260,rx:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},G);const a=mk('text',{x:x+155,y:410,'font-size':100,'text-anchor':'middle',class:'d'},G);a.textContent=g;const b=mk('text',{x:x+155,y:470,'font-size':22,'text-anchor':'middle',class:'m'},G);b.textContent=s;return [G,r,a]});
for(let r=0;r<3;r++)for(let c=0;c<5;c++)mk('circle',{cx:1270+c*40,cy:660+r*34,r:8,fill:'var(--line)'},$('calDays'));