S0.set(10*Math.sin(t*.9)); rise($('tsc'),p(u,TM.scale,TM.scale+.6));
  S0.lab.forEach(l=>l.setAttribute('opacity',p(u,TM.scale+4.5,TM.scale+5.2)));

  rise($('cl'),p(u,TM.pain_cloud,TM.pain_cloud+.6)); rise($('sn'),p(u,TM.sun,TM.sun+.6));
  $('rays').setAttribute('transform',`rotate(${((t*12)%360).toFixed(1)} 1240 440)`);
  rise($('pr'),p(u,TM.person,TM.person+.5)); rise($('pa'),p(u,TM.person+1,TM.person+1.6)); rise($('ev'),p(u,TM.person+2,TM.person+2.6));

  rise($('tw'),p(u,TM.tug_of_war,TM.tug_of_war+.6));
  const sh=-110*p(u,TM.tug_of_war+2.5,TM.tug_of_war+6);
  $('twm').setAttribute('transform',`translate(${(sh+3*Math.sin(t*6)).toFixed(1)} 0)`);
  rise($('shG'),p(u,TM.shield,TM.shield+.4)); $('shA').setAttribute('x2',(160+480*p(u,TM.shield+.3,TM.shield+1.3)).toFixed(1));
  rise($('shS'),p(u,TM.shield+1.1,TM.shield+1.6)); rise($('shT'),p(u,TM.shield+1.6,TM.shield+2.2));

  rise($('br'),p(u,TM.brain,TM.brain+.6)); rise($('ab'),p(u,TM.brain+2.2,TM.brain+2.8));
  CHN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.chain_links+i*.3,TM.chain_links+i*.3+.3)));
  rise($('na'),p(u,TM.chain_links+1.4,TM.chain_links+2));

  rise($('tl'),p(u,TM.cake,TM.cake+.5)); rise($('ck'),p(u,TM.cake+2.2,TM.cake+2.7));
  const ph=160*p(u,TM.cake+2.8,TM.cake+3.6); $('plb').setAttribute('y',(620-ph).toFixed(1)); $('plb').setAttribute('height',ph.toFixed(1));
  rise($('pln'),p(u,TM.cake+3,TM.cake+3.6)); rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  CG.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.5+i*.3?'var(--loss)':'var(--line)'));
  $('td').setAttribute('cx',(300+950*p(u,TM.calendar,TM.calendar+3)).toFixed(1)); $('td').setAttribute('opacity',u>=TM.calendar?1:0);
  $('pnb').setAttribute('height',(170*p(u,TM.calendar+3,TM.calendar+4)).toFixed(1));
  rise($('pnl'),p(u,TM.calendar+3,TM.calendar+3.6)); rise($('kw'),p(u,TM.calendar+5,TM.calendar+5.6));

  rise($('dsk'),p(u,TM.desk,TM.desk+.5)); rise($('clk'),p(u,TM.desk+.6,TM.desk+1.1));
  const ca=(t*30+1080*p(u,TM.clock,TM.clock+3))*Math.PI/180;
  $('clh').setAttribute('x2',(400+46*Math.sin(ca)).toFixed(1)); $('clh').setAttribute('y2',(300-46*Math.cos(ca)).toFixed(1));
  $('clf').setAttribute('stroke',u>=TM.clock?'var(--loss)':'var(--ink)');
  rise($('bars'),p(u,TM.desk+2.5,TM.desk+3.1));
  const bh=90+280*p(u,TM.clock,TM.clock+2.5); $('b1').setAttribute('y',(760-bh).toFixed(1)); $('b1').setAttribute('height',bh.toFixed(1));
  $('b0').setAttribute('fill',u>=TM.pencil?'var(--gain)':'var(--loss)');
  rise($('pcw'),p(u,TM.pencil,TM.pencil+.5)); rise($('flp'),p(u,TM.pencil+.3,TM.pencil+.9));
  $('pcl').setAttribute('transform',`translate(${(380+20*Math.sin(t*5)).toFixed(1)} ${(530+3*Math.sin(t*11)).toFixed(1)})`);

  rise($('mir'),p(u,TM.mirror,TM.mirror+.6)); rise($('rf'),p(u,TM.mirror+6.2,TM.mirror+6.9));
  WT.forEach((g,i)=>{const k=p(u,TM.weights+i*.9,TM.weights+i*.9+.5); g.setAttribute('opacity',k); g.setAttribute('transform',`translate(0 ${(-80*(1-k)).toFixed(1)})`)});
  rise($('mt'),p(u,TM.weights,TM.weights+.5));
  const mh=380*(.6*p(u,TM.weights,TM.weights+3.6)+.4*p(u,TM.weights+6.2,TM.weights+7.6));
  $('mf').setAttribute('y',(760-mh).toFixed(1)); $('mf').setAttribute('height',mh.toFixed(1));
  rise($('ef'),p(u,TM.weights+6.2,TM.weights+6.8));

  const pk=p(u,TM.path,TM.path+2.5); $('pthG').setAttribute('stroke-dashoffset',(PL*(1-pk)).toFixed(1));
  try{const pt=$('pthG').getPointAtLength(PL*pk); $('wk').setAttribute('cx',pt.x.toFixed(1)); $('wk').setAttribute('cy',pt.y.toFixed(1))}catch(e){}
  $('wk').setAttribute('opacity',u>=TM.path?1:0);
  rise($('tro'),p(u,TM.trophy,TM.trophy+.6)); $('spk').setAttribute('transform',`rotate(${(20*Math.sin(t*2)).toFixed(1)} 640 310)`);
  rise($('bal'),p(u,TM.balance,TM.balance+.6)); S7.set(14*p(u,TM.balance+.6,TM.balance+1.8)+1.5*Math.sin(t*2));
  rise($('fg'),p(u,TM.balance+2,TM.balance+2.6));

  rise($('qa'),p(u,TM.notebook,TM.notebook+.5)); rise($('qb'),p(u,TM.notebook+.4,TM.notebook+.9)); rise($('qc'),p(u,TM.notebook+.8,TM.notebook+1.3));
  rise($('nb'),p(u,TM.notebook+.4,TM.notebook+.9));
  NB.forEach((l,i)=>{const a=i<3?TM.notebook+1+i*.5:TM.notebook+6.2+(i-3)*.5; l.setAttribute('stroke-dashoffset',(156*(1-p(u,a,a+.5))).toFixed(1))});
  rise($('nl'),p(u,TM.notebook+6.2,TM.notebook+6.8));