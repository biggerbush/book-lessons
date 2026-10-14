const tb=TM.tired_brain, lv=1-.88*p(u,tb+.5,tb+3);
  $('bat').setAttribute('width',(268*lv).toFixed(1)); $('bat').style.fill=lv<.5?'var(--loss)':'var(--ink)';
  $('bat').setAttribute('opacity',lv<.2?(.65+.35*Math.sin(t*4)).toFixed(2):1);
  rise($('moon'),p(u,tb,tb+.6)); rise($('dumb'),p(u,tb+4.2,tb+4.8));
  $('grow').setAttribute('transform','translate(0 '+(u>=tb+4.2?(-4*Math.abs(Math.sin(t*2))).toFixed(1):0)+')');

  rise($('pA'),p(u,TM.cookies,TM.cookies+.5)); rise($('pB'),p(u,TM.radishes,TM.radishes+.5)); rise($('pz'),p(u,TM.puzzle,TM.puzzle+.5));
  ST.concat(ST2).forEach((s,i)=>s.setAttribute('opacity',(.45+.4*Math.sin(t*2+i)).toFixed(2)));
  $('barA').setAttribute('width',(1000*p(u,TM.puzzle+.5,TM.puzzle+5)).toFixed(1)); $('barB').setAttribute('width',(380*p(u,TM.puzzle+.5,TM.puzzle+2.3)).toFixed(1));
  rise($('gup'),p(u,TM.puzzle+2.5,TM.puzzle+2.9)); rise($('drn'),p(u,TM.puzzle+2.8,TM.puzzle+3.4));

  const ma=TM.muscle_arm, gs=TM.gym_shoes;
  SW.forEach(([e,L],i)=>{const k=i?p(u,ma+4.2,ma+6.5):p(u,ma+.3,ma+1.5); e.setAttribute('stroke-dashoffset',(L*(1-k)).toFixed(1))});
  rise($('lab1'),p(u,ma+.6,ma+1.1)); rise($('lab2'),p(u,ma+4.2,ma+4.7)); rise($('sp'),p(u,gs,gs+.5));
  AR.forEach((c,i)=>c.setAttribute('class',u>=gs+1.5+i*.6?'gain':'ink'));
  RP.forEach((c,i)=>{const f=(t*.5+i/3)%1; c.setAttribute('r',(64+160*f).toFixed(1)); c.setAttribute('opacity',u>=gs?(1-f).toFixed(2):0)});
  rise($('ks'),p(u,gs+6.6,gs+7.2));

  rise($('t0'),p(u,TM.travis,TM.travis+.5)); $('tf0').setAttribute('transform','translate('+(u<TM.manager_badge?3*Math.sin(t*25):0).toFixed(1)+' 0)');
  rise($('a0'),p(u,TM.apron,TM.apron+.4)); rise($('t1'),p(u,TM.apron+.2,TM.apron+.7));
  rise($('a1'),p(u,TM.manager_badge,TM.manager_badge+.4)); rise($('t2'),p(u,TM.manager_badge+.2,TM.manager_badge+.7));

  rise($('ang'),p(u,TM.angry_cust,TM.angry_cust+.5)); $('cust').setAttribute('transform','translate('+(4*Math.sin(t*22)).toFixed(1)+' 0)');
  QP.forEach((g,i)=>{const a=TM.long_line+i*.3; rise(g,p(u,a,a+.4))});
  const gl=1-.4*p(u,TM.angry_cust+.5,TM.angry_cust+2)-.45*p(u,TM.long_line+.5,TM.long_line+3), gh=376*gl;
  $('gf').setAttribute('height',gh.toFixed(1)); $('gf').setAttribute('y',(638-gh).toFixed(1)); $('gf').style.fill=gl>.5?'var(--gain)':'var(--loss)';
  rise($('stop'),p(u,TM.long_line+5.8,TM.long_line+6.4));

  const wk=TM.workbook; rise($('wb'),p(u,wk,wk+.5));
  WL.forEach(([e,x,w],i)=>{const a=wk+(i<5?.4+i*.3:1.9+(i-5)*.3); e.setAttribute('x2',(x+w*p(u,a,a+.4)).toFixed(1))});
  rise($('inf'),p(u,wk+5.4,wk+5.9)); rise($('fl'),p(u,TM.speech_bubble,TM.speech_bubble+.5)); rise($('nd'),p(u,TM.speech_bubble+4.2,TM.speech_bubble+4.7));

  rise($('cup'),p(u,TM.latte_cup,TM.latte_cup+.5));
  LR.forEach((g,i)=>{const a=TM.five_steps+i*1.5; rise(g,p(u,a,a+.4))}); rise($('lt'),p(u,TM.five_steps+7.8,TM.five_steps+8.3));

  const rl=TM.role_play; rise($('rp'),p(u,rl,rl+.5)); rise($('lp'),p(u,rl+.3,rl+.8));
  BB.forEach((b,i)=>b.setAttribute('opacity',u>=rl?(Math.floor(t*1.2)%2===i?1:.15):0));
  $('lpa').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 390 670)');
  RD.forEach((c,i)=>c.setAttribute('fill',u>=rl+.5+i*.45?'var(--gain)':'var(--line)'));
  rise($('ck'),p(u,TM.checkmark,TM.checkmark+.5)); rise($('fin'),p(u,TM.checkmark+4.2,TM.checkmark+4.8));

  const ca=TM.calendar, pn=TM.pen_note;
  rise($('qa'),p(u,ca,ca+.5)); rise($('qb'),p(u,ca+.4,ca+.9)); rise($('cal'),p(u,ca+.8,ca+1.3));
  CG[6].setAttribute('fill',u>=ca+1.3?'var(--loss)':'var(--line)'); CG[6].setAttribute('opacity',u>=ca+1.3?(.6+.4*Math.sin(t*4)).toFixed(2):1);
  rise($('qc'),p(u,pn,pn+.5)); rise($('pn'),p(u,pn+.3,pn+.8)); rise($('lbl'),p(u,pn+.6,pn+1.1));
  NL.forEach(([e,w],i)=>{const a=pn+.8+i*.4; e.setAttribute('x2',(1350+w*p(u,a,a+.4)).toFixed(1))});