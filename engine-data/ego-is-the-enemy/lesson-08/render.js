const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('mansion',TM.rich_host,.6); CS.forEach((g,i)=>rise(g,p(u,TM.rich_host+.6+i*.3,TM.rich_host+1+i*.3)));
  R('guest',TM.rich_host+5.6); $('glow').setAttribute('r',(44+3*Math.sin(t*3)).toFixed(1));

  R('party',TM.two_writers); R('writers',TM.two_writers+.4); R('host',TM.two_writers+3);
  BL.forEach((b,i)=>b.setAttribute('opacity',(.6+.4*Math.sin(t*3+i)).toFixed(2)));
  R('bars',TM.money_pile); $('bar2').setAttribute('width',(10+950*p(u,TM.money_pile+.6,TM.money_pile+3)).toFixed(0));

  R('heller',TM.speech_bubble-.6); R('host2',TM.speech_bubble-.3); R('bub',TM.speech_bubble);
  // typing dots: bottom-right corner of the bubble, gone before the quote appears
  const dIn=p(u,TM.speech_bubble+.3,TM.speech_bubble+.6), dOut=p(u,TM.speech_bubble+1.2,TM.speech_bubble+1.5);
  $('dots').setAttribute('opacity',(u>=TM.speech_bubble+1.5?0:dIn*(1-dOut)*(.6+.4*Math.abs(Math.sin(t*4)))).toFixed(2));
  R('btxt',TM.speech_bubble+1.5); R('sign',TM.enough_sign);

  R('lad',TM.ladder);
  const cy=800-360*p(u,TM.next_rung,TM.next_rung+9);
  RG.forEach((r,i)=>{r.setAttribute('opacity',p(u,TM.ladder+.3+i*.1,TM.ladder+.6+i*.1));r.style.stroke=800-60*i>=cy-1&&u>=TM.next_rung?'var(--gain)':'var(--ink)'});
  $('climb').setAttribute('transform','translate(0 '+cy.toFixed(1)+')'); $('climb').setAttribute('opacity',p(u,TM.ladder+1,TM.ladder+1.5));
  $('flag').setAttribute('transform','translate(0 '+(540-210*p(u,TM.next_rung+.5,TM.next_rung+9.5)).toFixed(1)+')'); $('flag').setAttribute('opacity',p(u,TM.ladder+1.5,TM.ladder+2));
  [0,1,2].forEach(i=>R('w'+i,TM.next_rung+6.2+i*.6)); R('restless',TM.next_rung+8.4);

  R('you4',TM.neighbor); R('them4',TM.neighbor+.6);
  $('eye').setAttribute('opacity',(p(u,TM.neighbor+1,TM.neighbor+1.6)*(1-p(u,TM.scale,TM.scale+.5))).toFixed(2));
  R('scl',TM.scale);
  const an=12*p(u,TM.scale+1,TM.scale+2.5), ar=an*Math.PI/180, cx=360*Math.cos(ar), sy=360*Math.sin(ar);
  $('beam').setAttribute('transform','translate(800 300) rotate('+an.toFixed(2)+')');
  $('panL').setAttribute('transform','translate('+(800-cx).toFixed(1)+' '+(300-sy).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(800+cx).toFixed(1)+' '+(300+sy).toFixed(1)+')');
  R('goals',TM.scale+7);

  R('sen',TM.seneca); R('word',TM.greek_word); R('wsub',TM.greek_word+.8);
  R('comp',TM.compass); R('roads',TM.compass+.8); R('racers',TM.compass+.8); R('own',TM.compass+3);
  RC.forEach((c,i)=>{const s=(t*.35+i*.27)%1;c.setAttribute('cx',(760+(RE[i][0]-760)*s).toFixed(1));c.setAttribute('cy',(850+(RE[i][1]-850)*s).toFixed(1))});
  const wb=1-p(u,TM.compass+.6,TM.compass+3);
  $('needle').setAttribute('transform','translate(1260 500) rotate('+(30+70*wb*Math.sin(t*5)).toFixed(1)+')');

  R('book',TM.notebook); VG.forEach((g,i)=>rise(g,p(u,TM.notebook+4.2+i*.8,TM.notebook+4.7+i*.8)));
  R('ph',TM.crossed_list);
  PZ.forEach(([g,l],i)=>{const a=TM.crossed_list+i*.5;rise(g,p(u,a,a+.4));l.setAttribute('x2',(750+280*p(u,a+1.6,a+2.1)).toFixed(0))});
  R('no6',TM.crossed_list+3.6);

  R('track',TM.finish_line); R('fin',TM.finish_line+3.4);
  $('walker').setAttribute('transform','translate('+(200+640*p(u,TM.finish_line+5.5,TM.finish_line+9)).toFixed(1)+' 0)');
  $('walker').setAttribute('opacity',p(u,TM.finish_line+.5,TM.finish_line+1));
  R('s7t',TM.finish_line+5.5); R('faceg',TM.calm_face);

  R('qa',TM.blank_page); R('qb',TM.blank_page+.4); R('qc',TM.blank_page+.8); R('page',TM.blank_page+1.2);
  PL.forEach((l,i)=>l.setAttribute('x2',(1210+(i===4?100:180)*p(u,TM.blank_page+1.6+i*.5,TM.blank_page+2.1+i*.5)).toFixed(0)));
  R('rd',TM.blank_page+4.6);