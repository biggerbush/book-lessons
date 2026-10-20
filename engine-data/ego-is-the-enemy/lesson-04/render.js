const bk=p(u,TM.expert_badge,TM.expert_badge+.5),ck=p(u,TM.expert_badge+6.4,TM.expert_badge+7.2);
rise($('t_badge'),bk*(1-.7*ck));
$('t_cap').setAttribute('transform','translate(0 '+(-140*(1-ck)).toFixed(1)+')');$('t_cap').setAttribute('opacity',ck);

rise($('k_book'),p(u,TM.closed_book,TM.closed_book+.5));
const kb=p(u,TM.brick_wall,TM.brick_wall+.8);
egoKQ.forEach((q,i)=>q.setAttribute('opacity',(p(u,TM.closed_book+.6+i*.3,TM.closed_book+1+i*.3)*(1-.85*kb)).toFixed(2)));
egoKW.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.brick_wall+i*.1,TM.brick_wall+i*.1+.3)));
const kl=p(u,TM.brick_wall+4.6,TM.brick_wall+5.6);$('k_line').setAttribute('stroke-dashoffset',(466*(1-kl)).toFixed(1));$('k_line').setAttribute('opacity',kl>0?1:0);
rise($('k_hit'),p(u,TM.brick_wall+5.5,TM.brick_wall+6));
rise($('k_ep'),p(u,TM.epictetus,TM.epictetus+.5));rise($('k_quote'),p(u,TM.epictetus+3.2,TM.epictetus+3.8));

rise($('f_fighter'),p(u,TM.fighter,TM.fighter+.5));rise($('f_gym'),p(u,TM.gym,TM.gym+.5));
egoFP.forEach((g,i)=>rise(g,p(u,TM.three_partners+i*.6,TM.three_partners+i*.6+.5)));
rise($('f_all'),p(u,TM.three_partners+2.4,TM.three_partners+3));

rise($('pl_badge'),p(u,TM.plus_sign,TM.plus_sign+.5));rise($('pl_scene'),p(u,TM.plus_sign+1.2,TM.plus_sign+1.7));rise($('pl_ego'),p(u,TM.plus_sign+1.5,TM.plus_sign+2));
rise($('pl_card'),p(u,TM.mentor,TM.mentor+.5));$('pl_ok').setAttribute('opacity',p(u,TM.mentor+2.4,TM.mentor+2.9));
const eg=p(u,TM.mentor+5.4,TM.mentor+6.6);$('pl_egoS').setAttribute('transform','translate(1020 400) scale('+(1-.3*eg).toFixed(3)+') translate(-1020 -400)');
rise($('pl_hon'),p(u,TM.mentor+5.4,TM.mentor+6));

rise($('eq_badge'),p(u,TM.equal_sign,TM.equal_sign+.5));rise($('eq_fight'),p(u,TM.sparring,TM.sparring+.5));
const sp=u>=TM.sparring?1:0;$('eq_beam').setAttribute('transform','rotate('+(3*Math.sin(t*1.4)*sp).toFixed(2)+' 980 555)');
egoEG[0].setAttribute('cx',(830+Math.max(0,Math.sin(t*5))*24*sp).toFixed(1));egoEG[1].setAttribute('cx',(1130-Math.max(0,-Math.sin(t*5))*24*sp).toFixed(1));
rise($('eq_hide'),p(u,TM.sparring+5.8,TM.sparring+6.4));

rise($('mi_badge'),p(u,TM.minus_sign,TM.minus_sign+.5));rise($('mi_room'),p(u,TM.minus_sign+1.5,TM.minus_sign+2));
egoMS.forEach((g,i)=>rise(g,p(u,TM.chalkboard+i*.6,TM.chalkboard+i*.6+.5)));
const gp=p(u,TM.chalkboard+4.2,TM.chalkboard+4.8);egoMC.setAttribute('opacity',(1-gp).toFixed(2));rise($('mi_gap'),gp);rise($('mi_txt'),gp);

rise($('w_loop'),p(u,TM.loop,TM.loop+.5));$('w_ring').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));
egoWN.forEach((g,i)=>rise(g,p(u,TM.loop+.8+i*1.6,TM.loop+1.3+i*1.6)));
rise($('w_lad'),p(u,TM.ladder,TM.ladder+.5));
const cy=640-280*p(u,TM.ladder+.6,TM.ladder+4.6);egoWME.setAttribute('transform','translate(0 '+cy.toFixed(1)+')');egoWUP.setAttribute('transform','translate(0 '+(cy-150).toFixed(1)+')');
rise($('w_more'),p(u,TM.ladder+5.4,TM.ladder+6));rise($('w_pt'),p(u,TM.ladder+9.6,TM.ladder+10.2));

rise($('n_book'),p(u,TM.notebook,TM.notebook+.5));
egoScr.forEach((s,i)=>{const a=i<2?TM.notebook+1.8+i*.8:TM.coffee_cup+3;s.setAttribute('stroke-dashoffset',(420*(1-p(u,a,a+.7))).toFixed(1));s.setAttribute('opacity',u>=a?1:0)});
$('n_empty').setAttribute('opacity',(p(u,TM.notebook+3.4,TM.notebook+3.9)*(1-p(u,TM.coffee_cup+3,TM.coffee_cup+3.5))).toFixed(2));
rise($('n_lab'),p(u,TM.coffee_cup,TM.coffee_cup+.5));
[0,1,2].forEach(i=>rise($('n_c'+i),p(u,TM.coffee_cup+i*.7,TM.coffee_cup+i*.7+.5)));
$('n_steam').setAttribute('transform','translate(0 '+(-4*Math.sin(t*2)).toFixed(1)+')');
rise($('n_arr'),p(u,TM.coffee_cup+2.4,TM.coffee_cup+3));

['qa','qb','qc','qd'].forEach((id,i)=>rise($(id),p(u,TM.question_mark+i*.4,TM.question_mark+i*.4+.5)));
rise($('qg'),p(u,TM.question_mark+1.6,TM.question_mark+2.1));rise($('qm'),p(u,TM.question_mark+2,TM.question_mark+2.5));