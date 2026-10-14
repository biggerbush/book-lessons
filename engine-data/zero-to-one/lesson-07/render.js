T0.forEach((e,i)=>{const a=TM.checklist+.6+i*.35;drw(e,p(u,a,a+.3))});

rise($('sol'),p(u,TM.solar_panel,TM.solar_panel+.5));
M.forEach((g,i)=>{const a=TM.money_pile+i*.3;rise(g,p(u,a,a+.3))});
rise($('mlab'),p(u,TM.money_pile,TM.money_pile+.5));
rise($('chart'),p(u,TM.crash_chart,TM.crash_chart+.4)); drw($('cline'),p(u,TM.crash_chart+.2,TM.crash_chart+1.8));
rise($('ign'),p(u,TM.crash_chart+3.3,TM.crash_chart+3.9));

rise($('q1'),p(u,TM.gear,TM.gear+.5)); $('gearR').setAttribute('transform','rotate('+((t*30)%360).toFixed(1)+' 260 410)');
rise($('tenx'),p(u,TM.gear+6.2,TM.gear+6.7)); $('b10').setAttribute('width',(50+450*p(u,TM.gear+6.4,TM.gear+7.6)).toFixed(1));
rise($('q2'),p(u,TM.clock,TM.clock+.5));
$('hm').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 1000 410)'); $('hh').setAttribute('transform','rotate('+((t*8)%360).toFixed(1)+' 1000 410)');
rise($('rush'),p(u,TM.clock+5,TM.clock+5.5)); $('rushIn').setAttribute('transform','translate('+(100*p(u,TM.clock+5.3,TM.clock+7)).toFixed(1)+' 0)');

rise($('q3'),p(u,TM.small_circle,TM.small_circle+.5));
$('wedge').setAttribute('d',wedge(400,470,130,.8*2*Math.PI*p(u,TM.small_circle+.6,TM.small_circle+2)));
rise($('share'),p(u,TM.small_circle+1.4,TM.small_circle+2));
rise($('q4'),p(u,TM.team,TM.team+.4)); CR.forEach((g,i)=>{const a=TM.team+.2+i*.25;rise(g,p(u,a,a+.4))});
rise($('ties'),p(u,TM.team+4.2,TM.team+4.7)); rise($('tlab'),p(u,TM.team+4.4,TM.team+5));

const wh=p(u,TM.warehouse,TM.warehouse+.6);
rise($('prod'),p(u,TM.delivery_van,TM.delivery_van+.5)); rise($('cust'),p(u,TM.delivery_van+.3,TM.delivery_van+.8));
$('vanW').setAttribute('opacity',(p(u,TM.delivery_van,TM.delivery_van+.4)*(1-.8*wh)).toFixed(2));
// truck drives from x=320 to x=900 (spans 900..1104), stopping 100px before the first customer
$('van').setAttribute('transform','translate('+(320+580*p(u,TM.delivery_van+.6,TM.delivery_van+3.2)).toFixed(1)+' 0)');
rise($('sell'),p(u,TM.delivery_van+5,TM.delivery_van+5.6));
rise($('shelf'),wh); rise($('nox'),p(u,TM.warehouse+.4,TM.warehouse+.9));

rise($('q6'),p(u,TM.calendar,TM.calendar+.5)); CD.forEach((g,i)=>{const a=TM.calendar+.4+i*.7;rise(g,p(u,a,a+.4))});
rise($('q7'),p(u,TM.keyhole,TM.keyhole+.5)); $('beam').setAttribute('opacity',(p(u,TM.keyhole+.6,TM.keyhole+1.4)*(.8+.2*Math.sin(t*3))).toFixed(2));
rise($('obv'),p(u,TM.keyhole+6.2,TM.keyhole+6.7)); $('ostk').setAttribute('x2',(112+690*p(u,TM.keyhole+7,TM.keyhole+7.6)).toFixed(1));

rise($('tubes'),p(u,TM.solyndra,TM.solyndra+.5)); rise($('gov'),p(u,TM.gov_loan,TM.gov_loan+.5));
rise($('comp'),p(u,TM.gov_loan+5,TM.gov_loan+5.6)); rise($('bkW'),p(u,TM.bankruptcy,TM.bankruptcy+.3));
SB.forEach((g,i)=>{const a=TM.bankruptcy+2.1+i*.25;rise(g,p(u,a,a+.3))}); rise($('fail'),p(u,TM.bankruptcy+3.2,TM.bankruptcy+3.8));

rise($('carW'),p(u,TM.tesla_car,TM.tesla_car+.5)); $('car').setAttribute('transform','translate('+(-160*(1-p(u,TM.tesla_car,TM.tesla_car+1))).toFixed(1)+' 0)');
rise($('tk'),p(u,TM.seven_ticks,TM.seven_ticks+.4)); TK.forEach((e,i)=>{const a=TM.seven_ticks+.4+i*.3;drw(e,p(u,a,a+.3))});
rise($('small'),p(u,TM.seven_ticks+3.7,TM.seven_ticks+4.3)); rise($('store'),p(u,TM.showroom,TM.showroom+.6));

const s8=SC[8][0]/K;
rise($('flab'),p(u,s8+.3,s8+.8));
FB.forEach((e,i)=>{const a=s8+1+i*.35,k=p(u,a,a+.3);if(i<6)drw(e,k);else rise(e,k)});
rise($('qa'),p(u,s8+5.2,s8+5.7)); rise($('qb'),p(u,s8+5.6,s8+6.1)); rise($('qc'),p(u,s8+6,s8+6.5));