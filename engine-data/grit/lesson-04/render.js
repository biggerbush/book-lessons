const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  CAL.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.calendar+.3+i*.15,TM.calendar+.5+i*.15)));
  dr($('flat'),p(u,TM.calendar+.5,TM.calendar+4));

  R('car',TM.driver); $('road').setAttribute('stroke-dashoffset',(t*120%50).toFixed(1));
  R('chart',TM.driver+2.2); dr($('curve'),p(u,TM.driver+2.4,TM.clock));
  R('clk',TM.clock); $('hand').setAttribute('transform','rotate('+(Math.max(0,u-TM.clock)*240%360).toFixed(1)+' 1260 520)');
  $('plat').setAttribute('opacity',p(u,TM.clock+.6,TM.clock+1.2)); R('platL',TM.clock+.6); R('how',TM.clock+3.7);

  R('res',TM.researcher); R('vio',TM.violinist); $('look').setAttribute('opacity',p(u,TM.violinist+.3,TM.violinist+.9));
  R('dp',TM.violinist+3.3); PT.forEach((g,i)=>rise(g,p(u,TM.violinist+3.8+i*.5,TM.violinist+4.3+i*.5)));

  R('tgt',TM.target); R('arw',TM.target+2.9); const af=1-p(u,TM.target+2.9,TM.target+3.5);
  $('arwF').setAttribute('transform','translate('+(af*120).toFixed(1)+' '+(-af*120).toFixed(1)+')');
  $('bull').style.fill=u>=TM.target+3.4?'var(--gain)':'var(--ink)';
  R('pno',TM.piano_keys); R('pass',TM.piano_keys+.8); R('lad',TM.ladder); R('gl',TM.ladder+.8); R('beyond',TM.ladder+1.4);

  R('fcs',TM.headphones); $('ring').setAttribute('r',(92+6*Math.sin(t*3)).toFixed(1));
  [0,1,2].forEach(i=>{const a=TM.headphones+3.8+i*.5; R('d'+i,a); dr($('x'+i),p(u,a+.3,a+.6))});
  R('hg',TM.hourglass); const sk=p(u,TM.hourglass+.5,TM.hourglass+6), yt=300+130*sk, hw=70*(1-sk);
  $('sandT').setAttribute('points',(1280-hw).toFixed(1)+','+yt.toFixed(1)+' '+(1280+hw).toFixed(1)+','+yt.toFixed(1)+' 1280,430');
  $('sandB').setAttribute('points','1210,590 1350,590 1280,'+(590-110*sk).toFixed(1));
  $('trk').setAttribute('opacity',sk>0&&sk<1?1:0); R('rest',TM.hourglass+1.2); R('tired',TM.hourglass+2.5);

  R('fb0',TM.coach); R('fb1',TM.coach+3.4); R('fb2',TM.coach+4.2);
  $('rec').setAttribute('opacity',Math.sin(t*4)>0?1:.25);
  $('ndl').setAttribute('transform','rotate('+(-70+110*p(u,TM.coach+4.4,TM.coach+5.4)+3*Math.sin(t*5)).toFixed(1)+' 1270 410)');
  R('mk',TM.red_marks); [0,1,2].forEach(i=>R('m'+i,TM.red_marks+.5+i*.4,.3)); R('lean',TM.red_marks+1.8);

  R('lp',TM.loop_arrow); $('spin').setAttribute('transform','rotate('+(t*50%360).toFixed(1)+' 400 500)');
  R('wk',TM.loop_arrow+.6); const nw=u>=TM.checkmark+.8;
  $('wkb').setAttribute('width',(680*(nw?p(u,TM.checkmark+.8,TM.checkmark+1.6):1-p(u,TM.loop_arrow+1,TM.checkmark))).toFixed(1));
  $('wkl').textContent=nw?'A NEW WEAKNESS':'THE WEAKNESS';
  R('mir',TM.mirror); R('chk',TM.checkmark); R('again',TM.checkmark+.8);

  R('tro',TM.trophy); R('fc',TM.flashcards); R('br',TM.flashcards+.5); const bk=p(u,TM.flashcards+1,TM.flashcards+3.5);
  $('b0').setAttribute('width',(700*bk).toFixed(1)); $('b1').setAttribute('width',(380*bk).toFixed(1));
  R('gr',TM.flashcards+8.2); R('frn',TM.frown_face); const ek=p(u,TM.frown_face+.6,TM.frown_face+2);
  $('e0').setAttribute('width',(640*ek).toFixed(1)); $('e1').setAttribute('width',(90*ek).toFixed(1)); R('feel',TM.frown_face+5.7);

  R('qa',TM.notebook); R('qb',TM.notebook+.4); R('qc',TM.notebook+.8); R('nb',TM.notebook+1.2);
  ST.forEach((g,i)=>rise(g,p(u,TM.notebook+4.9+i*.8,TM.notebook+5.4+i*.8)));