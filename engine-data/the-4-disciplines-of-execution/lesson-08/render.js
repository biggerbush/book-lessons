const st=p(u,TM.storm,TM.storm+.6), um=p(u,TM.umbrella,TM.umbrella+.6);
  $('wind').setAttribute('opacity',st); [...$('wind').children].forEach((w,i)=>w.style.strokeDashoffset=(-t*90-i*25).toFixed(1));
  drops.forEach((d,i)=>{const x=1160+i*23,y=180+((t*420+i*61)%400); d.setAttribute('transform','translate('+x+' '+y.toFixed(1)+')'); d.setAttribute('opacity',(st*(um>.5&&x>1195&&x<1450&&y>390?0:1)).toFixed(2))});
  rise($('umb'),um);

  rise($('ofc'),p(u,TM.office,TM.office+.5));
  papers.forEach((r,i)=>{const a=t*.9+i*Math.PI/3; r.setAttribute('transform','translate('+(340+170*Math.cos(a)).toFixed(1)+' '+(450+150*Math.sin(a)).toFixed(1)+') rotate('+((a*57)%360).toFixed(0)+')')});
  rise($('grs'),p(u,TM.gears,TM.gears+.5)); const ga=t*25;
  $('gA').setAttribute('transform','translate(760 430) rotate('+ga.toFixed(1)+')'); $('gB').setAttribute('transform','translate(905 555) rotate('+(-ga*10/7+9).toFixed(1)+')');
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); cells.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.calendar+.3+i*.06,TM.calendar+.6+i*.06)));

  rise($('pieB'),p(u,TM.pie_chart,TM.pie_chart+.6)); rise($('g80'),p(u,TM.pie_chart+.4,TM.pie_chart+1));
  $('swirl').setAttribute('transform','rotate('+((-t*40)%360).toFixed(1)+' 437 572)');
  $('n80').textContent=Math.round(80*p(u,TM.pie_chart+.4,TM.pie_chart+1.8))+'%';
  const po=p(u,TM.gold_slice+.4,TM.gold_slice+1.2); rise($('slc'),p(u,TM.gold_slice,TM.gold_slice+.5));
  $('slcI').setAttribute('transform','translate('+(21*po).toFixed(1)+' '+(-29*po).toFixed(1)+')');
  rise($('g20'),p(u,TM.gold_slice+.6,TM.gold_slice+1.2)); chips.forEach((c,i)=>rise(c,p(u,TM.gold_slice+4.6+i*.4,TM.gold_slice+5+i*.4)));

  const tk=p(u,TM.target,TM.target+.5), tf=p(u,TM.target+2,TM.target+3), ak=p(u,TM.target+2.6,TM.target+3.4);
  $('ten').setAttribute('opacity',(tk*(1-.8*tf)).toFixed(2)); rise($('tg'),tk);
  $('arw').setAttribute('transform','translate('+(500-100*ak).toFixed(1)+' '+(380+100*ak).toFixed(1)+')'); $('arw').setAttribute('opacity',u>=TM.target+2.6?1:0);
  rise($('lev'),p(u,TM.lever,TM.lever+.5)); $('plank').setAttribute('transform','rotate('+(10-20*p(u,TM.lever+1,TM.lever+2.5)).toFixed(2)+' 1260 632)');
  rise($('tog'),p(u,TM.lever+6,TM.lever+6.6));

  const sb=p(u,TM.scoreboard+.8,TM.scoreboard+2.2), pcx=1100-740*sb, pcy=415-15*sb;
  pap2.forEach((r,i)=>{const a=t*1.1+i*2*Math.PI/7, rr=120+20*sb; r.setAttribute('transform','translate('+(pcx+rr*Math.cos(a)).toFixed(1)+' '+(pcy+rr*Math.sin(a)).toFixed(1)+') rotate('+((a*50)%360).toFixed(0)+')')});
  rise($('chart'),p(u,TM.scoreboard,TM.scoreboard+.5)); $('act').style.strokeDashoffset=1-p(u,TM.scoreboard+.6,TM.scoreboard+2.2);
  rise($('team'),p(u,TM.scoreboard+1.5,TM.scoreboard+2)); T4.forEach(h=>h.setAttribute('class',u>=TM.team_glance?'gain':'ink'));
  $('looks').setAttribute('opacity',p(u,TM.team_glance,TM.team_glance+.6)); rise($('win'),p(u,TM.team_glance+.5,TM.team_glance+1));
  rise($('gl'),p(u,TM.team_glance+1,TM.team_glance+1.6));

  rise($('hud'),p(u,TM.huddle,TM.huddle+.5)); rise($('bub'),p(u,TM.speech,TM.speech+.5)); rise($('b2'),p(u,TM.speech+2.5,TM.speech+3));
  rise($('wk'),p(u,TM.small_card,TM.small_card+.5)); rise($('card'),p(u,TM.small_card+1,TM.small_card+1.6));
  rise($('stp'),p(u,TM.stop_sign,TM.stop_sign+.5)); $('stk').setAttribute('x2',(626+504*p(u,TM.stop_sign+.6,TM.stop_sign+1.4)).toFixed(1));
  rise($('oct'),p(u,TM.stop_sign+1,TM.stop_sign+1.5));

  rise($('ppl6'),p(u,TM.checkmarks,TM.checkmarks+.5)); chk.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.checkmarks+.6+i*.25,TM.checkmarks+.9+i*.25)));
  blk.forEach(b=>b[0].setAttribute('opacity',p(u,TM.stack+b[1]*.35,TM.stack+b[1]*.35+.3)));
  rise($('ch6'),p(u,TM.stack+1,TM.stack+1.6));
  $('ld').style.strokeDashoffset=1-p(u,TM.rising_line,TM.rising_line+2); $('lg').style.strokeDashoffset=1-p(u,TM.rising_line+.8,TM.rising_line+2.8);

  orb.forEach((c,i)=>{const a=t*.6+i*Math.PI/4, rr=160+(i%2)*40; c.setAttribute('cx',(480+rr*Math.cos(a)).toFixed(1)); c.setAttribute('cy',(500+rr*Math.sin(a)).toFixed(1))});
  const hk=p(u,TM.habit_loop+.6,TM.habit_loop+2.6), ha=t*.9, ox=480+110*Math.cos(ha), oy=500+110*Math.sin(ha);
  $('beh').setAttribute('transform','translate('+(1190+(ox-1190)*hk).toFixed(1)+' '+(500+(oy-500)*hk-180*Math.sin(Math.PI*hk)).toFixed(1)+')');
  $('nb').setAttribute('opacity',(1-hk).toFixed(2));
  rise($('flg'),p(u,TM.next_flag,TM.next_flag+.6)); rise($('fold'),p(u,TM.next_flag+1.2,TM.next_flag+1.8));

  // closing: big clock with a blocked slice, note card and pencil
  rise($('clk'),p(u,TM.clock,TM.clock+.5));
  const ck=p(u,TM.clock,TM.clock+.5);
  $('hand').setAttribute('opacity',ck); $('hand2').setAttribute('opacity',ck);
  $('hand').setAttribute('transform','rotate('+((t*60)%360).toFixed(1)+' 1200 410)');
  $('hand2').setAttribute('transform','rotate('+((t*5)%360).toFixed(1)+' 1200 410)');
  rise($('slc8'),p(u,TM.clock+.6,TM.clock+1.2));
  rise($('qa'),p(u,TM.clock,TM.clock+.5)); rise($('qb'),p(u,TM.clock+.4,TM.clock+.9));
  rise($('qc'),p(u,TM.clock+4.9,TM.clock+5.4)); rise($('ql'),p(u,TM.clock+5.4,TM.clock+5.9));
  rise($('note'),p(u,TM.clock+4.9,TM.clock+5.4));
  const wr=p(u,TM.clock+5.6,TM.clock+7.4);
  $('scrib').style.strokeDashoffset=(1-wr).toFixed(3);
  const wig=wr>0&&wr<1?4*Math.sin(t*14):0;
  $('pen').setAttribute('transform','translate('+(1050+280*wr).toFixed(1)+' '+(738+wig).toFixed(1)+') rotate(25)');