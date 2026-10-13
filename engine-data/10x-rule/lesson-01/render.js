const kb=.45*p(u,TM.stalled_goal,TM.stalled_goal+2)-(u>TM.stalled_goal+2?.02*Math.abs(Math.sin(t*2)):0);
  $('t_ball').setAttribute('cx',(1120+320*kb-24.3).toFixed(1));$('t_ball').setAttribute('cy',(700-440*kb-17.6).toFixed(1));
  rise($('t_math'),p(u,TM.stalled_goal+3.3,TM.stalled_goal+3.8));

  rise($('r_trav'),p(u,TM.cardone,TM.cardone+.5));rise($('r_sub'),p(u,TM.cardone,TM.cardone+.5));
  rise($('r_pl'),p(u,TM.small_plan,TM.small_plan+.5));
  $('r_real').setAttribute('stroke-dashoffset',(1-p(u,TM.small_plan+3.8,TM.small_plan+5.5)).toFixed(3));
  rise($('r_end'),p(u,TM.small_plan+4.2,TM.small_plan+4.7));rise($('r_fl2'),p(u,TM.small_plan+5.2,TM.small_plan+5.7));

  const sh=TM.calendar+4.7;
  TK.forEach((k,i)=>{const a=TM.four_tanks+i*.5;rise(k.g,p(u,a,a+.4));const up=i===0?p(u,TM.calendar,TM.calendar+1.2):p(u,sh,sh+1.3),h=40+80*up;
    k.f.setAttribute('y',(592-h).toFixed(1));k.f.setAttribute('height',h.toFixed(1));
    const gh=592-h-284;k.gp.setAttribute('height',Math.max(0,gh).toFixed(1));
    const lo=p(u,TM.four_tanks+2.5,TM.four_tanks+3);k.n.setAttribute('opacity',lo);k.gp.setAttribute('opacity',lo)});
  rise($('c_r1'),p(u,TM.four_tanks+4.4,TM.four_tanks+4.9));strike('c_s1',270,p(u,TM.calendar,TM.calendar+.5));rise($('c_a1'),p(u,TM.calendar+.2,TM.calendar+.7));
  CE.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+i*.1?'var(--gain)':'var(--line)'));
  rise($('c_r2'),p(u,TM.calendar+1.3,TM.calendar+1.8));strike('c_s2',260,p(u,sh,sh+.5));rise($('c_a2'),p(u,sh+.2,sh+.7));
  const pk=p(u,sh,sh+.8);$('c_arr').setAttribute('stroke-width',(6+16*pk).toFixed(1));$('c_arr').style.stroke=pk>0?'var(--gain)':'var(--ink)';
  $('c_arr').setAttribute('transform','translate('+(8*pk*Math.sin(t*8)).toFixed(1)+' 0)');

  rise($('sp_a'),p(u,TM.salesperson,TM.salesperson+.5));rise($('sp_ph'),p(u,TM.phone,TM.phone+.4));rise($('sp_b'),p(u,TM.phone,TM.phone+.5));
  $('sp_ph').setAttribute('transform','rotate('+(u>=TM.phone&&u<TM.no_answer?(4*Math.sin(t*30)).toFixed(1):0)+' 382 490)');
  CA.forEach((c,i)=>{const on=u>=TM.no_answer+i*.27,ch=c[2];c[0].setAttribute('fill',on?SF[ch]:'var(--stage)');c[0].setAttribute('stroke',on?SS[ch]:'var(--line)');
    c[1].textContent=on?SY[ch]:'';c[1].style.fill=ST[ch]});
  rise($('sp_leg'),p(u,TM.no_answer,TM.no_answer+.5));
  SL.forEach((s,i)=>s.setAttribute('fill',i===0&&u>=TM.no_answer+5.4?'var(--gain)':'var(--stage)'));
  rise($('sp_res'),p(u,TM.no_answer+5.8,TM.no_answer+6.3));rise($('sp_e1'),p(u,TM.no_answer+11.6,TM.no_answer+12.1));rise($('sp_e2'),p(u,TM.no_answer+14.6,TM.no_answer+15.1));

  rise($('w_cl'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
  RN.forEach((r,i)=>r.setAttribute('transform','translate(0 '+((t*120+i*17)%60).toFixed(1)+')'));
  [0,1.4,2.8].forEach((d,i)=>rise($('w_o'+i),p(u,TM.competitor+d,TM.competitor+d+.5)));
  const cr=p(u,TM.competitor+4.9,TM.competitor+6);
  $('w_line').setAttribute('points','1180,440 1240,420 1300,450 1360,430 1420,'+(450+90*cr).toFixed(1));
  $('w_a2').setAttribute('transform','rotate('+(18*cr).toFixed(2)+' 1100 640)');$('w_a2p').style.stroke=cr>0?'var(--loss)':'var(--ink)';
  rise($('w_08'),cr);rise($('w_txt'),p(u,TM.competitor+5.2,TM.competitor+5.8));

  rise($('q_face'),p(u,TM.sad_face,TM.sad_face+.5));
  $('q_m').setAttribute('d','M250 505Q300 '+(540-80*p(u,TM.sad_face+.3,TM.sad_face+1.3)).toFixed(1)+' 350 505');
  rise($('q_math'),p(u,TM.sad_face+3.8,TM.sad_face+4.3));
  QB.forEach((g,i)=>rise(g,p(u,TM.quit_sign+i*.5,TM.quit_sign+i*.5+.4)));
  rise($('q_quit'),p(u,TM.quit_sign+2,TM.quit_sign+2.5));
  rise($('q_flag'),p(u,TM.quit_sign+4.6,TM.quit_sign+5.1));rise($('q_end'),p(u,TM.quit_sign+5,TM.quit_sign+5.6));

  rise($('b_pack'),p(u,TM.backpack,TM.backpack+.5));rise($('b_rd'),p(u,TM.backpack+.8,TM.backpack+1.4));
  const ex=p(u,TM.extra_fuel,TM.extra_fuel+1.5);
  BB.forEach((b,i)=>{const w=80*p(u,TM.backpack+1+i*.3,TM.backpack+1.6+i*.3)+100*p(u,TM.extra_fuel+i*.4,TM.extra_fuel+i*.4+.8);b.setAttribute('width',w.toFixed(1));b.setAttribute('class',ex>0?'gain':'ink')});
  const f=p(u,TM.extra_fuel+4.6,TM.extra_fuel+9.5),q=RD.getPointAtLength(f*RL);let bm=0;FS.forEach(s=>bm=Math.max(bm,1-Math.abs(f-s)/.05));
  $('b_tr').setAttribute('cx',q.x.toFixed(1));$('b_tr').setAttribute('cy',(q.y-24-36*bm).toFixed(1));
  rise($('b_txt'),p(u,TM.extra_fuel+4.6,TM.extra_fuel+5.2));

  rise($('n_pad'),p(u,TM.notepad,TM.notepad+.5));
  NL.forEach((n,i)=>{const a=TM.notepad+1.4+i*1.5;n[1].setAttribute('stroke-dashoffset',(1-p(u,a,a+1)).toFixed(3))});
  rise($('n_sign'),p(u,TM.question,TM.question+.5));rise($('n_q'),p(u,TM.question+.8,TM.question+1.3));

  rise($('x_a'),p(u,TM.mirror,TM.mirror+.5));rise($('x_b'),p(u,TM.mirror+.4,TM.mirror+.9));rise($('x_c'),p(u,TM.mirror+.8,TM.mirror+1.3));
  rise($('x_g'),p(u,TM.mirror+1.2,TM.mirror+1.8));rise($('x_d'),p(u,TM.mirror+4.2,TM.mirror+4.8));