const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  $('tk').setAttribute('transform','rotate('+(3*Math.sin(t*1.2)).toFixed(2)+' 1140 290)');
  $('tk').setAttribute('opacity',(1-.6*p(u,TM.title_card+3.8,TM.title_card+4.6)).toFixed(2));
  const b0=p(u,TM.title_card+1.6,TM.title_card+2.4); $('bp').setAttribute('opacity',b0); $('bp').setAttribute('transform','translate('+(120*(1-b0)).toFixed(1)+' 0)');

  R('lt',TM.lottery_ticket); R('lk',TM.lottery_ticket+3.8);
  D.forEach(([g,l,x],i)=>{const a=TM.option_doors+i*.25; rise(g,p(u,a,a+.4)); const w=x+55+15*Math.sin(t*1.4+i);
    l.setAttribute('points',x+',300 '+w.toFixed(1)+',318 '+w.toFixed(1)+',522 '+x+',540')});
  R('pw',TM.option_doors+1.2); $('qm').setAttribute('transform','translate(0 '+(6*Math.sin(t*3)).toFixed(1)+')');

  R('q2',TM.quad_grid); R('sc2',TM.sun_cloud); R('bpa',TM.blueprint); R('bpb',TM.blueprint+2.6);
  FZ.forEach(([c,x],i)=>c.setAttribute('cx',(x+4*Math.sin(t*2+i)).toFixed(1)));

  R('lab3',SC[3][0]/K+.3); R('cn',TM.china_flag); R('eu',TM.europe_map); R('us',TM.usa_flag); R('dfo',TM.usa_flag+5.4);

  R('br4',SC[4][0]/K+.5); R('rk',TM.rocket);
  $('rkb').setAttribute('transform','translate(0 '+(-30*p(u,TM.rocket+1,TM.rocket+3.5)).toFixed(1)+')');
  $('fl').setAttribute('transform','translate(300 640) scale(1 '+(1+.25*Math.sin(t*20)).toFixed(2)+') translate(-300 -640)');
  R('hw',TM.highway); $('hwd').setAttribute('y2',(715-290*p(u,TM.highway+.3,TM.highway+3)).toFixed(1));
  R('bk',TM.bank_tower);
  CO.forEach((c,i)=>{const a=t*1.2+i*Math.PI/2; c.setAttribute('transform','translate('+(1300+150*Math.cos(a)).toFixed(1)+' '+(560+50*Math.sin(a)).toFixed(1)+')')});

  R('rs',TM.resume);
  RW.forEach(([g,c],i)=>{const a=TM.resume+3.4+i*.45; rise(g,p(u,a,a+.3)); c.setAttribute('opacity',p(u,a+.2,a+.4))});
  R('sc5',TM.scattered); R('dw',TM.deep_well);
  $('shaft').setAttribute('height',(420*p(u,TM.deep_well+.4,TM.deep_well+2.4)).toFixed(1));

  R('jb',TM.apple_logo); R('tl6',TM.apple_logo+.6);
  PB.forEach((b,i)=>{const a=TM.apple_logo+1+i*.6; rise(b,p(u,a,a+.4))});
  R('ck',TM.offer_check); R('zk',TM.zuckerberg); R('st',TM.zuckerberg+1.2,.3);
  ZB.forEach((b,i)=>{const h=(60+55*i)*p(u,TM.zuckerberg+1.8+i*.4,TM.zuckerberg+2.8+i*.4); b.setAttribute('y',(730-h).toFixed(1)); b.setAttribute('height',h.toFixed(1))});

  R('qc7',TM.quote_card); R('mp',TM.plan_map);
  $('route').setAttribute('stroke-dashoffset',(1-p(u,TM.plan_map+.5,TM.plan_map+3)).toFixed(3));
  MS.forEach((m,i)=>{const a=TM.plan_map+.5+i*.6, on=u>=TM.hammer+.6+i*.9; m.setAttribute('opacity',p(u,a,a+.3));
    m.setAttribute('fill',on?'var(--gain)':'var(--stage)'); m.setAttribute('stroke',on?'var(--gain)':'var(--ink)')});
  R('fg',TM.plan_map+3);
  const hk=Math.min(4,Math.max(0,Math.floor((u-TM.hammer)/.9)));
  $('hm').setAttribute('opacity',p(u,TM.hammer,TM.hammer+.3));
  $('hm').setAttribute('transform','translate('+(P[hk][0]+60)+' '+(P[hk][1]+70)+') rotate('+(-60*Math.abs(Math.sin(t*3.5))).toFixed(1)+')');
  R('wk',TM.hammer+.3); R('ad',TM.hammer+3); R('bd',TM.hammer+5.4);

  R('qa',TM.first_step); R('qb',TM.first_step+.4); R('qc',TM.first_step+.8); R('np',TM.first_step+4.9);
  const wr=1210+190*p(u,TM.first_step+5.3,TM.first_step+6.8);
  $('wl').setAttribute('x2',wr.toFixed(1)); $('pn').setAttribute('transform','translate('+wr.toFixed(1)+' 700)');