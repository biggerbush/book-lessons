const fig=(g,x,y,r,a)=>[mk('circle',Object.assign({cx:x,cy:y,r:r},a),g),mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)];
const GA={class:'gain'},IN={class:'ink'};
fig($('tme'),1300,360,60,GA);
fig($('critf'),320,420,44,IN);
fig($('viewf'),1330,440,40,{class:'ink','fill-opacity':.4});
fig($('garyf'),720,380,50,GA);
fig($('scrf'),800,330,40,GA);
for(let i=0;i<7;i++)fig($('aud'),440+i*120,630,22,IN);
// hearts float inside the video frame, on either side of the person (frame x 520-1080, y 230-560; person x 740-860)
const HX=[615,690,910,985];
const HT=HX.map(()=>mk('path',{d:'M0 12C-18 0-18-14-9-16C-4-17-1-14 0-11C1-14 4-17 9-16C18-14 18 0 0 12Z',class:'gain',opacity:0},$('hearts')));
const EP=[0,1,2,3].map(i=>{const g=mk('g',{},$('eps')),y=250+i*72;
  mk('rect',{x:1160,y:y,width:300,height:52,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  mk('path',{d:'M1182 '+(y+14)+'l20 12-20 12z',class:'ink'},g);
  mk('rect',{x:1220,y:y+22,width:150,height:8,rx:4,fill:'var(--line)'},g);
  mk('circle',{cx:1428,cy:y+26,r:12,class:'gain'},g);return g});
const DR=[0,1,2].map(()=>mk('circle',{r:9,class:'loss',opacity:0},$('drops')));
const CR=[];
[260,400,540].forEach(x=>[320,500].forEach(y=>{fig($('crowdL'),x,y,26,IN);CR.push(fig($('crowdR'),x+800,y,26,IN))}));
const LA={stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8','stroke-linecap':'round',fill:'none'};
mk('path',Object.assign({d:'M872 410L1034 330M872 430L1032 498'},LA),$('lines'));
[320,500].forEach(y=>mk('path',Object.assign({d:'M1090 '+y+'H1170M1230 '+y+'H1310'},LA),$('lines')));
fig($('you6'),800,380,44,GA);
fig($('phf'),795,380,26,GA);
const SP=[];for(let i=0;i<16;i++){const a=i*Math.PI/8,r=i%2?40:90;SP.push((1273+r*Math.sin(a)).toFixed(0)+','+(440-r*Math.cos(a)).toFixed(0))}
$('star').setAttribute('points',SP.join(' '));
fig($('cpf'),1130,712,22,IN);
fig($('cpf'),1200,712,22,{fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'6 6'});
const RF=fig($('refl'),1360,300,24,IN);