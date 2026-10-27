$('cloud0').setAttribute('opacity',p(u,TM.sleeper,TM.sleeper+1.2));
DL.forEach((l,i)=>{const a=TM.sleeper+1.2+i*.7;l.setAttribute('opacity',p(u,a,a+.5));l.style.stroke=u>=TM.sleeper+7.4?'var(--gain)':'var(--muted)'});
$('zz').setAttribute('transform','translate(0 '+(-10*Math.abs(Math.sin(t*1.2))).toFixed(1)+')');

rise($('baby'),p(u,TM.newborn,TM.newborn+.5)); rise($('mind'),p(u,TM.newborn+1.8,TM.newborn+2.4));
ADS.forEach((g,i)=>rise(g,p(u,TM.adults+i*.4,TM.adults+i*.4+.5)));
BB.forEach((g,i)=>rise(g,p(u,TM.speech_bubble+i*.6,TM.speech_bubble+i*.6+.4)));
DT.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.speech_bubble+1+i*.2,TM.speech_bubble+1.3+i*.2)));

rise($('tree'),p(u,TM.word_tree,TM.word_tree+.5)); rise($('card'),p(u,TM.word_tree+1,TM.word_tree+1.5)); rise($('who'),p(u,TM.word_tree+3,TM.word_tree+3.5));
rise($('ppl'),p(u,TM.nod,TM.nod+.5)); $('says').setAttribute('opacity',p(u,TM.nod+.8,TM.nod+1.3));
PP.forEach(([g,x],i)=>g.setAttribute('transform','translate(0 '+(u>=TM.nod?6*Math.abs(Math.sin(t*3+i*.6)):0).toFixed(1)+')'));
rise($('agree'),p(u,TM.nod+3.8,TM.nod+4.4));

rise($('dog'),p(u,TM.dog_treat,TM.dog_treat+.5)); $('bone').setAttribute('transform','translate(495 '+(395-12*Math.abs(Math.sin(t*3))).toFixed(1)+')');
rise($('child'),p(u,TM.dog_treat+1.2,TM.dog_treat+1.7)); rise($('good'),p(u,TM.gold_star,TM.gold_star+.5));
rise($('frown'),p(u,TM.frown,TM.frown+.5)); rise($('dom'),p(u,TM.frown+4.6,TM.frown+5.2));

rise($('real'),p(u,TM.mask,TM.mask+.5)); TK.forEach((g,i)=>rise(g,p(u,TM.mask+.8+i*.4,TM.mask+1.2+i*.4)));
const mq=p(u,TM.mask+4.6,TM.mask+5.4); $('maskg').setAttribute('transform','translate('+(420*(1-mq)).toFixed(1)+' 0)'); $('maskg').setAttribute('opacity',mq);
rise($('mlabel'),p(u,TM.mask+5,TM.mask+5.5)); rise($('tcloud'),p(u,TM.thought_cloud,TM.thought_cloud+.6)); rise($('fear'),p(u,TM.thought_cloud+1.4,TM.thought_cloud+2));

PL.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.rule_book+i*.3,TM.rule_book+i*.3+.3)));
rise($('arrow5'),p(u,TM.rule_book+3.6,TM.rule_book+4)); rise($('book'),p(u,TM.rule_book+4,TM.rule_book+4.6));
W5.forEach((w,i)=>{const a=TM.rule_book+7+((i%3)*2+(i<3?0:1))*.5;w.setAttribute('opacity',p(u,a,a+.4))});
const lk=p(u,TM.lock,TM.lock+.6); $('lock5').setAttribute('opacity',lk); $('lock5').setAttribute('transform','translate(0 '+(-60*(1-lk)).toFixed(1)+')');
rise($('follow'),p(u,TM.lock+.6,TM.lock+1.2));

rise($('globe6'),p(u,TM.globe,TM.globe+.6));
['r0','r1','r2'].forEach((id,i)=>rise($(id),p(u,TM.globe+4.2+i*.6,TM.globe+4.7+i*.6)));
rise($('arr6'),p(u,TM.globe+6,TM.globe+6.5));
CR.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.crowd+i*.08,TM.crowd+i*.08+.3)));
$('dring').setAttribute('opacity',p(u,TM.crowd+1,TM.crowd+1.8)); rise($('notice'),p(u,TM.crowd+4.1,TM.crowd+4.7));

rise($('lock7'),p(u,TM.key,TM.key+.5));
const kk=p(u,TM.key+2.1,TM.key+3.3); $('keyg').setAttribute('transform','translate('+(270+122*kk).toFixed(1)+' 535)');
const op=p(u,TM.key+3.3,TM.key+3.8);
$('shk').setAttribute('d','M350 490V'+(420-40*op).toFixed(1)+'a50 50 0 0 1 100 0V'+(490-60*op).toFixed(1));
$('lbody').style.fill=op>.5?'var(--gain)':'var(--loss)';
rise($('undo'),p(u,TM.key+3.6,TM.key+4.2));
rise($('paper'),p(u,TM.pen_paper,TM.pen_paper+.5));
const kp=cl(lin(u,TM.pen_paper+.6,TM.pen_paper+4.4))*3, row=Math.min(2,Math.floor(kp)), f=kp-row;
$('pen').setAttribute('transform','translate('+(850+350*f).toFixed(1)+' '+(374+row*90)+')');
const aw=u>=TM.pen_paper+5;
RW.forEach(([ln,ck],i)=>{ln.setAttribute('opacity',cl((kp-i)*1.5).toFixed(2)); ln.style.stroke=aw?'var(--gain)':'var(--muted)'; ln.setAttribute('stroke-dasharray',aw?'none':'4 14'); ck.setAttribute('opacity',aw?1:0)});
rise($('aware'),p(u,TM.pen_paper+5,TM.pen_paper+5.6));

rise($('mir'),p(u,TM.mirror,TM.mirror+.6)); rise($('q0'),p(u,TM.mirror+.3,TM.mirror+.8));
rise($('q1'),p(u,TM.mirror+5.8,TM.mirror+6.3)); rise($('q2'),p(u,TM.mirror+6.3,TM.mirror+6.8)); rise($('q3'),p(u,TM.mirror+6.8,TM.mirror+7.3));
$('shine').setAttribute('opacity',(.3+.6*Math.abs(Math.sin(t*1.5))).toFixed(2));