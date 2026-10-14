rise($('tArr'),p(u,TM.title_q,TM.title_q+.6));
  const tf=p(u,TM.title_q+5,TM.title_q+5.8);
  $('tArrP').setAttribute('transform','rotate('+(180*tf).toFixed(1)+' 1290 477.5)'); $('tArrP').setAttribute('stroke',tf>.5?'var(--gain)':'var(--loss)');

  rise($('wMe'),p(u,TM.person_wish,TM.person_wish+.5)); rise($('wPanel'),p(u,TM.person_wish+5.4,TM.person_wish+6));
  WI.forEach((w,i)=>{const a=TM.wish_list+i*.6; rise(w[0],p(u,a,a+.4)); w[1].setAttribute('x2',(612+w[2]*p(u,TM.storm_cloud+.6+i*.3,TM.storm_cloud+1+i*.3)).toFixed(1))});
  rise($('wStorm'),p(u,TM.storm_cloud,TM.storm_cloud+.5)); $('rain').setAttribute('transform','translate(0 '+((t*90)%40).toFixed(1)+')');
  setC(wMe,u>=TM.storm_cloud?'loss':'ink'); rise($('wLost'),p(u,TM.storm_cloud+.4,TM.storm_cloud+1));

  const s2=SC[2][0]/K;
  rise($('aMe'),p(u,s2+.4,s2+1)); rise($('aLife'),p(u,s2+.7,s2+1.3)); rise($('aArrG'),p(u,s2+1,s2+1.6));
  const af=p(u,TM.arrow_flip+.6,TM.arrow_flip+1.6);
  $('aArr').setAttribute('transform','rotate('+(180*af).toFixed(1)+' 790 470)'); $('aArr').setAttribute('stroke',af>.5?'var(--gain)':'var(--loss)');
  $('aL0').setAttribute('opacity',1-af); $('aL1').setAttribute('opacity',af);
  rise($('spotG'),p(u,TM.spotlight,TM.spotlight+.6)); rise($('sp1'),p(u,TM.spotlight,TM.spotlight+.5)); rise($('sp2'),p(u,TM.spotlight+2.6,TM.spotlight+3.2));
  setC(aMe,u>=TM.spotlight+2.6?'gain':'ink');

  rise($('cWords'),p(u,TM.open_hands,TM.open_hands+.5)); $('cX').setAttribute('opacity',p(u,TM.open_hands+2.5,TM.open_hands+3));
  rise($('cDo'),p(u,TM.footsteps,TM.footsteps+.4));
  FS.forEach((f,i)=>f.setAttribute('opacity',p(u,TM.footsteps+.3+i*.3,TM.footsteps+.6+i*.3)));
  rise($('cResp'),p(u,TM.footsteps+5,TM.footsteps+5.6));
  SI.forEach((g,i)=>rise(g,p(u,TM.footsteps+10.8+i*.4,TM.footsteps+11.2+i*.4))); rise($('cAgain'),p(u,TM.footsteps+10.8,TM.footsteps+11.4));

  rise($('bBoard'),p(u,TM.chess_board,TM.chess_board+.5)); rise($('bChamp'),p(u,TM.champion,TM.champion+.5));
  $('bMove').setAttribute('opacity',p(u,TM.champion+3.8,TM.champion+4.4));
  TG.forEach((g,i)=>rise(g,p(u,TM.champion+3.8+i*.6,TM.champion+4.3+i*.6))); rise($('bEnd'),p(u,TM.champion+5.6,TM.champion+6.2));

  rise($('kClock'),p(u,TM.clock,TM.clock+.5)); hand('kM',110,0,t*1.2); hand('kH',70,0,t*.1);
  rise($('kPpl'),p(u,TM.two_people,TM.two_people+.5)); rise($('kQ'),p(u,TM.question_mark,TM.question_mark+.5));
  const qs=1+.05*Math.sin(t*3); $('kQt').setAttribute('transform','translate(1300 460) scale('+qs.toFixed(3)+') translate(-1300 -460)');
  rise($('kEnd'),p(u,TM.question_mark+.8,TM.question_mark+1.4));

  rise($('gDoc'),p(u,TM.old_doctor,TM.old_doctor+.5)); rise($('gChair'),p(u,TM.empty_chair,TM.empty_chair+.5));
  rise($('gQ1'),p(u,TM.empty_chair+3.4,TM.empty_chair+4)); rise($('gPhoto'),p(u,TM.wife_photo,TM.wife_photo+.5)); rise($('gQ2'),p(u,TM.wife_photo+.4,TM.wife_photo+1));

  rise($('hSh'),p(u,TM.shield,TM.shield+.5)); $('hDrops').setAttribute('opacity',p(u,TM.shield+.4,TM.shield+.9));
  DR.forEach((d,i)=>{const c=(t*.7+i*.25)%1; d.setAttribute('cx',(760-170*c).toFixed(1)); d.setAttribute('opacity',(c>.85?(1-c)/.15:1).toFixed(2))});
  rise($('hPrice'),p(u,TM.shield+4.2,TM.shield+4.8));
  // handshake: two figures reach out, hands meet and shake, then the doctor walks off right
  rise($('hHand'),p(u,TM.handshake,TM.handshake+.4));
  const H=TM.handshake, hs=p(u,H+.2,H+1.2), rel=p(u,H+2.1,H+2.5), ext=hs*(1-rel), wk=p(u,H+2.5,H+4);
  const sh=(hs>=1&&rel<=0)?5*Math.sin(t*9):0;
  $('hArmF').setAttribute('x2',(982+68*ext).toFixed(1)); $('hArmF').setAttribute('y2',(425+sh*ext).toFixed(1));
  $('hArmD').setAttribute('x2',(1118-68*ext).toFixed(1)); $('hArmD').setAttribute('y2',(425+sh*ext).toFixed(1));
  $('hClasp').setAttribute('cy',(425+sh).toFixed(1)); $('hClasp').setAttribute('opacity',ext>.97?1:0);
  const bob=(wk>0&&wk<1)?-4*Math.abs(Math.sin(t*8)):0;
  $('hDocG').setAttribute('transform','translate('+(300*wk).toFixed(1)+' '+bob.toFixed(1)+')');
  $('hMot').setAttribute('opacity',(wk>0&&wk<1)?1:0);
  rise($('hLoss'),p(u,H+4.2,H+4.8)); rise($('hEnd'),p(u,H+8.8,H+9.4));

  // close: swap one question for another
  const S8=SC[8][0]/K;
  rise($('qa'),p(u,S8+.4,S8+.9)); rise($('qOld'),p(u,S8+.8,S8+1.3));
  $('qStrike').setAttribute('x2',(146+376*p(u,S8+1.6,S8+2.2)).toFixed(1));
  const ar=p(u,S8+2.4,S8+3.2); $('qCurve').setAttribute('stroke-dashoffset',(1-ar).toFixed(3)); $('qHead').setAttribute('opacity',ar>=1?1:0);
  rise($('qb'),p(u,S8+2.6,S8+3.1)); rise($('qNew'),p(u,S8+3.2,S8+3.8));
  rise($('qLbl'),p(u,S8+4,S8+4.6));