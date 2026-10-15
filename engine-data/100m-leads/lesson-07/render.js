EN.forEach((g,i)=>rise(g,p(u,TM.two_hands+.4+i*.3,TM.two_hands+.9+i*.3)));
  RG.forEach(([g,ca,sa],i)=>{const k=p(u,TM.crowd_arrive+i*.2,TM.crowd_arrive+.8+i*.2),d=(1-k)*90;g.setAttribute('opacity',k);g.setAttribute('transform','translate('+(ca*d).toFixed(1)+' '+(sa*d).toFixed(1)+')')});

  rise($('lgYou'),p(u,TM.lead_getters,TM.lead_getters+.5));
  $('lgLines').setAttribute('opacity',p(u,TM.four_doors+2,TM.four_doors+2.6));
  LG.forEach(([g,cx,dt],i)=>{rise(g,p(u,TM.four_doors+i*.5,TM.four_doors+.5+i*.5));const f=(t*.45+i*.25)%1;
    dt.setAttribute('cx',(cx+(800-cx)*f).toFixed(1));dt.setAttribute('cy',(500+170*f).toFixed(1));dt.setAttribute('opacity',p(u,TM.four_doors+3.8,TM.four_doors+4.3))});
  rise($('lgCap'),p(u,TM.four_doors+3.8,TM.four_doors+4.4));

  rise($('hc'),p(u,TM.happy_client,TM.happy_client+.5));
  RF.forEach(([a,f],i)=>{const k=p(u,TM.referral_arrow+i*.4,TM.referral_arrow+1+i*.4);a.setAttribute('stroke-dashoffset',(1-k).toFixed(3));rise(f,p(u,TM.referral_arrow+.8+i*.4,TM.referral_arrow+1.3+i*.4))});
  rise($('frl'),p(u,TM.referral_arrow+2,TM.referral_arrow+2.5));
  rise($('star'),p(u,TM.gold_star,TM.gold_star+.5)); rise($('deliv'),p(u,TM.gold_star+4.9,TM.gold_star+5.5));

  const away=p(u,TM.step_sheet+5.7,TM.step_sheet+6.5);
  $('emYou').setAttribute('opacity',(1-.65*away).toFixed(2));
  rise($('emHire'),p(u,TM.new_hire,TM.new_hire+.5));
  CP.forEach((g,i)=>{const k=p(u,TM.new_hire+1+i*.6,TM.new_hire+2.6+i*.6);g.setAttribute('transform','translate('+(300+900*k).toFixed(1)+' '+(670+i*62)+')')});
  rise($('sheet'),p(u,TM.step_sheet,TM.step_sheet+.5));
  SC3.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.step_sheet+1+i*.6,TM.step_sheet+1.3+i*.6)));
  LD3.forEach((c,i)=>{const f=(t*.4+i/4)%1;c.setAttribute('cx',(1290+170*f).toFixed(1));c.setAttribute('opacity',(away*(1-f)).toFixed(2))});
  rise($('lk3'),away);

  rise($('ag'),p(u,TM.agency_desk,TM.agency_desk+.5)); rise($('learn'),p(u,TM.agency_desk+2.5,TM.agency_desk+3));
  rise($('shopP'),p(u,TM.partner_shop,TM.partner_shop+.5)); rise($('shopY'),p(u,TM.partner_shop+.6,TM.partner_shop+1.1));
  AUD.forEach((c,i)=>{const k=p(u,TM.handshake+.3+i*.12,TM.handshake+1.5+i*.12);c.setAttribute('cx',(905+i*21+365*k).toFixed(1));c.setAttribute('opacity',p(u,TM.partner_shop,TM.partner_shop+.5))});
  const ck=p(u,TM.handshake+2,TM.handshake+3.5);$('coin').setAttribute('transform','translate('+(1350-370*ck).toFixed(1)+' 330)');
  $('coin').setAttribute('opacity',p(u,TM.handshake+1.8,TM.handshake+2.2)); rise($('share'),p(u,TM.handshake+2,TM.handshake+2.5));

  rise($('desk5'),p(u,TM.your_desk,TM.your_desk+.5));
  rise($('r100'),p(u,TM.rule_100,TM.rule_100+.5)); $('n100').textContent=Math.round(100*p(u,TM.rule_100,TM.rule_100+2));
  const dn=Math.floor(100*p(u,TM.rule_100+1,TM.rule_100+6)); CE.forEach((c,i)=>c.setAttribute('fill',i<dn?'var(--gain)':'var(--line)'));
  AC.forEach((g,i)=>rise(g,p(u,TM.action_icons+i*1.5,TM.action_icons+.5+i*1.5)));

  $('cv').setAttribute('stroke-dashoffset',(1-p(u,TM.growth_graph,TM.growth_graph+3)).toFixed(3));
  rise($('quit6'),p(u,TM.growth_graph+1.5,TM.growth_graph+2));
  rise($('b1'),p(u,TM.more_better,TM.more_better+.5)); rise($('b2'),p(u,TM.more_better+2,TM.more_better+2.5)); rise($('b3'),p(u,TM.shiny_object,TM.shiny_object+.5));
  $('shinyG').setAttribute('transform','rotate('+((t*40)%360).toFixed(1)+' 1420 595)');

  rise($('seed7'),p(u,TM.tiny_seed,TM.tiny_seed+.5));
  const tk=p(u,TM.tall_tree,TM.tall_tree+4),h=40+300*tk;
  $('tree7').setAttribute('opacity',p(u,TM.tall_tree,TM.tall_tree+.4));
  $('trk').setAttribute('y',(740-h).toFixed(1)); $('trk').setAttribute('height',h.toFixed(1));
  $('crw').setAttribute('cy',(740-h).toFixed(1)); $('crw').setAttribute('r',(20+110*tk).toFixed(1));
  $('dc').textContent='DAY '+Math.max(1,Math.round(100*tk));
  FR7.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.tall_tree+3.6+i*.2,TM.tall_tree+3.9+i*.2)));
  rise($('mx'),p(u,TM.multiplier,TM.multiplier+.5));
  MT.forEach((g,i)=>rise(g,p(u,TM.multiplier+.3+i*.3,TM.multiplier+.8+i*.3)));

  rise($('cl8'),p(u,TM.checklist,TM.checklist+.5)); rise($('pick'),p(u,TM.checklist+.3,TM.checklist+.8));
  CK8.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.checklist+.8+i*.5,TM.checklist+1.1+i*.5)));
  rise($('q8a'),p(u,TM.checklist+5,TM.checklist+5.5)); rise($('q8b'),p(u,TM.checklist+5.4,TM.checklist+5.9)); rise($('q8c'),p(u,TM.checklist+5.8,TM.checklist+6.3));