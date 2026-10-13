const rv=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
rv('tro',TM.trophy,.6); $('crk').setAttribute('stroke-dashoffset',(1-p(u,TM.trophy+2,TM.trophy+3)).toFixed(3)); rv('skp',TM.trophy+4.6);

rv('tp',TM.two_people);
const h1=p(u,TM.two_people+.5,TM.two_people+1)*(1-p(u,TM.scoreboard,TM.scoreboard+.6));
$('heat').setAttribute('opacity',h1.toFixed(2)); $('heat').setAttribute('transform','translate('+(3*Math.sin(t*23)).toFixed(1)+' '+(3*Math.cos(t*19)).toFixed(1)+')');
rv('sb',TM.scoreboard); rv('vic',TM.scoreboard+.5); L1.style.fill=u>=TM.scoreboard?'var(--gain)':'var(--ink)';
const f1=p(u,TM.frown,TM.frown+.8); R1.style.fill=f1>.3?'var(--loss)':'var(--ink)';
R1.setAttribute('transform','translate(1220 598) scale('+(1-.22*f1).toFixed(3)+') translate(-1220 -598)'); MO.setAttribute('opacity',f1.toFixed(2));
rv('res',TM.frown+.4); rv('pat',TM.frown+4.9,.6);

rv('ban',TM.banquet,.6); G2.forEach((g,i)=>g.style.fill=i===1?'var(--gain)':(i===3&&u>=TM.storyteller)?'var(--loss)':'var(--ink)');
rv('gb',TM.storyteller); rv('cb',TM.open_book); rv('bud',TM.open_book+4.2,.3);

rv('kp',SC[3][0]/K+.3); rv('gam',TM.friend); rv('ask',TM.friend+5.7);
const kk=45*(p(u,TM.kick,TM.kick+.25)-p(u,TM.kick+.7,TM.kick+1.3)); $('gl').setAttribute('transform','rotate('+kk.toFixed(1)+' 720 450)');
STAR.setAttribute('opacity',(p(u,TM.kick+.2,TM.kick+.3)*(1-p(u,TM.kick+1,TM.kick+1.4))).toFixed(2)); rv('say',TM.kick+1.4);

rv('wk',TM.walk_home); rv('ham',TM.walk_home+.6); rv('gst4',TM.guest_star); rv('scl',TM.guest_star+3.8,.6);
const ba=(12*p(u,TM.guest_star+8,TM.guest_star+9.5)+.8*Math.sin(t*1.5))*Math.PI/180, bc=300*Math.cos(ba), bs=300*Math.sin(ba);
$('beam').setAttribute('transform','rotate('+(ba*180/Math.PI).toFixed(2)+' 1000 300)');
PN[0].setAttribute('transform','translate('+(1000-bc).toFixed(1)+' '+(300-bs).toFixed(1)+')'); PN[1].setAttribute('transform','translate('+(1000+bc).toFixed(1)+' '+(300+bs).toFixed(1)+')');
rv('ang',TM.angle,.6);

rv('op',TM.salesman); $('hb').setAttribute('opacity',(p(u,TM.salesman+.8,TM.salesman+1.2)*(1-p(u,TM.handshake,TM.handshake+.6))).toFixed(2));
rv('dw',TM.salesman+1.2); CK.forEach((c,i)=>c.setAttribute('opacity',(p(u,TM.salesman+1.5+i*.25,TM.salesman+1.8+i*.25)*(1-.8*p(u,TM.handshake,TM.handshake+.8))).toFixed(2)));
rv('ts',TM.lost_sale); TK.forEach((c,i)=>{const a=i<2?TM.lost_sale+.5+i*.3:TM.handshake+1.5+i*.3;c.setAttribute('opacity',p(u,a,a+.3).toFixed(2))});
rv('agr',TM.handshake); rv('grow',TM.handshake+4,.6);

rv('qc6',TM.quote_card,.6); rv('k0',TM.pause_button); rv('k1',TM.common_ground); rv('k2',TM.thinking);
$('pr').setAttribute('r',(70+8*Math.abs(Math.sin(t*2))).toFixed(1)); $('tb').setAttribute('transform','translate(0 '+(-4*Math.sin(t*2)).toFixed(1)+')');

rv('cal7',TM.calendar,.6); rv('dia',TM.calendar+2); rv('no7',TM.calendar+6.2); rv('frd',TM.friendship,.6);
$('hrt').setAttribute('transform','translate(1250 590) scale('+(1+.08*Math.pow(Math.abs(Math.sin(t*3)),4)).toFixed(3)+')');

rv('qa',TM.question_mark); rv('qb',TM.question_mark+.4); rv('qc',TM.question_mark+.8); rv('bal',TM.question_mark+1,.6);
$('balf').setAttribute('transform','translate('+(6*Math.sin(t*.9)).toFixed(1)+' '+(-12*Math.sin(t*1.3)).toFixed(1)+')'); rv('try',TM.question_mark+4.2);