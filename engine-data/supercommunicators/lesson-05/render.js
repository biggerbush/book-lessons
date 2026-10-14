const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('tEar',TM.hook_ear); draw($('tLoop'),p(u,TM.hook_ear+.3,TM.hook_ear+2));
  $('tHead').setAttribute('opacity',p(u,TM.hook_ear+1.8,TM.hook_ear+2.1));
  $('tRing').setAttribute('transform','rotate('+(8*Math.sin(t*.9)).toFixed(2)+' 1340 400)');
  [0,1,2].forEach(i=>R('td'+i,TM.hook_ear+4.2+i*.3,.3));

  R('p1L',TM.two_people); R('p1R',TM.two_people+.3);
  const kb=p(u,TM.two_people+.6,TM.two_people+1.1);
  rise($('b1L'),kb*(1-p(u,TM.thought_bubble,TM.thought_bubble+.4))); rise($('b1R'),kb);
  R('g1',TM.thought_bubble+.2); R('q1',TM.thought_bubble+1.5); R('sh1',TM.shield); R('c1',TM.shield+.4);

  R('sd0',TM.gun_debate); R('sd1',TM.gun_debate+.4); R('tb2',TM.gun_debate);
  const L2=TM.split_table+4.6;
  rise($('spl'),p(u,TM.split_table,TM.split_table+.5)*(1-p(u,L2,L2+.4)));
  draw($('lp2'),p(u,L2,L2+1.5));
  const a2=t*1.2; $('dot2').setAttribute('cx',(800+330*Math.cos(a2)).toFixed(1)); $('dot2').setAttribute('cy',(360+70*Math.sin(a2)).toFixed(1));
  $('dot2').setAttribute('opacity',p(u,L2+1.5,L2+1.8)); R('c2',L2+.4);

  R('st0',TM.question_mark); R('ar3a',TM.open_door-.3); R('st1',TM.open_door); R('ar3b',TM.ear-.3); R('st2',TM.ear);
  $('wav3').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*2.5))).toFixed(2));

  R('p4L',TM.mirror); R('b4L',TM.mirror+.3); R('mir4',TM.mirror+.6); R('p4R',TM.mirror+.9); R('b4R',TM.mirror+1.2);
  const S4=TM.mirror+4.2;
  $('cp4').setAttribute('opacity',1-p(u,S4,S4+.5)); R('sm4',S4+.3); R('c4a',S4); R('ht4',TM.heart_icon); R('c4b',TM.heart_icon+.3);

  const s5=SC[5][0]/K+.3; rise(ND[0][0],p(u,s5,s5+.5)); rise(ND[1][0],p(u,s5+.3,s5+.8)); rise(ND[2][0],p(u,TM.checkmark,TM.checkmark+.5));
  ND[2][1].setAttribute('stroke',u>=TM.checkmark?'var(--gain)':'var(--ink)');
  R('chk5',TM.checkmark+.3); draw($('ring5'),p(u,TM.loop_arrow,TM.loop_arrow+1.5)); R('lp5',TM.loop_arrow+.4);
  const a5=-Math.PI/2+t*1.1; $('dot5').setAttribute('cx',(560+210*Math.cos(a5)).toFixed(1)); $('dot5').setAttribute('cy',(500+210*Math.sin(a5)).toFixed(1));
  $('dot5').setAttribute('opacity',p(u,TM.loop_arrow+1.5,TM.loop_arrow+1.8));
  R('gift5',TM.gift_box); R('gf5',TM.gift_box+.3);
  const E5=TM.gift_box+5.8; $('ring5').setAttribute('stroke',u>=E5?'var(--gain)':'var(--muted)'); R('end5',E5);

  const a6=-10+20*p(u,TM.scale+.3,TM.scale+1.3)+.8*Math.sin(t*1.5), r6=a6*Math.PI/180, cx6=360*Math.cos(r6), sy6=360*Math.sin(r6);
  $('bm6').setAttribute('transform','rotate('+a6.toFixed(2)+' 800 330)');
  $('pan0').setAttribute('transform','translate('+(800-cx6).toFixed(1)+' '+(330-sy6).toFixed(1)+')'); $('pan0').setAttribute('opacity',p(u,TM.handshake,TM.handshake+.5));
  $('pan1').setAttribute('transform','translate('+(800+cx6).toFixed(1)+' '+(330+sy6).toFixed(1)+')'); $('pan1').setAttribute('opacity',p(u,TM.scale,TM.scale+.5));
  R('x6',TM.handshake+1); R('eye6',TM.eye_icon); R('c6',TM.eye_icon+5);

  R('p7a',TM.gun_owner); R('bb7a',TM.gun_owner+.3); R('th7',TM.gun_owner+.5);
  R('p7b',TM.speech_loop); R('ar7',TM.speech_loop+.2); R('bb7b',TM.speech_loop+.5);
  const h7=380-300*p(u,TM.thermometer,TM.thermometer+2), col7=u>=TM.thermometer+1?'var(--gain)':'var(--loss)';
  $('thf').setAttribute('y',(720-h7).toFixed(1)); $('thf').setAttribute('height',h7.toFixed(1)); $('thf').style.fill=col7; $('thb').style.fill=col7;
  R('c7',TM.thermometer+.3); R('ill7',TM.thermometer+4.6);

  R('qa',TM.target); R('qb',TM.target+.4); R('qc',TM.target+.8); R('tg8',TM.target+1);
  const k8=p(u,TM.target+1.4,TM.target+2.2);
  $('ar8').setAttribute('transform','translate('+(1390-70*k8).toFixed(1)+' '+(450+110*k8).toFixed(1)+')'); $('ar8').setAttribute('opacity',p(u,TM.target+1.3,TM.target+1.5));
  R('n8',TM.target+5);