rise($('tg'),p(u,TM.title_card,TM.title_card+.6));
const hc=((u-TM.title_card-1)%2.5+2.5)%2.5/2.5,he=ease(cl(hc/.8));
$('th').setAttribute('transform','translate('+(1250+120*he).toFixed(1)+' '+(400-70*Math.sin(Math.PI*he)).toFixed(1)+') scale(1.2)');
$('th').setAttribute('opacity',u>TM.title_card+1?(1-cl((hc-.85)/.15)).toFixed(2):0);
$('tcl').setAttribute('opacity',(1-p(u,TM.title_card+2,TM.title_card+4)).toFixed(2));
TR.setAttribute('class',u>TM.title_card+1.8?'gain':'ink');

rise($('room'),p(u,TM.worried_mind,TM.worried_mind+.5));
const ck=.5+1.1*p(u,TM.worried_mind+3,TM.worried_mind+9);
$('cloud').setAttribute('transform','translate(380 430) scale('+(ck+.03*Math.sin(t*2)).toFixed(3)+')');
rise($('spot'),p(u,TM.spotlight,TM.spotlight+.5));
const sw=p(u,TM.spotlight+5.5,TM.spotlight+7),bt='translate(1040 320) rotate('+(-45*sw).toFixed(1)+')';
$('beam').setAttribute('transform',bt);$('lamp').setAttribute('transform',bt);$('beam').setAttribute('class',sw>.5?'gain':'loss');
OT.forEach(g=>g.setAttribute('class',sw>.9?'gain':'ink'));

rise($('adl'),p(u,TM.adler,TM.adler+.5));rise($('pad'),p(u,TM.prescription,TM.prescription+.5));
DY.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.prescription+1.5+i*.8,TM.prescription+1.8+i*.8)));
rise($('rule'),p(u,TM.prescription+6.5,TM.prescription+7));rise($('easy'),p(u,TM.prescription+11.9,TM.prescription+12.4));

rise($('mg'),p(u,TM.margaret,TM.margaret+.5));rise($('bedg'),p(u,TM.bed,TM.bed+.5));
$('world').setAttribute('r',(320-70*p(u,TM.bed+5.4,TM.bed+9)).toFixed(1));$('world').setAttribute('opacity',p(u,TM.bed+5.4,TM.bed+6));
rise($('fears'),p(u,TM.bed+5.6,TM.bed+6.2));

rise($('boom'),p(u,TM.explosions,TM.explosions+.4));
BR.forEach((b,i)=>{const s=1+.15*Math.sin(t*5+i*2);b[0].setAttribute('transform','translate('+b[1]+' '+b[2]+') scale('+s.toFixed(3)+') translate('+(-b[1])+' '+(-b[2])+')')});
rise($('ph'),p(u,TM.telephone,TM.telephone+.5));
$('ring').setAttribute('opacity',u>TM.telephone+.5?(Math.sin(t*9)>0?1:.2):0);
rise($('fam'),p(u,TM.telephone+1.2,TM.telephone+1.8));
FD.forEach((d,i)=>{const f=((t*.4+i*.25)%1);d.setAttribute('cx',(1000+(FM[i][0]-1000)*f).toFixed(1));d.setAttribute('cy',(560+(FM[i][1]-560)*f).toFixed(1));d.setAttribute('opacity',p(u,TM.telephone+7,TM.telephone+7.5))});

rise($('comf'),p(u,TM.comfort,TM.comfort+.5));
H5.forEach((h,i)=>{const f=((u-TM.comfort-.5)*.5+i*.33)%1,k=f<0?f+1:f,x=410+(CA[i][0]-40-410)*k,y=450+(CA[i][1]-450)*k;h.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')');h.setAttribute('opacity',u>TM.comfort+.5?(1-k).toFixed(2):0)});
$('cl5').setAttribute('opacity',(1-p(u,TM.comfort+6.2,TM.comfort+7.5)).toFixed(2));
rise($('day'),p(u,TM.sunrise,TM.sunrise+.5));
$('sun').setAttribute('transform','translate(1170 '+(680-280*p(u,TM.sunrise,TM.sunrise+3)).toFixed(1)+') rotate('+(t*10%360).toFixed(1)+')');
$('outb').setAttribute('width',(620*(.25+.5*p(u,TM.sunrise+.5,TM.sunrise+3.5))).toFixed(1));

rise($('gr'),p(u,TM.gears,TM.gears+.5));$('gear').setAttribute('transform','translate(300 505) rotate('+(t*30%360).toFixed(1)+')');
[TM.clock,TM.busy_hands,TM.scale].forEach((a,i)=>rise($('k'+i),p(u,a,a+.5)));
$('hh').setAttribute('x2',(700+22*Math.sin(t*.5)).toFixed(1));$('hh').setAttribute('y2',(325-22*Math.cos(t*.5)).toFixed(1));
$('mh').setAttribute('x2',(700+32*Math.sin(t*3)).toFixed(1));$('mh').setAttribute('y2',(325-32*Math.cos(t*3)).toFixed(1));
$('bx').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*3))).toFixed(1)+')');
$('beam2').setAttribute('transform','translate(700 672) rotate('+(18*p(u,TM.scale+.6,TM.scale+1.8)).toFixed(1)+')');

[TM.thank_you,TM.thank_you+2,TM.thank_you+4].forEach((a,i)=>rise($('n'+i),p(u,a,a+.5)));
rise($('ctr'),p(u,SC[7][0]/K+.4,SC[7][0]/K+.9));rise($('ripple'),p(u,TM.ripple,TM.ripple+.5));
RG.forEach((c,k)=>{const f=((t*.25+k*.25)%1);c.setAttribute('r',(40+260*f).toFixed(1));c.setAttribute('opacity',(1-f).toFixed(2))});
PP.forEach((q,i)=>q[0].setAttribute('class',u>=TM.ripple+1+i*.15?'gain':'ink'));
RD.forEach((d,i)=>{const f=((t*.5+i*.125)%1);d.setAttribute('cx',(PP[i][1]+(1110-PP[i][1])*f).toFixed(1));d.setAttribute('cy',(PP[i][2]+(520-PP[i][2])*f).toFixed(1));d.setAttribute('opacity',p(u,TM.ripple+3,TM.ripple+3.5)*(1-f))});

rise($('qa'),p(u,TM.calendar,TM.calendar+.5));rise($('qb'),p(u,TM.calendar+.4,TM.calendar+.9));rise($('qc'),p(u,TM.calendar+.8,TM.calendar+1.3));
rise($('cal'),p(u,TM.calendar+.2,TM.calendar+.7));
CC.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+1.5+i*.35?'var(--gain)':'var(--stage)'));
rise($('go'),p(u,TM.calendar+7,TM.calendar+7.6));