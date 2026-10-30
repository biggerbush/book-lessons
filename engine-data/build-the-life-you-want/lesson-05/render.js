// title: the mirror sways, the reflection fades, light breaks out
  $('mir').setAttribute('transform','rotate('+(3*Math.sin(t*1.2)).toFixed(2)+' 1300 600)');
  $('refl').setAttribute('opacity',1-.85*p(u,TM.mirror+3,TM.mirror+4.2));
  R0.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.mirror+3+i*.1,TM.mirror+3.6+i*.1)));

  // mirror trap
  rv('p1',u,TM.person); rv('b1a',u,TM.person+4.2); rv('b1b',u,TM.person+5.8);
  $('loop').setAttribute('opacity',p(u,TM.thought_loop,TM.thought_loop+.6)); $('loop').setAttribute('transform','rotate('+(t*40%360).toFixed(1)+' 320 500)');
  rv('ch1',u,TM.thought_loop+.4); $('ln1').style.strokeDashoffset=1-p(u,TM.thought_loop+5.4,TM.thought_loop+6.8); rv('c1',u,TM.thought_loop+5.4);

  // emperor and the scale
  rv('emp',u,TM.emperor); rv('hrt',u,TM.emperor+5); rv('scl',u,TM.emperor+5.4);
  const ang=14*p(u,TM.scale+.3,TM.scale+1.8)*Math.PI/180, bx=300*Math.cos(ang), by=300*Math.sin(ang);
  $('beam').setAttribute('x1',(1000-bx).toFixed(1)); $('beam').setAttribute('y1',(330-by).toFixed(1)); $('beam').setAttribute('x2',(1000+bx).toFixed(1)); $('beam').setAttribute('y2',(330+by).toFixed(1));
  $('panL').setAttribute('transform','translate('+(1000-bx).toFixed(1)+' '+(330-by).toFixed(1)+')'); $('panR').setAttribute('transform','translate('+(1000+bx).toFixed(1)+' '+(330+by).toFixed(1)+')');
  rv('c2',u,TM.scale+5.3);

  // spotlight
  rv('stg',u,TM.stage); rv('aud',u,TM.audience);
  const sp=p(u,TM.audience+6.8,TM.audience+7.6);
  $('gz').setAttribute('opacity',p(u,TM.audience+.4,TM.audience+1.2)*(1-.8*sp)); $('cone3').setAttribute('fill-opacity',.32-.2*sp);
  rv('t3a',u,TM.audience+4.2); rv('t3b',u,TM.audience+6.8);

  // shirt test
  rv('shirt',u,TM.tshirt); rv('peers',u,TM.tshirt+1.5); rv('ch4',u,TM.guess_chart);
  const hg=200*p(u,TM.guess_chart+.4,TM.guess_chart+1.6), ha=70*p(u,TM.guess_chart+4.2,TM.guess_chart+5.2);
  $('bg').setAttribute('y',700-hg); $('bg').setAttribute('height',hg); $('ba').setAttribute('y',700-ha); $('ba').setAttribute('height',ha);
  rv('vg',u,TM.guess_chart+1.2); rv('va',u,TM.guess_chart+4.8); rv('me4',u,TM.guess_chart+6.8); rv('c4',u,TM.guess_chart+6.8);

  // dim light, free bird
  rv('lamp5',u,TM.dim_light);
  const kd=p(u,TM.dim_light+3.8,TM.dim_light+5.2), w=170-110*kd;
  $('cone5').setAttribute('points','380,262 420,262 '+(400+w)+',700 '+(400-w)+',700'); $('cone5').setAttribute('fill-opacity',(.45-.3*kd).toFixed(2));
  rv('cage',u,TM.dim_light+1); rv('birdw',u,TM.dim_light+1);
  const dk=p(u,TM.free_bird,TM.free_bird+.6);
  $('door').setAttribute('transform','translate(1000 520) scale('+(1-2*dk).toFixed(3)+' 1) skewY('+(-8*dk).toFixed(2)+')');
  const f=p(u,TM.free_bird+.5,TM.free_bird+2.5), bp=BZ(f), hop=f>=1?6*Math.sin(t*2):0;
  $('bird').setAttribute('transform','translate('+bp[0].toFixed(1)+' '+(bp[1]+hop).toFixed(1)+') rotate('+(-18*Math.sin(Math.PI*f)).toFixed(1)+')');
  const fl=f>0?(f<1?Math.sin(t*14):.75+.25*Math.sin(t*4)):1;
  $('wing').setAttribute('transform','translate(0 -2) scale(1 '+fl.toFixed(2)+') translate(0 2)');
  TR.forEach(q=>q[1].setAttribute('opacity',cl((f-q[0])*25)));
  TG.forEach((g,i)=>rise(g,p(u,TM.free_bird+1.5+i,TM.free_bird+2+i)));

  // window
  rv('win',u,TM.window); rv('me6',u,TM.window+.3);
  G6.forEach(g=>g.style.strokeDashoffset=1-p(u,TM.window+1.5,TM.window+2.7));
  rv('q6',u,TM.question); rv('h6',u,TM.helping_hand); rv('c6',u,TM.helping_hand+3.7);

  // backpack, sunrise
  rv('s7w',u,TM.backpack);
  const dd=p(u,TM.backpack+4.2,TM.backpack+5.6), L=14*(1-dd);
  $('walker').setAttribute('transform','rotate('+L.toFixed(2)+' 600 720)');
  $('pack').setAttribute('transform','translate('+(-170*dd).toFixed(1)+' '+(120*dd).toFixed(1)+') rotate('+L.toFixed(2)+' 600 720)');
  rv('rel',u,TM.backpack+7.1);
  const sk=p(u,TM.sunrise,TM.sunrise+1.6); $('sun7').setAttribute('opacity',sk);
  $('sunr').setAttribute('transform','translate(0 '+(120*(1-sk)).toFixed(1)+') rotate('+(t*10%360).toFixed(1)+' 1250 540)');
  rv('c7',u,TM.sunrise+.4);

  // close
  rv('qa',u,TM.sticky_note); rv('qb',u,TM.sticky_note+.4); rv('qc',u,TM.sticky_note+.8); rv('notew',u,TM.sticky_note+1.4); rv('lt',u,TM.sticky_note+6.6);
  $('note').setAttribute('transform','translate(1320 700) rotate('+(-5+2*Math.sin(t*1.5)).toFixed(2)+')');