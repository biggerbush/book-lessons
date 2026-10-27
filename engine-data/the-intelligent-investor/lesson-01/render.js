const cc=Math.cos(t*2.4),fr=cc>=0;
  $('coin').setAttribute('transform','translate(1300 '+(400-10*Math.abs(Math.sin(t*1.2))).toFixed(1)+') scale('+Math.max(Math.abs(cc),.04).toFixed(3)+' 1)');
  $('coinF').setAttribute('class',fr?'gain':'loss');$('coinT').textContent=fr?'$':'?';$('coinT').style.fill=fr?'var(--on-gain)':'var(--stage)';
  rise($('coinW'),p(u,TM.title_coin,TM.title_coin+.5));rise($('coinL'),p(u,TM.title_coin+3.8,TM.title_coin+4.3));

  rise($('gr'),p(u,TM.graham,TM.graham+.5));
  [TM.magnifier,TM.shield,TM.coins_return].forEach((a,i)=>{rise(CD[i],p(u,a,a+.5));rise($('ic'+i),p(u,a+.2,a+.7))});
  $('mag').setAttribute('transform','translate('+(12*Math.sin(t*1.6)).toFixed(1)+' '+(8*Math.sin(t*2.3)).toFixed(1)+')');
  CS.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.coins_return+.4+i*.3,TM.coins_return+.7+i*.3)));

  rise($('clip'),p(u,TM.checkboxes,TM.checkboxes+.5));
  const rc=p(u,TM.red_cross,TM.red_cross+.3);
  RW.forEach((r,i)=>{rise(r.g,p(u,TM.checkboxes+.6+i*.5,TM.checkboxes+1.1+i*.5));const a=TM.checkboxes+4.2+i*.4,k=p(u,a,a+.4);draw(r.tk,i<2?k:k*(1-rc))});
  draw(XX,p(u,TM.red_cross+.3,TM.red_cross+.7));
  $('arr2').setAttribute('opacity',p(u,TM.checkboxes+4.4,TM.checkboxes+4.8));rise($('verd'),p(u,TM.checkboxes+4.6,TM.checkboxes+5.1));
  const sp=u>=TM.red_cross+.5;
  $('vbox').style.stroke=sp?'var(--loss)':'var(--gain)';$('vtxt').textContent=sp?'Speculation':'Investment';$('vtxt').style.fill=sp?'var(--loss)':'var(--gain)';$('vlab').textContent=sp?'ONE BOX MISSED':'ALL THREE TICKED';
  rise($('quote'),p(u,TM.red_cross+4.2,TM.red_cross+4.8));

  rise($('cert'),p(u,TM.stock_cert,TM.stock_cert+.5));
  draw($('ar3a'),p(u,TM.analyst,TM.analyst+.6));rise($('a3'),p(u,TM.analyst+.3,TM.analyst+.8));
  draw($('ar3b'),p(u,TM.tip_crowd,TM.tip_crowd+.6));rise($('c3'),p(u,TM.tip_crowd+.3,TM.tip_crowd+.8));
  $('bb').setAttribute('transform','translate(0 '+(6*Math.sin(t*5)).toFixed(1)+')');
  rise($('v3a'),p(u,TM.tip_crowd+4.6,TM.tip_crowd+5.1));rise($('v3b'),p(u,TM.tip_crowd+6.4,TM.tip_crowd+6.9));

  rise($('cal'),p(u,TM.calendar_1929,TM.calendar_1929+.5));rise($('axes'),p(u,TM.calendar_1929+.4,TM.calendar_1929+.9));
  rise($('cash'),p(u,TM.borrowed_cash,TM.borrowed_cash+.5));draw($('rp'),p(u,TM.borrowed_cash+.4,TM.borrowed_cash+3.5));
  draw($('cp'),p(u,TM.crash_chart,TM.crash_chart+1.2));rise($('crl'),p(u,TM.crash_chart+.3,TM.crash_chart+.8));rise($('sav'),p(u,TM.crash_chart+3,TM.crash_chart+3.6));

  rise($('bal'),p(u,TM.balance,TM.balance+.5));$('beam').setAttribute('transform','rotate('+(3*Math.sin(t*1.5)).toFixed(2)+' 330 300)');
  rise($('sub5'),p(u,TM.balance+3,TM.balance+3.5));
  [TM.mask,TM.blindfold,TM.empty_wallet].forEach((a,i)=>rise(DG[i],p(u,a,a+.5)));

  rise($('jars'),p(u,TM.two_jars,TM.two_jars+.5));
  const st=p(u,TM.big_jar+5,TM.big_jar+5.6),sfh=90*p(u,TM.small_jar,TM.small_jar+1.2)*(1-.6*st),bfh=380*p(u,TM.big_jar,TM.big_jar+1.6);
  $('sf').setAttribute('y',(748-sfh).toFixed(1));$('sf').setAttribute('height',sfh.toFixed(1));
  $('bf').setAttribute('y',(748-bfh).toFixed(1));$('bf').setAttribute('height',bfh.toFixed(1));
  $('sj').setAttribute('transform','translate('+(st>0&&st<1?6*Math.sin(t*40)*(1-st):0).toFixed(1)+' 0)');
  rise($('lab6a'),p(u,TM.small_jar,TM.small_jar+.5));rise($('lab6b'),p(u,TM.big_jar,TM.big_jar+.5));rise($('t6'),p(u,TM.big_jar+5,TM.big_jar+5.6));

  rise($('card7'),p(u,TM.question_card,TM.question_card+.5));
  [3.4,5.6,7.7].forEach((o,i)=>{const q=Q7[i];rise(q.g,p(u,TM.question_card+o,TM.question_card+o+.5));const a=TM.green_tick+i*.3,k=p(u,a,a+.4);
    q.c.setAttribute('fill',k>.3?'var(--gain)':'none');q.c.setAttribute('stroke',k>.3?'var(--gain)':'var(--ink)');draw(q.tk,k)});
  rise($('ver7a'),p(u,TM.green_tick+.6,TM.green_tick+1.1));rise($('ver7b'),p(u,TM.green_tick+1.8,TM.green_tick+2.3));

  rise($('qa'),p(u,TM.your_holdings,TM.your_holdings+.5));rise($('qg'),p(u,TM.your_holdings+.4,TM.your_holdings+.9));
  rise($('qb'),p(u,TM.your_holdings+3.4,TM.your_holdings+3.9));rise($('qc'),p(u,TM.your_holdings+3.9,TM.your_holdings+4.4));
  QB.forEach((b,i)=>b.setAttribute('transform','translate(0 '+(-8*Math.max(0,Math.sin(t*3-i*.8))).toFixed(1)+')'));