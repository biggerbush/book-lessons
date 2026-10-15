const R=(id,a,d=.5)=>RZ($(id),p(u,a,a+d));
  RZ($('l7tcow'),p(t,.2,.9)); R('l7clock',TM.title_cow); SA($('l7hand'),'transform','rotate('+(t*120%360).toFixed(1)+' 1290 230)');

  R('l7mcow',TM.purple_cow); R('l7fans',TM.crowd);
  CP.forEach((c,i)=>{const a=TM.copycats+i*.35; RZ(c.o,p(u,a,a+.4))});
  const br=u>=TM.copycats+5; [MC].concat(CP).forEach(c=>L7col(c,br?'var(--muted)':'var(--gain)'));
  R('l7s1b',TM.copycats+8.3);

  R('l7cup',TM.coffee_cup);
  ST.forEach((s,i)=>{const k=(t*.6+i*.33)%1; s.setAttribute('transform','translate(0 '+(-30*k).toFixed(1)+')'); s.setAttribute('opacity',Math.sin(Math.PI*k).toFixed(2))});
  R('l7sign',TM.cafe_sign); R('l7talk',TM.cafe_sign+1.5);
  SH.forEach((g,i)=>{const a=TM.street_corner+i*.25; RZ(g,p(u,a,a+.4))});
  SA($('l7cupf'),'fill',u>=TM.street_corner+2.5?'var(--muted)':'var(--gain)');
  R('l7s2b',TM.street_corner+4.6);

  R('l7kcow',TM.milk_pail); R('l7pail',TM.milk_pail+.6);
  DR.forEach((d,i)=>{const k=((t*.9+i*.33)%1); d.setAttribute('cy',(380+90*k).toFixed(1)); d.setAttribute('opacity',(1-k).toFixed(2))});
  R('l7jar',TM.cash_jar); const nc=Math.round(8*p(u,TM.cash_jar+.4,TM.cash_jar+3.5)); CO.forEach((c,i)=>c.setAttribute('opacity',i<nc?1:0));
  R('l7scale',TM.cash_jar+1.5); const bk=p(u,TM.cash_jar+1.5,TM.cash_jar+3.5);
  BR.forEach((b,i)=>{const h=BH[i]*bk; b.setAttribute('y',(580-h).toFixed(1)); b.setAttribute('height',h.toFixed(1))});
  let wd='M120 700'; for(let x=120;x<=1480;x+=40)wd+='L'+x+' '+(700+12*Math.sin(x/70-t*2.5)).toFixed(1); SA($('l7wv'),'d',wd);
  R('l7wave',TM.cash_jar+4.2); R('l7s3b',TM.cash_jar+7.6);

  R('l7meet',TM.meeting); R('l7safe',TM.safe_box); R('l7book',TM.rule_book); R('l7bulb',TM.rule_book+1.5);
  L7col(SC4,u>=TM.rule_book+5?'var(--muted)':'var(--gain)'); R('l7s4b',TM.rule_book+5);

  R('l7p1',TM.two_teams); const nj=Math.round(5*p(u,TM.two_teams+4.6,TM.two_teams+6)); JK.forEach((c,i)=>c.setAttribute('opacity',i<nj?1:0));
  R('l7p2',TM.workshop); const fk=(t*.5)%1, fcEl=$('l7fc');
  SA(fcEl,'cx',(640+350*fk).toFixed(1)); SA(fcEl,'cy',(420-90*Math.sin(Math.PI*fk)).toFixed(1));
  SA(fcEl,'opacity',(p(u,TM.workshop+.5,TM.workshop+1)*Math.min(1,Math.sin(Math.PI*fk)*3)).toFixed(2));
  R('l7w1',TM.workshop+4.6); R('l7w2',TM.workshop+8); R('l7cyc',TM.cycle_arrow);
  const ix=Math.floor(t*1.5)%4, on=u>=TM.cycle_arrow+.5;
  PL.forEach((q,i)=>{const h=on&&i===ix; q[0].setAttribute('fill',h?'var(--gain)':'var(--stage)'); q[1].style.fill=h?'var(--on-gain)':''});

  FC.forEach((c,i)=>{const a=TM.field+i*.12; RZ(c.o,p(u,a,a+.4))}); R('l7fence',TM.field);
  R('l7lens',TM.magnifier); R('l7s6sub',TM.magnifier);
  const lk=p(u,TM.question_mark,TM.question_mark+1), lx=300+900*(.5+.5*Math.sin(t*.7)), ly=480+70*Math.sin(t*1.3);
  SA($('l7lensm'),'transform','translate('+(lx+(860-lx)*lk).toFixed(1)+' '+(ly+(615-ly)*lk).toFixed(1)+')');
  R('l7qm',TM.question_mark+.8); R('l7s6b',TM.question_mark+1.8);

  R('l7cal',TM.calendar);
  CE.forEach((c,i)=>{const o=u>=TM.calendar+1+i*.5; c[0].setAttribute('fill',o?'var(--gain)':'var(--stage)'); c[1].setAttribute('opacity',o?1:0)});
  R('l7stamp',TM.calendar+5.4);
  R('l7sprout',TM.seed); const gr=p(u,TM.seed+.3,TM.seed+1.8);
  SA($('l7stem'),'d','M1170 718V'+(700-220*gr).toFixed(1));
  SA($('l7leaves'),'transform','translate(0 '+(-220*gr).toFixed(1)+')'); SA($('l7leaves'),'opacity',gr.toFixed(2));
  R('l7ncow2',TM.seed+1.8); R('l7s7b',TM.seed+.5);

  R('l7qa',TM.mirror); R('l7qb',TM.mirror+.4); R('l7qc',TM.mirror+.8); R('l7mir',TM.mirror+1.2); R('l7s8m',TM.mirror+5);