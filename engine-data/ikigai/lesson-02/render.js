TS.forEach((g,i)=>rise(g,p(u,TM.title_garden+i*.15,TM.title_garden+i*.15+.5)));
TF.forEach((c,i)=>{const a=TM.title_garden+4+i*.3;c.setAttribute('opacity',p(u,a,a+.4));c.setAttribute('transform','translate(0 '+(3*Math.sin(t*2+i)).toFixed(1)+')')});

rise($('map'),p(u,TM.map_okinawa,TM.map_okinawa+.6));rise($('pin'),p(u,TM.map_okinawa+2,TM.map_okinawa+2.5));
const wp=along(TR,p(u,TM.authors,TM.authors+3));$('walk').setAttribute('transform','translate('+wp[0].toFixed(1)+' '+wp[1].toFixed(1)+')');
$('walk').setAttribute('opacity',p(u,TM.authors,TM.authors+.4));$('trail').setAttribute('opacity',p(u,TM.authors,TM.authors+.6));rise($('authl'),p(u,TM.authors,TM.authors+.5));
rise($('sign'),p(u,TM.century_sign,TM.century_sign+.5));$('cnum').textContent=Math.round(100*p(u,TM.century_sign+.2,TM.century_sign+1.6));rise($('signt'),p(u,TM.century_sign+1,TM.century_sign+1.5));

rise($('elder'),p(u,TM.elder_woman,TM.elder_woman+.5));
TK.forEach((g,i)=>{const a=TM.elder_woman+5+i*.5;rise(g,p(u,a,a+.4))});
rise($('clk'),p(u,TM.slow_clock,TM.slow_clock+.5));
const dk=p(u,TM.slow_clock+.3,TM.slow_clock+3.5);TI.forEach((c,i)=>c.setAttribute('fill',dk*12>i+.5?'var(--gain)':'var(--line)'));
$('mh').setAttribute('transform','rotate('+(t*10%360).toFixed(1)+' 1150 470)');$('hh').setAttribute('transform','rotate('+(t*.8%360+120).toFixed(1)+' 1150 470)');
rise($('calm'),p(u,TM.slow_clock+2.9,TM.slow_clock+3.4));

PL.forEach(([g,x],i)=>{const k=p(u,TM.veg_garden+i*.15,TM.veg_garden+i*.15+.8);g.setAttribute('transform','translate('+x+' 660) scale('+Math.max(k,.001).toFixed(3)+')');g.setAttribute('opacity',k>0?1:0)});
const cw=p(u,TM.watering_can,TM.watering_can+5);$('can').setAttribute('transform','translate('+(260+640*cw).toFixed(1)+' 440)');$('can').setAttribute('opacity',p(u,TM.watering_can,TM.watering_can+.4));
DR.forEach((d,i)=>{const k=(t*1.2+i/3)%1;d.setAttribute('cx',(340+640*cw+6*i).toFixed(1));d.setAttribute('cy',(476+90*k).toFixed(1));d.setAttribute('opacity',u>=TM.watering_can&&cw<1?(1-k).toFixed(2):0)});
TG.forEach((g,i)=>{const a=TM.watering_can+i*1.8;rise(g,p(u,a,a+.4))});
rise($('week'),p(u,TM.veg_garden+8.4,TM.veg_garden+8.9));rise($('weekl'),p(u,TM.veg_garden+9,TM.veg_garden+9.5));
WK.forEach(([r,tx],i)=>{const on=u>=TM.veg_garden+8.7+i*.3;r.setAttribute('fill',on?'var(--gain)':'var(--line)');tx.style.fill=on?'var(--on-gain)':'var(--muted)'});

