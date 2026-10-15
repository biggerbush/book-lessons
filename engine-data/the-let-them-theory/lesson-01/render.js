const T0=TM.tired_person;
rise($('t_me'),p(u,T0,T0+.6)); rise($('t_oth'),p(u,T0+.6,T0+1.2));
const lt=p(u,T0+6.6,T0+7.2);
TS.forEach(s=>{s.setAttribute('opacity',(p(u,T0+1,T0+1.6)*(1-.8*lt)).toFixed(2));s.setAttribute('stroke-dasharray',lt>0?'6 10':'none')});
rise($('t_pill'),lt);

rise($('p_mel'),p(u,TM.mel_robbins,TM.mel_robbins+.5)); rise($('p_teen'),p(u,TM.prom_teens,TM.prom_teens+.5)); rise($('p_marks'),p(u,TM.prom_teens+.8,TM.prom_teens+1.3));
rise($('p_ph'),p(u,TM.restaurant,TM.restaurant+.5)); rise($('p_dn'),p(u,TM.restaurant+1.2,TM.restaurant+1.7));
rise($('p_dau'),p(u,TM.daughter,TM.daughter+.5)); rise($('p_say'),p(u,TM.daughter+1,TM.daughter+1.5));

rise($('w_bub'),p(u,TM.speech_bubble,TM.speech_bubble+.5)); rise($('w_r0'),p(u,TM.speech_bubble+3.8,TM.speech_bubble+4.3)); rise($('w_r1'),p(u,TM.speech_bubble+7.1,TM.speech_bubble+7.6));
const rk=p(u,TM.relief_cloud,TM.relief_cloud+1.6);
$('w_wt').setAttribute('transform','translate(0 '+fx(-150*rk)+')'); $('w_wt').setAttribute('opacity',(1-rk).toFixed(2));
$('w_cl').setAttribute('opacity',(.9*rk).toFixed(2)); $('w_cl').setAttribute('transform','translate(0 '+fx(-30*rk+6*Math.sin(t*1.5))+')');
$('w_mel').setAttribute('transform','translate(0 '+fx(12*(1-rk))+')');
rise($('w_lt'),p(u,TM.relief_cloud+1,TM.relief_cloud+1.5));

rise($('c_0'),p(u,TM.late_friend,TM.late_friend+.5)); rise($('c_1'),p(u,TM.group_chat,TM.group_chat+.5)); rise($('c_2'),p(u,TM.sulky_partner,TM.sulky_partner+.5));
const am=t*2.4,ah=t*.2;
$('c_hm').setAttribute('x2',fx(330+88*Math.sin(am))); $('c_hm').setAttribute('y2',fx(420-88*Math.cos(am)));
$('c_hh').setAttribute('x2',fx(330+55*Math.sin(ah))); $('c_hh').setAttribute('y2',fx(420-55*Math.cos(ah)));
$('c_ar').setAttribute('transform','translate('+fx(12*Math.sin(t*5))+' 0)');

const dk=p(u,TM.rope_pull,TM.rope_pull+.6);
rise($('d_me'),dk); $('d_oth').setAttribute('opacity',dk.toFixed(2)); $('d_oth').setAttribute('transform','translate('+fx(20*Math.sin(t*.8))+' 0)');
let rp='';for(let x=275;x<=760;x+=12)rp+=x+','+fx(520+26*Math.sin(x/38+t*4)*(x-275)/485)+' ';
$('d_rope').setAttribute('points',rp); $('d_rope').setAttribute('opacity',dk.toFixed(2));
rise($('d_lab'),p(u,TM.rope_pull+5,TM.rope_pull+5.5));
[0,1,2].forEach(i=>{const a=TM.rope_pull+7.6+i*.6;rise($('d_c'+i),p(u,a,a+.4))});
rise($('d_bat'),p(u,TM.battery-.6,TM.battery));
const bk=p(u,TM.battery,TM.battery+3),bh=272*(1-.85*bk);
$('d_bf').setAttribute('y',fx(566-bh)); $('d_bf').setAttribute('height',fx(bh)); $('d_bf').setAttribute('class',bk>.6?'loss':'gain');
rise($('d_end'),p(u,TM.battery+1.5,TM.battery+2));

