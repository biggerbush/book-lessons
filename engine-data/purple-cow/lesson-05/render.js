MT.forEach((g,i)=>rise(g,p(u,TM.manager+i*.25,TM.manager+i*.25+.5)));
rise($('card'),p(u,TM.manager+1.2,TM.manager+1.7));
$('cardR').setAttribute('stroke',u>=TM.manager+3.8?'var(--loss)':'var(--ink)');
rise($('warn'),p(u,TM.manager+3.8,TM.manager+4.3));

const sk=p(u,TM.checklist,TM.checklist+4.2);
$('star').setAttribute('points',starPts(sk)); $('star').setAttribute('fill',sk>.6?'var(--line)':'var(--gain)');
rise($('starG'),p(u,TM.boardroom,TM.boardroom+.5)); rise($('bd'),p(u,TM.boardroom+.6,TM.boardroom+1.1));
$('arr1').setAttribute('opacity',p(u,TM.checklist,TM.checklist+.5));
CK.forEach((c,i)=>{const a=TM.checklist+i*1.3;rise(c[0],p(u,a,a+.4));c[1].setAttribute('opacity',p(u,a+.3,a+.6))});
rise($('resp'),p(u,TM.checklist+4.6,TM.checklist+5.1)); rise($('fired'),p(u,TM.checklist+6,TM.checklist+6.6));

const fd=p(u,TM.shopper+6.3,TM.shopper+8.5);
PR.forEach((g,i)=>rise(g,p(u,TM.shelf+i*.06,TM.shelf+i*.06+.4)*(i===13?1-.8*fd:1)));
rise($('yours'),p(u,TM.shelf+2,TM.shelf+2.5));
rise($('shop'),p(u,TM.shopper,TM.shopper+.5));
const ph=(t*.5)%1,row=Math.floor(t*.5)%2;
$('gaze').setAttribute('x2',(980-840*ph).toFixed(1)); $('gaze').setAttribute('y2',row?540:360); $('gaze').setAttribute('opacity',p(u,TM.shopper+.5,TM.shopper+1));
rise($('cnt'),p(u,TM.shopper+2.9,TM.shopper+3.4)); rise($('silence'),p(u,TM.shopper+9.3,TM.shopper+9.9));

rise($('qcard'),p(u,TM.quote_card,TM.quote_card+.6)); rise($('scale'),p(u,TM.risk_scale,TM.risk_scale+.5));
const ra=(10-20*p(u,TM.risk_scale+.8,TM.risk_scale+2))*Math.PI/180,bx=400*Math.cos(ra),by=400*Math.sin(ra);
$('beam').setAttribute('x1',(800-bx).toFixed(1)); $('beam').setAttribute('y1',(560-by).toFixed(1)); $('beam').setAttribute('x2',(800+bx).toFixed(1)); $('beam').setAttribute('y2',(560+by).toFixed(1));
$('panL').setAttribute('transform','translate('+(800-bx).toFixed(1)+' '+(560-by).toFixed(1)+')'); $('panR').setAttribute('transform','translate('+(800+bx).toFixed(1)+' '+(560+by).toFixed(1)+')');
rise($('vL'),p(u,TM.risk_scale+2.2,TM.risk_scale+2.8)); rise($('vR'),p(u,TM.risk_scale+6,TM.risk_scale+6.6));

rise($('bigcan'),p(u,TM.paint_can,TM.paint_can+.5)); rise($('canL'),p(u,TM.paint_can+1.8,TM.paint_can+2.3));
rise($('smallc'),p(u,TM.paint_can+6,TM.paint_can+6.6)); rise($('sameL'),p(u,TM.paint_can+6.4,TM.paint_can+7));
const lk=p(u,TM.screwdriver+.8,TM.screwdriver+1.8);
rise($('sd'),p(u,TM.screwdriver,TM.screwdriver+.5)); $('sdR').setAttribute('transform','translate(490 398) rotate('+(-35+20*lk).toFixed(1)+')');
$('lid').setAttribute('transform','rotate('+(-8*lk).toFixed(2)+' 200 400) translate(0 '+(-18*lk).toFixed(1)+')');
const dk=p(u,TM.screwdriver+2,TM.screwdriver+4.5); DR.forEach(d=>{d[0].setAttribute('y2',(430+d[1]*dk).toFixed(1));d[0].setAttribute('opacity',dk>0?1:0)});
rise($('pry'),p(u,TM.screwdriver+3,TM.screwdriver+3.6));

