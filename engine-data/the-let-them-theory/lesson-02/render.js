rise($('hc0'),p(u,TM.half_circle,TM.half_circle+.6));rise($('hc1'),p(u,TM.half_circle+6.2,TM.half_circle+6.8));

rise($('c1a'),p(u,TM.let_them_card,TM.let_them_card+.5));
const k1=p(u,TM.let_them_card+1.2,TM.let_them_card+2.4);$('pup').setAttribute('transform','translate(0 '+(-50*k1).toFixed(1)+')');$('pup').setAttribute('opacity',(1-.7*k1).toFixed(2));
rise($('plus'),p(u,TM.let_me_card,TM.let_me_card+.5));rise($('c1b'),p(u,TM.let_me_card,TM.let_me_card+.5));draw('ar1',p(u,TM.let_me_card+.8,TM.let_me_card+2));
rise($('stuck'),p(u,TM.let_me_card+5.8,TM.let_me_card+6.4));

rise($('fr'),p(u,TM.friend_group,TM.friend_group+.5));rise($('ph'),p(u,TM.phone_photos,TM.phone_photos+.5));
tiles.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.phone_photos+.4+i*.25,TM.phone_photos+.7+i*.25)));
rise($('yo2'),p(u,TM.phone_photos,TM.phone_photos+.5));ME2.forEach(e=>e.setAttribute('class',u>=TM.phone_photos+1.5?'loss':'ink'));
rise($('dr2'),p(u,TM.phone_photos+1.5,TM.phone_photos+2));rise($('mom2'),p(u,TM.phone_photos+4.6,TM.phone_photos+5.2));

rise($('pa3'),p(u,TM.chase_arrow,TM.chase_arrow+.5));const k3=p(u,TM.chase_arrow+.6,TM.chase_arrow+1.8);
$('you3').setAttribute('transform','translate('+(30*k3).toFixed(1)+' 0)');draw('ar3',k3);rise($('bb3'),p(u,TM.chase_arrow+1.5,TM.chase_arrow+2));
rise($('pb3'),p(u,TM.sulk_cloud,TM.sulk_cloud+.5));$('cloud').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')');
rain.forEach((r,i)=>{const y=396+((t*90+i*13)%50);r.setAttribute('d','M'+(1118+i*16)+' '+y.toFixed(1)+'v14')});
rise($('lock3'),p(u,TM.sulk_cloud+4.9,TM.sulk_cloud+5.5));

const s4=SC[4][0]/K;rise($('g4'),p(u,s4+.3,s4+.8));const f4=p(u,TM.question_mark-3.3,TM.question_mark-2.8);
rise($('free4'),f4);$('g4m').setAttribute('transform','translate('+(8*Math.sin(t*1.5)*f4).toFixed(1)+' 0)');
rise($('q4'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('cal4'),p(u,TM.calendar,TM.calendar+.5));$('arA').setAttribute('opacity',p(u,TM.calendar,TM.calendar+.5));$('cal4c').setAttribute('opacity',p(u,TM.calendar+1.5,TM.calendar+2));
rise($('mir4'),p(u,TM.mirror,TM.mirror+.5));$('arB').setAttribute('opacity',p(u,TM.mirror,TM.mirror+.5));

rise($('no5'),p(u,TM.no_sign,TM.no_sign+.5));draw('sl5',p(u,TM.no_sign+.5,TM.no_sign+1.2));rise($('n5b'),p(u,TM.no_sign+4.6,TM.no_sign+5.1));
const c5=TM.compass;rise($('cmp5'),p(u,c5,c5+.5));
const ang=u<c5?(t*200)%360:90*p(u,c5+1,c5+1.6)+90*p(u,c5+2.2,c5+2.8);$('ndl').setAttribute('transform','rotate('+ang.toFixed(1)+' 1140 470)');
['cv0','cv1','cv2'].forEach((id,i)=>$(id).style.fill=u>=c5+[.4,1.6,2.8][i]?'var(--gain)':'');
rise($('bk5'),p(u,c5+.5,c5+1.1));

rise($('sc6'),p(u,TM.scale,TM.scale+.5));
const a6=(-6*p(u,TM.scale+1.6,TM.scale+2.6)+14*p(u,TM.your_hands+.6,TM.your_hands+2))*Math.PI/180,bx=420*Math.cos(a6),by=420*Math.sin(a6);
$('beam').setAttribute('transform','rotate('+(a6*180/Math.PI).toFixed(2)+' 800 300)');
$('panL').setAttribute('transform','translate('+(800-bx).toFixed(1)+' '+(300-by).toFixed(1)+')');$('panR').setAttribute('transform','translate('+(800+bx).toFixed(1)+' '+(300+by).toFixed(1)+')');
rise($('oth6'),p(u,TM.scale+1.4,TM.scale+1.9));rise($('hand6'),p(u,TM.your_hands,TM.your_hands+.5));rise($('pow6'),p(u,TM.your_hands+4.6,TM.your_hands+5.1));
rise($('e6a'),p(u,TM.your_hands+8.3,TM.your_hands+8.9));rise($('e6b'),p(u,TM.your_hands+10.9,TM.your_hands+11.5));

rise($('nt7'),p(u,TM.pen_note,TM.pen_note+.5));const ka=p(u,TM.pen_note+.6,TM.pen_note+3.4),kb=p(u,TM.pen_note+6.4,TM.pen_note+9);
draw('sc7a',ka);draw('sc7b',kb);rise($('lt7'),p(u,TM.pen_note+4.9,TM.pen_note+5.4));rise($('lm7'),p(u,TM.pen_note+5.6,TM.pen_note+6.1));
let px=1200,py=600;if(ka>0&&ka<1){px=260+740*ka;py=330}else if(kb>0&&kb<1){px=490+510*kb;py=552}
$('pen7').setAttribute('transform','translate('+px.toFixed(1)+' '+py+') rotate(30)');$('pen7').setAttribute('opacity',p(u,TM.pen_note,TM.pen_note+.4));
rise($('ck7'),p(u,TM.checkmark-.6,TM.checkmark));draw('ckm',p(u,TM.checkmark,TM.checkmark+.6));

const s8=SC[8][0]/K;rise($('qa'),p(u,s8+.3,s8+.8));rise($('qb'),p(u,s8+.7,s8+1.2));rise($('qc'),p(u,s8+3.4,s8+3.9));rise($('qd'),p(u,s8+3.8,s8+4.3));
rise($('hc8a'),p(u,s8+.3,s8+.8));rise($('hc8b'),p(u,s8+3.6,s8+4.1));rise($('ql8'),p(u,s8+4.4,s8+4.9));