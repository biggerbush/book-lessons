const k0=p(u,TM.title_card+.8,TM.title_card+2.6);
  T0.forEach((g,i)=>{const x=T0S[i][0]+(T0E[i][0]-T0S[i][0])*k0,y=T0S[i][1]+(T0E[i][1]-T0S[i][1])*k0+4*Math.sin(t*2+i);g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')')});
  rise(t0b,p(u,TM.title_card+2.4,TM.title_card+3));

  rise($('lab'),p(u,TM.stanford_lab,TM.stanford_lab+.5)); rise($('fcard'),p(u,TM.formula_card,TM.formula_card+.5));
  IC1.forEach((g,i)=>{const a=TM.three_icons+i*.5;rise(g,p(u,a,a+.5))});
  const ms=p(u,TM.three_icons+5.7,TM.three_icons+6.2); rise($('miss1'),ms); $('bB').style.fill=ms>.5?'var(--muted)':'var(--gain)';

  const pk=p(u,TM.phone_reach+9.2,TM.phone_reach+10), rg=p(u,TM.ringing_phone,TM.ringing_phone+.5);
  rise($('phW'),rg); $('ph').setAttribute('transform','translate('+(-60*pk).toFixed(1)+' '+(-100*pk).toFixed(1)+')');
  $('waves').setAttribute('opacity',(rg*(1-pk)*(.55+.45*Math.sin(t*10))).toFixed(2)); $('waves').style.stroke=u>=TM.phone_reach+4.2?'var(--gain)':'var(--ink)';
  rise($('face'),p(u,TM.eager_face,TM.eager_face+.5));
  $('arm').setAttribute('d','M320 520Q420 560 '+(520-60*pk).toFixed(1)+' '+(560-100*pk).toFixed(1)); $('arm').setAttribute('opacity',p(u,TM.phone_reach,TM.phone_reach+.6));
  const a2=[TM.eager_face,TM.phone_reach,TM.phone_reach+4.2];
  R2.forEach((r,i)=>{rise(r[0],p(u,a2[i],a2[i]+.5));r[1].setAttribute('fill',u>=a2[i]+.4?'var(--gain)':'var(--stage)')});
  rise($('pick'),pk);

  rise($('axes3'),p(u,TM.graph_axes,TM.graph_axes+.5));
  $('curve').setAttribute('stroke-dashoffset',(1-p(u,TM.action_curve,TM.action_curve+1.5)).toFixed(3));
  rise($('alab'),p(u,TM.action_curve+1.2,TM.action_curve+1.7));
  const fr=(t*1.2)%1; $('rA').setAttribute('r',(22+40*fr).toFixed(1)); $('rA').setAttribute('opacity',(1-fr).toFixed(2));
  rise($('dA'),p(u,TM.dot_above,TM.dot_above+.5)); rise($('pA'),p(u,TM.dot_above+.4,TM.dot_above+.9));
  rise($('dB'),p(u,TM.dot_above+4.6,TM.dot_above+5.1)); rise($('pB'),p(u,TM.dot_above+5,TM.dot_above+5.5));

  rise($('ss'),p(u,TM.seesaw,TM.seesaw+.5));
  const h4=p(u,TM.hard_task,TM.hard_task+1), e4=p(u,TM.easy_task,TM.easy_task+1);
  $('plank').setAttribute('transform','rotate('+(3*Math.sin(t*2)*(1-h4)+12*h4-24*e4).toFixed(2)+' 800 600)');
  rise($('hard'),p(u,TM.hard_task,TM.hard_task+.5)); rise($('easy'),p(u,TM.easy_task,TM.easy_task+.5));
  $('hop').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));

  rise($('bell5'),p(u,TM.sleeping_bell,TM.sleeping_bell+.5)); $('zz').setAttribute('y',(340-8*Math.sin(t*2)).toFixed(1));
  const f5=p(u,TM.sleeping_bell+2.2,TM.sleeping_bell+3.2);
  ['fM','fA'].forEach(id=>{$(id).setAttribute('y',(574-288*f5).toFixed(1));$(id).setAttribute('height',(288*f5).toFixed(1))});
  rise($('bars5'),p(u,TM.sleeping_bell+2,TM.sleeping_bell+2.5));
  rise($('stW'),p(u,TM.sticky_note,TM.sticky_note+.5));
  const cx5=p(u,TM.sticky_note+.6,TM.sticky_note+1.3); $('cueX').setAttribute('stroke-dashoffset',(1-cx5).toFixed(3)); $('cueX').setAttribute('opacity',cx5>0?1:0);
  rise($('closet'),p(u,TM.forgotten_mat,TM.forgotten_mat+.5)); rise($('nb5'),p(u,TM.forgotten_mat+1,TM.forgotten_mat+1.5));

  rise($('lensW'),p(u,TM.detective,TM.detective+.5));
  const lx=230+350*p(u,TM.check_prompt,TM.check_prompt+.8)+360*p(u,TM.check_ability,TM.check_ability+.8)+360*p(u,TM.check_motive,TM.check_motive+.8);
  $('lens6').setAttribute('transform','translate('+lx.toFixed(1)+' '+(690+6*Math.sin(t*3)).toFixed(1)+')');
  const c6=[TM.check_prompt,TM.check_ability,TM.check_motive], q6=[TM.check_prompt+1.8,TM.check_ability+1.4,TM.check_motive+.6];
  C6.forEach((c,i)=>{rise(c[0],p(u,c6[i],c6[i]+.5));rise(c[1],p(u,q6[i],q6[i]+.5))});

  rise($('hcard'),p(u,TM.your_habit,TM.your_habit+.5));
  R7.forEach((g,i)=>{const a=TM.map_check+i*2;rise(g,p(u,a,a+.5))});
  rise($('chain7'),p(u,TM.map_check+6.9,TM.map_check+7.4));
  const fx=u>=TM.map_check+7.8; $('lk').setAttribute('stroke',fx?'var(--gain)':'var(--loss)'); $('lk').setAttribute('stroke-dasharray',fx?'none':'12 10');

  rise($('qa'),p(u,TM.your_day,TM.your_day+.5)); rise($('qb'),p(u,TM.your_day+.4,TM.your_day+.9)); rise($('qc'),p(u,TM.your_day+3.4,TM.your_day+3.9));
  const e8=p(u,TM.your_day+3.6,TM.your_day+5);
  E8.forEach((g,i)=>{g.setAttribute('opacity',p(u,TM.your_day+3.4,TM.your_day+3.9));g.setAttribute('transform','translate('+(1290+70*i)+' '+(720+[-80,70,-50][i]*(1-e8)).toFixed(1)+')')});