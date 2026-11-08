const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('pg',TM.general);R('pc',TM.general+3.5);R('wm',TM.wrong_moment);
  $('pgb').style.stroke=$('pcb').style.stroke=u>=TM.wrong_moment?'var(--loss)':'var(--line)';

  R('cs',TM.calm_sea);R('gc',TM.growth_chart);R('ss',TM.storm_sea);
  wv($('w0'),124,776,600,4,t,1.2);wv($('w1'),824,1476,600,22,t,3);
  $('b0').setAttribute('transform','translate(300 '+(598+3*Math.sin(t*1.2)).toFixed(1)+')');
  $('b1').setAttribute('transform','translate(1000 '+(596+14*Math.sin(t*3+1)).toFixed(1)+') rotate('+(14*Math.sin(t*3)).toFixed(1)+')');
  BR.forEach((b,i)=>{const a=TM.growth_chart+i*.3,h=[50,90,140,200][i]*p(u,a,a+.6);b.setAttribute('y',(560-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
  $('bolt').setAttribute('opacity',Math.sin(t*5)>.6?1:.25);

  R('tb',TM.open_table);
  TP.forEach(([x,y],i)=>{const a=TM.team_ideas+i*.25,k=p(u,a+.6,a+1.4);rise(TMG[i],p(u,a,a+.4));ID[i].setAttribute('cx',(x+(SP2[i][0]-x)*k).toFixed(1));ID[i].setAttribute('cy',(y+(SP2[i][1]-y)*k).toFixed(1));ID[i].setAttribute('opacity',u>=a+.6?1:0)});
  TH.forEach(e=>e.setAttribute('class',u>=TM.team_ideas+3.5?'gain':'ink'));R('agr',TM.team_ideas+3.5);
  R('cb',TM.culture_book);CL.forEach(([l,a,b],i)=>l.setAttribute('x2',(a+(b-a)*p(u,TM.culture_book+.5+i*.15,TM.culture_book+.9+i*.15)).toFixed(1)));

  R('fn',TM.narrow_beam);R('tgt',TM.narrow_beam+1.2);
  DT.forEach(([d,x,y],i)=>{const c=(t*.3+i/12)%1;d.setAttribute('cx',(x+(985-x)*c).toFixed(1));d.setAttribute('cy',(y+(500-y)*c).toFixed(1));d.setAttribute('opacity',(1-c*c).toFixed(2))});
  R('mg',TM.dust_speck);$('spk').setAttribute('r',(5+3*Math.abs(Math.sin(t*4))).toFixed(1));
  R('c0',TM.dust_speck+4.5);R('c1',TM.dust_speck+6.5);R('c2',TM.war_culture);

  R('bk',TM.rulebook);R('qcard',TM.quote_card);R('r0',TM.torn_page);R('r1',TM.torn_page+3.8);
  const tr=p(u,TM.torn_page+4.3,TM.torn_page+5.3);$('bkR').setAttribute('transform','translate('+(20*tr).toFixed(1)+' 0) rotate('+(6*tr).toFixed(1)+' 330 710)');
  $('st1').setAttribute('opacity',(1-.65*p(u,TM.torn_page+4.5,TM.torn_page+6.5)).toFixed(2));

  R('hq',TM.google_hq);R('gg',TM.google_hq+.8);R('ps',TM.schmidt);R('pl',TM.larry_page);R('cmp',TM.larry_page+6.2);
  WN.forEach((w,i)=>w.setAttribute('fill',u>=TM.schmidt+1+i*.2?'var(--gain)':'var(--line)'));
  const sw=p(u,TM.larry_page+1,TM.larry_page+2.5),an=(160-140*sw+2*Math.sin(t*5)*sw)*Math.PI/180;
  $('ndl').setAttribute('x2',(1200+170*Math.cos(an)).toFixed(1));$('ndl').setAttribute('y2',(560-170*Math.sin(an)).toFixed(1));
  CV.forEach((c,i)=>c.setAttribute('transform','translate('+(1460-(t*50+i*60)%180).toFixed(1)+' 690)'));

  // Intel: competitors press down on the memory chip with indigo arrows, keeping a clear gap
  R('gr',TM.intel_chip);R('mc',TM.intel_chip+1);
  const ma=p(u,TM.memory_chip,TM.memory_chip+1.5),mb=p(u,TM.memory_chip+1.5,TM.memory_chip+3),mh=240-120*mb,mtop=680-mh;
  $('mcr').setAttribute('y',mtop.toFixed(1));$('mcr').setAttribute('height',mh.toFixed(1));
  $('mcr').style.stroke=mb>0?'var(--loss)':'var(--ink)';
  MP.forEach(([a,b,i])=>{const y=(mtop+mh*(40+i*40)/240).toFixed(1);a.setAttribute('d','M410 '+y+'h30');b.setAttribute('d','M680 '+y+'h30')});
  $('mct').setAttribute('y',(mtop+mh/2+12).toFixed(1));
  $('pr').setAttribute('transform','translate(0 '+(mtop-120-80*(1-ma)).toFixed(1)+')');$('pr').setAttribute('opacity',p(u,TM.memory_chip,TM.memory_chip+.4));
  R('ex',TM.exit_sign);$('exa').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));R('cpu',TM.exit_sign+1.2);

  R('ht',TM.two_hats);R('hard',TM.two_hats+2);
  $('hA').setAttribute('transform','translate(190 '+(330-6*Math.abs(Math.sin(t*1.5))).toFixed(1)+')');
  $('harr').setAttribute('opacity',p(u,TM.two_hats+1,TM.two_hats+1.6));
  R('vn',TM.weather_vane);$('va').setAttribute('transform','translate(800 360) rotate('+(16*Math.sin(t*.9)).toFixed(1)+')');
  R('sw',TM.style_switch);const ks=p(u,TM.style_switch+.6,TM.style_switch+1.4);
  $('kn').setAttribute('cx',(1190+200*ks).toFixed(1));$('kn').style.fill=ks>.5?'var(--loss)':'var(--gain)';
  R('dr',TM.style_switch+4.1);

  R('qa',TM.question);R('qb',TM.question+2.9);R('qc',TM.question+3.5);R('qt',TM.question+.6);
  $('qk').setAttribute('cx',(1300+80*Math.sin(t*1.5)).toFixed(1));