const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const txt=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
fig($('plp'),560,460,22,'gain');
const CR=['FANS','OPPONENTS','SOME TEAMMATES'].map((s,r)=>{const g=mk('g',{},$('crowdg'));for(let i=0;i<3;i++)fig(g,1000+i*76,290+r*165,18,'loss');txt(g,s,{x:1230,y:340+r*165,class:'m','font-size':20});return g});
fig($('rkp'),360,400,40,'ink');fig($('jrp'),1240,400,40,'gain');fig($('rbp'),800,440,40,'gain');
const BB=[[170,330],[320,420],[180,500]].map(([x,y])=>{const g=mk('g',{},$('bubs'));mk('rect',{x:x,y:y,width:130,height:62,rx:14,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);txt(g,'#@!',{x:x+65,y:y+44,class:'d','font-size':34,'text-anchor':'middle',style:'fill:var(--loss)'});return g});
fig($('dpp'),1140,520,18,'gain');fig($('dpp'),1220,530,18,'gain');
// scene 5: provoker, you, ego halo, react/restraint panels
fig($('prvp'),220,330,30,'loss');
let SP='';for(let i=0;i<20;i++){const a=i*Math.PI/10,r=i%2?78:108;SP+=(600+r*Math.sin(a)).toFixed(0)+','+(400-r*Math.cos(a)).toFixed(0)+' '}
mk('polygon',{points:SP,fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linejoin':'round'},$('egop'));
fig($('youp'),600,330,36,'gain');
fig($('pupf'),1240,362,18,'gain'); fig($('pvs'),1400,300,18,'loss');
fig($('rsf'),1140,600,20,'gain'); fig($('pvr'),1420,610,16,'loss');
const CP=['HITTING','FIELDING','STEALING BASES'].map((s,i)=>{const g=mk('g',{},$('chips')),y=290+i*100;mk('rect',{x:390,y:y,width:320,height:70,rx:35,class:'gain'},g);txt(g,s,{x:550,y:y+43,class:'m','font-size':22,'text-anchor':'middle',style:'fill:var(--on-gain)'});return g});
fig($('thru'),1130,500,16,'gain');fig($('thru'),1200,510,16,'gain');
const BR=[];for(let r=0;r<8;r++)for(let c=0;c<6;c++){const e=mk('rect',{x:860+c*100,y:280+r*40,width:100,height:40,fill:'var(--line)',stroke:'var(--stage)','stroke-width':4},$('wall'));if(r>1&&(c==2||c==3))BR.push([e,r])}
const IB=['RUDE EMAIL','UNFAIR COMMENT','SOMEONE TAKES CREDIT'].map((s,i)=>{const y=300+i*115,g=mk('g',{},$('inb'));mk('rect',{x:150,y:y,width:460,height:90,rx:12,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);mk('path',{d:'M175 '+(y+25)+'h52v40h-52zl26 20 26-20',fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-linejoin':'round'},g);txt(g,s,{x:250,y:y+53,class:'m','font-size':20});return g});