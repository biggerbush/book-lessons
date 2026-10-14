const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('tChk',TM.gut_choice+1.5); const bh=u>=TM.brain_hint; $('tBr').setAttribute('class',bh?'gain':'loss'); $('tBr').setAttribute('r',(50+(bh?6*Math.sin(t*4):0)).toFixed(1));

  R('b1',TM.brain_slice,.6); B1.out.setAttribute('stroke-width',u>=TM.neocortex?6:0); R('ncL',TM.neocortex);
  B1.lim.setAttribute('opacity',(.25+.75*p(u,TM.limbic,TM.limbic+.6)).toFixed(2)); R('lbL',TM.limbic);
  P1.forEach((g,i)=>{const a=i<3?TM.neocortex+3.8+i*.4:i<5?TM.limbic+2.9+(i-3)*.4:TM.limbic+5.9+(i-5)*.4; rise(g,p(u,a,a+.4))});

  const gk=p(u,TM.circle_layer,TM.circle_layer+1.2); $('gc').setAttribute('transform','translate('+(800*(1-gk)).toFixed(1)+' 0)'); $('gc').setAttribute('opacity',gk.toFixed(2));
  $('gcW').setAttribute('stroke',u>=TM.what_ring?'var(--gain)':'var(--ink)'); R('wR',TM.what_ring); R('iR',TM.inner_rings);
  B2.lim.setAttribute('fill-opacity',(.3+.3*p(u,TM.inner_rings,TM.inner_rings+.6)).toFixed(2)); R('bio',TM.inner_rings+5,.6);

  R('bub3',TM.muted_mouth); $('x3').setAttribute('opacity',p(u,TM.muted_mouth+.8,TM.muted_mouth+1.2).toFixed(2));
  R('st3',TM.muted_mouth+3.4); R('per3',TM.muted_mouth+3.4); R('gl3',TM.gut_glow);
  const gg=p(u,TM.gut_glow,TM.gut_glow+.5), fr=(t*.8)%1; $('g3').setAttribute('opacity',gg.toFixed(2)); $('g3r').setAttribute('r',(28+50*fr).toFixed(1)); $('g3r').setAttribute('opacity',(gg*(1-fr)).toFixed(2));

  R('cp',TM.couple); R('ask4',TM.couple+2.2); T4.forEach((g,i)=>rise(g,p(u,TM.trait_bubbles+i*.4,TM.trait_bubbles+i*.4+.4)));
  CR.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.12,TM.crowd+i*.12+.4))); R('crl',TM.crowd+.8); R('fe4',TM.crowd+3.8);
  H4.setAttribute('transform','translate(220 770) scale('+(.3*(1+.08*Math.pow(Math.abs(Math.sin(t*3)),6))).toFixed(3)+')');

  R('sp',TM.spec_sheet); SR.forEach((g,i)=>rise(g,p(u,TM.spec_sheet+.4+i*.4,TM.spec_sheet+.8+i*.4)));
  R('ar5',TM.spec_sheet+3.4); R('und5',TM.spec_sheet+3.8); const nk=u>=TM.spec_sheet+3.4;
  B5.out.setAttribute('fill',nk?'var(--gain)':'var(--line)'); B5.out.setAttribute('stroke','var(--ink)'); B5.out.setAttribute('stroke-width',nk?6:0); B5.lim.setAttribute('class','loss');
  R('sh5',TM.shrug); R('da5',TM.deep_arrow); R('dt5',TM.deep_arrow+.4); $('dr5').setAttribute('r',(125+6*Math.sin(t*3)).toFixed(1));

  R('ws',TM.why_beam-.3); $('beam').setAttribute('x2',(236+196*p(u,TM.why_beam+.3,TM.why_beam+1.3)).toFixed(1));
  B6.lim.setAttribute('class',u>=TM.checkmark?'gain':'loss'); $('ck6').setAttribute('opacity',p(u,TM.checkmark,TM.checkmark+.4).toFixed(2));
  R('ar6',TM.reason_list); R6.forEach((g,i)=>rise(g,p(u,TM.reason_list+.3+i*.5,TM.reason_list+.7+i*.5))); R('loy6',TM.reason_list+4.5,.6);

  R('pr7',TM.your_pitch-.3); R('bel',TM.your_pitch+.4); C7.forEach((g,i)=>rise(g,p(u,TM.proof_cards+i*.4,TM.proof_cards+i*.4+.4)));
  R('ord7',TM.proof_cards+3.7); R('fl7',TM.proof_cards+3.9);

  R('qa',TM.think_bubble); R('tb',TM.think_bubble+.6); R('qb',TM.think_bubble+4.1); R('qc',TM.think_bubble+4.5);
  W8.forEach((w,i)=>w[0].setAttribute('x2',(1240+w[1]*p(u,TM.think_bubble+4.6+i*.3,TM.think_bubble+5.1+i*.3)).toFixed(1)));