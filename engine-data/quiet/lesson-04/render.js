const hide=p(u,TM.stage_spot+5.6,TM.stage_spot+6.8);
  lect.setAttribute('transform','translate('+(1200+60*Math.sin(t*2)*(1-hide)+230*hide).toFixed(1)+' '+(445-18*Math.abs(Math.sin(t*4))*(1-hide)).toFixed(1)+')');
  $('cone').setAttribute('opacity',(p(u,TM.stage_spot,TM.stage_spot+.6)*(1-.85*hide)).toFixed(2));
  A0.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*5+i))*(1-hide)).toFixed(1)+')'));
  rise($('stall0'),p(u,TM.stage_spot+5.4,TM.stage_spot+5.9));

  rise($('prof'),p(u,TM.professor,TM.professor+.5)); rise($('audw'),p(u,TM.audience,TM.audience+.5));
  A1.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(-5*Math.abs(Math.sin(t*4+i*.7))).toFixed(1)+')'));
  rise($('award'),p(u,TM.award,TM.award+.5));
  const iv=TM.award+3.7; rise($('intro'),p(u,iv,iv+.5)); $('halo').setAttribute('opacity',p(u,iv,iv+.6)); $('halo').setAttribute('stroke-dashoffset',((t*20)%22).toFixed(1));

  rise($('seed'),p(u,TM.seed,TM.seed+.5)); rise($('arr2'),p(u,TM.stretch_arrow,TM.stretch_arrow+.5));
  const k=p(u,TM.stretch_arrow+.6,TM.stretch_arrow+2.4);
  $('band').setAttribute('cx',(420+300*k).toFixed(1)); $('band').setAttribute('rx',(150+300*k).toFixed(1)); $('band').setAttribute('ry',(150-30*k).toFixed(1));
  me2.setAttribute('transform','translate('+(420+580*k).toFixed(1)+' 0)');
  const f2=TM.stretch_arrow+8.3; rise($('ff1'),p(u,TM.stretch_arrow+5.3,TM.stretch_arrow+5.8)); rise($('ff2'),p(u,f2,f2+.5));
  M2.forEach(e=>e.setAttribute('class',u>=f2?'gain':'ink'));

  rise($('tgt'),p(u,TM.heart_target,TM.heart_target+.5));
  cards.forEach((c,i)=>{const a=TM.family+i*2.2; rise(c[0],p(u,a,a+.5)); c[1].setAttribute('opacity',p(u,a,a+.5))});
  rise($('mic3'),p(u,TM.mic,TM.mic+.5));

  rise($('bat4'),p(u,TM.battery_full,TM.battery_full+.5)); rise($('me4'),p(u,TM.battery_full,TM.battery_full+.5));
  const lv=1-.1*p(u,TM.battery_full+1,TM.battery_low)-.55*p(u,TM.battery_low,TM.battery_low+1.5)-.23*p(u,TM.small_talk,TM.small_talk+1.5);
  $('bfill').setAttribute('width',(512*lv).toFixed(1)); $('bfill').setAttribute('fill',lv>.4?'var(--gain)':'var(--loss)');
  rise($('low4'),p(u,TM.battery_low,TM.battery_low+.5));
  rise($('stim4'),p(u,TM.battery_low+3.8,TM.battery_low+4.3)); $('spk').setAttribute('opacity',(.55+.45*Math.sin(t*6)).toFixed(2));
  rise($('st4'),p(u,TM.small_talk,TM.small_talk+.5)); rise($('drain4'),p(u,TM.small_talk+.6,TM.small_talk+1.1));

  const w=p(u,TM.stall_door+.3,TM.stall_door+2);
  me5.setAttribute('transform','translate('+(760-390*w).toFixed(1)+' 0)'); me5.setAttribute('opacity',p(u,TM.stall_door,TM.stall_door+.4));
  rise($('door5'),p(u,TM.stall_door+1.6,TM.stall_door+2.1)); rise($('away5'),p(u,TM.stall_door+1.8,TM.stall_door+2.3));
  rise($('niche5'),p(u,TM.niche_icon,TM.niche_icon+.5)); rise($('refill5'),p(u,TM.niche_icon+3,TM.niche_icon+3.5));
  const bh=278*(.15+.85*p(u,TM.niche_icon+3.3,TM.niche_icon+5.5)); $('bf5').setAttribute('height',bh.toFixed(1)); $('bf5').setAttribute('y',(624-bh).toFixed(1));

  rise($('pn0'),p(u,TM.reading_chair,TM.reading_chair+.5)); rise($('pn1'),p(u,TM.clock,TM.clock+.5)); rise($('pn2'),p(u,TM.calendar,TM.calendar+.5));
  $('hm').setAttribute('transform','rotate('+((t*60)%360).toFixed(1)+' 800 440)'); $('hh').setAttribute('transform','rotate('+((t*5)%360).toFixed(1)+' 800 440)');
  CAL.forEach((c,i)=>c.setAttribute('fill',i===10&&u>=TM.calendar+.8?'var(--gain)':'var(--line)'));

  const a1=p(u,TM.balance,TM.balance+1),a2=p(u,TM.tired_face,TM.tired_face+1),a3=p(u,TM.plan_note,TM.plan_note+1);
  $('beam').setAttribute('transform','rotate('+(-14+14*a1-16*a2+16*a3).toFixed(2)+' 480 400)');
  $('rec7').setAttribute('opacity',(1-.7*a2+.7*a3).toFixed(2));
  rise($('bal7'),p(u,TM.balance+1.8,TM.balance+2.4)); rise($('face7'),p(u,TM.tired_face,TM.tired_face+.5)); rise($('note7'),p(u,TM.plan_note,TM.plan_note+.5));

  rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.4,TM.question+.9)); rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
  rise($('qg'),p(u,TM.question+1,TM.question+1.5)); rise($('qd'),p(u,TM.question+3.7,TM.question+4.2));