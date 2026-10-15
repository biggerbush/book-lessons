rise($('raisebox'),p(u,TM.raise_box,TM.raise_box+.6));
const T0=$('texp');T0.setAttribute('opacity',p(u,TM.raise_box+1.5,TM.raise_box+2));T0.setAttribute('transform','translate(0 '+(470-200*p(u,TM.raise_box+2,TM.raise_box+4)).toFixed(1)+')');

rise($('scl'),p(u,TM.scale,TM.scale+.6));
const rp=p(u,TM.results_pile,TM.results_pile+.8),ep=p(u,TM.expect_pile,TM.expect_pile+.8),th=(ep-rp)*.16,bc=330*Math.cos(th),bs=330*Math.sin(th);
B.setAttribute('d','M'+(800-bc).toFixed(1)+' '+(330-bs).toFixed(1)+'L'+(800+bc).toFixed(1)+' '+(330+bs).toFixed(1));
PL.setAttribute('transform','translate('+(800-bc).toFixed(1)+' '+(330-bs).toFixed(1)+')');PR.setAttribute('transform','translate('+(800+bc).toFixed(1)+' '+(330+bs).toFixed(1)+')');
rise(RB,rp);rise(EB,ep);rise($('fml'),p(u,TM.expect_pile+4.2,TM.expect_pile+4.8));

rise($('fr'),p(u,TM.two_friends,TM.two_friends+.6));rise($('lo'),p(u,TM.low_bar,TM.low_bar+.6));rise($('hi'),p(u,TM.high_bar,TM.high_bar+.6));rise($('moods'),p(u,TM.high_bar+3.4,TM.high_bar+4));

rise($('h50'),p(u,TM.house_1950,TM.house_1950+.6));rise($('today'),p(u,TM.small_home,TM.small_home+.6));
rise($('modest'),p(u,TM.small_home+5,TM.small_home+5.6));rise($('well'),p(u,TM.small_home+8.4,TM.small_home+9));

HS.forEach((g,i)=>rise(g,p(u,TM.street+i*.3,TM.street+i*.3+.5)));
rise($('eqs'),p(u,TM.neighbour,TM.neighbour+.6));rise($('sim'),p(u,TM.neighbour+.4,TM.neighbour+1));
const gk=p(u,TM.neighbour+5.8,TM.neighbour+7);rise($('gapg'),p(u,TM.neighbour+5.8,TM.neighbour+6.2));
$('rb').setAttribute('width',(860*gk).toFixed(1));$('eb').setAttribute('width',(900*gk).toFixed(1));

const ik=p(u,TM.income_gap,TM.income_gap+1.6),xk=p(u,TM.rising_arrow,TM.rising_arrow+1.6);
L5[0].setAttribute('points',curve(F5[0],ik));L5[1].setAttribute('points',curve(F5[1],ik));L5[2].setAttribute('points',curve(F5[2],xk));
L5[2].setAttribute('opacity',u>=TM.rising_arrow?1:0);
$('lb0').setAttribute('opacity',p(u,TM.income_gap+1.4,TM.income_gap+1.8));$('lb1').setAttribute('opacity',p(u,TM.income_gap+1.4,TM.income_gap+1.8));$('lb2').setAttribute('opacity',p(u,TM.rising_arrow+1.4,TM.rising_arrow+1.8));
rise($('tv'),p(u,TM.tv_screen,TM.tv_screen+.6));rise($('behind'),p(u,TM.rising_arrow+3.4,TM.rising_arrow+4));

rise($('dls'),p(u,TM.two_dials,TM.two_dials+.6));
const pw=p(u,TM.two_dials+4.6,TM.two_dials+6.6),rv=.5+.15*pw+(u>TM.two_dials+4.6&&u<TM.expect_dial?.02*Math.sin(t*9):0),ev=.75-.45*p(u,TM.expect_dial,TM.expect_dial+1.5);
needle(N1,480,rv);needle(N2,1120,ev);
$('hbar').setAttribute('width',(1000*cl(.3+(rv-.5)*.6+(.75-ev)*1.3)).toFixed(1));
rise($('wh'),p(u,TM.two_dials+4.6,TM.two_dials+5.2));rise($('lb'),p(u,TM.expect_dial,TM.expect_dial+.6));rise($('strive'),p(u,TM.expect_dial+5.4,TM.expect_dial+6));

rise($('nb'),p(u,TM.notebook,TM.notebook+.6));
NL.forEach((l,i)=>l.setAttribute('x2',(200+420*p(u,TM.notebook+1+i*.8,TM.notebook+1.8+i*.8)).toFixed(1)));
rise($('mir'),p(u,TM.mirror,TM.mirror+.6));
const ph=p(u,TM.mirror+3.4,TM.mirror+4);$('refl').setAttribute('opacity',(1-ph).toFixed(2));rise($('phone'),ph);rise($('reel'),p(u,TM.mirror+4,TM.mirror+4.6));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('qm'),p(u,TM.question_mark+1.2,TM.question_mark+1.8));rise($('nudge'),p(u,TM.question_mark+5.4,TM.question_mark+6));
$('nbar').setAttribute('transform','translate(0 '+(640+48*p(u,TM.question_mark+6,TM.question_mark+7.2)).toFixed(1)+')');