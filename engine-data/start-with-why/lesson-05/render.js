[60,115,170].forEach((R,i)=>$('tr'+i).setAttribute('r',(R*p(u,TM.title_card+i*.3,TM.title_card+i*.3+.8)).toFixed(1)));
  rise($('trl'),p(u,TM.title_card+1,TM.title_card+1.5));

  [0,1,2].forEach(i=>{rise($('rg'+i),p(u,TM.three_rings+i*.5,TM.three_rings+i*.5+.5)); rise($('jb'+i),p(u,TM.magnifier+i*2,TM.magnifier+i*2+.5))});
  const hk=u>=TM.handshake; ['k1','k2','ld0','ld1','ld2'].forEach(id=>$(id).setAttribute('stroke',hk?'var(--gain)':(id[0]=='k'?'var(--line)':'var(--muted)')));
  rise($('hs'),p(u,TM.handshake,TM.handshake+.6));

  // clarity: fog on the sign, then it clears
  const clr=p(u,TM.plane+.5,TM.plane+2);
  rise($('sign'),p(u,TM.foggy_sign,TM.foggy_sign+.5));
  FOG.forEach((e,i)=>e.setAttribute('transform','translate('+(26*Math.sin(t*.6+i*1.1)).toFixed(1)+' 0)'));
  $('fog').setAttribute('opacity',(p(u,TM.foggy_sign,TM.foggy_sign+.8)*(1-clr)).toFixed(2));
  $('smg').setAttribute('opacity',(p(u,TM.foggy_sign,TM.foggy_sign+.5)*(1-clr)).toFixed(2));
  rise($('walker'),p(u,TM.foggy_sign+4.2,TM.foggy_sign+4.7));
  $('qm').setAttribute('opacity',(1-p(u,TM.plane+1.5,TM.plane+2.1)).toFixed(2));
  const clear=u>=TM.plane+1.8; WKP.forEach(e=>e.setAttribute('class',clear?'gain':'ink'));
  $('wk').setAttribute('transform','translate('+(18*Math.sin(t*1.4)*(1-clr)).toFixed(1)+' 0)');
  rise($('stxt'),p(u,TM.plane+1.5,TM.plane+2.1)); $('board').setAttribute('stroke',u>=TM.plane+1.5?'var(--gain)':'var(--muted)');
  const pk=p(u,TM.plane,TM.plane+1.2); $('plane').setAttribute('opacity',pk); $('plane').setAttribute('transform','translate('+(400*(1-pk)).toFixed(1)+' '+(4*Math.sin(t*2)).toFixed(1)+')');
  rise($('ptx'),p(u,TM.plane+.8,TM.plane+1.4)); rise($('pst2'),p(u,TM.plane+7.7,TM.plane+8.3));

  [0,1,2].forEach(i=>rise($('hc'+i),p(u,TM.three_icons+i*1.2,TM.three_icons+i*1.2+.5)));
  rise($('slog'),p(u,TM.three_icons+5.4,TM.three_icons+5.9)); rise($('gate'),p(u,TM.checklist,TM.checklist+.5));
  TK.forEach((c,i)=>{const a=TM.checklist+.4+i*.7,k=p(u,a,a+1.2),f=TF[i],tm=i%3==1;
    c.setAttribute('cx',(160+(f[0]-160)*k).toFixed(1)); c.setAttribute('cy',(700+(f[1]-700)*(tm?p(u,a+.9,a+1.4):0)).toFixed(1));
    c.setAttribute('opacity',(cl((u-a)/.3)*(tm?1-.6*p(u,a+1,a+1.4):1)).toFixed(2))});
  rise($('tlab'),p(u,TM.checklist+3,TM.checklist+3.5));

  rise($('pst'),p(u,TM.sticky_note,TM.sticky_note+.5)); rise($('stk'),p(u,TM.sticky_note+.4,TM.sticky_note+.9));
  rise($('intg'),p(u,TM.crossed_word,TM.crossed_word+.5));
  $('strk').setAttribute('x2',(160+460*p(u,TM.crossed_word+.8,TM.crossed_word+1.4)).toFixed(1));
  rise($('hard'),p(u,TM.crossed_word+1.2,TM.crossed_word+1.7));
  rise($('stkt'),p(u,TM.action_arrow,TM.action_arrow+.5)); rise($('mon'),p(u,TM.action_arrow+1.2,TM.action_arrow+1.8));

  $('shelf').setAttribute('opacity',p(u,TM.product_shelf,TM.product_shelf+.5));
  [0,1,2].forEach(i=>{rise($('cd'+i),p(u,TM.product_shelf+i*.4,TM.product_shelf+i*.4+.5));
    $('ar'+i).setAttribute('opacity',p(u,TM.apple_logo+.6+i*.6,TM.apple_logo+1.1+i*.6));
    rise(BD[i],p(u,TM.apple_logo+7.8+i*.4,TM.apple_logo+8.2+i*.4))});
  rise($('blf'),p(u,TM.apple_logo,TM.apple_logo+.5)); rise($('prf'),p(u,TM.apple_logo+8.4,TM.apple_logo+9));

  rise($('cart'),p(u,TM.shopping_cart,TM.shopping_cart+.6));
  rise($('crowd6'),p(u,TM.advice_crowd,TM.advice_crowd+.5)); rise($('adv'),p(u,TM.advice_crowd,TM.advice_crowd+.5));
  const ce=p(u,TM.celery,TM.celery+.6);
  BB.forEach((b,i)=>{const a=TM.advice_crowd+.5+i*.9; b[0].setAttribute('opacity',(p(u,a,a+.4)*(i<2?1-.65*ce:1)).toFixed(2));
    b[1].setAttribute('stroke',u>=TM.celery?(i<2?'var(--loss)':'var(--gain)'):'var(--ink)')});
  rise($('why6'),ce);
  const ik=p(u,TM.celery+.5,TM.celery+1.3); $('items').setAttribute('opacity',ik); $('items').setAttribute('transform','translate(0 '+(-160*(1-ik)).toFixed(1)+')');
  rise($('glance'),p(u,TM.celery+5,TM.celery+5.6));

  rise($('pil'),p(u,TM.bridge,TM.bridge+.5));
  const br=p(u,TM.broken_link,TM.broken_link+.6)*(1-p(u,TM.broken_link+3.8,TM.broken_link+4.4));
  PL.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.bridge+.5+i*.25,TM.bridge+.8+i*.25)));
  PL[5].setAttribute('class',br>.02?'loss':'ink'); PL[5].setAttribute('transform','translate(0 '+(70*br).toFixed(1)+') rotate('+(25*br).toFixed(1)+' 801 413)');
  WK.forEach((c,i)=>{const a=TM.broken_link+4.2+i*.9,k=p(u,a,a+2.6); c.setAttribute('cx',(300+980*k).toFixed(1)); c.setAttribute('fill',k>.9?'var(--gain)':'var(--muted)'); c.setAttribute('opacity',cl((u-a)/.3))});
  rise($('blv'),p(u,TM.broken_link+6.5,TM.broken_link+7));
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); rise($('calt'),p(u,TM.calendar+.5,TM.calendar+1));
  const hl=u>=TM.calendar+1.2; CD[2][0].setAttribute('fill',hl?'var(--gain)':'var(--stage)'); CD[2][0].setAttribute('stroke',hl?'var(--gain)':'var(--ink)'); CD[2][1].style.fill=hl?'var(--on-gain)':'';

  rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
  rise($('mcart'),p(u,TM.mirror+1.2,TM.mirror+1.8)); rise($('oddq'),p(u,TM.mirror+6.6,TM.mirror+7.1));
  const od=u>=TM.mirror+6.6; $('odd').setAttribute('class',od?'loss':'ink'); $('odd').setAttribute('cy',(640-(od?14*Math.abs(Math.sin(t*3)):0)).toFixed(1));