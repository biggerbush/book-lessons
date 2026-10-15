const R=(e,a,d)=>rise(typeof e=='string'?$(e):e,p(u,a,a+(d||.5)));
  const B=TM.broken_kid; R('brk',B+.2); R('start0',B+2.5); dr($('arw'),p(u,B+6.4,B+8)); $('arh').style.opacity=p(u,B+7.8,B+8.2); R('sub0',B+6.4);

  R('pa',TM.rink); R('pb',TM.father); R('pc',TM.late_nights);
  $('sk').setAttribute('cx',(330+90*Math.cos(t*2)).toFixed(1)); $('sk').setAttribute('cy',(545+34*Math.sin(t*2)).toFixed(1));
  $('hh').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 1370 340)'); $('mh').setAttribute('transform','rotate('+(t*240%360).toFixed(1)+' 1370 340)');
  $('z1').setAttribute('opacity',(.5+.5*Math.sin(t*3)).toFixed(2)); $('z2').setAttribute('opacity',(.5+.5*Math.sin(t*3+1.5)).toFixed(2));

  dr($('rt'),p(u,TM.small_town,TM.small_town+1.2)); R('town',TM.small_town+1);
  R('k2',TM.racism); BU.forEach((b,i)=>R(b,TM.racism+.5+i*.35));
  R('card',TM.report_card); GR.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.report_card+.6+i*.3,TM.report_card+.9+i*.3)));
  R('cheat',TM.report_card+2.6); $('cpl').style.strokeDashoffset=(t*30%20).toFixed(1);

  R('scl',TM.scale-.3); const ks=p(u,TM.scale,TM.scale+1.6);
  $('ndl').setAttribute('transform','rotate('+(-130+250*ks).toFixed(1)+' 330 480)'); $('lbs').textContent='≈'+Math.round(300*ks);
  R('tk',TM.spray_tank); SPR.forEach((c,i)=>c.setAttribute('opacity',((t*2+i*.37)%1).toFixed(2)));
  R('jk',TM.junk_food); R('bel',TM.junk_food+2.6);

  R('tv',TM.tv); let w='M160 460'; for(let x=160;x<=480;x+=16)w+='L'+x+' '+(460+8*Math.sin(x/24+t*3)).toFixed(1); $('wv4').setAttribute('d',w);
  R('ph',TM.recruiter-.2); AT.forEach((g,i)=>R(g,TM.recruiter+.5+i*.45,.3));
  $('ringw').setAttribute('opacity',u>=TM.recruiter?(.5+.5*Math.sin(t*8)).toFixed(2):0); R('shot',TM.recruiter+2.8);
  R('dl',TM.deadline); $('lose').textContent=Math.round(100*p(u,TM.deadline+.3,TM.deadline+1.5));
  TF.forEach((r,i)=>r.setAttribute('opacity',(.45*p(u,TM.deadline+1.2+i*.6,TM.deadline+1.7+i*.6)).toFixed(2)));

  CP.forEach((g,i)=>R(g,TM.running_shoes+i*.4)); R('hrs',TM.running_shoes+1.4);
  R('chart',TM.scale_drop-.5); dr($('wl'),p(u,TM.scale_drop,TM.seal_trident));
  SB.forEach((g,i)=>R(g,TM.setbacks+i*.9)); R('seal',TM.seal_trident+.2);

  R('past',TM.two_paths); R('fut',TM.two_paths+4.6); TG.forEach((g,i)=>R(g,TM.pen-4.6+i*.5));
  const kp=p(u,TM.pen,TM.pen+2.5); dr($('gp'),kp); const pt=$('gp').getPointAtLength(GL*kp);
  $('pn').setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+') rotate(-35)'); $('pn').setAttribute('opacity',p(u,TM.pen-.3,TM.pen));
  R('own',TM.pen+.6);

  R('who',TM.backpack-.5); P7.forEach((g,i)=>R(g,TM.backpack+.6+i*.45));
  $('bp').setAttribute('class',u>=TM.fuel?'gain':'loss'); R('fl',TM.fuel);
  $('flp').setAttribute('transform','translate(440 440) scale('+(1+.08*Math.sin(t*9)).toFixed(3)+' '+(1+.12*Math.sin(t*7)).toFixed(3)+')');
  R('fuelt',TM.fuel+.4); ST.forEach((s,i)=>R(s,TM.fuel+5.8+i*.35));
  dr($('dir7'),p(u,TM.fuel+7.6,TM.fuel+8.8)); $('dh7').style.opacity=p(u,TM.fuel+8.6,TM.fuel+9);

  const S8=SC[8][0]/K; R('qa',S8+.3); R('qb',S8+.7); R('qc',S8+1.1); R('stp8',S8+4.6); R('chal',S8+5);
  const kh=p(u,S8+6,S8+6.8); $('dot8').setAttribute('cx',(1260+120*kh).toFixed(1)); $('dot8').setAttribute('cy',(700-80*kh-60*Math.sin(Math.PI*kh)).toFixed(1));