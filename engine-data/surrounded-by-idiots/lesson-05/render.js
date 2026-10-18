const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
R('hero',TM.blue_figure);
QS.forEach((q,i)=>{const a=TM.blue_figure+.6+i*.45;q.setAttribute('opacity',p(u,a,a+.3));q.setAttribute('transform','translate(0 '+(5*Math.sin(t*2+i)).toFixed(1)+')')});
R('metb',TM.blue_figure+5.8);

R('mag',TM.magnifier);$('lens').setAttribute('transform','translate('+(16*Math.sin(t*1.2)).toFixed(1)+' '+(10*Math.sin(t*.9)).toFixed(1)+')');
R('blend',TM.color_blend);BL.forEach((b,i)=>b[0].setAttribute('width',(b[1]*p(u,TM.color_blend+.3+i*.3,TM.color_blend+1.2+i*.3)).toFixed(1)));
[0,1,2].forEach(i=>R('ch'+i,TM.logic_gears-3.8+i*.6));
R('gears',TM.logic_gears);const ga=(u*40)%360;G1.setAttribute('transform','rotate('+ga.toFixed(1)+' 1240 380)');G2.setAttribute('transform','rotate('+(-ga*1.4).toFixed(1)+' 1345 465)');

R('desk',TM.desk_quiet);R('man',TM.manual);
CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.manual+.6+i,TM.manual+.9+i)));
R('clk',TM.clock);$('mh2').setAttribute('transform','rotate('+((t*24)%360).toFixed(1)+' 1240 440)');$('hh2').setAttribute('transform','rotate('+((t*2)%360).toFixed(1)+' 1240 440)');

R('you3',SC[3][0]/K+.3);R('qblue',TM.question_mark);R('plan',TM.question_mark+.4);
const okQ=u>=TM.quality_badge+2.6;
QQ.forEach((q,i)=>{const a=TM.question_mark+.3+i*.35;q.setAttribute('opacity',p(u,a,a+.3));q.style.fill=okQ?'var(--gain)':'var(--loss)';q.setAttribute('transform','translate(0 '+(4*Math.sin(t*2.4+i)).toFixed(1)+')')});
rise($('thought'),p(u,TM.frown_face,TM.frown_face+.5)*(1-.7*p(u,TM.quality_badge,TM.quality_badge+.6)));
R('badge',TM.quality_badge,.6);R('ans',TM.quality_badge+6.4);

R('scl',TM.scale_tilt);
const ra=12*p(u,TM.scale_tilt+.4,TM.scale_tilt+1.4)*Math.PI/180,bx=180*Math.cos(ra),by=180*Math.sin(ra);
BM.setAttribute('d','M'+(340-bx).toFixed(1)+' '+(300-by).toFixed(1)+'L'+(340+bx).toFixed(1)+' '+(300+by).toFixed(1));
PL.setAttribute('transform','translate('+(340-bx).toFixed(1)+' '+(300-by).toFixed(1)+')');PR.setAttribute('transform','translate('+(340+bx).toFixed(1)+' '+(300+by).toFixed(1)+')');
PP.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.paper_stack+i*.3,TM.paper_stack+i*.3+.2)));R('plab',TM.paper_stack+1);
R('stk',TM.stuck_arrow);const sx=1080+190*p(u,TM.stuck_arrow+.4,TM.stuck_arrow+2.2)-(u>TM.stuck_arrow+2.2?12*Math.abs(Math.sin(t*5)):0);
$('sarr').setAttribute('transform','translate('+sx.toFixed(1)+' 460)');
R('cold',TM.stuck_arrow+5.4);

R('p0',TM.agenda);const ev=p(u,TM.agenda+4.2,TM.agenda+5.4);
$('env').setAttribute('transform','translate('+(240+230*ev).toFixed(1)+' 575)');$('env').setAttribute('opacity',p(u,TM.agenda+4,TM.agenda+4.3));
TK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.agenda+7.9+i*.4,TM.agenda+8.2+i*.4)));
R('p1',TM.punctual);$('mh').setAttribute('transform','rotate('+(-150*(1-p(u,TM.punctual+.3,TM.punctual+1.8))).toFixed(1)+' 800 440)');R('prep',TM.punctual+1.8);
R('p2',TM.data_chart);BR.forEach((b,i)=>{const h=b[1]*p(u,TM.data_chart+.5+i*.3,TM.data_chart+1.3+i*.3);b[0].setAttribute('y',(560-h).toFixed(1));b[0].setAttribute('height',h.toFixed(1))});

