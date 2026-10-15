// title: two brothers argue, a plane takes off
  rise($('bros'),p(u,TM.two_brothers,TM.two_brothers+.5));
  [0,1].forEach(i=>rise($('bub'+i),p(u,TM.two_brothers+.6+i*.5,TM.two_brothers+1+i*.5)));
  const pl=p(u,TM.two_brothers+3.6,TM.two_brothers+5.4);tf($('plane'),1260,470-250*pl+4*Math.sin(t*2));$('plane').setAttribute('opacity',cl(pl*4).toFixed(2));

  // two kinds of conflict
  rise($('tbl'),p(u,TM.team_table,TM.team_table+.5));$('zz').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*4))).toFixed(2));
  rise($('kt'),p(u,TM.label_task,TM.label_task+.5));
  rise($('kp'),p(u,TM.label_person,TM.label_person+.5));rise($('atk'),p(u,TM.label_person+4.9,TM.label_person+5.4));

  // sinks vs sparks
  rise($('lp'),p(u,TM.sad_team,TM.sad_team+.5));rise($('shd'),p(u,TM.sad_team+3,TM.sad_team+3.5));rise($('lpm'),p(u,TM.sad_team+3,TM.sad_team+3.5));
  rise($('rp'),p(u,TM.bright_bulb,TM.bright_bulb+.5));$('bulb').setAttribute('fill',u>=TM.bright_bulb+.4?'var(--gain)':'var(--stage)');
  $('rays').setAttribute('opacity',(p(u,TM.bright_bulb+.4,TM.bright_bulb+.9)*(.6+.4*Math.sin(t*4))).toFixed(2));
  rise($('rpm'),p(u,TM.bright_bulb+3.4,TM.bright_bulb+3.9));

  // Wright brothers
  rise($('shop'),p(u,TM.wright_shop,TM.wright_shop+.5));
  rise($('dad'),p(u,TM.dad_books,TM.dad_books+.5));
  rise($('prp'),p(u,TM.propeller,TM.propeller+.5));
  tf(P3,1270,440,t*40);$('zz3').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*5))).toFixed(2));

  // swap sides
  const s4=SC[4][0]/K;
  rise($('ppl4'),p(u,s4+.3,s4+.8));[$('cA'),$('cB')].forEach(c=>c.setAttribute('opacity',p(u,s4+.6,s4+1.1)));
  rise($('arr4'),p(u,TM.swap_arrows,TM.swap_arrows+.5));
  const k=p(u,TM.swap_arrows+.6,TM.swap_arrows+2)-p(u,TM.swap_arrows+4.4,TM.swap_arrows+5.8),h=120*Math.sin(Math.PI*k);
  tf($('cA'),500+600*k,425-h);tf($('cB'),1100-600*k,425+h);
  ['xA','xB'].forEach(i=>$(i).setAttribute('opacity',p(u,TM.blueprint,TM.blueprint+.4)));rise($('bw'),p(u,TM.blueprint,TM.blueprint+.5));
  rise($('nw'),p(u,TM.blueprint-5.6,TM.blueprint-5.1));rise($('gr'),p(u,TM.blueprint-3,TM.blueprint-2.5));
  $('nwS').setAttribute('opacity',p(u,TM.blueprint-3,TM.blueprint-2.6));

  // twin propellers
  rise($('pr5'),p(u,TM.twin_props,TM.twin_props+.5));tf(P5[0],560,420,t*220);tf(P5[1],1040,420,-t*220);
  rise($('arc5'),p(u,TM.twin_props+.6,TM.twin_props+1.1));rise($('alone'),p(u,TM.twin_props+3.8,TM.twin_props+4.3));
  rise($('hl'),p(u,TM.heart_link,TM.heart_link+.5));
  $('hrt').setAttribute('transform','translate(320 700) scale('+(.28*(1+.08*Math.pow(Math.abs(Math.sin(t*3.5)),6))).toFixed(3)+')');
  rise($('nv'),p(u,TM.heart_link+3.7,TM.heart_link+4.2));

  // heat on the idea
  rise($('th'),p(u,TM.thermometer,TM.thermometer+.5));
  const hm=40+230*p(u,TM.thermometer+.3,TM.thermometer+1.8);$('merc').setAttribute('y',(525-hm).toFixed(1));$('merc').setAttribute('height',hm.toFixed(1));
  rise($('dc6'),p(u,TM.thermometer+1.5,TM.thermometer+2));
  rise($('b1'),p(u,TM.speech_bubble,TM.speech_bubble+.5));rise($('b2'),p(u,TM.speech_bubble+2.5,TM.speech_bubble+3));
  $('st6').setAttribute('x2',(552+W6*p(u,TM.speech_bubble+3.2,TM.speech_bubble+3.8)).toFixed(1));
  rise($('crit'),p(u,TM.speech_bubble+5.4,TM.speech_bubble+5.9));
  rise($('pz'),p(u,TM.puzzle_piece,TM.puzzle_piece+.5));
  const pz=p(u,TM.puzzle_piece+.4,TM.puzzle_piece+1.4);tf($('pzA'),250+70*pz,650);tf($('pzB'),460-80*pz,650);

  // fake harmony
  rise($('mk7'),p(u,TM.smile_mask,TM.smile_mask+.5));
  rise($('sil'),p(u,TM.smile_mask+4.2,TM.smile_mask+4.7));rise($('grt'),p(u,TM.smile_mask+7.2,TM.smile_mask+7.7));
  rise($('dr'),p(u,TM.open_door,TM.open_door+.5));
  const o=p(u,TM.open_door+.4,TM.open_door+1.4),w=200-140*o;
  $('leaf').setAttribute('points','1060,260 '+(1060+w).toFixed(1)+','+(260+30*o).toFixed(1)+' '+(1060+w).toFixed(1)+','+(660-30*o).toFixed(1)+' 1060,660');
  $('knob').setAttribute('cx',(1060+w-24*(1-o*.5)).toFixed(1));rise($('dw'),p(u,TM.open_door+.8,TM.open_door+1.3));
  // dissent: a speech badge emerges from the open doorway
  const bo=p(u,TM.open_door+1.2,TM.open_door+2.2);
  $('bad').setAttribute('transform','translate('+(1190+160*bo).toFixed(1)+' '+(460-130*bo+(bo>=1?4*Math.sin(t*3):0)).toFixed(1)+') scale('+(.3+.7*bo).toFixed(3)+')');
  $('bad').setAttribute('opacity',cl(bo*3).toFixed(2));

  // close
  const s8=SC[8][0]/K;
  rise($('qa'),p(u,s8+.4,s8+.9));rise($('qb'),p(u,s8+.8,s8+1.3));rise($('q8g'),p(u,s8+1.2,s8+1.7));rise($('qc'),p(u,s8+6,s8+6.6));
  $('q8b').setAttribute('r',(50+4*Math.sin(t*3)).toFixed(1));