// scene 5: hands open, three people walk free
rise($('e_h'),p(u,TM.open_hands,TM.open_hands+.5));
const ek=p(u,TM.open_hands+.5,TM.open_hands+2);
const hlx=385-105*ek,hly=560-110*ek,hrx=415+105*ek;
$('e_al').setAttribute('x2',fx(hlx)); $('e_al').setAttribute('y2',fx(hly)); $('e_hl').setAttribute('cx',fx(hlx)); $('e_hl').setAttribute('cy',fx(hly));
$('e_ar').setAttribute('x2',fx(hrx)); $('e_ar').setAttribute('y2',fx(hly)); $('e_hr').setAttribute('cx',fx(hrx)); $('e_hr').setAttribute('cy',fx(hly));
EF.forEach(([g,q],i)=>{const x=400+(q[0]-400)*ek,y=470+(q[1]-470)*ek+(ek>=1?5*Math.sin(t*1.6+i*2):0);
  g.setAttribute('transform','translate('+fx(x)+' '+fx(y)+')'); g.setAttribute('opacity',p(u,TM.open_hands+.5,TM.open_hands+1).toFixed(2))});
rise($('e_n0'),p(u,TM.open_hands+5.8,TM.open_hands+6.3)); rise($('e_n1'),p(u,TM.open_hands+6.4,TM.open_hands+6.9));
const sk=p(u,TM.shoulders,TM.shoulders+1.2);
$('e_wt').setAttribute('transform','translate('+fx(180*sk)+' '+fx(250*sk)+')');
$('e_me').setAttribute('transform','translate(0 '+fx(12*(1-sk))+')');
rise($('e_end'),p(u,TM.shoulders+1.2,TM.shoulders+1.7));

const fo=p(u,TM.energy_jar,TM.energy_jar+.6); rise($('f_o'),fo);
const out=u<TM.arrow_back;
FD.forEach((d,i)=>{const f=(t*.35+i/12)%1,g=out?f:1-f,q=FO[i%3];
  d.setAttribute('cx',fx(440+(q[0]-440)*g)); d.setAttribute('cy',fx(470+(q[1]-470)*g-50*Math.sin(Math.PI*g)));
  d.setAttribute('class',out?'loss':'gain'); d.setAttribute('opacity',(fo*Math.min(1,Math.sin(Math.PI*f)*3)).toFixed(2))});
const lv=Math.min(.95,.75-.5*p(u,TM.energy_jar,TM.energy_jar+3)+.65*p(u,TM.arrow_back,TM.arrow_back+3)),lh=228*lv;
$('f_lv').setAttribute('y',fx(634-lh)); $('f_lv').setAttribute('height',fx(lh));
rise($('f_face'),p(u,TM.calm_face,TM.calm_face+.5)); rise($('f_end'),p(u,TM.calm_face+4.6,TM.calm_face+5.1));

rise($('g_0'),p(u,TM.notebook,TM.notebook+.5));
[0,1,2].forEach(i=>$('g_k'+i).setAttribute('opacity',p(u,TM.notebook+1+i*.6,TM.notebook+1.3+i*.6).toFixed(2)));
rise($('g_1'),p(u,TM.whisper-.4,TM.whisper)); rise($('g_b'),p(u,TM.whisper+.3,TM.whisper+.8));
rise($('g_2'),p(u,TM.whisper+2.2,TM.whisper+2.6));
const A=30*(1-.88*p(u,TM.whisper+2.8,TM.whisper+5.5));let zp='';
for(let i=0,x=1230;x<=1440;x+=15,i++)zp+=x+','+fx(470+(i%2?1:-1)*A*(.7+.3*Math.sin(t*6+i)))+' ';
$('g_z').setAttribute('points',zp);
rise($('g_end'),p(u,TM.whisper+6.8,TM.whisper+7.4));

rise($('q_g'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('q_a'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('q_b'),p(u,TM.question_mark+.4,TM.question_mark+.9));
rise($('q_c'),p(u,TM.question_mark+3.4,TM.question_mark+3.9)); rise($('q_d'),p(u,TM.question_mark+3.8,TM.question_mark+4.3));