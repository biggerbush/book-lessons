$('mh').setAttribute('transform',`rotate(${((t*90)%360).toFixed(1)} 1290 390)`);
$('hh').setAttribute('transform',`rotate(${((t*8)%360).toFixed(1)} 1290 390)`);
rise($('clk'),p(u,TM.title_clock,TM.title_clock+.6));
rise($('now'),p(u,TM.title_clock+4.6,TM.title_clock+5.2));

ST.forEach((s,i)=>rise(s,p(u,TM.stepping_stone+i*.2,TM.stepping_stone+i*.2+.4)));
rise($('hopW'),p(u,TM.stepping_stone,TM.stepping_stone+.5));
const hs=5*p(u,TM.stepping_stone+.8,TM.horizon+5),hi=Math.min(4,Math.floor(hs)),hf=hs-hi;
$('hop').setAttribute('transform',`translate(${(200+170*hs).toFixed(1)} ${(610-70*Math.sin(Math.PI*hf)).toFixed(1)})`);
rise($('list'),p(u,TM.checklist,TM.checklist+.5));
TK.forEach((k,i)=>k.setAttribute('opacity',i<3?p(u,TM.checklist+1+i*.8,TM.checklist+1.3+i*.8):0));
rise($('hz'),p(u,TM.horizon,TM.horizon+.5));
$('sun').setAttribute('transform',`translate(${(220*p(u,TM.horizon+.5,TM.horizon+6)).toFixed(1)} 0)`);

rise($('key'),p(u,TM.keynes,TM.keynes+.5));
rise($('jarD'),p(u,TM.jam_jar,TM.jam_jar+.5));
rise($('jarT'),p(u,TM.jam_jar+.4,TM.jam_jar+.9));
const rc=p(u,TM.jam_jar+4.5,TM.jam_jar+7);
$('reach').setAttribute('x2',(840+180*rc).toFixed(1));$('reach').setAttribute('opacity',rc>0?1:0);
$('jarTm').setAttribute('transform',`translate(${(180*rc).toFixed(1)} 0)`);
rise($('never'),p(u,TM.jam_jar+5,TM.jam_jar+5.6));

rise($('sofa'),p(u,TM.sofa,TM.sofa+.5));
rise($('bat'),p(u,TM.battery,TM.battery+.5));
rise($('labB'),p(u,TM.battery,TM.battery+.5));
$('lvl').setAttribute('width',(188*p(u,TM.battery+.6,TM.battery+3.5)).toFixed(1));
rise($('brf'),p(u,TM.briefcase,TM.briefcase+.5));
rise($('labW'),p(u,TM.briefcase,TM.briefcase+.5));
rise($('task'),p(u,TM.briefcase+.6,TM.briefcase+1.2));
const fr=TM.briefcase+5.4;
$('sofa').setAttribute('stroke',u>=fr?'var(--gain)':u>=TM.briefcase+.6?'var(--loss)':'var(--ink)');
$('chainW').setAttribute('opacity',(1-.28*p(u,fr,fr+.8)).toFixed(2));
rise($('free'),p(u,fr,fr+.6));

rise($('pan'),p(u,TM.philosopher,TM.philosopher+.5));
rise($('fin'),p(u,TM.finish_flag,TM.finish_flag+.5));
$('doc').setAttribute('transform',`translate(${(460*p(u,TM.finish_flag+.6,TM.finish_flag+3.5)).toFixed(1)} 0)`);
rise($('done'),p(u,TM.finish_flag+3.5,TM.finish_flag+4));
rise($('wlk'),p(u,TM.walker,TM.walker+.5));
$('wd').setAttribute('cx',(1150+230*Math.cos(t*.8)).toFixed(1));$('wd').setAttribute('cy',(500+130*Math.sin(t*.8)).toFixed(1));

