rise($('walkw'),p(u,TM.wall,TM.wall+.5));
  const wk=p(u,TM.wall+4.2,TM.wall+7.5), wp=along(TP,wk), push=wk>0?0:6*Math.abs(Math.sin(t*5));
  $('walker').setAttribute('transform','translate('+(wp[0]+push).toFixed(1)+' '+wp[1].toFixed(1)+')');
  $('troute').setAttribute('opacity',p(u,TM.wall+4.2,TM.wall+5));

  rise($('chw'),p(u,TM.fist,TM.fist+.5));
  const cyc=u>TM.fist+.5?((u-TM.fist-.5)*.8)%1:0, fwd=cyc<.6?Math.pow(cyc/.6,2):1-(cyc-.6)/.4, st=p(u,TM.cracks+1.4,TM.cracks+2.2);
  $('charger').setAttribute('transform','translate('+(400+520*fwd*(1-st)+160*st).toFixed(1)+' 440)');
  $('pow').setAttribute('opacity',(cyc>.55&&cyc<.75&&st<1)?1:0); $('ouch').setAttribute('opacity',st);
  [0,1,2].forEach(i=>rise($('h'+i),p(u,TM.fist+5+i*.45,TM.fist+5.4+i*.45)));
  rise($('crk'),p(u,TM.cracks,TM.cracks+.4)); rise($('moves'),p(u,TM.cracks+1.4,TM.cracks+1.9));
  rise($('bruise'),p(u,TM.cracks+3,TM.cracks+3.5)); rise($('alt'),p(u,TM.cracks+7.5,TM.cracks+8.1));

  rise($('hist'),p(u,TM.historian,TM.historian+.5)); rise($('map1'),p(u,TM.map,TM.map+.5)); rise($('head'),p(u,TM.map+1,TM.map+1.5));
  [0,1].forEach(i=>{const a=TM.arrows+i*.8, k=p(u,a,a+1.2); $('fl'+i).setAttribute('stroke-dashoffset',(1-k).toFixed(3)); $('fd'+i).setAttribute('opacity',p(u,a+1,a+1.3)); rise($('fl'+i+'t'),p(u,a+.6,a+1.1))});
  rise($('cost'),p(u,TM.arrows+5.4,TM.arrows+6)); $('hpath').setAttribute('class',u>=TM.arrows+5.4?'s-loss':'s-muted');

  rise($('house'),p(u,TM.door,TM.door+.5));
  [0,1,2].forEach(i=>{const a=TM.door+2.6+i*1.6; rise($('a'+i),p(u,a,a+.5))});
  rise($('team'),p(u,TM.small_team,TM.small_team+.5)); rise($('clever'),p(u,TM.small_team+3.4,TM.small_team+3.9));

  const o0=TM.opponent, ox=380+140*p(u,o0,o0+3.8)+640*p(u,o0+3.8,o0+5.6), fa=p(u,o0+5.4,o0+6);
  rise($('mat'),p(u,TM.judo_mat,TM.judo_mat+.5)); rise($('youw'),p(u,TM.judo_mat+.5,TM.judo_mat+1)); rise($('oppw'),p(u,o0,o0+.5));
  $('you').setAttribute('transform','translate(800 '+(470-140*p(u,o0+3.4,o0+4)).toFixed(1)+')'); $('stp').setAttribute('opacity',p(u,o0+3.4,o0+4));
  $('opp').setAttribute('transform','translate('+ox.toFixed(1)+' 470)'); $('opp').setAttribute('opacity',1-fa); rise($('fall'),fa);
  $('trail').setAttribute('stroke-dashoffset',(1-(ox-380)/780).toFixed(3)); $('trail').setAttribute('class',u>=o0+9.1?'s-gain':'s-loss');
  rise($('mom'),p(u,o0+3.8,o0+4.3)); rise($('same'),p(u,o0+9.1,o0+9.6)); rise($('force'),p(u,o0+12.9,o0+13.5));

  rise($('emp'),p(u,TM.gandhi,TM.gandhi+.5)); rise($('gan'),p(u,TM.gandhi+.8,TM.gandhi+1.3)); rise($('nomatch'),p(u,TM.gandhi+3.8,TM.gandhi+4.3));
  MF.forEach((g,i)=>rise(g,p(u,TM.marchers+i*.4,TM.marchers+i*.4+.4))); rise($('marchl'),p(u,TM.marchers+1.4,TM.marchers+1.9));
  rise($('news'),p(u,TM.newspaper,TM.newspaper+.5)); NB.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.newspaper+.4+i*.7,TM.newspaper+.7+i*.7)));
  const wq=p(u,TM.newspaper+4.6,TM.newspaper+5.4); $('empB').setAttribute('opacity',(1-.55*wq).toFixed(2)); $('ecrk').setAttribute('opacity',wq); rise($('weak'),wq);

  [[TM.critic,TM.critic+2.2],[TM.rival,TM.rival+2],[TM.setback,TM.setback+1.5]].forEach((a,i)=>{rise($('k'+i),p(u,a[0],a[0]+.5)); rise($('k'+i+'b'),p(u,a[1],a[1]+.5))});
  rise($('ask'),p(u,TM.setback+4.2,TM.setback+4.8));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); $('nb0').setAttribute('width',(380*p(u,TM.notebook+.6,TM.notebook+2)).toFixed(1));
  rise($('dg'),p(u,TM.notebook+.8,TM.notebook+1.3));
  rise($('nbA'),p(u,TM.two_paths,TM.two_paths+.4)); $('nb1').setAttribute('width',(360*p(u,TM.two_paths+.6,TM.two_paths+1.8)).toFixed(1));
  rise($('nbB'),p(u,TM.two_paths+2,TM.two_paths+2.4)); $('nb2').setAttribute('width',(340*p(u,TM.two_paths+2.6,TM.two_paths+3.8)).toFixed(1));
  rise($('pA'),p(u,TM.two_paths+.3,TM.two_paths+.8)); rise($('pB'),p(u,TM.two_paths+2.3,TM.two_paths+2.8));
  const g7=TM.two_paths+5.4, tq=bz(PA,p(u,g7,g7+2)); rise($('tryl'),p(u,g7,g7+.5));
  $('trav').setAttribute('cx',tq[0].toFixed(1)); $('trav').setAttribute('cy',tq[1].toFixed(1)); $('trav').setAttribute('opacity',u>=g7?1:0);

  const s8=SC[8][0]/K; rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+.7,s8+1.2)); rise($('qc'),p(u,s8+3,s8+3.6));
  const ek=(t*.3)%1, ep=along(EP,cl(ek/.8)); $('edot').setAttribute('cx',ep[0].toFixed(1)); $('edot').setAttribute('cy',ep[1].toFixed(1)); $('edot').setAttribute('opacity',(ek>.9?(1-ek)/.1:1).toFixed(2));