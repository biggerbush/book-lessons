const fp=p(u,TM.fist_pump,TM.fist_pump+.4),pump=Math.abs(Math.sin(u*4));
  $('t_arm').setAttribute('transform','rotate('+(-22*pump*fp).toFixed(1)+' 1370 420)');
  $('t_rays').setAttribute('opacity',(fp*(.4+.6*pump)).toFixed(2));

  rise($('r_cal'),p(u,TM.calendar,TM.calendar+.5));
  CX.forEach((x,i)=>x.setAttribute('opacity',p(u,TM.calendar+.6+i*.11,TM.calendar+.8+i*.11)));
  rise($('r_tal'),p(u,TM.tally_marks,TM.tally_marks+.4));
  TL.forEach((x,i)=>x.setAttribute('opacity',p(u,TM.tally_marks+.2+i*.07,TM.tally_marks+.35+i*.07)));
  rise($('r_auto'),p(u,TM.tally_marks+3.4,TM.tally_marks+3.9)); rise($('r_not'),p(u,TM.tally_marks+5.4,TM.tally_marks+6));

  rise($('f_brain'),p(u,TM.brain,TM.brain+.5)); rise($('f_quote'),p(u,TM.quote_card,TM.quote_card+.5));
  const lg=p(u,TM.quote_card+4.2,TM.quote_card+4.8);
  $('f_glow').setAttribute('opacity',(lg*(.6+.4*Math.sin(t*4))).toFixed(2)); $('f_bo').setAttribute('stroke',lg>.5?'var(--gain)':'var(--ink)');
  PL.forEach((g,i)=>rise(g,p(u,TM.quote_card+4.2+i*.6,TM.quote_card+4.7+i*.6)));

  rise($('sh_fw'),p(u,TM.glowing_face,TM.glowing_face+.5)); $('sh_rays').setAttribute('transform','rotate('+((t*12)%360).toFixed(1)+' 400 470)');
  rise($('sh_word'),p(u,TM.glowing_face+4.2,TM.glowing_face+4.8));
  rise($('sh_paper'),p(u,TM.exam_paper,TM.exam_paper+.5)); rise($('sh_clap'),p(u,TM.exam_paper+2,TM.exam_paper+2.5));
  CB.forEach((g,i)=>g.setAttribute('opacity',(.5+.5*Math.sin(t*8+i*1.3)).toFixed(2)));
  rise($('sh_cel'),p(u,TM.exam_paper+5.8,TM.exam_paper+6.4));

  rise($('tm_sw'),p(u,TM.stopwatch,TM.stopwatch+.5)); $('tm_hand').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 360 480)');
  rise($('tm_beh'),p(u,TM.stopwatch+.6,TM.stopwatch+1.1)); rise($('tm_cel'),p(u,TM.stopwatch+1.4,TM.stopwatch+1.9));
  $('tm_dot').setAttribute('r',(24+4*Math.sin(t*5)).toFixed(1));
  rise($('tm_chain'),p(u,TM.link_chain,TM.link_chain+.5)); rise($('tm_late'),p(u,TM.link_chain+5.4,TM.link_chain+5.9));

  rise($('tb_panel'),p(u,TM.toothbrush,TM.toothbrush+.5));
  const fl=p(u,TM.toothbrush+2.5,TM.toothbrush+3.1);
  $('tb_brush').setAttribute('transform','translate('+(60*Math.sin(t*5)*(1-fl)).toFixed(1)+' 0)'); $('tb_brush').setAttribute('opacity',(1-fl).toFixed(2));
  $('tb_floss').setAttribute('opacity',fl); TE[2].setAttribute('fill',fl>.5?'var(--gain)':'var(--stage)'); TE[2].setAttribute('stroke',fl>.5?'var(--gain)':'var(--ink)');
  rise($('mr'),p(u,TM.mirror,TM.mirror+.5)); rise($('mr_v'),p(u,TM.mirror+1.2,TM.mirror+1.7)); rise($('mr_s'),p(u,TM.mirror+4.6,TM.mirror+5.1));
  const kp=p(u,TM.mirror+9.2,TM.mirror+9.8); $('mr_rays').setAttribute('opacity',(kp*(.6+.4*Math.sin(t*4))).toFixed(2)); rise($('mr_k'),kp);

  [TM.speech_bubble,TM.gesture_hand,TM.gesture_hand+2.6].forEach((a,i)=>rise($('c6_'+i),p(u,a,a+.5)));
  $('fc_arm').setAttribute('transform','rotate('+(-20*Math.abs(Math.sin(t*4))).toFixed(1)+' 795 470)');
  const ts=TM.gesture_hand+5.8; rise($('c6_t'),p(u,ts,ts+.6));
  [0,1,2].forEach(i=>$('c6r'+i).setAttribute('stroke',u>=ts+.4?'var(--gain)':'var(--line)'));

  rise($('lp'),p(u,TM.rehearse_loop,TM.rehearse_loop+.5)); $('lp_arc').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 400 470)');
  rise($('lp_hd'),p(u,TM.rehearse_loop+5.8,TM.rehearse_loop+6.3));
  FS.forEach((g,i)=>rise(g,p(u,TM.rehearse_loop+6.2+i*.6,TM.rehearse_loop+6.7+i*.6)));
  const sk=p(u,TM.sun,TM.sun+1.2);
  $('su').setAttribute('transform','translate(1140 '+(700-80*sk).toFixed(1)+')'); $('su').setAttribute('opacity',sk);
  $('su_rays').setAttribute('transform','rotate('+((t*15)%360).toFixed(1)+')');
  rise($('su_l'),p(u,TM.sun,TM.sun+.5)); rise($('su_t'),p(u,TM.sun+2,TM.sun+2.6));

  // closing: text on the left, three-step sequence on the right
  const C=TM.checkmark;
  rise($('qa'),p(u,C,C+.5)); rise($('qb'),p(u,C+.6,C+1.1));
  rise($('qc'),p(u,C+5,C+5.5)); rise($('qd'),p(u,C+5.6,C+6.1)); rise($('qe'),p(u,C+6.2,C+6.7));
  rise($('q8_st0'),p(u,C+.2,C+.7));
  $('q8_a1').setAttribute('opacity',p(u,C+.7,C+1.1)); rise($('q8_st1'),p(u,C+.8,C+1.3));
  $('q8_a2').setAttribute('opacity',p(u,C+5.4,C+5.8)); rise($('q8_st2'),p(u,C+5.6,C+6.2));
  const tg=u>=C+5.2; $('q8_tooth').setAttribute('fill',tg?'var(--gain)':'var(--stage)'); $('q8_tooth').setAttribute('stroke',tg?'var(--gain)':'var(--ink)');
  $('q8_arm').setAttribute('transform','rotate('+(-18*Math.abs(Math.sin(t*4))).toFixed(1)+' 1004 504)');
  $('q8_sunr').setAttribute('transform','rotate('+((t*15)%360).toFixed(1)+' 1000 708)');