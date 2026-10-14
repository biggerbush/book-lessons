const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
$('hh').setAttribute('transform',`rotate(${(t*8).toFixed(1)} 1300 320)`);$('mh').setAttribute('transform',`rotate(${(t*96).toFixed(1)} 1300 320)`);
R('clk',TM.hook_clock,.6);rise(t0a,p(u,TM.hook_clock+1.5,TM.hook_clock+2));rise(t0b,p(u,TM.hook_clock+3,TM.hook_clock+3.5));

R('pa1',TM.self_now);R('pb1',TM.self_memory);
const nf=Math.floor(t*1.2)%5;FL.forEach((f,i)=>f.setAttribute('fill',i===nf?'var(--gain)':'var(--stage)'));
$('spl').setAttribute('opacity',p(u,TM.split_line,TM.split_line+.5));R('bb0',TM.split_line+.8);R('bb1',TM.split_line+1.4);

R('la',TM.patient_a);R('lb',TM.patient_b);
BA.forEach((b,i)=>{const a=TM.patient_a+1+i*.25;b.setAttribute('opacity',p(u,a,a+.3));b.setAttribute('class',i===7&&u>=TM.pain_graph+3.4?'loss':'ink')});
BB.forEach((b,i)=>{const a=TM.patient_b+.8+i*.1;b.setAttribute('opacity',p(u,a,a+.3));b.setAttribute('class',u>=TM.pain_graph?'loss':'ink')});
R('tot',TM.pain_graph);R('rem',TM.pain_graph+3.4);

const ev=6-4*p(u,TM.end_marker+3,TM.end_marker+4.5),V=[1,3,5,8.5,6,5,4.5,5,4,4,ev,ev];
let pd='';V.forEach((v,i)=>pd+=(i?'L':'M')+(200+i*100)+' '+(720-45*v).toFixed(1));
$('pc').setAttribute('d',pd);$('pc').setAttribute('stroke-dashoffset',1-p(u,TM.peak_spike,TM.peak_spike+2));
$('pf').setAttribute('d',pd+'L1300 720L200 720Z');$('pf').setAttribute('opacity',.25*p(u,TM.peak_spike+.5,TM.peak_spike+1.5)*(1-p(u,TM.peak_spike+3,TM.peak_spike+4)));
const ey=720-45*ev,my=720-45*(8.5+ev)/2;
$('en').setAttribute('cy',ey.toFixed(1));$('enl').setAttribute('y',(ey-30).toFixed(1));
$('ml').setAttribute('y1',my.toFixed(1));$('ml').setAttribute('y2',my.toFixed(1));$('mlt').setAttribute('y',(my+8).toFixed(1));
R('pk',TM.peak_spike+3);R('eng',TM.peak_spike+4);R('mem3',TM.end_marker);R('frm',TM.end_marker+.4);

R('sw4',TM.stopwatch);R('bars4',TM.stopwatch+.3);
$('swh').setAttribute('transform',`rotate(${(1080*p(u,TM.stopwatch,TM.stopwatch+8)).toFixed(1)} 330 480)`);
const gr=p(u,TM.stopwatch+.5,TM.stopwatch+6);$('db').setAttribute('width',(200+640*gr).toFixed(1));$('mb').setAttribute('width',(380+24*gr).toFixed(1));
R('lx',TM.stopwatch+3.7);R('lm',TM.stopwatch+5);$('db').setAttribute('opacity',1-.7*p(u,TM.faded_bar,TM.faded_bar+1));R('dn',TM.faded_bar);

R('cw0',TM.cold_bowl);R('cw1',TM.longer_trial);
HD[0].setAttribute('transform',`translate(0 ${(90*p(u,TM.cold_bowl+.6,TM.cold_bowl+1.6)).toFixed(1)})`);
HD[1].setAttribute('transform',`translate(0 ${(90*p(u,TM.longer_trial+.6,TM.longer_trial+1.6)).toFixed(1)})`);
WM.setAttribute('opacity',p(u,TM.longer_trial+3,TM.longer_trial+6).toFixed(3));
R('t1a',TM.cold_bowl+3);R('t2a',TM.longer_trial+2);R('t2b',TM.longer_trial+4);R('wrs',TM.longer_trial+7.4);
R('chs',TM.choice_arrow);const ch=u>=TM.choice_arrow;$('cwr').setAttribute('stroke',ch?'var(--gain)':'var(--line)');$('cwr').setAttribute('stroke-width',ch?6:3);

R('lis',TM.concert_hall);
WV.forEach((l,i)=>{const h=(20+50*Math.abs(Math.sin(i*.9)))*(.75+.25*Math.sin(t*4+i)),a=TM.concert_hall+i*.06;l.setAttribute('y1',(380-h).toFixed(1));l.setAttribute('y2',(380+h).toFixed(1));l.setAttribute('opacity',p(u,a,a+.2))});
R('scr',TM.scratch_mark);R('brk',TM.scratch_mark+5.4);R('rw0',TM.scratch_mark+5.4);R('rw1',TM.scratch_mark+9.6);
const sp=1040*p(u,TM.scratch_mark+10.2,TM.scratch_mark+12);$('spo').setAttribute('width',sp.toFixed(1));$('spo').setAttribute('x',(1440-sp).toFixed(1));

R('dsk',TM.decision_desk);R('cd0',TM.decision_desk+4.2);R('cd1',TM.decision_desk+4.8);R('qt',TM.quote_card);
$('strg').setAttribute('opacity',.45*p(u,TM.stranger,TM.stranger+.6));R('strl',TM.stranger+.4);

const q0=SC[8][0]/K;R('qa',q0+.3);R('qb',q0+.8);R('qc',q0+1.3);
$('gc').setAttribute('stroke-dashoffset',1-p(u,q0+6.5,q0+8));R('gnd',q0+6.5);R('gdot',q0+7.8);