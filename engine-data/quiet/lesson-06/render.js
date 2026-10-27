rise($('no0'),p(u,TM.bus_seat+4.8,TM.bus_seat+5.3));

rise($('when'),p(u,TM.montgomery,TM.montgomery+.5));
const bx=-1500*(1-p(u,TM.city_bus,TM.city_bus+1.8));
$('bus').setAttribute('transform','translate('+bx.toFixed(1)+' '+(1.5*Math.sin(t*9)).toFixed(1)+')');
rise($('rosaG'),p(u,TM.rosa_parks,TM.rosa_parks+.5)); rise($('rlab'),p(u,TM.rosa_parks+.3,TM.rosa_parks+.8));
rise($('drv'),p(u,TM.driver,TM.driver+.5)); rise($('stay'),p(u,TM.driver+3,TM.driver+3.5)); rise($('arr'),p(u,TM.driver+3.6,TM.driver+4));

rise($('sub2'),p(u,TM.portrait,TM.portrait+.5)); rise($('por'),p(u,TM.portrait,TM.portrait+.6));
rise($('loud'),p(u,TM.portrait+4.1,TM.portrait+4.6));
C2.forEach((g,i)=>rise(g,p(u,TM.soft_voice+i*.5,TM.soft_voice+i*.5+.4)));
rise($('tired'),p(u,TM.soft_voice+3.4,TM.soft_voice+3.9));
rise($('cour'),p(u,TM.courage,TM.courage+.6)); $('frame').setAttribute('stroke',u>=TM.courage?'var(--gain)':'var(--line)');

rise($('parks3'),p(u,SC[3][0]/K+.2,SC[3][0]/K+.7));
const on3=p(u,TM.spark,TM.spark+.5);
RG.forEach((c,k)=>{const q=(t*.5+k/3)%1;c.setAttribute('r',(50+130*q).toFixed(1));c.setAttribute('opacity',(on3*(1-q)).toFixed(2))});
rise($('boy'),p(u,TM.spark+.4,TM.spark+.9));
rise($('kg'),p(u,TM.king,TM.king+.5)); $('kw').setAttribute('opacity',(.5+.5*Math.abs(Math.sin(t*3))).toFixed(2));
rise($('both'),p(u,TM.two_hands,TM.two_hands+.5)); rise($('each'),p(u,TM.two_hands+5.8,TM.two_hands+6.4));

rise($('mag'),p(u,TM.magnet,TM.magnet+.5));
const on4=p(u,TM.magnet+.3,TM.magnet+.8);
D4.forEach((d,i)=>{const q=(t*.4+i/6)%1,y0=340+(i*37)%180;d.setAttribute('cx',(740-170*q).toFixed(1));d.setAttribute('cy',(y0+(430-y0)*q).toFixed(1));d.setAttribute('opacity',(on4*(1-q*q)).toFixed(2))});
rise($('sub4'),p(u,TM.magnet+3.4,TM.magnet+3.9));
ST.forEach((g,i)=>rise(g,p(u,TM.steps+i*1.4,TM.steps+i*1.4+.5)));
rise($('tide'),p(u,TM.tide,TM.tide+.5));
const gv=p(u,TM.tide+.5,TM.tide+4); $('groove').setAttribute('rx',(60*gv).toFixed(1)); $('groove').setAttribute('ry',(18*gv).toFixed(1));
const dq=(t%1.2)/1.2; $('drop').setAttribute('cy',(640+80*dq).toFixed(1)); $('drop').setAttribute('opacity',(1-dq*dq).toFixed(2));

rise($('sub5'),p(u,TM.gandhi,TM.gandhi+.5)); rise($('gd'),p(u,TM.gandhi,TM.gandhi+.5));
rise($('shd'),p(u,TM.shield,TM.shield+.5));
rise($('tiles'),p(u,TM.few_words,TM.few_words+.5));
const fk=p(u,TM.few_words+1.2,TM.few_words+2.6);
TL.forEach(o=>{if(o.j<0){o.g.setAttribute('opacity',(1-.85*fk).toFixed(2))}else{o.g.setAttribute('transform','translate('+(o.dx*fk).toFixed(1)+' '+(o.dy*fk).toFixed(1)+')');const c=fk>.5?'var(--gain)':'var(--muted)';o.r.setAttribute('stroke',c);o.l.setAttribute('stroke',c)}});
rise($('fw'),p(u,TM.few_words+2.6,TM.few_words+3.1)); rise($('wt'),p(u,TM.few_words+5.4,TM.few_words+6));

[TM.listener,TM.trust,TM.clock,TM.firm_ground].forEach((a,i)=>rise($('k'+i),p(u,a,a+.5)));
LD.forEach((d,i)=>d.setAttribute('cx',(236+70*((t*.6+i/3)%1)).toFixed(1)));
$('tm').setAttribute('width',(230*p(u,TM.trust+.5,TM.trust+2.5)).toFixed(1));
$('hand').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 975 400)');

rise($('sub7'),p(u,TM.notebook,TM.notebook+.5));
rise($('t0'),p(u,TM.one_cause,TM.one_cause+.5)); rise($('t1'),p(u,TM.script_card,TM.script_card+.5)); rise($('t2'),p(u,TM.small_steps,TM.small_steps+.5));
D7.forEach((c,i)=>c.setAttribute('fill',u>=TM.small_steps+.4+i*.35?'var(--gain)':'var(--line)'));
rise($('cons'),p(u,TM.small_steps+4.2,TM.small_steps+4.8));

rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.4,TM.question+.9)); rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('no8'),p(u,TM.question+1.4,TM.question+1.9)); rise($('tw'),p(u,TM.question+6.2,TM.question+6.7));