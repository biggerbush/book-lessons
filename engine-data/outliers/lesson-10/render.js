rise($('beam0'),p(u,TM.school_door,TM.school_door+.8)); door($('leaf0'),1240,550,120,170,p(u,TM.school_door,TM.school_door+1.4));
  KID.setAttribute('transform','translate(1300 '+(610+138*p(u,TM.school_door+5,TM.school_door+6.5)).toFixed(1)+')');

  rise($('grid'),p(u,TM.puzzle,TM.puzzle+.5)); rise($('bulb'),p(u,TM.puzzle+.8,TM.puzzle+1.4));
  PZ.forEach((q,i)=>{const a=i<3?TM.pieces+i*1.2:TM.lightbulb+1,k=p(u,a,a+.7);q[0].setAttribute('transform','translate('+(q[1]*(1-k)).toFixed(1)+' '+(q[2]*(1-k)).toFixed(1)+')');q[0].setAttribute('opacity',k)});
  const lb=p(u,TM.lightbulb,TM.lightbulb+.6); $('glow').setAttribute('opacity',lb); $('rays').setAttribute('opacity',(lb*(.7+.3*Math.sin(t*4))).toFixed(2));
  rise($('t1a'),p(u,TM.lightbulb+.4,TM.lightbulb+1)); rise($('t1b'),p(u,TM.lightbulb+2.5,TM.lightbulb+3.1));

  rise($('bldg'),p(u,TM.bronx_street,TM.bronx_street+.6)); rise($('school'),p(u,TM.bronx_street+1,TM.bronx_street+1.6));
  rise($('kipp'),p(u,TM.kipp_sign,TM.kipp_sign+.5)); rise($('drum'),p(u,TM.lottery_drum,TM.lottery_drum+.5));
  BL.forEach((b,i)=>{const a=i*.7+t*1.5*(i%2?1:-1),rr=30+(i%3)*24;b.setAttribute('cx',(1330+rr*Math.cos(a)).toFixed(1));b.setAttribute('cy',(420+rr*Math.sin(a)).toFixed(1))});
  KD.forEach((k,i)=>rise(k,p(u,TM.lottery_drum+1+i*.3,TM.lottery_drum+1.4+i*.3))); rise($('lotl'),p(u,TM.lottery_drum+3,TM.lottery_drum+3.5));

  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); rise($('bands'),p(u,TM.calendar+.6,TM.calendar+1.1)); rise($('axes3'),p(u,TM.calendar+1,TM.calendar+1.5));
  rise($('kids3'),p(u,TM.two_kids,TM.two_kids+.5));
  const X=540+200*p(u,TM.two_kids+.5,TM.two_kids+2.5)+700*p(u,TM.gap_bars,TM.gap_bars+4);
  $('lr').setAttribute('points',trace(GR,X)); $('lp').setAttribute('points',trace(GP,X));
  const ln=u>=TM.two_kids+.5?1:0; $('lr').setAttribute('opacity',ln); $('lp').setAttribute('opacity',ln);
  GB.forEach((g,i)=>g.setAttribute('opacity',X>=GX[2+i*2]-1?1:0)); rise($('gapl'),p(u,TM.gap_bars+4,TM.gap_bars+4.6));

  const s4=SC[4][0]/K; rise($('face'),p(u,s4+.3,s4+.9));
  const ck=p(u,TM.clock,TM.clock+3),sp=287.5*ck,a0=pt(222.5,160),a1=pt(222.5+sp,160);
  $('arc').setAttribute('d',sp<.5?'':'M'+a0[0].toFixed(1)+' '+a0[1].toFixed(1)+'A160 160 0 '+(sp>180?1:0)+' 1 '+a1[0].toFixed(1)+' '+a1[1].toFixed(1));
  const hr=7+25/60+(17-7-25/60)*ck,h1=pt(hr*30,95),h2=pt((hr%1)*360,140);
  $('hh').setAttribute('x2',h1[0].toFixed(1)); $('hh').setAttribute('y2',h1[1].toFixed(1)); $('mh').setAttribute('x2',h2[0].toFixed(1)); $('mh').setAttribute('y2',h2[1].toFixed(1));
  rise($('week'),p(u,TM.clock,TM.clock+.5));
  WK.forEach((w,i)=>{const on=i<5?u>=TM.clock+.6+i*.25:i==5&&u>=TM.saturday;w[0].setAttribute('fill',on?'var(--gain)':'var(--stage)');w[1].style.fill=on?'var(--on-gain)':'var(--ink)'});
  rise($('satl'),p(u,TM.saturday,TM.saturday+.5)); rise($('summer'),p(u,TM.sun_icon,TM.sun_icon+.5));
  SW.forEach((r,i)=>r.setAttribute('fill',i<3&&u>=TM.sun_icon+.6+i*.3?'var(--gain)':'var(--stage)'));
  $('sunr').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 1390 560)'); rise($('t4'),p(u,TM.sun_icon+2.5,TM.sun_icon+3.1));

  rise($('girl'),p(u,TM.girl_marita,TM.girl_marita+.5)); rise($('alarm'),p(u,TM.alarm_clock,TM.alarm_clock+.3));
  const sh=u>=TM.alarm_clock&&u<TM.alarm_clock+2?8*Math.sin(t*40):0; $('alarm').setAttribute('transform','rotate('+sh.toFixed(1)+' 400 300)');
  rise($('dayb'),p(u,TM.alarm_clock,TM.alarm_clock+.5));
  $('segS').setAttribute('width',(479*p(u,TM.alarm_clock+1.5,TM.alarm_clock+3)).toFixed(1)); rise($('schl'),p(u,TM.alarm_clock+2,TM.alarm_clock+2.5));
  $('segH').setAttribute('width',(250*p(u,TM.homework,TM.homework+1.5)).toFixed(1)); rise($('hwl'),p(u,TM.homework+1,TM.homework+1.5));
  const bg=TM.homework+5.4; rise($('bal'),p(u,bg,bg+.5));
  const ta=.16*p(u,bg+1,bg+2.5),c=250*Math.cos(ta),s=250*Math.sin(ta),BY=540;
  $('beamL').setAttribute('x1',(1010-c).toFixed(1)); $('beamL').setAttribute('y1',(BY-s).toFixed(1)); $('beamL').setAttribute('x2',(1010+c).toFixed(1)); $('beamL').setAttribute('y2',(BY+s).toFixed(1));
  PL.setAttribute('transform','translate('+(1010-c).toFixed(1)+' '+(BY-s).toFixed(1)+')'); PR.setAttribute('transform','translate('+(1010+c).toFixed(1)+' '+(BY+s).toFixed(1)+')');

  rise($('chart'),p(u,TM.math_chart,TM.math_chart+.5));
  const hp=160*p(u,TM.math_chart+.3,TM.math_chart+1),hk=380*p(u,TM.math_chart+.8,TM.math_chart+2.6);
  $('barP').setAttribute('y',700-hp); $('barP').setAttribute('height',hp); $('barK').setAttribute('y',700-hk); $('barK').setAttribute('height',hk);
  rise($('stairs'),p(u,TM.grad_cap,TM.grad_cap+.5));
  const gk=2*p(u,TM.grad_cap+.6,TM.grad_cap+3.6),gi=Math.min(1,Math.floor(gk)),gf=gk-gi;
  $('cap').setAttribute('transform','translate('+(790+220*gk).toFixed(1)+' '+(490-100*gk-50*Math.sin(Math.PI*gf)).toFixed(1)+')');
  rise($('rare'),p(u,TM.grad_cap+5,TM.grad_cap+5.5)); $('rs').setAttribute('x2',(676+370*p(u,TM.grad_cap+6,TM.grad_cap+6.6)).toFixed(1));
  CHP.forEach((g,i)=>rise(g,p(u,TM.grad_cap+7.6+i*.7,TM.grad_cap+8.1+i*.7)));

  const sp7=p(u,TM.ripple+.5,TM.ripple+4.5);
  PP.forEach((q,i)=>{rise(q[0],p(u,TM.open_door+i*.03,TM.open_door+.4+i*.03));const on=(RARE.includes(i)&&u>=TM.open_door+3)||(u>=TM.ripple+.5&&sp7>q[1]/1.2);q[0].setAttribute('class',on?'gain':'ink')});
  door($('leaf7'),750,410,100,190,p(u,TM.ripple,TM.ripple+1));
  RP.forEach((e,j)=>{const on=u>=TM.ripple+.3,k=on?((u-TM.ripple)*.45+j/3)%1:0;e.setAttribute('rx',(40+600*k).toFixed(1));e.setAttribute('ry',(20+240*k).toFixed(1));e.setAttribute('opacity',on?(1-k).toFixed(2):0)});
  rise($('build7'),p(u,TM.ripple+1.5,TM.ripple+2.1));

  const s8=SC[8][0]/K; rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+.7,s8+1.2)); rise($('qc'),p(u,s8+1.1,s8+1.6));
  rise($('pick'),p(u,s8+5,s8+5.5)); rise($('p8'),p(u,s8+5,s8+5.5)); door($('leaf8'),1320,600,120,180,p(u,s8+5.5,s8+6.7));