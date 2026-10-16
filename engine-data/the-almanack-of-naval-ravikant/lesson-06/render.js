rise($('t_fig'),p(u,TM.smiling_mind,TM.smiling_mind+.6));
$('t_db').setAttribute('transform','translate(0 '+(-24*Math.abs(Math.sin(t*1.6))).toFixed(1)+')');

rise($('a_nav'),p(u,TM.naval,TM.naval+.5));
rise($('a_gym'),p(u,TM.gym_weights,TM.gym_weights+.5));
const yr=TM.gym_weights+4.2;rise($('a_yrs'),p(u,yr,yr+.5));
bars.forEach((b,i)=>b.setAttribute('opacity',p(u,yr+.3+i*.3,yr+.6+i*.3).toFixed(2)));
rise($('a_sign'),p(u,TM.choice_sign,TM.choice_sign+.5));
days.forEach((d,i)=>d.setAttribute('fill',u>=TM.choice_sign+.8+i*.5?'var(--gain)':'var(--line)'));

rise($('b_fw'),p(u,TM.fireworks,TM.fireworks+.5));
$('b_fwi').setAttribute('opacity',(1-.6*p(u,TM.fireworks+5.8,TM.fireworks+6.6)).toFixed(2));
bursts.forEach(([g,x,y],k)=>g.setAttribute('transform','translate('+x+' '+y+') scale('+(.7+.4*Math.abs(Math.sin(t*1.5+k*1.3))).toFixed(3)+')'));
rise($('b_lake'),p(u,TM.calm_lake,TM.calm_lake+.5));
$('b_wv').setAttribute('transform','translate('+(12*Math.sin(t)).toFixed(1)+' 0)');
const hs=p(u,TM.empty_hole+.8,TM.empty_hole+2.4);
rise($('b_hole'),p(u,TM.empty_hole,TM.empty_hole+.4));
$('b_hc').setAttribute('r',Math.max(.1,56*(1-hs)).toFixed(1));$('b_ht').setAttribute('opacity',(1-hs).toFixed(2));
rise($('b_cap'),p(u,TM.empty_hole+1.8,TM.empty_hole+2.4));

rise($('c_doc'),p(u,TM.contract,TM.contract+.5));
rise($('c_who'),p(u,TM.contract+2.1,TM.contract+2.6));rise($('c_par'),p(u,TM.contract+2.1,TM.contract+2.6));
rise($('c_terms'),p(u,TM.signature,TM.signature+.5));
drw(sig,p(u,TM.signature+1.5,TM.signature+3.5));
rise($('c_cap'),p(u,TM.signature+6.2,TM.signature+6.8));

// phone: calm -> cloud follows you -> buy -> cloud lifts briefly -> drifts back
rise($('d_who'),p(u,TM.new_phone,TM.new_phone+.5));
rise($('d_ph'),p(u,TM.new_phone+.6,TM.new_phone+1.1));
rise($('d_old'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
const cw=Math.min(TM.storm_cloud+3,(TM.storm_cloud+TM.shopping_bag)/2);
const lift=p(u,TM.shopping_bag+.2,TM.shopping_bag+1.2)-p(u,TM.shopping_bag+4.5,TM.shopping_bag+5.5);
$('d_cl').setAttribute('opacity',(p(u,cw,cw+.6)*(1-.85*lift)).toFixed(2));
$('d_cl').setAttribute('transform','translate('+(6*Math.sin(t*1.3)).toFixed(1)+' '+(4*Math.sin(t*2)-80*lift).toFixed(1)+')');
rise($('d_arr'),p(u,cw,cw+.6));
rise($('d_bag'),p(u,TM.shopping_bag,TM.shopping_bag+.5));
rise($('d_rel'),p(u,TM.shopping_bag+.6,TM.shopping_bag+1.1));
const stS=u>=TM.shopping_bag+.6?2:(u>=cw?1:0);
$('d_st').textContent=['CALM','UNSETTLED','CALM, BRIEFLY'][stS];
$('d_st').style.fill=['','var(--loss)','var(--gain)'][stS];
$('d_st').setAttribute('opacity',p(u,TM.storm_cloud,TM.storm_cloud+.5).toFixed(2));

rise($('e_qw'),p(u,TM.queue,TM.queue+.5));
cards.forEach((g,i)=>{const x=120+(((i*180-t*50)%1260)+1260)%1260;g.setAttribute('transform','translate('+x.toFixed(1)+' 250)');g.setAttribute('opacity',cl(Math.min((x-120)/120,(1380-x)/120)).toFixed(2))});
rise($('e_tm'),p(u,TM.treadmill,TM.treadmill+.5));
$('e_belt').setAttribute('stroke-dashoffset',(t*120%40).toFixed(1));
const sw=Math.sin(t*8)*40;
$('e_l1').setAttribute('d','M600 600L'+(600+sw).toFixed(1)+' 646');$('e_l2').setAttribute('d','M600 600L'+(600-sw).toFixed(1)+' 646');
$('e_rb').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*8))).toFixed(1)+')');
$('e_pc').setAttribute('transform','translate('+(20*Math.sin(t*.9)).toFixed(1)+' 0)');
rise($('e_t1'),p(u,TM.treadmill+5.4,TM.treadmill+6));
rise($('e_t2'),p(u,TM.treadmill+9.2,TM.treadmill+9.8));

