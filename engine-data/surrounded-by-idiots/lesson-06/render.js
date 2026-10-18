const k0=p(u,TM.mirror+2,TM.mirror+3);
  $('tZig').setAttribute('opacity',(1-k0).toFixed(2));
  $('tStar').setAttribute('opacity',k0.toFixed(2));
  $('tStar').setAttribute('transform','translate(1360 380) scale('+(.2+.8*k0).toFixed(3)+') rotate('+((t*20)%360).toFixed(1)+')');

  rise($('lens'),p(u,TM.two_lenses,TM.two_lenses+.5));
  rise($('coinW'),p(u,TM.coin,TM.coin+.5));
  const sx=Math.cos(Math.max(0,u-TM.coin-.5)*1.8);
  $('coin').setAttribute('transform','translate(800 460) scale('+Math.max(.03,Math.abs(sx)).toFixed(3)+' 1)');
  $('coinS').setAttribute('opacity',sx>=0?1:0); $('coinF').setAttribute('opacity',sx<0?1:0);
  rise($('bubA'),p(u,TM.coin+4.6,TM.coin+5.1)); rise($('bubB'),p(u,TM.coin+5.2,TM.coin+5.7));
  rise($('fric'),p(u,TM.coin+8,TM.coin+8.6));

  rise($('axS'),p(u,TM.axis_speed,TM.axis_speed+.4)); $('axV').setAttribute('stroke-dashoffset',(1-p(u,TM.axis_speed+.2,TM.axis_speed+3.4)).toFixed(3));
  rise($('axF'),p(u,TM.axis_focus,TM.axis_focus+.4)); $('axH').setAttribute('stroke-dashoffset',(1-p(u,TM.axis_focus+.2,TM.axis_focus+2.4)).toFixed(3));
  Q.forEach((g,i)=>{const a=TM.axis_focus+(i<2?4.5:7)+(i%2)*.4; rise(g,p(u,a,a+.5))});
  rise($('diag'),p(u,TM.diagonal,TM.diagonal+.5)); $('dg').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
  $('dStar').setAttribute('transform','translate(800 525) scale('+(1+.15*Math.sin(t*5)).toFixed(3)+')');

  rise($('rr'),p(u,TM.red_runner,TM.red_runner+.5)); rise($('gc'),p(u,TM.green_chair,TM.green_chair+.5));
  $('rP').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*6))).toFixed(1)+')'); $('spd').setAttribute('stroke-dashoffset',(t*60).toFixed(1));
  rise($('jR'),p(u,TM.green_chair+4.6,TM.green_chair+5.1)); rise($('jG'),p(u,TM.green_chair+8.4,TM.green_chair+8.9));

  rise($('yb'),p(u,TM.yellow_bulb,TM.yellow_bulb+.5)); rise($('bc'),p(u,TM.blue_clip,TM.blue_clip+.5));
  [0,1,2].forEach(i=>rise($('bq'+i),p(u,TM.blue_clip+.6+i*.6,TM.blue_clip+1+i*.6)));
  const dm=p(u,TM.blue_clip+3.8,TM.blue_clip+4.6);
  $('bulbC').setAttribute('fill-opacity',(1-.75*dm).toFixed(2)); $('bRay').setAttribute('opacity',((1-dm)*(.7+.3*Math.sin(t*4))).toFixed(2));
  rise($('jY'),p(u,TM.blue_clip+3.8,TM.blue_clip+4.3)); rise($('jB'),p(u,TM.blue_clip+8,TM.blue_clip+8.5));

  const FL=[3.8,7.1,10.5,13.9];
  RW.forEach((r,i)=>{const a=TM.word_flip+i*.3; rise(r[0],p(u,a,a+.4)); rise(r[1],p(u,TM.word_flip+FL[i],TM.word_flip+FL[i]+.5))});

  rise($('nb'),p(u,TM.red_blue,TM.red_blue+.5)); $('rub').setAttribute('transform','translate(0 '+(3*Math.sin(t*20)).toFixed(1)+')');
  rise($('tk'),p(u,TM.red_blue+5.4,TM.red_blue+5.9)); rise($('sp'),p(u,TM.red_blue+6,TM.red_blue+6.5)); rise($('ac'),p(u,TM.red_blue+6.6,TM.red_blue+7.1));
  const ck=Math.max(0,u-TM.clock_check);
  $('clkH').setAttribute('transform','rotate('+((ck*180)%360).toFixed(1)+' 500 610)');
  $('mag').setAttribute('transform','translate('+(1100+(ck>0?40*Math.sin(ck*2.5):0)).toFixed(1)+' '+(615+(ck>0?50*Math.sin(ck*1.1):0)).toFixed(1)+')');

  rise($('c1'),p(u,TM.pause_btn,TM.pause_btn+.5));
  const ph=(t%2)/2; $('pRing').setAttribute('r',(110+24*ph).toFixed(1)); $('pRing').setAttribute('opacity',(1-ph).toFixed(2));
  rise($('ar1'),p(u,TM.pause_btn+4.6,TM.pause_btn+5)); rise($('c2'),p(u,TM.pause_btn+5,TM.pause_btn+5.5));
  rise($('ar2'),p(u,TM.new_label-.3,TM.new_label)); rise($('c3'),p(u,TM.new_label,TM.new_label+.5));
  $('strk').setAttribute('x2',(1170+200*p(u,TM.new_label+.6,TM.new_label+1.1)).toFixed(1));
  rise($('gtag'),p(u,TM.new_label+1,TM.new_label+1.5)); rise($('fair'),p(u,TM.new_label+1.6,TM.new_label+2.2));

  rise($('cA'),p(u,TM.colleague,TM.colleague+.5));
  [0,1,2].forEach(i=>{const a=TM.colleague+4.2+i*.4; rise($(['qa','qb','qc'][i]),p(u,a,a+.5))});
  const fl=u>=TM.colleague+6;
  $('tagR').setAttribute('fill',fl?'var(--gain)':'var(--stage)'); $('tagR').setAttribute('stroke',fl?'var(--gain)':'var(--loss)');
  $('tagT').textContent=fl?'STRENGTH':'FLAW'; $('tagT').style.fill=fl?'var(--on-gain)':'var(--loss)';