const D=p(u,TM.two_people,TM.two_people+3), s0b=TM.two_people+6.6;
  $('pB').setAttribute('transform','translate('+(100*D).toFixed(1)+' 0)');
  $('tie').setAttribute('x2',(1250+100*D).toFixed(1)); $('tie').setAttribute('opacity',(1-.75*D).toFixed(2));
  rise($('bA'),p(u,s0b,s0b+.5)); rise($('bB'),p(u,s0b+.3,s0b+.8)); rise($('neq'),p(u,s0b+1,s0b+1.5));

  rise($('fb'),p(u,TM.friend_sofa,TM.friend_sofa+.5));
  rise($('clip'),p(u,TM.advice_list,TM.advice_list+.5));
  TP.forEach((g,i)=>{const a=TM.advice_list+.5+i*.5;rise(g,p(u,a,a+.4))});
  const ca=u>=TM.crossed_arms, hd=p(u,TM.crossed_arms,TM.crossed_arms+.6);
  FR.forEach(e=>e.setAttribute('fill',ca?'var(--loss)':'var(--ink)'));
  FR[0].setAttribute('cy',(400+14*hd).toFixed(1)); FR[0].setAttribute('cx',(330-8*hd).toFixed(1));
  rise($('quiet'),p(u,TM.crossed_arms+.3,TM.crossed_arms+.8));
  rise($('want'),p(u,TM.crossed_arms+.6,TM.crossed_arms+1.1)); rise($('kinds'),p(u,TM.crossed_arms+4.6,TM.crossed_arms+5.2));

  const bs=p(u,TM.brain_scan,TM.brain_scan+.6); rise($('brains'),bs);
  RG.forEach((r,i)=>r.setAttribute('opacity',(bs*(.25+.25*Math.sin(t*3+i))).toFixed(2)));
  const sy=p(u,TM.sync_waves,TM.sync_waves+3), wo=p(u,TM.brain_scan+1.5,TM.brain_scan+2.2);
  wave($('w1'),380,1220,350,50,40,t*2); wave($('w2'),380,1220,350,50,40,t*2+2.6*(1-sy));
  $('w1').setAttribute('opacity',wo); $('w2').setAttribute('opacity',wo); $('w2').setAttribute('stroke',sy>=1?'var(--gain)':'var(--loss)');
  rise($('ent'),p(u,TM.sync_waves+6.1,TM.sync_waves+6.6));
  wave($('w3'),520,1480,680,36,40,t*2); wave($('w4'),520,1480,680,36,22,-t*3);
  rise($('brk'),p(u,TM.broken_wave,TM.broken_wave+.6));

  rise($('badge'),p(u,TM.cia_badge,TM.cia_badge+.5)); rise($('lock'),p(u,TM.cia_badge+5.7,TM.cia_badge+6.2));
  rise($('pitch'),p(u,TM.pitch_paper,TM.pitch_paper+.5)); rise($('nox'),p(u,TM.pitch_paper+1.6,TM.pitch_paper+2));
  rise($('table'),p(u,TM.shared_table,TM.shared_table+.5)); rise($('meet'),p(u,TM.shared_table+2.5,TM.shared_table+3));

  rise($('ear'),p(u,TM.ear_icon,TM.ear_icon+.5)); $('snd').setAttribute('opacity',(p(u,TM.ear_icon+.5,TM.ear_icon+1)*(.6+.4*Math.sin(t*4))).toFixed(2));
  rise($('bub'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
  CP.forEach((g,i)=>{const a=TM.speech_bubble+.8+i*1.6;rise(g,p(u,a,a+.4))});
  rise($('clues'),p(u,TM.clue_glass,TM.clue_glass+.5));
  const mx=910+340*Math.sin(t*.7); $('mag').setAttribute('transform','translate('+mx.toFixed(1)+' 788)');
  TG.forEach((r,i)=>r.setAttribute('stroke',Math.abs(mx-(570+i*340))<90?'var(--gain)':'var(--ink)'));

  [TM.hand_shoulder,TM.toolbox,TM.group_circle].forEach((a,i)=>rise(CD[i],p(u,a,a+.5)));
  rise($('agree'),p(u,TM.group_circle+4.9,TM.group_circle+5.4)); rise($('steer'),p(u,TM.group_circle+7.1,TM.group_circle+7.6));

  rise($('qg'),p(u,TM.question_mark,TM.question_mark+.5));
  $('qm').setAttribute('transform','translate('+(5*Math.sin(t*7)).toFixed(1)+' '+(3*Math.cos(t*5)).toFixed(1)+')'); $('qm').setAttribute('opacity',(.6+.4*Math.sin(t*3)).toFixed(2));
  rise($('ask'),p(u,TM.question_mark+2.1,TM.question_mark+2.6));
  rise($('o0'),p(u,TM.two_options,TM.two_options+.5)); rise($('o1'),p(u,TM.two_options+2,TM.two_options+2.5));
  const ap=p(u,TM.question_mark,TM.two_options), cm=p(u,TM.two_options+6.2,TM.two_options+7.5), lx=640-300*ap+420*cm, rx=960+300*ap-420*cm;
  rise($('dots'),p(u,TM.question_mark,TM.question_mark+.5));
  $('dl').setAttribute('cx',lx.toFixed(1)); $('dr').setAttribute('cx',rx.toFixed(1));
  $('lnk').setAttribute('x1',(lx+26).toFixed(1)); $('lnk').setAttribute('x2',(rx-26).toFixed(1)); $('lnk').setAttribute('opacity',cm);
  rise($('stay'),p(u,TM.two_options+6.2,TM.two_options+6.8));

  const a7=SC[7][0]/K;
  rise($('qa'),p(u,a7+.3,a7+.8)); rise($('qb'),p(u,a7+.7,a7+1.2)); rise($('qc'),p(u,a7+1.1,a7+1.6));
  rise($('cb'),p(u,a7+.5,a7+1)); rise($('lab7'),p(u,a7+6.6,a7+7.1));
  $('cbB').setAttribute('transform','translate('+(-80*p(u,a7+6.6,a7+7.6)).toFixed(1)+' 0)');