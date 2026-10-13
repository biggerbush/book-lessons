const sm=p(u,TM.kid_smiling+3,TM.kid_smiling+3.8);
$('mouth').setAttribute('d','M1310 '+(370+8*sm).toFixed(1)+' Q1330 '+(388-24*sm).toFixed(1)+' 1350 '+(370+8*sm).toFixed(1));
rise($('kid'),p(u,TM.kid_smiling,TM.kid_smiling+.5)); rise($('bub0'),p(u,TM.kid_smiling+.8,TM.kid_smiling+1.3));

rise($('pz1'),p(u,TM.researchers,TM.researchers+.5)); rise($('kids1'),p(u,TM.researchers+1,TM.researchers+1.6));
const sp=p(u,TM.two_groups,TM.two_groups+1); mv($('kl'),-105*sp,0); mv($('kr'),105*sp,0);
paint(KL,u>=TM.smart_badge?'loss':'ink'); paint(KR,u>=TM.effort_badge?'gain':'ink');
rise($('bdS'),p(u,TM.smart_badge,TM.smart_badge+.5)); rise($('bdE'),p(u,TM.effort_badge,TM.effort_badge+.5));

const D=TM.ninety_pct-TM.two_doors, T1=TM.two_doors+D*.47, T2=TM.two_doors+D*.82;
rise($('dr'),p(u,TM.two_doors,TM.two_doors+.5));
const ap=p(u,TM.two_doors+.6,TM.two_doors+1.1); rise($('dots'),ap);
rise($('glS'),Math.min(ap,1-p(u,T1+1.2,T1+1.8))); rise($('glE'),Math.min(ap,1-p(u,TM.ninety_pct+1.2,TM.ninety_pct+1.8)));
DT.forEach(d=>{const a=(d.L?T1:TM.ninety_pct)+d.j*.06, k=p(u,a,a+1.2);
  mv(d.e,d.sx+(d.ex-d.sx)*k,d.sy+(d.ey-d.sy)*k-60*Math.sin(k*Math.PI))});
rise($('dcE'),p(u,T1+1.4,T1+1.9)); rise($('dcC'),p(u,TM.ninety_pct+1.4,TM.ninety_pct+1.9));
rise($('lbl2'),p(u,T2,T2+.5)); rise($('n90'),p(u,TM.ninety_pct,TM.ninety_pct+.5));
$('n90t').textContent=Math.round(90*p(u,TM.ninety_pct+.3,TM.ninety_pct+1.5))+'%';

rise($('pz3'),p(u,TM.hard_puzzles,TM.hard_puzzles+.5));
rise($('fS'),p(u,TM.sad_face,TM.sad_face+.5)); $('bS').setAttribute('width',(300-220*p(u,TM.sad_face+1,TM.sad_face+2.5)).toFixed(1));
rise($('fC'),p(u,TM.curious_face,TM.curious_face+.5)); $('bG').setAttribute('width',(150+150*p(u,TM.curious_face+1,TM.curious_face+2.5)).toFixed(1));

const E=TM.score_chart+.66*(TM.letter-TM.score_chart), g0=240*p(u,TM.easy_round+.5,TM.easy_round+1.3);
rise($('ch'),p(u,TM.easy_round,TM.easy_round+.5)); bar('b0',g0); bar('b2',g0);
bar('b1',170*p(u,TM.score_chart,TM.score_chart+1)); bar('b3',310*p(u,E,E+1));
rise($('wS'),p(u,TM.score_chart+1,TM.score_chart+1.4)); rise($('wE'),p(u,E+1,E+1.4));
rise($('lt'),p(u,TM.letter,TM.letter+.5)); const inf=p(u,TM.forty_pct,TM.forty_pct+1);
$('sc').setAttribute('width',(120+160*inf).toFixed(1)); $('scl').setAttribute('opacity',inf.toFixed(2));
rise($('n40'),p(u,TM.forty_pct,TM.forty_pct+.5)); $('n40t').textContent=Math.round(40*p(u,TM.forty_pct+.3,TM.forty_pct+1.5))+'%';

rise($('per5'),p(u,TM.label_tag,TM.label_tag+.5)); rise($('cap5a'),p(u,TM.label_tag+1,TM.label_tag+1.5));
$('tagw').setAttribute('transform','rotate('+(4*Math.sin(t*1.6)).toFixed(2)+' 440 470)');
rise($('st5'),p(u,TM.road,TM.road+.5)); rise($('cap5b'),p(u,TM.road+1,TM.road+1.5));
const w=(t*.22)%1, wx=890+540*w, wi=Math.min(3,Math.floor((wx-880)/160)), wf=((wx-880)/160)%1;
$('wk').setAttribute('cx',wx.toFixed(1)); $('wk').setAttribute('cy',([680,580,480,380][wi]-18-24*Math.sin(wf*Math.PI)).toFixed(1));

CP.forEach((g,i)=>rise(g,p(u,TM.strategy_map+i*.6,TM.strategy_map+i*.6+.4)));
rise($('bub6'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
rise($('map6'),p(u,TM.new_path,TM.new_path+.5)); drw($('det6'),p(u,TM.new_path+1,TM.new_path+2.2)); rise($('ns6'),p(u,TM.new_path+1.8,TM.new_path+2.3));

rise($('jump7'),p(u,TM.quick_finish,TM.quick_finish+.5));
const rb=p(u,TM.raised_bar,TM.raised_bar+1.2), hy=730-330*rb, amp=90+190*rb;
$('hb').setAttribute('y',hy.toFixed(1)); $('hbl').setAttribute('y',(hy+10).toFixed(1));
const st=u>=TM.raised_bar+.6; $('hbl').textContent=st?'A STRETCH':'TOO EASY'; $('hbl').style.fill=st?'var(--gain)':'var(--muted)';
mv(KJ,0,-amp*Math.abs(Math.sin(t*2.2)));
[.6,2.6,4.6].forEach((o,i)=>rise($('it'+i),p(u,TM.raised_bar+o,TM.raised_bar+o+.5)));
rise($('str7'),p(u,TM.raised_bar+6.6,TM.raised_bar+7.2));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('sb8'),p(u,TM.mirror+.4,TM.mirror+.9));
drw($('sk8'),p(u,TM.mirror+1.5,TM.mirror+2.2));
rise($('qb'),p(u,TM.mirror+3.8,TM.mirror+4.3)); rise($('qc'),p(u,TM.mirror+4.2,TM.mirror+4.7)); rise($('tg8'),p(u,TM.mirror+4.8,TM.mirror+5.3));