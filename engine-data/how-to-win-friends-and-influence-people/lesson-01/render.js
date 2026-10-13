rise($('tb'),p(u,TM.title_card,TM.title_card+.6));
const ar=TM.title_card+3.4;
rise($('tc'),p(u,ar,ar+.4));
$('tp').setAttribute('transform','translate('+(u>=ar?3*Math.sin(t*9):0).toFixed(1)+' 0)');

rise($('cw'),p(u,TM.coworker,TM.coworker+.5));
rise($('pt'),p(u,TM.pointing_hand,TM.pointing_hand+.3));
const ex=470+520*p(u,TM.pointing_hand,TM.pointing_hand+.7);
$('arm').setAttribute('d','M450 590L'+ex.toFixed(1)+' 560');$('hand').setAttribute('cx',ex.toFixed(1));
rise($('fs'),p(u,TM.pointing_hand+.8,TM.pointing_hand+1.3));
rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('qq'),p(u,TM.question_mark+.8,TM.question_mark+1.3));

[TM.gangster,TM.handwritten,TM.prison_cell].forEach((a,i)=>rise($('k'+i),p(u,a,a+.5)));
const fl=Math.floor(t*3)%2;
$('sr0').setAttribute('fill',fl?'var(--loss)':'var(--gain)');$('sr1').setAttribute('fill',fl?'var(--gain)':'var(--loss)');

rise($('sh'),p(u,TM.shield,TM.shield+.4));
$('arw').setAttribute('transform','translate('+(330+385*p(u,TM.shield,TM.shield+.7)).toFixed(1)+' 525)');
$('arw').setAttribute('opacity',u>=TM.shield?1:0);
rise($('l0'),p(u,TM.shield+.6,TM.shield+1.1));
const cb=u>=TM.cracked_badge, hk=p(u,TM.cracked_badge,TM.cracked_badge+.4), hs=1+.25*Math.sin(Math.PI*hk);
$('hrtP').setAttribute('fill',cb?'var(--loss)':'var(--gain)');
$('hrt').setAttribute('transform','translate(900 562) scale('+hs.toFixed(3)+')');
$('crk').setAttribute('opacity',hk.toFixed(2));
rise($('l1'),p(u,TM.cracked_badge,TM.cracked_badge+.5));
rise($('cld'),p(u,TM.storm_cloud,TM.storm_cloud+.6));
$('cldw').setAttribute('transform','translate(0 '+(4*Math.sin(t*1.6)).toFixed(1)+')');
rise($('l2'),p(u,TM.storm_cloud+.3,TM.storm_cloud+.8));
rise($('dig'),p(u,TM.storm_cloud+4.1,TM.storm_cloud+4.7));

const ly=330+190*p(u,TM.battlefield+.6,TM.battlefield+3.6)+210*p(u,TM.general+.4,TM.general+1.8);
$('lee').setAttribute('transform','translate(420 '+ly.toFixed(1)+')');
$('lee').setAttribute('opacity',p(u,TM.battlefield,TM.battlefield+.5));
rise($('riv'),p(u,TM.river,TM.river+.5));
rise($('lin'),p(u,TM.river+.5,TM.river+1));
rise($('mea'),p(u,TM.river+1,TM.river+1.5));
rise($('ord'),p(u,TM.river+1.6,TM.river+2.1));
rise($('mq'),p(u,TM.general,TM.general+.4));
rise($('ltr'),p(u,TM.letter,TM.letter+.6));

const lp=p(u,TM.desk_drawer,TM.desk_drawer+1.2);
$('lt5').setAttribute('transform','translate(0 '+(220*lp).toFixed(1)+')');$('lt5').setAttribute('opacity',(1-lp).toFixed(2));
rise($('ns'),p(u,TM.desk_drawer+1,TM.desk_drawer+1.4));
rise($('fnd'),p(u,TM.desk_drawer+2.2,TM.desk_drawer+2.7));
rise($('tcl'),p(u,TM.thought_cloud,TM.thought_cloud+.7));
rise($('too'),p(u,TM.thought_cloud+6.2,TM.thought_cloud+6.8));

rise($('scl'),p(u,TM.balance_scale,TM.balance_scale+.5));
const ang=-8+22*p(u,TM.balance_scale+.6,TM.balance_scale+2),rd=ang*Math.PI/180,bc=260*Math.cos(rd),bs=260*Math.sin(rd);
$('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 520 280)');
$('panL').setAttribute('transform','translate('+(520-bc).toFixed(1)+' '+(280-bs).toFixed(1)+')');
$('panR').setAttribute('transform','translate('+(520+bc).toFixed(1)+' '+(280+bs).toFixed(1)+')');
rise($('oh'),p(u,TM.open_hands,TM.open_hands+.5));
RS.forEach((g,i)=>{const a=TM.open_hands+1+i*.5;rise(g,p(u,a,a+.4))});
rise($('rl'),p(u,TM.open_hands+2.6,TM.open_hands+3.1));
rise($('qt'),p(u,TM.quote_card,TM.quote_card+.6));

rise($('q0'),p(u,TM.pause_button,TM.pause_button+.5));
rise($('q1'),p(u,TM.notebook,TM.notebook+.5));
NL.forEach((l,i)=>{const a=TM.notebook+.6+i*.5;l.setAttribute('stroke-dashoffset',(140*(1-p(u,a,a+.6))).toFixed(1))});
rise($('stp'),p(u,TM.notebook+2.4,TM.notebook+2.8));
rise($('q2'),p(u,TM.notebook+6.2,TM.notebook+6.7));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
CD.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.6+i*.35?'var(--gain)':'var(--stage)'));
rise($('qa'),p(u,TM.calendar,TM.calendar+.5));
rise($('qb'),p(u,TM.calendar+.5,TM.calendar+1));
rise($('qc'),p(u,TM.calendar+4.6,TM.calendar+5.1));
rise($('qd'),p(u,TM.calendar+5.2,TM.calendar+5.7));