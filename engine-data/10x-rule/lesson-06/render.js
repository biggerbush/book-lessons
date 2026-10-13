const R=(id,a)=>rise($(id),p(u,a,a+.5));
  function R2(e,a){rise(e,p(u,a,a+.4))}
  const w=TM.wish_cloud;
  rise($('t_cloud'),p(u,w,w+.5)*(1-p(u,w+4.5,w+5.2)));
  $('t_cloud').setAttribute('transform','translate(0 '+(-40*p(u,w+4.5,w+5.2)+6*Math.sin(t*1.5)).toFixed(1)+')');
  R('t_doc',w+5); drw('t_sig',p(u,w+5.6,w+6.8)); R('t_badge',w+6.8);

  R('nb',TM.notebook); R('nb0',TM.notebook+.6); R('nb1',TM.notebook+1.4); R('nb2',TM.notebook+2.6);
  R('hl',TM.hill);
  // goal rolls back down the slope (text stays upright, only the dashed ring spins)
  const gk=p(u,TM.hill+1.5,TM.hill+3.5), lx=1000-220*gk, ly=720-(lx-540)*.8077;
  const gx=lx+SLN[0]*GOFF, gy=ly+SLN[1]*GOFF;
  $('goal').setAttribute('transform','translate('+gx.toFixed(1)+' '+gy.toFixed(1)+')');
  $('goalr').setAttribute('transform','rotate('+(-350*gk).toFixed(1)+')');
  $('goal').setAttribute('opacity',p(u,TM.hill,TM.hill+.5)*(1-.6*p(u,TM.hill+3.5,TM.hill+4.5)));
  // the Success card drops out of the slot and fades away
  const ec=TM.empty_chair;
  R('drop',ec);
  const df=p(u,ec+.8,ec+2.4);
  $('dcard').setAttribute('transform','translate(0 '+(250*df*df).toFixed(1)+') rotate('+(14*df).toFixed(1)+' 1310 345)');
  $('dcard').setAttribute('opacity',(1-p(u,ec+1.6,ec+2.6)).toFixed(2));
  R('dgone',ec+2.4);
  R('dis',ec+2.8);

  const sp=TM.signed_paper;
  R('pp',sp); strk('lux',166,112,p(u,sp+.6,sp+1.1)); R('obl',sp+1.2); drw('sig2',p(u,sp+2,sp+3.2)); R('q2',sp+5);
  R('you2',TM.family);
  AR.forEach((a,i)=>{const s=TM.family+1+i*1.6;a.setAttribute('opacity',p(u,s,s+.4));R('r2_'+i,s)});
  R('tired',TM.family+6.5);

  R('yg',TM.young_grant); drw('lo3',p(u,TM.young_grant+.8,TM.empty_wallet+1)); R('w0',TM.empty_wallet+.8);
  R('ph',TM.phone); drw('hi3',p(u,TM.phone+.5,TM.phone+7));
  [1,3,5].forEach((d,i)=>R('c3_'+i,TM.phone+d)); R('end3',TM.phone+7);

  R('cp',TM.shaky_hand);
  const ck=p(u,TM.compass,TM.compass+1), ang=(1-ck)*(-110+12*Math.sin(t*23));
  $('ndl').setAttribute('transform','translate(420 520) rotate('+ang.toFixed(1)+')');
  R('tg',TM.compass+1); R('ck',TM.clock);
  const h=p(u,TM.clock+.3,TM.clock+4.5), ha=h*4*Math.PI;
  $('ckh').setAttribute('x2',(1320+55*Math.sin(ha)).toFixed(1)); $('ckh').setAttribute('y2',(330-55*Math.cos(ha)).toFixed(1));
  $('blob').setAttribute('r',(20+80*h).toFixed(1)); R('act',TM.clock+4.6);

  R('sp',TM.crowd); R('cw',TM.crowd+.8);
  BB.forEach((b,i)=>R2(b,TM.crowd+2+i*.4));
  R('mg',TM.megaphone); $('mg').setAttribute('transform','translate('+(3*Math.sin(t*9)).toFixed(1)+' 0)');
  R('sh',TM.spotlight);

  R('cal',TM.calendar);
  CE.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.6+i*.14?'var(--gain)':'var(--line)'));
  R('sr',TM.sunrise); $('rays').setAttribute('opacity',(.6+.4*Math.sin(t*2)).toFixed(2));
  R('st',TM.staircase);
  const sk=4*p(u,TM.staircase+.6,TM.staircase+5), si=Math.min(Math.floor(sk),3), sf=sk-si;
  $('clb').setAttribute('transform','translate('+(740+160*(si+sf)).toFixed(1)+' '+(700-100*(si+cl((sf-.5)/.5))).toFixed(1)+')');
  TR.forEach((e,i)=>e.setAttribute('opacity',sk>=i?1:0)); R('stt',TM.staircase+2);

  const sn=TM.sticky_note;
  R('sn',sn); R('opt',sn+1.4); strk('optk',166,190,p(u,sn+4,sn+4.6)); R('duty',sn+5);
  R('nt',TM.name_tag); NP.forEach((g,i)=>R2(g,TM.name_tag+.8+i*.4));
  R('fs',TM.first_step); R('fs2',TM.first_step+3);

  const q=SC[8][0]/K;
  R('q0',q+.3); R('q1',q+.7); R('q2b',q+1.1); R('q3',q+1.5); R('qs',q+2); R('qm',q+7.4);