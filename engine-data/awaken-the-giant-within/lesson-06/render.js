N0(-20+200*(1-p(t,.3,2.5))+6*Math.sin(t*1.4)); rise($('ttag'),p(u,TM.title_card+5.4,TM.title_card+6));

N1(50+300*(1-p(u,TM.compass,TM.compass+1.6))+3*Math.sin(t*2));
rise($('tow'),p(u,TM.compass+4.3,TM.compass+4.8)); PG.forEach((g,i)=>{const a=TM.compass+4.6+i*.6;rise(g,p(u,a,a+.4))});
rise($('awy'),p(u,TM.warning_sign,TM.warning_sign+.5)); PA.forEach((g,i)=>{const a=TM.warning_sign+.6+i*.6;rise(g,p(u,a,a+.4))});

rise($('lad'),p(u,TM.ladder,TM.ladder+.6)); rise($('offer'),p(u,TM.two_people,TM.two_people+.5)); rise($('pp'),p(u,TM.two_people+.5,TM.two_people+1));
[3.8,7.5].forEach((d,k)=>{const on=u>=TM.two_people+d,b=LB[k][0];b[0].setAttribute('fill',on?'var(--gain)':'var(--stage)');b[0].setAttribute('stroke',on?'var(--gain)':'var(--ink)');b[1].style.fill=on?'var(--on-gain)':'';rise($('dec'+k),p(u,TM.two_people+d+.3,TM.two_people+d+.8))});
PP[0].setAttribute('fill',u>=TM.two_people+3.8?'var(--gain)':'var(--ink)');
rise($('same'),p(u,TM.two_people+11.3,TM.two_people+11.9));

rise($('rb'),p(u,TM.rulebook,TM.rulebook+.6)); rise($('sb'),p(u,TM.scoreboard,TM.scoreboard+.6));
const met=u>=TM.scoreboard+1.2&&Math.sin(t*1.6)>0; $('met').textContent=met?'YES':'NO'; $('lamp').setAttribute('fill',met?'var(--gain)':'var(--muted)');
rise($('sbt'),p(u,TM.scoreboard+1.5,TM.scoreboard+2.1));

rise($('mic'),p(u,TM.microphone,TM.microphone+.6)); ['w0','w1'].forEach((w,i)=>$(w).setAttribute('opacity',u>=TM.microphone?(.5+.5*Math.sin(t*4-i*1.2)).toFixed(2):0));
rise($('rlab'),p(u,TM.long_list,TM.long_list+.4)); ROWS.forEach((g,i)=>{const a=TM.long_list+.3+i*.35;rise(g,p(u,a,a+.3))});
rise($('allc'),p(u,TM.long_list+3.4,TM.long_list+3.9)); rise($('res'),p(u,TM.long_list+6.2,TM.long_list+6.8));

rise($('tab'),p(u,TM.broken_rule,TM.broken_rule+.5));
const fix=p(u,TM.couple+7.4,TM.couple+8.2), brk=p(u,TM.broken_rule+.6,TM.broken_rule+1.3)*(1-fix);
$('h0').setAttribute('transform',`translate(${(-30*brk).toFixed(1)} ${(20*brk).toFixed(1)}) rotate(${(-10*brk).toFixed(1)} 640 380)`);
$('h1').setAttribute('transform',`translate(${(30*brk).toFixed(1)} ${(20*brk).toFixed(1)}) rotate(${(10*brk).toFixed(1)} 960 380)`);
['hp0','hp1'].forEach(h=>$(h).setAttribute('fill',fix>.5?'var(--gain)':'var(--loss)'));
rise($('cp'),p(u,TM.couple,TM.couple+.6)); $('qm').setAttribute('opacity',(p(u,TM.couple+1,TM.couple+1.5)*(1-p(u,TM.couple+7,TM.couple+7.5))).toFixed(2));
rise($('sh'),p(u,TM.couple+7,TM.couple+7.5)); rise($('bcard'),p(u,TM.couple+7.6,TM.couple+8.1)); rise($('sht'),p(u,TM.couple+7.4,TM.couple+8));

rise($('rc'),p(u,TM.pencil,TM.pencil+.5)); $('stk').setAttribute('x2',(140+380*p(u,TM.pencil+.8,TM.pencil+1.6)).toFixed(1));
const wr=p(u,TM.pencil+1.8,TM.pencil+4); $('nb').setAttribute('width',(240*wr).toFixed(1)); P1.setAttribute('transform',`translate(${(150+240*wr).toFixed(1)} 486)`); P1.setAttribute('opacity',u>=TM.pencil+1.6?1:0);
rise($('dg'),p(u,TM.open_door,TM.open_door+.5));
LV.forEach(([x,l],i)=>{const o=p(u,TM.open_door+.4+i*.25,TM.open_door+.9+i*.25),w=100-60*o,k=16*o;l.setAttribute('points',`${x},280 ${x+w},${280+k} ${x+w},${400-k} ${x},400`)});
rise($('db'),p(u,TM.open_door+2.5,TM.open_door+3));
rise($('sr'),p(u,TM.sunrise,TM.sunrise+.5)); $('sun').setAttribute('transform',`translate(0 ${(50*(1-p(u,TM.sunrise,TM.sunrise+1.5))).toFixed(1)})`);
rise($('ex0'),p(u,TM.sunrise+2,TM.sunrise+2.5)); rise($('ex1'),p(u,TM.sunrise+4,TM.sunrise+4.5));

rise($('wh'),p(u,TM.steering,TM.steering+.5)); $('whr').setAttribute('transform',`rotate(${(14*Math.sin(t*1.2)).toFixed(1)} 340 430)`);
rise($('ext'),p(u,TM.steering+1.2,TM.steering+1.7)); $('sl').setAttribute('opacity',p(u,TM.steering+2.4,TM.steering+2.9).toFixed(2));
rise($('wk'),p(u,TM.steering+5.8,TM.steering+6.3)); DAY.forEach((d,i)=>d.setAttribute('fill',u>=TM.steering+6.2+i*.35?'var(--gain)':'var(--stage)'));
rise($('pf'),p(u,TM.steering+10,TM.steering+10.6));

rise($('bp'),p(u,TM.blank_page,TM.blank_page+.5)); rise($('pk'),p(u,TM.blank_page+.3,TM.blank_page+.8));
['qa','qb','qc'].forEach((q,i)=>{const a=TM.blank_page+5.8+i*.4;rise($(q),p(u,a,a+.5))});
const w2=p(u,TM.blank_page+6.4,TM.blank_page+8); $('nl').setAttribute('width',(150*w2).toFixed(1)); P2.setAttribute('transform',`translate(${(1235+150*w2).toFixed(1)} 694)`);
rise($('ez'),p(u,TM.blank_page+7,TM.blank_page+7.5));