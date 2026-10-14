const A=TM.awkward_face; rise($('face'),p(u,A,A+.6));
const sw=(t*.7)%1; $('sweat').setAttribute('transform','translate(1430 '+(320+40*sw).toFixed(1)+')'); $('sweat').setAttribute('opacity',(p(u,A+.6,A+1)*(1-sw)).toFixed(2));
const tl=p(u,A+5.4,A+6.4); $('ring').style.strokeDashoffset=(1-tl).toFixed(3); rise($('tool'),tl); $('mouth').setAttribute('d',tl>.5?SMI:WOB);

rise($('couch'),p(u,TM.comfy_couch,TM.comfy_couch+.6));
BK.forEach((b,i)=>rise(b,p(u,TM.textbook+i*.5,TM.textbook+i*.5+.3))); rise($('bklab'),p(u,TM.textbook,TM.textbook+.5));
rise($('clk'),p(u,TM.clock,TM.clock+.5));
const ca=Math.max(0,u-TM.clock)*4.2, ha=ca/12;
$('hm').setAttribute('x2',(1200+110*Math.sin(ca)).toFixed(1)); $('hm').setAttribute('y2',(470-110*Math.cos(ca)).toFixed(1));
$('hh').setAttribute('x2',(1200+70*Math.sin(ha)).toFixed(1)); $('hh').setAttribute('y2',(470-70*Math.cos(ha)).toFixed(1));
rise($('forever'),p(u,TM.clock+2.5,TM.clock+3.1));

rise($('sara'),p(u,TM.sara_maria,TM.sara_maria+.6));
rise($('globe'),p(u,TM.sara_maria+2.5,TM.sara_maria+3.1));
BB.forEach((b,i)=>{const a=TM.sara_maria+3+i*.5; rise(b,p(u,a,a+.4))});
rise($('gift'),p(u,TM.world_map,TM.world_map+.5)); strike('gs',1072,385,p(u,TM.world_map+4.2,TM.world_map+4.8));
rise($('clumsy'),p(u,TM.world_map+4.6,TM.world_map+5.2));

rise($('talk'),p(u,TM.speech_bubble,TM.speech_bubble+.6));
scrib.style.strokeDashoffset=(1-p(u,TM.tangled_words,TM.tangled_words+2)).toFixed(3);
rise($('messy'),p(u,TM.tangled_words+1,TM.tangled_words+1.6));
const bw=p(u,TM.tangled_words+3.9,TM.tangled_words+5.2); rise($('bars'),p(u,TM.tangled_words+3.6,TM.tangled_words+4.1));
$('b1').setAttribute('width',(560*bw).toFixed(1)); $('b2').setAttribute('width',(160*bw).toFixed(1));

rise($('tgt'),p(u,TM.target,TM.target+.6));
const fl=p(u,TM.target+1.2,TM.target+2.4); $('tgtR').setAttribute('transform','rotate('+(180*fl).toFixed(1)+' 380 470)');
$('bull').setAttribute('class',fl>.5?'gain':'ink'); $('goalT').textContent=fl>.5?'GOAL: MAKE MISTAKES':'GOAL: AVOID MISTAKES'; $('goalT').style.fill=fl>.5?'var(--gain)':'var(--muted)';
rise($('talL'),p(u,TM.tally_marks,TM.tally_marks+.5));
TL.forEach((l,j)=>l.setAttribute('opacity',p(u,TM.tally_marks+.3+j*.12,TM.tally_marks+.5+j*.12).toFixed(2)));
rise($('proof'),p(u,TM.tally_marks+5.3,TM.tally_marks+5.9));

rise($('sb0'),p(u,TM.style_labels,TM.style_labels+.5)); rise($('sb1'),p(u,TM.style_labels+.7,TM.style_labels+1.2));
rise($('qm'),p(u,TM.question_mark,TM.question_mark+.6));
rise($('zone'),p(u,TM.question_mark+4.6,TM.question_mark+5.2)); rise($('nofast'),p(u,TM.question_mark+5.2,TM.question_mark+5.8));

rise($('stg'),p(u,TM.improv_stage,TM.improv_stage+.6));
const lv=p(u,TM.thermometer,TM.thermometer+3), th=60+300*lv;
$('tfill').setAttribute('y',(650-th).toFixed(1)); $('tfill').setAttribute('height',(th+40).toFixed(1));
PF.forEach((g,i)=>{const amp=4+26*lv, dx=(i?-1:1)*40*lv; g.setAttribute('transform','translate('+dx.toFixed(1)+' '+(-amp*Math.abs(Math.sin(t*3+i*1.6))).toFixed(1)+')')});
rise($('thermo'),p(u,TM.thermometer,TM.thermometer+.5)); rise($('riskL'),p(u,TM.thermometer+1,TM.thermometer+1.5));
rise($('sig'),p(u,TM.thermometer+5,TM.thermometer+5.5)); strike('ds',1094,150,p(u,TM.thermometer+5.6,TM.thermometer+6.1));
rise($('prog'),p(u,TM.thermometer+6,TM.thermometer+6.6));

rise($('n0'),p(u,TM.calendar,TM.calendar+.6)); calHi.setAttribute('opacity',(u>=TM.calendar+1?.6+.4*Math.abs(Math.sin(t*2.5)):0).toFixed(2));
rise($('n1'),p(u,TM.mirror,TM.mirror+.6)); rise($('act'),p(u,TM.mirror+2,TM.mirror+2.5));
rise($('n2'),p(u,TM.checkmark,TM.checkmark+.6)); $('chk').style.strokeDashoffset=(1-p(u,TM.checkmark+.4,TM.checkmark+1.2)).toFixed(3);

rise($('qa'),p(u,TM.hand_raised,TM.hand_raised+.5)); rise($('qb'),p(u,TM.hand_raised+.4,TM.hand_raised+.9));
rise($('qc'),p(u,TM.hand_raised+5,TM.hand_raised+5.5)); rise($('qd'),p(u,TM.hand_raised+5.4,TM.hand_raised+5.9));
rise($('hand'),p(u,TM.hand_raised+.6,TM.hand_raised+1.2)); $('handW').setAttribute('transform','rotate('+(8*Math.sin(t*3)).toFixed(2)+' 1325 680)');