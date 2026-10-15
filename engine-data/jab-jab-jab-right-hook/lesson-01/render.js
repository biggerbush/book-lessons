const sw=p(t,TM.gloves+.6,TM.gloves+1.6),wb=(1-sw)*6*Math.sin(t*5);
TG.setAttribute('transform','translate('+(1420-240*sw+wb).toFixed(1)+' '+(760-550*sw).toFixed(1)+')');
R('tg',u,TM.gloves,.4); R('tmiss',u,TM.gloves+4.6);

R('ring',u,TM.boxing_ring); R('prize',u,TM.boxing_ring+2); R('bxr',u,TM.boxer); R('jab',u,TM.jab_punch);
const jp=u>=TM.jab_punch?Math.pow(Math.max(0,Math.sin(t*5)),3):0; JB.setAttribute('transform','translate('+(490+150*jp).toFixed(1)+' 570)');
[0,1,2].forEach(i=>R('jl'+i,u,TM.jab_punch+i*.5,.3)); R('setup',u,TM.jab_punch+2);

R('phone',u,TM.phone_feed); R('fc',u,TM.laugh_face); R('lb',u,TM.lightbulb); R('sn',u,TM.lightbulb+2); R('nostr',u,TM.lightbulb+4.5);

const hs=p(u,TM.right_hook,TM.right_hook+1.2),h1=1-hs;
HK.setAttribute('transform','translate('+(h1*h1*220+2*h1*hs*240+hs*hs*600).toFixed(1)+' '+(h1*h1*660+2*h1*hs*380+hs*hs*400).toFixed(1)+')');
R('hk',u,TM.right_hook,.3); $('arc').setAttribute('opacity',p(u,TM.right_hook,TM.right_hook+1)); R('att',u,TM.right_hook);
[0,1,2].forEach(i=>R('ch'+i,u,TM.cart_icon+i,.4)); R('res',u,TM.cart_icon+3.7);
BR.forEach((b,i)=>{const h=BH[i]*p(u,TM.cart_icon+3.9+i*.2,TM.cart_icon+5+i*.2);b.setAttribute('height',h.toFixed(1));b.setAttribute('y',(560-h).toFixed(1))});
R('nohook',u,TM.cart_icon+8.7);

R('mega',u,TM.megaphone); TL.forEach((g,i)=>rise(g,p(u,TM.sale_posts+i*.3,TM.sale_posts+i*.3+.4))); R('price',u,TM.sale_posts+3.8);
R('crowd4',u,TM.yawn_crowd); $('chev').setAttribute('opacity',p(u,TM.yawn_crowd,TM.yawn_crowd+.5));
CV.forEach((c,i)=>{const o=(t*40+i*35)%105;c.setAttribute('transform','translate(1265 '+(610-o).toFixed(1)+')');c.setAttribute('opacity',(1-o/105).toFixed(2))});
R('nob',u,TM.yawn_crowd+.4); R('why',u,TM.yawn_crowd+1);

GF.forEach((g,i)=>rise(g,p(u,TM.gift_box+i*.4,TM.gift_box+i*.4+.4))); R('meter',u,TM.gift_box+2);
$('mfill').setAttribute('width',(828*p(u,TM.trust_meter,TM.trust_meter+5)).toFixed(1));
[1.2,2.4,3.8].forEach((d,i)=>R('l'+i,u,TM.trust_meter+d));
R('env',u,TM.trust_meter+6.2); R('intr',u,TM.trust_meter+6.6); R('inv',u,TM.trust_meter+7);

R('bak',u,TM.bakery); R('tl',u,TM.croissant); R('k0',u,TM.croissant); R('k1',u,TM.croissant+2.2); R('k2',u,TM.croissant+4.4);
R('fol',u,TM.croissant+5); R('k3',u,TM.coupon);
const yy=u>=TM.coupon+2.5; FL.forEach(f=>f.forEach(e=>e.setAttribute('fill',yy?'var(--gain)':'var(--muted)'))); R('yes',u,TM.coupon+2.5);

const a=.21*p(u,TM.scale+4.6,TM.scale+5.6),ca=240*Math.cos(a),sa=240*Math.sin(a);
const bm=$('beam'); bm.setAttribute('x1',(460-ca).toFixed(1)); bm.setAttribute('y1',(320+sa).toFixed(1)); bm.setAttribute('x2',(460+ca).toFixed(1)); bm.setAttribute('y2',(320-sa).toFixed(1));
PL.setAttribute('transform','translate('+(460-ca).toFixed(1)+' '+(320+sa).toFixed(1)+')'); PR.setAttribute('transform','translate('+(460+ca).toFixed(1)+' '+(320-sa).toFixed(1)+')');
GB.forEach((b,i)=>rise(b,p(u,TM.scale+i*.6,TM.scale+i*.6+.4))); rise(AB,p(u,TM.scale+2,TM.scale+2.4));
R('gl',u,TM.scale); R('al',u,TM.scale+2); R('cal',u,TM.calendar);
CE.forEach((c,i)=>{const d=i%7,on=u>=TM.calendar+.5+i*.12;c.setAttribute('fill',on?(d===6?'var(--loss)':d%2===0?'var(--gain)':'var(--line)'):'var(--line)')});
R('nb',u,TM.notebook);

R('qa',u,TM.challenge); R('qb',u,TM.challenge+.4); R('qc',u,TM.challenge+.8);
CG.forEach((g,i)=>rise(g,p(u,TM.challenge+1.2+i*.6,TM.challenge+1.6+i*.6)));
const hk=p(u,TM.challenge+5.8,TM.challenge+6.6); R('hg',u,TM.challenge+5.8,.3);
HG.setAttribute('transform','translate('+(1360+60*(1-hk)).toFixed(1)+' '+(690-40*Math.sin(hk*Math.PI)).toFixed(1)+')');