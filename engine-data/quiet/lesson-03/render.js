const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('tb',TM.title_baby);
  const k0=p(u,TM.title_baby,TM.title_baby+.6);
  TA.forEach((a,i)=>a.setAttribute('opacity',(k0*(.15+.85*Math.max(0,Math.sin(t*2.5-i*.9)))).toFixed(2)));
  R('t4m',TM.title_baby+5);

  R('kg',TM.kagan);
  BB.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.babies+i*.04,TM.babies+i*.04+.3)));
  R('bl',TM.babies+.5); R('ob',TM.observers);
  $('sight').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));

  R('pa',TM.balloon); R('pb',TM.mobile); R('pc',TM.cotton_swab);
  const pop=p(u,TM.balloon+1,TM.balloon+1.3);
  $('bal').setAttribute('r',(80*(1-pop)+.01).toFixed(1)); $('bal').setAttribute('opacity',1-pop);
  $('burst').setAttribute('opacity',(pop*(1-.6*p(u,TM.balloon+1.6,TM.balloon+2.4))).toFixed(2));
  $('voice').setAttribute('opacity',(p(u,TM.balloon+2,TM.balloon+2.5)*(.4+.6*Math.abs(Math.sin(t*3)))).toFixed(2));
  $('mob').setAttribute('transform','rotate('+(6*Math.sin(t*1.6)).toFixed(2)+' 800 300)');
  const sc=(t*.8)%1; $('scent').setAttribute('transform','translate(0 '+(-14*sc).toFixed(1)+')'); $('scent').setAttribute('opacity',(1-sc).toFixed(2));

  R('b3h',TM.crying_baby); R('b3l',TM.calm_baby); R('b3m',TM.middle_baby); R('b3n',TM.crying_baby+6);
  const ph=p(u,TM.crying_baby,TM.crying_baby+1.2), pl=p(u,TM.calm_baby,TM.calm_baby+1.2), pm=p(u,TM.middle_baby,TM.middle_baby+1.2);
  $('n20').textContent=Math.round(20*ph)+'%'; $('n40').textContent=Math.round(40*pl)+'%';
  $('barh').setAttribute('width',(272*ph).toFixed(1)); $('barm').setAttribute('width',(544*pm).toFixed(1));
  $('barl').setAttribute('x',(1480-544*pl).toFixed(1)); $('barl').setAttribute('width',(544*pl).toFixed(1));
  const s3=Math.sin(t*14), c3=Math.cos(t*11);
  LIMB[0].setAttribute('d','M226 420L150 '+(375+28*s3).toFixed(1));
  LIMB[1].setAttribute('d','M286 420L362 '+(375-28*s3).toFixed(1));
  LIMB[2].setAttribute('d','M226 470L200 '+(525+15*c3).toFixed(1));
  LIMB[3].setAttribute('d','M286 470L312 '+(525-15*c3).toFixed(1));
  TEAR.forEach((e,i)=>{const f=(t*1.2+i*.5)%1; e.setAttribute('cx',i?296:216); e.setAttribute('cy',(330+40*f).toFixed(1)); e.setAttribute('opacity',(1-f).toFixed(2))});

  R('p4a',TM.crystal_ball); R('ball',TM.crystal_ball+.3); R('p4k1',TM.crystal_ball+1.5);
  R('p4c',TM.calm_arrow); R('p4k2',TM.calm_arrow+1.3);
  $('p4b1').setAttribute('transform','translate('+(4*Math.sin(t*16)).toFixed(1)+' 0)');
  const a1=p(u,TM.crystal_ball+.6,TM.crystal_ball+1.6), a2=p(u,TM.calm_arrow+.4,TM.calm_arrow+1.4);
  [[a1,'1'],[a2,'2']].forEach(([a,n])=>{$('ar'+n).setAttribute('stroke-dasharray',(820*a).toFixed(1)+' 900'); $('ar'+n).setAttribute('opacity',a>0?1:0); $('ah'+n).setAttribute('opacity',a>.98?1:0)});
  R('bw',TM.calendar-9.2); R('rx',TM.calendar-5);

  R('cal',TM.calendar);
  AG.forEach((g,i)=>R? rise(g,p(u,TM.calendar+.5+i*.6,TM.calendar+.9+i*.6)):0);
  KD[0].forEach((g,i)=>rise(g,p(u,TM.shy_child+i*.4,TM.shy_child+i*.4+.4))); R('d1',TM.shy_child+2);
  KD[1].forEach((g,i)=>rise(g,p(u,TM.bold_child+i*.4,TM.bold_child+i*.4+.4))); R('d2',TM.bold_child+2);

  R('br',TM.brain); $('amy').setAttribute('rx',(30+5*Math.sin(t*4)).toFixed(1));
  R('bell',TM.alarm_bell);
  const lv=p(u,TM.twins-10.8,TM.twins-10), amp=1+.35*lv;
  WV.forEach((w,i)=>{w.setAttribute('d',arc2(1060,410,[120,160,200][i]*amp)); w.setAttribute('opacity',(.2+.8*Math.max(0,Math.sin(t*(5+3*lv)-i))).toFixed(2))});
  R('loud',TM.twins-10.8); R('party',TM.twins-6.3);

  R('tw',TM.twins); R('sd',TM.seedling,.4);
  $('stem').setAttribute('d','M800 640V'+(640-240*p(u,TM.seedling,TM.seedling+1.5)).toFixed(1));
  $('lv').setAttribute('opacity',p(u,TM.seedling+1,TM.seedling+1.6));
  R('paths',TM.checkmark-3); R('ck',TM.checkmark);

  R('mir',TM.mirror); R('ql',TM.mirror+.6); R('qa',TM.mirror+5); R('qb',TM.mirror+5.4); R('qc',TM.mirror+5.8);