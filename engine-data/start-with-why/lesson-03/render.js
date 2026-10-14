const R=(e,a,d=.5)=>rise(typeof e==='string'?$(e):e,p(u,a,a+d));
CI.forEach((g,i)=>{const k=p(u,TM.shopping_cart+i*.5,TM.shopping_cart+i*.5+.9);g.setAttribute('transform','translate(0 '+(-220*(1-k)).toFixed(1)+')');g.setAttribute('opacity',k.toFixed(2))});
R('struggle',TM.shopping_cart+4.6);

drw($('forkL'),p(u,TM.two_paths,TM.two_paths+1.5));drw($('forkR'),p(u,TM.two_paths+.4,TM.two_paths+1.9));
R('pup',TM.puppet);$('pupFig').setAttribute('transform','rotate('+(5*Math.sin(t*1.8)).toFixed(2)+' 460 240)');
R('bulb',TM.lightbulb);$('rays').setAttribute('opacity',(.55+.45*Math.sin(t*3)).toFixed(2));
$('forkL').style.stroke=u>=TM.lightbulb+5?'var(--loss)':'';R('works',TM.lightbulb+5);

R('tag',TM.price_tag);R('bottle',TM.drug_bottle);
const c0=TM.drug_bottle+3.7;R('chartA',c0-.4);
const se=700+760*p(u,c0,c0+5.6);let pts='700,520 ';for(let x=706;x<=se;x+=6){let y=520;SX.forEach((s,i)=>{if(x>=s)y-=(200-i*20)*Math.exp(-(x-s)/45)});pts+=x+','+y.toFixed(1)+' '}
$('spike').setAttribute('points',pts);
cuts.forEach((g,i)=>R(g,c0+5.6*(SX[i]-700)/760,.4));

R('gift',TM.gift_box);R('reb',TM.rebate_form);
const fm=p(u,TM.rebate_form+3.5,TM.rebate_form+5);
FM.forEach(([g,x],i)=>{const a=TM.rebate_form+1.7+i*.2,k=p(u,a,a+.4);if(i===1||i===4){g.setAttribute('transform','translate('+((1345-x)*fm).toFixed(1)+' '+(-200*fm).toFixed(1)+')');g.setAttribute('opacity',(k*(1-p(u,TM.rebate_form+4.6,TM.rebate_form+5))).toFixed(2))}else g.setAttribute('opacity',(k*(1-.65*fm)).toFixed(2))});
R('unsent',TM.rebate_form+4.6);R('rel',TM.rebate_form+7.1);

R('cloud',TM.storm_cloud);R('buyer',TM.storm_cloud+.3);
$('bolt').setAttribute('opacity',Math.sin(t*5)>.3?1:.25);
$('buyerFig').setAttribute('transform','translate('+(u>=TM.storm_cloud?3*Math.sin(t*25):0).toFixed(1)+' 0)');
R('q4',TM.ibm_badge);R('boxes',TM.ibm_badge+1.5);
const ib=u>=TM.ibm_badge+6.2;BX[1][0].setAttribute('fill',ib?'var(--gain)':'var(--stage)');BX[1][0].setAttribute('stroke',ib?'var(--gain)':'var(--ink)');BX[1][1].style.fill=ib?'var(--on-gain)':'';
R('pick',TM.ibm_badge+6.2);R('loy',TM.ibm_badge+12);
$('loyFill').setAttribute('width',(36+20*Math.abs(Math.sin(t*2))).toFixed(1));

R('phone',TM.flip_phone);$('spark').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 430 250)');
R('razr',TM.flip_phone+2.6);R('chart5',TM.sales_chart);
drw($('upL'),p(u,TM.sales_chart+.3,TM.sales_chart+2));R('hit',TM.sales_chart+1.8);
drw($('downL'),p(u,TM.sales_chart+2.5,TM.sales_chart+4.5));R('fade',TM.sales_chart+4);
R('rivals',TM.sales_chart+5.7);RV.forEach((g,i)=>R(g,TM.sales_chart+5.9+i*.3,.4));

R('reg',TM.cash_register);$('rcpt').setAttribute('height',(130*p(u,TM.cash_register+.3,TM.cash_register+1.3)).toFixed(1));
$('rcpt').setAttribute('y',(400-130*p(u,TM.cash_register+.3,TM.cash_register+1.3)).toFixed(1));
R('deal',TM.cash_register+1.2);R('heart',TM.cash_register+2.6);
R('costL',TM.rising_cost);BR.forEach((b,i)=>R(b,TM.rising_cost+i*.5,.4));
R('car',TM.rising_cost+4.6);WD.forEach((d,i)=>d.setAttribute('opacity',(Math.floor(t*2.5)%4)>i?1:.2));

CD.forEach(([G,r,a],i)=>{R(G,TM.magnifier+i*.2,.4);const on=u>=TM.magnifier+3.3+i*.6;r.setAttribute('stroke',on?'var(--loss)':'var(--ink)');a.style.fill=on?'var(--loss)':''});
$('mag').setAttribute('transform','translate('+(275+1050*p(u,TM.magnifier+.5,TM.magnifier+3)).toFixed(1)+' 360)');
$('mag').setAttribute('opacity',(p(u,TM.magnifier,TM.magnifier+.4)*(1-p(u,TM.magnifier+3,TM.magnifier+3.4))).toFixed(2));
R('hand',TM.handshake);

R('cal',TM.calendar);$('calMark').setAttribute('opacity',p(u,TM.calendar+.8,TM.calendar+1.2).toFixed(2));
R('qa',TM.calendar+4.6);R('qb',TM.calendar+5);R('qc',TM.calendar+5.4);