const nd=p(u,TM.radio+1,TM.radio+5);$('needle').setAttribute('x',(1176+162*nd).toFixed(1));$('needle').setAttribute('class',nd>.6?'gain':'loss');
$('knob').setAttribute('transform','rotate('+(nd*240-120).toFixed(1)+' 1415 470)');
WV.forEach((w,i)=>w.setAttribute('opacity',(nd*(.5+.5*Math.sin(t*3-i))).toFixed(2)));

const cd=p(u,TM.storm_cloud,TM.storm_cloud+.6);$('cloud').setAttribute('opacity',cd);$('cloud').setAttribute('transform','translate('+(-60*(1-cd)+8*Math.sin(t)).toFixed(1)+' 0)');
rise($('wheel1'),p(u,TM.steer_wheel,TM.steer_wheel+.5));$('wrot').setAttribute('transform','rotate('+(-30*Math.sin(Math.PI*p(u,TM.steer_wheel+.6,TM.steer_wheel+3))).toFixed(1)+' 560 600)');
PG.forEach((g,i)=>rise(g,p(u,TM.four_paths+i*.3,TM.four_paths+i*.3+.5)));LG.forEach((g,i)=>rise(g,p(u,TM.four_paths+4+i*.6,TM.four_paths+4.5+i*.6)));

rise($('jr'),p(u,TM.journal,TM.journal+.5));JL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.journal+1+i*.5,TM.journal+1.3+i*.5)));
rise($('items'),p(u,TM.small_items,TM.small_items+.6));
const sp=p(u,TM.spotlight,TM.spotlight+.6);rise($('spot'),sp);const bx=1180+180*Math.sin(t*.9);
$('beam').setAttribute('points','1140,264 1180,264 '+(bx+120).toFixed(1)+',700 '+(bx-120).toFixed(1)+',700');$('pool').setAttribute('cx',bx.toFixed(1));
$('spheart').setAttribute('transform','translate('+bx.toFixed(1)+' '+(660-4*Math.abs(Math.sin(t*3))).toFixed(1)+') scale(.22)');
DT.forEach(d=>{const lit=sp>.5&&Math.abs(d[2]-bx)<110;d[0].setAttribute('fill',lit?(d[1]?'var(--gain)':'var(--loss)'):'var(--line)')});

rise($('mask'),p(u,TM.actor_mask,TM.actor_mask+.6));$('mtilt').setAttribute('transform','rotate('+(4*Math.sin(t*1.2)).toFixed(1)+' 360 480)');
rise($('acttxt'),p(u,TM.actor_mask+3.4,TM.actor_mask+3.9));
rise($('note'),p(u,TM.thank_note,TM.thank_note+.5));rise($('arr'),p(u,TM.thank_note+1,TM.thank_note+1.4));
const hs=p(u,TM.thank_note+1.4,TM.thank_note+2.4);rise($('heart3'),hs);$('hsc').setAttribute('transform','translate(1270 470) scale('+(.3+.5*hs+.03*Math.sin(t*4)*hs).toFixed(3)+')');
rise($('beh'),p(u,TM.thank_note+2.6,TM.thank_note+3.2));

rise($('opt'),p(u,TM.sunny_sky,TM.sunny_sky+.6));$('rays').setAttribute('transform','rotate('+(t*12%360).toFixed(1)+' 440 400)');
rise($('hope'),p(u,TM.rolled_sleeve,TM.rolled_sleeve+.6));rise($('ladder4'),p(u,TM.ladder,TM.ladder+.5));
$('climber').setAttribute('transform','translate('+(240*p(u,TM.ladder+.6,TM.ladder+1.4)).toFixed(1)+' '+(-180*p(u,TM.ladder+1.4,TM.ladder+3)).toFixed(1)+')');
rise($('hopeT'),p(u,TM.ladder+1.5,TM.ladder+2.1));

rise($('you5'),p(u,TM.two_people,TM.two_people+.5));rise($('oth5'),p(u,TM.two_people+.4,TM.two_people+.9));
rise($('arc1'),p(u,TM.two_people+2,TM.two_people+2.6));rise($('fr5'),p(u,TM.open_hand,TM.open_hand+.6));
const wg=p(u,TM.warm_glow,TM.warm_glow+.8);$('glow').setAttribute('opacity',(wg*(.7+.3*Math.sin(t*2))).toFixed(2));Y5.forEach(e=>e.setAttribute('class',wg>.3?'gain':'ink'));
rise($('soft'),p(u,TM.warm_glow+.6,TM.warm_glow+1.2));

const lf=p(u,TM.laugh_face,TM.laugh_face+.6);rise($('face'),lf);$('fbob').setAttribute('transform','rotate('+(6*Math.sin(t*5)*lf).toFixed(1)+' 800 300)');
rise($('mock'),p(u,TM.sharp_arrow,TM.sharp_arrow+.5));$('tg').setAttribute('transform','translate('+(50*p(u,TM.sharp_arrow+.8,TM.sharp_arrow+2)).toFixed(1)+' 0)');
rise($('shared'),p(u,TM.shared_laugh,TM.shared_laugh+.6));
HA.forEach((h,i)=>{h.setAttribute('opacity',p(u,TM.shared_laugh+.8+i*.3,TM.shared_laugh+1.1+i*.3));h.setAttribute('y',(515-8*Math.abs(Math.sin(t*4+i))).toFixed(1))});

DY.forEach((d,i)=>{rise(d[0],p(u,TM.calendar+i*.15,TM.calendar+i*.15+.4));d[2].setAttribute('opacity',p(u,TM.one_card+i*.4,TM.one_card+i*.4+.3));
  const on=i===0&&u>=TM.one_card;d[1].setAttribute('stroke',on?'var(--gain)':'var(--ink)');d[1].setAttribute('stroke-width',on?7:4)});
rise($('cal7'),p(u,TM.one_card+.5,TM.one_card+1));
rise($('nb'),p(u,TM.notebook,TM.notebook+.5));NL.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.notebook+1+i*.6,TM.notebook+1.3+i*.6)));
rise($('tn'),p(u,TM.notebook+.4,TM.notebook+1));

const q0=SC[8][0]/K;rise($('qa'),p(u,q0+.4,q0+.9));rise($('qb'),p(u,q0+.8,q0+1.3));rise($('qc'),p(u,q0+1.2,q0+1.7));
rise($('chips8'),p(u,q0+1.8,q0+2.4));$('sel').setAttribute('x',CP[Math.floor(t/1.2)%4]-8);$('sel').setAttribute('opacity',p(u,q0+2.4,q0+2.8));