rise($('tb'),p(u,TM.title_kim,TM.title_kim+.6));
BL.forEach((l,i)=>l.setAttribute('opacity',(p(u,TM.title_kim+.5,TM.title_kim+1)*(.55+.45*Math.sin(t*3+i))).toFixed(2)));

rise($('room'),p(u,TM.google_office,TM.google_office+.6));
rise($('kim1'),p(u,TM.google_office+.8,TM.google_office+1.3));
const nv=u>=TM.nerves&&u<TM.growth_chart;
$('k1s').setAttribute('transform','translate('+(nv?3*Math.sin(t*40):0).toFixed(1)+' 0)');
rise($('drops'),p(u,TM.nerves,TM.nerves+.5)*(1-p(u,TM.growth_chart,TM.growth_chart+.5)));
BR.forEach((b,i)=>{const a=TM.growth_chart+i*.2,h=(40+i*45)*p(u,a,a+.8);b.setAttribute('y',(540-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
rise($('well'),p(u,TM.growth_chart+1.5,TM.growth_chart+2.1));
rise($('great'),p(u,TM.growth_chart+4.4,TM.growth_chart+5));

rise($('duo'),p(u,TM.sheryl,TM.sheryl+.6));
$('wk').setAttribute('transform','translate('+(30*p(u,TM.sheryl,TM.speech_bubble+4)).toFixed(1)+' '+(-4*Math.abs(Math.sin(t*4))).toFixed(1)+')');
rise($('pr'),p(u,TM.thumbs_up,TM.thumbs_up+.5));
rise($('umb'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
rise($('cas'),p(u,TM.speech_bubble+1.5,TM.speech_bubble+2));

rise($('arms'),p(u,TM.shrug,TM.shrug+.4)*(1-.6*p(u,TM.shrug+2,TM.shrug+2.6))+.6*p(u,TM.coach+4.2,TM.coach+4.6)*p(u,TM.shrug+2,TM.shrug+2.6));
const us=1-.15*p(u,TM.shrug+.6,TM.shrug+2);
$('um3').setAttribute('transform','translate(345 310) scale('+us.toFixed(3)+') translate(-345 -310)');
rise($('small'),p(u,TM.shrug+3.7,TM.shrug+4.2));
const ci=p(u,TM.coach,TM.coach+.7),co=p(u,TM.coach+4.2,TM.coach+5);
$('cc').setAttribute('transform','translate('+(200*(1-ci)).toFixed(1)+' '+(80*co).toFixed(1)+') rotate('+(8*co).toFixed(1)+' 1160 420)');
$('cc').setAttribute('opacity',(ci*(1-.7*co)).toFixed(2));
rise($('dodge'),p(u,TM.coach+4.2,TM.coach+4.8));

rise($('face'),p(u,TM.serious_face,TM.serious_face+.5));
rise($('q1'),p(u,TM.smart_bulb,TM.smart_bulb+.5));
rise($('bulb'),p(u,TM.smart_bulb+.6,TM.smart_bulb+1.1));
U4.forEach((e,i)=>{const a=TM.smart_bulb+3.5+i*.6;rise(e,p(u,a,a+.4))});
rise($('q2'),p(u,TM.smart_bulb+3.5,TM.smart_bulb+4));
const dim=p(u,TM.smart_bulb+3.5,TM.smart_bulb+6)*(1-p(u,TM.lightning,TM.lightning+.4));
$('bglass').setAttribute('fill-opacity',(1-.75*dim).toFixed(2));
$('rays').setAttribute('opacity',((1-dim)*(u>=TM.lightning?.7+.3*Math.sin(t*8):1)).toFixed(2));
rise($('bolt'),p(u,TM.lightning,TM.lightning+.3));
rise($('land'),p(u,TM.lightning+.3,TM.lightning+.9));

rise($('hrt'),p(u,TM.heart,TM.heart+.5));
const bt=1+.06*Math.pow(Math.abs(Math.sin(t*3)),6);
$('hp5').setAttribute('transform','translate(320 450) scale('+bt.toFixed(3)+')');
rise($('hl'),p(u,TM.heart+.5,TM.heart+1));
rise($('gift'),p(u,TM.gift_box,TM.gift_box+.5));
$('lid').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*2))).toFixed(1)+')');
rise($('hints'),p(u,TM.gift_box+3.8,TM.gift_box+4.3));
HD.forEach((h,i)=>{const x=1100+((t*90+i*66)%330);h.setAttribute('transform','translate('+x.toFixed(1)+' 490)');h.setAttribute('opacity',(1-(x-1100)/330).toFixed(2))});
rise($('soft'),p(u,TM.gift_box+4.2,TM.gift_box+4.8));

rise($('f0'),p(u,TM.coach_session,TM.coach_session+.5));
rise($('f1'),p(u,TM.mirror,TM.mirror+.5));
UM6.forEach((e,i)=>{const a=TM.mirror+1+i*.7;e.setAttribute('opacity',(1-p(u,a,a+.5)).toFixed(2))});
rise($('f2'),p(u,TM.stage,TM.stage+.5));
rise($('pay'),p(u,TM.stage+1.2,TM.stage+1.8));

rise($('scl'),p(u,TM.scale,TM.scale+.5));
rise($('plc'),p(u,TM.scale+.4,TM.scale+.9));
rise($('prc'),p(u,TM.open_door,TM.open_door+.5));
const ang=.1745*p(u,TM.open_door+.5,TM.open_door+1.5),bc=350*Math.cos(ang),bs=350*Math.sin(ang);
$('beam').setAttribute('x1',(800-bc).toFixed(1));$('beam').setAttribute('y1',(440-bs).toFixed(1));
$('beam').setAttribute('x2',(800+bc).toFixed(1));$('beam').setAttribute('y2',(440+bs).toFixed(1));
$('panL').setAttribute('transform','translate('+(800-bc).toFixed(1)+' '+(440-bs).toFixed(1)+')');
$('panR').setAttribute('transform','translate('+(800+bc).toFixed(1)+' '+(440+bs).toFixed(1)+')');
rise($('you'),p(u,TM.you_icon,TM.you_icon+.6));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));
rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('qm'),p(u,TM.question_mark+1.4,TM.question_mark+2));
$('qmi').setAttribute('transform','translate(0 '+(-8*Math.sin(t*2)).toFixed(1)+')');
rise($('week'),p(u,TM.question_mark+6.2,TM.question_mark+6.8));