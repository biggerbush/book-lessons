const A=(id,c,d)=>rv(u,id,c,d);
  $('aim0').setAttribute('transform','rotate('+(t*12).toFixed(1)+' 1290 400)'); $('aim0').setAttribute('opacity',p(t,.1,.9));
  A('nob0',TM.hook_no+.4,.6);

  A('sales1',TM.salesman); $('push1').setAttribute('opacity',p(u,TM.salesman+.6,TM.salesman+1.2));
  CV.forEach((c,i)=>{const k=(t*90+i*90)%270; c.setAttribute('transform','translate('+(600+k).toFixed(1)+' 500)'); c.setAttribute('opacity',Math.min(1,k/40,(270-k)/40).toFixed(2))});
  A('you1',TM.salesman+.8); A('arms1',TM.crossed_arms); A('fake1',TM.fake_yes); A('stamp1',TM.fake_yes+1.6,.3); A('stop1',TM.fake_yes+3.2,.6);

  A('shield2',TM.shield); A('wheel2',TM.steering);
  $('wh2').setAttribute('transform','rotate('+(25*Math.sin(t*1.2)).toFixed(1)+' 800 480)');
  A('door2g',TM.open_door,.4); const dk=1-.65*p(u,TM.open_door+.4,TM.open_door+1.4);
  $('leaf2').setAttribute('transform','translate(1160 0) scale('+dk.toFixed(3)+' 1) translate(-1160 0)');
  A('start2',TM.open_door+4.6,.6);

  A('hd3',TM.question_box); rise(R3[0],p(u,TM.two_cards,TM.two_cards+.5)); rise(R3[1],p(u,TM.two_cards+7.4,TM.two_cards+7.9));

  A('silent4',TM.silent_phone); DT.forEach((d,i)=>d.setAttribute('opacity',(.3+.7*Math.max(0,Math.sin(t*4-i))).toFixed(2)));
  A('email4',TM.email); $('em4').setAttribute('transform','translate('+(-160*(1-p(u,TM.email,TM.email+.8))).toFixed(1)+' 0)');
  const ar=p(u,TM.reply_arrow,TM.reply_arrow+.8); $('arr4').setAttribute('stroke-dashoffset',(500*(1-ar)).toFixed(1)); $('arr4').setAttribute('opacity',ar>0?1:0);
  $('arrh4').setAttribute('opacity',p(u,TM.reply_arrow+.7,TM.reply_arrow+.9));
  A('rep4',TM.reply_arrow+.7); A('quick4',TM.reply_arrow+3,.6);

  A('goal5',TM.summary_card); A('sp5',TM.speech_bubble);
  const lit=u>=TM.lightbulb; $('bulb5').setAttribute('fill',lit?'var(--gain)':'var(--stage)');
  $('rays5').setAttribute('opacity',lit?(.6+.4*Math.sin(t*5)).toFixed(2):0);
  A('tr5',TM.lightbulb+.6); A('see5',TM.lightbulb+2,.6);

  A('thumb6',TM.thumbs_up); $('th6').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*3))).toFixed(1)+')');
  A('ex6',TM.exit_sign); $('arr6').setAttribute('stroke-dashoffset',(-(t*40)%36).toFixed(1));
  A('no6',TM.exit_sign+6.2,.6);

  A('camp7',TM.jungle_camp); A('scr7g',TM.scroll,.4);
  const h=420*p(u,TM.scroll,TM.scroll+2.5); $('pap7').setAttribute('height',h.toFixed(1)); $('rod7').setAttribute('y',(240+h).toFixed(1));
  LN.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.scroll+(i+1)*.28,TM.scroll+(i+1)*.28+.2)));
  A('tw7',TM.two_words); A('ran7',TM.two_words+2,.6);
  $('rx7').setAttribute('stroke-dashoffset',(160*(1-p(u,TM.two_words+2.6,TM.two_words+3.2))).toFixed(1));

  A('qa8',TM.your_turn); A('qb8',TM.your_turn+.4); A('nb8',TM.your_turn+.8);
  A('qc8',TM.ears); A('ear8',TM.ears+.4);
  WV.forEach((w,i)=>w.setAttribute('opacity',u>=TM.ears?(.3+.7*Math.max(0,Math.sin(t*3-i*.8))).toFixed(2):0));