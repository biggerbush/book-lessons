const R=(id,a)=>rise(G(id),p(u,a,a+.5));
  G('w_tgl').setAttribute('opacity',(.3+.5*Math.abs(Math.sin(t*2))).toFixed(2));
  R('w_win',TM.teen_window); R('w_fall',TM.teen_window+5); dr(G('w_fallp'),p(u,TM.teen_window+5.2,TM.teen_window+6.6));

  R('w_chart',TM.line_chart); dr(G('w_hs0'),p(u,TM.line_chart+.3,TM.line_chart+3)); dr(G('w_hs1'),p(u,TM.sharp_bend,TM.sharp_bend+1.6));
  R('w_bendlbl',TM.sharp_bend+.8); R('w_dbl',TM.sharp_bend+5.8);
  const db=p(u,TM.sharp_bend+6,TM.sharp_bend+7.4); G('w_dblv').textContent=db<1?(1+db).toFixed(1)+'×':'2×';
  R('w_er',TM.er_door);

  R('w_globe',TM.world_map); G('w_mer').setAttribute('rx',(170*Math.abs(Math.cos(t*.7))).toFixed(1));
  cards.forEach((g,i)=>{const a=i?TM.flag_pins+(i-1)*.9:TM.world_map+.6; rise(g,p(u,a,a+.5)); pins[i].setAttribute('opacity',p(u,a,a+.3)); marks[i].setAttribute('opacity',p(u,TM.flag_pins+5.3,TM.flag_pins+5.9))});
  R('w_apart',TM.flag_pins+5.3); R('w_shared',TM.flag_pins+10.7);

  R('w_qm',TM.question_mark);
  ph3.forEach((q,i)=>{rise(q[0],p(u,TM.calendar+i*.3,TM.calendar+i*.3+.4)); q[1].setAttribute('fill',u>=TM.calendar+4.2+i*.4?'var(--gain)':'var(--stage)')});
  R('w_brk',TM.calendar+4.2); R('w_moved',TM.calendar+4.8);

  R('w_flip',TM.flip_phone); R('w_calls',TM.flip_phone+4.2);
  const aw=p(u,TM.flip_phone+6,TM.flip_phone+7); G('w_flipin').setAttribute('transform','translate(0 '+(40*aw).toFixed(1)+')'); G('w_flipin').setAttribute('opacity',(1-.6*aw).toFixed(2));
  R('w_away',TM.flip_phone+6); R('w_arr',TM.smartphone-.3); R('w_smart',TM.smartphone);
  apps.forEach((a,i)=>a.setAttribute('opacity',p(u,TM.smartphone+1.8+i*.15,TM.smartphone+2.1+i*.15)));
  feats.forEach((g,i)=>rise(g,p(u,TM.smartphone+1.8+i*.9,TM.smartphone+2.3+i*.9)));

  const fc=TM.front_camera; R('w_cam',fc); G('w_flash').setAttribute('opacity',(p(u,fc+.6,fc+.8)*(1-p(u,fc+.8,fc+1.4))).toFixed(2)); R('w_selfie',fc+.8);
  FT.forEach((g,i)=>rise(g,p(u,TM.photo_feed+i*.3,TM.photo_feed+i*.3+.4)));
  FB.forEach((b,i)=>b.setAttribute('width',(LW[i]*p(u,TM.photo_feed+2.5+i*.1,TM.photo_feed+4)).toFixed(1)));
  R('w_cmp',TM.photo_feed+3.5);

  const mc=TM.money_chart; R('w_money',mc); dr(G('w_econ'),p(u,mc+.3,mc+1.8)); R('w_mh',mc+3.4); dr(G('w_mhp'),p(u,mc+3.6,mc+5));
  R('w_glb',TM.globe_spin); G('w_mer2').setAttribute('rx',(170*Math.abs(Math.cos(t))).toFixed(1));
  GP.forEach((c,i)=>c.setAttribute('r',(10+5*Math.abs(Math.sin(t*3+i))).toFixed(1))); R('w_nosingle',TM.globe_spin+1.5);

  const kc=TM.kids_on_couch; R('w_play',TM.playground);
  SW.forEach((g,i)=>g.setAttribute('transform','rotate('+(14*Math.sin(t*2+i*1.5)).toFixed(1)+' '+[300,400][i]+' 330)'));
  const sp=p(u,kc+5,kc+6.8); G('w_playin').setAttribute('opacity',(1-.65*sp).toFixed(2));
  R('w_couch',kc); KD[0].setAttribute('transform','translate('+(-30*sp).toFixed(1)+' 0)'); KD[2].setAttribute('transform','translate('+(30*sp).toFixed(1)+' 0)');
  R('w_bars',kc+5); G('w_bar0').setAttribute('width',(600-400*sp).toFixed(1)); G('w_bar1').setAttribute('width',(150+550*sp).toFixed(1));
  R('w_tube',TM.test_tube); BB.forEach((b,i)=>b.setAttribute('cy',(575-((t*40+i*37)%140)).toFixed(1))); R('w_exp',TM.test_tube+.6);

  const tp=TM.two_photos; R('w_qa',tp); R('w_qb',tp+.4); R('w_ph0',tp+.9); R('w_ph1',tp+1.5); R('w_qc',tp+5.4); R('w_qd',tp+5.8);