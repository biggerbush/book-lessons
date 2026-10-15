const g0=p(u,TM.gift_box,TM.gift_box+1); rise($('gbox'),p(u,TM.gift_box,TM.gift_box+.5));
  LID0.setAttribute('transform','translate(0 '+(-120*(1-g0)-4*Math.abs(Math.sin(t*2))).toFixed(1)+')');
  rise($('wrap0'),p(u,TM.gift_box+2.6,TM.gift_box+3.2));

  const n=7*p(u,TM.few_seats+1.8,TM.full_sign)+3*p(u,TM.full_sign+.3,TM.full_sign+2.5);
  SEATS.forEach((s,i)=>{const a=TM.few_seats+i*.08;rise(s.g,p(u,a,a+.4));const on=i<n;[s.a,s.b].forEach(e=>{e.setAttribute('fill',on?'var(--ink)':'var(--stage)');e.setAttribute('stroke',on?'var(--ink)':'var(--gain)')})});
  rise($('fullst'),p(u,TM.full_sign+2.5,TM.full_sign+3)); rise($('dly'),p(u,TM.full_sign,TM.full_sign+.4));
  drw($('dlyx'),p(u,TM.full_sign+1,TM.full_sign+1.5)); rise($('dcd'),p(u,TM.full_sign+1.5,TM.full_sign+2));

  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); rise($('ring'),p(u,TM.calendar+1,TM.calendar+1.5));
  const dc=DL*p(u,TM.calendar+1,TM.clock+.5); DAYS.forEach((d,i)=>d.setAttribute('fill',i<dc?'var(--line)':'var(--stage)'));
  EX.forEach((e,i)=>{const a=TM.calendar+2.6+i*1.4;rise(e.g,p(u,a,a+.4))});
  rise($('clk'),p(u,TM.clock,TM.clock+.4)); $('hand').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 820 680)');
  rise($('sday'),p(u,TM.clock,TM.clock+.4)); drw($('sdx'),p(u,TM.clock+.8,TM.clock+1.3)); rise($('tday'),p(u,TM.clock+1.2,TM.clock+1.7));

  rise($('core'),p(u,TM.bonus_stack,TM.bonus_stack+.4));
  BON.forEach((b,i)=>{const a=TM.bonus_stack+.4+i*.6,k=p(u,a,a+.5);b.g.setAttribute('opacity',k);b.g.setAttribute('transform','translate(0 '+(-80*(1-k)).toFixed(1)+')');
    const w=TM.bonus_stack+3+i*.9;rise(b.w,p(u,w,w+.4));const sv=u>=w+1.1;b.wr.setAttribute('stroke',sv?'var(--gain)':'var(--loss)');b.wt.textContent=sv?'SOLVED':'WORRY';b.wt.style.fill=sv?'var(--gain)':'var(--loss)';
    const c=TM.price_tag+i*.5;rise(b.tag,p(u,c,c+.4))});

  rise($('ppl'),p(u,TM.shield,TM.shield+.4)); rise($('risk'),p(u,TM.shield,TM.shield+.4));
  $('riskI').setAttribute('transform','translate('+(280+580*p(u,TM.shield+1,TM.shield+2.5)).toFixed(1)+' 0)');
  rise($('shld'),p(u,TM.shield+2,TM.shield+2.5));
  GT.forEach((g,i)=>{const a=TM.shield+4.2+i*.8;rise(g.g,p(u,a,a+.4))});
  const hc=u>=TM.handshake; GT[1].r.setAttribute('fill',hc?'var(--gain)':'var(--stage)'); GT[1].r.setAttribute('stroke',hc?'var(--gain)':'var(--ink)'); GT[1].tx.style.fill=hc?'var(--on-gain)':'var(--ink)';
  rise($('hs'),p(u,TM.handshake,TM.handshake+.4)); rise($('cl0'),p(u,TM.handshake+.6,TM.handshake+1)); rise($('cl1'),p(u,TM.handshake+1.6,TM.handshake+2));
  const bk=p(u,TM.handshake+7.6,TM.handshake+8.8); rise($('bars'),p(u,TM.handshake+7.6,TM.handshake+8));
  $('barS').setAttribute('y',480-220*bk); $('barS').setAttribute('height',220*bk); $('barR').setAttribute('y',480-50*bk); $('barR').setAttribute('height',50*bk);

  rise($('ncard'),p(u,TM.name_card,TM.name_card+.5)); rise($('wand'),p(u,TM.magic_wand,TM.magic_wand+.4));
  $('wandI').setAttribute('transform','rotate('+(8*Math.sin(t*3)).toFixed(1)+' 1150 420)');
  TL.forEach((g,i)=>{const a=TM.magic_wand+1.5+i*1.3,on=u>=a;rise(g,p(u,a,a+.4));SL[i].setAttribute('fill',on?'var(--gain)':'none');SL[i].setAttribute('stroke',on?'var(--gain)':'var(--muted)')});

  rise($('gymL'),p(u,TM.gym,TM.gym+.5)); rise($('gymR'),p(u,TM.new_banner-.3,TM.new_banner+.2)); rise($('nb'),p(u,TM.new_banner,TM.new_banner+.5));
  SP.forEach((s,i)=>{const a=TM.new_banner+3+i;rise(s.g,p(u,a,a+.4))}); GG.forEach((s,i)=>{const a=TM.gift_tags+i*.6;rise(s.g,p(u,a,a+.4))});
  rise($('gua'),p(u,TM.gift_tags+3.4,TM.gift_tags+3.9)); rise($('pull'),p(u,TM.gift_tags+9.4,TM.gift_tags+10));

  FK.forEach((f,i)=>{const a=TM.broken_trust+i*.6;rise(f.g,p(u,a,a+.4))}); rise($('one'),p(u,TM.broken_trust+1.4,TM.broken_trust+1.8));
  rise($('trust'),p(u,TM.broken_trust+.3,TM.broken_trust+.8)); drw($('crk'),p(u,TM.broken_trust+2.8,TM.broken_trust+3.6));
  rise($('scl'),p(u,TM.scale,TM.scale+.5));
  const ang=-14*(1-p(u,TM.scale+1.5,TM.scale+3.5)), dy=250*Math.sin(ang*Math.PI/180);
  $('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 1150 360)'); $('panL').setAttribute('transform','translate(0 '+(-dy).toFixed(1)+')'); $('panR').setAttribute('transform','translate(0 '+dy.toFixed(1)+')');
  rise($('hon'),p(u,TM.scale+4,TM.scale+4.6));

  rise($('lk'),p(u,TM.your_offer,TM.your_offer+.5)); rise($('gbox8'),p(u,TM.your_offer,TM.your_offer+.5));
  LID8.setAttribute('transform','translate(0 '+(-30*p(u,TM.your_offer+.6,TM.your_offer+1.4)).toFixed(1)+')');
  rise($('qa'),p(u,TM.your_offer+2.6,TM.your_offer+3.1)); rise($('qb'),p(u,TM.your_offer+3,TM.your_offer+3.5)); rise($('qc'),p(u,TM.your_offer+3.4,TM.your_offer+3.9));
  const hi=u>=TM.your_offer+7?Math.floor(t*.8)%5:-1;
  CC.forEach((c,i)=>{const a=TM.your_offer+4+i*.5;rise(c.g,p(u,a,a+.4));const on=i===hi;c.r.setAttribute('fill',on?'var(--gain)':'var(--stage)');c.r.setAttribute('stroke',on?'var(--gain)':'var(--ink)');c.tx.style.fill=on?'var(--on-gain)':'var(--ink)'});