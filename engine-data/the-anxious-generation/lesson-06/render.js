rise($('boy0'),p(u,TM.boy_couch,TM.boy_couch+.6)); bIn.setAttribute('opacity',(1-.75*p(u,TM.boy_couch+5,TM.boy_couch+9)).toFixed(2));
$('tv').setAttribute('opacity',(.85+.15*Math.sin(t*7)).toFixed(2));

$('gl').style.strokeDashoffset=1-p(u,TM.girls_alarm,TM.girls_alarm+1.6); rise($('gx'),p(u,TM.girls_alarm+1.2,TM.girls_alarm+1.7));
rise($('bl'),p(u,TM.boys_fade,TM.boys_fade+1.8));
const pa=TM.boys_fade+5, aw=p(u,pa,pa+2.5); rise($('pull'),p(u,pa-.6,pa));
$('away').setAttribute('transform',`translate(${(1300+120*aw).toFixed(1)} 0)`); $('away').setAttribute('opacity',(1-.65*aw).toFixed(2));
rise($('cap1'),p(u,pa+.5,pa+1.1));

rise($('ag'),p(u,TM.agency_icon,TM.agency_icon+.5)); [0,1,2].forEach(i=>rise($('ag'+i),p(u,TM.agency_icon+1.5+i*.6,TM.agency_icon+2+i*.6)));
rise($('tree'),p(u,TM.tree_climb,TM.tree_climb+.5)); $('climb').setAttribute('transform',`translate(0 ${(640-140*p(u,TM.tree_climb+.3,TM.tree_climb+3)).toFixed(1)})`);
rise($('fort'),p(u,TM.tree_climb+1.2,TM.tree_climb+1.7)); rise($('roam'),p(u,TM.tree_climb+2.4,TM.tree_climb+2.9));
roam.forEach((g,i)=>g.setAttribute('transform',`translate(0 ${(-6*Math.abs(Math.sin(t*3+i))).toFixed(1)})`));
rise($('bdg'),p(u,TM.tree_climb+5,TM.tree_climb+5.6));

rise($('gate'),p(u,TM.locked_gate,TM.locked_gate+.4)); bars.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.locked_gate+i*.12,TM.locked_gate+i*.12+.3)));
rise($('lock'),p(u,TM.locked_gate+1.4,TM.locked_gate+1.9));
rise($('park'),p(u,TM.empty_park,TM.empty_park+.5)); const sh=380-220*p(u,TM.empty_park+.6,TM.empty_park+2.6);
$('slide').setAttribute('d',`M760 720V${720-sh}M740 ${720-sh}h40Q${800+sh*.2} 700 ${780+sh*.55} 720`);
$('seat').setAttribute('transform',`rotate(${(5*Math.sin(t*1.2)).toFixed(2)} 1070 480)`);
rise($('els'),p(u,TM.empty_park+4.6,TM.empty_park+5.2)); $('scr3').setAttribute('opacity',(.8+.2*Math.sin(t*5)).toFixed(2));

rise($('mon'),p(u,TM.game_screen,TM.game_screen+.5)); tiles.forEach((g,i)=>rise(g,p(u,TM.game_screen+.5+i*.6,TM.game_screen+.9+i*.6)));
const L=u-TM.level_up, c=Math.max(0,L)/1.4; $('xp').setAttribute('width',(L<0?0:680*ease(c%1)).toFixed(1)); $('lvl').textContent='LEVEL '+(1+Math.floor(c));
rise($('win4'),p(u,TM.level_up,TM.level_up+.5)); rise($('hook4'),p(u,TM.level_up+5.3,TM.level_up+5.9));
$('hand4').setAttribute('transform',`rotate(${(t*120%360).toFixed(1)} 1400 630)`);

// balance: games vs real life
rise($('scl'),p(u,TM.balance_scale,TM.balance_scale+.5)); rise($('lb5a'),p(u,TM.balance_scale+1,TM.balance_scale+1.5));
items.forEach((g,i)=>{const a=TM.balance_scale+1.2+i*.4; rise(g,p(u,a,a+.4))});
const tl=p(u,TM.clock_late,TM.clock_late+1.8), an=-14*tl+1.2*Math.sin(t*1.5)*(1-tl), ra=an*Math.PI/180, cx=300*Math.cos(ra), cy=300*Math.sin(ra);
$('beam').setAttribute('transform',`rotate(${an.toFixed(2)} 560 300)`);
$('panL').setAttribute('transform',`translate(${(560-cx).toFixed(1)} ${(300-cy).toFixed(1)})`); $('panR').setAttribute('transform',`translate(${(560+cx).toFixed(1)} ${(300+cy).toFixed(1)})`);
const gw=120+70*tl; $('gameB').setAttribute('width',gw.toFixed(1)); $('gameB').setAttribute('x',(-gw/2).toFixed(1));
rise($('clk5'),p(u,TM.clock_late,TM.clock_late+.5)); $('h5').setAttribute('transform',`rotate(${(t*30+720*tl).toFixed(1)} 700 660)`);
rise($('lb5b'),p(u,TM.clock_late+1,TM.clock_late+1.5)); rise($('porn'),p(u,TM.porn_warning,TM.porn_warning+.6));

rise($('ym'),p(u,TM.young_man,TM.young_man+.5)); mv6.setAttribute('transform',`translate(${(18*Math.sin(t*.9)).toFixed(1)} 0)`);
rise($('house'),p(u,TM.parents_house,TM.parents_house+.5)); rise($('tr6'),p(u,TM.parents_house+5.4,TM.parents_house+6));

rise($('ctlg'),p(u,TM.controller,TM.controller+.5)); $('ctl').setAttribute('opacity',(1-.65*p(u,TM.workbench,TM.workbench+1)).toFixed(2));
rise($('arr7'),p(u,TM.workbench,TM.workbench+.5)); cards.forEach((g,i)=>rise(g,p(u,TM.workbench+.6+i*1.3,TM.workbench+1.1+i*1.3)));
rise($('eq7'),p(u,TM.workbench+7.4,TM.workbench+8));

rise($('qa'),p(u,TM.challenge_card,TM.challenge_card+.5)); rise($('qb'),p(u,TM.challenge_card+.4,TM.challenge_card+.9)); rise($('qc'),p(u,TM.challenge_card+.8,TM.challenge_card+1.3));
$('qcard').setAttribute('opacity',p(u,TM.challenge_card+1.2,TM.challenge_card+1.8));
rise($('qend'),p(u,TM.challenge_card+6.6,TM.challenge_card+7.1)); $('riser').setAttribute('transform',`translate(0 ${(760-70*p(u,TM.challenge_card+6.8,TM.challenge_card+8.5)).toFixed(1)})`);