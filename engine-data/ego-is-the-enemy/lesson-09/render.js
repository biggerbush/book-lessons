const sw=(t*.15)%1; $('swArc').setAttribute('d',arc(1250,430,120,sw)); $('swHand').setAttribute('transform','rotate('+(sw*360).toFixed(1)+' 1250 430)');
  rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5)); rise($('s0b'),p(u,TM.stopwatch+3.8,TM.stopwatch+4.3));

  rise($('room'),p(u,TM.waiting_room,TM.waiting_room+.5)); CW(t*60);
  rise($('door'),p(u,TM.locked_door,TM.locked_door+.5)); TG.forEach((g,i)=>rise(g,p(u,TM.locked_door+i*1.3,TM.locked_door+i*1.3+.4)));
  const lk=TM.locked_door+6.2; rise($('noex'),p(u,lk,lk+.5));
  $('lock').setAttribute('transform','translate('+(u>=lk?5*Math.sin(t*22)*Math.max(0,1-(u-lk)):0).toFixed(1)+' 0)');
  rise($('runL'),p(u,TM.locked_door+10.7,TM.locked_door+11.2));

  rise($('rg'),p(u,TM.robert_greene,TM.robert_greene+.5)); rise($('dead'),p(u,TM.grey_clock,TM.grey_clock+.5)); rise($('alive'),p(u,TM.green_clock,TM.green_clock+.5));
  CD(185+2*Math.sin(t*.5)); CA(t*90);
  rise($('eq'),p(u,TM.green_clock+6.6,TM.green_clock+7.1)); rise($('same'),p(u,TM.green_clock+6.8,TM.green_clock+7.4));

  rise($('face'),p(u,TM.sulking_face,TM.sulking_face+.5)); $('face').setAttribute('transform','translate(0 '+(4*Math.sin(t*2)).toFixed(1)+')');
  BL.forEach((g,i)=>rise(g,p(u,TM.blame_arrow+i*1.3,TM.blame_arrow+i*1.3+.4)));
  const mb=TM.blame_arrow+5; rise($('months'),p(u,mb,mb+.4)); rise($('moL'),p(u,mb,mb+.5));
  MO.forEach((r,i)=>{const k=p(u,mb+.5+i*.3,mb+.8+i*.3); r.setAttribute('fill',k>.5?'var(--loss)':'var(--stage)'); r.setAttribute('opacity',(1-.65*k).toFixed(2))});

  const ins=TM.prison_bars+4.6, iv=p(u,ins,ins+.6);
  rise($('mx'),p(u,TM.malcolm_young,TM.malcolm_young+.5)); $('mx').setAttribute('fill',u>=ins?'var(--gain)':'var(--ink)');
  rise($('bars'),p(u,TM.prison_bars,TM.prison_bars+.5)); $('bars').setAttribute('stroke',u>=ins?'var(--line)':'var(--ink)');
  TL.forEach((l,i)=>l.setAttribute('opacity',(p(u,TM.prison_bars+.3+i*.15,TM.prison_bars+.5+i*.15)*(1-.8*iv)).toFixed(2)));
  rise($('cntL'),p(u,TM.prison_bars+.3,TM.prison_bars+.8));
  rise($('clsrm'),iv); rise($('hb'),iv); rise($('clsL'),iv);

  const cp=p(u,TM.dictionary,TM.dictionary+4.6)*7, li=Math.min(6,Math.floor(cp));
  CP.forEach((l,i)=>l.setAttribute('x2',(410+200*cl(cp-i)).toFixed(1)));
  rise($('dict'),p(u,TM.dictionary,TM.dictionary+.4)); $('pen').setAttribute('transform','translate('+(410+200*cl(cp-li)).toFixed(1)+' '+(306+li*40)+')');
  BK.forEach((g,i)=>rise(g,p(u,TM.book_stack+i*.5,TM.book_stack+i*.5+.4))); rise($('stack'),p(u,TM.book_stack,TM.book_stack+.4));
  rise($('voice'),p(u,TM.book_stack+4.6,TM.book_stack+5.1)); VA.forEach((a,i)=>a.setAttribute('opacity',(.3+.7*Math.max(0,Math.sin(t*3-i))).toFixed(2)));
  rise($('wbw'),p(u,TM.book_stack+5,TM.book_stack+5.6));

  rise($('box'),p(u,TM.setback_box,TM.setback_box+.5)); rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
  $('qm').setAttribute('transform','rotate('+(4*Math.sin(t*1.5)).toFixed(1)+' 560 560)');
  rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); IT.forEach((q,i)=>{const a=TM.notebook+.4+i*2; rise(q[0],p(u,a,a+.4)); q[1].setAttribute('opacity',p(u,a+1,a+1.3))});
  const sg=p(u,TM.seedling,TM.seedling+1.5); rise($('seed'),p(u,TM.seedling,TM.seedling+.4)); $('stem').setAttribute('d','M1330 680V'+(680-200*sg).toFixed(1));
  $('lf1').setAttribute('opacity',p(u,TM.seedling+.7,TM.seedling+1.1)); $('lf2').setAttribute('opacity',p(u,TM.seedling+1.1,TM.seedling+1.5));

  rise($('pl'),p(u,TM.two_hands,TM.two_hands+.5)); rise($('pr'),p(u,TM.two_hands+4.6,TM.two_hands+5.1));
  $('cloud').setAttribute('transform','translate('+(30*Math.sin(t*.7)).toFixed(1)+' 0)');
  rise($('stu'),p(u,TM.student_desk,TM.student_desk+.5)); rise($('ego'),p(u,TM.student_desk+5.4,TM.student_desk+5.9));
  CE(t*240); $('stare').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));

  const s8=SC[8][0]/K; rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+4.5,s8+5)); rise($('qc'),p(u,s8+4.9,s8+5.4)); rise($('fl'),p(u,s8+5.5,s8+6)); CF(t*60);