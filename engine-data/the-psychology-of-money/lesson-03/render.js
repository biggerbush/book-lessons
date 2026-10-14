rise($('clk'),p(u,TM.title_clock,TM.title_clock+.6));
$('mh').setAttribute('transform','rotate('+((t*40)%360).toFixed(1)+' 1300 400)');
$('hh').setAttribute('transform','rotate('+((t*3.3)%360).toFixed(1)+' 1300 400)');
coins.forEach((c,i)=>rise(c,p(u,TM.title_clock+1+i*.6,TM.title_clock+1.4+i*.6)));

rise($('wb'),p(u,TM.buffett,TM.buffett+.5));
rise($('gen'),p(u,TM.buffett+3.8,TM.buffett+4.4));
$('gx').setAttribute('opacity',p(u,TM.question_mark+.8,TM.question_mark+1.2));
rise($('qm'),p(u,TM.question_mark,TM.question_mark+.6));

rise($('tl'),p(u,TM.timeline,TM.timeline+.6));
rise($('a10'),p(u,TM.age_ten,TM.age_ten+.5));
const rw=1100*p(u,TM.still_going,TM.still_going+2.5);
$('run').setAttribute('width',rw.toFixed(1));
$('wk').setAttribute('cx',(300+rw).toFixed(1));
$('wk').setAttribute('opacity',u>=TM.age_ten?1:0);
rise($('ret'),p(u,TM.still_going,TM.still_going+.5));
rise($('dec'),p(u,TM.still_going+1.8,TM.still_going+2.4));

rise($('ax'),p(u,TM.wealth_chart,TM.wealth_chart+.5));
rise($('tot'),p(u,TM.wealth_chart+.3,TM.wealth_chart+.8));
$('tv').textContent='$'+Math.round(84*p(u,TM.wealth_chart+.3,TM.wealth_chart+2))+'B';
rise($('late'),p(u,TM.wealth_chart+3,TM.wealth_chart+3.6));
rise($('aft'),p(u,TM.wealth_chart+3,TM.wealth_chart+3.6));
rise($('sb'),p(u,TM.wealth_chart+4,TM.wealth_chart+4.6));
const wp=p(u,TM.steep_curve,TM.steep_curve+3);
drawC($('wc'),cv(160,1100,780,480,10.64,wp),wp);
rise($('flat'),p(u,TM.steep_curve+.5,TM.steep_curve+1));
rise($('cmp'),p(u,TM.steep_curve+5.8,TM.steep_curve+6.4));

rise($('cardL'),p(u,TM.split_card,TM.split_card+.5));
rise($('cardR'),p(u,TM.split_card+2.4,TM.split_card+3));
rise($('real'),p(u,TM.short_career-.6,TM.short_career));
rise($('imag'),p(u,TM.short_career,TM.short_career+.5));
$('ib').setAttribute('width',(420*p(u,TM.short_career+.3,TM.short_career+2)).toFixed(1));
rise($('tp'),p(u,TM.tiny_pile,TM.tiny_pile+.6));

rise($('sim'),p(u,TM.simons,TM.simons+.6));
rise($('bfr'),p(u,TM.simons+6.2,TM.simons+6.8));
rise($('twr'),p(u,TM.two_towers,TM.two_towers+.4));
const tw=p(u,TM.two_towers,TM.two_towers+2);
$('tw0').setAttribute('y',(740-420*tw).toFixed(1));$('tw0').setAttribute('height',(420*tw).toFixed(1));
$('tw1').setAttribute('y',(740-100*tw).toFixed(1));$('tw1').setAttribute('height',(100*tw).toFixed(1));
rise($('bf10'),p(u,TM.two_towers+2,TM.two_towers+2.5));
rise($('st50'),p(u,TM.two_towers+3,TM.two_towers+3.5));
rise($('notyrs'),p(u,TM.two_towers+7.8,TM.two_towers+8.4));

rise($('sln'),p(u,TM.straight_line,TM.straight_line+.6));
rise($('lg1'),p(u,TM.small_steps,TM.small_steps+.5));
const cp=.55*p(u,TM.small_steps,TM.small_steps+3)+.45*p(u,TM.late_payoff,TM.late_payoff+2.5);
drawC($('cc'),cv(160,1000,760,480,5,cp),cp);
DT.forEach((d,i)=>rise(d,p(u,TM.small_steps+i*.5,TM.small_steps+i*.5+.3)));
rise($('bor'),p(u,TM.small_steps+.4,TM.small_steps+1));
rise($('lp'),p(u,TM.late_payoff+1.8,TM.late_payoff+2.4));
rise($('ppl'),p(u,TM.small_steps+1,TM.small_steps+1.6));
PP.forEach((g,i)=>{if(i===2)return;const k=p(u,TM.late_payoff+.8+i*.25,TM.late_payoff+1.4+i*.25);g.setAttribute('opacity',(1-.8*k).toFixed(2));g.setAttribute('transform','translate(0 '+(60*k).toFixed(1)+')')});
rise($('swp'),p(u,TM.late_payoff+2,TM.late_payoff+2.6));

rise($('spk'),p(u,TM.steady_saver,TM.steady_saver+.6));
const sp=p(u,TM.steady_saver+3.8,TM.steady_saver+6.8);
drawC($('std'),cv(160,1440,540,280,1.5,sp),sp);
rise($('stdl'),p(u,TM.steady_saver+5.5,TM.steady_saver+6.1));
rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
YR.forEach((r,i)=>r.setAttribute('fill',u>=TM.calendar+.5+i*.3?'var(--gain)':'var(--stage)'));
rise($('heavy'),p(u,TM.calendar+6.2,TM.calendar+6.8));

rise($('look'),p(u,TM.savings_jar,TM.savings_jar+.5));
rise($('jar'),p(u,TM.savings_jar+.3,TM.savings_jar+.8));
const jh=20+150*p(u,TM.savings_jar+.5,TM.mirror+4);
$('jfill').setAttribute('y',(688-jh).toFixed(1));$('jfill').setAttribute('height',jh.toFixed(1));
rise($('qa'),p(u,TM.mirror,TM.mirror+.5));
rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9));
rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
rise($('stay'),p(u,TM.mirror+1.6,TM.mirror+2.1));