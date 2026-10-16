const e0=TM.empty_bowl;
  rise($('bowl0'),p(u,e0,e0+.6));
  const rk=p(u,e0+1,e0+3); $('rice0').setAttribute('transform','translate(0 540) scale(1 '+(rk+.001).toFixed(3)+') translate(0 -540)');
  $('stm0').setAttribute('opacity',(rk*(.55+.45*Math.sin(t*2))).toFixed(2));
  rise($('say0'),p(u,e0+7.6,e0+8.2));

  rise($('eldA'),p(u,TM.elder_table,TM.elder_table+.5)); rise($('hhb'),p(u,TM.elder_table+1.2,TM.elder_table+1.7));
  const sm=TM.stomach_meter; rise($('meter'),p(u,sm-.4,sm+.1));
  const nf=8*p(u,sm+.3,sm+2.3); SG.forEach((s,i)=>{if(i<8)s.setAttribute('fill',i<nf?'var(--gain)':'var(--line)')});
  rise($('m80'),p(u,sm+2.2,sm+2.7)); rise($('room'),p(u,sm+3.8,sm+4.3));

  rise($('pL'),p(u,TM.full_plate,TM.full_plate+.5));
  const f1=p(u,TM.full_plate+.4,TM.full_plate+3); $('fl').setAttribute('d',cup(304,576,636-346*f1));
  rise($('spill'),p(u,TM.full_plate+3,TM.full_plate+3.6));
  rise($('pR'),p(u,TM.light_body,TM.light_body+.5));
  const f2=p(u,TM.light_body+.4,TM.light_body+2.6); $('fr').setAttribute('d',cup(1024,1296,636-277*f2));
  rise($('room2'),p(u,TM.light_body+2.6,TM.light_body+3.1)); rise($('hl'),p(u,TM.light_body+4.2,TM.light_body+4.8));

  const s3=SC[3][0]/K; rise($('big'),p(u,s3+.3,s3+.9)*(1-.6*p(u,TM.small_plates+.6,TM.small_plates+1.2)));
  rise($('arr3'),p(u,TM.small_plates,TM.small_plates+.5)); rise($('tr'),p(u,TM.small_plates+.6,TM.small_plates+1.1));
  DS.forEach((g,i)=>{const a=TM.tray+i*.8; rise(g,p(u,a,a+.4))});
  rise($('eas'),p(u,TM.tray+7.2,TM.tray+7.8));

  RB.forEach((r,i)=>r.setAttribute('stroke-dashoffset',(1-p(u,TM.rainbow+i*.25,TM.rainbow+i*.25+.8)).toFixed(3)));
  rise($('bk'),p(u,TM.veg_basket,TM.veg_basket+.5)); PR.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.veg_basket+.4+i*.2,TM.veg_basket+.6+i*.2)));
  rise($('cnt'),p(u,TM.count_206,TM.count_206+.4));
  const nd=Math.round(206*p(u,TM.count_206+.2,TM.count_206+2.6)); DT.forEach((d,i)=>d.setAttribute('opacity',i<nd?1:.12)); $('n206').textContent=nd;

  rise($('k0'),p(u,TM.sweet_potato+.3,TM.sweet_potato+.8));
  [1,2,3].forEach(i=>{const a=TM.sweet_potato+2.1+i*.8; rise($('k'+i),p(u,a,a+.5))});
  rise($('tea'),p(u,TM.green_tea,TM.green_tea+.5)); $('stm5').setAttribute('opacity',(.55+.45*Math.sin(t*2.2)).toFixed(2));
  rise($('ss'),p(u,TM.sugar_salt,TM.sugar_salt+.5));
  const sc=1-.25*p(u,TM.sugar_salt+.8,TM.sugar_salt+2); $('jars').setAttribute('transform','translate(960 720) scale('+sc.toFixed(3)+') translate(-960 -720)');

  rise($('tmp'),p(u,TM.pillar,TM.pillar+.5));
  PL.forEach((r,i)=>r.setAttribute('opacity',i==1?p(u,TM.pillar+.3,TM.pillar+.8):p(u,TM.pillar+1.5+i*.2,TM.pillar+2+i*.2)));
  rise($('foodL'),p(u,TM.pillar+.6,TM.pillar+1.1));
  rise($('bal'),p(u,TM.scale,TM.scale+.5)); $('beam').setAttribute('transform','rotate('+(3*Math.sin(t*1.2)).toFixed(2)+' 1140 290)');
  rise($('easy'),p(u,TM.scale+1.5,TM.scale+2));
  rise($('daily'),p(u,TM.daily_meal,TM.daily_meal+.5)); ML.forEach((m,i)=>m.setAttribute('opacity',p(u,TM.daily_meal+.4+i*.3,TM.daily_meal+.6+i*.3)));
  rise($('futG'),p(u,TM.daily_meal+2.6,TM.daily_meal+3.1));

  const s7=SC[7][0]/K; rise($('plt'),p(u,s7+.3,s7+.8));
  const n7=5*p(u,TM.fork_down+.5,TM.fork_down+3)+3*p(u,TM.last_bite,TM.last_bite+2);
  BT.forEach((b,i)=>b.setAttribute('opacity',(1-cl(n7-i,0,1)).toFixed(2)));
  $('barf').setAttribute('width',(580*n7/10).toFixed(1));
  const fk=p(u,TM.last_bite+2,TM.last_bite+3), bob=(u>TM.fork_down&&u<TM.last_bite+2)?10*Math.sin(t*5):0;
  $('fork').setAttribute('transform','translate('+(600+170*fk).toFixed(1)+' '+(520-70*fk+bob*(1-fk)).toFixed(1)+') rotate('+(-25+25*fk).toFixed(1)+')');
  rise($('barg'),p(u,TM.fork_down,TM.fork_down+.5)); rise($('chk'),p(u,TM.check_in,TM.check_in+.5)); rise($('fd'),p(u,TM.last_bite+2,TM.last_bite+2.6));

  const c8=TM.challenge; rise($('ch'),p(u,c8,c8+.5)); rise($('pl8'),p(u,c8+.4,c8+.9));
  rise($('qa'),p(u,c8+2.6,c8+3.1)); rise($('qb'),p(u,c8+3,c8+3.5)); rise($('qc'),p(u,c8+3.4,c8+3.9));
  WG.forEach((w,i)=>w.setAttribute('opacity',p(u,c8+2.8+i*.3,c8+3.1+i*.3)));
  rise($('tag8'),p(u,c8+4.6,c8+5.1));