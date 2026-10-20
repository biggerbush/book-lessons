rise($('bub0'),p(u,TM.speech_bubble,TM.speech_bubble+.6));
$('glow0').setAttribute('opacity',(p(u,TM.speech_bubble+7.4,TM.speech_bubble+8.4)*(.7+.3*Math.sin(t*2))).toFixed(2));

rise($('dr1'),p(u,TM.dreamer,TM.dreamer+.5)); rise($('fr1'),p(u,TM.friends,TM.friends+.5));
const pr=p(u,TM.friends+3.4,TM.friends+4); rise($('pr1'),pr); $('glow1').setAttribute('opacity',(pr*(.7+.3*Math.sin(t*2))).toFixed(2));
rise($('bt1'),p(u,TM.battery,TM.battery+.5));
const lv=1-.85*p(u,TM.battery+.8,TM.battery+5); $('bf1').setAttribute('width',(308*lv).toFixed(1)); $('bf1').style.fill=lv<.4?'var(--loss)':'var(--gain)';
rise($('bt1t'),p(u,TM.battery+1.2,TM.battery+1.8));

rise($('el2'),p(u,TM.ellison,TM.ellison+.5)); rise($('nv2'),p(u,TM.novel_cover,TM.novel_cover+.5));
rise($('aw2'),p(u,TM.award,TM.award+.5)); rise($('rd2'),p(u,TM.award+2,TM.award+2.6));

rise($('cal3'),p(u,TM.calendar,TM.calendar+.5));
const kc=u<TM.calendar+.5?0:Math.floor((u-TM.calendar-.5)*3)%13; CC.forEach((c,i)=>c.setAttribute('fill',i<kc?'var(--gain)':'var(--stage)'));
BB.forEach((b,i)=>rise(b,p(u,TM.interview+i*.8,TM.interview+i*.8+.4)));
rise($('ms3'),p(u,TM.manuscript,TM.manuscript+.5)); rise($('st3'),p(u,TM.manuscript+1,TM.manuscript+1.3));
rise($('tk3'),p(u,TM.manuscript+3.4,TM.manuscript+4));

rise($('sc4'),p(u,TM.scientist,TM.scientist+.5)); rise($('gc4'),p(u,TM.goal_card,TM.goal_card+.5));
rise($('ar4'),p(u,TM.goal_card+1.5,TM.goal_card+2)); rise($('br4'),p(u,TM.brain,TM.brain+.5));
$('mf4').setAttribute('width',(156*p(u,TM.brain+1,TM.brain+2.2)).toFixed(1)); $('st4').setAttribute('opacity',(.6+.4*Math.sin(t*3)).toFixed(2));

rise($('tk5'),p(u,TM.water_tank,TM.water_tank+.5));
const lk=TM.water_tank+3.8, L=Math.max(.06,.92-.6*p(u,lk,lk+4.5)-.26*p(u,TM.empty_tank,TM.empty_tank+1.5));
$('wt5').setAttribute('y',(692-424*L).toFixed(1)); $('wt5').setAttribute('height',(424*L).toFixed(1));
const dv=p(u,lk,lk+.5); DP.forEach((d,i)=>{const k=(t*.9+i/3)%1; d.setAttribute('cx',(548+30*k).toFixed(1)); d.setAttribute('cy',(640+140*k*k).toFixed(1)); d.setAttribute('opacity',(dv*(1-k)).toFixed(2))});
TB.forEach((b,i)=>rise(b,p(u,lk+i,lk+i+.4)));
rise($('et5'),p(u,TM.empty_tank+1,TM.empty_tank+1.5)); rise($('dk5'),p(u,TM.empty_tank,TM.empty_tank+.5)); rise($('nf5'),p(u,TM.empty_tank+5.4,TM.empty_tank+6));

rise($('dr6'),p(u,TM.closed_door,TM.closed_door+.5)); rise($('wq6'),p(u,TM.closed_door+1.8,TM.closed_door+2.3));
rise($('dk6'),p(u,TM.desk,TM.desk+.5)); $('gl6').setAttribute('opacity',(p(u,TM.desk,TM.desk+.8)*(.7+.3*Math.sin(t*2.5))).toFixed(2));
PG.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.desk+1+i*.5,TM.desk+1.3+i*.5)));
rise($('fn6'),p(u,TM.finished,TM.finished+.5)); rise($('pl6'),p(u,TM.finished+1,TM.finished+1.6));

rise($('nb7'),p(u,TM.notebook,TM.notebook+.5));
NL.forEach((l,i)=>l.setAttribute('d','M190 '+(320+i*55)+'h'+(NW[i]*p(u,TM.notebook+1+i*.6,TM.notebook+1.5+i*.6)+.01).toFixed(1)));
rise($('tm7'),p(u,TM.timer,TM.timer+.5));
const an=2*Math.PI*cl(p(u,TM.timer+.5,TM.timer+5),0,.999); $('ar7').setAttribute('d','M820 300A160 160 0 '+(an>Math.PI?1:0)+' 1 '+(820+160*Math.sin(an)).toFixed(1)+' '+(460-160*Math.cos(an)).toFixed(1));
rise($('sh7'),p(u,TM.timer+5.3,TM.timer+5.8)); rise($('tl7'),p(u,TM.timer+5.5,TM.timer+6.1));

rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.4,TM.question+.9)); rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('ql8'),p(u,TM.question+4.5,TM.question+5));
const sp=p(u,TM.question+5.2,TM.question+6); $('dot8').setAttribute('cx',(1215+70*sp).toFixed(1)); $('dot8').setAttribute('cy',(782-60*sp-30*Math.sin(Math.PI*sp)).toFixed(1));