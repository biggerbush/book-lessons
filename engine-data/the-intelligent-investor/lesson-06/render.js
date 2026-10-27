TK.forEach((e,i)=>{const x=900+((i*150-t*90)%1200+1200)%1200;
    const k=Math.min(cl((x-1070)/40),cl((1340-x)/40));
    if(k<=0){e.setAttribute('x',1200);e.setAttribute('opacity',0)}
    else{e.setAttribute('x',x.toFixed(1));e.setAttribute('opacity',k.toFixed(2))}});
  rise($('shop0'),p(u,TM.ticker_tape+5.4,TM.ticker_tape+6));
  $('sl0').setAttribute('opacity',(.55+.35*Math.sin(t*3)).toFixed(2));

  rise($('bk'),p(u,TM.corner_shop,TM.corner_shop+.6));
  rise($('cust'),p(u,TM.corner_shop+2,TM.corner_shop+2.6));
  $('cuts').setAttribute('opacity',p(u,TM.share_slice,TM.share_slice+.6));
  const sm=p(u,TM.share_slice+.8,TM.share_slice+2.2);
  $('slc').setAttribute('opacity',p(u,TM.share_slice,TM.share_slice+.5));
  $('slc').setAttribute('transform','translate('+(360*sm).toFixed(1)+' '+(-30*Math.sin(Math.PI*sm)).toFixed(1)+')');
  rise($('lbl1'),p(u,TM.share_slice+1.8,TM.share_slice+2.4));
  rise($('q1'),p(u,TM.share_slice+4.6,TM.share_slice+5.2));

  rise($('quote'),p(u,TM.graham,TM.graham+.6));
  rise($('board2'),p(u,TM.checklist,TM.checklist+.5));
  CK.forEach((c,i)=>{const a=TM.checklist+.6+i*.4;rise(c[0],p(u,a,a+.4));const on=u>=TM.checklist+4.6+i*.8;
    c[1].setAttribute('fill',on?'var(--gain)':'var(--stage)');c[1].setAttribute('stroke',on?'var(--gain)':'var(--ink)');c[2].style.fill=on?'var(--on-gain)':'var(--ink)'});
  rise($('one'),p(u,TM.checklist+4.6,TM.checklist+5.2));

  rise($('bars'),p(u,TM.size_bar,TM.size_bar+.5));
  const fr=u>=TM.size_bar+1.2;$('small').setAttribute('class',fr?'loss':'ink');
  $('small').setAttribute('transform',fr?'rotate('+(4*Math.sin(t*5)).toFixed(2)+' 340 760)':'');
  rise($('frag'),p(u,TM.size_bar+1.2,TM.size_bar+1.7));
  rise($('thr'),p(u,TM.size_bar+6.8,TM.size_bar+7.4));
  $('infl').setAttribute('opacity',p(u,TM.inflation_up,TM.inflation_up+.4));
  $('infl_l').setAttribute('transform','translate(0 '+(230*(1-p(u,TM.inflation_up,TM.inflation_up+1.2))).toFixed(1)+')');
  rise($('infl_t'),p(u,TM.inflation_up+.9,TM.inflation_up+1.5));

  rise($('scale'),p(u,TM.scales,TM.scales+.5));
  const ta=10*p(u,TM.scales+2,TM.scales+3.2),tr=ta*Math.PI/180,bx=240*Math.cos(tr),by=240*Math.sin(tr);
  $('beam').setAttribute('transform','rotate('+(-ta).toFixed(2)+' 490 380)');
  $('pL').setAttribute('transform','translate('+(490-bx).toFixed(1)+' '+(380+by).toFixed(1)+')');
  $('pR').setAttribute('transform','translate('+(490+bx).toFixed(1)+' '+(380-by).toFixed(1)+')');
  rise($('two'),p(u,TM.scales+2.8,TM.scales+3.4));
  rise($('debt'),p(u,TM.debt_weight,TM.debt_weight+.5));
  $('debtb').setAttribute('width',(320*p(u,TM.debt_weight+.6,TM.debt_weight+1.8)).toFixed(1));
  rise($('dsm'),p(u,TM.debt_weight+2,TM.debt_weight+2.5));

  rise($('zone'),p(u,TM.timeline,TM.timeline+.5));
  let ny=0;EB.forEach((b,i)=>{const a=TM.timeline+1.3+i*.45,k=p(u,a,a+.4);b.setAttribute('y',(720-H[i]*k).toFixed(1));b.setAttribute('height',(H[i]*k).toFixed(1));if(k>.5)ny++});
  $('yrs').textContent=ny+' of 10 years in profit';
  rise($('grw'),p(u,TM.growth_arrow,TM.growth_arrow+.6));

  rise($('co'),p(u,TM.coins,TM.coins+.5));
  const cv=p(u,TM.coins+.4,TM.coins+.9);
  CN.forEach((c,i)=>{const f=(t*.25+i/6)%1;c.setAttribute('cx',(330+920*f).toFixed(1));c.setAttribute('cy',(360-30*Math.sin(Math.PI*f)).toFixed(1));c.setAttribute('opacity',(cv*Math.min(1,f*6,(1-f)*6)).toFixed(2))});
  rise($('cal'),p(u,TM.coins+1,TM.coins+1.5));
  let nd=0;CELL.forEach((e,i)=>{const on=u>=TM.coins+1.2+i*.22;e.setAttribute('fill',on?'var(--gain)':'var(--stage)');if(on)nd++});
  $('cnt').textContent=nd+(nd===20?'+':'')+' years, no break';
  rise($('wvg'),p(u,TM.calendar,TM.calendar+.6));

  $('tagr').setAttribute('transform','rotate('+(4*Math.sin(t*1.6)).toFixed(2)+' 140 250)');
  rise($('tag'),p(u,TM.price_tag,TM.price_tag+.5));
  $('tagt').style.fill=(u>=TM.price_tag+1&&u<TM.pe_meter+.4)?'var(--loss)':'var(--ink)';
  rise($('much'),p(u,TM.price_tag+1,TM.price_tag+1.5));
  rise($('gauge'),p(u,TM.price_tag+1,TM.price_tag+1.5));
  const pv=27-15*p(u,TM.pe_meter+.4,TM.pe_meter+1.6);
  $('ndl').setAttribute('transform','translate(900 580) rotate('+(-180+6*pv*p(u,TM.price_tag+1.2,TM.price_tag+2.2)).toFixed(1)+')');
  rise($('pel'),p(u,TM.pe_meter,TM.pe_meter+.5));
  rise($('bv'),p(u,TM.book_value,TM.book_value+.5));
  const bh=200*p(u,TM.book_value+.6,TM.book_value+1.6);$('pbar').setAttribute('y',(700-bh).toFixed(1));$('pbar').setAttribute('height',bh.toFixed(1));

  rise($('pills'),p(u,TM.magnify,TM.magnify+.5));
  const mx=244+1088*p(u,TM.magnify+.6,TM.magnify+4.6);
  $('mag').setAttribute('transform','translate('+mx.toFixed(1)+' 334)');
  $('mag').setAttribute('opacity',p(u,TM.magnify+.3,TM.magnify+.7));
  PL.forEach((r,i)=>r.setAttribute('stroke',(u>=TM.magnify+.6&&mx>=234+272*i)?'var(--gain)':'var(--ink)'));
  rise($('pick'),p(u,TM.magnify+.4,TM.magnify+1));
  rise($('qa'),p(u,TM.magnify+5.8,TM.magnify+6.3));
  rise($('qb'),p(u,TM.magnify+6.2,TM.magnify+6.7));
  rise($('qn'),p(u,TM.magnify+6.8,TM.magnify+7.3));