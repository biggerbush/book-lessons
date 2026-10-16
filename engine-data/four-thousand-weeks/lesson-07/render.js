const st=TM.starry_sky;
  ST.forEach((s,i)=>s.setAttribute('opacity',(p(u,st+i*.03,st+i*.03+.5)*(.6+.4*Math.sin(t*1.7+i*2.3))).toFixed(2)));
  rise($('speck'),p(u,st+.6,st+1.2)); const fr=p(u,st+4.6,st+5.4); setc(SPK,fr>0?'gain':'ink');
  $('halo').setAttribute('r',(14+30*fr+4*Math.sin(t*3)*fr).toFixed(1)); $('halo').setAttribute('opacity',(fr*.8).toFixed(2));

  const ua=TM.universe_age; rise($('age'),p(u,ua,ua+.5)); $('agev').textContent=(13.8*p(u,ua,ua+1.5)).toFixed(1)+' billion years';
  $('bar').setAttribute('width',(980*p(u,ua,ua+2)).toFixed(1)); rise($('barl'),p(u,ua+.5,ua+1)); $('more').setAttribute('opacity',p(u,ua+3,ua+4));
  rise($('life'),p(u,TM.life_dot,TM.life_dot+.6)); $('flick').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*5))).toFixed(2));
  rise($('sink'),p(u,TM.life_dot+5.8,TM.life_dot+6.3));

  rise($('mir'),p(u,TM.mirror_self,TM.mirror_self+.6)); rise($('bias'),p(u,TM.mirror_self+5.8,TM.mirror_self+6.3));
  rise($('road'),p(u,TM.timeline_you,TM.timeline_you+.5)); RD.forEach((g,i)=>{const a=TM.timeline_you+.3+i*.2;rise(g,p(u,a,a+.4))});
  rise($('you'),p(u,TM.timeline_you+1.6,TM.timeline_you+2.1));

  rise($('dent'),p(u,TM.dent_universe,TM.dent_universe+.6));
  TR.forEach((g,i)=>{const a=TM.trophy_shelf+i*.6;rise(g,p(u,a,a+.5))});
  rise($('days'),p(u,TM.trophy_shelf+5.7,TM.trophy_shelf+6.2)); DS.forEach((s,i)=>{const a=TM.trophy_shelf+6.2+i*.25;s.setAttribute('opacity',p(u,a,a+.3))});
  rise($('wasted'),p(u,TM.trophy_shelf+6.4,TM.trophy_shelf+7));

  const sf=TM.small_figure; rise($('tiny'),p(u,sf,sf+.5)); rise($('wt'),p(u,sf+.4,sf+.9));
  const lf=p(u,sf+3.4,sf+4.6); $('wti').setAttribute('transform','translate(0 '+(-110*lf).toFixed(1)+')'); $('wti').setAttribute('opacity',(1-lf).toFixed(2)); setc(TN,lf>.5?'gain':'ink');
  rise($('hj'),p(u,sf+1,sf+1.5)); const dr=p(u,TM.weight_drop,TM.weight_drop+1.4),by=320+300*dr,ok=dr>.5;
  $('hb').setAttribute('d','M900 '+by.toFixed(1)+'H1400'); $('hb').style.stroke=ok?'var(--gain)':'var(--loss)';
  $('hbl').setAttribute('y',(by-22).toFixed(1)); $('hbl').textContent=ok?'ACHIEVABLE':'IMPOSSIBLE'; $('hbl').style.fill=ok?'var(--gain)':'var(--loss)';

  rise($('pn0'),p(u,TM.parent_child,TM.parent_child+.5)); rise($('pn1'),p(u,TM.coffee_cup,TM.coffee_cup+.5)); rise($('pn2'),p(u,TM.coffee_cup+2.5,TM.coffee_cup+3));
  $('steam').setAttribute('opacity',(.5+.5*Math.sin(t*2)).toFixed(2));
  const rk=p(u,TM.coffee_cup+6.6,TM.coffee_cup+7.2);
  RP.forEach((c,i)=>{const f=(t*.5+(i%2)*.5)%1;c.setAttribute('r',(110+70*f).toFixed(1));c.setAttribute('opacity',(rk*(1-f)*.7).toFixed(2))}); rise($('near'),rk);

  rise($('fac'),p(u,TM.soviet_poster,TM.soviet_poster+.6));
  SM.forEach((c,i)=>{const f=(t*.4+i/3)%1;c.setAttribute('cy',(252-50*f).toFixed(1));c.setAttribute('r',(10+8*f).toFixed(1));c.setAttribute('opacity',(1-f).toFixed(2))});
  rise($('cal'),p(u,TM.color_calendar,TM.color_calendar+.5)); CE.forEach((c,i)=>{const a=TM.color_calendar+.3+i*.06;c.setAttribute('opacity',p(u,a,a+.3))});
  rise($('tbl'),p(u,TM.empty_table,TM.empty_table+.5)); rise($('mis'),p(u,TM.empty_table+.8,TM.empty_table+1.3)); rise($('stamp'),p(u,TM.empty_table+5,TM.empty_table+5.4));

  rise($('clk'),p(u,TM.two_clocks,TM.two_clocks+.5));
  const ck=p(u,TM.two_clocks+.6,TM.two_clocks+2.4),bs=t*10; $('link').setAttribute('opacity',ck);
  [[330,120],[630,-150]].forEach(([cx,a0],i)=>{const a=(bs+a0*(1-ck))*Math.PI/180,h=$('h'+i);h.setAttribute('x1',cx);h.setAttribute('y1',420);h.setAttribute('x2',(cx+88*Math.sin(a)).toFixed(1));h.setAttribute('y2',(420-88*Math.cos(a)).toFixed(1));h.style.stroke=ck>=1?'var(--gain)':'var(--ink)'});
  CD.forEach(([g,d],i)=>{const a=TM.dinner_group+i*1.8,k=p(u,a+.5,a+1.6);rise(g,p(u,a,a+.5));d.forEach((c,j)=>c.setAttribute('cx',(1260+j*90+(1336+j*34-1260-j*90)*k).toFixed(1)))});
  rise($('ctrl'),p(u,TM.dinner_group+7,TM.dinner_group+7.6));

  const oh=TM.open_hands; rise($('qa'),p(u,oh,oh+.5)); rise($('qb'),p(u,oh+.4,oh+.9)); rise($('qc'),p(u,oh+.8,oh+1.3));
  rise($('hands'),p(u,oh+1.4,oh+2)); $('seed').setAttribute('transform','scale('+(1+.08*Math.sin(t*3)).toFixed(3)+')');