const fig=(g,x,y,r,cls)=>{const a=cls?{class:cls}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g);return g};
const sq=(x0,x1,y,a,ph)=>{let d='M'+x0+' '+y;for(let x=x0;x<=x1;x+=10)d+='L'+x+' '+(y+a*Math.sin(x/14+ph)).toFixed(1);return d};
const gear=(cx,cy,r)=>{let d='';for(let i=0;i<32;i++){const a=i*Math.PI/16,R=(i>>1)%2?r*.76:r;d+=(i?'L':'M')+(cx+R*Math.cos(a)).toFixed(1)+' '+(cy+R*Math.sin(a)).toFixed(1)}return d+'Z'};
fig($('tHead'),1260,500,56,'ink');
// scene 1: walker and a sky of separate clouds that grow and darken towards 29
fig($('wk'),0,560,40,'ink');
const CLD=[],DROPS=[];
for(let i=0;i<8;i++){const cx=230+i*160,s=.45+i*.045,o=mk('g',{},$('sky'));
  const inn=mk('g',{transform:'translate('+cx+' 400) scale('+s.toFixed(3)+')','fill-opacity':(.25+.75*i/7).toFixed(2)},o);
  mk('circle',{cx:-60,cy:0,r:38},inn);mk('circle',{cx:0,cy:-18,r:52},inn);mk('circle',{cx:60,cy:0,r:38},inn);mk('rect',{x:-95,y:0,width:190,height:38,rx:19},inn);
  CLD.push({o:o,inn:inn,cx:cx});
  if(i>=4)for(let j=0;j<3;j++)DROPS.push({el:mk('path',{d:'M'+(cx-30+j*30)+' 0v18',class:'s-loss','stroke-width':5,'stroke-linecap':'round'},$('rainG')),c:i,j:j});
}
fig($('fA'),0,360,50);fig($('fB'),0,360,50);
let sp='';for(let i=0;i<=120;i++){const a=i*.21,r=4+i*1.2;sp+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}
mk('path',{d:sp,fill:'none',class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('spir'));
fig($('bp'),1280,420,30,'gain');
fig($('obsI'),380,420,50,'ink');fig($('obsG2'),380,420,50,'gain');
// scene 6: man with clear neck gap so the loop encloses only the head
mk('circle',{cx:520,cy:370,r:46,class:'ink'},$('manP'));
mk('path',{d:'M445 600v-50a75 75 0 0 1 150 0v50z',class:'ink'},$('manP'));
['IT JUDGES','IT COMPLAINS','IT COMPARES','IT WORRIES'].forEach((s,i)=>{const y=240+i*90,g=mk('g',{id:'pl'+i},$('pills'));
  mk('path',{d:'M600 370L900 '+(y+35),class:'s-loss','stroke-width':3,'stroke-dasharray':'6 8',fill:'none'},g);
  mk('rect',{x:900,y:y,width:400,height:70,rx:35,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  mk('text',{x:1100,y:y+44,'font-size':24,'text-anchor':'middle',class:'m'},g).textContent=s});
for(let i=0;i<4;i++)mk('ellipse',{cx:520,cy:628+i*30,rx:i%2?6:12,ry:18,fill:'none',stroke:'var(--ink)','stroke-width':5},$('chain'));
fig($('c7a'),300,430,34,'gain');
mk('path',{d:gear(0,0,40),class:'ink'},$('g7a'));mk('circle',{r:12,fill:'var(--stage)'},$('g7a'));
mk('path',{d:gear(800,270,46),class:'loss'},$('g7b'));mk('circle',{cx:800,cy:270,r:14,fill:'var(--stage)'},$('g7b'));
mk('path',{d:gear(1280,270,46),fill:'var(--muted)'},$('g7c'));mk('circle',{cx:1280,cy:270,r:14,fill:'var(--stage)'},$('g7c'));
fig($('pup'),0,430,34,'loss');fig($('c7c'),1280,430,34,'gain');
// scene 8: large listener
mk('circle',{cx:1300,cy:470,r:46,class:'gain'},$('lisP'));
mk('path',{d:'M1210 720v-50a90 90 0 0 1 180 0v50z',class:'gain'},$('lisP'));