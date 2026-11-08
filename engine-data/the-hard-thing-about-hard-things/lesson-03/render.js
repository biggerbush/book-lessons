const R2=(el,a,d=.5)=>rise(el,p(u,a,a+d)), R=(id,a,d=.5)=>R2($(id),a,d);
  TL.forEach((b,i)=>R2(b,TM.title_gun+.3+i*.25));
  $('t_ghost').setAttribute('opacity',(p(u,TM.title_gun+5.6,TM.title_gun+6.2)*(.6+.4*Math.sin(t*5))).toFixed(2));
  $('t_x').setAttribute('opacity',p(u,TM.title_gun+6.6,TM.title_gun+7));

  R('pa',TM.silver_bullet);
  const sb=p(u,TM.silver_bullet+.8,TM.silver_bullet+1.6),hit=p(u,TM.silver_bullet+1.6,TM.silver_bullet+2.4);
  SB.setAttribute('transform','translate('+(150+120*sb).toFixed(1)+' 470) rotate(90)');SB.setAttribute('opacity',(1-hit).toFixed(2));
  $('mon').setAttribute('transform','translate(0 '+(30*hit).toFixed(1)+')');$('mon').setAttribute('opacity',(1-.75*hit).toFixed(2));
  R('pb',TM.lightbulb);$('rays').setAttribute('opacity',(.55+.45*Math.sin(t*4)).toFixed(2));
  R('pc',TM.team_table);TG.forEach((g,i)=>R2(g,TM.team_table+.8+i*.6));

  R('ops',TM.opsware_logo);R('bl',TM.rival);R('sbd',TM.scoreboard);
  CR.forEach((r,i)=>{const a=TM.scoreboard+.7+i*.45,k=p(u,a,a+.6);
    r.g.setAttribute('opacity',p(u,a,a+.25));
    r.o.setAttribute('width',(r.ow*k).toFixed(1));r.b.setAttribute('width',(r.bw*k).toFixed(1));
    r.c.setAttribute('opacity',p(u,a+.5,a+.8))});
  R('ahead',TM.scoreboard+3.2);

  [TM.sales_call,TM.sales_call+1.6,TM.sales_call+6.6].forEach((a,i)=>R2(SG[i],a));
  $('signs').setAttribute('opacity',(1-.6*p(u,TM.mirror,TM.mirror+.6)).toFixed(2));
  R('mir',TM.mirror);R('ngood',TM.mirror+2);

  R('silv',SC[4][0]/K+.4);R('xx',TM.lead_bullets+.4);R('box',TM.lead_bullets+.6);
  LB.forEach((b,i)=>{const a=i<12?TM.lead_bullets+1+i*.08:TM.ammo_box+(i-12)*.15;b.setAttribute('opacity',p(u,a,a+.25))});
  R('slow',TM.ammo_box+5.3,.6);

  R('eng',TM.engineers);CD.forEach((c,i)=>c.setAttribute('width',(16+40*Math.abs(Math.sin(t*2.5+i))).toFixed(1)));
  R('chart',TM.engineers+1.5);
  const k5=p(u,TM.calendar,TM.trophy+.5);$('steps').setAttribute('d',part(ST,k5));$('steps').setAttribute('opacity',u>=TM.calendar?1:0);
  MB.forEach((m,i)=>m.setAttribute('fill',u>=TM.calendar&&k5>=(i+1)/10-.001?'var(--gain)':'var(--line)'));R('mlbl',TM.calendar);
  R('tro',TM.trophy+.4);R('won',TM.trophy+.8);

  R('cur',TM.curtain);const op=p(u,TM.curtain+4.5,TM.curtain+5.5);
  $('cl').setAttribute('width',(300-255*op).toFixed(1));$('cr').setAttribute('x',(450+255*op).toFixed(1));$('cr').setAttribute('width',(300-255*op).toFixed(1));
  R('cmp',TM.curtain+4.5);R('fndl',TM.foundation);FB.forEach((b,i)=>R2(b,TM.foundation+.2+i*.12,.3));
  R('prod',TM.foundation+1.8);R('only',TM.foundation+.6);

  R('qm',TM.question_mark);R('cmpb',TM.question_mark+4.9);R('ask',TM.question_mark+4.9,.6);
  R('tgt',TM.target);const ak=p(u,TM.target+.3,TM.target+.9);
  $('arr').setAttribute('transform','translate('+(40*(1-ak)).toFixed(1)+' '+(-40*(1-ak)).toFixed(1)+')');$('arr').setAttribute('opacity',ak);
  $('barO').setAttribute('fill',u>=TM.target?'var(--gain)':'var(--ink)');
  $('gapR').setAttribute('stroke-opacity',(u>=TM.target?.55+.45*Math.sin(t*4):1).toFixed(2));
  R('aim',TM.target+.8,.6);

  R('qa',SC[8][0]/K+.4);R('qb',TM.notebook);R('qc',TM.notebook+.4);R('l8',TM.notebook+.9);R('nb',TM.notebook+.9);
  $('ck').setAttribute('opacity',p(u,TM.notebook+1.6,TM.notebook+2));