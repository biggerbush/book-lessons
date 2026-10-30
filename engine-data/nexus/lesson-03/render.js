rise($('tNote'),p(u,TM.title_card,TM.title_card+.6));
TC.forEach((c,i)=>rise(c,p(u,TM.title_card+.3+i*.15,TM.title_card+.8+i*.15)));
$('tLinks').setAttribute('opacity',p(u,TM.title_card+5.4,TM.title_card+6.4));

rise($('chimp'),p(u,TM.chimp_band,TM.chimp_band+.6));
const cs=TM.crowd_city,sh=cs+4.2;
CR.forEach((c,i)=>{const a=cs+(i%18)*.04+Math.floor(i/18)*.05;c.setAttribute('opacity',p(u,a,a+.4))});
rise($('crowdL'),p(u,cs+.5,cs+1));
LKD.forEach(i=>CR[i].setAttribute('fill',u>=sh?'var(--gain)':'var(--muted)'));
$('shL').setAttribute('opacity',p(u,sh,sh+.8)); rise($('shB'),p(u,sh,sh+.5)); rise($('link1'),p(u,sh+.6,sh+1.2));

rise($('k0'),p(u,TM.rock,TM.rock+.6)); rise($('k1'),p(u,TM.headache,TM.headache+.6)); rise($('k2'),p(u,TM.banknote,TM.banknote+.6));
$('ache').setAttribute('opacity',(.35+.65*Math.abs(Math.sin(t*4))).toFixed(2));
ML.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.banknote+.6+i*.25,TM.banknote+1+i*.25)));

// nations and money: shapes fade, labels stay legible
rise($('nat'),p(u,TM.flag,TM.flag+.6));
ACT.forEach((c,i)=>rise(c,p(u,TM.treaty+i*.6,TM.treaty+i*.6+.4)));
rise($('money'),p(u,TM.treaty+4.2,TM.treaty+4.8)); rise($('buy'),p(u,TM.treaty+5,TM.treaty+5.5)); rise($('believers'),p(u,TM.treaty+5.6,TM.treaty+6.2));
const fd=p(u,TM.treaty+9.9,TM.treaty+11.4);
['natS','monS','buyS'].forEach(id=>$(id).setAttribute('opacity',(1-.55*fd).toFixed(2)));
$('belW').setAttribute('opacity',(1-.8*fd).toFixed(2));
ACT.forEach(c=>{c.rr.setAttribute('stroke-dasharray',fd>0?'8 8':'none'); c.rr.setAttribute('stroke',fd>0?'var(--muted)':'var(--ink)')});
rise($('fades'),p(u,TM.treaty+9.9,TM.treaty+10.5));

rise($('hz'),p(u,TM.herzl,TM.herzl+.6)); rise($('bk'),p(u,TM.herzl+2.5,TM.herzl+3.1));
BG.forEach((g,i)=>{const a=TM.book_open+i*.4; rise(g,p(u,a,a+.4)); RY[i].setAttribute('opacity',p(u,a,a+.4))});
PP.forEach((q,i)=>{const c=u>=TM.book_open+1.8+i*.15?'gain':'ink'; q[0].setAttribute('class',c); q[1].setAttribute('class',c)});
rise($('rally'),p(u,TM.book_open+5,TM.book_open+5.6));

const s5=SC[5][0]/K;
rise($('dream'),p(u,s5+.4,s5+1)); rise($('office'),p(u,TM.clay_tablet-5.4,TM.clay_tablet-4.8));
WN.forEach((w,i)=>w.setAttribute('fill',u>=TM.clay_tablet-4.6+i*.15?'var(--gain)':'var(--line)'));
rise($('tab'),p(u,TM.clay_tablet,TM.clay_tablet+.6));
WG.forEach((w,i)=>{const a=TM.clay_tablet+.5+i*.05; w.setAttribute('opacity',p(u,a,a+.2))});
rise($('deed'),p(u,TM.deed_owner,TM.deed_owner+.6)); rise($('created'),p(u,TM.deed_owner+5,TM.deed_owner+5.6));

rise($('cab'),p(u,TM.filing_cab,TM.filing_cab+.6)); rise($('love'),p(u,TM.filing_cab+.8,TM.filing_cab+1.4));
COLD.forEach((c,i)=>rise(c,p(u,TM.filing_cab+4.2+i*.4,TM.filing_cab+4.6+i*.4)));
$('cabR').setAttribute('stroke',u>=TM.filing_cab+4.2?'var(--loss)':'var(--ink)');
rise($('city'),p(u,TM.sewer_pipe,TM.sewer_pipe+.6)); $('flow').setAttribute('stroke-dashoffset',(-t*80).toFixed(1));
BW.forEach((w,i)=>w.setAttribute('fill',u>=TM.sewer_pipe+1+i*.06?'var(--gain)':'var(--line)'));
rise($('run'),p(u,TM.sewer_pipe+2,TM.sewer_pipe+2.6));

rise($('c0'),p(u,TM.notebook,TM.notebook+.6));
NC.forEach((c,i)=>rise(c,p(u,TM.notebook+2+i*.6,TM.notebook+2.4+i*.6)));
rise($('c1'),p(u,TM.form_sheet,TM.form_sheet+.6));
FC.forEach((c,i)=>rise(c,p(u,TM.form_sheet+1.5+i*.6,TM.form_sheet+1.9+i*.6)));
rise($('bridge'),p(u,TM.form_sheet+5.4,TM.form_sheet+5.9)); rise($('layers'),p(u,TM.form_sheet+5.4,TM.form_sheet+6));

['qa','qb','qc','qd'].forEach((id,i)=>rise($(id),p(u,TM.question+i*.4,TM.question+i*.4+.5)));
rise($('qlab'),p(u,TM.question+1.8,TM.question+2.4)); rise($('wal'),p(u,TM.question+1.6,TM.question+2.2));
$('cash').setAttribute('opacity',(1-p(u,TM.question+3,TM.question+5)).toFixed(2));