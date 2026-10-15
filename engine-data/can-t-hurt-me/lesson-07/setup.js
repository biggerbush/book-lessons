const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},g)};
const R=(id,a,u,d)=>rise($(id),p(u,a,a+(d||.5)));
fig($('sold'),0,-80,18,'ink');
let JL=900;try{JL=$('jpath').getTotalLength()||900}catch(e){}
$('jpath').setAttribute('stroke-dasharray',JL);
let sp='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?14:34;sp+=(1300+r*Math.cos(a)).toFixed(1)+','+(500+r*Math.sin(a)).toFixed(1)+' '}
mk('polygon',{points:sp,fill:'var(--on-gain)'},$('star'));
const CD=[];for(let r=0;r<6;r++)for(let c=0;c<10;c++){const k=(c===7&&r===2)?2:(c>5&&c<9&&r>1&&r<4)?1:0;CD.push([mk('circle',{cx:200+c*80,cy:280+r*72,r:18},$('crowdG')),k])}
const CL=[];for(let i=0;i<28;i++)CL.push(mk('rect',{x:660+(i%7)*116,y:260+Math.floor(i/7)*96,width:100,height:80,rx:10,'stroke-width':3},$('calG')));
const gear=(cx,cy)=>{const g=mk('g',{},$('gearsG')),n=10,st=2*Math.PI/n;let d='';for(let i=0;i<n;i++){const a=i*st;[[70,0],[88,.15],[88,.4],[70,.55]].forEach((q,j)=>{d+=(i||j?'L':'M')+(cx+q[0]*Math.cos(a+st*q[1])).toFixed(1)+' '+(cy+q[0]*Math.sin(a+st*q[1])).toFixed(1)})}
mk('path',{d:d+'z',class:'ink'},g);mk('circle',{cx:cx,cy:cy,r:22,fill:'var(--stage)'},g);return g};
const G1=gear(640,670),G2=gear(800,670);
const RG=[];for(let i=0;i<8;i++)RG.push(mk('path',{d:`M1100 ${700-i*68}h200`,class:'s-ink','stroke-width':7,'stroke-linecap':'round'},$('rungs')));
const WP=[[1240,520],[1280,520],[1280,480],[1320,480],[1320,440],[1360,440],[1360,400]];
const wpt=k=>{const s=Math.min(k*6,5.999),i=Math.floor(s),f=s-i;return[WP[i][0]+(WP[i+1][0]-WP[i][0])*f,WP[i][1]+(WP[i+1][1]-WP[i][1])*f]};