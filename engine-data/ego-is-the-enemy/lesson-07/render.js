const T0=TM.trophy_shelf, eg=T0+7;
  rise($('tro'),p(u,T0,T0+.6)); rise($('bub'),p(u,T0+1,T0+1.6)); rise($('ego'),p(u,eg,eg+.5));
  $('bubr').setAttribute('stroke',u>=eg?'var(--loss)':'var(--ink)');
  $('cup').setAttribute('transform','translate(0 '+(-4*Math.sin(t*1.5)).toFixed(1)+')');

  rise($('book'),p(u,TM.storybook,TM.storybook+.5)); rise($('real'),p(u,TM.storybook+.8,TM.storybook+1.4));
  dr($('straight'),p(u,TM.arrow_path,TM.arrow_path+1.5)); $('messy').setAttribute('opacity',(1-.65*p(u,TM.arrow_path,TM.arrow_path+1)).toFixed(2));
  rise($('lstory'),p(u,TM.arrow_path+1,TM.arrow_path+1.5)); rise($('arro'),p(u,TM.arrow_path+4.6,TM.arrow_path+5.2));

  rise($('cr'),p(u,TM.crown,TM.crown+.5)); $('crp').setAttribute('transform','translate(0 '+(-5*Math.abs(Math.sin(t*1.8))).toFixed(1)+')');
  rise($('des'),p(u,TM.crown+.5,TM.crown+1)); rise($('birth'),p(u,TM.crown+6.6,TM.crown+7.1));
  ST.forEach((s,i)=>{const sk=i>0&&i<4&&u>=TM.skipped_steps+i*.35;s.setAttribute('stroke',sk?'var(--loss)':'var(--ink)');s.setAttribute('stroke-dasharray',sk?'12 10':'none');s.setAttribute('fill-opacity',sk?.15:1)});
  $('bor').style.fill=u>=TM.skipped_steps?'var(--loss)':'';
  rise($('rep'),p(u,TM.skipped_steps+4.1,TM.skipped_steps+4.7));

  rise($('wal'),p(u,TM.walsh,TM.walsh+.5)); rise($('lose'),p(u,TM.losing_team,TM.losing_team+.5));
  dr($('climb'),p(u,TM.super_bowl,TM.super_bowl+1.4)); rise($('sb'),p(u,TM.super_bowl+1.1,TM.super_bowl+1.6));

  rise($('cloud'),p(u,TM.thought_cloud,TM.thought_cloud+.5)); const nh=TM.thought_cloud+5.3;
  dr($('x1'),p(u,nh,nh+.4)); dr($('x2'),p(u,nh+.3,nh+.7));
  rise($('rb'),p(u,TM.rulebook,TM.rulebook+.5)); rise($('nts'),p(u,TM.rulebook+1.5,TM.rulebook+2));

  [TM.locker_room,TM.stopwatch,TM.staff].forEach((a,i)=>rise($('k'+i),p(u,a,a+.5)));
  $('hand').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 800 400)');
  const ex=TM.staff+5.8; $('con').setAttribute('opacity',p(u,ex,ex+.5)); rise($('exc'),p(u,ex+.3,ex+.8));

  rise($('board6'),p(u,TM.scoreboard,TM.scoreboard+.5)); rise($('res'),p(u,TM.scoreboard+5.8,TM.scoreboard+6.3));
  rise($('chk'),p(u,TM.checklist,TM.checklist+.5));
  CK.forEach((c,i)=>{const a=TM.checklist+.6+i*.5;dr(c,p(u,a,a+.3));PP[i].setAttribute('fill',u>=a+.3?'var(--gain)':'var(--line)')});
  const e6=SC[6][1]/K, ey=Math.max(TM.checklist+.5,Math.min(TM.checklist+3,e6-2.2));
  rise($('eyes'),p(u,ey,ey+.5));

  rise($('mir'),p(u,TM.mirror,TM.mirror+.5)); dr($('mx'),p(u,TM.mirror+1.5,TM.mirror+2));
  rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); NL.forEach((g,i)=>{const a=TM.notebook+.7+i*.6;rise(g,p(u,a,a+.4))});
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); CL.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.6+i*.15?'var(--gain)':'var(--line)'));
  rise($('esp'),p(u,TM.calendar+2,TM.calendar+2.5));

  const q=TM.question_mark; rise($('ql'),p(u,q-2.2,q-1.7));
  ['qa','qb','qc','qd'].forEach((id,i)=>rise($(id),p(u,q+i*.4,q+i*.4+.5))); rise($('qm'),p(u,q+1.6,q+2.1));