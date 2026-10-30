rise($('wk0'),p(u,TM.tired_worker,TM.tired_worker+.6));
$('wkb').setAttribute('transform','translate(0 '+(4*Math.sin(t*1.5)).toFixed(1)+')');
cells0.forEach((c,i)=>c.setAttribute('fill',u>=TM.tired_worker+.6+i*.2?'var(--loss)':'var(--line)'));
rise($('why0'),p(u,TM.tired_worker+6.8,TM.tired_worker+7.3));

rise($('asker'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('qm1'),p(u,TM.question_mark+.4,TM.question_mark+.9));
rise($('opt0'),p(u,TM.question_mark+5.5,TM.question_mark+6)); rise($('opt1'),p(u,TM.question_mark+6.2,TM.question_mark+6.7));
rise($('book1'),p(u,TM.book_cover,TM.book_cover+.6)); rise($('def1'),p(u,TM.book_cover+2,TM.book_cover+2.5));
rise($('ruler1'),p(u,TM.empty_ruler,TM.empty_ruler+.6)); rise($('rt1'),p(u,TM.empty_ruler+1,TM.empty_ruler+1.6));

envs.forEach((g,i)=>rise(g,p(u,TM.email_stack+i*.35,TM.email_stack+i*.35+.4))); rise($('lb2a'),p(u,TM.email_stack,TM.email_stack+.5));
rise($('calG'),p(u,TM.calendar_full,TM.calendar_full+.5)); calC.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.calendar_full+.4+i*.06,TM.calendar_full+.6+i*.06)));
rise($('meet'),p(u,TM.calendar_full+2.5,TM.calendar_full+3)); rise($('eye2'),p(u,TM.calendar_full+6,TM.calendar_full+6.6));

rise($('sign3'),p(u,TM.label_sign,TM.label_sign+.5)); $('signS').setAttribute('transform','rotate('+(3*Math.sin(t*1.5)).toFixed(2)+' 340 240)');
slips.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.magnifier+i*.12,TM.magnifier+i*.12+.3)));
rise($('lens3'),p(u,TM.magnifier+1.6,TM.magnifier+2.2));
rise($('beeG'),p(u,TM.busy_bee,TM.busy_bee+.5));
const ba=t*2.2; $('beeM').setAttribute('transform','translate('+(340+170*Math.cos(ba)).toFixed(1)+' '+(610+90*Math.sin(ba)).toFixed(1)+')');
wings.forEach(w=>w.setAttribute('ry',(8+7*Math.abs(Math.sin(t*20))).toFixed(1)));

rise($('table4'),p(u,TM.picnic_table,TM.picnic_table+.6)); rise($('tree4'),p(u,TM.tree_branches,TM.tree_branches+.6));
rise($('think4'),p(u,TM.tree_branches+6.6,TM.tree_branches+7.2));
rise($('clock4'),p(u,TM.clock_pages,TM.clock_pages+.5)); rise($('pages4'),p(u,TM.clock_pages+3,TM.clock_pages+3.6));
$('mnH').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 1060 450)'); $('hrH').setAttribute('transform','rotate('+(t*7.5%360).toFixed(1)+' 1060 450)');

rise($('phone5'),p(u,TM.ping_alerts,TM.ping_alerts+.5));
$('pcnt').textContent='+'+Math.floor(cl((u-TM.ping_alerts)*2.5,0,99));
const ph=(t%1.2)/1.2; $('ring5').setAttribute('r',(34+40*ph).toFixed(1)); $('ring5').setAttribute('opacity',(u>=TM.ping_alerts?1-ph:0).toFixed(2));
rise($('bat5'),p(u,TM.battery_low,TM.battery_low+.5));
const ph2=20+360*p(u,TM.battery_low,TM.battery_low+4); $('pres').setAttribute('y',(654-ph2).toFixed(1)); $('pres').setAttribute('height',ph2.toFixed(1));
const lv=1-.85*p(u,TM.battery_low,TM.battery_low+4); $('bat').setAttribute('width',(268*lv).toFixed(1)); $('bat').setAttribute('fill',lv<.35?'var(--loss)':'var(--gain)');
rise($('flame5'),p(u,TM.burnout_flame,TM.burnout_flame+.6)); rise($('drv5'),p(u,TM.burnout_flame+1.2,TM.burnout_flame+1.8));
$('flk').setAttribute('transform','translate(1300 620) scale('+(1+.04*Math.sin(t*7)).toFixed(3)+' '+(1+.07*Math.sin(t*5)).toFixed(3)+') translate(-1300 -620)');

rise($('lap6'),p(u,TM.video_grid-.3,TM.video_grid+.3));
const ex=u>=TM.chat_bubbles+5.8;
tiles.forEach((q,i)=>{rise(q[0],p(u,TM.video_grid+i*.3,TM.video_grid+i*.3+.4));q[1].setAttribute('class',ex?'loss':'ink');q[2].setAttribute('class',ex?'loss':'ink')});
chats.forEach((g,i)=>rise(g,p(u,TM.chat_bubbles+i*.4,TM.chat_bubbles+i*.4+.4)));
dots.forEach(d=>d[0].setAttribute('cy',(d[1]-5*Math.max(0,Math.sin(t*6-d[2]))).toFixed(1)));
rise($('exh6'),p(u,TM.chat_bubbles+5.8,TM.chat_bubbles+6.4));

rise($('scale7'),p(u,TM.scale_balance,TM.scale_balance+.6)); rise($('pell'),p(u,TM.scale_balance+.5,TM.scale_balance+1));
rise($('blk'),p(u,TM.finished_work,TM.finished_work+.5));
const ag=-7*p(u,TM.scale_balance+.6,TM.scale_balance+1.6)+17*p(u,TM.finished_work+.4,TM.finished_work+1.6), ar=ag*Math.PI/180, bx=240*Math.cos(ar), by=240*Math.sin(ar);
$('beam').setAttribute('transform','translate(470 300) rotate('+ag.toFixed(2)+')');
$('panL').setAttribute('transform','translate('+(470-bx).toFixed(1)+' '+(300-by).toFixed(1)+')'); $('panR').setAttribute('transform','translate('+(470+bx).toFixed(1)+' '+(300+by).toFixed(1)+')');
rise($('card7'),p(u,TM.finished_work,TM.finished_work+.6));
rise($('path7'),p(u,TM.slow_path,TM.slow_path+.6));
const wp=$('spath').getPointAtLength(SPL*p(u,TM.slow_path+.5,TM.slow_path+4)); $('walk').setAttribute('cx',wp.x.toFixed(1)); $('walk').setAttribute('cy',(wp.y-16).toFixed(1));

rise($('pad8'),p(u,TM.notepad,TM.notepad+.5));
rise($('qa'),p(u,TM.notepad+.3,TM.notepad+.8)); rise($('n0'),p(u,TM.notepad+1,TM.notepad+1.5));
rise($('qb'),p(u,TM.notepad+3,TM.notepad+3.5)); rise($('n1'),p(u,TM.notepad+3.6,TM.notepad+4.1));
rise($('qc'),p(u,TM.notepad+7,TM.notepad+7.5)); rise($('n2'),p(u,TM.notepad+7.5,TM.notepad+8));