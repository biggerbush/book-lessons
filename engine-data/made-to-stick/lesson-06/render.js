const h0=p(u,TM.title_heart,TM.title_heart+.8),hb=1+.06*Math.pow(Math.abs(Math.sin(t*3.2)),6);
$('th').setAttribute('transform','translate(1300 390) scale('+(1.2*(.6+.4*h0)*hb).toFixed(3)+')');$('th').setAttribute('opacity',h0.toFixed(2));
FA.forEach((r,i)=>r.setAttribute('opacity',(1-.75*p(u,TM.title_heart+4.4+i*.1,TM.title_heart+5+i*.1)).toFixed(2)));

rise($('vols'),p(u,TM.researchers,TM.researchers+.5));
COINS.forEach((c,i)=>{const a=TM.researchers+.8+i*.2;c.setAttribute('opacity',p(u,a,a+.3).toFixed(2));c.setAttribute('cy',(350+5*Math.sin(t*2+i)).toFixed(1))});
rise($('box'),p(u,TM.researchers+1.6,TM.researchers+2.1));
rise($('flyer'),p(u,TM.stats_flyer,TM.stats_flyer+.5));
FB.forEach(([r,h],i)=>{const k=h*p(u,TM.stats_flyer+.4+i*.12,TM.stats_flyer+1+i*.12);r.setAttribute('y',(620-k).toFixed(1));r.setAttribute('height',k.toFixed(1))});

rise($('photo'),p(u,TM.rokia_photo,TM.rokia_photo+.5));
rise($('bowl'),p(u,TM.hungry_bowl,TM.hungry_bowl+.5));
rise($('jars'),p(u,TM.donation_jar,TM.donation_jar+.5));
const j0=150*p(u,TM.donation_jar+.5,TM.donation_jar+1.5),j1=300*p(u,TM.donation_jar+1,TM.donation_jar+2.6);
$('jf0').setAttribute('y',(692-j0).toFixed(1));$('jf0').setAttribute('height',j0.toFixed(1));
$('jf1').setAttribute('y',(692-j1).toFixed(1));$('jf1').setAttribute('height',j1.toFixed(1));
rise($('two'),p(u,TM.donation_jar+2.4,TM.donation_jar+2.9));

rise($('both'),p(u,TM.both_flyers,TM.both_flyers+.5));
rise($('cmp'),p(u,TM.shrink_coins,TM.shrink_coins+.5));
const hB=360-160*p(u,TM.shrink_coins+.8,TM.shrink_coins+2);
$('cmpB').setAttribute('y',(700-hB).toFixed(1));$('cmpB').setAttribute('height',hB.toFixed(1));
rise($('calc'),p(u,TM.calculator,TM.calculator+.5));
$('chp').style.fill=p(u,TM.calculator+1,TM.calculator+2)>.5?'var(--ice)':'var(--gain)';

const cdim=1-.6*p(u,TM.single_face,TM.single_face+.8);
CD.forEach((c,i)=>{const a=TM.crowd+i*.008;c.setAttribute('opacity',(p(u,a,a+.3)*cdim).toFixed(2))});
rise($('crowdL'),p(u,TM.crowd+1,TM.crowd+1.5));
rise($('one'),p(u,TM.single_face,TM.single_face+.6));
rise($('quote'),p(u,TM.teresa_quote,TM.teresa_quote+.6));

rise($('mirror'),p(u,TM.mirror,TM.mirror+.5));
rise($('house'),p(u,TM.cable_box,TM.cable_box+.5));
rise($('colA'),p(u,TM.imagine_cloud,TM.imagine_cloud+.5));
rise($('colB'),p(u,TM.imagine_cloud+.6,TM.imagine_cloud+1.1));
$('barA').setAttribute('width',(70*p(u,TM.imagine_cloud+1.4,TM.imagine_cloud+2.2)).toFixed(1));
$('barB').setAttribute('width',(220*p(u,TM.imagine_cloud+1.6,TM.imagine_cloud+2.8)).toFixed(1));

rise($('p0'),p(u,TM.drill,TM.drill+.5));
const dk=p(u,TM.drill+1.2,TM.drill+1.8);$('dstk').setAttribute('x2',(130+280*dk).toFixed(1));$('dstk').setAttribute('y2',(270+340*dk).toFixed(1));$('dstk').setAttribute('opacity',dk>0?1:0);
rise($('p1'),p(u,TM.drill+2.4,TM.drill+2.9));
rise($('bob'),p(u,TM.hung_picture-5.6,TM.hung_picture-5.1));
rise($('p2'),p(u,TM.hung_picture,TM.hung_picture+.5));
rise($('p3'),p(u,TM.you_word,TM.you_word+.5));
rise($('direct'),p(u,TM.you_word+.6,TM.you_word+1.1));

rise($('m0'),p(u,TM.one_person,TM.one_person+.5));
const mk2=p(u,TM.one_person+.8,TM.one_person+1.4);$('mstk').setAttribute('x2',(140+400*mk2).toFixed(1));$('mstk').setAttribute('opacity',mk2>0?1:0);
rise($('m1'),p(u,TM.benefit_card,TM.benefit_card+.5));
rise($('ans'),p(u,TM.benefit_card+1.2,TM.benefit_card+1.7));
rise($('m2'),p(u,TM.smile_face,TM.smile_face+.5));
$('smile').setAttribute('d','M1210 480q70 '+(60*p(u,TM.smile_face+.3,TM.smile_face+1.1)).toFixed(1)+' 140 0');
rise($('ff'),p(u,TM.smile_face+.6,TM.smile_face+1.1));

const s8=SC[8][0]/K;
rise($('ql'),p(u,s8+.4,s8+.9));rise($('qg'),p(u,s8+.8,s8+1.3));
$('qg').setAttribute('opacity',(p(u,s8+.8,s8+1.3)).toFixed(2));
rise($('qa'),p(u,TM.challenge,TM.challenge+.5));rise($('qb'),p(u,TM.challenge+.4,TM.challenge+.9));rise($('qc'),p(u,TM.challenge+.8,TM.challenge+1.3));