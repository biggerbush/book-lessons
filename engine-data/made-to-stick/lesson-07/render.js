const f=Math.sin(t*7),g2=Math.sin(t*11+1);
  $('fl0').setAttribute('d',`M1268 712C1250 660 ${(1288+6*f).toFixed(1)} 640 ${(1310+8*g2).toFixed(1)} ${(560+10*f).toFixed(1)}C${(1332+4*g2).toFixed(1)} 640 1372 660 1352 712Z`);
  $('fl1').setAttribute('d',`M1292 712C1284 684 1300 672 ${(1310+5*g2).toFixed(1)} ${(630+6*f).toFixed(1)}C1320 672 1336 684 1328 712Z`);
  rise($('fire'),p(u,TM.campfire,TM.campfire+.6)); rise($('tale'),p(u,TM.campfire+2.6,TM.campfire+3.2));

  rise($('lis'),p(u,TM.listener,TM.listener+.5));
  CD.forEach((c,i)=>{const a=TM.listener+.6+i*.4; rise(c,p(u,a,a+.4)*(1-.45*p(u,TM.mind_movie,TM.mind_movie+.6)))});
  rise($('scr'),p(u,TM.mind_movie,TM.mind_movie+.6));
  const w=p(u,TM.mind_movie+.8,TM.mind_movie+4);
  MG.setAttribute('transform',`translate(${(690+250*w).toFixed(1)} 600)`); MG.setAttribute('opacity',p(u,TM.mind_movie+.4,TM.mind_movie+.9));
  rise($('fork'),p(u,TM.mind_movie+5,TM.mind_movie+5.6)); rise($('feel'),p(u,TM.mind_movie+5.4,TM.mind_movie+6));

  rise($('sim'),p(u,TM.pilot,TM.pilot+.6));
  $('cab').setAttribute('transform',`translate(0 ${(5*Math.sin(t*2)).toFixed(1)})`);
  const hz=(6*Math.sin(t*1.3)).toFixed(1);
  $('hz0').setAttribute('transform',`rotate(${hz} 440 340)`); $('hz1').setAttribute('transform',`rotate(${hz} 1160 405)`);
  rise($('mind'),p(u,TM.cockpit,TM.cockpit+.6));
  ST2.forEach((g,i)=>{const a=TM.cockpit+5+i*.6; rise(g,p(u,a,a+.4))});

  rise($('stu'),p(u,TM.students,TM.students+.5)); rise($('res'),p(u,TM.grade_a,TM.grade_a+.5)); rise($('pro'),p(u,TM.desk_study,TM.desk_study+.5));
  const c=p(u,TM.desk_study+.6,TM.desk_study+3.6);
  $('clm').setAttribute('cx',(360+240*c).toFixed(1)); $('clm').setAttribute('cy',(616-90*c).toFixed(1));
  rise($('chart'),p(u,TM.desk_study+4.4,TM.desk_study+4.9));
  const gb=p(u,TM.desk_study+4.6,TM.desk_study+6);
  $('bR').setAttribute('height',(140*gb).toFixed(1)); $('bR').setAttribute('y',(660-140*gb).toFixed(1));
  $('bP').setAttribute('height',(330*gb).toFixed(1)); $('bP').setAttribute('y',(660-330*gb).toFixed(1));
  rise($('note3'),p(u,TM.desk_study+5.6,TM.desk_study+6.1)); rise($('cap3'),p(u,TM.desk_study+8,TM.desk_study+8.6));

  rise($('den'),p(u,TM.manager,TM.manager+.5)); rise($('col'),p(u,TM.manager+.6,TM.manager+1.1));
  rise($('brd'),p(u,TM.charts,TM.charts+.5)); rise($('no'),p(u,TM.charts+1.2,TM.charts+1.7));
  rise($('zam'),p(u,TM.health_worker,TM.health_worker+.6)); rise($('lap'),p(u,TM.laptop,TM.laptop+.5)); rise($('ans'),p(u,TM.laptop+1.5,TM.laptop+2));

  rise($('ppl'),p(u,TM.light_bulb-.6,TM.light_bulb));
  BL.forEach((b,i)=>{b.style.fill=u>=TM.light_bulb+.4+i*.3?'var(--gain)':'var(--stage)'});
  VS.forEach((g,i)=>{const a=TM.light_bulb+4.2+i*.3; rise(g,p(u,a,a+.4))});
  const sp=p(u,TM.light_bulb+7.6,TM.light_bulb+8.2); rise($('spr'),sp);
  const bd=26*Math.sin(Math.PI*p(u,TM.light_bulb+8.2,TM.light_bulb+8.9)), L=p(u,TM.light_bulb+8.6,TM.light_bulb+10);
  $('brdP').setAttribute('d',`M810 632Q1000 ${(622+bd*.3).toFixed(1)} 1170 ${(590+bd).toFixed(1)}`);
  const sy=564+bd*(1-L), q=1-L;
  $('jump').setAttribute('cx',(q*q*1160+2*q*L*1250+L*L*1380).toFixed(1));
  $('jump').setAttribute('cy',(q*q*sy+2*q*L*170+L*L*300).toFixed(1));
  $('jump').setAttribute('opacity',(sp*(1-p(u,TM.light_bulb+10,TM.light_bulb+10.3))).toFixed(2));
  rise($('bulb'),p(u,TM.light_bulb+10,TM.light_bulb+10.4));
  rise($('cap5'),p(u,TM.light_bulb+8.8,TM.light_bulb+9.4));

  RW.forEach((g,i)=>{const a=TM.checklist+.4+i*.25; rise(g,p(u,a,a+.4))});
  const J=p(u,TM.surprise+9.5,TM.surprise+11);
  [TM.checklist+3.8,TM.surprise,TM.surprise+4.1,TM.surprise+4.6,TM.surprise+5.1,TM.surprise+9.5].forEach((a,i)=>{const k=p(u,a,a+.4),s=SCT[i];
    CK[i].setAttribute('opacity',k); TL[i].setAttribute('opacity',k);
    TL[i].setAttribute('transform',`translate(${(s[0]+(970+i*80-s[0])*J).toFixed(1)} ${(s[1]+(420-s[1])*J).toFixed(1)})`)});
  rise($('card'),p(u,TM.surprise+10.6,TM.surprise+11.2));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
  $('pen').setAttribute('transform',`translate(380 ${(620+8*Math.sin(t*3)).toFixed(1)})`);
  rise($('crowd'),p(u,TM.magnifier-.4,TM.magnifier+.2));
  const m=p(u,TM.magnifier+.3,TM.magnifier+2.3);
  $('mag').setAttribute('transform',`translate(${(760+400*m).toFixed(1)} ${(370+200*m).toFixed(1)})`); $('mag').setAttribute('opacity',p(u,TM.magnifier,TM.magnifier+.4));
  rise($('hit'),p(u,TM.magnifier+2.3,TM.magnifier+2.8));
  ST7.forEach((g,i)=>{const a=TM.magnifier+3.8+i*1.1; rise(g,p(u,a,a+.4))});
  rise($('col7'),p(u,TM.magnifier+4.9,TM.magnifier+5.5));

  // close: explaining is crossed out, the storyteller shares a real moment
  const S=TM.story_card;
  rise($('qa'),p(u,S,S+.5)); rise($('qb'),p(u,S+.4,S+.9)); rise($('qc'),p(u,S+.8,S+1.3)); rise($('qd'),p(u,S+1.2,S+1.7));
  rise($('tel8'),p(u,S+.3,S+.8));
  L8.forEach((l,i)=>{const a=S+.5+i*.2; rise(l[0],p(u,a,a+.4)); l[1].setAttribute('class',u>=S+3.6+i*.3?'gain':'ink')});
  rise($('sl8'),p(u,S+1.4,S+1.9)); rise($('x8'),p(u,S+2.2,S+2.6));
  rise($('bub8'),p(u,S+2.8,S+3.3)); rise($('mc8'),p(u,S+3.2,S+3.7));
  $('mc8').setAttribute('transform',`translate(0 ${(-14*(1-p(u,S+3.2,S+3.7))+3*Math.sin(t*2)).toFixed(1)})`);
  rise($('fin'),p(u,S+4.2,S+4.8));