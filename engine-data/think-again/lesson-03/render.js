const fw=p(u,TM.wrong_face,TM.wrong_face+.5),fk=p(u,TM.wrong_face+4.2,TM.wrong_face+5);
rise($('xb'),fw*(1-fk)); rise($('cb'),fk);
$('mth').setAttribute('d','M1255 430Q1310 '+(388+84*fk).toFixed(1)+' 1365 430');
$('fc').style.fill=fk>.5?'var(--gain)':'var(--stage)';
$('rays').setAttribute('opacity',fk); $('rays').setAttribute('transform','rotate('+(t*10%360).toFixed(1)+' 1310 380)');

rise($('w1'),p(u,TM.shield,TM.shield+.5)); rise($('shd'),p(u,TM.shield+.3,TM.shield+.8));
ARW.forEach((a,i)=>{const s=TM.shield+3.8+i*.3,k=p(u,s,s+.5);a.setAttribute('transform','translate('+((1-k)*300).toFixed(1)+' 0)');a.setAttribute('opacity',u>=s?1:0)});
$('shp').setAttribute('stroke',u>=TM.shield+4.4?'var(--loss)':'var(--ink)');
rise($('atl'),p(u,TM.shield+4.4,TM.shield+5));
rise($('weld'),p(u,TM.welded_heart,TM.welded_heart+.6));
const kb=p(u,TM.welded_heart+5.3,TM.welded_heart+5.9);
$('crk1').setAttribute('opacity',kb); $('crk2').setAttribute('opacity',kb);
$('blf').setAttribute('transform','translate('+(-14*kb).toFixed(1)+' 0)'); $('hrtg').setAttribute('transform','translate('+(14*kb).toFixed(1)+' 0)');
$('hrt').style.fill=kb>.5?'var(--loss)':'var(--ink)';
rise($('brk'),p(u,TM.welded_heart+5.3,TM.welded_heart+5.9));

rise($('gr'),p(u,TM.kahneman,TM.kahneman+.5)); rise($('kg'),p(u,TM.kahneman+.3,TM.kahneman+.8));
const pk=p(u,TM.kahneman+.8,TM.kahneman+2.2);
$('paper').setAttribute('transform','translate('+(330+190*pk).toFixed(1)+' '+(470+20*pk).toFixed(1)+')'); $('paper').setAttribute('opacity',p(u,TM.kahneman+.4,TM.kahneman+.8));
const kd=p(u,TM.bright_eyes,TM.bright_eyes+.8);
$('km').setAttribute('d','M615 428Q640 '+(428+28*kd).toFixed(1)+' 665 428');
['ke0','ke1'].forEach(e=>$(e).setAttribute('r',(7+4*kd).toFixed(1)));
$('kh').setAttribute('stroke',kd>.5?'var(--gain)':'var(--ink)');
$('krays').setAttribute('opacity',kd*(.75+.25*Math.sin(t*4)));
rise($('qc'),p(u,TM.quote_card,TM.quote_card+.6));

rise($('ps'),p(u,TM.two_selves,TM.two_selves+.5)); rise($('prw'),p(u,TM.two_selves+.3,TM.two_selves+.8));
$('lk').setAttribute('opacity',p(u,TM.two_selves+.6,TM.two_selves+1.2));
const gp=70*p(u,TM.two_selves+4.5,TM.two_selves+5.3);
$('l0').setAttribute('x2',(780-gp).toFixed(1)); $('l1').setAttribute('x1',(780+gp).toFixed(1));
rise($('ph'),p(u,TM.old_photo,TM.old_photo+.6));
$('cr').setAttribute('opacity',p(u,TM.old_photo+1.5,TM.old_photo+2)); rise($('crl'),p(u,TM.old_photo+1.5,TM.old_photo+2.1));
const gs=1+.25*p(u,TM.old_photo+7,TM.old_photo+8.2);
$('pr').setAttribute('transform','translate(1050 600) scale('+gs.toFixed(3)+') translate(-1050 -600)');
rise($('gw'),p(u,TM.old_photo+7,TM.old_photo+7.6));

