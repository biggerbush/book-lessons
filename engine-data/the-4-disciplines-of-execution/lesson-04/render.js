const k0=(t%5)/5;
  $('rn').setAttribute('transform','translate('+(1300+20*k0).toFixed(1)+' '+(760-400*k0).toFixed(1)+') scale('+(1-.6*k0).toFixed(3)+')');
  $('rn').setAttribute('opacity',(1-cl(lin(k0,.6,.92))).toFixed(2));
  FOG.forEach((c,i)=>c[0].setAttribute('cx',(c[1]+14*Math.sin(t*.7+i*1.7)).toFixed(1)));
  rise($('runner'),p(u,TM.foggy_goal,TM.foggy_goal+.5)); rise($('nofin'),p(u,TM.foggy_goal+4.2,TM.foggy_goal+4.8));

  rise($('ban'),p(u,TM.vague_banner,TM.vague_banner+.5)); rise($('team'),p(u,TM.vague_banner+3.8,TM.vague_banner+4.4));
  QS.forEach((q,i)=>rise(q,p(u,TM.shrug_team+i*.15,TM.shrug_team+i*.15+.4)));
  const fd=p(u,TM.shrug_team+2.5,TM.shrug_team+4); TEAM.forEach(g=>g.setAttribute('opacity',(1-.6*fd).toFixed(2)));
  $('whirl').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 1330 580)');
  rise($('whirlw'),p(u,TM.shrug_team+2,TM.shrug_team+2.6)); rise($('fade'),p(u,TM.shrug_team+2.5,TM.shrug_team+3.1));

  const s2=SC[2][0]/K; rise($('fx'),p(u,s2+.6,s2+1.1)); rise($('card'),p(u,TM.formula_card,TM.formula_card+.6));
  rise($('st'),p(u,TM.start_line,TM.start_line+.5)); rise($('fn'),p(u,TM.finish_line,TM.finish_line+.5)); rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  $('trk').setAttribute('x2',(300+700*p(u,TM.finish_line,TM.finish_line+1.2)).toFixed(1));

  rise($('moon'),p(u,TM.moon,TM.moon+.6)); rise($('pod'),p(u,TM.podium,TM.podium+.5)); rise($('q61'),p(u,TM.podium+.6,TM.podium+1.1));
  rise($('traj'),p(u,TM.podium+3,TM.podium+3.6));
  const q=(t%4)/4; $('craft').setAttribute('cx',((1-q)*(1-q)*440+2*q*(1-q)*780+q*q*1110).toFixed(1)); $('craft').setAttribute('cy',((1-q)*(1-q)*500+2*q*(1-q)*600+q*q*470).toFixed(1));
  rise($('clk'),p(u,TM.clock,TM.clock+.5)); const an=t*2;
  $('hand').setAttribute('x2',(620+52*Math.sin(an)).toFixed(1)); $('hand').setAttribute('y2',(700-52*Math.cos(an)).toFixed(1));

  rise($('rk'),p(u,TM.rocket_team,TM.rocket_team+.5));
  $('flm').setAttribute('d','M328 470L360 '+(530+12*Math.sin(t*14)).toFixed(1)+'L392 470Z');
  CRW.forEach((g,i)=>{const a=TM.rocket_team+.3+i*.08; rise(g,p(u,a,a+.4))});
  [4.6,9.2,11].forEach((d,i)=>rise($('k'+i),p(u,TM.rocket_team+d,TM.rocket_team+d+.5)));
  rise($('plan'),p(u,TM.rocket_team+13.4,TM.rocket_team+14));

  rise($('old'),p(u,TM.old_goal,TM.old_goal+.5));
  const sx0=OS.x-8, sw=OS.w+16, sk=p(u,TM.old_goal+1.6,TM.old_goal+2.2);
  $('ostr').setAttribute('x1',sx0.toFixed(1)); $('ostr').setAttribute('x2',(sx0+sw*sk).toFixed(1)); $('ostr').setAttribute('opacity',sk>0?1:0);
  rise($('vg'),p(u,TM.old_goal+2,TM.old_goal+2.5)); rise($('newh'),p(u,TM.new_goal,TM.new_goal+.5));
  [2.2,3.6,5.2].forEach((d,i)=>rise(BX[i],p(u,TM.new_goal+d,TM.new_goal+d+.5)));
  rise($('bar'),p(u,TM.new_goal+6.9,TM.new_goal+7.4)); const pr=.7*p(u,TM.new_goal+7.4,TM.new_goal+10);
  $('bfill').setAttribute('width',(1360*pr).toFixed(1)); $('bm').setAttribute('cx',(120+1360*pr).toFixed(1));

  rise($('rul'),p(u,TM.ruler,TM.ruler+.5)); rise($('mxw'),p(u,TM.ruler+.5,TM.ruler+1));
  const sl=p(u,TM.ruler+4.2,TM.ruler+5.2); $('mx').setAttribute('transform','translate('+(760-340*sl).toFixed(1)+' 420)');
  rise($('ghost'),p(u,TM.ruler+4.2,TM.ruler+4.7)); rise($('hon'),p(u,TM.ruler+4.4,TM.ruler+5));
  rise($('my'),p(u,TM.gap_arrow,TM.gap_arrow+.5)); const ga=p(u,TM.gap_arrow+.3,TM.gap_arrow+1.3), gx=420+820*ga;
  $('garr').setAttribute('d','M420 580H'+gx.toFixed(1)+'m-22-18 22 18-22 18'); $('garr').setAttribute('opacity',ga>0?1:0);
  rise($('gapl'),p(u,TM.gap_arrow+1,TM.gap_arrow+1.5));

  const f=(t%6)/6, yt=410-120*(1-f), hw=10+.43*(410-yt), yb=550-100*f, hb=10+.43*(yb-410);
  $('sTop').setAttribute('points',(300-hw).toFixed(1)+','+yt.toFixed(1)+' '+(300+hw).toFixed(1)+','+yt.toFixed(1)+' 304,410 296,410');
  $('sBot').setAttribute('points','234,550 366,550 '+(300+hb).toFixed(1)+','+yb.toFixed(1)+' '+(300-hb).toFixed(1)+','+yb.toFixed(1));
  $('sStr').setAttribute('y2',yb.toFixed(1)); $('sStr').setAttribute('opacity',f<.97?1:0);
  rise($('hg'),p(u,TM.hourglass,TM.hourglass+.5)); rise($('cmp'),p(u,TM.hourglass+3.7,TM.hourglass+4.2));
  const gh=40+180*p(u,TM.hourglass+4.2,TM.hourglass+6); $('gbar').setAttribute('y',(600-gh).toFixed(1)); $('gbar').setAttribute('height',gh.toFixed(1));
  rise($('urg'),p(u,TM.hourglass+4.3,TM.hourglass+4.9)); rise($('tgt'),p(u,TM.target,TM.target+.5));
  const ka=p(u,TM.target+.6,TM.target+1.2); rise($('arw'),ka); $('arwi').setAttribute('transform','translate('+(100*(1-ka)).toFixed(1)+' '+(-100*(1-ka)).toFixed(1)+')');

  rise($('qa'),p(u,TM.pen_paper,TM.pen_paper+.5)); rise($('qb'),p(u,TM.pen_paper+.4,TM.pen_paper+.9)); rise($('qc'),p(u,TM.pen_paper+.8,TM.pen_paper+1.3));
  rise($('ppr'),p(u,TM.pen_paper+1.2,TM.pen_paper+1.7));
  [0,1,2].forEach(i=>$('b'+i).setAttribute('x2',(1240+130*p(u,TM.pen_paper+1.8+i*.7,TM.pen_paper+2.3+i*.7)).toFixed(1)));
  rise($('nxt'),p(u,TM.pen_paper+6.1,TM.pen_paper+6.7));