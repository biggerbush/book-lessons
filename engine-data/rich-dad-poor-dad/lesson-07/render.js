TB.forEach((b,i)=>rise(b,p(u,TM.title_wall+.4+i*.12,TM.title_wall+.7+i*.12)));

  const a1=TM.smart_person;
  rise($('smart'),p(u,a1,a1+.5)); rise($('goal'),p(u,a1+.8,a1+1.3)); $('ar1').setAttribute('opacity',p(u,a1+1,a1+1.6));
  BR.forEach((b,i)=>{const a=TM.four_bricks+1.5+i*1.1; rise(b[0],p(u,a,a+.4)); rise(b[1],p(u,TM.robert_dad+i*.3,TM.robert_dad+.3+i*.3))});
  rise($('wlab'),p(u,TM.four_bricks,TM.four_bricks+.5)); rise($('fix'),p(u,TM.robert_dad,TM.robert_dad+.6));
  $('ar2').setAttribute('opacity',p(u,TM.robert_dad+1.2,TM.robert_dad+1.8));

  $('hen').setAttribute('transform','translate('+(320+6*Math.sin(t*3)).toFixed(1)+' '+(560-10*Math.abs(Math.sin(t*6))).toFixed(1)+')');
  rise($('henW'),p(u,TM.chicken_little,TM.chicken_little+.5)); rise($('sky'),p(u,TM.chicken_little+.8,TM.chicken_little+1.3));
  rise($('cl0'),p(u,TM.doubt_clouds,TM.doubt_clouds+.5)); rise($('cl1'),p(u,TM.doubt_clouds+2.5,TM.doubt_clouds+3));
  const cd=TM.closed_door; rise($('door'),p(u,cd,cd+.5)); rise($('cap2'),p(u,cd+.5,cd+1.1));
  const wk=p(u,cd+.6,cd+3.6);
  $('walker').setAttribute('transform','translate('+(1280+110*wk).toFixed(1)+' '+(wk>0&&wk<1?-5*Math.abs(Math.sin(t*7)):0).toFixed(1)+')');
  $('walker').setAttribute('opacity',p(u,cd+.6,cd+.9).toFixed(2));
  $('walkArr').setAttribute('opacity',p(u,cd+1,cd+1.6).toFixed(2));

  const dp=TM.deal_paper, sk=p(u,dp+.5,dp+5), f3=p(u,dp+7,dp+7.6);
  rise($('deal'),p(u,TM.magnifier,TM.magnifier+.5)); rise($('anl'),p(u,TM.magnifier+1,TM.magnifier+1.5));
  $('mag').setAttribute('opacity',p(u,TM.magnifier+.4,TM.magnifier+.9));
  $('mag').setAttribute('transform','translate('+(940+6*Math.sin(t*2)*(1-f3)).toFixed(1)+' '+((330+280*sk)*(1-f3)+470*f3).toFixed(1)+')');
  RW.forEach((c,i)=>c.setAttribute('fill',u>=dp+.5+i*1.1?'var(--gain)':'var(--line)'));
  rise($('crit'),p(u,dp,dp+.5)); rise($('cap3'),p(u,dp+1,dp+1.6)); rise($('opp'),f3); rise($('fin'),p(u,dp+7.3,dp+7.9));

  rise($('busy'),p(u,TM.busy_man,TM.busy_man+.5)); $('busyP').setAttribute('transform','translate('+(3*Math.sin(t*14)).toFixed(1)+' 0)');
  rise($('calW'),p(u,TM.busy_man+1,TM.busy_man+1.5));
  CAL.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.full_calendar+i*.12,TM.full_calendar+i*.12+.2)));
  rise($('avoid'),p(u,TM.full_calendar+3,TM.full_calendar+3.5));
  const gr=u>=TM.greed_spark; ['bx0','bx1'].forEach(k=>{$(k).setAttribute('stroke',gr?'var(--gain)':'var(--muted)');$(k).setAttribute('stroke-dasharray',gr?'none':'10 8')});
  rise($('sparkW'),p(u,TM.greed_spark,TM.greed_spark+.5)); $('spark').setAttribute('transform','rotate('+(t*40%360).toFixed(1)+' 260 300)');
  rise($('cap4'),p(u,TM.greed_spark+.6,TM.greed_spark+1.2));

  const sm=TM.shut_mouth, tb=TM.thinking_brain;
  rise($('pl'),p(u,sm,sm+.5)); $('strk').setAttribute('opacity',u>=sm+.8?1:0); $('strk').setAttribute('x2',(210+460*p(u,sm+.8,sm+1.4)).toFixed(1));
  rise($('pr'),p(u,tb,tb+.5)); $('gear').setAttribute('transform','translate(1160 470) rotate('+(u>=tb?(t*60%360):0).toFixed(1)+')');
  rise($('offL'),p(u,tb+3.4,tb+3.9)); rise($('onL'),p(u,tb+6.3,tb+6.8));
  $('rays').setAttribute('opacity',p(u,tb+6.3,tb+6.9)); RY.forEach(r=>r.setAttribute('stroke-dashoffset',(-t*30%16).toFixed(1)));

  rise($('r1'),p(u,TM.pay_slip,TM.pay_slip+.5)); rise($('r1n'),p(u,TM.pay_slip+3,TM.pay_slip+3.5));
  rise($('r2'),p(u,TM.piggy_bank,TM.piggy_bank+.6));
  SH.forEach((s,i)=>rise(s,p(u,TM.bill_pile+i*.25,TM.bill_pile+i*.25+.3))); rise($('plab'),p(u,TM.bill_pile,TM.bill_pile+.5));
  $('push').setAttribute('opacity',p(u,TM.bill_pile+2,TM.bill_pile+2.5)); $('push').setAttribute('transform','translate(0 '+(-8*Math.abs(Math.sin(t*2.5))).toFixed(1)+')');
  rise($('caut'),p(u,TM.bill_pile+5.8,TM.bill_pile+6.4));

  const be=TM.big_ego; rise($('egoW'),p(u,be,be+.4));
  $('ego').setAttribute('transform','translate(300 360) scale('+(.6+.4*p(u,be,be+1.2)+.03*Math.sin(t*3)).toFixed(3)+')');
  rise($('ign'),p(u,be+1,be+1.5)); rise($('eqr'),p(u,be+1.8,be+2.3));
  rise($('k0'),p(u,TM.two_coins,TM.two_coins+.5)); rise($('k1'),p(u,TM.two_coins+2.5,TM.two_coins+3)); rise($('cb'),p(u,TM.class_book,TM.class_book+.6));

  // closing: the "can't" bubble is struck out and becomes a "how" bubble; the brain switches on
  const s8=SC[8][0]/K, sw=p(u,s8+3,s8+3.6);
  rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+.8,s8+1.3)); rise($('qc'),p(u,s8+2.8,s8+3.3)); rise($('q8l'),p(u,s8+3.8,s8+4.3));
  rise($('head8'),p(u,s8+.5,s8+1)); rise($('sw8'),p(u,s8+.7,s8+1.2)*(1-sw));
  rise($('ob8'),p(u,s8+1,s8+1.5)*(1-sw));
  $('st8').setAttribute('x2',(990+380*p(u,s8+2,s8+2.6)).toFixed(1)); $('st8').setAttribute('opacity',u>=s8+2?1:0);
  rise($('nb8'),sw);
  $('gear2').setAttribute('opacity',sw.toFixed(2)); $('gear2').setAttribute('transform','translate(1180 520) rotate('+(u>=s8+3?(t*50%360):0).toFixed(1)+') scale('+(.4+.6*sw).toFixed(3)+')');
  $('ry8').setAttribute('opacity',p(u,s8+3.6,s8+4.2)); RY8.forEach(r=>r.setAttribute('stroke-dashoffset',(-t*30%16).toFixed(1)));