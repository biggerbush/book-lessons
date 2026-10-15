const off=700*p(t,0,5);
  FD.forEach((c,i)=>{const y=250+(((i*140-off)%420)+420)%420;c[0].setAttribute('transform','translate(0 '+y.toFixed(1)+')');c[0].setAttribute('opacity',(cl(lin(y,250,290))*cl(1-lin(y,500,540))).toFixed(2))});
  const hl=u>=TM.stranger+4.4; FD[0][1].setAttribute('stroke',hl?'var(--gain)':'var(--ink)'); FD[0][2].setAttribute('fill',hl?'var(--gain)':'var(--line)');
  rise($('stranger'),p(u,TM.stranger,TM.stranger+.5)); rise($('qm'),p(u,TM.stranger+4,TM.stranger+4.5));

  rise($('ph1'),p(u,TM.phone,TM.phone+.5));
  AU.forEach((g,i)=>rise(g,p(u,TM.audience+i*.12,TM.audience+i*.12+.4)));
  $('rays').setAttribute('opacity',p(u,TM.audience,TM.audience+1).toFixed(2)); $('rays').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
  rise($('audl'),p(u,TM.audience+1,TM.audience+1.5)); rise($('meter'),p(u,TM.trust_meter,TM.trust_meter+.5));
  let lv=0; for(let i=0;i<5;i++)lv+=.2*p(u,TM.trust_meter+.6+i*.9,TM.trust_meter+1.1+i*.9);
  $('mfill').setAttribute('height',(356*lv).toFixed(1)); $('mfill').setAttribute('y',(632-356*lv).toFixed(1));
  rise($('tm'),p(u,TM.trust_meter+1.5,TM.trust_meter+2.1));

  const hk=p(u,TM.fishing_hook,TM.fishing_hook+1), hy=210+120*hk+5*Math.sin(t*2);
  $('hook').setAttribute('d','M400 210V'+hy.toFixed(1)+'v50a30 30 0 0 1-60 0l-10-12'); $('hook').setAttribute('opacity',hk>0?1:0);
  rise($('hcard'),p(u,TM.headline,TM.headline+.5)); rise($('hlab'),p(u,TM.headline+.8,TM.headline+1.3));
  rise($('tlab'),p(u,TM.topic_cards,TM.topic_cards+.4));
  [0,3,4.5].forEach((d,i)=>rise($('tc'+i),p(u,TM.topic_cards+d,TM.topic_cards+d+.5)));

  rise($('hg'),p(u,TM.hourglass,TM.hourglass+.5));
  const k=p(u,TM.hourglass+.5,TM.viewer_stays+5), yt=270+155*k, w=80*(425-yt)/155;
  $('sandT').setAttribute('points',(290-w)+','+yt+' '+(290+w)+','+yt+' 290,425');
  $('sandB').setAttribute('points',(290-80*k)+',612 '+(290+80*k)+',612 290,'+(612-100*k));
  $('sandS').setAttribute('opacity',k>0&&k<1?1:0);
  [1,2.5,4.5].forEach((d,i)=>rise($('nl'+i),p(u,TM.numbered_list+d,TM.numbered_list+d+.5)));
  rise($('viewer'),p(u,TM.viewer_stays,TM.viewer_stays+.5));
  $('pbar').setAttribute('width',(960*p(u,TM.viewer_stays,TM.viewer_stays+5)).toFixed(1)); rise($('plab'),p(u,TM.viewer_stays+.5,TM.viewer_stays+1));

  rise($('gift'),p(u,TM.gift_box,TM.gift_box+.5));
  const lk=p(u,TM.gift_box+.8,TM.gift_box+1.6); $('lid').setAttribute('transform','translate(0 '+(-60*lk).toFixed(1)+')'); $('glow').setAttribute('opacity',lk.toFixed(2));
  rise($('cmp'),p(u,TM.checkmark,TM.checkmark+.5)); rise($('chk'),p(u,TM.checkmark+1,TM.checkmark+1.5));
  const rk=p(u,TM.return_arrow,TM.return_arrow+1.6); $('ret').setAttribute('stroke-dasharray',RL+' '+RL); $('ret').setAttribute('stroke-dashoffset',(RL*(1-rk)).toFixed(1));
  rise($('retl'),p(u,TM.return_arrow+1.4,TM.return_arrow+1.9));
  rise($('crowd'),p(u,TM.return_arrow+2,TM.return_arrow+2.6));
  CR.forEach((g,i)=>{g.style.fill=u>=TM.loyal_crowd+i*.12?'var(--gain)':'var(--ink)'});
  rise($('loyl'),p(u,TM.loyal_crowd+1,TM.loyal_crowd+1.5));

  rise($('scl'),p(u,TM.scale,TM.scale+.5));
  let gs=0; GV.forEach((r,i)=>{const q=p(u,TM.give_stack+i*.6,TM.give_stack+i*.6+.4);rise(r,q);gs+=q/6});
  const ak=p(u,TM.give_stack+4.5,TM.give_stack+5); rise($('askb'),ak);
  const ad=-12*gs+4*ak, ar=ad*Math.PI/180, cx=380*Math.cos(ar), cy=380*Math.sin(ar);
  $('beam').setAttribute('transform','rotate('+ad.toFixed(2)+' 800 300)');
  $('panL').setAttribute('transform','translate('+(800-cx).toFixed(1)+' '+(300-cy).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(800+cx).toFixed(1)+' '+(300+cy).toFixed(1)+')');
  rise($('fair'),p(u,TM.small_ask,TM.small_ask+.6));

  rise($('owner'),p(u,TM.gym_owner,TM.gym_owner+.5)); rise($('vid'),p(u,TM.workout_tip,TM.workout_tip+.5));
  [0,1,2].forEach(i=>rise($('vr'+i),p(u,TM.workout_tip+.8+i*.8,TM.workout_tip+1.2+i*.8)));
  $('vbar').setAttribute('width',(360*p(u,TM.workout_tip+.5,TM.workout_tip+4.5)).toFixed(1));
  rise($('viewers'),p(u,TM.comments,TM.comments+.5)); rise($('cm0'),p(u,TM.comments+.6,TM.comments+1.1)); rise($('cm1'),p(u,TM.comments+3,TM.comments+3.5));

  rise($('plat'),p(u,TM.one_platform,TM.one_platform+.5));
  const ex=u>=TM.post_counter+4; $('ghosts').setAttribute('opacity',(.35*p(u,TM.one_platform+1.5,TM.one_platform+2)+(ex?.65:0)).toFixed(2)); $('ghosts').setAttribute('stroke',ex?'var(--gain)':'var(--muted)');
  [0,2,4].forEach((d,i)=>rise($('st'+i),p(u,TM.post_counter+d,TM.post_counter+d+.5)));
  SQ.forEach((r,i)=>r.setAttribute('fill',u>=TM.post_counter+.4+i*.15?'var(--gain)':'var(--line)'));
  $('qbar').setAttribute('width',(210*p(u,TM.post_counter+2.3,TM.post_counter+3.8)).toFixed(1));
  EX.forEach((c,i)=>c.setAttribute('r',(24*p(u,TM.post_counter+4.3+i*.3,TM.post_counter+4.7+i*.3)).toFixed(1)));
  rise($('months'),p(u,TM.calendar,TM.calendar+.5));
  DT.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.4+i*.035?'var(--gain)':'var(--line)'));
  rise($('calL'),p(u,TM.calendar+.6,TM.calendar+1.1));

  rise($('qa'),p(u,TM.blank_page,TM.blank_page+.5)); rise($('qb'),p(u,TM.blank_page+.4,TM.blank_page+.9)); rise($('qc'),p(u,TM.blank_page+.8,TM.blank_page+1.3));
  rise($('page'),p(u,TM.blank_page+.3,TM.blank_page+.8));
  let pi=0,pk=0; [0,1,2].forEach(i=>{const q=p(u,TM.blank_page+1+i*1.1,TM.blank_page+2+i*1.1); $('pl'+i).setAttribute('x2',(1270+PLW[i]*q).toFixed(1)); if(q>0){pi=i;pk=q}});
  $('pen').setAttribute('transform','translate('+(1270+PLW[pi]*pk).toFixed(1)+' '+(366+pi*50)+')');
  [0,1,2].forEach(i=>rise($('ch'+i),p(u,TM.blank_page+4.6+i*.5,TM.blank_page+5.1+i*.5)));