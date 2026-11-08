const R=(id,a,d=.5)=>rise(typeof id==='string'?$(id):id,p(u,a,a+d));
  R('ceo',TM.ceo_smile,.6); R('fine',TM.ceo_smile+1.5);
  $('crack').setAttribute('stroke-dashoffset',(1-p(u,TM.ceo_smile+6.6,TM.ceo_smile+8)).toFixed(3));

  R('cloudg',TM.cloud_logo);
  const fe=u>=TM.fear_cloud;
  $('cloudP').setAttribute('stroke',fe?'var(--loss)':'var(--ink)');
  $('cloudS').setAttribute('transform','translate('+(fe?4*Math.sin(t*23)*(1-.7*p(u,TM.fear_cloud+1.5,TM.fear_cloud+3)):0).toFixed(1)+' 0)');
  R('bolt',TM.fear_cloud,.3);
  CU.forEach((c,i)=>{const k=p(u,TM.cloud_logo+.8+i*.08,TM.cloud_logo+1.2+i*.08);
    const f=(i===2||i===5)?0:p(u,TM.falling_dots+i*.3,TM.falling_dots+i*.3+1);
    rise(c.g,k); c.g.setAttribute('opacity',(k*(1-.55*f)).toFixed(2));
    c.g.setAttribute('transform','translate(0 '+(10*(1-k)).toFixed(1)+') rotate('+(28*f).toFixed(1)+' '+c.x+' 796)');
    const col=f>0?'var(--loss)':'var(--ink)'; c.hd.setAttribute('fill',col); c.bd.setAttribute('fill',col);
    c.ln.setAttribute('opacity',(k*(1-f)).toFixed(2)); c.xm.setAttribute('opacity',f.toFixed(2))});
  R('team1',TM.worried_team);

  R('carry',TM.heavy_rock);
  const sk=p(u,TM.heavy_rock+3,TM.heavy_rock+4.5), wb=u>=TM.pep_talk?3*Math.sin(t*2.5):0;
  $('ldr2').setAttribute('transform','translate(0 '+(12*sk).toFixed(1)+')');
  $('rock').setAttribute('transform','translate(0 '+(12*sk).toFixed(1)+') rotate('+wb.toFixed(2)+' 400 310) translate(400 310) scale('+(1+.15*sk).toFixed(3)+') translate(-400 -310)');
  R('calm',TM.heavy_rock+3); R('pep',TM.pep_talk); R('hope',TM.pep_talk+1.5);

  R('magw',TM.magnifier);
  const mv=p(u,TM.magnifier+2.5,TM.magnifier+5.5);
  $('mag').setAttribute('transform','translate('+(250+330*mv).toFixed(1)+' '+(380+170*mv).toFixed(1)+')');
  $('drop').setAttribute('stroke-dashoffset',(1-mv).toFixed(3));
  R('gauge',TM.trust_gauge); SN.forEach((g,i)=>R(g,TM.trust_gauge+.6+i*1.2));
  $('needle').setAttribute('transform','rotate('+(-25-130*p(u,TM.trust_gauge+.6,TM.trust_gauge+5.4)).toFixed(1)+' 1100 600)');
  R('drain',TM.trust_gauge+5.4);

  R('prob',TM.light_bulbs); R('hard',TM.light_bulbs+2.2); R('one',TM.light_bulbs+6.4);
  BL.forEach((g,i)=>R(g,i?TM.many_hands+i*.12:TM.light_bulbs+6.4)); R('many',TM.many_hands+1);

  R('lanes',TM.speed_arrow);
  const fb=(t*.6)%1, fg=(t*.07)%1;
  $('tokB').setAttribute('transform','translate('+(120+930*fb).toFixed(1)+' 300)'); $('tokB').setAttribute('opacity',Math.min(1,(1-fb)*8,fb*12).toFixed(2));
  $('tokG').setAttribute('transform','translate('+(120+920*fg).toFixed(1)+' 410)'); $('tokG').setAttribute('opacity',Math.min(1,(1-fg)*8,fg*30).toFixed(2));
  R('door',TM.open_door); RS.forEach((g,i)=>R(g,TM.open_door+.6+i*.4)); R('cost',TM.open_door+5);

  [TM.clear_words,TM.clear_words+3.4,TM.plan_map,TM.plan_map+2.4].forEach((a,i)=>R('k'+i,a));
  R('dark',TM.plan_map+4.9);

  R('cal',TM.calendar); R('tbl',TM.team_table);
  const mr=p(u,TM.team_table+.6,TM.team_table+2), sp=p(u,TM.team_table+5.4,TM.team_table+6.6);
  $('rk').setAttribute('cx',(350+710*mr).toFixed(1));
  $('rk').setAttribute('opacity',(p(u,TM.calendar+.8,TM.calendar+1.3)*(1-sp)).toFixed(2));
  BT.forEach((b,i)=>{b.setAttribute('cx',(1060+(BTT[i][0]-1060)*sp).toFixed(1)); b.setAttribute('cy',(520+(BTT[i][1]-520)*sp).toFixed(1)); b.setAttribute('opacity',sp>0?1:0)});
  R('light',TM.team_table+5.6);

  R('qa',TM.question_mark); R('qb',TM.question_mark+.4); R('qc',TM.question_mark+.8); R('qm',TM.question_mark+1.2);
  $('qmb').setAttribute('transform','translate(0 '+(8*Math.sin(t*2)).toFixed(1)+')');
  R('q2',TM.question_mark+4.5);