rise($('t_wk'),p(u,TM.tired_worker,TM.tired_worker+.6));
TS.forEach((s,i)=>{if(i<3){s.setAttribute('opacity',1);s.setAttribute('transform','translate(0 0)');return}
  const a=TM.tired_worker+(i-3)*1,k=p(u,a,a+.5); s.setAttribute('opacity',k.toFixed(2)); s.setAttribute('transform','translate(0 '+(-90*(1-k)).toFixed(1)+')')});

rise($('b_me'),p(u,TM.old_burkeman,TM.old_burkeman+.6));
BK.forEach((b,i)=>rise(b,p(u,TM.system_books+i*.5,TM.system_books+i*.5+.4))); rise($('b_bl'),p(u,TM.system_books,TM.system_books+.5));
rise($('b_road'),p(u,TM.calm_beach,TM.calm_beach+.6)); rise($('b_beach'),p(u,TM.calm_beach+.8,TM.calm_beach+1.4)); rise($('b_q'),p(u,TM.calm_beach+2,TM.calm_beach+2.6));

const sp=(TM.inbox_zero-TM.fast_typing)/8, bk=TM.inbox_zero+3.3;
RW.forEach(([g,c],i)=>{const ap=p(u,TM.full_inbox+i*.12,TM.full_inbox+i*.12+.4),a=TM.fast_typing+.3+i*sp*.85,k=p(u,a,a+.4),bb=p(u,bk+i*.4,bk+i*.4+.4);
  g.setAttribute('transform','translate('+(bb>0?300*(1-bb):300*k).toFixed(1)+' 0)'); g.setAttribute('opacity',(bb>0?bb:ap*(1-k)).toFixed(3)); c.setAttribute('fill',bb>0?'var(--loss)':'var(--ink)')});
rise($('i_me'),p(u,TM.fast_typing,TM.fast_typing+.5));
$('i_typ').setAttribute('opacity',u>=TM.fast_typing&&u<TM.inbox_zero?(.5+.5*Math.sin(t*20)).toFixed(2):0);
rise($('i_zero'),p(u,TM.inbox_zero,TM.inbox_zero+.5)*(1-.7*p(u,bk+1,bk+2))); rise($('i_back'),p(u,bk,bk+.5));

rise($('d_out'),p(u,TM.reply_arrows,TM.reply_arrows+.5)); rise($('d_ret'),p(u,TM.reply_arrows+1.2,TM.reply_arrows+1.8));
rise($('d_badge'),p(u,TM.reliable_badge,TM.reliable_badge+.5)); rise($('d_more'),p(u,TM.reliable_badge+2,TM.reliable_badge+2.6));
DSH.forEach(d=>d.setAttribute('stroke-dashoffset',(-(t*40)%18).toFixed(1)));
const nP=4+4*p(u,TM.reply_arrows,TM.reply_arrows+3)+4*p(u,TM.reliable_badge+2,TM.reliable_badge+6)+6*p(u,TM.taller_pile+2.5,TM.taller_pile+4.5);
PL.forEach((s,i)=>s.setAttribute('opacity',cl(nP-i).toFixed(2)));
rise($('d_n1'),p(u,TM.taller_pile,TM.taller_pile+.5)); rise($('d_n2'),p(u,TM.taller_pile+3,TM.taller_pile+3.5));

rise($('w_mach'),p(u,TM.washing_mach,TM.washing_mach+.6)); $('w_drum').setAttribute('transform','rotate('+(t*200%360).toFixed(1)+' 280 455)');
const c0=TM.washing_mach+6; rise($('w_clk'),p(u,c0,c0+.6));
$('w_wedge').setAttribute('d',wedge(120*p(u,c0+.5,c0+1.7)*(1-p(u,TM.clock_same,TM.clock_same+2))));
$('w_m').setAttribute('transform','rotate('+(t*30%360).toFixed(1)+' 1260 420)'); $('w_h').setAttribute('transform','rotate('+(t*2.5%360).toFixed(1)+' 1260 420)');
rise($('w_l1'),p(u,c0+.5,c0+1)*(1-p(u,TM.clock_same,TM.clock_same+.5))); rise($('w_l2'),p(u,TM.clock_same+.3,TM.clock_same+.8));
SH.forEach((s,i)=>rise(s,p(u,TM.clean_shirts+i*.4,TM.clean_shirts+i*.4+.4))); rise($('w_shl'),p(u,TM.clean_shirts+.5,TM.clean_shirts+1));
rise($('w_house'),p(u,TM.clean_shirts+2.4,TM.clean_shirts+2.9)); rise($('w_note'),p(u,TM.clock_same+.5,TM.clock_same+1.1));

