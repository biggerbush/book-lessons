const g0=p(u,TM.inbox_glow,TM.inbox_glow+.8);
  $('glow').setAttribute('opacity',(g0*(.18+.08*Math.sin(t*2))).toFixed(3));
  ENV.forEach((e,i)=>{const k=p(u,TM.inbox_glow+.3+i*.5,TM.inbox_glow+.9+i*.5);e.setAttribute('transform','translate(0 '+(-260*(1-k)).toFixed(1)+')');e.setAttribute('opacity',k)});
  rise($('badge'),g0);$('cnt').textContent=Math.round(50*p(u,TM.inbox_glow,TM.inbox_glow+3));
  rise($('nothing'),p(u,TM.inbox_glow+5,TM.inbox_glow+5.6));

  rise($('line1'),p(u,TM.assembly_line,TM.assembly_line+.6));
  CARS.forEach((c,i)=>{const x=190+((t*90+i*205)%820);c.setAttribute('transform','translate('+x.toFixed(1)+' 586)');c.setAttribute('opacity',cl(Math.min((x-190)/60,(1010-x)/60)).toFixed(2))});
  rise($('watch'),p(u,TM.stopwatch,TM.stopwatch+.5));$('hand').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 1300 390)');
  rise($('tally'),p(u,TM.car_tally,TM.car_tally+.5));
  MK.forEach((m,i)=>m.setAttribute('opacity',p(u,TM.car_tally+.4+i*.25,TM.car_tally+.6+i*.25)));

  rise($('dru'),p(u,TM.drucker,TM.drucker+.5));rise($('wk'),p(u,TM.desk_worker,TM.desk_worker+.5));
  CHP.forEach((c,i)=>{const a=TM.desk_worker+.8+i*.7;rise(c,p(u,a,a+.4))});
  rise($('hard'),p(u,TM.desk_worker+5.4,TM.desk_worker+6));

  rise($('jug'),p(u,TM.juggler,TM.juggler+.5));
  BL.forEach((b,i)=>{const a=t*2+i*Math.PI*2/5,s=TM.juggler+.3+i*.3;b.setAttribute('cx',(460+160*Math.cos(a)).toFixed(1));b.setAttribute('cy',(330+80*Math.sin(a)).toFixed(1));b.setAttribute('opacity',p(u,s,s+.3))});
  rise($('qbox'),p(u,TM.question_mark,TM.question_mark+.5));$('qm').setAttribute('transform','rotate('+(6*Math.sin(t*2)).toFixed(1)+' 1140 520)');
  rise($('agree'),p(u,TM.question_mark+6.5,TM.question_mark+7.1));

  DK.forEach((d,i)=>{const a=TM.open_office+i*.4;rise(d,p(u,a,a+.5))});
  SG.forEach((s,i)=>{const a=TM.busy_signals+i*1.2;rise(s,p(u,a,a+.5))});
  rise($('pseudo'),p(u,TM.busy_signals+5.7,TM.busy_signals+6.3));

  rise($('phone'),p(u,TM.smartphone,TM.smartphone+.5));
  NT.forEach((n,i)=>{const a=TM.smartphone+.6+i*.6;rise(n,p(u,a,a+.4))});
  rise($('chatL'),p(u,TM.chat_bubbles,TM.chat_bubbles+.5));
  CB.forEach((c,i)=>{const a=TM.chat_bubbles+.4+i*.7;rise(c,p(u,a,a+.4))});
  rise($('vidL'),p(u,TM.video_grid,TM.video_grid+.5));
  VT.forEach((v,i)=>{const a=TM.video_grid+i*.15;rise(v,p(u,a,a+.4))});
  rise($('proof'),p(u,TM.video_grid+3,TM.video_grid+3.6));

  rise($('pc'),p(u,TM.checkmark,TM.checkmark+.5));
  CK.forEach((c,i)=>{const a=TM.checkmark+.5+i*.4;rise(c,p(u,a,a+.3))});
  rise($('pcal'),p(u,TM.full_calendar,TM.full_calendar+.5));
  CAL.forEach((r,i)=>r.setAttribute('fill',u>=TM.full_calendar+.3+i*.06?'var(--loss)':'var(--line)'));
  rise($('bars'),p(u,TM.stalled_bar,TM.stalled_bar+.5));
  BR.forEach((b,i)=>b.setAttribute('width',(36+(18+i*8)*p(u,TM.stalled_bar+.6,TM.stalled_bar+3)+3*Math.abs(Math.sin(t*1.5+i))).toFixed(1)));

  rise($('pad'),p(u,TM.notepad,TM.notepad+.6));
  rise($('colL'),p(u,TM.two_columns,TM.two_columns+.5));rise($('colR'),p(u,TM.two_columns+1.2,TM.two_columns+1.7));
  const jd=p(u,TM.two_columns+6.2,TM.two_columns+6.8);$('colLw').setAttribute('opacity',(1-.6*jd).toFixed(2));rise($('judge'),jd);

  rise($('qa'),p(u,TM.question_card,TM.question_card+.5));rise($('qb'),p(u,TM.question_card+.4,TM.question_card+.9));rise($('qc'),p(u,TM.question_card+.8,TM.question_card+1.3));
  rise($('card'),p(u,TM.question_card+1.4,TM.question_card+2));rise($('wd'),p(u,TM.question_card+5.4,TM.question_card+6));
  QB.forEach((c,i)=>{const a=TM.question_card+5.8+i*.5;c.setAttribute('opacity',p(u,a,a+.3))});