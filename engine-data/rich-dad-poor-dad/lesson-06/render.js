BG.forEach((e,i)=>{const k=p(u,TM.burger+i*.3,TM.burger+i*.3+.6);e.setAttribute('opacity',k);e.setAttribute('transform','translate(0 '+(-90*(1-k)).toFixed(1)+')')});
rise($('tgear'),p(u,TM.burger+4.6,TM.burger+5.2));gr.setAttribute('transform','rotate('+(t*40%360).toFixed(1)+' 1290 230)');

rise($('ppl'),p(u,TM.reporter,TM.reporter+.5));rise($('dream'),p(u,TM.reporter+4.2,TM.reporter+4.8));
rise($('course'),p(u,TM.sales_course,TM.sales_course+.5));
const sh=u>TM.sales_course+3.4&&u<TM.sales_course+4.4?8*Math.sin(t*40):0;$('courseIn').setAttribute('transform','translate('+sh.toFixed(1)+' 0)');
rise($('dip'),p(u,TM.sales_course+3.4,TM.sales_course+3.9));rise($('ins'),p(u,TM.sales_course+4,TM.sales_course+4.5));

rise($('book'),p(u,TM.book_cover,TM.book_cover+.5));rise($('band'),p(u,TM.book_cover+3.4,TM.book_cover+3.9));rise($('nbw'),p(u,TM.book_cover+4,TM.book_cover+4.5));
BR.forEach((b,i)=>{const a=i<3?TM.sales_chart+i*.3:TM.sales_chart+4.6,k=p(u,a,a+.8);b[0].setAttribute('y',680-b[1]*k);b[0].setAttribute('height',b[1]*k)});
rise($('blbl'),p(u,TM.sales_chart,TM.sales_chart+.5));rise($('miss'),p(u,TM.sales_chart+4.8,TM.sales_chart+5.3));

rise($('chef'),p(u,TM.chef,TM.chef+.5));rise($('globe'),p(u,TM.franchise,TM.franchise+.5));
PN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.franchise+.4+i*.2,TM.franchise+.7+i*.2)));
BX.forEach((b,i)=>{const a=TM.blueprint+i*.5;rise(b[0],p(u,a,a+.4));b[1].setAttribute('opacity',p(u,a,a+.4))});
rise($('poor3'),p(u,TM.blueprint+5.4,TM.blueprint+6));

rise($('lad'),p(u,TM.ladder,TM.ladder+.5));rise($('lad2'),p(u,TM.ladder+.4,TM.ladder+.9));
$('climb').setAttribute('transform','translate(0 '+(620-350*p(u,TM.ladder+.5,TM.ladder+4)).toFixed(1)+')');
rise($('tb'),p(u,TM.toolbox,TM.toolbox+.5));rise($('rich'),p(u,TM.toolbox+.4,TM.toolbox+.9));
rise($('parts'),p(u,TM.toolbox+5,TM.toolbox+5.4));TL.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.toolbox+5.2+i*.3,TM.toolbox+5.5+i*.3)));
rise($('rm'),p(u,TM.toolbox+6,TM.toolbox+6.5));

rise($('st0'),p(u,TM.marines,TM.marines+.5));rise($('st1'),p(u,TM.copier,TM.copier+.5));rise($('st2'),p(u,TM.trophy,TM.trophy+.5));
const rx=320+480*p(u,TM.copier,TM.copier+1.5)+480*p(u,TM.trophy,TM.trophy+1.5);
$('rpath').setAttribute('x2',rx.toFixed(1));$('rdot').setAttribute('cx',rx.toFixed(1));$('rdot').setAttribute('opacity',p(u,TM.marines,TM.marines+.5));

CP.forEach((g,i)=>rise(g,p(u,TM.speech_bubble+i*1.5,TM.speech_bubble+i*1.5+.5)));
rise($('eq'),p(u,TM.handshake,TM.handshake+.5));[0,1,2].forEach(i=>rise($('m'+i),p(u,TM.handshake+1+i*.6,TM.handshake+1.5+i*.6)));
rise($('suit'),p(u,TM.suitcase,TM.suitcase+.5));$('suitIn').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');
ST.forEach((g,i)=>rise(g,p(u,TM.suitcase+.6+i*.4,TM.suitcase+1+i*.4)));

rise($('post'),p(u,TM.signpost,TM.signpost+.5));rise($('sign2'),p(u,TM.signpost+1,TM.signpost+1.5));rise($('sign1'),p(u,TM.signpost+3.5,TM.signpost+4));
rise($('cal'),p(u,TM.calendar,TM.calendar+.5));CL.forEach((c,i)=>c.setAttribute('fill',i<3&&u>=TM.calendar+1+i*.4?'var(--gain)':'var(--line)'));
rise($('cl1'),p(u,TM.calendar+1.5,TM.calendar+2));
rise($('nb'),p(u,TM.notebook,TM.notebook+.5));NR.forEach((r,i)=>{rise(r[0],p(u,TM.notebook+.5+i*.4,TM.notebook+.9+i*.4));if(r[1])r[1].setAttribute('opacity',p(u,TM.notebook+3,TM.notebook+3.4))});

rise($('qa'),p(u,TM.target,TM.target+.5));rise($('qb'),p(u,TM.target+.4,TM.target+.9));
rise($('tg'),p(u,TM.target+1,TM.target+1.5));const ak=p(u,TM.target+1.6,TM.target+2.2);
$('arr').setAttribute('opacity',ak>0?1:0);$('arr').setAttribute('transform','translate('+(200*(1-ak)).toFixed(1)+' '+(-120*(1-ak)).toFixed(1)+')');
rise($('qm'),p(u,TM.target+4.6,TM.target+5.2));