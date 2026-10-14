const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const star=(cx,cy,s)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=(i%2?11:26)*s;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'};
[['st4',1325,292,1],['st5',1180,286,1],['st8',1410,725,1.5]].forEach(q=>mk('path',{d:star(q[1],q[2],q[3]),class:'gain'},$(q[0])));
const stk=(id,x1,w,k)=>$(id).setAttribute('x2',(x1+w*k).toFixed(1));
const BX=[0,1,2,3].map(()=>mk('rect',{y:472,width:26,height:26,rx:4,fill:'var(--line)',stroke:'var(--ink)','stroke-width':3},$('boxes')));
const TG=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=1110+c*110,y=280+r*80;fig($('ppl'),x,y,14,'ink');TG.push(mk('circle',{cx:x,cy:y,r:24,fill:'none',stroke:'var(--loss)','stroke-width':4},$('tgts')))}
const BR=[...Array(8)].map((_,i)=>mk('rect',{x:120+i*90,width:60,rx:4,class:'loss'},$('bars')));
// spam pile: outer group is animated by rise(), inner group holds the fixed placement
const ENV=[[300,520,-6],[288,470,5],[312,420,-4],[296,370,7],[304,320,-8]].map(q=>{const o=mk('g',{},$('envs'));const g=mk('g',{transform:'translate('+q[0]+' '+q[1]+') rotate('+q[2]+')'},o);
  mk('rect',{x:-80,y:-40,width:160,height:80,rx:6,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);
  mk('path',{d:'M-80 -40l80 45 80-45',fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linejoin':'round'},g);return o});
for(let i=0;i<6;i++)mk('circle',{cx:170+i*64,cy:240,r:11,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
for(let i=0;i<7;i++){const a=-Math.PI+i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1290+54*c).toFixed(1)+' '+(380+54*s).toFixed(1)+'L'+(1290+76*c).toFixed(1)+' '+(380+76*s).toFixed(1),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('rays'))}