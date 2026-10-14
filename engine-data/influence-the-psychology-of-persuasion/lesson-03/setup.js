const PS=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g);return g};
const PIE=(cx,cy,r,f)=>{f=Math.min(f,.9999);const a=f*2*Math.PI,x=cx+r*Math.sin(a),y=cy-r*Math.cos(a);return 'M'+cx+' '+cy+'V'+(cy-r)+'A'+r+' '+r+' 0 '+(f>.5?1:0)+' 1 '+x.toFixed(1)+' '+y.toFixed(1)+'Z'};
const STAR=(cx,cy,R)=>{let d='';for(let i=0;i<10;i++){const a=i*Math.PI/5,q=i%2?R*.45:R;d+=(i?'L':'M')+(cx+q*Math.sin(a)).toFixed(1)+' '+(cy-q*Math.cos(a)).toFixed(1)}return d+'Z'};
const DRAW=(el,k)=>{el.style.strokeDashoffset=1-k;el.setAttribute('opacity',k>0?1:0)};
for(let i=0;i<3;i++){const x=340+i*180,g=$('hs');mk('path',{d:'M'+(x-10)+' 362L'+(x+65)+' 310L'+(x+140)+' 362Z',fill:'var(--ink)'},g);mk('rect',{x:x,y:362,width:130,height:78,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:x+51,y:400,width:28,height:40,fill:'var(--ink)'},g)}
PS($('res'),200,300,26,'var(--ink)');mk('rect',{x:222,y:360,width:36,height:46,rx:4,fill:'var(--gain)'},$('res'));
PS($('adm'),410,420,30,'var(--gain)');PS($('adm'),250,450,22,'var(--line)');PS($('adm'),570,450,22,'var(--line)');
$('sl17s').setAttribute('d',PIE(230,470,80,.17));
PS($('ref0'),1240,370,32,'var(--line)');PS($('ref1'),1240,370,32,'var(--gain)');mk('path',{d:STAR(1240,480,15),fill:'var(--on-gain)'},$('ref1'));
PS($('vw'),940,440,34,'var(--ink)');
const CHIPS=['ACTIVE','PUBLIC','EFFORTFUL'].map((s,i)=>{const g=mk('g',{},$('chips')),x=120+i*260;mk('rect',{x:x,y:196,width:240,height:56,rx:28,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);const e=mk('text',{x:x+120,y:232,'font-size':20,class:'m','text-anchor':'middle',style:'fill:var(--gain)'},g);e.textContent=s;return g});
const LW=[280,240,270,200,250],WL=LW.map((w,i)=>mk('path',{d:'M200 '+(370+i*50)+'h'+w,pathLength:1,'stroke-dasharray':'1 1',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round',fill:'none'},$('wl')));
PS($('slp'),860,470,30,'var(--line)');PS($('cus'),1380,470,30,'var(--gain)');
[0,1,2].forEach(i=>{const y=270+i*80;mk('rect',{x:1230,y:y,width:44,height:44,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':5},$('rows'));mk('path',{d:'M1292 '+(y+22)+'h120',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},$('rows'));if(i!==1)mk('path',{d:'M1238 '+(y+22)+'l10 12 20-26',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('rows'))});