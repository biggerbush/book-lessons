const sc=p(u,TM.phone_scroll,TM.phone_scroll+1);
  $('scr').setAttribute('opacity',sc); $('scr').setAttribute('transform','translate(0 '+(60*(1-sc)).toFixed(1)+')');
  const hs=p(u,TM.sinking_heart,TM.sinking_heart+1.5), hb=1+.05*Math.pow(Math.abs(Math.sin(t*3)),6)*(1-hs);
  $('hrt').setAttribute('transform','translate(1300 '+(740+40*hs).toFixed(1)+') scale('+((.38-.14*hs)*hb).toFixed(3)+')');
  $('hrtP').setAttribute('class',u>=TM.sinking_heart?'loss':'gain');

  rise($('fr'),p(u,TM.friend_news,TM.friend_news+.5)); rise($('frB'),p(u,TM.friend_news+.6,TM.friend_news+1.1));
  rise($('you'),p(u,TM.friend_news+.3,TM.friend_news+.8)); rise($('rep'),p(u,TM.friend_news+6.2,TM.friend_news+6.7));
  rise($('knot'),p(u,TM.knot_stomach,TM.knot_stomach+.5));
  rise($('th0'),p(u,TM.mind_spiral,TM.mind_spiral+.5)); rise($('th1'),p(u,TM.mind_spiral+1.2,TM.mind_spiral+1.7));
  rise($('spi'),p(u,TM.mind_spiral+.5,TM.mind_spiral+1)); SPI.setAttribute('transform','translate(1285 560) rotate('+((t*90)%360).toFixed(1)+')');
  rise($('jud'),p(u,TM.mind_spiral+4.2,TM.mind_spiral+4.8));

  rise($('trk'),p(u,SC[2][0]/K+.5,SC[2][0]/K+1));
  const rk=p(u,TM.race_track,TM.race_track+4), bob=Math.abs(Math.sin(t*6))*6*(rk>0&&rk<1?1:0);
  $('rT').setAttribute('transform','translate('+(160+800*rk).toFixed(1)+' '+(-bob).toFixed(1)+')');
  $('rY').setAttribute('transform','translate('+(240+360*rk).toFixed(1)+' '+(-bob).toFixed(1)+')');
  rise($('pie'),p(u,TM.pie_slice,TM.pie_slice+.5)); const pk=p(u,TM.pie_slice+.6,TM.pie_slice+1.4);
  $('slc').setAttribute('transform','translate('+(30*pk).toFixed(1)+' '+(-52*pk).toFixed(1)+')');
  rise($('pieT'),p(u,TM.pie_slice+1,TM.pie_slice+1.6));

  rise($('npie'),p(u,SC[3][0]/K+.4,SC[3][0]/K+.9)); rise($('tbl'),p(u,TM.endless_table,TM.endless_table+.5)); rise($('sub3'),p(u,TM.endless_table,TM.endless_table+.5));
  const hl=u>=TM.endless_table+4.6;
  seats.forEach((g,i)=>{const a=TM.endless_table+.3+i*.15; rise(g,p(u,a,a+.4)); if(i===3||i===6){const c=hl?'gain':'ink'; g.children[0].setAttribute('class',c); g.children[1].setAttribute('class',c)}});
  rise($('lbl3'),p(u,TM.endless_table+4.6,TM.endless_table+5.1)); rise($('cnl'),p(u,TM.endless_table+4.6,TM.endless_table+5.2));
  rise($('door'),p(u,TM.open_door,TM.open_door+.5)); const sx=1-.75*p(u,TM.open_door+.8,TM.open_door+2);
  $('dp').setAttribute('transform','matrix('+sx.toFixed(3)+',0,0,1,'+(1166*(1-sx)).toFixed(1)+',0)');

  rise($('ltS'),p(u,TM.let_them_sign,TM.let_them_sign+.5));
  [0,1,2].forEach(i=>{const a=TM.let_them_sign+.8+i*1.6; rise($('lc'+i),p(u,a,a+.4))});
  rise($('sub4'),p(u,TM.let_them_sign+5.4,TM.let_them_sign+6)); rise($('bat'),p(u,TM.let_them_sign+8.4,TM.let_them_sign+8.9));
  $('batF').setAttribute('width',(256*(1-.85*p(u,TM.let_them_sign+8.8,TM.let_them_sign+12))).toFixed(1));
  CK.forEach((c,i)=>{rise(c[0],p(u,TM.clock_pair+i*.4,TM.clock_pair+i*.4+.5)); const s=i?40:200;
    c[1].setAttribute('transform','rotate('+((t*s/12)%360).toFixed(1)+' '+c[3]+' 470)'); c[2].setAttribute('transform','rotate('+((t*s)%360).toFixed(1)+' '+c[3]+' 470)')});
  rise($('clk'),p(u,TM.clock_pair+1,TM.clock_pair+1.6));

  rise($('comp'),p(u,TM.compass,TM.compass+.5));
  const na=85+70*Math.sin(t*4.5)*(1-p(u,TM.compass+.5,TM.compass+4.5));
  $('ndl').setAttribute('transform','rotate('+na.toFixed(1)+' 450 480)');
  rise($('cpl'),p(u,TM.compass+4.5,TM.compass+5)); rise($('spot'),p(u,TM.spotlight,TM.spotlight+.6)); rise($('ctx'),p(u,TM.spotlight+5,TM.spotlight+5.6));

  rise($('stp'),p(u,SC[6][0]/K+.5,SC[6][0]/K+1)); rise($('clm'),p(u,SC[6][0]/K+.8,SC[6][0]/K+1.3));
  rise($('lmS'),p(u,TM.let_me_sign,TM.let_me_sign+.5)); rise($('lm0'),p(u,TM.let_me_sign+.6,TM.let_me_sign+1.1));
  rise($('lm1'),p(u,TM.small_step,TM.small_step+.5)); rise($('ask'),p(u,TM.small_step+3.8,TM.small_step+4.4));
  const ps=p(u,TM.small_step+.5,TM.small_step+1.5)+p(u,TM.small_step+8.3,TM.small_step+9.3), hop=30*Math.sin(Math.PI*(ps%1));
  $('clm').setAttribute('transform','translate('+(860+120*ps).toFixed(1)+' '+(700-80*ps-75-hop).toFixed(1)+')');
  rise($('nud'),p(u,TM.small_step+8.3,TM.small_step+8.9));

  rise($('zone'),p(u,SC[7][0]/K+.5,SC[7][0]/K+1));
  [0,1,2].forEach(i=>{const a=TM.dice_roll+.6+i*.6; rise($('l'+i),p(u,a,a+.4))});
  const dr=360*p(u,TM.dice_roll,TM.dice_roll+1.2);
  $('dc0').setAttribute('transform','rotate('+dr.toFixed(1)+' 404 358)'); $('dc1').setAttribute('transform','rotate('+(-dr).toFixed(1)+' 476 358)');
  const rl=p(u,TM.open_hand+.4,TM.open_hand+1.6);
  $('lgo').setAttribute('transform','translate(0 '+(-14*rl+3*Math.sin(t*1.5)*rl).toFixed(1)+')'); $('lgo').setAttribute('opacity',(1-.3*rl).toFixed(2));
  rise($('hand'),p(u,SC[7][0]/K+1,SC[7][0]/K+1.5)); const oh=p(u,TM.open_hand,TM.open_hand+.4);
  $('fist').setAttribute('opacity',1-oh); $('opn').setAttribute('opacity',oh);
  BL.forEach((b,i)=>{const a=TM.open_hand+3.4+i*.3; rise(b,p(u,a,a+.3))}); rise($('kee'),p(u,TM.open_hand+3.4,TM.open_hand+4));

  const s8=SC[8][0]/K;
  rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+.7,s8+1.2));
  rise($('qc'),p(u,s8+3.4,s8+3.9)); rise($('qd'),p(u,s8+3.8,s8+4.3)); rise($('qe'),p(u,s8+4.2,s8+4.7));
  $('qn').setAttribute('transform','rotate('+(45+60*Math.sin(t*4)*(1-p(u,s8+.5,s8+4))).toFixed(1)+' 1340 440)');