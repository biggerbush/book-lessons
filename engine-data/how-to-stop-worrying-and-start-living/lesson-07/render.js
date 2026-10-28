<<<<<<< HEAD
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
=======
rise($('tg'),p(u,TM.worried_head,TM.worried_head+.6));
  $('scrib').setAttribute('transform','translate(1250 290) rotate('+(t*40%360).toFixed(1)+') scale('+(1-.5*p(t,3,7)).toFixed(3)+')');
  rise($('tp2'),p(u,TM.worried_head+2,TM.worried_head+2.6));
  const hp=(t%2.4)/2.4,th=$('theart');th.setAttribute('transform','translate('+(1316+50*hp).toFixed(1)+' '+(470-40*hp).toFixed(1)+')');th.setAttribute('opacity',(Math.sin(Math.PI*hp)*p(u,TM.worried_head+2.6,TM.worried_head+3)).toFixed(2));

  const o1=TM.magnifier+5;
  rise($('me1'),p(u,TM.spiral,TM.spiral+.5));
  rise($('spg'),p(u,TM.spiral+.3,TM.spiral+1)*(1-.75*p(u,o1,o1+1)));
  $('spi').setAttribute('transform','translate(330 520) rotate('+(-t*40%360).toFixed(1)+')');
  rise($('mag'),p(u,TM.magnifier,TM.magnifier+.5)); $('blob').setAttribute('r',(10+90*p(u,TM.magnifier+.6,TM.magnifier+3)).toFixed(1));
  rise($('outA'),p(u,o1,o1+.6)); rise($('out1'),p(u,o1+.3,o1+.9));

  rise($('adl'),p(u,TM.adler,TM.adler+.5)); rise($('selfi'),p(u,TM.adler+4.2,TM.adler+4.8));
  $('sring').setAttribute('stroke-dashoffset',(t*20%36).toFixed(1));
  rise($('pad'),p(u,TM.prescription,TM.prescription+.5));
  RX.forEach((c,i)=>c.setAttribute('fill',u>=TM.prescription+.6+i*.15?'var(--gain)':'var(--line)'));
  $('n14').textContent=Math.round(14*p(u,TM.prescription+.6,TM.prescription+2.6));
  rise($('quo'),p(u,TM.prescription+6.1,TM.prescription+6.7));

  rise($('bedg'),p(u,TM.bed,TM.bed+.5));
  $('bh').setAttribute('transform','translate(510 470) scale('+(1.6*(1+.1*Math.pow(Math.abs(Math.sin(t*3)),6))).toFixed(3)+')');
  rise($('win'),p(u,TM.bombs,TM.bombs+.5));
  BM.forEach((b,i)=>{const y=250+((t*110+i*60)%190);b.setAttribute('cy',y.toFixed(1));b.setAttribute('opacity',(y<410?1:Math.max(0,1-(y-410)/30)).toFixed(2))});
  rise($('phone'),p(u,TM.telephone,TM.telephone+.5));
  CF.forEach((g,i)=>rise(g,p(u,TM.telephone+1+i*.5,TM.telephone+1.5+i*.5)));
  CP.forEach(c=>c.setAttribute('stroke-dashoffset',(-t*30%16).toFixed(1)));
  rise($('fl'),p(u,TM.telephone+2.2,TM.telephone+2.7));

  const ca=p(u,TM.clock,TM.standing+4);
  rise($('clk'),p(u,TM.clock,TM.clock+.5));
  $('mh').setAttribute('transform','rotate('+(ca*1440).toFixed(1)+' 300 420)'); $('hh').setAttribute('transform','rotate('+(ca*120).toFixed(1)+' 300 420)');
  CD.forEach((c,i)=>c.setAttribute('fill',u>=TM.clock+.4+i*.35?'var(--gain)':'var(--line)'));
  rise($('cll'),p(u,TM.clock+.4,TM.clock+.9));
  $('lie').setAttribute('opacity',(1-p(u,TM.standing,TM.standing+.6)).toFixed(2));
  rise($('stand'),p(u,TM.standing,TM.standing+.6));
  $('sarc').setAttribute('opacity',(p(u,TM.standing+1.6,TM.standing+2)*(.6+.4*Math.sin(t*4))).toFixed(2));
  $('ill').setAttribute('opacity',(p(u,TM.clock+.5,TM.clock+1)*(1-p(u,TM.standing+.6,TM.standing+1.6))).toFixed(2));
  rise($('bars'),p(u,TM.standing+5.8,TM.standing+6.3));
  const bv=p(u,TM.standing+6.3,TM.standing+8);$('bb').setAttribute('width',(320-240*bv).toFixed(1));$('bl').setAttribute('width',(80+240*bv).toFixed(1));

  const y5=p(u,TM.mail_carrier-4,TM.mail_carrier-3.4),dr=p(u,TM.smile+5,TM.smile+7);
  rise($('you5'),y5);
  WR.forEach((c,i)=>{const r=80+180*dr+4*Math.sin(t*2+i);c.setAttribute('cx',(760+r*Math.cos(WA[i])).toFixed(1));c.setAttribute('cy',(460+r*Math.sin(WA[i])).toFixed(1));c.setAttribute('opacity',(y5*(1-dr)).toFixed(2))});
  rise($('car'),p(u,TM.mail_carrier,TM.mail_carrier+.5)); rise($('clerk'),p(u,TM.mail_carrier+1.5,TM.mail_carrier+2));
  BQ.forEach((g,i)=>rise(g,p(u,TM.smile+i*.6,TM.smile+.4+i*.6)));
  $('ear').setAttribute('opacity',(p(u,TM.smile+2.5,TM.smile+3)*(.6+.4*Math.sin(t*4))).toFixed(2));
  rise($('kind'),p(u,TM.smile+5,TM.smile+5.6));

  rise($('jar'),p(u,TM.scale,TM.scale+.6));
  const f=p(u,TM.scale+4.2,TM.scale+6.4),hn=436*.8*f,hw=436*(.9-.8*f);
  $('nr').setAttribute('y',(708-hn).toFixed(1));$('nr').setAttribute('height',hn.toFixed(1));
  $('wr').setAttribute('y',(708-hn-hw).toFixed(1));$('wr').setAttribute('height',hw.toFixed(1));
  $('wl').setAttribute('y',(716-hn-hw/2).toFixed(1));$('nl').setAttribute('y',(716-hn/2).toFixed(1));$('nl').setAttribute('opacity',f.toFixed(2));
  rise($('card'),p(u,TM.thank_card,TM.thank_card+.5)); $('cdb').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');
  [0,1,2].forEach(i=>{const a=TM.thank_card+1+i*.6;rise($('w'+i),p(u,a,a+.4))});

  const tk=i=>i?p(u,TM.puzzle+2.8+i*1.4,TM.puzzle+3.3+i*1.4):p(u,TM.puzzle,TM.puzzle+.5);
  TL.forEach((g,i)=>rise(g,tk(i))); KN.forEach(([c,o])=>c.setAttribute('opacity',tk(o).toFixed(2)));
  const sy=720-280*p(u,TM.sunrise,TM.sunrise+2);
  $('sun').setAttribute('cy',sy.toFixed(1));
  $('sunr').setAttribute('transform','translate(1240 '+sy.toFixed(1)+') rotate('+(t*15%360).toFixed(1)+')');$('sunr').setAttribute('opacity',p(u,TM.sunrise+2,TM.sunrise+2.6).toFixed(2));
  rise($('shr'),p(u,TM.sunrise+.6,TM.sunrise+1.2));

  rise($('qa'),p(u,TM.gift,TM.gift+.5)); rise($('qb'),p(u,TM.gift+.4,TM.gift+.9)); rise($('qc'),p(u,TM.gift+.8,TM.gift+1.3));
  rise($('gft'),p(u,TM.gift+.3,TM.gift+.8)); $('gfb').setAttribute('transform','translate(0 '+(8*Math.sin(t*2.2)).toFixed(1)+')');
  rise($('dd'),p(u,TM.gift+.8,TM.gift+1.2));
  DD.forEach((c,i)=>c.setAttribute('fill',u>=TM.gift+1.2+i*.3?'var(--gain)':'var(--line)'));
  rise($('note'),p(u,TM.gift+5.8,TM.gift+6.4));
>>>>>>> e7c885f (Draft 'How to Stop Worrying and Start Living': lesson 7 of 7)
