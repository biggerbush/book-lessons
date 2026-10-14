const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const cells=[];for(let r=0;r<3;r++)for(let c=0;c<7;c++)cells.push(mk('rect',{x:956+c*74,y:340+r*78,width:64,height:64,rx:10,fill:'var(--line)'},$('cells')));
person($('resp'),240,330,36,'ink');
person($('homep'),1040,490,24,'ink');
const CR=[];for(let i=0;i<60;i++){const g=mk('g',{},$('crowd5'));person(g,140+(i%10)*48,260+Math.floor(i/10)*56,9,'ink');CR.push(g)}
[[1200,360,22],[1300,340,22],[1400,360,22],[1230,540,16],[1370,540,16]].forEach(q=>person($('fam'),q[0],q[1],q[2],'gain'));
const BK=['SAVING','PATIENCE','ROOM FOR ERROR'].map((s,i)=>{const y=260+i*120,g=mk('g',{},$('blocks'));
  const r=mk('rect',{x:120,y:y,width:360,height:90,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const tx=mk('text',{x:300,y:y+54,'font-size':26,'text-anchor':'middle',class:'m'},g);tx.textContent=s;
  mk('path',{d:'M480 '+(y+45)+'L590 440',stroke:'var(--line)','stroke-width':4},g);return [g,r]});
const MO=[];for(let i=0;i<12;i++)MO.push(mk('rect',{x:120+i*104,y:680,width:90,height:60,rx:10,fill:'var(--line)'},$('mrow')));
const RW=[];for(let i=0;i<6;i++){const r=mk('rect',{x:440+i*174,y:280,width:160,height:80,rx:12,fill:'var(--line)'},$('rw'));
  const tx=mk('text',{x:520+i*174,y:328,'font-size':20,'text-anchor':'middle',class:'m'},$('rw'));tx.textContent='MONTH '+(i+1);RW.push([r,tx])}
const FL=[];for(let k=0;k<6;k++)FL.push(mk('rect',{x:172,y:610-k*24,width:216,height:22,rx:6,class:'gain'},$('fl')));
const RG=[];for(let i=0;i<6;i++){const a0=(-90+i*60+4)*Math.PI/180,a1=a0+52*Math.PI/180;
  RG.push(mk('path',{d:'M'+(1300+90*Math.cos(a0)).toFixed(1)+' '+(700+90*Math.sin(a0)).toFixed(1)+'A90 90 0 0 1 '+(1300+90*Math.cos(a1)).toFixed(1)+' '+(700+90*Math.sin(a1)).toFixed(1),fill:'none',stroke:'var(--gain)','stroke-width':14,'stroke-linecap':'round'},$('ring')))}
const rot=(id,a,x,y)=>$(id).setAttribute('transform','rotate('+a.toFixed(1)+' '+x+' '+y+')');