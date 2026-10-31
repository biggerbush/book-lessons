$('sun0').setAttribute('cy',(270-20*p(t,0,2)).toFixed(1));
  crops.forEach((g,i)=>rise(g,p(u,TM.farm_field+.4+i*.04,TM.farm_field+.8+i*.04)));
  rise($('t0q'),p(u,TM.farm_field+3,TM.farm_field+3.5));

  drw($('flatL'),p(u,TM.flat_line+.3,TM.flat_line+2.5));
  $('flatA').setAttribute('width',(800*p(u,TM.flat_line+4,TM.flat_line+5.5)).toFixed(1));
  rise($('flatT'),p(u,TM.flat_line+4.2,TM.flat_line+4.8));
  rise($('wk'),p(u,TM.tired_worker,TM.tired_worker+.5));
  const dr=p(u,TM.tired_worker+.5,TM.tired_worker+6);
  $('wkH').setAttribute('cy',(380+20*dr).toFixed(1)); $('batF').setAttribute('width',(160*(1-.8*dr)).toFixed(1));
  $('batF').style.fill=dr>.6?'var(--loss)':'var(--gain)';
  rise($('wear'),p(u,TM.tired_worker+3.3,TM.tired_worker+3.9));

  rise($('fm'),p(u,TM.farmer,TM.farmer+.5)); rise($('pl'),p(u,TM.planting,TM.planting+.5));
  rise($('hv'),p(u,TM.planting+2,TM.planting+2.5)); rise($('wi'),p(u,TM.winter_hut,TM.winter_hut+.5));
  FL.forEach((f,i)=>{f.setAttribute('cy',(260+((t*40+i*37)%240)).toFixed(1))});
  const ek=p(u,TM.winter_hut+5,TM.winter_hut+7); drw($('eff'),ek); rise($('effL'),p(u,TM.winter_hut+6,TM.winter_hut+6.6));
  const fx=160+1280*((t*.04)%1), fy=770-140*EF(fx)*ek; $('fm').setAttribute('transform','translate('+fx.toFixed(1)+' '+(fy-59).toFixed(1)+')');

  rise($('tl'),p(u,TM.timeline,TM.timeline+.5)); drw($('tlW'),p(u,TM.timeline+.2,TM.timeline+2.5));
  rise($('tlF'),p(u,TM.timeline+2.5,TM.timeline+3));
  rise($('fc'),p(u,TM.factory_clock,TM.factory_clock+.5)); rise($('a1'),p(u,TM.factory_clock+1.5,TM.factory_clock+2));
  rise($('of'),p(u,TM.factory_clock+2,TM.factory_clock+2.5)); rise($('a2'),p(u,TM.factory_clock+3,TM.factory_clock+3.5));
  rise($('ck'),p(u,TM.factory_clock+3.5,TM.factory_clock+4));
  $('ckM').setAttribute('transform','rotate('+(t*120%360).toFixed(1)+' 1200 660)'); $('ckH').setAttribute('transform','rotate('+(t*10%360).toFixed(1)+' 1200 660)');
  rise($('mind'),p(u,TM.factory_clock+5.4,TM.factory_clock+6));

  rise($('acI'),p(u,TM.academic_year,TM.academic_year+.5)); rise($('acB'),p(u,TM.academic_year+.3,TM.academic_year+.8));
  const sm=u>=TM.semester; $('fall').style.fill=sm?'var(--loss)':'var(--stage)'; $('spr').style.fill=sm?'var(--loss)':'var(--stage)';
  rise($('semL'),p(u,TM.semester,TM.semester+.5));
  $('sum').style.fill=u>=TM.summer_sun?'var(--gain)':'var(--stage)'; rise($('sumL'),p(u,TM.summer_sun,TM.summer_sun+.5));
  rise($('sunA'),p(u,TM.summer_sun+.3,TM.summer_sun+.8)); $('sunR').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 1310 590)');
  rise($('barsL'),p(u,TM.summer_sun+4,TM.summer_sun+4.4));
  bars.forEach((b,i)=>{const h=AH[i]*p(u,TM.summer_sun+4.2+i*.08,TM.summer_sun+4.8+i*.08);b.setAttribute('height',h.toFixed(1));b.setAttribute('y',(740-h).toFixed(1))});
  rise($('vary'),p(u,TM.summer_sun+5,TM.summer_sun+5.6));

  cells.forEach((g,i)=>rise(g,p(u,TM.calendar+i*.12,TM.calendar+i*.12+.4)));
  drw($('ring5'),p(u,TM.slow_month,TM.slow_month+1)); rise($('prot'),p(u,TM.slow_month+.5,TM.slow_month+1.1));
  const jk=p(u,TM.slow_month+1,TM.slow_month+2); jb.forEach(b=>b.setAttribute('opacity',(1-jk).toFixed(2)));
  rise($('rt5'),p(u,TM.slow_month+5,TM.slow_month+5.5));
  const sk=p(u,TM.slow_month+6,TM.slow_month+7); SQ.forEach(([r,f])=>r.setAttribute('fill-opacity',f?(1-.8*sk).toFixed(2):1));

  const S6=SC[6][0]/K; rise($('wkB'),p(u,S6+.4,S6+1));
  rise($('flg'),p(u,TM.after_launch,TM.after_launch+.5));
  const lk=p(u,TM.after_launch+1.5,TM.after_launch+3), lh=180-120*lk;
  WB[3].setAttribute('height',lh.toFixed(1)); WB[3].setAttribute('y',(480-lh).toFixed(1)); WB[3].setAttribute('fill',lk>.5?'var(--gain)':'var(--loss)');
  rise($('lwL'),p(u,TM.after_launch+3,TM.after_launch+3.5));
  rise($('days'),p(u,TM.easy_day,TM.easy_day+.5)); DY[12].setAttribute('fill',u>=TM.easy_day+1?'var(--gain)':'var(--line)');
  rise($('edL'),p(u,TM.easy_day+1.2,TM.easy_day+1.7));

  rise($('oldL'),p(u,SC[7][0]/K+.3,SC[7][0]/K+.8)); drw($('wv7'),p(u,TM.wave_line,TM.wave_line+3));
  rise($('pkL'),p(u,TM.peak_valley,TM.peak_valley+.5)); rise($('vlL'),p(u,TM.peak_valley+1,TM.peak_valley+1.5));
  VD.forEach(c=>c.setAttribute('r',(12+3*Math.sin(t*3)).toFixed(1)));
  rise($('vw'),p(u,TM.peak_valley+4.2,TM.peak_valley+4.8)); rise($('vp'),p(u,TM.peak_valley+6.7,TM.peak_valley+7.3));

  rise($('yr'),p(u,SC[8][0]/K+.4,SC[8][0]/K+1));
  rise($('qa'),p(u,TM.circle_season,TM.circle_season+.5)); rise($('qb'),p(u,TM.circle_season+.4,TM.circle_season+.9)); rise($('qc'),p(u,TM.circle_season+.8,TM.circle_season+1.3));
  drw($('ring8'),p(u,TM.circle_season+1.2,TM.circle_season+2.2)); rise($('ptx'),p(u,TM.circle_season+2,TM.circle_season+2.5));