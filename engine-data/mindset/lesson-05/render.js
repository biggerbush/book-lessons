rise($('throne'),p(u,TM.boss_throne,TM.boss_throne+.6)); rise($('learner'),p(u,TM.boss_throne+5.4,TM.boss_throne+6));

  rise($('pL'),p(u,TM.two_leaders,TM.two_leaders+.5)); rise($('pR'),p(u,TM.two_leaders+.4,TM.two_leaders+.9));
  rise($('mir'),p(u,TM.mirror,TM.mirror+.6)); rise($('tool'),p(u,TM.toolbox,TM.toolbox+.6));
  AR.forEach((a,i)=>{const k=p(u,TM.toolbox+.6+i*.3,TM.toolbox+1+i*.3);a.setAttribute('opacity',k);a.setAttribute('transform','translate(0 '+(-6*Math.sin(t*3+i)*k).toFixed(1)+')')});

  rise($('fac'),p(u,TM.car_factory,TM.car_factory+.6));
  $('car').setAttribute('transform','translate('+(-120*(1-p(u,TM.car_factory+.2,TM.car_factory+1.4))).toFixed(1)+' 0)');
  rise($('news'),p(u,TM.newspaper,TM.newspaper+.6)); rise($('spot'),p(u,TM.spotlight,TM.spotlight+.6));
  $('cone').setAttribute('fill-opacity',(.18+.05*Math.sin(t*5)).toFixed(3)); $('spotO').setAttribute('opacity',(1-.7*p(u,TM.spotlight+1,TM.spotlight+2)).toFixed(2));

  rise($('door'),p(u,TM.exit_door,TM.exit_door+.5));
  OUT.forEach((g,i)=>{const a=TM.exit_door+.4+i;g.setAttribute('transform','translate('+(420-150*p(u,a+.3,a+1.4)).toFixed(1)+' 480)');g.setAttribute('opacity',(p(u,a,a+.3)*(1-p(u,a+.9,a+1.4))).toFixed(2))});
  rise($('chart'),p(u,TM.falling_line,TM.falling_line+.4)); $('fallL').setAttribute('points',PL(FP,p(u,TM.falling_line+.2,TM.falling_line+2.7)));
  rise($('voices'),p(u,TM.falling_line,TM.falling_line+.5));
  VB.forEach((b,i)=>{const a=i<3?TM.falling_line+1+i*.8:TM.locked_mouth+.3;b.setAttribute('opacity',(1-p(u,a,a+.4)).toFixed(2))});
  rise($('lock'),p(u,TM.locked_mouth,TM.locked_mouth+.5)); rise($('trap'),p(u,TM.locked_mouth+.6,TM.locked_mouth+1.2));

  rise($('stu'),p(u,TM.students,TM.students+.6)); rise($('pc'),p(u,TM.computer,TM.computer+.6));
  WK.forEach((w,i)=>{const k=p(u,TM.computer+.6+i*.5,TM.computer+1.4+i*.5);w.setAttribute('cx',(630+310*k).toFixed(1));w.setAttribute('cy',307+i*70)});
  $('div').setAttribute('opacity',p(u,TM.two_labels,TM.two_labels+.5));
  rise($('lab0'),p(u,TM.two_labels,TM.two_labels+.5)); rise($('lab1'),p(u,TM.two_labels+3,TM.two_labels+3.5));
  SF.forEach((e,i)=>{const c=i<4?(u>=TM.two_labels?'loss':'ink'):(u>=TM.two_labels+3?'gain':'ink');e.forEach(n=>n.setAttribute('class',c))});

  rise($('ax5'),p(u,TM.rising_line-.6,TM.rising_line-.1));
  $('gL').setAttribute('points',PL(GP,p(u,TM.rising_line+.3,TM.rising_line+3.3))); rise($('gLab'),p(u,TM.rising_line+3,TM.rising_line+3.5));
  $('fL').setAttribute('points',PL(FX,p(u,TM.flat_line+.3,TM.flat_line+2.8))); rise($('fLab'),p(u,TM.flat_line+2.5,TM.flat_line+3));
  rise($('mag'),p(u,TM.magnifier,TM.magnifier+.5)); rise($('pills'),p(u,TM.magnifier+1.2,TM.magnifier+1.8));

  rise($('tbl'),p(u,TM.round_table,TM.round_table+.6));
  [0,1,2].forEach(i=>{const a=TM.round_table+.6+i*1.4;rise($('tl'+i),p(u,a,a+.5))});
  rise($('ibm'),p(u,TM.blue_logo,TM.blue_logo+.6));
  const mo=p(u,TM.blue_logo+1.6,TM.blue_logo+3.2), team=mo>.5;
  $('steps6').setAttribute('opacity',(1-mo).toFixed(2));
  TF.forEach((f,i)=>{const a=TM.blue_logo+1.6+(5-i)*.15, k=p(u,a,a+1.1);
    f[0].setAttribute('transform','translate('+TX[i]+' '+(450-ST[i]*(1-k)).toFixed(1)+')');
    const c=team?'gain':(i===5?'loss':'ink'); f[1].forEach(n=>n.setAttribute('class',c))});
  LN.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.blue_logo+3+i*.15,TM.blue_logo+3.4+i*.15)));
  $('stt').textContent=team?'REWARDED TEAMWORK':'A CULTURE OF STATUS'; $('stt').style.fill=team?'var(--gain)':'var(--loss)';
  rise($('od'),p(u,TM.open_door,TM.open_door+.6));
  $('tok').setAttribute('transform','translate('+(1000+350*((t*.5)%1)).toFixed(1)+' 640)'); $('tok').setAttribute('opacity',u>=TM.open_door+.6?1:0);

  rise($('k0'),p(u,TM.calendar,TM.calendar+.6)); rise($('k1'),p(u,TM.thank_you,TM.thank_you+.6)); rise($('k2'),p(u,TM.question,TM.question+.6));
  DAY.setAttribute('opacity',(.6+.4*Math.abs(Math.sin(t*3))).toFixed(2));

  rise($('qa'),p(u,TM.light_bulb,TM.light_bulb+.5)); rise($('qb'),p(u,TM.light_bulb+.4,TM.light_bulb+.9)); rise($('qc'),p(u,TM.light_bulb+.8,TM.light_bulb+1.3));
  rise($('bulb'),p(u,TM.light_bulb+.3,TM.light_bulb+.9)); rise($('q2'),p(u,TM.light_bulb+5,TM.light_bulb+5.6));
  const lit=u>=TM.light_bulb+5; $('bulbC').setAttribute('fill',lit?'var(--gain)':'var(--stage)');
  $('rays').setAttribute('opacity',lit?(.6+.4*Math.sin(t*4)).toFixed(2):0);