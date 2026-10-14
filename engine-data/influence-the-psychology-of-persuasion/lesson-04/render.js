TC.forEach((g,i)=>rise(g,p(u,TM.crowd_look+i*.25,TM.crowd_look+i*.25+.5)));
const yw=p(u,TM.crowd_look+2,TM.crowd_look+4.5);
$('t_you').setAttribute('transform','translate('+(1040+342*yw).toFixed(1)+' '+(-4*Math.abs(Math.sin(yw*Math.PI*6))).toFixed(1)+')');

rise($('q1'),p(u,TM.question_mark,TM.question_mark+.5));
$('qm').setAttribute('transform','rotate('+(8*Math.sin(t*2)).toFixed(1)+' 260 350)');
rise($('p1row'),p(u,TM.people_row,TM.people_row+.5));
R1.forEach((g,i)=>rise(g,p(u,TM.people_row+.2+i*.2,TM.people_row+.6+i*.2)));
rise($('p1ok'),p(u,TM.thumbs_up,TM.thumbs_up+.5));

rise($('tv'),p(u,TM.tv_set,TM.tv_set+.5));
HA.forEach((h,i)=>{const on=p(u,TM.tv_set+1+i*.2,TM.tv_set+1.4+i*.2);h.setAttribute('opacity',on.toFixed(2));h.setAttribute('transform','translate(0 '+(-5*Math.abs(Math.sin(t*5+i*1.7))).toFixed(1)+')')});
rise($('view2'),p(u,TM.viewers,TM.viewers+.5)); rise($('bub2'),p(u,TM.viewers+1,TM.viewers+1.5));
rise($('meter2'),p(u,TM.laugh_meter,TM.laugh_meter+.5));
$('barW').setAttribute('width',(480*p(u,TM.laugh_meter+.6,TM.laugh_meter+2.4)).toFixed(1));
rise($('funny2'),p(u,TM.laugh_meter+3,TM.laugh_meter+3.5)); rise($('fake2'),p(u,TM.laugh_meter+5.6,TM.laugh_meter+6.2));

rise($('jar'),p(u,TM.tip_jar,TM.tip_jar+.5));
BL.forEach((b,i)=>{const a=TM.dollar_bills+i*.6,k=p(u,a,a+.8);b.setAttribute('opacity',cl(lin(u,a,a+.3)).toFixed(2));b.setAttribute('transform','translate(0 '+(-250*(1-k)).toFixed(1)+')')});
rise($('b3lab'),p(u,TM.dollar_bills+.5,TM.dollar_bills+1));
rise($('cust'),p(u,TM.dollar_bills+7.7,TM.dollar_bills+8.2));
rise($('ad'),p(u,TM.ad_crowd,TM.ad_crowd+.5));
ADH.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.ad_crowd+.4+i*.05,TM.ad_crowd+.7+i*.05)));

rise($('fogp'),p(u,TM.fog,TM.fog+.5));
FW.forEach((w,i)=>w.setAttribute('transform','translate('+(20*Math.sin(t*.8+i*1.3)).toFixed(1)+' 0)'));
rise($('mir'),p(u,TM.mirror_people,TM.mirror_people+.5));
MF.forEach((g,i)=>rise(g,p(u,TM.mirror_people+i*.3,TM.mirror_people+i*.3+.5)));
rise($('follow4'),p(u,TM.mirror_people+4.2,TM.mirror_people+4.8));

rise($('vic'),p(u,TM.street_scene,TM.street_scene+.5));
const gl=p(u,TM.bystanders+4.6,TM.bystanders+5.2);
BY.forEach((g,i)=>{rise(g,p(u,TM.bystanders+i*.3,TM.bystanders+i*.3+.5));g.firstChild.setAttribute('cx',(BX[i]+7*gl*Math.sin(t*1.6+i*2)).toFixed(1))});
rise($('calm5'),p(u,TM.bystanders+4.6,TM.bystanders+5.1));
rise($('chart5'),p(u,TM.fewer_helpers,TM.fewer_helpers+.5));
$('curve5').setAttribute('stroke-dashoffset',(1-p(u,TM.fewer_helpers+.4,TM.fewer_helpers+2.2)).toFixed(3));
rise($('wait5'),p(u,TM.fewer_helpers+6.9,TM.fewer_helpers+7.4));

rise($('ptr'),p(u,TM.pointing_hand,TM.pointing_hand+.5));
$('arc6').setAttribute('stroke-dashoffset',(1-p(u,TM.pointing_hand+.4,TM.pointing_hand+1.6)).toFixed(3));
$('ah6').setAttribute('opacity',p(u,TM.pointing_hand+1.4,TM.pointing_hand+1.7));
const bj=u>=TM.blue_jacket;
CR6[2].children[1].setAttribute('class',bj?'loss':'ink');
JK6.setAttribute('opacity',bj?1:0);
$('hl6').setAttribute('opacity',p(u,TM.blue_jacket,TM.blue_jacket+.5));
$('hl6').setAttribute('stroke-dashoffset',(-t*12).toFixed(1));
rise($('bj6'),p(u,TM.blue_jacket,TM.blue_jacket+.5)); rise($('say6'),p(u,TM.blue_jacket+3.7,TM.blue_jacket+4.2));
rise($('ph6'),p(u,TM.phone_call,TM.phone_call+.5));
$('ring6').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*4))).toFixed(2));
rise($('job6'),p(u,TM.phone_call+.8,TM.phone_call+1.3));

C7.forEach((c,i)=>{const a=TM.fake_crowd+i*1.2;rise(c[0],p(u,a,a+.5));rise(c[1],p(u,a+.6,a+1))});
rise($('look7'),p(u,TM.look_up,TM.look_up+.5));
$('mag7').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');
rise($('comp7'),p(u,TM.compass,TM.compass+.5));
$('needle7').setAttribute('transform','rotate('+(18*Math.sin(t*1.3)).toFixed(1)+' 900 630)');

const a8=SC[8][0]/K;
rise($('c8a'),p(u,a8+.4,a8+.9)); rise($('c8g'),p(u,a8+1,a8+1.5));
rise($('c8b'),p(u,a8+5.4,a8+5.9)); rise($('c8c'),p(u,a8+5.8,a8+6.3));
$('lone8').setAttribute('transform','translate('+(1200+200*p(u,a8+6.5,a8+8.5)).toFixed(1)+' 0)');