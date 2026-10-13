COIN.forEach((c,i)=>rise(c,p(u,TM.title_coins+.3+i*.25,TM.title_coins+.6+i*.25)));

rise(G('rBoys'),p(u,TM.young_robert,TM.young_robert+.5)); rise(G('rStore'),p(u,TM.store,TM.store+.6));
DU.forEach((d,i)=>{const a=TM.dusty_cans+.6+(i%7)*.2+Math.floor(i/7)*.4; d.setAttribute('opacity',(1-p(u,a,a+.3)).toFixed(2))});
rise(G('rPrice'),p(u,TM.dusty_cans+1.5,TM.dusty_cans+2.1));

rise(G('rBoy2'),p(u,TM.angry_boy,TM.angry_boy+.5)); rise(G('rBub2'),p(u,TM.angry_boy+.8,TM.angry_boy+1.3)); rise(G('rSlip'),p(u,TM.angry_boy+1.6,TM.angry_boy+2.1));
G('rSteam').setAttribute('transform','translate(0 '+(-4*Math.abs(Math.sin(t*5))).toFixed(1)+')');
const zp=p(u,TM.zero_pay+.4,TM.zero_pay+1.8); G('rPv').textContent=Math.round(10*(1-zp))+'¢'; G('rPv').style.fill=zp>=1?'var(--loss)':'var(--ink)';
G('rStamp').setAttribute('opacity',p(u,TM.zero_pay+1.8,TM.zero_pay+2.2)); rise(G('rFree'),p(u,TM.zero_pay+5,TM.zero_pay+5.6));

rise(G('rFear'),p(u,TM.fear_cloud,TM.fear_cloud+.6)); DR.forEach((d,i)=>d.setAttribute('y',(420+40*((t*.8+i*.37)%1)).toFixed(1)));
rise(G('rDesire'),p(u,TM.desire_cart,TM.desire_cart+.6)); rise(G('rClock'),p(u,TM.alarm_clock,TM.alarm_clock+.5));
G('rCh1').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 200 625)'); G('rCh2').setAttribute('transform','rotate('+(t*8%360).toFixed(1)+' 200 625)');
const hi=u>=TM.alarm_clock+3?Math.floor((u-TM.alarm_clock-3)*1.5)%4:-1;
CY.forEach((c,i)=>{const a=TM.alarm_clock+.5+i*.6; rise(c[0],p(u,a,a+.4)); c[1].style.fill=i===hi?'var(--gain)':'var(--stage)'; c[2].style.fill=i===hi?'var(--on-gain)':''});

rise(G('rWheel'),p(u,TM.rat_wheel,TM.rat_wheel+.6)); G('rSpk').setAttribute('transform','rotate('+(-t*120%360).toFixed(1)+' 420 500)');
G('rRat').setAttribute('transform','translate(0 '+(-5*Math.abs(Math.sin(t*9))).toFixed(1)+')');
rise(G('rChart'),p(u,TM.raise_arrow,TM.raise_arrow+.5)); G('rInc').setAttribute('stroke-dashoffset',1-p(u,TM.raise_arrow+.4,TM.raise_arrow+1.8)); G('rSpd').setAttribute('stroke-dashoffset',1-p(u,TM.raise_arrow+1.8,TM.raise_arrow+3.4));
BL.forEach((b,i)=>rise(b,p(u,TM.bills_pile+i*.2,TM.bills_pile+i*.2+.3))); rise(G('rBillsL'),p(u,TM.bills_pile,TM.bills_pile+.4)); rise(G('rFearB'),p(u,TM.bills_pile+1.2,TM.bills_pile+1.8));

rise(G('rEye'),p(u,SC[5][0]/K+.5,SC[5][0]/K+1.1)); G('rIris').setAttribute('cx',(300+50*Math.sin(t*1.4)).toFixed(1));
rise(G('rComics'),p(u,TM.comic_stack,TM.comic_stack+.6)); rise(G('rShake'),p(u,TM.handshake,TM.handshake+.6)); rise(G('rYes'),p(u,TM.handshake+2,TM.handshake+2.5));

rise(G('rHouse'),p(u,SC[6][0]/K+.3,SC[6][0]/K+.9)); rise(G('rBase'),p(u,TM.basement,TM.basement+.6));
rise(G('rJar'),p(u,TM.coin_jar,TM.coin_jar+.5)); const jk=(t*.8)%1; G('rJc').setAttribute('cy',(570+120*ease(jk)).toFixed(1)); G('rJc').setAttribute('opacity',jk>.85?0:1);
rise(G('rSis'),p(u,TM.sister,TM.sister+.5)); rise(G('rAway'),p(u,TM.sister+3.4,TM.sister+4));
FC.forEach((c,i)=>{const k=(t*.45+i/3)%1; c.setAttribute('cx',bz(k,975,1080,1180,1250).toFixed(1)); c.setAttribute('cy',bz(k,680,580,580,630).toFixed(1)); c.setAttribute('opacity',u>=TM.sister+4?(k<.9?1:(1-k)*10).toFixed(2):0)});

rise(G('rQcard'),p(u,TM.quote_card,TM.quote_card+.6)); rise(G('rBulb'),p(u,TM.lightbulb,TM.lightbulb+.6));
G('rRays').setAttribute('opacity',(.5+.5*Math.sin(t*4)).toFixed(2)); rise(G('rNote'),p(u,TM.notebook,TM.notebook+.6));

rise(G('rQm'),p(u,TM.question_mark,TM.question_mark+.5)); G('rQm').setAttribute('transform','translate(0 '+(8*Math.sin(t*2)).toFixed(1)+')');
rise(G('rQlab'),p(u,TM.question_mark+.6,TM.question_mark+1.1));
rise(G('rQa'),p(u,TM.question_mark+5.4,TM.question_mark+5.9)); rise(G('rQb'),p(u,TM.question_mark+5.8,TM.question_mark+6.3)); rise(G('rQc'),p(u,TM.question_mark+6.2,TM.question_mark+6.7));