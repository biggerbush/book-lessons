const f=p(u,TM.brain_fork,TM.brain_fork+1.4);$('fork').setAttribute('stroke-dashoffset',(1-f).toFixed(3));
  $('fdot').setAttribute('opacity',p(u,TM.brain_fork+1.1,TM.brain_fork+1.5));$('blk').setAttribute('opacity',p(u,TM.brain_fork+1.3,TM.brain_fork+1.7));

  rise($('road'),p(u,TM.two_walls,TM.two_walls+.5));
  const wk=p(u,TM.two_walls+.3,TM.ego_wall);$('walker').setAttribute('transform','translate('+(260*wk).toFixed(1)+' '+(wk>0&&wk<1?-6*Math.abs(Math.sin(t*5)):0).toFixed(1)+')');
  rise($('w0'),p(u,TM.ego_wall,TM.ego_wall+.5));rise($('w1'),p(u,TM.blind_wall,TM.blind_wall+.5));
  const iv=p(u,TM.blind_wall+2.6,TM.blind_wall+3.6);['wr0','wr1'].forEach(k=>$(k).setAttribute('fill-opacity',(1-.85*iv).toFixed(2)));rise($('inv'),iv);

  rise($('halves'),p(u,TM.brain_halves,TM.brain_halves+.6));
  rise($('atk'),p(u,TM.shield,TM.shield+.5));rise($('shld'),p(u,TM.shield+.6,TM.shield+1.1));
  $('lhp').style.fill=u>=TM.shield+.6?'var(--loss)':'var(--stage)';
  rise($('thk'),p(u,TM.thinker,TM.thinker+.5));$('rhp').style.fill=u>=TM.thinker?'var(--gain)':'var(--stage)';
  const ew=p(u,TM.thinker+4.5,TM.thinker+5.5),sc=(k,s)=>$(k).setAttribute('transform','translate(800 470) scale('+s.toFixed(3)+') translate(-800 -470)');
  sc('lhp',1+.12*ew);sc('rhp',1-.18*ew);rise($('win'),ew);

  rise($('eye'),p(u,TM.eye_cone,TM.eye_cone+.6));
  DT.forEach((d,i)=>{const a=TM.eye_cone+4.6+i*.05;d.setAttribute('opacity',p(u,a,a+.3))});
  rise($('wheel'),p(u,TM.color_wheel,TM.color_wheel+.5));const gr=u>=TM.color_wheel+1.6;
  SG.forEach((s,i)=>s.setAttribute('fill',gr?'var(--line)':WC[i]));$('wq').setAttribute('opacity',gr?1:0);
  rise($('miss'),p(u,TM.color_wheel+5.4,TM.color_wheel+6));

  rise($('book'),p(u,TM.schoolbook,TM.schoolbook+.5));
  [[TM.schoolbook+.6,80],[TM.big_picture+.8,90],[TM.big_picture,340]].forEach((q,i)=>{const k=p(u,q[0],q[0]+.9);rise($('k'+i),p(u,q[0],q[0]+.3));
    $('b'+i).setAttribute('y',(700-q[1]*k).toFixed(1));$('b'+i).setAttribute('height',(q[1]*k).toFixed(1))});
  rise($('team'),p(u,TM.team_puzzle,TM.team_puzzle+.6));

  const o=p(u,TM.open_door+.3,TM.open_door+1.5),w=240*(1-.78*o);
  $('door').setAttribute('d','M220 300L'+(220+w).toFixed(1)+' '+(300-40*o).toFixed(1)+'V'+(720+40*o).toFixed(1)+'L220 720z');
  rise($('dr'),p(u,TM.open_door,TM.open_door+.4));rise($('sinc'),p(u,TM.open_door+4.6,TM.open_door+5.2));
  rise($('scl'),p(u,TM.question_mark,TM.question_mark+.5));
  const a=-12*p(u,TM.question_mark+.6,TM.question_mark+1.8),ra=a*Math.PI/180;
  $('beam').setAttribute('transform','rotate('+a.toFixed(2)+' 1080 360)');
  $('panL').setAttribute('transform','translate('+(1080-250*Math.cos(ra)).toFixed(1)+' '+(360-250*Math.sin(ra)).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1080+250*Math.cos(ra)).toFixed(1)+' '+(360+250*Math.sin(ra)).toFixed(1)+')');

  rise($('cl'),p(u,TM.closed_box,TM.closed_box+.6));rise($('op'),p(u,TM.magnifier,TM.magnifier+.6));
  $('mag').setAttribute('transform','translate('+(8*Math.sin(t*2)).toFixed(1)+' '+(6*Math.cos(t*2)).toFixed(1)+')');
  rise($('shift'),p(u,TM.magnifier+5.4,TM.magnifier+6));

  rise($('crit'),p(u,TM.critic_chair,TM.critic_chair+.6));rise($('bub0'),p(u,TM.critic_chair+.8,TM.critic_chair+1.2));rise($('bub1'),p(u,TM.critic_chair+1.4,TM.critic_chair+1.8));
  rise($('flip'),p(u,TM.flip_view,TM.flip_view+.6));$('dig').setAttribute('transform','rotate('+(180*p(u,TM.flip_view+.8,TM.flip_view+2)).toFixed(1)+' 800 540)');
  rise($('spk'),p(u,TM.spark,TM.spark+.5));const cu=u>=TM.spark+1.4;SB.forEach(l=>l.setAttribute('stroke',cu?'var(--gain)':'var(--loss)'));
  $('sburst').setAttribute('transform','translate(800 700) scale('+(1+.15*Math.sin(t*6)).toFixed(3)+')');

  const s8=SC[8][0]/K;rise($('ch'),p(u,s8+.3,s8+.9));rise($('qa'),p(u,s8+6.6,s8+7.1));rise($('qb'),p(u,s8+7,s8+7.5));rise($('qbub'),p(u,s8+7.4,s8+7.9));