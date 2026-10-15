const R=(id,a,d)=>rise($(id),p(u,a,a+(d||.5)));
  const hk=p(u,TM.title_card+4.2,TM.title_card+5.2),hx=1295+115*hk,hy=640-80*hk-70*Math.sin(Math.PI*hk);
  $('thop').setAttribute('transform','translate('+hx.toFixed(1)+' '+hy.toFixed(1)+')');
  const on3=hk>.95;$('tb3').style.fill=on3?'var(--gain)':'var(--stage)';$('tb3').style.stroke=on3?'var(--gain)':'var(--loss)';

  R('pA',TM.problem_box);R('pB',TM.swap_arrows+1);R('pC',TM.swap_arrows+3);R('lad',TM.ladder);
  const lk=5*p(u,TM.ladder+.8,TM.ladder+4.2);$('clb').setAttribute('transform','translate(1100 '+(650-80*lk).toFixed(1)+')');
  LB.forEach((b,i)=>b.style.fill=lk>=i+.5?'var(--gain)':'var(--stage)');
  R('l1n',TM.ladder+4.5);R('l1w',TM.ladder+9);

  R('gP',TM.runner);R('gC',TM.runner+2.5);R('b1',TM.alarm_clock);R('b2',TM.treadmill);R('b3',TM.treadmill+2.5);R('gN',TM.treadmill+5);R('gProg',TM.treadmill+8.4);
  $('gFig').style.fill=u>=TM.treadmill+8.4?'var(--gain)':'var(--loss)';
  const ring=u>=TM.alarm_clock&&u<TM.alarm_clock+1.5;$('alm').setAttribute('transform','rotate('+(ring?8*Math.sin(t*40):0).toFixed(1)+' 920 290)');
  $('belt').setAttribute('stroke-dashoffset',(-(t*40)%20).toFixed(1));

  R('hF',TM.smiling_face);R('hQ',TM.quote_banner);R('hP',TM.puzzle);
  const pk=p(u,TM.puzzle+.3,TM.puzzle+1.5);$('pc4').setAttribute('transform','translate('+(400*(1-pk)).toFixed(1)+' 0)');
  const sm=p(u,TM.puzzle+1.5,TM.puzzle+2.3);$('smile').setAttribute('d','M270 545Q330 '+(545+70*sm).toFixed(1)+' 390 545');
  $('hC').setAttribute('stroke-dashoffset',(270*(1-sm)).toFixed(1));R('hS',TM.puzzle+4.1);

  R('qM',TM.question_mark);R('qQ',TM.question_mark+.3);R('qI',TM.question_mark+3.7);
  $('qL').setAttribute('opacity',(1-.35*p(u,TM.scales,TM.scales+.8)).toFixed(2));R('qS',TM.scales);
  const ba=.2*p(u,TM.scales+.8,TM.scales+1.8),bc=230*Math.cos(ba),bs=230*Math.sin(ba);
  const bm=$('beam');bm.setAttribute('x1',(1150-bc).toFixed(1));bm.setAttribute('y1',(300-bs).toFixed(1));bm.setAttribute('x2',(1150+bc).toFixed(1));bm.setAttribute('y2',(300+bs).toFixed(1));
  $('panL').setAttribute('transform','translate('+(1150-bc).toFixed(1)+' '+(300-bs).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1150+bc).toFixed(1)+' '+(300+bs).toFixed(1)+')');
  R('qT',TM.scales+.6);R('qT2',TM.scales+5.4);

  R('rG',TM.guitar);R('rC',TM.stage_crowd);$('crowdW').setAttribute('transform','translate(0 '+(5*Math.sin(t*7)).toFixed(1)+')');
  R('rE',TM.empty_room);R('rL',TM.empty_room+4.6);R('rV',TM.empty_room+7.9);

  R('mG',TM.mountain);R('cL',TM.climber);
  const ck=p(u,TM.climber,TM.climber+4.5),cp=along(ck);
  $('clm').setAttribute('transform','translate('+cp[0].toFixed(1)+' '+cp[1].toFixed(1)+')');
  $('trail').setAttribute('stroke-dashoffset',(TL*(1-ck)).toFixed(1));R('mD',TM.climber+5.3);

  R('nB',TM.notebook);R('cA',TM.calendar);R('bG',TM.calendar+.8);R('bB',TM.calendar+3.7);R('oY',TM.calendar+6.7);R('oN',TM.calendar+10.1);

  R('q1',TM.spotlight);R('q2',TM.spotlight+.4);R('q3',TM.spotlight+.8);R('spt',TM.spotlight+1.2);R('q4',TM.spotlight+4.6);
  $('cone').setAttribute('fill-opacity',(.22+.06*Math.sin(t*3)).toFixed(2));