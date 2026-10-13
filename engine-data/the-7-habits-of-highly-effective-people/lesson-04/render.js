const R=(e,a,d=.5)=>rise(typeof e==='string'?$(e):e,p(u,a,a+d));
  FL.forEach(([e,x,y],i)=>e.setAttribute('transform','translate('+x+' '+y+') scale('+(1+.04*Math.sin(t*7+i)).toFixed(3)+' '+(1+.1*Math.sin(t*9+i*2)).toFixed(3)+')'));

  const bz=u<TM.ringing_phone+4.2&&(t%1.6)<.6?1:0;
  $('phone').setAttribute('transform','translate('+(bz*3*Math.sin(t*60)).toFixed(1)+' 0)'); $('buzz').setAttribute('opacity',bz);
  PL.forEach((g,i)=>R(g,TM.ringing_phone+.4+i*.7,.3)); R('wm',TM.ringing_phone+4.2);

  NT.forEach(([o,g],i)=>{R(o,TM.sticky_notes+i*.25,.3); g.setAttribute('transform','translate('+(u>TM.sticky_notes&&u<TM.seedling?2*Math.sin(t*40+i):0).toFixed(1)+' 0)')});
  R('shout',TM.sticky_notes+1); R('plant',TM.seedling); R('whis',TM.seedling+1);
  R('me',TM.seedling+4.5); R('ans',TM.seedling+5);
  const dr=p(u,TM.seedling+9.5,TM.seedling+11);
  $('lf1').setAttribute('transform','rotate('+(-30*dr).toFixed(1)+' 1240 520)'); $('lf2').setAttribute('transform','rotate('+(30*dr).toFixed(1)+' 1240 500)');
  R('wait',TM.seedling+9.5);

  R('grid',TM.matrix_grid); R('q1',TM.urgent_arrow); R('hc',TM.urgent_arrow+.3); $('t1').setAttribute('opacity',p(u,TM.urgent_arrow+.3,TM.urgent_arrow+1.1));
  R('q2',TM.important_star); R('hr',TM.important_star+.3); $('t2').setAttribute('opacity',p(u,TM.important_star+.3,TM.important_star+1.1));
  [1,2,3,4].forEach(i=>R('n'+i,TM.important_star+5.4+i*.3)); R('four',TM.important_star+5.4);

  R('fbox',TM.fire); R('fires',TM.fire+.3); R('mini',TM.fire+.6); R('fl',TM.deadline_clock); R('clk',TM.deadline_clock);
  $('hand').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 960 350)');
  R('must',TM.deadline_clock+3); R('st',TM.deadline_clock+4.8); R('stress',TM.deadline_clock+5.3);
  $('spray').setAttribute('stroke-dashoffset',((t*40)%44).toFixed(1));

  R('pn3',TM.interrupted); BB.forEach(([o,g],i)=>{R(o,TM.interrupted+.8+i*.6,.3); g.setAttribute('transform','translate(0 '+(3*Math.sin(t*6+i*2)).toFixed(1)+')')});
  R('pn4',TM.couch); $('tvs').setAttribute('fill-opacity',(.35+.25*Math.sin(t*11)*Math.sin(t*3)).toFixed(2));
  R('x3',TM.couch+5.4); R('x4',TM.couch+5.6); R('out',TM.couch+5.8);

  R('qbox',TM.calendar_plan); [TM.calendar_plan+.4,TM.handshake,TM.handshake+1.2,TM.handshake+2.4].forEach((a,i)=>R('i'+i,a));
  R('heart',TM.handshake+4.6); R('sqs',TM.shrinking_fire);
  const k=p(u,TM.shrinking_fire+.5,TM.shrinking_fire+3.5), a2=100+120*k, a1=200-120*k;
  [['sq2',1060,a2],['sq1',1340,a1]].forEach(([id,cx,s])=>{const e=$(id);e.setAttribute('x',cx-s/2);e.setAttribute('y',470-s/2);e.setAttribute('width',s);e.setAttribute('height',s)});
  $('f1').setAttribute('transform','translate(1340 '+(470+a1/2-12).toFixed(1)+') scale('+(a1/200).toFixed(3)+' '+(a1/200*(1+.1*Math.sin(t*9))).toFixed(3)+')');

  const S6=SC[6][0]/K;
  R('lb3',S6+.3); R('lb4',S6+.5); R('tblocks',S6+.6); R('qb2',S6+.8);
  $('qm').setAttribute('opacity',(1-p(u,TM.no_hand,TM.no_hand+1)).toFixed(2));
  TB.forEach(([e,x0,y0,x1,y1],i)=>{const m=p(u,TM.no_hand+i*.3,TM.no_hand+i*.3+1.2);e.setAttribute('x',(x0+(x1-x0)*m).toFixed(1));e.setAttribute('y',(y0+(y1-y0)*m).toFixed(1))});
  R('nob',TM.no_hand+4.5); R('yes',TM.burning_yes); R('yesl',TM.burning_yes+.6);

  R('week',TM.weekly_page); RL.forEach((g,i)=>R(g,TM.role_hats+i*.5));
  GB.forEach((g,i)=>R(g,TM.goal_blocks+i*.4)); FB.forEach((e,i)=>R(e,TM.goal_blocks+3+i*.2,.3));
  R('quote',TM.goal_blocks+6.2);

  const S8=SC[8][0]/K;
  R('l1',S8+.3); R('l2',S8+.7); R('l3',S8+1.1); R('cal',S8+1.6); R('cl',S8+4.2);
  $('blk').setAttribute('y',(500+180*p(u,S8+4.2,S8+5)).toFixed(1)); $('blk').setAttribute('opacity',u>=S8+4.2?1:0);