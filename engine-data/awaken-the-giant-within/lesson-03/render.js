const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
R('t0',TM.title,.8); $('t0r').setAttribute('transform','rotate('+(2.5*Math.sin(t*2.2)).toFixed(2)+' 1270 612)'); R('sk0',TM.title+4.6);

R('sh1',TM.tabletop); R('tt1',TM.tabletop); R('gh1',TM.tabletop+1.5,.8); R('th1',TM.thought); R('wb1',TM.thought+1.5);
const w1=p(u,TM.thought,TM.thought+1.5);
$('tt1r').setAttribute('transform','translate(0 '+(10*Math.sin(t*1.6)).toFixed(1)+') rotate('+((1+4*w1)*Math.sin(t*2.6)).toFixed(2)+' 800 445)');

L2.forEach((L,i)=>grow(L,p(u,TM.table_legs+i*.5,TM.table_legs+i*.5+.6)));
R('rf2',TM.table_legs+3.8); R('pt2',TM.party); L2[3].el.setAttribute('class',u>=TM.party?'s-gain':'s-ink'); R('ok2',TM.party+3.4);

R('fa3',TM.brothers); R('so3',TM.brothers+.8); R('ce3',TM.prison_cell); R('lb3a',TM.prison_cell+.6);
R('ho3',TM.family_home); R('fm3',TM.family_home+.6); R('lb3b',TM.family_home+.6);
S3L.forEach(e=>e.setAttribute('class',u>=TM.prison_cell?'loss':'ink')); S3R.forEach(e=>e.setAttribute('class',u>=TM.family_home?'gain':'ink'));

R('q4a',TM.shared_answer); R('q4b',TM.shared_answer+5); R('tb4',TM.two_tables);
L4.forEach((L,i)=>{const a=TM.two_tables+.3+(i%4)*.2; grow(L,p(u,a,a+.5))});
R('f4a',TM.two_tables+3.8); R('f4b',TM.two_tables+7.6); R('m4a',TM.two_tables+13); R('m4b',TM.two_tables+15.6);

const T5=[TM.question_mark,TM.question_mark+5.8,TM.wobbly_table,TM.wobbly_table+.8]; let n5=0;
T5.forEach((a,i)=>{const c=u>=a; if(c)n5++; L5[i].el.setAttribute('class',c?'s-muted':'s-ink'); L5[i].el.setAttribute('stroke-dasharray',c?'18 14':'none')});
R('sw5',TM.saw); $('sw5m').setAttribute('transform','translate('+(L5[Math.min(n5,3)].x-75+22*Math.sin(t*10)).toFixed(1)+' 520)');
R('q5a',TM.question_mark); R('q5b',TM.question_mark+5.8); R('wb5',TM.wobbly_table+.5);
$('tb5').setAttribute('transform','rotate('+(3*p(u,TM.wobbly_table,TM.wobbly_table+1)*Math.sin(t*3)).toFixed(2)+' 560 648)');

R('gh6',TM.new_legs);
[TM.story_books,TM.story_books+2,TM.story_books+4.6,TM.small_wins].forEach((a,i)=>{R('r6'+i,a); grow(N6[i],p(u,a,a+.8))});

// conviction: legs pile up densely until the table is solid
L7.forEach((L,i)=>{const a=TM.conviction+i*.15; grow(L,p(u,a,a+.4))});
R('lg7',TM.conviction+.6);
const h7=p(u,TM.conviction+3.6,TM.conviction+4.6);
$('fl7').setAttribute('opacity',(.35*h7).toFixed(2));
$('tp7').setAttribute('class',u>=TM.conviction+3.6?'gain':'ink');
R('bk7',TM.conviction+3.6,.8); R('st7',TM.conviction+6.2); R('cv7',TM.conviction+6.6);
const k7=4*p(u,TM.conviction+6.6,TM.conviction+10);
$('pr7').setAttribute('transform','translate('+(910+100*k7).toFixed(1)+' '+(640-75*k7).toFixed(1)+')');

R('qa',TM.your_table); R('qb',TM.your_table+.4); R('g8',TM.your_table+.8); R('qc',TM.your_table+3); R('ql8',TM.your_table+3.5);
const c8=u>=TM.your_table+4;
L8.forEach((L,i)=>{L.el.setAttribute('class',c8?(i%2?'s-muted':'s-gain'):'s-ink'); L.el.setAttribute('stroke-dasharray',c8&&i%2?'10 14':'none')});