R.forEach((g,i)=>rise(g,p(u,TM.horsemen+i*.5,TM.horsemen+i*.5+.6)));
$('riders').setAttribute('transform','translate('+(10*Math.sin(t*.4)).toFixed(1)+' 0)');
rise($('slow'),p(u,TM.horsemen+6,TM.horsemen+6.6));

[TM.heart,TM.cancer_cell,TM.brain,TM.sugar_cube].forEach((a,i)=>rise(cards[i],p(u,a,a+.5)));
rise($('tog'),p(u,TM.sugar_cube+3.3,TM.sugar_cube+3.9));

rise($('ticks'),p(u,TM.timeline,TM.timeline+.5));
const n=Math.max(1,Math.round(p(u,TM.timeline,TM.timeline+3.6)*(CP.length-1)));
$('curve').setAttribute('points',CP.slice(0,n+1).map(q=>q[0].toFixed(0)+','+q[1].toFixed(0)).join(' '));
$('curve').setAttribute('opacity',u>=TM.timeline?1:0);
rise($('ice'),p(u,TM.iceberg,TM.iceberg+.6)); rise($('diag'),p(u,TM.iceberg+4.2,TM.iceberg+4.8));

rise($('artg'),p(u,TM.artery,TM.artery+.5)); rise($('aut'),p(u,TM.artery+1.3,TM.artery+1.8));
BC.forEach((c,i)=>{c.setAttribute('cx',(180+((i*90+t*90)%720)).toFixed(1));c.setAttribute('fill',i%2&&u>=TM.blood_tube?'var(--loss)':'var(--muted)')});
const h=35*p(u,TM.artery+1.3,TM.artery+3.5)+28*p(u,TM.young_man,TM.blood_tube+7)+7*p(u,TM.blood_tube+7,TM.blood_tube+14);
$('plaque').setAttribute('d','M380 496Q530 '+(496-2*h).toFixed(1)+' 680 496Z');
rise($('young'),p(u,TM.young_man,TM.young_man+.5)); rise($('tube'),p(u,TM.blood_tube,TM.blood_tube+.5)); rise($('lower'),p(u,TM.blood_tube+7,TM.blood_tube+7.6));

rise($('liv'),p(u,TM.liver,TM.liver+.5));
FD.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.liver+1+i*.3,TM.liver+1.3+i*.3)));
rise($('ins'),p(u,TM.insulin_key,TM.insulin_key+.5));
const kc=(t*.6)%1, kd=kc<.5?ease(kc*2):1-ease((kc-.5)*2);
$('key').setAttribute('transform','translate('+(300+130*kd).toFixed(1)+' 740)');
AR.forEach((g,i)=>rise(g,p(u,TM.arrows+i*.8,TM.arrows+i*.8+.5)));

const s5=SC[5][0]/K;
rise($('late'),p(u,s5+.3,s5+.8));
SD.forEach((c,i)=>c.setAttribute('opacity',p(u,s5+1+i*.15,s5+1.3+i*.15)));
$('hard').setAttribute('opacity',p(u,s5+2.5,s5+3));
rise($('easy'),p(u,TM.magnifier-.3,TM.magnifier+.2)); rise($('magw'),p(u,TM.magnifier,TM.magnifier+.5));
const mk5=p(u,TM.magnifier,TM.small_tumor);
$('mag').setAttribute('transform','translate('+(960+200*mk5).toFixed(1)+' '+(560-108*mk5+40*Math.sin(mk5*Math.PI*2)).toFixed(1)+')');
const fd=u>=TM.small_tumor; $('lens').setAttribute('stroke',fd?'var(--gain)':'var(--ink)');
$('ring').setAttribute('opacity',p(u,TM.small_tumor,TM.small_tumor+.4)*(fd?.7+.3*Math.sin(t*5):0));
$('easyl').setAttribute('opacity',p(u,TM.small_tumor+.5,TM.small_tumor+1));
rise($('beat'),p(u,TM.small_tumor+1.5,TM.small_tumor+2.1));

const s6=SC[6][0]/K;
rise($('bigbrain'),p(u,s6+.4,s6+1)); rise($('gn'),p(u,TM.gene,TM.gene+.5));
$('shd').setAttribute('stroke-dashoffset',(1-p(u,TM.shield,TM.shield+1.2)).toFixed(3));
$('shd').setAttribute('opacity',u>=TM.shield?1:0);
$('shf').setAttribute('opacity',p(u,TM.shield+.8,TM.shield+1.4));
rise($('prev'),p(u,TM.shield+1,TM.shield+1.5));
rise($('hab'),p(u,TM.shield+4.5,TM.shield+5));
HR.forEach((g,i)=>rise(g,p(u,TM.shield+4.8+i*.5,TM.shield+5.3+i*.5)));

rise($('cal'),p(u,TM.checklist,TM.checklist+.5)); rise($('lab70'),p(u,TM.checklist+1,TM.checklist+1.5));
rise($('card'),p(u,TM.checklist+.6,TM.checklist+1.1));
CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.doctor+.8+i*1.2,TM.doctor+1.1+i*1.2)));
rise($('doc'),p(u,TM.doctor,TM.doctor+.5));
const hl=u>=TM.calendar; CB[1][0].setAttribute('fill',hl?'var(--gain)':'var(--stage)'); CB[1][0].setAttribute('stroke',hl?'var(--gain)':'var(--ink)');
CB[1][1].style.fill=hl?'var(--on-gain)':'var(--ink)'; CB[4][1].style.fill=hl?'var(--muted)':'var(--ink)';
rise($('most'),p(u,TM.calendar,TM.calendar+.5));

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+.7,s8+1.2));
rise($('ph'),p(u,TM.phone,TM.phone+.5)); rise($('wk'),p(u,TM.phone+.3,TM.phone+.8));
$('phck').setAttribute('opacity',p(u,TM.phone+.8,TM.phone+1.2));
const rc=t%2.5, ang=u>=TM.phone&&rc<.6?6*Math.sin(rc*40)*(1-rc/.6):0;
$('phr').setAttribute('transform','rotate('+ang.toFixed(2)+' 1325 420)');