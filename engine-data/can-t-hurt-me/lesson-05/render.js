const rp=p(u,TM.runner,TM.runner+3),sw=(rp>0&&rp<1)?Math.sin(t*9):0,hg=rp>=1?16:0;
  RL.setAttribute('d','M0 -147L0 -62M0 -62L'+(12*sw).toFixed(1)+' -32L'+(30*sw+hg*.5).toFixed(1)+' 0M0 -62L'+(-12*sw).toFixed(1)+' -32L'+(-30*sw-hg*.5).toFixed(1)+' 0M0 -128L'+(-26*sw-hg).toFixed(1)+' -84M0 -128L'+(26*sw+hg).toFixed(1)+' -84');
  R0.setAttribute('transform','translate('+(1000+150*rp).toFixed(1)+' '+(700+(rp>=1?3*Math.sin(t*3):0)).toFixed(1)+')');
  rise($('run0'),p(u,TM.runner,TM.runner+.4)); rise($('mind0'),p(u,TM.runner+3,TM.runner+3.5)); rise($('gap0'),p(u,TM.runner+4.6,TM.runner+5.2));

  rise($('tp'),p(u,TM.tired_person,TM.tired_person+.5));
  $('tpb').setAttribute('transform','translate('+(u>=TM.tired_person?3*Math.sin(t*40):0).toFixed(1)+' 0)');
  SWD.forEach((d,i)=>{const c=(t*.8+i/2)%1;d.setAttribute('transform','translate('+[266,394][i]+' '+(410+60*c).toFixed(1)+')');d.setAttribute('opacity',(1-c).toFixed(2))});
  rise($('bub'),p(u,TM.speech_bubble,TM.speech_bubble+.5)); rise($('gog'),p(u,TM.goggins,TM.goggins+.5));
  $('stk1').setAttribute('x2',(584+410*p(u,TM.goggins+.6,TM.goggins+1.2)).toFixed(1)); $('stk1').setAttribute('opacity',u>=TM.goggins+.6?1:0);
  rise($('lie'),p(u,TM.goggins+1,TM.goggins+1.6));

  rise($('gg'),p(u,TM.fuel_gauge,TM.fuel_gauge+.5));
  const fp=.4*p(u,TM.forty_mark,TM.forty_mark+1.6),gp=p(u,TM.sixty_left,TM.sixty_left+1.4);
  $('ua').setAttribute('d',ARC(560,640,300,0,fp)); $('ga').setAttribute('d',ARC(560,640,300,.4,.4+.6*gp));
  NEED($('ndl'),560,640,250,fp+(fp>0?.01*Math.sin(t*5):0));
  rise($('fm'),p(u,TM.forty_mark+1.4,TM.forty_mark+1.9)); rise($('t40'),p(u,TM.forty_mark,TM.forty_mark+.5)); $('n40').textContent=Math.round(100*fp)+'%';
  rise($('t60'),p(u,TM.sixty_left,TM.sixty_left+.5)); $('n60').textContent=Math.round(60*gp)+'%';

  [TM.car,TM.brain,TM.brake_pedal].forEach((a,i)=>rise($('pc'+i),p(u,a,a+.5)));
  NEED($('cn'),330,400,72,.55*p(u,TM.car+.4,TM.car+1.4)-.02*Math.abs(Math.sin(t*7)));
  NEED($('bn'),800,470,46,.25+.02*Math.sin(t*2));
  $('ped').setAttribute('transform','rotate('+(14*p(u,TM.brake_pedal+.6,TM.brake_pedal+1)).toFixed(1)+' 1220 280)');
  rise($('early'),p(u,TM.brake_pedal+1.2,TM.brake_pedal+1.8));

  rise($('clk'),p(u,TM.race_clock,TM.race_clock+.5)); $('hand').setAttribute('transform','rotate('+((t*40)%360).toFixed(1)+' 330 460)');
  rise($('db'),p(u,TM.dumbbells,TM.dumbbells+.5)); $('dbb').setAttribute('transform','translate(0 '+(-20*Math.abs(Math.sin(t*2))).toFixed(1)+')');
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  CC.forEach((c,i)=>c.setAttribute('fill',i>=24&&u>=TM.calendar+.6+(i-24)*.3?(i===27?'var(--loss)':'var(--gain)'):'var(--line)'));

  // runner stops ~40px before the finish pole (x=1440) so the two never intersect
  const s5=SC[5][0]/K,pr=.45*p(u,s5,TM.aching_feet)+.25*p(u,TM.aching_feet,TM.finish_line)+.3*p(u,TM.finish_line,TM.finish_line+4),dn=pr>=.999;
  $('r5').setAttribute('transform','translate('+(160+1240*pr).toFixed(1)+' '+(-6*Math.abs(Math.sin(t*5))).toFixed(1)+')'); $('r5').setAttribute('fill',dn?'var(--gain)':'var(--ink)');
  [0,1,2].forEach(i=>{const a=TM.aching_feet+i*.9;rise($('pm'+i),p(u,a,a+.4))});
  rise($('beg'),p(u,TM.aching_feet+5.2,TM.aching_feet+5.8)); rise($('fin'),p(u,TM.finish_line,TM.finish_line+.5));
  $('mi').textContent=Math.round(100*pr)+' miles'; $('mi').style.fill=dn?'var(--gain)':'var(--ink)';

  rise($('bulb'),p(u,TM.light_bulb,TM.light_bulb+.5)); const on=u>=TM.light_bulb+.8;
  $('bulbC').style.fill=on?'var(--gain)':'var(--stage)'; $('rays').setAttribute('opacity',on?(.7+.3*Math.sin(t*6)).toFixed(2):0);
  rise($('flag'),p(u,TM.signal_flag,TM.signal_flag+.5));
  let fd='M744 310',fb='';for(let x=0;x<=180;x+=20){const w=8*Math.sin(x/30-t*4)*(x/180);fd+='L'+(744+x)+' '+(310+w).toFixed(1);fb='L'+(744+x)+' '+(420+w).toFixed(1)+fb}
  $('flp').setAttribute('d',fd+fb+'Z');
  B6.forEach((b,i)=>{const a=TM.rising_arrow+i*.4;rise(b,p(u,a,a+.4))});
  rise($('arr6'),p(u,TM.rising_arrow+2,TM.rising_arrow+2.5)); rise($('lb6'),p(u,TM.rising_arrow+.4,TM.rising_arrow+.9));

  rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5)); $('swh').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 290 500)');
  rise($('r70'),p(u,TM.stopwatch+.8,TM.stopwatch+1.3)); rise($('ps0'),p(u,TM.plus_step,TM.plus_step+.5));
  const g1=p(u,TM.growing_bar,TM.growing_bar+1.2),g2=p(u,TM.growing_bar+1.4,TM.growing_bar+2.6);
  rise($('row1'),p(u,TM.growing_bar,TM.growing_bar+.4)); $('b1').setAttribute('width',(430+100*g1).toFixed(1)); $('p1').setAttribute('x',(1050+100*g1).toFixed(1));
  rise($('row2'),p(u,TM.growing_bar+1.4,TM.growing_bar+1.8)); $('b2').setAttribute('width',(430+200*g2).toFixed(1)); $('p2').setAttribute('x',(1050+200*g2).toFixed(1));
  rise($('nm'),p(u,TM.growing_bar+2.6,TM.growing_bar+3.2));

  rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('lb8'),p(u,TM.question_mark+.3,TM.question_mark+.8)); rise($('g8'),p(u,TM.question_mark+.3,TM.question_mark+.8));
  const q8=.4*p(u,TM.question_mark+.8,TM.question_mark+2); $('ua8').setAttribute('d',ARC(1200,760,90,0,q8)); NEED($('n8'),1200,760,70,q8);
  rise($('qa'),p(u,TM.question_mark+5.2,TM.question_mark+5.7)); rise($('qb'),p(u,TM.question_mark+5.6,TM.question_mark+6.1)); rise($('qc'),p(u,TM.question_mark+6,TM.question_mark+6.5));