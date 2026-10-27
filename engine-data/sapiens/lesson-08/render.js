rise($('t_land'),p(u,TM.blank_map,TM.blank_map+.6)); rise($('t_blank'),p(u,TM.blank_map+1.5,TM.blank_map+2.1));
$('t_q').setAttribute('opacity',(.75+.25*Math.sin(t*3)).toFixed(2)); rise($('t_words'),p(u,TM.blank_map+5.4,TM.blank_map+6));

rise($('scr'),p(u,TM.old_scroll,TM.old_scroll+.6)); rise($('sage'),p(u,TM.wise_sage,TM.wise_sage+.6)); rise($('silent'),p(u,TM.wise_sage+5,TM.wise_sage+5.6));
rise($('vill'),p(u,TM.villager,TM.villager+.6)); rise($('varr'),p(u,TM.villager+1.5,TM.villager+2.1)); rise($('flask'),p(u,TM.villager+2.8,TM.villager+3.4));
$('vq').setAttribute('transform','translate(0 '+(4*Math.sin(t*3)).toFixed(1)+')');

rise($('nb'),p(u,TM.lab_notebook,TM.lab_notebook+.6)); rise($('nbw'),p(u,TM.lab_notebook+3,TM.lab_notebook+3.6));
rise($('qmw'),p(u,TM.question_mark,TM.question_mark+.6)); const sc=1+.05*Math.sin(t*3); $('qmt').setAttribute('transform',`translate(800 480) scale(${sc.toFixed(3)}) translate(-800 -480)`);
rise($('thy'),p(u,TM.question_mark+.6,TM.question_mark+1.2)); rise($('evd'),p(u,TM.question_mark+1.8,TM.question_mark+2.4));
const hit=p(u,TM.question_mark+2.2,TM.question_mark+2.5)*(1-p(u,TM.question_mark+2.5,TM.question_mark+3.3)); $('thy').firstElementChild.setAttribute('transform','translate('+(6*hit*Math.sin(t*30)).toFixed(1)+' 0)');
rise($('emb'),p(u,TM.question_mark+5.4,TM.question_mark+5.9)); strk('embS',130,330,p(u,TM.question_mark+6.2,TM.question_mark+6.8)); rise($('inv'),p(u,TM.question_mark+6.8,TM.question_mark+7.4));

rise($('m3'),p(u,TM.old_map,TM.old_map+.6)); rise($('l3a'),p(u,TM.old_map+2.6,TM.old_map+3.2));
M3.forEach(([o,g],i)=>{rise(o,p(u,TM.sea_monster+i*.6,TM.sea_monster+i*.6+.5)); g.setAttribute('transform','translate(0 '+(5*Math.sin(t*2+i)).toFixed(1)+')')});
rise($('cap3'),p(u,TM.sea_monster+2,TM.sea_monster+2.6));

rise($('blank4'),p(u,TM.empty_region,TM.empty_region+.8)); rise($('conf4'),p(u,TM.empty_region+4.6,TM.empty_region+5.2));
const sv=p(u,TM.sailing_ship,TM.sailing_ship+3), sx=620+440*sv, sy=610+4*Math.sin(t*2);
SH4.setAttribute('transform',`translate(${sx.toFixed(1)} ${sy.toFixed(1)})`); $('ship4').setAttribute('opacity',p(u,TM.sailing_ship,TM.sailing_ship+.4));
$('wake').setAttribute('d',`M560 640H${(sx-62).toFixed(1)}`); $('wake').setAttribute('opacity',sv>0?1:0);
rise($('beg4'),p(u,TM.sailing_ship+1.5,TM.sailing_ship+2.1));

rise($('route5'),p(u,TM.columbus,TM.columbus+.6)); const k5=p(u,TM.columbus+.3,TM.columbus+3.5), m5=1-k5;
SH5.setAttribute('transform',`translate(${(m5*m5*330+2*k5*m5*800+k5*k5*1260).toFixed(1)} ${(m5*m5*450+2*k5*m5*300+k5*k5*450-12).toFixed(1)}) scale(.45)`); $('ship5').setAttribute('opacity',p(u,TM.columbus,TM.columbus+.4));
rise($('asia'),p(u,TM.columbus+3,TM.columbus+3.6)); rise($('lock5'),p(u,TM.columbus+7,TM.columbus+7.6)); rise($('room5'),p(u,TM.columbus+11.6,TM.columbus+12.2));

rise($('vesp'),p(u,TM.vespucci,TM.vespucci+.6)); rise($('map6'),p(u,TM.vespucci+.6,TM.vespucci+1.2)); rise($('bub6'),p(u,TM.vespucci+3.8,TM.vespucci+4.4));
rise($('amer'),p(u,TM.world_map,TM.world_map+.6)); rise($('lab6'),p(u,TM.world_map+.8,TM.world_map+1.4)); rise($('hon6'),p(u,TM.world_map+4.6,TM.world_map+5.2));

rise($('st1'),p(u,TM.telescope,TM.telescope+.6)); rise($('st2'),p(u,TM.money_bag,TM.money_bag+.6));
FD.forEach((f,i)=>rise(f,p(u,TM.money_bag+1+i*.8,TM.money_bag+1.5+i*.8)));
CO.forEach((c,i)=>{const f=(t*.7+i/4)%1; c.setAttribute('cy',(230+f*110).toFixed(1)); c.setAttribute('opacity',(f<.8?1:(1-f)*5).toFixed(2))});
rise($('st3'),p(u,TM.toolbox,TM.toolbox+.6)); SP.forEach((s,i)=>s.setAttribute('opacity',(.5+.5*Math.sin(t*4+i*1.6)).toFixed(2)));
rise($('ask7'),p(u,TM.toolbox+1,TM.toolbox+1.6));

rise($('qa'),p(u,TM.your_map,TM.your_map+.5)); rise($('qb'),p(u,TM.your_map+.4,TM.your_map+.9)); rise($('qc'),p(u,TM.your_map+.8,TM.your_map+1.3));
rise($('fo8'),p(u,TM.your_map+1.4,TM.your_map+2)); const fx=p(u,TM.your_map+5.8,TM.your_map+6.6);
M8[0].setAttribute('opacity',(1-fx).toFixed(2)); M8[1].setAttribute('transform','translate(0 '+(4*Math.sin(t*2)).toFixed(1)+')'); $('q8').setAttribute('opacity',fx.toFixed(2));
rise($('go8'),p(u,TM.your_map+5.8,TM.your_map+6.4));