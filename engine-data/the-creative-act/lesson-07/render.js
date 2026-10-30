const R=(id,a,d)=>rise($(id),p(u,a,a+(d||.5)));
  R('paper0',TM.unfinished,.6);
  const f0=p(u,TM.unfinished+5.4,TM.unfinished+7.4);
  $('paper1').setAttribute('transform','translate('+(40*f0).toFixed(1)+' '+(-150*f0).toFixed(1)+') rotate('+(-8*f0).toFixed(2)+' 1320 365)');
  $('paper1').setAttribute('opacity',(1-f0).toFixed(2));

  R('ad',TM.artist_desk);
  FL.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.magnifier+.6+i*.7,TM.magnifier+.9+i*.7)));
  R('magw',TM.magnifier);
  $('mag').setAttribute('transform','translate('+(500+40*Math.sin(t*1.1)).toFixed(1)+' '+(380+40*Math.sin(t*.7)).toFixed(1)+')');
  R('lp',TM.loop_arrow);
  const oa=-Math.PI/2+t*1.6; $('orb').setAttribute('cx',(1150+170*Math.cos(oa)).toFixed(1)); $('orb').setAttribute('cy',(480+170*Math.sin(oa)).toFixed(1));
  R('never',TM.loop_arrow+1.5,.6);

  R('aud',TM.audience);
  R('shield',TM.shield);
  const g2=p(u,TM.shield+5,TM.shield+5.6); rise($('grow'),g2); $('art2').setAttribute('opacity',(1-.5*g2).toFixed(2));

  R('cam',TM.camera);
  const pk=p(u,TM.polaroid,TM.polaroid+1.2); $('pola').setAttribute('opacity',pk>0?1:0); $('pol1').setAttribute('transform','translate(0 '+(-210*(1-pk)).toFixed(1)+')');
  R('jr',TM.journal);
  JL.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.journal+.5+i*.3,TM.journal+.8+i*.3)));
  R('tl',TM.journal+5,.6);

  R('rec',TM.record);
  $('shine').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 340 470)');
  R('mix',TM.mixing_desk);
  KN.forEach((k,i)=>k.setAttribute('y',(441+60*Math.sin(t*1.3+i*1.1)).toFixed(1)));
  R('cal',TM.calendar);
  const nx=u>=TM.calendar+5.8; $('calT').textContent=nx?'NEXT YEAR':'THIS SEASON';
  R('next',TM.calendar+5.8,.6);

  // release: lid lifts off and tilts beside the neck, old piece and old ideas leave along the arrow, new ideas drop in
  const ko1=p(u,TM.open_hand,TM.open_hand+.6), ko2=p(u,TM.open_hand+.2,TM.open_hand+.9);
  $('lid').setAttribute('transform','translate('+(200*ko1).toFixed(1)+' '+(-68*ko1).toFixed(1)+') rotate('+(25*ko2).toFixed(1)+' 700 288)');
  const bk=p(u,TM.open_hand+.3,TM.open_hand+1.6), bs=1-.7*bk;
  $('blk').setAttribute('transform','translate('+(700-370*bk).toFixed(1)+' '+(585-285*bk).toFixed(1)+') scale('+bs.toFixed(3)+') translate(-700 -585)');
  $('blk').setAttribute('opacity',(1-cl(lin(bk,.6,1))).toFixed(2));
  OLD.forEach((c,i)=>{const k=p(u,TM.open_hand+.8+i*.3,TM.open_hand+2+i*.3);
    const q=k<.45?L2(OLDP[i],[700,300],k/.45):L2([700,300],[300,300],(k-.45)/.55);
    c.setAttribute('cx',q[0].toFixed(1)); c.setAttribute('cy',q[1].toFixed(1));
    c.setAttribute('opacity',(p(u,TM.full_jar+i*.2,TM.full_jar+i*.2+.4)*(1-cl(lin(k,.85,1)))).toFixed(2))});
  const ia=p(u,TM.full_jar+5,TM.full_jar+5.6);
  const d0=p(u,TM.new_seed,TM.new_seed+1.4), w0=[1230,420-(d0>0?0:10*Math.abs(Math.sin(t*3)))];
  const q0=d0<.4?L2(w0,[700,240],d0/.4):L2([700,240],[680,690],(d0-.4)/.6);
  NEW[0].setAttribute('cx',q0[0].toFixed(1)); NEW[0].setAttribute('cy',q0[1].toFixed(1)); NEW[0].setAttribute('opacity',ia);
  const d1=p(u,TM.new_seed+.8,TM.new_seed+1.8);
  NEW[1].setAttribute('cx',735); NEW[1].setAttribute('cy',(240+450*d1).toFixed(1)); NEW[1].setAttribute('opacity',p(u,TM.new_seed+.5,TM.new_seed+.8));
  rise($('nofit'),ia*(1-ko1));
  R('letgo',TM.open_hand);
  R('flow',TM.new_seed,.6); $('flowP').setAttribute('stroke-dashoffset',(-t*60%32).toFixed(1));

  let wv='M360 560'; for(let x=360;x<=1120;x+=20)wv+='L'+x+' '+(560+5*Math.sin(x/40+t*2)).toFixed(1); $('wave2').setAttribute('d',wv);
  const bt=p(u,TM.paper_boat,TM.paper_boat+5);
  $('boat').setAttribute('transform','translate('+(420+620*bt).toFixed(1)+' '+(552+4*Math.sin(t*2)).toFixed(1)+')');
  $('boat').setAttribute('opacity',p(u,TM.paper_boat-.4,TM.paper_boat+.2));
  R('crowd6',TM.crowd_react);
  RB.forEach((b,i)=>{rise(b,p(u,TM.crowd_react+.4+i*.3,TM.crowd_react+.7+i*.3)); RT[i].textContent=SYM[Math.floor(t*.9+i*1.7)%4]});
  $('art6').setAttribute('transform','translate('+(-70*p(u,TM.crowd_react+3.8,TM.crowd_react+5)).toFixed(1)+' 0)');
  R('step',TM.crowd_react+3.8,.6);

  const ak=p(u,TM.circle_path,TM.circle_path+2.5); $('arc').setAttribute('stroke-dashoffset',(1257*(1-ak)).toFixed(1));
  for(let i=0;i<4;i++)R('cl'+i,TM.circle_path+i*.6,.4);
  const da=-Math.PI/2+t*1.2; $('cdot').setAttribute('cx',(420+200*Math.cos(da)).toFixed(1)); $('cdot').setAttribute('cy',(500+200*Math.sin(da)).toFixed(1)); $('cdot').setAttribute('opacity',ak>=1?1:0);
  const sk=p(u,TM.sprout,TM.sprout+1.4); $('sprW').setAttribute('opacity',sk>0?1:0); $('spr').setAttribute('transform','translate(420 564) scale('+Math.max(sk,.001).toFixed(3)+') translate(-420 -564)');
  STK.forEach((g,i)=>rise(g,p(u,TM.stack_works+i*.45,TM.stack_works+i*.45+.4)));
  R('bodyL',TM.stack_works+3.6); R('life',TM.stack_works+5,.6);

  const S8=SC[8][0]/K;
  R('qa',S8+.4); R('qb',S8+1); R('g8',S8+1.6,.6); R('qc',S8+5.7);
  const fk=p(u,S8+6.3,S8+8);
  $('fly').setAttribute('transform','translate('+(60*fk).toFixed(1)+' '+(-50*fk).toFixed(1)+') rotate('+(14*fk).toFixed(1)+' 525 675)'); $('fly').setAttribute('opacity',(1-fk).toFixed(2));
  R('idea',S8+7.4,.6);