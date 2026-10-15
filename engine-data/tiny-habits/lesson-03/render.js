const A=TM.wish_cloud;
  rise($('wishG'),p(u,A,A+.6));
  ['ww0','ww1','ww2'].forEach((id,i)=>rise($(id),p(u,A+.8+i*.9,A+1.3+i*.9)));
  rise($('nott'),p(u,A+4.2,A+4.7)); C0.setAttribute('stroke-dasharray',u>=A+4.2?'16 12':'none');

  rise($('asp'),p(u,TM.aspiration,TM.aspiration+.6));
  rise($('beh'),p(u,TM.behavior_box,TM.behavior_box+.6)); $('arr1').setAttribute('opacity',p(u,TM.behavior_box,TM.behavior_box+.6));
  rise($('walk'),p(u,TM.walk_lunch,TM.walk_lunch+.6)); rise($('cando'),p(u,TM.walk_lunch+1.5,TM.walk_lunch+2.1));
  const sw=12*Math.sin(t*6); $('legs').setAttribute('d',`M1002 429l${(-sw).toFixed(1)} 32M1018 429l${sw.toFixed(1)} 32`);

  rise($('star'),p(u,TM.gold_star,TM.gold_star+.6)); STAR.setAttribute('transform',`rotate(${(8*Math.sin(t*.8)).toFixed(2)} 360 500)`);
  [TM.check_one,TM.check_two,TM.check_three].forEach((a,i)=>{rise(rows[i][0],p(u,a,a+.5));const k=p(u,a+.4,a+1);
    rows[i][2].setAttribute('stroke-dashoffset',(80*(1-k)).toFixed(1));rows[i][1].setAttribute('stroke',k>0?'var(--gain)':'var(--ink)')});

  rise($('wand'),p(u,TM.magic_wand,TM.magic_wand+.6)); rise($('spk'),p(u,TM.magic_wand+4.2,TM.magic_wand+4.7));
  cards.forEach((c,i)=>{const a=TM.bee_swarm+i*.4,k=p(u,a,a+.9),q=SW[i],x=436+(q[0]-436)*k,y=482+(q[1]-482)*k+5*Math.sin(t*2.2+i)*k;
    c.g.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${(.2+.8*k).toFixed(3)})`);c.g.setAttribute('opacity',u>=a?1:0);
    if(c.w){const b=TM.bee_swarm+6.2+LI.indexOf(i)*.8,s=p(u,b,b+.4);c.w.setAttribute('opacity',s);c.l.setAttribute('opacity',1-s)}});
  rise($('l3'),p(u,TM.bee_swarm+6.2,TM.bee_swarm+6.7));

  rise(G4.fg,p(u,TM.grid,TM.grid+.6)); rise(G4.va,p(u,TM.up_arrow,TM.up_arrow+.5)); G4.ha.setAttribute('opacity',0);
  G4.cs.forEach((c,i)=>{const d=CD[i],k=p(u,TM.up_arrow+.8+i*.9,TM.up_arrow+1.6+i*.9);at(c,d[1],MID+(d[2]-MID)*k,p(u,TM.grid+.8+i*.2,TM.grid+1.2+i*.2))});
  rise($('hon'),p(u,TM.up_arrow+7.4,TM.up_arrow+7.9));

  const B=TM.side_arrow;
  G5.cs.forEach((c,i)=>{const d=CD[i],a=d[3]>d[1]?B+2.2+i*.3:B+7.2+i*.3,k=p(u,a,a+1);at(c,d[1]+(d[3]-d[1])*k,d[2],1)});
  rise(G5.ha,p(u,B,B+.5)); rise($('fm'),p(u,B+11.4,B+12));

  const C=TM.top_corner, hl=u>=C+4.2;
  CZ.setAttribute('opacity',p(u,C,C+.6)); G6.hi.style.fill=hl?'var(--gain)':''; G6.ez.style.fill=hl?'var(--gain)':'';
  G6.cs.forEach((c,i)=>{const d=CD[i];
    if(i%2===0){const g=u>=TM.gold_cards+i*.15;c.r.setAttribute('fill',g?'var(--gain)':'var(--stage)');c.r.setAttribute('stroke',g?'var(--gain)':'var(--ink)');c.w.style.fill=g?'var(--on-gain)':'';at(c,d[3],d[2],1)}
    else{const j=(i-1)/2,k=p(u,TM.discard_pile+j*.3,TM.discard_pile+j*.3+.9),q=PILE[j];
      c.r.setAttribute('stroke',k>0?'var(--muted)':'var(--ink)');
      at(c,d[3]+(q[0]-d[3])*k,d[2]+(q[1]-d[2])*k,(1-.45*k).toFixed(3))}});
  rise($('later'),p(u,TM.discard_pile+.8,TM.discard_pile+1.4));

  const L=TM.wave_line, pw=p(u,L,L+1.5), wy=x=>400+80*Math.sin(x/150-t*1.4);
  let wd='';for(let x=120;x<=120+1360*pw;x+=10)wd+=(wd?'L':'M')+x+' '+wy(x).toFixed(1);
  $('wav').setAttribute('d',wd||'M120 400'); rise($('mot'),p(u,L,L+.5));
  const dk=p(u,L+1.5,L+2);
  $('dread').setAttribute('opacity',dk); $('dptr').setAttribute('d',`M760 506V${(wy(760)+12).toFixed(1)}`); $('dptr').setAttribute('opacity',dk);
  const S=TM.smile_face, sk=p(u,S+.5,S+4.5), sx=400+880*sk;
  $('smile').setAttribute('transform',`translate(${sx.toFixed(1)} 670) rotate(${((sx-400)/48*57.3).toFixed(1)})`); $('smile').setAttribute('opacity',p(u,S,S+.5));
  $('push').setAttribute('d',`M${(sx-130).toFixed(1)} 670h60m-16-16 16 16-16 16`); $('push').setAttribute('opacity',u>=S&&sk<.25?1:0);
  rise($('wl'),p(u,S,S+.5)); rise($('quote'),p(u,S+5.3,S+5.9));

  const E=SC[8][0]/K;
  rise($('qa'),p(u,E+.4,E+.9)); rise($('qb'),p(u,E+.8,E+1.3)); rise($('qm'),p(u,E+1.2,E+1.7));
  scraps.forEach((s,i)=>s.setAttribute('opacity',p(u,E+1+i*.35,E+1.3+i*.35)));
  const gd=u>=E+5.3; scraps[2].setAttribute('fill',gd?'var(--gain)':'var(--stage)'); scraps[2].setAttribute('stroke',gd?'var(--gain)':'var(--ink)');
  $('mz').setAttribute('opacity',p(u,E+5.3,E+5.8));