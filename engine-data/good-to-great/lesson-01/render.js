$('sitter').setAttribute('transform','translate(0 '+(3*Math.sin(t*1.5)).toFixed(1)+')');
rise($('couch'),p(u,TM.comfy_couch,TM.comfy_couch+.5));
rise($('goal'),p(u,TM.comfy_couch+1,TM.comfy_couch+1.6));
const tr=TM.comfy_couch+5.8;
$('goalp').style.stroke=u>=tr?'var(--loss)':'var(--gain)'; $('gstar0').setAttribute('opacity',u>=tr?.3:1);
rise($('cmf'),p(u,tr,tr+.5));

rise($('q1'),p(u,TM.opening_line,TM.opening_line+.6));
rise($('school'),p(u,TM.school_sign,TM.school_sign+.5)); rise($('sign'),p(u,TM.school_sign+.6,TM.school_sign+1.1));
rise($('ladg'),p(u,TM.ladder,TM.ladder+.5));
$('climber').setAttribute('transform','translate(0 '+(-60*p(u,TM.ladder+.6,TM.ladder+2)).toFixed(1)+')');
rise($('settle'),p(u,TM.ladder+4.9,TM.ladder+5.5));

rise($('qm'),p(u,TM.question_mark,TM.question_mark+.6));
rise($('teamg'),p(u,TM.research_team,TM.research_team+.6));
FL.forEach((f,i)=>f.setAttribute('opacity',p(u,TM.file_stack+i*.08,TM.file_stack+i*.08+.3)));
rise($('cntg'),p(u,TM.file_stack,TM.file_stack+.4));
$('cnt').textContent=Math.round(1400*p(u,TM.file_stack,TM.file_stack+1.6)).toLocaleString('en-US')+'+';

rise($('ax3'),p(u,TM.stock_chart,TM.stock_chart+.5));
dr($('c3a'),p(u,TM.stock_chart+.3,TM.stock_chart+2.3)); rise($('lab1'),p(u,TM.stock_chart+1,TM.stock_chart+1.5));
rise($('tp'),p(u,TM.stock_chart+5,TM.stock_chart+5.5));
dr($('c3b'),p(u,TM.triple_line,TM.triple_line+2)); rise($('lab2'),p(u,TM.triple_line+.8,TM.triple_line+1.3)); rise($('l3x'),p(u,TM.triple_line+1.8,TM.triple_line+2.3));
rise($('only'),p(u,TM.eleven_stars,TM.eleven_stars+.5));
ST.forEach((s,i)=>rise(s,p(u,TM.eleven_stars+i*.12,TM.eleven_stars+i*.12+.3)));

rise($('bA'),p(u,TM.twin_figures,TM.twin_figures+.5)); rise($('bB'),p(u,TM.twin_figures+.6,TM.twin_figures+1.1)); rise($('brk'),p(u,TM.twin_figures+1.4,TM.twin_figures+1.9));
rise($('magw'),p(u,TM.magnifier,TM.magnifier+.5));
$('mag').setAttribute('transform','translate('+(540+190*Math.sin(t*1.2)).toFixed(1)+' 540)');
rise($('diff'),p(u,TM.magnifier+.6,TM.magnifier+1.2));

rise($('st1'),p(u,TM.drugstore,TM.drugstore+.5)); rise($('ax5'),p(u,TM.drugstore+.6,TM.drugstore+1.1));
const d5=TM.drugstore+5.4, l5=TM.trophy-5.8;
rise($('mk5g'),p(u,d5,d5+.5)); dr($('w5a'),p(u,d5+.2,d5+1.4));
dr($('w5b'),p(u,l5,l5+2)); rise($('c5g'),p(u,l5,l5+.5)); $('cnt5').textContent=Math.round(15*p(u,l5,l5+2))+'×';
rise($('tro'),p(u,TM.trophy,TM.trophy+.5));
rise($('st2'),p(u,TM.rival_store,TM.rival_store+.5));

rise($('beam'),p(u,TM.steel_beam,TM.steel_beam+.5));
rise($('spot'),p(u,TM.no_spotlight,TM.no_spotlight+.6));
rise($('drug6'),p(u,TM.no_spotlight+3.3,TM.no_spotlight+3.8));
rise($('leap'),p(u,TM.no_spotlight+3.8,TM.no_spotlight+4.4)); rise($('fin6'),p(u,TM.no_spotlight+4.3,TM.no_spotlight+4.9));
$('star6').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*2))).toFixed(1)+')');

rise($('sign7'),p(u,TM.crossroads,TM.crossroads+.5)); rise($('a1'),p(u,TM.crossroads+.5,TM.crossroads+1)); rise($('a2'),p(u,TM.crossroads+1,TM.crossroads+1.5));
const ch=TM.crossroads+4.6, on=u>=ch;
$('arm2').style.fill=on?'var(--gain)':'var(--stage)'; $('arm2').style.stroke=on?'var(--gain)':'var(--ink)'; $('arm2t').style.fill=on?'var(--on-gain)':'var(--ink)';
$('walker').setAttribute('transform','translate('+(240+380*p(u,ch,ch+2)).toFixed(1)+' 0)'); $('walker').setAttribute('opacity',p(u,TM.crossroads+1.4,TM.crossroads+1.9));
rise($('ch7'),p(u,ch,ch+.6));
rise($('map7'),p(u,TM.map,TM.map+.5)); $('route').style.strokeDashoffset=(-t*20).toFixed(1);
SPS.forEach((s,i)=>rise(s,p(u,TM.map+.6+i*.4,TM.map+.9+i*.4)));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
rise($('mir'),p(u,TM.mirror+1.2,TM.mirror+1.7));
rise($('wk'),p(u,TM.mirror+5,TM.mirror+5.5)); rise($('gstar8'),p(u,TM.mirror+5.5,TM.mirror+6));