const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('tl',TM.spiral,.6); N0.forEach((n,i)=>{const a=TM.spiral+6.6+i*.35; rise(n[0],p(u,a,a+.35))});
  dotAt($('tdot'),1300,440,140,-Math.PI/2+t*.9); $('tdot').setAttribute('opacity',p(u,TM.spiral,TM.spiral+.6));

  R('tg',TM.target); const dk=p(u,TM.target+.3,TM.target+1); $('dart').setAttribute('transform','translate('+(140*(1-dk)).toFixed(1)+' '+(-140*(1-dk)).toFixed(1)+')'); $('dart').setAttribute('opacity',dk);
  R('fk',TM.two_paths); R('ds',TM.two_paths+3); $('dsb').setAttribute('transform','translate('+(6*Math.sin(t*2.4)).toFixed(1)+' '+(5*Math.cos(t*1.9)).toFixed(1)+')');
  R('mn',TM.menu_board); MI.forEach((m,i)=>{const a=TM.menu_board+i*.15, ch=i===0||i===3, d=p(u,TM.menu_board+2,TM.menu_board+2.6); rise(m[0],p(u,a,a+.4)*(ch?1:1-.6*d)); m[1].setAttribute('opacity',ch?d:0)});
  R('mnc',TM.menu_board+1.5,.6);

  R('rb',TM.roadblock); R('fl',TM.flashlight);
  RK.forEach((c,i)=>{const a=TM.flashlight+.6+i*.3; c.setAttribute('opacity',(.12+.88*p(u,a,a+.4)).toFixed(2))});
  R('rf',TM.red_flag); R('rft',TM.red_flag+.4);

  R('trn',TM.train); const tk=p(u,TM.train+4.1,TM.train+5.5); $('trm').setAttribute('transform','translate('+(130*tk).toFixed(1)+' 0)'); $('trm').setAttribute('opacity',(1-.6*tk).toFixed(2));
  R('trp',TM.train+4.1); R('tre',TM.train+.6); R('tt',TM.timetable);
  $('lk').setAttribute('opacity',p(u,TM.timetable+3.8,TM.timetable+4.4)); R('px',TM.timetable+3.8); R('why',TM.timetable+8);
  const fx=p(u,TM.tree_roots+10.3,TM.tree_roots+11.3);
  R('rts',TM.tree_roots); $('rts').setAttribute('style','stroke:'+(fx>.5?'var(--gain)':'var(--loss)'));
  R('rc',TM.tree_roots+.4); R('pv',TM.tree_roots+4.5); R('rv',TM.tree_roots+5);
  PD.forEach(c=>c.setAttribute('r',(14*(1-fx)).toFixed(1))); R('fx',TM.tree_roots+10.3,.6);

  R('bp',TM.blueprint); $('route').setAttribute('stroke-dashoffset',(100*(1-p(u,TM.blueprint+.6,TM.blueprint+2.2))).toFixed(1));
  FR.forEach((g,i)=>{const a=TM.film_script+i*.5; rise(g,p(u,a,a+.4))}); R('fsl',TM.film_script+1.5);
  R('nb',TM.notebook); NC.forEach((c,i)=>{const a=TM.notebook+1+i*.7; c.setAttribute('opacity',i<3?p(u,a,a+.3):0)});
  $('pg').setAttribute('width',(165*p(u,TM.notebook+1,TM.notebook+3.4)).toFixed(1));

  R('rg0',TM.runner); const rk=p(u,TM.runner+.3,TM.runner+4), sw=rk>0&&rk<1?20*Math.sin(t*12):0;
  $('rg').setAttribute('transform','translate('+(380*rk).toFixed(1)+' 0)');
  LG.setAttribute('d','M250 562L'+(228+sw).toFixed(1)+' 618M250 562L'+(272-sw).toFixed(1)+' 618');
  R('ga',TM.gauge); const th=Math.PI*(.12+.7*p(u,TM.gauge+.5,TM.gauge+2))+.03*Math.sin(t*3);
  $('ndl').setAttribute('x2',(1260-170*Math.cos(th)).toFixed(1)); $('ndl').setAttribute('y2',(620-170*Math.sin(th)).toFixed(1));
  R('gal',TM.gauge+2);

  R('lp',TM.loop_arrow); dotAt($('lpd'),420,500,160,-Math.PI/2+t*1.2); $('lpd').setAttribute('opacity',p(u,TM.loop_arrow,TM.loop_arrow+.5));
  ['tg0','tg1','tg2'].forEach((id,i)=>R(id,TM.loop_arrow+2.1+i*.6));
  R('st',TM.staircase); const sk=p(u,TM.staircase+.5,TM.staircase+5.5), si=Math.round(sk*(TR.length-1));
  TR.forEach((q,i)=>q[0].setAttribute('stroke',i<=si?'var(--gain)':'var(--line)'));
  $('clb').setAttribute('cx',TR[si][1].toFixed(1)); $('clb').setAttribute('cy',(TR[si][2]-20).toFixed(1)); $('clb').setAttribute('opacity',p(u,TM.staircase+.3,TM.staircase+.6));
  R('stl',TM.staircase+1);

  BX.forEach((g,i)=>{const a=TM.five_boxes+i*.25; rise(g,p(u,a,a+.4));
    const h=HY[i]*p(u,a+.4,a+1.2), ht=(220-HY[i])*p(u,TM.team_pair+.3+i*.2,TM.team_pair+1+i*.2);
    BY[i].setAttribute('y',(620-h).toFixed(1)); BY[i].setAttribute('height',h.toFixed(1));
    BT[i].setAttribute('y',(620-h-ht).toFixed(1)); BT[i].setAttribute('height',ht.toFixed(1))});
  R('ba',TM.broken_arrow); R('lgd',TM.team_pair); R('tcap',TM.team_pair+.8,.6);

  R('qa',TM.mirror); R('qb',TM.mirror+3.4); R('qc',TM.mirror+3.8); R('cl',TM.mirror+.4);
  N8[4][1].setAttribute('fill',u>=TM.mirror+3.4?'var(--loss)':'var(--stage)');
  const hk=p(u,TM.mirror+4.2,TM.mirror+5.4), ha=162*Math.PI/180, hx=L8[0]+L8[2]*Math.cos(ha), hy=L8[1]+L8[2]*Math.sin(ha);
  $('hlp').setAttribute('cx',(1050+(hx-1050)*hk).toFixed(1)); $('hlp').setAttribute('cy',(590+(hy-590)*hk).toFixed(1)); $('hlp').setAttribute('opacity',p(u,TM.mirror+4.2,TM.mirror+4.5));