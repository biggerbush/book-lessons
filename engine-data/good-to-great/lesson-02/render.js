const dc=p(u,TM.quiet_ceo+3,TM.quiet_ceo+3.8);
  rise($('cover'),p(u,TM.quiet_ceo,TM.quiet_ceo+.5)); $('coverIn').setAttribute('opacity',(1-.6*dc).toFixed(2)); dr($('xout'),dc);
  rise($('quiet'),p(u,TM.quiet_ceo+3.5,TM.quiet_ceo+4.1));

  rise($('rails'),p(u,TM.ladder,TM.ladder+.5));
  RG.forEach((g,i)=>rise(g,p(u,TM.ladder+.4+i*.35,TM.ladder+.8+i*.35)));
  const a4=p(u,TM.level_four,TM.level_four+1.4),a5=p(u,TM.level_five,TM.level_five+1.4);
  rise($('climbW'),p(u,TM.ladder+2,TM.ladder+2.5)); $('climb').setAttribute('transform','translate(470 '+(740-330*a4-110*a5).toFixed(1)+')');
  rise($('lv4'),p(u,TM.level_four,TM.level_four+.5)); rise($('lv5'),p(u,TM.level_five,TM.level_five+.5));
  RP[4].setAttribute('class',u>=TM.level_five+1?'s-gain':'s-ink');

  rise($('ds'),p(u,TM.darwin_smith,TM.darwin_smith+.5)); rise($('lb'),p(u,TM.law_book,TM.law_book+.5));
  dr($('noStar'),p(u,TM.law_book+1,TM.law_book+1.6));
  rise($('mill'),p(u,TM.old_mill,TM.old_mill+.5)); rise($('chart'),p(u,TM.old_mill+.8,TM.old_mill+1.3));
  dr($('mk1'),p(u,TM.old_mill+1,TM.old_mill+3)); dr($('kc1'),p(u,TM.old_mill+1,TM.old_mill+3));
  SMK.forEach((c,i)=>{const k=(t*.5+i/3)%1; c.setAttribute('cy',(280-60*k).toFixed(1)); c.setAttribute('r',(12+12*k).toFixed(1)); c.setAttribute('opacity',(1-k).toFixed(2))});

  rise($('doc'),p(u,TM.doctor_chart,TM.doctor_chart+.5)); rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.calendar+.5+i*.2,TM.calendar+.7+i*.2)));
  const y0=TM.calendar+4.9; rise($('yrs'),p(u,y0,y0+.5)); rise($('tlw'),p(u,y0,y0+.5));
  $('yrN').textContent=Math.round(25*p(u,y0+.2,y0+2.2))+' years';
  TL.forEach((r,i)=>r.setAttribute('fill',u>=y0+.2+i*.08?'var(--gain)':'var(--stage)'));

  rise($('millsW'),p(u,TM.paper_mills,TM.paper_mills+.4));
  ML.forEach((m,i)=>{const k=p(u,TM.paper_mills+.6+i*.4,TM.paper_mills+1+i*.4); m[0].setAttribute('opacity',(1-.6*k).toFixed(2)); m[1].setAttribute('opacity',k)});
  rise($('sign'),p(u,TM.kimberly_sign,TM.kimberly_sign+.5)); $('signTag').setAttribute('opacity',p(u,TM.kimberly_sign+1.5,TM.kimberly_sign+1.9));
  rise($('flow'),p(u,TM.diaper_box,TM.diaper_box+.4));
  CO.forEach((c,i)=>{const k=(t*.6+i/4)%1; c.setAttribute('cx',(650+190*k).toFixed(1)); c.setAttribute('opacity',Math.sin(k*Math.PI).toFixed(2))});
  rise($('br'),p(u,TM.diaper_box+.4,TM.diaper_box+.9)); rise($('riv'),p(u,TM.rival_giant,TM.rival_giant+.5));

  const g1=p(u,TM.stock_chart,TM.stock_chart+.8),g2=p(u,TM.stock_chart+.6,TM.stock_chart+2.6),hM=120*g1,hK=Math.max(120*g1,492*g2);
  $('barM').setAttribute('y',780-hM); $('barM').setAttribute('height',hM); $('barK').setAttribute('y',780-hK); $('barK').setAttribute('height',hK);
  $('ref').setAttribute('opacity',g1); $('vM').setAttribute('opacity',g1); $('vK').setAttribute('opacity',g1);
  $('vK').setAttribute('y',(760-hK).toFixed(1)); $('vK').textContent=(1+3.1*g2).toFixed(1)+'×';
  rise($('bl'),p(u,TM.stock_chart,TM.stock_chart+.5)); rise($('tro'),p(u,TM.trophy,TM.trophy+.5));

  rise($('spt'),p(u,TM.spotlight,TM.spotlight+.5));
  $('smith').setAttribute('transform','translate('+(420+220*p(u,TM.spotlight+.4,TM.spotlight+1.8)).toFixed(1)+' 0)');
  rise($('qt'),p(u,TM.spotlight+2.5,TM.spotlight+3.1));
  rise($('win'),p(u,TM.window_mirror,TM.window_mirror+.5)); rise($('mir'),p(u,TM.window_mirror+.4,TM.window_mirror+.9));
  rise($('we'),p(u,TM.window_mirror+3.8,TM.window_mirror+4.3)); rise($('mw'),p(u,TM.window_mirror+5.5,TM.window_mirror+6));

  rise($('pL'),p(u,TM.successor,TM.successor+.5)); dr($('c1a'),p(u,TM.successor+.4,TM.successor+1.4));
  const hb=p(u,TM.successor+1.6,TM.successor+2.8); $('baton').setAttribute('x',(372+104*hb).toFixed(1)); $('ldr').setAttribute('opacity',(1-.6*hb).toFixed(2));
  dr($('c1b'),p(u,TM.successor+3,TM.successor+4.2)); rise($('cap1'),p(u,TM.successor+4,TM.successor+4.5));
  rise($('pR'),p(u,TM.ego_boss,TM.ego_boss+.5)); dr($('c2a'),p(u,TM.ego_boss+.3,TM.ego_boss+1.2));
  const lv=p(u,TM.ego_boss+1.4,TM.ego_boss+2.6); $('ego').setAttribute('transform','translate('+(1050+330*lv).toFixed(1)+' 0)'); $('ego').setAttribute('opacity',(1-lv).toFixed(2));
  dr($('c2b'),p(u,TM.ego_boss+2.4,TM.ego_boss+3.4)); rise($('cap2'),p(u,TM.ego_boss+3,TM.ego_boss+3.5));

  const s8=SC[8][0]/K;
  rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+.8,s8+1.3)); rise($('wi'),p(u,s8+1,s8+1.5));
  rise($('qc'),p(u,s8+5.4,s8+5.9)); rise($('qd'),p(u,s8+5.9,s8+6.4)); rise($('mi'),p(u,s8+6.1,s8+6.6)); rise($('foot'),p(u,s8+7,s8+7.5));