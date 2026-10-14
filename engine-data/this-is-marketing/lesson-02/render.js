const k0=p(u,TM.crowd+6.2,TM.crowd+6.8);
TD.forEach(([c,inC],i)=>{const a=TM.crowd+i*.03;c.setAttribute('opacity',(p(u,a,a+.3)*(inC?1:1-.75*k0)).toFixed(3));c.setAttribute('class',inC&&k0>.5?'gain':'ink')});
$('tring').setAttribute('opacity',k0.toFixed(2));$('tring').setAttribute('r',(140-70*k0).toFixed(1));

rise($('tv'),p(u,TM.tv_screen,TM.tv_screen+.5));
const fd=p(u,TM.average_box+4.6,TM.average_box+5.2);
$('tvw').setAttribute('opacity',(1-.65*fd).toFixed(2));
WV.forEach((w,i)=>w.setAttribute('opacity',(p(u,TM.tv_screen+.4,TM.tv_screen+.8)*(1-fd)*(.4+.6*Math.abs(Math.sin(t*3-i*.8)))).toFixed(2)));
MS.forEach((m,i)=>rise(m,p(u,TM.tv_screen+.6+i*.03,TM.tv_screen+.9+i*.03)));
rise($('avg'),p(u,TM.average_box,TM.average_box+.5));rise($('avgto'),p(u,TM.average_box+.8,TM.average_box+1.3));rise($('fade'),fd);

const mg=p(u,TM.magnifier,TM.magnifier+1.5);
rise($('mag'),p(u,TM.magnifier,TM.magnifier+.4));
$('magi').setAttribute('transform','translate('+(1400-340*mg).toFixed(1)+' '+(300+220*mg).toFixed(1)+')');
rise($('qmany'),p(u,TM.magnifier+.3,TM.magnifier+.8));strk('sk2',300,p(u,TM.magnifier+2.2,TM.magnifier+2.8));rise($('qfew'),p(u,TM.magnifier+2.6,TM.magnifier+3.1));
const sc=u>=TM.small_circle;CL.forEach(c=>c.setAttribute('class',sc?'gain':'ink'));
rise($('hl'),p(u,TM.small_circle,TM.small_circle+.5));rise($('svm'),p(u,TM.small_circle+.4,TM.small_circle+.9));rise($('svm2'),p(u,TM.small_circle+4.9,TM.small_circle+5.5));

rise($('bull'),p(u,TM.bullseye,TM.bullseye+.5));
const ar=p(u,TM.bullseye+.3,TM.bullseye+1);
$('arri').setAttribute('transform','translate('+(400+300*(1-ar)).toFixed(1)+' '+(520-300*(1-ar)).toFixed(1)+')');$('arrow').setAttribute('opacity',ar>0?1:0);
[.8,2.6,6.2,6.8].forEach((d,i)=>rise($('k'+i),p(u,TM.bullseye+d,TM.bullseye+d+.5)));
rise($('f3a'),p(u,TM.smile,TM.smile+.5));$('mk3').setAttribute('cx',(820+580*p(u,TM.smile+.6,TM.smile+2)).toFixed(1));rise($('f3b'),p(u,TM.smile+1.7,TM.smile+2.2));

rise($('h41'),p(u,TM.designer,TM.designer+.5));rise($('dz1'),p(u,TM.designer+.3,TM.designer+.8));
CD.forEach((c,i)=>rise(c,p(u,TM.card_pile+i*.08,TM.card_pile+i*.08+.3)));rise($('price'),p(u,TM.card_pile+1.2,TM.card_pile+1.7));
rise($('h42'),p(u,TM.bakery,TM.bakery+.5));rise($('bak'),p(u,TM.bakery+.2,TM.bakery+.7));rise($('dz2'),p(u,TM.bakery+.4,TM.bakery+.9));
CH4.forEach((c,i)=>rise(c,p(u,TM.portfolio+i*.7,TM.portfolio+i*.7+.4)));rise($('obv'),p(u,TM.portfolio+4.2,TM.portfolio+4.7));

const E=TM.empty_chair;
rise($('chairg'),p(u,E,E+.5));
$('qm5').setAttribute('opacity',(p(u,E+3,E+3.5)*(1-p(u,E+6.4,E+6.8))).toFixed(2));
$('rep').setAttribute('opacity',(.4*p(u,E+6.4,E+7)*(1-p(u,E+9,E+9.5))).toFixed(2));
rise($('sh'),p(u,E+6.4,E+6.9));strk('sk5',330,p(u,E+9,E+9.5));rise($('gap'),p(u,E+9.4,E+9.9));
const gc=u>=E+9.4?'var(--gain)':'var(--ink)';$('chrh').style.stroke=gc;$('chrb').style.stroke=gc;
HT.forEach((h,i)=>h.setAttribute('opacity',p(u,TM.heart+i*.2,TM.heart+i*.2+.4).toFixed(2)));rise($('yes5'),p(u,TM.heart+1.2,TM.heart+1.8));

const D=TM.door;
rise($('door6'),p(u,D,D+.5));rise($('lp6'),p(u,D+1,D+1.5));rise($('scary'),p(u,D+5.8,D+6.3));
const wb=u>D+5.8&&u<TM.shield?3*Math.sin(t*14):0;$('leaf').setAttribute('transform','translate('+wb.toFixed(1)+' 0)');
rise($('shield'),p(u,TM.shield,TM.shield+.5));
$('lp6w').setAttribute('transform','translate('+(-50*p(u,TM.shield+.3,TM.shield+1.2)).toFixed(1)+' 0)');
rise($('rp6'),p(u,TM.shield+1,TM.shield+1.5));rise($('yes6'),p(u,TM.shield+1.6,TM.shield+2.1));rise($('nb6'),p(u,TM.shield+2.4,TM.shield+3));

const rk=p(u,TM.ripple,TM.ripple+.5);rise($('core'),rk);
RP.forEach((c,k)=>{const ph=(t*.45+k/3)%1;c.setAttribute('r',(50+230*ph).toFixed(1));c.setAttribute('opacity',((1-ph)*rk).toFixed(2))});
RG.forEach((g,j)=>rise(g,p(u,TM.network+j*1.5,TM.network+j*1.5+.6)));
rise($('seed'),p(u,TM.seedling,TM.seedling+.6));rise($('sm7'),p(u,TM.seedling+.6,TM.seedling+1.2));

rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+.4,TM.question+.9));
rise($('g8'),p(u,TM.question+1,TM.question+1.5));
rise($('qc'),p(u,TM.question+4.5,TM.question+5));rise($('qd'),p(u,TM.question+4.9,TM.question+5.4));