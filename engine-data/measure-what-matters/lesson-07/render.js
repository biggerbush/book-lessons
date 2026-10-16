rise($('card'),p(u,TM.report_card,TM.report_card+.6));
rise($('miss'),p(u,TM.report_card+6.6,TM.report_card+7.1)); $('missR').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));

rise($('tl'),p(u,TM.annual_review,TM.annual_review+.5));
TD.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.annual_review+.3+i*.15,TM.annual_review+.6+i*.15)));
TD[11].setAttribute('r',(22+(u>=TM.annual_review+2?4*Math.abs(Math.sin(t*3)):0)).toFixed(1));
rise($('late'),p(u,TM.old_folder,TM.old_folder+.6)); rise($('dread'),p(u,TM.stressed_pair,TM.stressed_pair+.6));

TL.forEach((g,i)=>rise(g,p(u,TM.cfr_letters+i*.4,TM.cfr_letters+i*.4+.5)));
WD.forEach((g,i)=>rise(g,p(u,TM.cfr_letters+3.8+i*.5,TM.cfr_letters+4.3+i*.5)));
rise($('gears'),p(u,TM.two_gears,TM.two_gears+.6));
const ga=t*20; GA.setAttribute('transform','rotate('+(ga-3.75).toFixed(2)+' 1000 500)'); GB.setAttribute('transform','rotate('+(13.5-ga*1.2).toFixed(2)+' 1265 500)');
rise($('coach'),p(u,TM.two_gears+3,TM.two_gears+3.6));

rise($('pp3'),p(u,TM.one_on_one,TM.one_on_one+.6));
CP.forEach((g,i)=>rise(g,p(u,TM.chat_bubbles+i*.5,TM.chat_bubbles+i*.5+.4)));
rise($('jg'),p(u,TM.chat_bubbles+5.3,TM.chat_bubbles+5.7)); strk('js',1052,190,p(u,TM.chat_bubbles+5.9,TM.chat_bubbles+6.4));
rise($('cg'),p(u,TM.chat_bubbles+6.3,TM.chat_bubbles+6.8));
MG.forEach(e=>e.setAttribute('class',u>=TM.chat_bubbles+6.3?'gain':'ink'));

rise($('pp4'),p(u,TM.two_arrows,TM.two_arrows+.5)); rise($('arr'),p(u,TM.two_arrows+.5,TM.two_arrows+1));
const fk=(t*.5)%1; $('fd0').setAttribute('cy',(300+370*fk).toFixed(1)); $('fd1').setAttribute('cy',(690-370*fk).toFixed(1));
rise($('clk'),p(u,TM.clock,TM.clock+.6)); $('hand').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 880 420)');
rise($('prob'),p(u,TM.clock+5.7,TM.clock+6.2)); $('ring').setAttribute('opacity',p(u,TM.clock+6.5,TM.clock+7));

rise($('tro'),p(u,TM.trophy,TM.trophy+.6));
rise($('peers'),p(u,TM.peer_thanks,TM.peer_thanks+.5));
AR.forEach((g,i)=>rise(g,p(u,TM.peer_thanks+.6+i*.5,TM.peer_thanks+1+i*.5)));
rise($('lab5'),p(u,TM.peer_thanks+2,TM.peer_thanks+2.5)); rise($('seen'),p(u,TM.peer_thanks+6.6,TM.peer_thanks+7.1));
PR.forEach(a=>a.forEach(e=>e.setAttribute('class',u>=TM.peer_thanks+6.6?'gain':'ink')));

rise($('oldr'),p(u,TM.adobe_office,TM.adobe_office+.6)); $('oldx').setAttribute('opacity',p(u,TM.adobe_office+2,TM.adobe_office+2.5));
rise($('yr'),p(u,TM.check_in,TM.check_in+.5));
YD.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.check_in+.3+i*.15,TM.check_in+.6+i*.15)));
rise($('chips6'),p(u,TM.check_in+2.5,TM.check_in+3)); rise($('team'),p(u,TM.happy_team,TM.happy_team+.6));

rise($('payg'),p(u,TM.pay_envelope,TM.pay_envelope+.6)); rise($('bars'),p(u,TM.stretch_line,TM.stretch_line+.5));
const sf=p(u,TM.stretch_line+1,TM.stretch_line+2.2); $('safe').setAttribute('height',(100*sf).toFixed(1)); $('safe').setAttribute('y',(560-100*sf).toFixed(1));
rise($('sumA'),p(u,TM.stretch_line+5.4,TM.stretch_line+5.9)); rise($('sumB'),p(u,TM.stretch_line+6,TM.stretch_line+6.5));

rise($('qa'),p(u,TM.calendar,TM.calendar+.5)); rise($('qb'),p(u,TM.calendar+.4,TM.calendar+.9)); rise($('cal'),p(u,TM.calendar+.8,TM.calendar+1.3));
CC.setAttribute('opacity',(.75+.25*Math.sin(t*3)).toFixed(2));
[0,1,2].forEach(i=>rise($('asks'+i),p(u,TM.calendar+6.6+i*.6,TM.calendar+7.1+i*.6)));