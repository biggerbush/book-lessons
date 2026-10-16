$('crack').setAttribute('stroke-dashoffset',(1-p(u,TM.cracked_mug,TM.cracked_mug+1.2)).toFixed(3));
rise($('tape'),p(u,TM.cracked_mug+5,TM.cracked_mug+5.5));

const dw=280-210*p(u,TM.front_door,TM.front_door+1.2);
$('panel').setAttribute('width',dw.toFixed(1)); $('knob').setAttribute('cx',(190+dw-30).toFixed(1));
rise($('basket'),p(u,TM.baby_basket,TM.baby_basket+.5)); rise($('nf'),p(u,TM.baby_basket+4.2,TM.baby_basket+4.7));
rise($('ch0'),p(u,TM.arrows_choice+2.5,TM.arrows_choice+3)); rise($('ch1'),p(u,TM.arrows_choice+4.5,TM.arrows_choice+5));
rise($('resp'),p(u,TM.arrows_choice+7,TM.arrows_choice+7.5));

rise($('scale'),p(u,TM.scale_two,TM.scale_two+.5));
$('beam').setAttribute('transform','rotate('+(1.5*Math.sin(t*1.4)).toFixed(2)+' 800 280)');
rise($('fp'),p(u,TM.finger_point,TM.finger_point+.5)); rise($('oh'),p(u,TM.open_hands,TM.open_hands+.5));
rise($('blame'),p(u,TM.open_hands+3,TM.open_hands+3.6));

rise($('cal'),p(u,TM.calendar_page,TM.calendar_page+.5)); rise($('clk'),p(u,TM.calendar_page+2,TM.calendar_page+2.5));
const ah=t*.3,am=t*2;
$('hh').setAttribute('x2',(900+50*Math.sin(ah)).toFixed(1)); $('hh').setAttribute('y2',(400-50*Math.cos(ah)).toFixed(1));
$('hm').setAttribute('x2',(900+70*Math.sin(am)).toFixed(1)); $('hm').setAttribute('y2',(400-70*Math.cos(am)).toFixed(1));
rise($('past'),p(u,TM.clock_now,TM.clock_now+.5)); rise($('t1'),p(u,TM.clock_now,TM.clock_now+.6));
rise($('fut'),p(u,TM.clock_now+2.6,TM.clock_now+3.1)); rise($('t2'),p(u,TM.clock_now+2.6,TM.clock_now+3.2));

rise($('tbl'),p(u,TM.poker_table,TM.poker_table+.6));
cards.forEach((c,i)=>{const k=p(u,TM.card_hand+i*.3,TM.card_hand+i*.3+.6),fx=560+i*120;
  c.setAttribute('transform','translate('+(800+(fx-800)*k).toFixed(1)+' '+(320+180*k).toFixed(1)+') rotate('+((i-2)*6*k).toFixed(1)+')'); c.setAttribute('opacity',k.toFixed(2))});
rise($('lb0'),p(u,TM.card_hand+1,TM.card_hand+1.5));
const nc=Math.round(12*p(u,TM.chip_stack,TM.chip_stack+3)); chips.forEach((c,i)=>c.setAttribute('opacity',i<nc?1:0));
rise($('lb1'),p(u,TM.chip_stack+2,TM.chip_stack+2.6));

rise($('jm'),p(u,TM.young_james,TM.young_james+.5)); rise($('bed'),p(u,TM.sick_bed,TM.sick_bed+.5));
[0,1,2].forEach(i=>rise($('pr'+i),p(u,TM.sick_bed+i*2,TM.sick_bed+i*2+.5)));
rise($('cloud'),p(u,TM.sick_bed+7,TM.sick_bed+7.5)); rise($('desp'),p(u,TM.sick_bed+7,TM.sick_bed+7.6));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); rise($('vow'),p(u,TM.notebook+3.4,TM.notebook+4));
rise($('path6'),p(u,TM.upward_path,TM.upward_path+.5)); rise($('ff'),p(u,TM.upward_path+3,TM.upward_path+3.6));
const cs=4*p(u,TM.upward_path+.3,TM.upward_path+3.5);
$('climb').setAttribute('transform','translate('+(702+164*cs).toFixed(1)+' '+(700-70*cs+(cs<4?-4*Math.abs(Math.sin(t*6)):0)).toFixed(1)+')');
$('climb').setAttribute('opacity',u>=TM.upward_path?1:0);
rise($('rocks'),p(u,TM.upward_path+4.5,TM.upward_path+5)); rise($('nv'),p(u,TM.upward_path+4.5,TM.upward_path+5.1));
rise($('mt'),p(u,TM.upward_path+6.7,TM.upward_path+7.3));

sits.forEach((g,i)=>rise(g,p(u,TM.traffic_jam+i*1.5,TM.traffic_jam+i*1.5+.5)));
rise($('me7'),p(u,TM.traffic_jam,TM.traffic_jam+.5));
me.forEach(e=>e.setAttribute('class',u>=TM.pen_hand?'gain':'ink'));
rise($('bl'),p(u,TM.two_paths,TM.two_paths+.5)); rise($('ow'),p(u,TM.two_paths+2,TM.two_paths+2.5));
rise($('pen7'),p(u,TM.pen_hand,TM.pen_hand+.5));
rise($('pw'),p(u,TM.pen_hand,TM.pen_hand+.6));

rise($('ql'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('qa'),p(u,TM.question_mark+3.8,TM.question_mark+4.3)); rise($('qb'),p(u,TM.question_mark+4.2,TM.question_mark+4.7)); rise($('qc'),p(u,TM.question_mark+4.6,TM.question_mark+5.1));
rise($('qm'),p(u,TM.question_mark,TM.question_mark+.6));
$('qm').setAttribute('transform','translate(0 '+(8*Math.sin(t*2)).toFixed(1)+')');