R('tl0',TM.balloon);const pk=p(u,TM.balloon+2.2,TM.balloon+2.6),bs=(1+.04*Math.sin(t*2))*(1-pk)+.001;
$('bal').setAttribute('transform','translate(275 400) scale('+bs.toFixed(3)+') translate(-275 -400)');
$('bal').setAttribute('opacity',(1-pk).toFixed(2));$('bal').style.display=pk>=1?'none':'';
$('bstr').setAttribute('opacity',(1-pk).toFixed(2));
$('burst').setAttribute('opacity',Math.sin(Math.PI*p(u,TM.balloon+2.2,TM.balloon+3.2)).toFixed(2));R('tlost',TM.balloon+2.8);
const bk=p(u,TM.balloon+2.5,TM.balloon+3.0),bsp=p(u,TM.balloon+2.7,TM.balloon+3.8);
$('brk').setAttribute('opacity',bk.toFixed(2));
$('lkL').setAttribute('transform','translate('+(12-14*bsp).toFixed(1)+' 0) rotate('+(-8*bsp).toFixed(1)+' 210 438)');
$('lkR').setAttribute('transform','translate('+(-12+14*bsp).toFixed(1)+' 0) rotate('+(8*bsp).toFixed(1)+' 340 438)');
$('spk').setAttribute('opacity',(bsp*(.6+.4*Math.sin(t*4))).toFixed(2));
$('xb').setAttribute('transform','translate(0 '+(3*Math.sin(t*2)).toFixed(1)+')');
R('tl1',TM.chat_bubbles);$('sm').setAttribute('opacity',(1-.7*p(u,TM.chat_bubbles+1.2,TM.chat_bubbles+1.8)).toFixed(2));R('sub',TM.chat_bubbles+1.4);
R('tl2',TM.chat_bubbles+3.8);R('fck',TM.chat_bubbles+5.2);
R('tl3',TM.hourglass);R('t3c',TM.hourglass+3);
const hk=p(u,TM.hourglass,TM.hourglass+7),y0=440-110*(1-hk),w0=hwT(y0);
$('sTop').setAttribute('points','1294,440 1314,440 '+(1304+w0).toFixed(1)+','+y0.toFixed(1)+' '+(1304-w0).toFixed(1)+','+y0.toFixed(1));
$('sBot').setAttribute('points','1242,578 1366,578 1304,'+(578-110*hk).toFixed(1));$('sStr').setAttribute('opacity',hk>0&&hk<1?1:0);

const hs=p(u,TM.handshake,TM.handshake+1.2),sh=hs>=1?5*Math.sin(t*9)*(1-p(u,TM.handshake+1.2,TM.handshake+2.6)):0,ho=p(u,TM.handshake-.3,TM.handshake+.2);
$('hsL').setAttribute('transform','translate('+(-70*(1-hs)).toFixed(1)+' '+sh.toFixed(1)+')');$('hsR').setAttribute('transform','translate('+(70*(1-hs)).toFixed(1)+' '+sh.toFixed(1)+')');
$('hsL').setAttribute('opacity',ho);$('hsR').setAttribute('opacity',ho);R('hlab',TM.handshake+1.2);
R('gau',TM.trust_meter);const na=-70+140*p(u,TM.trust_meter+.4,TM.trust_meter+1.8)+2*Math.sin(t*3);
$('ndl').setAttribute('transform','rotate('+na.toFixed(1)+' 800 520)');
R('bp',TM.blueprint);FL.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.blueprint+1+i*.6,TM.blueprint+1.3+i*.6)));R('pay',TM.blueprint+1.5);

const S8=SC[8][0]/K;R('thk',S8+.4);R('qa',S8+3);R('qb',S8+3.4);R('qc',S8+3.8);R('envc',S8+4.4);
$('env8').setAttribute('transform','translate('+(6*Math.sin(t*1.6)).toFixed(1)+' '+(5*Math.sin(t*2.2)).toFixed(1)+')');