// title: a seedling grows with helpers
  const g0=p(u,TM.title_kid,TM.title_kid+2);
  $('stem').setAttribute('y2',(620-220*g0).toFixed(1)); $('bud').setAttribute('cy',(620-220*g0-24).toFixed(1));
  $('bud').setAttribute('r',g0>.02?(28+2*Math.sin(t*2)).toFixed(1):0);
  rise($('leaves'),p(u,TM.title_kid+1,TM.title_kid+1.5)); rise($('helpers'),p(u,TM.title_kid+4.6,TM.title_kid+5.1));

  // warm and firm
  rise($('par'),p(u,TM.parent,TM.parent+.5)); rise($('hrt'),p(u,TM.heart,TM.heart+.5));
  $('hrtb').setAttribute('transform','translate(400 440) scale('+(1+.06*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');
  rise($('barg'),p(u,TM.bar_high,TM.bar_high+.5)); const by=(560-240*p(u,TM.bar_high+.4,TM.bar_high+1.6)).toFixed(1);
  $('bar').setAttribute('y1',by); $('bar').setAttribute('y2',by); rise($('wise'),p(u,TM.bar_high+3.8,TM.bar_high+4.4));

  // four parents grid
  rise($('grd'),p(u,TM.grid,TM.grid+.5)); rise($('cn'),p(u,TM.low_corner,TM.low_corner+.5));
  rise($('ca'),p(u,TM.low_corner+2.1,TM.low_corner+2.6)); rise($('cp'),p(u,TM.low_corner+4.5,TM.low_corner+5));
  rise($('cw'),p(u,TM.wise_corner,TM.wise_corner+.5)); rise($('kid2'),p(u,TM.wise_corner+.8,TM.wise_corner+1.3));

  // activities
  rise($('fld'),p(u,TM.ball,TM.ball+.5)); const kb=p(u,TM.coach+1,TM.coach+2.2);
  $('ball').setAttribute('cx',(560+635*kb).toFixed(1)); $('ball').setAttribute('cy',(560-110*kb-120*Math.sin(Math.PI*kb)).toFixed(1));
  $('ball').setAttribute('opacity',p(u,TM.ball,TM.ball+.5));
  rise($('coachg'),p(u,TM.coach,TM.coach+.5)); rise($('teamg'),p(u,TM.coach+6.2,TM.coach+6.7)); rise($('teamt'),p(u,TM.coach+6.6,TM.coach+7.1));

  // follow-through
  rise($('clip'),p(u,TM.clipboard,TM.clipboard+.5)); CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.clipboard+1+i*.5,TM.clipboard+1.3+i*.5)));
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); $('stair').setAttribute('stroke-dashoffset',(1-p(u,TM.calendar+1,TM.calendar+3.5)).toFixed(3));
  rise($('endl'),p(u,TM.calendar+3.5,TM.calendar+4)); rise($('ft'),p(u,TM.calendar+7.4,TM.calendar+8));

  // hard thing rule
  rise($('house'),p(u,TM.family,TM.family+.5)); const all=u>=TM.violin+1.5; setc(FAM[0],all?'gain':'ink'); setc(FAM[1],all?'gain':'ink');
  rise($('r1'),p(u,TM.violin,TM.violin+.5));
  CALC.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.violin+.6+i*.15,TM.violin+.9+i*.15)));
  rise($('r2'),p(u,TM.stop_sign,TM.stop_sign+.5));

  // choose and commit
  rise($('menu'),p(u,TM.menu,TM.menu+.5)); const pk=u>=TM.menu+2.5;
  MN[1][0].setAttribute('fill',pk?'var(--gain)':'var(--stage)'); MN[1][0].setAttribute('stroke',pk?'var(--gain)':'var(--ink)');
  MN[1][1].style.fill=pk?'var(--on-gain)':''; $('mchk').setAttribute('opacity',pk?1:0);
  rise($('hg'),p(u,TM.hourglass,TM.hourglass+.5)); rise($('r4'),p(u,TM.hourglass+.3,TM.hourglass+.8)); rise($('two'),p(u,TM.hourglass+3.8,TM.hourglass+4.3));
  const sk=p(u,TM.hourglass+3.8,TM.hourglass+8.6), ty=270+170*sk, hw=80*(450-ty)/190, bb=636-150*sk, hb=80*(bb-450)/190;
  $('sandT').setAttribute('points',(900-hw).toFixed(1)+','+ty.toFixed(1)+' '+(900+hw).toFixed(1)+','+ty.toFixed(1)+' 900,450');
  $('sandB').setAttribute('points',(900-hb).toFixed(1)+','+bb.toFixed(1)+' '+(900+hb).toFixed(1)+','+bb.toFixed(1)+' 978,636 822,636');
  $('yf0').setAttribute('width',(190*cl(sk*2)).toFixed(1)); $('yf1').setAttribute('width',(190*cl(sk*2-1)).toFixed(1));
  rise($('ck1'),p(u,TM.hourglass+8.8,TM.hourglass+9.3)); rise($('ck2'),p(u,TM.hourglass+9.6,TM.hourglass+10.1));

  // gritty group
  rise($('grp'),p(u,TM.team,TM.team+.5)); rise($('flg'),p(u,TM.flag,TM.flag+.5)); const fw=10*Math.sin(t*3);
  $('flagP').setAttribute('d','M184 250h160l'+(-30+fw).toFixed(1)+' 45 '+(30-fw).toFixed(1)+' 45h-160z');
  rise($('youw'),p(u,TM.flag,TM.flag+.5)); $('youm').setAttribute('transform','translate('+(-200*p(u,TM.flag+1,TM.flag+3)).toFixed(1)+' 0)');
  setc(YOU,u>=TM.flag+5?'gain':'ink'); rise($('quo'),p(u,TM.flag+7.4,TM.flag+8)); rise($('mir'),p(u,TM.mirror,TM.mirror+.5));

  // close
  rise($('qa'),p(u,TM.pencil,TM.pencil+.5)); rise($('qb'),p(u,TM.pencil+.4,TM.pencil+.9)); rise($('qc'),p(u,TM.pencil+.8,TM.pencil+1.3));
  rise($('penw'),p(u,TM.pencil+1.2,TM.pencil+1.7));
  const pw=p(u,TM.pencil+1.5,TM.pencil+4); $('ul').setAttribute('x2',(860+440*pw).toFixed(1));
  $('pen').setAttribute('transform','translate('+(860+440*pw).toFixed(1)+' 790)'); rise($('inv'),p(u,TM.pencil+6.9,TM.pencil+7.4));