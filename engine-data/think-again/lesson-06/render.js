rise($('t_bub'),p(u,TM.title_card,TM.title_card+.5));
pulse(TA,p(u,TM.title_card+.4,TM.title_card+1),3);

const bw=u>=TM.brick_wall,end=bw?830:1040;
rise($('a_pair'),p(u,TM.arguing_pair,TM.arguing_pair+.5));
const av=p(u,TM.arguing_pair+.5,TM.arguing_pair+1);
AW.forEach((g,i)=>{const k=(t*.5+i/3)%1;g.setAttribute('transform','translate('+(400+(end-400)*k).toFixed(1)+' '+g._y+')');g.setAttribute('opacity',(av*(k<.85?1:(1-k)/.15)).toFixed(2))});
WR.forEach((g,j)=>rise(g,p(u,TM.brick_wall+j*.15,TM.brick_wall+j*.15+.4)));
AR.setAttribute('fill',bw?'var(--loss)':'var(--ink)');
const bp=fr(TM.brick_wall,TM.mother_baby,.6);
rise($('a_path'),p(u,bp,bp+.6));$('a_pp').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));

rise($('m_m'),p(u,TM.mother_baby,TM.mother_baby+.5));
rise($('m_v'),p(u,TM.vaccine_vial,TM.vaccine_vial+.5));
rise($('m_n'),p(u,TM.nurse,TM.nurse+.5));
$('m_mf').setAttribute('transform','translate('+(u>=TM.nurse+.6?4*Math.sin(t*5):0).toFixed(1)+' 0)');

rise($('d_doc'),p(u,TM.doctor,TM.doctor+.5));
rise($('d_q'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('d_ch'),p(u,TM.two_chairs,TM.two_chairs+.5));
pulse(DA,p(u,TM.two_chairs+.4,TM.two_chairs+1),3);
rise($('d_cap'),p(u,TM.two_chairs+.6,TM.two_chairs+1.1));

rise($('f_c'),p(u,TM.checkmark,TM.checkmark+.5));
$('f_ck').setAttribute('stroke-dashoffset',(180*(1-p(u,TM.checkmark+.3,TM.checkmark+.9))).toFixed(1));
const nf=fr(TM.checkmark,TM.open_door,.7);rise($('f_no'),p(u,nf,nf+.5));
const dk=p(u,TM.open_door,TM.open_door+1.2),dw=240*(1-.85*dk);
$('f_dr').setAttribute('points','900,300 '+(900+dw).toFixed(1)+','+(300-40*dk).toFixed(1)+' '+(900+dw).toFixed(1)+','+(700+40*dk).toFixed(1)+' 900,700');
$('f_hd').setAttribute('cx',(900+dw-24).toFixed(1));$('f_hd').setAttribute('opacity',(1-dk).toFixed(2));
const of=fr(TM.open_door,TM.book_icon,.52);rise($('f_out'),p(u,of,of+.5));

rise($('i_bk'),p(u,TM.book_icon,TM.book_icon+.5));
rise($('i_lk'),p(u,TM.key,TM.key+.5));
const f1=fr(TM.key,TM.open_question,.25),f2=fr(TM.key,TM.open_question,.55);
rise($('i_fc'),p(u,f1,f1+.5));
$('i_fa').setAttribute('transform','translate('+(600+40*Math.abs(Math.sin(t*4))).toFixed(1)+' 485)');
const kp=p(u,f2,f2+1.2);
$('i_key').setAttribute('transform','translate('+(1240-330*kp).toFixed(1)+' 465)');$('i_key').setAttribute('opacity',p(u,f2,f2+.3));
$('i_sh').setAttribute('transform','translate(0 '+(-24*p(u,f2+1.1,f2+1.5)).toFixed(1)+')');
rise($('i_ml'),p(u,f2,f2+.5));rise($('i_ln'),p(u,f2+.8,f2+1.4));

[TM.open_question,TM.mirror,TM.thumbs_up].forEach((a,i)=>rise($('v_c'+i),p(u,a,a+.5)));
pulse(VE,p(u,TM.mirror+.4,TM.mirror+1),4);
$('v_th').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*2))).toFixed(1)+')');

[TM.ear,TM.scale,TM.lightbulb].forEach((a,i)=>rise($('w_z'+i),p(u,a,a+.5)));
const sk=p(u,TM.ear+.9,TM.ear+1.8);
$('w_sh').setAttribute('transform','translate(430 '+(430+60*sk).toFixed(1)+') scale('+(1-.4*sk).toFixed(3)+')');$('w_sh').setAttribute('opacity',(1-.85*sk).toFixed(2));
const ang=u>=TM.scale?8*Math.sin(t*1.6)*(1-.6*p(u,TM.scale+1,TM.scale+4)):0,rd=ang*Math.PI/180;
$('w_bm').setAttribute('transform','rotate('+ang.toFixed(2)+' 800 340)');
[-1,1].forEach((s,i)=>$('w_p'+i).setAttribute('transform','translate('+(800+s*110*Math.cos(rd)).toFixed(1)+' '+(340+s*110*Math.sin(rd)).toFixed(1)+')'));
$('w_bl').setAttribute('fill',u>=TM.lightbulb+.4?'var(--gain)':'var(--stage)');
$('w_ry').setAttribute('opacity',(p(u,TM.lightbulb+.4,TM.lightbulb+.9)*(.7+.3*Math.sin(t*4))).toFixed(2));

const S8=SC[8][0]/K,E8=SC[8][1]/K,q3=fr(S8,E8,.55);
rise($('q_g'),p(u,S8+.3,S8+.8));rise($('q_a'),p(u,S8+.3,S8+.8));rise($('q_b'),p(u,S8+.8,S8+1.3));rise($('q_c'),p(u,q3,q3+.6));