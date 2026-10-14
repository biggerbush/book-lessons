const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const gearD=(r,n)=>{let d='';const N=n*4;for(let i=0;i<N;i++){const a=i*2*Math.PI/N,R=(i%4<2)?r+20:r;d+=(i?'L':'M')+(R*Math.cos(a)).toFixed(1)+' '+(R*Math.sin(a)).toFixed(1)}return d+'Z'};
$('gA').setAttribute('d',gearD(120,12));$('gB').setAttribute('d',gearD(80,8));
const WR=[1,0,1,1,0,1,1,1,0,1,0,1];
const ST=WR.map((w,i)=>{const x=140+i*52,g=mk('g',{},$('stu'));const f=fig(g,x,690,16,'ink');mk('path',{d:'M'+(x-24)+' 676l24-10 24 10-24 10z',class:'ink'},g);return f});
// suggestion cards lined up along the trail from System 1 to the desk
const CD=[340,460,580,700].map(x=>{const g=mk('g',{},$('cards'));
  mk('rect',{x:x,y:450,width:60,height:40,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('path',{d:'M'+(x+12)+' 464h36M'+(x+12)+' 476h24',stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},g);
  mk('path',{d:'M'+(x+82)+' 460l10 10-10 10',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  return g});
const HN=[0,1,2,3,4].map(()=>mk('circle',{cy:515,r:22,class:'gain'},$('hn')));
const R=(id,a,u)=>rise($(id),p(u,a,a+.5));