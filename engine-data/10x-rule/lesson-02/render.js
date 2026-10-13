const g0=.22+.78*p(u,TM.small_target+4.6,TM.small_target+5.6);
  $('tt0').setAttribute('transform','translate(1330 270) scale('+(g0*(1+.02*Math.sin(t*2))).toFixed(3)+')');
  $('tt0').setAttribute('opacity',p(u,TM.small_target,TM.small_target+.5));
  rise($('tx0'),p(u,TM.small_target+4.6,TM.small_target+5.2));

  rise($('chair'),p(u,TM.comfy_chair,TM.comfy_chair+.5));
  rise($('cb'),p(u,TM.comfy_chair+4.2,TM.comfy_chair+4.7));
  rise($('yawn'),p(u,TM.yawn_face,TM.yawn_face+.5));
  const yw=Math.max(0,Math.sin(t*1.2)); $('mouth').setAttribute('ry',(8+26*yw*yw).toFixed(1));
  $('zz').setAttribute('transform','translate(0 '+(-10*Math.sin(t*1.5)).toFixed(1)+')');
  rise($('bed'),p(u,TM.yawn_face+3.7,TM.yawn_face+4.2));

  rise($('st2w'),p(u,TM.times_ten,TM.times_ten+.5));
  rise($('mul'),p(u,TM.times_ten+4.2,TM.times_ten+4.7));
  const bs=p(u,TM.times_ten+4.6,TM.times_ten+5.8);
  $('bt2').setAttribute('transform','translate(860 520) scale('+(.23+.77*bs).toFixed(3)+')'); $('bt2').setAttribute('opacity',bs>0?1:0);
  rise($('bt2l'),bs);
  const rk=p(u,TM.rocket,TM.rocket+1.6);
  $('rk').setAttribute('transform','translate(1320 '+(700-250*rk+6*Math.sin(t*3)).toFixed(1)+')'); $('rk').setAttribute('opacity',cl(rk*4));
  $('flm').setAttribute('transform','scale(1 '+(1+.3*Math.sin(t*20)).toFixed(2)+')');
  rise($('crazy'),p(u,TM.rocket+.8,TM.rocket+1.3));

  rise($('sp'),p(u,TM.salesperson,TM.salesperson+.5));
  rise($('c10'),p(u,TM.number_ten,TM.number_ten+.5));
  D10.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.number_ten+.3+i*.08,TM.number_ten+.5+i*.08)));
  rise($('c100'),p(u,TM.number_100,TM.number_100+.5));
  const n=Math.round(100*p(u,TM.number_100+.3,TM.number_100+2.3)); $('n100').textContent=n;
  D100.forEach((d,i)=>d.setAttribute('opacity',i<n?1:0));

  rise($('op'),p(u,TM.old_phone,TM.old_phone+.5));
  rise($('t100'),p(u,TM.old_phone+.3,TM.old_phone+.8)); rise($('ceil'),p(u,TM.old_phone+.6,TM.old_phone+1.1));
  const gr=p(u,TM.old_phone+.5,TM.old_phone+5);
  OB.forEach((b,i)=>{const h=Math.min(240,100+i*25+gr*160);b.setAttribute('y',760-h);b.setAttribute('height',h);b.setAttribute('class',h>=240?'loss':'ink');b.setAttribute('opacity',p(u,TM.old_phone+i*.1,TM.old_phone+.4+i*.1))});
  rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5));
  const lit=u>=TM.lightbulb+.6; $('bulbc').style.fill=lit?'var(--gain)':'var(--stage)'; $('rays').setAttribute('opacity',lit?(.6+.4*Math.sin(t*4)).toFixed(2):0);
  rise($('qq0'),p(u,TM.lightbulb+1,TM.lightbulb+1.5)); rise($('qq1'),p(u,TM.lightbulb+2,TM.lightbulb+2.5));
  rise($('think'),p(u,TM.lightbulb+5.4,TM.lightbulb+5.9));

  rise($('brdw'),p(u,TM.target_board,TM.target_board+.5));
  rise($('r100'),p(u,TM.target_board+.4,TM.target_board+.9)); rise($('r10'),p(u,TM.target_board+.8,TM.target_board+1.3));
  const ar=p(u,TM.arrow_miss,TM.arrow_miss+.7);
  $('arw').setAttribute('transform','translate('+(330+180*ar).toFixed(1)+' '+(280+120*ar).toFixed(1)+')'); $('arw').setAttribute('opacity',cl(ar*3));
  rise($('r50'),p(u,TM.arrow_miss+.6,TM.arrow_miss+1.1));
  const f=p(u,TM.number_50,TM.number_50+1.5);
  $('b50').setAttribute('width',(300*f).toFixed(1)); $('n50').setAttribute('x',(780+300*f).toFixed(1)); $('n50').textContent=Math.round(50*f);
  rise($('five'),p(u,TM.number_50+1.5,TM.number_50+2)); rise($('beats'),p(u,TM.number_50+3.8,TM.number_50+4.4));

  rise($('batA'),p(u,TM.battery,TM.battery+.5));
  CA.forEach((c,i)=>c.setAttribute('fill',u>=TM.battery+.6+i*.35?'var(--gain)':'var(--line)'));
  rise($('clkw'),p(u,TM.alarm_clock,TM.alarm_clock+.5));
  const rg=u>=TM.alarm_clock+.5;
  $('clk').setAttribute('transform','rotate('+(rg?4*Math.sin(t*30):0).toFixed(2)+' 1120 470)'); $('ring').setAttribute('opacity',rg?1:0);
  rise($('batB'),p(u,TM.alarm_clock+4.9,TM.alarm_clock+5.4)); rise($('push'),p(u,TM.alarm_clock+5.2,TM.alarm_clock+5.7));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
  SQ.forEach((s,i)=>s.setAttribute('stroke-dashoffset',(1-p(u,TM.notebook+.8+i*1.2,TM.notebook+1.8+i*1.2)).toFixed(3)));
  NT.forEach((g,i)=>rise(g,p(u,TM.ten_x_note+i*.5,TM.ten_x_note+.4+i*.5)));
  rise($('ask'),p(u,TM.ten_x_note+3.8,TM.ten_x_note+4.3));
  rise($('wk'),p(u,TM.ten_x_note+8,TM.ten_x_note+8.5));
  WB.forEach((b,i)=>b.setAttribute('fill',u>=TM.ten_x_note+8.6+i*.25?'var(--gain)':'var(--stage)'));

  rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
  rise($('mirw'),p(u,TM.mirror+.6,TM.mirror+1.1));
  const mg=p(u,TM.mirror+3.8,TM.mirror+4.8);
  $('mp').setAttribute('transform','translate(1300 470) scale('+(1+.6*mg).toFixed(3)+')'); $('mp').style.fill=mg>0?'var(--gain)':'var(--ink)';
  rise($('ml'),p(u,TM.mirror+3.8,TM.mirror+4.3)); rise($('mx'),p(u,TM.mirror+4.4,TM.mirror+4.9));