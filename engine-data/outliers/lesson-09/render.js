ST.forEach(([x,s,h],i)=>{const a=TM.title_rice+i*.2,k=p(u,a,a+1.6),y=510-150*k,w=6*Math.sin(t*1.5+i)*k;s.setAttribute('x2',(x+w).toFixed(1));s.setAttribute('y2',y.toFixed(1));h.setAttribute('transform','translate('+(x+w).toFixed(1)+' '+y.toFixed(1)+')');h.setAttribute('opacity',k)});
rise($('tcard'),p(u,TM.title_rice+1.5,TM.title_rice+2));

DG.forEach((g,i)=>rise(g,p(u,TM.digit_string+.8+i*.45,TM.digit_string+1.2+i*.45)));
rise($('rowE'),p(u,TM.english_speak,TM.english_speak+.5));rise($('rowC'),p(u,TM.chinese_speak,TM.chinese_speak+.5));
$('nE').textContent=fillS(SE,7,TM.english_speak+.6,'var(--ink)',u);
$('nC').textContent=fillS(SLC,9,TM.chinese_speak+.6,'var(--gain)',u);
rise($('cap1'),p(u,TM.chinese_speak+3.5,TM.chinese_speak+4));

rise($('en'),p(u,TM.eleven_card,TM.eleven_card+.5));rise($('cjk'),p(u,TM.ten_one,TM.ten_one+.5));
rise($('bl1'),p(u,TM.ten_one+1,TM.ten_one+1.5));rise($('bl2'),p(u,TM.ten_one+3,TM.ten_one+3.5));
rise($('cnt'),p(u,TM.count_forty,TM.count_forty+.5));
const kc=p(u,TM.count_forty+.4,TM.count_forty+2.4);
$('barC').setAttribute('width',1040*kc);$('nCC').setAttribute('x',140+1040*kc);$('nCC').textContent=Math.round(40*kc);
$('barA').setAttribute('width',390*kc);$('nAA').setAttribute('x',140+390*kc);$('nAA').textContent=Math.round(15*kc);

rise($('field'),p(u,TM.paddy_field,TM.paddy_field+.5));
SD.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.paddy_field+.6+i*.08,TM.paddy_field+.9+i*.08)));
rise($('farmer'),p(u,TM.farmer_bent,TM.farmer_bent+.5));$('fbody').setAttribute('transform','translate(0 '+(4*Math.sin(t*2.5)).toFixed(1)+')');
TK.forEach((g,i)=>rise(g,p(u,TM.farmer_bent+.8+i*.7,TM.farmer_bent+1.2+i*.7)));
rise($('calg'),p(u,TM.calendar_full,TM.calendar_full+.5));
CAL.forEach((r,i)=>{const a=TM.calendar_full+.4+i*.12,h=152*p(u,a,a+.6);r.setAttribute('y',760-h);r.setAttribute('height',h)});
rise($('hrs'),p(u,TM.calendar_full+3,TM.calendar_full+3.5));$('hv').textContent='Up to '+Math.round(3000*p(u,TM.calendar_full+3,TM.calendar_full+4.5)).toLocaleString('en-US');

rise($('pa'),p(u,TM.harvest_basket,TM.harvest_basket+.5));
const hk=p(u,TM.harvest_basket+.5,TM.harvest_basket+3);$('eff').setAttribute('width',400*hk);$('mound').setAttribute('ry',10+100*hk);
rise($('pb'),p(u,TM.proverb_scroll,TM.proverb_scroll+.5));$('sun').setAttribute('cy',480-80*p(u,TM.proverb_scroll+.5,TM.proverb_scroll+2.5));
rise($('pc'),p(u,TM.winter_sleep,TM.winter_sleep+.5));
sw($('riceL'),p(u,TM.winter_sleep+.3,TM.winter_sleep+1.5));sw($('euL'),p(u,TM.winter_sleep+1.2,TM.winter_sleep+3));
rise($('zzz'),p(u,TM.winter_sleep+2.6,TM.winter_sleep+3));$('zzz').setAttribute('opacity',p(u,TM.winter_sleep+2.6,TM.winter_sleep+3)*(.7+.3*Math.sin(t*2)));
rise($('pcap'),p(u,TM.winter_sleep+3.5,TM.winter_sleep+4));

rise($('prob'),p(u,TM.math_problem,TM.math_problem+.5));rise($('trail'),p(u,TM.math_problem+1.5,TM.math_problem+2));
rise($('kidg'),p(u,TM.math_problem+2.5,TM.math_problem+3));
const kp=along(p(u,TM.patient_kid,TM.patient_kid+5));kid.setAttribute('transform','translate('+kp[0].toFixed(1)+' '+(kp[1]-Math.abs(4*Math.sin(t*5))).toFixed(1)+')');
rise($('pat'),p(u,TM.patient_kid+.3,TM.patient_kid+.8));

rise($('form'),p(u,TM.survey_form,TM.survey_form+.5));
TI.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.survey_form+.8+i*.5,TM.survey_form+1+i*.5)));
rise($('lists'),p(u,TM.two_lists,TM.two_lists+.5));
LK6.forEach((e,i)=>sw(e,p(u,TM.two_lists+1+i*.3,TM.two_lists+1.6+i*.3)));
const tn=u>=TM.top_nations;
[0,1,2].forEach(i=>[LR[0][i],LR[1][SIG[i]]].forEach(c=>{c[0].style.fill=tn?'var(--gain)':'var(--stage)';c[1].style.fill=tn?'var(--on-gain)':''}));
rise($('rice6'),p(u,TM.top_nations+.3,TM.top_nations+.8));

rise($('dna'),p(u,TM.heritage_tree,TM.heritage_tree+.5));$('dnax').setAttribute('opacity',p(u,TM.heritage_tree+1.5,TM.heritage_tree+2));
rise($('tree'),p(u,TM.heritage_tree+2.5,TM.heritage_tree+3));
PP.forEach((row,g)=>row.forEach(f=>f.forEach(e=>e.setAttribute('class',u>=TM.heritage_tree+4.9+g*1.2?'gain':'ink'))));
rise($('tlab'),p(u,TM.heritage_tree+7.3,TM.heritage_tree+7.8));
rise($('gauge'),p(u,TM.grit_meter,TM.grit_meter+.5));
const gk=p(u,TM.grit_meter+.4,TM.grit_meter+2.5);sw($('garc'),gk*.85);
$('needle').setAttribute('transform','rotate('+(153*gk+2*Math.sin(t*3)*gk).toFixed(1)+' 1270 560)');
rise($('cap7'),p(u,TM.grit_meter+1,TM.grit_meter+1.5));

rise($('qa'),p(u,TM.timer_ten,TM.timer_ten+.5));rise($('qb'),p(u,TM.timer_ten+.4,TM.timer_ten+.9));rise($('qc'),p(u,TM.timer_ten+.8,TM.timer_ten+1.3));
rise($('watch'),p(u,TM.timer_ten+.3,TM.timer_ten+.8));
const wa=Math.min(359.9,360*p(u,TM.timer_ten+1,TM.timer_ten+7)),wr=wa*Math.PI/180;
$('sec').setAttribute('d','M1260 470L1260 330A140 140 0 '+(wa>180?1:0)+' 1 '+(1260+140*Math.sin(wr)).toFixed(1)+' '+(470-140*Math.cos(wr)).toFixed(1)+'Z');
$('hand').setAttribute('transform','rotate('+wa.toFixed(1)+' 1260 470)');