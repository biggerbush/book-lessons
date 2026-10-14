const pq=(a,d=.5)=>p(u,a,a+d), rz=(id,a,d)=>rise($(id),pq(a,d)), mx=Math;
rz('cg',TM.stuck_cart);
$('cart').setAttribute('transform',`translate(${(u>TM.stuck_cart?3*mx.sin(t*23):0).toFixed(1)} 0)`);
$('eff').setAttribute('opacity',(.5+.5*mx.sin(t*6)).toFixed(2));
rz('phys',TM.stuck_cart+5);

rz('apl',TM.apple_newton); rz('ballp',TM.rolling_ball);
const bx=(t*150)%500; $('ball').setAttribute('transform',`translate(${(920+bx).toFixed(1)} 410)`); $('spinb').setAttribute('transform',`rotate(${(bx*1.43).toFixed(1)})`);
rz('hardy',TM.rolling_ball+3.8); rz('sofa',TM.sofa_person); rz('runp',TM.sofa_person+1.5);
$('run').setAttribute('transform',`translate(0 ${(-6*mx.abs(mx.sin(t*6))).toFixed(1)})`);

rz('mg2',TM.merry_go-.6); setM(G2,.5*pq(TM.strain_face,4)+.9*pq(TM.strain_face+4.5,3.5)); G2.rd[4].setAttribute('opacity',0);
rz('mt2',TM.merry_go+1); E2[0].setAttribute('width',(36+294*pq(TM.merry_go+1,1)).toFixed(1)); E2[1].setAttribute('width',(36+30*pq(TM.strain_face+4.5,3)).toFixed(1));
rz('sweat',TM.strain_face); rz('crp',TM.strain_face+1); rz('pushes',TM.strain_face);
PD.forEach((c,i)=>{c.style.fill=u>=(i?TM.strain_face+4.5+i*.7:TM.strain_face+.3)?'var(--loss)':'var(--stage)'});
rz('hw',TM.strain_face+4.5);

const d3=mx.max(0,u-TM.spin_lines), a3=d3<4?.25*d3*d3:4+2*(d3-4);
setM(G3,1.4+a3);
$('spin').setAttribute('stroke-dashoffset',(-a3*80).toFixed(1)); $('spin').setAttribute('opacity',(.7*pq(TM.spin_lines,1)).toFixed(2));
const sp=pq(TM.spin_lines,8); E3[0].setAttribute('width',(330-280*sp).toFixed(1)); E3[1].setAttribute('width',(66+264*sp).toFixed(1));
const tk=u>=TM.one_finger&&u<TM.one_finger+3?((u-TM.one_finger)%1):1; $('tap').setAttribute('r',(10+40*tk).toFixed(1)); $('tap').setAttribute('opacity',(1-tk).toFixed(2));
const hop=pq(TM.one_finger+3,.6); G3.kid.setAttribute('opacity',(1-hop).toFixed(2)); G3.rd[4].setAttribute('opacity',hop.toFixed(2));
rz('tapl',TM.one_finger); rz('mom',TM.one_finger+7); rz('pay',TM.one_finger+8.4);

rz('sun',TM.sunrise,.8); rz('mor',TM.sunrise+3); rz('eve',TM.sunrise+3.6);
ROWS.forEach((g,i)=>rise(g,pq(TM.routine_list+i*.4)));
$('cols').setAttribute('opacity',pq(TM.routine_list+2.5).toFixed(2)); rz('nodeb',TM.routine_list+2.5); rz('brush',TM.routine_list+6.2);

rz('pool',TM.swimmer-.6);
$('swm').setAttribute('transform',`translate(${(250+(t*110)%560).toFixed(1)} 390)`); $('arm').setAttribute('transform',`rotate(${((t*300)%360).toFixed(0)})`);
CP.forEach(([g,r,tx],i)=>{rise(g,pq(TM.swimmer+2+i*.5)); const on=u>=TM.stopwatch&&mx.floor(t*1.5)%4===i; r.style.fill=on?'var(--gain)':'var(--stage)'; tx.style.fill=on?'var(--on-gain)':'var(--ink)'});
rz('loopa',TM.swimmer+4.2); rz('stw',TM.stopwatch);
$('hand').setAttribute('transform',`rotate(${(u>=TM.stopwatch?(u-TM.stopwatch)*240:0).toFixed(1)} 1220 450)`); rz('peak',TM.stopwatch+1.5);

rz('pump',TM.water_pump-.6);
const pm=u>=TM.water_pump&&u<TM.empty_bucket; $('handle').setAttribute('transform',`rotate(${pm?(16*mx.sin(t*5)).toFixed(1):0} 500 320)`);
const dr=pq(TM.empty_bucket+1,2.5), L=(.8*p(u,TM.water_pump,TM.water_gush)+.2*pq(TM.water_gush,.6))*(1-dr);
$('wl').setAttribute('y',(812-492*L).toFixed(1)); $('wl').setAttribute('height',(492*L).toFixed(1));
$('strm').setAttribute('opacity',L>.97?1:0);
const bv=pq(TM.water_gush+.3,2)*(1-dr); $('bw').setAttribute('y',(518-66*bv).toFixed(1)); $('bw').setAttribute('height',(66*bv).toFixed(1));
rz('w0',TM.water_pump+1); rz('w1',TM.water_gush); rz('w2',TM.empty_bucket); rz('w3',TM.empty_bucket+2); rz('drn',TM.empty_bucket+1);

rz('metro',TM.metronome-.6);
const ma=u>=TM.metronome?.25*mx.sin(t*3.2):0;
$('marm').setAttribute('x2',(240+220*mx.sin(ma)).toFixed(1)); $('marm').setAttribute('y2',(520-220*mx.cos(ma)).toFixed(1));
$('mw').setAttribute('cx',(240+136*mx.sin(ma)).toFixed(1)); $('mw').setAttribute('cy',(520-136*mx.cos(ma)).toFixed(1));
rz('bars1',TM.metronome+4.2); rz('bars2',TM.metronome+5);
rz('cal',TM.calendar-.5); CK.forEach((c,i)=>c.setAttribute('opacity',pq(TM.calendar+i*.35,.25).toFixed(2)));
rz('kb',TM.calendar+1); rz('whl',TM.calendar);
const q7=mx.max(0,u-TM.calendar); $('whs').setAttribute('transform',`rotate(${(30*t+20*q7*q7).toFixed(1)} 1370 720)`);

rz('qa',TM.small_step); rz('qb',TM.small_step+.4); rz('qc',TM.small_step+.8); rz('push8',TM.small_step+7.4);
const bp=pq(TM.small_step+7.4,2.5); $('b8').setAttribute('transform',`translate(${(1300+100*bp).toFixed(1)} 560) rotate(${(bp*95).toFixed(1)})`);