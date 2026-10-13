const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},g)};
[990,1050,1110].forEach(x=>fig($('starers'),x,440,14,'ink'));
const acts=[920,1040,1160].map((x,i)=>{const g=mk('g',{},$('acts'));mk('circle',{cx:x,cy:400,r:34,class:'gain'},g);
  mk('path',{d:`M${x+42} 400h${i<2?36:90}m-12-12 12 12-12 12`,fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(1300+98*c).toFixed(1)} ${(390+98*s).toFixed(1)}L${(1300+110*c).toFixed(1)} ${(390+110*s).toFixed(1)}`,class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ticks'))}
[1080,1180,1280,1380].forEach(x=>{fig($('worry'),x,690,20,'ink');const q=mk('text',{x:x,y:655,'font-size':36,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},$('worry'));q.textContent='?'});
const DY=['MON','TUE','WED','THU','FRI','SAT','SUN'],NT=[3,4,2,5,4,3,4],TL=[];
DY.forEach((d,i)=>{const y=370+i*60,tx=mk('text',{x:190,y:y+8,'font-size':20,class:'m'},$('days'));tx.textContent=d;
  for(let j=0;j<NT[i];j++){const x=300+j*28;TL.push([mk('path',{d:j===4?`M${x-124} ${y+14}L${x-4} ${y-14}`:`M${x} ${y-18}v36`,class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('tal')),x,y])}});
for(let i=0;i<5;i++){const a=(-90+i*72)*Math.PI/180;fig($('hud'),400+165*Math.cos(a),590+165*Math.sin(a),22,i===0?'gain':'ink')}
const gear=(cx,cy,r,n,c)=>{let d='';for(let i=0;i<n*4;i++){const a=i*Math.PI/(n*2),R=i%4<2?r+14:r;d+=(i?'L':'M')+(cx+R*Math.cos(a)).toFixed(1)+' '+(cy+R*Math.sin(a)).toFixed(1)}return mk('path',{d:d+'Z',class:c},$('gears'))};
const GB=gear(1220,520,160,16,'ink'),GA=gear(1004,620,64,7,'gain'),GC=gear(1013,424,54,6,'gain');
const dr=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));