rise($('mring'),p(u,TM.friend_circle,TM.friend_circle+.6));
MW.forEach((g,i)=>{const a=TM.friend_circle+.3+i*.25;rise(g,p(u,a,a+.4))});
rise($('jar'),p(u,TM.friend_circle+2,TM.friend_circle+2.5));
CO.forEach((c,i)=>{const a=TM.coin_jar+.3+i*.35,k=p(u,a,a+.7),q=MQ[i];c.setAttribute('cx',(q[0]+(640-q[0])*k).toFixed(1));c.setAttribute('cy',(q[1]+(430-q[1])*k).toFixed(1));c.setAttribute('opacity',u<a?0:1-p(u,a+.6,a+.8))});
const jf=100*p(u,TM.coin_jar+.8,TM.coin_jar+3);$('jfill').setAttribute('y',(564-jf).toFixed(1));$('jfill').setAttribute('height',jf.toFixed(1));
const fall=p(u,TM.helping_hand,TM.helping_hand+.6)-p(u,TM.helping_hand+2.2,TM.helping_hand+3);MF[1].setAttribute('transform','translate(0 '+(50*fall).toFixed(1)+')');
recl(MF[1],u>=TM.helping_hand+2.2?'gain':u>=TM.helping_hand?'loss':'ink');
$('harr').setAttribute('opacity',p(u,TM.helping_hand+1,TM.helping_hand+1.5));
rise($('k0'),p(u,TM.coin_jar,TM.coin_jar+.5));rise($('k1'),p(u,TM.helping_hand,TM.helping_hand+.5));

rise($('e0'),p(u,TM.two_hands,TM.two_hands+.5));rise($('e1'),p(u,TM.two_hands+.6,TM.two_hands+1.1));
rise($('cnt'),p(u,TM.two_hands+3.3,TM.two_hands+3.8));
rise($('lone'),p(u,TM.lone_figure,TM.lone_figure+.5));
const lr=p(u,TM.lone_figure+1,TM.lone_figure+2.2);$('lring').setAttribute('opacity',lr);
LF.forEach(([g,q])=>{const a=Math.atan2(q[1]-470,q[0]-1180),o=80*(1-lr);g.setAttribute('transform','translate('+(q[0]+o*Math.cos(a)).toFixed(1)+' '+(q[1]+o*Math.sin(a)).toFixed(1)+')');g.setAttribute('opacity',lr)});
recl($('lone').firstChild,lr>=1?'gain':'ink');
rise($('alone'),p(u,TM.lone_figure+2,TM.lone_figure+2.5));

rise($('lan'),p(u,TM.lanterns,TM.lanterns+.6));
LN.forEach(([g,x,y],i)=>g.setAttribute('transform','rotate('+(6*Math.sin(t*2+i)).toFixed(2)+' '+x+' '+y.toFixed(1)+')'));
rise($('stage6'),p(u,TM.karaoke_mic,TM.karaoke_mic+.5));
NT.forEach((g,i)=>{const k=(t*.5+i/3)%1;g.setAttribute('transform','translate('+(255-100*k).toFixed(1)+' '+(415-90*k).toFixed(1)+')');g.setAttribute('opacity',u>=TM.karaoke_mic?Math.sin(Math.PI*k).toFixed(2):0)});
const sh=u>=TM.karaoke_mic+4.2;
DN.forEach((g,i)=>{const a=TM.karaoke_mic+.6+i*.25;rise(g,p(u,a,a+.4));g.firstChild.setAttribute('transform','translate(0 '+(-10*Math.abs(Math.sin(t*3+i))).toFixed(1)+')');recl(g.firstChild,sh?'gain':'ink')});
rise($('link'),p(u,TM.karaoke_mic+4.2,TM.karaoke_mic+4.7));rise($('joy'),p(u,TM.karaoke_mic+4.4,TM.karaoke_mic+4.9));

rise($('vA'),p(u,TM.two_circles,TM.two_circles+.5));rise($('vB'),p(u,TM.two_circles+3,TM.two_circles+3.5));
const ov=p(u,TM.overlap,TM.overlap+1.2);$('vAi').setAttribute('transform','translate('+(-120*(1-ov)).toFixed(1)+' 0)');$('vBi').setAttribute('transform','translate('+(120*(1-ov)).toFixed(1)+' 0)');
const lk=p(u,TM.overlap+1,TM.overlap+1.5),ps=1+.05*Math.sin(t*3)*lk;$('lens').setAttribute('opacity',lk);$('lens').setAttribute('transform','translate(800 500) scale('+ps.toFixed(3)+') translate(-800 -500)');
rise($('copy'),p(u,TM.overlap+4.6,TM.overlap+5.1));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));
rise($('qg'),p(u,TM.question_mark+.2,TM.question_mark+.8));rise($('qc'),p(u,TM.question_mark+2.6,TM.question_mark+3.1));
ST.forEach((c,i)=>{if(!i)return;const on=u>=TM.question_mark+3+i*.5;c.setAttribute('fill',on?'var(--gain)':'var(--stage)');c.setAttribute('stroke',on?'var(--gain)':'var(--ink)');c.setAttribute('stroke-dasharray',on?'none':'8 8')});