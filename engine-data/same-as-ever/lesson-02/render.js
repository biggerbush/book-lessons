$('cone').setAttribute('opacity',p(u,TM.title_card,TM.title_card+.8));
  rise($('unseen'),p(u,TM.title_card+2.5,TM.title_card+3.2));
  $('ud').setAttribute('cx',(1060+40*Math.sin(t*1.6)).toFixed(1));

  rise($('hou'),p(u,TM.houdini,TM.houdini+.5));
  const sp=p(u,TM.stage_punch,TM.stage_punch+.5); men.forEach(g=>rise(g,sp)); rise($('arms'),sp);
  const ph=(t*1.1)%1, hit=ph<.25?ease(ph/.25):1-ease((ph-.25)/.75);
  const fx0=660+42*hit, fx1=940-42*hit;
  $('f0').setAttribute('cx',fx0.toFixed(1)); $('f1').setAttribute('cx',fx1.toFixed(1));
  $('a0').setAttribute('d','M625 622L'+fx0.toFixed(1)+' 640'); $('a1').setAttribute('d','M975 622L'+fx1.toFixed(1)+' 640');
  $('imp').setAttribute('opacity',(sp*(hit>.85?1:0)).toFixed(2));
  rise($('brace'),p(u,TM.stage_punch+6.2,TM.stage_punch+6.8));

  rise($('stu'),p(u,TM.student,TM.student+.5));
  rise($('cch'),p(u,TM.couch,TM.couch+.5));
  rise($('bq'),p(u,TM.couch+2,TM.couch+2.5));
  rise($('ba'),p(u,TM.fist,TM.fist+.4));
  const fk=p(u,TM.fist+1.2,TM.fist+1.7);
  $('fst').setAttribute('cx',(1130-370*fk).toFixed(1)); $('fst').setAttribute('cy',(640-60*fk).toFixed(1)); $('fst').setAttribute('opacity',u>=TM.fist+1?1:0);
  $('bst').setAttribute('opacity',fk>=1?1:0);
  rise($('nb'),p(u,TM.fist+1.8,TM.fist+2.3));

  rise($('bed'),p(u,TM.hospital_bed,TM.hospital_bed+.5));
  $('spot').setAttribute('r',(12+4*Math.abs(Math.sin(t*2.5))).toFixed(1));
  rise($('rl'),p(u,TM.shield-3.8,TM.shield-3.3));
  rise($('shd'),p(u,TM.shield,TM.shield+.5)); rise($('k1'),p(u,TM.shield+.6,TM.shield+1.1));
  const ua=p(u,TM.shield+2,TM.shield+2.8); drw($('ua'),ua); $('ua').setAttribute('opacity',ua>0?1:0);
  rise($('ul'),p(u,TM.shield+2,TM.shield+2.5)); rise($('k2'),p(u,TM.shield+2.8,TM.shield+3.3));

  PAP.forEach((g,i)=>rise(g,p(u,TM.newspapers+i*.4,TM.newspapers+i*.4+.5)));
  HL.forEach((h,i)=>{const a=TM.calendar+i*.9; rise(h,p(u,a,a+.4)); rise(CAL[i],p(u,a+.3,a+.7))});
  rise($('rs'),p(u,TM.calendar+4.9,TM.calendar+5.5));

  rise($('ball'),p(u,TM.crystal_ball,TM.crystal_ball+.5));
  rise($('mapf'),p(u,TM.crystal_ball+1,TM.crystal_ball+1.6));
  rise($('bl'),p(u,TM.blank_map,TM.blank_map+.5));
  QM.forEach((q,i)=>q.setAttribute('opacity',(p(u,TM.blank_map+.6+i*.3,TM.blank_map+1+i*.3)*(.6+.4*Math.sin(t*2+i))).toFixed(2)));
  rise($('easy'),p(u,TM.blank_map+5,TM.blank_map+5.6));

  rise($('lq'),p(u,TM.question_mark,TM.question_mark+.5));
  const c1=p(u,TM.question_mark+1.5,TM.question_mark+2), c2=p(u,TM.question_mark+1.8,TM.question_mark+2.3);
  drw($('x1'),c1); drw($('x2'),c2); $('x1').setAttribute('opacity',c1>0?1:0); $('x2').setAttribute('opacity',c2>0?1:0);
  rise($('rt'),p(u,TM.toolbox,TM.toolbox+.5));
  $('tb').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*2))).toFixed(1)+')');
  rise($('rdy'),p(u,TM.toolbox+6.2,TM.toolbox+6.8));

  rise($('jar'),p(u,TM.savings_jar,TM.savings_jar+.5));
  const fh=300*p(u,TM.savings_jar+.6,TM.savings_jar+3.5); $('cf').setAttribute('y',(636-fh).toFixed(1)); $('cf').setAttribute('height',fh.toFixed(1));
  CHP.forEach((c,i)=>rise(c,p(u,TM.umbrella+i*.8,TM.umbrella+i*.8+.4)));
  rise($('um'),p(u,TM.umbrella+.4,TM.umbrella+.9));
  $('rain').setAttribute('opacity',p(u,TM.umbrella+1,TM.umbrella+1.6));
  RN.forEach(r=>{const ct=440-Math.sqrt(40000-(r[1]-1200)**2), y=230+(ct-254)*((t*1.4+r[2])%1); r[0].setAttribute('d','M'+r[1]+' '+y.toFixed(1)+'v24')});
  $('sm').setAttribute('opacity',p(u,TM.calm_face,TM.calm_face+.5));
  rise($('st'),p(u,TM.calm_face,TM.calm_face+.6));

  rise($('mr'),p(u,TM.mirror,TM.mirror+.5));
  PL.forEach((g,i)=>rise(g,p(u,TM.mirror+.6+i*.5,TM.mirror+1+i*.5)));
  ['qa','qb','qc'].forEach((id,i)=>rise($(id),p(u,TM.mirror+4.6+i*.4,TM.mirror+5.1+i*.4)));