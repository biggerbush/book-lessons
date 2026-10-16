const ck=p(u,TM.clock_spin,TM.clock_spin+4);
  $('mh').setAttribute('transform',`rotate(${(1080*ck).toFixed(1)} 1300 420)`); $('hh').setAttribute('transform',`rotate(${(90*ck).toFixed(1)} 1300 420)`);
  rise($('gone'),p(u,TM.clock_spin+3.5,TM.clock_spin+4)); rise($('ring'),p(u,TM.clock_spin+5.4,TM.clock_spin+6)); rise($('clue'),p(u,TM.clock_spin+5.6,TM.clock_spin+6.2));

  // painter at the easel
  rise($('easel'),p(u,TM.painter,TM.painter+.5)); rise($('pntr'),p(u,TM.painter+.3,TM.painter+.8));
  $('brush').setAttribute('transform',`rotate(${(2.5*Math.sin(t*4)).toFixed(2)} 590 478)`);
  PB.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.painter+.6+i*.5,TM.painter+1.1+i*.5).toFixed(3)));
  rise($('plate1'),p(u,TM.painter+2,TM.painter+2.5));
  rise($('cloud'),p(u,TM.thought_cloud,TM.thought_cloud+.5)); $('worries').setAttribute('opacity',(1-.85*p(u,TM.thought_cloud+1.2,TM.thought_cloud+3.2)).toFixed(2));
  rise($('flowT'),p(u,TM.thought_cloud+4.6,TM.thought_cloud+5.2));

  rise($('psy'),p(u,TM.psychologist,TM.psychologist+.5)); rise($('chart'),p(u,TM.psychologist+1,TM.psychologist+1.5));
  $('curve').setAttribute('stroke-dashoffset',(1-p(u,TM.happy_face,TM.happy_face+2)).toFixed(3));
  rise($('hface'),p(u,TM.happy_face+1.6,TM.happy_face+2.1)); rise($('most'),p(u,TM.happy_face+2,TM.happy_face+2.6));

  // seesaw: tips to boredom, then anxiety, then settles level for flow
  rise($('sees'),p(u,TM.seesaw,TM.seesaw+.5));
  const fl=p(u,TM.sweat_face+1.6,TM.sweat_face+2.8), ang=10*p(u,TM.yawn_face,TM.yawn_face+1)-20*p(u,TM.sweat_face,TM.sweat_face+1)+10*fl+.6*fl*Math.sin(t*1.5);
  $('beam').setAttribute('transform',`rotate(${ang.toFixed(2)} 800 590)`);
  rise($('bore'),p(u,TM.yawn_face,TM.yawn_face+.5)); rise($('anx'),p(u,TM.sweat_face,TM.sweat_face+.5));
  rise($('pill'),p(u,TM.sweat_face+2.8,TM.sweat_face+3.4)); rise($('aim'),p(u,TM.sweat_face+3.8,TM.sweat_face+4.4));

  // target: wandering path fizzles out, straight line hits
  rise($('youdot'),p(u,TM.target,TM.target+.5)); rise($('tgt'),p(u,TM.target+.3,TM.target+.8));
  $('wander').setAttribute('stroke-dashoffset',(1-p(u,TM.map_route,TM.map_route+2.2)).toFixed(3));
  rise($('qm'),p(u,TM.map_route+2,TM.map_route+2.4));
  $('wandG').setAttribute('opacity',(1-.75*p(u,TM.map_route+2.8,TM.map_route+3.8)).toFixed(2));
  $('straight').setAttribute('stroke-dashoffset',(1-p(u,TM.map_route+2.8,TM.map_route+4)).toFixed(3));
  rise($('arrowhd'),p(u,TM.map_route+3.8,TM.map_route+4.2));
  rise($('lbl1'),p(u,TM.map_route+6.9,TM.map_route+7.4)); rise($('lbl2'),p(u,TM.map_route+7.6,TM.map_route+8.1));

  // focus panels
  rise($('pa'),p(u,TM.juggler,TM.juggler+.5)); rise($('pb'),p(u,TM.phone_drawer,TM.phone_drawer+.5)); rise($('pc'),p(u,TM.single_candle,TM.single_candle+.5));
  BL.forEach((b,i)=>{const a=t*2.4+i*Math.PI/2; b.setAttribute('cx',(330+120*Math.cos(a)).toFixed(1)); b.setAttribute('cy',(330+60*Math.sin(a)).toFixed(1))});
  const pd=p(u,TM.phone_drawer+.8,TM.phone_drawer+2);
  $('phoneG').setAttribute('transform',`translate(0 ${(198*pd).toFixed(1)})`);
  $('parr').setAttribute('opacity',p(u,TM.phone_drawer+.4,TM.phone_drawer+.8).toFixed(2));
  $('plab').setAttribute('opacity',(1-pd).toFixed(2));
  $('flame').setAttribute('transform',`translate(1270 435) scale(1 ${(1+.07*Math.sin(t*9)).toFixed(3)}) translate(-1270 -435)`);
  $('glow').setAttribute('fill-opacity',(.15+.05*Math.sin(t*3)).toFixed(3));

  rise($('chef'),p(u,TM.sushi_chef,TM.sushi_chef+.5)); rise($('plate'),p(u,TM.sushi_plate,TM.sushi_plate+.5)); rise($('shop'),p(u,TM.workshop,TM.workshop+.5));
  const dn=Math.floor(t*4)%14; DT.forEach((c,i)=>c.setAttribute('fill',u>=TM.sushi_plate&&i<dn?'var(--gain)':'var(--line)'));

  rise($('comp'),p(u,TM.compass,TM.compass+.5));
  $('needle').setAttribute('transform',`rotate(${(-30+120*p(u,TM.compass+.6,TM.compass+2)+5*Math.sin(t*2.5)).toFixed(1)} 330 470)`);
  rise($('hint'),p(u,TM.compass+1.8,TM.compass+2.4));
  CD.forEach((c,i)=>rise(c,p(u,TM.hobby_board+i*.7,TM.hobby_board+i*.7+.5)));
  WK.forEach((r,i)=>r.setAttribute('fill',u>=TM.hobby_board+6.2+i*.3?'var(--gain)':'var(--line)'));
  rise($('wk'),p(u,TM.hobby_board+5.8,TM.hobby_board+6.2)); rise($('mean'),p(u,TM.hobby_board+6.4,TM.hobby_board+7));

  rise($('qa'),p(u,TM.notebook,TM.notebook+.5)); rise($('qb'),p(u,TM.notebook+.4,TM.notebook+.9)); rise($('qc'),p(u,TM.notebook+.8,TM.notebook+1.3));
  rise($('notes'),p(u,TM.notebook+.6,TM.notebook+1.1)); CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.notebook+1.4+i*.6,TM.notebook+1.7+i*.6)));
  rise($('hour'),p(u,TM.notebook+4.2,TM.notebook+4.7));
  const hk=p(u,TM.notebook+4.6,TM.notebook+6.6);
  $('pie').setAttribute('d',pie(hk)); $('thand').setAttribute('transform',`rotate(${(360*hk).toFixed(1)} 1310 690)`);