const k0=p(u,TM.tangled_plan,TM.tangled_plan+3);let d='';
  for(let i=0;i<=160;i++){const s=i/160,e=Math.sin(Math.PI*s);d+=(i?'L':'M')+(1140+300*s+60*Math.sin(s*25+t*.6)*e).toFixed(1)+' '+(420+110*Math.sin(s*19+t*.4)*e).toFixed(1)}
  $('tangle').setAttribute('d',d);$('tangle').setAttribute('stroke-dashoffset',(1-k0).toFixed(3));
  rise($('noise'),p(u,TM.tangled_plan+5.8,TM.tangled_plan+6.3));

  BUR.forEach((b,i)=>{const k=p(u,TM.battlefield+i*.3,TM.battlefield+i*.3+.4);b[0].setAttribute('transform','translate('+b[1]+' '+b[2]+') scale('+(k*(.85+.15*Math.sin(t*5+i*2))).toFixed(3)+')')});
  rise($('pc'),p(u,TM.battlefield+.8,TM.battlefield+1.3));rise($('ps'),p(u,TM.battlefield+1.2,TM.battlefield+1.7));
  $('sarr').setAttribute('stroke-dashoffset',(1-p(u,TM.battlefield+1.6,TM.battlefield+2.8)).toFixed(3));rise($('ahd'),p(u,TM.battlefield+2.6,TM.battlefield+3));
  rise($('radio'),p(u,TM.radio,TM.radio+.5));let st='';for(let x=420;x<=900;x+=6)st+=(x>420?'L':'M')+x+' '+(243+14*Math.sin(x*.37+t*9)*Math.sin(x*.11+t*3)).toFixed(1);$('stat').setAttribute('d',st);
  const bk=u>=TM.broken_gears;
  gears.forEach((g,i)=>{const br=bk&&[1,3,5].includes(i),a=(i%2?-1:1)*Math.min(u,TM.broken_gears)*50*(55/GR[i][2]);
    g[0].setAttribute('transform','translate(0 '+(br?8*p(u,TM.broken_gears,TM.broken_gears+.6):0).toFixed(1)+') rotate('+a.toFixed(1)+' '+g[2]+' '+g[3]+')');g[1].setAttribute('stroke',br?'var(--loss)':'var(--ink)')});
  crew.forEach((c,i)=>rise(c,p(u,TM.broken_gears+5.8+i*.25,TM.broken_gears+6.3+i*.25)));
  rise($('ev'),p(u,TM.broken_gears+7.4,TM.broken_gears+8));rise($('still'),p(u,TM.broken_gears+12.3,TM.broken_gears+12.9));

  const ko=p(u,TM.surprise,TM.surprise+.4);
  $('ob0').setAttribute('transform','translate(800 390) scale('+(ko*(1+.8*p(u,TM.surprise+2.9,TM.surprise+3.6))).toFixed(3)+')');
  $('ob1').setAttribute('transform','translate(800 680) scale('+ko.toFixed(3)+')');
  const x0=200+500*p(u,TM.surprise+.3,TM.surprise+2.6);$('dt0').setAttribute('cx',x0.toFixed(1));$('dt0').setAttribute('cy',zy(x0).toFixed(1));
  rise($('qm'),p(u,TM.surprise+3.2,TM.surprise+3.7));
  const kr=p(u,TM.clear_path,TM.clear_path+3),x1=200+1180*kr;RT.setAttribute('stroke-dashoffset',(1-kr).toFixed(3));
  $('dt1').setAttribute('cx',x1.toFixed(1));$('dt1').setAttribute('cy',by(x1).toFixed(1));
  rise($('t2'),p(u,TM.clear_path+1,TM.clear_path+1.6));

  rise($('fac'),p(u,TM.factory,TM.factory+.6));
  smoke.forEach((c,i)=>{const f=((t*.5+i/3)%1);c.setAttribute('cy',(320-80*f).toFixed(1));c.setAttribute('opacity',(1-f).toFixed(2))});
  rise($('sheet'),p(u,TM.bonus_chart,TM.bonus_chart+.5));ROWS.forEach((r,i)=>rise(r,p(u,TM.bonus_chart+.5+i*.25,TM.bonus_chart+.8+i*.25)));
  rise($('ticks'),p(u,TM.bonus_chart+5.4,TM.bonus_chart+6));rise($('thor'),p(u,TM.bonus_chart+5.6,TM.bonus_chart+6.2));
  rise($('ch3'),p(u,TM.bonus_chart+8.4,TM.bonus_chart+8.9));$('act').setAttribute('stroke-dashoffset',(1-p(u,TM.bonus_chart+9,TM.bonus_chart+10.5)).toFixed(3));
  rise($('t3'),p(u,TM.bonus_chart+10,TM.bonus_chart+10.6));

  rise($('leif'),p(u,SC[4][0]/K+.4,SC[4][0]/K+1));rise($('sups'),p(u,TM.supervisor,TM.supervisor+.5));rise($('ask'),p(u,TM.supervisor+3,TM.supervisor+3.5));
  rise($('arms'),p(u,TM.shrug,TM.shrug+.4));rise($('qs'),p(u,TM.shrug+.2,TM.shrug+.7));rise($('t4'),p(u,TM.shrug+2.2,TM.shrug+2.8));

  const c5=p(u,TM.scissors+1,TM.scissors+2.5);
  R5.forEach((r,i)=>{rise(r[0],p(u,SC[5][0]/K+.3+i*.08,SC[5][0]/K+.6+i*.08));r[1].setAttribute('opacity',i<2?1:(1-.8*c5).toFixed(2))});
  rise($('cutl'),p(u,TM.scissors,TM.scissors+.4));
  const sx=170+400*p(u,TM.scissors+.3,TM.scissors+2.3);$('sci').setAttribute('transform','translate('+sx.toFixed(1)+' 317)');$('sci').setAttribute('opacity',u>=TM.scissors?1:0);
  TG.forEach(([g,a,cx,cy],i)=>{rise(g,p(u,TM.two_targets+i*.5,TM.two_targets+i*.5+.4));const k=p(u,TM.two_targets+.5+i*.5,TM.two_targets+1+i*.5);
    a.setAttribute('transform','translate('+(cx+100*(1-k)).toFixed(1)+' '+(cy-100*(1-k)).toFixed(1)+')');a.setAttribute('opacity',k>0?1:0)});
  rise($('t5a'),p(u,TM.two_targets+5.4,TM.two_targets+6));rise($('t5b'),p(u,TM.two_targets+9.1,TM.two_targets+9.6));

  rise($('ldr'),p(u,TM.speech_bubble,TM.speech_bubble+.5));rise($('lb'),p(u,TM.speech_bubble+.4,TM.speech_bubble+.9));
  rise($('team'),p(u,TM.speech_bubble+.8,TM.speech_bubble+1.3));rise($('resp'),p(u,TM.speech_bubble+2,TM.speech_bubble+2.6));
  rise($('sq'),p(u,TM.speech_bubble+4.5,TM.speech_bubble+5));rise($('cf'),p(u,TM.speech_bubble+4.8,TM.speech_bubble+5.4));
  rise($('arm'),p(u,TM.raised_hand,TM.raised_hand+.5));rise($('hb'),p(u,TM.raised_hand+.8,TM.raised_hand+1.3));rise($('t6'),p(u,TM.raised_hand+6.2,TM.raised_hand+6.8));

  rise($('ppl7'),p(u,TM.mirror,TM.mirror+.5));rise($('lanes'),p(u,TM.mirror+2.2,TM.mirror+2.7));
  $('cd1').setAttribute('transform','translate('+(340+780*p(u,TM.mirror+2.4,TM.mirror+4.4)).toFixed(1)+' 297)');$('cd1').setAttribute('opacity',u>=TM.mirror+2.2?1:0);
  $('cd2').setAttribute('transform','translate('+(1120-780*p(u,TM.mirror+4.6,TM.mirror+6.6)).toFixed(1)+' 517)');$('cd2').setAttribute('opacity',u>=TM.mirror+4.4?1:0);
  rise($('ck'),p(u,TM.checkmark,TM.checkmark+.4));rise($('t7a'),p(u,TM.checkmark+.2,TM.checkmark+.7));rise($('t7b'),p(u,TM.checkmark+2.6,TM.checkmark+3.1));

  rise($('qa'),p(u,TM.sticky_note,TM.sticky_note+.5));rise($('qb'),p(u,TM.sticky_note+.4,TM.sticky_note+.9));rise($('qc'),p(u,TM.sticky_note+.8,TM.sticky_note+1.3));
  rise($('note'),p(u,TM.sticky_note+.2,TM.sticky_note+.7));NL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.sticky_note+1+i*.6,TM.sticky_note+1.4+i*.6)));
  rise($('rep'),p(u,TM.sticky_note+6.2,TM.sticky_note+6.8));