rise($('bod'),p(u,TM.values_badge,TM.values_badge+.5));
rise($('vb0'),p(u,TM.values_badge+3.8,TM.values_badge+4.3)); rise($('vb1'),p(u,TM.values_badge+4.4,TM.values_badge+4.9)); rise($('vbl'),p(u,TM.values_badge+5,TM.values_badge+5.5));
rise($('tgw'),p(u,TM.opinion_tag,TM.opinion_tag+.5)); rise($('hold'),p(u,TM.opinion_tag+.6,TM.opinion_tag+1.2));
const tr=p(u,TM.opinion_tag+4.6,TM.opinion_tag+6.4);
$('tg').setAttribute('transform','translate('+(260*tr).toFixed(1)+' '+(-200*tr+6*tr*Math.sin(t*2)).toFixed(1)+') rotate('+(-8*tr).toFixed(1)+' 970 510)'); $('tg').setAttribute('opacity',(1-.5*tr).toFixed(2));
rise($('lg'),p(u,TM.opinion_tag+4.6,TM.opinion_tag+5.2));

rise($('tel'),p(u,TM.telescope,TM.telescope+.5)); $('sight').setAttribute('opacity',p(u,TM.telescope+.6,TM.telescope+1.2));
rise($('star'),p(u,TM.telescope+1,TM.telescope+1.6));
const an=t*.9, px=1100+200*Math.cos(an), py=440+70*Math.sin(an);
$('pl').setAttribute('cx',px.toFixed(1)); $('pl').setAttribute('cy',py.toFixed(1));
$('pl').setAttribute('opacity',(p(u,TM.telescope+1.6,TM.telescope+2.2)*(1-p(u,TM.math_error+3,TM.math_error+3.5))).toFixed(2));
$('ghost').setAttribute('transform','translate('+px.toFixed(1)+' '+py.toFixed(1)+')');
$('ghost').setAttribute('opacity',p(u,TM.math_error+3.3,TM.math_error+3.9).toFixed(2));
$('orb').setAttribute('stroke',u>=TM.math_error+3.4?'var(--loss)':'var(--line)');
rise($('nw'),p(u,TM.telescope+5.8,TM.telescope+6.3));
rise($('sh'),p(u,TM.math_error,TM.math_error+.5)); $('err').setAttribute('opacity',p(u,TM.math_error+.8,TM.math_error+1.3));
rise($('nop'),p(u,TM.math_error+3.4,TM.math_error+4));

rise($('lyne'),p(u,TM.stage,TM.stage+.5)); rise($('aud'),p(u,TM.stage+.3,TM.stage+.9)); rise($('bub'),p(u,TM.stage+1.5,TM.stage+2.1));
AUD.forEach((a,i)=>{const s=TM.applause+(i%9)*.05+Math.floor(i/9)*.15,k=p(u,s,s+.5);a[0].setAttribute('transform','translate(0 '+(-26*k).toFixed(1)+')');a[1].setAttribute('opacity',u>=s+.3?(Math.sin(t*12+i*1.7)>0?1:.2):0)});
rise($('hon'),p(u,TM.applause+3.7,TM.applause+4.3));

rise($('nb'),p(u,TM.lab_notebook,TM.lab_notebook+.5)); rise($('nq'),p(u,TM.lab_notebook+1,TM.lab_notebook+1.6));
rise($('ar'),p(u,TM.deposit_jar,TM.deposit_jar+.5)); rise($('jar'),p(u,TM.deposit_jar+.2,TM.deposit_jar+.7));
CO.forEach((c,i)=>{const s=TM.deposit_jar+.8+i*.5,k=p(u,s,s+.5);c[0].setAttribute('cy',(230+(c[1]-230)*k).toFixed(1));c[0].setAttribute('opacity',u>=s?1:0)});
rise($('pg'),p(u,TM.deposit_jar+7,TM.deposit_jar+7.6));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc8'),p(u,TM.mirror+.8,TM.mirror+1.3));
rise($('mr'),p(u,TM.mirror+1.2,TM.mirror+1.8)); rise($('ch8'),p(u,TM.mirror+4.9,TM.mirror+5.5));
$('mck').setAttribute('opacity',p(u,TM.mirror+5.5,TM.mirror+6.1));