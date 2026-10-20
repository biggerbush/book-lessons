rise($('tw'),p(u,TM.young_worker,TM.young_worker+.6));
  PT.forEach((e,i)=>DR(e,p(u,TM.young_worker+.8+i*.6,TM.young_worker+1.6+i*.6)));

  rise($('street'),p(u,TM.roman_street,TM.roman_street+.6)); rise($('antw'),p(u,TM.anteambulo,TM.anteambulo+.6));
  const op=p(u,TM.open_path,TM.open_path+1.2);
  CR.forEach(c=>{if(c[2]===1)c[0].setAttribute('transform','translate('+(-52*op).toFixed(1)+' '+((c[1]%2?110:-110)*op).toFixed(1)+')')});
  const wk=700*p(u,TM.open_path+.8,TM.open_path+4.5);
  ['pat','ant'].forEach(k=>$(k).setAttribute('transform','translate('+wk.toFixed(1)+' 0)'));
  rise($('ret'),p(u,TM.open_path+4,TM.open_path+4.6));

  rise($('cyou'),p(u,S0(2)+.5,S0(2)+1.1)); rise($('cv'),p(u,TM.canvas,TM.canvas+.6)); rise($('cpt'),p(u,TM.paintbrush,TM.paintbrush+.6));
  STK.forEach((e,i)=>DR(e,p(u,TM.paintbrush+.6+i*.7,TM.paintbrush+1.3+i*.7)));
  rise($('sig'),p(u,TM.paintbrush+2.8,TM.paintbrush+3.3)); rise($('cred'),p(u,TM.paintbrush+4.6,TM.paintbrush+5.2));

  rise($('newb'),p(u,TM.proud_newbie,TM.proud_newbie+.6));
  CP.forEach((g,i)=>rise(g,p(u,TM.proud_newbie+.8+i*.6,TM.proud_newbie+1.3+i*.6)));
  rise($('dw'),p(u,TM.proud_newbie+2.6,TM.proud_newbie+3.2));
  const dwd=40+200*p(u,TM.closed_door+.3,TM.closed_door+.9); $('door').setAttribute('width',dwd.toFixed(1)); $('knob').setAttribute('cx',(900+dwd-22).toFixed(1));
  rise($('steps'),p(u,TM.closed_door+4.4,TM.closed_door+5)); rise($('hum'),p(u,TM.closed_door+4.6,TM.closed_door+5.2)); rise($('skip'),p(u,TM.closed_door+5.2,TM.closed_door+5.7));
  const sk=u>=TM.closed_door+5.2;
  ST.forEach((s,i)=>{const d=sk&&i<2; s.setAttribute('fill',d?'none':'var(--ink)'); s.setAttribute('stroke',d?'var(--loss)':'var(--ink)'); s.setAttribute('stroke-dasharray',d?'10 8':'none')});

  rise($('field'),p(u,TM.football,TM.football+.6)); rise($('reelg'),p(u,TM.film_reel,TM.film_reel+.6));
  $('reel').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 640 380)'); $('strip').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));
  rise($('bel'),p(u,TM.film_reel+.6,TM.film_reel+1.2));
  const cw=p(u,TM.film_reel+5.4,TM.film_reel+6); $('coaches').setAttribute('opacity',(cw*(u>=TM.coach_desk?1:.45)).toFixed(2));
  rise($('nowant'),cw); $('relied').setAttribute('opacity',p(u,TM.coach_desk,TM.coach_desk+.8).toFixed(2)); rise($('learn'),p(u,TM.coach_desk+.6,TM.coach_desk+1.2));

  rise($('pa'),p(u,TM.skill_meter,TM.skill_meter+.6));
  const mh=340*p(u,TM.skill_meter+.4,TM.skill_meter+5); $('mfill').setAttribute('y',(686-mh).toFixed(1)); $('mfill').setAttribute('height',mh.toFixed(1));
  rise($('pb'),p(u,TM.network,TM.network+.6));
  NL.forEach((l,i)=>{const k=p(u,TM.network+.6+i*.4,TM.network+.9+i*.4); l.setAttribute('opacity',k.toFixed(2)); NN[i].setAttribute('fill',k>.5?'var(--gain)':'var(--ink)')});
  rise($('pc'),p(u,TM.network+5,TM.network+5.6)); DR($('ccred'),p(u,TM.network+5.4,TM.network+6.6)); DR($('cskill'),p(u,TM.network+5.8,TM.network+7.4));

  rise($('figs'),p(u,TM.two_figures,TM.two_figures+.6)); rise($('mat'),p(u,TM.two_figures+.6,TM.two_figures+1.2)); rise($('strat'),p(u,TM.two_figures+3,TM.two_figures+3.6));
  rise($('roadw'),p(u,TM.long_road,TM.long_road+.6));
  const w=p(u,TM.long_road+.4,TM.long_road+7), q=RD.getPointAtLength(w*RL); let n=0;
  FV.forEach(f=>{const on=w>=f[0]; if(on)n++; f[1].setAttribute('fill',on?'var(--gain)':'var(--muted)')});
  $('walker').setAttribute('cx',q.x.toFixed(1)); $('walker').setAttribute('cy',q.y.toFixed(1)); $('walker').setAttribute('r',14+n*3);
  $('rec').setAttribute('opacity',(1-.75*w).toFixed(2));
  rise($('favl'),p(u,TM.long_road+3.3,TM.long_road+3.9)); rise($('grow'),p(u,TM.long_road+5,TM.long_road+5.6));

  rise($('k0'),p(u,TM.notebook,TM.notebook+.6)); rise($('k1'),p(u,TM.task_list,TM.task_list+.6)); rise($('k2'),p(u,TM.light_bulb,TM.light_bulb+.6));
  DR($('chk'),p(u,TM.task_list+.8,TM.task_list+1.4));
  $('rays').setAttribute('opacity',(p(u,TM.light_bulb+.6,TM.light_bulb+1)*(.6+.4*Math.sin(t*4))).toFixed(2));

  const q8=S0(8);
  rise($('qa'),p(u,q8+.3,q8+.8)); rise($('qb'),p(u,q8+.7,q8+1.2)); rise($('qg'),p(u,q8+1,q8+1.6)); rise($('qm'),p(u,q8+2.9,q8+3.5));
  $('qp').setAttribute('transform','translate('+(12*Math.sin(t*1.5)).toFixed(1)+' 0)');