$('clim').setAttribute('transform','translate(0 '+(-3*Math.abs(Math.sin(t*2))).toFixed(1)+')');
  rocks.forEach((r,i)=>{const a=TM.backpack+.4+i*.45;r.setAttribute('opacity',p(u,a,a+.3))});
  rise($('rk'),p(u,TM.backpack+5,TM.backpack+5.5));

  rise($('photo'),p(u,TM.old_photo,TM.old_photo+.5));
  tags.forEach((g,i)=>{const a=TM.old_photo+4.6+i*1.2;rise(g,p(u,a,a+.4))});
  rise($('loop'),p(u,TM.speech_loop,TM.speech_loop+.5));
  $('spin').setAttribute('transform','rotate('+((t*70)%360).toFixed(1)+' 1250 450)');
  $('ring').setAttribute('stroke-width',(4+6*p(u,TM.speech_loop+1,TM.speech_loop+5)).toFixed(1));
  rise($('steer'),p(u,TM.speech_loop+5.8,TM.speech_loop+6.4));

  rise($('hold'),p(u,TM.safety_rope,TM.safety_rope+.5));
  const lk=p(u,TM.open_door+1.5,TM.open_door+2.5),w=10*Math.sin(t*2.5);
  $('lean').setAttribute('transform','rotate('+(-8*lk).toFixed(2)+' 620 760)');
  $('rope').setAttribute('d','M270 480Q420 '+(610+w).toFixed(1)+' '+(565-13.4*lk).toFixed(1)+' '+(660+8.6*lk).toFixed(1));
  rise($('fam'),p(u,TM.safety_rope+3.4,TM.safety_rope+3.9));
  rise($('door'),p(u,TM.open_door,TM.open_door+.5));
  rise($('fwd'),p(u,TM.open_door+.8,TM.open_door+1.3));
  rise($('rsst'),p(u,TM.open_door+2,TM.open_door+2.5));

  rise($('cpl'),p(u,TM.couple,TM.couple+.5));
  $('crk').setAttribute('opacity',p(u,TM.couple+1.2,TM.couple+1.8));
  rise($('house'),p(u,TM.dream_house,TM.dream_house+.6));
  $('hs').setAttribute('opacity',(1-.6*p(u,TM.dream_house+6.6,TM.dream_house+7.6)).toFixed(2));
  rise($('nc'),p(u,TM.dream_house+6.6,TM.dream_house+7.1));
  rise($('grv'),p(u,TM.dream_house+7,TM.dream_house+7.6));

  rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  rise($('n0'),p(u,TM.calendar+1,TM.calendar+1.4)); rise($('n1'),p(u,TM.calendar+2.4,TM.calendar+2.8));
  rise($('acc'),p(u,TM.calendar+5.4,TM.calendar+5.9));
  rise($('scl'),p(u,TM.scale,TM.scale+.5));
  let tot=0;const bk=balls.map((b,i)=>{const v=p(u,TM.scale+.8+i*.5,TM.scale+1.6+i*.5);tot+=v;return v});
  const ang=.22-.44*tot/5,co=Math.cos(ang),si=Math.sin(ang),E=[[1210-210*co,520+210*si],[1210+210*co,520-210*si]];
  $('beam').setAttribute('d','M'+E[0][0].toFixed(1)+' '+E[0][1].toFixed(1)+'L'+E[1][0].toFixed(1)+' '+E[1][1].toFixed(1));
  pans.forEach((g,i)=>g.setAttribute('transform','translate('+E[i][0].toFixed(1)+' '+E[i][1].toFixed(1)+')'));
  balls.forEach((b,i)=>{const v=bk[i];b.setAttribute('cx',(E[0][0]+(E[1][0]-E[0][0])*v-36+i*18).toFixed(1));b.setAttribute('cy',(E[0][1]+(E[1][1]-E[0][1])*v+60-120*Math.sin(Math.PI*v)).toFixed(1));b.setAttribute('fill',v>.5?CG:CL)});

  rise($('ph'),p(u,TM.phone,TM.phone+.5));
  [0,1,2].forEach(i=>$('dt'+i).setAttribute('cy',(360-7*Math.max(0,Math.sin(t*5-i*.8))).toFixed(1)));
  rise($('gv'),p(u,TM.phone+5.4,TM.phone+6));
  rise($('bk'),p(u,TM.key-.3,TM.key+.2)); rise($('keyW'),p(u,TM.key,TM.key+.4));
  $('keyG').setAttribute('transform','translate('+(120*(1-p(u,TM.key+.4,TM.key+1.5))).toFixed(1)+' 0)');
  $('lockB').setAttribute('fill',u>=TM.key+1.6?CG:CI);
  rise($('done'),p(u,TM.key+1.6,TM.key+2.1));

  $('seaG').setAttribute('opacity',p(u,TM.waves,TM.waves+.6));
  const reach=50*Math.max(0,Math.sin(t*1.1));let cr='';for(let x=120;x<=1480;x+=40)cr+=(x===120?'M':'L')+x+' '+(690-reach+8*Math.sin(x/50+t*2)).toFixed(1);
  $('crest').setAttribute('d',cr); $('sea').setAttribute('d',cr+'L1480 860L120 860Z');
  rise($('wl'),p(u,TM.waves+3.4,TM.waves+3.9));
  const wx=220+1140*p(u,TM.footprints,TM.footprints+4);
  $('wk').setAttribute('transform','translate('+wx.toFixed(1)+' 0)');
  FP.forEach(f=>f[1].setAttribute('opacity',wx>f[0]+40?1:0));
  rise($('ch'),p(u,TM.footprints,TM.footprints+.5));

  $('then').setAttribute('opacity',(1-.5*p(u,TM.mirror+1,TM.mirror+2)).toFixed(2));
  rise($('mir'),p(u,TM.mirror,TM.mirror+.6));
  rise($('spr'),p(u,TM.new_sprout,TM.new_sprout+.5));
  const h=290*p(u,TM.new_sprout+.3,TM.new_sprout+2.5);
  $('stem').setAttribute('d','M1080 640V'+(640-h).toFixed(1));
  rise($('lf0'),p(u,TM.new_sprout+1.2,TM.new_sprout+1.6)); rise($('lf1'),p(u,TM.new_sprout+1.8,TM.new_sprout+2.2));
  rise($('bud'),p(u,TM.new_sprout+2.4,TM.new_sprout+2.8)); rise($('grow'),p(u,TM.new_sprout+2.6,TM.new_sprout+3.1));

  const Q=SC[8][0]/K;
  rise($('qa'),p(u,Q+.3,Q+.8)); rise($('qb'),p(u,Q+.7,Q+1.2)); rise($('qc'),p(u,Q+1.1,Q+1.6));
  rise($('pad'),p(u,Q+1.6,Q+2.2)); rise($('lab'),p(u,Q+4.2,Q+4.8));
  $('strk').setAttribute('x2',(1200+220*p(u,Q+4.8,Q+5.6)).toFixed(1));
  $('nb').setAttribute('width',(220*p(u,Q+5.8,Q+6.8)).toFixed(1)); $('nb2').setAttribute('width',(150*p(u,Q+6.4,Q+7.2)).toFixed(1));