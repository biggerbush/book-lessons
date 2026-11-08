const T=TM.tapper_desk;
rise($('t0g'),p(u,T,T+.6));
const hy=606-16*Math.abs(Math.sin(t*5));HAND.setAttribute('cy',hy.toFixed(1));ARM.setAttribute('d','M1150 560L1205 '+hy.toFixed(1));
N0.forEach((n,i)=>{const c=(t*.4+i/3)%1;n.setAttribute('transform','translate(0 '+(-140*c).toFixed(1)+')');n.setAttribute('opacity',(Math.sin(c*Math.PI)*p(u,T+.6,T+1.2)).toFixed(2))});
rise($('t0q'),p(u,T+7,T+7.5));

rise($('s1sub'),p(u,TM.stanford,TM.stanford+.5));rise($('s1p'),p(u,TM.stanford+.4,TM.stanford+.9));
rise($('s1a'),p(u,TM.two_roles,TM.two_roles+.5));rise($('s1b'),p(u,TM.two_roles+.5,TM.two_roles+1));
rise($('s1song'),p(u,TM.song_list,TM.song_list+.5));
KB.forEach((b,i)=>b.setAttribute('opacity',u<TM.song_list+.8?0:(Math.floor(t*4)%8===i?1:.3)));
rise($('s1q'),p(u,TM.song_list+6.5,TM.song_list+7));

const ph=250*p(u,TM.prediction,TM.prediction+1);$('s2bp').setAttribute('y',(740-ph).toFixed(1));$('s2bp').setAttribute('height',ph.toFixed(1));
const ah=10.4*p(u,TM.real_result,TM.real_result+.8);$('s2ba').setAttribute('y',(740-ah).toFixed(1));$('s2ba').setAttribute('height',ah.toFixed(1));
rise($('s2pl'),p(u,TM.prediction+.8,TM.prediction+1.3));rise($('s2al'),p(u,TM.real_result+.5,TM.real_result+1));
rise($('s2r1'),p(u,TM.real_result+4.1,TM.real_result+4.6));rise($('s2gap'),p(u,TM.gap_arrow,TM.gap_arrow+.5));
$('s2x').textContent=Math.round(20*p(u,TM.gap_arrow,TM.gap_arrow+1.2))+'×';

rise($('s3a'),p(u,TM.thought_cloud,TM.thought_cloud+.5));
N3.forEach((n,i)=>n.setAttribute('transform','translate(0 '+(8*Math.sin(t*3+i)).toFixed(1)+')'));
rise($('s3b'),p(u,TM.knock_marks,TM.knock_marks+.5));rise($('s3dots'),p(u,TM.knock_marks+.3,TM.knock_marks+.8));
KM.forEach((m,i)=>m.setAttribute('opacity',Math.floor(t*3+i*1.7)%3===0?1:.25));
DT.forEach((d,i)=>{const k=(i*80+t*120)%640;d.setAttribute('cx',(480+k).toFixed(1));d.setAttribute('opacity',Math.sin(k/640*Math.PI).toFixed(2))});
rise($('s3c'),p(u,TM.puzzled_face,TM.puzzled_face+.5));

rise($('s4h'),p(u,TM.curse_label,TM.curse_label+.5));rise($('s4r'),p(u,TM.curse_label+.5,TM.curse_label+1));
rise($('s4f'),p(u,TM.curse_label+1.2,TM.curse_label+1.7));rise($('s4l'),p(u,TM.lock_key,TM.lock_key+.5));
rise($('s4cap'),p(u,TM.lock_key+.6,TM.lock_key+1.1));rise($('s4m'),p(u,TM.lock_key+5.4,TM.lock_key+5.9));
$('s4g').setAttribute('opacity',(1-.8*p(u,TM.lock_key+5.4,TM.lock_key+6.4)).toFixed(2));

rise($('s5a'),p(u,TM.ceo_podium,TM.ceo_podium+.5));rise($('s5c'),p(u,TM.ceo_podium+3.8,TM.ceo_podium+4.3));
rise($('s5s'),p(u,TM.staff_faces,TM.staff_faces+.5));rise($('s5q'),p(u,TM.staff_faces+.6,TM.staff_faces+1.1));
JC.forEach((g,i)=>{const a=TM.jargon_cloud+i*.5;rise(g,p(u,a,a+.4))});rise($('s5cap'),p(u,TM.jargon_cloud+2,TM.jargon_cloud+2.5));

rise($('s6d0'),p(u,TM.two_doors,TM.two_doors+.5));rise($('s6d1'),p(u,TM.two_doors+.4,TM.two_doors+.9));
rise($('s6x'),p(u,TM.two_doors+3.8,TM.two_doors+4.3));rise($('s6o'),p(u,TM.toolbox,TM.toolbox+.5));
TL.forEach((g,i)=>{const a=TM.success_word+i*.5;rise(g,p(u,a,a+.4))});
rise($('s6s'),p(u,TM.success_word+3,TM.success_word+3.4));rise($('s6cap'),p(u,TM.success_word+3.5,TM.success_word+4));

rise($('s7c0'),p(u,TM.mirror,TM.mirror+.5));rise($('s7c1'),p(u,TM.listener_view,TM.listener_view+.5));rise($('s7c2'),p(u,TM.test_friend,TM.test_friend+.5));
$('s7m').setAttribute('d','M1215 470Q1260 '+(470+36*p(u,TM.test_friend+1.5,TM.test_friend+2.3)).toFixed(1)+' 1305 470');
rise($('s7cap'),p(u,TM.test_friend+3,TM.test_friend+3.5));

const a8=SC[8][0]/K;
rise($('qa'),p(u,a8+.3,a8+.8));rise($('qb'),p(u,a8+.7,a8+1.2));rise($('qc'),p(u,a8+4.5,a8+5));rise($('qd'),p(u,a8+4.9,a8+5.4));rise($('s8g'),p(u,a8+5.5,a8+6));