const R=(id,a,d)=>rise($(id),p(u,a,a+(d||.5)));
  R('doors',TM.two_doors);R('pA',TM.two_doors+.6);R('pB',TM.two_doors+.9);
  const rx=p(u,TM.two_doors+3.4,TM.two_doors+4.2);
  gA.setAttribute('transform','translate(0 '+(6*rx).toFixed(1)+')');
  gB.setAttribute('transform','translate(0 '+(-10*rx*Math.abs(Math.sin(t*3))).toFixed(1)+')');
  R('tags',TM.two_doors+3.4);

  PZ.forEach((g,i)=>{const a=TM.puzzle_table+.4+i*.6;rise(g,p(u,a,a+.4))});
  R('exp',TM.smiling_boy-3.4);
  R('boy',TM.smiling_boy);$('hands').setAttribute('transform','translate('+(6*Math.sin(t*9)).toFixed(1)+' 0)');
  R('bub',TM.smiling_boy+.6);R('bulb',TM.lightbulb);
  const lit=p(u,TM.lightbulb+.4,TM.lightbulb+.8);
  $('bulbG').style.fill=lit>0?'var(--gain)':'var(--stage)';$('rays').setAttribute('opacity',(lit*(.7+.3*Math.sin(t*5))).toFixed(2));
  R('learn',TM.lightbulb+.8);

  R('stone',TM.stone_block);R('setamt',TM.stone_block+3);R('scale',TM.test_scale);
  $('beam').setAttribute('transform','rotate('+(7*Math.sin(t*1.7)*p(u,TM.test_scale+.4,TM.test_scale+1)).toFixed(2)+' 840 320)');
  R('spot',TM.spotlight);$('cone').setAttribute('fill-opacity',(.18+.1*Math.sin(t*4)).toFixed(2));

  R('seed',TM.seedling);
  const gr=p(u,TM.seedling+.8,TM.helping_hands+5);
  $('stem').setAttribute('stroke-dashoffset',(300*(1-gr)).toFixed(1));
  [.3,.55,.8].forEach((a,i)=>$('lf'+i).setAttribute('opacity',cl((gr-a)*6).toFixed(2)));
  CP.forEach((c,i)=>{const a=TM.helping_hands+.8+i*1.4;rise(c,p(u,a,a+.5))});
  R('road',TM.open_path);
  const pt=RP.getPointAtLength(RL*p(u,TM.open_path+.6,TM.open_path+5));
  wk.setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+')');
  $('walk').setAttribute('opacity',p(u,TM.open_path+.3,TM.open_path+.7));
  R('pathcap',TM.open_path+1);

  R('glasses',TM.two_glasses);R('views',TM.street_scene);
  $('tint0').setAttribute('opacity',p(u,TM.street_scene+1.4,TM.street_scene+2));
  $('tint1').setAttribute('opacity',p(u,TM.street_scene+2,TM.street_scene+2.6));
  R('ov0',TM.street_scene+2);R('ov1',TM.street_scene+2.6);
  R('back',TM.crossroads);R('fwd',TM.crossroads+.6);R('cap4',TM.crossroads+1.4);

  R('cal',TM.calendar_day);
  RN.forEach((r,i)=>r.setAttribute('transform','translate(0 '+(500+((t*60+i*13)%60)).toFixed(1)+')'));
  R('paper',TM.grade_paper);R('tk',TM.parking_ticket);R('fb',TM.parking_ticket+2.6);
  $('fr5').setAttribute('transform','translate('+(20*p(u,TM.parking_ticket+3.2,TM.parking_ticket+4.2)).toFixed(1)+' 0)');
  R('hd5',TM.parking_ticket+3.4);R('nn5',TM.parking_ticket+3.8);
  R('blows',TM.calendar_day);
  [TM.calendar_day,TM.grade_paper,TM.parking_ticket,TM.parking_ticket+2.6].forEach((a,i)=>$('bl'+i).setAttribute('opacity',p(u,a+.3,a+.7).toFixed(2)));

  R('slump',TM.slumped_person);
  $('slH').setAttribute('transform','translate(0 '+(14*p(u,TM.slumped_person+.6,TM.slumped_person+1.6)).toFixed(1)+')');
  R('card',TM.slumped_person+2);
  const sk=p(u,TM.reject_stamp,TM.reject_stamp+.35);
  $('stamp').setAttribute('opacity',sk);$('stamp').setAttribute('transform','translate(1080 450) rotate(-8) scale('+(2-sk).toFixed(3)+')');
  R('q1',TM.reject_stamp+.6);R('q2',TM.reject_stamp+2.2);

  R('pn0',TM.study_desk);
  CK.forEach((c,i)=>{const a=TM.study_desk+4.2+i*.5;c.setAttribute('opacity',p(u,a,a+.3))});
  R('pn1',TM.ticket_paid);R('paid',TM.ticket_paid+.6,.3);
  $('car').setAttribute('transform','translate(0 '+(-60*(1-p(u,TM.ticket_paid+1.2,TM.ticket_paid+2.4))).toFixed(1)+')');
  R('pn2',TM.phone_friend);R('bb',TM.phone_friend+.8);R('same',TM.phone_friend+4.5);

  R('mir',TM.mirror);R('lead',TM.mirror+.3);
  $('refl').setAttribute('transform','translate('+(4*Math.sin(t*1.5)).toFixed(1)+' 0)');
  R('qa',TM.mirror+4.6);R('qb',TM.mirror+5.1);R('ctag',TM.mirror+5.8);