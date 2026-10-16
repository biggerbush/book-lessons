const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('hk',TM.hiker,.6); R('cl',TM.hiker+2.5); $('rn').setAttribute('transform','translate(0 '+((t*30)%12).toFixed(1)+')'); R('fc',TM.mirror,.8);

  R('cal',TM.calendar); MK.forEach((m,i)=>m.setAttribute('opacity',p(u,TM.calendar+1+i*.6,TM.calendar+1.3+i*.6)));
  rise(RW[0],p(u,TM.new_job,TM.new_job+.5)); rise(RW[1],p(u,TM.new_partner,TM.new_partner+.5)); R('fam',TM.new_partner+3,.6);

  R('bk',TM.book); R('cs',TM.book+1.5); $('cst').setAttribute('x2',(160+260*p(u,TM.book+3,TM.book+3.6)).toFixed(1));
  R('lpc',TM.pattern_loop); LN.forEach((g,i)=>rise(g,p(u,TM.pattern_loop+1+i*1.2,TM.pattern_loop+1.5+i*1.2)));
  const la=t*1.6; $('ld').setAttribute('cx',(980+170*Math.cos(la)).toFixed(1)); $('ld').setAttribute('cy',(520+170*Math.sin(la)).toFixed(1)); $('ld').setAttribute('opacity',p(u,TM.pattern_loop,TM.pattern_loop+.5));
  R('mt2',TM.pattern_loop+7.7,.8);

  R('tg',TM.two_arrows); const tw=p(u,TM.phone_heart+5.4,TM.phone_heart+6); $('tp').setAttribute('transform','translate('+(tw*30*Math.sin(t*3)).toFixed(1)+' 0)');
  R('ca',TM.savings_jar); JC.forEach((c,i)=>{const k=p(u,TM.savings_jar+1.5+i*.4,TM.savings_jar+2.1+i*.4); c.setAttribute('opacity',(1-k).toFixed(2)); c.setAttribute('transform','translate(0 '+(-160*k).toFixed(1)+')')});
  R('cb',TM.phone_heart); const hs=24*p(u,TM.phone_heart+1.5,TM.phone_heart+2.5); $('hl').setAttribute('transform','translate('+(-hs)+' 0)'); $('hr').setAttribute('transform','translate('+hs+' 0)');
  R('pl',TM.phone_heart+5.4,.6);

  R('fg',TM.fog,.8); FG.forEach((f,i)=>f.setAttribute('transform','translate('+(14*Math.sin(t*.6+i*2)).toFixed(1)+' 0)'));
  BL.forEach((g,i)=>rise(g,p(u,TM.finger_point+i*.8,TM.finger_point+.5+i*.8)));
  const ow=p(u,TM.finger_point+5.4,TM.finger_point+6),wa=t*1.2; $('orb').setAttribute('opacity',ow); $('wk').setAttribute('opacity',ow);
  $('wk').setAttribute('cx',(1180+290*Math.cos(wa)).toFixed(1)); $('wk').setAttribute('cy',(780+40*Math.sin(wa)).toFixed(1)); R('crc',TM.finger_point+5.4,.6);

  R('kw',TM.key); $('ky').setAttribute('transform','translate(320 430) rotate('+(-20+20*p(u,TM.key+2.2,TM.key+3)).toFixed(1)+')'); R('kc',TM.key+2.2,.6);
  R('co',TM.small_step); R('ci',TM.small_step+1.5); $('cir').setAttribute('r',(150+6*Math.sin(t*2)).toFixed(1));

  R('l1',TM.trail); R('l2',TM.backpack); const hp=p(u,TM.trail+.5,TM.summit_flag),hq=at(hp);
  $('hk6').setAttribute('transform','translate('+hq[0].toFixed(1)+' '+hq[1].toFixed(1)+')');
  MKR.forEach(m=>m[0].setAttribute('fill',hp>=m[1]-.001?'var(--gain)':'var(--line)')); $('bp').setAttribute('opacity',u>=TM.backpack?1:0);
  R('fl',TM.summit_flag,.6); R('cmp',TM.summit_flag+1,.6);

  R('n0',TM.notebook); R('hlt',TM.notebook+1.5); R('n1',TM.magnifier);
  $('mg').setAttribute('transform','translate('+(14*Math.sin(t*1.2)).toFixed(1)+' '+(10*Math.cos(t*1.5)).toFixed(1)+')');
  $('qm').style.fill=u>=TM.magnifier+5?'var(--gain)':'var(--loss)'; R('cur',TM.magnifier+5);
  R('n2',TM.footprint); FP.forEach((f,i)=>f.setAttribute('opacity',p(u,TM.footprint+.6+i*.4,TM.footprint+.9+i*.4)));

  R('qa',TM.question_mark); R('qb',TM.question_mark+.4); R('qc',TM.question_mark+.8); R('qg',TM.question_mark+1.2,.6);
  $('qn').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')'); R('qt',TM.question_mark+3.8,.6);