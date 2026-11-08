const tj=p(u,TM.fox,TM.fox+.6)*Math.abs(Math.sin(t*2.2))*100;
$('tfox').setAttribute('transform','translate(1200 '+(660-tj).toFixed(1)+')');

rise($('a0'),p(u,TM.fog_cloud,TM.fog_cloud+.5));
const dft=p(u,TM.empty_hands+.4,TM.empty_hands+2.4);
['w0','w1','w2'].forEach((id,i)=>{const e=$(id),k=p(u,TM.fog_cloud+.5+i*.4,TM.fog_cloud+.9+i*.4);e.setAttribute('opacity',(k*(1-dft)).toFixed(3));e.setAttribute('transform','translate('+(dft*(160+i*60)).toFixed(1)+' '+(-dft*(40+i*20)).toFixed(1)+')')});
rise($('ah'),p(u,TM.empty_hands,TM.empty_hands+.5));
rise($('a1'),p(u,TM.empty_hands+4.6,TM.empty_hands+5.1)); rise($('a2'),p(u,TM.empty_hands+5,TM.empty_hands+5.6));

const so=TM.grapes+4.2, jp=u<so;
rise($('vin'),p(u,TM.grapes,TM.grapes+.5)); rise($('f2'),p(u,TM.grapes,TM.grapes+.5));
$('f2m').setAttribute('transform','translate(360 '+(640-(jp?Math.abs(Math.sin(t*2.6))*110:0)).toFixed(1)+')');
$('f2i').setAttribute('transform',jp?'scale(1 1)':'scale(-1 1)');
$('fgr').style.fill=jp?'var(--gain)':'var(--loss)';
rise($('sour'),p(u,so+.3,so+.8));
rise($('sc'),p(u,TM.scroll,TM.scroll+.5)); $('yrs').textContent=Math.round(2500*p(u,TM.scroll+.3,TM.scroll+1.8)).toLocaleString('en-US');
rise($('bub'),p(u,TM.speech_bubble,TM.speech_bubble+.5));

rise($('lp'),p(u,TM.rocket_desk,TM.rocket_desk+.5));
const nb=p(u,TM.rocket_desk+5.4,TM.rocket_desk+6); $('doc').setAttribute('opacity',(1-.65*nb).toFixed(3)); rise($('qm'),nb);
rise($('rp'),p(u,TM.moon,TM.moon+.5));
const k1=p(u,TM.moon+3.8,TM.moon+5.3),k2=p(u,TM.moon+5.3,TM.moon+6.5); dr($('rt'),k1); dr($('rt2'),k2);
const sp=k2>0?bz(R2,k2):bz(R1,k1); $('ship').setAttribute('cx',sp[0].toFixed(1)); $('ship').setAttribute('cy',sp[1].toFixed(1)); $('ship').setAttribute('opacity',k1>0?1:0);
rise($('g3'),p(u,TM.moon+3.8,TM.moon+4.4));

rise($('c0'),p(u,TM.astronaut,TM.astronaut+.5)); $('astro').setAttribute('transform','translate(0 '+(-8*Math.abs(Math.sin(t*1.6))).toFixed(1)+')');
FP.forEach((e,i)=>e.setAttribute('opacity',(.5*p(u,TM.astronaut+.6+i*.3,TM.astronaut+.9+i*.3)).toFixed(3)));
rise($('c1'),p(u,TM.checkmark,TM.checkmark+.5)); dr($('chk'),p(u,TM.checkmark+.5,TM.checkmark+1.2));
rise($('c2'),p(u,TM.crowd,TM.crowd+.5)); $('lks').setAttribute('opacity',p(u,TM.crowd+.6,TM.crowd+1.4));

