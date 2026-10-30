SD0.forEach((s,i)=>{s.setAttribute('opacity',p(u,TM.night_sky+i*.2,TM.night_sky+i*.2+.5));s.setAttribute('r',(8+2.5*Math.sin(t*2.3+i*1.7)).toFixed(1))});
  const c0=TM.night_sky+6.6;
  PP0.forEach((f,i)=>{rise(f,p(u,TM.night_sky+1.6+i*.15,TM.night_sky+2.1+i*.15));f.setAttribute('class',u>=c0+1.2?'gain':'ink')});
  CL0.forEach((e,i)=>dr(e,p(u,c0+i*.25,c0+i*.25+.4)));
  SL0.forEach((e,i)=>dr(e,p(u,c0+.6+i*.15,c0+1+i*.15)));

  rise($('mir'),p(u,TM.mirror,TM.mirror+.6)); rise($('map1'),p(u,TM.map,TM.map+.6));
  X1.forEach((e,i)=>dr(e,p(u,TM.map+4.6+i*.25,TM.map+4.9+i*.25))); rise($('wr1'),p(u,TM.map+4.8,TM.map+5.4));

  P2.forEach((f,i)=>{rise(f,p(u,TM.network+i*.15,TM.network+i*.15+.4));f.setAttribute('class',u>=TM.thread+1.2?'gain':'ink')});
  L2.forEach((e,i)=>dr(e,p(u,TM.network+1.6+i*.12,TM.network+2+i*.12)));
  dr(TH,p(u,TM.thread,TM.thread+2.4)); rise($('cam'),p(u,TM.thread+.8,TM.thread+1.4)); rise($('exc2'),p(u,TM.thread+6.6,TM.thread+7.2));

  rise($('whl'),p(u,TM.astrologer,TM.astrologer+.6));
  PL3.forEach((c,i)=>{const a=i*1.57+t*.25*(1+i*.3);c.setAttribute('cx',(400+140*Math.cos(a)).toFixed(1));c.setAttribute('cy',(450+140*Math.sin(a)).toFixed(1))});
  const h3=u>=TM.horoscope;
  CH3.forEach(([g,d],i)=>{rise(g,p(u,TM.astrologer+1.2+i*.6,TM.astrologer+1.7+i*.6));d.setAttribute('stroke',h3?'var(--loss)':'var(--muted)');d.setAttribute('opacity',h3?.5:1)});
  rise($('no3'),p(u,TM.horoscope+.3,TM.horoscope+.8)); rise($('ppl3'),p(u,TM.horoscope+3.3,TM.horoscope+3.9));
  LK3.forEach((e,i)=>dr(e,p(u,TM.horoscope+3.9+i*.4,TM.horoscope+4.5+i*.4))); rise($('fin3'),p(u,TM.horoscope+8.7,TM.horoscope+9.3));

  rise($('bk4'),p(u,TM.holy_book,TM.holy_book+.6));
  E4.forEach((e,k)=>e.setAttribute('opacity',p(u,TM.crowd+k*.7,TM.crowd+k*.7+.5)));
  const b4=TM.crowd+5.8;
  D4.forEach(([k,c],i)=>{const a=TM.crowd+k*.7+.2+(i%7)*.05;c.setAttribute('opacity',p(u,a,a+.5));c.setAttribute('class',u>=b4+k*.4?'gain':'ink')});
  LK4.forEach(([k,e])=>dr(e,p(u,b4+k*.4,b4+k*.4+.6)));
  rise($('lb4'),p(u,TM.crowd+.8,TM.crowd+1.3)); rise($('fin4'),p(u,TM.crowd+11.2,TM.crowd+11.8));

  rise($('tr5'),p(u,TM.scales,TM.scales+.6)); rise($('fi5'),p(u,TM.simple_tale,TM.simple_tale+.6));
  const b5=TM.simple_tale+4.2;
  S5.forEach(([l,e,isL])=>{const k=p(u,b5+l*.6,b5+l*.6+.5);isL?dr(e,k):e.setAttribute('opacity',k)});
  rise($('fin5'),p(u,b5+1.8,b5+2.4));

  rise($('mg6'),p(u,TM.megaphone,TM.megaphone+.5));
  W6.forEach((w,i)=>w.setAttribute('opacity',u>=TM.megaphone+.5?(.2+.8*Math.max(0,Math.sin(t*4-i*1.2))).toFixed(2):0));
  rise($('cr6'),p(u,TM.megaphone+.8,TM.megaphone+1.4));
  const c6=u>=TM.megaphone+2.2;
  CR6.forEach((f,i)=>{f.setAttribute('transform','translate(0 '+(c6?-6*Math.abs(Math.sin(t*3+i)):0).toFixed(1)+')');f.setAttribute('class',c6?'gain':'ink')});
  $('bar6').setAttribute('width',(900*p(u,TM.megaphone+2.2,TM.megaphone+4)).toFixed(1));
  rise($('tq6'),p(u,TM.question,TM.question+.5)); rise($('qm6'),p(u,TM.question+.3,TM.question+.9)); rise($('bo6'),p(u,TM.question+3.8,TM.question+4.4));

  rise($('k0'),p(u,TM.checklist,TM.checklist+.5)); rise($('k1'),p(u,TM.checklist+.3,TM.checklist+.8)); rise($('wall7'),p(u,TM.checklist+.6,TM.checklist+1.1));
  [4.2,7.1].forEach((o,i)=>{rise($('q7'+'ab'[i]),p(u,TM.checklist+o,TM.checklist+o+.5));dr(CK7[i],p(u,TM.checklist+o+.6,TM.checklist+o+1))});
  rise($('fin7'),p(u,TM.checklist+10.5,TM.checklist+11.1));

  rise($('ph8'),p(u,TM.phone,TM.phone+.5)); rise($('lb8'),p(u,TM.phone+.5,TM.phone+1));
  SH8.forEach(([e,c],i)=>{const k=p(u,TM.phone+1+i*.3,TM.phone+1.6+i*.3);dr(e,k);c.setAttribute('opacity',k)});
  ['qa','qb','qc'].forEach((id,i)=>rise($(id),p(u,TM.phone+4.9+i*.4,TM.phone+5.4+i*.4))); rise($('tg8'),p(u,TM.phone+6.5,TM.phone+7));