rise($('mir'),p(u,TM.mirror,TM.mirror+.6)); rise($('refl'),p(u,TM.mirror+3.8,TM.mirror+4.6));
$('shine').setAttribute('opacity',(.5+.5*Math.sin(t*2)).toFixed(2));

rise($('b1x'),p(u,TM.brain,TM.brain+.5)); rise($('brn'),p(u,TM.brain+.4,TM.brain+.9));
rise($('b1c'),p(u,TM.ordinary_folk,TM.ordinary_folk+.5));
const g1=p(u,TM.ordinary_folk+3.8,TM.ordinary_folk+5.3), hit=p(u,TM.expert+4.5,TM.expert+5.5), hE=300*g1-190*hit, hC=380*g1;
$('barE').setAttribute('y',(700-hE).toFixed(1)); $('barE').setAttribute('height',Math.max(0,hE).toFixed(1)); $('barE').setAttribute('class',hit>0?'loss':'ink');
$('barC').setAttribute('y',(700-hC).toFixed(1)); $('barC').setAttribute('height',hC.toFixed(1));
rise($('bl1'),g1); CH1.forEach((c,i)=>rise(c,p(u,TM.expert+i*.6,TM.expert+i*.6+.4)));
rise($('bolt'),hit); rise($('imp'),p(u,TM.expert+4.8,TM.expert+5.4));

rise($('qc2'),p(u,TM.quote_card,TM.quote_card+.5)); rise($('qt2'),p(u,TM.quote_card+3.3,TM.quote_card+4));
rise($('sc2'),p(u,TM.scale,TM.scale+.5));
const a2=-.16*p(u,TM.scale+.4,TM.scale+1.8)+.01*Math.sin(t*2), bx=340*Math.cos(a2), by=340*Math.sin(a2);
$('beam').setAttribute('x1',(800-bx).toFixed(1)); $('beam').setAttribute('y1',(560-by).toFixed(1)); $('beam').setAttribute('x2',(800+bx).toFixed(1)); $('beam').setAttribute('y2',(560+by).toFixed(1));
$('panL').setAttribute('transform','translate('+(800-bx).toFixed(1)+' '+(560-by).toFixed(1)+')'); $('panR').setAttribute('transform','translate('+(800+bx).toFixed(1)+' '+(560+by).toFixed(1)+')');
rise($('mk2a'),p(u,TM.scale+2.6,TM.scale+3.2)); rise($('mk2b'),p(u,TM.scale+5.6,TM.scale+6.2));

draw($('up3'),p(u,TM.rising_chart,TM.rising_chart+3.5));
CR3.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.3,TM.crowd+i*.3+.4))); rise($('br3'),p(u,TM.crowd+1.5,TM.crowd+2));
rise($('ne3'),p(u,TM.new_era,TM.new_era+.5)); rise($('gr3'),p(u,TM.new_era+5.8,TM.new_era+6.4));

draw($('dn4'),p(u,TM.crash,TM.crash+3)); rise($('sb4'),p(u,TM.sell_button,TM.sell_button+.5));
$('btn4').setAttribute('transform','translate(0 '+(6*Math.pow(Math.abs(Math.sin(t*2.5)),8)).toFixed(1)+')');
$('fp4').setAttribute('transform','translate('+(3*Math.sin(t*30)).toFixed(1)+' 0)');
TG4.forEach((g,i)=>rise(g,p(u,TM.swear_off+i*.3,TM.swear_off+i*.3+.4))); rise($('sw4'),p(u,TM.swear_off+.4,TM.swear_off+1));

draw($('wv5'),p(u,TM.loop_arrow,TM.loop_arrow+2)); rise($('lp5'),p(u,TM.loop_arrow,TM.loop_arrow+.5));
$('lp5r').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 1300 270)');
rise($('bh5'),p(u,TM.buy_high,TM.buy_high+.5)); rise($('sl5'),p(u,TM.sell_low,TM.sell_low+.5));
rise($('bw5'),p(u,TM.sell_low+3.8,TM.sell_low+4.4)); rise($('cv5'),p(u,TM.sell_low+7.6,TM.sell_low+8.2));

rise($('pp6'),p(u,TM.patience,TM.patience+.5)); TR6.forEach((g,i)=>rise(g,p(u,TM.patience+3.8+i*.5,TM.patience+4.2+i*.5)));
rise($('cp6'),p(u,TM.own_compass,TM.own_compass+.5));
$('nd6').setAttribute('transform','rotate('+(-60+150*p(u,TM.own_compass+.5,TM.own_compass+2)+4*Math.sin(t*3)).toFixed(1)+' 1290 340)');
rise($('fc6'),p(u,TM.calm_face,TM.calm_face+.5)); rise($('sg6'),p(u,TM.calm_face,TM.calm_face+.5));
const am=45*p(u,TM.calm_face,TM.calm_face+1.2); let sw='';for(let x=120;x<=1480;x+=20)sw+=x+','+(720+am*Math.sin(x/60+t*3)*Math.sin(x/230)).toFixed(1)+' ';
$('sw6').setAttribute('points',sw); rise($('st6'),p(u,TM.calm_face+.8,TM.calm_face+1.4));

rise($('nb7'),p(u,TM.notebook,TM.notebook+.5));
let pi=0;[0,1,2].forEach(i=>{draw($('ul'+i),p(u,TM.pen+i*1.3,TM.pen+i*1.3+1.2));if(u>=TM.pen+i*1.3)pi=i});
const pk=p(u,TM.pen+pi*1.3,TM.pen+pi*1.3+1.2);
$('pn7').setAttribute('transform','translate('+(220+480*pk).toFixed(1)+' '+(430+pi*140)+')');
$('pn7').setAttribute('opacity',(p(u,TM.pen-.3,TM.pen)*(1-p(u,TM.pen+4,TM.pen+4.5))).toFixed(2));
rise($('lb7'),p(u,TM.rule_list,TM.rule_list+.5)); draw($('zz7'),p(u,TM.rule_list,TM.rule_list+1.2));
rise($('fe7'),p(u,TM.rule_list+.6,TM.rule_list+1.1)); draw($('fx7'),p(u,TM.rule_list+1.6,TM.rule_list+2.1)); rise($('ru7'),p(u,TM.rule_list+2.2,TM.rule_list+2.8));

rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+3.4,TM.question+3.9)); rise($('qc'),p(u,TM.question+3.8,TM.question+4.3));
rise($('sc8'),p(u,TM.question+.5,TM.question+1)); $('bm8').setAttribute('transform','rotate('+(11*Math.sin(t*1.5)).toFixed(1)+')');