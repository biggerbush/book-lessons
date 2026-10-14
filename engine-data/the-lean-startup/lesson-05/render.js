draw($('up0'),p(u,TM.rising_chart,TM.rising_chart+2));
CF.forEach((c,i)=>{c.setAttribute('opacity',p(u,TM.rising_chart+1.6+i*.06,TM.rising_chart+2));c.setAttribute('y',(200+(i*37)%50+6*Math.sin(t*3+i)).toFixed(1))});
rise($('lie0'),p(u,TM.rising_chart+4.2,TM.rising_chart+4.7));

B1.forEach((b,i)=>{const a=TM.total_users+i*.15,h=(40+i*40)*p(u,a,a+.4);b.setAttribute('y',(640-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
TB.forEach((q,i)=>{rise(q[0],p(u,TM.cheer_team+i*.2,TM.cheer_team+i*.2+.5));q[1].setAttribute('transform','translate(0 '+(-12*Math.abs(Math.sin(t*4+i))).toFixed(1)+')')});
rise($('teamL'),p(u,TM.cheer_team+.6,TM.cheer_team+1.1));
rise($('fog'),p(u,TM.fog_cloud,TM.fog_cloud+.6));rise($('fogq'),p(u,TM.fog_cloud+.6,TM.fog_cloud+1.1));

rise($('imvu'),p(u,TM.imvu_office,TM.imvu_office+.5));
draw($('gu2'),p(u,TM.growth_graph,TM.growth_graph+1.6));draw($('gr2'),p(u,TM.growth_graph+.3,TM.growth_graph+1.9));
rise($('leg2'),p(u,TM.growth_graph,TM.growth_graph+.5));rise($('ok2'),p(u,TM.growth_graph+4.2,TM.growth_graph+4.7));
FB.forEach((b,i)=>rise(b,p(u,TM.new_features+i*.35,TM.new_features+i*.35+.4)));rise($('fl2'),p(u,TM.new_features,TM.new_features+.5));

rise($('hq'),p(u,TM.question_mark-.6,TM.question_mark));rise($('qb3'),p(u,TM.question_mark,TM.question_mark+.5));
const ad=TM.question_mark+4.9;rise($('ads3'),p(u,ad,ad+.5));
AD.forEach((d,k)=>{const f=(t*.35+k/4)%1;d.setAttribute('cx',(260+630*f).toFixed(1));d.setAttribute('cy',(580-140*f).toFixed(1))});
rise($('wh3'),p(u,TM.busy_hamster,TM.busy_hamster+.5));
$('spk').setAttribute('transform','rotate('+((t*140)%360).toFixed(1)+' 1270 430)');
$('ham').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*9))).toFixed(1)+')');
rise($('learn3'),p(u,TM.busy_hamster+.8,TM.busy_hamster+1.3));

rise($('rl0'),p(u,TM.cohort_groups,TM.cohort_groups+.5));
COH.forEach((g,i)=>rise(g,p(u,TM.cohort_groups+.3+i*.3,TM.cohort_groups+.8+i*.3)));
rise($('rows4'),p(u,TM.funnel,TM.funnel+.5));
RB.forEach((q,i)=>{const a=TM.funnel+.6+q[2]*1.2+(i>>1)*.2;q[0].setAttribute('width',(200*q[1]*p(u,a,a+.6)).toFixed(1))});
ARC.forEach((a,i)=>a.setAttribute('opacity',p(u,TM.side_by_side+i*.4,TM.side_by_side+i*.4+.4)));
rise($('cmpL'),p(u,TM.side_by_side,TM.side_by_side+.5));

rise($('tot5'),p(u,TM.flat_lines,TM.flat_lines+.5));$('totp').style.opacity=1-.75*p(u,TM.mirror,TM.mirror+.6);
draw($('flat5'),p(u,TM.flat_lines+1.7,TM.flat_lines+3.2));rise($('fl5l'),p(u,TM.flat_lines+2.6,TM.flat_lines+3.1));
PN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.flat_lines+1.7+i*.3,TM.flat_lines+2+i*.3)));
rise($('pinl'),p(u,TM.flat_lines+1.7,TM.flat_lines+2.2));
rise($('mir5'),p(u,TM.mirror,TM.mirror+.6));rise($('rth5'),p(u,TM.mirror+5,TM.mirror+5.6));

KF.forEach((g,i)=>rise(g,p(u,TM.three_a+i*.4,TM.three_a+i*.4+.5)));
[TM.cause_effect,TM.open_report,TM.open_report+3].forEach((a,i)=>rise($('ki'+i),p(u,a,a+.5)));
rise($('vfail'),p(u,TM.cause_effect+6.6,TM.cause_effect+7.1));

rise($('nb7'),p(u,TM.notebook,TM.notebook+.5));rise($('ba7'),p(u,TM.before_after,TM.before_after+.5));
BA.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.before_after+.4+i*.15,TM.before_after+.7+i*.15)));
rise($('sp7'),p(u,TM.split_test,TM.split_test+.5));
const bk=(360*p(u,TM.split_test+1,TM.split_test+2.5)).toFixed(1);$('bA').setAttribute('width',bk);$('bB').setAttribute('width',bk);
rise($('eq7'),p(u,TM.split_test+5.4,TM.split_test+5.9));rise($('fin7'),p(u,TM.split_test+5.6,TM.split_test+6.2));

const md=TM.mystery_dash;rise($('gg'),p(u,md,md+.5));
$('ndl').setAttribute('transform','rotate('+(50*Math.sin(t*1.7)).toFixed(1)+' 1340 760)');
rise($('qa'),p(u,md+2.9,md+3.4));rise($('qb'),p(u,md+3.3,md+3.8));rise($('qc'),p(u,md+3.7,md+4.2));