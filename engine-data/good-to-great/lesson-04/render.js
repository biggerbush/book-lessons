rise($('doors'),p(u,TM.two_doors,TM.two_doors+.6));
$('leafB').setAttribute('width',(120-96*p(u,TM.two_doors+1,TM.two_doors+2.4)).toFixed(1));
rise($('walk'),p(u,TM.two_doors+6.4,TM.two_doors+6.9));
$('walkI').setAttribute('transform','translate('+(1260+150*p(u,TM.two_doors+6.6,TM.two_doors+8.4)).toFixed(1)+' 461)');

rise($('ap'),p(u,TM.ap_store,TM.ap_store+.6)); rise($('kp'),p(u,TM.kroger_store,TM.kroger_store+.6));
const cm=p(u,TM.shopping_cart,TM.shopping_cart+1.2);
rise($('ghost'),p(u,TM.shopping_cart+.4,TM.shopping_cart+1.2)); rise($('cart'),cm);
$('cartI').setAttribute('transform','translate('+(1300+60*(1-cm)).toFixed(1)+' 700)');

rise($('gk'),p(u,TM.golden_key,TM.golden_key+.6)); rise($('insight'),p(u,TM.golden_key+6.6,TM.golden_key+7.2));
rise($('closed'),p(u,TM.closed_sign,TM.closed_sign+.5));
$('closedS').setAttribute('transform','rotate('+(5*Math.sin(t*2)).toFixed(2)+' 360 420)');
$('gkb').setAttribute('opacity',(1-.55*p(u,TM.closed_sign,TM.closed_sign+1)).toFixed(2));
rise($('ch2'),p(u,TM.falling_line-.3,TM.falling_line+.3)); dr($('fall'),p(u,TM.falling_line,TM.falling_line+2.2));
rise($('fallL'),p(u,TM.falling_line+1.8,TM.falling_line+2.4));

rise($('doc'),p(u,TM.magnifier,TM.magnifier+.6));
$('mag').setAttribute('transform','translate('+(300+40*Math.sin(t*1.2)).toFixed(1)+' '+(340+20*Math.sin(t*1.7)).toFixed(1)+')');
rise($('concl'),p(u,TM.magnifier+.8,TM.magnifier+1.4));
rise($('row'),p(u,TM.blueprint,TM.blueprint+.5));
HS.forEach((h,i)=>h.setAttribute('fill',u>=TM.blueprint+.6+i*.5?'var(--gain)':'var(--stage)'));
rise($('ch3'),p(u,TM.rising_line-.3,TM.rising_line+.3));
const r3=p(u,TM.rising_line,TM.rising_line+2.2); dr($('kl'),r3); dr($('al'),r3);
rise($('ch3L'),p(u,TM.rising_line+1.8,TM.rising_line+2.4));

rise($('cell'),p(u,TM.stockdale,TM.stockdale+.6)); rise($('bars'),p(u,TM.prison_cell,TM.prison_cell+.5));
rise($('st0'),p(u,TM.prison_cell+.3,TM.prison_cell+.8)); $('yrs').textContent=Math.round(8*p(u,TM.prison_cell+.3,TM.prison_cell+1.5));
rise($('st1'),p(u,TM.prison_cell+1.6,TM.prison_cell+2.1)); $('tor').textContent=Math.round(20*p(u,TM.prison_cell+1.6,TM.prison_cell+2.8))+'+';

const c5=TM.christmas_tree, br=u>=TM.broken_heart;
rise($('heartW'),p(u,c5,c5+.6));
$('heart').setAttribute('transform','translate(1290 '+(470+(br?16*p(u,TM.broken_heart,TM.broken_heart+.8):0)).toFixed(1)+') scale('+(br?1:1+.05*Math.abs(Math.sin(t*3))).toFixed(3)+')');
$('hp').style.fill=br?'var(--loss)':'var(--gain)'; dr($('crack'),p(u,TM.broken_heart,TM.broken_heart+.6));
rise($('hope'),p(u,c5+5.4,c5+5.9)); rise($('tl'),p(u,c5+5.4,c5+5.9));
MK.forEach((g,i)=>{const a=i?c5+9.1+i*1.1:c5+5.4; rise(g,p(u,a,a+.4))});
const dx=160+900*p(u,c5+9.1,c5+12.6); $('tdot').setAttribute('cx',dx.toFixed(1));
XS.forEach((x,i)=>x.setAttribute('opacity',cl((dx-MX[i]-10)/50).toFixed(2)));
rise($('quote'),p(u,TM.broken_heart,TM.broken_heart+.6));

rise($('scl'),p(u,TM.scale,TM.scale+.6));
const ang=-8*p(u,TM.iron_bars,TM.iron_bars+1.2)+8*p(u,TM.sunrise,TM.sunrise+1.5), ar=ang*Math.PI/180, ca=420*Math.cos(ar), sa=420*Math.sin(ar);
$('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 800 300)');
$('panL').setAttribute('transform','translate('+(800-ca).toFixed(1)+' '+(300-sa).toFixed(1)+')');
$('panR').setAttribute('transform','translate('+(800+ca).toFixed(1)+' '+(300+sa).toFixed(1)+')');
rise($('barsL'),p(u,TM.iron_bars,TM.iron_bars+.5)); rise($('lL'),p(u,TM.iron_bars+.4,TM.iron_bars+.9));
rise($('sunR'),p(u,TM.sunrise,TM.sunrise+.5)); rise($('lR'),p(u,TM.sunrise+.4,TM.sunrise+.9));
rise($('parad'),p(u,TM.sunrise+8.6,TM.sunrise+9.2));

rise($('tbl'),p(u,TM.open_table,TM.open_table+.6));
VL.forEach(v=>v.setAttribute('stroke-dashoffset',(-t*20).toFixed(1)));
HD[0].setAttribute('class',u>=TM.red_flag?'loss':'ink');
rise($('flag'),p(u,TM.red_flag,TM.red_flag+.5)); rise($('rf'),p(u,TM.red_flag+.6,TM.red_flag+1.2));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
rise($('mir'),p(u,TM.mirror+1,TM.mirror+1.6)); rise($('card'),p(u,TM.mirror+5.4,TM.mirror+5.9));
dr($('w0'),p(u,TM.mirror+5.8,TM.mirror+6.8)); dr($('w1'),p(u,TM.mirror+6.8,TM.mirror+7.8));