rise($('k_buck'),p(u,TM.bucket,TM.bucket+.6));
const lv=640-170*p(u,TM.bucket,TM.water_pour+1)+6*Math.sin(t*2), dx=40*(lv-400)/320;
$('k_wat').setAttribute('points',(620+dx).toFixed(1)+','+lv.toFixed(1)+' '+(980-dx).toFixed(1)+','+lv.toFixed(1)+' 940,740 660,740');
rise($('k_str'),p(u,TM.water_pour,TM.water_pour+.4)); $('k_str').setAttribute('stroke-dashoffset',(-(t*120)%34).toFixed(1));
const sc=(t*.9)%1, sk=sc<.5?ease(sc*2):1-ease((sc-.5)*2), sx=720-340*sk, sy=520+40*sk-60*Math.sin(Math.PI*sk);
$('k_scp').setAttribute('transform','translate('+sx.toFixed(1)+' '+sy.toFixed(1)+')');
$('k_arm').setAttribute('d','M290 545L'+(sx-40).toFixed(1)+' '+(sy-10).toFixed(1));
rise($('k_sg'),p(u,TM.water_pour,TM.water_pour+.5)); rise($('k_done'),p(u,TM.empty_hand,TM.empty_hand+.5)); rise($('k_note'),p(u,TM.empty_hand+1.5,TM.empty_hand+2.1));

rise($('f_fl'),p(u,TM.white_flag,TM.white_flag+.6));
const w=12*Math.sin(t*3); $('f_cloth').setAttribute('d','M204 270Q282 '+(250+w).toFixed(1)+' 360 '+(270+w*.5).toFixed(1)+'V'+(370+w*.5).toFixed(1)+'Q282 '+(350+w).toFixed(1)+' 204 370Z');
BR.forEach((b,i)=>b.setAttribute('opacity',(1-p(u,TM.white_flag+2.2+i*.08,TM.white_flag+2.6+i*.08)).toFixed(2)));
$('f_ghost').setAttribute('opacity',p(u,TM.white_flag+2.2,TM.white_flag+4).toFixed(2));
$('f_pan').setAttribute('width',(220-190*p(u,TM.open_door,TM.open_door+1)).toFixed(1));
$('f_me').setAttribute('transform','translate('+(450+780*p(u,TM.open_door+.8,TM.open_door+2.8)).toFixed(1)+' 470)');
rise($('f_mg'),p(u,TM.white_flag+.4,TM.white_flag+1)); rise($('f_note'),p(u,TM.open_door+1.5,TM.open_door+2.1));

const s7=SC[7][0]/K, fk=p(u,TM.sunrise_desk+.4,TM.sunrise_desk+1.6), hp=40*Math.sin(Math.PI*fk);
rise($('p_tl'),p(u,s7+.3,s7+.9));
$('p_A').setAttribute('transform','translate('+(120+560*fk).toFixed(1)+' '+hp.toFixed(1)+')'); $('p_B').setAttribute('transform','translate('+(920-800*fk).toFixed(1)+' '+(-hp).toFixed(1)+')');
rise($('p_proj'),p(u,TM.big_project,TM.big_project+.6));
EV.forEach((e,i)=>rise(e,p(u,TM.waiting_mail+i*.6,TM.waiting_mail+i*.6+.5))); rise($('p_ml'),p(u,TM.waiting_mail+1.6,TM.waiting_mail+2.2));

rise($('q1'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('q2'),p(u,TM.question_mark+.4,TM.question_mark+.9)); rise($('q3'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('q_g'),p(u,TM.question_mark+1.2,TM.question_mark+1.8)); $('q_c').setAttribute('r',(80+4*Math.sin(t*2.5)).toFixed(1));
rise($('q_do'),p(u,TM.question_mark+5.4,TM.question_mark+6));