const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));

  // title
  R('t_ape',TM.title_lion);R('t_bub',TM.title_lion+.6);
  const lz=p(u,TM.title_lion+5,TM.title_lion+5.6);$('t_q').setAttribute('opacity',(1-lz).toFixed(2));rise($('t_lion'),lz);
  $('t_fl').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')');

  // ants, chimps, us
  R('p0',TM.ant_colony);$('ants').setAttribute('transform','translate('+(8*Math.sin(t*2)).toFixed(1)+' 0)');
  R('p1',TM.chimp_troop);R('p2',TM.crowd);
  MD.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.crowd+.3+i*.03,TM.crowd+.6+i*.03)));
  ML.forEach(l=>l.setAttribute('opacity',(.6*p(u,TM.crowd+1.5,TM.crowd+2.5)).toFixed(2)));

  // gossip limit
  CG.forEach((g,i)=>rise(g,p(u,TM.campfire+i*.15,TM.campfire+i*.15+.4)));
  GL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.campfire+1.5+i*.4,TM.campfire+1.9+i*.4)));
  $('flame').setAttribute('transform','translate(460 610) scale(1 '+(1+.08*Math.sin(t*9)).toFixed(3)+') translate(-460 -610)');
  R('r150',TM.number_150);const nk=150*p(u,TM.number_150,TM.number_150+2);$('n150').textContent=Math.round(nk);
  GD.forEach(g=>g.el.setAttribute('opacity',g.c<15?(g.k<nk?1:.12):(.5*p(u,TM.number_150+6.2+(g.c-15)*.08,TM.number_150+6.6+(g.c-15)*.08)).toFixed(2)));
  R('lk',TM.number_150+2);R('lst',TM.number_150+6.2);

  // unreal
  R('talker',TM.speech_bubble);R('bub3',TM.speech_bubble+.4);R('sl',TM.spirit_lion);R('gs',TM.spirit_lion+.8);
  $('spk').setAttribute('opacity',(p(u,TM.spirit_lion+.4,TM.spirit_lion+1)*(.6+.4*Math.sin(t*4))).toFixed(2));
  $('halo').setAttribute('stroke-dashoffset',(t*20).toFixed(1));
  R('lm',TM.lion_man);R('lml',TM.lion_man+.6);

  // Peugeot
  R('logo',TM.peugeot_logo);R('fac',TM.factory);
  $('facIn').setAttribute('opacity',(1-.85*p(u,TM.factory+2,TM.factory+3.5)).toFixed(2));
  R('gone',TM.factory+2.5);R('still',TM.factory+3.5);
  $('bdg').setAttribute('stroke-width',(8+(u>TM.factory+3.5?3*Math.abs(Math.sin(t*3)):0)).toFixed(1));
  R('doc',TM.lawyer);R('docl',TM.lawyer+.6);R('quote',TM.lawyer+2.5);

  // strangers
  R('cath',TM.two_strangers);R('hosp',TM.two_strangers+1.5);R('hl',TM.two_strangers+2);
  const on=p(u,TM.two_strangers+2,TM.two_strangers+2.5),ck=(t*.6)%1,ce=ease(ck),fo=on*(ck<.85?1:(1-ck)/.15);
  [[220,350],[520,390]].forEach((q,i)=>{const c=$('coin'+i);c.setAttribute('cx',(q[0]+(q[1]-q[0])*ce).toFixed(1));c.setAttribute('cy',(470+90*ce).toFixed(1));c.setAttribute('opacity',fo.toFixed(2))});
  R('flagG',TM.flag);NP.forEach((g,i)=>rise(g,p(u,TM.flag+.5+i*.04,TM.flag+.9+i*.04)));R('nl5',TM.flag+1.5);
  let ft='',fb='';for(let x=0;x<=300;x+=20){const w=x/300*12*Math.sin(x/50-t*3);ft+='L'+(800+x)+' '+(270+w).toFixed(1);fb='L'+(800+x)+' '+(440+w).toFixed(1)+fb}
  $('flg').setAttribute('d','M800 270'+ft+fb+'z');
  R('same',TM.flag+5.7);R('tie',TM.flag+5.9);

  // stories change fast
  R('dnaG',TM.dna_strand);const d1=[],d2=[];
  for(let x=160;x<=700;x+=10){const s=80*Math.sin(x/45+t*.6);d1.push(x+' '+(440+s).toFixed(1));d2.push(x+' '+(440-s).toFixed(1))}
  $('dna1').setAttribute('d','M'+d1.join('L'));$('dna2').setAttribute('d','M'+d2.join('L'));
  RG.forEach((r,i)=>{const x=170+i*30,s=80*Math.sin(x/45+t*.6);r.setAttribute('d','M'+x+' '+(440+s).toFixed(1)+'V'+(440-s).toFixed(1))});
  $('slowbar').setAttribute('width',(540*lin(u,TM.dna_strand,TM.dna_strand+120)).toFixed(1));
  R('crw',TM.crown);R('oldS',TM.crown+.4);
  const v=p(u,TM.revolution+.8,TM.revolution+1.8);$('crwI').setAttribute('transform','translate(0 '+(-80*v).toFixed(1)+')');$('crwI').setAttribute('opacity',(1-v).toFixed(2));
  $('stk').setAttribute('x2',(950+340*p(u,TM.revolution+.8,TM.revolution+1.4)).toFixed(1));$('stk').setAttribute('opacity',u>TM.revolution+.8?1:0);
  R('yr',TM.revolution);R('ppl',TM.revolution+1.4);R('newS',TM.revolution+1.8);

  // fiction is glue
  R('hs',TM.handshake);R('nl7',TM.handshake+1);R('ring',TM.handshake+3.7);R('gl7',TM.handshake+3.7);R('glb',TM.handshake+3.7);
  $('ring').setAttribute('rx',(160+8*Math.sin(t*3)).toFixed(1));
  NL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.handshake+4.2+i*.08,TM.handshake+4.6+i*.08)));
  $('mer').setAttribute('rx',(190*Math.abs(Math.cos(t*.5))).toFixed(1));
  [0,1,2].forEach(i=>R('ic'+i,TM.glue_globe+i*1.2));R('nogl',TM.glue_globe+.3);

  // close
  CH8.forEach((g,i)=>rise(g,p(u,TM.question_mark+i*1.4,TM.question_mark+i*1.4+.5)));R('qm',TM.question_mark);
  ['qa','qb','qc'].forEach((id,i)=>R(id,TM.question_mark+6.6+i*.4));R('q8l',TM.question_mark+8);