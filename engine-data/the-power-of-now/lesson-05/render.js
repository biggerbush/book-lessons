const sb=TM.sleeping_beast, pk=p(u,sb+5,sb+5.5)*(1-p(u,sb+7.5,sb+8));
  bt(B0,1290,474,1.1+.025*Math.sin(t*1.6),pk); rise($('b0'),p(u,sb,sb+.6));
  ZZ.forEach((z,i)=>{const c=(t*.4+i/3)%1; z.setAttribute('x',(1440+40*c).toFixed(1)); z.setAttribute('y',(300-150*c).toFixed(1)); z.setAttribute('opacity',(u>=sb?Math.sin(Math.PI*c)*(1-pk):0).toFixed(2))});

  const k1=p(u,TM.dark_cloud,TM.dark_cloud+1.5);
  DT.forEach((d,i)=>{const a=TM.stack_wounds+i*.8; d[0].setAttribute('opacity',(p(u,a,a+.4)*(1-k1)).toFixed(2)); d[0].setAttribute('cx',(d[1]+(420-d[1])*k1).toFixed(1)); d[0].setAttribute('cy',(d[2]+(680-d[2])*k1).toFixed(1))});
  CL1.setAttribute('transform',`translate(420 680) scale(${(.2+.8*k1+.02*Math.sin(t*2)*k1).toFixed(3)})`); CL1.setAttribute('opacity',k1.toFixed(2));
  rise($('r10'),p(u,TM.stack_wounds+.3,TM.stack_wounds+.8)); rise($('r11'),p(u,TM.dark_cloud-5,TM.dark_cloud-4.5)); rise($('r12'),p(u,TM.dark_cloud,TM.dark_cloud+.6));

  // scene 2: creature beside the person, looming over it
  const k2=p(u,TM.flare_up,TM.flare_up+1.2), a2=p(u,TM.trigger_spark+.8,TM.trigger_spark+1.2);
  bt(B2,380,640-40*k2,.5+1.1*k2+k2*.03*Math.sin(t*5)+(1-k2)*.015*Math.sin(t*1.6),a2);
  rise($('b2'),p(u,TM.calm_figure,TM.calm_figure+.6)); rise($('f2'),p(u,TM.calm_figure,TM.calm_figure+.6));
  $('grip2').setAttribute('opacity',p(u,TM.flare_up+.6,TM.flare_up+1.2).toFixed(2)); $('grip2').style.strokeDashoffset=(-t*30).toFixed(1);
  $('spk').setAttribute('opacity',(p(u,TM.trigger_spark,TM.trigger_spark+.3)*(1-p(u,TM.flare_up+1,TM.flare_up+1.6))*(.7+.3*Math.abs(Math.sin(t*9)))).toFixed(2));
  rise($('tg'),p(u,TM.trigger_spark,TM.trigger_spark+.5)); rise($('st2'),p(u,TM.calm_figure+.5,TM.calm_figure+1));
  const aw=u>=TM.flare_up+.8; F2.setAttribute('class',aw?'loss':'ink');
  $('st2').textContent=u>=TM.flare_up?'AWAKE: IT TAKES OVER':'DORMANT'; $('st2').style.fill=u>=TM.flare_up?'var(--loss)':'var(--muted)';

  bt(B3,400,540,1.4+.3*p(u,TM.spiral_arrow,TM.spiral_arrow+4),1);
  B3.m.setAttribute('opacity',p(u,TM.hungry_mouth,TM.hungry_mouth+.4)); B3.m.setAttribute('ry',(20+12*Math.abs(Math.sin(t*4))).toFixed(1));
  rise($('b3'),p(u,TM.hungry_mouth-.4,TM.hungry_mouth+.2)); rise($('l3'),p(u,TM.hungry_mouth+1,TM.hungry_mouth+1.5));
  rise($('n3a'),p(u,TM.storm_thoughts,TM.storm_thoughts+.5)); rise($('cyc'),p(u,TM.storm_thoughts+1.5,TM.storm_thoughts+2)); rise($('n3b'),p(u,TM.storm_thoughts+2.5,TM.storm_thoughts+3));
  $('arw').setAttribute('transform',`rotate(${(u>TM.spiral_arrow?(u-TM.spiral_arrow)*120:0).toFixed(1)} 1100 510)`);
  const on3=p(u,TM.storm_thoughts+1,TM.storm_thoughts+1.5);
  PL.forEach((c,i)=>{const f=(t*.4+i/5)%1; c.setAttribute('cx',(900-460*f).toFixed(1)); c.setAttribute('cy',(510+50*f).toFixed(1)); c.setAttribute('opacity',(on3*Math.sin(Math.PI*f)).toFixed(2))});
  rise($('sp3'),p(u,TM.spiral_arrow,TM.spiral_arrow+.6));

  rise($('f4'),p(u,TM.couple_table,TM.couple_table+.6)); rise($('tb4'),p(u,TM.couple_table+.3,TM.couple_table+.9));
  rise($('bub4'),p(u,TM.speech_bubble,TM.speech_bubble+.5)); rise($('bars4'),p(u,TM.speech_bubble+1,TM.speech_bubble+1.5));
  YOU.setAttribute('class',u>=TM.angry_face?'loss':'ink'); rise($('ang4'),p(u,TM.angry_face,TM.angry_face+.4));
  $('rbar').setAttribute('width',(1000*p(u,TM.angry_face+.5,TM.angry_face+2.5)).toFixed(1));
  bt(B4a,250,560,.8+.03*Math.sin(t*3),1); rise($('b4a'),p(u,TM.angry_face+.6,TM.angry_face+1.2));
  bt(B4b,1350,560,.8+.03*Math.sin(t*3+1),p(u,TM.second_beast+1,TM.second_beast+1.4)); rise($('b4b'),p(u,TM.second_beast,TM.second_beast+.6));
  $('lnk').setAttribute('opacity',p(u,TM.second_beast,TM.second_beast+.6)); $('lnk').style.strokeDashoffset=(-t*40).toFixed(1);

  const k5=p(u,TM.witness_eye,TM.witness_eye+1.2);
  rise($('cone5'),p(u,TM.spotlight,TM.spotlight+.6)); bt(B5,640,600,1.4-.3*k5,1);
  F5.setAttribute('transform',`translate(${(560*k5).toFixed(1)} 0)`);
  rise($('eye5'),p(u,TM.witness_eye,TM.witness_eye+.5)); $('sl5').setAttribute('opacity',k5.toFixed(2));
  rise($('lb5a'),p(u,TM.spotlight+1,TM.spotlight+1.5)); rise($('lb5b'),p(u,TM.witness_eye+4.6,TM.witness_eye+5.1));

  // scene 6: small dark cloud of old pain releases amber particles into a glowing disc
  $('br6').setAttribute('r',(205+25*Math.sin(t*1.2)).toFixed(1)); $('br6').setAttribute('opacity',p(u,TM.calm_breath,TM.calm_breath+.6));
  $('glo').setAttribute('opacity',(p(u,TM.warm_glow,TM.warm_glow+1)*(.8+.2*Math.sin(t*1.2))).toFixed(2));
  [['c6a','x6a',TM.calm_breath+.5],['c6b','x6b',TM.calm_breath+2.5]].forEach(c=>{rise($(c[0]),p(u,c[2],c[2]+.4)); rise($(c[1]),p(u,c[2]+.8,c[2]+1.2))});
  const k6=p(u,TM.fading_cloud,TM.fading_cloud+3), dsk=p(u,TM.fading_cloud,TM.fading_cloud+2.2);
  rise($('cl6'),p(u,TM.calm_breath,TM.calm_breath+.6));
  CL6.setAttribute('transform',`translate(1140 710) scale(${(.7-.35*k6+.02*Math.sin(t*2)).toFixed(3)})`); CL6.setAttribute('opacity',(1-.55*k6).toFixed(2));
  const dr=90*dsk; $('dk6').setAttribute('r',dr.toFixed(1));
  $('gl6').setAttribute('r',(dsk>0?dr+22+6*Math.sin(t*1.5):0).toFixed(1)); $('gl6').setAttribute('opacity',dsk.toFixed(2));
  RY6.forEach((r,i)=>r.setAttribute('opacity',(p(u,TM.fading_cloud+1.5+i*.08,TM.fading_cloud+2+i*.08)*(.6+.4*Math.sin(t*2+i))).toFixed(2)));
  const on6=p(u,TM.fading_cloud,TM.fading_cloud+1);
  SP6.forEach((c,i)=>{const f=(t*.4+i/6)%1; c.setAttribute('cx',(1140+(i-2.5)*22+5*Math.sin(t+i)).toFixed(1)); c.setAttribute('cy',(680-120*f).toFixed(1)); c.setAttribute('opacity',(on6*Math.sin(Math.PI*f)).toFixed(2))});
  const cs=u>=TM.fading_cloud+1.5; $('l6t').textContent=cs?'CONSCIOUSNESS':'OLD PAIN'; $('l6t').style.fill=cs?'var(--gain)':'var(--muted)';
  rise($('lb6'),p(u,TM.calm_breath,TM.calm_breath+.6)); rise($('ft6'),p(u,TM.warm_glow,TM.warm_glow+.6));

  rise($('tag7'),p(u,TM.label_tag,TM.label_tag+.5)); rise($('ps7'),p(u,TM.pause_sign,TM.pause_sign+.5)); rise($('dr7'),p(u,TM.open_door,TM.open_door+.5));
  const k7=p(u,TM.open_door+.4,TM.open_door+1.8), w7=200*(1-.7*k7), d7=40*k7;
  $('dp').setAttribute('points',`1200,380 ${(1200+w7).toFixed(1)},${(380+d7).toFixed(1)} ${(1200+w7).toFixed(1)},${(720-d7).toFixed(1)} 1200,720`);

  const S8=SC[8][0]/K;
  rise($('q0'),p(u,S8+.2,S8+.7)); rise($('qa'),p(u,S8+4.2,S8+4.7)); rise($('qb'),p(u,S8+4.6,S8+5.1)); rise($('qc'),p(u,S8+5,S8+5.5)); rise($('wl8'),p(u,S8+5.8,S8+6.3));
  bt(B8,1150,790,.5+.015*Math.sin(t*1.6),0); rise($('g8'),p(u,S8+.8,S8+1.4));