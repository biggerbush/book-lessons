const hb=1+.06*Math.pow(Math.abs(Math.sin(t*2.5)),4);
  $('t_hp').setAttribute('transform','translate(1320 380) scale('+hb.toFixed(3)+')');
  rise($('t_me'),p(u,TM.title_card,TM.title_card+.6)); rise($('t_heart'),p(u,TM.title_card+3.4,TM.title_card+4));

  rise($('c_me'),p(u,TM.creator,TM.creator+.5));
  cG.forEach((g,i)=>{const a=TM.crowd+i*.2;g.setAttribute('opacity',p(u,a,a+.5));g.setAttribute('transform','translate(0 '+(6*Math.sin(t*1.3+i)).toFixed(1)+')')});
  rise($('c_clab'),p(u,TM.crowd+1.6,TM.crowd+2.1));
  const qk=p(u,TM.question_mark,TM.question_mark+.4), tn=qk*Math.max(0,Math.sin(t*1.6));
  cH.setAttribute('cx',(440+12*tn).toFixed(1));
  rise($('c_q'),qk*(.4+.6*tn)); $('c_look').setAttribute('opacity',tn.toFixed(2));
  const dr=p(u,TM.question_mark+5,TM.question_mark+7.5);
  $('c_fill').setAttribute('width',(500*(1-.85*dr)).toFixed(1)); $('c_spark').setAttribute('opacity',(1-.85*dr).toFixed(2));
  rise($('c_meter'),p(u,TM.question_mark+4.6,TM.question_mark+5.1)); rise($('c_drain'),p(u,TM.question_mark+5,TM.question_mark+5.6));

  rise($('w_wv'),p(u,TM.shifting_wave,TM.shifting_wave+.6));
  let wd=''; for(let x=120;x<=1480;x+=20)wd+=(x>120?'L':'M')+x+' '+wy(x,t).toFixed(1); $('w_wave').setAttribute('d',wd);
  const tx=800+520*Math.sin(t*.45), px=800+520*Math.sin((t-1.2)*.45);
  $('w_tgi').setAttribute('transform','translate('+tx.toFixed(1)+' '+wy(tx,t).toFixed(1)+')');
  rise($('w_tg'),p(u,TM.target,TM.target+.5)); rise($('w_me'),p(u,TM.target+.6,TM.target+1.1));
  const am=$('w_aim'); am.setAttribute('x2',px.toFixed(1)); am.setAttribute('y2',wy(px,t-1.2).toFixed(1)); am.setAttribute('opacity',p(u,TM.target+.8,TM.target+1.3));
  rise($('w_chase'),p(u,TM.target+4.9,TM.target+5.5));

  const s3=SC[3][0]/K, ol=p(u,TM.scale+8.4,TM.scale+9);
  rise($('a_l'),p(u,s3+.6,s3+1.2)); rise($('a_r'),p(u,TM.scale,TM.scale+.5)); rise($('a_ops'),p(u,TM.scale+3.4,TM.scale+4)); rise($('a_opl'),p(u,TM.scale+3.4,TM.scale+4));
  $('a_spot').setAttribute('opacity',ol); $('a_dim').setAttribute('opacity',(1-.6*ol).toFixed(2)); rise($('a_only'),ol);

  const ck=p(u,TM.compass,TM.compass+3);
  rise($('k_comp'),p(u,TM.compass,TM.compass+.5));
  $('k_nd').setAttribute('transform','rotate('+((1-ck)*(540+40*Math.sin(t*3))+4*Math.sin(t*1.7)).toFixed(1)+' 420 500)');
  rise($('k_hb'),p(u,TM.heartbeat,TM.heartbeat+.5));
  let pe=''; for(let x=760;x<=1480;x+=6){const k=((x+t*200)%160+160)%160; pe+=x+','+(420-(k<60?0:k<68?-(k-60)*5:k<76?-40+(k-68)*12:k<84?56-(k-76)*8:0)).toFixed(1)+' '} $('k_ecg').setAttribute('points',pe);
  kC.forEach((c,i)=>{const a=TM.heartbeat+1+i*1.2; rise(c,p(u,a,a+.4))});
  rise($('k_rel'),p(u,TM.heartbeat+5,TM.heartbeat+5.6));

  rise($('r_me'),p(u,TM.mixing_desk,TM.mixing_desk+.5)); rise($('r_desk'),p(u,TM.mixing_desk+.4,TM.mixing_desk+.9)); rise($('r_lbl'),p(u,TM.mixing_desk+1.2,TM.mixing_desk+1.8));
  const hk=p(u,TM.thumbs_up,TM.thumbs_up+1);
  rK.forEach((k,i)=>{const w=550+70*Math.sin(t*.9+i*1.3), y=i===4?w+(460-w)*hk:w; k.setAttribute('y',(y-12).toFixed(1)); k.setAttribute('fill',i===4&&hk>0?'var(--gain)':'var(--ink)')});
  $('r_waves').setAttribute('opacity',(p(u,TM.thumbs_up,TM.thumbs_up+.5)*(.5+.5*Math.sin(t*4))).toFixed(2));
  rise($('r_th'),p(u,TM.thumbs_up+.4,TM.thumbs_up+.9)); rise($('r_tool'),p(u,TM.thumbs_up+3.8,TM.thumbs_up+4.4));

  rise($('n_me'),p(u,TM.thread,TM.thread+.5)); rise($('n_ppl'),p(u,TM.thread+.3,TM.thread+.8));
  nT.forEach((l,i)=>{const a=TM.thread+.8+i*.25; l.setAttribute('stroke-dashoffset',(1-p(u,a,a+1)).toFixed(3))});
  nH.forEach((h,i)=>h.setAttribute('class',u>=TM.mirror+i*.2?'gain':'ink'));
  rise($('n_sense'),p(u,TM.mirror+1.2,TM.mirror+1.7)); rise($('n_sinc'),p(u,TM.mirror+5,TM.mirror+5.6));

  const vd=p(u,TM.volume_dial+.6,TM.volume_dial+2.8), sk=p(u,TM.split_crowd,TM.split_crowd+2), vr=p(u,TM.volume_dial+.4,TM.volume_dial+1);
  rise($('v_dial'),p(u,TM.volume_dial,TM.volume_dial+.5));
  $('v_ind').setAttribute('transform','rotate('+(120-240*vd).toFixed(1)+' 340 470)'); $('v_ind').style.stroke=vd>.6?'var(--muted)':'var(--gain)';
  vP.forEach(q=>{const x=q.s[0]+(q.e[0]-q.s[0])*sk, y=q.s[1]+(q.e[1]-q.s[1])*sk;
    q.g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')'); q.g.setAttribute('opacity',(vr*(q.lv?1:1-.65*sk)).toFixed(2));
    q.el.forEach(e=>e.setAttribute('class',q.lv&&sk>.5?'gain':'ink'))});
  rise($('v_work'),p(u,TM.split_crowd,TM.split_crowd+.5)); rise($('v_lbl'),p(u,TM.split_crowd+1.5,TM.split_crowd+2)); rise($('v_alive'),p(u,TM.split_crowd+5.4,TM.split_crowd+6));

  rise($('z_lab'),p(u,TM.sticky_note,TM.sticky_note+.5)); rise($('z_note'),p(u,TM.sticky_note+.6,TM.sticky_note+1.1));
  $('z_ni').setAttribute('transform','rotate('+(4+1.5*Math.sin(t*1.2)).toFixed(2)+' 1310 255)');
  rise($('z_qa'),p(u,TM.sticky_note+6.6,TM.sticky_note+7.1)); rise($('z_qb'),p(u,TM.sticky_note+7,TM.sticky_note+7.5)); rise($('z_qc'),p(u,TM.sticky_note+7.4,TM.sticky_note+7.9)); rise($('z_tag'),p(u,TM.sticky_note+8.2,TM.sticky_note+8.8));