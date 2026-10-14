rise($('mega'),p(u,TM.megaphone,TM.megaphone+.5));
const fk=p(u,TM.megaphone+7.2,TM.megaphone+7.9);
$('megaB').setAttribute('transform','translate(1300 420) scale('+(1.1*(1-2*fk)).toFixed(3)+' 1.1)');
$('cone').setAttribute('class',fk>.5?'gain':'loss');
[0,1,2].forEach(i=>$('w'+i).setAttribute('opacity',((.35+.65*Math.abs(Math.sin(t*3-i)))*(1-fk)).toFixed(2)));

rise($('tv'),p(u,TM.tv_set,TM.tv_set+.5));
$('adT').setAttribute('opacity',Math.sin(t*8)>0?1:.35);
rise($('fac'),p(u,TM.factory,TM.factory+.5));
BX.forEach((b,i)=>b.setAttribute('x',(560+((i*110+t*60)%440)).toFixed(1)));
rise($('crowd1'),p(u,TM.crowd,TM.crowd+.5));
TG.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.crowd+.6+i*.1,TM.crowd+.9+i*.1)));
rise($('dec'),p(u,TM.crowd+4.5,TM.crowd+5));
BR.forEach((b,i)=>{const h=(170-i*20)*p(u,TM.crowd+4.5+i*.12,TM.crowd+4.9+i*.12);b.setAttribute('y',(840-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});

rise($('gd'),p(u,TM.godin,TM.godin+.5));
rise($('quote'),p(u,TM.godin+2.6,TM.godin+3.2));
rise($('arr'),p(u,TM.arrow,TM.arrow+.5));
const ak=p(u,TM.arrow+.5,TM.arrow+3);
$('arL').setAttribute('x2',(440+700*ak).toFixed(1));
$('arH').setAttribute('opacity',ak>.95?1:0);
$('trv').setAttribute('cx',(360+880*ak).toFixed(1));
$('trv').setAttribute('class',ak>.98?'gain':'ink');
rise($('job'),p(u,TM.arrow+5,TM.arrow+5.6));

rise($('bit'),p(u,TM.drill_bit,TM.drill_bit+.5));
const bx=p(u,TM.drill_bit+4.6,TM.drill_bit+5.2);
rise($('bX'),bx);
rise($('wall'),p(u,TM.hole,TM.hole+.5));
rise($('dig'),p(u,TM.hole+3.4,TM.hole+4));
$('digA').setAttribute('transform','translate(0 '+(8*Math.sin(t*3)).toFixed(1)+')');

rise($('k0'),p(u,SC[4][0]/K+.4,SC[4][0]/K+.9));
rise($('k1'),p(u,TM.shelf,TM.shelf+.5));
rise($('k2'),p(u,TM.tidy_room,TM.tidy_room+.5));
rise($('k3'),p(u,TM.proud_person,TM.proud_person+.5));
rise($('door'),p(u,TM.proud_person+7.4,TM.proud_person+8));

rise($('give'),p(u,TM.gift_box,TM.gift_box+.5));
const gk=p(u,TM.gift_box+3.8,TM.gift_box+5);
$('gift').setAttribute('transform','translate('+(320+200*gk).toFixed(1)+' 470)');
const got=gk>.98?'gain':'ink'; $('rcvH').setAttribute('class',got); $('rcvB').setAttribute('class',got);
rise($('tp'),p(u,TM.gift_box+3.8,TM.gift_box+4.3));
rise($('notp'),p(u,TM.gift_box+8.4,TM.gift_box+8.9));
stk('nS',235,370,p(u,TM.gift_box+9,TM.gift_box+9.6));
rise($('mir'),p(u,TM.mirror,TM.mirror+.5));
rise($('refl'),p(u,TM.mirror+.8,TM.mirror+1.4));

ENV.forEach((g,i)=>rise(g,p(u,TM.spam_pile+i*.25,TM.spam_pile+i*.25+.4)));
rise($('spam'),p(u,TM.spam_pile,TM.spam_pile+.4));
rise($('chain'),p(u,TM.broken_chain,TM.broken_chain+.5));
const dx=40*p(u,TM.broken_chain+.6,TM.broken_chain+1.2);
$('lkL').setAttribute('transform','translate('+(-dx).toFixed(1)+' 0)');
$('lkR').setAttribute('transform','translate('+dx.toFixed(1)+' 0)');
$('spk').setAttribute('opacity',(dx/40*(.6+.4*Math.abs(Math.sin(t*6)))).toFixed(2));
rise($('buy'),p(u,TM.happy_buyer,TM.happy_buyer+.5));
rise($('nob'),p(u,TM.happy_buyer+3.8,TM.happy_buyer+4.4));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
rise($('nbq'),p(u,TM.notebook+2.6,TM.notebook+3.1));
rise($('bfB'),p(u,TM.before_after,TM.before_after+.5));
rise($('aft'),p(u,TM.before_after+.8,TM.before_after+1.3));
$('rays').setAttribute('opacity',(.6+.4*Math.sin(t*3)).toFixed(2));
rise($('ff'),p(u,TM.before_after+3.4,TM.before_after+3.9));
stk('ffS',612,186,p(u,TM.before_after+4,TM.before_after+4.6));

rise($('q0'),p(u,TM.question,TM.question+.5));
rise($('qa'),p(u,TM.question+3,TM.question+3.5));
rise($('qb'),p(u,TM.question+3.4,TM.question+3.9));
rise($('qc'),p(u,TM.question+3.8,TM.question+4.3));
rise($('qg'),p(u,TM.question+4.4,TM.question+5));