const plant=g=>{mk('path',{d:'M0 0V-120',class:'s-gain','stroke-width':8,'stroke-linecap':'round'},g);mk('path',{d:'M0-50q-50-6-62-48q52-4 62 48z',class:'gain'},g);mk('path',{d:'M0-82q50-6 62-48q-52-4-62 48z',class:'gain'},g);mk('circle',{cx:0,cy:-128,r:14,class:'gain'},g);return g};
const pot=(g,x,y)=>mk('path',{d:'M'+(x-50)+' '+y+'h100l-14 60h-72z',class:'ink'},g);
const knot=(g,cx,cy,rx,ry,n,w)=>{for(let i=0;i<n;i++)mk('ellipse',{cx:cx,cy:cy,rx:rx,ry:ry,transform:'rotate('+(i*180/n)+' '+cx+' '+cy+')',fill:'none',class:'s-loss','stroke-width':w},g)};
const grow=(el,x,y,s,r)=>el.setAttribute('transform','translate('+x+' '+y+') rotate('+(r||0).toFixed(2)+') scale('+s.toFixed(3)+')');
const around=(el,x,y,s)=>el.setAttribute('transform','translate('+x+' '+y+') scale('+s.toFixed(3)+') translate('+(-x)+' '+(-y)+')');
pot($('tpot'),1300,470); plant($('tpl'));
pot($('pot1'),300,640); plant($('sp1'));
const TD=[0,1,2,3,4,5,6].map(i=>mk('circle',{cx:700+i*90,cy:360,r:20,class:'gain'},$('br1top')));
const BD=[12,22,34,48].map((r,i)=>mk('circle',{cx:[700,770,870,1010][i],cy:660,r:r,class:'gain'},$('br1bot')));
// push-up bars: baseline y=780, tallest top y=690, last bar ends at x=1210
const BR=[];for(let i=0;i<14;i++){const h=12+i*6;BR.push(mk('rect',{x:120+i*80,y:780-h,width:50,height:h,rx:6,class:'gain'},$('bars')))}
const RG=[0,1,2,3].map(()=>mk('circle',{cx:420,cy:480,fill:'none',class:'s-gain','stroke-width':5},$('rings')));
const BL=['FIRST TINY HABIT','NEXT HABIT','AND THE NEXT','AND THE NEXT'].map((s,i)=>{const g=mk('g',{},$('blocks')),y=680-i*104;mk('rect',{x:1000,y:y,width:400,height:84,rx:14,class:'gain'},g);const tx=mk('text',{x:1200,y:y+52,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'},g);tx.textContent=s;return g});
knot($('kn'),800,470,150,46,6,7);
const PX=[220,400,580], SD=PX.map(x=>{pot($('pots5'),x,640);return plant(mk('g',{},$('pots5')))});
knot($('old5k'),1220,540,110,36,4,6);
knot($('k8'),1300,740,80,26,3,6);