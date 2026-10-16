const fig=(g,x,y,r,cls)=>{const a=cls?{class:cls}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g);return g};
fig($('tFut'),1330,414,30,'gain');fig($('tYou'),0,440,24,'ink');
const BR=[0,1].map(()=>mk('circle',{cx:300,cy:480,r:46,fill:'none',stroke:'var(--gain)','stroke-width':4},$('breath')));
const T1=$('trail1'),L1=T1.getTotalLength();
fig($('walk'),0,-100,22,'ink');fig($('old'),1300,380,34,'gain');
fig($('you2'),300,560,36,'ink');fig($('fut2'),1300,540,40,'gain');
fig($('me6'),1110,430,20,'ink');fig($('me7'),300,430,34);fig($('refl'),900,410,34,'gain');
const ST=[];for(let i=0;i<12;i++)ST.push(mk('rect',{x:620+i*70,y:780-(i+1)*36,width:70,height:(i+1)*36,fill:'var(--line)',stroke:'var(--stage)','stroke-width':3},$('steps')));
const TK=[];for(let i=0;i<28;i++){const x=130+(i%7)*70,y=320+Math.floor(i/7)*70;mk('rect',{x:x,y:y,width:60,height:60,rx:8,fill:'none',stroke:'var(--line)','stroke-width':3},$('cal'));TK.push(mk('path',{d:'M'+(x+16)+' '+(y+32)+'l10 10 20-22',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('cal')))}
const T7=$('tr7'),L7=T7.getTotalLength();T7.setAttribute('stroke-dasharray',L7);
for(let i=0;i<7;i++){const a=Math.PI*(.1+.8*i/6),c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1260+92*c).toFixed(1)+' '+(640-92*s).toFixed(1)+'L'+(1260+124*c).toFixed(1)+' '+(640-124*s).toFixed(1),stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('rays'))}