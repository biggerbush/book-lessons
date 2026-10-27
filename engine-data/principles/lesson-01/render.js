const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));

  R('ball',TM.title_card); $('crack').setAttribute('stroke-dashoffset',(1-p(u,TM.title_card+4.2,TM.title_card+4.9)).toFixed(3));

  R('dal',TM.young_dalio); R('dchart',TM.debt_chart);
  const df=TM.debt_chart+5;
  bars.forEach((b,i)=>{const h=BH[i]*p(u,TM.debt_chart+.3+i*.4,TM.debt_chart+1.3+i*.4);b.setAttribute('y',(700-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
  R('mex',df);
  R('chk',TM.check_mark);

  R('tv',TM.tv_studio); R('cap',TM.capitol);
  chips.forEach(([c,d])=>{const k=p(u,TM.bet_chips+d,TM.bet_chips+d+.3);c.setAttribute('opacity',k.toFixed(2));c.setAttribute('transform','translate(0 '+(-40*(1-k)).toFixed(1)+')')});
  R('chl',TM.bet_chips+.4); R('conf',TM.bet_chips+1.8);

  R('fed',TM.fed_building); R('mkt',TM.fed_building+.8);
  const cv=p(u,TM.fed_building+.6,TM.fed_building+1.1);
  coins.forEach((c,i)=>{const f=(t*.5+i*.37)%1;c.setAttribute('cy',(612+100*f).toFixed(1));c.setAttribute('opacity',(cv*(1-f)).toFixed(2))});
  $('up').setAttribute('stroke-dashoffset',(1-p(u,TM.rising_arrow,TM.rising_arrow+2.5)).toFixed(3));
  $('uph').setAttribute('opacity',p(u,TM.rising_arrow+2.3,TM.rising_arrow+2.6)); R('upl',TM.rising_arrow+2.3);
  R('opp',TM.rising_arrow+4.6);

  staff.forEach((s,i)=>{if(i)s.setAttribute('opacity',(1-p(u,TM.empty_desks+.6+i*.45,TM.empty_desks+.9+i*.45)).toFixed(2))});
  const solo=u>=TM.dad_loan+6.2; staff[0].childNodes.forEach(n=>n.setAttribute('class',solo?'gain':'ink'));
  R('loan',TM.dad_loan);
  $('bill').setAttribute('x',(1120+130*p(u,TM.dad_loan+.8,TM.dad_loan+2)).toFixed(1));
  $('amt').textContent='$'+(Math.round(400*p(u,TM.dad_loan+.8,TM.dad_loan+2.2))*10).toLocaleString('en-US');
  R('one',TM.dad_loan+6.2);

  R('mir',TM.mirror); R('stamp',TM.mirror+5.4,.3); R('bl',TM.blinders); R('nt',TM.blinders+1.6);
  const bv=p(u,TM.blinders+.6,TM.blinders+1.2);
  AR.forEach((a,i)=>{const f=(t*.6+i*.27)%1,k=Math.min(f/.7,1),y=440+(i%2)*50,o=bv*(f<.7?1:1-(f-.7)/.3);let x;
    if(i<2){x=860+140*k;a.setAttribute('d',`M${(x-80).toFixed(1)} ${y}H${x.toFixed(1)}m-16-14 16 14-16 14`)}
    else{x=1340-140*k;a.setAttribute('d',`M${(x+80).toFixed(1)} ${y}H${x.toFixed(1)}m16-14-16 14 16 14`)}
    a.setAttribute('opacity',o.toFixed(2))});

  R('q1',TM.question_one); R('q2',TM.question_two);
  const sk=p(u,TM.question_two+.6,TM.question_two+1.2); $('q1s').setAttribute('x2',(140+420*sk).toFixed(1)); $('q1s').setAttribute('opacity',sk>0?1:0);
  $('q1t').setAttribute('fill-opacity',(1-.45*sk).toFixed(2));
  dec.forEach(([g,q,c],i)=>{const a=TM.question_two+5.4+i*.35;rise(g,p(u,a,a+.4));const k=p(u,a+.5,a+.8);q.setAttribute('opacity',(1-k).toFixed(2));c.setAttribute('opacity',k.toFixed(2))});
  R('decl',TM.question_two+5.4);

  R('th',TM.thinkers);
  const ur=u>=TM.thinkers+5.8;
  TB.forEach(([g,r,tx],i)=>{rise(g,p(u,TM.thinkers+.6+i*.3,TM.thinkers+.9+i*.3));tx.textContent=ur?'BECAUSE':'NO';tx.style.fill=ur?'var(--ink)':'var(--loss)';r.setAttribute('stroke',ur?'var(--ink)':'var(--loss)')});
  R('why',TM.thinkers+5.8); $('lnk').setAttribute('opacity',p(u,TM.thinkers+5.8,TM.thinkers+6.3)); R('und',TM.thinkers+6.2);
  R('sh',TM.shield);
  const hf=(t*.7)%1,he=.3+.7*Math.min(hf/.6,1),hx=1450-100*he,hy=280+80*he,ho=hf<.6?1:1-(hf-.6)/.4;
  $('hitp').setAttribute('d',`M${(hx+50).toFixed(1)} ${(hy-40).toFixed(1)}L${hx.toFixed(1)} ${hy.toFixed(1)}`); $('hitp').setAttribute('opacity',ho.toFixed(2));
  $('hitc').setAttribute('cx',hx.toFixed(1)); $('hitc').setAttribute('cy',hy.toFixed(1)); $('hitc').setAttribute('opacity',ho.toFixed(2));
  $('spk').setAttribute('r',(hf<.6?0:10+30*(hf-.6)/.4).toFixed(1)); $('spk').setAttribute('opacity',(hf<.6?0:1-(hf-.6)/.4).toFixed(2));

  R('qlab',TM.your_belief); R('blf',TM.your_belief+.8);
  R('qa',TM.your_belief+4.6); R('qb',TM.your_belief+5); R('qc',TM.your_belief+5.4); R('qd',TM.your_belief+5.8);
  R('lensw',TM.your_belief+6.2); R('dis',TM.your_belief+6.8);
  $('lens2').setAttribute('transform','translate('+(1180+60*Math.sin(t*.9)).toFixed(1)+' '+(400+8*Math.sin(t*1.4)).toFixed(1)+')');