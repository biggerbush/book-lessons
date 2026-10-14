C0[1].forEach((r,i)=>rise(r,p(t,.2+i*.3,.7+i*.3)));
  dash(C0[0],p(u,TM.cathedral+.6,TM.cathedral+4));
  const dif=u>=TM.cathedral+5.8; tp[1].forEach(e=>e.setAttribute('class',dif?'gain':'ink'));

  W1.forEach((w,i)=>rise(w,p(u,TM.bricklayers+i*.4,TM.bricklayers+i*.4+.5)));
  rise($('pb'),p(u,TM.passerby,TM.passerby+.5)); rise($('q1'),p(u,TM.passerby+.6,TM.passerby+1.1));
  BW.forEach((r,i)=>rise(r,p(u,TM.brick_wall+i*.4,TM.brick_wall+i*.4+.4)));
  rise($('sun'),p(u,TM.brick_wall+.8,TM.brick_wall+1.3)); $('rays').setAttribute('transform','rotate('+((t*15)%360).toFixed(1)+' 960 270)');
  rise($('idw'),p(u,TM.brick_wall+1.6,TM.brick_wall+2.1));

  [TM.speech_one,TM.speech_two,TM.speech_three].forEach((a,i)=>rise($('a'+i),p(u,a,a+.5)));
  $('cg').setAttribute('stroke-width',(6+2*Math.sin(t*3)).toFixed(1));
  rise($('same'),p(u,TM.speech_three+4.1,TM.speech_three+4.7));

  [TM.label_job,TM.label_career,TM.label_calling].forEach((a,i)=>rise($('j'+i),p(u,a,a+.5)));
  const cs=Math.abs(Math.cos(t*1.6)); $('coin').setAttribute('rx',(80*cs+4).toFixed(1)); $('coin2').setAttribute('rx',(50*cs+2).toFixed(1));
  $('lad').setAttribute('cy',(480-180*((t*.35)%1)).toFixed(1));
  RG.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.label_calling+.6+i*.2,TM.label_calling+.9+i*.2)));

  rise($('amy'),p(u,TM.amy,TM.amy+.5));
  DK.forEach((d,i)=>{rise(d[0],p(u,TM.office_desk+i*.3,TM.office_desk+i*.3+.5)); rise(d[1],p(u,TM.office_desk+1.6+i*.9,TM.office_desk+2.1+i*.9))});
  rise($('mat'),p(u,TM.office_desk+5.8,TM.office_desk+6.4));

  rise($('ch'),p(u,TM.survey_chart,TM.survey_chart+.5));
  PT.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.survey_chart+.6+i*.15,TM.survey_chart+.9+i*.15)));
  dash($('trend'),p(u,TM.survey_chart+2.2,TM.survey_chart+3.6));
  rise($('hp0'),p(u,TM.helping_hand,TM.helping_hand+.5));
  HP.forEach((h,i)=>{const a=TM.helping_hand+.6+i*.4; rise(h,p(u,a,a+.4)); HL[i].setAttribute('opacity',p(u,a,a+.4))});
  rise($('hm1'),p(u,TM.helping_hand+1.2,TM.helping_hand+1.7));
  rise($('hard'),p(u,TM.helping_hand+5.4,TM.helping_hand+5.9)); rise($('hm2'),p(u,TM.helping_hand+5.8,TM.helping_hand+6.3));
  DR.forEach((d,i)=>{const k=(t*1.2+i*.37)%1; d.setAttribute('transform','translate(0 '+(k*60).toFixed(1)+')'); d.setAttribute('opacity',(1-k).toFixed(2))});

  rise($('tl'),p(u,TM.timeline,TM.timeline+.5));
  [0,1,2].forEach(i=>rise($('lb'+i),p(u,TM.timeline+.6+i*.7,TM.timeline+1.1+i*.7)));
  PL.forEach((q,k)=>{const g=p(u,TM.seedling+k*1.1,TM.seedling+k*1.1+1.2); q.st.setAttribute('y2',(630-q.H*g).toFixed(1));
    q.lv.forEach(l=>l[0].setAttribute('opacity',g>=l[1]?1:0)); if(q.fl)q.fl.setAttribute('r',(26*cl((g-.9)*10)).toFixed(1))});
  rise($('helped'),p(u,TM.seedling+3.8,TM.seedling+4.3));
  rise($('okk'),p(u,TM.seedling+6.2,TM.seedling+6.8));

  [TM.lightbulb,TM.toolbox,TM.role_model].forEach((a,i)=>rise($('st'+i),p(u,a,a+.5)));
  rise($('ar0'),p(u,TM.toolbox-.4,TM.toolbox)); rise($('ar1'),p(u,TM.role_model-.4,TM.role_model));
  const lit=u>=TM.lightbulb+.6; $('bulb').style.fill=lit?'var(--gain)':'var(--stage)';
  $('bray').setAttribute('opacity',lit?(.6+.4*Math.sin(t*5)).toFixed(2):0);

  const s8=SC[8][0]/K;
  rise($('qa'),p(u,s8+.4,s8+.9));
  C8[1].forEach((r,i)=>rise(r,p(u,s8+.8+i*.3,s8+1.2+i*.3)));
  rise($('qb'),p(u,TM.my_cathedral,TM.my_cathedral+.5)); rise($('qc'),p(u,TM.my_cathedral+.6,TM.my_cathedral+1.1)); rise($('qd'),p(u,TM.my_cathedral+1.2,TM.my_cathedral+1.7));
  dash(C8[0],p(u,TM.my_cathedral+.8,TM.my_cathedral+3));
  rise($('lab8'),p(u,TM.my_cathedral+2,TM.my_cathedral+2.5));