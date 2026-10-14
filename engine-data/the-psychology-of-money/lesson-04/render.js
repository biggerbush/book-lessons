rise($('dr0'),p(u,TM.two_doors,TM.two_doors+.5)); rise($('dr1'),p(u,TM.two_doors+.6,TM.two_doors+1.1));
  $('upA').setAttribute('transform','translate(0 '+(-8*Math.abs(Math.sin(t*2))).toFixed(1)+')'); rise($('opp'),p(u,TM.two_doors+4.2,TM.two_doors+4.7));

  const rk=p(u,TM.rocket,TM.rocket+3), ry=640-310*rk; rise($('rkW'),p(u,TM.rocket,TM.rocket+.4));
  $('rkt').setAttribute('transform','translate(300 '+ry.toFixed(1)+')');
  $('fl').setAttribute('transform','translate(0 44) scale(1 '+(1+.3*Math.sin(t*20)).toFixed(2)+') translate(0 -44)');
  $('trail').setAttribute('d','M300 720V'+Math.min(720,ry+95).toFixed(1)); $('trail').setAttribute('opacity',rk>.02?1:0);
  rise($('dice'),p(u,TM.dice,TM.dice+.5));
  DC.forEach(([g,x,y],k)=>g.setAttribute('transform','translate('+x+' '+y+') rotate('+((k?-1:1)*(10+8*Math.sin(t*1.5+k))).toFixed(1)+')'));
  C1.forEach((c,i)=>rise(c,p(u,TM.dice+.8+i*1.6,TM.dice+1.3+i*1.6)));
  DB.forEach((g,i)=>rise(g,p(u,TM.dice+3.8+i*.25,TM.dice+4.3+i*.25)));
  rise($('dare'),p(u,TM.dice+6.2,TM.dice+6.8));

  rise($('shd'),p(u,TM.shield,TM.shield+.5)); rise($('pig'),p(u,TM.piggy_bank,TM.piggy_bank+.5));
  C2.forEach((c,i)=>rise(c,p(u,TM.piggy_bank+.5+i*1.1,TM.piggy_bank+1+i*1.1)));
  const cf=(t%1.6)/1.6; $('pcoin').setAttribute('cy',(230+110*ease(cl(cf/.8))).toFixed(1)); $('pcoin').setAttribute('opacity',cf<.8?1:0);
  rise($('lk'),p(u,TM.piggy_bank+4.2,TM.piggy_bank+4.8)); $('lbar').setAttribute('fill-opacity',(.6+.4*Math.abs(Math.sin(t*2))).toFixed(2));
  rise($('hum'),p(u,TM.piggy_bank+10.7,TM.piggy_bank+11.3));

  rise($('trd'),p(u,TM.trader,TM.trader+.5)); rise($('cht'),p(u,TM.crash_chart,TM.crash_chart+.5));
  $('cline').setAttribute('stroke-dashoffset',(1-p(u,TM.crash_chart+.3,TM.crash_chart+3)).toFixed(3));
  rise($('bet'),p(u,TM.crash_chart+2.5,TM.crash_chart+3));
  BL.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.money_pile+i*.15,TM.money_pile+i*.15+.3)));
  rise($('rich'),p(u,TM.money_pile+.4,TM.money_pile+1));

  const gone=1-.7*p(u,TM.empty_pockets,TM.empty_pockets+.6);
  ST.forEach(([g,x],i)=>{g.setAttribute('opacity',(p(u,TM.bigger_bets+i*.6,TM.bigger_bets+i*.6+.4)*gone).toFixed(2)); g.setAttribute('transform','rotate('+(i*i*.5*Math.sin(t*2.5+i)).toFixed(2)+' '+x+' 600)')});
  rise($('blab'),p(u,TM.bigger_bets,TM.bigger_bets+.5)); rise($('pkt'),p(u,TM.empty_pockets,TM.empty_pockets+.5));
  // turned-out pocket linings sway gently
  const sw=6*Math.sin(t*2.2);
  $('pk0').setAttribute('transform','rotate('+sw.toFixed(2)+' 1030 300)'); $('pk1').setAttribute('transform','rotate('+(-sw).toFixed(2)+' 1290 300)');
  rise($('gr1'),p(u,TM.empty_pockets+3.4,TM.empty_pockets+4)); rise($('gr2'),p(u,TM.empty_pockets+6,TM.empty_pockets+6.6));

  rise($('tre'),p(u,TM.sequoia_tree,TM.sequoia_tree+.5)); rise($('clk'),p(u,TM.clock,TM.clock+.5));
  $('mh').setAttribute('transform','rotate('+(t*120%360).toFixed(1)+' 700 430)'); $('hh').setAttribute('transform','rotate('+(t*10%360).toFixed(1)+' 700 430)');
  rise($('fear'),p(u,TM.clock+5,TM.clock+5.5)); rise($('trk'),p(u,TM.clock+10,TM.clock+10.5));
  const tk=p(u,TM.clock+10.3,TM.clock+13.3);
  TK.forEach(([ln,y,f,end])=>{ln.setAttribute('d','M920 '+y+'H'+(920+540*Math.min(tk,f)).toFixed(1)); end.setAttribute('opacity',tk>=f?1:0)});
  rise($('play'),p(u,TM.clock+10.5,TM.clock+11.1));

  rise($('csh'),p(u,TM.cushion,TM.cushion+.5)); rise($('stm'),p(u,TM.storm_cloud,TM.storm_cloud+.5)); rise($('svl'),p(u,TM.storm_cloud+.8,TM.storm_cloud+1.3));
  RN.forEach((r,i)=>{const x=370+i*24,y=350+((t*200+i*53)%140); r.setAttribute('d','M'+x+' '+y.toFixed(1)+'l-6 18')});
  const hit=u>=TM.storm_cloud+5.4; $('bolt').setAttribute('opacity',hit&&(t%2.2)<.3?1:0);
  $('cst').setAttribute('transform','translate(0 '+(hit?6*Math.abs(Math.sin(t*3)):0).toFixed(1)+')');
  rise($('pln'),p(u,TM.storm_cloud+8.3,TM.storm_cloud+8.8)); $('real').setAttribute('stroke-dashoffset',(1-p(u,TM.storm_cloud+8.6,TM.storm_cloud+10.6)).toFixed(3));
  rise($('ppl'),p(u,TM.storm_cloud+8.6,TM.storm_cloud+9.2));

  rise($('scl'),p(u,TM.balance_scale,TM.balance_scale+.5));
  const a=3*Math.sin(t*.9), dy=320*Math.sin(a*Math.PI/180);
  $('bm').setAttribute('transform','rotate('+a.toFixed(2)+' 800 280)');
  $('pL').setAttribute('transform','translate(0 '+(-dy).toFixed(1)+')'); $('pR').setAttribute('transform','translate(0 '+dy.toFixed(1)+')');
  rise($('sun'),p(u,TM.sunrise,TM.sunrise+.5)); rise($('lL'),p(u,TM.sunrise,TM.sunrise+.5));
  rise($('umb'),p(u,TM.umbrella,TM.umbrella+.5)); rise($('lR'),p(u,TM.umbrella,TM.umbrella+.5));
  $('ubl').setAttribute('opacity',(t%1.5)<.9?1:.2); rise($('both'),p(u,TM.umbrella+3.5,TM.umbrella+4.1));

  const e8=SC[8][0]/K;
  rise($('qa'),p(u,e8+.5,e8+1)); rise($('qb'),p(u,e8+.9,e8+1.4)); rise($('qc'),p(u,e8+1.3,e8+1.8));
  rise($('cg'),p(u,e8+1.8,e8+2.3));
  CK.forEach((g,i)=>rise(g,p(u,e8+2.3+i*.3,e8+2.7+i*.3)));
  rise($('cl8'),p(u,e8+4.3,e8+4.8));
  RN8.forEach((r,i)=>{const x=1230+i*28,y=340+((t*160+i*37)%62); r.setAttribute('d','M'+x+' '+y.toFixed(1)+'l-6 18')});
  rise($('nx'),p(u,e8+4.5,e8+5.1));