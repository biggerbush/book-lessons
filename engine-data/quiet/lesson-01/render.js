const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('t0h',TM.title_card);R('mega',TM.title_card+.2);R('t0s',TM.title_card+.8);R('qp',TM.title_card+5);
  W0.forEach((w,i)=>w.setAttribute('opacity',(u>=TM.title_card?.25+.75*Math.max(0,Math.sin(t*3-i*.9)):0).toFixed(2)));

  R('bold',TM.bold_figure);$('boldf').setAttribute('transform','translate(0 '+(4*Math.sin(t*2)).toFixed(1)+')');
  TRg.forEach((g,i)=>rise(g,p(u,TM.bold_figure+3+i,TM.bold_figure+3.5+i)));
  R('quiet',TM.quiet_figure);R('newtag',TM.quiet_figure+6.5);

  R('p0',TM.farm_boy);R('ar0',TM.stage_speaker-.3);R('p1',TM.stage_speaker);R('ar1',TM.debate_medal-.3);R('p2',TM.debate_medal);R('stud',TM.debate_medal+3);
  $('spk').setAttribute('opacity',(u>=TM.stage_speaker+1?.5+.5*Math.sin(t*5):0).toFixed(2));

  R('town',TM.old_town);R('y1800',TM.old_town+4.9);
  [0,1,2].forEach(i=>R('w'+i,TM.virtue_words+i*.5));R('priv',TM.virtue_words+3);
  WN.forEach(w=>w.setAttribute('fill',u>=TM.virtue_words+3?'var(--gain)':'var(--line)'));R('lincg',TM.lincoln);

  R('farm',TM.city_skyline);R('flow',TM.city_skyline+.5);R('skyl',TM.city_skyline+1.5);
  BL.forEach((b,i)=>{const h=BH[i]*p(u,TM.city_skyline+1+i*.2,TM.city_skyline+1.8+i*.2);b.setAttribute('y',(510-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
  FD.forEach((c,i)=>{const s=(t*.25+i/7)%1,a=1-s;c.setAttribute('cx',(a*a*330+2*a*s*600+s*s*880).toFixed(1));c.setAttribute('cy',(a*a*450+2*a*s*330+s*s*450).toFixed(1))});
  R('hsg',TM.handshake);HL.forEach((g,i)=>rise(g,p(u,TM.handshake+1.5+i,TM.handshake+2+i)));
  R('watch',TM.handshake+5.8);$('swh').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 1260 690)');

  R('book',TM.advice_book);R('oldw',TM.new_words);
  sk('k0',152,130,p(u,TM.new_words+1.2,TM.new_words+1.6));sk('k1',152,200,p(u,TM.new_words+1.4,TM.new_words+1.8));
  [0,1,2].forEach(i=>R('n'+i,TM.new_words+2+i*.6));
  R('mir',TM.mirror);R('bg',TM.mirror+.3);sk('k2',852,190,p(u,TM.mirror+1,TM.mirror+1.4));R('bi',TM.mirror+1.4);

  PP.forEach((g,i)=>rise(g,p(u,TM.school_desk+i*.25,TM.school_desk+.5+i*.25)));
  R('cone6',TM.spotlight);R('bub',TM.spotlight+.4);R('tl',TM.spotlight+.6);R('bulb',TM.spotlight+2.5);R('ql',TM.spotlight+2.5);
  $('rays').setAttribute('opacity',(.4+.6*Math.abs(Math.sin(t*2.5))).toFixed(2));R('learn',TM.spotlight+5.4);

  R('nb',TM.notebook);R('ck0',TM.notebook+2.5);R('ck1',TM.notebook+3.5);R('scl',TM.notebook+3.8);
  const lv=p(u,TM.scale,TM.scale+1.5),ag=-12*(1-lv),ar=ag*Math.PI/180,cx=250*Math.cos(ar),cy=250*Math.sin(ar);
  $('beam').setAttribute('transform','rotate('+ag.toFixed(2)+' 1100 330)');
  $('panL').setAttribute('transform','translate('+(1100-cx).toFixed(1)+' '+(330-cy).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1100+cx).toFixed(1)+' '+(330+cy).toFixed(1)+')');
  const wr=12+22*lv;$('wR').setAttribute('r',wr.toFixed(1));$('wR').setAttribute('cy',(130-wr).toFixed(1));R('mom',TM.scale+.5);

  ['qa','qb','qc','qd'].forEach((id,i)=>R(id,TM.question_mark+i*.4));R('qg',TM.question_mark+1.6);R('ql8',TM.question_mark+2);