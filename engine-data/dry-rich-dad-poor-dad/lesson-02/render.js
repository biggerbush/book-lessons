// title: a newcomer joins the circle
  const jn=p(t,.6,2.2); $('joiner').setAttribute('cx',(1540+(SL[6][0]-1540)*jn).toFixed(1)); $('joiner').setAttribute('cy',(700+(SL[6][1]-700)*jn).toFixed(1));

  // Polgar home
  rise($('girls'),p(u,TM.girls,TM.girls+.5)); rise($('board'),p(u,TM.chess,TM.chess+.5));
  SP.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.books+i*.04,TM.books+i*.04+.3))); rise($('pics'),p(u,TM.pics,TM.pics+.5));

  // sisters
  [TM.susan,TM.sofia,TM.judit].forEach((a,i)=>rise($('c'+i),p(u,a,a+.5)));
  rise($('j27'),p(u,TM.y27,TM.y27+.5)); $('yrs').textContent=Math.round(27*p(u,TM.y27,TM.y27+1.4))+' years';

  // three groups
  [TM.close0,TM.many0,TM.power0].forEach((a,i)=>rise($('g'+i),p(u,a,a+.5)));

  // the close
  const ob=u>=TM.obese; FR[1].setAttribute('class',ob?'loss':'ink'); FR[1].setAttribute('r',(28+(ob?8*Math.abs(Math.sin(t*3)):0)).toFixed(1));
  rise($('ob'),p(u,TM.obese,TM.obese+.5)); $('obv').textContent='+'+Math.round(57*p(u,TM.obese+.3,TM.obese+1.5))+'%';

  // the many
  bub.forEach((b,i)=>{const a=i<6?TM.actors+i*.35:TM.along; rise(b,p(u,a,a+.3))});
  $('lineB').style.stroke=u>=TM.actors?'var(--loss)':'var(--ink)'; $('lineC').style.stroke=u>=TM.actors?'var(--gain)':'var(--ink)';
  rise($('asch'),p(u,TM.along,TM.along+.6)); rise($('tribe'),p(u,TM.tribe,TM.tribe+.5));

  // the powerful
  rise($('top'),p(u,SC[6][0]/K+.6,SC[6][0]/K+1.2)); $('looks').setAttribute('opacity',p(u,TM.status,TM.status+.8)); rise($('fans'),p(u,TM.status,TM.status+.5));
  rise($('appr'),p(u,TM.approval,TM.approval+.6));

  // join
  rise($('j0'),p(u,TM.run-.4,TM.run)); rise($('j1'),p(u,TM.read-.4,TM.read));
  const r0=p(u,TM.run+.3,TM.run+1.5), r1=p(u,TM.read+.3,TM.read+1.5);
  $('you0').setAttribute('cx',(480).toFixed(1)); $('you0').setAttribute('cy',(760-(760-470)*r0).toFixed(1)); $('you0').setAttribute('opacity',u>=TM.run?1:0);
  $('you1').setAttribute('cx',1100); $('you1').setAttribute('cy',(760-(760-628)*r1).toFixed(1)); $('you1').setAttribute('opacity',u>=TM.read?1:0);
  rise($('surr'),p(u,TM.surr,TM.surr+.6));

  // close
  rise($('qa'),p(u,TM.q,TM.q+.5)); rise($('qb'),p(u,TM.q+.4,TM.q+.9)); rise($('qc'),p(u,TM.q+.8,TM.q+1.3));