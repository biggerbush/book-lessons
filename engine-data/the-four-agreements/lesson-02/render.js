rise($('court'),p(u,TM.courtroom,TM.courtroom+.6));
  $('tg').setAttribute('transform','rotate('+(15*Math.sin(t*3)).toFixed(1)+' 1350 320)');
  rise($('you0'),p(u,TM.courtroom+6.2,TM.courtroom+6.8));

  rise($('child'),p(u,TM.law_book,TM.law_book+.5)); rise($('book'),p(u,TM.law_book+.6,TM.law_book+1.1));
  RL.forEach((g,i)=>rise(g,p(u,TM.rule_lines+i*.9,TM.rule_lines+i*.9+.5)));
  RP.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.rule_lines+1+i*.3,TM.rule_lines+1.3+i*.3)));
  rise($('ballot'),p(u,TM.rule_lines+5,TM.rule_lines+5.5)); rise($('obey'),p(u,TM.rule_lines+5.6,TM.rule_lines+6.2));

  rise($('bench'),p(u,TM.judge,TM.judge+.6));
  const sc=p(u,TM.gavel,TM.gavel+3.6);
  $('scan').setAttribute('y',(250+330*sc).toFixed(1)); $('scan').setAttribute('opacity',u>=TM.gavel&&sc<1?1:0);
  ROW.forEach((r,i)=>{rise(r[0],p(u,TM.gavel+i*.3,TM.gavel+i*.3+.4)); r[2].setAttribute('opacity',sc>(50+110*i)/330?1:0)});
  const hit=p(u,TM.gavel+5,TM.gavel+5.15);
  $('gv').setAttribute('transform','rotate('+(-40*(1-hit)).toFixed(1)+' 560 470)');
  ROW[2][1].setAttribute('stroke',u>=TM.gavel+5?'var(--loss)':'var(--line)');
  rise($('guilty'),p(u,TM.gavel+5,TM.gavel+5.5));

  rise($('vic'),p(u,TM.victim,TM.victim+.5));
  BL.forEach((b,i)=>rise(b,p(u,TM.victim+3.4+i*.7,TM.victim+3.8+i*.7)));
  rise($('bub'),p(u,TM.heavy_sack,TM.heavy_sack+.5));

  rise($('pair'),p(u,TM.friend,TM.friend+.5)); rise($('burst'),p(u,TM.friend+1,TM.friend+1.4));
  rise($('sign'),p(u,TM.guilty_sign,TM.guilty_sign+.5)); rise($('sting'),p(u,TM.guilty_sign+.8,TM.guilty_sign+1.2));
  me.setAttribute('fill',u>=TM.guilty_sign+.8?'var(--loss)':'var(--ink)');
  rise($('end4'),p(u,TM.guilty_sign+4.5,TM.guilty_sign+5.1));

  rise($('dog'),p(u,TM.dog,TM.dog+.5)); rise($('m1'),p(u,TM.dog+2,TM.dog+2.4));
  $('mvA').setAttribute('stroke-dashoffset',(800*(1-p(u,TM.dog+5.7,TM.dog+7))).toFixed(1));
  rise($('mvL'),p(u,TM.dog+6.6,TM.dog+7));
  rise($('hum'),p(u,TM.replay,TM.replay+.5));
  const re=u>=TM.replay+5;
  MK.forEach((c,i)=>{const a=TM.replay+.4+i*.12; c.setAttribute('opacity',p(u,a,a+.2)); c.setAttribute('r',re?(10+5*Math.max(0,Math.sin(t*4-i*.5))).toFixed(1):10)});
  rise($('cntG'),p(u,TM.replay+.4,TM.replay+.8));
  $('cnt').textContent=Math.round(1000*p(u,TM.replay+.4,TM.replay+4.2)).toLocaleString('en-US')+'×';
  rise($('reop'),p(u,TM.replay+5,TM.replay+5.5));

  rise($('ptn'),p(u,TM.partner,TM.partner+.5)); rise($('rbub'),p(u,TM.partner+1,TM.partner+1.5));
  rise($('scale'),p(u,TM.partner+2,TM.partner+2.6));
  let sm=0; CO.forEach((c,i)=>{const k=p(u,TM.coins+i*.4,TM.coins+i*.4+.3); sm+=k; c.setAttribute('opacity',k); c.setAttribute('transform','translate(0 '+(-40*(1-k)).toFixed(1)+')')});
  const an=(-10+3.4*sm)*Math.PI/180, bx=260*Math.cos(an), by=260*Math.sin(an);
  $('beam').setAttribute('d','M'+(1120-bx).toFixed(1)+' '+(300-by).toFixed(1)+'L'+(1120+bx).toFixed(1)+' '+(300+by).toFixed(1));
  $('panL').setAttribute('transform','translate('+(1120-bx).toFixed(1)+' '+(300-by).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1120+bx).toFixed(1)+' '+(300+by).toFixed(1)+')');
  rise($('inj'),p(u,TM.coins+5,TM.coins+5.5)); rise($('just'),p(u,TM.coins+5.6,TM.coins+6.2));

  rise($('mir'),p(u,TM.mirror,TM.mirror+.5)); rise($('zap'),p(u,TM.mirror+1.5,TM.mirror+2));
  rise($('lim'),p(u,TM.fence,TM.fence+.5));
  const ty=560+105*p(u,TM.fence+5.8,TM.fence+6.6)-195*p(u,TM.fence+10.4,TM.fence+11.2), qt=u>=TM.fence+10.4;
  PK.forEach(r=>{r.setAttribute('y',ty.toFixed(1)); r.setAttribute('height',(680-ty).toFixed(1)); r.setAttribute('fill',qt?'var(--gain)':'var(--loss)')});
  $('arrs').setAttribute('opacity',p(u,TM.fence+.5,TM.fence+1));
  AR.forEach((g,i)=>{const y=[540,600,650][i], x0=1340-480*((t*.5+i*.33)%1), bl=y>ty&&x0<1160, x=bl?1160:x0;
    g.setAttribute('transform','translate('+x.toFixed(1)+' '+y+')'); g.setAttribute('opacity',bl?Math.max(0,1-(1160-x0)/80).toFixed(2):1)});
  rise($('quiet'),p(u,TM.fence+10.4,TM.fence+11));

  rise($('qa'),p(u,TM.closed_file,TM.closed_file+.5)); rise($('qb'),p(u,TM.closed_file+.4,TM.closed_file+.9));
  rise($('fold'),p(u,TM.closed_file+1,TM.closed_file+1.5)); rise($('qc'),p(u,TM.closed_file+7.4,TM.closed_file+7.9));
  $('paper').setAttribute('y',(540+70*p(u,TM.closed_file+7.8,TM.closed_file+8.6)).toFixed(1));
  rise($('stamp'),p(u,TM.closed_file+8.6,TM.closed_file+9));