rise($('coat0'),p(u,TM.white_coat,TM.white_coat+.6));
  rise($('str0'),p(u,TM.white_coat+1,TM.white_coat+1.6));
  rise($('nev'),p(u,TM.white_coat+6.2,TM.white_coat+6.7));

  rise($('pnl'),p(u,TM.shock_panel,TM.shock_panel+.5));
  rise($('lab1'),p(u,TM.shock_panel+1,TM.shock_panel+1.5));
  const n=10*p(u,TM.teacher+1.5,TM.two_thirds+.8);
  SW.forEach((s,i)=>s.setAttribute('fill',i<n?'var(--loss)':'var(--stage)'));
  rise($('tch'),p(u,TM.teacher,TM.teacher+.5)); rise($('lrn'),p(u,TM.teacher+.4,TM.teacher+.9));
  $('scr').setAttribute('opacity',u>=TM.teacher+5.4?(.5+.5*Math.abs(Math.sin(t*6))).toFixed(2):0);
  rise($('crowd1'),p(u,TM.two_thirds,TM.two_thirds+.5));
  CR.forEach((g,i)=>g.setAttribute('class',i<8&&u>=TM.two_thirds+.6+i*.15?'loss':'ink'));
  rise($('tt'),p(u,TM.two_thirds+.5,TM.two_thirds+1.1));
  rise($('cont'),p(u,TM.two_thirds+5,TM.two_thirds+5.5));

  AD.forEach((g,i)=>rise(g,p(u,TM.family_tree+i*.6,TM.family_tree+i*.6+.5)));
  rise($('kid'),p(u,TM.family_tree+1.8,TM.family_tree+2.3));
  rise($('wind'),p(u,TM.shortcut,TM.shortcut+.5)); rise($('sc'),p(u,TM.shortcut+.6,TM.shortcut+1.1));
  rise($('sym'),p(u,TM.shortcut+4.2,TM.shortcut+4.8));

  rise($('callr'),p(u,TM.telephone,TM.telephone+.5));
  $('rings').setAttribute('opacity',u>=TM.telephone?(Math.sin(t*8)>0?1:.3):0);
  rise($('say3'),p(u,TM.telephone+1.2,TM.telephone+1.7));
  rise($('btl'),p(u,TM.pill_bottle,TM.pill_bottle+.5)); rise($('bars'),p(u,TM.pill_bottle+.6,TM.pill_bottle+1.1));
  $('ordb').setAttribute('width',(320*p(u,TM.pill_bottle+1,TM.pill_bottle+2.2)).toFixed(1));
  rise($('x2'),p(u,TM.pill_bottle+2.2,TM.pill_bottle+2.7));
  rise($('bed'),p(u,TM.nurse,TM.nurse+.5)); rise($('nurse'),p(u,TM.nurse,TM.nurse+.5));
  $('nwalk').setAttribute('transform','translate('+(80*p(u,TM.nurse+.6,TM.nurse+2.2)).toFixed(1)+' 0)');
  rise($('stp'),p(u,TM.nurse+2.4,TM.nurse+2.9)); rise($('nev3'),p(u,TM.nurse+.8,TM.nurse+1.4));

  rise($('rul'),p(u,TM.name_tag,TM.name_tag+.5)); rise($('man0'),p(u,TM.name_tag,TM.name_tag+.5));
  $('ht0').setAttribute('opacity',p(u,TM.name_tag+.5,TM.name_tag+1)); rise($('l40'),p(u,TM.name_tag+.5,TM.name_tag+1));
  rise($('man1'),p(u,TM.professor,TM.professor+.5));
  const k=1+.25*p(u,TM.professor+3.5,TM.professor+5);
  $('m1s').setAttribute('transform','translate(1100 700) scale('+k.toFixed(3)+') translate(-1100 -700)');
  $('ht1').setAttribute('d','M802 '+(700-260*k).toFixed(1)+'H1030'); $('ht1').setAttribute('opacity',p(u,TM.professor+.5,TM.professor+1));
  rise($('l41'),p(u,TM.professor+5,TM.professor+5.5));

  rise($('gp'),p(u,TM.guard,TM.guard+.5));
  FL.forEach((g,i)=>rise(g,p(u,TM.guard+1.2+i*.5,TM.guard+1.7+i*.5)));
  rise($('l50'),p(u,TM.guard+2.5,TM.guard+3));
  rise($('rp'),p(u,TM.suit,TM.suit+.5)); rise($('walk5'),p(u,TM.suit,TM.suit+.5));
  WF.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.suit+1+i*.4,TM.suit+1.4+i*.4)));
  $('walk').setAttribute('transform','translate('+(280*p(u,TM.suit+1.5,TM.suit+5.5)).toFixed(1)+' '+(u>TM.suit+1.5&&u<TM.suit+5.5?-3*Math.abs(Math.sin(t*12)):0).toFixed(1)+')');
  rise($('l51'),p(u,TM.suit+3,TM.suit+3.5)); rise($('clo'),p(u,TM.suit+6.2,TM.suit+6.8));

  rise($('q1'),p(u,TM.question_one,TM.question_one+.5));
  rise($('tv'),p(u,TM.tv_doctor,TM.tv_doctor+.5)); rise($('mug'),p(u,TM.tv_doctor+3,TM.tv_doctor+3.5));
  [0,1,2].forEach(i=>{const a=TM.tv_doctor+.6+i*1.4;rise($('r6'+i),p(u,a,a+.5))});
  rise($('stmp'),p(u,TM.tv_doctor+6.6,TM.tv_doctor+7)); rise($('earn'),p(u,TM.tv_doctor+7,TM.tv_doctor+7.6));

  rise($('wt'),p(u,TM.question_two+.6,TM.question_two+1.1)); rise($('menu'),p(u,TM.question_two+1,TM.question_two+1.5));
  rise($('b7'),p(u,TM.waiter,TM.waiter+.5));
  $('hl').setAttribute('opacity',p(u,TM.waiter+.5,TM.waiter+1)); $('sk7').setAttribute('opacity',p(u,TM.waiter+.8,TM.waiter+1.3));
  rise($('mtr'),p(u,TM.waiter+.6,TM.waiter+1.1));
  const mh=300*p(u,TM.waiter+1.2,TM.waiter+5); $('mf').setAttribute('height',mh.toFixed(1)); $('mf').setAttribute('y',(634-mh).toFixed(1));
  rise($('big'),p(u,TM.waiter+6.2,TM.waiter+6.7)); rise($('tac'),p(u,TM.waiter+6.8,TM.waiter+7.4));

  rise($('mt'),p(u,TM.mirror,TM.mirror+.5));
  $('pz').setAttribute('r',(56+(u>=TM.mirror?4*Math.sin(t*3):0)).toFixed(1));
  rise($('cd1'),p(u,TM.mirror+1.2,TM.mirror+1.7)); rise($('cd2'),p(u,TM.mirror+2.2,TM.mirror+2.7));
  rise($('qa'),p(u,TM.mirror+4.6,TM.mirror+5.1)); rise($('qb'),p(u,TM.mirror+5,TM.mirror+5.5)); rise($('qc'),p(u,TM.mirror+5.4,TM.mirror+5.9));