rise($('cans5'),p(u,TM.jug-1,TM.jug-.4)); rise($('jug'),p(u,TM.jug+.2,TM.jug+.8));
const wb=(u>=TM.jug+6.6&&u<TM.crowd)?3*Math.sin(t*5):0; $('jugW').setAttribute('transform','rotate('+wb.toFixed(2)+' 800 560)');
rise($('lidL'),p(u,TM.jug+2.8,TM.jug+3.3)); rise($('spL'),p(u,TM.jug+4.4,TM.jug+4.9));
$('qm').setAttribute('opacity',p(u,TM.jug+6.6,TM.jug+7.1));
CR.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.15,TM.crowd+i*.15+.4)));
rise($('ptxt'),p(u,TM.crowd+5.8,TM.crowd+6.3)); $('pstrike').setAttribute('x2',(416+224*p(u,TM.crowd+6.4,TM.crowd+7)).toFixed(1));
rise($('ctxt'),p(u,TM.crowd+8.8,TM.crowd+9.4));

rise($('dial'),p(u,TM.dial,TM.dial+.4));
const th=160-140*p(u,TM.dial+.4,TM.dial+1.8)+65*p(u,TM.customer,TM.customer+1.5),tr=th*Math.PI/180;
$('ndl').setAttribute('x2',(480+240*Math.cos(tr)).toFixed(1)); $('ndl').setAttribute('y2',(620-240*Math.sin(tr)).toFixed(1)); $('ndl').setAttribute('stroke',th<60?'var(--loss)':'var(--ink)');
rise($('cust'),p(u,TM.customer,TM.customer+.5)); rise($('prob'),p(u,TM.customer+1,TM.customer+1.5)); rise($('sol'),p(u,TM.customer+3.5,TM.customer+4));
rise($('tgt'),p(u,TM.customer+7,TM.customer+7.5)); rise($('calc'),p(u,TM.customer+7,TM.customer+7.6));

const qd=p(u,TM.spotlight+3.7,TM.spotlight+4.5);
rise($('door0'),p(u,TM.two_doors,TM.two_doors+.5)*(1-.6*qd)); rise($('door1'),p(u,TM.two_doors+.4,TM.two_doors+.9));
rise($('lab0'),p(u,TM.two_doors+4.2,TM.two_doors+4.7)); $('stk7').setAttribute('x2',(262+296*p(u,TM.spotlight-.6,TM.spotlight)).toFixed(1));
rise($('spot'),p(u,TM.spotlight,TM.spotlight+.6)); rise($('lab1'),p(u,TM.spotlight+.3,TM.spotlight+.8));
rise($('quiet'),qd); rise($('pill'),p(u,TM.spotlight+7.5,TM.spotlight+8));

rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5)); rise($('pj'),p(u,TM.lightbulb,TM.lightbulb+.5));
const lit=u>=TM.lightbulb+3.3; $('bulbC').setAttribute('fill',lit?'var(--gain)':'var(--stage)'); $('rays').setAttribute('opacity',lit?(.6+.4*Math.sin(t*4)).toFixed(2):0);
rise($('qa'),p(u,TM.lightbulb+3.3,TM.lightbulb+3.8)); rise($('qb'),p(u,TM.lightbulb+3.7,TM.lightbulb+4.2)); rise($('qc'),p(u,TM.lightbulb+4.1,TM.lightbulb+4.6));