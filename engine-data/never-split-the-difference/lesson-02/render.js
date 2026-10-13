const R=(e,a,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,a,a+d));
  R('t0p',TM.speaker);R('t0a',TM.speaker+.8);R('t0b',TM.speaker+3);R('t0c',TM.speaker+7);

  R('m1p',TM.two_people);R('m1a',TM.two_people+.6);
  $('m1w').style.fill=u>=TM.echo_bubble?'var(--gain)':'var(--ink)';
  $('m1arc').setAttribute('opacity',p(u,TM.echo_bubble+1,TM.echo_bubble+1.6));R('m1b',TM.echo_bubble+1.5);
  $('m1q').setAttribute('fill-opacity',p(u,TM.question_mark,TM.question_mark+.4));R('m1qq',TM.question_mark+.2);
  C1.forEach((g,i)=>R(g,TM.question_mark+3.3+i*.6));

  R('w0',TM.magnet);const mg=p(u,TM.magnet+.4,TM.magnet+2);
  $('w0a').setAttribute('transform','translate('+(220+50*mg).toFixed(1)+' 0)');$('w0b').setAttribute('transform','translate('+(440-50*mg).toFixed(1)+' 0)');
  R('w0t',TM.magnet+4.6);
  R('w1',TM.open_door);const od=p(u,TM.open_door+.3,TM.open_door+1.5),dx=(730+140*(1-.75*od)).toFixed(1);
  $('w1d').setAttribute('points',`730,300 ${dx},${310+20*od} ${dx},${530-20*od} 730,540`);R('w1s',TM.open_door+1.2);
  R('w2',TM.hourglass);const hk=1-((t*.2)%1),pk=(536-90*(1-hk)).toFixed(1);
  $('w2t').setAttribute('points',`${1270-56*hk},${420-105*hk} ${1270+56*hk},${420-105*hk} 1270,420`);
  $('w2b').setAttribute('points',`1214,536 1326,536 1270,${pk}`);$('w2s').setAttribute('y2',pk);

  R('c3',TM.waiter);R('t3',TM.waiter);R('q3a',TM.waiter+.6);R('wt3',TM.waiter+1.2);R('q3b',TM.waiter+2);
  R('jars',TM.tip_jar);const jf=p(u,TM.tip_jar+.5,TM.tip_jar+2.5);
  [110,240].forEach((h,i)=>{JF[i].setAttribute('y',(672-h*jf).toFixed(1));JF[i].setAttribute('height',(h*jf).toFixed(1))});
  R('big3',TM.tip_jar+2.5);R('ln3',TM.tip_jar+5.4);

  R('r4r',TM.radio);const rw=p(u,TM.radio+.4,TM.radio+1);W4.forEach((w,i)=>w.setAttribute('opacity',(rw*(.25+.75*(Math.sin(t*1.6-i)*.5+.5))).toFixed(2)));
  R('r4m',TM.moon);C4.forEach((g,i)=>R(g,TM.moon+.8+i*.6));
  R('r4lb',TM.down_arrow);$('r4l').style.strokeDashoffset=1-p(u,TM.down_arrow+.3,TM.down_arrow+2.5);
  $('r4h').setAttribute('opacity',p(u,TM.down_arrow+2.4,TM.down_arrow+2.7));R('r4s',TM.down_arrow+1);R('r4k',TM.down_arrow+4.6);

  R('d5a',TM.office_desk);R('d5d',TM.office_desk+.3);R('b5',TM.boss);R('b5q',TM.boss+.7);
  SH.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.paper_stack+i*.08,TM.paper_stack+i*.08+.3)));
  R('d5h',TM.paper_stack+1);R('d5n',TM.paper_stack+2.5);

  R('f6',TM.calm_face);R('f6q',TM.calm_face+.8);R('f6s',TM.calm_face+4.2);
  D6.forEach((c,i)=>c.setAttribute('fill',u>=TM.calm_face+4.4+i*.4?'var(--gain)':'var(--line)'));
  R('b6',SC[6][0]/K+.5);R('b6q',TM.speech_bubble);[0,1,2].forEach(i=>$('s6l'+i).setAttribute('opacity',p(u,TM.speech_bubble+.5+i*.5,TM.speech_bubble+.9+i*.5)));
  R('h6',TM.handshake);R('h6t',TM.handshake+1.2);

  R('k7s',SC[7][0]/K+.3);R('k0',TM.microphone);R('k1',TM.sorry_card);R('k2',TM.stopwatch);R('k3',TM.stopwatch+5);R('k4',TM.stopwatch+5.4);
  // stopwatch: counts 1..4 once over four seconds, then holds on 4 with a full dial
  const sw=cl(lin(u,TM.stopwatch+.5,TM.stopwatch+4.5)),an=sw*2*Math.PI;
  let kd='M976 390';
  if(sw>=.999)kd='M976 326A64 64 0 1 1 976 454A64 64 0 1 1 976 326Z';
  else if(sw>0)kd=`M976 390V326A64 64 0 ${sw>.5?1:0} 1 ${(976+64*Math.sin(an)).toFixed(1)} ${(390-64*Math.cos(an)).toFixed(1)}Z`;
  $('k2a').setAttribute('d',kd);
  $('k2n').textContent=sw>=.999?'4':String(Math.min(4,Math.floor(sw*4)+1));

  // closing scene
  const q0=SC[8][0]/K;R('z0',q0+.3);R('z1',q0+.7);R('z2',q0+1.1);R('z3',q0+3.8);
  R('z5',q0+.6);R('z6',q0+1.4);R('z7',q0+2.2);R('z8',q0+2.8);R('z4',q0+3.2);R('z9',q0+4.4);
  const cs=q0+3.4,on=u>=cs,cc=on?(u-cs)%6:0,cn=on?Math.min(4,Math.floor(cc)+1):0,cf=on?Math.min(1,cc/4):0,ca=cf*2*Math.PI;
  let zd='M1210 536';
  if(cf>=.999)zd='M1210 486A50 50 0 1 1 1210 586A50 50 0 1 1 1210 486Z';
  else if(cf>0)zd=`M1210 536V486A50 50 0 ${cf>.5?1:0} 1 ${(1210+50*Math.sin(ca)).toFixed(1)} ${(536-50*Math.cos(ca)).toFixed(1)}Z`;
  $('z8a').setAttribute('d',zd);$('z8n').textContent=on?String(cn):'';
  Z4.forEach((z,i)=>{const lit=i<cn;z[0].setAttribute('fill',lit?'var(--gain)':'var(--stage)');z[1].style.fill=lit?'var(--on-gain)':'var(--ink)'});