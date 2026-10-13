const a0=p(u,TM.title_card+.4,TM.title_card+1.4);
  $('arw').setAttribute('transform',`translate(${(-90*(1-a0)).toFixed(1)} ${(-90*(1-a0)).toFixed(1)})`); $('arw').setAttribute('opacity',a0);
  NZ.forEach((g,i)=>{const a=TM.title_card+3.4+i*.15; rise(g,p(u,a,a+.4))});

  L1.forEach((g,i)=>{const a=TM.four_links+i*.5; rise(g,p(u,a,a+.5))});
  rise($('menu'),p(u,TM.menu_card,TM.menu_card+.5)); $('menuX').setAttribute('opacity',p(u,TM.menu_card+.9,TM.menu_card+1.3));
  A1.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.menu_card+3.8+i*.4,TM.menu_card+4.3+i*.4)));
  rise($('build'),p(u,TM.menu_card+3.8,TM.menu_card+4.4));

  rise($('ctrl'),p(u,TM.controller,TM.controller+.5)); rise($('radar'),p(u,TM.controller+.6,TM.controller+1.2));
  $('sweep').setAttribute('transform',`rotate(${(t*90%360).toFixed(1)} 480 520)`);
  const dim=p(u,TM.one_plane,TM.one_plane+.8);
  PL.forEach((q,i)=>{const a=TM.radar_screen+i*.15; rise(q[0],p(u,a,a+.4)); q[1].setAttribute('opacity',(1-.7*dim).toFixed(2))});
  const lp=p(u,TM.one_plane+.4,TM.one_plane+3.5);
  rise($('lead'),p(u,TM.one_plane,TM.one_plane+.5)); rise($('land'),p(u,TM.one_plane,TM.one_plane+.5));
  $('leadp').setAttribute('transform',`translate(${(680-170*lp).toFixed(1)} ${(380+130*lp).toFixed(1)}) rotate(-127)`);
  rise($('wig'),p(u,TM.one_plane+5.3,TM.one_plane+5.9));

  rise($('lev'),p(u,TM.lever,TM.lever+.5)); rise($('rock'),p(u,TM.result_flag,TM.result_flag+.5)); rise($('lagt'),p(u,TM.result_flag+.6,TM.result_flag+1.1));
  const ang=6*p(u,TM.result_flag+.3,TM.result_flag+1.1)-12*p(u,TM.daily_action+6.2,TM.daily_action+7.4);
  $('beam').setAttribute('transform',`rotate(${ang.toFixed(2)} 1000 640)`);
  rise($('leadt'),p(u,TM.daily_action,TM.daily_action+.5));
  BK.forEach((b,i)=>{const a=TM.daily_action+.8+i*.4; rise(b,p(u,a,a+.4))});
  rise($('follow'),p(u,TM.daily_action+6.2,TM.daily_action+6.8));

  rise($('board'),p(u,TM.scoreboard,TM.scoreboard+.5));
  $('act').setAttribute('stroke-dashoffset',(AL*(1-p(u,TM.scoreboard+.6,TM.scoreboard+2.4))).toFixed(1));
  rise($('win'),p(u,TM.team_faces+1.5,TM.team_faces+2));
  const pw=p(u,TM.team_faces+5.4,TM.team_faces+6);
  TF.forEach((q,i)=>{const a=TM.team_faces+i*.15; rise(q[0],p(u,a,a+.4)); q[1].setAttribute('fill',pw>0?'var(--gain)':'var(--ink)'); q[1].setAttribute('transform',`translate(0 ${(-10*pw*Math.abs(Math.sin(t*5+i))).toFixed(1)})`)});
  rise($('playt'),pw);

  rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  DT.forEach((d,i)=>{const a=TM.calendar+.8+i*.4; rise(d,p(u,a,a+.4))});
  rise($('meet'),p(u,TM.short_meeting,TM.short_meeting+.5));
  BB.forEach((q,i)=>{const a=TM.promise_card+i*.3, s=p(u,TM.promise_card+2.6+i*.2,TM.promise_card+3.1+i*.2); rise(q[0],p(u,a,a+.4)); q[1].setAttribute('opacity',1-s); q[2].setAttribute('opacity',s)});
  rise($('prom'),p(u,TM.promise_card+.6,TM.promise_card+1.2));

  const bk=p(u,TM.broken_link+.3,TM.broken_link+1);
  L6.forEach((q,i)=>{q[0].setAttribute('opacity',p(u,TM.broken_link-.8,TM.broken_link-.3)); q[0].setAttribute('transform',`translate(${((i<2?-50:50)*bk).toFixed(1)} 0)`); q[1].setAttribute('stroke',(i===1||i===2)&&bk>0?'var(--loss)':'var(--ink)')});
  [TM.broken_link+3,TM.foggy_goal,TM.foggy_goal+5.8,TM.empty_chair].forEach((a,i)=>rise(PG[i],p(u,a,a+.5)));
  FOG.setAttribute('transform',`translate(${(15*Math.sin(t*1.2)).toFixed(1)} 0)`); TG.setAttribute('opacity',(.35+.2*Math.sin(t*1.5)).toFixed(2));
  WH.setAttribute('transform',`rotate(${(t*120%360).toFixed(1)} 1400 590)`);
  FC.forEach((f,i)=>{const c=((t*.45+i/4)%1+1)%1, r=82*(1-c), th=Math.PI+c*5, x=1400+r*Math.cos(th), y=590+r*Math.sin(th);
    f.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(c*300).toFixed(0)}) scale(${(1-.7*c).toFixed(2)})`); f.setAttribute('opacity',(1-c).toFixed(2))});

  rise($('paper'),p(u,TM.paper_plan,TM.paper_plan+.5));
  CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.paper_plan+.8+i*.4,TM.paper_plan+1.1+i*.4)));
  rise($('worker'),p(u,TM.hard_hat,TM.hard_hat+.5));
  UG.forEach((q,i)=>{const a=TM.hard_hat+.8+i*.4; rise(q[0],p(u,a,a+.4)); q[1].setAttribute('transform',`translate(${(6*Math.sin(t*6+i*2)).toFixed(1)} 0)`)});
  rise($('clk'),p(u,TM.clock_slice,TM.clock_slice+.5)); $('hand').setAttribute('transform',`rotate(${(t*60%360).toFixed(1)} 1320 390)`);
  WK.forEach((w,i)=>w.setAttribute('fill',u>=TM.clock_slice+.4+i*.25?'var(--gain)':'var(--line)'));
  $('warr').setAttribute('opacity',p(u,TM.clock_slice+3.4,TM.clock_slice+3.9)); rise($('prog'),p(u,TM.clock_slice+1,TM.clock_slice+1.6));

  const s8=SC[8][0]/K;
  rise($('qlab'),p(u,s8+.3,s8+.8)); rise($('qa'),p(u,s8+2.9,s8+3.4)); rise($('qb'),p(u,s8+3.3,s8+3.8));
  rise($('qchain'),p(u,s8+4,s8+4.5)); rise($('qm'),p(u,s8+5,s8+5.5));
  $('miss').setAttribute('stroke-dashoffset',(-t*30%280).toFixed(1));