const f0=p(u,TM.hero_tag+4.5,TM.hero_tag+5.5),c0=f0>.5?'var(--gain)':'var(--loss)';
  R('t0tag',u,TM.hero_tag,.6);
  T0.w.setAttribute('transform','translate(1260 380) rotate('+(4*Math.sin(t*1.5)).toFixed(2)+') scale('+(.6+.4*f0).toFixed(3)+')');
  T0.pa.style.stroke=c0;T0.tx.style.fill=c0;

  const mh=180-164*p(u,TM.thin_coin+3.5,TM.thin_coin+5);
  $('mg').setAttribute('y',(460-mh).toFixed(1));$('mg').setAttribute('height',mh.toFixed(1));$('mgl').setAttribute('y',(468-mh/2).toFixed(1));
  R('s1bar',u,TM.thin_coin);R('s1own',u,TM.tired_owner);
  $('sweat').setAttribute('cy',(350+10*Math.abs(Math.sin(t*3))).toFixed(1));
  for(let i=0;i<3;i++)R('s1r'+i,u,TM.tired_owner+.6+i*.8);
  R('s1race',u,TM.tired_owner+4.2);

  part($('coilD'),CD,p(u,TM.down_spiral,TM.down_spiral+2));ballAt($('ballD'),CD,u>=TM.down_spiral+2,t);
  BD.forEach((e,i)=>R(e,u,TM.down_spiral+2.2+i*1.1));
  R('loopD',u,TM.bad_review);R('worse',u,TM.bad_review+4.2);

  part($('coilU'),CU,p(u,TM.up_spiral,TM.up_spiral+2));ballAt($('ballU'),CU,u>=TM.up_spiral+2,t);
  [TM.up_spiral+.4,TM.up_spiral+2.9,TM.toolbox+5.8,TM.toolbox+6.6,TM.toolbox+8].forEach((a,i)=>R(BU[i],u,a));
  for(let i=0;i<3;i++)R('ic'+i,u,TM.toolbox+i*1.6);
  R('loopU',u,TM.toolbox+8.4);R('lift',u,TM.toolbox+8.6);

  R('wal',u,TM.wallet_open-.4);$('bills').setAttribute('transform','translate(0 '+(-130*p(u,TM.wallet_open,TM.wallet_open+1)).toFixed(1)+')');
  CK.forEach((g,i)=>R(g,u,TM.wallet_open+3+i*.6));
  R('barsT',u,TM.effort_bar);const eb=p(u,TM.effort_bar+.4,TM.effort_bar+2);
  $('barL').setAttribute('width',(260*eb).toFixed(1));$('barG').setAttribute('width',(900*eb).toFixed(1));
  $('outT').setAttribute('opacity',p(u,TM.effort_bar+1.6,TM.effort_bar+2));R('look',u,TM.effort_bar+2.5);

  R('fun',u,TM.filter_funnel);
  DT.forEach((d,i)=>{const ph=(t*.3+i/12)%1;let x,y,o=1;
    if(i%3===0){const x0=650+(i*29)%50;if(ph<.35){x=x0;y=200+100*ph/.35}else{const k=cl((ph-.35)/.4);x=x0-(x0-575)*k;y=300-80*Math.sin(k*Math.PI)+40*k;o=1-k}}
    else{const x0=680+(i*137)%240;if(ph<.6){const k=ph/.6;x=x0+(800-x0)*k*k;y=200+320*k}else{const k=(ph-.6)/.4;x=800;y=520+100*k;o=1-k*k}}
    d.setAttribute('cx',x.toFixed(1));d.setAttribute('cy',y.toFixed(1));d.setAttribute('opacity',o.toFixed(2))});
  R('lowP',u,TM.filter_funnel+3.8);R('hiP',u,TM.happy_client);

  R('pre',u,TM.trainer);CR.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.trainer+.6+i*.1,TM.trainer+.9+i*.1)));
  R('clk',u,TM.clock_strain);$('hand').setAttribute('transform','rotate('+((t*360)%360).toFixed(1)+' 250 640)');
  TR0.forEach(e=>e.setAttribute('class',u>=TM.clock_strain?'loss':'ink'));
  R('post',u,TM.meal_plan);
  CI.forEach((c,i)=>c.setAttribute('fill',u>=TM.meal_plan+2+i*.4?'var(--gain)':'var(--stage)'));
  CL.forEach(pr=>pr.forEach(e=>e.setAttribute('class',u>=TM.meal_plan+6.6?'gain':'ink')));
  R('refs',u,TM.meal_plan+6.6);

  R('t7s',u,TM.ten_x);R('t7a',u,TM.ten_x+.8);R('t7b',u,TM.ten_x+1.2);
  TB.w.setAttribute('transform','translate(740 360) scale('+(.45+.4*p(u,TM.ten_x+1.2,TM.ten_x+2.2)).toFixed(3)+')');
  R('q7',u,TM.ten_x+2.6);R('road',u,TM.idea_list);
  PN.forEach((g,i)=>R(g,u,TM.idea_list+.5+i*.6));R('flag',u,TM.idea_list+2.4);R('raise',u,TM.idea_list+3.8);

  R('q8a',u,TM.mirror);R('q8b',u,TM.mirror+.4);R('q8c',u,TM.mirror+.8);R('pad',u,TM.mirror+1.2);
  R('q8m',u,TM.mirror+4.2);
  PL.forEach((l,i)=>l.setAttribute('stroke',u>=TM.mirror+4.4+i*.5?'var(--ink)':'var(--line)'));
  R('pchk',u,TM.mirror+6.2);