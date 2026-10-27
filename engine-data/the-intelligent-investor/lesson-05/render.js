const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));

  setScale(T,10*Math.sin(t*2.2)*Math.exp(-t*.35)); R('tsc',TM.title_card,.8);

  R('bk0',TM.stock_bucket); R('stk',TM.stock_bucket+2.6); R('bk1',TM.bond_bucket); R('bnd',TM.bond_bucket+.6);
  R('sw0',TM.bond_bucket+5.8); R('sw1',TM.bond_bucket+8.7);
  const sw=u>=TM.bond_bucket+5.8; SQ.forEach((q,i)=>q.setAttribute('transform','translate(0 '+(sw?(5*Math.sin(t*5+i*1.7)).toFixed(1):0)+')'));

  // range bar: stocks share swings inside 25-75%, bonds fill exactly the remainder
  R('rb',TM.range_bar); R('rbs',TM.range_bar+.3); R('brk',TM.range_bar+1); R('rbb',TM.range_bar+6.1);
  const sv=50+22*Math.sin(t*.9), sw2=12.8*sv;
  $('sR').setAttribute('width',sw2.toFixed(1));
  $('bR').setAttribute('x',(160+sw2).toFixed(1)); $('bR').setAttribute('width',(1280-sw2).toFixed(1));
  $('bR').setAttribute('opacity',p(u,TM.range_bar+6.1,TM.range_bar+6.8));
  R('nz',TM.never_zero); R('nall',TM.never_zero+1.2);

  const e3=p(u,TM.even_scale,TM.even_scale+1.6); setScale(S3,(-14+2*Math.sin(t*2))*(1-e3));
  LB.forEach(g=>rise(g,p(u,TM.even_scale+1,TM.even_scale+1.6)));
  R('cb',TM.no_crystal); R('nocb',TM.no_crystal+.9); R('dflt',TM.no_crystal+5);

  const g4=p(u,TM.rising_arrow,TM.rising_arrow+1.5), d4=p(u,TM.one_eleventh+4.2,TM.one_eleventh+5), m4=p(u,TM.move_money,TM.move_money+1.5), h4=40*g4, sl=$('sl');
  sl.setAttribute('height',h4.toFixed(1)); sl.setAttribute('x',(300+320*m4).toFixed(1));
  sl.setAttribute('y',(320-h4+40*m4-60*Math.sin(Math.PI*m4)).toFixed(1));
  sl.style.stroke=u>=TM.one_eleventh&&m4<1?'var(--ink)':'none'; sl.style.fill=m4>.5?'var(--ink)':'var(--gain)'; sl.style.fillOpacity=m4>.5?1:1-.5*d4;
  const bh=400-40*g4; $('bM').setAttribute('height',bh.toFixed(1)); $('bM').setAttribute('y',(720-bh).toFixed(1));
  $('pS').textContent=Math.round(50+5*g4-5*d4)+'%'; $('pB').textContent=Math.round(50-5*g4+5*m4)+'%';
  R('ra',TM.rising_arrow); R('r1',TM.one_eleventh); R('r2',TM.one_eleventh+4.2); R('r3',TM.move_money+1);

  $('pl').style.strokeDashoffset=(1-p(u,TM.falling_arrow,TM.falling_arrow+2.5)).toFixed(3);
  const h5=200-50*p(u,TM.falling_arrow+1.8,TM.falling_arrow+3)+50*p(u,TM.falling_arrow+4.5,TM.falling_arrow+6);
  $('stk5').setAttribute('y',(700-h5).toFixed(1)); $('stk5').setAttribute('height',h5.toFixed(1)); $('bnd5').setAttribute('height',(400-h5).toFixed(1));
  R('sh5',TM.falling_arrow+4.5); R('tg',TM.cheap_tag); R('auto5',TM.cheap_tag+.8);

  R('dial',TM.tilt_dial);
  const a1=p(u,TM.tilt_dial+3,TM.tilt_dial+4.5), a2=p(u,TM.bargain_sign,TM.bargain_sign+1.5), a3=p(u,TM.bargain_sign+4.1,TM.bargain_sign+5.6);
  const s6=50+3*Math.sin(t*1.5)-20*a1+40*a2-20*a3; $('nd').setAttribute('transform','rotate('+((s6-50)*3.6).toFixed(1)+' 800 640)');
  R('lh',TM.tilt_dial+3); R('rb6',TM.bargain_sign); R('stp',TM.bargain_sign+4.1); R('nob',TM.bargain_sign+4.4);

  R('fc',TM.calm_face); R('c7a',TM.calm_face+3.4); R('c7b',TM.umbrella); R('job',TM.umbrella+4.6);
  DR.forEach((d,i)=>{const f=(t*.9+i*.37)%1; d[0].setAttribute('transform','translate(0 '+(d[1]+(d[2]-d[1])*f).toFixed(1)+')')});

  R('qa',TM.your_pie); R('qb',TM.your_pie+.4); R('pie',TM.your_pie+.8); R('qc',TM.your_pie+4.6); R('qd',TM.your_pie+5);
  const f8=.5+.14*Math.sin(t*.8)*(1-p(u,TM.your_pie+4.6,TM.your_pie+6.5)), A8=f8*2*Math.PI-Math.PI/2;
  $('wd').setAttribute('d','M1300 460V320A140 140 0 '+(f8>.5?1:0)+' 1 '+(1300+140*Math.cos(A8)).toFixed(1)+' '+(460+140*Math.sin(A8)).toFixed(1)+'Z');