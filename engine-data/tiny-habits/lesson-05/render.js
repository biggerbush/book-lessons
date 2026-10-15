rise($('note0'),p(u,TM.sticky_note,TM.sticky_note+.5)*(1-p(u,TM.sticky_note+3.6,TM.sticky_note+4.4)));
rise($('anc0'),p(u,TM.sticky_note+4.8,TM.sticky_note+5.4));

rise($('ph'),p(u,TM.phone_alarm,TM.phone_alarm+.4));rise($('sn1'),p(u,TM.phone_alarm+1.2,TM.phone_alarm+1.6));rise($('app'),p(u,TM.phone_alarm+2.4,TM.phone_alarm+2.8));
$('wv').setAttribute('opacity',u<TM.snooze_hand?(.5+.5*Math.sin(t*9)).toFixed(2):0);
const sw=p(u,TM.snooze_hand,TM.snooze_hand+1);
$('swipe').setAttribute('opacity',sw>0&&sw<1?1:0);$('swipe').setAttribute('transform','translate('+(-80+300*sw).toFixed(1)+' 0)');
$('rem').setAttribute('opacity',(1-.65*sw).toFixed(2));
rise($('swp'),p(u,TM.snooze_hand+.8,TM.snooze_hand+1.3));rise($('pr1'),p(u,TM.anchor_icon,TM.anchor_icon+.5));

rise($('card'),p(u,TM.recipe_card,TM.recipe_card+.5));rise($('slt'),p(u,TM.recipe_card+4.6,TM.recipe_card+5.1));
$('sl0').textContent=u>=TM.toothbrush?'BRUSH MY TEETH':'EXISTING ROUTINE';$('sl1').textContent=u>=TM.floss_one?'FLOSS ONE TOOTH':'NEW TINY HABIT';
rise($('brush'),p(u,TM.toothbrush,TM.toothbrush+.5));rise($('anc2'),p(u,TM.toothbrush,TM.toothbrush+.5));rise($('tooth'),p(u,TM.floss_one,TM.floss_one+.5));
$('floss').setAttribute('transform','translate(0 '+(8*Math.sin(t*4)).toFixed(1)+')');

rise($('fogg'),p(u,TM.bj_fogg,TM.bj_fogg+.5));rise($('door'),p(u,TM.bathroom_door,TM.bathroom_door+.5));rise($('pee'),p(u,TM.bathroom_door,TM.bathroom_door+.5));
rise($('pu'),p(u,TM.pushup_man,TM.pushup_man+.5));
const dy=30*(.5+.5*Math.sin(t*4));
$('pu_h').setAttribute('cy',(552+dy).toFixed(1));$('pu_b').setAttribute('d','M1100 '+(572+dy).toFixed(1)+'L820 630');$('pu_a').setAttribute('d','M1085 '+(576+dy).toFixed(1)+'L1085 636');
TL.forEach((g,i)=>{const a=TM.pushup_man+.8+i*.4;rise(g,p(u,a,a+.3))});

rise($('cloud'),p(u,TM.vague_cloud,TM.vague_cloud+.5));rise($('cof'),p(u,TM.coffee_mug,TM.coffee_mug+.5));
const pr=p(u,TM.coffee_mug+.6,TM.finish_line);
$('lvl').setAttribute('y',(530-90*pr).toFixed(1));$('lvl').setAttribute('height',(90*pr).toFixed(1));
$('strm').setAttribute('opacity',pr>0&&pr<1?1:0);$('pf').setAttribute('width',(660*pr).toFixed(1));
rise($('flag'),p(u,TM.finish_line,TM.finish_line+.5));rise($('prc'),p(u,TM.finish_line+.6,TM.finish_line+1.2));rise($('te'),p(u,TM.finish_line+7,TM.finish_line+7.5));

rise($('pin'),p(u,TM.map_pin,TM.map_pin+.5));rise($('kit'),p(u,TM.kitchen,TM.kitchen+.5));rise($('car'),p(u,TM.kitchen+3,TM.kitchen+3.5));
$('sponge').setAttribute('x',(620+60*Math.sin(t*3)).toFixed(1));
rise($('calic'),p(u,TM.calendar,TM.calendar+.5));CAL.forEach((g,i)=>{const a=TM.calendar+.3+i*.2;rise(g,p(u,a,a+.3))});

const f=p(u,TM.bed_feet+.6,TM.bed_feet+1.2),fy=(640+72*f).toFixed(1);
$('shin').setAttribute('d','M680 525L680 '+fy);$('foot').setAttribute('d','M680 '+fy+'h40');
$('imp').setAttribute('opacity',f>=1&&u<TM.bed_feet+2.4?1:0);
const sp=p(u,TM.sunrise,TM.sunrise+1.5);$('sun').setAttribute('cy',(470-130*sp).toFixed(1));$('sun').setAttribute('opacity',sp.toFixed(2));
rise($('bub'),p(u,TM.sunrise+1,TM.sunrise+1.5));rise($('smile'),p(u,TM.smile_face,TM.smile_face+.5));rise($('maui'),p(u,TM.smile_face+.4,TM.smile_face+.9));

rise($('paper'),p(u,TM.pen_paper,TM.pen_paper+.5));
RW.forEach((g,i)=>{const a=TM.day_timeline+i*.7;rise(g,p(u,a,a+.4))});
const pk=cl((u-TM.day_timeline)/.7,0,4.99),pi=Math.floor(pk),pfr=pk-pi;
$('pen').setAttribute('transform','translate('+(200+LW[pi]*pfr).toFixed(1)+' '+(352+pi*80)+')');$('pen').setAttribute('opacity',p(u,TM.pen_paper,TM.pen_paper+.5).toFixed(2));
rise($('hl'),p(u,TM.link_chain,TM.link_chain+.5));rise($('chain'),p(u,TM.link_chain+.4,TM.link_chain+.9));rise($('card7'),p(u,TM.link_chain+.8,TM.link_chain+1.3));
rise($('tw'),p(u,TM.test_week,TM.test_week+.5));DY.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.test_week+.6+i*.5,TM.test_week+.9+i*.5).toFixed(2)));
rise($('swap'),p(u,TM.test_week+3,TM.test_week+3.5));

const S8=SC[8][0]/K;
rise($('qm'),p(u,S8+.4,S8+.9));rise($('qa'),p(u,S8+5.4,S8+5.9));rise($('qb'),p(u,S8+5.8,S8+6.3));rise($('qc'),p(u,S8+6.2,S8+6.7));rise($('anc8'),p(u,S8+6.6,S8+7.2));