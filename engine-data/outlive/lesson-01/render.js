$('hand').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 1300 400)');
segs.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.old_clock+i*.15,TM.old_clock+i*.15+.3)));
rise($('hike'),p(u,TM.old_clock+3.2,TM.old_clock+3.7)); rise($('chair'),p(u,TM.old_clock+4.2,TM.old_clock+4.7));

rise($('tl'),p(u,TM.timeline,TM.timeline+.5));
rise($('lsl'),p(u,TM.lifespan_bar,TM.lifespan_bar+.4)); $('lsb').setAttribute('width',(1280*p(u,TM.lifespan_bar,TM.lifespan_bar+1.4)).toFixed(1));
rise($('hsl'),p(u,TM.healthspan_bar,TM.healthspan_bar+.4)); $('hsb').setAttribute('width',(940*p(u,TM.healthspan_bar,TM.healthspan_bar+1.4)).toFixed(1));
$('hsr').setAttribute('opacity',p(u,TM.healthspan_bar+1.4,TM.healthspan_bar+1.9)); rise($('hst'),p(u,TM.healthspan_bar+3,TM.healthspan_bar+3.6));

rise($('seg'),p(u,TM.last_segment,TM.last_segment+.5)); draw($('decl'),p(u,TM.walker-4,TM.walker-2.5));
rise($('cw'),p(u,TM.walker,TM.walker+.5)); rise($('cf'),p(u,TM.walker+1.5,TM.walker+2)); rise($('qm'),p(u,TM.question_mark,TM.question_mark+.6));

rise($('arm'),p(u,TM.muscle_icon,TM.muscle_icon+.5));
BL.forEach((b,i)=>{const a=TM.muscle_icon+1+i*.4; rise(b[0],p(u,a,a+.4));
  const k=p(u,a+.8,a+2.4), w=300-(300-b[3])*k;
  b[1].setAttribute('width',w.toFixed(1)); b[2].setAttribute('x',(300+w).toFixed(1)); b[2].setAttribute('width',(300-w).toFixed(1)); b[2].setAttribute('opacity',k.toFixed(2))});
rise($('stg'),p(u,TM.stairs,TM.stairs+.5));
const sh=40+60*p(u,TM.stairs+.6,TM.stairs+4.5); let sd='M820 780'; for(let i=0;i<5;i++)sd+='v'+(-sh).toFixed(1)+'h120'; $('stp').setAttribute('d',sd+'V780Z');

rise($('brn'),p(u,TM.brain,TM.brain+.5));
[0,1,2].forEach(i=>rise($('ml'+i),p(u,TM.brain+2.5+i*.4,TM.brain+2.9+i*.4))); rise($('ml3'),p(u,TM.brain+4,TM.brain+4.5));
ND.forEach((c,i)=>{const a=TM.brain+3+((i*5)%14)*.25; c.setAttribute('opacity',(1-.8*p(u,a,a+.6)).toFixed(2))});
NE.forEach(e=>e.setAttribute('opacity',(1-.6*p(u,TM.brain+3,TM.puzzle)).toFixed(2)));
rise($('pz'),p(u,TM.puzzle,TM.puzzle+.5));
const fk=p(u,TM.puzzle+1.2,TM.puzzle+2.6); PZ[3].setAttribute('transform','translate('+(60*fk).toFixed(1)+' '+(60*fk).toFixed(1)+')'); PZ[3].setAttribute('opacity',(1-.35*fk).toFixed(2));
rise($('pzt'),p(u,TM.puzzle+1.5,TM.puzzle+2));

rise($('face'),p(u,TM.smiling_face,TM.smiling_face+.5));
const sm=p(u,TM.smiling_face+.3,TM.smiling_face+1.6); $('smile').setAttribute('d','M260 515Q330 '+(515+70*sm).toFixed(1)+' 400 515');
rise($('pl0'),p(u,TM.smiling_face+2.5,TM.smiling_face+3)); rise($('pl1'),p(u,TM.smiling_face+3.3,TM.smiling_face+3.8));
rise($('frd'),p(u,TM.friends,TM.friends+.5)); rise($('joy'),p(u,TM.friends+1,TM.friends+1.6));

rise($('ax'),p(u,TM.graph_axes,TM.graph_axes+.5));
draw($('cg'),p(u,TM.gray_curve,TM.gray_curve+2.5)); rise($('lg'),p(u,TM.gray_curve+2,TM.gray_curve+2.5));
draw($('cn'),p(u,TM.green_curve,TM.green_curve+2.5)); rise($('ln'),p(u,TM.green_curve+1.5,TM.green_curve+2));
rise($('gapg'),p(u,TM.green_curve+6.5,TM.green_curve+7.1)); rise($('gl'),p(u,TM.green_curve+7,TM.green_curve+7.6));

rise($('tl2'),p(u,TM.young_adult,TM.young_adult+.5)); rise($('ya'),p(u,TM.young_adult+.3,TM.young_adult+.8));
BK.forEach((b,i)=>{const a=TM.habit_blocks+i*.5; rise(b,p(u,a,a+.4))});
rise($('carry'),p(u,TM.habit_blocks+2.5,TM.habit_blocks+3)); rise($('old'),p(u,TM.habit_blocks+2.8,TM.habit_blocks+3.3));
rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); $('ring2').setAttribute('r',(22+3*Math.sin(t*4)).toFixed(1));

rise($('qa'),p(u,TM.notebook,TM.notebook+.5)); rise($('qb'),p(u,TM.notebook+.4,TM.notebook+.9));
rise($('qc'),p(u,TM.notebook+.8,TM.notebook+1.3)); rise($('qd'),p(u,TM.notebook+1.2,TM.notebook+1.7));
rise($('nb'),p(u,TM.notebook+.5,TM.notebook+1));
[0,1,2].forEach(i=>draw($('nl'+i),p(u,TM.notebook+2+i*1.2,TM.notebook+2.8+i*1.2)));
rise($('keep'),p(u,TM.notebook+7,TM.notebook+7.6));