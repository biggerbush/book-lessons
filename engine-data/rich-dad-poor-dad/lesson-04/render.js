const c0=p(u,.2,1.2),sl=p(u,TM.paycheck+1.5,TM.paycheck+3);
$('chk').setAttribute('transform','translate('+((1-c0)*200).toFixed(1)+' 0)');$('chk').setAttribute('opacity',c0);
$('slice').setAttribute('transform','translate('+((1-c0)*200-60*sl).toFixed(1)+' '+(-130*sl).toFixed(1)+') rotate('+(-12*sl).toFixed(1)+' 1155 345)');$('slice').setAttribute('opacity',c0);
rise($('ord'),p(u,TM.paycheck+5.4,TM.paycheck+6));

rise($('pA'),p(u,TM.two_dads,TM.two_dads+.5));rise($('pB'),p(u,TM.two_dads+.3,TM.two_dads+.8));
rise($('pa'),p(u,TM.poor_dad,TM.poor_dad+.6));rise($('pb'),p(u,TM.rich_dad,TM.rich_dad+.6));

const ar=p(u,TM.robin_hood+.3,TM.robin_hood+1.3);
$('arw').setAttribute('transform','translate('+(760-300*ar).toFixed(1)+' 470)');$('arw').setAttribute('opacity',p(u,TM.robin_hood,TM.robin_hood+.3));
$('bag').setAttribute('transform','translate(0 '+(ar>=1?(4*Math.sin(t*20)*Math.max(0,1-(u-TM.robin_hood-1.3))).toFixed(1):0)+')');
rise($('cal0'),p(u,TM.calendar,TM.calendar+.5));rise($('cal1'),p(u,TM.calendar+3,TM.calendar+3.5));
const wl=TM.calendar+7;rise($('wk'),p(u,wl-.3,wl+.3));rise($('wel'),p(u,wl,wl+.6));
WK.forEach((w,i)=>w.setAttribute('transform','translate(0 '+(u>=wl?-8*Math.abs(Math.sin(t*4+i)):0).toFixed(1)+')'));

const gs=.75+.35*p(u,TM.government,TM.government+3);
$('gov').setAttribute('transform','translate(360 590) scale('+gs.toFixed(3)+') translate(-360 -590)');
$('pipe').setAttribute('opacity',p(u,TM.government+.8,TM.government+1.4));
const es=p(u,TM.rich_escape,TM.rich_escape+1.2),tx=[p(u,TM.government+1.4,TM.government+2)*(1-es),p(u,TM.middle_class,TM.middle_class+.6),p(u,TM.middle_class+3,TM.middle_class+3.6)];
tx.forEach((k,i)=>{$('br'+i).setAttribute('opacity',k);$('tr'+i).setAttribute('fill-opacity',(.25*k).toFixed(3))});
rpG.setAttribute('transform','translate('+(220*es).toFixed(1)+' 0)');rpG.childNodes.forEach(n=>n.setAttribute('class',es>.5?'gain':'ink'));
rise($('esc'),p(u,TM.rich_escape+.4,TM.rich_escape+1));

rise($('shd'),p(u,TM.corporation,TM.corporation+.6));
CHP.forEach((c,i)=>{const a=TM.corporation+1.5+i*.9;rise(c,p(u,a,a+.4))});
rise($('lawg'),p(u,TM.lawyer,TM.lawyer+.6));rise($('gr'),p(u,TM.lawyer+4.1,TM.lawyer+4.6));rise($('sys'),p(u,TM.lawyer+4.1,TM.lawyer+4.7));
$('gearP').setAttribute('transform','rotate('+(t*40%360).toFixed(1)+' 1320 640)');

runFlow(F5,[TM.arrow_flow,TM.earn_box,TM.tax_box,TM.spend_box],u);rise($('note5'),p(u,TM.tax_box+1.5,TM.tax_box+2.1));
runFlow(F6,[TM.biz_flow,TM.biz_earn,TM.biz_spend,TM.biz_tax],u);rise($('same6'),p(u,TM.biz_tax+3.4,TM.biz_tax+4));

rise($('frm'),p(u,TM.four_parts,TM.four_parts+.6));
TL.forEach((g,i)=>{const a=TM.books+i*.8;rise(g,p(u,a,a+.4))});
rise($('prot'),p(u,TM.books+4.1,TM.books+4.7));rise($('glb'),p(u,TM.globe,TM.globe+.6));
$('mer0').setAttribute('rx',(90*Math.abs(Math.cos(t*.8))).toFixed(1));$('mer1').setAttribute('rx',(90*Math.abs(Math.sin(t*.8))).toFixed(1));

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.4,s8+.9));rise($('qb'),p(u,s8+.8,s8+1.3));rise($('qc'),p(u,s8+1.2,s8+1.7));
rise($('rcpt'),p(u,s8+2,s8+2.6));rise($('adv'),p(u,s8+7.3,s8+7.9));