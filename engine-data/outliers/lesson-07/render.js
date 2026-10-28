const f0=TM.feud_title, mad=p(u,f0+3,f0+3.6);
rise($('t_calm'),p(u,f0,f0+.5)); $('t_ink').setAttribute('opacity',(p(u,f0,f0+.5)*(1-mad)).toFixed(2));
$('t_mad').setAttribute('opacity',mad.toFixed(2)); $('t_mad').setAttribute('transform','translate('+(mad*3*Math.sin(t*30)).toFixed(1)+' 0)');
rise($('t_red'),mad); rise($('t_ins'),p(u,f0+1.5,f0+2)); rise($('t_anc'),p(u,f0+5.8,f0+6.4));

rise($('mtn'),p(u,TM.mountains,TM.mountains+.6));
rise($('h0'),p(u,TM.two_families,TM.two_families+.5)); rise($('h1'),p(u,TM.two_families+.6,TM.two_families+1.1));
$('bolt').setAttribute('opacity',(p(u,TM.two_families+1.4,TM.two_families+1.8)*(.75+.25*Math.sin(t*6))).toFixed(2));
GR.forEach((g,i)=>rise(g,p(u,TM.gravestones+i*.5,TM.gravestones+i*.5+.4))); rise($('chainT'),p(u,TM.gravestones,TM.gravestones+.6));

rise($('ridge'),p(u,TM.map_south,TM.map_south+.6));
TW.forEach((g,i)=>{const a=TM.map_south+(i===3?0:.5+i*.5);rise(g,p(u,a,a+.4))});
rise($('hand'),p(u,TM.pointing_hand,TM.pointing_hand+.5)); $('hand').setAttribute('transform','translate('+(10*Math.sin(t*4)).toFixed(1)+' 0)');
rise($('ques'),p(u,TM.pointing_hand+.4,TM.pointing_hand+1));

const sp=p(u,TM.sailing_ship,TM.sailing_ship+4.5);
$('ship').setAttribute('transform','translate('+(1100-680*sp).toFixed(1)+' '+(470+4*Math.sin(t*2)).toFixed(1)+')');
$('ship').setAttribute('opacity',p(u,TM.sailing_ship,TM.sailing_ship+.4).toFixed(2));
rise($('hills'),p(u,TM.sheep_flock,TM.sheep_flock+.5)); rise($('herder'),p(u,TM.sheep_flock+.3,TM.sheep_flock+.8));
FL.forEach((g,i)=>rise(g,p(u,TM.sheep_flock+.5+i*.3,TM.sheep_flock+.9+i*.3)));

rise($('thiefG'),p(u,TM.thief,TM.thief+.5));
HD.forEach((g,i)=>g.setAttribute('opacity',(1-p(u,TM.thief+1.5+i*.6,TM.thief+2+i*.6)).toFixed(2)));
rise($('gone'),p(u,TM.thief+4.5,TM.thief+5));
rise($('shield'),p(u,TM.raised_fist,TM.raised_fist+.5)); $('shield').setAttribute('transform','translate(0 '+(u>=TM.raised_fist?-4*Math.abs(Math.sin(t*2)):0).toFixed(1)+')');
rise($('hon0'),p(u,TM.raised_fist+.4,TM.raised_fist+1)); rise($('hon1'),p(u,TM.raised_fist+6.6,TM.raised_fist+7.2));

rise($('uni'),p(u,TM.university,TM.university+.6)); rise($('hall'),p(u,TM.hallway-.6,TM.hallway));
const sh=(u>TM.bumper&&u<TM.bumper+.7)?6*Math.sin(t*40):0;
$('stu').setAttribute('transform','translate('+(200+580*p(u,TM.hallway,TM.hallway+2.6)+sh).toFixed(1)+' 0)'); $('stu').setAttribute('opacity',p(u,TM.hallway,TM.hallway+.3).toFixed(2));
$('str').setAttribute('transform','translate('+(1400-550*p(u,TM.bumper-1.4,TM.bumper)).toFixed(1)+' 0)'); $('str').setAttribute('opacity',p(u,TM.bumper-1.4,TM.bumper-1.1).toFixed(2));
$('bang').setAttribute('opacity',(u>=TM.bumper?1-p(u,TM.bumper+.4,TM.bumper+1.2):0).toFixed(2));
rise($('ins'),p(u,TM.bumper+.2,TM.bumper+.6)); rise($('secret'),p(u,TM.bumper+3.4,TM.bumper+4));

rise($('nP'),p(u,TM.cool_student,TM.cool_student+.5)); rise($('sP'),p(u,TM.angry_student,TM.angry_student+.5));
const bar=(id,f)=>{const h=304*f;$(id).setAttribute('y',(612-h).toFixed(1));$(id).setAttribute('height',h.toFixed(1))};
bar('gN',.18*p(u,TM.cool_student+.6,TM.cool_student+1.6)); bar('gA',.85*p(u,TM.angry_student+.6,TM.angry_student+1.8)); bar('gS',.9*p(u,TM.angry_student+2,TM.angry_student+3.2));
$('steam').setAttribute('transform','translate(0 '+(-4*Math.abs(Math.sin(t*5))).toFixed(1)+')');
rise($('refl'),p(u,TM.angry_student+6.5,TM.angry_student+7.1));

[0,1,2].forEach(k=>rise($('tr'+k),p(u,TM.family_tree+k*.7,TM.family_tree+k*.7+.5)));
rise($('youL'),p(u,TM.family_tree+1.4,TM.family_tree+1.9)); rise($('cent'),p(u,TM.family_tree+2.4,TM.family_tree+3));
rise($('pack'),p(u,TM.backpack,TM.backpack+.6)); rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5));
$('rays').setAttribute('opacity',(u>=TM.lightbulb?.55+.45*Math.sin(t*4):0).toFixed(2));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
const ch=p(u,TM.mirror+7.3,TM.mirror+8);
$('mLoss').setAttribute('opacity',(p(u,TM.mirror,TM.mirror+.6)*(1-ch)).toFixed(2)); $('mGain').setAttribute('opacity',ch.toFixed(2));
rise($('keep'),ch);