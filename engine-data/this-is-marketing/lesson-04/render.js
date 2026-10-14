const lc=TM.lonely_crowd, k0=p(u,lc+3.8,lc+5.3);
  rise($('t_crowd'),p(u,lc,lc+.6)); $('t_me').setAttribute('opacity',p(u,lc+.4,lc+1));
  $('t_me').setAttribute('cx',(1290+115*k0).toFixed(1)); $('t_me').setAttribute('cy',(430-118*k0).toFixed(1));
  rise($('t_corner'),p(u,lc+3.8,lc+4.4));

  BX.forEach((g,i)=>{rise(g,p(u,TM.shelf+i*.12,TM.shelf+i*.12+.4)); BL[i].setAttribute('opacity',p(u,TM.same_labels+i*.12,TM.same_labels+i*.12+.3))});
  rise($('c_shop'),p(u,TM.same_labels+4.6,TM.same_labels+5.1)); rise($('c_blur'),p(u,TM.same_labels+7.2,TM.same_labels+7.8));

  drw(X2.h,X2.hl,p(u,TM.xy_grid,TM.xy_grid+1.2)); drw(X2.v,X2.vl,p(u,TM.xy_grid+.8,TM.xy_grid+2));
  X2.lb.forEach((e,i)=>rise(e,p(u,TM.axis_labels+i*.3,TM.axis_labels+i*.3+.4)));
  F2.forEach((g,i)=>rise(g,p(u,TM.axis_labels+4.1+i*.3,TM.axis_labels+4.5+i*.3)));
  rise($('x_note'),p(u,TM.axis_labels+5.4,TM.axis_labels+6));

  MN.forEach((m,i)=>rise(m[0],p(u,TM.axis_menu+i*.5,TM.axis_menu+i*.5+.4)));
  const ck=u>=TM.axis_menu+5.4; [0,4].forEach((j,i)=>{MN[j][1].setAttribute('fill',ck?'var(--gain)':'var(--stage)'); MN[j][1].setAttribute('stroke',ck?'var(--gain)':'var(--ink)'); CK[i].setAttribute('opacity',ck?1:0)});
  drw($('p_strike'),118,p(u,TM.price_tag+.4,TM.price_tag+1)); rise($('p_tag'),p(u,TM.price_tag,TM.price_tag+.5));
  BR.forEach((b,i)=>rise(b,p(u,TM.price_tag+3.4+i*.5,TM.price_tag+3.8+i*.5))); rise($('p_under'),p(u,TM.price_tag+5.4,TM.price_tag+6));

  drw(X4.h,X4.hl,p(u,TM.bakery,TM.bakery+1)); drw(X4.v,X4.vl,p(u,TM.bakery+.5,TM.bakery+1.5));
  X4.lb.forEach((e,i)=>rise(e,p(u,TM.bakery+1+i*.25,TM.bakery+1.4+i*.25))); rise($('r_bake'),p(u,TM.bakery+.3,TM.bakery+.9));
  const cm=p(u,TM.dot_cluster,TM.dot_cluster+1.6);
  RD.forEach((c,i)=>{rise(c,p(u,TM.rival_dots+i*.25,TM.rival_dots+i*.25+.35)); c.setAttribute('cx',(RS[i][0]+(780+RO[i][0]-RS[i][0])*cm).toFixed(1)); c.setAttribute('cy',(RS[i][1]+(580+RO[i][1]-RS[i][1])*cm).toFixed(1))});
  rise($('r_crowd'),p(u,TM.dot_cluster+1.3,TM.dot_cluster+1.9));

  rise($('e_corner'),p(u,TM.empty_corner,TM.empty_corner+.6)); $('e_cr').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));
  rise($('e_loaf'),p(u,TM.sourdough,TM.sourdough+.6)); rise($('e_prom'),p(u,TM.sourdough+5.4,TM.sourdough+6));
  rise($('e_c0'),p(u,TM.sourdough+10,TM.sourdough+10.5)); rise($('e_c1'),p(u,TM.sourdough+10.5,TM.sourdough+11));

  FF.forEach((g,i)=>rise(g,p(u,TM.fan_group+i*.25,TM.fan_group+i*.25+.4))); rise($('f_lab'),p(u,TM.fan_group+2,TM.fan_group+2.5));
  rise($('f_walk'),p(u,TM.shrug_person,TM.shrug_person+.5)); const wk=p(u,TM.shrug_person,TM.shrug_person+5);
  WK.forEach((g,i)=>g.setAttribute('transform','translate('+(140*wk).toFixed(1)+' '+(-4*Math.abs(Math.sin(t*4+i))).toFixed(1)+')'));
  rise($('f_shrug'),p(u,TM.shrug_person+1,TM.shrug_person+1.5)); rise($('f_fit'),p(u,TM.shrug_person+4.6,TM.shrug_person+5.2));

  const rp=TM.redraw_pencil, k1=p(u,rp+1,rp+2.4), k2=p(u,rp+2.5,rp+4.5);
  drw($('w_strike'),168,p(u,rp+.3,rp+1));
  rise($('w_pen'),Math.min(p(u,rp,rp+.4),1-p(u,rp+4.7,rp+5.3)));
  $('w_penm').setAttribute('transform','translate('+(400+740*k1).toFixed(1)+' '+(278+22*k1+400*k2).toFixed(1)+')');
  drw(XB.v,XB.vl,k2); rise(XB.lb[2],p(u,rp+2.2,rp+2.7)); rise(XB.lb[3],p(u,rp+4.4,rp+4.9));
  rise($('w_dots'),p(u,TM.fresh_map,TM.fresh_map+.5)); rise($('w_open'),p(u,TM.fresh_map+.8,TM.fresh_map+1.4)); $('w_or').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));
  rise($('w_new'),p(u,TM.fresh_map+1.4,TM.fresh_map+2));
  rise($('w_flag'),p(u,TM.flag,TM.flag+.5)); const fw=8*Math.sin(t*3);
  $('w_fl').setAttribute('points','1010,340 '+(1090+fw).toFixed(1)+','+(362+fw/2).toFixed(1)+' 1010,388');

  const bp=TM.blank_paper;
  rise($('z_grab'),p(u,bp,bp+.5)); rise($('z_paper'),p(u,bp+.3,bp+.8));
  drw($('z_h'),154,p(u,bp+1,bp+1.8)); drw($('z_v'),178,p(u,bp+1.6,bp+2.4)); rise($('z_riv'),p(u,bp+2.6,bp+3));
  ['z_q1','z_q2','z_q3'].forEach((id,i)=>rise($(id),p(u,bp+5+i*.4,bp+5.5+i*.4)));
  rise($('z_me'),p(u,bp+7,bp+7.5)); rise($('z_own'),p(u,bp+7,bp+7.5));