rise($('pl'),p(u,TM.airplane,TM.airplane+.6)); $('plm').setAttribute('transform','translate(960 '+(250+6*Math.sin(t*1.5)).toFixed(1)+')');
rise($('k0'),p(u,TM.seats,TM.seats+.5));
ST.forEach((s,i)=>s.setAttribute('fill',u>=TM.seats+.3+i*.04?'var(--gain)':'var(--line)'));
$('cnt').textContent=Math.round(131*p(u,TM.seats+.3,TM.seats+1.6));
rise($('k1'),p(u,TM.map_route,TM.map_route+.5));
const mr=p(u,TM.map_route+.4,TM.map_route+1.8), mp=bz(MR,mr); dr($('rte'),mr);
$('mdot').setAttribute('cx',mp[0].toFixed(1)); $('mdot').setAttribute('cy',mp[1].toFixed(1)); $('mdot').setAttribute('opacity',mr>0?1:0);
rise($('k2'),p(u,TM.runway,TM.runway+.5));
const l1=p(u,TM.runway+.5,TM.runway+2),l2=p(u,TM.runway+2,TM.runway+3);
$('lnd').setAttribute('transform','translate('+(1430-190*l1-60*l2).toFixed(1)+' '+(500+118*l1).toFixed(1)+')');
rise($('sx'),p(u,TM.runway+5,TM.runway+5.6));

// velcro: concrete sticks on the right, abstract slides off on the left
rise($('vp'),p(u,TM.velcro,TM.velcro+.5));
rise($('cbw'),p(u,TM.velcro+.8,TM.velcro+1.3)); rise($('abw'),p(u,TM.velcro+1.2,TM.velcro+1.7)); rise($('abl'),p(u,TM.velcro+1.4,TM.velcro+1.9));
HK.forEach((h,i)=>h.setAttribute('opacity',p(u,TM.hooks+i*.12,TM.hooks+i*.12+.3)));
rise($('cbl'),p(u,TM.hooks+1,TM.hooks+1.5));
const cm=p(u,TM.hooks+5,TM.hooks+6.2); $('cbm').setAttribute('transform','translate('+(1240-290*cm).toFixed(1)+' 420)');
const b1=p(u,TM.slide_off,TM.slide_off+1),b2=p(u,TM.slide_off+1,TM.slide_off+2.2);
$('abm').setAttribute('transform','translate('+(360+320*b1).toFixed(1)+' '+(420+270*b2).toFixed(1)+')');
$('abm').setAttribute('opacity',(1-.5*b2).toFixed(3));
rise($('abs'),b2);

rise($('cam'),p(u,TM.camera,TM.camera+.5)); rise($('frm'),p(u,TM.camera+.6,TM.camera+1.1));
$('rec').setAttribute('opacity',Math.sin(t*5)>0?1:.25);
rise($('ab7'),p(u,TM.lamp_shopper,TM.lamp_shopper+.5)); $('ab7t').setAttribute('opacity',(1-.6*p(u,TM.lamp_shopper+1.6,TM.lamp_shopper+2.2)).toFixed(3));
rise($('shw'),p(u,TM.lamp_shopper+1,TM.lamp_shopper+1.5));
const wk=p(u,TM.lamp_shopper+1.5,TM.lamp_shopper+4.5);
$('shp').setAttribute('transform','translate('+(160*wk).toFixed(1)+' '+(wk>0&&wk<1?-4*Math.abs(Math.sin(t*6)):0).toFixed(1)+')');
CP.forEach((c,i)=>rise(c,p(u,TM.lamp_shopper+6.1+i*.6,TM.lamp_shopper+6.6+i*.6)));
dr($('kd'),p(u,TM.child_drawing,TM.child_drawing+1.2)); rise($('kt'),p(u,TM.child_drawing+.3,TM.child_drawing+.9));

rise($('qa'),p(u,TM.pencil,TM.pencil+.5)); rise($('card8'),p(u,TM.pencil+.2,TM.pencil+.7));
const ck=p(u,TM.pencil+.8,TM.pencil+1.6); dr($('chk8'),ck);
const s1=cl(ck/.33),s2=cl((ck-.33)/.67), px=ck<.33?1126+12*s1:1138+22*s2, py=ck<.33?322+12*s1:334-26*s2;
$('pen').setAttribute('transform','translate('+px.toFixed(1)+' '+py.toFixed(1)+')');
rise($('qb'),p(u,TM.pencil+2.6,TM.pencil+3.1)); rise($('qc'),p(u,TM.pencil+3,TM.pencil+3.5)); rise($('sh8'),p(u,TM.pencil+3.4,TM.pencil+3.9));