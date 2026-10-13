const ph=t*1.6+3*Math.max(0,u-TM.chalk_tally), k0=p(u,TM.pickup_game,TM.pickup_game+.6);
  rise($('t_pl'),k0); $('t_ball').setAttribute('opacity',k0); $('t_ball').setAttribute('cx',(1270+100*Math.sin(ph)).toFixed(1));
  TP.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(-8*Math.abs(Math.sin(ph+i))).toFixed(1)+')'));
  rise($('t_tal'),p(u,TM.chalk_tally,TM.chalk_tally+.5));
  TL.forEach((m,i)=>m.setAttribute('opacity',p(u,TM.chalk_tally+.4+i*.35,TM.chalk_tally+.6+i*.35)));

  rise($('a_au'),p(u,TM.authors,TM.authors+.5));
  $('a_ln').setAttribute('opacity',p(u,TM.quote_card,TM.quote_card+.4)); rise($('a_q'),p(u,TM.quote_card,TM.quote_card+.6));

  GR.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.spreadsheet+i*.12,TM.spreadsheet+i*.12+.3)));
  PL.forEach((g,i)=>rise(g,p(u,TM.charts_pile+i*.5,TM.charts_pile+i*.5+.4)));
  rise($('c_boss'),p(u,TM.charts_pile+6,TM.charts_pile+6.5)); rise($('c_team'),p(u,TM.charts_pile+6.6,TM.charts_pile+7.1));

  rise($('p_sb'),p(u,TM.stadium,TM.stadium+.6)); rise($('p_fan'),p(u,TM.fan,TM.fan+.5));
  $('p_h').textContent=u>=TM.fan+1.5?'3':'2'; rise($('p_wig'),p(u,TM.fan+4.6,TM.fan+5.1));

  rise($('k_cl'),p(u,TM.checklist,TM.checklist+.5)); rise($('k_a'),p(u,TM.single_line,TM.single_line+.5)); rise($('k_b'),p(u,TM.wall_board,TM.wall_board+.5));
  [TM.single_line,TM.wall_board,TM.two_lines,TM.timer].forEach((a,i)=>TK[i].setAttribute('opacity',p(u,a+.3,a+.6)));
  $('k_x').setAttribute('opacity',p(u,TM.wall_board+2.5,TM.wall_board+3));

  rise($('l_ch'),p(u,TM.two_lines,TM.two_lines+.5));
  LB.forEach((b,i)=>{const h=(60+i*25)*p(u,TM.two_lines+i*.25,TM.two_lines+i*.25+.5);b.setAttribute('height',h.toFixed(1));b.setAttribute('y',(620-h).toFixed(1))});
  $('l_lag').setAttribute('points',part(LG,p(u,TM.two_lines+1,TM.two_lines+4)));
  rise($('l_sw'),p(u,TM.timer,TM.timer+.5));
  const sw=p(u,TM.timer+.5,TM.timer+3), dn=sw>=1;
  $('l_hand').setAttribute('transform','rotate('+(sw*300).toFixed(1)+' 1220 430)');
  $('l_face').setAttribute('fill',dn?'var(--gain)':'var(--stage)'); $('l_yes').setAttribute('opacity',dn?1:0);
  rise($('l_rep'),p(u,TM.timer+4.5,TM.timer+5));

  const wk=p(u,TM.team_marker+.3,TM.team_marker+4), wp=$('w_ln').getPointAtLength(WL*wk);
  $('w_ln').style.strokeDasharray=WL; $('w_ln').style.strokeDashoffset=(WL*(1-wk)).toFixed(1);
  $('w_mk').setAttribute('transform','translate('+wp.x.toFixed(1)+' '+wp.y.toFixed(1)+') rotate(25)'); $('w_mk').setAttribute('opacity',p(u,TM.team_marker,TM.team_marker+.3));
  rise($('w_team'),p(u,TM.smiling_team,TM.smiling_team+.6));
  WS.forEach((s,i)=>s.setAttribute('fill',u>=TM.green_tick+i*.5?'var(--gain)':'var(--line)'));
  rise($('w_win'),p(u,TM.green_tick+.4,TM.green_tick+.9));

  rise($('y_dk'),p(u,TM.dark_field,TM.dark_field+.6));
  QM.forEach((q,i)=>q.setAttribute('y',(395+6*Math.sin(t*2+i*1.3)).toFixed(1)));
  rise($('y_rt'),p(u,TM.climbing_line,TM.climbing_line+.5));
  $('y_ln').setAttribute('points',part(YL,p(u,TM.climbing_line+.3,TM.climbing_line+3)));
  rise($('y_pp'),p(u,TM.climbing_line+.5,TM.climbing_line+1));
  const jp=u>=TM.climbing_line+6?1:0; YP.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(-14*jp*Math.abs(Math.sin(t*4+i))).toFixed(1)+')'));
  rise($('y_eng'),p(u,TM.climbing_line+6,TM.climbing_line+6.6));

  rise($('z_t'),p(u,TM.blank_board,TM.blank_board+.5)); rise($('z_b'),p(u,TM.blank_board+.3,TM.blank_board+.8));
  $('z_ln').setAttribute('points',part(ZL,p(u,TM.blank_board+2,TM.blank_board+4)));
  rise($('qa'),p(u,TM.blank_board+7.5,TM.blank_board+8)); rise($('qb'),p(u,TM.blank_board+7.9,TM.blank_board+8.4)); rise($('qc'),p(u,TM.blank_board+8.3,TM.blank_board+8.8));