rise($('hills'),p(u,TM.country_path,TM.country_path+.5));
cp.style.strokeDashoffset=(CL*(1-p(u,TM.country_path,TM.country_path+1.5))).toFixed(1);
const cw=p(u,TM.country_path+.5,TM.footprints+9),pt=cp.getPointAtLength(CL*cw);
rise($('wkW'),p(u,TM.country_path+.5,TM.country_path+1));
$('wk').setAttribute('transform',`translate(${pt.x.toFixed(1)} ${(pt.y-76).toFixed(1)})`);
FP.forEach(([f,e],i)=>{e.setAttribute('opacity',cw>=f?1:0);e.setAttribute('fill',u>=TM.footprints+i*.12?'var(--gain)':'var(--muted)')});
rise($('more'),p(u,TM.footprints+2.6,TM.footprints+3.2));

rise($('gtr'),p(u,TM.guitar,TM.guitar+.5));
rise($('notes'),p(u,TM.guitar+.6,TM.guitar+1.1));
NT.forEach((g,i)=>{const k=(t*.4+i/3)%1;g.setAttribute('transform',`translate(${(470+i*30+20*Math.sin(t*2+i)).toFixed(1)} ${(420-140*k).toFixed(1)})`);g.setAttribute('opacity',(1-k).toFixed(2))});
rise($('tro'),p(u,TM.trophy,TM.trophy+.5));
const sk=p(u,TM.smile_face,TM.smile_face+.6);
$('tstr').setAttribute('x2',(700+200*sk).toFixed(1));$('tstr').setAttribute('y2',(360+260*sk).toFixed(1));$('tstr').setAttribute('opacity',sk>0?1:0);
rise($('smile'),p(u,TM.smile_face+.3,TM.smile_face+.9));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
CAL[5].setAttribute('fill',u>=TM.calendar+.8?'var(--gain)':'var(--stage)');
rise($('slot'),p(u,TM.calendar+.8,TM.calendar+1.3));
rise($('easel'),p(u,TM.paintbrush,TM.paintbrush+.5));
pa.style.strokeDashoffset=(PL*(1-p(u,TM.paintbrush+.4,TM.paintbrush+2.4))).toFixed(1);
rise($('labs'),p(u,TM.paintbrush+.6,TM.paintbrush+1.1));
rise($('dev'),p(u,TM.phone_off,TM.phone_off+.5));
const sl=p(u,TM.phone_off+.8,TM.phone_off+1.4);
$('slash').setAttribute('x2',(1100+370*sl).toFixed(1));$('slash').setAttribute('y2',(260+320*sl).toFixed(1));$('slash').setAttribute('opacity',sl>0?1:0);
rise($('cont'),p(u,TM.phone_off+2,TM.phone_off+2.6));

// closing: the LATER box opens and the question rises out
const Q=TM.question_mark;
rise($('qa'),p(u,Q,Q+.5));
rise($('qb'),p(u,Q+.4,Q+.9));
rise($('qc'),p(u,Q+.8,Q+1.3));
rise($('qe'),p(u,Q+1.2,Q+1.7));
rise($('qbox'),p(u,Q+.6,Q+1.2));
const lo=p(u,Q+1.8,Q+2.8);
$('qlid').setAttribute('transform',`rotate(${(-70*lo).toFixed(1)} 1396 518)`);
const qr=p(u,Q+2.4,Q+3.6);
$('qm').setAttribute('transform',`translate(0 ${(260*(1-qr)+6*Math.sin(t*2)*qr).toFixed(1)})`);
$('qm').setAttribute('opacity',u>=Q+2.4?1:0);
$('qrays').setAttribute('opacity',p(u,Q+3.6,Q+4.2).toFixed(2));
rise($('qd'),p(u,Q+5.8,Q+6.4));
const qs=p(u,Q+6,Q+6.6);
$('qstr').setAttribute('x2',(1130+160*qs).toFixed(1));$('qstr').setAttribute('opacity',qs>0?1:0);
$('qlab').setAttribute('opacity',(1-.5*qs).toFixed(2));
rise($('qwk'),p(u,Q+6.4,Q+7));