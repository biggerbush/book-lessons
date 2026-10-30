rise($('plaster'),p(u,TM.scraped_knee+1,TM.scraped_knee+1.5));
dr($('grow0'),p(u,TM.scraped_knee+6.2,TM.scraped_knee+7.4)); rise($('ghead'),p(u,TM.scraped_knee+7.2,TM.scraped_knee+7.7));

rise($('cup'),p(u,TM.teacup,TM.teacup+.5)); dr($('crack'),p(u,TM.teacup+1.5,TM.teacup+2.1)); rise($('shards'),p(u,TM.teacup+2,TM.teacup+2.4));
rise($('arm'),p(u,TM.muscle,TM.muscle+.5));
const bk=p(u,TM.muscle+1,TM.muscle+3), bry=22+22*bk; $('bicep').setAttribute('ry',bry.toFixed(1)); $('bicep').setAttribute('rx',(48+18*bk).toFixed(1)); $('bicep').setAttribute('cy',(556-bry).toFixed(1));
BR.forEach((b,i)=>rise(b,p(u,TM.muscle+1.5+i*.6,TM.muscle+1.9+i*.6)));
rise($('anti'),p(u,TM.muscle+5,TM.muscle+5.5)); rise($('design'),p(u,TM.muscle+10.7,TM.muscle+11.2));

rise($('imm'),p(u,TM.immune_shield,TM.immune_shield+.5)); rise($('germs'),p(u,TM.germs,TM.germs+.5)); rise($('lblA'),p(u,TM.germs+1,TM.germs+1.5));
$('ringA').setAttribute('stroke-width',(6+8*p(u,TM.germs+1,TM.germs+3)).toFixed(1));
GM.forEach((g,i)=>{const a=i*Math.PI/4+t*.3,d=192+18*Math.sin(t*2+i);g.setAttribute('transform','translate('+(420+d*Math.cos(a)).toFixed(1)+' '+(460+d*Math.sin(a)).toFixed(1)+')')});
rise($('bub'),p(u,TM.clean_bubble,TM.clean_bubble+.5)); rise($('mind'),p(u,TM.clean_bubble+5.4,TM.clean_bubble+6));

rise($('kids'),p(u,TM.kids_running,TM.kids_running+.5)); rise($('noad'),p(u,TM.kids_running+2.5,TM.kids_running+3)); rise($('gray'),p(u,TM.kids_running+6.1,TM.kids_running+6.6));
const tg=p(u,TM.tag_game,TM.tag_game+1.5);
KD.forEach((k,i)=>{const a=t*.8+(i===0?tg*(1.2566-.35)+.12*tg*Math.sin(t*3):i*1.2566);k.setAttribute('transform','translate('+(440+200*Math.cos(a)).toFixed(1)+' '+(470+130*Math.sin(a)).toFixed(1)+')')});
KD[0].setAttribute('class',u>=TM.tag_game?'gain':'ink');
rise($('sq'),p(u,TM.tag_game+3.4,TM.tag_game+3.8)); FP.forEach((g,i)=>rise(g,p(u,TM.tag_game+3.4+i*1.2,TM.tag_game+3.9+i*1.2)));
rise($('team'),p(u,TM.tag_game+8.4,TM.tag_game+9));

rise($('tree'),p(u,TM.climbing_tree,TM.climbing_tree+.5));
CLB.setAttribute('transform','translate(340 '+(570-130*p(u,TM.climbing_tree+.5,TM.climbing_tree+4)).toFixed(1)+')');
rise($('sand'),p(u,TM.climbing_tree+4.2,TM.climbing_tree+4.7));
const amp=.12+.38*p(u,TM.fast_swing,TM.fast_swing+1.5); $('swing').setAttribute('transform','rotate('+(amp*57.3*Math.sin(t*3)).toFixed(2)+' 715 300)');
RK.forEach((g,i)=>rise(g,p(u,TM.fast_swing+i*1.1,TM.fast_swing+i*1.1+.4)));
rise($('fearbar'),p(u,TM.fast_swing+5.3,TM.fast_swing+5.8));
$('dose').setAttribute('transform','translate('+(340+460*p(u,TM.fast_swing+5.8,TM.fast_swing+7.5)+20*Math.sin(t*2)).toFixed(1)+' 772)');

FB.forEach((b,i)=>rise(b,p(u,TM.fear_meter+i*.9,TM.fear_meter+i*.9+.4)));
rise($('conf'),p(u,TM.confident_kid,TM.confident_kid+.5)); rise($('prot'),p(u,TM.confident_kid+4.5,TM.confident_kid+5));
$('pring').setAttribute('transform','rotate('+(t*12%360).toFixed(1)+' 1120 410)');

rise($('disc'),p(u,TM.compass,TM.compass+.5)); rise($('def'),p(u,TM.shield_mode,TM.shield_mode+.5));
$('needle').setAttribute('transform','rotate('+(30*Math.sin(t*1.1)+15*Math.sin(t*2.7)).toFixed(1)+' 440 430)');
rise($('growth'),p(u,TM.shield_mode+4.2,TM.shield_mode+4.8)); $('cdA').setAttribute('stroke',u>=TM.shield_mode+4.2?'var(--gain)':'var(--line)');

const ak=p(u,TM.park_bench,TM.park_bench+2);
AD.setAttribute('transform','translate('+(940-680*ak).toFixed(1)+' '+(460+48*ak-40*Math.sin(Math.PI*ak)).toFixed(1)+')');
$('legs').setAttribute('opacity',p(u,TM.park_bench+1.8,TM.park_bench+2.1).toFixed(2));
$('mv').setAttribute('opacity',(p(u,TM.park_bench,TM.park_bench+.5)*(1-.6*p(u,TM.park_bench+2.5,TM.park_bench+3))).toFixed(2));
rise($('bnl'),p(u,TM.park_bench+1.5,TM.park_bench+2));
rise($('fortg'),p(u,TM.wobbly_fort,TM.wobbly_fort+.5)); $('fort').setAttribute('transform','rotate('+(4*Math.sin(t*2.5)).toFixed(2)+' 1250 680)');
rise($('nor'),p(u,TM.wobbly_fort+1.5,TM.wobbly_fort+2));

['q0','q1','q2','q3'].forEach((id,i)=>rise($(id),p(u,TM.clock+i*.4,TM.clock+i*.4+.5)));
rise($('q4'),p(u,TM.clock+7.4,TM.clock+8));
const ck=Math.min(.999,p(u,TM.clock+.5,TM.clock+6)), ca=ck*2*Math.PI;
$('pie').setAttribute('d',ck<.001?'':'M1340 230L1340 154A76 76 0 '+(ck>.5?1:0)+' 1 '+(1340+76*Math.sin(ca)).toFixed(1)+' '+(230-76*Math.cos(ca)).toFixed(1)+'Z');
$('hand').setAttribute('transform','rotate('+(360*ck).toFixed(1)+' 1340 230)');