const R=(e,a,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,a,a+d));

  const b0=TM.busy_person;R('t_fig',b0);
  const sc=p(u,b0+.4,b0+1.2)*(1-p(u,b0+2.4,b0+3.2));TS.forEach(e=>e.setAttribute('opacity',sc.toFixed(2)));
  const g0=1280+140*p(u,b0+2.8,b0+4);$('t_line').setAttribute('d','M1280 400H'+g0.toFixed(1));$('t_head').setAttribute('transform','translate('+g0.toFixed(1)+' 400)');$('t_big').setAttribute('opacity',g0>1280?1:0);

  R('jug',TM.juggler);
  BL.forEach((b,i)=>{const a=i*Math.PI/6+t*1.6;b.setAttribute('cx',(380+200*Math.cos(a)).toFixed(1));b.setAttribute('cy',(400+110*Math.sin(a)).toFixed(1));b.setAttribute('opacity',p(u,TM.juggler+.3+i*.12,TM.juggler+.6+i*.12))});
  YS.forEach((g,i)=>R(g,TM.juggler+3.4+i*.5));
  R('cal',TM.calendar);CL.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.calendar+.3+i*.06,TM.calendar+.5+i*.06)));
  R('imp',TM.calendar+.4);$('impf').setAttribute('width',(28*p(u,TM.calendar+1,TM.calendar+4)).toFixed(1));
  R('nothing',TM.calendar+4.6,.6);

  R('c1',TM.circle_one);R('e1',TM.circle_one+9.2);
  SA.forEach((e,i)=>R(e,TM.arrows_many+i*.08,.3));
  $('ring').setAttribute('opacity',p(u,TM.short_lines,TM.short_lines+.6));R('bars',TM.short_lines+.4);
  BR.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.short_lines+.8+i*.1,TM.short_lines+1+i*.1)));
  R('none',TM.short_lines+5.4,.6);

  R('c2',TM.circle_two);
  const ga=p(u,TM.big_arrow,TM.big_arrow+1.5),gb=p(u,TM.finish_line,TM.finish_line+1.5),tip=440+560*ga+340*gb,on=ga>0?1:0;
  $('bigl').setAttribute('d','M440 500H'+tip.toFixed(1));$('bigh').setAttribute('transform','translate('+tip.toFixed(1)+' 500)');
  $('bigl').setAttribute('opacity',on);$('bigh').setAttribute('opacity',on);
  R('same',TM.big_arrow+5.4);R('fin',TM.finish_line);R('far',TM.finish_line+1.6,.6);

  R('rams',TM.dieter_rams);R('motto',TM.motto_sign);R('dev',TM.motto_sign+1.4);
  $('clut').setAttribute('opacity',(p(u,TM.motto_sign+1.6,TM.motto_sign+2.2)*(1-p(u,TM.simple_design+.3,TM.simple_design+1.3))).toFixed(2));
  R('apply',TM.simple_design+5.8,.6);

  R('scale',TM.choice_scale);
  const dg=-10+22*p(u,TM.choice_scale+4.6,TM.choice_scale+6),an=dg*Math.PI/180,cx=200*Math.cos(an),cy=200*Math.sin(an);
  $('beam').setAttribute('transform','rotate('+dg.toFixed(2)+' 400 300)');
  $('panL').setAttribute('transform','translate('+(400-cx).toFixed(1)+' '+(300-cy).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(400+cx).toFixed(1)+' '+(300+cy).toFixed(1)+')');
  R('row1',TM.two_paths);R('row2',TM.two_paths+3);R('row2b',TM.two_paths+4.2);

  R('pupw',TM.puppet_strings);$('pup').setAttribute('transform','rotate('+(4*Math.sin(t*1.5)).toFixed(2)+' 390 262)');
  $('strs').setAttribute('opacity',(1-.8*p(u,TM.steering_wheel,TM.steering_wheel+1)).toFixed(2));
  R('wheelg',TM.steering_wheel);$('wheel').setAttribute('transform','rotate('+(12*Math.sin(t*.9)).toFixed(2)+' 1150 470)');
  R('ctrl',TM.steering_wheel+1.5,.6);

  R('nb',TM.notebook);RW.forEach((g,i)=>R(g,TM.arrow_list+i*.6,.4));
  MK.forEach((m,i)=>{const a=TM.star_mark+i*.8,k=p(u,a,a+.8);m[0].setAttribute('stroke-dashoffset',(1-k).toFixed(3));m[0].setAttribute('opacity',k>0?1:0);rise(m[1],p(u,a+.6,a+1));RA[[1,3][i]].setAttribute('class',k>0?'s-gain':'s-ink')});

  ['q0','q1','q2','q3'].forEach((id,i)=>R(id,TM.question_mark+i*.4));R('qg',TM.question_mark+1.4);
  $('qa8').setAttribute('d',arr(1320,500,1320,500-220*p(u,TM.question_mark+1.8,TM.question_mark+3),22));
  R('q4',TM.question_mark+6.5,.6);