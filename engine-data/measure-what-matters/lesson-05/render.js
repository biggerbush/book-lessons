const S=i=>SC[i][0]/K;
  rise($('foldw'),p(u,TM.dusty_folder,TM.dusty_folder+.5));
  $('fold').setAttribute('transform','translate(0 '+(230*p(u,TM.dusty_folder+2.6,TM.dusty_folder+3.8)).toFixed(1)+')');
  DU.forEach((d,i)=>{d.setAttribute('opacity',(.6*p(u,TM.dusty_folder+3.4+i*.1,TM.dusty_folder+4+i*.1)).toFixed(2));d.setAttribute('transform','translate('+(6*Math.sin(t*.7+i)).toFixed(1)+' '+(-8*Math.abs(Math.sin(t*.5+i*1.7))).toFixed(1)+')')});

  MO.forEach(([g,r],i)=>{rise(g,p(u,S(1)+.3+i*.06,S(1)+.6+i*.06));r.setAttribute('fill-opacity',p(u,TM.calendar+i*.2,TM.calendar+i*.2+.3).toFixed(2))});
  rise($('card'),p(u,TM.drawer,TM.drawer+.5)); rise($('drw'),p(u,TM.drawer+1.6,TM.drawer+2.1));
  $('cardm').setAttribute('transform','translate(0 '+(360*p(u,TM.drawer+2.6,TM.drawer+3.6)).toFixed(1)+')');
  rise($('qq'),p(u,TM.calendar+2.6,TM.calendar+3.1));
  rise($('b1'),p(u,TM.calendar+4.2,TM.calendar+4.8)); rise($('b2'),p(u,TM.calendar+8.4,TM.calendar+9));
  $('prog').setAttribute('x2',(460+900*p(u,TM.calendar+8.8,TM.calendar+10.5)).toFixed(1));

  rise($('duo'),p(u,TM.one_on_one,TM.one_on_one+.5)); rise($('bub2'),p(u,TM.one_on_one+1,TM.one_on_one+1.5));
  rise($('clkw'),p(u,TM.weekly_clock,TM.weekly_clock+.5)); $('hand').setAttribute('transform','rotate('+((t*60)%360).toFixed(1)+' 760 400)');
  rise($('wkl'),p(u,TM.weekly_clock+.4,TM.weekly_clock+.9));
  WK.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.weekly_clock+.5+i*.05,TM.weekly_clock+.8+i*.05)));
  rise($('ann'),p(u,TM.weekly_clock+3.5,TM.weekly_clock+4));
  rise($('q2a'),p(u,TM.weekly_clock+6.9,TM.weekly_clock+7.4)); rise($('q2b'),p(u,TM.weekly_clock+9.5,TM.weekly_clock+10)); rise($('tgt'),p(u,TM.weekly_clock+9.5,TM.weekly_clock+10));
  $('arw').setAttribute('transform','translate('+(1060+240*p(u,TM.weekly_clock+10.2,TM.weekly_clock+11)).toFixed(1)+' 690)'); $('arw').setAttribute('opacity',u>=TM.weekly_clock+10.2?1:0);

  rise($('four'),p(u,S(3)+.5,S(3)+1.1));
  [TM.continue_arrow,TM.pencil,TM.new_seed,TM.stop_sign].forEach((a,i)=>{rise(CD[i],p(u,a,a+.5));rise($('icw'+i),p(u,a+.2,a+.7))});
  $('ic0').setAttribute('transform','translate('+(275+10*Math.sin(t*3)).toFixed(1)+' 400)');
  $('pl').setAttribute('x2',(560+150*p(u,TM.pencil+.6,TM.pencil+1.6)).toFixed(1));
  $('ic2').setAttribute('transform','translate(975 470) scale('+(.2+.8*p(u,TM.new_seed+.3,TM.new_seed+1.5)).toFixed(3)+')');

  rise($('def'),p(u,S(4)+.5,S(4)+1)); $('defx').setAttribute('x2',(112+420*p(u,TM.open_board-2.4,TM.open_board-1.8)).toFixed(1));
  rise($('isnt'),p(u,TM.open_board-2.2,TM.open_board-1.6));
  rise($('board'),p(u,TM.open_board,TM.open_board+.5)); $('bx').setAttribute('x2',(170+530*p(u,TM.open_board+1,TM.open_board+1.6)).toFixed(1));
  rise($('stamp'),p(u,TM.open_board+1.4,TM.open_board+1.8)); rise($('crowd4'),p(u,TM.open_board+2.5,TM.open_board+3));
  rise($('waste'),p(u,TM.wasted_effort,TM.wasted_effort+.5));
  DR.forEach((d,i)=>{const c=(t*1.2+i/5)%1;d.setAttribute('cy',(480+70*c).toFixed(1));d.setAttribute('opacity',u>=TM.wasted_effort+.5?(1-c*.5).toFixed(2):0)});

  const v=p(u,TM.score_scale+.8,TM.score_scale+3.5)-.3*p(u,TM.sweet_spot+.3,TM.sweet_spot+1.5), z=v<1/3?0:v<2/3?1:2, tl=u>=TM.traffic_light;
  rise($('scale'),p(u,TM.score_scale,TM.score_scale+.5)); rise($('mk5w'),p(u,TM.score_scale+.4,TM.score_scale+.9));
  $('mk5').setAttribute('transform','translate('+(340+1100*v).toFixed(1)+' 0)'); $('val').textContent=v.toFixed(1);
  $('mkl').setAttribute('stroke',u>=TM.sweet_spot+1.5?'var(--gain)':'var(--ink)');
  rise($('zones'),p(u,TM.traffic_light,TM.traffic_light+.5)); rise($('tl'),p(u,TM.traffic_light,TM.traffic_light+.5));
  // lamps: lr = low (bottom, indigo), lm = middle (grey), lg = near one (top, amber)
  ['lr','lm','lg'].forEach((id,k)=>$(id).setAttribute('opacity',tl&&k===z?1:.25));
  rise($('sw'),p(u,TM.sweet_spot,TM.sweet_spot+.6));

  rise($('sc6'),p(u,S(6)+.5,S(6)+1)); rise($('pad'),p(u,TM.self_review,TM.self_review+.5));
  NL.forEach((l,i)=>l.setAttribute('x2',(590+(i===3?170:270)*p(u,TM.self_review+.5+i*.5,TM.self_review+1+i*.5)).toFixed(1)));
  rise($('tb'),p(u,TM.thought_bubble,TM.thought_bubble+.5)); rise($('tq1'),p(u,TM.thought_bubble+.3,TM.thought_bubble+.8)); rise($('tq2'),p(u,TM.thought_bubble+2.5,TM.thought_bubble+3));
  const nk=p(u,TM.next_cycle,TM.next_cycle+1); $('nxa').setAttribute('stroke-dasharray',(360*nk).toFixed(0)+' 999'); $('nxh').setAttribute('opacity',nk>.95?1:0);
  rise($('nxc'),p(u,TM.next_cycle+.8,TM.next_cycle+1.3));

  rise($('globe'),p(u,TM.foundation,TM.foundation+.5)); $('mer').setAttribute('rx',(170*Math.abs(Math.cos(t*.6))).toFixed(1));
  rise($('glab'),p(u,TM.foundation+1.5,TM.foundation+2));
  $('lk7').setAttribute('opacity',p(u,TM.progress_bar,TM.progress_bar+.6)); rise($('big7'),p(u,TM.progress_bar+.8,TM.progress_bar+1.4));
  const wk7=u>=TM.progress_bar+4.2;
  BR.forEach((b,i)=>{rise(b.g,p(u,TM.progress_bar+i*.4,TM.progress_bar+i*.4+.4));b.f.setAttribute('width',(800*b.v*p(u,TM.progress_bar+.4+i*.4,TM.progress_bar+1.8+i*.4)).toFixed(1));b.f.setAttribute('fill',wk7?(b.ok?'var(--gain)':'var(--loss)'):'var(--ink)');rise(b.tg,p(u,TM.progress_bar+4.2+i*.2,TM.progress_bar+4.6+i*.2))});

  rise($('q1'),p(u,TM.your_goal,TM.your_goal+.5)); rise($('q2'),p(u,TM.your_goal+3,TM.your_goal+3.5)); rise($('q3'),p(u,TM.your_goal+3.6,TM.your_goal+4.1));
  const hi=u>=TM.your_goal+5.5?Math.floor(t/1.2)%4:-1;
  CP.forEach(([g,r,e],i)=>{rise(g,p(u,TM.your_goal+4+i*.3,TM.your_goal+4.4+i*.3));r.setAttribute('fill',i===hi?'var(--gain)':'var(--stage)');r.setAttribute('stroke',i===hi?'var(--gain)':'var(--ink)');e.style.fill=i===hi?'var(--on-gain)':'var(--ink)'});