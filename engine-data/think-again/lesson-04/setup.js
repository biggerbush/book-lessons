const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const prop=(g,len)=>{const q=mk('g',{},g);[0,180].forEach(a=>mk('ellipse',{cx:len/2,cy:0,rx:len/2,ry:len*.15,class:'gain',transform:'rotate('+a+')'},q));mk('circle',{r:len*.13,class:'ink'},q);return q};
[[1130,400],[1390,400]].forEach(q=>fig($('bros'),q[0],q[1],30,'ink'));
[[290,410],[410,410],[530,410],[160,470],[660,470]].forEach(q=>fig($('tblp'),q[0],q[1],22,'ink'));
[280,440,600].forEach(x=>{fig($('sadp'),x,380,26,'loss');mk('path',{d:'M'+(x-18)+' 432v22q0 22 18 30q18-8 18-30v-22l-18-8z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},$('shd'))});
for(let i=0;i<5;i++){const a=(-160+i*35)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1160+100*c).toFixed(0)+' '+(410+100*s).toFixed(0)+'L'+(1160+130*c).toFixed(0)+' '+(410+130*s).toFixed(0),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
[270,390].forEach(x=>fig($('shopp'),x,430,18,'ink'));
fig($('dadp'),800,380,30,'ink');[680,920].forEach(x=>fig($('dadp'),x,480,20,'gain'));
[0,1,2].forEach(i=>mk('rect',{x:740+(i%2)*10,y:610+i*30,width:110,height:26,rx:4,fill:i===1?'var(--gain)':'var(--ink)'},$('dadp')));
const P3=prop($('p3'),140);[1120,1420].forEach(x=>fig($('prpp'),x,610,18,'ink'));
[300,1300].forEach(x=>fig($('ppl4'),x,400,36,'ink'));
const P5=[prop($('pr5'),110),prop($('pr5'),110)];
[220,420].forEach(x=>fig($('hl'),x,690,22,'ink'));
[200,560].forEach(x=>fig($('pzp'),x,660,22,'ink'));
[220,360,500].forEach(x=>{const g=$('mk7');fig(g,x,370,30,'ink');mk('circle',{cx:x,cy:370,r:26,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+(x-13)+' 374q13 14 26 0',fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},g);[-9,9].forEach(d=>mk('circle',{cx:x+d,cy:362,r:3,class:'ink'},g))});
fig($('q8p'),1340,450,24,'ink');
let W6=580;const m6=()=>{try{const v=$('t6').getComputedTextLength();if(v>0)W6=v+8}catch(e){}};m6();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(m6);
const tf=(el,x,y,r)=>el.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')'+(r!==undefined?' rotate('+(r%360).toFixed(1)+')':''));