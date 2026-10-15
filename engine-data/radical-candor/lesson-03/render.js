rise($('t_guy'),p(u,TM.open_fly,TM.open_fly+.6)); rise($('t_alert'),p(u,TM.open_fly+.8,TM.open_fly+1.3));
  $('t_alert').setAttribute('transform','translate(0 '+(6*Math.sin(t*3)).toFixed(1)+')');
  [F0,F2,F3,F4].forEach(f=>f.setAttribute('opacity',(.35+.65*Math.abs(Math.sin(t*3))).toFixed(2)));

  rise($('g_ax'),p(u,TM.grid,TM.grid+.5));
  box.forEach(([g,r,ts],i)=>{const a=TM.grid+1+i*.4;rise(g,p(u,a,a+.4));const tr=i===1&&u>=TM.top_right,bad=i!==1&&u>=TM.three_boxes;
    r.setAttribute('fill',tr?'var(--gain)':bad?'var(--loss)':'var(--stage)');r.setAttribute('fill-opacity',bad?.15:1);
    r.setAttribute('stroke',tr?'var(--gain)':bad?'var(--loss)':'var(--line)');ts.forEach(e=>e.style.fill=tr?'var(--on-gain)':'var(--ink)')});
  rise($('g_tr'),p(u,TM.top_right,TM.top_right+.5)); rise($('g_three'),p(u,TM.three_boxes,TM.three_boxes+.5));

  rise($('a_col'),p(u,TM.crowd,TM.crowd+.5)); rise($('a_boss'),p(u,TM.crowd+.6,TM.crowd+1.1));
  CR.forEach((g,i)=>rise(g,.55*p(u,TM.crowd+1.4+i*.15,TM.crowd+1.8+i*.15)));
  M2[3].setAttribute('fill',u>=TM.crowd+5?'var(--loss)':'var(--stage)'); rise($('a_def'),p(u,TM.crowd+5,TM.crowd+5.6));
  rise($('a_jerk'),p(u,TM.jerk,TM.jerk+.5)); const tr=p(u,TM.jerk+.7,TM.jerk+1.7);
  $('a_l').setAttribute('transform','translate('+(-26*tr).toFixed(1)+' '+(12*tr).toFixed(1)+') rotate('+(-7*tr).toFixed(2)+' 1000 620)');
  $('a_r').setAttribute('transform','translate('+(26*tr).toFixed(1)+' '+(12*tr).toFixed(1)+') rotate('+(7*tr).toFixed(2)+' 1250 620)');

  rise($('w_col'),p(u,TM.whisper,TM.whisper+.5)); rise($('w_wh'),p(u,TM.whisper+.8,TM.whisper+1.3));
  M3[2].setAttribute('fill',u>=TM.whisper+6.2?'var(--loss)':'var(--stage)'); rise($('w_def'),p(u,TM.whisper+6.2,TM.whisper+6.8));
  rise($('w_bs'),p(u,TM.backstab,TM.backstab+.5)); rise($('w_why'),p(u,TM.backstab+5.8,TM.backstab+6.3));
  CHP.forEach((g,i)=>rise(g,p(u,TM.backstab+6.2+i*.8,TM.backstab+6.7+i*.8)));

  rise($('r_fr'),p(u,TM.silent,TM.silent+.5)); rise($('r_cw'),p(u,TM.silent+.4,TM.silent+.9));
  M4[0].setAttribute('fill',u>=TM.silent+5.7?'var(--loss)':'var(--stage)'); rise($('r_def'),p(u,TM.silent+5.7,TM.silent+6.3));
  rise($('r_stage'),p(u,TM.stage,TM.stage+.5));
  $('r_col').setAttribute('transform','translate('+(560+610*p(u,TM.stage+.3,TM.stage+2.8)).toFixed(1)+' 370)');
  rise($('r_top'),p(u,TM.stage+4.2,TM.stage+4.8));

  rise($('b_kb'),p(u,TM.bob,TM.bob+.5)); rise($('b_tr'),p(u,TM.bob+5,TM.bob+5.6));
  rise($('b_pat'),p(u,TM.pat_back,TM.pat_back+.5)); const o=u>=TM.pat_back?8*Math.abs(Math.sin(t*4)):0;
  $('b_arm').setAttribute('d','M252 430Q320 '+(392+o).toFixed(1)+' 384 '+(420+o).toFixed(1));
  rise($('b_team'),p(u,TM.team,TM.team+.5)); $('b_tf').setAttribute('transform','translate(0 '+(u>=TM.team?3*Math.sin(t*5):0).toFixed(1)+')');
  rise($('b_exit'),p(u,TM.exit_door,TM.exit_door+.5)); const dk=p(u,TM.exit_door+.6,TM.exit_door+1.6),dx=1243+dk*120;
  $('b_door').setAttribute('points',dx.toFixed(1)+','+(243+dk*14).toFixed(1)+' 1407,243 1407,507 '+dx.toFixed(1)+','+(507-dk*14).toFixed(1));

  rise($('n_grid'),p(u,TM.labels,TM.labels+.5));
  TG.forEach(([g,k],i)=>{rise(g,p(u,TM.labels+.3+i*.3,TM.labels+.8+i*.3));k.setAttribute('stroke-dashoffset',(1-p(u,TM.labels+2+i*.3,TM.labels+2.4+i*.3)).toFixed(3))});
  rise($('n_lab'),p(u,TM.labels+3,TM.labels+3.5));
  rise($('n_tw'),p(u,TM.mirror,TM.mirror+.5)); rise($('n_m'),p(u,TM.mirror,TM.mirror+.5));
  const s=t*.7,i0=Math.floor(s)%4,f=ease(cl((s%1)*2.5-1.2)),A=GC[ORD[i0]],B=GC[ORD[(i0+1)%4]],ak=p(u,TM.arrow+.8,TM.arrow+2);
  let x=A[0]+(B[0]-A[0])*f,y=A[1]+(B[1]-A[1])*f; x+=(GC[1][0]-x)*ak; y+=(GC[1][1]-y)*ak;
  $('n_tok').setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')');
  $('n_arr').setAttribute('stroke-dashoffset',(1-p(u,TM.arrow,TM.arrow+1)).toFixed(3)); rise($('n_a'),p(u,TM.arrow+.4,TM.arrow+1));
  NB[1].setAttribute('stroke',u>=TM.arrow?'var(--gain)':'var(--line)');

  const q0=SC[7][0]/K;
  rise($('qa'),p(u,q0+.3,q0+.8)); rise($('qb'),p(u,q0+.7,q0+1.2)); rise($('q_bub'),p(u,q0+1.2,q0+1.7)); rise($('qc'),p(u,q0+5.8,q0+6.4));
  QD.forEach((c,i)=>c.setAttribute('opacity',(.35+.65*Math.abs(Math.sin(t*2.5-i*.6))).toFixed(2)));