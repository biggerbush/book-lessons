const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d)), sw=3*Math.sin(t*1.5);

  R('bolt0',TM.lightning);
  const kb=p(u,TM.lightning+5.6,TM.lightning+6.2);
  $('nob').setAttribute('x2',(1260+180*kb).toFixed(1));$('nob').setAttribute('y2',(200+260*kb).toFixed(1));$('nob').setAttribute('opacity',kb>0?1:0);
  grow('sd0',1350,700,p(u,TM.lightning+6.4,TM.lightning+8.6),1,sw);

  R('gr',TM.graduate);R('qm',TM.question_mark);
  $('qx').setAttribute('opacity',p(u,TM.seedling,TM.seedling+.4));
  R('seed1',TM.seedling);grow('sd1',1260,580,p(u,TM.seedling+.3,TM.seedling+3),1,sw);
  $('drops').setAttribute('opacity',p(u,TM.seedling+1,TM.seedling+1.5));
  drops.forEach((d,i)=>{const c=(t*.8+i/3)%1;d.setAttribute('cy',(330+140*c).toFixed(1));d.setAttribute('fill-opacity',(1-c).toFixed(2))});
  R('myth',TM.seedling+2);

  R('jtl',TM.julia_child);R('julw',TM.julia_child+.3);
  $('jul').setAttribute('transform','translate('+(220+540*p(u,TM.julia_child+.8,TM.french_meal+.4)).toFixed(1)+' 0)');
  R('pan',TM.french_meal+.4);
  drawK($('climb'),p(u,TM.cookbook,TM.cookbook+2));R('yrs2',TM.cookbook+.6);R('book',TM.cookbook+1.6);R('jcall',TM.cookbook+2.4);

  R('wander',TM.playground);
  tiles.forEach((c,i)=>{const a=TM.playground+.8+i*.4;rise(c[0],p(u,a,a+.4))});
  R('samp',TM.sampler);
  const kl=p(u,TM.magnifier,TM.magnifier+5.5),pt=WP.getPointAtLength(WL*kl);
  $('lens3').setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+')');R('lensw',TM.magnifier);
  tiles.forEach((c,i)=>c[1].setAttribute('stroke',u>=TM.magnifier&&kl<1&&Math.hypot(TC[i][0]-pt.x,TC[i][1]-pt.y)<80?'var(--gain)':'var(--ink)'));
  const found=kl>=1;
  $('lring').style.stroke=found?'var(--gain)':'';$('lhand').style.stroke=found?'var(--gain)':'';
  $('lring').setAttribute('fill',found?'var(--gain)':'none');$('lring').setAttribute('fill-opacity',found?(.18+.08*Math.sin(t*3)).toFixed(2):0);
  R('grab',TM.magnifier+5.5);
  R('cur',TM.magnifier+1.5);

  R('axes4',TM.calendar);
  sp.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.calendar+i*1.4,TM.calendar+i*1.4+.3)));
  drawK($('gline'),p(u,TM.calendar,TM.calendar+11));
  R('ment',TM.mentor);R('dur',TM.growth_chart);

  R('toy',TM.shiny_toy);$('rays').setAttribute('transform','translate(430 470) rotate('+(t*20%360).toFixed(1)+')');
  R('exp',TM.layers);drawK($('facets'),p(u,TM.layers+.5,TM.layers+2.5));
  [0,1,2].forEach(i=>R('pq'+i,TM.puzzle+i*.4,.4));R('pz',TM.puzzle+1.4);

  R('tree6',TM.tree);
  roots.forEach((r,i)=>drawK(r,p(u,TM.tree+.3+i*.4,TM.tree+1.5+i*.4)));
  R('books6',TM.books_stack);R('bl6',TM.books_stack+.5);
  qs.forEach((q,i)=>{const k=p(u,TM.books_stack+.6+i*.5,TM.books_stack+1+i*.5);q.setAttribute('opacity',k);q.setAttribute('y',(370-14*k-6*Math.sin(t*2+i)).toFixed(1))});
  const kd=p(u,TM.books_stack+4.2,TM.books_stack+6.5);
  dr.forEach((g,i)=>{g.setAttribute('transform','translate('+(50*kd*(1+i*.3)).toFixed(1)+' 0)');g.setAttribute('opacity',(.55*(1-kd)).toFixed(2))});
  R('drl',TM.books_stack+4.4);R('last6',TM.books_stack+4.8);

  R('nb',TM.notebook);R('me7',TM.notebook+.5);
  R('bub7',TM.thought_bubble);R('nq1',TM.thought_bubble+.3);R('nq2',TM.thought_bubble+2.6);
  drawK($('wnd'),p(u,TM.thought_bubble+2.6,TM.thought_bubble+4.6));
  R('wk',TM.sign_up);R('step',TM.sign_up+.6);
  const on=u>=TM.sign_up+1.2;wk[2][0].setAttribute('fill',on?'var(--gain)':'var(--stage)');wk[2][0].setAttribute('stroke',on?'var(--gain)':'var(--ink)');wk[2][1].style.fill=on?'var(--on-gain)':'';

  const s8=SC[8][0]/K;
  R('qa',s8+.3);R('qb',s8+.7);R('qc',s8+1.1);R('qd',s8+6.4);R('ql',s8+7);
  grow('sd8',1370,720,p(u,s8+6.6,s8+9),1.2,sw);