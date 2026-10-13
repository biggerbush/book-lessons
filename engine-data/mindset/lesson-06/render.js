rise($('hOut'),p(u,TM.heart,TM.heart+.5));
HS.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.heart+.3+i*.03,TM.heart+.6+i*.03)));

rise($('cpl'),p(u,TM.couple,TM.couple+.5));
rise($('cloud'),p(u,TM.thought_cloud,TM.thought_cloud+.5));
rise($('fx'),p(u,TM.thought_cloud+5.8,TM.thought_cloud+6.3));
rise($('cas'),p(u,TM.castle,TM.castle+.6));
rise($('pd'),p(u,TM.castle+1.6,TM.castle+2.1));

const ck=p(u,TM.crack,TM.crack+1.2),sp2=p(u,TM.crack+5.8,TM.crack+6.6);
$('crk').setAttribute('stroke-dashoffset',(1-ck).toFixed(3));$('crk').setAttribute('opacity',(1-sp2).toFixed(2));
$('hL').setAttribute('transform','translate('+(-40*sp2).toFixed(1)+' 0) rotate('+(-6*sp2).toFixed(2)+' 500 700)');
$('hR').setAttribute('transform','translate('+(40*sp2).toFixed(1)+' 0) rotate('+(6*sp2).toFixed(2)+' 500 700)');
const sk=p(u,TM.verdict_stamp,TM.verdict_stamp+.4);
$('stamp').setAttribute('transform','translate(1130 480) rotate(-8) scale('+(1.3-.3*sk).toFixed(3)+')');$('stamp').setAttribute('opacity',sk);
rise($('eff'),p(u,TM.verdict_stamp+4.1,TM.verdict_stamp+4.6));
rise($('effq'),p(u,TM.verdict_stamp+4.8,TM.verdict_stamp+5.4));

rise($('arg'),p(u,TM.argument,TM.argument+.5));
rise($('lt0'),p(u,TM.label_tag,TM.label_tag+.5));
rise($('lt1'),p(u,TM.label_tag+1.2,TM.label_tag+1.7));
rise($('blm'),p(u,TM.blame_arrow,TM.blame_arrow+.6));
rise($('lock'),p(u,TM.blame_arrow+.8,TM.blame_arrow+1.3));
rise($('res'),p(u,TM.blame_arrow+2,TM.blame_arrow+2.6));

rise($('paper'),p(u,TM.survey_paper,TM.survey_paper+.5));
rise($('fxc'),p(u,TM.sad_figure,TM.sad_figure+.5));
rise($('fist'),p(u,TM.revenge_fist,TM.revenge_fist+.4));
rise($('grc'),p(u,TM.open_hands,TM.open_hands+.5));
P4.forEach((g,i)=>rise(g,p(u,TM.open_hands+.8+i*.8,TM.open_hands+1.2+i*.8)));
rise($('fwd'),p(u,TM.open_hands+3.2,TM.open_hands+3.8));

rise($('chairs'),p(u,TM.two_chairs,TM.two_chairs+.5));
rise($('tbx'),p(u,TM.toolbox,TM.toolbox+.5));
SK.forEach((g,i)=>rise(g,p(u,TM.toolbox+.6+i*.6,TM.toolbox+1+i*.6)));
rise($('pot'),p(u,TM.seedling-2.2,TM.seedling-1.7));
const gk=p(u,TM.seedling,TM.seedling+2.5),top=620-240*gk;
$('stem').setAttribute('d','M1290 620V'+top.toFixed(1));$('stem').setAttribute('opacity',gk>0?1:0);
$('lvs').setAttribute('transform','translate(1290 '+top.toFixed(1)+') scale('+gk.toFixed(3)+')');
rise($('gww'),p(u,TM.seedling+1.5,TM.seedling+2));

// friends who grow you: a hand up, then a boost
rise($('frd'),p(u,TM.friend_pair,TM.friend_pair+.5));
rise($('goal'),p(u,TM.friend_pair+2.6,TM.friend_pair+3.1));
ST.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.ladder+i*.12,TM.ladder+.4+i*.12)));
const L6=TM.ladder,E6=(a,b)=>p(u,L6+a,L6+b);
const pull6=E6(1.5,2.2)+E6(2.3,3),lift6=E6(3.8,4.5),va6=1+pull6+lift6,vb6=pull6+E6(4.8,5.3);
const pa=P6(va6,(lift6>0&&lift6<1)?75:45),pb=P6(vb6,45);
CA.setAttribute('transform','translate('+pa[0].toFixed(1)+' '+pa[1].toFixed(1)+')');
CB.setAttribute('transform','translate('+pb[0].toFixed(1)+' '+pb[1].toFixed(1)+')');
const k1=E6(.8,1.3)*(1-E6(3,3.3)),Mx=(pa[0]+pb[0])/2,My=pa[1]+125;
const ax1=pa[0]-38,ay1=pa[1]+108,bx1=pb[0]+38,by1=pb[1]+108;
setL('aA',ax1,ay1,ax1+(Mx-ax1)*k1,ay1+(My-ay1)*k1,k1>.001?1:0);
setL('aB',bx1,by1,bx1+(Mx-bx1)*k1,by1+(My-by1)*k1,k1>.001?1:0);
$('hnd').setAttribute('cx',Mx.toFixed(1));$('hnd').setAttribute('cy',My.toFixed(1));$('hnd').setAttribute('opacity',cl((k1-.85)/.15).toFixed(2));
const k2=E6(3.4,3.8)*(1-E6(4.5,4.8));
setL('pu1',pb[0]+40,pb[1]+88,pb[0]+40+126*k2,pb[1]+88-58*k2,k2>.001?1:0);
setL('pu2',pb[0]+30,pb[1]+92,pb[0]+30+134*k2,pb[1]+92-40*k2,k2>.001?1:0);
$('upc').setAttribute('transform','translate('+(pa[0]-100).toFixed(1)+' '+(pa[1]+40).toFixed(1)+')');$('upc').setAttribute('opacity',Math.sin(Math.PI*lift6).toFixed(2));
rise($('tg1'),E6(.8,1.3));
rise($('tg2'),E6(3.4,3.9));
rise($('sto'),E6(4.6,5.1));

rise($('bub'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
rise($('bt'),p(u,TM.speech_bubble+4.2,TM.speech_bubble+4.7));
$('bst').setAttribute('x2',(150+390*p(u,TM.speech_bubble+5,TM.speech_bubble+5.6)).toFixed(1));
rise($('dish'),p(u,TM.speech_bubble+4.6,TM.speech_bubble+5.1));
rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('bar'),p(u,TM.practice_bar,TM.practice_bar+.5));
$('barF').setAttribute('width',(940*p(u,TM.practice_bar+.4,TM.practice_bar+3)).toFixed(1));
$('gst').setAttribute('x2',(1132+172*p(u,TM.practice_bar+1.5,TM.practice_bar+2)).toFixed(1));

rise($('ml'),p(u,TM.mirror,TM.mirror+.5));
rise($('mir'),p(u,TM.mirror+.2,TM.mirror+.7));
const mk8=p(u,TM.mirror+4.1,TM.mirror+6);
$('mcr').setAttribute('opacity',(1-mk8).toFixed(2));
$('msg').setAttribute('transform','translate(1360 800) scale('+mk8.toFixed(3)+')');
rise($('qa'),p(u,TM.mirror+4.1,TM.mirror+4.6));rise($('qb'),p(u,TM.mirror+4.5,TM.mirror+5));rise($('qc'),p(u,TM.mirror+4.9,TM.mirror+5.4));