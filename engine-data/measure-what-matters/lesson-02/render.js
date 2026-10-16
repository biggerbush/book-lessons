const ar=p(u,TM.title_card+.2,TM.title_card+1.3);$('arw').setAttribute('transform',`translate(${(1350-80*ar).toFixed(1)} ${(340+80*ar).toFixed(1)})`);$('arw').setAttribute('opacity',cl(ar*5));
rise($('prv'),p(u,TM.title_card+2.6,TM.title_card+3.1));

rise($('doe'),p(u,TM.young_doerr,TM.young_doerr+.5));rise($('grv'),p(u,TM.andy_grove,TM.andy_grove+.5));rise($('wb'),p(u,TM.whiteboard,TM.whiteboard+.6));
$('arc1').setAttribute('opacity',p(u,TM.whiteboard+2,TM.whiteboard+2.8));rise($('dec'),p(u,TM.whiteboard+2.4,TM.whiteboard+2.9));
$('nb1').setAttribute('class',u>=TM.whiteboard+2.8?'gain':'ink');

rise($('bk'),p(u,TM.drucker_book,TM.drucker_book+.5));rise($('gl'),p(u,TM.drucker_book+1.5,TM.drucker_book+2));
const mt=p(u,TM.measure_tape,TM.measure_tape+1);
$('fog').setAttribute('opacity',(p(u,TM.foggy_goal,TM.foggy_goal+1)*(1-mt)).toFixed(3));$('fog').setAttribute('transform',`translate(${(20*Math.sin(t*.7)).toFixed(1)} 0)`);
rise($('qm2'),p(u,TM.foggy_goal+3.8,TM.foggy_goal+4.3)*(1-mt));
const tp=p(u,TM.measure_tape,TM.measure_tape+1.5);$('tape').setAttribute('opacity',cl(tp*5));$('tr').setAttribute('width',(960*tp).toFixed(1));
TK.forEach((k,i)=>k.setAttribute('opacity',tp*25>i?1:0));$('tcs').setAttribute('opacity',cl(tp*5));
rise($('tl'),p(u,TM.measure_tape+1,TM.measure_tape+1.5));$('fl2').setAttribute('class',u>=TM.measure_tape+1?'gain':'ink');

rise($('flg'),p(u,TM.mountain_flag,TM.mountain_flag+.5));rise($('sub3'),p(u,TM.mountain_flag+2.6,TM.mountain_flag+3.1));
TG.forEach((g,i)=>{const a=TM.mountain_flag+6.7+i*.6;rise(g,p(u,a,a+.4))});
rise($('bak'),p(u,TM.bakery_shop,TM.bakery_shop+.6));rise($('obj3'),p(u,TM.bakery_shop+1,TM.bakery_shop+1.5));

rise($('lad'),p(u,TM.ladder_rungs,TM.ladder_rungs+.5));rise($('sub4'),p(u,TM.ladder_rungs+3,TM.ladder_rungs+3.5));
RG.forEach((r,i)=>r.setAttribute('stroke',u>=TM.ladder_rungs+3.2+i*.5?'var(--gain)':'var(--line)'));
rise($('chk'),p(u,TM.checklist,TM.checklist+.5));
rise($('yes1'),p(u,TM.yes_no_sign,TM.yes_no_sign+.5));rise($('no1'),p(u,TM.yes_no_sign+1.4,TM.yes_no_sign+1.9));
TKS.forEach((k,i)=>k.setAttribute('opacity',p(u,TM.yes_no_sign+.3+i*.3,TM.yes_no_sign+.6+i*.3)));

rise($('my'),p(u,TM.mayer,TM.mayer+.6));
FEW.forEach((g,i)=>{const a=TM.three_cards+i*.4;rise(g,p(u,a,a+.4))});rise($('fewl'),p(u,TM.three_cards+2,TM.three_cards+2.5));
MANY.forEach((g,i)=>{const a=TM.three_cards+5+i*.12;g.setAttribute('opacity',p(u,a,a+.3))});rise($('manyl'),p(u,TM.three_cards+6.4,TM.three_cards+6.9));

rise($('fc'),p(u,TM.formula_card,TM.formula_card+.5));
const fl=u>=TM.formula_card+3.4;['1','2'].forEach(k=>{$('sl'+k).style.fill=fl?'var(--gain)':'var(--stage)';$('st'+k).style.fill=fl?'var(--on-gain)':'var(--muted)'});
rise($('ex'),p(u,TM.smiley_meter,TM.smiley_meter+.6));rise($('gg'),p(u,TM.smiley_meter+.5,TM.smiley_meter+1));
const sv=7+2*p(u,TM.smiley_meter+2,TM.smiley_meter+4),nq=pt(sv,130);ND.setAttribute('x2',nq[0].toFixed(1));ND.setAttribute('y2',nq[1].toFixed(1));
GN.textContent=Math.round(sv);GA.setAttribute('opacity',p(u,TM.smiley_meter+2,TM.smiley_meter+4));

rise($('nb7'),p(u,TM.notebook,TM.notebook+.5));rise($('ob7'),p(u,TM.notebook+.6,TM.notebook+1.1));
let px=170,py=520;LN.forEach((l,i)=>{const a=TM.pencil+.4+i*1.2,k=lin(u,a,a+1);l.setAttribute('x2',(170+390*k).toFixed(1));PL[i].setAttribute('opacity',p(u,a+1,a+1.2));if(u>=a){px=170+390*k;py=520+i*80}});
$('pen7').setAttribute('transform',`translate(${px.toFixed(1)} ${(py+4).toFixed(1)})`);$('pen7').setAttribute('opacity',p(u,TM.pencil,TM.pencil+.4));
rise($('sk'),p(u,TM.pencil,TM.pencil+.5));const cv=p(u,TM.pencil+4.2,TM.pencil+4.6);$('skq').setAttribute('opacity',1-cv);$('skc').setAttribute('opacity',cv);
rise($('fr'),p(u,TM.sticky_note,TM.sticky_note+.5));const sk=p(u,TM.sticky_note+.4,TM.sticky_note+1.1);
$('stk').setAttribute('transform',`translate(0 ${(-80*(1-sk)).toFixed(1)}) rotate(-4 1320 570)`);$('stk').setAttribute('opacity',sk);

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qg'),p(u,TM.question_mark+.5,TM.question_mark+1));
$('qg').setAttribute('transform',`translate(0 ${(8*Math.sin(t*2)).toFixed(1)})`);
rise($('qb'),p(u,TM.question_mark+3.4,TM.question_mark+3.9));rise($('qc'),p(u,TM.question_mark+3.8,TM.question_mark+4.3));
rise($('qd'),p(u,TM.question_mark+4.2,TM.question_mark+4.7));rise($('lbl8'),p(u,TM.question_mark+5,TM.question_mark+5.5));