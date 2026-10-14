const mv=p(u,TM.tired_runner,TM.tired_runner+.6),ph=Math.sin(t*7)*mv;
  RL.forEach((l,i)=>{const s=i?ph:-ph;l.setAttribute('d','M1280 520L'+(1280+30*s).toFixed(1)+' 580L'+(1274+50*s).toFixed(1)+' 636')});
  RA.forEach((l,i)=>{const s=i?-ph:ph,x=1287-28*s;l.setAttribute('d','M1287 440L'+x.toFixed(1)+' 482L'+(x+18).toFixed(1)+' 470')});
  $('belt').style.strokeDashoffset=(t*80).toFixed(1);
  const la=p(u,TM.tired_runner+3.8,TM.tired_runner+5);draw($('loopA'),la);$('loopH').setAttribute('opacity',la>.95?1:0);

  rise($('loop'),p(u,TM.practice_room,TM.practice_room+.5));rise($('rep'),p(u,TM.practice_room,TM.practice_room+.5));
  $('loop').setAttribute('transform','rotate('+(t*40%360).toFixed(1)+' 430 430)');
  TL.forEach((l,i)=>l.setAttribute('opacity',u>=TM.practice_room+.6+i*.42?1:0));
  rise($('bat'),p(u,TM.practice_room+.4,TM.practice_room+.9));
  const dr=p(u,TM.practice_room+1,TM.empty_battery+1.5);AT($('lvl'),{width:(360*(1-.92*dr)).toFixed(1),fill:dr<.5?'var(--gain)':'var(--loss)'});
  rise($('out'),p(u,TM.empty_battery+.8,TM.empty_battery+1.3));rise($('s1end'),p(u,TM.empty_battery+5,TM.empty_battery+5.6));

  const dk=p(u,TM.game_dice,TM.game_dice+1);AT($('die'),{opacity:dk,transform:'translate('+(-120*(1-dk)).toFixed(1)+' 0) rotate('+(-200*(1-dk)).toFixed(1)+' 330 500)'});
  const ga=TM.game_dice+3.4;rise($('board2'),p(u,ga,ga+.5));
  const hs=5*lin(u,ga+.6,ga+4.6),hi=Math.min(Math.floor(hs),5),hf=hs>=5?0:ease(hs-hi);
  AT($('tok'),{cx:(600+(hi+hf)*96).toFixed(1),cy:(440-40*Math.sin(Math.PI*hf)).toFixed(1),opacity:p(u,ga,ga+.5)});
  SQ.forEach((s,j)=>s.setAttribute('fill',u>=ga+.6&&j<=hs?'var(--gain)':'var(--stage)'));
  rise($('kid'),p(u,TM.smiling_kid,TM.smiling_kid+.5));rise($('goal2'),p(u,TM.smiling_kid+.6,TM.smiling_kid+1.1));
  $('kid').setAttribute('transform','translate(0 '+(u>=TM.smiling_kid?-6*Math.abs(Math.sin(t*3)):0).toFixed(1)+')');

  rise($('flag'),p(u,TM.brazil_flag,TM.brazil_flag+.5));rise($('court'),p(u,TM.brazil_flag+2,TM.brazil_flag+2.6));
  rise($('balls'),p(u,TM.futsal_ball,TM.futsal_ball+.5));rise($('pl'),p(u,TM.futsal_ball+.6,TM.futsal_ball+1.2));
  let bx=900,by=460,tc=-1;
  if(u>=TM.quick_feet){const s=(u-TM.quick_feet)*2.5,i=Math.floor(s)%10,f=ease(s%1),a=PA[SEQ[i]],b=PA[SEQ[(i+1)%10]];bx=a[0]+(b[0]-a[0])*f;by=a[1]+(b[1]-a[1])*f;tc=SEQ[i]}
  AT($('fb'),{cx:bx.toFixed(1),cy:by.toFixed(1),opacity:p(u,TM.futsal_ball,TM.futsal_ball+.5)});
  PL.forEach((c,j)=>c.setAttribute('r',j===tc?28:22));
  rise($('fend'),p(u,TM.quick_feet+5.8,TM.quick_feet+6.4));

  const sc=TM.score_card;rise($('card'),p(u,sc,sc+.5));$('ar1').setAttribute('opacity',p(u,sc+3.4,sc+3.8));
  [0,1,2].forEach(i=>rise($('r'+i),p(u,sc+3.7+i*.6,sc+4.2+i*.6)));
  $('hand').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 600 450)');
  $('scr').textContent=u<sc+4.9?'0':String(Math.floor((u-sc-4.9)*1.5)%10);
  const pz=TM.puzzle_piece;$('ar2').setAttribute('opacity',p(u,pz,pz+.4));rise($('puz'),p(u,pz,pz+.5));
  $('pa').setAttribute('transform','translate('+(-40*(1-p(u,pz+.6,pz+1.6))).toFixed(1)+' 0)');

  const sw=TM.stone_wall;rise($('wall'),p(u,sw,sw+.5));draw($('st'),p(u,sw,sw+1.5));rise($('goalF'),p(u,sw+.3,sw+.8));rise($('str'),p(u,sw+2.6,sw+3.1));
  const z=$('zig');draw(z,p(u,TM.zigzag_path,TM.zigzag_path+1.5));
  const k2=p(u,TM.zigzag_path+.3,TM.zigzag_path+3.5);let tx=160+560*p(u,sw,sw+1.5),ty=500;
  if(k2>0){try{const q=z.getPointAtLength(LN(z)*k2);tx=q.x;ty=q.y}catch(e){}}
  AT($('trv'),{cx:tx.toFixed(1),cy:ty.toFixed(1),class:k2>0?'gain':'ink'});
  rise($('detl'),p(u,TM.zigzag_path+1.5,TM.zigzag_path+2));

  const gc=TM.golf_club;rise($('golfer'),p(u,gc,gc+.5));rise($('ax'),p(u,gc+.6,gc+1.1));
  $('club').setAttribute('transform','translate(290 500) rotate('+(30*Math.sin(t*2)*p(u,gc,gc+1)).toFixed(1)+')');
  draw($('c0'),p(u,gc+1,gc+2));rise($('mw'),p(u,gc+1.8,gc+2.3));
  draw($('c1'),p(u,TM.dip_chart,TM.dip_chart+1.5));rise($('dipl'),p(u,TM.dip_chart+1,TM.dip_chart+1.5));
  draw($('c2'),p(u,TM.trophy,TM.trophy+1.5));rise($('tro'),p(u,TM.trophy+1.3,TM.trophy+1.9));

  rise($('mtn'),p(u,TM.mountain,TM.mountain+.6));
  const rt=$('route'),hk=p(u,TM.mountain+1,TM.mountain+5.5);let hx=420,hy=460;try{const q=rt.getPointAtLength(LN(rt)*hk);hx=q.x;hy=q.y}catch(e){}
  AT($('hk'),{cx:hx.toFixed(1),cy:(hy-22).toFixed(1),opacity:p(u,TM.mountain+.4,TM.mountain+.9)});
  rise($('guide'),p(u,TM.guide_figure,TM.guide_figure+.5));rise($('map'),p(u,TM.guide_figure+.6,TM.guide_figure+1.1));
  rt.setAttribute('opacity',p(u,TM.guide_figure+5,TM.guide_figure+5.6));rise($('wl'),p(u,TM.guide_figure+5.4,TM.guide_figure+6));

  const qm=TM.question_mark;rise($('qa'),p(u,qm,qm+.5));rise($('qb'),p(u,qm+.4,qm+.9));
  rise($('qc'),p(u,qm+4.2,qm+4.7));rise($('qd'),p(u,qm+4.6,qm+5.1));
  const qg=p(u,qm+4.8,qm+6);draw($('qg'),qg);$('qh').setAttribute('opacity',qg>.95?1:0);rise($('qm'),p(u,qm+5.5,qm+6));