// picky: one big target, small wants crossed out and released
rise($('f_you'),p(u,TM.single_target,TM.single_target+.5));
rise($('f_tg'),p(u,TM.single_target+.3,TM.single_target+.8));
rise($('f_one'),p(u,TM.single_target+3.8,TM.single_target+4.3));
const lg=p(u,TM.let_go_hands,TM.let_go_hands+1.2);
$('f_crl').setAttribute('opacity',(p(u,TM.single_target+1,TM.single_target+1.5)*(1-.6*lg)).toFixed(2));
rise($('f_lgl'),p(u,TM.let_go_hands,TM.let_go_hands+.5));
cr.forEach(([g,x,y,xl],i)=>{const a=TM.single_target+1+i*.15,f=p(u,TM.let_go_hands+i*.2,TM.let_go_hands+i*.2+1.2),xo=p(u,TM.let_go_hands+i*.2-.3,TM.let_go_hands+i*.2+.2);
  g.setAttribute('opacity',(p(u,a,a+.4)*(1-.72*f)).toFixed(2));
  xl.setAttribute('opacity',xo.toFixed(2));
  g.setAttribute('transform','translate('+(x+6*Math.sin(t*2+i)*(1-f)).toFixed(1)+' '+(y+45*f).toFixed(1)+') rotate('+((i%2?1:-1)*12*f).toFixed(1)+' 45 30)')});
drw(fpath,p(u,TM.clear_path,TM.clear_path+1.2));
rise($('f_fc'),p(u,TM.clear_path+.8,TM.clear_path+1.3));
rise($('f_cap'),p(u,TM.clear_path+1.2,TM.clear_path+1.8));

rise($('h_un'),p(u,TM.magnifier,TM.magnifier+.5));
rise($('h_mag'),p(u,TM.magnifier+.2,TM.magnifier+.7));
$('h_mag').setAttribute('transform','translate('+(200+400*p(u,TM.magnifier+.3,TM.magnifier+3.5)).toFixed(1)+' 300)');
rise($('h_card'),p(u,TM.magnifier+4.1,TM.magnifier+4.6));
rise($('h_sc'),p(u,TM.torn_paper,TM.torn_paper+.5));
const ang=10*p(u,TM.balance_scale,TM.balance_scale+1.2),rd=ang*Math.PI/180;
$('h_beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 1160 330)');
[-1,1].forEach((s,i)=>$('h_p'+i).setAttribute('transform','translate('+(1160+s*240*Math.cos(rd)).toFixed(1)+' '+(330+s*240*Math.sin(rd)).toFixed(1)+')'));
const tk=p(u,TM.balance_scale+.6,TM.balance_scale+1.6);
$('h_L').setAttribute('transform','translate('+(-40*tk).toFixed(1)+' '+(20*tk).toFixed(1)+') rotate('+(-8*tk).toFixed(2)+' 220 700)');
$('h_R').setAttribute('transform','translate('+(40*tk).toFixed(1)+' '+(20*tk).toFixed(1)+') rotate('+(8*tk).toFixed(2)+' 620 700)');
rise($('h_cap'),p(u,TM.balance_scale+.4,TM.balance_scale+1));

rise($('n_nb'),p(u,TM.notebook,TM.notebook+.5));
rise($('n_a'),p(u,TM.notebook+.2,TM.notebook+.7));
rise($('n_b'),p(u,TM.notebook+.6,TM.notebook+1.1));
rise($('n_c'),p(u,TM.notebook+4.2,TM.notebook+4.7));
rise($('n_m'),p(u,TM.notebook+4.8,TM.notebook+5.3));
drw(tick,p(u,TM.notebook+5,TM.notebook+5.6));