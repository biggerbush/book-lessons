rise($('mir0'),p(u,TM.mirror,TM.mirror+.6)); rise($('bub0'),p(u,TM.mirror+2.5,TM.mirror+3));
  $('gl').setAttribute('opacity',(.35+.35*Math.sin(t*1.6)).toFixed(2));

  rise($('yd'),p(u,TM.young_david,TM.young_david+.5)); rise($('cs'),p(u,TM.cheat_sheet,TM.cheat_sheet+.5)); rise($('yl'),p(u,TM.cheat_sheet+.8,TM.cheat_sheet+1.3));
  rise($('face'),p(u,TM.smile_mask,TM.smile_mask+.5)); rise($('lt'),p(u,TM.smile_mask,TM.smile_mask+.5));
  const mq=p(u,TM.smile_mask+1.2,TM.smile_mask+2); $('mask').setAttribute('transform','translate(0 '+(-60*(1-mq)).toFixed(1)+')'); $('mask').setAttribute('opacity',mq);
  $('lt').textContent=mq>.5?'THE KINDER STORY':'THE TRUTH'; $('lt').style.fill=mq>.5?'var(--gain)':'';
  rise($('stuck'),p(u,TM.smile_mask+5.7,TM.smile_mask+6.3));

  rise($('bath'),p(u,TM.bathroom,TM.bathroom+.5)); rise($('eye'),p(u,TM.bathroom+5,TM.bathroom+5.5));
  rise($('sb'),p(u,TM.speech_bubble,TM.speech_bubble+.5)); rise($('ng'),p(u,TM.speech_bubble+.3,TM.speech_bubble+.8));
  rise($('l1'),p(u,TM.speech_bubble+1.8,TM.speech_bubble+2.3)); rise($('l2'),p(u,TM.speech_bubble+2.6,TM.speech_bubble+3.1));

  rise($('n0'),p(u,TM.sticky_notes,TM.sticky_notes+.5));
  rise($('n1'),p(u,TM.air_force,TM.air_force+.5)); rise($('r0'),p(u,TM.air_force+.4,TM.air_force+.9));
  rise($('n2'),p(u,TM.study_desk,TM.study_desk+.5)); rise($('r1'),p(u,TM.study_desk+.4,TM.study_desk+.9));
  rise($('r2'),p(u,TM.morning_sun,TM.morning_sun+.5)); $('glow').setAttribute('opacity',(.15*p(u,TM.morning_sun+.3,TM.morning_sun+1.3)).toFixed(3));
  $('sun').setAttribute('transform','translate(0 '+(30*(1-p(u,TM.morning_sun+.2,TM.morning_sun+1.4))).toFixed(1)+')');
  $('rays').setAttribute('transform','rotate('+((t*20)%360).toFixed(1)+' 870 700)');

  rise($('pt'),p(u,TM.big_goal,TM.big_goal+.5)); rise($('fl'),p(u,TM.big_goal+.6,TM.big_goal+1.1));
  rise($('st'),p(u,TM.stairs,TM.stairs+.5)); rise($('ps'),p(u,TM.stairs+.3,TM.stairs+.8));
  rise($('g40'),p(u,TM.scale+.3,TM.scale+.8));
  rise($('nt1'),p(u,TM.scale+3,TM.scale+3.5));
  const dn=p(u,TM.check_mark+1,TM.check_mark+1.6);
  $('nt1r').setAttribute('fill-opacity',(1-.65*dn).toFixed(2));
  const tc=dn>.5?'var(--ink)':'var(--on-gain)'; $('nt1a').style.fill=tc; $('nt1b').style.fill=tc;
  rise($('ck'),p(u,TM.check_mark,TM.check_mark+.4)); rise($('nt2'),p(u,TM.check_mark+1.6,TM.check_mark+2.1));

  FG.forEach((c,i)=>{c.setAttribute('cx',(430+22*Math.sin(t*.9+i*2.1)).toFixed(1));c.setAttribute('cy',(470+14*Math.cos(t*.7+i*1.7)).toFixed(1))});
  rise($('bf'),p(u,TM.blur_face,TM.blur_face+.5)); rise($('pp'),p(u,TM.pen_paper,TM.pen_paper+.5));
  let px=1050,py=390;
  PL.forEach((l,i)=>{const a=TM.pen_paper+.6+i*.7,q=p(u,a,a+.7),x=1050+l[1]*q;l[0].setAttribute('x2',x.toFixed(1));if(u>=a){px=x;py=390+i*50}});
  $('pen').setAttribute('transform','translate('+px.toFixed(1)+' '+py+') rotate(35)'); $('pen').setAttribute('opacity',p(u,TM.pen_paper+.3,TM.pen_paper+.6));
  rise($('mor'),p(u,TM.pen_paper+3.6,TM.pen_paper+4.2));

  rise($('ym'),p(u,TM.your_mirror,TM.your_mirror+.5));
  [TM.insecurity,TM.dream_note,TM.small_note].forEach((a,k)=>{rise($('c'+k),p(u,a,a+.4));NT[k].forEach((n,j)=>rise(n,p(u,a+.3+j*.5,a+.8+j*.5)))});
  rise($('arw'),p(u,TM.small_note+.6,TM.small_note+1.1)); rise($('hon'),p(u,TM.small_note+1.4,TM.small_note+2));

  rise($('qa'),p(u,TM.tonight_note,TM.tonight_note+.5)); rise($('qb'),p(u,TM.tonight_note+.4,TM.tonight_note+.9));
  rise($('tn'),p(u,TM.tonight_note+1,TM.tonight_note+1.5));
  rise($('qc'),p(u,TM.tonight_note+5,TM.tonight_note+5.5)); rise($('tn2'),p(u,TM.tonight_note+5.4,TM.tonight_note+5.9));