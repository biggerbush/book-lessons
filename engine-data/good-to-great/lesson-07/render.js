const S=i=>SC[i][0]/K;
  rot(w0,t*25);
  rise($('my0'),p(u,TM.headline+.4,TM.headline+1)); rise($('re0'),p(u,TM.headline+5,TM.headline+5.5));
  $('rc0').setAttribute('stroke-dashoffset',(1-p(u,TM.headline+5,TM.headline+7)).toFixed(3));

  rise($('w1g'),p(u,TM.flywheel,TM.flywheel+.6)); rise($('pu1'),p(u,TM.pusher,TM.pusher+.5)); rise($('pan1'),p(u,TM.pusher,TM.pusher+.5));
  rot(w1,3*p(u,TM.pusher+.5,TM.pusher+3)+357*p(u,TM.pusher+5.4,TM.pusher+9));
  const full=u>=TM.pusher+9; $('tc1').textContent=full?'1':'0'; $('st1').textContent=full?'ONE FULL TURN':'BARELY ONE INCH';

  const s2=S(2); rot(w2,20*Math.pow(Math.max(0,u-s2),2));
  B2.forEach((b,i)=>{const a=TM.turn_counter+i*1.5,k=p(u,a,a+.8); b[0].setAttribute('height',(b[2]*k).toFixed(1)); b[0].setAttribute('y',(680-b[2]*k).toFixed(1)); rise(b[1],k)});
  const np=TM.turn_counter+6.2; D2.forEach((d,i)=>rise(d,p(u,np+i*.15,np+i*.15+.3))); rise($('np2'),p(u,np,np+.5));
  $('sp2').setAttribute('opacity',p(u,TM.speed_lines,TM.speed_lines+.6)); $('sp2').setAttribute('transform','rotate('+(t*120%360).toFixed(1)+' 400 490)');
  rise($('bt2'),p(u,TM.speed_lines+5.7,TM.speed_lines+6.3));

  rise($('mic3'),p(u,TM.microphone,TM.microphone+.5)); rise($('ld3'),p(u,TM.microphone+.4,TM.microphone+.9));
  rise($('sh3'),p(u,TM.shrug,TM.shrug+.5)); rise($('cal3'),p(u,TM.calendar,TM.calendar+.5));
  C3.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.calendar+i*.03,TM.calendar+i*.03+.3)));
  rise($('cn3'),p(u,TM.calendar+.8,TM.calendar+1.3)); rise($('lt3'),p(u,TM.calendar+3.5,TM.calendar+4));

  const s4=S(4); rise($('mg4'),p(u,s4+.6,s4+1.1)); $('st4').setAttribute('opacity',p(u,s4+1.6,s4+2));
  rise($('ch4'),p(u,TM.results_chart,TM.results_chart+.5));
  S4.forEach((b,i)=>{const a=TM.results_chart+.4+i*.4,k=p(u,a,a+.5); b[0].setAttribute('height',(b[1]*k).toFixed(1)); b[0].setAttribute('y',(740-b[1]*k).toFixed(1))});
  rise($('w4g'),p(u,s4+.6,s4+1.2)); rot(w4,30*(u-s4)+40*Math.pow(Math.max(0,u-TM.team_cheer),2));
  T4.forEach((q,i)=>{const a=TM.team_cheer+i*.2; rise(q[0],p(u,a,a+.4)); const bob=u>=TM.team_cheer+1?8*Math.abs(Math.sin(t*5+i)):0; q[1].setAttribute('transform','translate(0 '+(-bob).toFixed(1)+')')});

  rise($('co5'),p(u,TM.comparison_co,TM.comparison_co+.5));
  $('zz5').setAttribute('stroke-dashoffset',(1-p(u,TM.zigzag,TM.zigzag+3)).toFixed(3));
  Z5.forEach((g,i)=>{const a=TM.zigzag+.8+i*.9; rise(g,p(u,a,a+.4))});
  rise($('mg5'),p(u,TM.merger,TM.merger+.5)); const m5=p(u,TM.merger+.6,TM.merger+1.8);
  $('ma5').setAttribute('x',(1080+70*m5).toFixed(1)); $('mb5').setAttribute('x',(1360-90*m5).toFixed(1));
  $('pl5').setAttribute('opacity',(1-m5).toFixed(2)); $('bs5').setAttribute('opacity',p(u,TM.merger+1.8,TM.merger+2.2));

  const s6=S(6),ts=TM.new_boss+4.6,d6=cl(u-ts,0,1.5);
  rot(w6,70*(Math.min(u,ts)-s6)+70*(d6-d6*d6/3));
  $('pf6').setAttribute('width',(400*cl((u-s6)/Math.max(.1,ts-s6))*(1-p(u,ts,ts+.8))).toFixed(1));
  w6.o.style.stroke=u>=TM.stalled_wheel?'var(--loss)':'';
  rise($('nb6'),p(u,TM.new_boss,TM.new_boss+.5));
  [TM.new_boss,ts,TM.stalled_wheel,TM.stalled_wheel+1.2].forEach((a,i)=>rise(N6[i],p(u,a,a+.4)));
  const lp=TM.stalled_wheel+3.4,lk=p(u,lp,lp+.6); $('rg6').setAttribute('opacity',(.25+.75*lk).toFixed(2)); rise($('dl6'),lk);
  const an=t*1.6; $('dt6').setAttribute('cx',(1180+190*Math.cos(an)).toFixed(1)); $('dt6').setAttribute('cy',(480+190*Math.sin(an)).toFixed(1)); $('dt6').setAttribute('opacity',lk);

  rise($('ar7'),p(u,TM.arrow,TM.arrow+.5)); $('ln7').setAttribute('stroke-dashoffset',(1-p(u,TM.arrow+.2,TM.arrow+1.4)).toFixed(3));
  rise($('hd7'),p(u,TM.arrow+1.2,TM.arrow+1.6)); rise($('w7g'),p(u,TM.arrow+1.4,TM.arrow+1.9)); rot(w7,t*90);
  F7.forEach((g,i)=>{const a=TM.small_wins+i*.4; rise(g,p(u,a,a+.4))}); rise($('sw7'),p(u,TM.small_wins,TM.small_wins+.5));
  rise($('st7'),p(u,TM.stop_sign,TM.stop_sign+.5)); rise($('rb7'),p(u,TM.stop_sign+.5,TM.stop_sign+1));
  $('rx7').setAttribute('opacity',p(u,TM.stop_sign+1.2,TM.stop_sign+1.5)); rise($('rs7'),p(u,TM.stop_sign+.8,TM.stop_sign+1.4));

  [0,1,2,3].forEach(i=>rise($('q'+i),p(u,TM.question+i*.4,TM.question+i*.4+.5)));
  rot(w8,t*30); rise($('lb8'),p(u,TM.question+2,TM.question+2.5));