const bp=(x,y,r)=>'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z';
const fig=(g,x,y,r,a)=>{const G=mk('g',{},g);mk('circle',Object.assign({cx:x,cy:y,r:r},a),G);mk('path',Object.assign({d:bp(x,y,r)},a),G);return G};
const IK={class:'ink'};
const tx=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const coat=(g,x,y,r)=>{const G=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:'ink'},G);mk('path',{d:bp(x,y,r),fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},G);
  mk('path',{d:'M'+(x-r*.6)+' '+(y+r*1.55)+'L'+x+' '+(y+r*2.8)+'L'+(x+r*.6)+' '+(y+r*1.55)+'M'+x+' '+(y+r*2.8)+'V'+(y+r*4.2),fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},G);return G};
const tag=(g,x,s,c)=>{mk('rect',{x:x-95,y:612,width:190,height:48,rx:8,fill:c?'var(--gain)':'var(--stage)',stroke:c?'var(--gain)':'var(--ink)','stroke-width':4},g);tx(g,x,644,s,{class:'m','font-size':22,'text-anchor':'middle',style:c?'fill:var(--on-gain)':'fill:var(--ink)'})};

const c0=coat($('coat0'),1300,300,60);
mk('rect',{x:1335,y:480,width:40,height:30,fill:'none',stroke:'var(--ink)','stroke-width':4},c0);mk('path',{d:'M1352 482v-26',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},c0);
fig($('str0'),1010,440,30,IK);

const SW=[];for(let i=0;i<10;i++)SW.push(mk('rect',{x:460+i*70,y:290,width:40,height:60,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('sw')));
coat($('lab1'),200,500,34);fig($('tch'),620,520,30,IK);fig($('lrn'),1360,520,30,IK);
const CR=[];for(let i=0;i<12;i++){const G=fig($('crowd1'),150+i*55,730,14,{});G.setAttribute('class','ink');CR.push(G)}

const AD=[[180,'PARENTS'],[330,'TEACHERS'],[480,'BOSSES']].map(q=>{const G=fig($('adults'),q[0],300,30,IK);
  tx(G,q[0],462,q[1],{class:'m','font-size':20,'text-anchor':'middle'});mk('path',{d:'M'+q[0]+' 484L330 570',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 8','stroke-linecap':'round'},G);return G});
fig($('kid'),330,600,20,{class:'gain'});tx($('kid'),330,724,'YOU, AS A CHILD',{class:'m','font-size':20,'text-anchor':'middle'});

fig($('callr'),230,340,40,{fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-dasharray':'10 8'});
const nw=$('nwalk');fig(nw,1150,380,32,IK);mk('rect',{x:1132,y:330,width:36,height:14,rx:3,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},nw);

for(let i=0;i<=10;i++)mk('path',{d:'M'+(i%5?782:774)+' '+(300+i*40)+'H'+(i%5?798:806),stroke:'var(--ink)','stroke-width':4},$('rul'));
fig($('man0'),480,490,50,IK);tag($('man0'),480,'STUDENT',0);
fig($('m1s'),1100,490,50,IK);tag($('m1s'),1100,'PROFESSOR',1);

const gd=$('gd');fig(gd,230,390,36,IK);
mk('path',{d:'M190 366h80v-14a40 22 0 0 0-80 0z',class:'ink'},gd);mk('path',{d:'M184 368h96',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},gd);
mk('circle',{cx:250,cy:495,r:9,class:'gain'},gd);mk('path',{d:'M276 462L340 422',stroke:'var(--ink)','stroke-width':12,'stroke-linecap':'round'},gd);
const FL=[470,570,670].map(x=>fig($('fol5'),x,420,26,IK));
for(let i=0;i<10;i++)mk('rect',{x:880+i*60,y:584,width:34,height:46,class:'ink','fill-opacity':.25},$('zebra'));
const wk=$('walk');fig(wk,1140,396,32,IK);
mk('path',{d:'M1121 442L1140 482L1159 442',fill:'none',stroke:'var(--stage)','stroke-width':5},wk);mk('path',{d:'M1140 446l-8 10 8 34 8-34z',class:'gain'},wk);
const WF=[1050,970,890].map(x=>fig(wk,x,420,24,IK));

coat($('doc6'),330,360,40);
mk('path',{d:'M306 425v30a24 24 0 0 0 48 0v-30',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('doc6'));

fig($('wt'),220,330,40,IK);mk('path',{d:'M200 382l20 10-20 10zM240 382l-20 10 20 10z',class:'gain'},$('wt'));