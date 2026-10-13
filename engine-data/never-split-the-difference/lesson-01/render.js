const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  const bt=1+.07*Math.pow(Math.abs(Math.sin(t*3)),6), A0=TM.title_brain+3.8;
  h0.setAttribute('transform','translate(1250 410) scale('+((.45+.15*p(u,A0,A0+.8))*bt).toFixed(3)+')');
  rise($('arg0'),p(u,TM.title_brain,TM.title_brain+.5)*(1-.7*p(u,A0,A0+.6))); R('fbi0',A0);

  R('bk1',TM.harvard_book); R('gty',TM.getting_to_yes); R('sep',TM.getting_to_yes+.5);
  const sp=p(u,TM.getting_to_yes+2,TM.getting_to_yes+3.5);
  $('sepP').setAttribute('transform','translate('+(-40*sp).toFixed(1)+' 0)'); $('sepQ').setAttribute('transform','translate('+(40*sp).toFixed(1)+' 0)');
  R('calc',TM.calculator); R('miss1',TM.calculator+4.2,.6);

  R('k2',TM.kahneman); R('f2',TM.fast_animal); R('s2r',TM.slow_thinker);
  const a2=TM.slow_thinker+3; R('bl2',a2,.4);
  $('bar1').setAttribute('width',(560*p(u,a2+.3,a2+1)).toFixed(1)); $('bar2').setAttribute('width',(560*p(u,a2+1.5,a2+3.5)).toFixed(1));
  R('sum2',a2+.5,.6);

  R('scan3',TM.neuro_scan);
  R('stk3',TM.stuck_person); R('spot3',TM.stuck_person+.4); R('ch3',TM.stuck_person+5);
  $('stkP').setAttribute('transform','translate('+(u>=TM.stuck_person+5?30*Math.sin(t*2.5):0).toFixed(1)+' 0)');
  R('sc3',TM.scale_heart); R('ht3',TM.scale_heart+.4,.4);
  const th=-.21*p(u,TM.scale_heart+.8,TM.scale_heart+1.6), cs=Math.cos(th), sn=Math.sin(th);
  const xL=1250-160*cs, yL=330-160*sn, xR=1250+160*cs, yR=330+160*sn;
  $('beam').setAttribute('x1',xL.toFixed(1)); $('beam').setAttribute('y1',yL.toFixed(1)); $('beam').setAttribute('x2',xR.toFixed(1)); $('beam').setAttribute('y2',yR.toFixed(1));
  $('panL').setAttribute('transform','translate('+xL.toFixed(1)+' '+yL.toFixed(1)+')'); $('panR').setAttribute('transform','translate('+xR.toFixed(1)+' '+yR.toFixed(1)+')');

  R('cls4',TM.classroom); R('stu4',TM.student_group); R('vos4',TM.fbi_agent);
  const a4=TM.fbi_agent+7; R('win4',a4,.4);
  BR.forEach((b,i)=>{const k=p(u,a4+i*.4,a4+i*.4+.5);[0,1].forEach(j=>{const h=b[2][j]*k;b[j].setAttribute('y',(620-h).toFixed(1));b[j].setAttribute('height',h.toFixed(1))})});
  R('sum4',a4+.5,.6);

  R('you5',TM.arrow_wall); R('them5',TM.arrow_wall);
  const ao=p(u,TM.arrow_wall,TM.arrow_wall+.4)*(1-p(u,TM.open_ear,TM.open_ear+.4));
  AR.forEach((a,i)=>{const ph=(t*.7+i*.27)%1;a.setAttribute('transform','translate('+(300+380*ph).toFixed(1)+' '+(400+i*40)+')');a.setAttribute('opacity',(ao*Math.min(1,(1-ph)*6)).toFixed(2))});
  const wh=260*cl(p(u,TM.arrow_wall+.3,TM.arrow_wall+1.2)-p(u,TM.open_ear,TM.open_ear+.8));
  $('wall5').setAttribute('y',(640-wh).toFixed(1)); $('wall5').setAttribute('height',wh.toFixed(1));
  R('ear5',TM.open_ear+.3); R('tb5',TM.thought_bubble); R('sum5',TM.thought_bubble+2,.6);

  R('ppl6',TM.empathy_link); R('und6',TM.two_chairs); R('shw6',TM.two_chairs+2.5);
  const a6=TM.two_chairs+4.9; R('not6',a6);
  $('st0').setAttribute('x2',(1010+440*p(u,a6+.6,a6+1.1)).toFixed(1)); $('st1').setAttribute('x2',(1010+440*p(u,a6+1.2,a6+1.7)).toFixed(1));
  R('key6',TM.key_lock);
  $('kg6').setAttribute('transform','translate('+(960+140*p(u,TM.key_lock+.6,TM.key_lock+1.6)).toFixed(1)+' 620)');
  $('shk6').setAttribute('transform','translate(0 '+(-26*p(u,TM.key_lock+1.7,TM.key_lock+2.2)).toFixed(1)+')');
  R('yes6',TM.key_lock+2.2); R('sum6',TM.key_lock+2.8,.6);

  R('cal7',TM.calendar); HL.setAttribute('opacity',(.6+.4*Math.abs(Math.sin(t*2))).toFixed(2));
  const ak=p(u,TM.calendar+2.5,TM.calendar+3.5);
  rise($('args7'),p(u,TM.calendar+.4,TM.calendar+.9)*(1-.65*ak)); $('argsI').setAttribute('transform','translate(0 '+(200*ak).toFixed(1)+')');
  const nc=TM.note_card; R('note7',nc);
  $('sq0').setAttribute('stroke-dashoffset',(1-p(u,nc+1,nc+3)).toFixed(3)); R('nt2',nc+2.5);
  $('sq1').setAttribute('stroke-dashoffset',(1-p(u,nc+3.5,nc+5.5)).toFixed(3)); R('go7',nc+7);

  R('qa',TM.final_question); R('qb',TM.final_question+.4); R('qc',TM.final_question+.8); R('hb8',TM.final_question+1.4);
  h8.setAttribute('transform','translate(1380 690) scale('+(.4*bt).toFixed(3)+')');