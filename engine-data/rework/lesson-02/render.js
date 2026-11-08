rise($('ball'),p(t,TM.crystal_ball,TM.crystal_ball+.8));
const f0=p(u,TM.crystal_ball+5.8,TM.crystal_ball+6.6);$('ballPlan').setAttribute('opacity',1-f0);$('ballQ').setAttribute('opacity',f0);
SPK.forEach((s,i)=>s.setAttribute('opacity',(.5+.5*Math.sin(t*2+i*2)).toFixed(2)));

rise($('teller'),p(u,TM.fortune_tell,TM.fortune_tell+.5));$('tball').setAttribute('r',(40+4*Math.sin(t*3)).toFixed(1));
rise($('quote'),p(u,TM.fortune_tell+3.8,TM.fortune_tell+4.4));
BN.forEach((g,i)=>rise(g,p(u,TM.thick_binder+i*.3,TM.thick_binder+i*.3+.4)));
rise($('chart'),p(u,TM.thick_binder+1.5,TM.thick_binder+2));$('proj').setAttribute('stroke-dashoffset',1-p(u,TM.thick_binder+1.8,TM.thick_binder+3.5));
rise($('stamp'),p(u,TM.thick_binder+4.9,TM.thick_binder+5.3));

$('wv1').setAttribute('d',wave(360,40,40,t*2));$('wv2').setAttribute('d',wave(450,25,30,-t*1.5));
rise($('pw'),p(u,TM.market_wave,TM.market_wave+.5));rise($('pr'),p(u,TM.rival_shop,TM.rival_shop+.5));rise($('pc'),p(u,TM.customer,TM.customer+.5));
$('bulb').setAttribute('r',(22+3*Math.sin(t*3)).toFixed(1));
rise($('sheet'),p(u,SC[2][0]/K+.5,SC[2][0]/K+1));
const cr=TM.customer+3.8,sh=p(u,cr,cr+.3)*(1-p(u,cr+.3,cr+1.2));
$('crack').setAttribute('stroke-dashoffset',1-p(u,cr,cr+.6));$('shk').setAttribute('transform','translate('+(6*sh*Math.sin(t*40)).toFixed(1)+' 0)');

rise($('hon'),p(u,SC[3][0]/K+.3,SC[3][0]/K+.8));
rise($('lm'),p(u,TM.label_maker,TM.label_maker+.5));
const tp=p(u,TM.label_maker+.5,TM.label_maker+2);$('tape').setAttribute('height',(170*tp).toFixed(1));$('tapeT').setAttribute('opacity',tp>.9?1:0);
[0,1,2].forEach(i=>{const a=TM.guess_tag+3*i;rise($('r'+i),p(u,a,a+.4));sk('rk'+i,SW[i],p(u,a+.8,a+1.3));rise($('tg'+i),p(u,a+1.2,a+1.8))});

rise($('ck'),p(u,TM.control_desk,TM.control_desk+.5));
TK.forEach((k,i)=>k.setAttribute('opacity',p(u,TM.control_desk+.6+i*.4,TM.control_desk+.9+i*.4)));
const il=u>=TM.control_desk+5.4;$('ckr').setAttribute('stroke-dasharray',il?'14 12':'none');rise($('ill'),p(u,TM.control_desk+5.4,TM.control_desk+5.8));
rise($('hz'),p(u,TM.blinders,TM.blinders+.6));
$('hm').setAttribute('transform','translate(0 '+(-80*p(u,TM.blinders+4.1,TM.blinders+10)).toFixed(1)+')');
rise($('bp'),p(u,TM.blinders+5.5,TM.blinders+6.2));$('star').setAttribute('opacity',(.7+.3*Math.sin(t*4)).toFixed(2));

rise($('mir'),p(u,TM.rear_mirror,TM.rear_mirror+.5));rise($('axl'),p(u,TM.rear_mirror+.3,TM.rear_mirror+.8));
$('str').setAttribute('opacity',p(u,TM.rear_mirror+1,TM.rear_mirror+2));
rise($('lst'),p(u,TM.rear_mirror+4.6,TM.rear_mirror+5.1));
const lk=p(u,TM.new_info+5,TM.new_info+5.6);
BR.forEach((b,i)=>{const k=i?p(u,TM.new_info+i*.3,TM.new_info+i*.3+.3):p(u,TM.rear_mirror+.3,TM.rear_mirror+.8);b.setAttribute('opacity',(k*(i?1-.7*lk:1)).toFixed(2))});
BR[0].setAttribute('fill',u>=TM.rear_mirror+4.6?'var(--loss)':'var(--ink)');
rise($('wyk'),p(u,TM.new_info,TM.new_info+.5));rise($('lock'),lk);

rise($('yr'),p(u,SC[6][0]/K+.3,SC[6][0]/K+.8));
const cw=p(u,TM.calendar_week,TM.calendar_week+.8);
YG.forEach((r,i)=>{if(i){r.setAttribute('opacity',(1-.7*cw).toFixed(2))}else r.setAttribute('fill',cw>.5?'var(--gain)':'var(--line)')});
rise($('wk'),p(u,TM.calendar_week+1,TM.calendar_week+1.5));
rise($('stp'),p(u,TM.next_step,TM.next_step+.5));
const ms=p(u,TM.next_step+1,TM.next_step+2);$('per6').setAttribute('transform','translate('+(120*ms).toFixed(1)+' '+(-70*ms).toFixed(1)+')');
rise($('inf'),p(u,TM.decision_clock,TM.decision_clock+.5));$('cur').setAttribute('stroke-dashoffset',1-p(u,TM.decision_clock+.3,TM.decision_clock+2.3));
$('hand').setAttribute('transform','rotate('+(-150+150*p(u,TM.decision_clock,TM.decision_clock+2.3)).toFixed(1)+' 1080 690)');
rise($('dm'),p(u,TM.decision_clock+2.3,TM.decision_clock+2.8));

rise($('tr'),p(u,TM.tightrope,TM.tightrope+.5));
$('wlk').setAttribute('transform','rotate('+(5*Math.sin(t*1.6)).toFixed(2)+' 440 425)');
$('wng').setAttribute('opacity',p(u,TM.wing_it+.5,TM.wing_it+1.2));
rise($('cl'),p(u,TM.cliff_edge,TM.cliff_edge+.5));
rise($('planA'),p(u,TM.cliff_edge+.3,TM.cliff_edge+.8));
$('clw').setAttribute('transform','translate('+(260*p(u,TM.cliff_edge+.5,TM.cliff_edge+4.5)).toFixed(1)+' 0)');
rise($('bang'),p(u,TM.cliff_edge+4.5,TM.cliff_edge+4.9));
rise($('wi'),p(u,TM.wing_it,TM.wing_it+.6));

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.3,s8+.8));rise($('qb'),p(u,s8+4.2,s8+4.7));rise($('qc'),p(u,s8+4.6,s8+5.1));rise($('tag8'),p(u,s8+5.2,s8+5.7));